goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43654 = arguments.length;
var i__4865__auto___43655 = (0);
while(true){
if((i__4865__auto___43655 < len__4864__auto___43654)){
args__4870__auto__.push((arguments[i__4865__auto___43655]));

var G__43656 = (i__4865__auto___43655 + (1));
i__4865__auto___43655 = G__43656;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq43447){
var G__43448 = cljs.core.first(seq43447);
var seq43447__$1 = cljs.core.next(seq43447);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43448,seq43447__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__43451 = cljs.core.seq(sources);
var chunk__43452 = null;
var count__43453 = (0);
var i__43454 = (0);
while(true){
if((i__43454 < count__43453)){
var map__43469 = chunk__43452.cljs$core$IIndexed$_nth$arity$2(null,i__43454);
var map__43469__$1 = cljs.core.__destructure_map(map__43469);
var src = map__43469__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43469__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43469__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43469__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43469__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43472){var e_43657 = e43472;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_43657);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_43657.message)].join('')));
}

var G__43658 = seq__43451;
var G__43659 = chunk__43452;
var G__43660 = count__43453;
var G__43661 = (i__43454 + (1));
seq__43451 = G__43658;
chunk__43452 = G__43659;
count__43453 = G__43660;
i__43454 = G__43661;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43451);
if(temp__5753__auto__){
var seq__43451__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43451__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43451__$1);
var G__43662 = cljs.core.chunk_rest(seq__43451__$1);
var G__43663 = c__4679__auto__;
var G__43664 = cljs.core.count(c__4679__auto__);
var G__43665 = (0);
seq__43451 = G__43662;
chunk__43452 = G__43663;
count__43453 = G__43664;
i__43454 = G__43665;
continue;
} else {
var map__43473 = cljs.core.first(seq__43451__$1);
var map__43473__$1 = cljs.core.__destructure_map(map__43473);
var src = map__43473__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43473__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43473__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43473__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43473__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43474){var e_43666 = e43474;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_43666);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_43666.message)].join('')));
}

var G__43668 = cljs.core.next(seq__43451__$1);
var G__43669 = null;
var G__43670 = (0);
var G__43671 = (0);
seq__43451 = G__43668;
chunk__43452 = G__43669;
count__43453 = G__43670;
i__43454 = G__43671;
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
var seq__43476 = cljs.core.seq(js_requires);
var chunk__43477 = null;
var count__43478 = (0);
var i__43479 = (0);
while(true){
if((i__43479 < count__43478)){
var js_ns = chunk__43477.cljs$core$IIndexed$_nth$arity$2(null,i__43479);
var require_str_43673 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_43673);


var G__43674 = seq__43476;
var G__43675 = chunk__43477;
var G__43676 = count__43478;
var G__43677 = (i__43479 + (1));
seq__43476 = G__43674;
chunk__43477 = G__43675;
count__43478 = G__43676;
i__43479 = G__43677;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43476);
if(temp__5753__auto__){
var seq__43476__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43476__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43476__$1);
var G__43678 = cljs.core.chunk_rest(seq__43476__$1);
var G__43679 = c__4679__auto__;
var G__43680 = cljs.core.count(c__4679__auto__);
var G__43681 = (0);
seq__43476 = G__43678;
chunk__43477 = G__43679;
count__43478 = G__43680;
i__43479 = G__43681;
continue;
} else {
var js_ns = cljs.core.first(seq__43476__$1);
var require_str_43682 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_43682);


var G__43683 = cljs.core.next(seq__43476__$1);
var G__43684 = null;
var G__43685 = (0);
var G__43686 = (0);
seq__43476 = G__43683;
chunk__43477 = G__43684;
count__43478 = G__43685;
i__43479 = G__43686;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__43484){
var map__43485 = p__43484;
var map__43485__$1 = cljs.core.__destructure_map(map__43485);
var msg = map__43485__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43485__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43485__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43486(s__43487){
return (new cljs.core.LazySeq(null,(function (){
var s__43487__$1 = s__43487;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__43487__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__43494 = cljs.core.first(xs__6308__auto__);
var map__43494__$1 = cljs.core.__destructure_map(map__43494);
var src = map__43494__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43494__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43494__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__43487__$1,map__43494,map__43494__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__43485,map__43485__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43486_$_iter__43488(s__43489){
return (new cljs.core.LazySeq(null,((function (s__43487__$1,map__43494,map__43494__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__43485,map__43485__$1,msg,info,reload_info){
return (function (){
var s__43489__$1 = s__43489;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__43489__$1);
if(temp__5753__auto____$1){
var s__43489__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43489__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43489__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43491 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43490 = (0);
while(true){
if((i__43490 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__43490);
cljs.core.chunk_append(b__43491,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__43690 = (i__43490 + (1));
i__43490 = G__43690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43491),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43486_$_iter__43488(cljs.core.chunk_rest(s__43489__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43491),null);
}
} else {
var warning = cljs.core.first(s__43489__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43486_$_iter__43488(cljs.core.rest(s__43489__$2)));
}
} else {
return null;
}
break;
}
});})(s__43487__$1,map__43494,map__43494__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__43485,map__43485__$1,msg,info,reload_info))
,null,null));
});})(s__43487__$1,map__43494,map__43494__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__43485,map__43485__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43486(cljs.core.rest(s__43487__$1)));
} else {
var G__43692 = cljs.core.rest(s__43487__$1);
s__43487__$1 = G__43692;
continue;
}
} else {
var G__43693 = cljs.core.rest(s__43487__$1);
s__43487__$1 = G__43693;
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
var seq__43497_43694 = cljs.core.seq(warnings);
var chunk__43498_43695 = null;
var count__43499_43696 = (0);
var i__43500_43697 = (0);
while(true){
if((i__43500_43697 < count__43499_43696)){
var map__43505_43699 = chunk__43498_43695.cljs$core$IIndexed$_nth$arity$2(null,i__43500_43697);
var map__43505_43700__$1 = cljs.core.__destructure_map(map__43505_43699);
var w_43701 = map__43505_43700__$1;
var msg_43702__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43505_43700__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_43703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43505_43700__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_43704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43505_43700__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_43705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43505_43700__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_43705)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_43703),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_43704),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_43702__$1)].join(''));


var G__43707 = seq__43497_43694;
var G__43708 = chunk__43498_43695;
var G__43709 = count__43499_43696;
var G__43710 = (i__43500_43697 + (1));
seq__43497_43694 = G__43707;
chunk__43498_43695 = G__43708;
count__43499_43696 = G__43709;
i__43500_43697 = G__43710;
continue;
} else {
var temp__5753__auto___43711 = cljs.core.seq(seq__43497_43694);
if(temp__5753__auto___43711){
var seq__43497_43712__$1 = temp__5753__auto___43711;
if(cljs.core.chunked_seq_QMARK_(seq__43497_43712__$1)){
var c__4679__auto___43713 = cljs.core.chunk_first(seq__43497_43712__$1);
var G__43714 = cljs.core.chunk_rest(seq__43497_43712__$1);
var G__43715 = c__4679__auto___43713;
var G__43716 = cljs.core.count(c__4679__auto___43713);
var G__43717 = (0);
seq__43497_43694 = G__43714;
chunk__43498_43695 = G__43715;
count__43499_43696 = G__43716;
i__43500_43697 = G__43717;
continue;
} else {
var map__43507_43718 = cljs.core.first(seq__43497_43712__$1);
var map__43507_43719__$1 = cljs.core.__destructure_map(map__43507_43718);
var w_43720 = map__43507_43719__$1;
var msg_43721__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43507_43719__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_43722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43507_43719__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_43723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43507_43719__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_43724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43507_43719__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_43724)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_43722),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_43723),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_43721__$1)].join(''));


var G__43725 = cljs.core.next(seq__43497_43712__$1);
var G__43726 = null;
var G__43727 = (0);
var G__43728 = (0);
seq__43497_43694 = G__43725;
chunk__43498_43695 = G__43726;
count__43499_43696 = G__43727;
i__43500_43697 = G__43728;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__43483_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__43483_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__43513){
var map__43514 = p__43513;
var map__43514__$1 = cljs.core.__destructure_map(map__43514);
var msg = map__43514__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43514__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__43515 = cljs.core.seq(updates);
var chunk__43517 = null;
var count__43518 = (0);
var i__43519 = (0);
while(true){
if((i__43519 < count__43518)){
var path = chunk__43517.cljs$core$IIndexed$_nth$arity$2(null,i__43519);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43569_43729 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43573_43730 = null;
var count__43574_43731 = (0);
var i__43575_43732 = (0);
while(true){
if((i__43575_43732 < count__43574_43731)){
var node_43737 = chunk__43573_43730.cljs$core$IIndexed$_nth$arity$2(null,i__43575_43732);
if(cljs.core.not(node_43737.shadow$old)){
var path_match_43738 = shadow.cljs.devtools.client.browser.match_paths(node_43737.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43738)){
var new_link_43739 = (function (){var G__43589 = node_43737.cloneNode(true);
G__43589.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43738),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43589;
})();
(node_43737.shadow$old = true);

(new_link_43739.onload = ((function (seq__43569_43729,chunk__43573_43730,count__43574_43731,i__43575_43732,seq__43515,chunk__43517,count__43518,i__43519,new_link_43739,path_match_43738,node_43737,path,map__43514,map__43514__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_43737);
});})(seq__43569_43729,chunk__43573_43730,count__43574_43731,i__43575_43732,seq__43515,chunk__43517,count__43518,i__43519,new_link_43739,path_match_43738,node_43737,path,map__43514,map__43514__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43738], 0));

goog.dom.insertSiblingAfter(new_link_43739,node_43737);


var G__43741 = seq__43569_43729;
var G__43742 = chunk__43573_43730;
var G__43743 = count__43574_43731;
var G__43744 = (i__43575_43732 + (1));
seq__43569_43729 = G__43741;
chunk__43573_43730 = G__43742;
count__43574_43731 = G__43743;
i__43575_43732 = G__43744;
continue;
} else {
var G__43745 = seq__43569_43729;
var G__43746 = chunk__43573_43730;
var G__43747 = count__43574_43731;
var G__43748 = (i__43575_43732 + (1));
seq__43569_43729 = G__43745;
chunk__43573_43730 = G__43746;
count__43574_43731 = G__43747;
i__43575_43732 = G__43748;
continue;
}
} else {
var G__43749 = seq__43569_43729;
var G__43750 = chunk__43573_43730;
var G__43751 = count__43574_43731;
var G__43752 = (i__43575_43732 + (1));
seq__43569_43729 = G__43749;
chunk__43573_43730 = G__43750;
count__43574_43731 = G__43751;
i__43575_43732 = G__43752;
continue;
}
} else {
var temp__5753__auto___43753 = cljs.core.seq(seq__43569_43729);
if(temp__5753__auto___43753){
var seq__43569_43754__$1 = temp__5753__auto___43753;
if(cljs.core.chunked_seq_QMARK_(seq__43569_43754__$1)){
var c__4679__auto___43755 = cljs.core.chunk_first(seq__43569_43754__$1);
var G__43756 = cljs.core.chunk_rest(seq__43569_43754__$1);
var G__43757 = c__4679__auto___43755;
var G__43758 = cljs.core.count(c__4679__auto___43755);
var G__43759 = (0);
seq__43569_43729 = G__43756;
chunk__43573_43730 = G__43757;
count__43574_43731 = G__43758;
i__43575_43732 = G__43759;
continue;
} else {
var node_43760 = cljs.core.first(seq__43569_43754__$1);
if(cljs.core.not(node_43760.shadow$old)){
var path_match_43761 = shadow.cljs.devtools.client.browser.match_paths(node_43760.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43761)){
var new_link_43762 = (function (){var G__43590 = node_43760.cloneNode(true);
G__43590.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43761),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43590;
})();
(node_43760.shadow$old = true);

(new_link_43762.onload = ((function (seq__43569_43729,chunk__43573_43730,count__43574_43731,i__43575_43732,seq__43515,chunk__43517,count__43518,i__43519,new_link_43762,path_match_43761,node_43760,seq__43569_43754__$1,temp__5753__auto___43753,path,map__43514,map__43514__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_43760);
});})(seq__43569_43729,chunk__43573_43730,count__43574_43731,i__43575_43732,seq__43515,chunk__43517,count__43518,i__43519,new_link_43762,path_match_43761,node_43760,seq__43569_43754__$1,temp__5753__auto___43753,path,map__43514,map__43514__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43761], 0));

goog.dom.insertSiblingAfter(new_link_43762,node_43760);


var G__43763 = cljs.core.next(seq__43569_43754__$1);
var G__43764 = null;
var G__43765 = (0);
var G__43766 = (0);
seq__43569_43729 = G__43763;
chunk__43573_43730 = G__43764;
count__43574_43731 = G__43765;
i__43575_43732 = G__43766;
continue;
} else {
var G__43767 = cljs.core.next(seq__43569_43754__$1);
var G__43768 = null;
var G__43769 = (0);
var G__43770 = (0);
seq__43569_43729 = G__43767;
chunk__43573_43730 = G__43768;
count__43574_43731 = G__43769;
i__43575_43732 = G__43770;
continue;
}
} else {
var G__43771 = cljs.core.next(seq__43569_43754__$1);
var G__43772 = null;
var G__43773 = (0);
var G__43774 = (0);
seq__43569_43729 = G__43771;
chunk__43573_43730 = G__43772;
count__43574_43731 = G__43773;
i__43575_43732 = G__43774;
continue;
}
}
} else {
}
}
break;
}


var G__43776 = seq__43515;
var G__43777 = chunk__43517;
var G__43778 = count__43518;
var G__43779 = (i__43519 + (1));
seq__43515 = G__43776;
chunk__43517 = G__43777;
count__43518 = G__43778;
i__43519 = G__43779;
continue;
} else {
var G__43780 = seq__43515;
var G__43781 = chunk__43517;
var G__43782 = count__43518;
var G__43783 = (i__43519 + (1));
seq__43515 = G__43780;
chunk__43517 = G__43781;
count__43518 = G__43782;
i__43519 = G__43783;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43515);
if(temp__5753__auto__){
var seq__43515__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43515__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43515__$1);
var G__43784 = cljs.core.chunk_rest(seq__43515__$1);
var G__43785 = c__4679__auto__;
var G__43786 = cljs.core.count(c__4679__auto__);
var G__43787 = (0);
seq__43515 = G__43784;
chunk__43517 = G__43785;
count__43518 = G__43786;
i__43519 = G__43787;
continue;
} else {
var path = cljs.core.first(seq__43515__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43593_43788 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43597_43789 = null;
var count__43598_43790 = (0);
var i__43599_43791 = (0);
while(true){
if((i__43599_43791 < count__43598_43790)){
var node_43792 = chunk__43597_43789.cljs$core$IIndexed$_nth$arity$2(null,i__43599_43791);
if(cljs.core.not(node_43792.shadow$old)){
var path_match_43793 = shadow.cljs.devtools.client.browser.match_paths(node_43792.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43793)){
var new_link_43794 = (function (){var G__43611 = node_43792.cloneNode(true);
G__43611.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43793),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43611;
})();
(node_43792.shadow$old = true);

(new_link_43794.onload = ((function (seq__43593_43788,chunk__43597_43789,count__43598_43790,i__43599_43791,seq__43515,chunk__43517,count__43518,i__43519,new_link_43794,path_match_43793,node_43792,path,seq__43515__$1,temp__5753__auto__,map__43514,map__43514__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_43792);
});})(seq__43593_43788,chunk__43597_43789,count__43598_43790,i__43599_43791,seq__43515,chunk__43517,count__43518,i__43519,new_link_43794,path_match_43793,node_43792,path,seq__43515__$1,temp__5753__auto__,map__43514,map__43514__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43793], 0));

goog.dom.insertSiblingAfter(new_link_43794,node_43792);


var G__43799 = seq__43593_43788;
var G__43800 = chunk__43597_43789;
var G__43801 = count__43598_43790;
var G__43802 = (i__43599_43791 + (1));
seq__43593_43788 = G__43799;
chunk__43597_43789 = G__43800;
count__43598_43790 = G__43801;
i__43599_43791 = G__43802;
continue;
} else {
var G__43803 = seq__43593_43788;
var G__43804 = chunk__43597_43789;
var G__43805 = count__43598_43790;
var G__43806 = (i__43599_43791 + (1));
seq__43593_43788 = G__43803;
chunk__43597_43789 = G__43804;
count__43598_43790 = G__43805;
i__43599_43791 = G__43806;
continue;
}
} else {
var G__43807 = seq__43593_43788;
var G__43808 = chunk__43597_43789;
var G__43809 = count__43598_43790;
var G__43810 = (i__43599_43791 + (1));
seq__43593_43788 = G__43807;
chunk__43597_43789 = G__43808;
count__43598_43790 = G__43809;
i__43599_43791 = G__43810;
continue;
}
} else {
var temp__5753__auto___43811__$1 = cljs.core.seq(seq__43593_43788);
if(temp__5753__auto___43811__$1){
var seq__43593_43812__$1 = temp__5753__auto___43811__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43593_43812__$1)){
var c__4679__auto___43813 = cljs.core.chunk_first(seq__43593_43812__$1);
var G__43814 = cljs.core.chunk_rest(seq__43593_43812__$1);
var G__43815 = c__4679__auto___43813;
var G__43816 = cljs.core.count(c__4679__auto___43813);
var G__43817 = (0);
seq__43593_43788 = G__43814;
chunk__43597_43789 = G__43815;
count__43598_43790 = G__43816;
i__43599_43791 = G__43817;
continue;
} else {
var node_43818 = cljs.core.first(seq__43593_43812__$1);
if(cljs.core.not(node_43818.shadow$old)){
var path_match_43819 = shadow.cljs.devtools.client.browser.match_paths(node_43818.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43819)){
var new_link_43820 = (function (){var G__43613 = node_43818.cloneNode(true);
G__43613.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43819),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43613;
})();
(node_43818.shadow$old = true);

(new_link_43820.onload = ((function (seq__43593_43788,chunk__43597_43789,count__43598_43790,i__43599_43791,seq__43515,chunk__43517,count__43518,i__43519,new_link_43820,path_match_43819,node_43818,seq__43593_43812__$1,temp__5753__auto___43811__$1,path,seq__43515__$1,temp__5753__auto__,map__43514,map__43514__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_43818);
});})(seq__43593_43788,chunk__43597_43789,count__43598_43790,i__43599_43791,seq__43515,chunk__43517,count__43518,i__43519,new_link_43820,path_match_43819,node_43818,seq__43593_43812__$1,temp__5753__auto___43811__$1,path,seq__43515__$1,temp__5753__auto__,map__43514,map__43514__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43819], 0));

goog.dom.insertSiblingAfter(new_link_43820,node_43818);


var G__43821 = cljs.core.next(seq__43593_43812__$1);
var G__43822 = null;
var G__43823 = (0);
var G__43824 = (0);
seq__43593_43788 = G__43821;
chunk__43597_43789 = G__43822;
count__43598_43790 = G__43823;
i__43599_43791 = G__43824;
continue;
} else {
var G__43825 = cljs.core.next(seq__43593_43812__$1);
var G__43826 = null;
var G__43827 = (0);
var G__43828 = (0);
seq__43593_43788 = G__43825;
chunk__43597_43789 = G__43826;
count__43598_43790 = G__43827;
i__43599_43791 = G__43828;
continue;
}
} else {
var G__43829 = cljs.core.next(seq__43593_43812__$1);
var G__43830 = null;
var G__43831 = (0);
var G__43832 = (0);
seq__43593_43788 = G__43829;
chunk__43597_43789 = G__43830;
count__43598_43790 = G__43831;
i__43599_43791 = G__43832;
continue;
}
}
} else {
}
}
break;
}


var G__43833 = cljs.core.next(seq__43515__$1);
var G__43834 = null;
var G__43835 = (0);
var G__43836 = (0);
seq__43515 = G__43833;
chunk__43517 = G__43834;
count__43518 = G__43835;
i__43519 = G__43836;
continue;
} else {
var G__43837 = cljs.core.next(seq__43515__$1);
var G__43838 = null;
var G__43839 = (0);
var G__43840 = (0);
seq__43515 = G__43837;
chunk__43517 = G__43838;
count__43518 = G__43839;
i__43519 = G__43840;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__43615){
var map__43617 = p__43615;
var map__43617__$1 = cljs.core.__destructure_map(map__43617);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43617__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__43622){
var map__43623 = p__43622;
var map__43623__$1 = cljs.core.__destructure_map(map__43623);
var _ = map__43623__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43623__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__43624,done,error){
var map__43625 = p__43624;
var map__43625__$1 = cljs.core.__destructure_map(map__43625);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43625__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__43627,done,error){
var map__43628 = p__43627;
var map__43628__$1 = cljs.core.__destructure_map(map__43628);
var msg = map__43628__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43628__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43628__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43628__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__43629){
var map__43630 = p__43629;
var map__43630__$1 = cljs.core.__destructure_map(map__43630);
var src = map__43630__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43630__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__43633 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__43633) : done.call(null,G__43633));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__43637){
var map__43638 = p__43637;
var map__43638__$1 = cljs.core.__destructure_map(map__43638);
var msg__$1 = map__43638__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43638__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e43640){var ex = e43640;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__43641){
var map__43642 = p__43641;
var map__43642__$1 = cljs.core.__destructure_map(map__43642);
var env = map__43642__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43642__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__43643){
var map__43644 = p__43643;
var map__43644__$1 = cljs.core.__destructure_map(map__43644);
var msg = map__43644__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43644__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__43647){
var map__43648 = p__43647;
var map__43648__$1 = cljs.core.__destructure_map(map__43648);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43648__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43648__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__43649){
var map__43650 = p__43649;
var map__43650__$1 = cljs.core.__destructure_map(map__43650);
var svc = map__43650__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43650__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
