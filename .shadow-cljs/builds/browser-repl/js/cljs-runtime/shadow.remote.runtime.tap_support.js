goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__40588,p__40589){
var map__40590 = p__40588;
var map__40590__$1 = cljs.core.__destructure_map(map__40590);
var svc = map__40590__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40590__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40590__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40590__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40591 = p__40589;
var map__40591__$1 = cljs.core.__destructure_map(map__40591);
var msg = map__40591__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40591__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40591__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40591__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40591__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__40598,p__40599){
var map__40601 = p__40598;
var map__40601__$1 = cljs.core.__destructure_map(map__40601);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40601__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__40602 = p__40599;
var map__40602__$1 = cljs.core.__destructure_map(map__40602);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40602__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__40610,p__40611){
var map__40612 = p__40610;
var map__40612__$1 = cljs.core.__destructure_map(map__40612);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40612__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40612__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40613 = p__40611;
var map__40613__$1 = cljs.core.__destructure_map(map__40613);
var msg = map__40613__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40613__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__40617,tid){
var map__40618 = p__40617;
var map__40618__$1 = cljs.core.__destructure_map(map__40618);
var svc = map__40618__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40618__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__40628 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__40629 = null;
var count__40630 = (0);
var i__40631 = (0);
while(true){
if((i__40631 < count__40630)){
var vec__40648 = chunk__40629.cljs$core$IIndexed$_nth$arity$2(null,i__40631);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40648,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40648,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40665 = seq__40628;
var G__40666 = chunk__40629;
var G__40667 = count__40630;
var G__40668 = (i__40631 + (1));
seq__40628 = G__40665;
chunk__40629 = G__40666;
count__40630 = G__40667;
i__40631 = G__40668;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40628);
if(temp__5753__auto__){
var seq__40628__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40628__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__40628__$1);
var G__40669 = cljs.core.chunk_rest(seq__40628__$1);
var G__40670 = c__4679__auto__;
var G__40671 = cljs.core.count(c__4679__auto__);
var G__40672 = (0);
seq__40628 = G__40669;
chunk__40629 = G__40670;
count__40630 = G__40671;
i__40631 = G__40672;
continue;
} else {
var vec__40653 = cljs.core.first(seq__40628__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40653,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40653,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40673 = cljs.core.next(seq__40628__$1);
var G__40674 = null;
var G__40675 = (0);
var G__40676 = (0);
seq__40628 = G__40673;
chunk__40629 = G__40674;
count__40630 = G__40675;
i__40631 = G__40676;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__40619_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__40619_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__40620_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__40620_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__40621_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__40621_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__40622_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__40622_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__40661){
var map__40662 = p__40661;
var map__40662__$1 = cljs.core.__destructure_map(map__40662);
var svc = map__40662__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40662__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40662__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
