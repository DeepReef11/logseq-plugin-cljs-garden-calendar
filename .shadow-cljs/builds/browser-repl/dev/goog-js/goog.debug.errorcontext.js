["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/debug/errorcontext.js"],"~:js","goog.provide(\"goog.debug.errorcontext\");\ngoog.debug.errorcontext.addErrorContext = function(err, contextKey, contextValue) {\n  if (!err[goog.debug.errorcontext.CONTEXT_KEY_]) {\n    err[goog.debug.errorcontext.CONTEXT_KEY_] = {};\n  }\n  err[goog.debug.errorcontext.CONTEXT_KEY_][contextKey] = contextValue;\n};\ngoog.debug.errorcontext.getErrorContext = function(err) {\n  return err[goog.debug.errorcontext.CONTEXT_KEY_] || {};\n};\ngoog.debug.errorcontext.CONTEXT_KEY_ = \"__closure__error__context__984382\";\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Provides methods dealing with context on error objects.\n */\n\ngoog.provide('goog.debug.errorcontext');\n\n\n/**\n * Adds key-value context to the error.\n * @param {!Error} err The error to add context to.\n * @param {string} contextKey Key for the context to be added.\n * @param {string} contextValue Value for the context to be added.\n */\ngoog.debug.errorcontext.addErrorContext = function(\n    err, contextKey, contextValue) {\n  'use strict';\n  if (!err[goog.debug.errorcontext.CONTEXT_KEY_]) {\n    err[goog.debug.errorcontext.CONTEXT_KEY_] = {};\n  }\n  err[goog.debug.errorcontext.CONTEXT_KEY_][contextKey] = contextValue;\n};\n\n\n/**\n * @param {!Error} err The error to get context from.\n * @return {!Object<string, string>} The context of the provided error.\n */\ngoog.debug.errorcontext.getErrorContext = function(err) {\n  'use strict';\n  return err[goog.debug.errorcontext.CONTEXT_KEY_] || {};\n};\n\n\n// TODO(user): convert this to a Symbol once goog.debug.ErrorReporter is\n// able to use ES6.\n/** @private @const {string} */\ngoog.debug.errorcontext.CONTEXT_KEY_ = '__closure__error__context__984382';\n","~:compiled-at",1686094795323,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.debug.errorcontext.js\",\n\"lineCount\":12,\n\"mappings\":\"AAUAA,IAAKC,CAAAA,OAAL,CAAa,yBAAb,CAAA;AASAD,IAAKE,CAAAA,KAAMC,CAAAA,YAAaC,CAAAA,eAAxB,GAA0CC,QAAQ,CAC9CC,GAD8C,EACzCC,UADyC,EAC7BC,YAD6B,CACf;AAEjC,MAAI,CAACF,GAAA,CAAIN,IAAKE,CAAAA,KAAMC,CAAAA,YAAaM,CAAAA,YAA5B,CAAL;AACEH,OAAA,CAAIN,IAAKE,CAAAA,KAAMC,CAAAA,YAAaM,CAAAA,YAA5B,CAAA,GAA4C,EAA5C;AADF;AAGAH,KAAA,CAAIN,IAAKE,CAAAA,KAAMC,CAAAA,YAAaM,CAAAA,YAA5B,CAAA,CAA0CF,UAA1C,CAAA,GAAwDC,YAAxD;AALiC,CADnC;AAcAR,IAAKE,CAAAA,KAAMC,CAAAA,YAAaO,CAAAA,eAAxB,GAA0CC,QAAQ,CAACL,GAAD,CAAM;AAEtD,SAAOA,GAAA,CAAIN,IAAKE,CAAAA,KAAMC,CAAAA,YAAaM,CAAAA,YAA5B,CAAP,IAAoD,EAApD;AAFsD,CAAxD;AASAT,IAAKE,CAAAA,KAAMC,CAAAA,YAAaM,CAAAA,YAAxB,GAAuC,mCAAvC;;\",\n\"sources\":[\"goog/debug/errorcontext.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Provides methods dealing with context on error objects.\\n */\\n\\ngoog.provide('goog.debug.errorcontext');\\n\\n\\n/**\\n * Adds key-value context to the error.\\n * @param {!Error} err The error to add context to.\\n * @param {string} contextKey Key for the context to be added.\\n * @param {string} contextValue Value for the context to be added.\\n */\\ngoog.debug.errorcontext.addErrorContext = function(\\n    err, contextKey, contextValue) {\\n  'use strict';\\n  if (!err[goog.debug.errorcontext.CONTEXT_KEY_]) {\\n    err[goog.debug.errorcontext.CONTEXT_KEY_] = {};\\n  }\\n  err[goog.debug.errorcontext.CONTEXT_KEY_][contextKey] = contextValue;\\n};\\n\\n\\n/**\\n * @param {!Error} err The error to get context from.\\n * @return {!Object<string, string>} The context of the provided error.\\n */\\ngoog.debug.errorcontext.getErrorContext = function(err) {\\n  'use strict';\\n  return err[goog.debug.errorcontext.CONTEXT_KEY_] || {};\\n};\\n\\n\\n// TODO(user): convert this to a Symbol once goog.debug.ErrorReporter is\\n// able to use ES6.\\n/** @private @const {string} */\\ngoog.debug.errorcontext.CONTEXT_KEY_ = '__closure__error__context__984382';\\n\"],\n\"names\":[\"goog\",\"provide\",\"debug\",\"errorcontext\",\"addErrorContext\",\"goog.debug.errorcontext.addErrorContext\",\"err\",\"contextKey\",\"contextValue\",\"CONTEXT_KEY_\",\"getErrorContext\",\"goog.debug.errorcontext.getErrorContext\"]\n}\n"]