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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31774,res){
var map__31776 = p__31774;
var map__31776__$1 = cljs.core.__destructure_map(map__31776);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31776__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31776__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31780 = res;
var G__31780__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31780,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31780);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31780__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31780__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31794 = arguments.length;
switch (G__31794) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31806,msg,handlers,timeout_after_ms){
var map__31809 = p__31806;
var map__31809__$1 = cljs.core.__destructure_map(map__31809);
var runtime = map__31809__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31809__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32167 = arguments.length;
var i__4865__auto___32168 = (0);
while(true){
if((i__4865__auto___32168 < len__4864__auto___32167)){
args__4870__auto__.push((arguments[i__4865__auto___32168]));

var G__32174 = (i__4865__auto___32168 + (1));
i__4865__auto___32168 = G__32174;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31824,ev,args){
var map__31829 = p__31824;
var map__31829__$1 = cljs.core.__destructure_map(map__31829);
var runtime = map__31829__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31829__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31835 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31838 = null;
var count__31839 = (0);
var i__31840 = (0);
while(true){
if((i__31840 < count__31839)){
var ext = chunk__31838.cljs$core$IIndexed$_nth$arity$2(null,i__31840);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32177 = seq__31835;
var G__32178 = chunk__31838;
var G__32179 = count__31839;
var G__32180 = (i__31840 + (1));
seq__31835 = G__32177;
chunk__31838 = G__32178;
count__31839 = G__32179;
i__31840 = G__32180;
continue;
} else {
var G__32181 = seq__31835;
var G__32182 = chunk__31838;
var G__32183 = count__31839;
var G__32184 = (i__31840 + (1));
seq__31835 = G__32181;
chunk__31838 = G__32182;
count__31839 = G__32183;
i__31840 = G__32184;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31835);
if(temp__5753__auto__){
var seq__31835__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31835__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31835__$1);
var G__32185 = cljs.core.chunk_rest(seq__31835__$1);
var G__32186 = c__4679__auto__;
var G__32187 = cljs.core.count(c__4679__auto__);
var G__32188 = (0);
seq__31835 = G__32185;
chunk__31838 = G__32186;
count__31839 = G__32187;
i__31840 = G__32188;
continue;
} else {
var ext = cljs.core.first(seq__31835__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32190 = cljs.core.next(seq__31835__$1);
var G__32191 = null;
var G__32192 = (0);
var G__32193 = (0);
seq__31835 = G__32190;
chunk__31838 = G__32191;
count__31839 = G__32192;
i__31840 = G__32193;
continue;
} else {
var G__32194 = cljs.core.next(seq__31835__$1);
var G__32195 = null;
var G__32196 = (0);
var G__32197 = (0);
seq__31835 = G__32194;
chunk__31838 = G__32195;
count__31839 = G__32196;
i__31840 = G__32197;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31817){
var G__31818 = cljs.core.first(seq31817);
var seq31817__$1 = cljs.core.next(seq31817);
var G__31819 = cljs.core.first(seq31817__$1);
var seq31817__$2 = cljs.core.next(seq31817__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31818,G__31819,seq31817__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31925,p__31926){
var map__31927 = p__31925;
var map__31927__$1 = cljs.core.__destructure_map(map__31927);
var runtime = map__31927__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31927__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31928 = p__31926;
var map__31928__$1 = cljs.core.__destructure_map(map__31928);
var msg = map__31928__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31928__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31936 = cljs.core.deref(state_ref);
var map__31936__$1 = cljs.core.__destructure_map(map__31936);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31936__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31936__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31971){
var map__31972 = p__31971;
var map__31972__$1 = cljs.core.__destructure_map(map__31972);
var runtime = map__31972__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31972__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31987,msg){
var map__31988 = p__31987;
var map__31988__$1 = cljs.core.__destructure_map(map__31988);
var runtime = map__31988__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31988__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__32018,key,p__32019){
var map__32022 = p__32018;
var map__32022__$1 = cljs.core.__destructure_map(map__32022);
var state = map__32022__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32022__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__32023 = p__32019;
var map__32023__$1 = cljs.core.__destructure_map(map__32023);
var spec = map__32023__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32023__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__32060,key,spec){
var map__32062 = p__32060;
var map__32062__$1 = cljs.core.__destructure_map(map__32062);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32062__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__32068_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__32068_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__32069_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__32069_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__32070_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__32070_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__32071_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__32071_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__32072_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__32072_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__32093,key){
var map__32094 = p__32093;
var map__32094__$1 = cljs.core.__destructure_map(map__32094);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32094__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__32100,msg){
var map__32101 = p__32100;
var map__32101__$1 = cljs.core.__destructure_map(map__32101);
var runtime = map__32101__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32101__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__32114,p__32115){
var map__32116 = p__32114;
var map__32116__$1 = cljs.core.__destructure_map(map__32116);
var runtime = map__32116__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32116__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32117 = p__32115;
var map__32117__$1 = cljs.core.__destructure_map(map__32117);
var msg = map__32117__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32117__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32117__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__32122 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32124 = null;
var count__32125 = (0);
var i__32126 = (0);
while(true){
if((i__32126 < count__32125)){
var map__32139 = chunk__32124.cljs$core$IIndexed$_nth$arity$2(null,i__32126);
var map__32139__$1 = cljs.core.__destructure_map(map__32139);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32139__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32236 = seq__32122;
var G__32237 = chunk__32124;
var G__32238 = count__32125;
var G__32239 = (i__32126 + (1));
seq__32122 = G__32236;
chunk__32124 = G__32237;
count__32125 = G__32238;
i__32126 = G__32239;
continue;
} else {
var G__32240 = seq__32122;
var G__32242 = chunk__32124;
var G__32243 = count__32125;
var G__32244 = (i__32126 + (1));
seq__32122 = G__32240;
chunk__32124 = G__32242;
count__32125 = G__32243;
i__32126 = G__32244;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32122);
if(temp__5753__auto__){
var seq__32122__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32122__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32122__$1);
var G__32253 = cljs.core.chunk_rest(seq__32122__$1);
var G__32254 = c__4679__auto__;
var G__32255 = cljs.core.count(c__4679__auto__);
var G__32256 = (0);
seq__32122 = G__32253;
chunk__32124 = G__32254;
count__32125 = G__32255;
i__32126 = G__32256;
continue;
} else {
var map__32143 = cljs.core.first(seq__32122__$1);
var map__32143__$1 = cljs.core.__destructure_map(map__32143);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32143__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32267 = cljs.core.next(seq__32122__$1);
var G__32268 = null;
var G__32269 = (0);
var G__32270 = (0);
seq__32122 = G__32267;
chunk__32124 = G__32268;
count__32125 = G__32269;
i__32126 = G__32270;
continue;
} else {
var G__32271 = cljs.core.next(seq__32122__$1);
var G__32272 = null;
var G__32273 = (0);
var G__32274 = (0);
seq__32122 = G__32271;
chunk__32124 = G__32272;
count__32125 = G__32273;
i__32126 = G__32274;
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
