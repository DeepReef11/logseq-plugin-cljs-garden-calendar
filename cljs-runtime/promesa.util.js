goog.provide('promesa.util');
/**
 * Create a handler, mainly for combine two separate functions
 *   into a single callbale.
 */
promesa.util.handler = (function promesa$util$handler(fv,fc){
return (function (v,c){
if(cljs.core.truth_(c)){
return (fc.cljs$core$IFn$_invoke$arity$1 ? fc.cljs$core$IFn$_invoke$arity$1(c) : fc.call(null,c));
} else {
return (fv.cljs$core$IFn$_invoke$arity$1 ? fv.cljs$core$IFn$_invoke$arity$1(v) : fv.call(null,v));
}
});
});
promesa.util.has_method_QMARK_ = (function promesa$util$has_method_QMARK_(klass,name){
var methods$ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (method){
return method.getName();
})),klass.getDeclaredMethods());
return cljs.core.contains_QMARK_(methods$,name);
});
promesa.util.maybe_deref = (function promesa$util$maybe_deref(o){
if(cljs.core.delay_QMARK_(o)){
return cljs.core.deref(o);
} else {
return o;
}
});
promesa.util.mutex = (function promesa$util$mutex(){
if((typeof promesa !== 'undefined') && (typeof promesa.util !== 'undefined') && (typeof promesa.util.t_promesa$util46124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {promesa.protocols.ILock}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.util.t_promesa$util46124 = (function (meta46125){
this.meta46125 = meta46125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(promesa.util.t_promesa$util46124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46126,meta46125__$1){
var self__ = this;
var _46126__$1 = this;
return (new promesa.util.t_promesa$util46124(meta46125__$1));
}));

(promesa.util.t_promesa$util46124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46126){
var self__ = this;
var _46126__$1 = this;
return self__.meta46125;
}));

(promesa.util.t_promesa$util46124.prototype.promesa$protocols$ILock$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.util.t_promesa$util46124.prototype.promesa$protocols$ILock$_lock_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(promesa.util.t_promesa$util46124.prototype.promesa$protocols$ILock$_unlock_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(promesa.util.t_promesa$util46124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta46125","meta46125",521578001,null)], null);
}));

(promesa.util.t_promesa$util46124.cljs$lang$type = true);

(promesa.util.t_promesa$util46124.cljs$lang$ctorStr = "promesa.util/t_promesa$util46124");

(promesa.util.t_promesa$util46124.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"promesa.util/t_promesa$util46124");
}));

/**
 * Positional factory function for promesa.util/t_promesa$util46124.
 */
promesa.util.__GT_t_promesa$util46124 = (function promesa$util$mutex_$___GT_t_promesa$util46124(meta46125){
return (new promesa.util.t_promesa$util46124(meta46125));
});

}

return (new promesa.util.t_promesa$util46124(cljs.core.PersistentArrayMap.EMPTY));
});
promesa.util.try_STAR_ = (function promesa$util$try_STAR_(f,on_error){
try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}catch (e46187){var e = e46187;
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(e) : on_error.call(null,e));
}});

//# sourceMappingURL=promesa.util.js.map
