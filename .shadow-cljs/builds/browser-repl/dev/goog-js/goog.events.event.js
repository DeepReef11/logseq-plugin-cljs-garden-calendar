["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/events/event.js"],"~:js","goog.provide(\"goog.events.Event\");\ngoog.require(\"goog.Disposable\");\ngoog.require(\"goog.events.EventId\");\ngoog.events.Event = function(type, opt_target) {\n  this.type = type instanceof goog.events.EventId ? String(type) : type;\n  this.target = opt_target;\n  this.currentTarget = this.target;\n  this.propagationStopped_ = false;\n  this.defaultPrevented = false;\n};\ngoog.events.Event.prototype.hasPropagationStopped = function() {\n  return this.propagationStopped_;\n};\ngoog.events.Event.prototype.stopPropagation = function() {\n  this.propagationStopped_ = true;\n};\ngoog.events.Event.prototype.preventDefault = function() {\n  this.defaultPrevented = true;\n};\ngoog.events.Event.stopPropagation = function(e) {\n  e.stopPropagation();\n};\ngoog.events.Event.preventDefault = function(e) {\n  e.preventDefault();\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview A base class for event objects.\n */\n\n\ngoog.provide('goog.events.Event');\n\n/**\n * goog.events.Event no longer depends on goog.Disposable. Keep requiring\n * goog.Disposable here to not break projects which assume this dependency.\n * @suppress {extraRequire}\n */\ngoog.require('goog.Disposable');\ngoog.require('goog.events.EventId');\n\n\n/**\n * A base class for event objects, so that they can support preventDefault and\n * stopPropagation.\n *\n * @param {string|!goog.events.EventId} type Event Type.\n * @param {Object=} opt_target Reference to the object that is the target of\n *     this event. It has to implement the `EventTarget` interface\n *     declared at {@link http://developer.mozilla.org/en/DOM/EventTarget}.\n * @constructor\n */\ngoog.events.Event = function(type, opt_target) {\n  'use strict';\n  /**\n   * Event type.\n   * @type {string}\n   */\n  this.type = type instanceof goog.events.EventId ? String(type) : type;\n\n  /**\n   * TODO(tbreisacher): The type should probably be\n   * EventTarget|goog.events.EventTarget.\n   *\n   * Target of the event.\n   * @type {Object|undefined}\n   */\n  this.target = opt_target;\n\n  /**\n   * Object that had the listener attached.\n   * @type {Object|undefined}\n   */\n  this.currentTarget = this.target;\n\n  /**\n   * Whether to cancel the event in internal capture/bubble processing for IE.\n   * @type {boolean}\n   * @private\n   */\n  this.propagationStopped_ = false;\n\n  /**\n   * Whether the default action has been prevented.\n   * This is a property to match the W3C specification at\n   * {@link http://www.w3.org/TR/DOM-Level-3-Events/\n   * #events-event-type-defaultPrevented}.\n   * Must be treated as read-only outside the class.\n   * @type {boolean}\n   */\n  this.defaultPrevented = false;\n};\n\n/**\n * @return {boolean} true iff internal propagation has been stopped.\n */\ngoog.events.Event.prototype.hasPropagationStopped = function() {\n  'use strict';\n  return this.propagationStopped_;\n};\n\n/**\n * Stops event propagation.\n * @return {void}\n */\ngoog.events.Event.prototype.stopPropagation = function() {\n  'use strict';\n  this.propagationStopped_ = true;\n};\n\n\n/**\n * Prevents the default action, for example a link redirecting to a url.\n * @return {void}\n */\ngoog.events.Event.prototype.preventDefault = function() {\n  'use strict';\n  this.defaultPrevented = true;\n};\n\n\n/**\n * Stops the propagation of the event. It is equivalent to\n * `e.stopPropagation()`, but can be used as the callback argument of\n * {@link goog.events.listen} without declaring another function.\n * @param {!goog.events.Event} e An event.\n * @return {void}\n */\ngoog.events.Event.stopPropagation = function(e) {\n  'use strict';\n  e.stopPropagation();\n};\n\n\n/**\n * Prevents the default action. It is equivalent to\n * `e.preventDefault()`, but can be used as the callback argument of\n * {@link goog.events.listen} without declaring another function.\n * @param {!goog.events.Event} e An event.\n * @return {void}\n */\ngoog.events.Event.preventDefault = function(e) {\n  'use strict';\n  e.preventDefault();\n};\n","~:compiled-at",1686094795351,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.events.event.js\",\n\"lineCount\":26,\n\"mappings\":\"AAWAA,IAAKC,CAAAA,OAAL,CAAa,mBAAb,CAAA;AAOAD,IAAKE,CAAAA,OAAL,CAAa,iBAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,qBAAb,CAAA;AAaAF,IAAKG,CAAAA,MAAOC,CAAAA,KAAZ,GAAoBC,QAAQ,CAACC,IAAD,EAAOC,UAAP,CAAmB;AAM7C,MAAKD,CAAAA,IAAL,GAAYA,IAAA,YAAgBN,IAAKG,CAAAA,MAAOK,CAAAA,OAA5B,GAAsCC,MAAA,CAAOH,IAAP,CAAtC,GAAqDA,IAAjE;AASA,MAAKI,CAAAA,MAAL,GAAcH,UAAd;AAMA,MAAKI,CAAAA,aAAL,GAAqB,IAAKD,CAAAA,MAA1B;AAOA,MAAKE,CAAAA,mBAAL,GAA2B,KAA3B;AAUA,MAAKC,CAAAA,gBAAL,GAAwB,KAAxB;AAtC6C,CAA/C;AA4CAb,IAAKG,CAAAA,MAAOC,CAAAA,KAAMU,CAAAA,SAAUC,CAAAA,qBAA5B,GAAoDC,QAAQ,EAAG;AAE7D,SAAO,IAAKJ,CAAAA,mBAAZ;AAF6D,CAA/D;AASAZ,IAAKG,CAAAA,MAAOC,CAAAA,KAAMU,CAAAA,SAAUG,CAAAA,eAA5B,GAA8CC,QAAQ,EAAG;AAEvD,MAAKN,CAAAA,mBAAL,GAA2B,IAA3B;AAFuD,CAAzD;AAUAZ,IAAKG,CAAAA,MAAOC,CAAAA,KAAMU,CAAAA,SAAUK,CAAAA,cAA5B,GAA6CC,QAAQ,EAAG;AAEtD,MAAKP,CAAAA,gBAAL,GAAwB,IAAxB;AAFsD,CAAxD;AAaAb,IAAKG,CAAAA,MAAOC,CAAAA,KAAMa,CAAAA,eAAlB,GAAoCI,QAAQ,CAACC,CAAD,CAAI;AAE9CA,GAAEL,CAAAA,eAAF,EAAA;AAF8C,CAAhD;AAaAjB,IAAKG,CAAAA,MAAOC,CAAAA,KAAMe,CAAAA,cAAlB,GAAmCI,QAAQ,CAACD,CAAD,CAAI;AAE7CA,GAAEH,CAAAA,cAAF,EAAA;AAF6C,CAA/C;;\",\n\"sources\":[\"goog/events/event.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview A base class for event objects.\\n */\\n\\n\\ngoog.provide('goog.events.Event');\\n\\n/**\\n * goog.events.Event no longer depends on goog.Disposable. Keep requiring\\n * goog.Disposable here to not break projects which assume this dependency.\\n * @suppress {extraRequire}\\n */\\ngoog.require('goog.Disposable');\\ngoog.require('goog.events.EventId');\\n\\n\\n/**\\n * A base class for event objects, so that they can support preventDefault and\\n * stopPropagation.\\n *\\n * @param {string|!goog.events.EventId} type Event Type.\\n * @param {Object=} opt_target Reference to the object that is the target of\\n *     this event. It has to implement the `EventTarget` interface\\n *     declared at {@link http://developer.mozilla.org/en/DOM/EventTarget}.\\n * @constructor\\n */\\ngoog.events.Event = function(type, opt_target) {\\n  'use strict';\\n  /**\\n   * Event type.\\n   * @type {string}\\n   */\\n  this.type = type instanceof goog.events.EventId ? String(type) : type;\\n\\n  /**\\n   * TODO(tbreisacher): The type should probably be\\n   * EventTarget|goog.events.EventTarget.\\n   *\\n   * Target of the event.\\n   * @type {Object|undefined}\\n   */\\n  this.target = opt_target;\\n\\n  /**\\n   * Object that had the listener attached.\\n   * @type {Object|undefined}\\n   */\\n  this.currentTarget = this.target;\\n\\n  /**\\n   * Whether to cancel the event in internal capture/bubble processing for IE.\\n   * @type {boolean}\\n   * @private\\n   */\\n  this.propagationStopped_ = false;\\n\\n  /**\\n   * Whether the default action has been prevented.\\n   * This is a property to match the W3C specification at\\n   * {@link http://www.w3.org/TR/DOM-Level-3-Events/\\n   * #events-event-type-defaultPrevented}.\\n   * Must be treated as read-only outside the class.\\n   * @type {boolean}\\n   */\\n  this.defaultPrevented = false;\\n};\\n\\n/**\\n * @return {boolean} true iff internal propagation has been stopped.\\n */\\ngoog.events.Event.prototype.hasPropagationStopped = function() {\\n  'use strict';\\n  return this.propagationStopped_;\\n};\\n\\n/**\\n * Stops event propagation.\\n * @return {void}\\n */\\ngoog.events.Event.prototype.stopPropagation = function() {\\n  'use strict';\\n  this.propagationStopped_ = true;\\n};\\n\\n\\n/**\\n * Prevents the default action, for example a link redirecting to a url.\\n * @return {void}\\n */\\ngoog.events.Event.prototype.preventDefault = function() {\\n  'use strict';\\n  this.defaultPrevented = true;\\n};\\n\\n\\n/**\\n * Stops the propagation of the event. It is equivalent to\\n * `e.stopPropagation()`, but can be used as the callback argument of\\n * {@link goog.events.listen} without declaring another function.\\n * @param {!goog.events.Event} e An event.\\n * @return {void}\\n */\\ngoog.events.Event.stopPropagation = function(e) {\\n  'use strict';\\n  e.stopPropagation();\\n};\\n\\n\\n/**\\n * Prevents the default action. It is equivalent to\\n * `e.preventDefault()`, but can be used as the callback argument of\\n * {@link goog.events.listen} without declaring another function.\\n * @param {!goog.events.Event} e An event.\\n * @return {void}\\n */\\ngoog.events.Event.preventDefault = function(e) {\\n  'use strict';\\n  e.preventDefault();\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"events\",\"Event\",\"goog.events.Event\",\"type\",\"opt_target\",\"EventId\",\"String\",\"target\",\"currentTarget\",\"propagationStopped_\",\"defaultPrevented\",\"prototype\",\"hasPropagationStopped\",\"goog.events.Event.prototype.hasPropagationStopped\",\"stopPropagation\",\"goog.events.Event.prototype.stopPropagation\",\"preventDefault\",\"goog.events.Event.prototype.preventDefault\",\"goog.events.Event.stopPropagation\",\"e\",\"goog.events.Event.preventDefault\"]\n}\n"]