goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39354){
var map__39355 = p__39354;
var map__39355__$1 = cljs.core.__destructure_map(map__39355);
var m = map__39355__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39355__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39355__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__39361_39795 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39362_39796 = null;
var count__39363_39797 = (0);
var i__39364_39798 = (0);
while(true){
if((i__39364_39798 < count__39363_39797)){
var f_39801 = chunk__39362_39796.cljs$core$IIndexed$_nth$arity$2(null,i__39364_39798);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39801], 0));


var G__39802 = seq__39361_39795;
var G__39803 = chunk__39362_39796;
var G__39804 = count__39363_39797;
var G__39805 = (i__39364_39798 + (1));
seq__39361_39795 = G__39802;
chunk__39362_39796 = G__39803;
count__39363_39797 = G__39804;
i__39364_39798 = G__39805;
continue;
} else {
var temp__5753__auto___39806 = cljs.core.seq(seq__39361_39795);
if(temp__5753__auto___39806){
var seq__39361_39808__$1 = temp__5753__auto___39806;
if(cljs.core.chunked_seq_QMARK_(seq__39361_39808__$1)){
var c__4679__auto___39809 = cljs.core.chunk_first(seq__39361_39808__$1);
var G__39810 = cljs.core.chunk_rest(seq__39361_39808__$1);
var G__39811 = c__4679__auto___39809;
var G__39812 = cljs.core.count(c__4679__auto___39809);
var G__39813 = (0);
seq__39361_39795 = G__39810;
chunk__39362_39796 = G__39811;
count__39363_39797 = G__39812;
i__39364_39798 = G__39813;
continue;
} else {
var f_39815 = cljs.core.first(seq__39361_39808__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39815], 0));


var G__39816 = cljs.core.next(seq__39361_39808__$1);
var G__39817 = null;
var G__39818 = (0);
var G__39819 = (0);
seq__39361_39795 = G__39816;
chunk__39362_39796 = G__39817;
count__39363_39797 = G__39818;
i__39364_39798 = G__39819;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39820 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_39820], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_39820)))?cljs.core.second(arglists_39820):arglists_39820)], 0));
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
var seq__39394_39825 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39397_39826 = null;
var count__39398_39827 = (0);
var i__39399_39828 = (0);
while(true){
if((i__39399_39828 < count__39398_39827)){
var vec__39431_39829 = chunk__39397_39826.cljs$core$IIndexed$_nth$arity$2(null,i__39399_39828);
var name_39830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39431_39829,(0),null);
var map__39434_39831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39431_39829,(1),null);
var map__39434_39832__$1 = cljs.core.__destructure_map(map__39434_39831);
var doc_39833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39434_39832__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39434_39832__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39830], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39834], 0));

if(cljs.core.truth_(doc_39833)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39833], 0));
} else {
}


var G__39838 = seq__39394_39825;
var G__39839 = chunk__39397_39826;
var G__39840 = count__39398_39827;
var G__39841 = (i__39399_39828 + (1));
seq__39394_39825 = G__39838;
chunk__39397_39826 = G__39839;
count__39398_39827 = G__39840;
i__39399_39828 = G__39841;
continue;
} else {
var temp__5753__auto___39842 = cljs.core.seq(seq__39394_39825);
if(temp__5753__auto___39842){
var seq__39394_39843__$1 = temp__5753__auto___39842;
if(cljs.core.chunked_seq_QMARK_(seq__39394_39843__$1)){
var c__4679__auto___39844 = cljs.core.chunk_first(seq__39394_39843__$1);
var G__39845 = cljs.core.chunk_rest(seq__39394_39843__$1);
var G__39846 = c__4679__auto___39844;
var G__39847 = cljs.core.count(c__4679__auto___39844);
var G__39848 = (0);
seq__39394_39825 = G__39845;
chunk__39397_39826 = G__39846;
count__39398_39827 = G__39847;
i__39399_39828 = G__39848;
continue;
} else {
var vec__39437_39850 = cljs.core.first(seq__39394_39843__$1);
var name_39851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39437_39850,(0),null);
var map__39440_39852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39437_39850,(1),null);
var map__39440_39853__$1 = cljs.core.__destructure_map(map__39440_39852);
var doc_39854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39440_39853__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39440_39853__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39851], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39855], 0));

if(cljs.core.truth_(doc_39854)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39854], 0));
} else {
}


var G__39856 = cljs.core.next(seq__39394_39843__$1);
var G__39857 = null;
var G__39858 = (0);
var G__39859 = (0);
seq__39394_39825 = G__39856;
chunk__39397_39826 = G__39857;
count__39398_39827 = G__39858;
i__39399_39828 = G__39859;
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

var seq__39443 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39444 = null;
var count__39445 = (0);
var i__39446 = (0);
while(true){
if((i__39446 < count__39445)){
var role = chunk__39444.cljs$core$IIndexed$_nth$arity$2(null,i__39446);
var temp__5753__auto___39862__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___39862__$1)){
var spec_39863 = temp__5753__auto___39862__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39863)], 0));
} else {
}


var G__39865 = seq__39443;
var G__39866 = chunk__39444;
var G__39867 = count__39445;
var G__39868 = (i__39446 + (1));
seq__39443 = G__39865;
chunk__39444 = G__39866;
count__39445 = G__39867;
i__39446 = G__39868;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__39443);
if(temp__5753__auto____$1){
var seq__39443__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39443__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39443__$1);
var G__39873 = cljs.core.chunk_rest(seq__39443__$1);
var G__39874 = c__4679__auto__;
var G__39875 = cljs.core.count(c__4679__auto__);
var G__39876 = (0);
seq__39443 = G__39873;
chunk__39444 = G__39874;
count__39445 = G__39875;
i__39446 = G__39876;
continue;
} else {
var role = cljs.core.first(seq__39443__$1);
var temp__5753__auto___39878__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___39878__$2)){
var spec_39879 = temp__5753__auto___39878__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39879)], 0));
} else {
}


var G__39883 = cljs.core.next(seq__39443__$1);
var G__39884 = null;
var G__39885 = (0);
var G__39886 = (0);
seq__39443 = G__39883;
chunk__39444 = G__39884;
count__39445 = G__39885;
i__39446 = G__39886;
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
var G__39893 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__39894 = cljs.core.ex_cause(t);
via = G__39893;
t = G__39894;
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
var map__39505 = datafied_throwable;
var map__39505__$1 = cljs.core.__destructure_map(map__39505);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39505__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39505__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39505__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39506 = cljs.core.last(via);
var map__39506__$1 = cljs.core.__destructure_map(map__39506);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39506__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39506__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39506__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39507 = data;
var map__39507__$1 = cljs.core.__destructure_map(map__39507);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39507__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39507__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39507__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39509 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__39509__$1 = cljs.core.__destructure_map(map__39509);
var top_data = map__39509__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39509__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__39515 = phase;
var G__39515__$1 = (((G__39515 instanceof cljs.core.Keyword))?G__39515.fqn:null);
switch (G__39515__$1) {
case "read-source":
var map__39516 = data;
var map__39516__$1 = cljs.core.__destructure_map(map__39516);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39516__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39516__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39518 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__39518__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39518,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39518);
var G__39518__$2 = (cljs.core.truth_((function (){var fexpr__39520 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39520.cljs$core$IFn$_invoke$arity$1 ? fexpr__39520.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39520.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39518__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39518__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39518__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39518__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39522 = top_data;
var G__39522__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39522,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39522);
var G__39522__$2 = (cljs.core.truth_((function (){var fexpr__39529 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39529.cljs$core$IFn$_invoke$arity$1 ? fexpr__39529.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39529.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39522__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39522__$1);
var G__39522__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39522__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39522__$2);
var G__39522__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39522__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39522__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39522__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39522__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39545 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39545,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39545,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39545,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39545,(3),null);
var G__39549 = top_data;
var G__39549__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39549,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39549);
var G__39549__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39549__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39549__$1);
var G__39549__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39549__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39549__$2);
var G__39549__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39549__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39549__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39549__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39549__$4;
}

break;
case "execution":
var vec__39559 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39559,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39559,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39559,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39559,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39497_SHARP_){
var or__4253__auto__ = (p1__39497_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__39567 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39567.cljs$core$IFn$_invoke$arity$1 ? fexpr__39567.cljs$core$IFn$_invoke$arity$1(p1__39497_SHARP_) : fexpr__39567.call(null,p1__39497_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__39573 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39573__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39573,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39573);
var G__39573__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39573__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39573__$1);
var G__39573__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39573__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39573__$2);
var G__39573__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39573__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39573__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39573__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39573__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39515__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39652){
var map__39653 = p__39652;
var map__39653__$1 = cljs.core.__destructure_map(map__39653);
var triage_data = map__39653__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39653__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39653__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39653__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39653__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39653__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39653__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39653__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39653__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__39705 = phase;
var G__39705__$1 = (((G__39705 instanceof cljs.core.Keyword))?G__39705.fqn:null);
switch (G__39705__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__39708 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__39709 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39710 = loc;
var G__39711 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39722_39952 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39723_39953 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39724_39954 = true;
var _STAR_print_fn_STAR__temp_val__39725_39955 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39724_39954);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39725_39955);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39626_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39626_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39723_39953);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39722_39952);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39708,G__39709,G__39710,G__39711) : format.call(null,G__39708,G__39709,G__39710,G__39711));

break;
case "macroexpansion":
var G__39738 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__39739 = cause_type;
var G__39740 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39741 = loc;
var G__39742 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39738,G__39739,G__39740,G__39741,G__39742) : format.call(null,G__39738,G__39739,G__39740,G__39741,G__39742));

break;
case "compile-syntax-check":
var G__39744 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__39745 = cause_type;
var G__39746 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39747 = loc;
var G__39748 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39744,G__39745,G__39746,G__39747,G__39748) : format.call(null,G__39744,G__39745,G__39746,G__39747,G__39748));

break;
case "compilation":
var G__39750 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__39751 = cause_type;
var G__39752 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39753 = loc;
var G__39754 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39750,G__39751,G__39752,G__39753,G__39754) : format.call(null,G__39750,G__39751,G__39752,G__39753,G__39754));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__39755 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__39756 = symbol;
var G__39757 = loc;
var G__39758 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39761_39960 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39762_39961 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39763_39962 = true;
var _STAR_print_fn_STAR__temp_val__39764_39963 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39763_39962);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39764_39963);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39636_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39636_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39762_39961);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39761_39960);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39755,G__39756,G__39757,G__39758) : format.call(null,G__39755,G__39756,G__39757,G__39758));
} else {
var G__39772 = "Execution error%s at %s(%s).\n%s\n";
var G__39773 = cause_type;
var G__39774 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39775 = loc;
var G__39776 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39772,G__39773,G__39774,G__39775,G__39776) : format.call(null,G__39772,G__39773,G__39774,G__39775,G__39776));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39705__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
