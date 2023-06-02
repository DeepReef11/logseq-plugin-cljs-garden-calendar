goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36208 = arguments.length;
var i__4865__auto___36209 = (0);
while(true){
if((i__4865__auto___36209 < len__4864__auto___36208)){
args__4870__auto__.push((arguments[i__4865__auto___36209]));

var G__36210 = (i__4865__auto___36209 + (1));
i__4865__auto___36209 = G__36210;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__36003_36211 = keyvals;
var vec__36004_36212 = G__36003_36211;
var seq__36005_36213 = cljs.core.seq(vec__36004_36212);
var first__36006_36214 = cljs.core.first(seq__36005_36213);
var seq__36005_36215__$1 = cljs.core.next(seq__36005_36213);
var k_36216 = first__36006_36214;
var first__36006_36217__$1 = cljs.core.first(seq__36005_36215__$1);
var seq__36005_36218__$2 = cljs.core.next(seq__36005_36215__$1);
var v_36219 = first__36006_36217__$1;
var keyvals_36220__$1 = seq__36005_36218__$2;
var G__36003_36221__$1 = G__36003_36211;
while(true){
var vec__36007_36222 = G__36003_36221__$1;
var seq__36008_36223 = cljs.core.seq(vec__36007_36222);
var first__36009_36224 = cljs.core.first(seq__36008_36223);
var seq__36008_36225__$1 = cljs.core.next(seq__36008_36223);
var k_36226__$1 = first__36009_36224;
var first__36009_36227__$1 = cljs.core.first(seq__36008_36225__$1);
var seq__36008_36228__$2 = cljs.core.next(seq__36008_36225__$1);
var v_36229__$1 = first__36009_36227__$1;
var keyvals_36230__$2 = seq__36008_36228__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_36226__$1)] = v_36229__$1);

if(keyvals_36230__$2){
var G__36231 = keyvals_36230__$2;
G__36003_36221__$1 = G__36231;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq35993){
var G__35994 = cljs.core.first(seq35993);
var seq35993__$1 = cljs.core.next(seq35993);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35994,seq35993__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__36021 = arguments.length;
switch (G__36021) {
case 1:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1 = (function (k){
return (function (obj){
var obj36023 = obj;
if((!((obj36023 == null)))){
return (obj36023[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj36027 = obj;
if((!((obj36027 == null)))){
return (obj36027[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__35383__auto__ = (function (){var obj36029 = obj;
if((!((obj36029 == null)))){
return (obj36029[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__35383__auto__)){
return not_found;
} else {
return val__35383__auto__;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__36036 = arguments.length;
switch (G__36036) {
case 1:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
var ks__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks);
return (function (obj){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,ks__$1);
});
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj36039 = self__.obj;
if((!((obj36039 == null)))){
return (obj36039[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__35383__auto__ = (function (){var obj36042 = self__.obj;
if((!((obj36042 == null)))){
return (obj36042[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__35383__auto__)){
return not_found;
} else {
return val__35383__auto__;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36245 = arguments.length;
var i__4865__auto___36246 = (0);
while(true){
if((i__4865__auto___36246 < len__4864__auto___36245)){
args__4870__auto__.push((arguments[i__4865__auto___36246]));

var G__36247 = (i__4865__auto___36246 + (1));
i__4865__auto___36246 = G__36247;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__36054 = keyvals;
var vec__36055 = G__36054;
var seq__36056 = cljs.core.seq(vec__36055);
var first__36057 = cljs.core.first(seq__36056);
var seq__36056__$1 = cljs.core.next(seq__36056);
var k = first__36057;
var first__36057__$1 = cljs.core.first(seq__36056__$1);
var seq__36056__$2 = cljs.core.next(seq__36056__$1);
var v = first__36057__$1;
var kvs = seq__36056__$2;
var G__36054__$1 = G__36054;
while(true){
var vec__36058 = G__36054__$1;
var seq__36059 = cljs.core.seq(vec__36058);
var first__36060 = cljs.core.first(seq__36059);
var seq__36059__$1 = cljs.core.next(seq__36059);
var k__$1 = first__36060;
var first__36060__$1 = cljs.core.first(seq__36059__$1);
var seq__36059__$2 = cljs.core.next(seq__36059__$1);
var v__$1 = first__36060__$1;
var kvs__$1 = seq__36059__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__36251 = kvs__$1;
G__36054__$1 = G__36251;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq36046){
var G__36047 = cljs.core.first(seq36046);
var seq36046__$1 = cljs.core.next(seq36046);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36047,seq36046__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36253 = arguments.length;
var i__4865__auto___36254 = (0);
while(true){
if((i__4865__auto___36254 < len__4864__auto___36253)){
args__4870__auto__.push((arguments[i__4865__auto___36254]));

var G__36255 = (i__4865__auto___36254 + (1));
i__4865__auto___36254 = G__36255;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq36063){
var G__36064 = cljs.core.first(seq36063);
var seq36063__$1 = cljs.core.next(seq36063);
var G__36065 = cljs.core.first(seq36063__$1);
var seq36063__$2 = cljs.core.next(seq36063__$1);
var G__36066 = cljs.core.first(seq36063__$2);
var seq36063__$3 = cljs.core.next(seq36063__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36064,G__36065,G__36066,seq36063__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36256 = arguments.length;
var i__4865__auto___36257 = (0);
while(true){
if((i__4865__auto___36257 < len__4864__auto___36256)){
args__4870__auto__.push((arguments[i__4865__auto___36257]));

var G__36258 = (i__4865__auto___36257 + (1));
i__4865__auto___36257 = G__36258;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq36076){
var G__36077 = cljs.core.first(seq36076);
var seq36076__$1 = cljs.core.next(seq36076);
var G__36078 = cljs.core.first(seq36076__$1);
var seq36076__$2 = cljs.core.next(seq36076__$1);
var G__36079 = cljs.core.first(seq36076__$2);
var seq36076__$3 = cljs.core.next(seq36076__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36077,G__36078,G__36079,seq36076__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend! o other)
 *   (j/extend! o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__36089 = arguments.length;
switch (G__36089) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___36267 = arguments.length;
var i__4865__auto___36268 = (0);
while(true){
if((i__4865__auto___36268 < len__4864__auto___36267)){
args_arr__4885__auto__.push((arguments[i__4865__auto___36268]));

var G__36270 = (i__4865__auto___36268 + (1));
i__4865__auto___36268 = G__36270;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__36100_36271 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__36101_36272 = null;
var count__36102_36273 = (0);
var i__36103_36274 = (0);
while(true){
if((i__36103_36274 < count__36102_36273)){
var k_36275 = chunk__36101_36272.cljs$core$IIndexed$_nth$arity$2(null,i__36103_36274);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_36275,applied_science.js_interop.unchecked_get(x,k_36275)], 0));


var G__36276 = seq__36100_36271;
var G__36277 = chunk__36101_36272;
var G__36278 = count__36102_36273;
var G__36279 = (i__36103_36274 + (1));
seq__36100_36271 = G__36276;
chunk__36101_36272 = G__36277;
count__36102_36273 = G__36278;
i__36103_36274 = G__36279;
continue;
} else {
var temp__5753__auto___36280 = cljs.core.seq(seq__36100_36271);
if(temp__5753__auto___36280){
var seq__36100_36281__$1 = temp__5753__auto___36280;
if(cljs.core.chunked_seq_QMARK_(seq__36100_36281__$1)){
var c__4679__auto___36282 = cljs.core.chunk_first(seq__36100_36281__$1);
var G__36283 = cljs.core.chunk_rest(seq__36100_36281__$1);
var G__36284 = c__4679__auto___36282;
var G__36285 = cljs.core.count(c__4679__auto___36282);
var G__36286 = (0);
seq__36100_36271 = G__36283;
chunk__36101_36272 = G__36284;
count__36102_36273 = G__36285;
i__36103_36274 = G__36286;
continue;
} else {
var k_36287 = cljs.core.first(seq__36100_36281__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_36287,applied_science.js_interop.unchecked_get(x,k_36287)], 0));


var G__36289 = cljs.core.next(seq__36100_36281__$1);
var G__36290 = null;
var G__36291 = (0);
var G__36292 = (0);
seq__36100_36271 = G__36289;
chunk__36101_36272 = G__36290;
count__36102_36273 = G__36291;
i__36103_36274 = G__36292;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq36086){
var G__36087 = cljs.core.first(seq36086);
var seq36086__$1 = cljs.core.next(seq36086);
var G__36088 = cljs.core.first(seq36086__$1);
var seq36086__$2 = cljs.core.next(seq36086__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36087,G__36088,seq36086__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__36113 = array;
G__36113.push(x);

return G__36113;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__36116 = array;
G__36116.unshift(x);

return G__36116;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36298 = arguments.length;
var i__4865__auto___36299 = (0);
while(true){
if((i__4865__auto___36299 < len__4864__auto___36298)){
args__4870__auto__.push((arguments[i__4865__auto___36299]));

var G__36300 = (i__4865__auto___36299 + (1));
i__4865__auto___36299 = G__36300;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj36126 = obj;
if((!((obj36126 == null)))){
return (obj36126[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq36117){
var G__36118 = cljs.core.first(seq36117);
var seq36117__$1 = cljs.core.next(seq36117);
var G__36119 = cljs.core.first(seq36117__$1);
var seq36117__$2 = cljs.core.next(seq36117__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36118,G__36119,seq36117__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj36127 = obj;
if((!((obj36127 == null)))){
return (obj36127[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36304 = arguments.length;
var i__4865__auto___36305 = (0);
while(true){
if((i__4865__auto___36305 < len__4864__auto___36304)){
args__4870__auto__.push((arguments[i__4865__auto___36305]));

var G__36312 = (i__4865__auto___36305 + (1));
i__4865__auto___36305 = G__36312;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq36129){
var G__36130 = cljs.core.first(seq36129);
var seq36129__$1 = cljs.core.next(seq36129);
var G__36131 = cljs.core.first(seq36129__$1);
var seq36129__$2 = cljs.core.next(seq36129__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36130,G__36131,seq36129__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36323 = arguments.length;
var i__4865__auto___36324 = (0);
while(true){
if((i__4865__auto___36324 < len__4864__auto___36323)){
args__4870__auto__.push((arguments[i__4865__auto___36324]));

var G__36325 = (i__4865__auto___36324 + (1));
i__4865__auto___36324 = G__36325;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__36139_36329 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__36140_36330 = null;
var count__36141_36331 = (0);
var i__36142_36332 = (0);
while(true){
if((i__36142_36332 < count__36141_36331)){
var vec__36169_36333 = chunk__36140_36330.cljs$core$IIndexed$_nth$arity$2(null,i__36142_36332);
var k_36334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36169_36333,(0),null);
var v_36335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36169_36333,(1),null);
var obj36173_36336 = obj;
var obj36175_36337 = (((!((obj36173_36336 == null))))?obj36173_36336:({}));
(obj36175_36337[applied_science.js_interop.impl.wrap_key(k_36334)] = v_36335);



var G__36338 = seq__36139_36329;
var G__36339 = chunk__36140_36330;
var G__36340 = count__36141_36331;
var G__36341 = (i__36142_36332 + (1));
seq__36139_36329 = G__36338;
chunk__36140_36330 = G__36339;
count__36141_36331 = G__36340;
i__36142_36332 = G__36341;
continue;
} else {
var temp__5753__auto___36342 = cljs.core.seq(seq__36139_36329);
if(temp__5753__auto___36342){
var seq__36139_36346__$1 = temp__5753__auto___36342;
if(cljs.core.chunked_seq_QMARK_(seq__36139_36346__$1)){
var c__4679__auto___36347 = cljs.core.chunk_first(seq__36139_36346__$1);
var G__36348 = cljs.core.chunk_rest(seq__36139_36346__$1);
var G__36349 = c__4679__auto___36347;
var G__36350 = cljs.core.count(c__4679__auto___36347);
var G__36351 = (0);
seq__36139_36329 = G__36348;
chunk__36140_36330 = G__36349;
count__36141_36331 = G__36350;
i__36142_36332 = G__36351;
continue;
} else {
var vec__36184_36352 = cljs.core.first(seq__36139_36346__$1);
var k_36353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36184_36352,(0),null);
var v_36354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36184_36352,(1),null);
var obj36189_36355 = obj;
var obj36191_36356 = (((!((obj36189_36355 == null))))?obj36189_36355:({}));
(obj36191_36356[applied_science.js_interop.impl.wrap_key(k_36353)] = v_36354);



var G__36357 = cljs.core.next(seq__36139_36346__$1);
var G__36358 = null;
var G__36359 = (0);
var G__36360 = (0);
seq__36139_36329 = G__36357;
chunk__36140_36330 = G__36358;
count__36141_36331 = G__36359;
i__36142_36332 = G__36360;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq36136){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36136));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
