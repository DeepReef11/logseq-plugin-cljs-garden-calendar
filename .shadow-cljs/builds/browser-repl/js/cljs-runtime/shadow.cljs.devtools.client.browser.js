goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___41875 = arguments.length;
var i__4865__auto___41876 = (0);
while(true){
if((i__4865__auto___41876 < len__4864__auto___41875)){
args__4870__auto__.push((arguments[i__4865__auto___41876]));

var G__41877 = (i__4865__auto___41876 + (1));
i__4865__auto___41876 = G__41877;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq41746){
var G__41747 = cljs.core.first(seq41746);
var seq41746__$1 = cljs.core.next(seq41746);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41747,seq41746__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__41753 = cljs.core.seq(sources);
var chunk__41754 = null;
var count__41755 = (0);
var i__41756 = (0);
while(true){
if((i__41756 < count__41755)){
var map__41761 = chunk__41754.cljs$core$IIndexed$_nth$arity$2(null,i__41756);
var map__41761__$1 = cljs.core.__destructure_map(map__41761);
var src = map__41761__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41761__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41761__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41761__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41761__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41764){var e_41878 = e41764;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41878);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41878.message)].join('')));
}

var G__41879 = seq__41753;
var G__41880 = chunk__41754;
var G__41881 = count__41755;
var G__41882 = (i__41756 + (1));
seq__41753 = G__41879;
chunk__41754 = G__41880;
count__41755 = G__41881;
i__41756 = G__41882;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41753);
if(temp__5753__auto__){
var seq__41753__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41753__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41753__$1);
var G__41883 = cljs.core.chunk_rest(seq__41753__$1);
var G__41884 = c__4679__auto__;
var G__41885 = cljs.core.count(c__4679__auto__);
var G__41886 = (0);
seq__41753 = G__41883;
chunk__41754 = G__41884;
count__41755 = G__41885;
i__41756 = G__41886;
continue;
} else {
var map__41765 = cljs.core.first(seq__41753__$1);
var map__41765__$1 = cljs.core.__destructure_map(map__41765);
var src = map__41765__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41765__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41765__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41765__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41765__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41766){var e_41887 = e41766;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41887);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41887.message)].join('')));
}

var G__41888 = cljs.core.next(seq__41753__$1);
var G__41889 = null;
var G__41890 = (0);
var G__41891 = (0);
seq__41753 = G__41888;
chunk__41754 = G__41889;
count__41755 = G__41890;
i__41756 = G__41891;
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
var seq__41767 = cljs.core.seq(js_requires);
var chunk__41768 = null;
var count__41769 = (0);
var i__41770 = (0);
while(true){
if((i__41770 < count__41769)){
var js_ns = chunk__41768.cljs$core$IIndexed$_nth$arity$2(null,i__41770);
var require_str_41892 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41892);


var G__41893 = seq__41767;
var G__41894 = chunk__41768;
var G__41895 = count__41769;
var G__41896 = (i__41770 + (1));
seq__41767 = G__41893;
chunk__41768 = G__41894;
count__41769 = G__41895;
i__41770 = G__41896;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41767);
if(temp__5753__auto__){
var seq__41767__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41767__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41767__$1);
var G__41897 = cljs.core.chunk_rest(seq__41767__$1);
var G__41898 = c__4679__auto__;
var G__41899 = cljs.core.count(c__4679__auto__);
var G__41900 = (0);
seq__41767 = G__41897;
chunk__41768 = G__41898;
count__41769 = G__41899;
i__41770 = G__41900;
continue;
} else {
var js_ns = cljs.core.first(seq__41767__$1);
var require_str_41901 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41901);


var G__41902 = cljs.core.next(seq__41767__$1);
var G__41903 = null;
var G__41904 = (0);
var G__41905 = (0);
seq__41767 = G__41902;
chunk__41768 = G__41903;
count__41769 = G__41904;
i__41770 = G__41905;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__41772){
var map__41773 = p__41772;
var map__41773__$1 = cljs.core.__destructure_map(map__41773);
var msg = map__41773__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41773__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41773__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41774(s__41775){
return (new cljs.core.LazySeq(null,(function (){
var s__41775__$1 = s__41775;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41775__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__41780 = cljs.core.first(xs__6308__auto__);
var map__41780__$1 = cljs.core.__destructure_map(map__41780);
var src = map__41780__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41780__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41780__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__41775__$1,map__41780,map__41780__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41773,map__41773__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41774_$_iter__41776(s__41777){
return (new cljs.core.LazySeq(null,((function (s__41775__$1,map__41780,map__41780__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41773,map__41773__$1,msg,info,reload_info){
return (function (){
var s__41777__$1 = s__41777;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__41777__$1);
if(temp__5753__auto____$1){
var s__41777__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41777__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__41777__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__41779 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__41778 = (0);
while(true){
if((i__41778 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__41778);
cljs.core.chunk_append(b__41779,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__41906 = (i__41778 + (1));
i__41778 = G__41906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41779),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41774_$_iter__41776(cljs.core.chunk_rest(s__41777__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41779),null);
}
} else {
var warning = cljs.core.first(s__41777__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41774_$_iter__41776(cljs.core.rest(s__41777__$2)));
}
} else {
return null;
}
break;
}
});})(s__41775__$1,map__41780,map__41780__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41773,map__41773__$1,msg,info,reload_info))
,null,null));
});})(s__41775__$1,map__41780,map__41780__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41773,map__41773__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41774(cljs.core.rest(s__41775__$1)));
} else {
var G__41907 = cljs.core.rest(s__41775__$1);
s__41775__$1 = G__41907;
continue;
}
} else {
var G__41908 = cljs.core.rest(s__41775__$1);
s__41775__$1 = G__41908;
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
var seq__41781_41909 = cljs.core.seq(warnings);
var chunk__41782_41910 = null;
var count__41783_41911 = (0);
var i__41784_41912 = (0);
while(true){
if((i__41784_41912 < count__41783_41911)){
var map__41787_41913 = chunk__41782_41910.cljs$core$IIndexed$_nth$arity$2(null,i__41784_41912);
var map__41787_41914__$1 = cljs.core.__destructure_map(map__41787_41913);
var w_41915 = map__41787_41914__$1;
var msg_41916__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41787_41914__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41787_41914__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41787_41914__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41787_41914__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41919)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41917),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41918),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41916__$1)].join(''));


var G__41920 = seq__41781_41909;
var G__41921 = chunk__41782_41910;
var G__41922 = count__41783_41911;
var G__41923 = (i__41784_41912 + (1));
seq__41781_41909 = G__41920;
chunk__41782_41910 = G__41921;
count__41783_41911 = G__41922;
i__41784_41912 = G__41923;
continue;
} else {
var temp__5753__auto___41924 = cljs.core.seq(seq__41781_41909);
if(temp__5753__auto___41924){
var seq__41781_41925__$1 = temp__5753__auto___41924;
if(cljs.core.chunked_seq_QMARK_(seq__41781_41925__$1)){
var c__4679__auto___41926 = cljs.core.chunk_first(seq__41781_41925__$1);
var G__41927 = cljs.core.chunk_rest(seq__41781_41925__$1);
var G__41928 = c__4679__auto___41926;
var G__41929 = cljs.core.count(c__4679__auto___41926);
var G__41930 = (0);
seq__41781_41909 = G__41927;
chunk__41782_41910 = G__41928;
count__41783_41911 = G__41929;
i__41784_41912 = G__41930;
continue;
} else {
var map__41788_41931 = cljs.core.first(seq__41781_41925__$1);
var map__41788_41932__$1 = cljs.core.__destructure_map(map__41788_41931);
var w_41933 = map__41788_41932__$1;
var msg_41934__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41788_41932__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41788_41932__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41788_41932__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41788_41932__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41937)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41935),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41936),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41934__$1)].join(''));


var G__41938 = cljs.core.next(seq__41781_41925__$1);
var G__41939 = null;
var G__41940 = (0);
var G__41941 = (0);
seq__41781_41909 = G__41938;
chunk__41782_41910 = G__41939;
count__41783_41911 = G__41940;
i__41784_41912 = G__41941;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__41771_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__41771_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__41789){
var map__41790 = p__41789;
var map__41790__$1 = cljs.core.__destructure_map(map__41790);
var msg = map__41790__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41790__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__41791 = cljs.core.seq(updates);
var chunk__41793 = null;
var count__41794 = (0);
var i__41795 = (0);
while(true){
if((i__41795 < count__41794)){
var path = chunk__41793.cljs$core$IIndexed$_nth$arity$2(null,i__41795);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41825_41942 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41829_41943 = null;
var count__41830_41944 = (0);
var i__41831_41945 = (0);
while(true){
if((i__41831_41945 < count__41830_41944)){
var node_41946 = chunk__41829_41943.cljs$core$IIndexed$_nth$arity$2(null,i__41831_41945);
if(cljs.core.not(node_41946.shadow$old)){
var path_match_41947 = shadow.cljs.devtools.client.browser.match_paths(node_41946.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41947)){
var new_link_41948 = (function (){var G__41837 = node_41946.cloneNode(true);
G__41837.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41947),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41837;
})();
(node_41946.shadow$old = true);

(new_link_41948.onload = ((function (seq__41825_41942,chunk__41829_41943,count__41830_41944,i__41831_41945,seq__41791,chunk__41793,count__41794,i__41795,new_link_41948,path_match_41947,node_41946,path,map__41790,map__41790__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41946);
});})(seq__41825_41942,chunk__41829_41943,count__41830_41944,i__41831_41945,seq__41791,chunk__41793,count__41794,i__41795,new_link_41948,path_match_41947,node_41946,path,map__41790,map__41790__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41947], 0));

goog.dom.insertSiblingAfter(new_link_41948,node_41946);


var G__41949 = seq__41825_41942;
var G__41950 = chunk__41829_41943;
var G__41951 = count__41830_41944;
var G__41952 = (i__41831_41945 + (1));
seq__41825_41942 = G__41949;
chunk__41829_41943 = G__41950;
count__41830_41944 = G__41951;
i__41831_41945 = G__41952;
continue;
} else {
var G__41953 = seq__41825_41942;
var G__41954 = chunk__41829_41943;
var G__41955 = count__41830_41944;
var G__41956 = (i__41831_41945 + (1));
seq__41825_41942 = G__41953;
chunk__41829_41943 = G__41954;
count__41830_41944 = G__41955;
i__41831_41945 = G__41956;
continue;
}
} else {
var G__41957 = seq__41825_41942;
var G__41958 = chunk__41829_41943;
var G__41959 = count__41830_41944;
var G__41960 = (i__41831_41945 + (1));
seq__41825_41942 = G__41957;
chunk__41829_41943 = G__41958;
count__41830_41944 = G__41959;
i__41831_41945 = G__41960;
continue;
}
} else {
var temp__5753__auto___41961 = cljs.core.seq(seq__41825_41942);
if(temp__5753__auto___41961){
var seq__41825_41962__$1 = temp__5753__auto___41961;
if(cljs.core.chunked_seq_QMARK_(seq__41825_41962__$1)){
var c__4679__auto___41963 = cljs.core.chunk_first(seq__41825_41962__$1);
var G__41964 = cljs.core.chunk_rest(seq__41825_41962__$1);
var G__41965 = c__4679__auto___41963;
var G__41966 = cljs.core.count(c__4679__auto___41963);
var G__41967 = (0);
seq__41825_41942 = G__41964;
chunk__41829_41943 = G__41965;
count__41830_41944 = G__41966;
i__41831_41945 = G__41967;
continue;
} else {
var node_41968 = cljs.core.first(seq__41825_41962__$1);
if(cljs.core.not(node_41968.shadow$old)){
var path_match_41969 = shadow.cljs.devtools.client.browser.match_paths(node_41968.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41969)){
var new_link_41970 = (function (){var G__41838 = node_41968.cloneNode(true);
G__41838.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41969),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41838;
})();
(node_41968.shadow$old = true);

(new_link_41970.onload = ((function (seq__41825_41942,chunk__41829_41943,count__41830_41944,i__41831_41945,seq__41791,chunk__41793,count__41794,i__41795,new_link_41970,path_match_41969,node_41968,seq__41825_41962__$1,temp__5753__auto___41961,path,map__41790,map__41790__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41968);
});})(seq__41825_41942,chunk__41829_41943,count__41830_41944,i__41831_41945,seq__41791,chunk__41793,count__41794,i__41795,new_link_41970,path_match_41969,node_41968,seq__41825_41962__$1,temp__5753__auto___41961,path,map__41790,map__41790__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41969], 0));

goog.dom.insertSiblingAfter(new_link_41970,node_41968);


var G__41971 = cljs.core.next(seq__41825_41962__$1);
var G__41972 = null;
var G__41973 = (0);
var G__41974 = (0);
seq__41825_41942 = G__41971;
chunk__41829_41943 = G__41972;
count__41830_41944 = G__41973;
i__41831_41945 = G__41974;
continue;
} else {
var G__41975 = cljs.core.next(seq__41825_41962__$1);
var G__41976 = null;
var G__41977 = (0);
var G__41978 = (0);
seq__41825_41942 = G__41975;
chunk__41829_41943 = G__41976;
count__41830_41944 = G__41977;
i__41831_41945 = G__41978;
continue;
}
} else {
var G__41979 = cljs.core.next(seq__41825_41962__$1);
var G__41980 = null;
var G__41981 = (0);
var G__41982 = (0);
seq__41825_41942 = G__41979;
chunk__41829_41943 = G__41980;
count__41830_41944 = G__41981;
i__41831_41945 = G__41982;
continue;
}
}
} else {
}
}
break;
}


var G__41983 = seq__41791;
var G__41984 = chunk__41793;
var G__41985 = count__41794;
var G__41986 = (i__41795 + (1));
seq__41791 = G__41983;
chunk__41793 = G__41984;
count__41794 = G__41985;
i__41795 = G__41986;
continue;
} else {
var G__41987 = seq__41791;
var G__41988 = chunk__41793;
var G__41989 = count__41794;
var G__41990 = (i__41795 + (1));
seq__41791 = G__41987;
chunk__41793 = G__41988;
count__41794 = G__41989;
i__41795 = G__41990;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41791);
if(temp__5753__auto__){
var seq__41791__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41791__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41791__$1);
var G__41991 = cljs.core.chunk_rest(seq__41791__$1);
var G__41992 = c__4679__auto__;
var G__41993 = cljs.core.count(c__4679__auto__);
var G__41994 = (0);
seq__41791 = G__41991;
chunk__41793 = G__41992;
count__41794 = G__41993;
i__41795 = G__41994;
continue;
} else {
var path = cljs.core.first(seq__41791__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41839_41995 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41843_41996 = null;
var count__41844_41997 = (0);
var i__41845_41998 = (0);
while(true){
if((i__41845_41998 < count__41844_41997)){
var node_41999 = chunk__41843_41996.cljs$core$IIndexed$_nth$arity$2(null,i__41845_41998);
if(cljs.core.not(node_41999.shadow$old)){
var path_match_42000 = shadow.cljs.devtools.client.browser.match_paths(node_41999.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42000)){
var new_link_42001 = (function (){var G__41851 = node_41999.cloneNode(true);
G__41851.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42000),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41851;
})();
(node_41999.shadow$old = true);

(new_link_42001.onload = ((function (seq__41839_41995,chunk__41843_41996,count__41844_41997,i__41845_41998,seq__41791,chunk__41793,count__41794,i__41795,new_link_42001,path_match_42000,node_41999,path,seq__41791__$1,temp__5753__auto__,map__41790,map__41790__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41999);
});})(seq__41839_41995,chunk__41843_41996,count__41844_41997,i__41845_41998,seq__41791,chunk__41793,count__41794,i__41795,new_link_42001,path_match_42000,node_41999,path,seq__41791__$1,temp__5753__auto__,map__41790,map__41790__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42000], 0));

goog.dom.insertSiblingAfter(new_link_42001,node_41999);


var G__42002 = seq__41839_41995;
var G__42003 = chunk__41843_41996;
var G__42004 = count__41844_41997;
var G__42005 = (i__41845_41998 + (1));
seq__41839_41995 = G__42002;
chunk__41843_41996 = G__42003;
count__41844_41997 = G__42004;
i__41845_41998 = G__42005;
continue;
} else {
var G__42006 = seq__41839_41995;
var G__42007 = chunk__41843_41996;
var G__42008 = count__41844_41997;
var G__42009 = (i__41845_41998 + (1));
seq__41839_41995 = G__42006;
chunk__41843_41996 = G__42007;
count__41844_41997 = G__42008;
i__41845_41998 = G__42009;
continue;
}
} else {
var G__42010 = seq__41839_41995;
var G__42011 = chunk__41843_41996;
var G__42012 = count__41844_41997;
var G__42013 = (i__41845_41998 + (1));
seq__41839_41995 = G__42010;
chunk__41843_41996 = G__42011;
count__41844_41997 = G__42012;
i__41845_41998 = G__42013;
continue;
}
} else {
var temp__5753__auto___42014__$1 = cljs.core.seq(seq__41839_41995);
if(temp__5753__auto___42014__$1){
var seq__41839_42015__$1 = temp__5753__auto___42014__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41839_42015__$1)){
var c__4679__auto___42016 = cljs.core.chunk_first(seq__41839_42015__$1);
var G__42017 = cljs.core.chunk_rest(seq__41839_42015__$1);
var G__42018 = c__4679__auto___42016;
var G__42019 = cljs.core.count(c__4679__auto___42016);
var G__42020 = (0);
seq__41839_41995 = G__42017;
chunk__41843_41996 = G__42018;
count__41844_41997 = G__42019;
i__41845_41998 = G__42020;
continue;
} else {
var node_42021 = cljs.core.first(seq__41839_42015__$1);
if(cljs.core.not(node_42021.shadow$old)){
var path_match_42022 = shadow.cljs.devtools.client.browser.match_paths(node_42021.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42022)){
var new_link_42023 = (function (){var G__41852 = node_42021.cloneNode(true);
G__41852.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42022),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41852;
})();
(node_42021.shadow$old = true);

(new_link_42023.onload = ((function (seq__41839_41995,chunk__41843_41996,count__41844_41997,i__41845_41998,seq__41791,chunk__41793,count__41794,i__41795,new_link_42023,path_match_42022,node_42021,seq__41839_42015__$1,temp__5753__auto___42014__$1,path,seq__41791__$1,temp__5753__auto__,map__41790,map__41790__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42021);
});})(seq__41839_41995,chunk__41843_41996,count__41844_41997,i__41845_41998,seq__41791,chunk__41793,count__41794,i__41795,new_link_42023,path_match_42022,node_42021,seq__41839_42015__$1,temp__5753__auto___42014__$1,path,seq__41791__$1,temp__5753__auto__,map__41790,map__41790__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42022], 0));

goog.dom.insertSiblingAfter(new_link_42023,node_42021);


var G__42024 = cljs.core.next(seq__41839_42015__$1);
var G__42025 = null;
var G__42026 = (0);
var G__42027 = (0);
seq__41839_41995 = G__42024;
chunk__41843_41996 = G__42025;
count__41844_41997 = G__42026;
i__41845_41998 = G__42027;
continue;
} else {
var G__42028 = cljs.core.next(seq__41839_42015__$1);
var G__42029 = null;
var G__42030 = (0);
var G__42031 = (0);
seq__41839_41995 = G__42028;
chunk__41843_41996 = G__42029;
count__41844_41997 = G__42030;
i__41845_41998 = G__42031;
continue;
}
} else {
var G__42032 = cljs.core.next(seq__41839_42015__$1);
var G__42033 = null;
var G__42034 = (0);
var G__42035 = (0);
seq__41839_41995 = G__42032;
chunk__41843_41996 = G__42033;
count__41844_41997 = G__42034;
i__41845_41998 = G__42035;
continue;
}
}
} else {
}
}
break;
}


var G__42036 = cljs.core.next(seq__41791__$1);
var G__42037 = null;
var G__42038 = (0);
var G__42039 = (0);
seq__41791 = G__42036;
chunk__41793 = G__42037;
count__41794 = G__42038;
i__41795 = G__42039;
continue;
} else {
var G__42040 = cljs.core.next(seq__41791__$1);
var G__42041 = null;
var G__42042 = (0);
var G__42043 = (0);
seq__41791 = G__42040;
chunk__41793 = G__42041;
count__41794 = G__42042;
i__41795 = G__42043;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__41853){
var map__41854 = p__41853;
var map__41854__$1 = cljs.core.__destructure_map(map__41854);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41854__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__41855){
var map__41856 = p__41855;
var map__41856__$1 = cljs.core.__destructure_map(map__41856);
var _ = map__41856__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41856__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__41857,done,error){
var map__41858 = p__41857;
var map__41858__$1 = cljs.core.__destructure_map(map__41858);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41858__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__41859,done,error){
var map__41860 = p__41859;
var map__41860__$1 = cljs.core.__destructure_map(map__41860);
var msg = map__41860__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41860__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41860__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41860__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__41861){
var map__41862 = p__41861;
var map__41862__$1 = cljs.core.__destructure_map(map__41862);
var src = map__41862__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41862__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__41863 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__41863) : done.call(null,G__41863));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__41864){
var map__41865 = p__41864;
var map__41865__$1 = cljs.core.__destructure_map(map__41865);
var msg__$1 = map__41865__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41865__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e41866){var ex = e41866;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__41867){
var map__41868 = p__41867;
var map__41868__$1 = cljs.core.__destructure_map(map__41868);
var env = map__41868__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41868__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__41869){
var map__41870 = p__41869;
var map__41870__$1 = cljs.core.__destructure_map(map__41870);
var msg = map__41870__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41870__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__41871){
var map__41872 = p__41871;
var map__41872__$1 = cljs.core.__destructure_map(map__41872);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41872__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41872__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__41873){
var map__41874 = p__41873;
var map__41874__$1 = cljs.core.__destructure_map(map__41874);
var svc = map__41874__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41874__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
