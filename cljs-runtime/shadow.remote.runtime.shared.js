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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__37485,res){
var map__37487 = p__37485;
var map__37487__$1 = cljs.core.__destructure_map(map__37487);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37487__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37487__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__37491 = res;
var G__37491__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37491,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__37491);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37491__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__37491__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__37499 = arguments.length;
switch (G__37499) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__37505,msg,handlers,timeout_after_ms){
var map__37506 = p__37505;
var map__37506__$1 = cljs.core.__destructure_map(map__37506);
var runtime = map__37506__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37506__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37809 = arguments.length;
var i__4865__auto___37811 = (0);
while(true){
if((i__4865__auto___37811 < len__4864__auto___37809)){
args__4870__auto__.push((arguments[i__4865__auto___37811]));

var G__37814 = (i__4865__auto___37811 + (1));
i__4865__auto___37811 = G__37814;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__37524,ev,args){
var map__37526 = p__37524;
var map__37526__$1 = cljs.core.__destructure_map(map__37526);
var runtime = map__37526__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37526__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__37527 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37530 = null;
var count__37531 = (0);
var i__37532 = (0);
while(true){
if((i__37532 < count__37531)){
var ext = chunk__37530.cljs$core$IIndexed$_nth$arity$2(null,i__37532);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37821 = seq__37527;
var G__37822 = chunk__37530;
var G__37823 = count__37531;
var G__37824 = (i__37532 + (1));
seq__37527 = G__37821;
chunk__37530 = G__37822;
count__37531 = G__37823;
i__37532 = G__37824;
continue;
} else {
var G__37825 = seq__37527;
var G__37826 = chunk__37530;
var G__37827 = count__37531;
var G__37828 = (i__37532 + (1));
seq__37527 = G__37825;
chunk__37530 = G__37826;
count__37531 = G__37827;
i__37532 = G__37828;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37527);
if(temp__5753__auto__){
var seq__37527__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37527__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37527__$1);
var G__37829 = cljs.core.chunk_rest(seq__37527__$1);
var G__37830 = c__4679__auto__;
var G__37831 = cljs.core.count(c__4679__auto__);
var G__37832 = (0);
seq__37527 = G__37829;
chunk__37530 = G__37830;
count__37531 = G__37831;
i__37532 = G__37832;
continue;
} else {
var ext = cljs.core.first(seq__37527__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37833 = cljs.core.next(seq__37527__$1);
var G__37834 = null;
var G__37835 = (0);
var G__37836 = (0);
seq__37527 = G__37833;
chunk__37530 = G__37834;
count__37531 = G__37835;
i__37532 = G__37836;
continue;
} else {
var G__37837 = cljs.core.next(seq__37527__$1);
var G__37838 = null;
var G__37839 = (0);
var G__37840 = (0);
seq__37527 = G__37837;
chunk__37530 = G__37838;
count__37531 = G__37839;
i__37532 = G__37840;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq37517){
var G__37518 = cljs.core.first(seq37517);
var seq37517__$1 = cljs.core.next(seq37517);
var G__37519 = cljs.core.first(seq37517__$1);
var seq37517__$2 = cljs.core.next(seq37517__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37518,G__37519,seq37517__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__37557,p__37558){
var map__37559 = p__37557;
var map__37559__$1 = cljs.core.__destructure_map(map__37559);
var runtime = map__37559__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37559__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__37560 = p__37558;
var map__37560__$1 = cljs.core.__destructure_map(map__37560);
var msg = map__37560__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37560__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__37564 = cljs.core.deref(state_ref);
var map__37564__$1 = cljs.core.__destructure_map(map__37564);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37564__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37564__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__37593){
var map__37603 = p__37593;
var map__37603__$1 = cljs.core.__destructure_map(map__37603);
var runtime = map__37603__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37603__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__37634,msg){
var map__37637 = p__37634;
var map__37637__$1 = cljs.core.__destructure_map(map__37637);
var runtime = map__37637__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37637__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__37655,key,p__37656){
var map__37657 = p__37655;
var map__37657__$1 = cljs.core.__destructure_map(map__37657);
var state = map__37657__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37657__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__37658 = p__37656;
var map__37658__$1 = cljs.core.__destructure_map(map__37658);
var spec = map__37658__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37658__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__37669,key,spec){
var map__37670 = p__37669;
var map__37670__$1 = cljs.core.__destructure_map(map__37670);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37670__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__37674_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__37674_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__37675_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__37675_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__37676_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__37676_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__37677_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__37677_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__37678_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__37678_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__37698,key){
var map__37700 = p__37698;
var map__37700__$1 = cljs.core.__destructure_map(map__37700);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37700__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__37716,msg){
var map__37717 = p__37716;
var map__37717__$1 = cljs.core.__destructure_map(map__37717);
var runtime = map__37717__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37717__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__37724,p__37725){
var map__37726 = p__37724;
var map__37726__$1 = cljs.core.__destructure_map(map__37726);
var runtime = map__37726__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37726__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__37727 = p__37725;
var map__37727__$1 = cljs.core.__destructure_map(map__37727);
var msg = map__37727__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37727__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37727__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__37736 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37739 = null;
var count__37740 = (0);
var i__37741 = (0);
while(true){
if((i__37741 < count__37740)){
var map__37759 = chunk__37739.cljs$core$IIndexed$_nth$arity$2(null,i__37741);
var map__37759__$1 = cljs.core.__destructure_map(map__37759);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37759__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__37907 = seq__37736;
var G__37908 = chunk__37739;
var G__37909 = count__37740;
var G__37910 = (i__37741 + (1));
seq__37736 = G__37907;
chunk__37739 = G__37908;
count__37740 = G__37909;
i__37741 = G__37910;
continue;
} else {
var G__37913 = seq__37736;
var G__37914 = chunk__37739;
var G__37915 = count__37740;
var G__37916 = (i__37741 + (1));
seq__37736 = G__37913;
chunk__37739 = G__37914;
count__37740 = G__37915;
i__37741 = G__37916;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37736);
if(temp__5753__auto__){
var seq__37736__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37736__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37736__$1);
var G__37921 = cljs.core.chunk_rest(seq__37736__$1);
var G__37922 = c__4679__auto__;
var G__37923 = cljs.core.count(c__4679__auto__);
var G__37924 = (0);
seq__37736 = G__37921;
chunk__37739 = G__37922;
count__37740 = G__37923;
i__37741 = G__37924;
continue;
} else {
var map__37773 = cljs.core.first(seq__37736__$1);
var map__37773__$1 = cljs.core.__destructure_map(map__37773);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37773__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__37925 = cljs.core.next(seq__37736__$1);
var G__37926 = null;
var G__37927 = (0);
var G__37928 = (0);
seq__37736 = G__37925;
chunk__37739 = G__37926;
count__37740 = G__37927;
i__37741 = G__37928;
continue;
} else {
var G__37930 = cljs.core.next(seq__37736__$1);
var G__37931 = null;
var G__37932 = (0);
var G__37933 = (0);
seq__37736 = G__37930;
chunk__37739 = G__37931;
count__37740 = G__37932;
i__37741 = G__37933;
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
