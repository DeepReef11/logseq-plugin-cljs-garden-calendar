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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31456,res){
var map__31458 = p__31456;
var map__31458__$1 = cljs.core.__destructure_map(map__31458);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31458__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31458__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31461 = res;
var G__31461__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31461,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31461);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31461__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31461__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31465 = arguments.length;
switch (G__31465) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31472,msg,handlers,timeout_after_ms){
var map__31473 = p__31472;
var map__31473__$1 = cljs.core.__destructure_map(map__31473);
var runtime = map__31473__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31473__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___31814 = arguments.length;
var i__4865__auto___31815 = (0);
while(true){
if((i__4865__auto___31815 < len__4864__auto___31814)){
args__4870__auto__.push((arguments[i__4865__auto___31815]));

var G__31818 = (i__4865__auto___31815 + (1));
i__4865__auto___31815 = G__31818;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31490,ev,args){
var map__31492 = p__31490;
var map__31492__$1 = cljs.core.__destructure_map(map__31492);
var runtime = map__31492__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31492__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31496 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31499 = null;
var count__31500 = (0);
var i__31501 = (0);
while(true){
if((i__31501 < count__31500)){
var ext = chunk__31499.cljs$core$IIndexed$_nth$arity$2(null,i__31501);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31824 = seq__31496;
var G__31825 = chunk__31499;
var G__31826 = count__31500;
var G__31827 = (i__31501 + (1));
seq__31496 = G__31824;
chunk__31499 = G__31825;
count__31500 = G__31826;
i__31501 = G__31827;
continue;
} else {
var G__31828 = seq__31496;
var G__31829 = chunk__31499;
var G__31830 = count__31500;
var G__31831 = (i__31501 + (1));
seq__31496 = G__31828;
chunk__31499 = G__31829;
count__31500 = G__31830;
i__31501 = G__31831;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31496);
if(temp__5753__auto__){
var seq__31496__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31496__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31496__$1);
var G__31833 = cljs.core.chunk_rest(seq__31496__$1);
var G__31834 = c__4679__auto__;
var G__31835 = cljs.core.count(c__4679__auto__);
var G__31836 = (0);
seq__31496 = G__31833;
chunk__31499 = G__31834;
count__31500 = G__31835;
i__31501 = G__31836;
continue;
} else {
var ext = cljs.core.first(seq__31496__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31839 = cljs.core.next(seq__31496__$1);
var G__31840 = null;
var G__31841 = (0);
var G__31842 = (0);
seq__31496 = G__31839;
chunk__31499 = G__31840;
count__31500 = G__31841;
i__31501 = G__31842;
continue;
} else {
var G__31843 = cljs.core.next(seq__31496__$1);
var G__31844 = null;
var G__31845 = (0);
var G__31846 = (0);
seq__31496 = G__31843;
chunk__31499 = G__31844;
count__31500 = G__31845;
i__31501 = G__31846;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31482){
var G__31483 = cljs.core.first(seq31482);
var seq31482__$1 = cljs.core.next(seq31482);
var G__31484 = cljs.core.first(seq31482__$1);
var seq31482__$2 = cljs.core.next(seq31482__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31483,G__31484,seq31482__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31543,p__31544){
var map__31545 = p__31543;
var map__31545__$1 = cljs.core.__destructure_map(map__31545);
var runtime = map__31545__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31545__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31546 = p__31544;
var map__31546__$1 = cljs.core.__destructure_map(map__31546);
var msg = map__31546__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31546__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31549 = cljs.core.deref(state_ref);
var map__31549__$1 = cljs.core.__destructure_map(map__31549);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31549__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31549__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31575){
var map__31576 = p__31575;
var map__31576__$1 = cljs.core.__destructure_map(map__31576);
var runtime = map__31576__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31576__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31584,msg){
var map__31585 = p__31584;
var map__31585__$1 = cljs.core.__destructure_map(map__31585);
var runtime = map__31585__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31585__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31597,key,p__31598){
var map__31599 = p__31597;
var map__31599__$1 = cljs.core.__destructure_map(map__31599);
var state = map__31599__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31599__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31600 = p__31598;
var map__31600__$1 = cljs.core.__destructure_map(map__31600);
var spec = map__31600__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31600__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31615,key,spec){
var map__31617 = p__31615;
var map__31617__$1 = cljs.core.__destructure_map(map__31617);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31617__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31618_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31618_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31619_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31619_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31620_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31620_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31621_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31621_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31622_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31622_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31689,key){
var map__31690 = p__31689;
var map__31690__$1 = cljs.core.__destructure_map(map__31690);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31690__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31706,msg){
var map__31708 = p__31706;
var map__31708__$1 = cljs.core.__destructure_map(map__31708);
var runtime = map__31708__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31708__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31729,p__31730){
var map__31731 = p__31729;
var map__31731__$1 = cljs.core.__destructure_map(map__31731);
var runtime = map__31731__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31731__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31732 = p__31730;
var map__31732__$1 = cljs.core.__destructure_map(map__31732);
var msg = map__31732__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31732__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31732__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__31743 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31745 = null;
var count__31746 = (0);
var i__31747 = (0);
while(true){
if((i__31747 < count__31746)){
var map__31777 = chunk__31745.cljs$core$IIndexed$_nth$arity$2(null,i__31747);
var map__31777__$1 = cljs.core.__destructure_map(map__31777);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31777__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31939 = seq__31743;
var G__31940 = chunk__31745;
var G__31941 = count__31746;
var G__31942 = (i__31747 + (1));
seq__31743 = G__31939;
chunk__31745 = G__31940;
count__31746 = G__31941;
i__31747 = G__31942;
continue;
} else {
var G__31943 = seq__31743;
var G__31944 = chunk__31745;
var G__31945 = count__31746;
var G__31946 = (i__31747 + (1));
seq__31743 = G__31943;
chunk__31745 = G__31944;
count__31746 = G__31945;
i__31747 = G__31946;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31743);
if(temp__5753__auto__){
var seq__31743__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31743__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31743__$1);
var G__31947 = cljs.core.chunk_rest(seq__31743__$1);
var G__31948 = c__4679__auto__;
var G__31949 = cljs.core.count(c__4679__auto__);
var G__31950 = (0);
seq__31743 = G__31947;
chunk__31745 = G__31948;
count__31746 = G__31949;
i__31747 = G__31950;
continue;
} else {
var map__31781 = cljs.core.first(seq__31743__$1);
var map__31781__$1 = cljs.core.__destructure_map(map__31781);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31781__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31953 = cljs.core.next(seq__31743__$1);
var G__31954 = null;
var G__31955 = (0);
var G__31956 = (0);
seq__31743 = G__31953;
chunk__31745 = G__31954;
count__31746 = G__31955;
i__31747 = G__31956;
continue;
} else {
var G__31957 = cljs.core.next(seq__31743__$1);
var G__31958 = null;
var G__31959 = (0);
var G__31960 = (0);
seq__31743 = G__31957;
chunk__31745 = G__31958;
count__31746 = G__31959;
i__31747 = G__31960;
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
