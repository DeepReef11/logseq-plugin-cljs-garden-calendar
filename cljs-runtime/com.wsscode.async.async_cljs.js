goog.provide('com.wsscode.async.async_cljs');
goog.scope(function(){
  com.wsscode.async.async_cljs.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Check if c is a core.async channel.
 */
com.wsscode.async.async_cljs.chan_QMARK_ = (function com$wsscode$async$async_cljs$chan_QMARK_(c){
if((!((c == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.cljs$core$async$impl$protocols$ReadPort$)))){
return true;
} else {
if((!c.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,c);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,c);
}
});
/**
 * Return true if X is a js obj with the property .then available as a fn.
 */
com.wsscode.async.async_cljs.promise_QMARK_ = (function com$wsscode$async$async_cljs$promise_QMARK_(x){
try{return cljs.core.fn_QMARK_(com.wsscode.async.async_cljs.goog$module$goog$object.get(x,"then"));
}catch (e37491){var _ = e37491;
return false;
}});
/**
 * Converts promise p in a promise-chan. The response of this channel should be consumed
 *   using `consume-pair`.
 */
com.wsscode.async.async_cljs.promise__GT_chan = (function com$wsscode$async$async_cljs$promise__GT_chan(p){
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
p.then((function (p1__37494_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"success","success",1890645906),p1__37494_SHARP_], null));
}),(function (p1__37495_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__37495_SHARP_], null));
}));

return c;
});
/**
 * Consume promise channel result pair.
 */
com.wsscode.async.async_cljs.consumer_pair = (function com$wsscode$async$async_cljs$consumer_pair(resp){
if(cljs.core.contains_QMARK_(resp,new cljs.core.Keyword(null,"error","error",-978969032))){
throw new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(resp);
} else {
return new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(resp);
}
});
/**
 * Returns true if err is an error object.
 */
com.wsscode.async.async_cljs.error_QMARK_ = (function com$wsscode$async$async_cljs$error_QMARK_(err){
return (err instanceof Error);
});
/**
 * Throw error x if x is an error.
 */
com.wsscode.async.async_cljs.throw_err = (function com$wsscode$async$async_cljs$throw_err(x){
if(com.wsscode.async.async_cljs.error_QMARK_(x)){
throw x;
} else {
return x;
}
});
/**
 * Returns a channel that will respond will c, or an error after timeout-ms.
 */
com.wsscode.async.async_cljs.timeout_chan = (function com$wsscode$async$async_cljs$timeout_chan(timeout_ms,c){
var ch__37369__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__28967__auto___37798 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_37543){
var state_val_37544 = (state_37543[(1)]);
if((state_val_37544 === (7))){
var inst_37524 = [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406)];
var inst_37525 = [timeout_ms];
var inst_37526 = cljs.core.PersistentHashMap.fromArrays(inst_37524,inst_37525);
var inst_37527 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Timeout",inst_37526);
var inst_37528 = (function(){throw inst_37527})();
var state_37543__$1 = state_37543;
var statearr_37545_37799 = state_37543__$1;
(statearr_37545_37799[(2)] = inst_37528);

(statearr_37545_37799[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37544 === (1))){
var state_37543__$1 = state_37543;
var statearr_37546_37800 = state_37543__$1;
(statearr_37546_37800[(2)] = null);

(statearr_37546_37800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37544 === (4))){
var inst_37501 = (state_37543[(2)]);
var state_37543__$1 = state_37543;
var statearr_37547_37802 = state_37543__$1;
(statearr_37547_37802[(2)] = inst_37501);

(statearr_37547_37802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37544 === (6))){
var inst_37514 = (state_37543[(7)]);
var inst_37519 = (state_37543[(2)]);
var inst_37520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37519,(0),null);
var inst_37521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37519,(1),null);
var inst_37522 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37521,inst_37514);
var state_37543__$1 = (function (){var statearr_37550 = state_37543;
(statearr_37550[(8)] = inst_37520);

return statearr_37550;
})();
if(inst_37522){
var statearr_37551_37803 = state_37543__$1;
(statearr_37551_37803[(1)] = (7));

} else {
var statearr_37553_37804 = state_37543__$1;
(statearr_37553_37804[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37544 === (3))){
var inst_37534 = (state_37543[(9)]);
var inst_37534__$1 = (state_37543[(2)]);
var inst_37535 = (inst_37534__$1 == null);
var state_37543__$1 = (function (){var statearr_37556 = state_37543;
(statearr_37556[(9)] = inst_37534__$1);

return statearr_37556;
})();
if(cljs.core.truth_(inst_37535)){
var statearr_37558_37805 = state_37543__$1;
(statearr_37558_37805[(1)] = (10));

} else {
var statearr_37559_37806 = state_37543__$1;
(statearr_37559_37806[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37544 === (12))){
var inst_37541 = (state_37543[(2)]);
var state_37543__$1 = state_37543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37543__$1,inst_37541);
} else {
if((state_val_37544 === (2))){
var inst_37514 = (state_37543[(7)]);
var _ = (function (){var statearr_37562 = state_37543;
(statearr_37562[(4)] = cljs.core.cons((5),(state_37543[(4)])));

return statearr_37562;
})();
var inst_37514__$1 = cljs.core.async.timeout(timeout_ms);
var inst_37515 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37516 = [c,inst_37514__$1];
var inst_37517 = (new cljs.core.PersistentVector(null,2,(5),inst_37515,inst_37516,null));
var state_37543__$1 = (function (){var statearr_37563 = state_37543;
(statearr_37563[(7)] = inst_37514__$1);

return statearr_37563;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_37543__$1,(6),inst_37517,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_37544 === (11))){
var inst_37534 = (state_37543[(9)]);
var inst_37539 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__37369__auto__,inst_37534);
var state_37543__$1 = state_37543;
var statearr_37568_37811 = state_37543__$1;
(statearr_37568_37811[(2)] = inst_37539);

(statearr_37568_37811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37544 === (9))){
var inst_37531 = (state_37543[(2)]);
var _ = (function (){var statearr_37570 = state_37543;
(statearr_37570[(4)] = cljs.core.rest((state_37543[(4)])));

return statearr_37570;
})();
var state_37543__$1 = state_37543;
var statearr_37571_37813 = state_37543__$1;
(statearr_37571_37813[(2)] = inst_37531);

(statearr_37571_37813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37544 === (5))){
var _ = (function (){var statearr_37572 = state_37543;
(statearr_37572[(4)] = cljs.core.rest((state_37543[(4)])));

return statearr_37572;
})();
var state_37543__$1 = state_37543;
var ex37565 = (state_37543__$1[(2)]);
var statearr_37576_37815 = state_37543__$1;
(statearr_37576_37815[(5)] = ex37565);


var statearr_37577_37816 = state_37543__$1;
(statearr_37577_37816[(1)] = (4));

(statearr_37577_37816[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37544 === (10))){
var inst_37537 = cljs.core.async.close_BANG_(ch__37369__auto__);
var state_37543__$1 = state_37543;
var statearr_37579_37818 = state_37543__$1;
(statearr_37579_37818[(2)] = inst_37537);

(statearr_37579_37818[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37544 === (8))){
var inst_37520 = (state_37543[(8)]);
var state_37543__$1 = state_37543;
var statearr_37580_37819 = state_37543__$1;
(statearr_37580_37819[(2)] = inst_37520);

(statearr_37580_37819[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$async$async_cljs$timeout_chan_$_state_machine__28350__auto__ = null;
var com$wsscode$async$async_cljs$timeout_chan_$_state_machine__28350__auto____0 = (function (){
var statearr_37584 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37584[(0)] = com$wsscode$async$async_cljs$timeout_chan_$_state_machine__28350__auto__);

(statearr_37584[(1)] = (1));

return statearr_37584;
});
var com$wsscode$async$async_cljs$timeout_chan_$_state_machine__28350__auto____1 = (function (state_37543){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_37543);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e37588){var ex__28353__auto__ = e37588;
var statearr_37589_37821 = state_37543;
(statearr_37589_37821[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_37543[(4)]))){
var statearr_37590_37822 = state_37543;
(statearr_37590_37822[(1)] = cljs.core.first((state_37543[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37823 = state_37543;
state_37543 = G__37823;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
com$wsscode$async$async_cljs$timeout_chan_$_state_machine__28350__auto__ = function(state_37543){
switch(arguments.length){
case 0:
return com$wsscode$async$async_cljs$timeout_chan_$_state_machine__28350__auto____0.call(this);
case 1:
return com$wsscode$async$async_cljs$timeout_chan_$_state_machine__28350__auto____1.call(this,state_37543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$async$async_cljs$timeout_chan_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$async$async_cljs$timeout_chan_$_state_machine__28350__auto____0;
com$wsscode$async$async_cljs$timeout_chan_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$async$async_cljs$timeout_chan_$_state_machine__28350__auto____1;
return com$wsscode$async$async_cljs$timeout_chan_$_state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_37593 = f__28968__auto__();
(statearr_37593[(6)] = c__28967__auto___37798);

return statearr_37593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
}));


return ch__37369__auto__;
});
com.wsscode.async.async_cljs.pulling_retry_STAR_ = (function com$wsscode$async$async_cljs$pulling_retry_STAR_(options,f){
var options_SINGLEQUOTE_ = ((cljs.core.map_QMARK_(options))?options:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.async.async-cljs","done?","com.wsscode.async.async-cljs/done?",-143294146),options], null));
var map__37601 = options_SINGLEQUOTE_;
var map__37601__$1 = cljs.core.__destructure_map(map__37601);
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37601__$1,new cljs.core.Keyword("com.wsscode.async.async-cljs","done?","com.wsscode.async.async-cljs/done?",-143294146));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37601__$1,new cljs.core.Keyword("com.wsscode.async.async-cljs","timeout","com.wsscode.async.async-cljs/timeout",-2054846554),(2000));
var retry_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37601__$1,new cljs.core.Keyword("com.wsscode.async.async-cljs","retry-ms","com.wsscode.async.async-cljs/retry-ms",-1284672644),(10));
var _STAR_stop_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var res = com.wsscode.async.async_cljs.timeout_chan(timeout,(function (){var ch__37369__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__28967__auto___37825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_37683){
var state_val_37685 = (state_37683[(1)]);
if((state_val_37685 === (7))){
var inst_37663 = (state_37683[(2)]);
var _ = (function (){var statearr_37702 = state_37683;
(statearr_37702[(4)] = cljs.core.rest((state_37683[(4)])));

return statearr_37702;
})();
var state_37683__$1 = state_37683;
var statearr_37703_37827 = state_37683__$1;
(statearr_37703_37827[(2)] = inst_37663);

(statearr_37703_37827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (20))){
var state_37683__$1 = state_37683;
var statearr_37704_37828 = state_37683__$1;
(statearr_37704_37828[(2)] = null);

(statearr_37704_37828[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (27))){
var inst_37666 = (state_37683[(7)]);
var inst_37672 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__37369__auto__,inst_37666);
var state_37683__$1 = state_37683;
var statearr_37708_37829 = state_37683__$1;
(statearr_37708_37829[(2)] = inst_37672);

(statearr_37708_37829[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (1))){
var state_37683__$1 = state_37683;
var statearr_37710_37830 = state_37683__$1;
(statearr_37710_37830[(2)] = null);

(statearr_37710_37830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (24))){
var inst_37659 = (state_37683[(2)]);
var state_37683__$1 = state_37683;
var statearr_37712_37832 = state_37683__$1;
(statearr_37712_37832[(2)] = inst_37659);

(statearr_37712_37832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (4))){
var inst_37607 = (state_37683[(2)]);
var state_37683__$1 = state_37683;
var statearr_37713_37833 = state_37683__$1;
(statearr_37713_37833[(2)] = inst_37607);

(statearr_37713_37833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (15))){
var inst_37622 = (state_37683[(8)]);
var inst_37636 = com.wsscode.async.async_cljs.promise__GT_chan(inst_37622);
var state_37683__$1 = state_37683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37683__$1,(18),inst_37636);
} else {
if((state_val_37685 === (21))){
var inst_37645 = (state_37683[(2)]);
var state_37683__$1 = state_37683;
var statearr_37718_37834 = state_37683__$1;
(statearr_37718_37834[(2)] = inst_37645);

(statearr_37718_37834[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (13))){
var inst_37649 = (state_37683[(9)]);
var inst_37649__$1 = (state_37683[(2)]);
var inst_37651 = (done_QMARK_.cljs$core$IFn$_invoke$arity$1 ? done_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_37649__$1) : done_QMARK_.call(null,inst_37649__$1));
var state_37683__$1 = (function (){var statearr_37719 = state_37683;
(statearr_37719[(9)] = inst_37649__$1);

return statearr_37719;
})();
if(cljs.core.truth_(inst_37651)){
var statearr_37720_37835 = state_37683__$1;
(statearr_37720_37835[(1)] = (22));

} else {
var statearr_37721_37836 = state_37683__$1;
(statearr_37721_37836[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (22))){
var inst_37649 = (state_37683[(9)]);
var state_37683__$1 = state_37683;
var statearr_37723_37837 = state_37683__$1;
(statearr_37723_37837[(2)] = inst_37649);

(statearr_37723_37837[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (6))){
var inst_37619 = cljs.core.deref(_STAR_stop_QMARK_);
var state_37683__$1 = state_37683;
if(cljs.core.truth_(inst_37619)){
var statearr_37725_37838 = state_37683__$1;
(statearr_37725_37838[(1)] = (8));

} else {
var statearr_37727_37839 = state_37683__$1;
(statearr_37727_37839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (28))){
var inst_37675 = (state_37683[(2)]);
var state_37683__$1 = state_37683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37683__$1,inst_37675);
} else {
if((state_val_37685 === (25))){
var inst_37656 = (state_37683[(2)]);
var state_37683__$1 = (function (){var statearr_37730 = state_37683;
(statearr_37730[(10)] = inst_37656);

return statearr_37730;
})();
var statearr_37732_37841 = state_37683__$1;
(statearr_37732_37841[(2)] = null);

(statearr_37732_37841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (17))){
var inst_37647 = (state_37683[(2)]);
var state_37683__$1 = state_37683;
var statearr_37734_37844 = state_37683__$1;
(statearr_37734_37844[(2)] = inst_37647);

(statearr_37734_37844[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (3))){
var inst_37666 = (state_37683[(7)]);
var inst_37666__$1 = (state_37683[(2)]);
var inst_37667 = (inst_37666__$1 == null);
var state_37683__$1 = (function (){var statearr_37736 = state_37683;
(statearr_37736[(7)] = inst_37666__$1);

return statearr_37736;
})();
if(cljs.core.truth_(inst_37667)){
var statearr_37738_37846 = state_37683__$1;
(statearr_37738_37846[(1)] = (26));

} else {
var statearr_37739_37847 = state_37683__$1;
(statearr_37739_37847[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (12))){
var inst_37622 = (state_37683[(8)]);
var inst_37633 = com.wsscode.async.async_cljs.promise_QMARK_(inst_37622);
var state_37683__$1 = state_37683;
if(cljs.core.truth_(inst_37633)){
var statearr_37741_37848 = state_37683__$1;
(statearr_37741_37848[(1)] = (15));

} else {
var statearr_37744_37849 = state_37683__$1;
(statearr_37744_37849[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (2))){
var _ = (function (){var statearr_37745 = state_37683;
(statearr_37745[(4)] = cljs.core.cons((5),(state_37683[(4)])));

return statearr_37745;
})();
var state_37683__$1 = state_37683;
var statearr_37746_37850 = state_37683__$1;
(statearr_37746_37850[(2)] = null);

(statearr_37746_37850[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (23))){
var inst_37654 = cljs.core.async.timeout(retry_ms);
var state_37683__$1 = state_37683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37683__$1,(25),inst_37654);
} else {
if((state_val_37685 === (19))){
var inst_37622 = (state_37683[(8)]);
var state_37683__$1 = state_37683;
var statearr_37747_37851 = state_37683__$1;
(statearr_37747_37851[(2)] = inst_37622);

(statearr_37747_37851[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (11))){
var inst_37622 = (state_37683[(8)]);
var state_37683__$1 = state_37683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37683__$1,(14),inst_37622);
} else {
if((state_val_37685 === (9))){
var inst_37622 = (state_37683[(8)]);
var inst_37622__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_37623 = com.wsscode.async.async_cljs.chan_QMARK_(inst_37622__$1);
var state_37683__$1 = (function (){var statearr_37753 = state_37683;
(statearr_37753[(8)] = inst_37622__$1);

return statearr_37753;
})();
if(inst_37623){
var statearr_37754_37852 = state_37683__$1;
(statearr_37754_37852[(1)] = (11));

} else {
var statearr_37755_37853 = state_37683__$1;
(statearr_37755_37853[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (5))){
var _ = (function (){var statearr_37756 = state_37683;
(statearr_37756[(4)] = cljs.core.rest((state_37683[(4)])));

return statearr_37756;
})();
var state_37683__$1 = state_37683;
var ex37749 = (state_37683__$1[(2)]);
var statearr_37757_37856 = state_37683__$1;
(statearr_37757_37856[(5)] = ex37749);


var statearr_37758_37857 = state_37683__$1;
(statearr_37758_37857[(1)] = (4));

(statearr_37758_37857[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (14))){
var inst_37629 = (state_37683[(2)]);
var inst_37630 = com.wsscode.async.async_cljs.throw_err(inst_37629);
var state_37683__$1 = state_37683;
var statearr_37763_37859 = state_37683__$1;
(statearr_37763_37859[(2)] = inst_37630);

(statearr_37763_37859[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (26))){
var inst_37670 = cljs.core.async.close_BANG_(ch__37369__auto__);
var state_37683__$1 = state_37683;
var statearr_37764_37860 = state_37683__$1;
(statearr_37764_37860[(2)] = inst_37670);

(statearr_37764_37860[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (16))){
var state_37683__$1 = state_37683;
var statearr_37765_37863 = state_37683__$1;
(statearr_37765_37863[(1)] = (19));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (10))){
var inst_37661 = (state_37683[(2)]);
var state_37683__$1 = state_37683;
var statearr_37767_37864 = state_37683__$1;
(statearr_37767_37864[(2)] = inst_37661);

(statearr_37767_37864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (18))){
var inst_37638 = (state_37683[(2)]);
var inst_37639 = com.wsscode.async.async_cljs.consumer_pair(inst_37638);
var state_37683__$1 = state_37683;
var statearr_37768_37867 = state_37683__$1;
(statearr_37768_37867[(2)] = inst_37639);

(statearr_37768_37867[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37685 === (8))){
var state_37683__$1 = state_37683;
var statearr_37769_37868 = state_37683__$1;
(statearr_37769_37868[(2)] = null);

(statearr_37769_37868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto__ = null;
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto____0 = (function (){
var statearr_37770 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37770[(0)] = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto__);

(statearr_37770[(1)] = (1));

return statearr_37770;
});
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto____1 = (function (state_37683){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_37683);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e37771){var ex__28353__auto__ = e37771;
var statearr_37772_37869 = state_37683;
(statearr_37772_37869[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_37683[(4)]))){
var statearr_37774_37870 = state_37683;
(statearr_37774_37870[(1)] = cljs.core.first((state_37683[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37871 = state_37683;
state_37683 = G__37871;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto__ = function(state_37683){
switch(arguments.length){
case 0:
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto____0.call(this);
case 1:
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto____1.call(this,state_37683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto____0;
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto____1;
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_37778 = f__28968__auto__();
(statearr_37778[(6)] = c__28967__auto___37825);

return statearr_37778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
}));


return ch__37369__auto__;
})());
var c__28967__auto___37873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_37784){
var state_val_37785 = (state_37784[(1)]);
if((state_val_37785 === (1))){
var inst_37779 = cljs.core.async.timeout(timeout);
var state_37784__$1 = state_37784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37784__$1,(2),inst_37779);
} else {
if((state_val_37785 === (2))){
var inst_37781 = (state_37784[(2)]);
var inst_37782 = cljs.core.reset_BANG_(_STAR_stop_QMARK_,true);
var state_37784__$1 = (function (){var statearr_37787 = state_37784;
(statearr_37787[(7)] = inst_37781);

return statearr_37787;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37784__$1,inst_37782);
} else {
return null;
}
}
});
return (function() {
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto__ = null;
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto____0 = (function (){
var statearr_37789 = [null,null,null,null,null,null,null,null];
(statearr_37789[(0)] = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto__);

(statearr_37789[(1)] = (1));

return statearr_37789;
});
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto____1 = (function (state_37784){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_37784);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e37790){var ex__28353__auto__ = e37790;
var statearr_37791_37880 = state_37784;
(statearr_37791_37880[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_37784[(4)]))){
var statearr_37792_37881 = state_37784;
(statearr_37792_37881[(1)] = cljs.core.first((state_37784[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37882 = state_37784;
state_37784 = G__37882;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto__ = function(state_37784){
switch(arguments.length){
case 0:
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto____0.call(this);
case 1:
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto____1.call(this,state_37784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto____0;
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto____1;
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_37794 = f__28968__auto__();
(statearr_37794[(6)] = c__28967__auto___37873);

return statearr_37794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
}));


return res;
});

//# sourceMappingURL=com.wsscode.async.async_cljs.js.map
