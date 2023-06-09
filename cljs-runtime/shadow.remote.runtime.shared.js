goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__40921,res){
var map__40922 = p__40921;
var map__40922__$1 = cljs.core.__destructure_map(map__40922);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40922__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40922__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__40928 = res;
var G__40928__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40928,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__40928);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40928__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__40928__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__40939 = arguments.length;
switch (G__40939) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__41001,msg,handlers,timeout_after_ms){
var map__41003 = p__41001;
var map__41003__$1 = cljs.core.__destructure_map(map__41003);
var runtime = map__41003__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41003__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___41318 = arguments.length;
var i__4865__auto___41319 = (0);
while(true){
if((i__4865__auto___41319 < len__4864__auto___41318)){
args__4870__auto__.push((arguments[i__4865__auto___41319]));

var G__41320 = (i__4865__auto___41319 + (1));
i__4865__auto___41319 = G__41320;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__41062,ev,args){
var map__41063 = p__41062;
var map__41063__$1 = cljs.core.__destructure_map(map__41063);
var runtime = map__41063__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41063__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__41067 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__41070 = null;
var count__41071 = (0);
var i__41072 = (0);
while(true){
if((i__41072 < count__41071)){
var ext = chunk__41070.cljs$core$IIndexed$_nth$arity$2(null,i__41072);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__41325 = seq__41067;
var G__41326 = chunk__41070;
var G__41327 = count__41071;
var G__41328 = (i__41072 + (1));
seq__41067 = G__41325;
chunk__41070 = G__41326;
count__41071 = G__41327;
i__41072 = G__41328;
continue;
} else {
var G__41330 = seq__41067;
var G__41331 = chunk__41070;
var G__41332 = count__41071;
var G__41333 = (i__41072 + (1));
seq__41067 = G__41330;
chunk__41070 = G__41331;
count__41071 = G__41332;
i__41072 = G__41333;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41067);
if(temp__5753__auto__){
var seq__41067__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41067__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41067__$1);
var G__41334 = cljs.core.chunk_rest(seq__41067__$1);
var G__41335 = c__4679__auto__;
var G__41336 = cljs.core.count(c__4679__auto__);
var G__41337 = (0);
seq__41067 = G__41334;
chunk__41070 = G__41335;
count__41071 = G__41336;
i__41072 = G__41337;
continue;
} else {
var ext = cljs.core.first(seq__41067__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__41339 = cljs.core.next(seq__41067__$1);
var G__41340 = null;
var G__41341 = (0);
var G__41342 = (0);
seq__41067 = G__41339;
chunk__41070 = G__41340;
count__41071 = G__41341;
i__41072 = G__41342;
continue;
} else {
var G__41343 = cljs.core.next(seq__41067__$1);
var G__41344 = null;
var G__41345 = (0);
var G__41346 = (0);
seq__41067 = G__41343;
chunk__41070 = G__41344;
count__41071 = G__41345;
i__41072 = G__41346;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq41044){
var G__41045 = cljs.core.first(seq41044);
var seq41044__$1 = cljs.core.next(seq41044);
var G__41046 = cljs.core.first(seq41044__$1);
var seq41044__$2 = cljs.core.next(seq41044__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41045,G__41046,seq41044__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__41131,p__41132){
var map__41140 = p__41131;
var map__41140__$1 = cljs.core.__destructure_map(map__41140);
var runtime = map__41140__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41140__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__41141 = p__41132;
var map__41141__$1 = cljs.core.__destructure_map(map__41141);
var msg = map__41141__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41141__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__41151 = cljs.core.deref(state_ref);
var map__41151__$1 = cljs.core.__destructure_map(map__41151);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41151__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41151__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__41177){
var map__41182 = p__41177;
var map__41182__$1 = cljs.core.__destructure_map(map__41182);
var runtime = map__41182__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41182__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__41189,msg){
var map__41190 = p__41189;
var map__41190__$1 = cljs.core.__destructure_map(map__41190);
var runtime = map__41190__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41190__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__41212,key,p__41213){
var map__41214 = p__41212;
var map__41214__$1 = cljs.core.__destructure_map(map__41214);
var state = map__41214__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41214__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__41215 = p__41213;
var map__41215__$1 = cljs.core.__destructure_map(map__41215);
var spec = map__41215__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41215__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__41225,key,spec){
var map__41227 = p__41225;
var map__41227__$1 = cljs.core.__destructure_map(map__41227);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41227__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__41228_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__41228_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__41229_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__41229_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__41231_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__41231_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__41232_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__41232_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__41233_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__41233_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__41247,key){
var map__41248 = p__41247;
var map__41248__$1 = cljs.core.__destructure_map(map__41248);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41248__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__41250,msg){
var map__41251 = p__41250;
var map__41251__$1 = cljs.core.__destructure_map(map__41251);
var runtime = map__41251__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41251__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__41252,p__41253){
var map__41254 = p__41252;
var map__41254__$1 = cljs.core.__destructure_map(map__41254);
var runtime = map__41254__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41254__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__41255 = p__41253;
var map__41255__$1 = cljs.core.__destructure_map(map__41255);
var msg = map__41255__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41255__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41255__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__41259 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__41261 = null;
var count__41262 = (0);
var i__41263 = (0);
while(true){
if((i__41263 < count__41262)){
var map__41274 = chunk__41261.cljs$core$IIndexed$_nth$arity$2(null,i__41263);
var map__41274__$1 = cljs.core.__destructure_map(map__41274);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41274__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__41475 = seq__41259;
var G__41476 = chunk__41261;
var G__41477 = count__41262;
var G__41478 = (i__41263 + (1));
seq__41259 = G__41475;
chunk__41261 = G__41476;
count__41262 = G__41477;
i__41263 = G__41478;
continue;
} else {
var G__41479 = seq__41259;
var G__41480 = chunk__41261;
var G__41481 = count__41262;
var G__41482 = (i__41263 + (1));
seq__41259 = G__41479;
chunk__41261 = G__41480;
count__41262 = G__41481;
i__41263 = G__41482;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41259);
if(temp__5753__auto__){
var seq__41259__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41259__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41259__$1);
var G__41489 = cljs.core.chunk_rest(seq__41259__$1);
var G__41490 = c__4679__auto__;
var G__41491 = cljs.core.count(c__4679__auto__);
var G__41492 = (0);
seq__41259 = G__41489;
chunk__41261 = G__41490;
count__41262 = G__41491;
i__41263 = G__41492;
continue;
} else {
var map__41277 = cljs.core.first(seq__41259__$1);
var map__41277__$1 = cljs.core.__destructure_map(map__41277);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41277__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__41500 = cljs.core.next(seq__41259__$1);
var G__41501 = null;
var G__41502 = (0);
var G__41503 = (0);
seq__41259 = G__41500;
chunk__41261 = G__41501;
count__41262 = G__41502;
i__41263 = G__41503;
continue;
} else {
var G__41508 = cljs.core.next(seq__41259__$1);
var G__41509 = null;
var G__41510 = (0);
var G__41511 = (0);
seq__41259 = G__41508;
chunk__41261 = G__41509;
count__41262 = G__41510;
i__41263 = G__41511;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
