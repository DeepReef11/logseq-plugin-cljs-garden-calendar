goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45135 = arguments.length;
var i__4865__auto___45136 = (0);
while(true){
if((i__4865__auto___45136 < len__4864__auto___45135)){
args__4870__auto__.push((arguments[i__4865__auto___45136]));

var G__45137 = (i__4865__auto___45136 + (1));
i__4865__auto___45136 = G__45137;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq45010){
var G__45011 = cljs.core.first(seq45010);
var seq45010__$1 = cljs.core.next(seq45010);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45011,seq45010__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__45013 = cljs.core.seq(sources);
var chunk__45014 = null;
var count__45015 = (0);
var i__45016 = (0);
while(true){
if((i__45016 < count__45015)){
var map__45023 = chunk__45014.cljs$core$IIndexed$_nth$arity$2(null,i__45016);
var map__45023__$1 = cljs.core.__destructure_map(map__45023);
var src = map__45023__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45023__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45023__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45023__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45023__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45024){var e_45138 = e45024;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45138);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45138.message)].join('')));
}

var G__45139 = seq__45013;
var G__45140 = chunk__45014;
var G__45141 = count__45015;
var G__45142 = (i__45016 + (1));
seq__45013 = G__45139;
chunk__45014 = G__45140;
count__45015 = G__45141;
i__45016 = G__45142;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45013);
if(temp__5753__auto__){
var seq__45013__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45013__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45013__$1);
var G__45143 = cljs.core.chunk_rest(seq__45013__$1);
var G__45144 = c__4679__auto__;
var G__45145 = cljs.core.count(c__4679__auto__);
var G__45146 = (0);
seq__45013 = G__45143;
chunk__45014 = G__45144;
count__45015 = G__45145;
i__45016 = G__45146;
continue;
} else {
var map__45025 = cljs.core.first(seq__45013__$1);
var map__45025__$1 = cljs.core.__destructure_map(map__45025);
var src = map__45025__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45025__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45025__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45025__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45025__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45026){var e_45147 = e45026;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45147);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45147.message)].join('')));
}

var G__45148 = cljs.core.next(seq__45013__$1);
var G__45149 = null;
var G__45150 = (0);
var G__45151 = (0);
seq__45013 = G__45148;
chunk__45014 = G__45149;
count__45015 = G__45150;
i__45016 = G__45151;
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
var seq__45027 = cljs.core.seq(js_requires);
var chunk__45028 = null;
var count__45029 = (0);
var i__45030 = (0);
while(true){
if((i__45030 < count__45029)){
var js_ns = chunk__45028.cljs$core$IIndexed$_nth$arity$2(null,i__45030);
var require_str_45152 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45152);


var G__45153 = seq__45027;
var G__45154 = chunk__45028;
var G__45155 = count__45029;
var G__45156 = (i__45030 + (1));
seq__45027 = G__45153;
chunk__45028 = G__45154;
count__45029 = G__45155;
i__45030 = G__45156;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45027);
if(temp__5753__auto__){
var seq__45027__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45027__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45027__$1);
var G__45157 = cljs.core.chunk_rest(seq__45027__$1);
var G__45158 = c__4679__auto__;
var G__45159 = cljs.core.count(c__4679__auto__);
var G__45160 = (0);
seq__45027 = G__45157;
chunk__45028 = G__45158;
count__45029 = G__45159;
i__45030 = G__45160;
continue;
} else {
var js_ns = cljs.core.first(seq__45027__$1);
var require_str_45161 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45161);


var G__45162 = cljs.core.next(seq__45027__$1);
var G__45163 = null;
var G__45164 = (0);
var G__45165 = (0);
seq__45027 = G__45162;
chunk__45028 = G__45163;
count__45029 = G__45164;
i__45030 = G__45165;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__45032){
var map__45033 = p__45032;
var map__45033__$1 = cljs.core.__destructure_map(map__45033);
var msg = map__45033__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45033__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45033__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45034(s__45035){
return (new cljs.core.LazySeq(null,(function (){
var s__45035__$1 = s__45035;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45035__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__45040 = cljs.core.first(xs__6308__auto__);
var map__45040__$1 = cljs.core.__destructure_map(map__45040);
var src = map__45040__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45040__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45040__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__45035__$1,map__45040,map__45040__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__45033,map__45033__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45034_$_iter__45036(s__45037){
return (new cljs.core.LazySeq(null,((function (s__45035__$1,map__45040,map__45040__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__45033,map__45033__$1,msg,info,reload_info){
return (function (){
var s__45037__$1 = s__45037;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__45037__$1);
if(temp__5753__auto____$1){
var s__45037__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45037__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45037__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45039 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45038 = (0);
while(true){
if((i__45038 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__45038);
cljs.core.chunk_append(b__45039,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__45166 = (i__45038 + (1));
i__45038 = G__45166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45039),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45034_$_iter__45036(cljs.core.chunk_rest(s__45037__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45039),null);
}
} else {
var warning = cljs.core.first(s__45037__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45034_$_iter__45036(cljs.core.rest(s__45037__$2)));
}
} else {
return null;
}
break;
}
});})(s__45035__$1,map__45040,map__45040__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__45033,map__45033__$1,msg,info,reload_info))
,null,null));
});})(s__45035__$1,map__45040,map__45040__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__45033,map__45033__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45034(cljs.core.rest(s__45035__$1)));
} else {
var G__45167 = cljs.core.rest(s__45035__$1);
s__45035__$1 = G__45167;
continue;
}
} else {
var G__45168 = cljs.core.rest(s__45035__$1);
s__45035__$1 = G__45168;
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
var seq__45041_45169 = cljs.core.seq(warnings);
var chunk__45042_45170 = null;
var count__45043_45171 = (0);
var i__45044_45172 = (0);
while(true){
if((i__45044_45172 < count__45043_45171)){
var map__45047_45173 = chunk__45042_45170.cljs$core$IIndexed$_nth$arity$2(null,i__45044_45172);
var map__45047_45174__$1 = cljs.core.__destructure_map(map__45047_45173);
var w_45175 = map__45047_45174__$1;
var msg_45176__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45047_45174__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45047_45174__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45047_45174__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45047_45174__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45179)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45177),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45178),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45176__$1)].join(''));


var G__45180 = seq__45041_45169;
var G__45181 = chunk__45042_45170;
var G__45182 = count__45043_45171;
var G__45183 = (i__45044_45172 + (1));
seq__45041_45169 = G__45180;
chunk__45042_45170 = G__45181;
count__45043_45171 = G__45182;
i__45044_45172 = G__45183;
continue;
} else {
var temp__5753__auto___45184 = cljs.core.seq(seq__45041_45169);
if(temp__5753__auto___45184){
var seq__45041_45185__$1 = temp__5753__auto___45184;
if(cljs.core.chunked_seq_QMARK_(seq__45041_45185__$1)){
var c__4679__auto___45186 = cljs.core.chunk_first(seq__45041_45185__$1);
var G__45187 = cljs.core.chunk_rest(seq__45041_45185__$1);
var G__45188 = c__4679__auto___45186;
var G__45189 = cljs.core.count(c__4679__auto___45186);
var G__45190 = (0);
seq__45041_45169 = G__45187;
chunk__45042_45170 = G__45188;
count__45043_45171 = G__45189;
i__45044_45172 = G__45190;
continue;
} else {
var map__45048_45191 = cljs.core.first(seq__45041_45185__$1);
var map__45048_45192__$1 = cljs.core.__destructure_map(map__45048_45191);
var w_45193 = map__45048_45192__$1;
var msg_45194__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45048_45192__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45048_45192__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45048_45192__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45048_45192__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45197)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45195),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45196),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45194__$1)].join(''));


var G__45198 = cljs.core.next(seq__45041_45185__$1);
var G__45199 = null;
var G__45200 = (0);
var G__45201 = (0);
seq__45041_45169 = G__45198;
chunk__45042_45170 = G__45199;
count__45043_45171 = G__45200;
i__45044_45172 = G__45201;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__45031_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__45031_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__45049){
var map__45050 = p__45049;
var map__45050__$1 = cljs.core.__destructure_map(map__45050);
var msg = map__45050__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45050__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__45051 = cljs.core.seq(updates);
var chunk__45053 = null;
var count__45054 = (0);
var i__45055 = (0);
while(true){
if((i__45055 < count__45054)){
var path = chunk__45053.cljs$core$IIndexed$_nth$arity$2(null,i__45055);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45085_45202 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45089_45203 = null;
var count__45090_45204 = (0);
var i__45091_45205 = (0);
while(true){
if((i__45091_45205 < count__45090_45204)){
var node_45206 = chunk__45089_45203.cljs$core$IIndexed$_nth$arity$2(null,i__45091_45205);
if(cljs.core.not(node_45206.shadow$old)){
var path_match_45207 = shadow.cljs.devtools.client.browser.match_paths(node_45206.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45207)){
var new_link_45208 = (function (){var G__45097 = node_45206.cloneNode(true);
G__45097.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45207),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45097;
})();
(node_45206.shadow$old = true);

(new_link_45208.onload = ((function (seq__45085_45202,chunk__45089_45203,count__45090_45204,i__45091_45205,seq__45051,chunk__45053,count__45054,i__45055,new_link_45208,path_match_45207,node_45206,path,map__45050,map__45050__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45206);
});})(seq__45085_45202,chunk__45089_45203,count__45090_45204,i__45091_45205,seq__45051,chunk__45053,count__45054,i__45055,new_link_45208,path_match_45207,node_45206,path,map__45050,map__45050__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45207], 0));

goog.dom.insertSiblingAfter(new_link_45208,node_45206);


var G__45209 = seq__45085_45202;
var G__45210 = chunk__45089_45203;
var G__45211 = count__45090_45204;
var G__45212 = (i__45091_45205 + (1));
seq__45085_45202 = G__45209;
chunk__45089_45203 = G__45210;
count__45090_45204 = G__45211;
i__45091_45205 = G__45212;
continue;
} else {
var G__45213 = seq__45085_45202;
var G__45214 = chunk__45089_45203;
var G__45215 = count__45090_45204;
var G__45216 = (i__45091_45205 + (1));
seq__45085_45202 = G__45213;
chunk__45089_45203 = G__45214;
count__45090_45204 = G__45215;
i__45091_45205 = G__45216;
continue;
}
} else {
var G__45217 = seq__45085_45202;
var G__45218 = chunk__45089_45203;
var G__45219 = count__45090_45204;
var G__45220 = (i__45091_45205 + (1));
seq__45085_45202 = G__45217;
chunk__45089_45203 = G__45218;
count__45090_45204 = G__45219;
i__45091_45205 = G__45220;
continue;
}
} else {
var temp__5753__auto___45221 = cljs.core.seq(seq__45085_45202);
if(temp__5753__auto___45221){
var seq__45085_45222__$1 = temp__5753__auto___45221;
if(cljs.core.chunked_seq_QMARK_(seq__45085_45222__$1)){
var c__4679__auto___45223 = cljs.core.chunk_first(seq__45085_45222__$1);
var G__45224 = cljs.core.chunk_rest(seq__45085_45222__$1);
var G__45225 = c__4679__auto___45223;
var G__45226 = cljs.core.count(c__4679__auto___45223);
var G__45227 = (0);
seq__45085_45202 = G__45224;
chunk__45089_45203 = G__45225;
count__45090_45204 = G__45226;
i__45091_45205 = G__45227;
continue;
} else {
var node_45228 = cljs.core.first(seq__45085_45222__$1);
if(cljs.core.not(node_45228.shadow$old)){
var path_match_45229 = shadow.cljs.devtools.client.browser.match_paths(node_45228.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45229)){
var new_link_45230 = (function (){var G__45098 = node_45228.cloneNode(true);
G__45098.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45229),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45098;
})();
(node_45228.shadow$old = true);

(new_link_45230.onload = ((function (seq__45085_45202,chunk__45089_45203,count__45090_45204,i__45091_45205,seq__45051,chunk__45053,count__45054,i__45055,new_link_45230,path_match_45229,node_45228,seq__45085_45222__$1,temp__5753__auto___45221,path,map__45050,map__45050__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45228);
});})(seq__45085_45202,chunk__45089_45203,count__45090_45204,i__45091_45205,seq__45051,chunk__45053,count__45054,i__45055,new_link_45230,path_match_45229,node_45228,seq__45085_45222__$1,temp__5753__auto___45221,path,map__45050,map__45050__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45229], 0));

goog.dom.insertSiblingAfter(new_link_45230,node_45228);


var G__45231 = cljs.core.next(seq__45085_45222__$1);
var G__45232 = null;
var G__45233 = (0);
var G__45234 = (0);
seq__45085_45202 = G__45231;
chunk__45089_45203 = G__45232;
count__45090_45204 = G__45233;
i__45091_45205 = G__45234;
continue;
} else {
var G__45235 = cljs.core.next(seq__45085_45222__$1);
var G__45236 = null;
var G__45237 = (0);
var G__45238 = (0);
seq__45085_45202 = G__45235;
chunk__45089_45203 = G__45236;
count__45090_45204 = G__45237;
i__45091_45205 = G__45238;
continue;
}
} else {
var G__45239 = cljs.core.next(seq__45085_45222__$1);
var G__45240 = null;
var G__45241 = (0);
var G__45242 = (0);
seq__45085_45202 = G__45239;
chunk__45089_45203 = G__45240;
count__45090_45204 = G__45241;
i__45091_45205 = G__45242;
continue;
}
}
} else {
}
}
break;
}


var G__45243 = seq__45051;
var G__45244 = chunk__45053;
var G__45245 = count__45054;
var G__45246 = (i__45055 + (1));
seq__45051 = G__45243;
chunk__45053 = G__45244;
count__45054 = G__45245;
i__45055 = G__45246;
continue;
} else {
var G__45247 = seq__45051;
var G__45248 = chunk__45053;
var G__45249 = count__45054;
var G__45250 = (i__45055 + (1));
seq__45051 = G__45247;
chunk__45053 = G__45248;
count__45054 = G__45249;
i__45055 = G__45250;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45051);
if(temp__5753__auto__){
var seq__45051__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45051__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45051__$1);
var G__45251 = cljs.core.chunk_rest(seq__45051__$1);
var G__45252 = c__4679__auto__;
var G__45253 = cljs.core.count(c__4679__auto__);
var G__45254 = (0);
seq__45051 = G__45251;
chunk__45053 = G__45252;
count__45054 = G__45253;
i__45055 = G__45254;
continue;
} else {
var path = cljs.core.first(seq__45051__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45099_45255 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45103_45256 = null;
var count__45104_45257 = (0);
var i__45105_45258 = (0);
while(true){
if((i__45105_45258 < count__45104_45257)){
var node_45259 = chunk__45103_45256.cljs$core$IIndexed$_nth$arity$2(null,i__45105_45258);
if(cljs.core.not(node_45259.shadow$old)){
var path_match_45260 = shadow.cljs.devtools.client.browser.match_paths(node_45259.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45260)){
var new_link_45261 = (function (){var G__45111 = node_45259.cloneNode(true);
G__45111.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45260),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45111;
})();
(node_45259.shadow$old = true);

(new_link_45261.onload = ((function (seq__45099_45255,chunk__45103_45256,count__45104_45257,i__45105_45258,seq__45051,chunk__45053,count__45054,i__45055,new_link_45261,path_match_45260,node_45259,path,seq__45051__$1,temp__5753__auto__,map__45050,map__45050__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45259);
});})(seq__45099_45255,chunk__45103_45256,count__45104_45257,i__45105_45258,seq__45051,chunk__45053,count__45054,i__45055,new_link_45261,path_match_45260,node_45259,path,seq__45051__$1,temp__5753__auto__,map__45050,map__45050__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45260], 0));

goog.dom.insertSiblingAfter(new_link_45261,node_45259);


var G__45262 = seq__45099_45255;
var G__45263 = chunk__45103_45256;
var G__45264 = count__45104_45257;
var G__45265 = (i__45105_45258 + (1));
seq__45099_45255 = G__45262;
chunk__45103_45256 = G__45263;
count__45104_45257 = G__45264;
i__45105_45258 = G__45265;
continue;
} else {
var G__45266 = seq__45099_45255;
var G__45267 = chunk__45103_45256;
var G__45268 = count__45104_45257;
var G__45269 = (i__45105_45258 + (1));
seq__45099_45255 = G__45266;
chunk__45103_45256 = G__45267;
count__45104_45257 = G__45268;
i__45105_45258 = G__45269;
continue;
}
} else {
var G__45270 = seq__45099_45255;
var G__45271 = chunk__45103_45256;
var G__45272 = count__45104_45257;
var G__45273 = (i__45105_45258 + (1));
seq__45099_45255 = G__45270;
chunk__45103_45256 = G__45271;
count__45104_45257 = G__45272;
i__45105_45258 = G__45273;
continue;
}
} else {
var temp__5753__auto___45274__$1 = cljs.core.seq(seq__45099_45255);
if(temp__5753__auto___45274__$1){
var seq__45099_45275__$1 = temp__5753__auto___45274__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45099_45275__$1)){
var c__4679__auto___45276 = cljs.core.chunk_first(seq__45099_45275__$1);
var G__45277 = cljs.core.chunk_rest(seq__45099_45275__$1);
var G__45278 = c__4679__auto___45276;
var G__45279 = cljs.core.count(c__4679__auto___45276);
var G__45280 = (0);
seq__45099_45255 = G__45277;
chunk__45103_45256 = G__45278;
count__45104_45257 = G__45279;
i__45105_45258 = G__45280;
continue;
} else {
var node_45281 = cljs.core.first(seq__45099_45275__$1);
if(cljs.core.not(node_45281.shadow$old)){
var path_match_45282 = shadow.cljs.devtools.client.browser.match_paths(node_45281.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45282)){
var new_link_45283 = (function (){var G__45112 = node_45281.cloneNode(true);
G__45112.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45282),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45112;
})();
(node_45281.shadow$old = true);

(new_link_45283.onload = ((function (seq__45099_45255,chunk__45103_45256,count__45104_45257,i__45105_45258,seq__45051,chunk__45053,count__45054,i__45055,new_link_45283,path_match_45282,node_45281,seq__45099_45275__$1,temp__5753__auto___45274__$1,path,seq__45051__$1,temp__5753__auto__,map__45050,map__45050__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45281);
});})(seq__45099_45255,chunk__45103_45256,count__45104_45257,i__45105_45258,seq__45051,chunk__45053,count__45054,i__45055,new_link_45283,path_match_45282,node_45281,seq__45099_45275__$1,temp__5753__auto___45274__$1,path,seq__45051__$1,temp__5753__auto__,map__45050,map__45050__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45282], 0));

goog.dom.insertSiblingAfter(new_link_45283,node_45281);


var G__45284 = cljs.core.next(seq__45099_45275__$1);
var G__45285 = null;
var G__45286 = (0);
var G__45287 = (0);
seq__45099_45255 = G__45284;
chunk__45103_45256 = G__45285;
count__45104_45257 = G__45286;
i__45105_45258 = G__45287;
continue;
} else {
var G__45288 = cljs.core.next(seq__45099_45275__$1);
var G__45289 = null;
var G__45290 = (0);
var G__45291 = (0);
seq__45099_45255 = G__45288;
chunk__45103_45256 = G__45289;
count__45104_45257 = G__45290;
i__45105_45258 = G__45291;
continue;
}
} else {
var G__45292 = cljs.core.next(seq__45099_45275__$1);
var G__45293 = null;
var G__45294 = (0);
var G__45295 = (0);
seq__45099_45255 = G__45292;
chunk__45103_45256 = G__45293;
count__45104_45257 = G__45294;
i__45105_45258 = G__45295;
continue;
}
}
} else {
}
}
break;
}


var G__45296 = cljs.core.next(seq__45051__$1);
var G__45297 = null;
var G__45298 = (0);
var G__45299 = (0);
seq__45051 = G__45296;
chunk__45053 = G__45297;
count__45054 = G__45298;
i__45055 = G__45299;
continue;
} else {
var G__45300 = cljs.core.next(seq__45051__$1);
var G__45301 = null;
var G__45302 = (0);
var G__45303 = (0);
seq__45051 = G__45300;
chunk__45053 = G__45301;
count__45054 = G__45302;
i__45055 = G__45303;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__45113){
var map__45114 = p__45113;
var map__45114__$1 = cljs.core.__destructure_map(map__45114);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45114__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__45115){
var map__45116 = p__45115;
var map__45116__$1 = cljs.core.__destructure_map(map__45116);
var _ = map__45116__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45116__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__45117,done,error){
var map__45118 = p__45117;
var map__45118__$1 = cljs.core.__destructure_map(map__45118);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45118__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__45119,done,error){
var map__45120 = p__45119;
var map__45120__$1 = cljs.core.__destructure_map(map__45120);
var msg = map__45120__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45120__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45120__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45120__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45121){
var map__45122 = p__45121;
var map__45122__$1 = cljs.core.__destructure_map(map__45122);
var src = map__45122__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45122__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__45123 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__45123) : done.call(null,G__45123));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__45124){
var map__45125 = p__45124;
var map__45125__$1 = cljs.core.__destructure_map(map__45125);
var msg__$1 = map__45125__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45125__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e45126){var ex = e45126;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__45127){
var map__45128 = p__45127;
var map__45128__$1 = cljs.core.__destructure_map(map__45128);
var env = map__45128__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45128__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__45129){
var map__45130 = p__45129;
var map__45130__$1 = cljs.core.__destructure_map(map__45130);
var msg = map__45130__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45130__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__45131){
var map__45132 = p__45131;
var map__45132__$1 = cljs.core.__destructure_map(map__45132);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45132__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45132__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__45133){
var map__45134 = p__45133;
var map__45134__$1 = cljs.core.__destructure_map(map__45134);
var svc = map__45134__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45134__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
