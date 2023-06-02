goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34059){
var map__34060 = p__34059;
var map__34060__$1 = cljs.core.__destructure_map(map__34060);
var m = map__34060__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34060__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34060__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34061_34318 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34062_34319 = null;
var count__34063_34320 = (0);
var i__34064_34321 = (0);
while(true){
if((i__34064_34321 < count__34063_34320)){
var f_34322 = chunk__34062_34319.cljs$core$IIndexed$_nth$arity$2(null,i__34064_34321);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34322], 0));


var G__34323 = seq__34061_34318;
var G__34324 = chunk__34062_34319;
var G__34325 = count__34063_34320;
var G__34326 = (i__34064_34321 + (1));
seq__34061_34318 = G__34323;
chunk__34062_34319 = G__34324;
count__34063_34320 = G__34325;
i__34064_34321 = G__34326;
continue;
} else {
var temp__5753__auto___34327 = cljs.core.seq(seq__34061_34318);
if(temp__5753__auto___34327){
var seq__34061_34328__$1 = temp__5753__auto___34327;
if(cljs.core.chunked_seq_QMARK_(seq__34061_34328__$1)){
var c__4679__auto___34329 = cljs.core.chunk_first(seq__34061_34328__$1);
var G__34330 = cljs.core.chunk_rest(seq__34061_34328__$1);
var G__34331 = c__4679__auto___34329;
var G__34332 = cljs.core.count(c__4679__auto___34329);
var G__34333 = (0);
seq__34061_34318 = G__34330;
chunk__34062_34319 = G__34331;
count__34063_34320 = G__34332;
i__34064_34321 = G__34333;
continue;
} else {
var f_34334 = cljs.core.first(seq__34061_34328__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34334], 0));


var G__34335 = cljs.core.next(seq__34061_34328__$1);
var G__34336 = null;
var G__34337 = (0);
var G__34338 = (0);
seq__34061_34318 = G__34335;
chunk__34062_34319 = G__34336;
count__34063_34320 = G__34337;
i__34064_34321 = G__34338;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34339 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34339], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34339)))?cljs.core.second(arglists_34339):arglists_34339)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34077_34350 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34078_34351 = null;
var count__34079_34352 = (0);
var i__34080_34353 = (0);
while(true){
if((i__34080_34353 < count__34079_34352)){
var vec__34094_34354 = chunk__34078_34351.cljs$core$IIndexed$_nth$arity$2(null,i__34080_34353);
var name_34355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34094_34354,(0),null);
var map__34097_34356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34094_34354,(1),null);
var map__34097_34357__$1 = cljs.core.__destructure_map(map__34097_34356);
var doc_34358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34097_34357__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34097_34357__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34355], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34359], 0));

if(cljs.core.truth_(doc_34358)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34358], 0));
} else {
}


var G__34366 = seq__34077_34350;
var G__34367 = chunk__34078_34351;
var G__34368 = count__34079_34352;
var G__34369 = (i__34080_34353 + (1));
seq__34077_34350 = G__34366;
chunk__34078_34351 = G__34367;
count__34079_34352 = G__34368;
i__34080_34353 = G__34369;
continue;
} else {
var temp__5753__auto___34370 = cljs.core.seq(seq__34077_34350);
if(temp__5753__auto___34370){
var seq__34077_34371__$1 = temp__5753__auto___34370;
if(cljs.core.chunked_seq_QMARK_(seq__34077_34371__$1)){
var c__4679__auto___34372 = cljs.core.chunk_first(seq__34077_34371__$1);
var G__34373 = cljs.core.chunk_rest(seq__34077_34371__$1);
var G__34374 = c__4679__auto___34372;
var G__34375 = cljs.core.count(c__4679__auto___34372);
var G__34376 = (0);
seq__34077_34350 = G__34373;
chunk__34078_34351 = G__34374;
count__34079_34352 = G__34375;
i__34080_34353 = G__34376;
continue;
} else {
var vec__34101_34377 = cljs.core.first(seq__34077_34371__$1);
var name_34378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34101_34377,(0),null);
var map__34104_34379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34101_34377,(1),null);
var map__34104_34380__$1 = cljs.core.__destructure_map(map__34104_34379);
var doc_34381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34104_34380__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34104_34380__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34378], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34382], 0));

if(cljs.core.truth_(doc_34381)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34381], 0));
} else {
}


var G__34383 = cljs.core.next(seq__34077_34371__$1);
var G__34384 = null;
var G__34385 = (0);
var G__34386 = (0);
seq__34077_34350 = G__34383;
chunk__34078_34351 = G__34384;
count__34079_34352 = G__34385;
i__34080_34353 = G__34386;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34106 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34107 = null;
var count__34108 = (0);
var i__34109 = (0);
while(true){
if((i__34109 < count__34108)){
var role = chunk__34107.cljs$core$IIndexed$_nth$arity$2(null,i__34109);
var temp__5753__auto___34387__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34387__$1)){
var spec_34388 = temp__5753__auto___34387__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34388)], 0));
} else {
}


var G__34389 = seq__34106;
var G__34390 = chunk__34107;
var G__34391 = count__34108;
var G__34392 = (i__34109 + (1));
seq__34106 = G__34389;
chunk__34107 = G__34390;
count__34108 = G__34391;
i__34109 = G__34392;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__34106);
if(temp__5753__auto____$1){
var seq__34106__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34106__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34106__$1);
var G__34393 = cljs.core.chunk_rest(seq__34106__$1);
var G__34394 = c__4679__auto__;
var G__34395 = cljs.core.count(c__4679__auto__);
var G__34396 = (0);
seq__34106 = G__34393;
chunk__34107 = G__34394;
count__34108 = G__34395;
i__34109 = G__34396;
continue;
} else {
var role = cljs.core.first(seq__34106__$1);
var temp__5753__auto___34397__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34397__$2)){
var spec_34398 = temp__5753__auto___34397__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34398)], 0));
} else {
}


var G__34399 = cljs.core.next(seq__34106__$1);
var G__34400 = null;
var G__34401 = (0);
var G__34402 = (0);
seq__34106 = G__34399;
chunk__34107 = G__34400;
count__34108 = G__34401;
i__34109 = G__34402;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34403 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34404 = cljs.core.ex_cause(t);
via = G__34403;
t = G__34404;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34217 = datafied_throwable;
var map__34217__$1 = cljs.core.__destructure_map(map__34217);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34217__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34217__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34217__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34219 = cljs.core.last(via);
var map__34219__$1 = cljs.core.__destructure_map(map__34219);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34219__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34219__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34219__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34220 = data;
var map__34220__$1 = cljs.core.__destructure_map(map__34220);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34220__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34220__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34220__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34221 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34221__$1 = cljs.core.__destructure_map(map__34221);
var top_data = map__34221__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34221__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34226 = phase;
var G__34226__$1 = (((G__34226 instanceof cljs.core.Keyword))?G__34226.fqn:null);
switch (G__34226__$1) {
case "read-source":
var map__34230 = data;
var map__34230__$1 = cljs.core.__destructure_map(map__34230);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34230__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34230__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34231 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34231__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34231,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34231);
var G__34231__$2 = (cljs.core.truth_((function (){var fexpr__34232 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34232.cljs$core$IFn$_invoke$arity$1 ? fexpr__34232.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34232.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34231__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34231__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34231__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34231__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34233 = top_data;
var G__34233__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34233,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34233);
var G__34233__$2 = (cljs.core.truth_((function (){var fexpr__34234 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34234.cljs$core$IFn$_invoke$arity$1 ? fexpr__34234.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34234.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34233__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34233__$1);
var G__34233__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34233__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34233__$2);
var G__34233__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34233__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34233__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34233__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34233__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34236 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34236,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34236,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34236,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34236,(3),null);
var G__34239 = top_data;
var G__34239__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34239,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34239);
var G__34239__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34239__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34239__$1);
var G__34239__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34239__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34239__$2);
var G__34239__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34239__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34239__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34239__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34239__$4;
}

break;
case "execution":
var vec__34242 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34242,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34242,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34242,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34242,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34208_SHARP_){
var or__4253__auto__ = (p1__34208_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__34245 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34245.cljs$core$IFn$_invoke$arity$1 ? fexpr__34245.cljs$core$IFn$_invoke$arity$1(p1__34208_SHARP_) : fexpr__34245.call(null,p1__34208_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__34246 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34246__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34246,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34246);
var G__34246__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34246__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34246__$1);
var G__34246__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34246__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34246__$2);
var G__34246__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34246__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34246__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34246__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34246__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34226__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34250){
var map__34251 = p__34250;
var map__34251__$1 = cljs.core.__destructure_map(map__34251);
var triage_data = map__34251__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34251__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34251__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34251__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34251__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34251__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34251__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34251__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34251__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34258 = phase;
var G__34258__$1 = (((G__34258 instanceof cljs.core.Keyword))?G__34258.fqn:null);
switch (G__34258__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34261 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34262 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34263 = loc;
var G__34264 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34268_34441 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34269_34442 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34270_34443 = true;
var _STAR_print_fn_STAR__temp_val__34271_34444 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34270_34443);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34271_34444);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34248_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34248_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34269_34442);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34268_34441);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34261,G__34262,G__34263,G__34264) : format.call(null,G__34261,G__34262,G__34263,G__34264));

break;
case "macroexpansion":
var G__34279 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34280 = cause_type;
var G__34281 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34282 = loc;
var G__34283 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34279,G__34280,G__34281,G__34282,G__34283) : format.call(null,G__34279,G__34280,G__34281,G__34282,G__34283));

break;
case "compile-syntax-check":
var G__34284 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34285 = cause_type;
var G__34286 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34287 = loc;
var G__34288 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34284,G__34285,G__34286,G__34287,G__34288) : format.call(null,G__34284,G__34285,G__34286,G__34287,G__34288));

break;
case "compilation":
var G__34289 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34290 = cause_type;
var G__34291 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34292 = loc;
var G__34293 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34289,G__34290,G__34291,G__34292,G__34293) : format.call(null,G__34289,G__34290,G__34291,G__34292,G__34293));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34297 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34298 = symbol;
var G__34299 = loc;
var G__34300 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34301_34446 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34302_34447 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34303_34448 = true;
var _STAR_print_fn_STAR__temp_val__34304_34449 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34303_34448);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34304_34449);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34249_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34249_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34302_34447);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34301_34446);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34297,G__34298,G__34299,G__34300) : format.call(null,G__34297,G__34298,G__34299,G__34300));
} else {
var G__34308 = "Execution error%s at %s(%s).\n%s\n";
var G__34309 = cause_type;
var G__34310 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34311 = loc;
var G__34312 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34308,G__34309,G__34310,G__34311,G__34312) : format.call(null,G__34308,G__34309,G__34310,G__34311,G__34312));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34258__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
