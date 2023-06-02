goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__34604,p__34605){
var map__34606 = p__34604;
var map__34606__$1 = cljs.core.__destructure_map(map__34606);
var svc = map__34606__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34606__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34606__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34606__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__34607 = p__34605;
var map__34607__$1 = cljs.core.__destructure_map(map__34607);
var msg = map__34607__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34607__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34607__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34607__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34607__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__34613,p__34614){
var map__34615 = p__34613;
var map__34615__$1 = cljs.core.__destructure_map(map__34615);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34615__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__34616 = p__34614;
var map__34616__$1 = cljs.core.__destructure_map(map__34616);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34616__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__34619,p__34620){
var map__34621 = p__34619;
var map__34621__$1 = cljs.core.__destructure_map(map__34621);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34621__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34621__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__34622 = p__34620;
var map__34622__$1 = cljs.core.__destructure_map(map__34622);
var msg = map__34622__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34622__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__34625,tid){
var map__34626 = p__34625;
var map__34626__$1 = cljs.core.__destructure_map(map__34626);
var svc = map__34626__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34626__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__34682 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__34683 = null;
var count__34684 = (0);
var i__34685 = (0);
while(true){
if((i__34685 < count__34684)){
var vec__34741 = chunk__34683.cljs$core$IIndexed$_nth$arity$2(null,i__34685);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34741,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34741,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__34824 = seq__34682;
var G__34825 = chunk__34683;
var G__34826 = count__34684;
var G__34827 = (i__34685 + (1));
seq__34682 = G__34824;
chunk__34683 = G__34825;
count__34684 = G__34826;
i__34685 = G__34827;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34682);
if(temp__5753__auto__){
var seq__34682__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34682__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34682__$1);
var G__34828 = cljs.core.chunk_rest(seq__34682__$1);
var G__34829 = c__4679__auto__;
var G__34830 = cljs.core.count(c__4679__auto__);
var G__34831 = (0);
seq__34682 = G__34828;
chunk__34683 = G__34829;
count__34684 = G__34830;
i__34685 = G__34831;
continue;
} else {
var vec__34770 = cljs.core.first(seq__34682__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34770,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34770,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__34844 = cljs.core.next(seq__34682__$1);
var G__34845 = null;
var G__34846 = (0);
var G__34847 = (0);
seq__34682 = G__34844;
chunk__34683 = G__34845;
count__34684 = G__34846;
i__34685 = G__34847;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__34627_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__34627_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__34628_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__34628_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__34629_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__34629_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__34631_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__34631_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__34795){
var map__34796 = p__34795;
var map__34796__$1 = cljs.core.__destructure_map(map__34796);
var svc = map__34796__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34796__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34796__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
