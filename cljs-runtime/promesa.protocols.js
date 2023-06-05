goog.provide('promesa.protocols');

/**
 * @interface
 */
promesa.protocols.IPromise = function(){};

var promesa$protocols$IPromise$_fmap$dyn_33898 = (function() {
var G__33900 = null;
var G__33900__2 = (function (it,f){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._fmap[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(it,f) : m__4551__auto__.call(null,it,f));
} else {
var m__4549__auto__ = (promesa.protocols._fmap["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(it,f) : m__4549__auto__.call(null,it,f));
} else {
throw cljs.core.missing_protocol("IPromise.-fmap",it);
}
}
});
var G__33900__3 = (function (it,f,executor){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._fmap[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(it,f,executor) : m__4551__auto__.call(null,it,f,executor));
} else {
var m__4549__auto__ = (promesa.protocols._fmap["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(it,f,executor) : m__4549__auto__.call(null,it,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-fmap",it);
}
}
});
G__33900 = function(it,f,executor){
switch(arguments.length){
case 2:
return G__33900__2.call(this,it,f);
case 3:
return G__33900__3.call(this,it,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33900.cljs$core$IFn$_invoke$arity$2 = G__33900__2;
G__33900.cljs$core$IFn$_invoke$arity$3 = G__33900__3;
return G__33900;
})()
;
/**
 * Apply function to a computation
 */
promesa.protocols._fmap = (function promesa$protocols$_fmap(var_args){
var G__32756 = arguments.length;
switch (G__32756) {
case 2:
return promesa.protocols._fmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._fmap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._fmap.cljs$core$IFn$_invoke$arity$2 = (function (it,f){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_fmap$arity$2 == null)))))){
return it.promesa$protocols$IPromise$_fmap$arity$2(it,f);
} else {
return promesa$protocols$IPromise$_fmap$dyn_33898(it,f);
}
}));

(promesa.protocols._fmap.cljs$core$IFn$_invoke$arity$3 = (function (it,f,executor){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_fmap$arity$3 == null)))))){
return it.promesa$protocols$IPromise$_fmap$arity$3(it,f,executor);
} else {
return promesa$protocols$IPromise$_fmap$dyn_33898(it,f,executor);
}
}));

(promesa.protocols._fmap.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_merr$dyn_33914 = (function() {
var G__33915 = null;
var G__33915__2 = (function (it,f){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._merr[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(it,f) : m__4551__auto__.call(null,it,f));
} else {
var m__4549__auto__ = (promesa.protocols._merr["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(it,f) : m__4549__auto__.call(null,it,f));
} else {
throw cljs.core.missing_protocol("IPromise.-merr",it);
}
}
});
var G__33915__3 = (function (it,f,executor){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._merr[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(it,f,executor) : m__4551__auto__.call(null,it,f,executor));
} else {
var m__4549__auto__ = (promesa.protocols._merr["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(it,f,executor) : m__4549__auto__.call(null,it,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-merr",it);
}
}
});
G__33915 = function(it,f,executor){
switch(arguments.length){
case 2:
return G__33915__2.call(this,it,f);
case 3:
return G__33915__3.call(this,it,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33915.cljs$core$IFn$_invoke$arity$2 = G__33915__2;
G__33915.cljs$core$IFn$_invoke$arity$3 = G__33915__3;
return G__33915;
})()
;
/**
 * Apply function to a failed computation and flatten 1 level
 */
promesa.protocols._merr = (function promesa$protocols$_merr(var_args){
var G__32789 = arguments.length;
switch (G__32789) {
case 2:
return promesa.protocols._merr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._merr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._merr.cljs$core$IFn$_invoke$arity$2 = (function (it,f){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_merr$arity$2 == null)))))){
return it.promesa$protocols$IPromise$_merr$arity$2(it,f);
} else {
return promesa$protocols$IPromise$_merr$dyn_33914(it,f);
}
}));

(promesa.protocols._merr.cljs$core$IFn$_invoke$arity$3 = (function (it,f,executor){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_merr$arity$3 == null)))))){
return it.promesa$protocols$IPromise$_merr$arity$3(it,f,executor);
} else {
return promesa$protocols$IPromise$_merr$dyn_33914(it,f,executor);
}
}));

(promesa.protocols._merr.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_mcat$dyn_33929 = (function() {
var G__33930 = null;
var G__33930__2 = (function (it,f){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._mcat[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(it,f) : m__4551__auto__.call(null,it,f));
} else {
var m__4549__auto__ = (promesa.protocols._mcat["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(it,f) : m__4549__auto__.call(null,it,f));
} else {
throw cljs.core.missing_protocol("IPromise.-mcat",it);
}
}
});
var G__33930__3 = (function (it,f,executor){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._mcat[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(it,f,executor) : m__4551__auto__.call(null,it,f,executor));
} else {
var m__4549__auto__ = (promesa.protocols._mcat["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(it,f,executor) : m__4549__auto__.call(null,it,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-mcat",it);
}
}
});
G__33930 = function(it,f,executor){
switch(arguments.length){
case 2:
return G__33930__2.call(this,it,f);
case 3:
return G__33930__3.call(this,it,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33930.cljs$core$IFn$_invoke$arity$2 = G__33930__2;
G__33930.cljs$core$IFn$_invoke$arity$3 = G__33930__3;
return G__33930;
})()
;
/**
 * Apply function to a computation and flatten 1 level
 */
promesa.protocols._mcat = (function promesa$protocols$_mcat(var_args){
var G__32846 = arguments.length;
switch (G__32846) {
case 2:
return promesa.protocols._mcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._mcat.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._mcat.cljs$core$IFn$_invoke$arity$2 = (function (it,f){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_mcat$arity$2 == null)))))){
return it.promesa$protocols$IPromise$_mcat$arity$2(it,f);
} else {
return promesa$protocols$IPromise$_mcat$dyn_33929(it,f);
}
}));

(promesa.protocols._mcat.cljs$core$IFn$_invoke$arity$3 = (function (it,f,executor){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_mcat$arity$3 == null)))))){
return it.promesa$protocols$IPromise$_mcat$arity$3(it,f,executor);
} else {
return promesa$protocols$IPromise$_mcat$dyn_33929(it,f,executor);
}
}));

(promesa.protocols._mcat.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_hmap$dyn_33948 = (function() {
var G__33949 = null;
var G__33949__2 = (function (it,f){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._hmap[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(it,f) : m__4551__auto__.call(null,it,f));
} else {
var m__4549__auto__ = (promesa.protocols._hmap["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(it,f) : m__4549__auto__.call(null,it,f));
} else {
throw cljs.core.missing_protocol("IPromise.-hmap",it);
}
}
});
var G__33949__3 = (function (it,f,executor){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._hmap[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(it,f,executor) : m__4551__auto__.call(null,it,f,executor));
} else {
var m__4549__auto__ = (promesa.protocols._hmap["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(it,f,executor) : m__4549__auto__.call(null,it,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-hmap",it);
}
}
});
G__33949 = function(it,f,executor){
switch(arguments.length){
case 2:
return G__33949__2.call(this,it,f);
case 3:
return G__33949__3.call(this,it,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33949.cljs$core$IFn$_invoke$arity$2 = G__33949__2;
G__33949.cljs$core$IFn$_invoke$arity$3 = G__33949__3;
return G__33949;
})()
;
/**
 * Apply function to a computation independently if is failed or
 *  successful.
 */
promesa.protocols._hmap = (function promesa$protocols$_hmap(var_args){
var G__32915 = arguments.length;
switch (G__32915) {
case 2:
return promesa.protocols._hmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._hmap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._hmap.cljs$core$IFn$_invoke$arity$2 = (function (it,f){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_hmap$arity$2 == null)))))){
return it.promesa$protocols$IPromise$_hmap$arity$2(it,f);
} else {
return promesa$protocols$IPromise$_hmap$dyn_33948(it,f);
}
}));

(promesa.protocols._hmap.cljs$core$IFn$_invoke$arity$3 = (function (it,f,executor){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_hmap$arity$3 == null)))))){
return it.promesa$protocols$IPromise$_hmap$arity$3(it,f,executor);
} else {
return promesa$protocols$IPromise$_hmap$dyn_33948(it,f,executor);
}
}));

(promesa.protocols._hmap.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_fnly$dyn_33957 = (function() {
var G__33960 = null;
var G__33960__2 = (function (it,f){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._fnly[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(it,f) : m__4551__auto__.call(null,it,f));
} else {
var m__4549__auto__ = (promesa.protocols._fnly["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(it,f) : m__4549__auto__.call(null,it,f));
} else {
throw cljs.core.missing_protocol("IPromise.-fnly",it);
}
}
});
var G__33960__3 = (function (it,f,executor){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._fnly[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(it,f,executor) : m__4551__auto__.call(null,it,f,executor));
} else {
var m__4549__auto__ = (promesa.protocols._fnly["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(it,f,executor) : m__4549__auto__.call(null,it,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-fnly",it);
}
}
});
G__33960 = function(it,f,executor){
switch(arguments.length){
case 2:
return G__33960__2.call(this,it,f);
case 3:
return G__33960__3.call(this,it,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33960.cljs$core$IFn$_invoke$arity$2 = G__33960__2;
G__33960.cljs$core$IFn$_invoke$arity$3 = G__33960__3;
return G__33960;
})()
;
/**
 * Apply function to a computation independently if is failed or
 *  successful; the return value is ignored.
 */
promesa.protocols._fnly = (function promesa$protocols$_fnly(var_args){
var G__32927 = arguments.length;
switch (G__32927) {
case 2:
return promesa.protocols._fnly.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._fnly.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._fnly.cljs$core$IFn$_invoke$arity$2 = (function (it,f){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_fnly$arity$2 == null)))))){
return it.promesa$protocols$IPromise$_fnly$arity$2(it,f);
} else {
return promesa$protocols$IPromise$_fnly$dyn_33957(it,f);
}
}));

(promesa.protocols._fnly.cljs$core$IFn$_invoke$arity$3 = (function (it,f,executor){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_fnly$arity$3 == null)))))){
return it.promesa$protocols$IPromise$_fnly$arity$3(it,f,executor);
} else {
return promesa$protocols$IPromise$_fnly$dyn_33957(it,f,executor);
}
}));

(promesa.protocols._fnly.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_then$dyn_33970 = (function() {
var G__33971 = null;
var G__33971__2 = (function (it,f){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._then[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(it,f) : m__4551__auto__.call(null,it,f));
} else {
var m__4549__auto__ = (promesa.protocols._then["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(it,f) : m__4549__auto__.call(null,it,f));
} else {
throw cljs.core.missing_protocol("IPromise.-then",it);
}
}
});
var G__33971__3 = (function (it,f,executor){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._then[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(it,f,executor) : m__4551__auto__.call(null,it,f,executor));
} else {
var m__4549__auto__ = (promesa.protocols._then["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(it,f,executor) : m__4549__auto__.call(null,it,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-then",it);
}
}
});
G__33971 = function(it,f,executor){
switch(arguments.length){
case 2:
return G__33971__2.call(this,it,f);
case 3:
return G__33971__3.call(this,it,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33971.cljs$core$IFn$_invoke$arity$2 = G__33971__2;
G__33971.cljs$core$IFn$_invoke$arity$3 = G__33971__3;
return G__33971;
})()
;
/**
 * Apply function to a computation and flatten multiple levels
 */
promesa.protocols._then = (function promesa$protocols$_then(var_args){
var G__32970 = arguments.length;
switch (G__32970) {
case 2:
return promesa.protocols._then.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._then.cljs$core$IFn$_invoke$arity$2 = (function (it,f){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_then$arity$2 == null)))))){
return it.promesa$protocols$IPromise$_then$arity$2(it,f);
} else {
return promesa$protocols$IPromise$_then$dyn_33970(it,f);
}
}));

(promesa.protocols._then.cljs$core$IFn$_invoke$arity$3 = (function (it,f,executor){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_then$arity$3 == null)))))){
return it.promesa$protocols$IPromise$_then$arity$3(it,f,executor);
} else {
return promesa$protocols$IPromise$_then$dyn_33970(it,f,executor);
}
}));

(promesa.protocols._then.cljs$lang$maxFixedArity = 3);



/**
 * Additional state/introspection abstraction.
 * @interface
 */
promesa.protocols.IState = function(){};

var promesa$protocols$IState$_extract$dyn_33982 = (function() {
var G__33984 = null;
var G__33984__1 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._extract[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._extract["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("IState.-extract",it);
}
}
});
var G__33984__2 = (function (it,default$){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._extract[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(it,default$) : m__4551__auto__.call(null,it,default$));
} else {
var m__4549__auto__ = (promesa.protocols._extract["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(it,default$) : m__4549__auto__.call(null,it,default$));
} else {
throw cljs.core.missing_protocol("IState.-extract",it);
}
}
});
G__33984 = function(it,default$){
switch(arguments.length){
case 1:
return G__33984__1.call(this,it);
case 2:
return G__33984__2.call(this,it,default$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33984.cljs$core$IFn$_invoke$arity$1 = G__33984__1;
G__33984.cljs$core$IFn$_invoke$arity$2 = G__33984__2;
return G__33984;
})()
;
/**
 * Extract the current value.
 */
promesa.protocols._extract = (function promesa$protocols$_extract(var_args){
var G__33028 = arguments.length;
switch (G__33028) {
case 1:
return promesa.protocols._extract.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.protocols._extract.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._extract.cljs$core$IFn$_invoke$arity$1 = (function (it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IState$_extract$arity$1 == null)))))){
return it.promesa$protocols$IState$_extract$arity$1(it);
} else {
return promesa$protocols$IState$_extract$dyn_33982(it);
}
}));

(promesa.protocols._extract.cljs$core$IFn$_invoke$arity$2 = (function (it,default$){
if((((!((it == null)))) && ((!((it.promesa$protocols$IState$_extract$arity$2 == null)))))){
return it.promesa$protocols$IState$_extract$arity$2(it,default$);
} else {
return promesa$protocols$IState$_extract$dyn_33982(it,default$);
}
}));

(promesa.protocols._extract.cljs$lang$maxFixedArity = 2);


var promesa$protocols$IState$_resolved_QMARK_$dyn_33996 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._resolved_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._resolved_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("IState.-resolved?",it);
}
}
});
/**
 * Returns true if a promise is resolved.
 */
promesa.protocols._resolved_QMARK_ = (function promesa$protocols$_resolved_QMARK_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IState$_resolved_QMARK_$arity$1 == null)))))){
return it.promesa$protocols$IState$_resolved_QMARK_$arity$1(it);
} else {
return promesa$protocols$IState$_resolved_QMARK_$dyn_33996(it);
}
});

var promesa$protocols$IState$_rejected_QMARK_$dyn_33999 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._rejected_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._rejected_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("IState.-rejected?",it);
}
}
});
/**
 * Returns true if a promise is rejected.
 */
promesa.protocols._rejected_QMARK_ = (function promesa$protocols$_rejected_QMARK_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IState$_rejected_QMARK_$arity$1 == null)))))){
return it.promesa$protocols$IState$_rejected_QMARK_$arity$1(it);
} else {
return promesa$protocols$IState$_rejected_QMARK_$dyn_33999(it);
}
});

var promesa$protocols$IState$_pending_QMARK_$dyn_34007 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._pending_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._pending_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("IState.-pending?",it);
}
}
});
/**
 * Retutns true if a promise is pending.
 */
promesa.protocols._pending_QMARK_ = (function promesa$protocols$_pending_QMARK_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IState$_pending_QMARK_$arity$1 == null)))))){
return it.promesa$protocols$IState$_pending_QMARK_$arity$1(it);
} else {
return promesa$protocols$IState$_pending_QMARK_$dyn_34007(it);
}
});


/**
 * A promise constructor abstraction.
 * @interface
 */
promesa.protocols.IPromiseFactory = function(){};

var promesa$protocols$IPromiseFactory$_promise$dyn_34014 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._promise[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._promise["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("IPromiseFactory.-promise",it);
}
}
});
/**
 * Create a promise instance from other types
 */
promesa.protocols._promise = (function promesa$protocols$_promise(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromiseFactory$_promise$arity$1 == null)))))){
return it.promesa$protocols$IPromiseFactory$_promise$arity$1(it);
} else {
return promesa$protocols$IPromiseFactory$_promise$dyn_34014(it);
}
});


/**
 * A cancellation abstraction.
 * @interface
 */
promesa.protocols.ICancellable = function(){};

var promesa$protocols$ICancellable$_cancel_BANG_$dyn_34020 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._cancel_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._cancel_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("ICancellable.-cancel!",it);
}
}
});
promesa.protocols._cancel_BANG_ = (function promesa$protocols$_cancel_BANG_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$ICancellable$_cancel_BANG_$arity$1 == null)))))){
return it.promesa$protocols$ICancellable$_cancel_BANG_$arity$1(it);
} else {
return promesa$protocols$ICancellable$_cancel_BANG_$dyn_34020(it);
}
});

var promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_34024 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._cancelled_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._cancelled_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("ICancellable.-cancelled?",it);
}
}
});
promesa.protocols._cancelled_QMARK_ = (function promesa$protocols$_cancelled_QMARK_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 == null)))))){
return it.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1(it);
} else {
return promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_34024(it);
}
});


/**
 * @interface
 */
promesa.protocols.ICompletable = function(){};

var promesa$protocols$ICompletable$_resolve_BANG_$dyn_34027 = (function (it,v){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._resolve_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(it,v) : m__4551__auto__.call(null,it,v));
} else {
var m__4549__auto__ = (promesa.protocols._resolve_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(it,v) : m__4549__auto__.call(null,it,v));
} else {
throw cljs.core.missing_protocol("ICompletable.-resolve!",it);
}
}
});
/**
 * Deliver a value to empty promise.
 */
promesa.protocols._resolve_BANG_ = (function promesa$protocols$_resolve_BANG_(it,v){
if((((!((it == null)))) && ((!((it.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 == null)))))){
return it.promesa$protocols$ICompletable$_resolve_BANG_$arity$2(it,v);
} else {
return promesa$protocols$ICompletable$_resolve_BANG_$dyn_34027(it,v);
}
});

var promesa$protocols$ICompletable$_reject_BANG_$dyn_34030 = (function (it,e){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._reject_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(it,e) : m__4551__auto__.call(null,it,e));
} else {
var m__4549__auto__ = (promesa.protocols._reject_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(it,e) : m__4549__auto__.call(null,it,e));
} else {
throw cljs.core.missing_protocol("ICompletable.-reject!",it);
}
}
});
/**
 * Deliver an error to empty promise.
 */
promesa.protocols._reject_BANG_ = (function promesa$protocols$_reject_BANG_(it,e){
if((((!((it == null)))) && ((!((it.promesa$protocols$ICompletable$_reject_BANG_$arity$2 == null)))))){
return it.promesa$protocols$ICompletable$_reject_BANG_$arity$2(it,e);
} else {
return promesa$protocols$ICompletable$_reject_BANG_$dyn_34030(it,e);
}
});


/**
 * @interface
 */
promesa.protocols.IExecutor = function(){};

var promesa$protocols$IExecutor$_exec_BANG_$dyn_34037 = (function (it,task){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._exec_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(it,task) : m__4551__auto__.call(null,it,task));
} else {
var m__4549__auto__ = (promesa.protocols._exec_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(it,task) : m__4549__auto__.call(null,it,task));
} else {
throw cljs.core.missing_protocol("IExecutor.-exec!",it);
}
}
});
/**
 * Submit a task and return nil
 */
promesa.protocols._exec_BANG_ = (function promesa$protocols$_exec_BANG_(it,task){
if((((!((it == null)))) && ((!((it.promesa$protocols$IExecutor$_exec_BANG_$arity$2 == null)))))){
return it.promesa$protocols$IExecutor$_exec_BANG_$arity$2(it,task);
} else {
return promesa$protocols$IExecutor$_exec_BANG_$dyn_34037(it,task);
}
});

var promesa$protocols$IExecutor$_run_BANG_$dyn_34041 = (function (it,task){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._run_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(it,task) : m__4551__auto__.call(null,it,task));
} else {
var m__4549__auto__ = (promesa.protocols._run_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(it,task) : m__4549__auto__.call(null,it,task));
} else {
throw cljs.core.missing_protocol("IExecutor.-run!",it);
}
}
});
/**
 * Submit a task and return a promise.
 */
promesa.protocols._run_BANG_ = (function promesa$protocols$_run_BANG_(it,task){
if((((!((it == null)))) && ((!((it.promesa$protocols$IExecutor$_run_BANG_$arity$2 == null)))))){
return it.promesa$protocols$IExecutor$_run_BANG_$arity$2(it,task);
} else {
return promesa$protocols$IExecutor$_run_BANG_$dyn_34041(it,task);
}
});

var promesa$protocols$IExecutor$_submit_BANG_$dyn_34045 = (function (it,task){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._submit_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(it,task) : m__4551__auto__.call(null,it,task));
} else {
var m__4549__auto__ = (promesa.protocols._submit_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(it,task) : m__4549__auto__.call(null,it,task));
} else {
throw cljs.core.missing_protocol("IExecutor.-submit!",it);
}
}
});
/**
 * Submit a task and return a promise.
 */
promesa.protocols._submit_BANG_ = (function promesa$protocols$_submit_BANG_(it,task){
if((((!((it == null)))) && ((!((it.promesa$protocols$IExecutor$_submit_BANG_$arity$2 == null)))))){
return it.promesa$protocols$IExecutor$_submit_BANG_$arity$2(it,task);
} else {
return promesa$protocols$IExecutor$_submit_BANG_$dyn_34045(it,task);
}
});


/**
 * A generic abstraction for scheduler facilities.
 * @interface
 */
promesa.protocols.IScheduler = function(){};

var promesa$protocols$IScheduler$_schedule_BANG_$dyn_34050 = (function (it,ms,func){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._schedule_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(it,ms,func) : m__4551__auto__.call(null,it,ms,func));
} else {
var m__4549__auto__ = (promesa.protocols._schedule_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(it,ms,func) : m__4549__auto__.call(null,it,ms,func));
} else {
throw cljs.core.missing_protocol("IScheduler.-schedule!",it);
}
}
});
/**
 * Schedule a function to be executed in future.
 */
promesa.protocols._schedule_BANG_ = (function promesa$protocols$_schedule_BANG_(it,ms,func){
if((((!((it == null)))) && ((!((it.promesa$protocols$IScheduler$_schedule_BANG_$arity$3 == null)))))){
return it.promesa$protocols$IScheduler$_schedule_BANG_$arity$3(it,ms,func);
} else {
return promesa$protocols$IScheduler$_schedule_BANG_$dyn_34050(it,ms,func);
}
});


/**
 * An experimental semaphore protocol, used internally; no public api
 * @interface
 */
promesa.protocols.ISemaphore = function(){};

var promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_34051 = (function() {
var G__34052 = null;
var G__34052__1 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._try_acquire_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._try_acquire_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("ISemaphore.-try-acquire!",it);
}
}
});
var G__34052__2 = (function (it,n){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._try_acquire_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(it,n) : m__4551__auto__.call(null,it,n));
} else {
var m__4549__auto__ = (promesa.protocols._try_acquire_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(it,n) : m__4549__auto__.call(null,it,n));
} else {
throw cljs.core.missing_protocol("ISemaphore.-try-acquire!",it);
}
}
});
var G__34052__3 = (function (it,n,t){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._try_acquire_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(it,n,t) : m__4551__auto__.call(null,it,n,t));
} else {
var m__4549__auto__ = (promesa.protocols._try_acquire_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(it,n,t) : m__4549__auto__.call(null,it,n,t));
} else {
throw cljs.core.missing_protocol("ISemaphore.-try-acquire!",it);
}
}
});
G__34052 = function(it,n,t){
switch(arguments.length){
case 1:
return G__34052__1.call(this,it);
case 2:
return G__34052__2.call(this,it,n);
case 3:
return G__34052__3.call(this,it,n,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34052.cljs$core$IFn$_invoke$arity$1 = G__34052__1;
G__34052.cljs$core$IFn$_invoke$arity$2 = G__34052__2;
G__34052.cljs$core$IFn$_invoke$arity$3 = G__34052__3;
return G__34052;
})()
;
/**
 * Try acquire n or n permits, non-blocking or optional timeout
 */
promesa.protocols._try_acquire_BANG_ = (function promesa$protocols$_try_acquire_BANG_(var_args){
var G__33296 = arguments.length;
switch (G__33296) {
case 1:
return promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (it){
if((((!((it == null)))) && ((!((it.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$1 == null)))))){
return it.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$1(it);
} else {
return promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_34051(it);
}
}));

(promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (it,n){
if((((!((it == null)))) && ((!((it.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$2 == null)))))){
return it.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$2(it,n);
} else {
return promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_34051(it,n);
}
}));

(promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (it,n,t){
if((((!((it == null)))) && ((!((it.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$3 == null)))))){
return it.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$3(it,n,t);
} else {
return promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_34051(it,n,t);
}
}));

(promesa.protocols._try_acquire_BANG_.cljs$lang$maxFixedArity = 3);


var promesa$protocols$ISemaphore$_acquire_BANG_$dyn_34054 = (function() {
var G__34055 = null;
var G__34055__1 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._acquire_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._acquire_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("ISemaphore.-acquire!",it);
}
}
});
var G__34055__2 = (function (it,n){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._acquire_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(it,n) : m__4551__auto__.call(null,it,n));
} else {
var m__4549__auto__ = (promesa.protocols._acquire_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(it,n) : m__4549__auto__.call(null,it,n));
} else {
throw cljs.core.missing_protocol("ISemaphore.-acquire!",it);
}
}
});
G__34055 = function(it,n){
switch(arguments.length){
case 1:
return G__34055__1.call(this,it);
case 2:
return G__34055__2.call(this,it,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34055.cljs$core$IFn$_invoke$arity$1 = G__34055__1;
G__34055.cljs$core$IFn$_invoke$arity$2 = G__34055__2;
return G__34055;
})()
;
/**
 * Acquire 1 or N permits
 */
promesa.protocols._acquire_BANG_ = (function promesa$protocols$_acquire_BANG_(var_args){
var G__33339 = arguments.length;
switch (G__33339) {
case 1:
return promesa.protocols._acquire_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.protocols._acquire_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._acquire_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (it){
if((((!((it == null)))) && ((!((it.promesa$protocols$ISemaphore$_acquire_BANG_$arity$1 == null)))))){
return it.promesa$protocols$ISemaphore$_acquire_BANG_$arity$1(it);
} else {
return promesa$protocols$ISemaphore$_acquire_BANG_$dyn_34054(it);
}
}));

(promesa.protocols._acquire_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (it,n){
if((((!((it == null)))) && ((!((it.promesa$protocols$ISemaphore$_acquire_BANG_$arity$2 == null)))))){
return it.promesa$protocols$ISemaphore$_acquire_BANG_$arity$2(it,n);
} else {
return promesa$protocols$ISemaphore$_acquire_BANG_$dyn_34054(it,n);
}
}));

(promesa.protocols._acquire_BANG_.cljs$lang$maxFixedArity = 2);


var promesa$protocols$ISemaphore$_release_BANG_$dyn_34064 = (function() {
var G__34065 = null;
var G__34065__1 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._release_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._release_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("ISemaphore.-release!",it);
}
}
});
var G__34065__2 = (function (it,n){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._release_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(it,n) : m__4551__auto__.call(null,it,n));
} else {
var m__4549__auto__ = (promesa.protocols._release_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(it,n) : m__4549__auto__.call(null,it,n));
} else {
throw cljs.core.missing_protocol("ISemaphore.-release!",it);
}
}
});
G__34065 = function(it,n){
switch(arguments.length){
case 1:
return G__34065__1.call(this,it);
case 2:
return G__34065__2.call(this,it,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34065.cljs$core$IFn$_invoke$arity$1 = G__34065__1;
G__34065.cljs$core$IFn$_invoke$arity$2 = G__34065__2;
return G__34065;
})()
;
/**
 * Release 1 or N permits
 */
promesa.protocols._release_BANG_ = (function promesa$protocols$_release_BANG_(var_args){
var G__33411 = arguments.length;
switch (G__33411) {
case 1:
return promesa.protocols._release_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.protocols._release_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._release_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (it){
if((((!((it == null)))) && ((!((it.promesa$protocols$ISemaphore$_release_BANG_$arity$1 == null)))))){
return it.promesa$protocols$ISemaphore$_release_BANG_$arity$1(it);
} else {
return promesa$protocols$ISemaphore$_release_BANG_$dyn_34064(it);
}
}));

(promesa.protocols._release_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (it,n){
if((((!((it == null)))) && ((!((it.promesa$protocols$ISemaphore$_release_BANG_$arity$2 == null)))))){
return it.promesa$protocols$ISemaphore$_release_BANG_$arity$2(it,n);
} else {
return promesa$protocols$ISemaphore$_release_BANG_$dyn_34064(it,n);
}
}));

(promesa.protocols._release_BANG_.cljs$lang$maxFixedArity = 2);



/**
 * An experimental lock protocol, used internally; no public api
 * @interface
 */
promesa.protocols.ILock = function(){};

var promesa$protocols$ILock$_lock_BANG_$dyn_34073 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._lock_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._lock_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("ILock.-lock!",it);
}
}
});
promesa.protocols._lock_BANG_ = (function promesa$protocols$_lock_BANG_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$ILock$_lock_BANG_$arity$1 == null)))))){
return it.promesa$protocols$ILock$_lock_BANG_$arity$1(it);
} else {
return promesa$protocols$ILock$_lock_BANG_$dyn_34073(it);
}
});

var promesa$protocols$ILock$_unlock_BANG_$dyn_34074 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._unlock_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._unlock_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("ILock.-unlock!",it);
}
}
});
promesa.protocols._unlock_BANG_ = (function promesa$protocols$_unlock_BANG_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$ILock$_unlock_BANG_$arity$1 == null)))))){
return it.promesa$protocols$ILock$_unlock_BANG_$arity$1(it);
} else {
return promesa$protocols$ILock$_unlock_BANG_$dyn_34074(it);
}
});


/**
 * @interface
 */
promesa.protocols.IReadChannel = function(){};

var promesa$protocols$IReadChannel$_take_BANG_$dyn_34078 = (function (it,handler){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._take_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(it,handler) : m__4551__auto__.call(null,it,handler));
} else {
var m__4549__auto__ = (promesa.protocols._take_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(it,handler) : m__4549__auto__.call(null,it,handler));
} else {
throw cljs.core.missing_protocol("IReadChannel.-take!",it);
}
}
});
promesa.protocols._take_BANG_ = (function promesa$protocols$_take_BANG_(it,handler){
if((((!((it == null)))) && ((!((it.promesa$protocols$IReadChannel$_take_BANG_$arity$2 == null)))))){
return it.promesa$protocols$IReadChannel$_take_BANG_$arity$2(it,handler);
} else {
return promesa$protocols$IReadChannel$_take_BANG_$dyn_34078(it,handler);
}
});


/**
 * @interface
 */
promesa.protocols.IWriteChannel = function(){};

var promesa$protocols$IWriteChannel$_put_BANG_$dyn_34084 = (function (it,val,handler){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._put_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(it,val,handler) : m__4551__auto__.call(null,it,val,handler));
} else {
var m__4549__auto__ = (promesa.protocols._put_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(it,val,handler) : m__4549__auto__.call(null,it,val,handler));
} else {
throw cljs.core.missing_protocol("IWriteChannel.-put!",it);
}
}
});
promesa.protocols._put_BANG_ = (function promesa$protocols$_put_BANG_(it,val,handler){
if((((!((it == null)))) && ((!((it.promesa$protocols$IWriteChannel$_put_BANG_$arity$3 == null)))))){
return it.promesa$protocols$IWriteChannel$_put_BANG_$arity$3(it,val,handler);
} else {
return promesa$protocols$IWriteChannel$_put_BANG_$dyn_34084(it,val,handler);
}
});


/**
 * @interface
 */
promesa.protocols.IChannelInternal = function(){};

var promesa$protocols$IChannelInternal$_cleanup_BANG_$dyn_34088 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._cleanup_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._cleanup_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("IChannelInternal.-cleanup!",it);
}
}
});
promesa.protocols._cleanup_BANG_ = (function promesa$protocols$_cleanup_BANG_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IChannelInternal$_cleanup_BANG_$arity$1 == null)))))){
return it.promesa$protocols$IChannelInternal$_cleanup_BANG_$arity$1(it);
} else {
return promesa$protocols$IChannelInternal$_cleanup_BANG_$dyn_34088(it);
}
});


/**
 * @interface
 */
promesa.protocols.IChannelMultiplexer = function(){};

var promesa$protocols$IChannelMultiplexer$_tap_BANG_$dyn_34089 = (function (it,ch,close_QMARK_){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._tap_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(it,ch,close_QMARK_) : m__4551__auto__.call(null,it,ch,close_QMARK_));
} else {
var m__4549__auto__ = (promesa.protocols._tap_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(it,ch,close_QMARK_) : m__4549__auto__.call(null,it,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("IChannelMultiplexer.-tap!",it);
}
}
});
promesa.protocols._tap_BANG_ = (function promesa$protocols$_tap_BANG_(it,ch,close_QMARK_){
if((((!((it == null)))) && ((!((it.promesa$protocols$IChannelMultiplexer$_tap_BANG_$arity$3 == null)))))){
return it.promesa$protocols$IChannelMultiplexer$_tap_BANG_$arity$3(it,ch,close_QMARK_);
} else {
return promesa$protocols$IChannelMultiplexer$_tap_BANG_$dyn_34089(it,ch,close_QMARK_);
}
});

var promesa$protocols$IChannelMultiplexer$_untap_BANG_$dyn_34093 = (function (it,ch){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._untap_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(it,ch) : m__4551__auto__.call(null,it,ch));
} else {
var m__4549__auto__ = (promesa.protocols._untap_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(it,ch) : m__4549__auto__.call(null,it,ch));
} else {
throw cljs.core.missing_protocol("IChannelMultiplexer.-untap!",it);
}
}
});
promesa.protocols._untap_BANG_ = (function promesa$protocols$_untap_BANG_(it,ch){
if((((!((it == null)))) && ((!((it.promesa$protocols$IChannelMultiplexer$_untap_BANG_$arity$2 == null)))))){
return it.promesa$protocols$IChannelMultiplexer$_untap_BANG_$arity$2(it,ch);
} else {
return promesa$protocols$IChannelMultiplexer$_untap_BANG_$dyn_34093(it,ch);
}
});


/**
 * @interface
 */
promesa.protocols.ICloseable = function(){};

var promesa$protocols$ICloseable$_closed_QMARK_$dyn_34094 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._closed_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._closed_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("ICloseable.-closed?",it);
}
}
});
promesa.protocols._closed_QMARK_ = (function promesa$protocols$_closed_QMARK_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$ICloseable$_closed_QMARK_$arity$1 == null)))))){
return it.promesa$protocols$ICloseable$_closed_QMARK_$arity$1(it);
} else {
return promesa$protocols$ICloseable$_closed_QMARK_$dyn_34094(it);
}
});

var promesa$protocols$ICloseable$_close_BANG_$dyn_34097 = (function() {
var G__34098 = null;
var G__34098__1 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._close_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._close_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("ICloseable.-close!",it);
}
}
});
var G__34098__2 = (function (it,reason){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._close_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(it,reason) : m__4551__auto__.call(null,it,reason));
} else {
var m__4549__auto__ = (promesa.protocols._close_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(it,reason) : m__4549__auto__.call(null,it,reason));
} else {
throw cljs.core.missing_protocol("ICloseable.-close!",it);
}
}
});
G__34098 = function(it,reason){
switch(arguments.length){
case 1:
return G__34098__1.call(this,it);
case 2:
return G__34098__2.call(this,it,reason);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34098.cljs$core$IFn$_invoke$arity$1 = G__34098__1;
G__34098.cljs$core$IFn$_invoke$arity$2 = G__34098__2;
return G__34098;
})()
;
promesa.protocols._close_BANG_ = (function promesa$protocols$_close_BANG_(var_args){
var G__33764 = arguments.length;
switch (G__33764) {
case 1:
return promesa.protocols._close_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.protocols._close_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._close_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (it){
if((((!((it == null)))) && ((!((it.promesa$protocols$ICloseable$_close_BANG_$arity$1 == null)))))){
return it.promesa$protocols$ICloseable$_close_BANG_$arity$1(it);
} else {
return promesa$protocols$ICloseable$_close_BANG_$dyn_34097(it);
}
}));

(promesa.protocols._close_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (it,reason){
if((((!((it == null)))) && ((!((it.promesa$protocols$ICloseable$_close_BANG_$arity$2 == null)))))){
return it.promesa$protocols$ICloseable$_close_BANG_$arity$2(it,reason);
} else {
return promesa$protocols$ICloseable$_close_BANG_$dyn_34097(it,reason);
}
}));

(promesa.protocols._close_BANG_.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
promesa.protocols.IBuffer = function(){};

var promesa$protocols$IBuffer$_full_QMARK_$dyn_34100 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._full_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._full_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("IBuffer.-full?",it);
}
}
});
promesa.protocols._full_QMARK_ = (function promesa$protocols$_full_QMARK_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IBuffer$_full_QMARK_$arity$1 == null)))))){
return it.promesa$protocols$IBuffer$_full_QMARK_$arity$1(it);
} else {
return promesa$protocols$IBuffer$_full_QMARK_$dyn_34100(it);
}
});

var promesa$protocols$IBuffer$_poll_BANG_$dyn_34101 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._poll_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._poll_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("IBuffer.-poll!",it);
}
}
});
promesa.protocols._poll_BANG_ = (function promesa$protocols$_poll_BANG_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IBuffer$_poll_BANG_$arity$1 == null)))))){
return it.promesa$protocols$IBuffer$_poll_BANG_$arity$1(it);
} else {
return promesa$protocols$IBuffer$_poll_BANG_$dyn_34101(it);
}
});

var promesa$protocols$IBuffer$_offer_BANG_$dyn_34102 = (function (it,val){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._offer_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(it,val) : m__4551__auto__.call(null,it,val));
} else {
var m__4549__auto__ = (promesa.protocols._offer_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(it,val) : m__4549__auto__.call(null,it,val));
} else {
throw cljs.core.missing_protocol("IBuffer.-offer!",it);
}
}
});
promesa.protocols._offer_BANG_ = (function promesa$protocols$_offer_BANG_(it,val){
if((((!((it == null)))) && ((!((it.promesa$protocols$IBuffer$_offer_BANG_$arity$2 == null)))))){
return it.promesa$protocols$IBuffer$_offer_BANG_$arity$2(it,val);
} else {
return promesa$protocols$IBuffer$_offer_BANG_$dyn_34102(it,val);
}
});

var promesa$protocols$IBuffer$_size$dyn_34103 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._size[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._size["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("IBuffer.-size",it);
}
}
});
promesa.protocols._size = (function promesa$protocols$_size(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IBuffer$_size$arity$1 == null)))))){
return it.promesa$protocols$IBuffer$_size$arity$1(it);
} else {
return promesa$protocols$IBuffer$_size$dyn_34103(it);
}
});


/**
 * @interface
 */
promesa.protocols.IHandler = function(){};

var promesa$protocols$IHandler$_active_QMARK_$dyn_34105 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._active_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._active_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("IHandler.-active?",it);
}
}
});
promesa.protocols._active_QMARK_ = (function promesa$protocols$_active_QMARK_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IHandler$_active_QMARK_$arity$1 == null)))))){
return it.promesa$protocols$IHandler$_active_QMARK_$arity$1(it);
} else {
return promesa$protocols$IHandler$_active_QMARK_$dyn_34105(it);
}
});

var promesa$protocols$IHandler$_commit_BANG_$dyn_34106 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._commit_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._commit_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("IHandler.-commit!",it);
}
}
});
promesa.protocols._commit_BANG_ = (function promesa$protocols$_commit_BANG_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IHandler$_commit_BANG_$arity$1 == null)))))){
return it.promesa$protocols$IHandler$_commit_BANG_$arity$1(it);
} else {
return promesa$protocols$IHandler$_commit_BANG_$dyn_34106(it);
}
});

var promesa$protocols$IHandler$_blockable_QMARK_$dyn_34107 = (function (it){
var x__4550__auto__ = (((it == null))?null:it);
var m__4551__auto__ = (promesa.protocols._blockable_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4551__auto__.call(null,it));
} else {
var m__4549__auto__ = (promesa.protocols._blockable_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(it) : m__4549__auto__.call(null,it));
} else {
throw cljs.core.missing_protocol("IHandler.-blockable?",it);
}
}
});
promesa.protocols._blockable_QMARK_ = (function promesa$protocols$_blockable_QMARK_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IHandler$_blockable_QMARK_$arity$1 == null)))))){
return it.promesa$protocols$IHandler$_blockable_QMARK_$arity$1(it);
} else {
return promesa$protocols$IHandler$_blockable_QMARK_$dyn_34107(it);
}
});


//# sourceMappingURL=promesa.protocols.js.map
