goog.provide('datascript.lru');


/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.lru.LRU = (function (key_value,gen_key,key_gen,gen,limit){
this.key_value = key_value;
this.gen_key = gen_key;
this.key_gen = key_gen;
this.gen = gen;
this.limit = limit;
this.cljs$lang$protocol_mask$partition0$ = 2147484416;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(datascript.lru.LRU.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
return (datascript.lru.assoc_lru.cljs$core$IFn$_invoke$arity$3 ? datascript.lru.assoc_lru.cljs$core$IFn$_invoke$arity$3(this$__$1,k,v) : datascript.lru.assoc_lru.call(null,this$__$1,k,v));
}));

(datascript.lru.LRU.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.key_value,k);
}));

(datascript.lru.LRU.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._lookup(self__.key_value,k,null);
}));

(datascript.lru.LRU.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
return cljs.core._lookup(self__.key_value,k,nf);
}));

(datascript.lru.LRU.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.key_value,writer,opts);
}));

(datascript.lru.LRU.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-value","key-value",1605624688,null),new cljs.core.Symbol(null,"gen-key","gen-key",392707442,null),new cljs.core.Symbol(null,"key-gen","key-gen",415199034,null),new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Symbol(null,"limit","limit",284709164,null)], null);
}));

(datascript.lru.LRU.cljs$lang$type = true);

(datascript.lru.LRU.cljs$lang$ctorStr = "datascript.lru/LRU");

(datascript.lru.LRU.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"datascript.lru/LRU");
}));

/**
 * Positional factory function for datascript.lru/LRU.
 */
datascript.lru.__GT_LRU = (function datascript$lru$__GT_LRU(key_value,gen_key,key_gen,gen,limit){
return (new datascript.lru.LRU(key_value,gen_key,key_gen,gen,limit));
});

datascript.lru.assoc_lru = (function datascript$lru$assoc_lru(lru,k,v){
var key_value = lru.key_value;
var gen_key = lru.gen_key;
var key_gen = lru.key_gen;
var gen = lru.gen;
var limit = lru.limit;
var temp__5751__auto__ = (key_gen.cljs$core$IFn$_invoke$arity$2 ? key_gen.cljs$core$IFn$_invoke$arity$2(k,null) : key_gen.call(null,k,null));
if(cljs.core.truth_(temp__5751__auto__)){
var g = temp__5751__auto__;
return (new datascript.lru.LRU(key_value,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(gen_key,g),gen,k),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(key_gen,k,gen),(gen + (1)),limit));
} else {
var G__27562 = (new datascript.lru.LRU(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(key_value,k,v),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(gen_key,gen,k),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(key_gen,k,gen),(gen + (1)),limit));
return (datascript.lru.cleanup_lru.cljs$core$IFn$_invoke$arity$1 ? datascript.lru.cleanup_lru.cljs$core$IFn$_invoke$arity$1(G__27562) : datascript.lru.cleanup_lru.call(null,G__27562));
}
});
datascript.lru.cleanup_lru = (function datascript$lru$cleanup_lru(lru){
if((cljs.core.count(lru.key_value) > lru.limit)){
var key_value = lru.key_value;
var gen_key = lru.gen_key;
var key_gen = lru.key_gen;
var gen = lru.gen;
var limit = lru.limit;
var vec__27571 = cljs.core.first(gen_key);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27571,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27571,(1),null);
return (new datascript.lru.LRU(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(key_value,k),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(gen_key,g),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(key_gen,k),gen,limit));
} else {
return lru;
}
});
datascript.lru.lru = (function datascript$lru$lru(limit){
return (new datascript.lru.LRU(cljs.core.PersistentArrayMap.EMPTY,cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,(0),limit));
});

/**
 * @interface
 */
datascript.lru.ICache = function(){};

var datascript$lru$ICache$_get$dyn_27598 = (function (this$,key,compute_fn){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (datascript.lru._get[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,key,compute_fn) : m__4551__auto__.call(null,this$,key,compute_fn));
} else {
var m__4549__auto__ = (datascript.lru._get["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,key,compute_fn) : m__4549__auto__.call(null,this$,key,compute_fn));
} else {
throw cljs.core.missing_protocol("ICache.-get",this$);
}
}
});
datascript.lru._get = (function datascript$lru$_get(this$,key,compute_fn){
if((((!((this$ == null)))) && ((!((this$.datascript$lru$ICache$_get$arity$3 == null)))))){
return this$.datascript$lru$ICache$_get$arity$3(this$,key,compute_fn);
} else {
return datascript$lru$ICache$_get$dyn_27598(this$,key,compute_fn);
}
});

datascript.lru.cache = (function datascript$lru$cache(limit){
var _STAR_impl = cljs.core.volatile_BANG_(datascript.lru.lru(limit));
if((typeof datascript !== 'undefined') && (typeof datascript.lru !== 'undefined') && (typeof datascript.lru.t_datascript$lru27590 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {datascript.lru.ICache}
 * @implements {cljs.core.IWithMeta}
*/
datascript.lru.t_datascript$lru27590 = (function (limit,_STAR_impl,meta27591){
this.limit = limit;
this._STAR_impl = _STAR_impl;
this.meta27591 = meta27591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(datascript.lru.t_datascript$lru27590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27592,meta27591__$1){
var self__ = this;
var _27592__$1 = this;
return (new datascript.lru.t_datascript$lru27590(self__.limit,self__._STAR_impl,meta27591__$1));
}));

(datascript.lru.t_datascript$lru27590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27592){
var self__ = this;
var _27592__$1 = this;
return self__.meta27591;
}));

(datascript.lru.t_datascript$lru27590.prototype.datascript$lru$ICache$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.lru.t_datascript$lru27590.prototype.datascript$lru$ICache$_get$arity$3 = (function (this$,key,compute_fn){
var self__ = this;
var this$__$1 = this;
var temp__5755__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__._STAR_impl),key,null);
if((temp__5755__auto__ == null)){
var computed = (compute_fn.cljs$core$IFn$_invoke$arity$0 ? compute_fn.cljs$core$IFn$_invoke$arity$0() : compute_fn.call(null));
cljs.core._vreset_BANG_(self__._STAR_impl,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__._STAR_impl),key,computed));

return computed;
} else {
var cached = temp__5755__auto__;
return cached;
}
}));

(datascript.lru.t_datascript$lru27590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"limit","limit",284709164,null),new cljs.core.Symbol(null,"*impl","*impl",1858309677,null),new cljs.core.Symbol(null,"meta27591","meta27591",-1265543453,null)], null);
}));

(datascript.lru.t_datascript$lru27590.cljs$lang$type = true);

(datascript.lru.t_datascript$lru27590.cljs$lang$ctorStr = "datascript.lru/t_datascript$lru27590");

(datascript.lru.t_datascript$lru27590.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"datascript.lru/t_datascript$lru27590");
}));

/**
 * Positional factory function for datascript.lru/t_datascript$lru27590.
 */
datascript.lru.__GT_t_datascript$lru27590 = (function datascript$lru$cache_$___GT_t_datascript$lru27590(limit__$1,_STAR_impl__$1,meta27591){
return (new datascript.lru.t_datascript$lru27590(limit__$1,_STAR_impl__$1,meta27591));
});

}

return (new datascript.lru.t_datascript$lru27590(limit,_STAR_impl,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=datascript.lru.js.map
