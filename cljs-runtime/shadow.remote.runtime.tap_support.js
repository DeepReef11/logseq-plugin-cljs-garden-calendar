goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__41023,p__41024){
var map__41026 = p__41023;
var map__41026__$1 = cljs.core.__destructure_map(map__41026);
var svc = map__41026__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41026__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41026__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41026__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__41027 = p__41024;
var map__41027__$1 = cljs.core.__destructure_map(map__41027);
var msg = map__41027__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41027__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41027__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41027__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41027__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__41035,p__41036){
var map__41039 = p__41035;
var map__41039__$1 = cljs.core.__destructure_map(map__41039);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41039__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__41040 = p__41036;
var map__41040__$1 = cljs.core.__destructure_map(map__41040);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41040__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__41043,p__41044){
var map__41046 = p__41043;
var map__41046__$1 = cljs.core.__destructure_map(map__41046);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41046__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41046__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__41047 = p__41044;
var map__41047__$1 = cljs.core.__destructure_map(map__41047);
var msg = map__41047__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41047__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__41050,tid){
var map__41052 = p__41050;
var map__41052__$1 = cljs.core.__destructure_map(map__41052);
var svc = map__41052__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41052__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__41065 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__41066 = null;
var count__41067 = (0);
var i__41068 = (0);
while(true){
if((i__41068 < count__41067)){
var vec__41080 = chunk__41066.cljs$core$IIndexed$_nth$arity$2(null,i__41068);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41080,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41080,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__41110 = seq__41065;
var G__41111 = chunk__41066;
var G__41112 = count__41067;
var G__41113 = (i__41068 + (1));
seq__41065 = G__41110;
chunk__41066 = G__41111;
count__41067 = G__41112;
i__41068 = G__41113;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41065);
if(temp__5753__auto__){
var seq__41065__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41065__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41065__$1);
var G__41115 = cljs.core.chunk_rest(seq__41065__$1);
var G__41116 = c__4679__auto__;
var G__41117 = cljs.core.count(c__4679__auto__);
var G__41118 = (0);
seq__41065 = G__41115;
chunk__41066 = G__41116;
count__41067 = G__41117;
i__41068 = G__41118;
continue;
} else {
var vec__41083 = cljs.core.first(seq__41065__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41083,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41083,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__41124 = cljs.core.next(seq__41065__$1);
var G__41125 = null;
var G__41126 = (0);
var G__41127 = (0);
seq__41065 = G__41124;
chunk__41066 = G__41125;
count__41067 = G__41126;
i__41068 = G__41127;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__41053_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__41053_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__41054_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__41054_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__41055_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__41055_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__41056_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__41056_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__41087){
var map__41088 = p__41087;
var map__41088__$1 = cljs.core.__destructure_map(map__41088);
var svc = map__41088__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41088__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41088__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
