goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34151){
var map__34152 = p__34151;
var map__34152__$1 = cljs.core.__destructure_map(map__34152);
var m = map__34152__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34152__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34152__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__34153_34408 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34154_34409 = null;
var count__34155_34410 = (0);
var i__34156_34411 = (0);
while(true){
if((i__34156_34411 < count__34155_34410)){
var f_34414 = chunk__34154_34409.cljs$core$IIndexed$_nth$arity$2(null,i__34156_34411);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34414], 0));


var G__34419 = seq__34153_34408;
var G__34420 = chunk__34154_34409;
var G__34421 = count__34155_34410;
var G__34422 = (i__34156_34411 + (1));
seq__34153_34408 = G__34419;
chunk__34154_34409 = G__34420;
count__34155_34410 = G__34421;
i__34156_34411 = G__34422;
continue;
} else {
var temp__5753__auto___34423 = cljs.core.seq(seq__34153_34408);
if(temp__5753__auto___34423){
var seq__34153_34424__$1 = temp__5753__auto___34423;
if(cljs.core.chunked_seq_QMARK_(seq__34153_34424__$1)){
var c__4679__auto___34425 = cljs.core.chunk_first(seq__34153_34424__$1);
var G__34426 = cljs.core.chunk_rest(seq__34153_34424__$1);
var G__34427 = c__4679__auto___34425;
var G__34428 = cljs.core.count(c__4679__auto___34425);
var G__34429 = (0);
seq__34153_34408 = G__34426;
chunk__34154_34409 = G__34427;
count__34155_34410 = G__34428;
i__34156_34411 = G__34429;
continue;
} else {
var f_34430 = cljs.core.first(seq__34153_34424__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34430], 0));


var G__34431 = cljs.core.next(seq__34153_34424__$1);
var G__34432 = null;
var G__34433 = (0);
var G__34434 = (0);
seq__34153_34408 = G__34431;
chunk__34154_34409 = G__34432;
count__34155_34410 = G__34433;
i__34156_34411 = G__34434;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34435 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34435], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34435)))?cljs.core.second(arglists_34435):arglists_34435)], 0));
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
var seq__34166_34440 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34167_34441 = null;
var count__34168_34442 = (0);
var i__34169_34443 = (0);
while(true){
if((i__34169_34443 < count__34168_34442)){
var vec__34181_34444 = chunk__34167_34441.cljs$core$IIndexed$_nth$arity$2(null,i__34169_34443);
var name_34445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34181_34444,(0),null);
var map__34184_34446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34181_34444,(1),null);
var map__34184_34447__$1 = cljs.core.__destructure_map(map__34184_34446);
var doc_34448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34184_34447__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34184_34447__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34445], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34449], 0));

if(cljs.core.truth_(doc_34448)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34448], 0));
} else {
}


var G__34450 = seq__34166_34440;
var G__34451 = chunk__34167_34441;
var G__34452 = count__34168_34442;
var G__34453 = (i__34169_34443 + (1));
seq__34166_34440 = G__34450;
chunk__34167_34441 = G__34451;
count__34168_34442 = G__34452;
i__34169_34443 = G__34453;
continue;
} else {
var temp__5753__auto___34454 = cljs.core.seq(seq__34166_34440);
if(temp__5753__auto___34454){
var seq__34166_34455__$1 = temp__5753__auto___34454;
if(cljs.core.chunked_seq_QMARK_(seq__34166_34455__$1)){
var c__4679__auto___34456 = cljs.core.chunk_first(seq__34166_34455__$1);
var G__34457 = cljs.core.chunk_rest(seq__34166_34455__$1);
var G__34458 = c__4679__auto___34456;
var G__34459 = cljs.core.count(c__4679__auto___34456);
var G__34460 = (0);
seq__34166_34440 = G__34457;
chunk__34167_34441 = G__34458;
count__34168_34442 = G__34459;
i__34169_34443 = G__34460;
continue;
} else {
var vec__34188_34461 = cljs.core.first(seq__34166_34455__$1);
var name_34462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34188_34461,(0),null);
var map__34191_34463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34188_34461,(1),null);
var map__34191_34464__$1 = cljs.core.__destructure_map(map__34191_34463);
var doc_34465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34191_34464__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34191_34464__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34462], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34466], 0));

if(cljs.core.truth_(doc_34465)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34465], 0));
} else {
}


var G__34467 = cljs.core.next(seq__34166_34455__$1);
var G__34468 = null;
var G__34469 = (0);
var G__34470 = (0);
seq__34166_34440 = G__34467;
chunk__34167_34441 = G__34468;
count__34168_34442 = G__34469;
i__34169_34443 = G__34470;
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

var seq__34193 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34194 = null;
var count__34195 = (0);
var i__34196 = (0);
while(true){
if((i__34196 < count__34195)){
var role = chunk__34194.cljs$core$IIndexed$_nth$arity$2(null,i__34196);
var temp__5753__auto___34471__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34471__$1)){
var spec_34472 = temp__5753__auto___34471__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34472)], 0));
} else {
}


var G__34473 = seq__34193;
var G__34474 = chunk__34194;
var G__34475 = count__34195;
var G__34476 = (i__34196 + (1));
seq__34193 = G__34473;
chunk__34194 = G__34474;
count__34195 = G__34475;
i__34196 = G__34476;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__34193);
if(temp__5753__auto____$1){
var seq__34193__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34193__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34193__$1);
var G__34477 = cljs.core.chunk_rest(seq__34193__$1);
var G__34478 = c__4679__auto__;
var G__34479 = cljs.core.count(c__4679__auto__);
var G__34480 = (0);
seq__34193 = G__34477;
chunk__34194 = G__34478;
count__34195 = G__34479;
i__34196 = G__34480;
continue;
} else {
var role = cljs.core.first(seq__34193__$1);
var temp__5753__auto___34481__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34481__$2)){
var spec_34482 = temp__5753__auto___34481__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34482)], 0));
} else {
}


var G__34483 = cljs.core.next(seq__34193__$1);
var G__34484 = null;
var G__34485 = (0);
var G__34486 = (0);
seq__34193 = G__34483;
chunk__34194 = G__34484;
count__34195 = G__34485;
i__34196 = G__34486;
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
var G__34493 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34494 = cljs.core.ex_cause(t);
via = G__34493;
t = G__34494;
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
var map__34251 = datafied_throwable;
var map__34251__$1 = cljs.core.__destructure_map(map__34251);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34251__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34251__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34251__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34256 = cljs.core.last(via);
var map__34256__$1 = cljs.core.__destructure_map(map__34256);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34256__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34256__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34256__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34257 = data;
var map__34257__$1 = cljs.core.__destructure_map(map__34257);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34257__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34257__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34257__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34258 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34258__$1 = cljs.core.__destructure_map(map__34258);
var top_data = map__34258__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34258__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34280 = phase;
var G__34280__$1 = (((G__34280 instanceof cljs.core.Keyword))?G__34280.fqn:null);
switch (G__34280__$1) {
case "read-source":
var map__34281 = data;
var map__34281__$1 = cljs.core.__destructure_map(map__34281);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34281__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34281__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34289 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34289__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34289,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34289);
var G__34289__$2 = (cljs.core.truth_((function (){var fexpr__34290 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34290.cljs$core$IFn$_invoke$arity$1 ? fexpr__34290.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34290.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34289__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34289__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34289__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34289__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34291 = top_data;
var G__34291__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34291,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34291);
var G__34291__$2 = (cljs.core.truth_((function (){var fexpr__34297 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34297.cljs$core$IFn$_invoke$arity$1 ? fexpr__34297.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34297.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34291__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34291__$1);
var G__34291__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34291__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34291__$2);
var G__34291__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34291__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34291__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34291__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34291__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34307 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34307,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34307,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34307,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34307,(3),null);
var G__34314 = top_data;
var G__34314__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34314,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34314);
var G__34314__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34314__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34314__$1);
var G__34314__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34314__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34314__$2);
var G__34314__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34314__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34314__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34314__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34314__$4;
}

break;
case "execution":
var vec__34323 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34323,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34323,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34323,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34323,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34247_SHARP_){
var or__4253__auto__ = (p1__34247_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__34326 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34326.cljs$core$IFn$_invoke$arity$1 ? fexpr__34326.cljs$core$IFn$_invoke$arity$1(p1__34247_SHARP_) : fexpr__34326.call(null,p1__34247_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__34328 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34328__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34328,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34328);
var G__34328__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34328__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34328__$1);
var G__34328__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34328__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34328__$2);
var G__34328__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34328__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34328__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34328__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34328__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34280__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34339){
var map__34340 = p__34339;
var map__34340__$1 = cljs.core.__destructure_map(map__34340);
var triage_data = map__34340__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34340__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34340__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34340__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34340__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34340__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34340__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34340__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34340__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__34345 = phase;
var G__34345__$1 = (((G__34345 instanceof cljs.core.Keyword))?G__34345.fqn:null);
switch (G__34345__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34350 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34351 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34352 = loc;
var G__34353 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34354_34518 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34355_34519 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34356_34520 = true;
var _STAR_print_fn_STAR__temp_val__34357_34521 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34356_34520);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34357_34521);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34333_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34333_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34355_34519);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34354_34518);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34350,G__34351,G__34352,G__34353) : format.call(null,G__34350,G__34351,G__34352,G__34353));

break;
case "macroexpansion":
var G__34362 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34363 = cause_type;
var G__34364 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34365 = loc;
var G__34366 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34362,G__34363,G__34364,G__34365,G__34366) : format.call(null,G__34362,G__34363,G__34364,G__34365,G__34366));

break;
case "compile-syntax-check":
var G__34367 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34368 = cause_type;
var G__34369 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34370 = loc;
var G__34371 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34367,G__34368,G__34369,G__34370,G__34371) : format.call(null,G__34367,G__34368,G__34369,G__34370,G__34371));

break;
case "compilation":
var G__34372 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34373 = cause_type;
var G__34374 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34375 = loc;
var G__34376 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34372,G__34373,G__34374,G__34375,G__34376) : format.call(null,G__34372,G__34373,G__34374,G__34375,G__34376));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34377 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34378 = symbol;
var G__34379 = loc;
var G__34380 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34381_34531 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34382_34532 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34386_34533 = true;
var _STAR_print_fn_STAR__temp_val__34387_34534 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34386_34533);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34387_34534);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34334_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34334_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34382_34532);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34381_34531);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34377,G__34378,G__34379,G__34380) : format.call(null,G__34377,G__34378,G__34379,G__34380));
} else {
var G__34389 = "Execution error%s at %s(%s).\n%s\n";
var G__34390 = cause_type;
var G__34391 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34392 = loc;
var G__34393 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34389,G__34390,G__34391,G__34392,G__34393) : format.call(null,G__34389,G__34390,G__34391,G__34392,G__34393));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34345__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
