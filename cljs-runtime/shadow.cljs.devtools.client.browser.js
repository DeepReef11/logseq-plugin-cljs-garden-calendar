goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37743 = arguments.length;
var i__4865__auto___37744 = (0);
while(true){
if((i__4865__auto___37744 < len__4864__auto___37743)){
args__4870__auto__.push((arguments[i__4865__auto___37744]));

var G__37745 = (i__4865__auto___37744 + (1));
i__4865__auto___37744 = G__37745;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37617){
var G__37618 = cljs.core.first(seq37617);
var seq37617__$1 = cljs.core.next(seq37617);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37618,seq37617__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37621 = cljs.core.seq(sources);
var chunk__37622 = null;
var count__37623 = (0);
var i__37624 = (0);
while(true){
if((i__37624 < count__37623)){
var map__37629 = chunk__37622.cljs$core$IIndexed$_nth$arity$2(null,i__37624);
var map__37629__$1 = cljs.core.__destructure_map(map__37629);
var src = map__37629__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37629__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37629__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37629__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37629__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37630){var e_37746 = e37630;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37746);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37746.message)].join('')));
}

var G__37747 = seq__37621;
var G__37748 = chunk__37622;
var G__37749 = count__37623;
var G__37750 = (i__37624 + (1));
seq__37621 = G__37747;
chunk__37622 = G__37748;
count__37623 = G__37749;
i__37624 = G__37750;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37621);
if(temp__5753__auto__){
var seq__37621__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37621__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37621__$1);
var G__37751 = cljs.core.chunk_rest(seq__37621__$1);
var G__37752 = c__4679__auto__;
var G__37753 = cljs.core.count(c__4679__auto__);
var G__37754 = (0);
seq__37621 = G__37751;
chunk__37622 = G__37752;
count__37623 = G__37753;
i__37624 = G__37754;
continue;
} else {
var map__37633 = cljs.core.first(seq__37621__$1);
var map__37633__$1 = cljs.core.__destructure_map(map__37633);
var src = map__37633__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37633__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37633__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37633__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37633__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37634){var e_37755 = e37634;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37755);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37755.message)].join('')));
}

var G__37756 = cljs.core.next(seq__37621__$1);
var G__37757 = null;
var G__37758 = (0);
var G__37759 = (0);
seq__37621 = G__37756;
chunk__37622 = G__37757;
count__37623 = G__37758;
i__37624 = G__37759;
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
var seq__37635 = cljs.core.seq(js_requires);
var chunk__37636 = null;
var count__37637 = (0);
var i__37638 = (0);
while(true){
if((i__37638 < count__37637)){
var js_ns = chunk__37636.cljs$core$IIndexed$_nth$arity$2(null,i__37638);
var require_str_37760 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37760);


var G__37761 = seq__37635;
var G__37762 = chunk__37636;
var G__37763 = count__37637;
var G__37764 = (i__37638 + (1));
seq__37635 = G__37761;
chunk__37636 = G__37762;
count__37637 = G__37763;
i__37638 = G__37764;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37635);
if(temp__5753__auto__){
var seq__37635__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37635__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37635__$1);
var G__37765 = cljs.core.chunk_rest(seq__37635__$1);
var G__37766 = c__4679__auto__;
var G__37767 = cljs.core.count(c__4679__auto__);
var G__37768 = (0);
seq__37635 = G__37765;
chunk__37636 = G__37766;
count__37637 = G__37767;
i__37638 = G__37768;
continue;
} else {
var js_ns = cljs.core.first(seq__37635__$1);
var require_str_37769 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37769);


var G__37770 = cljs.core.next(seq__37635__$1);
var G__37771 = null;
var G__37772 = (0);
var G__37773 = (0);
seq__37635 = G__37770;
chunk__37636 = G__37771;
count__37637 = G__37772;
i__37638 = G__37773;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37640){
var map__37641 = p__37640;
var map__37641__$1 = cljs.core.__destructure_map(map__37641);
var msg = map__37641__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37641__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37641__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37642(s__37643){
return (new cljs.core.LazySeq(null,(function (){
var s__37643__$1 = s__37643;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37643__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37648 = cljs.core.first(xs__6308__auto__);
var map__37648__$1 = cljs.core.__destructure_map(map__37648);
var src = map__37648__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37648__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37648__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__37643__$1,map__37648,map__37648__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37641,map__37641__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37642_$_iter__37644(s__37645){
return (new cljs.core.LazySeq(null,((function (s__37643__$1,map__37648,map__37648__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37641,map__37641__$1,msg,info,reload_info){
return (function (){
var s__37645__$1 = s__37645;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37645__$1);
if(temp__5753__auto____$1){
var s__37645__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37645__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__37645__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__37647 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__37646 = (0);
while(true){
if((i__37646 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__37646);
cljs.core.chunk_append(b__37647,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37774 = (i__37646 + (1));
i__37646 = G__37774;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37647),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37642_$_iter__37644(cljs.core.chunk_rest(s__37645__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37647),null);
}
} else {
var warning = cljs.core.first(s__37645__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37642_$_iter__37644(cljs.core.rest(s__37645__$2)));
}
} else {
return null;
}
break;
}
});})(s__37643__$1,map__37648,map__37648__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37641,map__37641__$1,msg,info,reload_info))
,null,null));
});})(s__37643__$1,map__37648,map__37648__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37641,map__37641__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37642(cljs.core.rest(s__37643__$1)));
} else {
var G__37775 = cljs.core.rest(s__37643__$1);
s__37643__$1 = G__37775;
continue;
}
} else {
var G__37776 = cljs.core.rest(s__37643__$1);
s__37643__$1 = G__37776;
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
var seq__37649_37777 = cljs.core.seq(warnings);
var chunk__37650_37778 = null;
var count__37651_37779 = (0);
var i__37652_37780 = (0);
while(true){
if((i__37652_37780 < count__37651_37779)){
var map__37655_37781 = chunk__37650_37778.cljs$core$IIndexed$_nth$arity$2(null,i__37652_37780);
var map__37655_37782__$1 = cljs.core.__destructure_map(map__37655_37781);
var w_37783 = map__37655_37782__$1;
var msg_37784__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37655_37782__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37655_37782__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37655_37782__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37655_37782__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37787)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37785),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37786),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37784__$1)].join(''));


var G__37788 = seq__37649_37777;
var G__37789 = chunk__37650_37778;
var G__37790 = count__37651_37779;
var G__37791 = (i__37652_37780 + (1));
seq__37649_37777 = G__37788;
chunk__37650_37778 = G__37789;
count__37651_37779 = G__37790;
i__37652_37780 = G__37791;
continue;
} else {
var temp__5753__auto___37792 = cljs.core.seq(seq__37649_37777);
if(temp__5753__auto___37792){
var seq__37649_37793__$1 = temp__5753__auto___37792;
if(cljs.core.chunked_seq_QMARK_(seq__37649_37793__$1)){
var c__4679__auto___37794 = cljs.core.chunk_first(seq__37649_37793__$1);
var G__37795 = cljs.core.chunk_rest(seq__37649_37793__$1);
var G__37796 = c__4679__auto___37794;
var G__37797 = cljs.core.count(c__4679__auto___37794);
var G__37798 = (0);
seq__37649_37777 = G__37795;
chunk__37650_37778 = G__37796;
count__37651_37779 = G__37797;
i__37652_37780 = G__37798;
continue;
} else {
var map__37656_37799 = cljs.core.first(seq__37649_37793__$1);
var map__37656_37800__$1 = cljs.core.__destructure_map(map__37656_37799);
var w_37801 = map__37656_37800__$1;
var msg_37802__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37656_37800__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37656_37800__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37656_37800__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37656_37800__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37805)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37803),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37804),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37802__$1)].join(''));


var G__37806 = cljs.core.next(seq__37649_37793__$1);
var G__37807 = null;
var G__37808 = (0);
var G__37809 = (0);
seq__37649_37777 = G__37806;
chunk__37650_37778 = G__37807;
count__37651_37779 = G__37808;
i__37652_37780 = G__37809;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37639_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37639_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37657){
var map__37658 = p__37657;
var map__37658__$1 = cljs.core.__destructure_map(map__37658);
var msg = map__37658__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37658__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37659 = cljs.core.seq(updates);
var chunk__37661 = null;
var count__37662 = (0);
var i__37663 = (0);
while(true){
if((i__37663 < count__37662)){
var path = chunk__37661.cljs$core$IIndexed$_nth$arity$2(null,i__37663);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37693_37810 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37697_37811 = null;
var count__37698_37812 = (0);
var i__37699_37813 = (0);
while(true){
if((i__37699_37813 < count__37698_37812)){
var node_37814 = chunk__37697_37811.cljs$core$IIndexed$_nth$arity$2(null,i__37699_37813);
if(cljs.core.not(node_37814.shadow$old)){
var path_match_37815 = shadow.cljs.devtools.client.browser.match_paths(node_37814.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37815)){
var new_link_37816 = (function (){var G__37705 = node_37814.cloneNode(true);
G__37705.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37815),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37705;
})();
(node_37814.shadow$old = true);

(new_link_37816.onload = ((function (seq__37693_37810,chunk__37697_37811,count__37698_37812,i__37699_37813,seq__37659,chunk__37661,count__37662,i__37663,new_link_37816,path_match_37815,node_37814,path,map__37658,map__37658__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37814);
});})(seq__37693_37810,chunk__37697_37811,count__37698_37812,i__37699_37813,seq__37659,chunk__37661,count__37662,i__37663,new_link_37816,path_match_37815,node_37814,path,map__37658,map__37658__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37815], 0));

goog.dom.insertSiblingAfter(new_link_37816,node_37814);


var G__37817 = seq__37693_37810;
var G__37818 = chunk__37697_37811;
var G__37819 = count__37698_37812;
var G__37820 = (i__37699_37813 + (1));
seq__37693_37810 = G__37817;
chunk__37697_37811 = G__37818;
count__37698_37812 = G__37819;
i__37699_37813 = G__37820;
continue;
} else {
var G__37821 = seq__37693_37810;
var G__37822 = chunk__37697_37811;
var G__37823 = count__37698_37812;
var G__37824 = (i__37699_37813 + (1));
seq__37693_37810 = G__37821;
chunk__37697_37811 = G__37822;
count__37698_37812 = G__37823;
i__37699_37813 = G__37824;
continue;
}
} else {
var G__37825 = seq__37693_37810;
var G__37826 = chunk__37697_37811;
var G__37827 = count__37698_37812;
var G__37828 = (i__37699_37813 + (1));
seq__37693_37810 = G__37825;
chunk__37697_37811 = G__37826;
count__37698_37812 = G__37827;
i__37699_37813 = G__37828;
continue;
}
} else {
var temp__5753__auto___37829 = cljs.core.seq(seq__37693_37810);
if(temp__5753__auto___37829){
var seq__37693_37830__$1 = temp__5753__auto___37829;
if(cljs.core.chunked_seq_QMARK_(seq__37693_37830__$1)){
var c__4679__auto___37831 = cljs.core.chunk_first(seq__37693_37830__$1);
var G__37832 = cljs.core.chunk_rest(seq__37693_37830__$1);
var G__37833 = c__4679__auto___37831;
var G__37834 = cljs.core.count(c__4679__auto___37831);
var G__37835 = (0);
seq__37693_37810 = G__37832;
chunk__37697_37811 = G__37833;
count__37698_37812 = G__37834;
i__37699_37813 = G__37835;
continue;
} else {
var node_37836 = cljs.core.first(seq__37693_37830__$1);
if(cljs.core.not(node_37836.shadow$old)){
var path_match_37837 = shadow.cljs.devtools.client.browser.match_paths(node_37836.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37837)){
var new_link_37838 = (function (){var G__37706 = node_37836.cloneNode(true);
G__37706.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37837),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37706;
})();
(node_37836.shadow$old = true);

(new_link_37838.onload = ((function (seq__37693_37810,chunk__37697_37811,count__37698_37812,i__37699_37813,seq__37659,chunk__37661,count__37662,i__37663,new_link_37838,path_match_37837,node_37836,seq__37693_37830__$1,temp__5753__auto___37829,path,map__37658,map__37658__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37836);
});})(seq__37693_37810,chunk__37697_37811,count__37698_37812,i__37699_37813,seq__37659,chunk__37661,count__37662,i__37663,new_link_37838,path_match_37837,node_37836,seq__37693_37830__$1,temp__5753__auto___37829,path,map__37658,map__37658__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37837], 0));

goog.dom.insertSiblingAfter(new_link_37838,node_37836);


var G__37839 = cljs.core.next(seq__37693_37830__$1);
var G__37840 = null;
var G__37841 = (0);
var G__37842 = (0);
seq__37693_37810 = G__37839;
chunk__37697_37811 = G__37840;
count__37698_37812 = G__37841;
i__37699_37813 = G__37842;
continue;
} else {
var G__37843 = cljs.core.next(seq__37693_37830__$1);
var G__37844 = null;
var G__37845 = (0);
var G__37846 = (0);
seq__37693_37810 = G__37843;
chunk__37697_37811 = G__37844;
count__37698_37812 = G__37845;
i__37699_37813 = G__37846;
continue;
}
} else {
var G__37847 = cljs.core.next(seq__37693_37830__$1);
var G__37848 = null;
var G__37849 = (0);
var G__37850 = (0);
seq__37693_37810 = G__37847;
chunk__37697_37811 = G__37848;
count__37698_37812 = G__37849;
i__37699_37813 = G__37850;
continue;
}
}
} else {
}
}
break;
}


var G__37851 = seq__37659;
var G__37852 = chunk__37661;
var G__37853 = count__37662;
var G__37854 = (i__37663 + (1));
seq__37659 = G__37851;
chunk__37661 = G__37852;
count__37662 = G__37853;
i__37663 = G__37854;
continue;
} else {
var G__37855 = seq__37659;
var G__37856 = chunk__37661;
var G__37857 = count__37662;
var G__37858 = (i__37663 + (1));
seq__37659 = G__37855;
chunk__37661 = G__37856;
count__37662 = G__37857;
i__37663 = G__37858;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37659);
if(temp__5753__auto__){
var seq__37659__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37659__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37659__$1);
var G__37859 = cljs.core.chunk_rest(seq__37659__$1);
var G__37860 = c__4679__auto__;
var G__37861 = cljs.core.count(c__4679__auto__);
var G__37862 = (0);
seq__37659 = G__37859;
chunk__37661 = G__37860;
count__37662 = G__37861;
i__37663 = G__37862;
continue;
} else {
var path = cljs.core.first(seq__37659__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37707_37863 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37711_37864 = null;
var count__37712_37865 = (0);
var i__37713_37866 = (0);
while(true){
if((i__37713_37866 < count__37712_37865)){
var node_37867 = chunk__37711_37864.cljs$core$IIndexed$_nth$arity$2(null,i__37713_37866);
if(cljs.core.not(node_37867.shadow$old)){
var path_match_37868 = shadow.cljs.devtools.client.browser.match_paths(node_37867.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37868)){
var new_link_37869 = (function (){var G__37719 = node_37867.cloneNode(true);
G__37719.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37868),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37719;
})();
(node_37867.shadow$old = true);

(new_link_37869.onload = ((function (seq__37707_37863,chunk__37711_37864,count__37712_37865,i__37713_37866,seq__37659,chunk__37661,count__37662,i__37663,new_link_37869,path_match_37868,node_37867,path,seq__37659__$1,temp__5753__auto__,map__37658,map__37658__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37867);
});})(seq__37707_37863,chunk__37711_37864,count__37712_37865,i__37713_37866,seq__37659,chunk__37661,count__37662,i__37663,new_link_37869,path_match_37868,node_37867,path,seq__37659__$1,temp__5753__auto__,map__37658,map__37658__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37868], 0));

goog.dom.insertSiblingAfter(new_link_37869,node_37867);


var G__37870 = seq__37707_37863;
var G__37871 = chunk__37711_37864;
var G__37872 = count__37712_37865;
var G__37873 = (i__37713_37866 + (1));
seq__37707_37863 = G__37870;
chunk__37711_37864 = G__37871;
count__37712_37865 = G__37872;
i__37713_37866 = G__37873;
continue;
} else {
var G__37874 = seq__37707_37863;
var G__37875 = chunk__37711_37864;
var G__37876 = count__37712_37865;
var G__37877 = (i__37713_37866 + (1));
seq__37707_37863 = G__37874;
chunk__37711_37864 = G__37875;
count__37712_37865 = G__37876;
i__37713_37866 = G__37877;
continue;
}
} else {
var G__37878 = seq__37707_37863;
var G__37879 = chunk__37711_37864;
var G__37880 = count__37712_37865;
var G__37881 = (i__37713_37866 + (1));
seq__37707_37863 = G__37878;
chunk__37711_37864 = G__37879;
count__37712_37865 = G__37880;
i__37713_37866 = G__37881;
continue;
}
} else {
var temp__5753__auto___37882__$1 = cljs.core.seq(seq__37707_37863);
if(temp__5753__auto___37882__$1){
var seq__37707_37883__$1 = temp__5753__auto___37882__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37707_37883__$1)){
var c__4679__auto___37884 = cljs.core.chunk_first(seq__37707_37883__$1);
var G__37885 = cljs.core.chunk_rest(seq__37707_37883__$1);
var G__37886 = c__4679__auto___37884;
var G__37887 = cljs.core.count(c__4679__auto___37884);
var G__37888 = (0);
seq__37707_37863 = G__37885;
chunk__37711_37864 = G__37886;
count__37712_37865 = G__37887;
i__37713_37866 = G__37888;
continue;
} else {
var node_37889 = cljs.core.first(seq__37707_37883__$1);
if(cljs.core.not(node_37889.shadow$old)){
var path_match_37890 = shadow.cljs.devtools.client.browser.match_paths(node_37889.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37890)){
var new_link_37891 = (function (){var G__37720 = node_37889.cloneNode(true);
G__37720.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37890),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37720;
})();
(node_37889.shadow$old = true);

(new_link_37891.onload = ((function (seq__37707_37863,chunk__37711_37864,count__37712_37865,i__37713_37866,seq__37659,chunk__37661,count__37662,i__37663,new_link_37891,path_match_37890,node_37889,seq__37707_37883__$1,temp__5753__auto___37882__$1,path,seq__37659__$1,temp__5753__auto__,map__37658,map__37658__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37889);
});})(seq__37707_37863,chunk__37711_37864,count__37712_37865,i__37713_37866,seq__37659,chunk__37661,count__37662,i__37663,new_link_37891,path_match_37890,node_37889,seq__37707_37883__$1,temp__5753__auto___37882__$1,path,seq__37659__$1,temp__5753__auto__,map__37658,map__37658__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37890], 0));

goog.dom.insertSiblingAfter(new_link_37891,node_37889);


var G__37892 = cljs.core.next(seq__37707_37883__$1);
var G__37893 = null;
var G__37894 = (0);
var G__37895 = (0);
seq__37707_37863 = G__37892;
chunk__37711_37864 = G__37893;
count__37712_37865 = G__37894;
i__37713_37866 = G__37895;
continue;
} else {
var G__37896 = cljs.core.next(seq__37707_37883__$1);
var G__37897 = null;
var G__37898 = (0);
var G__37899 = (0);
seq__37707_37863 = G__37896;
chunk__37711_37864 = G__37897;
count__37712_37865 = G__37898;
i__37713_37866 = G__37899;
continue;
}
} else {
var G__37900 = cljs.core.next(seq__37707_37883__$1);
var G__37901 = null;
var G__37902 = (0);
var G__37903 = (0);
seq__37707_37863 = G__37900;
chunk__37711_37864 = G__37901;
count__37712_37865 = G__37902;
i__37713_37866 = G__37903;
continue;
}
}
} else {
}
}
break;
}


var G__37904 = cljs.core.next(seq__37659__$1);
var G__37905 = null;
var G__37906 = (0);
var G__37907 = (0);
seq__37659 = G__37904;
chunk__37661 = G__37905;
count__37662 = G__37906;
i__37663 = G__37907;
continue;
} else {
var G__37908 = cljs.core.next(seq__37659__$1);
var G__37909 = null;
var G__37910 = (0);
var G__37911 = (0);
seq__37659 = G__37908;
chunk__37661 = G__37909;
count__37662 = G__37910;
i__37663 = G__37911;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37721){
var map__37722 = p__37721;
var map__37722__$1 = cljs.core.__destructure_map(map__37722);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37722__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37723){
var map__37724 = p__37723;
var map__37724__$1 = cljs.core.__destructure_map(map__37724);
var _ = map__37724__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37724__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37725,done,error){
var map__37726 = p__37725;
var map__37726__$1 = cljs.core.__destructure_map(map__37726);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37726__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37727,done,error){
var map__37728 = p__37727;
var map__37728__$1 = cljs.core.__destructure_map(map__37728);
var msg = map__37728__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37728__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37728__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37728__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37729){
var map__37730 = p__37729;
var map__37730__$1 = cljs.core.__destructure_map(map__37730);
var src = map__37730__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37730__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37731 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37731) : done.call(null,G__37731));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37732){
var map__37733 = p__37732;
var map__37733__$1 = cljs.core.__destructure_map(map__37733);
var msg__$1 = map__37733__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37733__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37734){var ex = e37734;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37735){
var map__37736 = p__37735;
var map__37736__$1 = cljs.core.__destructure_map(map__37736);
var env = map__37736__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37736__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37737){
var map__37738 = p__37737;
var map__37738__$1 = cljs.core.__destructure_map(map__37738);
var msg = map__37738__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37738__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37739){
var map__37740 = p__37739;
var map__37740__$1 = cljs.core.__destructure_map(map__37740);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37740__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37740__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__37741){
var map__37742 = p__37741;
var map__37742__$1 = cljs.core.__destructure_map(map__37742);
var svc = map__37742__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37742__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
