goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__43677,p__43678){
var map__43679 = p__43677;
var map__43679__$1 = cljs.core.__destructure_map(map__43679);
var svc = map__43679__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43679__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43679__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43679__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43680 = p__43678;
var map__43680__$1 = cljs.core.__destructure_map(map__43680);
var msg = map__43680__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43680__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43680__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43680__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43680__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__43691,p__43692){
var map__43695 = p__43691;
var map__43695__$1 = cljs.core.__destructure_map(map__43695);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43695__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__43696 = p__43692;
var map__43696__$1 = cljs.core.__destructure_map(map__43696);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43696__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__43700,p__43701){
var map__43703 = p__43700;
var map__43703__$1 = cljs.core.__destructure_map(map__43703);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43703__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43703__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43704 = p__43701;
var map__43704__$1 = cljs.core.__destructure_map(map__43704);
var msg = map__43704__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43704__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__43712,tid){
var map__43713 = p__43712;
var map__43713__$1 = cljs.core.__destructure_map(map__43713);
var svc = map__43713__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43713__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__43728 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__43729 = null;
var count__43730 = (0);
var i__43731 = (0);
while(true){
if((i__43731 < count__43730)){
var vec__43751 = chunk__43729.cljs$core$IIndexed$_nth$arity$2(null,i__43731);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43751,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43751,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__43786 = seq__43728;
var G__43787 = chunk__43729;
var G__43788 = count__43730;
var G__43789 = (i__43731 + (1));
seq__43728 = G__43786;
chunk__43729 = G__43787;
count__43730 = G__43788;
i__43731 = G__43789;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43728);
if(temp__5753__auto__){
var seq__43728__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43728__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43728__$1);
var G__43790 = cljs.core.chunk_rest(seq__43728__$1);
var G__43791 = c__4679__auto__;
var G__43792 = cljs.core.count(c__4679__auto__);
var G__43793 = (0);
seq__43728 = G__43790;
chunk__43729 = G__43791;
count__43730 = G__43792;
i__43731 = G__43793;
continue;
} else {
var vec__43760 = cljs.core.first(seq__43728__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43760,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43760,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__43794 = cljs.core.next(seq__43728__$1);
var G__43795 = null;
var G__43796 = (0);
var G__43797 = (0);
seq__43728 = G__43794;
chunk__43729 = G__43795;
count__43730 = G__43796;
i__43731 = G__43797;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__43719_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__43719_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__43720_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__43720_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__43721_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__43721_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__43722_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__43722_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__43769){
var map__43770 = p__43769;
var map__43770__$1 = cljs.core.__destructure_map(map__43770);
var svc = map__43770__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43770__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43770__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
