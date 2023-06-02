goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36955 = arguments.length;
var i__4865__auto___36956 = (0);
while(true){
if((i__4865__auto___36956 < len__4864__auto___36955)){
args__4870__auto__.push((arguments[i__4865__auto___36956]));

var G__36957 = (i__4865__auto___36956 + (1));
i__4865__auto___36956 = G__36957;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36658){
var G__36659 = cljs.core.first(seq36658);
var seq36658__$1 = cljs.core.next(seq36658);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36659,seq36658__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36674 = cljs.core.seq(sources);
var chunk__36675 = null;
var count__36676 = (0);
var i__36677 = (0);
while(true){
if((i__36677 < count__36676)){
var map__36685 = chunk__36675.cljs$core$IIndexed$_nth$arity$2(null,i__36677);
var map__36685__$1 = cljs.core.__destructure_map(map__36685);
var src = map__36685__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36685__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36685__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36685__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36685__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36686){var e_36961 = e36686;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36961);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36961.message)].join('')));
}

var G__36962 = seq__36674;
var G__36963 = chunk__36675;
var G__36964 = count__36676;
var G__36965 = (i__36677 + (1));
seq__36674 = G__36962;
chunk__36675 = G__36963;
count__36676 = G__36964;
i__36677 = G__36965;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36674);
if(temp__5753__auto__){
var seq__36674__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36674__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36674__$1);
var G__36966 = cljs.core.chunk_rest(seq__36674__$1);
var G__36967 = c__4679__auto__;
var G__36968 = cljs.core.count(c__4679__auto__);
var G__36969 = (0);
seq__36674 = G__36966;
chunk__36675 = G__36967;
count__36676 = G__36968;
i__36677 = G__36969;
continue;
} else {
var map__36693 = cljs.core.first(seq__36674__$1);
var map__36693__$1 = cljs.core.__destructure_map(map__36693);
var src = map__36693__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36693__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36693__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36693__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36693__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36694){var e_36972 = e36694;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36972);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36972.message)].join('')));
}

var G__36973 = cljs.core.next(seq__36674__$1);
var G__36974 = null;
var G__36975 = (0);
var G__36976 = (0);
seq__36674 = G__36973;
chunk__36675 = G__36974;
count__36676 = G__36975;
i__36677 = G__36976;
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
var seq__36706 = cljs.core.seq(js_requires);
var chunk__36707 = null;
var count__36708 = (0);
var i__36709 = (0);
while(true){
if((i__36709 < count__36708)){
var js_ns = chunk__36707.cljs$core$IIndexed$_nth$arity$2(null,i__36709);
var require_str_36979 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36979);


var G__36980 = seq__36706;
var G__36981 = chunk__36707;
var G__36982 = count__36708;
var G__36983 = (i__36709 + (1));
seq__36706 = G__36980;
chunk__36707 = G__36981;
count__36708 = G__36982;
i__36709 = G__36983;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36706);
if(temp__5753__auto__){
var seq__36706__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36706__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36706__$1);
var G__36984 = cljs.core.chunk_rest(seq__36706__$1);
var G__36985 = c__4679__auto__;
var G__36986 = cljs.core.count(c__4679__auto__);
var G__36987 = (0);
seq__36706 = G__36984;
chunk__36707 = G__36985;
count__36708 = G__36986;
i__36709 = G__36987;
continue;
} else {
var js_ns = cljs.core.first(seq__36706__$1);
var require_str_36988 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36988);


var G__36989 = cljs.core.next(seq__36706__$1);
var G__36990 = null;
var G__36991 = (0);
var G__36992 = (0);
seq__36706 = G__36989;
chunk__36707 = G__36990;
count__36708 = G__36991;
i__36709 = G__36992;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36716){
var map__36718 = p__36716;
var map__36718__$1 = cljs.core.__destructure_map(map__36718);
var msg = map__36718__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36718__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36718__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36720(s__36721){
return (new cljs.core.LazySeq(null,(function (){
var s__36721__$1 = s__36721;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__36721__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__36729 = cljs.core.first(xs__6308__auto__);
var map__36729__$1 = cljs.core.__destructure_map(map__36729);
var src = map__36729__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36729__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36729__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__36721__$1,map__36729,map__36729__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36718,map__36718__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36720_$_iter__36722(s__36723){
return (new cljs.core.LazySeq(null,((function (s__36721__$1,map__36729,map__36729__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36718,map__36718__$1,msg,info,reload_info){
return (function (){
var s__36723__$1 = s__36723;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__36723__$1);
if(temp__5753__auto____$1){
var s__36723__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36723__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__36723__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__36725 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__36724 = (0);
while(true){
if((i__36724 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__36724);
cljs.core.chunk_append(b__36725,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36998 = (i__36724 + (1));
i__36724 = G__36998;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36725),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36720_$_iter__36722(cljs.core.chunk_rest(s__36723__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36725),null);
}
} else {
var warning = cljs.core.first(s__36723__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36720_$_iter__36722(cljs.core.rest(s__36723__$2)));
}
} else {
return null;
}
break;
}
});})(s__36721__$1,map__36729,map__36729__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36718,map__36718__$1,msg,info,reload_info))
,null,null));
});})(s__36721__$1,map__36729,map__36729__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36718,map__36718__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36720(cljs.core.rest(s__36721__$1)));
} else {
var G__37000 = cljs.core.rest(s__36721__$1);
s__36721__$1 = G__37000;
continue;
}
} else {
var G__37001 = cljs.core.rest(s__36721__$1);
s__36721__$1 = G__37001;
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
var seq__36732_37002 = cljs.core.seq(warnings);
var chunk__36733_37003 = null;
var count__36734_37004 = (0);
var i__36735_37005 = (0);
while(true){
if((i__36735_37005 < count__36734_37004)){
var map__36755_37006 = chunk__36733_37003.cljs$core$IIndexed$_nth$arity$2(null,i__36735_37005);
var map__36755_37007__$1 = cljs.core.__destructure_map(map__36755_37006);
var w_37008 = map__36755_37007__$1;
var msg_37009__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36755_37007__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36755_37007__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36755_37007__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36755_37007__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37012)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37010),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37011),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37009__$1)].join(''));


var G__37014 = seq__36732_37002;
var G__37015 = chunk__36733_37003;
var G__37016 = count__36734_37004;
var G__37017 = (i__36735_37005 + (1));
seq__36732_37002 = G__37014;
chunk__36733_37003 = G__37015;
count__36734_37004 = G__37016;
i__36735_37005 = G__37017;
continue;
} else {
var temp__5753__auto___37018 = cljs.core.seq(seq__36732_37002);
if(temp__5753__auto___37018){
var seq__36732_37019__$1 = temp__5753__auto___37018;
if(cljs.core.chunked_seq_QMARK_(seq__36732_37019__$1)){
var c__4679__auto___37020 = cljs.core.chunk_first(seq__36732_37019__$1);
var G__37021 = cljs.core.chunk_rest(seq__36732_37019__$1);
var G__37022 = c__4679__auto___37020;
var G__37023 = cljs.core.count(c__4679__auto___37020);
var G__37024 = (0);
seq__36732_37002 = G__37021;
chunk__36733_37003 = G__37022;
count__36734_37004 = G__37023;
i__36735_37005 = G__37024;
continue;
} else {
var map__36760_37026 = cljs.core.first(seq__36732_37019__$1);
var map__36760_37027__$1 = cljs.core.__destructure_map(map__36760_37026);
var w_37028 = map__36760_37027__$1;
var msg_37029__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36760_37027__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36760_37027__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36760_37027__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36760_37027__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37032)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37030),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37031),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37029__$1)].join(''));


var G__37034 = cljs.core.next(seq__36732_37019__$1);
var G__37035 = null;
var G__37036 = (0);
var G__37037 = (0);
seq__36732_37002 = G__37034;
chunk__36733_37003 = G__37035;
count__36734_37004 = G__37036;
i__36735_37005 = G__37037;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36715_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36715_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36774){
var map__36776 = p__36774;
var map__36776__$1 = cljs.core.__destructure_map(map__36776);
var msg = map__36776__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36776__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36777 = cljs.core.seq(updates);
var chunk__36779 = null;
var count__36780 = (0);
var i__36781 = (0);
while(true){
if((i__36781 < count__36780)){
var path = chunk__36779.cljs$core$IIndexed$_nth$arity$2(null,i__36781);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36850_37039 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36854_37040 = null;
var count__36855_37041 = (0);
var i__36856_37042 = (0);
while(true){
if((i__36856_37042 < count__36855_37041)){
var node_37045 = chunk__36854_37040.cljs$core$IIndexed$_nth$arity$2(null,i__36856_37042);
if(cljs.core.not(node_37045.shadow$old)){
var path_match_37046 = shadow.cljs.devtools.client.browser.match_paths(node_37045.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37046)){
var new_link_37047 = (function (){var G__36866 = node_37045.cloneNode(true);
G__36866.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37046),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36866;
})();
(node_37045.shadow$old = true);

(new_link_37047.onload = ((function (seq__36850_37039,chunk__36854_37040,count__36855_37041,i__36856_37042,seq__36777,chunk__36779,count__36780,i__36781,new_link_37047,path_match_37046,node_37045,path,map__36776,map__36776__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37045);
});})(seq__36850_37039,chunk__36854_37040,count__36855_37041,i__36856_37042,seq__36777,chunk__36779,count__36780,i__36781,new_link_37047,path_match_37046,node_37045,path,map__36776,map__36776__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37046], 0));

goog.dom.insertSiblingAfter(new_link_37047,node_37045);


var G__37048 = seq__36850_37039;
var G__37049 = chunk__36854_37040;
var G__37050 = count__36855_37041;
var G__37051 = (i__36856_37042 + (1));
seq__36850_37039 = G__37048;
chunk__36854_37040 = G__37049;
count__36855_37041 = G__37050;
i__36856_37042 = G__37051;
continue;
} else {
var G__37052 = seq__36850_37039;
var G__37053 = chunk__36854_37040;
var G__37054 = count__36855_37041;
var G__37055 = (i__36856_37042 + (1));
seq__36850_37039 = G__37052;
chunk__36854_37040 = G__37053;
count__36855_37041 = G__37054;
i__36856_37042 = G__37055;
continue;
}
} else {
var G__37056 = seq__36850_37039;
var G__37057 = chunk__36854_37040;
var G__37058 = count__36855_37041;
var G__37059 = (i__36856_37042 + (1));
seq__36850_37039 = G__37056;
chunk__36854_37040 = G__37057;
count__36855_37041 = G__37058;
i__36856_37042 = G__37059;
continue;
}
} else {
var temp__5753__auto___37060 = cljs.core.seq(seq__36850_37039);
if(temp__5753__auto___37060){
var seq__36850_37061__$1 = temp__5753__auto___37060;
if(cljs.core.chunked_seq_QMARK_(seq__36850_37061__$1)){
var c__4679__auto___37062 = cljs.core.chunk_first(seq__36850_37061__$1);
var G__37063 = cljs.core.chunk_rest(seq__36850_37061__$1);
var G__37064 = c__4679__auto___37062;
var G__37065 = cljs.core.count(c__4679__auto___37062);
var G__37066 = (0);
seq__36850_37039 = G__37063;
chunk__36854_37040 = G__37064;
count__36855_37041 = G__37065;
i__36856_37042 = G__37066;
continue;
} else {
var node_37067 = cljs.core.first(seq__36850_37061__$1);
if(cljs.core.not(node_37067.shadow$old)){
var path_match_37068 = shadow.cljs.devtools.client.browser.match_paths(node_37067.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37068)){
var new_link_37072 = (function (){var G__36872 = node_37067.cloneNode(true);
G__36872.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37068),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36872;
})();
(node_37067.shadow$old = true);

(new_link_37072.onload = ((function (seq__36850_37039,chunk__36854_37040,count__36855_37041,i__36856_37042,seq__36777,chunk__36779,count__36780,i__36781,new_link_37072,path_match_37068,node_37067,seq__36850_37061__$1,temp__5753__auto___37060,path,map__36776,map__36776__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37067);
});})(seq__36850_37039,chunk__36854_37040,count__36855_37041,i__36856_37042,seq__36777,chunk__36779,count__36780,i__36781,new_link_37072,path_match_37068,node_37067,seq__36850_37061__$1,temp__5753__auto___37060,path,map__36776,map__36776__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37068], 0));

goog.dom.insertSiblingAfter(new_link_37072,node_37067);


var G__37074 = cljs.core.next(seq__36850_37061__$1);
var G__37075 = null;
var G__37076 = (0);
var G__37077 = (0);
seq__36850_37039 = G__37074;
chunk__36854_37040 = G__37075;
count__36855_37041 = G__37076;
i__36856_37042 = G__37077;
continue;
} else {
var G__37078 = cljs.core.next(seq__36850_37061__$1);
var G__37079 = null;
var G__37080 = (0);
var G__37081 = (0);
seq__36850_37039 = G__37078;
chunk__36854_37040 = G__37079;
count__36855_37041 = G__37080;
i__36856_37042 = G__37081;
continue;
}
} else {
var G__37085 = cljs.core.next(seq__36850_37061__$1);
var G__37086 = null;
var G__37087 = (0);
var G__37088 = (0);
seq__36850_37039 = G__37085;
chunk__36854_37040 = G__37086;
count__36855_37041 = G__37087;
i__36856_37042 = G__37088;
continue;
}
}
} else {
}
}
break;
}


var G__37089 = seq__36777;
var G__37090 = chunk__36779;
var G__37091 = count__36780;
var G__37092 = (i__36781 + (1));
seq__36777 = G__37089;
chunk__36779 = G__37090;
count__36780 = G__37091;
i__36781 = G__37092;
continue;
} else {
var G__37093 = seq__36777;
var G__37094 = chunk__36779;
var G__37095 = count__36780;
var G__37096 = (i__36781 + (1));
seq__36777 = G__37093;
chunk__36779 = G__37094;
count__36780 = G__37095;
i__36781 = G__37096;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36777);
if(temp__5753__auto__){
var seq__36777__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36777__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36777__$1);
var G__37097 = cljs.core.chunk_rest(seq__36777__$1);
var G__37098 = c__4679__auto__;
var G__37099 = cljs.core.count(c__4679__auto__);
var G__37100 = (0);
seq__36777 = G__37097;
chunk__36779 = G__37098;
count__36780 = G__37099;
i__36781 = G__37100;
continue;
} else {
var path = cljs.core.first(seq__36777__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36875_37101 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36879_37102 = null;
var count__36880_37103 = (0);
var i__36881_37104 = (0);
while(true){
if((i__36881_37104 < count__36880_37103)){
var node_37105 = chunk__36879_37102.cljs$core$IIndexed$_nth$arity$2(null,i__36881_37104);
if(cljs.core.not(node_37105.shadow$old)){
var path_match_37106 = shadow.cljs.devtools.client.browser.match_paths(node_37105.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37106)){
var new_link_37108 = (function (){var G__36894 = node_37105.cloneNode(true);
G__36894.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37106),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36894;
})();
(node_37105.shadow$old = true);

(new_link_37108.onload = ((function (seq__36875_37101,chunk__36879_37102,count__36880_37103,i__36881_37104,seq__36777,chunk__36779,count__36780,i__36781,new_link_37108,path_match_37106,node_37105,path,seq__36777__$1,temp__5753__auto__,map__36776,map__36776__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37105);
});})(seq__36875_37101,chunk__36879_37102,count__36880_37103,i__36881_37104,seq__36777,chunk__36779,count__36780,i__36781,new_link_37108,path_match_37106,node_37105,path,seq__36777__$1,temp__5753__auto__,map__36776,map__36776__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37106], 0));

goog.dom.insertSiblingAfter(new_link_37108,node_37105);


var G__37109 = seq__36875_37101;
var G__37110 = chunk__36879_37102;
var G__37111 = count__36880_37103;
var G__37112 = (i__36881_37104 + (1));
seq__36875_37101 = G__37109;
chunk__36879_37102 = G__37110;
count__36880_37103 = G__37111;
i__36881_37104 = G__37112;
continue;
} else {
var G__37113 = seq__36875_37101;
var G__37114 = chunk__36879_37102;
var G__37115 = count__36880_37103;
var G__37116 = (i__36881_37104 + (1));
seq__36875_37101 = G__37113;
chunk__36879_37102 = G__37114;
count__36880_37103 = G__37115;
i__36881_37104 = G__37116;
continue;
}
} else {
var G__37117 = seq__36875_37101;
var G__37118 = chunk__36879_37102;
var G__37119 = count__36880_37103;
var G__37120 = (i__36881_37104 + (1));
seq__36875_37101 = G__37117;
chunk__36879_37102 = G__37118;
count__36880_37103 = G__37119;
i__36881_37104 = G__37120;
continue;
}
} else {
var temp__5753__auto___37121__$1 = cljs.core.seq(seq__36875_37101);
if(temp__5753__auto___37121__$1){
var seq__36875_37122__$1 = temp__5753__auto___37121__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36875_37122__$1)){
var c__4679__auto___37123 = cljs.core.chunk_first(seq__36875_37122__$1);
var G__37124 = cljs.core.chunk_rest(seq__36875_37122__$1);
var G__37125 = c__4679__auto___37123;
var G__37126 = cljs.core.count(c__4679__auto___37123);
var G__37127 = (0);
seq__36875_37101 = G__37124;
chunk__36879_37102 = G__37125;
count__36880_37103 = G__37126;
i__36881_37104 = G__37127;
continue;
} else {
var node_37128 = cljs.core.first(seq__36875_37122__$1);
if(cljs.core.not(node_37128.shadow$old)){
var path_match_37129 = shadow.cljs.devtools.client.browser.match_paths(node_37128.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37129)){
var new_link_37130 = (function (){var G__36898 = node_37128.cloneNode(true);
G__36898.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37129),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36898;
})();
(node_37128.shadow$old = true);

(new_link_37130.onload = ((function (seq__36875_37101,chunk__36879_37102,count__36880_37103,i__36881_37104,seq__36777,chunk__36779,count__36780,i__36781,new_link_37130,path_match_37129,node_37128,seq__36875_37122__$1,temp__5753__auto___37121__$1,path,seq__36777__$1,temp__5753__auto__,map__36776,map__36776__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37128);
});})(seq__36875_37101,chunk__36879_37102,count__36880_37103,i__36881_37104,seq__36777,chunk__36779,count__36780,i__36781,new_link_37130,path_match_37129,node_37128,seq__36875_37122__$1,temp__5753__auto___37121__$1,path,seq__36777__$1,temp__5753__auto__,map__36776,map__36776__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37129], 0));

goog.dom.insertSiblingAfter(new_link_37130,node_37128);


var G__37131 = cljs.core.next(seq__36875_37122__$1);
var G__37132 = null;
var G__37133 = (0);
var G__37134 = (0);
seq__36875_37101 = G__37131;
chunk__36879_37102 = G__37132;
count__36880_37103 = G__37133;
i__36881_37104 = G__37134;
continue;
} else {
var G__37135 = cljs.core.next(seq__36875_37122__$1);
var G__37136 = null;
var G__37137 = (0);
var G__37138 = (0);
seq__36875_37101 = G__37135;
chunk__36879_37102 = G__37136;
count__36880_37103 = G__37137;
i__36881_37104 = G__37138;
continue;
}
} else {
var G__37139 = cljs.core.next(seq__36875_37122__$1);
var G__37140 = null;
var G__37141 = (0);
var G__37142 = (0);
seq__36875_37101 = G__37139;
chunk__36879_37102 = G__37140;
count__36880_37103 = G__37141;
i__36881_37104 = G__37142;
continue;
}
}
} else {
}
}
break;
}


var G__37143 = cljs.core.next(seq__36777__$1);
var G__37144 = null;
var G__37145 = (0);
var G__37146 = (0);
seq__36777 = G__37143;
chunk__36779 = G__37144;
count__36780 = G__37145;
i__36781 = G__37146;
continue;
} else {
var G__37147 = cljs.core.next(seq__36777__$1);
var G__37148 = null;
var G__37149 = (0);
var G__37150 = (0);
seq__36777 = G__37147;
chunk__36779 = G__37148;
count__36780 = G__37149;
i__36781 = G__37150;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36904){
var map__36905 = p__36904;
var map__36905__$1 = cljs.core.__destructure_map(map__36905);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36905__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36912){
var map__36913 = p__36912;
var map__36913__$1 = cljs.core.__destructure_map(map__36913);
var _ = map__36913__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36913__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36914,done,error){
var map__36915 = p__36914;
var map__36915__$1 = cljs.core.__destructure_map(map__36915);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36915__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36917,done,error){
var map__36918 = p__36917;
var map__36918__$1 = cljs.core.__destructure_map(map__36918);
var msg = map__36918__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36918__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36918__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36918__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36920){
var map__36921 = p__36920;
var map__36921__$1 = cljs.core.__destructure_map(map__36921);
var src = map__36921__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36921__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36922 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36922) : done.call(null,G__36922));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36923){
var map__36924 = p__36923;
var map__36924__$1 = cljs.core.__destructure_map(map__36924);
var msg__$1 = map__36924__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36924__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36925){var ex = e36925;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36929){
var map__36930 = p__36929;
var map__36930__$1 = cljs.core.__destructure_map(map__36930);
var env = map__36930__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36930__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36934){
var map__36935 = p__36934;
var map__36935__$1 = cljs.core.__destructure_map(map__36935);
var msg = map__36935__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36935__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36941){
var map__36942 = p__36941;
var map__36942__$1 = cljs.core.__destructure_map(map__36942);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36942__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36942__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__36947){
var map__36948 = p__36947;
var map__36948__$1 = cljs.core.__destructure_map(map__36948);
var svc = map__36948__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36948__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
