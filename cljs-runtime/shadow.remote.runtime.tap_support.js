goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__45028,p__45029){
var map__45031 = p__45028;
var map__45031__$1 = cljs.core.__destructure_map(map__45031);
var svc = map__45031__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45031__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45031__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45031__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__45032 = p__45029;
var map__45032__$1 = cljs.core.__destructure_map(map__45032);
var msg = map__45032__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45032__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45032__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45032__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45032__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__45047,p__45048){
var map__45049 = p__45047;
var map__45049__$1 = cljs.core.__destructure_map(map__45049);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45049__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__45051 = p__45048;
var map__45051__$1 = cljs.core.__destructure_map(map__45051);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45051__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__45057,p__45058){
var map__45059 = p__45057;
var map__45059__$1 = cljs.core.__destructure_map(map__45059);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45059__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45059__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__45060 = p__45058;
var map__45060__$1 = cljs.core.__destructure_map(map__45060);
var msg = map__45060__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45060__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__45063,tid){
var map__45065 = p__45063;
var map__45065__$1 = cljs.core.__destructure_map(map__45065);
var svc = map__45065__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45065__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__45074 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__45075 = null;
var count__45076 = (0);
var i__45077 = (0);
while(true){
if((i__45077 < count__45076)){
var vec__45090 = chunk__45075.cljs$core$IIndexed$_nth$arity$2(null,i__45077);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45090,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45090,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__45115 = seq__45074;
var G__45116 = chunk__45075;
var G__45117 = count__45076;
var G__45118 = (i__45077 + (1));
seq__45074 = G__45115;
chunk__45075 = G__45116;
count__45076 = G__45117;
i__45077 = G__45118;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45074);
if(temp__5753__auto__){
var seq__45074__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45074__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45074__$1);
var G__45119 = cljs.core.chunk_rest(seq__45074__$1);
var G__45120 = c__4679__auto__;
var G__45121 = cljs.core.count(c__4679__auto__);
var G__45122 = (0);
seq__45074 = G__45119;
chunk__45075 = G__45120;
count__45076 = G__45121;
i__45077 = G__45122;
continue;
} else {
var vec__45101 = cljs.core.first(seq__45074__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45101,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45101,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__45149 = cljs.core.next(seq__45074__$1);
var G__45150 = null;
var G__45151 = (0);
var G__45152 = (0);
seq__45074 = G__45149;
chunk__45075 = G__45150;
count__45076 = G__45151;
i__45077 = G__45152;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__45068_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__45068_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__45069_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__45069_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__45070_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__45070_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__45071_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__45071_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__45104){
var map__45105 = p__45104;
var map__45105__$1 = cljs.core.__destructure_map(map__45105);
var svc = map__45105__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45105__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45105__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
