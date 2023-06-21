goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44000){
var map__44001 = p__44000;
var map__44001__$1 = cljs.core.__destructure_map(map__44001);
var m = map__44001__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44001__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44001__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__44013_44358 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44014_44359 = null;
var count__44015_44360 = (0);
var i__44016_44361 = (0);
while(true){
if((i__44016_44361 < count__44015_44360)){
var f_44369 = chunk__44014_44359.cljs$core$IIndexed$_nth$arity$2(null,i__44016_44361);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44369], 0));


var G__44370 = seq__44013_44358;
var G__44371 = chunk__44014_44359;
var G__44372 = count__44015_44360;
var G__44373 = (i__44016_44361 + (1));
seq__44013_44358 = G__44370;
chunk__44014_44359 = G__44371;
count__44015_44360 = G__44372;
i__44016_44361 = G__44373;
continue;
} else {
var temp__5753__auto___44374 = cljs.core.seq(seq__44013_44358);
if(temp__5753__auto___44374){
var seq__44013_44375__$1 = temp__5753__auto___44374;
if(cljs.core.chunked_seq_QMARK_(seq__44013_44375__$1)){
var c__4679__auto___44376 = cljs.core.chunk_first(seq__44013_44375__$1);
var G__44377 = cljs.core.chunk_rest(seq__44013_44375__$1);
var G__44378 = c__4679__auto___44376;
var G__44379 = cljs.core.count(c__4679__auto___44376);
var G__44380 = (0);
seq__44013_44358 = G__44377;
chunk__44014_44359 = G__44378;
count__44015_44360 = G__44379;
i__44016_44361 = G__44380;
continue;
} else {
var f_44381 = cljs.core.first(seq__44013_44375__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44381], 0));


var G__44382 = cljs.core.next(seq__44013_44375__$1);
var G__44383 = null;
var G__44384 = (0);
var G__44385 = (0);
seq__44013_44358 = G__44382;
chunk__44014_44359 = G__44383;
count__44015_44360 = G__44384;
i__44016_44361 = G__44385;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44386 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_44386], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_44386)))?cljs.core.second(arglists_44386):arglists_44386)], 0));
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
var seq__44033_44389 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44034_44390 = null;
var count__44035_44391 = (0);
var i__44036_44392 = (0);
while(true){
if((i__44036_44392 < count__44035_44391)){
var vec__44056_44393 = chunk__44034_44390.cljs$core$IIndexed$_nth$arity$2(null,i__44036_44392);
var name_44394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44056_44393,(0),null);
var map__44059_44395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44056_44393,(1),null);
var map__44059_44396__$1 = cljs.core.__destructure_map(map__44059_44395);
var doc_44397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44059_44396__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44059_44396__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44394], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44398], 0));

if(cljs.core.truth_(doc_44397)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44397], 0));
} else {
}


var G__44399 = seq__44033_44389;
var G__44400 = chunk__44034_44390;
var G__44401 = count__44035_44391;
var G__44402 = (i__44036_44392 + (1));
seq__44033_44389 = G__44399;
chunk__44034_44390 = G__44400;
count__44035_44391 = G__44401;
i__44036_44392 = G__44402;
continue;
} else {
var temp__5753__auto___44403 = cljs.core.seq(seq__44033_44389);
if(temp__5753__auto___44403){
var seq__44033_44404__$1 = temp__5753__auto___44403;
if(cljs.core.chunked_seq_QMARK_(seq__44033_44404__$1)){
var c__4679__auto___44405 = cljs.core.chunk_first(seq__44033_44404__$1);
var G__44406 = cljs.core.chunk_rest(seq__44033_44404__$1);
var G__44407 = c__4679__auto___44405;
var G__44408 = cljs.core.count(c__4679__auto___44405);
var G__44409 = (0);
seq__44033_44389 = G__44406;
chunk__44034_44390 = G__44407;
count__44035_44391 = G__44408;
i__44036_44392 = G__44409;
continue;
} else {
var vec__44063_44410 = cljs.core.first(seq__44033_44404__$1);
var name_44411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44063_44410,(0),null);
var map__44066_44412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44063_44410,(1),null);
var map__44066_44413__$1 = cljs.core.__destructure_map(map__44066_44412);
var doc_44414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44066_44413__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44066_44413__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44411], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44415], 0));

if(cljs.core.truth_(doc_44414)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44414], 0));
} else {
}


var G__44416 = cljs.core.next(seq__44033_44404__$1);
var G__44417 = null;
var G__44418 = (0);
var G__44419 = (0);
seq__44033_44389 = G__44416;
chunk__44034_44390 = G__44417;
count__44035_44391 = G__44418;
i__44036_44392 = G__44419;
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

var seq__44072 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44073 = null;
var count__44074 = (0);
var i__44075 = (0);
while(true){
if((i__44075 < count__44074)){
var role = chunk__44073.cljs$core$IIndexed$_nth$arity$2(null,i__44075);
var temp__5753__auto___44420__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___44420__$1)){
var spec_44421 = temp__5753__auto___44420__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44421)], 0));
} else {
}


var G__44422 = seq__44072;
var G__44423 = chunk__44073;
var G__44424 = count__44074;
var G__44425 = (i__44075 + (1));
seq__44072 = G__44422;
chunk__44073 = G__44423;
count__44074 = G__44424;
i__44075 = G__44425;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__44072);
if(temp__5753__auto____$1){
var seq__44072__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__44072__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44072__$1);
var G__44426 = cljs.core.chunk_rest(seq__44072__$1);
var G__44427 = c__4679__auto__;
var G__44428 = cljs.core.count(c__4679__auto__);
var G__44429 = (0);
seq__44072 = G__44426;
chunk__44073 = G__44427;
count__44074 = G__44428;
i__44075 = G__44429;
continue;
} else {
var role = cljs.core.first(seq__44072__$1);
var temp__5753__auto___44430__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___44430__$2)){
var spec_44431 = temp__5753__auto___44430__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44431)], 0));
} else {
}


var G__44432 = cljs.core.next(seq__44072__$1);
var G__44433 = null;
var G__44434 = (0);
var G__44435 = (0);
seq__44072 = G__44432;
chunk__44073 = G__44433;
count__44074 = G__44434;
i__44075 = G__44435;
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
var G__44436 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__44437 = cljs.core.ex_cause(t);
via = G__44436;
t = G__44437;
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
var map__44233 = datafied_throwable;
var map__44233__$1 = cljs.core.__destructure_map(map__44233);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44233__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44233__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44233__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__44234 = cljs.core.last(via);
var map__44234__$1 = cljs.core.__destructure_map(map__44234);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44234__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44234__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44234__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__44235 = data;
var map__44235__$1 = cljs.core.__destructure_map(map__44235);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44235__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44235__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44235__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__44236 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__44236__$1 = cljs.core.__destructure_map(map__44236);
var top_data = map__44236__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44236__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__44243 = phase;
var G__44243__$1 = (((G__44243 instanceof cljs.core.Keyword))?G__44243.fqn:null);
switch (G__44243__$1) {
case "read-source":
var map__44245 = data;
var map__44245__$1 = cljs.core.__destructure_map(map__44245);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44245__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44245__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__44248 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__44248__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44248,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44248);
var G__44248__$2 = (cljs.core.truth_((function (){var fexpr__44253 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44253.cljs$core$IFn$_invoke$arity$1 ? fexpr__44253.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44253.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44248__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44248__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44248__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44248__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__44259 = top_data;
var G__44259__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44259,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44259);
var G__44259__$2 = (cljs.core.truth_((function (){var fexpr__44262 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44262.cljs$core$IFn$_invoke$arity$1 ? fexpr__44262.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44262.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44259__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44259__$1);
var G__44259__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44259__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44259__$2);
var G__44259__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44259__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44259__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44259__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44259__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__44271 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44271,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44271,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44271,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44271,(3),null);
var G__44274 = top_data;
var G__44274__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44274,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__44274);
var G__44274__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44274__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__44274__$1);
var G__44274__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44274__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__44274__$2);
var G__44274__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44274__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44274__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44274__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44274__$4;
}

break;
case "execution":
var vec__44279 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44279,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44279,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44279,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44279,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__44228_SHARP_){
var or__4253__auto__ = (p1__44228_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__44286 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44286.cljs$core$IFn$_invoke$arity$1 ? fexpr__44286.cljs$core$IFn$_invoke$arity$1(p1__44228_SHARP_) : fexpr__44286.call(null,p1__44228_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__44289 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__44289__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44289,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__44289);
var G__44289__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44289__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44289__$1);
var G__44289__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44289__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__44289__$2);
var G__44289__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44289__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__44289__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44289__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44289__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44243__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__44301){
var map__44302 = p__44301;
var map__44302__$1 = cljs.core.__destructure_map(map__44302);
var triage_data = map__44302__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44302__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44302__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44302__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44302__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44302__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44302__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44302__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44302__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__44305 = phase;
var G__44305__$1 = (((G__44305 instanceof cljs.core.Keyword))?G__44305.fqn:null);
switch (G__44305__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__44306 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__44307 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44308 = loc;
var G__44309 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44312_44480 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44313_44481 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44314_44482 = true;
var _STAR_print_fn_STAR__temp_val__44315_44483 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44314_44482);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44315_44483);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44299_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44299_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44313_44481);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44312_44480);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44306,G__44307,G__44308,G__44309) : format.call(null,G__44306,G__44307,G__44308,G__44309));

break;
case "macroexpansion":
var G__44318 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__44319 = cause_type;
var G__44320 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44321 = loc;
var G__44322 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44318,G__44319,G__44320,G__44321,G__44322) : format.call(null,G__44318,G__44319,G__44320,G__44321,G__44322));

break;
case "compile-syntax-check":
var G__44323 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__44324 = cause_type;
var G__44325 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44326 = loc;
var G__44327 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44323,G__44324,G__44325,G__44326,G__44327) : format.call(null,G__44323,G__44324,G__44325,G__44326,G__44327));

break;
case "compilation":
var G__44328 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__44329 = cause_type;
var G__44330 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44331 = loc;
var G__44332 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44328,G__44329,G__44330,G__44331,G__44332) : format.call(null,G__44328,G__44329,G__44330,G__44331,G__44332));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__44333 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__44334 = symbol;
var G__44335 = loc;
var G__44336 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44337_44494 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44338_44495 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44339_44496 = true;
var _STAR_print_fn_STAR__temp_val__44340_44497 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44339_44496);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44340_44497);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44300_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44300_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44338_44495);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44337_44494);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44333,G__44334,G__44335,G__44336) : format.call(null,G__44333,G__44334,G__44335,G__44336));
} else {
var G__44342 = "Execution error%s at %s(%s).\n%s\n";
var G__44343 = cause_type;
var G__44344 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44345 = loc;
var G__44346 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44342,G__44343,G__44344,G__44345,G__44346) : format.call(null,G__44342,G__44343,G__44344,G__44345,G__44346));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44305__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
