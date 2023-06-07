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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__37545,res){
var map__37546 = p__37545;
var map__37546__$1 = cljs.core.__destructure_map(map__37546);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37546__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37546__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__37547 = res;
var G__37547__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37547,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__37547);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37547__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__37547__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__37563 = arguments.length;
switch (G__37563) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__37571,msg,handlers,timeout_after_ms){
var map__37572 = p__37571;
var map__37572__$1 = cljs.core.__destructure_map(map__37572);
var runtime = map__37572__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37572__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37941 = arguments.length;
var i__4865__auto___37942 = (0);
while(true){
if((i__4865__auto___37942 < len__4864__auto___37941)){
args__4870__auto__.push((arguments[i__4865__auto___37942]));

var G__37944 = (i__4865__auto___37942 + (1));
i__4865__auto___37942 = G__37944;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__37626,ev,args){
var map__37627 = p__37626;
var map__37627__$1 = cljs.core.__destructure_map(map__37627);
var runtime = map__37627__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37627__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__37635 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37639 = null;
var count__37640 = (0);
var i__37641 = (0);
while(true){
if((i__37641 < count__37640)){
var ext = chunk__37639.cljs$core$IIndexed$_nth$arity$2(null,i__37641);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37945 = seq__37635;
var G__37946 = chunk__37639;
var G__37947 = count__37640;
var G__37948 = (i__37641 + (1));
seq__37635 = G__37945;
chunk__37639 = G__37946;
count__37640 = G__37947;
i__37641 = G__37948;
continue;
} else {
var G__37951 = seq__37635;
var G__37952 = chunk__37639;
var G__37953 = count__37640;
var G__37954 = (i__37641 + (1));
seq__37635 = G__37951;
chunk__37639 = G__37952;
count__37640 = G__37953;
i__37641 = G__37954;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37635);
if(temp__5753__auto__){
var seq__37635__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37635__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37635__$1);
var G__37957 = cljs.core.chunk_rest(seq__37635__$1);
var G__37958 = c__4679__auto__;
var G__37959 = cljs.core.count(c__4679__auto__);
var G__37960 = (0);
seq__37635 = G__37957;
chunk__37639 = G__37958;
count__37640 = G__37959;
i__37641 = G__37960;
continue;
} else {
var ext = cljs.core.first(seq__37635__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37962 = cljs.core.next(seq__37635__$1);
var G__37963 = null;
var G__37964 = (0);
var G__37965 = (0);
seq__37635 = G__37962;
chunk__37639 = G__37963;
count__37640 = G__37964;
i__37641 = G__37965;
continue;
} else {
var G__37966 = cljs.core.next(seq__37635__$1);
var G__37967 = null;
var G__37968 = (0);
var G__37969 = (0);
seq__37635 = G__37966;
chunk__37639 = G__37967;
count__37640 = G__37968;
i__37641 = G__37969;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq37599){
var G__37600 = cljs.core.first(seq37599);
var seq37599__$1 = cljs.core.next(seq37599);
var G__37601 = cljs.core.first(seq37599__$1);
var seq37599__$2 = cljs.core.next(seq37599__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37600,G__37601,seq37599__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__37662,p__37663){
var map__37664 = p__37662;
var map__37664__$1 = cljs.core.__destructure_map(map__37664);
var runtime = map__37664__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37664__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__37665 = p__37663;
var map__37665__$1 = cljs.core.__destructure_map(map__37665);
var msg = map__37665__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37665__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__37667 = cljs.core.deref(state_ref);
var map__37667__$1 = cljs.core.__destructure_map(map__37667);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37667__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37667__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__37699){
var map__37701 = p__37699;
var map__37701__$1 = cljs.core.__destructure_map(map__37701);
var runtime = map__37701__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37701__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__37709,msg){
var map__37710 = p__37709;
var map__37710__$1 = cljs.core.__destructure_map(map__37710);
var runtime = map__37710__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37710__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__37728,key,p__37729){
var map__37731 = p__37728;
var map__37731__$1 = cljs.core.__destructure_map(map__37731);
var state = map__37731__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37731__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__37732 = p__37729;
var map__37732__$1 = cljs.core.__destructure_map(map__37732);
var spec = map__37732__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37732__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__37824,key,spec){
var map__37825 = p__37824;
var map__37825__$1 = cljs.core.__destructure_map(map__37825);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37825__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__37832_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__37832_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__37834_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__37834_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__37836_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__37836_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__37837_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__37837_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__37838_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__37838_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__37858,key){
var map__37859 = p__37858;
var map__37859__$1 = cljs.core.__destructure_map(map__37859);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37859__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__37867,msg){
var map__37868 = p__37867;
var map__37868__$1 = cljs.core.__destructure_map(map__37868);
var runtime = map__37868__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37868__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__37879,p__37880){
var map__37882 = p__37879;
var map__37882__$1 = cljs.core.__destructure_map(map__37882);
var runtime = map__37882__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37882__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__37883 = p__37880;
var map__37883__$1 = cljs.core.__destructure_map(map__37883);
var msg = map__37883__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37883__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37883__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__37896 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37898 = null;
var count__37899 = (0);
var i__37900 = (0);
while(true){
if((i__37900 < count__37899)){
var map__37914 = chunk__37898.cljs$core$IIndexed$_nth$arity$2(null,i__37900);
var map__37914__$1 = cljs.core.__destructure_map(map__37914);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37914__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__38005 = seq__37896;
var G__38006 = chunk__37898;
var G__38007 = count__37899;
var G__38008 = (i__37900 + (1));
seq__37896 = G__38005;
chunk__37898 = G__38006;
count__37899 = G__38007;
i__37900 = G__38008;
continue;
} else {
var G__38009 = seq__37896;
var G__38010 = chunk__37898;
var G__38011 = count__37899;
var G__38012 = (i__37900 + (1));
seq__37896 = G__38009;
chunk__37898 = G__38010;
count__37899 = G__38011;
i__37900 = G__38012;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37896);
if(temp__5753__auto__){
var seq__37896__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37896__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37896__$1);
var G__38013 = cljs.core.chunk_rest(seq__37896__$1);
var G__38014 = c__4679__auto__;
var G__38015 = cljs.core.count(c__4679__auto__);
var G__38016 = (0);
seq__37896 = G__38013;
chunk__37898 = G__38014;
count__37899 = G__38015;
i__37900 = G__38016;
continue;
} else {
var map__37920 = cljs.core.first(seq__37896__$1);
var map__37920__$1 = cljs.core.__destructure_map(map__37920);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37920__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__38017 = cljs.core.next(seq__37896__$1);
var G__38018 = null;
var G__38019 = (0);
var G__38020 = (0);
seq__37896 = G__38017;
chunk__37898 = G__38018;
count__37899 = G__38019;
i__37900 = G__38020;
continue;
} else {
var G__38021 = cljs.core.next(seq__37896__$1);
var G__38022 = null;
var G__38023 = (0);
var G__38024 = (0);
seq__37896 = G__38021;
chunk__37898 = G__38022;
count__37899 = G__38023;
i__37900 = G__38024;
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
