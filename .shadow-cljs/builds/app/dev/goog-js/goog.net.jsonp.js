["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/net/jsonp.js"],"~:js","goog.provide(\"goog.net.Jsonp\");\ngoog.require(\"goog.html.TrustedResourceUrl\");\ngoog.require(\"goog.net.jsloader\");\ngoog.require(\"goog.object\");\ngoog.net.Jsonp = function(uri, opt_callbackParamName) {\n  this.uri_ = uri;\n  this.callbackParamName_ = opt_callbackParamName ? opt_callbackParamName : \"callback\";\n  this.timeout_ = 5000;\n  this.nonce_ = \"\";\n};\ngoog.net.Jsonp.CALLBACKS = \"_callbacks_\";\ngoog.net.Jsonp.scriptCounter_ = 0;\ngoog.net.Jsonp.getCallbackId_ = function(id) {\n  return goog.net.Jsonp.CALLBACKS + \"__\" + id;\n};\ngoog.net.Jsonp.prototype.setRequestTimeout = function(timeout) {\n  this.timeout_ = timeout;\n};\ngoog.net.Jsonp.prototype.getRequestTimeout = function() {\n  return this.timeout_;\n};\ngoog.net.Jsonp.prototype.setNonce = function(nonce) {\n  this.nonce_ = nonce;\n};\ngoog.net.Jsonp.prototype.send = function(opt_payload, opt_replyCallback, opt_errorCallback, opt_callbackParamValue) {\n  const payload = opt_payload ? goog.object.clone(opt_payload) : {};\n  const id = opt_callbackParamValue || \"_\" + (goog.net.Jsonp.scriptCounter_++).toString(36) + Date.now().toString(36);\n  const callbackId = goog.net.Jsonp.getCallbackId_(id);\n  if (opt_replyCallback) {\n    const reply = goog.net.Jsonp.newReplyHandler_(id, opt_replyCallback);\n    goog.global[callbackId] = reply;\n    payload[this.callbackParamName_] = callbackId;\n  }\n  const options = {timeout:this.timeout_, cleanupWhenDone:true};\n  if (this.nonce_) {\n    options.attributes = {\"nonce\":this.nonce_};\n  }\n  const uri = this.uri_.cloneWithParams(payload);\n  const deferred = goog.net.jsloader.safeLoad(uri, options);\n  const error = goog.net.Jsonp.newErrorHandler_(id, payload, opt_errorCallback);\n  deferred.addErrback(error);\n  return {id_:id, deferred_:deferred};\n};\ngoog.net.Jsonp.prototype.cancel = function(request) {\n  if (request) {\n    if (request.deferred_) {\n      request.deferred_.cancel();\n    }\n    if (request.id_) {\n      goog.net.Jsonp.cleanup_(request.id_, false);\n    }\n  }\n};\ngoog.net.Jsonp.newErrorHandler_ = function(id, payload, opt_errorCallback) {\n  return function() {\n    goog.net.Jsonp.cleanup_(id, false);\n    if (opt_errorCallback) {\n      opt_errorCallback(payload);\n    }\n  };\n};\ngoog.net.Jsonp.newReplyHandler_ = function(id, replyCallback) {\n  const handler = function(var_args) {\n    goog.net.Jsonp.cleanup_(id, true);\n    replyCallback.apply(undefined, arguments);\n  };\n  return handler;\n};\ngoog.net.Jsonp.cleanup_ = function(id, deleteReplyHandler) {\n  const callbackId = goog.net.Jsonp.getCallbackId_(id);\n  if (goog.global[callbackId]) {\n    if (deleteReplyHandler) {\n      try {\n        delete goog.global[callbackId];\n      } catch (e) {\n        goog.global[callbackId] = undefined;\n      }\n    } else {\n      goog.global[callbackId] = goog.nullFunction;\n    }\n  }\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n// The original file lives here: http://go/cross_domain_channel.js\n\n/**\n * @fileoverview Implements a cross-domain communication channel. A\n * typical web page is prevented by browser security from sending\n * request, such as a XMLHttpRequest, to other servers than the ones\n * from which it came. The Jsonp class provides a workaround by\n * using dynamically generated script tags. Typical usage:.\n *\n * const trustedUri = goog.html.TrustedResourceUrl.fromConstant(\n *     goog.string.Const.from('https://example.com/servlet'));\n * const jsonp = new goog.net.Jsonp(trustedUri);\n * const payload = {'foo': 1, 'bar': true};\n * jsonp.send(payload, function(reply) { alert(reply) });\n *\n * This script works in all browsers that are currently supported by\n * the Google Maps API, which is IE 6.0+, Firefox 0.8+, Safari 1.2.4+,\n * Netscape 7.1+, Mozilla 1.4+, Opera 8.02+.\n */\n\ngoog.provide('goog.net.Jsonp');\n\ngoog.require('goog.html.TrustedResourceUrl');\ngoog.require('goog.net.jsloader');\ngoog.require('goog.object');\n\n// WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING\n//\n// This class allows us (Google) to send data from non-Google and thus\n// UNTRUSTED pages to our servers. Under NO CIRCUMSTANCES return\n// anything sensitive, such as session or cookie specific data. Return\n// only data that you want parties external to Google to have. Also\n// NEVER use this method to send data from web pages to untrusted\n// servers, or redirects to unknown servers (www.google.com/cache,\n// /q=xx&btnl, /url, www.googlepages.com, etc.)\n//\n// WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING\n\n\n\n/**\n * Creates a new cross domain channel that sends data to the specified\n * host URL. By default, if no reply arrives within 5s, the channel\n * assumes the call failed to complete successfully.\n *\n * @param {!goog.html.TrustedResourceUrl} uri The Uri of the server side code\n *     that receives data posted through this channel (e.g.,\n *     \"http://maps.google.com/maps/geo\").\n *\n * @param {string=} opt_callbackParamName The parameter name that is used to\n *     specify the callback. Defaults to \"callback\".\n *\n * @constructor\n * @final\n */\ngoog.net.Jsonp = function(uri, opt_callbackParamName) {\n  'use strict';\n  /**\n   * The uri_ object will be used to encode the payload that is sent to the\n   * server.\n   * @type {!goog.html.TrustedResourceUrl}\n   * @private\n   */\n  this.uri_ = uri;\n\n  /**\n   * This is the callback parameter name that is added to the uri.\n   * @type {string}\n   * @private\n   */\n  this.callbackParamName_ =\n      opt_callbackParamName ? opt_callbackParamName : 'callback';\n\n  /**\n   * The length of time, in milliseconds, this channel is prepared\n   * to wait for for a request to complete. The default value is 5 seconds.\n   * @type {number}\n   * @private\n   */\n  this.timeout_ = 5000;\n\n  /**\n   * The nonce to use in the dynamically generated script tags. This is used for\n   * allowing the script callbacks to execute when the page has an enforced\n   * Content Security Policy.\n   * @type {string}\n   * @private\n   */\n  this.nonce_ = '';\n};\n\n\n/**\n * The prefix for the callback name which will be stored on goog.global.\n */\ngoog.net.Jsonp.CALLBACKS = '_callbacks_';\n\n\n/**\n * Used to generate unique callback IDs. The counter must be global because\n * all channels share a common callback object.\n * @private\n */\ngoog.net.Jsonp.scriptCounter_ = 0;\n\n\n/**\n * Static private method which returns the global unique callback id.\n *\n * @param {string} id The id of the script node.\n * @return {string} A global unique id used to store callback on goog.global\n *     object.\n * @private\n */\ngoog.net.Jsonp.getCallbackId_ = function(id) {\n  'use strict';\n  return goog.net.Jsonp.CALLBACKS + '__' + id;\n};\n\n\n/**\n * Sets the length of time, in milliseconds, this channel is prepared\n * to wait for for a request to complete. If the call is not competed\n * within the set time span, it is assumed to have failed. To wait\n * indefinitely for a request to complete set the timout to a negative\n * number.\n *\n * @param {number} timeout The length of time before calls are\n * interrupted.\n */\ngoog.net.Jsonp.prototype.setRequestTimeout = function(timeout) {\n  'use strict';\n  this.timeout_ = timeout;\n};\n\n\n/**\n * Returns the current timeout value, in milliseconds.\n *\n * @return {number} The timeout value.\n */\ngoog.net.Jsonp.prototype.getRequestTimeout = function() {\n  'use strict';\n  return this.timeout_;\n};\n\n\n/**\n * Sets the nonce value for CSP. This nonce value will be added to any created\n * script elements and must match the nonce provided in the\n * Content-Security-Policy header sent by the server for the callback to pass\n * CSP enforcement.\n *\n * @param {string} nonce The CSP nonce value.\n */\ngoog.net.Jsonp.prototype.setNonce = function(nonce) {\n  'use strict';\n  this.nonce_ = nonce;\n};\n\n\n/**\n * Sends the given payload to the URL specified at the construction\n * time. The reply is delivered to the given replyCallback. If the\n * errorCallback is specified and the reply does not arrive within the\n * timeout period set on this channel, the errorCallback is invoked\n * with the original payload.\n *\n * If no reply callback is specified, then the response is expected to\n * consist of calls to globally registered functions. No &callback=\n * URL parameter will be sent in the request, and the script element\n * will be cleaned up after the timeout.\n *\n * @param {Object=} opt_payload Name-value pairs.  If given, these will be\n *     added as parameters to the supplied URI as GET parameters to the\n *     given server URI.\n *\n * @param {Function=} opt_replyCallback A function expecting one\n *     argument, called when the reply arrives, with the response data.\n *\n * @param {Function=} opt_errorCallback A function expecting one\n *     argument, called on timeout, with the payload (if given), otherwise\n *     null.\n *\n * @param {string=} opt_callbackParamValue Value to be used as the\n *     parameter value for the callback parameter (callbackParamName).\n *     To be used when the value needs to be fixed by the client for a\n *     particular request, to make use of the cached responses for the request.\n *     NOTE: If multiple requests are made with the same\n *     opt_callbackParamValue, only the last call will work whenever the\n *     response comes back.\n *\n * @return {!Object} A request descriptor that may be used to cancel this\n *     transmission, or null, if the message may not be cancelled.\n */\ngoog.net.Jsonp.prototype.send = function(\n    opt_payload, opt_replyCallback, opt_errorCallback, opt_callbackParamValue) {\n  'use strict';\n  const payload = opt_payload ? goog.object.clone(opt_payload) : {};\n\n  const id = opt_callbackParamValue ||\n      '_' + (goog.net.Jsonp.scriptCounter_++).toString(36) +\n          Date.now().toString(36);\n  const callbackId = goog.net.Jsonp.getCallbackId_(id);\n\n  if (opt_replyCallback) {\n    const reply = goog.net.Jsonp.newReplyHandler_(id, opt_replyCallback);\n    // Register the callback on goog.global to make it discoverable\n    // by jsonp response.\n    goog.global[callbackId] = reply;\n    payload[this.callbackParamName_] = callbackId;\n  }\n\n  const options = {timeout: this.timeout_, cleanupWhenDone: true};\n  if (this.nonce_) {\n    options.attributes = {'nonce': this.nonce_};\n  }\n\n  const uri = this.uri_.cloneWithParams(payload);\n\n  const deferred = goog.net.jsloader.safeLoad(uri, options);\n  const error = goog.net.Jsonp.newErrorHandler_(id, payload, opt_errorCallback);\n  deferred.addErrback(error);\n\n  return {id_: id, deferred_: deferred};\n};\n\n\n/**\n * Cancels a given request. The request must be exactly the object returned by\n * the send method.\n * @param {Object} request The request object returned by the send method.\n * @suppress {strictMissingProperties} Part of the go/strict_warnings_migration\n */\ngoog.net.Jsonp.prototype.cancel = function(request) {\n  'use strict';\n  if (request) {\n    if (request.deferred_) {\n      request.deferred_.cancel();\n    }\n    if (request.id_) {\n      goog.net.Jsonp.cleanup_(request.id_, false);\n    }\n  }\n};\n\n\n/**\n * Creates a timeout callback that calls the given timeoutCallback with the\n * original payload.\n *\n * @param {string} id The id of the script node.\n * @param {Object} payload The payload that was sent to the server.\n * @param {Function=} opt_errorCallback The function called on timeout.\n * @return {!Function} A zero argument function that handles callback duties.\n * @private\n */\ngoog.net.Jsonp.newErrorHandler_ = function(id, payload, opt_errorCallback) {\n  'use strict';\n  /**\n   * When we call across domains with a request, this function is the\n   * timeout handler. Once it's done executing the user-specified\n   * error-handler, it removes the script node and original function.\n   */\n  return function() {\n    'use strict';\n    goog.net.Jsonp.cleanup_(id, false);\n    if (opt_errorCallback) {\n      opt_errorCallback(payload);\n    }\n  };\n};\n\n\n/**\n * Creates a reply callback that calls the given replyCallback with data\n * returned by the server.\n *\n * @param {string} id The id of the script node.\n * @param {Function} replyCallback The function called on reply.\n * @return {!Function} A reply callback function.\n * @private\n */\ngoog.net.Jsonp.newReplyHandler_ = function(id, replyCallback) {\n  'use strict';\n  /**\n   * This function is the handler for the all-is-well response. It\n   * clears the error timeout handler, calls the user's handler, then\n   * removes the script node and itself.\n   *\n   * @param {...Object} var_args The response data sent from the server.\n   */\n  const handler = function(var_args) {\n    'use strict';\n    goog.net.Jsonp.cleanup_(id, true);\n    replyCallback.apply(undefined, arguments);\n  };\n  return handler;\n};\n\n\n/**\n * Removes the reply handler registered on goog.global object.\n *\n * @param {string} id The id of the script node to be removed.\n * @param {boolean} deleteReplyHandler If true, delete the reply handler\n *     instead of setting it to nullFunction (if we know the callback could\n *     never be called again).\n * @private\n */\ngoog.net.Jsonp.cleanup_ = function(id, deleteReplyHandler) {\n  'use strict';\n  const callbackId = goog.net.Jsonp.getCallbackId_(id);\n  if (goog.global[callbackId]) {\n    if (deleteReplyHandler) {\n      try {\n        delete goog.global[callbackId];\n      } catch (e) {\n        // NOTE: Workaround to delete property on 'window' in IE <= 8, see:\n        // http://stackoverflow.com/questions/1073414/deleting-a-window-property-in-ie\n        goog.global[callbackId] = undefined;\n      }\n    } else {\n      // Removing the script tag doesn't necessarily prevent the script\n      // from firing, so we make the callback a noop.\n      goog.global[callbackId] = goog.nullFunction;\n    }\n  }\n};\n\n\n// WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING\n//\n// This class allows us (Google) to send data from non-Google and thus\n// UNTRUSTED pages to our servers. Under NO CIRCUMSTANCES return\n// anything sensitive, such as session or cookie specific data. Return\n// only data that you want parties external to Google to have. Also\n// NEVER use this method to send data from web pages to untrusted\n// servers, or redirects to unknown servers (www.google.com/cache,\n// /q=xx&btnl, /url, www.googlepages.com, etc.)\n//\n// WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING\n","~:compiled-at",1685712174661,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.net.jsonp.js\",\n\"lineCount\":83,\n\"mappings\":\"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\",\n\"sources\":[\"goog/net/jsonp.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n// The original file lives here: http://go/cross_domain_channel.js\\n\\n/**\\n * @fileoverview Implements a cross-domain communication channel. A\\n * typical web page is prevented by browser security from sending\\n * request, such as a XMLHttpRequest, to other servers than the ones\\n * from which it came. The Jsonp class provides a workaround by\\n * using dynamically generated script tags. Typical usage:.\\n *\\n * const trustedUri = goog.html.TrustedResourceUrl.fromConstant(\\n *     goog.string.Const.from('https://example.com/servlet'));\\n * const jsonp = new goog.net.Jsonp(trustedUri);\\n * const payload = {'foo': 1, 'bar': true};\\n * jsonp.send(payload, function(reply) { alert(reply) });\\n *\\n * This script works in all browsers that are currently supported by\\n * the Google Maps API, which is IE 6.0+, Firefox 0.8+, Safari 1.2.4+,\\n * Netscape 7.1+, Mozilla 1.4+, Opera 8.02+.\\n */\\n\\ngoog.provide('goog.net.Jsonp');\\n\\ngoog.require('goog.html.TrustedResourceUrl');\\ngoog.require('goog.net.jsloader');\\ngoog.require('goog.object');\\n\\n// WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING\\n//\\n// This class allows us (Google) to send data from non-Google and thus\\n// UNTRUSTED pages to our servers. Under NO CIRCUMSTANCES return\\n// anything sensitive, such as session or cookie specific data. Return\\n// only data that you want parties external to Google to have. Also\\n// NEVER use this method to send data from web pages to untrusted\\n// servers, or redirects to unknown servers (www.google.com/cache,\\n// /q=xx&btnl, /url, www.googlepages.com, etc.)\\n//\\n// WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING\\n\\n\\n\\n/**\\n * Creates a new cross domain channel that sends data to the specified\\n * host URL. By default, if no reply arrives within 5s, the channel\\n * assumes the call failed to complete successfully.\\n *\\n * @param {!goog.html.TrustedResourceUrl} uri The Uri of the server side code\\n *     that receives data posted through this channel (e.g.,\\n *     \\\"http://maps.google.com/maps/geo\\\").\\n *\\n * @param {string=} opt_callbackParamName The parameter name that is used to\\n *     specify the callback. Defaults to \\\"callback\\\".\\n *\\n * @constructor\\n * @final\\n */\\ngoog.net.Jsonp = function(uri, opt_callbackParamName) {\\n  'use strict';\\n  /**\\n   * The uri_ object will be used to encode the payload that is sent to the\\n   * server.\\n   * @type {!goog.html.TrustedResourceUrl}\\n   * @private\\n   */\\n  this.uri_ = uri;\\n\\n  /**\\n   * This is the callback parameter name that is added to the uri.\\n   * @type {string}\\n   * @private\\n   */\\n  this.callbackParamName_ =\\n      opt_callbackParamName ? opt_callbackParamName : 'callback';\\n\\n  /**\\n   * The length of time, in milliseconds, this channel is prepared\\n   * to wait for for a request to complete. The default value is 5 seconds.\\n   * @type {number}\\n   * @private\\n   */\\n  this.timeout_ = 5000;\\n\\n  /**\\n   * The nonce to use in the dynamically generated script tags. This is used for\\n   * allowing the script callbacks to execute when the page has an enforced\\n   * Content Security Policy.\\n   * @type {string}\\n   * @private\\n   */\\n  this.nonce_ = '';\\n};\\n\\n\\n/**\\n * The prefix for the callback name which will be stored on goog.global.\\n */\\ngoog.net.Jsonp.CALLBACKS = '_callbacks_';\\n\\n\\n/**\\n * Used to generate unique callback IDs. The counter must be global because\\n * all channels share a common callback object.\\n * @private\\n */\\ngoog.net.Jsonp.scriptCounter_ = 0;\\n\\n\\n/**\\n * Static private method which returns the global unique callback id.\\n *\\n * @param {string} id The id of the script node.\\n * @return {string} A global unique id used to store callback on goog.global\\n *     object.\\n * @private\\n */\\ngoog.net.Jsonp.getCallbackId_ = function(id) {\\n  'use strict';\\n  return goog.net.Jsonp.CALLBACKS + '__' + id;\\n};\\n\\n\\n/**\\n * Sets the length of time, in milliseconds, this channel is prepared\\n * to wait for for a request to complete. If the call is not competed\\n * within the set time span, it is assumed to have failed. To wait\\n * indefinitely for a request to complete set the timout to a negative\\n * number.\\n *\\n * @param {number} timeout The length of time before calls are\\n * interrupted.\\n */\\ngoog.net.Jsonp.prototype.setRequestTimeout = function(timeout) {\\n  'use strict';\\n  this.timeout_ = timeout;\\n};\\n\\n\\n/**\\n * Returns the current timeout value, in milliseconds.\\n *\\n * @return {number} The timeout value.\\n */\\ngoog.net.Jsonp.prototype.getRequestTimeout = function() {\\n  'use strict';\\n  return this.timeout_;\\n};\\n\\n\\n/**\\n * Sets the nonce value for CSP. This nonce value will be added to any created\\n * script elements and must match the nonce provided in the\\n * Content-Security-Policy header sent by the server for the callback to pass\\n * CSP enforcement.\\n *\\n * @param {string} nonce The CSP nonce value.\\n */\\ngoog.net.Jsonp.prototype.setNonce = function(nonce) {\\n  'use strict';\\n  this.nonce_ = nonce;\\n};\\n\\n\\n/**\\n * Sends the given payload to the URL specified at the construction\\n * time. The reply is delivered to the given replyCallback. If the\\n * errorCallback is specified and the reply does not arrive within the\\n * timeout period set on this channel, the errorCallback is invoked\\n * with the original payload.\\n *\\n * If no reply callback is specified, then the response is expected to\\n * consist of calls to globally registered functions. No &callback=\\n * URL parameter will be sent in the request, and the script element\\n * will be cleaned up after the timeout.\\n *\\n * @param {Object=} opt_payload Name-value pairs.  If given, these will be\\n *     added as parameters to the supplied URI as GET parameters to the\\n *     given server URI.\\n *\\n * @param {Function=} opt_replyCallback A function expecting one\\n *     argument, called when the reply arrives, with the response data.\\n *\\n * @param {Function=} opt_errorCallback A function expecting one\\n *     argument, called on timeout, with the payload (if given), otherwise\\n *     null.\\n *\\n * @param {string=} opt_callbackParamValue Value to be used as the\\n *     parameter value for the callback parameter (callbackParamName).\\n *     To be used when the value needs to be fixed by the client for a\\n *     particular request, to make use of the cached responses for the request.\\n *     NOTE: If multiple requests are made with the same\\n *     opt_callbackParamValue, only the last call will work whenever the\\n *     response comes back.\\n *\\n * @return {!Object} A request descriptor that may be used to cancel this\\n *     transmission, or null, if the message may not be cancelled.\\n */\\ngoog.net.Jsonp.prototype.send = function(\\n    opt_payload, opt_replyCallback, opt_errorCallback, opt_callbackParamValue) {\\n  'use strict';\\n  const payload = opt_payload ? goog.object.clone(opt_payload) : {};\\n\\n  const id = opt_callbackParamValue ||\\n      '_' + (goog.net.Jsonp.scriptCounter_++).toString(36) +\\n          Date.now().toString(36);\\n  const callbackId = goog.net.Jsonp.getCallbackId_(id);\\n\\n  if (opt_replyCallback) {\\n    const reply = goog.net.Jsonp.newReplyHandler_(id, opt_replyCallback);\\n    // Register the callback on goog.global to make it discoverable\\n    // by jsonp response.\\n    goog.global[callbackId] = reply;\\n    payload[this.callbackParamName_] = callbackId;\\n  }\\n\\n  const options = {timeout: this.timeout_, cleanupWhenDone: true};\\n  if (this.nonce_) {\\n    options.attributes = {'nonce': this.nonce_};\\n  }\\n\\n  const uri = this.uri_.cloneWithParams(payload);\\n\\n  const deferred = goog.net.jsloader.safeLoad(uri, options);\\n  const error = goog.net.Jsonp.newErrorHandler_(id, payload, opt_errorCallback);\\n  deferred.addErrback(error);\\n\\n  return {id_: id, deferred_: deferred};\\n};\\n\\n\\n/**\\n * Cancels a given request. The request must be exactly the object returned by\\n * the send method.\\n * @param {Object} request The request object returned by the send method.\\n * @suppress {strictMissingProperties} Part of the go/strict_warnings_migration\\n */\\ngoog.net.Jsonp.prototype.cancel = function(request) {\\n  'use strict';\\n  if (request) {\\n    if (request.deferred_) {\\n      request.deferred_.cancel();\\n    }\\n    if (request.id_) {\\n      goog.net.Jsonp.cleanup_(request.id_, false);\\n    }\\n  }\\n};\\n\\n\\n/**\\n * Creates a timeout callback that calls the given timeoutCallback with the\\n * original payload.\\n *\\n * @param {string} id The id of the script node.\\n * @param {Object} payload The payload that was sent to the server.\\n * @param {Function=} opt_errorCallback The function called on timeout.\\n * @return {!Function} A zero argument function that handles callback duties.\\n * @private\\n */\\ngoog.net.Jsonp.newErrorHandler_ = function(id, payload, opt_errorCallback) {\\n  'use strict';\\n  /**\\n   * When we call across domains with a request, this function is the\\n   * timeout handler. Once it's done executing the user-specified\\n   * error-handler, it removes the script node and original function.\\n   */\\n  return function() {\\n    'use strict';\\n    goog.net.Jsonp.cleanup_(id, false);\\n    if (opt_errorCallback) {\\n      opt_errorCallback(payload);\\n    }\\n  };\\n};\\n\\n\\n/**\\n * Creates a reply callback that calls the given replyCallback with data\\n * returned by the server.\\n *\\n * @param {string} id The id of the script node.\\n * @param {Function} replyCallback The function called on reply.\\n * @return {!Function} A reply callback function.\\n * @private\\n */\\ngoog.net.Jsonp.newReplyHandler_ = function(id, replyCallback) {\\n  'use strict';\\n  /**\\n   * This function is the handler for the all-is-well response. It\\n   * clears the error timeout handler, calls the user's handler, then\\n   * removes the script node and itself.\\n   *\\n   * @param {...Object} var_args The response data sent from the server.\\n   */\\n  const handler = function(var_args) {\\n    'use strict';\\n    goog.net.Jsonp.cleanup_(id, true);\\n    replyCallback.apply(undefined, arguments);\\n  };\\n  return handler;\\n};\\n\\n\\n/**\\n * Removes the reply handler registered on goog.global object.\\n *\\n * @param {string} id The id of the script node to be removed.\\n * @param {boolean} deleteReplyHandler If true, delete the reply handler\\n *     instead of setting it to nullFunction (if we know the callback could\\n *     never be called again).\\n * @private\\n */\\ngoog.net.Jsonp.cleanup_ = function(id, deleteReplyHandler) {\\n  'use strict';\\n  const callbackId = goog.net.Jsonp.getCallbackId_(id);\\n  if (goog.global[callbackId]) {\\n    if (deleteReplyHandler) {\\n      try {\\n        delete goog.global[callbackId];\\n      } catch (e) {\\n        // NOTE: Workaround to delete property on 'window' in IE <= 8, see:\\n        // http://stackoverflow.com/questions/1073414/deleting-a-window-property-in-ie\\n        goog.global[callbackId] = undefined;\\n      }\\n    } else {\\n      // Removing the script tag doesn't necessarily prevent the script\\n      // from firing, so we make the callback a noop.\\n      goog.global[callbackId] = goog.nullFunction;\\n    }\\n  }\\n};\\n\\n\\n// WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING\\n//\\n// This class allows us (Google) to send data from non-Google and thus\\n// UNTRUSTED pages to our servers. Under NO CIRCUMSTANCES return\\n// anything sensitive, such as session or cookie specific data. Return\\n// only data that you want parties external to Google to have. Also\\n// NEVER use this method to send data from web pages to untrusted\\n// servers, or redirects to unknown servers (www.google.com/cache,\\n// /q=xx&btnl, /url, www.googlepages.com, etc.)\\n//\\n// WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"net\",\"Jsonp\",\"goog.net.Jsonp\",\"uri\",\"opt_callbackParamName\",\"uri_\",\"callbackParamName_\",\"timeout_\",\"nonce_\",\"CALLBACKS\",\"scriptCounter_\",\"getCallbackId_\",\"goog.net.Jsonp.getCallbackId_\",\"id\",\"prototype\",\"setRequestTimeout\",\"goog.net.Jsonp.prototype.setRequestTimeout\",\"timeout\",\"getRequestTimeout\",\"goog.net.Jsonp.prototype.getRequestTimeout\",\"setNonce\",\"goog.net.Jsonp.prototype.setNonce\",\"nonce\",\"send\",\"goog.net.Jsonp.prototype.send\",\"opt_payload\",\"opt_replyCallback\",\"opt_errorCallback\",\"opt_callbackParamValue\",\"payload\",\"object\",\"clone\",\"toString\",\"Date\",\"now\",\"callbackId\",\"reply\",\"newReplyHandler_\",\"global\",\"options\",\"cleanupWhenDone\",\"attributes\",\"cloneWithParams\",\"deferred\",\"jsloader\",\"safeLoad\",\"error\",\"newErrorHandler_\",\"addErrback\",\"id_\",\"deferred_\",\"cancel\",\"goog.net.Jsonp.prototype.cancel\",\"request\",\"cleanup_\",\"goog.net.Jsonp.newErrorHandler_\",\"goog.net.Jsonp.newReplyHandler_\",\"replyCallback\",\"handler\",\"var_args\",\"apply\",\"undefined\",\"arguments\",\"goog.net.Jsonp.cleanup_\",\"deleteReplyHandler\",\"e\",\"nullFunction\"]\n}\n"]