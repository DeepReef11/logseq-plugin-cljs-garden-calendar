goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26943 = arguments.length;
var i__4865__auto___26944 = (0);
while(true){
if((i__4865__auto___26944 < len__4864__auto___26943)){
args__4870__auto__.push((arguments[i__4865__auto___26944]));

var G__26945 = (i__4865__auto___26944 + (1));
i__4865__auto___26944 = G__26945;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__26853_26946 = keyvals;
var vec__26854_26947 = G__26853_26946;
var seq__26855_26948 = cljs.core.seq(vec__26854_26947);
var first__26856_26949 = cljs.core.first(seq__26855_26948);
var seq__26855_26950__$1 = cljs.core.next(seq__26855_26948);
var k_26951 = first__26856_26949;
var first__26856_26952__$1 = cljs.core.first(seq__26855_26950__$1);
var seq__26855_26953__$2 = cljs.core.next(seq__26855_26950__$1);
var v_26954 = first__26856_26952__$1;
var keyvals_26955__$1 = seq__26855_26953__$2;
var G__26853_26956__$1 = G__26853_26946;
while(true){
var vec__26857_26957 = G__26853_26956__$1;
var seq__26858_26958 = cljs.core.seq(vec__26857_26957);
var first__26859_26959 = cljs.core.first(seq__26858_26958);
var seq__26858_26960__$1 = cljs.core.next(seq__26858_26958);
var k_26961__$1 = first__26859_26959;
var first__26859_26962__$1 = cljs.core.first(seq__26858_26960__$1);
var seq__26858_26963__$2 = cljs.core.next(seq__26858_26960__$1);
var v_26964__$1 = first__26859_26962__$1;
var keyvals_26965__$2 = seq__26858_26963__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_26961__$1)] = v_26964__$1);

if(keyvals_26965__$2){
var G__26966 = keyvals_26965__$2;
G__26853_26956__$1 = G__26966;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq26845){
var G__26846 = cljs.core.first(seq26845);
var seq26845__$1 = cljs.core.next(seq26845);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26846,seq26845__$1);
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
var G__26861 = arguments.length;
switch (G__26861) {
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
var obj26862 = obj;
if((!((obj26862 == null)))){
return (obj26862[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj26863 = obj;
if((!((obj26863 == null)))){
return (obj26863[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__26456__auto__ = (function (){var obj26864 = obj;
if((!((obj26864 == null)))){
return (obj26864[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__26456__auto__)){
return not_found;
} else {
return val__26456__auto__;
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
var G__26866 = arguments.length;
switch (G__26866) {
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
var obj26867 = self__.obj;
if((!((obj26867 == null)))){
return (obj26867[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__26456__auto__ = (function (){var obj26868 = self__.obj;
if((!((obj26868 == null)))){
return (obj26868[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__26456__auto__)){
return not_found;
} else {
return val__26456__auto__;
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
var len__4864__auto___26969 = arguments.length;
var i__4865__auto___26970 = (0);
while(true){
if((i__4865__auto___26970 < len__4864__auto___26969)){
args__4870__auto__.push((arguments[i__4865__auto___26970]));

var G__26971 = (i__4865__auto___26970 + (1));
i__4865__auto___26970 = G__26971;
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
var G__26874 = keyvals;
var vec__26875 = G__26874;
var seq__26876 = cljs.core.seq(vec__26875);
var first__26877 = cljs.core.first(seq__26876);
var seq__26876__$1 = cljs.core.next(seq__26876);
var k = first__26877;
var first__26877__$1 = cljs.core.first(seq__26876__$1);
var seq__26876__$2 = cljs.core.next(seq__26876__$1);
var v = first__26877__$1;
var kvs = seq__26876__$2;
var G__26874__$1 = G__26874;
while(true){
var vec__26878 = G__26874__$1;
var seq__26879 = cljs.core.seq(vec__26878);
var first__26880 = cljs.core.first(seq__26879);
var seq__26879__$1 = cljs.core.next(seq__26879);
var k__$1 = first__26880;
var first__26880__$1 = cljs.core.first(seq__26879__$1);
var seq__26879__$2 = cljs.core.next(seq__26879__$1);
var v__$1 = first__26880__$1;
var kvs__$1 = seq__26879__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__26972 = kvs__$1;
G__26874__$1 = G__26972;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq26869){
var G__26870 = cljs.core.first(seq26869);
var seq26869__$1 = cljs.core.next(seq26869);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26870,seq26869__$1);
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
var len__4864__auto___26973 = arguments.length;
var i__4865__auto___26974 = (0);
while(true){
if((i__4865__auto___26974 < len__4864__auto___26973)){
args__4870__auto__.push((arguments[i__4865__auto___26974]));

var G__26975 = (i__4865__auto___26974 + (1));
i__4865__auto___26974 = G__26975;
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
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq26881){
var G__26882 = cljs.core.first(seq26881);
var seq26881__$1 = cljs.core.next(seq26881);
var G__26883 = cljs.core.first(seq26881__$1);
var seq26881__$2 = cljs.core.next(seq26881__$1);
var G__26884 = cljs.core.first(seq26881__$2);
var seq26881__$3 = cljs.core.next(seq26881__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26882,G__26883,G__26884,seq26881__$3);
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
var len__4864__auto___26979 = arguments.length;
var i__4865__auto___26980 = (0);
while(true){
if((i__4865__auto___26980 < len__4864__auto___26979)){
args__4870__auto__.push((arguments[i__4865__auto___26980]));

var G__26981 = (i__4865__auto___26980 + (1));
i__4865__auto___26980 = G__26981;
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
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq26885){
var G__26886 = cljs.core.first(seq26885);
var seq26885__$1 = cljs.core.next(seq26885);
var G__26887 = cljs.core.first(seq26885__$1);
var seq26885__$2 = cljs.core.next(seq26885__$1);
var G__26888 = cljs.core.first(seq26885__$2);
var seq26885__$3 = cljs.core.next(seq26885__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26886,G__26887,G__26888,seq26885__$3);
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
var G__26893 = arguments.length;
switch (G__26893) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___26983 = arguments.length;
var i__4865__auto___26984 = (0);
while(true){
if((i__4865__auto___26984 < len__4864__auto___26983)){
args_arr__4885__auto__.push((arguments[i__4865__auto___26984]));

var G__26985 = (i__4865__auto___26984 + (1));
i__4865__auto___26984 = G__26985;
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
var seq__26894_26987 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__26895_26988 = null;
var count__26896_26989 = (0);
var i__26897_26990 = (0);
while(true){
if((i__26897_26990 < count__26896_26989)){
var k_26991 = chunk__26895_26988.cljs$core$IIndexed$_nth$arity$2(null,i__26897_26990);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_26991,applied_science.js_interop.unchecked_get(x,k_26991)], 0));


var G__26992 = seq__26894_26987;
var G__26993 = chunk__26895_26988;
var G__26994 = count__26896_26989;
var G__26995 = (i__26897_26990 + (1));
seq__26894_26987 = G__26992;
chunk__26895_26988 = G__26993;
count__26896_26989 = G__26994;
i__26897_26990 = G__26995;
continue;
} else {
var temp__5753__auto___26996 = cljs.core.seq(seq__26894_26987);
if(temp__5753__auto___26996){
var seq__26894_26997__$1 = temp__5753__auto___26996;
if(cljs.core.chunked_seq_QMARK_(seq__26894_26997__$1)){
var c__4679__auto___26998 = cljs.core.chunk_first(seq__26894_26997__$1);
var G__26999 = cljs.core.chunk_rest(seq__26894_26997__$1);
var G__27000 = c__4679__auto___26998;
var G__27001 = cljs.core.count(c__4679__auto___26998);
var G__27002 = (0);
seq__26894_26987 = G__26999;
chunk__26895_26988 = G__27000;
count__26896_26989 = G__27001;
i__26897_26990 = G__27002;
continue;
} else {
var k_27003 = cljs.core.first(seq__26894_26997__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_27003,applied_science.js_interop.unchecked_get(x,k_27003)], 0));


var G__27004 = cljs.core.next(seq__26894_26997__$1);
var G__27005 = null;
var G__27006 = (0);
var G__27007 = (0);
seq__26894_26987 = G__27004;
chunk__26895_26988 = G__27005;
count__26896_26989 = G__27006;
i__26897_26990 = G__27007;
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
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq26890){
var G__26891 = cljs.core.first(seq26890);
var seq26890__$1 = cljs.core.next(seq26890);
var G__26892 = cljs.core.first(seq26890__$1);
var seq26890__$2 = cljs.core.next(seq26890__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26891,G__26892,seq26890__$2);
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
var G__26898 = array;
G__26898.push(x);

return G__26898;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__26899 = array;
G__26899.unshift(x);

return G__26899;
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
var len__4864__auto___27008 = arguments.length;
var i__4865__auto___27009 = (0);
while(true){
if((i__4865__auto___27009 < len__4864__auto___27008)){
args__4870__auto__.push((arguments[i__4865__auto___27009]));

var G__27010 = (i__4865__auto___27009 + (1));
i__4865__auto___27009 = G__27010;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj26903 = obj;
if((!((obj26903 == null)))){
return (obj26903[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq26900){
var G__26901 = cljs.core.first(seq26900);
var seq26900__$1 = cljs.core.next(seq26900);
var G__26902 = cljs.core.first(seq26900__$1);
var seq26900__$2 = cljs.core.next(seq26900__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26901,G__26902,seq26900__$2);
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
return (function (){var obj26904 = obj;
if((!((obj26904 == null)))){
return (obj26904[applied_science.js_interop.impl.wrap_key(k)]);
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
var len__4864__auto___27013 = arguments.length;
var i__4865__auto___27014 = (0);
while(true){
if((i__4865__auto___27014 < len__4864__auto___27013)){
args__4870__auto__.push((arguments[i__4865__auto___27014]));

var G__27019 = (i__4865__auto___27014 + (1));
i__4865__auto___27014 = G__27019;
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
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq26905){
var G__26906 = cljs.core.first(seq26905);
var seq26905__$1 = cljs.core.next(seq26905);
var G__26907 = cljs.core.first(seq26905__$1);
var seq26905__$2 = cljs.core.next(seq26905__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26906,G__26907,seq26905__$2);
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
var len__4864__auto___27047 = arguments.length;
var i__4865__auto___27050 = (0);
while(true){
if((i__4865__auto___27050 < len__4864__auto___27047)){
args__4870__auto__.push((arguments[i__4865__auto___27050]));

var G__27057 = (i__4865__auto___27050 + (1));
i__4865__auto___27050 = G__27057;
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
var seq__26911_27059 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__26912_27060 = null;
var count__26913_27061 = (0);
var i__26914_27062 = (0);
while(true){
if((i__26914_27062 < count__26913_27061)){
var vec__26929_27064 = chunk__26912_27060.cljs$core$IIndexed$_nth$arity$2(null,i__26914_27062);
var k_27065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26929_27064,(0),null);
var v_27066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26929_27064,(1),null);
var obj26932_27067 = obj;
var obj26933_27068 = (((!((obj26932_27067 == null))))?obj26932_27067:({}));
(obj26933_27068[applied_science.js_interop.impl.wrap_key(k_27065)] = v_27066);



var G__27069 = seq__26911_27059;
var G__27070 = chunk__26912_27060;
var G__27071 = count__26913_27061;
var G__27072 = (i__26914_27062 + (1));
seq__26911_27059 = G__27069;
chunk__26912_27060 = G__27070;
count__26913_27061 = G__27071;
i__26914_27062 = G__27072;
continue;
} else {
var temp__5753__auto___27073 = cljs.core.seq(seq__26911_27059);
if(temp__5753__auto___27073){
var seq__26911_27074__$1 = temp__5753__auto___27073;
if(cljs.core.chunked_seq_QMARK_(seq__26911_27074__$1)){
var c__4679__auto___27075 = cljs.core.chunk_first(seq__26911_27074__$1);
var G__27076 = cljs.core.chunk_rest(seq__26911_27074__$1);
var G__27077 = c__4679__auto___27075;
var G__27078 = cljs.core.count(c__4679__auto___27075);
var G__27079 = (0);
seq__26911_27059 = G__27076;
chunk__26912_27060 = G__27077;
count__26913_27061 = G__27078;
i__26914_27062 = G__27079;
continue;
} else {
var vec__26936_27080 = cljs.core.first(seq__26911_27074__$1);
var k_27081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26936_27080,(0),null);
var v_27082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26936_27080,(1),null);
var obj26939_27083 = obj;
var obj26940_27084 = (((!((obj26939_27083 == null))))?obj26939_27083:({}));
(obj26940_27084[applied_science.js_interop.impl.wrap_key(k_27081)] = v_27082);



var G__27085 = cljs.core.next(seq__26911_27074__$1);
var G__27086 = null;
var G__27087 = (0);
var G__27088 = (0);
seq__26911_27059 = G__27085;
chunk__26912_27060 = G__27086;
count__26913_27061 = G__27087;
i__26914_27062 = G__27088;
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
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq26908){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26908));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
