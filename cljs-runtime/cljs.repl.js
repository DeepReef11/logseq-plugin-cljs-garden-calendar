goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33742){
var map__33747 = p__33742;
var map__33747__$1 = cljs.core.__destructure_map(map__33747);
var m = map__33747__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33747__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33747__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__33750_34166 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33751_34167 = null;
var count__33752_34168 = (0);
var i__33753_34169 = (0);
while(true){
if((i__33753_34169 < count__33752_34168)){
var f_34170 = chunk__33751_34167.cljs$core$IIndexed$_nth$arity$2(null,i__33753_34169);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34170], 0));


var G__34171 = seq__33750_34166;
var G__34172 = chunk__33751_34167;
var G__34173 = count__33752_34168;
var G__34174 = (i__33753_34169 + (1));
seq__33750_34166 = G__34171;
chunk__33751_34167 = G__34172;
count__33752_34168 = G__34173;
i__33753_34169 = G__34174;
continue;
} else {
var temp__5753__auto___34175 = cljs.core.seq(seq__33750_34166);
if(temp__5753__auto___34175){
var seq__33750_34176__$1 = temp__5753__auto___34175;
if(cljs.core.chunked_seq_QMARK_(seq__33750_34176__$1)){
var c__4679__auto___34177 = cljs.core.chunk_first(seq__33750_34176__$1);
var G__34178 = cljs.core.chunk_rest(seq__33750_34176__$1);
var G__34179 = c__4679__auto___34177;
var G__34180 = cljs.core.count(c__4679__auto___34177);
var G__34181 = (0);
seq__33750_34166 = G__34178;
chunk__33751_34167 = G__34179;
count__33752_34168 = G__34180;
i__33753_34169 = G__34181;
continue;
} else {
var f_34182 = cljs.core.first(seq__33750_34176__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34182], 0));


var G__34183 = cljs.core.next(seq__33750_34176__$1);
var G__34184 = null;
var G__34185 = (0);
var G__34186 = (0);
seq__33750_34166 = G__34183;
chunk__33751_34167 = G__34184;
count__33752_34168 = G__34185;
i__33753_34169 = G__34186;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34187 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34187], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34187)))?cljs.core.second(arglists_34187):arglists_34187)], 0));
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
var seq__33795_34189 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33796_34190 = null;
var count__33797_34191 = (0);
var i__33798_34192 = (0);
while(true){
if((i__33798_34192 < count__33797_34191)){
var vec__33844_34193 = chunk__33796_34190.cljs$core$IIndexed$_nth$arity$2(null,i__33798_34192);
var name_34194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33844_34193,(0),null);
var map__33847_34195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33844_34193,(1),null);
var map__33847_34196__$1 = cljs.core.__destructure_map(map__33847_34195);
var doc_34197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33847_34196__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33847_34196__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34194], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34198], 0));

if(cljs.core.truth_(doc_34197)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34197], 0));
} else {
}


var G__34199 = seq__33795_34189;
var G__34200 = chunk__33796_34190;
var G__34201 = count__33797_34191;
var G__34202 = (i__33798_34192 + (1));
seq__33795_34189 = G__34199;
chunk__33796_34190 = G__34200;
count__33797_34191 = G__34201;
i__33798_34192 = G__34202;
continue;
} else {
var temp__5753__auto___34203 = cljs.core.seq(seq__33795_34189);
if(temp__5753__auto___34203){
var seq__33795_34204__$1 = temp__5753__auto___34203;
if(cljs.core.chunked_seq_QMARK_(seq__33795_34204__$1)){
var c__4679__auto___34205 = cljs.core.chunk_first(seq__33795_34204__$1);
var G__34206 = cljs.core.chunk_rest(seq__33795_34204__$1);
var G__34207 = c__4679__auto___34205;
var G__34208 = cljs.core.count(c__4679__auto___34205);
var G__34209 = (0);
seq__33795_34189 = G__34206;
chunk__33796_34190 = G__34207;
count__33797_34191 = G__34208;
i__33798_34192 = G__34209;
continue;
} else {
var vec__33851_34210 = cljs.core.first(seq__33795_34204__$1);
var name_34211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33851_34210,(0),null);
var map__33854_34212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33851_34210,(1),null);
var map__33854_34213__$1 = cljs.core.__destructure_map(map__33854_34212);
var doc_34214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33854_34213__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33854_34213__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34211], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34215], 0));

if(cljs.core.truth_(doc_34214)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34214], 0));
} else {
}


var G__34220 = cljs.core.next(seq__33795_34204__$1);
var G__34221 = null;
var G__34222 = (0);
var G__34223 = (0);
seq__33795_34189 = G__34220;
chunk__33796_34190 = G__34221;
count__33797_34191 = G__34222;
i__33798_34192 = G__34223;
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

var seq__33859 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33860 = null;
var count__33861 = (0);
var i__33862 = (0);
while(true){
if((i__33862 < count__33861)){
var role = chunk__33860.cljs$core$IIndexed$_nth$arity$2(null,i__33862);
var temp__5753__auto___34226__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34226__$1)){
var spec_34227 = temp__5753__auto___34226__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34227)], 0));
} else {
}


var G__34228 = seq__33859;
var G__34229 = chunk__33860;
var G__34230 = count__33861;
var G__34231 = (i__33862 + (1));
seq__33859 = G__34228;
chunk__33860 = G__34229;
count__33861 = G__34230;
i__33862 = G__34231;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__33859);
if(temp__5753__auto____$1){
var seq__33859__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__33859__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33859__$1);
var G__34235 = cljs.core.chunk_rest(seq__33859__$1);
var G__34236 = c__4679__auto__;
var G__34237 = cljs.core.count(c__4679__auto__);
var G__34238 = (0);
seq__33859 = G__34235;
chunk__33860 = G__34236;
count__33861 = G__34237;
i__33862 = G__34238;
continue;
} else {
var role = cljs.core.first(seq__33859__$1);
var temp__5753__auto___34239__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34239__$2)){
var spec_34240 = temp__5753__auto___34239__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34240)], 0));
} else {
}


var G__34241 = cljs.core.next(seq__33859__$1);
var G__34242 = null;
var G__34243 = (0);
var G__34244 = (0);
seq__33859 = G__34241;
chunk__33860 = G__34242;
count__33861 = G__34243;
i__33862 = G__34244;
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
var G__34247 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34248 = cljs.core.ex_cause(t);
via = G__34247;
t = G__34248;
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
var map__34000 = datafied_throwable;
var map__34000__$1 = cljs.core.__destructure_map(map__34000);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34000__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34000__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34000__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34004 = cljs.core.last(via);
var map__34004__$1 = cljs.core.__destructure_map(map__34004);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34004__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34004__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34004__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34005 = data;
var map__34005__$1 = cljs.core.__destructure_map(map__34005);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34005__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34005__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34005__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34006 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34006__$1 = cljs.core.__destructure_map(map__34006);
var top_data = map__34006__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34006__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34016 = phase;
var G__34016__$1 = (((G__34016 instanceof cljs.core.Keyword))?G__34016.fqn:null);
switch (G__34016__$1) {
case "read-source":
var map__34019 = data;
var map__34019__$1 = cljs.core.__destructure_map(map__34019);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34019__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34019__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34023 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34023__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34023,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34023);
var G__34023__$2 = (cljs.core.truth_((function (){var fexpr__34025 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34025.cljs$core$IFn$_invoke$arity$1 ? fexpr__34025.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34025.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34023__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34023__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34023__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34023__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34030 = top_data;
var G__34030__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34030,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34030);
var G__34030__$2 = (cljs.core.truth_((function (){var fexpr__34032 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34032.cljs$core$IFn$_invoke$arity$1 ? fexpr__34032.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34032.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34030__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34030__$1);
var G__34030__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34030__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34030__$2);
var G__34030__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34030__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34030__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34030__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34030__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34040 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34040,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34040,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34040,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34040,(3),null);
var G__34046 = top_data;
var G__34046__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34046,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34046);
var G__34046__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34046__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34046__$1);
var G__34046__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34046__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34046__$2);
var G__34046__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34046__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34046__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34046__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34046__$4;
}

break;
case "execution":
var vec__34054 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34054,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34054,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34054,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34054,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__33993_SHARP_){
var or__4253__auto__ = (p1__33993_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__34060 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34060.cljs$core$IFn$_invoke$arity$1 ? fexpr__34060.cljs$core$IFn$_invoke$arity$1(p1__33993_SHARP_) : fexpr__34060.call(null,p1__33993_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__34063 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34063__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34063,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34063);
var G__34063__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34063__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34063__$1);
var G__34063__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34063__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34063__$2);
var G__34063__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34063__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34063__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34063__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34063__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34016__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34076){
var map__34077 = p__34076;
var map__34077__$1 = cljs.core.__destructure_map(map__34077);
var triage_data = map__34077__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34077__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34077__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34077__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34077__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34077__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34077__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34077__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34077__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__34088 = phase;
var G__34088__$1 = (((G__34088 instanceof cljs.core.Keyword))?G__34088.fqn:null);
switch (G__34088__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34095 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34096 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34097 = loc;
var G__34098 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34104_34298 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34105_34299 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34106_34300 = true;
var _STAR_print_fn_STAR__temp_val__34107_34301 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34106_34300);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34107_34301);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34072_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34072_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34105_34299);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34104_34298);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34095,G__34096,G__34097,G__34098) : format.call(null,G__34095,G__34096,G__34097,G__34098));

break;
case "macroexpansion":
var G__34112 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34113 = cause_type;
var G__34114 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34115 = loc;
var G__34116 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34112,G__34113,G__34114,G__34115,G__34116) : format.call(null,G__34112,G__34113,G__34114,G__34115,G__34116));

break;
case "compile-syntax-check":
var G__34117 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34118 = cause_type;
var G__34119 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34120 = loc;
var G__34121 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34117,G__34118,G__34119,G__34120,G__34121) : format.call(null,G__34117,G__34118,G__34119,G__34120,G__34121));

break;
case "compilation":
var G__34127 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34128 = cause_type;
var G__34129 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34130 = loc;
var G__34131 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34127,G__34128,G__34129,G__34130,G__34131) : format.call(null,G__34127,G__34128,G__34129,G__34130,G__34131));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34137 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34138 = symbol;
var G__34139 = loc;
var G__34140 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34142_34317 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34143_34318 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34144_34319 = true;
var _STAR_print_fn_STAR__temp_val__34145_34320 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34144_34319);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34145_34320);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34074_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34074_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34143_34318);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34142_34317);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34137,G__34138,G__34139,G__34140) : format.call(null,G__34137,G__34138,G__34139,G__34140));
} else {
var G__34153 = "Execution error%s at %s(%s).\n%s\n";
var G__34154 = cause_type;
var G__34155 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34156 = loc;
var G__34157 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34153,G__34154,G__34155,G__34156,G__34157) : format.call(null,G__34153,G__34154,G__34155,G__34156,G__34157));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34088__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
