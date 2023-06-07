goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39756){
var map__39757 = p__39756;
var map__39757__$1 = cljs.core.__destructure_map(map__39757);
var m = map__39757__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39757__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39757__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__39768_40166 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39769_40167 = null;
var count__39770_40168 = (0);
var i__39771_40169 = (0);
while(true){
if((i__39771_40169 < count__39770_40168)){
var f_40175 = chunk__39769_40167.cljs$core$IIndexed$_nth$arity$2(null,i__39771_40169);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40175], 0));


var G__40176 = seq__39768_40166;
var G__40177 = chunk__39769_40167;
var G__40178 = count__39770_40168;
var G__40179 = (i__39771_40169 + (1));
seq__39768_40166 = G__40176;
chunk__39769_40167 = G__40177;
count__39770_40168 = G__40178;
i__39771_40169 = G__40179;
continue;
} else {
var temp__5753__auto___40180 = cljs.core.seq(seq__39768_40166);
if(temp__5753__auto___40180){
var seq__39768_40181__$1 = temp__5753__auto___40180;
if(cljs.core.chunked_seq_QMARK_(seq__39768_40181__$1)){
var c__4679__auto___40182 = cljs.core.chunk_first(seq__39768_40181__$1);
var G__40183 = cljs.core.chunk_rest(seq__39768_40181__$1);
var G__40184 = c__4679__auto___40182;
var G__40185 = cljs.core.count(c__4679__auto___40182);
var G__40186 = (0);
seq__39768_40166 = G__40183;
chunk__39769_40167 = G__40184;
count__39770_40168 = G__40185;
i__39771_40169 = G__40186;
continue;
} else {
var f_40188 = cljs.core.first(seq__39768_40181__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40188], 0));


var G__40189 = cljs.core.next(seq__39768_40181__$1);
var G__40190 = null;
var G__40191 = (0);
var G__40192 = (0);
seq__39768_40166 = G__40189;
chunk__39769_40167 = G__40190;
count__39770_40168 = G__40191;
i__39771_40169 = G__40192;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40194 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40194], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40194)))?cljs.core.second(arglists_40194):arglists_40194)], 0));
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
var seq__39806_40201 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39807_40202 = null;
var count__39808_40203 = (0);
var i__39809_40204 = (0);
while(true){
if((i__39809_40204 < count__39808_40203)){
var vec__39837_40206 = chunk__39807_40202.cljs$core$IIndexed$_nth$arity$2(null,i__39809_40204);
var name_40207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39837_40206,(0),null);
var map__39840_40208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39837_40206,(1),null);
var map__39840_40209__$1 = cljs.core.__destructure_map(map__39840_40208);
var doc_40210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39840_40209__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39840_40209__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40207], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40211], 0));

if(cljs.core.truth_(doc_40210)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40210], 0));
} else {
}


var G__40214 = seq__39806_40201;
var G__40215 = chunk__39807_40202;
var G__40216 = count__39808_40203;
var G__40217 = (i__39809_40204 + (1));
seq__39806_40201 = G__40214;
chunk__39807_40202 = G__40215;
count__39808_40203 = G__40216;
i__39809_40204 = G__40217;
continue;
} else {
var temp__5753__auto___40218 = cljs.core.seq(seq__39806_40201);
if(temp__5753__auto___40218){
var seq__39806_40219__$1 = temp__5753__auto___40218;
if(cljs.core.chunked_seq_QMARK_(seq__39806_40219__$1)){
var c__4679__auto___40220 = cljs.core.chunk_first(seq__39806_40219__$1);
var G__40221 = cljs.core.chunk_rest(seq__39806_40219__$1);
var G__40222 = c__4679__auto___40220;
var G__40223 = cljs.core.count(c__4679__auto___40220);
var G__40224 = (0);
seq__39806_40201 = G__40221;
chunk__39807_40202 = G__40222;
count__39808_40203 = G__40223;
i__39809_40204 = G__40224;
continue;
} else {
var vec__39844_40226 = cljs.core.first(seq__39806_40219__$1);
var name_40227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39844_40226,(0),null);
var map__39847_40228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39844_40226,(1),null);
var map__39847_40229__$1 = cljs.core.__destructure_map(map__39847_40228);
var doc_40230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39847_40229__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39847_40229__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40227], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40231], 0));

if(cljs.core.truth_(doc_40230)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40230], 0));
} else {
}


var G__40234 = cljs.core.next(seq__39806_40219__$1);
var G__40235 = null;
var G__40236 = (0);
var G__40237 = (0);
seq__39806_40201 = G__40234;
chunk__39807_40202 = G__40235;
count__39808_40203 = G__40236;
i__39809_40204 = G__40237;
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

var seq__39852 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39853 = null;
var count__39854 = (0);
var i__39855 = (0);
while(true){
if((i__39855 < count__39854)){
var role = chunk__39853.cljs$core$IIndexed$_nth$arity$2(null,i__39855);
var temp__5753__auto___40238__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___40238__$1)){
var spec_40240 = temp__5753__auto___40238__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40240)], 0));
} else {
}


var G__40241 = seq__39852;
var G__40242 = chunk__39853;
var G__40243 = count__39854;
var G__40244 = (i__39855 + (1));
seq__39852 = G__40241;
chunk__39853 = G__40242;
count__39854 = G__40243;
i__39855 = G__40244;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__39852);
if(temp__5753__auto____$1){
var seq__39852__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39852__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39852__$1);
var G__40245 = cljs.core.chunk_rest(seq__39852__$1);
var G__40246 = c__4679__auto__;
var G__40247 = cljs.core.count(c__4679__auto__);
var G__40248 = (0);
seq__39852 = G__40245;
chunk__39853 = G__40246;
count__39854 = G__40247;
i__39855 = G__40248;
continue;
} else {
var role = cljs.core.first(seq__39852__$1);
var temp__5753__auto___40250__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___40250__$2)){
var spec_40251 = temp__5753__auto___40250__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40251)], 0));
} else {
}


var G__40257 = cljs.core.next(seq__39852__$1);
var G__40258 = null;
var G__40259 = (0);
var G__40260 = (0);
seq__39852 = G__40257;
chunk__39853 = G__40258;
count__39854 = G__40259;
i__39855 = G__40260;
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
var G__40266 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40267 = cljs.core.ex_cause(t);
via = G__40266;
t = G__40267;
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
var map__40002 = datafied_throwable;
var map__40002__$1 = cljs.core.__destructure_map(map__40002);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40002__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40002__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40002__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40003 = cljs.core.last(via);
var map__40003__$1 = cljs.core.__destructure_map(map__40003);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40003__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40003__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40003__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40004 = data;
var map__40004__$1 = cljs.core.__destructure_map(map__40004);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40004__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40004__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40004__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40005 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40005__$1 = cljs.core.__destructure_map(map__40005);
var top_data = map__40005__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40005__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40012 = phase;
var G__40012__$1 = (((G__40012 instanceof cljs.core.Keyword))?G__40012.fqn:null);
switch (G__40012__$1) {
case "read-source":
var map__40016 = data;
var map__40016__$1 = cljs.core.__destructure_map(map__40016);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40016__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40016__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40018 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40018__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40018,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40018);
var G__40018__$2 = (cljs.core.truth_((function (){var fexpr__40021 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40021.cljs$core$IFn$_invoke$arity$1 ? fexpr__40021.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40021.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40018__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40018__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40018__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40018__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40024 = top_data;
var G__40024__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40024,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40024);
var G__40024__$2 = (cljs.core.truth_((function (){var fexpr__40031 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40031.cljs$core$IFn$_invoke$arity$1 ? fexpr__40031.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40031.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40024__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40024__$1);
var G__40024__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40024__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40024__$2);
var G__40024__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40024__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40024__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40024__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40024__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40038 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40038,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40038,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40038,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40038,(3),null);
var G__40042 = top_data;
var G__40042__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40042,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40042);
var G__40042__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40042__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40042__$1);
var G__40042__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40042__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40042__$2);
var G__40042__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40042__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40042__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40042__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40042__$4;
}

break;
case "execution":
var vec__40048 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40048,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40048,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40048,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40048,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40000_SHARP_){
var or__4253__auto__ = (p1__40000_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__40053 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40053.cljs$core$IFn$_invoke$arity$1 ? fexpr__40053.cljs$core$IFn$_invoke$arity$1(p1__40000_SHARP_) : fexpr__40053.call(null,p1__40000_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__40057 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40057__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40057,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40057);
var G__40057__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40057__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40057__$1);
var G__40057__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40057__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40057__$2);
var G__40057__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40057__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40057__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40057__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40057__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40012__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40072){
var map__40073 = p__40072;
var map__40073__$1 = cljs.core.__destructure_map(map__40073);
var triage_data = map__40073__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40073__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40073__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40073__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40073__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40073__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40073__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40073__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40073__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__40085 = phase;
var G__40085__$1 = (((G__40085 instanceof cljs.core.Keyword))?G__40085.fqn:null);
switch (G__40085__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40088 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40089 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40090 = loc;
var G__40091 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40096_40309 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40097_40310 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40098_40311 = true;
var _STAR_print_fn_STAR__temp_val__40099_40312 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40098_40311);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40099_40312);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40067_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40067_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40097_40310);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40096_40309);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40088,G__40089,G__40090,G__40091) : format.call(null,G__40088,G__40089,G__40090,G__40091));

break;
case "macroexpansion":
var G__40111 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40112 = cause_type;
var G__40113 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40114 = loc;
var G__40115 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40111,G__40112,G__40113,G__40114,G__40115) : format.call(null,G__40111,G__40112,G__40113,G__40114,G__40115));

break;
case "compile-syntax-check":
var G__40118 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40119 = cause_type;
var G__40120 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40121 = loc;
var G__40122 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40118,G__40119,G__40120,G__40121,G__40122) : format.call(null,G__40118,G__40119,G__40120,G__40121,G__40122));

break;
case "compilation":
var G__40128 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40129 = cause_type;
var G__40130 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40131 = loc;
var G__40132 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40128,G__40129,G__40130,G__40131,G__40132) : format.call(null,G__40128,G__40129,G__40130,G__40131,G__40132));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40136 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40137 = symbol;
var G__40138 = loc;
var G__40139 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40140_40323 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40141_40324 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40142_40325 = true;
var _STAR_print_fn_STAR__temp_val__40143_40326 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40142_40325);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40143_40326);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40068_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40068_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40141_40324);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40140_40323);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40136,G__40137,G__40138,G__40139) : format.call(null,G__40136,G__40137,G__40138,G__40139));
} else {
var G__40152 = "Execution error%s at %s(%s).\n%s\n";
var G__40153 = cause_type;
var G__40154 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40155 = loc;
var G__40156 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40152,G__40153,G__40154,G__40155,G__40156) : format.call(null,G__40152,G__40153,G__40154,G__40155,G__40156));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40085__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
