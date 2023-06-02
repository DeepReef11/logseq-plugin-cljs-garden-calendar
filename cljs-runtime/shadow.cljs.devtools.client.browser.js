goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35874 = arguments.length;
var i__4865__auto___35875 = (0);
while(true){
if((i__4865__auto___35875 < len__4864__auto___35874)){
args__4870__auto__.push((arguments[i__4865__auto___35875]));

var G__35876 = (i__4865__auto___35875 + (1));
i__4865__auto___35875 = G__35876;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35745){
var G__35746 = cljs.core.first(seq35745);
var seq35745__$1 = cljs.core.next(seq35745);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35746,seq35745__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35752 = cljs.core.seq(sources);
var chunk__35753 = null;
var count__35754 = (0);
var i__35755 = (0);
while(true){
if((i__35755 < count__35754)){
var map__35760 = chunk__35753.cljs$core$IIndexed$_nth$arity$2(null,i__35755);
var map__35760__$1 = cljs.core.__destructure_map(map__35760);
var src = map__35760__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35760__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35760__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35760__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35760__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35762){var e_35877 = e35762;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35877);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35877.message)].join('')));
}

var G__35878 = seq__35752;
var G__35879 = chunk__35753;
var G__35880 = count__35754;
var G__35881 = (i__35755 + (1));
seq__35752 = G__35878;
chunk__35753 = G__35879;
count__35754 = G__35880;
i__35755 = G__35881;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35752);
if(temp__5753__auto__){
var seq__35752__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35752__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35752__$1);
var G__35882 = cljs.core.chunk_rest(seq__35752__$1);
var G__35883 = c__4679__auto__;
var G__35884 = cljs.core.count(c__4679__auto__);
var G__35885 = (0);
seq__35752 = G__35882;
chunk__35753 = G__35883;
count__35754 = G__35884;
i__35755 = G__35885;
continue;
} else {
var map__35764 = cljs.core.first(seq__35752__$1);
var map__35764__$1 = cljs.core.__destructure_map(map__35764);
var src = map__35764__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35764__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35764__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35764__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35764__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35765){var e_35886 = e35765;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35886);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35886.message)].join('')));
}

var G__35887 = cljs.core.next(seq__35752__$1);
var G__35888 = null;
var G__35889 = (0);
var G__35890 = (0);
seq__35752 = G__35887;
chunk__35753 = G__35888;
count__35754 = G__35889;
i__35755 = G__35890;
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
var seq__35766 = cljs.core.seq(js_requires);
var chunk__35767 = null;
var count__35768 = (0);
var i__35769 = (0);
while(true){
if((i__35769 < count__35768)){
var js_ns = chunk__35767.cljs$core$IIndexed$_nth$arity$2(null,i__35769);
var require_str_35891 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35891);


var G__35892 = seq__35766;
var G__35893 = chunk__35767;
var G__35894 = count__35768;
var G__35895 = (i__35769 + (1));
seq__35766 = G__35892;
chunk__35767 = G__35893;
count__35768 = G__35894;
i__35769 = G__35895;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35766);
if(temp__5753__auto__){
var seq__35766__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35766__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35766__$1);
var G__35896 = cljs.core.chunk_rest(seq__35766__$1);
var G__35897 = c__4679__auto__;
var G__35898 = cljs.core.count(c__4679__auto__);
var G__35899 = (0);
seq__35766 = G__35896;
chunk__35767 = G__35897;
count__35768 = G__35898;
i__35769 = G__35899;
continue;
} else {
var js_ns = cljs.core.first(seq__35766__$1);
var require_str_35900 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35900);


var G__35901 = cljs.core.next(seq__35766__$1);
var G__35902 = null;
var G__35903 = (0);
var G__35904 = (0);
seq__35766 = G__35901;
chunk__35767 = G__35902;
count__35768 = G__35903;
i__35769 = G__35904;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35771){
var map__35772 = p__35771;
var map__35772__$1 = cljs.core.__destructure_map(map__35772);
var msg = map__35772__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35772__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35772__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35773(s__35774){
return (new cljs.core.LazySeq(null,(function (){
var s__35774__$1 = s__35774;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35774__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__35779 = cljs.core.first(xs__6308__auto__);
var map__35779__$1 = cljs.core.__destructure_map(map__35779);
var src = map__35779__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35779__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35779__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__35774__$1,map__35779,map__35779__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35772,map__35772__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35773_$_iter__35775(s__35776){
return (new cljs.core.LazySeq(null,((function (s__35774__$1,map__35779,map__35779__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35772,map__35772__$1,msg,info,reload_info){
return (function (){
var s__35776__$1 = s__35776;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35776__$1);
if(temp__5753__auto____$1){
var s__35776__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35776__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__35776__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__35778 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__35777 = (0);
while(true){
if((i__35777 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__35777);
cljs.core.chunk_append(b__35778,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35905 = (i__35777 + (1));
i__35777 = G__35905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35778),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35773_$_iter__35775(cljs.core.chunk_rest(s__35776__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35778),null);
}
} else {
var warning = cljs.core.first(s__35776__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35773_$_iter__35775(cljs.core.rest(s__35776__$2)));
}
} else {
return null;
}
break;
}
});})(s__35774__$1,map__35779,map__35779__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35772,map__35772__$1,msg,info,reload_info))
,null,null));
});})(s__35774__$1,map__35779,map__35779__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35772,map__35772__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35773(cljs.core.rest(s__35774__$1)));
} else {
var G__35906 = cljs.core.rest(s__35774__$1);
s__35774__$1 = G__35906;
continue;
}
} else {
var G__35907 = cljs.core.rest(s__35774__$1);
s__35774__$1 = G__35907;
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
var seq__35780_35908 = cljs.core.seq(warnings);
var chunk__35781_35909 = null;
var count__35782_35910 = (0);
var i__35783_35911 = (0);
while(true){
if((i__35783_35911 < count__35782_35910)){
var map__35786_35912 = chunk__35781_35909.cljs$core$IIndexed$_nth$arity$2(null,i__35783_35911);
var map__35786_35913__$1 = cljs.core.__destructure_map(map__35786_35912);
var w_35914 = map__35786_35913__$1;
var msg_35915__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35786_35913__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35786_35913__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35786_35913__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35786_35913__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35918)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35916),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35917),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35915__$1)].join(''));


var G__35919 = seq__35780_35908;
var G__35920 = chunk__35781_35909;
var G__35921 = count__35782_35910;
var G__35922 = (i__35783_35911 + (1));
seq__35780_35908 = G__35919;
chunk__35781_35909 = G__35920;
count__35782_35910 = G__35921;
i__35783_35911 = G__35922;
continue;
} else {
var temp__5753__auto___35923 = cljs.core.seq(seq__35780_35908);
if(temp__5753__auto___35923){
var seq__35780_35924__$1 = temp__5753__auto___35923;
if(cljs.core.chunked_seq_QMARK_(seq__35780_35924__$1)){
var c__4679__auto___35925 = cljs.core.chunk_first(seq__35780_35924__$1);
var G__35926 = cljs.core.chunk_rest(seq__35780_35924__$1);
var G__35927 = c__4679__auto___35925;
var G__35928 = cljs.core.count(c__4679__auto___35925);
var G__35929 = (0);
seq__35780_35908 = G__35926;
chunk__35781_35909 = G__35927;
count__35782_35910 = G__35928;
i__35783_35911 = G__35929;
continue;
} else {
var map__35787_35930 = cljs.core.first(seq__35780_35924__$1);
var map__35787_35931__$1 = cljs.core.__destructure_map(map__35787_35930);
var w_35932 = map__35787_35931__$1;
var msg_35933__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35787_35931__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35787_35931__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35787_35931__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35787_35931__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35936)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35934),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35935),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35933__$1)].join(''));


var G__35937 = cljs.core.next(seq__35780_35924__$1);
var G__35938 = null;
var G__35939 = (0);
var G__35940 = (0);
seq__35780_35908 = G__35937;
chunk__35781_35909 = G__35938;
count__35782_35910 = G__35939;
i__35783_35911 = G__35940;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35770_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35770_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35788){
var map__35789 = p__35788;
var map__35789__$1 = cljs.core.__destructure_map(map__35789);
var msg = map__35789__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35789__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35790 = cljs.core.seq(updates);
var chunk__35792 = null;
var count__35793 = (0);
var i__35794 = (0);
while(true){
if((i__35794 < count__35793)){
var path = chunk__35792.cljs$core$IIndexed$_nth$arity$2(null,i__35794);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35824_35941 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35828_35942 = null;
var count__35829_35943 = (0);
var i__35830_35944 = (0);
while(true){
if((i__35830_35944 < count__35829_35943)){
var node_35945 = chunk__35828_35942.cljs$core$IIndexed$_nth$arity$2(null,i__35830_35944);
if(cljs.core.not(node_35945.shadow$old)){
var path_match_35946 = shadow.cljs.devtools.client.browser.match_paths(node_35945.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35946)){
var new_link_35947 = (function (){var G__35836 = node_35945.cloneNode(true);
G__35836.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35946),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35836;
})();
(node_35945.shadow$old = true);

(new_link_35947.onload = ((function (seq__35824_35941,chunk__35828_35942,count__35829_35943,i__35830_35944,seq__35790,chunk__35792,count__35793,i__35794,new_link_35947,path_match_35946,node_35945,path,map__35789,map__35789__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35945);
});})(seq__35824_35941,chunk__35828_35942,count__35829_35943,i__35830_35944,seq__35790,chunk__35792,count__35793,i__35794,new_link_35947,path_match_35946,node_35945,path,map__35789,map__35789__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35946], 0));

goog.dom.insertSiblingAfter(new_link_35947,node_35945);


var G__35948 = seq__35824_35941;
var G__35949 = chunk__35828_35942;
var G__35950 = count__35829_35943;
var G__35951 = (i__35830_35944 + (1));
seq__35824_35941 = G__35948;
chunk__35828_35942 = G__35949;
count__35829_35943 = G__35950;
i__35830_35944 = G__35951;
continue;
} else {
var G__35952 = seq__35824_35941;
var G__35953 = chunk__35828_35942;
var G__35954 = count__35829_35943;
var G__35955 = (i__35830_35944 + (1));
seq__35824_35941 = G__35952;
chunk__35828_35942 = G__35953;
count__35829_35943 = G__35954;
i__35830_35944 = G__35955;
continue;
}
} else {
var G__35956 = seq__35824_35941;
var G__35957 = chunk__35828_35942;
var G__35958 = count__35829_35943;
var G__35959 = (i__35830_35944 + (1));
seq__35824_35941 = G__35956;
chunk__35828_35942 = G__35957;
count__35829_35943 = G__35958;
i__35830_35944 = G__35959;
continue;
}
} else {
var temp__5753__auto___35960 = cljs.core.seq(seq__35824_35941);
if(temp__5753__auto___35960){
var seq__35824_35961__$1 = temp__5753__auto___35960;
if(cljs.core.chunked_seq_QMARK_(seq__35824_35961__$1)){
var c__4679__auto___35962 = cljs.core.chunk_first(seq__35824_35961__$1);
var G__35963 = cljs.core.chunk_rest(seq__35824_35961__$1);
var G__35964 = c__4679__auto___35962;
var G__35965 = cljs.core.count(c__4679__auto___35962);
var G__35966 = (0);
seq__35824_35941 = G__35963;
chunk__35828_35942 = G__35964;
count__35829_35943 = G__35965;
i__35830_35944 = G__35966;
continue;
} else {
var node_35967 = cljs.core.first(seq__35824_35961__$1);
if(cljs.core.not(node_35967.shadow$old)){
var path_match_35968 = shadow.cljs.devtools.client.browser.match_paths(node_35967.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35968)){
var new_link_35969 = (function (){var G__35837 = node_35967.cloneNode(true);
G__35837.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35968),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35837;
})();
(node_35967.shadow$old = true);

(new_link_35969.onload = ((function (seq__35824_35941,chunk__35828_35942,count__35829_35943,i__35830_35944,seq__35790,chunk__35792,count__35793,i__35794,new_link_35969,path_match_35968,node_35967,seq__35824_35961__$1,temp__5753__auto___35960,path,map__35789,map__35789__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35967);
});})(seq__35824_35941,chunk__35828_35942,count__35829_35943,i__35830_35944,seq__35790,chunk__35792,count__35793,i__35794,new_link_35969,path_match_35968,node_35967,seq__35824_35961__$1,temp__5753__auto___35960,path,map__35789,map__35789__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35968], 0));

goog.dom.insertSiblingAfter(new_link_35969,node_35967);


var G__35970 = cljs.core.next(seq__35824_35961__$1);
var G__35971 = null;
var G__35972 = (0);
var G__35973 = (0);
seq__35824_35941 = G__35970;
chunk__35828_35942 = G__35971;
count__35829_35943 = G__35972;
i__35830_35944 = G__35973;
continue;
} else {
var G__35974 = cljs.core.next(seq__35824_35961__$1);
var G__35975 = null;
var G__35976 = (0);
var G__35977 = (0);
seq__35824_35941 = G__35974;
chunk__35828_35942 = G__35975;
count__35829_35943 = G__35976;
i__35830_35944 = G__35977;
continue;
}
} else {
var G__35978 = cljs.core.next(seq__35824_35961__$1);
var G__35979 = null;
var G__35980 = (0);
var G__35981 = (0);
seq__35824_35941 = G__35978;
chunk__35828_35942 = G__35979;
count__35829_35943 = G__35980;
i__35830_35944 = G__35981;
continue;
}
}
} else {
}
}
break;
}


var G__35982 = seq__35790;
var G__35983 = chunk__35792;
var G__35984 = count__35793;
var G__35985 = (i__35794 + (1));
seq__35790 = G__35982;
chunk__35792 = G__35983;
count__35793 = G__35984;
i__35794 = G__35985;
continue;
} else {
var G__35986 = seq__35790;
var G__35987 = chunk__35792;
var G__35988 = count__35793;
var G__35989 = (i__35794 + (1));
seq__35790 = G__35986;
chunk__35792 = G__35987;
count__35793 = G__35988;
i__35794 = G__35989;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35790);
if(temp__5753__auto__){
var seq__35790__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35790__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35790__$1);
var G__35990 = cljs.core.chunk_rest(seq__35790__$1);
var G__35991 = c__4679__auto__;
var G__35992 = cljs.core.count(c__4679__auto__);
var G__35993 = (0);
seq__35790 = G__35990;
chunk__35792 = G__35991;
count__35793 = G__35992;
i__35794 = G__35993;
continue;
} else {
var path = cljs.core.first(seq__35790__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35838_35994 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35842_35995 = null;
var count__35843_35996 = (0);
var i__35844_35997 = (0);
while(true){
if((i__35844_35997 < count__35843_35996)){
var node_35998 = chunk__35842_35995.cljs$core$IIndexed$_nth$arity$2(null,i__35844_35997);
if(cljs.core.not(node_35998.shadow$old)){
var path_match_35999 = shadow.cljs.devtools.client.browser.match_paths(node_35998.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35999)){
var new_link_36000 = (function (){var G__35850 = node_35998.cloneNode(true);
G__35850.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35999),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35850;
})();
(node_35998.shadow$old = true);

(new_link_36000.onload = ((function (seq__35838_35994,chunk__35842_35995,count__35843_35996,i__35844_35997,seq__35790,chunk__35792,count__35793,i__35794,new_link_36000,path_match_35999,node_35998,path,seq__35790__$1,temp__5753__auto__,map__35789,map__35789__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35998);
});})(seq__35838_35994,chunk__35842_35995,count__35843_35996,i__35844_35997,seq__35790,chunk__35792,count__35793,i__35794,new_link_36000,path_match_35999,node_35998,path,seq__35790__$1,temp__5753__auto__,map__35789,map__35789__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35999], 0));

goog.dom.insertSiblingAfter(new_link_36000,node_35998);


var G__36001 = seq__35838_35994;
var G__36002 = chunk__35842_35995;
var G__36003 = count__35843_35996;
var G__36004 = (i__35844_35997 + (1));
seq__35838_35994 = G__36001;
chunk__35842_35995 = G__36002;
count__35843_35996 = G__36003;
i__35844_35997 = G__36004;
continue;
} else {
var G__36005 = seq__35838_35994;
var G__36006 = chunk__35842_35995;
var G__36007 = count__35843_35996;
var G__36008 = (i__35844_35997 + (1));
seq__35838_35994 = G__36005;
chunk__35842_35995 = G__36006;
count__35843_35996 = G__36007;
i__35844_35997 = G__36008;
continue;
}
} else {
var G__36009 = seq__35838_35994;
var G__36010 = chunk__35842_35995;
var G__36011 = count__35843_35996;
var G__36012 = (i__35844_35997 + (1));
seq__35838_35994 = G__36009;
chunk__35842_35995 = G__36010;
count__35843_35996 = G__36011;
i__35844_35997 = G__36012;
continue;
}
} else {
var temp__5753__auto___36013__$1 = cljs.core.seq(seq__35838_35994);
if(temp__5753__auto___36013__$1){
var seq__35838_36014__$1 = temp__5753__auto___36013__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35838_36014__$1)){
var c__4679__auto___36015 = cljs.core.chunk_first(seq__35838_36014__$1);
var G__36016 = cljs.core.chunk_rest(seq__35838_36014__$1);
var G__36017 = c__4679__auto___36015;
var G__36018 = cljs.core.count(c__4679__auto___36015);
var G__36019 = (0);
seq__35838_35994 = G__36016;
chunk__35842_35995 = G__36017;
count__35843_35996 = G__36018;
i__35844_35997 = G__36019;
continue;
} else {
var node_36020 = cljs.core.first(seq__35838_36014__$1);
if(cljs.core.not(node_36020.shadow$old)){
var path_match_36021 = shadow.cljs.devtools.client.browser.match_paths(node_36020.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36021)){
var new_link_36022 = (function (){var G__35851 = node_36020.cloneNode(true);
G__35851.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36021),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35851;
})();
(node_36020.shadow$old = true);

(new_link_36022.onload = ((function (seq__35838_35994,chunk__35842_35995,count__35843_35996,i__35844_35997,seq__35790,chunk__35792,count__35793,i__35794,new_link_36022,path_match_36021,node_36020,seq__35838_36014__$1,temp__5753__auto___36013__$1,path,seq__35790__$1,temp__5753__auto__,map__35789,map__35789__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36020);
});})(seq__35838_35994,chunk__35842_35995,count__35843_35996,i__35844_35997,seq__35790,chunk__35792,count__35793,i__35794,new_link_36022,path_match_36021,node_36020,seq__35838_36014__$1,temp__5753__auto___36013__$1,path,seq__35790__$1,temp__5753__auto__,map__35789,map__35789__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36021], 0));

goog.dom.insertSiblingAfter(new_link_36022,node_36020);


var G__36023 = cljs.core.next(seq__35838_36014__$1);
var G__36024 = null;
var G__36025 = (0);
var G__36026 = (0);
seq__35838_35994 = G__36023;
chunk__35842_35995 = G__36024;
count__35843_35996 = G__36025;
i__35844_35997 = G__36026;
continue;
} else {
var G__36027 = cljs.core.next(seq__35838_36014__$1);
var G__36028 = null;
var G__36029 = (0);
var G__36030 = (0);
seq__35838_35994 = G__36027;
chunk__35842_35995 = G__36028;
count__35843_35996 = G__36029;
i__35844_35997 = G__36030;
continue;
}
} else {
var G__36031 = cljs.core.next(seq__35838_36014__$1);
var G__36032 = null;
var G__36033 = (0);
var G__36034 = (0);
seq__35838_35994 = G__36031;
chunk__35842_35995 = G__36032;
count__35843_35996 = G__36033;
i__35844_35997 = G__36034;
continue;
}
}
} else {
}
}
break;
}


var G__36035 = cljs.core.next(seq__35790__$1);
var G__36036 = null;
var G__36037 = (0);
var G__36038 = (0);
seq__35790 = G__36035;
chunk__35792 = G__36036;
count__35793 = G__36037;
i__35794 = G__36038;
continue;
} else {
var G__36039 = cljs.core.next(seq__35790__$1);
var G__36040 = null;
var G__36041 = (0);
var G__36042 = (0);
seq__35790 = G__36039;
chunk__35792 = G__36040;
count__35793 = G__36041;
i__35794 = G__36042;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35852){
var map__35853 = p__35852;
var map__35853__$1 = cljs.core.__destructure_map(map__35853);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35853__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35854){
var map__35855 = p__35854;
var map__35855__$1 = cljs.core.__destructure_map(map__35855);
var _ = map__35855__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35855__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35856,done,error){
var map__35857 = p__35856;
var map__35857__$1 = cljs.core.__destructure_map(map__35857);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35857__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35858,done,error){
var map__35859 = p__35858;
var map__35859__$1 = cljs.core.__destructure_map(map__35859);
var msg = map__35859__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35859__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35859__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35859__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35860){
var map__35861 = p__35860;
var map__35861__$1 = cljs.core.__destructure_map(map__35861);
var src = map__35861__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35861__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35862 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35862) : done.call(null,G__35862));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35863){
var map__35864 = p__35863;
var map__35864__$1 = cljs.core.__destructure_map(map__35864);
var msg__$1 = map__35864__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35864__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35865){var ex = e35865;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35866){
var map__35867 = p__35866;
var map__35867__$1 = cljs.core.__destructure_map(map__35867);
var env = map__35867__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35867__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35868){
var map__35869 = p__35868;
var map__35869__$1 = cljs.core.__destructure_map(map__35869);
var msg = map__35869__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35869__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35870){
var map__35871 = p__35870;
var map__35871__$1 = cljs.core.__destructure_map(map__35871);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35871__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35871__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__35872){
var map__35873 = p__35872;
var map__35873__$1 = cljs.core.__destructure_map(map__35873);
var svc = map__35873__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35873__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
