goog.provide('promesa.protocols');

/**
 * @interface
 */
promesa.protocols.IPromise = function(){};

var promesa$protocols$IPromise$_fmap$dyn_28606 = (function() {
var G__28607 = null;
var G__28607__2 = (function (it,f){
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
var G__28607__3 = (function (it,f,executor){
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
G__28607 = function(it,f,executor){
switch(arguments.length){
case 2:
return G__28607__2.call(this,it,f);
case 3:
return G__28607__3.call(this,it,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28607.cljs$core$IFn$_invoke$arity$2 = G__28607__2;
G__28607.cljs$core$IFn$_invoke$arity$3 = G__28607__3;
return G__28607;
})()
;
/**
 * Apply function to a computation
 */
promesa.protocols._fmap = (function promesa$protocols$_fmap(var_args){
var G__28006 = arguments.length;
switch (G__28006) {
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
return promesa$protocols$IPromise$_fmap$dyn_28606(it,f);
}
}));

(promesa.protocols._fmap.cljs$core$IFn$_invoke$arity$3 = (function (it,f,executor){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_fmap$arity$3 == null)))))){
return it.promesa$protocols$IPromise$_fmap$arity$3(it,f,executor);
} else {
return promesa$protocols$IPromise$_fmap$dyn_28606(it,f,executor);
}
}));

(promesa.protocols._fmap.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_merr$dyn_28619 = (function() {
var G__28620 = null;
var G__28620__2 = (function (it,f){
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
var G__28620__3 = (function (it,f,executor){
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
G__28620 = function(it,f,executor){
switch(arguments.length){
case 2:
return G__28620__2.call(this,it,f);
case 3:
return G__28620__3.call(this,it,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28620.cljs$core$IFn$_invoke$arity$2 = G__28620__2;
G__28620.cljs$core$IFn$_invoke$arity$3 = G__28620__3;
return G__28620;
})()
;
/**
 * Apply function to a failed computation and flatten 1 level
 */
promesa.protocols._merr = (function promesa$protocols$_merr(var_args){
var G__28058 = arguments.length;
switch (G__28058) {
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
return promesa$protocols$IPromise$_merr$dyn_28619(it,f);
}
}));

(promesa.protocols._merr.cljs$core$IFn$_invoke$arity$3 = (function (it,f,executor){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_merr$arity$3 == null)))))){
return it.promesa$protocols$IPromise$_merr$arity$3(it,f,executor);
} else {
return promesa$protocols$IPromise$_merr$dyn_28619(it,f,executor);
}
}));

(promesa.protocols._merr.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_mcat$dyn_28634 = (function() {
var G__28635 = null;
var G__28635__2 = (function (it,f){
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
var G__28635__3 = (function (it,f,executor){
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
G__28635 = function(it,f,executor){
switch(arguments.length){
case 2:
return G__28635__2.call(this,it,f);
case 3:
return G__28635__3.call(this,it,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28635.cljs$core$IFn$_invoke$arity$2 = G__28635__2;
G__28635.cljs$core$IFn$_invoke$arity$3 = G__28635__3;
return G__28635;
})()
;
/**
 * Apply function to a computation and flatten 1 level
 */
promesa.protocols._mcat = (function promesa$protocols$_mcat(var_args){
var G__28093 = arguments.length;
switch (G__28093) {
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
return promesa$protocols$IPromise$_mcat$dyn_28634(it,f);
}
}));

(promesa.protocols._mcat.cljs$core$IFn$_invoke$arity$3 = (function (it,f,executor){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_mcat$arity$3 == null)))))){
return it.promesa$protocols$IPromise$_mcat$arity$3(it,f,executor);
} else {
return promesa$protocols$IPromise$_mcat$dyn_28634(it,f,executor);
}
}));

(promesa.protocols._mcat.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_hmap$dyn_28655 = (function() {
var G__28656 = null;
var G__28656__2 = (function (it,f){
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
var G__28656__3 = (function (it,f,executor){
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
G__28656 = function(it,f,executor){
switch(arguments.length){
case 2:
return G__28656__2.call(this,it,f);
case 3:
return G__28656__3.call(this,it,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28656.cljs$core$IFn$_invoke$arity$2 = G__28656__2;
G__28656.cljs$core$IFn$_invoke$arity$3 = G__28656__3;
return G__28656;
})()
;
/**
 * Apply function to a computation independently if is failed or
 *  successful.
 */
promesa.protocols._hmap = (function promesa$protocols$_hmap(var_args){
var G__28120 = arguments.length;
switch (G__28120) {
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
return promesa$protocols$IPromise$_hmap$dyn_28655(it,f);
}
}));

(promesa.protocols._hmap.cljs$core$IFn$_invoke$arity$3 = (function (it,f,executor){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_hmap$arity$3 == null)))))){
return it.promesa$protocols$IPromise$_hmap$arity$3(it,f,executor);
} else {
return promesa$protocols$IPromise$_hmap$dyn_28655(it,f,executor);
}
}));

(promesa.protocols._hmap.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_fnly$dyn_28674 = (function() {
var G__28675 = null;
var G__28675__2 = (function (it,f){
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
var G__28675__3 = (function (it,f,executor){
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
G__28675 = function(it,f,executor){
switch(arguments.length){
case 2:
return G__28675__2.call(this,it,f);
case 3:
return G__28675__3.call(this,it,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28675.cljs$core$IFn$_invoke$arity$2 = G__28675__2;
G__28675.cljs$core$IFn$_invoke$arity$3 = G__28675__3;
return G__28675;
})()
;
/**
 * Apply function to a computation independently if is failed or
 *  successful; the return value is ignored.
 */
promesa.protocols._fnly = (function promesa$protocols$_fnly(var_args){
var G__28139 = arguments.length;
switch (G__28139) {
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
return promesa$protocols$IPromise$_fnly$dyn_28674(it,f);
}
}));

(promesa.protocols._fnly.cljs$core$IFn$_invoke$arity$3 = (function (it,f,executor){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_fnly$arity$3 == null)))))){
return it.promesa$protocols$IPromise$_fnly$arity$3(it,f,executor);
} else {
return promesa$protocols$IPromise$_fnly$dyn_28674(it,f,executor);
}
}));

(promesa.protocols._fnly.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_then$dyn_28691 = (function() {
var G__28692 = null;
var G__28692__2 = (function (it,f){
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
var G__28692__3 = (function (it,f,executor){
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
G__28692 = function(it,f,executor){
switch(arguments.length){
case 2:
return G__28692__2.call(this,it,f);
case 3:
return G__28692__3.call(this,it,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28692.cljs$core$IFn$_invoke$arity$2 = G__28692__2;
G__28692.cljs$core$IFn$_invoke$arity$3 = G__28692__3;
return G__28692;
})()
;
/**
 * Apply function to a computation and flatten multiple levels
 */
promesa.protocols._then = (function promesa$protocols$_then(var_args){
var G__28185 = arguments.length;
switch (G__28185) {
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
return promesa$protocols$IPromise$_then$dyn_28691(it,f);
}
}));

(promesa.protocols._then.cljs$core$IFn$_invoke$arity$3 = (function (it,f,executor){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_then$arity$3 == null)))))){
return it.promesa$protocols$IPromise$_then$arity$3(it,f,executor);
} else {
return promesa$protocols$IPromise$_then$dyn_28691(it,f,executor);
}
}));

(promesa.protocols._then.cljs$lang$maxFixedArity = 3);



/**
 * Additional state/introspection abstraction.
 * @interface
 */
promesa.protocols.IState = function(){};

var promesa$protocols$IState$_extract$dyn_28705 = (function() {
var G__28707 = null;
var G__28707__1 = (function (it){
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
var G__28707__2 = (function (it,default$){
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
G__28707 = function(it,default$){
switch(arguments.length){
case 1:
return G__28707__1.call(this,it);
case 2:
return G__28707__2.call(this,it,default$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28707.cljs$core$IFn$_invoke$arity$1 = G__28707__1;
G__28707.cljs$core$IFn$_invoke$arity$2 = G__28707__2;
return G__28707;
})()
;
/**
 * Extract the current value.
 */
promesa.protocols._extract = (function promesa$protocols$_extract(var_args){
var G__28229 = arguments.length;
switch (G__28229) {
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
return promesa$protocols$IState$_extract$dyn_28705(it);
}
}));

(promesa.protocols._extract.cljs$core$IFn$_invoke$arity$2 = (function (it,default$){
if((((!((it == null)))) && ((!((it.promesa$protocols$IState$_extract$arity$2 == null)))))){
return it.promesa$protocols$IState$_extract$arity$2(it,default$);
} else {
return promesa$protocols$IState$_extract$dyn_28705(it,default$);
}
}));

(promesa.protocols._extract.cljs$lang$maxFixedArity = 2);


var promesa$protocols$IState$_resolved_QMARK_$dyn_28721 = (function (it){
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
return promesa$protocols$IState$_resolved_QMARK_$dyn_28721(it);
}
});

var promesa$protocols$IState$_rejected_QMARK_$dyn_28735 = (function (it){
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
return promesa$protocols$IState$_rejected_QMARK_$dyn_28735(it);
}
});

var promesa$protocols$IState$_pending_QMARK_$dyn_28743 = (function (it){
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
return promesa$protocols$IState$_pending_QMARK_$dyn_28743(it);
}
});


/**
 * A promise constructor abstraction.
 * @interface
 */
promesa.protocols.IPromiseFactory = function(){};

var promesa$protocols$IPromiseFactory$_promise$dyn_28760 = (function (it){
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
return promesa$protocols$IPromiseFactory$_promise$dyn_28760(it);
}
});


/**
 * A cancellation abstraction.
 * @interface
 */
promesa.protocols.ICancellable = function(){};

var promesa$protocols$ICancellable$_cancel_BANG_$dyn_28778 = (function (it){
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
return promesa$protocols$ICancellable$_cancel_BANG_$dyn_28778(it);
}
});

var promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_28789 = (function (it){
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
return promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_28789(it);
}
});


/**
 * @interface
 */
promesa.protocols.ICompletable = function(){};

var promesa$protocols$ICompletable$_resolve_BANG_$dyn_28794 = (function (it,v){
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
return promesa$protocols$ICompletable$_resolve_BANG_$dyn_28794(it,v);
}
});

var promesa$protocols$ICompletable$_reject_BANG_$dyn_28797 = (function (it,e){
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
return promesa$protocols$ICompletable$_reject_BANG_$dyn_28797(it,e);
}
});


/**
 * @interface
 */
promesa.protocols.IExecutor = function(){};

var promesa$protocols$IExecutor$_exec_BANG_$dyn_28804 = (function (it,task){
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
return promesa$protocols$IExecutor$_exec_BANG_$dyn_28804(it,task);
}
});

var promesa$protocols$IExecutor$_run_BANG_$dyn_28808 = (function (it,task){
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
return promesa$protocols$IExecutor$_run_BANG_$dyn_28808(it,task);
}
});

var promesa$protocols$IExecutor$_submit_BANG_$dyn_28810 = (function (it,task){
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
return promesa$protocols$IExecutor$_submit_BANG_$dyn_28810(it,task);
}
});


/**
 * A generic abstraction for scheduler facilities.
 * @interface
 */
promesa.protocols.IScheduler = function(){};

var promesa$protocols$IScheduler$_schedule_BANG_$dyn_28813 = (function (it,ms,func){
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
return promesa$protocols$IScheduler$_schedule_BANG_$dyn_28813(it,ms,func);
}
});


/**
 * An experimental semaphore protocol, used internally; no public api
 * @interface
 */
promesa.protocols.ISemaphore = function(){};

var promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_28818 = (function() {
var G__28819 = null;
var G__28819__1 = (function (it){
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
var G__28819__2 = (function (it,n){
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
var G__28819__3 = (function (it,n,t){
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
G__28819 = function(it,n,t){
switch(arguments.length){
case 1:
return G__28819__1.call(this,it);
case 2:
return G__28819__2.call(this,it,n);
case 3:
return G__28819__3.call(this,it,n,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28819.cljs$core$IFn$_invoke$arity$1 = G__28819__1;
G__28819.cljs$core$IFn$_invoke$arity$2 = G__28819__2;
G__28819.cljs$core$IFn$_invoke$arity$3 = G__28819__3;
return G__28819;
})()
;
/**
 * Try acquire n or n permits, non-blocking or optional timeout
 */
promesa.protocols._try_acquire_BANG_ = (function promesa$protocols$_try_acquire_BANG_(var_args){
var G__28435 = arguments.length;
switch (G__28435) {
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
return promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_28818(it);
}
}));

(promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (it,n){
if((((!((it == null)))) && ((!((it.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$2 == null)))))){
return it.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$2(it,n);
} else {
return promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_28818(it,n);
}
}));

(promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (it,n,t){
if((((!((it == null)))) && ((!((it.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$3 == null)))))){
return it.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$3(it,n,t);
} else {
return promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_28818(it,n,t);
}
}));

(promesa.protocols._try_acquire_BANG_.cljs$lang$maxFixedArity = 3);


var promesa$protocols$ISemaphore$_acquire_BANG_$dyn_28827 = (function() {
var G__28828 = null;
var G__28828__1 = (function (it){
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
var G__28828__2 = (function (it,n){
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
G__28828 = function(it,n){
switch(arguments.length){
case 1:
return G__28828__1.call(this,it);
case 2:
return G__28828__2.call(this,it,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28828.cljs$core$IFn$_invoke$arity$1 = G__28828__1;
G__28828.cljs$core$IFn$_invoke$arity$2 = G__28828__2;
return G__28828;
})()
;
/**
 * Acquire 1 or N permits
 */
promesa.protocols._acquire_BANG_ = (function promesa$protocols$_acquire_BANG_(var_args){
var G__28455 = arguments.length;
switch (G__28455) {
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
return promesa$protocols$ISemaphore$_acquire_BANG_$dyn_28827(it);
}
}));

(promesa.protocols._acquire_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (it,n){
if((((!((it == null)))) && ((!((it.promesa$protocols$ISemaphore$_acquire_BANG_$arity$2 == null)))))){
return it.promesa$protocols$ISemaphore$_acquire_BANG_$arity$2(it,n);
} else {
return promesa$protocols$ISemaphore$_acquire_BANG_$dyn_28827(it,n);
}
}));

(promesa.protocols._acquire_BANG_.cljs$lang$maxFixedArity = 2);


var promesa$protocols$ISemaphore$_release_BANG_$dyn_28836 = (function() {
var G__28837 = null;
var G__28837__1 = (function (it){
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
var G__28837__2 = (function (it,n){
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
G__28837 = function(it,n){
switch(arguments.length){
case 1:
return G__28837__1.call(this,it);
case 2:
return G__28837__2.call(this,it,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28837.cljs$core$IFn$_invoke$arity$1 = G__28837__1;
G__28837.cljs$core$IFn$_invoke$arity$2 = G__28837__2;
return G__28837;
})()
;
/**
 * Release 1 or N permits
 */
promesa.protocols._release_BANG_ = (function promesa$protocols$_release_BANG_(var_args){
var G__28461 = arguments.length;
switch (G__28461) {
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
return promesa$protocols$ISemaphore$_release_BANG_$dyn_28836(it);
}
}));

(promesa.protocols._release_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (it,n){
if((((!((it == null)))) && ((!((it.promesa$protocols$ISemaphore$_release_BANG_$arity$2 == null)))))){
return it.promesa$protocols$ISemaphore$_release_BANG_$arity$2(it,n);
} else {
return promesa$protocols$ISemaphore$_release_BANG_$dyn_28836(it,n);
}
}));

(promesa.protocols._release_BANG_.cljs$lang$maxFixedArity = 2);



/**
 * An experimental lock protocol, used internally; no public api
 * @interface
 */
promesa.protocols.ILock = function(){};

var promesa$protocols$ILock$_lock_BANG_$dyn_28846 = (function (it){
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
return promesa$protocols$ILock$_lock_BANG_$dyn_28846(it);
}
});

var promesa$protocols$ILock$_unlock_BANG_$dyn_28852 = (function (it){
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
return promesa$protocols$ILock$_unlock_BANG_$dyn_28852(it);
}
});


/**
 * @interface
 */
promesa.protocols.IReadChannel = function(){};

var promesa$protocols$IReadChannel$_take_BANG_$dyn_28855 = (function (it,handler){
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
return promesa$protocols$IReadChannel$_take_BANG_$dyn_28855(it,handler);
}
});


/**
 * @interface
 */
promesa.protocols.IWriteChannel = function(){};

var promesa$protocols$IWriteChannel$_put_BANG_$dyn_28857 = (function (it,val,handler){
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
return promesa$protocols$IWriteChannel$_put_BANG_$dyn_28857(it,val,handler);
}
});


/**
 * @interface
 */
promesa.protocols.IChannelInternal = function(){};

var promesa$protocols$IChannelInternal$_cleanup_BANG_$dyn_28860 = (function (it){
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
return promesa$protocols$IChannelInternal$_cleanup_BANG_$dyn_28860(it);
}
});


/**
 * @interface
 */
promesa.protocols.IChannelMultiplexer = function(){};

var promesa$protocols$IChannelMultiplexer$_tap_BANG_$dyn_28861 = (function (it,ch,close_QMARK_){
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
return promesa$protocols$IChannelMultiplexer$_tap_BANG_$dyn_28861(it,ch,close_QMARK_);
}
});

var promesa$protocols$IChannelMultiplexer$_untap_BANG_$dyn_28867 = (function (it,ch){
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
return promesa$protocols$IChannelMultiplexer$_untap_BANG_$dyn_28867(it,ch);
}
});


/**
 * @interface
 */
promesa.protocols.ICloseable = function(){};

var promesa$protocols$ICloseable$_closed_QMARK_$dyn_28873 = (function (it){
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
return promesa$protocols$ICloseable$_closed_QMARK_$dyn_28873(it);
}
});

var promesa$protocols$ICloseable$_close_BANG_$dyn_28879 = (function() {
var G__28880 = null;
var G__28880__1 = (function (it){
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
var G__28880__2 = (function (it,reason){
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
G__28880 = function(it,reason){
switch(arguments.length){
case 1:
return G__28880__1.call(this,it);
case 2:
return G__28880__2.call(this,it,reason);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28880.cljs$core$IFn$_invoke$arity$1 = G__28880__1;
G__28880.cljs$core$IFn$_invoke$arity$2 = G__28880__2;
return G__28880;
})()
;
promesa.protocols._close_BANG_ = (function promesa$protocols$_close_BANG_(var_args){
var G__28531 = arguments.length;
switch (G__28531) {
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
return promesa$protocols$ICloseable$_close_BANG_$dyn_28879(it);
}
}));

(promesa.protocols._close_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (it,reason){
if((((!((it == null)))) && ((!((it.promesa$protocols$ICloseable$_close_BANG_$arity$2 == null)))))){
return it.promesa$protocols$ICloseable$_close_BANG_$arity$2(it,reason);
} else {
return promesa$protocols$ICloseable$_close_BANG_$dyn_28879(it,reason);
}
}));

(promesa.protocols._close_BANG_.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
promesa.protocols.IBuffer = function(){};

var promesa$protocols$IBuffer$_full_QMARK_$dyn_28892 = (function (it){
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
return promesa$protocols$IBuffer$_full_QMARK_$dyn_28892(it);
}
});

var promesa$protocols$IBuffer$_poll_BANG_$dyn_28898 = (function (it){
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
return promesa$protocols$IBuffer$_poll_BANG_$dyn_28898(it);
}
});

var promesa$protocols$IBuffer$_offer_BANG_$dyn_28904 = (function (it,val){
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
return promesa$protocols$IBuffer$_offer_BANG_$dyn_28904(it,val);
}
});

var promesa$protocols$IBuffer$_size$dyn_28905 = (function (it){
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
return promesa$protocols$IBuffer$_size$dyn_28905(it);
}
});


/**
 * @interface
 */
promesa.protocols.IHandler = function(){};

var promesa$protocols$IHandler$_active_QMARK_$dyn_28909 = (function (it){
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
return promesa$protocols$IHandler$_active_QMARK_$dyn_28909(it);
}
});

var promesa$protocols$IHandler$_commit_BANG_$dyn_28919 = (function (it){
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
return promesa$protocols$IHandler$_commit_BANG_$dyn_28919(it);
}
});

var promesa$protocols$IHandler$_blockable_QMARK_$dyn_28935 = (function (it){
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
return promesa$protocols$IHandler$_blockable_QMARK_$dyn_28935(it);
}
});


//# sourceMappingURL=promesa.protocols.js.map
