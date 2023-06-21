goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46557 = arguments.length;
var i__4865__auto___46558 = (0);
while(true){
if((i__4865__auto___46558 < len__4864__auto___46557)){
args__4870__auto__.push((arguments[i__4865__auto___46558]));

var G__46559 = (i__4865__auto___46558 + (1));
i__4865__auto___46558 = G__46559;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq46127){
var G__46128 = cljs.core.first(seq46127);
var seq46127__$1 = cljs.core.next(seq46127);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46128,seq46127__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__46177 = cljs.core.seq(sources);
var chunk__46182 = null;
var count__46183 = (0);
var i__46184 = (0);
while(true){
if((i__46184 < count__46183)){
var map__46222 = chunk__46182.cljs$core$IIndexed$_nth$arity$2(null,i__46184);
var map__46222__$1 = cljs.core.__destructure_map(map__46222);
var src = map__46222__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46222__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46222__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46222__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46222__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e46224){var e_46566 = e46224;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46566);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46566.message)].join('')));
}

var G__46567 = seq__46177;
var G__46568 = chunk__46182;
var G__46569 = count__46183;
var G__46570 = (i__46184 + (1));
seq__46177 = G__46567;
chunk__46182 = G__46568;
count__46183 = G__46569;
i__46184 = G__46570;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46177);
if(temp__5753__auto__){
var seq__46177__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46177__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46177__$1);
var G__46573 = cljs.core.chunk_rest(seq__46177__$1);
var G__46574 = c__4679__auto__;
var G__46575 = cljs.core.count(c__4679__auto__);
var G__46576 = (0);
seq__46177 = G__46573;
chunk__46182 = G__46574;
count__46183 = G__46575;
i__46184 = G__46576;
continue;
} else {
var map__46228 = cljs.core.first(seq__46177__$1);
var map__46228__$1 = cljs.core.__destructure_map(map__46228);
var src = map__46228__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46228__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46228__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46228__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46228__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e46230){var e_46578 = e46230;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46578);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46578.message)].join('')));
}

var G__46579 = cljs.core.next(seq__46177__$1);
var G__46580 = null;
var G__46581 = (0);
var G__46582 = (0);
seq__46177 = G__46579;
chunk__46182 = G__46580;
count__46183 = G__46581;
i__46184 = G__46582;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__46237 = cljs.core.seq(js_requires);
var chunk__46238 = null;
var count__46239 = (0);
var i__46240 = (0);
while(true){
if((i__46240 < count__46239)){
var js_ns = chunk__46238.cljs$core$IIndexed$_nth$arity$2(null,i__46240);
var require_str_46587 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46587);


var G__46588 = seq__46237;
var G__46589 = chunk__46238;
var G__46590 = count__46239;
var G__46591 = (i__46240 + (1));
seq__46237 = G__46588;
chunk__46238 = G__46589;
count__46239 = G__46590;
i__46240 = G__46591;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46237);
if(temp__5753__auto__){
var seq__46237__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46237__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46237__$1);
var G__46593 = cljs.core.chunk_rest(seq__46237__$1);
var G__46594 = c__4679__auto__;
var G__46595 = cljs.core.count(c__4679__auto__);
var G__46596 = (0);
seq__46237 = G__46593;
chunk__46238 = G__46594;
count__46239 = G__46595;
i__46240 = G__46596;
continue;
} else {
var js_ns = cljs.core.first(seq__46237__$1);
var require_str_46599 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46599);


var G__46602 = cljs.core.next(seq__46237__$1);
var G__46603 = null;
var G__46604 = (0);
var G__46605 = (0);
seq__46237 = G__46602;
chunk__46238 = G__46603;
count__46239 = G__46604;
i__46240 = G__46605;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__46249){
var map__46250 = p__46249;
var map__46250__$1 = cljs.core.__destructure_map(map__46250);
var msg = map__46250__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46250__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46250__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46252(s__46253){
return (new cljs.core.LazySeq(null,(function (){
var s__46253__$1 = s__46253;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46253__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__46261 = cljs.core.first(xs__6308__auto__);
var map__46261__$1 = cljs.core.__destructure_map(map__46261);
var src = map__46261__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46261__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46261__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__46253__$1,map__46261,map__46261__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__46250,map__46250__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46252_$_iter__46254(s__46255){
return (new cljs.core.LazySeq(null,((function (s__46253__$1,map__46261,map__46261__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__46250,map__46250__$1,msg,info,reload_info){
return (function (){
var s__46255__$1 = s__46255;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__46255__$1);
if(temp__5753__auto____$1){
var s__46255__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46255__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__46255__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__46257 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__46256 = (0);
while(true){
if((i__46256 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__46256);
cljs.core.chunk_append(b__46257,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__46613 = (i__46256 + (1));
i__46256 = G__46613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46257),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46252_$_iter__46254(cljs.core.chunk_rest(s__46255__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46257),null);
}
} else {
var warning = cljs.core.first(s__46255__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46252_$_iter__46254(cljs.core.rest(s__46255__$2)));
}
} else {
return null;
}
break;
}
});})(s__46253__$1,map__46261,map__46261__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__46250,map__46250__$1,msg,info,reload_info))
,null,null));
});})(s__46253__$1,map__46261,map__46261__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__46250,map__46250__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46252(cljs.core.rest(s__46253__$1)));
} else {
var G__46615 = cljs.core.rest(s__46253__$1);
s__46253__$1 = G__46615;
continue;
}
} else {
var G__46616 = cljs.core.rest(s__46253__$1);
s__46253__$1 = G__46616;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__46269_46617 = cljs.core.seq(warnings);
var chunk__46270_46618 = null;
var count__46271_46619 = (0);
var i__46272_46620 = (0);
while(true){
if((i__46272_46620 < count__46271_46619)){
var map__46278_46623 = chunk__46270_46618.cljs$core$IIndexed$_nth$arity$2(null,i__46272_46620);
var map__46278_46624__$1 = cljs.core.__destructure_map(map__46278_46623);
var w_46625 = map__46278_46624__$1;
var msg_46626__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46278_46624__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46278_46624__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46278_46624__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46278_46624__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46629)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46627),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46628),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46626__$1)].join(''));


var G__46632 = seq__46269_46617;
var G__46633 = chunk__46270_46618;
var G__46634 = count__46271_46619;
var G__46635 = (i__46272_46620 + (1));
seq__46269_46617 = G__46632;
chunk__46270_46618 = G__46633;
count__46271_46619 = G__46634;
i__46272_46620 = G__46635;
continue;
} else {
var temp__5753__auto___46636 = cljs.core.seq(seq__46269_46617);
if(temp__5753__auto___46636){
var seq__46269_46637__$1 = temp__5753__auto___46636;
if(cljs.core.chunked_seq_QMARK_(seq__46269_46637__$1)){
var c__4679__auto___46638 = cljs.core.chunk_first(seq__46269_46637__$1);
var G__46639 = cljs.core.chunk_rest(seq__46269_46637__$1);
var G__46640 = c__4679__auto___46638;
var G__46641 = cljs.core.count(c__4679__auto___46638);
var G__46642 = (0);
seq__46269_46617 = G__46639;
chunk__46270_46618 = G__46640;
count__46271_46619 = G__46641;
i__46272_46620 = G__46642;
continue;
} else {
var map__46281_46643 = cljs.core.first(seq__46269_46637__$1);
var map__46281_46644__$1 = cljs.core.__destructure_map(map__46281_46643);
var w_46645 = map__46281_46644__$1;
var msg_46646__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46281_46644__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46281_46644__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46281_46644__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46281_46644__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46649)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46647),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46648),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46646__$1)].join(''));


var G__46656 = cljs.core.next(seq__46269_46637__$1);
var G__46657 = null;
var G__46658 = (0);
var G__46659 = (0);
seq__46269_46617 = G__46656;
chunk__46270_46618 = G__46657;
count__46271_46619 = G__46658;
i__46272_46620 = G__46659;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__46248_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__46248_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__46291){
var map__46292 = p__46291;
var map__46292__$1 = cljs.core.__destructure_map(map__46292);
var msg = map__46292__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46292__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__46294 = cljs.core.seq(updates);
var chunk__46296 = null;
var count__46297 = (0);
var i__46298 = (0);
while(true){
if((i__46298 < count__46297)){
var path = chunk__46296.cljs$core$IIndexed$_nth$arity$2(null,i__46298);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46355_46666 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46360_46667 = null;
var count__46361_46668 = (0);
var i__46362_46669 = (0);
while(true){
if((i__46362_46669 < count__46361_46668)){
var node_46670 = chunk__46360_46667.cljs$core$IIndexed$_nth$arity$2(null,i__46362_46669);
if(cljs.core.not(node_46670.shadow$old)){
var path_match_46671 = shadow.cljs.devtools.client.browser.match_paths(node_46670.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46671)){
var new_link_46672 = (function (){var G__46385 = node_46670.cloneNode(true);
G__46385.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46671),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46385;
})();
(node_46670.shadow$old = true);

(new_link_46672.onload = ((function (seq__46355_46666,chunk__46360_46667,count__46361_46668,i__46362_46669,seq__46294,chunk__46296,count__46297,i__46298,new_link_46672,path_match_46671,node_46670,path,map__46292,map__46292__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46670);
});})(seq__46355_46666,chunk__46360_46667,count__46361_46668,i__46362_46669,seq__46294,chunk__46296,count__46297,i__46298,new_link_46672,path_match_46671,node_46670,path,map__46292,map__46292__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46671], 0));

goog.dom.insertSiblingAfter(new_link_46672,node_46670);


var G__46677 = seq__46355_46666;
var G__46678 = chunk__46360_46667;
var G__46679 = count__46361_46668;
var G__46680 = (i__46362_46669 + (1));
seq__46355_46666 = G__46677;
chunk__46360_46667 = G__46678;
count__46361_46668 = G__46679;
i__46362_46669 = G__46680;
continue;
} else {
var G__46681 = seq__46355_46666;
var G__46682 = chunk__46360_46667;
var G__46683 = count__46361_46668;
var G__46684 = (i__46362_46669 + (1));
seq__46355_46666 = G__46681;
chunk__46360_46667 = G__46682;
count__46361_46668 = G__46683;
i__46362_46669 = G__46684;
continue;
}
} else {
var G__46686 = seq__46355_46666;
var G__46687 = chunk__46360_46667;
var G__46688 = count__46361_46668;
var G__46689 = (i__46362_46669 + (1));
seq__46355_46666 = G__46686;
chunk__46360_46667 = G__46687;
count__46361_46668 = G__46688;
i__46362_46669 = G__46689;
continue;
}
} else {
var temp__5753__auto___46691 = cljs.core.seq(seq__46355_46666);
if(temp__5753__auto___46691){
var seq__46355_46692__$1 = temp__5753__auto___46691;
if(cljs.core.chunked_seq_QMARK_(seq__46355_46692__$1)){
var c__4679__auto___46693 = cljs.core.chunk_first(seq__46355_46692__$1);
var G__46695 = cljs.core.chunk_rest(seq__46355_46692__$1);
var G__46696 = c__4679__auto___46693;
var G__46697 = cljs.core.count(c__4679__auto___46693);
var G__46698 = (0);
seq__46355_46666 = G__46695;
chunk__46360_46667 = G__46696;
count__46361_46668 = G__46697;
i__46362_46669 = G__46698;
continue;
} else {
var node_46699 = cljs.core.first(seq__46355_46692__$1);
if(cljs.core.not(node_46699.shadow$old)){
var path_match_46701 = shadow.cljs.devtools.client.browser.match_paths(node_46699.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46701)){
var new_link_46702 = (function (){var G__46394 = node_46699.cloneNode(true);
G__46394.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46701),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46394;
})();
(node_46699.shadow$old = true);

(new_link_46702.onload = ((function (seq__46355_46666,chunk__46360_46667,count__46361_46668,i__46362_46669,seq__46294,chunk__46296,count__46297,i__46298,new_link_46702,path_match_46701,node_46699,seq__46355_46692__$1,temp__5753__auto___46691,path,map__46292,map__46292__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46699);
});})(seq__46355_46666,chunk__46360_46667,count__46361_46668,i__46362_46669,seq__46294,chunk__46296,count__46297,i__46298,new_link_46702,path_match_46701,node_46699,seq__46355_46692__$1,temp__5753__auto___46691,path,map__46292,map__46292__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46701], 0));

goog.dom.insertSiblingAfter(new_link_46702,node_46699);


var G__46703 = cljs.core.next(seq__46355_46692__$1);
var G__46704 = null;
var G__46705 = (0);
var G__46706 = (0);
seq__46355_46666 = G__46703;
chunk__46360_46667 = G__46704;
count__46361_46668 = G__46705;
i__46362_46669 = G__46706;
continue;
} else {
var G__46707 = cljs.core.next(seq__46355_46692__$1);
var G__46708 = null;
var G__46709 = (0);
var G__46710 = (0);
seq__46355_46666 = G__46707;
chunk__46360_46667 = G__46708;
count__46361_46668 = G__46709;
i__46362_46669 = G__46710;
continue;
}
} else {
var G__46711 = cljs.core.next(seq__46355_46692__$1);
var G__46712 = null;
var G__46713 = (0);
var G__46714 = (0);
seq__46355_46666 = G__46711;
chunk__46360_46667 = G__46712;
count__46361_46668 = G__46713;
i__46362_46669 = G__46714;
continue;
}
}
} else {
}
}
break;
}


var G__46715 = seq__46294;
var G__46716 = chunk__46296;
var G__46717 = count__46297;
var G__46718 = (i__46298 + (1));
seq__46294 = G__46715;
chunk__46296 = G__46716;
count__46297 = G__46717;
i__46298 = G__46718;
continue;
} else {
var G__46719 = seq__46294;
var G__46720 = chunk__46296;
var G__46721 = count__46297;
var G__46722 = (i__46298 + (1));
seq__46294 = G__46719;
chunk__46296 = G__46720;
count__46297 = G__46721;
i__46298 = G__46722;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46294);
if(temp__5753__auto__){
var seq__46294__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46294__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46294__$1);
var G__46723 = cljs.core.chunk_rest(seq__46294__$1);
var G__46724 = c__4679__auto__;
var G__46725 = cljs.core.count(c__4679__auto__);
var G__46726 = (0);
seq__46294 = G__46723;
chunk__46296 = G__46724;
count__46297 = G__46725;
i__46298 = G__46726;
continue;
} else {
var path = cljs.core.first(seq__46294__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46406_46727 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46410_46728 = null;
var count__46411_46729 = (0);
var i__46412_46730 = (0);
while(true){
if((i__46412_46730 < count__46411_46729)){
var node_46731 = chunk__46410_46728.cljs$core$IIndexed$_nth$arity$2(null,i__46412_46730);
if(cljs.core.not(node_46731.shadow$old)){
var path_match_46732 = shadow.cljs.devtools.client.browser.match_paths(node_46731.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46732)){
var new_link_46735 = (function (){var G__46435 = node_46731.cloneNode(true);
G__46435.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46732),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46435;
})();
(node_46731.shadow$old = true);

(new_link_46735.onload = ((function (seq__46406_46727,chunk__46410_46728,count__46411_46729,i__46412_46730,seq__46294,chunk__46296,count__46297,i__46298,new_link_46735,path_match_46732,node_46731,path,seq__46294__$1,temp__5753__auto__,map__46292,map__46292__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46731);
});})(seq__46406_46727,chunk__46410_46728,count__46411_46729,i__46412_46730,seq__46294,chunk__46296,count__46297,i__46298,new_link_46735,path_match_46732,node_46731,path,seq__46294__$1,temp__5753__auto__,map__46292,map__46292__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46732], 0));

goog.dom.insertSiblingAfter(new_link_46735,node_46731);


var G__46739 = seq__46406_46727;
var G__46740 = chunk__46410_46728;
var G__46741 = count__46411_46729;
var G__46742 = (i__46412_46730 + (1));
seq__46406_46727 = G__46739;
chunk__46410_46728 = G__46740;
count__46411_46729 = G__46741;
i__46412_46730 = G__46742;
continue;
} else {
var G__46743 = seq__46406_46727;
var G__46744 = chunk__46410_46728;
var G__46745 = count__46411_46729;
var G__46746 = (i__46412_46730 + (1));
seq__46406_46727 = G__46743;
chunk__46410_46728 = G__46744;
count__46411_46729 = G__46745;
i__46412_46730 = G__46746;
continue;
}
} else {
var G__46748 = seq__46406_46727;
var G__46749 = chunk__46410_46728;
var G__46750 = count__46411_46729;
var G__46751 = (i__46412_46730 + (1));
seq__46406_46727 = G__46748;
chunk__46410_46728 = G__46749;
count__46411_46729 = G__46750;
i__46412_46730 = G__46751;
continue;
}
} else {
var temp__5753__auto___46752__$1 = cljs.core.seq(seq__46406_46727);
if(temp__5753__auto___46752__$1){
var seq__46406_46753__$1 = temp__5753__auto___46752__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46406_46753__$1)){
var c__4679__auto___46754 = cljs.core.chunk_first(seq__46406_46753__$1);
var G__46755 = cljs.core.chunk_rest(seq__46406_46753__$1);
var G__46756 = c__4679__auto___46754;
var G__46757 = cljs.core.count(c__4679__auto___46754);
var G__46758 = (0);
seq__46406_46727 = G__46755;
chunk__46410_46728 = G__46756;
count__46411_46729 = G__46757;
i__46412_46730 = G__46758;
continue;
} else {
var node_46759 = cljs.core.first(seq__46406_46753__$1);
if(cljs.core.not(node_46759.shadow$old)){
var path_match_46760 = shadow.cljs.devtools.client.browser.match_paths(node_46759.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46760)){
var new_link_46761 = (function (){var G__46443 = node_46759.cloneNode(true);
G__46443.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46760),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46443;
})();
(node_46759.shadow$old = true);

(new_link_46761.onload = ((function (seq__46406_46727,chunk__46410_46728,count__46411_46729,i__46412_46730,seq__46294,chunk__46296,count__46297,i__46298,new_link_46761,path_match_46760,node_46759,seq__46406_46753__$1,temp__5753__auto___46752__$1,path,seq__46294__$1,temp__5753__auto__,map__46292,map__46292__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46759);
});})(seq__46406_46727,chunk__46410_46728,count__46411_46729,i__46412_46730,seq__46294,chunk__46296,count__46297,i__46298,new_link_46761,path_match_46760,node_46759,seq__46406_46753__$1,temp__5753__auto___46752__$1,path,seq__46294__$1,temp__5753__auto__,map__46292,map__46292__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46760], 0));

goog.dom.insertSiblingAfter(new_link_46761,node_46759);


var G__46762 = cljs.core.next(seq__46406_46753__$1);
var G__46763 = null;
var G__46764 = (0);
var G__46765 = (0);
seq__46406_46727 = G__46762;
chunk__46410_46728 = G__46763;
count__46411_46729 = G__46764;
i__46412_46730 = G__46765;
continue;
} else {
var G__46766 = cljs.core.next(seq__46406_46753__$1);
var G__46767 = null;
var G__46768 = (0);
var G__46769 = (0);
seq__46406_46727 = G__46766;
chunk__46410_46728 = G__46767;
count__46411_46729 = G__46768;
i__46412_46730 = G__46769;
continue;
}
} else {
var G__46770 = cljs.core.next(seq__46406_46753__$1);
var G__46771 = null;
var G__46772 = (0);
var G__46773 = (0);
seq__46406_46727 = G__46770;
chunk__46410_46728 = G__46771;
count__46411_46729 = G__46772;
i__46412_46730 = G__46773;
continue;
}
}
} else {
}
}
break;
}


var G__46774 = cljs.core.next(seq__46294__$1);
var G__46775 = null;
var G__46776 = (0);
var G__46777 = (0);
seq__46294 = G__46774;
chunk__46296 = G__46775;
count__46297 = G__46776;
i__46298 = G__46777;
continue;
} else {
var G__46778 = cljs.core.next(seq__46294__$1);
var G__46779 = null;
var G__46780 = (0);
var G__46781 = (0);
seq__46294 = G__46778;
chunk__46296 = G__46779;
count__46297 = G__46780;
i__46298 = G__46781;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__46460){
var map__46462 = p__46460;
var map__46462__$1 = cljs.core.__destructure_map(map__46462);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46462__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__46492){
var map__46493 = p__46492;
var map__46493__$1 = cljs.core.__destructure_map(map__46493);
var _ = map__46493__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46493__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__46494,done,error){
var map__46495 = p__46494;
var map__46495__$1 = cljs.core.__destructure_map(map__46495);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46495__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__46500,done,error){
var map__46503 = p__46500;
var map__46503__$1 = cljs.core.__destructure_map(map__46503);
var msg = map__46503__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46503__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46503__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46503__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__46512){
var map__46513 = p__46512;
var map__46513__$1 = cljs.core.__destructure_map(map__46513);
var src = map__46513__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46513__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__46515 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__46515) : done.call(null,G__46515));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__46516){
var map__46517 = p__46516;
var map__46517__$1 = cljs.core.__destructure_map(map__46517);
var msg__$1 = map__46517__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46517__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e46518){var ex = e46518;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__46523){
var map__46524 = p__46523;
var map__46524__$1 = cljs.core.__destructure_map(map__46524);
var env = map__46524__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46524__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__46544){
var map__46546 = p__46544;
var map__46546__$1 = cljs.core.__destructure_map(map__46546);
var msg = map__46546__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46546__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__46549){
var map__46550 = p__46549;
var map__46550__$1 = cljs.core.__destructure_map(map__46550);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46550__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46550__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__46553){
var map__46554 = p__46553;
var map__46554__$1 = cljs.core.__destructure_map(map__46554);
var svc = map__46554__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46554__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
