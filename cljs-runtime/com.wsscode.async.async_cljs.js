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
}catch (e27374){var _ = e27374;
return false;
}});
/**
 * Converts promise p in a promise-chan. The response of this channel should be consumed
 *   using `consume-pair`.
 */
com.wsscode.async.async_cljs.promise__GT_chan = (function com$wsscode$async$async_cljs$promise__GT_chan(p){
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
p.then((function (p1__27375_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"success","success",1890645906),p1__27375_SHARP_], null));
}),(function (p1__27376_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__27376_SHARP_], null));
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
var ch__27275__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__26210__auto___27558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26211__auto__ = (function (){var switch__26046__auto__ = (function (state_27415){
var state_val_27416 = (state_27415[(1)]);
if((state_val_27416 === (7))){
var inst_27396 = [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406)];
var inst_27397 = [timeout_ms];
var inst_27398 = cljs.core.PersistentHashMap.fromArrays(inst_27396,inst_27397);
var inst_27399 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Timeout",inst_27398);
var inst_27400 = (function(){throw inst_27399})();
var state_27415__$1 = state_27415;
var statearr_27417_27559 = state_27415__$1;
(statearr_27417_27559[(2)] = inst_27400);

(statearr_27417_27559[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (1))){
var state_27415__$1 = state_27415;
var statearr_27418_27560 = state_27415__$1;
(statearr_27418_27560[(2)] = null);

(statearr_27418_27560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (4))){
var inst_27377 = (state_27415[(2)]);
var state_27415__$1 = state_27415;
var statearr_27419_27561 = state_27415__$1;
(statearr_27419_27561[(2)] = inst_27377);

(statearr_27419_27561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (6))){
var inst_27386 = (state_27415[(7)]);
var inst_27391 = (state_27415[(2)]);
var inst_27392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27391,(0),null);
var inst_27393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27391,(1),null);
var inst_27394 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27393,inst_27386);
var state_27415__$1 = (function (){var statearr_27420 = state_27415;
(statearr_27420[(8)] = inst_27392);

return statearr_27420;
})();
if(inst_27394){
var statearr_27421_27562 = state_27415__$1;
(statearr_27421_27562[(1)] = (7));

} else {
var statearr_27422_27563 = state_27415__$1;
(statearr_27422_27563[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (3))){
var inst_27406 = (state_27415[(9)]);
var inst_27406__$1 = (state_27415[(2)]);
var inst_27407 = (inst_27406__$1 == null);
var state_27415__$1 = (function (){var statearr_27423 = state_27415;
(statearr_27423[(9)] = inst_27406__$1);

return statearr_27423;
})();
if(cljs.core.truth_(inst_27407)){
var statearr_27424_27564 = state_27415__$1;
(statearr_27424_27564[(1)] = (10));

} else {
var statearr_27425_27565 = state_27415__$1;
(statearr_27425_27565[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (12))){
var inst_27413 = (state_27415[(2)]);
var state_27415__$1 = state_27415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27415__$1,inst_27413);
} else {
if((state_val_27416 === (2))){
var inst_27386 = (state_27415[(7)]);
var _ = (function (){var statearr_27426 = state_27415;
(statearr_27426[(4)] = cljs.core.cons((5),(state_27415[(4)])));

return statearr_27426;
})();
var inst_27386__$1 = cljs.core.async.timeout(timeout_ms);
var inst_27387 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27388 = [c,inst_27386__$1];
var inst_27389 = (new cljs.core.PersistentVector(null,2,(5),inst_27387,inst_27388,null));
var state_27415__$1 = (function (){var statearr_27427 = state_27415;
(statearr_27427[(7)] = inst_27386__$1);

return statearr_27427;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_27415__$1,(6),inst_27389,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_27416 === (11))){
var inst_27406 = (state_27415[(9)]);
var inst_27411 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__27275__auto__,inst_27406);
var state_27415__$1 = state_27415;
var statearr_27429_27566 = state_27415__$1;
(statearr_27429_27566[(2)] = inst_27411);

(statearr_27429_27566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (9))){
var inst_27403 = (state_27415[(2)]);
var _ = (function (){var statearr_27430 = state_27415;
(statearr_27430[(4)] = cljs.core.rest((state_27415[(4)])));

return statearr_27430;
})();
var state_27415__$1 = state_27415;
var statearr_27431_27567 = state_27415__$1;
(statearr_27431_27567[(2)] = inst_27403);

(statearr_27431_27567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (5))){
var _ = (function (){var statearr_27432 = state_27415;
(statearr_27432[(4)] = cljs.core.rest((state_27415[(4)])));

return statearr_27432;
})();
var state_27415__$1 = state_27415;
var ex27428 = (state_27415__$1[(2)]);
var statearr_27433_27568 = state_27415__$1;
(statearr_27433_27568[(5)] = ex27428);


var statearr_27434_27569 = state_27415__$1;
(statearr_27434_27569[(1)] = (4));

(statearr_27434_27569[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (10))){
var inst_27409 = cljs.core.async.close_BANG_(ch__27275__auto__);
var state_27415__$1 = state_27415;
var statearr_27435_27570 = state_27415__$1;
(statearr_27435_27570[(2)] = inst_27409);

(statearr_27435_27570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (8))){
var inst_27392 = (state_27415[(8)]);
var state_27415__$1 = state_27415;
var statearr_27436_27571 = state_27415__$1;
(statearr_27436_27571[(2)] = inst_27392);

(statearr_27436_27571[(1)] = (9));


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
var com$wsscode$async$async_cljs$timeout_chan_$_state_machine__26047__auto__ = null;
var com$wsscode$async$async_cljs$timeout_chan_$_state_machine__26047__auto____0 = (function (){
var statearr_27437 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27437[(0)] = com$wsscode$async$async_cljs$timeout_chan_$_state_machine__26047__auto__);

(statearr_27437[(1)] = (1));

return statearr_27437;
});
var com$wsscode$async$async_cljs$timeout_chan_$_state_machine__26047__auto____1 = (function (state_27415){
while(true){
var ret_value__26048__auto__ = (function (){try{while(true){
var result__26049__auto__ = switch__26046__auto__(state_27415);
if(cljs.core.keyword_identical_QMARK_(result__26049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26049__auto__;
}
break;
}
}catch (e27438){var ex__26050__auto__ = e27438;
var statearr_27439_27572 = state_27415;
(statearr_27439_27572[(2)] = ex__26050__auto__);


if(cljs.core.seq((state_27415[(4)]))){
var statearr_27440_27573 = state_27415;
(statearr_27440_27573[(1)] = cljs.core.first((state_27415[(4)])));

} else {
throw ex__26050__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27574 = state_27415;
state_27415 = G__27574;
continue;
} else {
return ret_value__26048__auto__;
}
break;
}
});
com$wsscode$async$async_cljs$timeout_chan_$_state_machine__26047__auto__ = function(state_27415){
switch(arguments.length){
case 0:
return com$wsscode$async$async_cljs$timeout_chan_$_state_machine__26047__auto____0.call(this);
case 1:
return com$wsscode$async$async_cljs$timeout_chan_$_state_machine__26047__auto____1.call(this,state_27415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$async$async_cljs$timeout_chan_$_state_machine__26047__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$async$async_cljs$timeout_chan_$_state_machine__26047__auto____0;
com$wsscode$async$async_cljs$timeout_chan_$_state_machine__26047__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$async$async_cljs$timeout_chan_$_state_machine__26047__auto____1;
return com$wsscode$async$async_cljs$timeout_chan_$_state_machine__26047__auto__;
})()
})();
var state__26212__auto__ = (function (){var statearr_27441 = f__26211__auto__();
(statearr_27441[(6)] = c__26210__auto___27558);

return statearr_27441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26212__auto__);
}));


return ch__27275__auto__;
});
com.wsscode.async.async_cljs.pulling_retry_STAR_ = (function com$wsscode$async$async_cljs$pulling_retry_STAR_(options,f){
var options_SINGLEQUOTE_ = ((cljs.core.map_QMARK_(options))?options:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.async.async-cljs","done?","com.wsscode.async.async-cljs/done?",-143294146),options], null));
var map__27442 = options_SINGLEQUOTE_;
var map__27442__$1 = cljs.core.__destructure_map(map__27442);
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27442__$1,new cljs.core.Keyword("com.wsscode.async.async-cljs","done?","com.wsscode.async.async-cljs/done?",-143294146));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27442__$1,new cljs.core.Keyword("com.wsscode.async.async-cljs","timeout","com.wsscode.async.async-cljs/timeout",-2054846554),(2000));
var retry_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27442__$1,new cljs.core.Keyword("com.wsscode.async.async-cljs","retry-ms","com.wsscode.async.async-cljs/retry-ms",-1284672644),(10));
var _STAR_stop_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var res = com.wsscode.async.async_cljs.timeout_chan(timeout,(function (){var ch__27275__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__26210__auto___27575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26211__auto__ = (function (){var switch__26046__auto__ = (function (state_27499){
var state_val_27500 = (state_27499[(1)]);
if((state_val_27500 === (7))){
var inst_27487 = (state_27499[(2)]);
var _ = (function (){var statearr_27501 = state_27499;
(statearr_27501[(4)] = cljs.core.rest((state_27499[(4)])));

return statearr_27501;
})();
var state_27499__$1 = state_27499;
var statearr_27502_27576 = state_27499__$1;
(statearr_27502_27576[(2)] = inst_27487);

(statearr_27502_27576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (20))){
var state_27499__$1 = state_27499;
var statearr_27503_27577 = state_27499__$1;
(statearr_27503_27577[(2)] = null);

(statearr_27503_27577[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (27))){
var inst_27490 = (state_27499[(7)]);
var inst_27495 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__27275__auto__,inst_27490);
var state_27499__$1 = state_27499;
var statearr_27504_27578 = state_27499__$1;
(statearr_27504_27578[(2)] = inst_27495);

(statearr_27504_27578[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (1))){
var state_27499__$1 = state_27499;
var statearr_27505_27579 = state_27499__$1;
(statearr_27505_27579[(2)] = null);

(statearr_27505_27579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (24))){
var inst_27483 = (state_27499[(2)]);
var state_27499__$1 = state_27499;
var statearr_27506_27580 = state_27499__$1;
(statearr_27506_27580[(2)] = inst_27483);

(statearr_27506_27580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (4))){
var inst_27443 = (state_27499[(2)]);
var state_27499__$1 = state_27499;
var statearr_27507_27581 = state_27499__$1;
(statearr_27507_27581[(2)] = inst_27443);

(statearr_27507_27581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (15))){
var inst_27453 = (state_27499[(8)]);
var inst_27462 = com.wsscode.async.async_cljs.promise__GT_chan(inst_27453);
var state_27499__$1 = state_27499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27499__$1,(18),inst_27462);
} else {
if((state_val_27500 === (21))){
var inst_27470 = (state_27499[(2)]);
var state_27499__$1 = state_27499;
var statearr_27508_27582 = state_27499__$1;
(statearr_27508_27582[(2)] = inst_27470);

(statearr_27508_27582[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (13))){
var inst_27474 = (state_27499[(9)]);
var inst_27474__$1 = (state_27499[(2)]);
var inst_27475 = (done_QMARK_.cljs$core$IFn$_invoke$arity$1 ? done_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_27474__$1) : done_QMARK_.call(null,inst_27474__$1));
var state_27499__$1 = (function (){var statearr_27509 = state_27499;
(statearr_27509[(9)] = inst_27474__$1);

return statearr_27509;
})();
if(cljs.core.truth_(inst_27475)){
var statearr_27510_27583 = state_27499__$1;
(statearr_27510_27583[(1)] = (22));

} else {
var statearr_27511_27584 = state_27499__$1;
(statearr_27511_27584[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (22))){
var inst_27474 = (state_27499[(9)]);
var state_27499__$1 = state_27499;
var statearr_27512_27585 = state_27499__$1;
(statearr_27512_27585[(2)] = inst_27474);

(statearr_27512_27585[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (6))){
var inst_27450 = cljs.core.deref(_STAR_stop_QMARK_);
var state_27499__$1 = state_27499;
if(cljs.core.truth_(inst_27450)){
var statearr_27513_27586 = state_27499__$1;
(statearr_27513_27586[(1)] = (8));

} else {
var statearr_27514_27587 = state_27499__$1;
(statearr_27514_27587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (28))){
var inst_27497 = (state_27499[(2)]);
var state_27499__$1 = state_27499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27499__$1,inst_27497);
} else {
if((state_val_27500 === (25))){
var inst_27480 = (state_27499[(2)]);
var state_27499__$1 = (function (){var statearr_27515 = state_27499;
(statearr_27515[(10)] = inst_27480);

return statearr_27515;
})();
var statearr_27516_27588 = state_27499__$1;
(statearr_27516_27588[(2)] = null);

(statearr_27516_27588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (17))){
var inst_27472 = (state_27499[(2)]);
var state_27499__$1 = state_27499;
var statearr_27517_27589 = state_27499__$1;
(statearr_27517_27589[(2)] = inst_27472);

(statearr_27517_27589[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (3))){
var inst_27490 = (state_27499[(7)]);
var inst_27490__$1 = (state_27499[(2)]);
var inst_27491 = (inst_27490__$1 == null);
var state_27499__$1 = (function (){var statearr_27518 = state_27499;
(statearr_27518[(7)] = inst_27490__$1);

return statearr_27518;
})();
if(cljs.core.truth_(inst_27491)){
var statearr_27519_27590 = state_27499__$1;
(statearr_27519_27590[(1)] = (26));

} else {
var statearr_27520_27591 = state_27499__$1;
(statearr_27520_27591[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (12))){
var inst_27453 = (state_27499[(8)]);
var inst_27460 = com.wsscode.async.async_cljs.promise_QMARK_(inst_27453);
var state_27499__$1 = state_27499;
if(cljs.core.truth_(inst_27460)){
var statearr_27521_27592 = state_27499__$1;
(statearr_27521_27592[(1)] = (15));

} else {
var statearr_27522_27593 = state_27499__$1;
(statearr_27522_27593[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (2))){
var _ = (function (){var statearr_27523 = state_27499;
(statearr_27523[(4)] = cljs.core.cons((5),(state_27499[(4)])));

return statearr_27523;
})();
var state_27499__$1 = state_27499;
var statearr_27524_27594 = state_27499__$1;
(statearr_27524_27594[(2)] = null);

(statearr_27524_27594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (23))){
var inst_27478 = cljs.core.async.timeout(retry_ms);
var state_27499__$1 = state_27499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27499__$1,(25),inst_27478);
} else {
if((state_val_27500 === (19))){
var inst_27453 = (state_27499[(8)]);
var state_27499__$1 = state_27499;
var statearr_27525_27595 = state_27499__$1;
(statearr_27525_27595[(2)] = inst_27453);

(statearr_27525_27595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (11))){
var inst_27453 = (state_27499[(8)]);
var state_27499__$1 = state_27499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27499__$1,(14),inst_27453);
} else {
if((state_val_27500 === (9))){
var inst_27453 = (state_27499[(8)]);
var inst_27453__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_27454 = com.wsscode.async.async_cljs.chan_QMARK_(inst_27453__$1);
var state_27499__$1 = (function (){var statearr_27527 = state_27499;
(statearr_27527[(8)] = inst_27453__$1);

return statearr_27527;
})();
if(inst_27454){
var statearr_27528_27596 = state_27499__$1;
(statearr_27528_27596[(1)] = (11));

} else {
var statearr_27529_27597 = state_27499__$1;
(statearr_27529_27597[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (5))){
var _ = (function (){var statearr_27530 = state_27499;
(statearr_27530[(4)] = cljs.core.rest((state_27499[(4)])));

return statearr_27530;
})();
var state_27499__$1 = state_27499;
var ex27526 = (state_27499__$1[(2)]);
var statearr_27531_27598 = state_27499__$1;
(statearr_27531_27598[(5)] = ex27526);


var statearr_27532_27599 = state_27499__$1;
(statearr_27532_27599[(1)] = (4));

(statearr_27532_27599[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (14))){
var inst_27457 = (state_27499[(2)]);
var inst_27458 = com.wsscode.async.async_cljs.throw_err(inst_27457);
var state_27499__$1 = state_27499;
var statearr_27533_27600 = state_27499__$1;
(statearr_27533_27600[(2)] = inst_27458);

(statearr_27533_27600[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (26))){
var inst_27493 = cljs.core.async.close_BANG_(ch__27275__auto__);
var state_27499__$1 = state_27499;
var statearr_27534_27601 = state_27499__$1;
(statearr_27534_27601[(2)] = inst_27493);

(statearr_27534_27601[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (16))){
var state_27499__$1 = state_27499;
var statearr_27535_27602 = state_27499__$1;
(statearr_27535_27602[(1)] = (19));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (10))){
var inst_27485 = (state_27499[(2)]);
var state_27499__$1 = state_27499;
var statearr_27537_27603 = state_27499__$1;
(statearr_27537_27603[(2)] = inst_27485);

(statearr_27537_27603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (18))){
var inst_27464 = (state_27499[(2)]);
var inst_27465 = com.wsscode.async.async_cljs.consumer_pair(inst_27464);
var state_27499__$1 = state_27499;
var statearr_27538_27604 = state_27499__$1;
(statearr_27538_27604[(2)] = inst_27465);

(statearr_27538_27604[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (8))){
var state_27499__$1 = state_27499;
var statearr_27539_27605 = state_27499__$1;
(statearr_27539_27605[(2)] = null);

(statearr_27539_27605[(1)] = (10));


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
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto__ = null;
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto____0 = (function (){
var statearr_27540 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27540[(0)] = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto__);

(statearr_27540[(1)] = (1));

return statearr_27540;
});
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto____1 = (function (state_27499){
while(true){
var ret_value__26048__auto__ = (function (){try{while(true){
var result__26049__auto__ = switch__26046__auto__(state_27499);
if(cljs.core.keyword_identical_QMARK_(result__26049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26049__auto__;
}
break;
}
}catch (e27541){var ex__26050__auto__ = e27541;
var statearr_27542_27606 = state_27499;
(statearr_27542_27606[(2)] = ex__26050__auto__);


if(cljs.core.seq((state_27499[(4)]))){
var statearr_27543_27607 = state_27499;
(statearr_27543_27607[(1)] = cljs.core.first((state_27499[(4)])));

} else {
throw ex__26050__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27608 = state_27499;
state_27499 = G__27608;
continue;
} else {
return ret_value__26048__auto__;
}
break;
}
});
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto__ = function(state_27499){
switch(arguments.length){
case 0:
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto____0.call(this);
case 1:
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto____1.call(this,state_27499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto____0;
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto____1;
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto__;
})()
})();
var state__26212__auto__ = (function (){var statearr_27544 = f__26211__auto__();
(statearr_27544[(6)] = c__26210__auto___27575);

return statearr_27544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26212__auto__);
}));


return ch__27275__auto__;
})());
var c__26210__auto___27609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26211__auto__ = (function (){var switch__26046__auto__ = (function (state_27550){
var state_val_27551 = (state_27550[(1)]);
if((state_val_27551 === (1))){
var inst_27545 = cljs.core.async.timeout(timeout);
var state_27550__$1 = state_27550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27550__$1,(2),inst_27545);
} else {
if((state_val_27551 === (2))){
var inst_27547 = (state_27550[(2)]);
var inst_27548 = cljs.core.reset_BANG_(_STAR_stop_QMARK_,true);
var state_27550__$1 = (function (){var statearr_27552 = state_27550;
(statearr_27552[(7)] = inst_27547);

return statearr_27552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27550__$1,inst_27548);
} else {
return null;
}
}
});
return (function() {
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto__ = null;
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto____0 = (function (){
var statearr_27553 = [null,null,null,null,null,null,null,null];
(statearr_27553[(0)] = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto__);

(statearr_27553[(1)] = (1));

return statearr_27553;
});
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto____1 = (function (state_27550){
while(true){
var ret_value__26048__auto__ = (function (){try{while(true){
var result__26049__auto__ = switch__26046__auto__(state_27550);
if(cljs.core.keyword_identical_QMARK_(result__26049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26049__auto__;
}
break;
}
}catch (e27554){var ex__26050__auto__ = e27554;
var statearr_27555_27610 = state_27550;
(statearr_27555_27610[(2)] = ex__26050__auto__);


if(cljs.core.seq((state_27550[(4)]))){
var statearr_27556_27611 = state_27550;
(statearr_27556_27611[(1)] = cljs.core.first((state_27550[(4)])));

} else {
throw ex__26050__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27612 = state_27550;
state_27550 = G__27612;
continue;
} else {
return ret_value__26048__auto__;
}
break;
}
});
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto__ = function(state_27550){
switch(arguments.length){
case 0:
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto____0.call(this);
case 1:
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto____1.call(this,state_27550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto____0;
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto____1;
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__26047__auto__;
})()
})();
var state__26212__auto__ = (function (){var statearr_27557 = f__26211__auto__();
(statearr_27557[(6)] = c__26210__auto___27609);

return statearr_27557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26212__auto__);
}));


return res;
});

//# sourceMappingURL=com.wsscode.async.async_cljs.js.map
