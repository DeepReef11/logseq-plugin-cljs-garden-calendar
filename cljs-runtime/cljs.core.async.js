goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__38952 = arguments.length;
switch (G__38952) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38953 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38953 = (function (f,blockable,meta38954){
this.f = f;
this.blockable = blockable;
this.meta38954 = meta38954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38955,meta38954__$1){
var self__ = this;
var _38955__$1 = this;
return (new cljs.core.async.t_cljs$core$async38953(self__.f,self__.blockable,meta38954__$1));
}));

(cljs.core.async.t_cljs$core$async38953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38955){
var self__ = this;
var _38955__$1 = this;
return self__.meta38954;
}));

(cljs.core.async.t_cljs$core$async38953.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38953.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38953.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async38953.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async38953.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38954","meta38954",2144619329,null)], null);
}));

(cljs.core.async.t_cljs$core$async38953.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38953.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38953");

(cljs.core.async.t_cljs$core$async38953.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async38953");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38953.
 */
cljs.core.async.__GT_t_cljs$core$async38953 = (function cljs$core$async$__GT_t_cljs$core$async38953(f__$1,blockable__$1,meta38954){
return (new cljs.core.async.t_cljs$core$async38953(f__$1,blockable__$1,meta38954));
});

}

return (new cljs.core.async.t_cljs$core$async38953(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__38982 = arguments.length;
switch (G__38982) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__39011 = arguments.length;
switch (G__39011) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__39047 = arguments.length;
switch (G__39047) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_42864 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42864) : fn1.call(null,val_42864));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42864) : fn1.call(null,val_42864));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__39058 = arguments.length;
switch (G__39058) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___42873 = n;
var x_42874 = (0);
while(true){
if((x_42874 < n__4741__auto___42873)){
(a[x_42874] = x_42874);

var G__42875 = (x_42874 + (1));
x_42874 = G__42875;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39108 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39108 = (function (flag,meta39109){
this.flag = flag;
this.meta39109 = meta39109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39110,meta39109__$1){
var self__ = this;
var _39110__$1 = this;
return (new cljs.core.async.t_cljs$core$async39108(self__.flag,meta39109__$1));
}));

(cljs.core.async.t_cljs$core$async39108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39110){
var self__ = this;
var _39110__$1 = this;
return self__.meta39109;
}));

(cljs.core.async.t_cljs$core$async39108.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39108.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async39108.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39108.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async39108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39109","meta39109",-1218705649,null)], null);
}));

(cljs.core.async.t_cljs$core$async39108.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39108");

(cljs.core.async.t_cljs$core$async39108.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async39108");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39108.
 */
cljs.core.async.__GT_t_cljs$core$async39108 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39108(flag__$1,meta39109){
return (new cljs.core.async.t_cljs$core$async39108(flag__$1,meta39109));
});

}

return (new cljs.core.async.t_cljs$core$async39108(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39116 = (function (flag,cb,meta39117){
this.flag = flag;
this.cb = cb;
this.meta39117 = meta39117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39118,meta39117__$1){
var self__ = this;
var _39118__$1 = this;
return (new cljs.core.async.t_cljs$core$async39116(self__.flag,self__.cb,meta39117__$1));
}));

(cljs.core.async.t_cljs$core$async39116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39118){
var self__ = this;
var _39118__$1 = this;
return self__.meta39117;
}));

(cljs.core.async.t_cljs$core$async39116.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async39116.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async39116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39117","meta39117",1902556525,null)], null);
}));

(cljs.core.async.t_cljs$core$async39116.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39116");

(cljs.core.async.t_cljs$core$async39116.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async39116");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39116.
 */
cljs.core.async.__GT_t_cljs$core$async39116 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39116(flag__$1,cb__$1,meta39117){
return (new cljs.core.async.t_cljs$core$async39116(flag__$1,cb__$1,meta39117));
});

}

return (new cljs.core.async.t_cljs$core$async39116(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39139_SHARP_){
var G__39157 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39139_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39157) : fret.call(null,G__39157));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39140_SHARP_){
var G__39158 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39140_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39158) : fret.call(null,G__39158));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42915 = (i + (1));
i = G__42915;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___42929 = arguments.length;
var i__4865__auto___42930 = (0);
while(true){
if((i__4865__auto___42930 < len__4864__auto___42929)){
args__4870__auto__.push((arguments[i__4865__auto___42930]));

var G__42935 = (i__4865__auto___42930 + (1));
i__4865__auto___42930 = G__42935;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39171){
var map__39172 = p__39171;
var map__39172__$1 = cljs.core.__destructure_map(map__39172);
var opts = map__39172__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39166){
var G__39167 = cljs.core.first(seq39166);
var seq39166__$1 = cljs.core.next(seq39166);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39167,seq39166__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__39190 = arguments.length;
switch (G__39190) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38858__auto___42958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_39242){
var state_val_39243 = (state_39242[(1)]);
if((state_val_39243 === (7))){
var inst_39238 = (state_39242[(2)]);
var state_39242__$1 = state_39242;
var statearr_39246_42960 = state_39242__$1;
(statearr_39246_42960[(2)] = inst_39238);

(statearr_39246_42960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39243 === (1))){
var state_39242__$1 = state_39242;
var statearr_39247_42963 = state_39242__$1;
(statearr_39247_42963[(2)] = null);

(statearr_39247_42963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39243 === (4))){
var inst_39209 = (state_39242[(7)]);
var inst_39209__$1 = (state_39242[(2)]);
var inst_39216 = (inst_39209__$1 == null);
var state_39242__$1 = (function (){var statearr_39251 = state_39242;
(statearr_39251[(7)] = inst_39209__$1);

return statearr_39251;
})();
if(cljs.core.truth_(inst_39216)){
var statearr_39252_42966 = state_39242__$1;
(statearr_39252_42966[(1)] = (5));

} else {
var statearr_39253_42973 = state_39242__$1;
(statearr_39253_42973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39243 === (13))){
var state_39242__$1 = state_39242;
var statearr_39256_42975 = state_39242__$1;
(statearr_39256_42975[(2)] = null);

(statearr_39256_42975[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39243 === (6))){
var inst_39209 = (state_39242[(7)]);
var state_39242__$1 = state_39242;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39242__$1,(11),to,inst_39209);
} else {
if((state_val_39243 === (3))){
var inst_39240 = (state_39242[(2)]);
var state_39242__$1 = state_39242;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39242__$1,inst_39240);
} else {
if((state_val_39243 === (12))){
var state_39242__$1 = state_39242;
var statearr_39264_42980 = state_39242__$1;
(statearr_39264_42980[(2)] = null);

(statearr_39264_42980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39243 === (2))){
var state_39242__$1 = state_39242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39242__$1,(4),from);
} else {
if((state_val_39243 === (11))){
var inst_39225 = (state_39242[(2)]);
var state_39242__$1 = state_39242;
if(cljs.core.truth_(inst_39225)){
var statearr_39268_42983 = state_39242__$1;
(statearr_39268_42983[(1)] = (12));

} else {
var statearr_39269_42985 = state_39242__$1;
(statearr_39269_42985[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39243 === (9))){
var state_39242__$1 = state_39242;
var statearr_39271_42989 = state_39242__$1;
(statearr_39271_42989[(2)] = null);

(statearr_39271_42989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39243 === (5))){
var state_39242__$1 = state_39242;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39275_42990 = state_39242__$1;
(statearr_39275_42990[(1)] = (8));

} else {
var statearr_39276_42991 = state_39242__$1;
(statearr_39276_42991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39243 === (14))){
var inst_39236 = (state_39242[(2)]);
var state_39242__$1 = state_39242;
var statearr_39280_42992 = state_39242__$1;
(statearr_39280_42992[(2)] = inst_39236);

(statearr_39280_42992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39243 === (10))){
var inst_39222 = (state_39242[(2)]);
var state_39242__$1 = state_39242;
var statearr_39282_42993 = state_39242__$1;
(statearr_39282_42993[(2)] = inst_39222);

(statearr_39282_42993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39243 === (8))){
var inst_39219 = cljs.core.async.close_BANG_(to);
var state_39242__$1 = state_39242;
var statearr_39286_42996 = state_39242__$1;
(statearr_39286_42996[(2)] = inst_39219);

(statearr_39286_42996[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_39290 = [null,null,null,null,null,null,null,null];
(statearr_39290[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_39290[(1)] = (1));

return statearr_39290;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_39242){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_39242);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e39292){var ex__38478__auto__ = e39292;
var statearr_39296_43006 = state_39242;
(statearr_39296_43006[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_39242[(4)]))){
var statearr_39300_43007 = state_39242;
(statearr_39300_43007[(1)] = cljs.core.first((state_39242[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43012 = state_39242;
state_39242 = G__43012;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_39242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_39242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_39305 = f__38859__auto__();
(statearr_39305[(6)] = c__38858__auto___42958);

return statearr_39305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__39323){
var vec__39325 = p__39323;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39325,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39325,(1),null);
var job = vec__39325;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__38858__auto___43018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_39337){
var state_val_39338 = (state_39337[(1)]);
if((state_val_39338 === (1))){
var state_39337__$1 = state_39337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39337__$1,(2),res,v);
} else {
if((state_val_39338 === (2))){
var inst_39334 = (state_39337[(2)]);
var inst_39335 = cljs.core.async.close_BANG_(res);
var state_39337__$1 = (function (){var statearr_39359 = state_39337;
(statearr_39359[(7)] = inst_39334);

return statearr_39359;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39337__$1,inst_39335);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0 = (function (){
var statearr_39362 = [null,null,null,null,null,null,null,null];
(statearr_39362[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__);

(statearr_39362[(1)] = (1));

return statearr_39362;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1 = (function (state_39337){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_39337);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e39368){var ex__38478__auto__ = e39368;
var statearr_39370_43025 = state_39337;
(statearr_39370_43025[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_39337[(4)]))){
var statearr_39373_43026 = state_39337;
(statearr_39373_43026[(1)] = cljs.core.first((state_39337[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43027 = state_39337;
state_39337 = G__43027;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = function(state_39337){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1.call(this,state_39337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_39378 = f__38859__auto__();
(statearr_39378[(6)] = c__38858__auto___43018);

return statearr_39378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__39380){
var vec__39381 = p__39380;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39381,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39381,(1),null);
var job = vec__39381;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___43037 = n;
var __43038 = (0);
while(true){
if((__43038 < n__4741__auto___43037)){
var G__39391_43039 = type;
var G__39391_43040__$1 = (((G__39391_43039 instanceof cljs.core.Keyword))?G__39391_43039.fqn:null);
switch (G__39391_43040__$1) {
case "compute":
var c__38858__auto___43045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43038,c__38858__auto___43045,G__39391_43039,G__39391_43040__$1,n__4741__auto___43037,jobs,results,process,async){
return (function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = ((function (__43038,c__38858__auto___43045,G__39391_43039,G__39391_43040__$1,n__4741__auto___43037,jobs,results,process,async){
return (function (state_39410){
var state_val_39411 = (state_39410[(1)]);
if((state_val_39411 === (1))){
var state_39410__$1 = state_39410;
var statearr_39426_43046 = state_39410__$1;
(statearr_39426_43046[(2)] = null);

(statearr_39426_43046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39411 === (2))){
var state_39410__$1 = state_39410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39410__$1,(4),jobs);
} else {
if((state_val_39411 === (3))){
var inst_39408 = (state_39410[(2)]);
var state_39410__$1 = state_39410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39410__$1,inst_39408);
} else {
if((state_val_39411 === (4))){
var inst_39399 = (state_39410[(2)]);
var inst_39400 = process(inst_39399);
var state_39410__$1 = state_39410;
if(cljs.core.truth_(inst_39400)){
var statearr_39445_43050 = state_39410__$1;
(statearr_39445_43050[(1)] = (5));

} else {
var statearr_39454_43051 = state_39410__$1;
(statearr_39454_43051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39411 === (5))){
var state_39410__$1 = state_39410;
var statearr_39456_43055 = state_39410__$1;
(statearr_39456_43055[(2)] = null);

(statearr_39456_43055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39411 === (6))){
var state_39410__$1 = state_39410;
var statearr_39457_43056 = state_39410__$1;
(statearr_39457_43056[(2)] = null);

(statearr_39457_43056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39411 === (7))){
var inst_39405 = (state_39410[(2)]);
var state_39410__$1 = state_39410;
var statearr_39461_43060 = state_39410__$1;
(statearr_39461_43060[(2)] = inst_39405);

(statearr_39461_43060[(1)] = (3));


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
});})(__43038,c__38858__auto___43045,G__39391_43039,G__39391_43040__$1,n__4741__auto___43037,jobs,results,process,async))
;
return ((function (__43038,switch__38474__auto__,c__38858__auto___43045,G__39391_43039,G__39391_43040__$1,n__4741__auto___43037,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0 = (function (){
var statearr_39474 = [null,null,null,null,null,null,null];
(statearr_39474[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__);

(statearr_39474[(1)] = (1));

return statearr_39474;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1 = (function (state_39410){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_39410);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e39475){var ex__38478__auto__ = e39475;
var statearr_39476_43068 = state_39410;
(statearr_39476_43068[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_39410[(4)]))){
var statearr_39484_43072 = state_39410;
(statearr_39484_43072[(1)] = cljs.core.first((state_39410[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43073 = state_39410;
state_39410 = G__43073;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = function(state_39410){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1.call(this,state_39410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__;
})()
;})(__43038,switch__38474__auto__,c__38858__auto___43045,G__39391_43039,G__39391_43040__$1,n__4741__auto___43037,jobs,results,process,async))
})();
var state__38860__auto__ = (function (){var statearr_39493 = f__38859__auto__();
(statearr_39493[(6)] = c__38858__auto___43045);

return statearr_39493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
});})(__43038,c__38858__auto___43045,G__39391_43039,G__39391_43040__$1,n__4741__auto___43037,jobs,results,process,async))
);


break;
case "async":
var c__38858__auto___43078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43038,c__38858__auto___43078,G__39391_43039,G__39391_43040__$1,n__4741__auto___43037,jobs,results,process,async){
return (function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = ((function (__43038,c__38858__auto___43078,G__39391_43039,G__39391_43040__$1,n__4741__auto___43037,jobs,results,process,async){
return (function (state_39511){
var state_val_39512 = (state_39511[(1)]);
if((state_val_39512 === (1))){
var state_39511__$1 = state_39511;
var statearr_39518_43087 = state_39511__$1;
(statearr_39518_43087[(2)] = null);

(statearr_39518_43087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39512 === (2))){
var state_39511__$1 = state_39511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39511__$1,(4),jobs);
} else {
if((state_val_39512 === (3))){
var inst_39509 = (state_39511[(2)]);
var state_39511__$1 = state_39511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39511__$1,inst_39509);
} else {
if((state_val_39512 === (4))){
var inst_39499 = (state_39511[(2)]);
var inst_39500 = async(inst_39499);
var state_39511__$1 = state_39511;
if(cljs.core.truth_(inst_39500)){
var statearr_39522_43102 = state_39511__$1;
(statearr_39522_43102[(1)] = (5));

} else {
var statearr_39524_43104 = state_39511__$1;
(statearr_39524_43104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39512 === (5))){
var state_39511__$1 = state_39511;
var statearr_39526_43107 = state_39511__$1;
(statearr_39526_43107[(2)] = null);

(statearr_39526_43107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39512 === (6))){
var state_39511__$1 = state_39511;
var statearr_39534_43108 = state_39511__$1;
(statearr_39534_43108[(2)] = null);

(statearr_39534_43108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39512 === (7))){
var inst_39507 = (state_39511[(2)]);
var state_39511__$1 = state_39511;
var statearr_39536_43111 = state_39511__$1;
(statearr_39536_43111[(2)] = inst_39507);

(statearr_39536_43111[(1)] = (3));


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
});})(__43038,c__38858__auto___43078,G__39391_43039,G__39391_43040__$1,n__4741__auto___43037,jobs,results,process,async))
;
return ((function (__43038,switch__38474__auto__,c__38858__auto___43078,G__39391_43039,G__39391_43040__$1,n__4741__auto___43037,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0 = (function (){
var statearr_39543 = [null,null,null,null,null,null,null];
(statearr_39543[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__);

(statearr_39543[(1)] = (1));

return statearr_39543;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1 = (function (state_39511){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_39511);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e39546){var ex__38478__auto__ = e39546;
var statearr_39547_43118 = state_39511;
(statearr_39547_43118[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_39511[(4)]))){
var statearr_39549_43120 = state_39511;
(statearr_39549_43120[(1)] = cljs.core.first((state_39511[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43121 = state_39511;
state_39511 = G__43121;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = function(state_39511){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1.call(this,state_39511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__;
})()
;})(__43038,switch__38474__auto__,c__38858__auto___43078,G__39391_43039,G__39391_43040__$1,n__4741__auto___43037,jobs,results,process,async))
})();
var state__38860__auto__ = (function (){var statearr_39555 = f__38859__auto__();
(statearr_39555[(6)] = c__38858__auto___43078);

return statearr_39555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
});})(__43038,c__38858__auto___43078,G__39391_43039,G__39391_43040__$1,n__4741__auto___43037,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39391_43040__$1)].join('')));

}

var G__43125 = (__43038 + (1));
__43038 = G__43125;
continue;
} else {
}
break;
}

var c__38858__auto___43127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_39593){
var state_val_39594 = (state_39593[(1)]);
if((state_val_39594 === (7))){
var inst_39586 = (state_39593[(2)]);
var state_39593__$1 = state_39593;
var statearr_39608_43133 = state_39593__$1;
(statearr_39608_43133[(2)] = inst_39586);

(statearr_39608_43133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39594 === (1))){
var state_39593__$1 = state_39593;
var statearr_39613_43134 = state_39593__$1;
(statearr_39613_43134[(2)] = null);

(statearr_39613_43134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39594 === (4))){
var inst_39568 = (state_39593[(7)]);
var inst_39568__$1 = (state_39593[(2)]);
var inst_39569 = (inst_39568__$1 == null);
var state_39593__$1 = (function (){var statearr_39629 = state_39593;
(statearr_39629[(7)] = inst_39568__$1);

return statearr_39629;
})();
if(cljs.core.truth_(inst_39569)){
var statearr_39636_43135 = state_39593__$1;
(statearr_39636_43135[(1)] = (5));

} else {
var statearr_39641_43136 = state_39593__$1;
(statearr_39641_43136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39594 === (6))){
var inst_39573 = (state_39593[(8)]);
var inst_39568 = (state_39593[(7)]);
var inst_39573__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_39577 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39578 = [inst_39568,inst_39573__$1];
var inst_39579 = (new cljs.core.PersistentVector(null,2,(5),inst_39577,inst_39578,null));
var state_39593__$1 = (function (){var statearr_39642 = state_39593;
(statearr_39642[(8)] = inst_39573__$1);

return statearr_39642;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39593__$1,(8),jobs,inst_39579);
} else {
if((state_val_39594 === (3))){
var inst_39588 = (state_39593[(2)]);
var state_39593__$1 = state_39593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39593__$1,inst_39588);
} else {
if((state_val_39594 === (2))){
var state_39593__$1 = state_39593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39593__$1,(4),from);
} else {
if((state_val_39594 === (9))){
var inst_39583 = (state_39593[(2)]);
var state_39593__$1 = (function (){var statearr_39644 = state_39593;
(statearr_39644[(9)] = inst_39583);

return statearr_39644;
})();
var statearr_39646_43146 = state_39593__$1;
(statearr_39646_43146[(2)] = null);

(statearr_39646_43146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39594 === (5))){
var inst_39571 = cljs.core.async.close_BANG_(jobs);
var state_39593__$1 = state_39593;
var statearr_39649_43150 = state_39593__$1;
(statearr_39649_43150[(2)] = inst_39571);

(statearr_39649_43150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39594 === (8))){
var inst_39573 = (state_39593[(8)]);
var inst_39581 = (state_39593[(2)]);
var state_39593__$1 = (function (){var statearr_39653 = state_39593;
(statearr_39653[(10)] = inst_39581);

return statearr_39653;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39593__$1,(9),results,inst_39573);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0 = (function (){
var statearr_39656 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39656[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__);

(statearr_39656[(1)] = (1));

return statearr_39656;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1 = (function (state_39593){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_39593);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e39657){var ex__38478__auto__ = e39657;
var statearr_39658_43158 = state_39593;
(statearr_39658_43158[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_39593[(4)]))){
var statearr_39659_43159 = state_39593;
(statearr_39659_43159[(1)] = cljs.core.first((state_39593[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43161 = state_39593;
state_39593 = G__43161;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = function(state_39593){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1.call(this,state_39593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_39664 = f__38859__auto__();
(statearr_39664[(6)] = c__38858__auto___43127);

return statearr_39664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));


var c__38858__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_39811){
var state_val_39816 = (state_39811[(1)]);
if((state_val_39816 === (7))){
var inst_39774 = (state_39811[(2)]);
var state_39811__$1 = state_39811;
var statearr_39832_43167 = state_39811__$1;
(statearr_39832_43167[(2)] = inst_39774);

(statearr_39832_43167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (20))){
var state_39811__$1 = state_39811;
var statearr_39835_43170 = state_39811__$1;
(statearr_39835_43170[(2)] = null);

(statearr_39835_43170[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (1))){
var state_39811__$1 = state_39811;
var statearr_39839_43172 = state_39811__$1;
(statearr_39839_43172[(2)] = null);

(statearr_39839_43172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (4))){
var inst_39680 = (state_39811[(7)]);
var inst_39680__$1 = (state_39811[(2)]);
var inst_39685 = (inst_39680__$1 == null);
var state_39811__$1 = (function (){var statearr_39850 = state_39811;
(statearr_39850[(7)] = inst_39680__$1);

return statearr_39850;
})();
if(cljs.core.truth_(inst_39685)){
var statearr_39853_43176 = state_39811__$1;
(statearr_39853_43176[(1)] = (5));

} else {
var statearr_39854_43179 = state_39811__$1;
(statearr_39854_43179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (15))){
var inst_39713 = (state_39811[(8)]);
var state_39811__$1 = state_39811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39811__$1,(18),to,inst_39713);
} else {
if((state_val_39816 === (21))){
var inst_39765 = (state_39811[(2)]);
var state_39811__$1 = state_39811;
var statearr_39856_43182 = state_39811__$1;
(statearr_39856_43182[(2)] = inst_39765);

(statearr_39856_43182[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (13))){
var inst_39771 = (state_39811[(2)]);
var state_39811__$1 = (function (){var statearr_39859 = state_39811;
(statearr_39859[(9)] = inst_39771);

return statearr_39859;
})();
var statearr_39862_43186 = state_39811__$1;
(statearr_39862_43186[(2)] = null);

(statearr_39862_43186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (6))){
var inst_39680 = (state_39811[(7)]);
var state_39811__$1 = state_39811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39811__$1,(11),inst_39680);
} else {
if((state_val_39816 === (17))){
var inst_39744 = (state_39811[(2)]);
var state_39811__$1 = state_39811;
if(cljs.core.truth_(inst_39744)){
var statearr_39868_43188 = state_39811__$1;
(statearr_39868_43188[(1)] = (19));

} else {
var statearr_39870_43189 = state_39811__$1;
(statearr_39870_43189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (3))){
var inst_39776 = (state_39811[(2)]);
var state_39811__$1 = state_39811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39811__$1,inst_39776);
} else {
if((state_val_39816 === (12))){
var inst_39709 = (state_39811[(10)]);
var state_39811__$1 = state_39811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39811__$1,(14),inst_39709);
} else {
if((state_val_39816 === (2))){
var state_39811__$1 = state_39811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39811__$1,(4),results);
} else {
if((state_val_39816 === (19))){
var state_39811__$1 = state_39811;
var statearr_39889_43197 = state_39811__$1;
(statearr_39889_43197[(2)] = null);

(statearr_39889_43197[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (11))){
var inst_39709 = (state_39811[(2)]);
var state_39811__$1 = (function (){var statearr_39890 = state_39811;
(statearr_39890[(10)] = inst_39709);

return statearr_39890;
})();
var statearr_39891_43201 = state_39811__$1;
(statearr_39891_43201[(2)] = null);

(statearr_39891_43201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (9))){
var state_39811__$1 = state_39811;
var statearr_39893_43205 = state_39811__$1;
(statearr_39893_43205[(2)] = null);

(statearr_39893_43205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (5))){
var state_39811__$1 = state_39811;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39894_43208 = state_39811__$1;
(statearr_39894_43208[(1)] = (8));

} else {
var statearr_39895_43209 = state_39811__$1;
(statearr_39895_43209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (14))){
var inst_39728 = (state_39811[(11)]);
var inst_39713 = (state_39811[(8)]);
var inst_39713__$1 = (state_39811[(2)]);
var inst_39727 = (inst_39713__$1 == null);
var inst_39728__$1 = cljs.core.not(inst_39727);
var state_39811__$1 = (function (){var statearr_39897 = state_39811;
(statearr_39897[(11)] = inst_39728__$1);

(statearr_39897[(8)] = inst_39713__$1);

return statearr_39897;
})();
if(inst_39728__$1){
var statearr_39898_43219 = state_39811__$1;
(statearr_39898_43219[(1)] = (15));

} else {
var statearr_39899_43220 = state_39811__$1;
(statearr_39899_43220[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (16))){
var inst_39728 = (state_39811[(11)]);
var state_39811__$1 = state_39811;
var statearr_39903_43225 = state_39811__$1;
(statearr_39903_43225[(2)] = inst_39728);

(statearr_39903_43225[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (10))){
var inst_39701 = (state_39811[(2)]);
var state_39811__$1 = state_39811;
var statearr_39906_43228 = state_39811__$1;
(statearr_39906_43228[(2)] = inst_39701);

(statearr_39906_43228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (18))){
var inst_39741 = (state_39811[(2)]);
var state_39811__$1 = state_39811;
var statearr_39909_43229 = state_39811__$1;
(statearr_39909_43229[(2)] = inst_39741);

(statearr_39909_43229[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (8))){
var inst_39694 = cljs.core.async.close_BANG_(to);
var state_39811__$1 = state_39811;
var statearr_39920_43234 = state_39811__$1;
(statearr_39920_43234[(2)] = inst_39694);

(statearr_39920_43234[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0 = (function (){
var statearr_39931 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39931[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__);

(statearr_39931[(1)] = (1));

return statearr_39931;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1 = (function (state_39811){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_39811);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e39934){var ex__38478__auto__ = e39934;
var statearr_39935_43238 = state_39811;
(statearr_39935_43238[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_39811[(4)]))){
var statearr_39944_43240 = state_39811;
(statearr_39944_43240[(1)] = cljs.core.first((state_39811[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43241 = state_39811;
state_39811 = G__43241;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = function(state_39811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1.call(this,state_39811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_39953 = f__38859__auto__();
(statearr_39953[(6)] = c__38858__auto__);

return statearr_39953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));

return c__38858__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__39960 = arguments.length;
switch (G__39960) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__39972 = arguments.length;
switch (G__39972) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__39991 = arguments.length;
switch (G__39991) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__38858__auto___43269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_40028){
var state_val_40029 = (state_40028[(1)]);
if((state_val_40029 === (7))){
var inst_40023 = (state_40028[(2)]);
var state_40028__$1 = state_40028;
var statearr_40043_43270 = state_40028__$1;
(statearr_40043_43270[(2)] = inst_40023);

(statearr_40043_43270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40029 === (1))){
var state_40028__$1 = state_40028;
var statearr_40049_43271 = state_40028__$1;
(statearr_40049_43271[(2)] = null);

(statearr_40049_43271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40029 === (4))){
var inst_40004 = (state_40028[(7)]);
var inst_40004__$1 = (state_40028[(2)]);
var inst_40005 = (inst_40004__$1 == null);
var state_40028__$1 = (function (){var statearr_40054 = state_40028;
(statearr_40054[(7)] = inst_40004__$1);

return statearr_40054;
})();
if(cljs.core.truth_(inst_40005)){
var statearr_40055_43275 = state_40028__$1;
(statearr_40055_43275[(1)] = (5));

} else {
var statearr_40056_43276 = state_40028__$1;
(statearr_40056_43276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40029 === (13))){
var state_40028__$1 = state_40028;
var statearr_40059_43278 = state_40028__$1;
(statearr_40059_43278[(2)] = null);

(statearr_40059_43278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40029 === (6))){
var inst_40004 = (state_40028[(7)]);
var inst_40010 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40004) : p.call(null,inst_40004));
var state_40028__$1 = state_40028;
if(cljs.core.truth_(inst_40010)){
var statearr_40061_43285 = state_40028__$1;
(statearr_40061_43285[(1)] = (9));

} else {
var statearr_40062_43286 = state_40028__$1;
(statearr_40062_43286[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40029 === (3))){
var inst_40026 = (state_40028[(2)]);
var state_40028__$1 = state_40028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40028__$1,inst_40026);
} else {
if((state_val_40029 === (12))){
var state_40028__$1 = state_40028;
var statearr_40064_43288 = state_40028__$1;
(statearr_40064_43288[(2)] = null);

(statearr_40064_43288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40029 === (2))){
var state_40028__$1 = state_40028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40028__$1,(4),ch);
} else {
if((state_val_40029 === (11))){
var inst_40004 = (state_40028[(7)]);
var inst_40014 = (state_40028[(2)]);
var state_40028__$1 = state_40028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40028__$1,(8),inst_40014,inst_40004);
} else {
if((state_val_40029 === (9))){
var state_40028__$1 = state_40028;
var statearr_40067_43293 = state_40028__$1;
(statearr_40067_43293[(2)] = tc);

(statearr_40067_43293[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40029 === (5))){
var inst_40007 = cljs.core.async.close_BANG_(tc);
var inst_40008 = cljs.core.async.close_BANG_(fc);
var state_40028__$1 = (function (){var statearr_40071 = state_40028;
(statearr_40071[(8)] = inst_40007);

return statearr_40071;
})();
var statearr_40072_43299 = state_40028__$1;
(statearr_40072_43299[(2)] = inst_40008);

(statearr_40072_43299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40029 === (14))){
var inst_40021 = (state_40028[(2)]);
var state_40028__$1 = state_40028;
var statearr_40073_43300 = state_40028__$1;
(statearr_40073_43300[(2)] = inst_40021);

(statearr_40073_43300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40029 === (10))){
var state_40028__$1 = state_40028;
var statearr_40075_43301 = state_40028__$1;
(statearr_40075_43301[(2)] = fc);

(statearr_40075_43301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40029 === (8))){
var inst_40016 = (state_40028[(2)]);
var state_40028__$1 = state_40028;
if(cljs.core.truth_(inst_40016)){
var statearr_40077_43303 = state_40028__$1;
(statearr_40077_43303[(1)] = (12));

} else {
var statearr_40079_43306 = state_40028__$1;
(statearr_40079_43306[(1)] = (13));

}

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
});
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_40084 = [null,null,null,null,null,null,null,null,null];
(statearr_40084[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_40084[(1)] = (1));

return statearr_40084;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_40028){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_40028);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e40085){var ex__38478__auto__ = e40085;
var statearr_40086_43307 = state_40028;
(statearr_40086_43307[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_40028[(4)]))){
var statearr_40094_43308 = state_40028;
(statearr_40094_43308[(1)] = cljs.core.first((state_40028[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43309 = state_40028;
state_40028 = G__43309;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_40028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_40028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_40103 = f__38859__auto__();
(statearr_40103[(6)] = c__38858__auto___43269);

return statearr_40103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38858__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_40144){
var state_val_40145 = (state_40144[(1)]);
if((state_val_40145 === (7))){
var inst_40139 = (state_40144[(2)]);
var state_40144__$1 = state_40144;
var statearr_40149_43314 = state_40144__$1;
(statearr_40149_43314[(2)] = inst_40139);

(statearr_40149_43314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40145 === (1))){
var inst_40108 = init;
var inst_40109 = inst_40108;
var state_40144__$1 = (function (){var statearr_40152 = state_40144;
(statearr_40152[(7)] = inst_40109);

return statearr_40152;
})();
var statearr_40153_43319 = state_40144__$1;
(statearr_40153_43319[(2)] = null);

(statearr_40153_43319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40145 === (4))){
var inst_40124 = (state_40144[(8)]);
var inst_40124__$1 = (state_40144[(2)]);
var inst_40125 = (inst_40124__$1 == null);
var state_40144__$1 = (function (){var statearr_40155 = state_40144;
(statearr_40155[(8)] = inst_40124__$1);

return statearr_40155;
})();
if(cljs.core.truth_(inst_40125)){
var statearr_40157_43322 = state_40144__$1;
(statearr_40157_43322[(1)] = (5));

} else {
var statearr_40158_43323 = state_40144__$1;
(statearr_40158_43323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40145 === (6))){
var inst_40109 = (state_40144[(7)]);
var inst_40128 = (state_40144[(9)]);
var inst_40124 = (state_40144[(8)]);
var inst_40128__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_40109,inst_40124) : f.call(null,inst_40109,inst_40124));
var inst_40129 = cljs.core.reduced_QMARK_(inst_40128__$1);
var state_40144__$1 = (function (){var statearr_40159 = state_40144;
(statearr_40159[(9)] = inst_40128__$1);

return statearr_40159;
})();
if(inst_40129){
var statearr_40160_43333 = state_40144__$1;
(statearr_40160_43333[(1)] = (8));

} else {
var statearr_40163_43334 = state_40144__$1;
(statearr_40163_43334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40145 === (3))){
var inst_40141 = (state_40144[(2)]);
var state_40144__$1 = state_40144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40144__$1,inst_40141);
} else {
if((state_val_40145 === (2))){
var state_40144__$1 = state_40144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40144__$1,(4),ch);
} else {
if((state_val_40145 === (9))){
var inst_40128 = (state_40144[(9)]);
var inst_40109 = inst_40128;
var state_40144__$1 = (function (){var statearr_40170 = state_40144;
(statearr_40170[(7)] = inst_40109);

return statearr_40170;
})();
var statearr_40171_43339 = state_40144__$1;
(statearr_40171_43339[(2)] = null);

(statearr_40171_43339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40145 === (5))){
var inst_40109 = (state_40144[(7)]);
var state_40144__$1 = state_40144;
var statearr_40173_43345 = state_40144__$1;
(statearr_40173_43345[(2)] = inst_40109);

(statearr_40173_43345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40145 === (10))){
var inst_40137 = (state_40144[(2)]);
var state_40144__$1 = state_40144;
var statearr_40174_43346 = state_40144__$1;
(statearr_40174_43346[(2)] = inst_40137);

(statearr_40174_43346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40145 === (8))){
var inst_40128 = (state_40144[(9)]);
var inst_40131 = cljs.core.deref(inst_40128);
var state_40144__$1 = state_40144;
var statearr_40176_43356 = state_40144__$1;
(statearr_40176_43356[(2)] = inst_40131);

(statearr_40176_43356[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__38475__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38475__auto____0 = (function (){
var statearr_40182 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40182[(0)] = cljs$core$async$reduce_$_state_machine__38475__auto__);

(statearr_40182[(1)] = (1));

return statearr_40182;
});
var cljs$core$async$reduce_$_state_machine__38475__auto____1 = (function (state_40144){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_40144);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e40190){var ex__38478__auto__ = e40190;
var statearr_40191_43358 = state_40144;
(statearr_40191_43358[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_40144[(4)]))){
var statearr_40193_43359 = state_40144;
(statearr_40193_43359[(1)] = cljs.core.first((state_40144[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43364 = state_40144;
state_40144 = G__43364;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38475__auto__ = function(state_40144){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38475__auto____1.call(this,state_40144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38475__auto____0;
cljs$core$async$reduce_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38475__auto____1;
return cljs$core$async$reduce_$_state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_40194 = f__38859__auto__();
(statearr_40194[(6)] = c__38858__auto__);

return statearr_40194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));

return c__38858__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__38858__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_40204){
var state_val_40205 = (state_40204[(1)]);
if((state_val_40205 === (1))){
var inst_40196 = cljs.core.async.reduce(f__$1,init,ch);
var state_40204__$1 = state_40204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40204__$1,(2),inst_40196);
} else {
if((state_val_40205 === (2))){
var inst_40198 = (state_40204[(2)]);
var inst_40199 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_40198) : f__$1.call(null,inst_40198));
var state_40204__$1 = state_40204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40204__$1,inst_40199);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__38475__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38475__auto____0 = (function (){
var statearr_40215 = [null,null,null,null,null,null,null];
(statearr_40215[(0)] = cljs$core$async$transduce_$_state_machine__38475__auto__);

(statearr_40215[(1)] = (1));

return statearr_40215;
});
var cljs$core$async$transduce_$_state_machine__38475__auto____1 = (function (state_40204){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_40204);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e40216){var ex__38478__auto__ = e40216;
var statearr_40217_43373 = state_40204;
(statearr_40217_43373[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_40204[(4)]))){
var statearr_40218_43374 = state_40204;
(statearr_40218_43374[(1)] = cljs.core.first((state_40204[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43375 = state_40204;
state_40204 = G__43375;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38475__auto__ = function(state_40204){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38475__auto____1.call(this,state_40204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38475__auto____0;
cljs$core$async$transduce_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38475__auto____1;
return cljs$core$async$transduce_$_state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_40222 = f__38859__auto__();
(statearr_40222[(6)] = c__38858__auto__);

return statearr_40222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));

return c__38858__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__40227 = arguments.length;
switch (G__40227) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38858__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_40259){
var state_val_40260 = (state_40259[(1)]);
if((state_val_40260 === (7))){
var inst_40239 = (state_40259[(2)]);
var state_40259__$1 = state_40259;
var statearr_40269_43387 = state_40259__$1;
(statearr_40269_43387[(2)] = inst_40239);

(statearr_40269_43387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40260 === (1))){
var inst_40231 = cljs.core.seq(coll);
var inst_40232 = inst_40231;
var state_40259__$1 = (function (){var statearr_40270 = state_40259;
(statearr_40270[(7)] = inst_40232);

return statearr_40270;
})();
var statearr_40271_43391 = state_40259__$1;
(statearr_40271_43391[(2)] = null);

(statearr_40271_43391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40260 === (4))){
var inst_40232 = (state_40259[(7)]);
var inst_40237 = cljs.core.first(inst_40232);
var state_40259__$1 = state_40259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40259__$1,(7),ch,inst_40237);
} else {
if((state_val_40260 === (13))){
var inst_40251 = (state_40259[(2)]);
var state_40259__$1 = state_40259;
var statearr_40278_43393 = state_40259__$1;
(statearr_40278_43393[(2)] = inst_40251);

(statearr_40278_43393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40260 === (6))){
var inst_40242 = (state_40259[(2)]);
var state_40259__$1 = state_40259;
if(cljs.core.truth_(inst_40242)){
var statearr_40283_43395 = state_40259__$1;
(statearr_40283_43395[(1)] = (8));

} else {
var statearr_40284_43396 = state_40259__$1;
(statearr_40284_43396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40260 === (3))){
var inst_40255 = (state_40259[(2)]);
var state_40259__$1 = state_40259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40259__$1,inst_40255);
} else {
if((state_val_40260 === (12))){
var state_40259__$1 = state_40259;
var statearr_40290_43401 = state_40259__$1;
(statearr_40290_43401[(2)] = null);

(statearr_40290_43401[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40260 === (2))){
var inst_40232 = (state_40259[(7)]);
var state_40259__$1 = state_40259;
if(cljs.core.truth_(inst_40232)){
var statearr_40292_43408 = state_40259__$1;
(statearr_40292_43408[(1)] = (4));

} else {
var statearr_40293_43409 = state_40259__$1;
(statearr_40293_43409[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40260 === (11))){
var inst_40248 = cljs.core.async.close_BANG_(ch);
var state_40259__$1 = state_40259;
var statearr_40297_43414 = state_40259__$1;
(statearr_40297_43414[(2)] = inst_40248);

(statearr_40297_43414[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40260 === (9))){
var state_40259__$1 = state_40259;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40300_43419 = state_40259__$1;
(statearr_40300_43419[(1)] = (11));

} else {
var statearr_40301_43420 = state_40259__$1;
(statearr_40301_43420[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40260 === (5))){
var inst_40232 = (state_40259[(7)]);
var state_40259__$1 = state_40259;
var statearr_40303_43422 = state_40259__$1;
(statearr_40303_43422[(2)] = inst_40232);

(statearr_40303_43422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40260 === (10))){
var inst_40253 = (state_40259[(2)]);
var state_40259__$1 = state_40259;
var statearr_40308_43423 = state_40259__$1;
(statearr_40308_43423[(2)] = inst_40253);

(statearr_40308_43423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40260 === (8))){
var inst_40232 = (state_40259[(7)]);
var inst_40244 = cljs.core.next(inst_40232);
var inst_40232__$1 = inst_40244;
var state_40259__$1 = (function (){var statearr_40310 = state_40259;
(statearr_40310[(7)] = inst_40232__$1);

return statearr_40310;
})();
var statearr_40311_43424 = state_40259__$1;
(statearr_40311_43424[(2)] = null);

(statearr_40311_43424[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_40314 = [null,null,null,null,null,null,null,null];
(statearr_40314[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_40314[(1)] = (1));

return statearr_40314;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_40259){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_40259);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e40318){var ex__38478__auto__ = e40318;
var statearr_40319_43432 = state_40259;
(statearr_40319_43432[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_40259[(4)]))){
var statearr_40320_43433 = state_40259;
(statearr_40320_43433[(1)] = cljs.core.first((state_40259[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43444 = state_40259;
state_40259 = G__43444;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_40259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_40259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_40327 = f__38859__auto__();
(statearr_40327[(6)] = c__38858__auto__);

return statearr_40327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));

return c__38858__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__40340 = arguments.length;
switch (G__40340) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_43450 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_43450(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_43457 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_43457(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_43466 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_43466(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_43468 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_43468(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40381 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40381 = (function (ch,cs,meta40382){
this.ch = ch;
this.cs = cs;
this.meta40382 = meta40382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40383,meta40382__$1){
var self__ = this;
var _40383__$1 = this;
return (new cljs.core.async.t_cljs$core$async40381(self__.ch,self__.cs,meta40382__$1));
}));

(cljs.core.async.t_cljs$core$async40381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40383){
var self__ = this;
var _40383__$1 = this;
return self__.meta40382;
}));

(cljs.core.async.t_cljs$core$async40381.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40381.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async40381.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40381.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async40381.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async40381.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async40381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40382","meta40382",-1646050706,null)], null);
}));

(cljs.core.async.t_cljs$core$async40381.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40381");

(cljs.core.async.t_cljs$core$async40381.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async40381");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40381.
 */
cljs.core.async.__GT_t_cljs$core$async40381 = (function cljs$core$async$mult_$___GT_t_cljs$core$async40381(ch__$1,cs__$1,meta40382){
return (new cljs.core.async.t_cljs$core$async40381(ch__$1,cs__$1,meta40382));
});

}

return (new cljs.core.async.t_cljs$core$async40381(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__38858__auto___43485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_40562){
var state_val_40563 = (state_40562[(1)]);
if((state_val_40563 === (7))){
var inst_40556 = (state_40562[(2)]);
var state_40562__$1 = state_40562;
var statearr_40565_43486 = state_40562__$1;
(statearr_40565_43486[(2)] = inst_40556);

(statearr_40565_43486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (20))){
var inst_40456 = (state_40562[(7)]);
var inst_40472 = cljs.core.first(inst_40456);
var inst_40473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40472,(0),null);
var inst_40474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40472,(1),null);
var state_40562__$1 = (function (){var statearr_40570 = state_40562;
(statearr_40570[(8)] = inst_40473);

return statearr_40570;
})();
if(cljs.core.truth_(inst_40474)){
var statearr_40571_43491 = state_40562__$1;
(statearr_40571_43491[(1)] = (22));

} else {
var statearr_40572_43492 = state_40562__$1;
(statearr_40572_43492[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (27))){
var inst_40509 = (state_40562[(9)]);
var inst_40504 = (state_40562[(10)]);
var inst_40411 = (state_40562[(11)]);
var inst_40502 = (state_40562[(12)]);
var inst_40509__$1 = cljs.core._nth(inst_40502,inst_40504);
var inst_40510 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40509__$1,inst_40411,done);
var state_40562__$1 = (function (){var statearr_40573 = state_40562;
(statearr_40573[(9)] = inst_40509__$1);

return statearr_40573;
})();
if(cljs.core.truth_(inst_40510)){
var statearr_40574_43504 = state_40562__$1;
(statearr_40574_43504[(1)] = (30));

} else {
var statearr_40584_43506 = state_40562__$1;
(statearr_40584_43506[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (1))){
var state_40562__$1 = state_40562;
var statearr_40587_43512 = state_40562__$1;
(statearr_40587_43512[(2)] = null);

(statearr_40587_43512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (24))){
var inst_40456 = (state_40562[(7)]);
var inst_40479 = (state_40562[(2)]);
var inst_40480 = cljs.core.next(inst_40456);
var inst_40421 = inst_40480;
var inst_40422 = null;
var inst_40423 = (0);
var inst_40424 = (0);
var state_40562__$1 = (function (){var statearr_40593 = state_40562;
(statearr_40593[(13)] = inst_40424);

(statearr_40593[(14)] = inst_40423);

(statearr_40593[(15)] = inst_40479);

(statearr_40593[(16)] = inst_40422);

(statearr_40593[(17)] = inst_40421);

return statearr_40593;
})();
var statearr_40594_43524 = state_40562__$1;
(statearr_40594_43524[(2)] = null);

(statearr_40594_43524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (39))){
var state_40562__$1 = state_40562;
var statearr_40598_43529 = state_40562__$1;
(statearr_40598_43529[(2)] = null);

(statearr_40598_43529[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (4))){
var inst_40411 = (state_40562[(11)]);
var inst_40411__$1 = (state_40562[(2)]);
var inst_40412 = (inst_40411__$1 == null);
var state_40562__$1 = (function (){var statearr_40601 = state_40562;
(statearr_40601[(11)] = inst_40411__$1);

return statearr_40601;
})();
if(cljs.core.truth_(inst_40412)){
var statearr_40603_43538 = state_40562__$1;
(statearr_40603_43538[(1)] = (5));

} else {
var statearr_40605_43540 = state_40562__$1;
(statearr_40605_43540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (15))){
var inst_40424 = (state_40562[(13)]);
var inst_40423 = (state_40562[(14)]);
var inst_40422 = (state_40562[(16)]);
var inst_40421 = (state_40562[(17)]);
var inst_40442 = (state_40562[(2)]);
var inst_40444 = (inst_40424 + (1));
var tmp40595 = inst_40423;
var tmp40596 = inst_40422;
var tmp40597 = inst_40421;
var inst_40421__$1 = tmp40597;
var inst_40422__$1 = tmp40596;
var inst_40423__$1 = tmp40595;
var inst_40424__$1 = inst_40444;
var state_40562__$1 = (function (){var statearr_40609 = state_40562;
(statearr_40609[(13)] = inst_40424__$1);

(statearr_40609[(14)] = inst_40423__$1);

(statearr_40609[(16)] = inst_40422__$1);

(statearr_40609[(17)] = inst_40421__$1);

(statearr_40609[(18)] = inst_40442);

return statearr_40609;
})();
var statearr_40614_43553 = state_40562__$1;
(statearr_40614_43553[(2)] = null);

(statearr_40614_43553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (21))){
var inst_40483 = (state_40562[(2)]);
var state_40562__$1 = state_40562;
var statearr_40626_43554 = state_40562__$1;
(statearr_40626_43554[(2)] = inst_40483);

(statearr_40626_43554[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (31))){
var inst_40509 = (state_40562[(9)]);
var inst_40513 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_40509);
var state_40562__$1 = state_40562;
var statearr_40629_43556 = state_40562__$1;
(statearr_40629_43556[(2)] = inst_40513);

(statearr_40629_43556[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (32))){
var inst_40504 = (state_40562[(10)]);
var inst_40502 = (state_40562[(12)]);
var inst_40503 = (state_40562[(19)]);
var inst_40501 = (state_40562[(20)]);
var inst_40515 = (state_40562[(2)]);
var inst_40516 = (inst_40504 + (1));
var tmp40616 = inst_40502;
var tmp40617 = inst_40503;
var tmp40618 = inst_40501;
var inst_40501__$1 = tmp40618;
var inst_40502__$1 = tmp40616;
var inst_40503__$1 = tmp40617;
var inst_40504__$1 = inst_40516;
var state_40562__$1 = (function (){var statearr_40631 = state_40562;
(statearr_40631[(21)] = inst_40515);

(statearr_40631[(10)] = inst_40504__$1);

(statearr_40631[(12)] = inst_40502__$1);

(statearr_40631[(19)] = inst_40503__$1);

(statearr_40631[(20)] = inst_40501__$1);

return statearr_40631;
})();
var statearr_40634_43564 = state_40562__$1;
(statearr_40634_43564[(2)] = null);

(statearr_40634_43564[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (40))){
var inst_40529 = (state_40562[(22)]);
var inst_40533 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_40529);
var state_40562__$1 = state_40562;
var statearr_40639_43569 = state_40562__$1;
(statearr_40639_43569[(2)] = inst_40533);

(statearr_40639_43569[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (33))){
var inst_40520 = (state_40562[(23)]);
var inst_40522 = cljs.core.chunked_seq_QMARK_(inst_40520);
var state_40562__$1 = state_40562;
if(inst_40522){
var statearr_40640_43572 = state_40562__$1;
(statearr_40640_43572[(1)] = (36));

} else {
var statearr_40643_43574 = state_40562__$1;
(statearr_40643_43574[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (13))){
var inst_40433 = (state_40562[(24)]);
var inst_40438 = cljs.core.async.close_BANG_(inst_40433);
var state_40562__$1 = state_40562;
var statearr_40646_43575 = state_40562__$1;
(statearr_40646_43575[(2)] = inst_40438);

(statearr_40646_43575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (22))){
var inst_40473 = (state_40562[(8)]);
var inst_40476 = cljs.core.async.close_BANG_(inst_40473);
var state_40562__$1 = state_40562;
var statearr_40647_43580 = state_40562__$1;
(statearr_40647_43580[(2)] = inst_40476);

(statearr_40647_43580[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (36))){
var inst_40520 = (state_40562[(23)]);
var inst_40524 = cljs.core.chunk_first(inst_40520);
var inst_40525 = cljs.core.chunk_rest(inst_40520);
var inst_40526 = cljs.core.count(inst_40524);
var inst_40501 = inst_40525;
var inst_40502 = inst_40524;
var inst_40503 = inst_40526;
var inst_40504 = (0);
var state_40562__$1 = (function (){var statearr_40649 = state_40562;
(statearr_40649[(10)] = inst_40504);

(statearr_40649[(12)] = inst_40502);

(statearr_40649[(19)] = inst_40503);

(statearr_40649[(20)] = inst_40501);

return statearr_40649;
})();
var statearr_40655_43581 = state_40562__$1;
(statearr_40655_43581[(2)] = null);

(statearr_40655_43581[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (41))){
var inst_40520 = (state_40562[(23)]);
var inst_40535 = (state_40562[(2)]);
var inst_40536 = cljs.core.next(inst_40520);
var inst_40501 = inst_40536;
var inst_40502 = null;
var inst_40503 = (0);
var inst_40504 = (0);
var state_40562__$1 = (function (){var statearr_40657 = state_40562;
(statearr_40657[(10)] = inst_40504);

(statearr_40657[(12)] = inst_40502);

(statearr_40657[(25)] = inst_40535);

(statearr_40657[(19)] = inst_40503);

(statearr_40657[(20)] = inst_40501);

return statearr_40657;
})();
var statearr_40662_43582 = state_40562__$1;
(statearr_40662_43582[(2)] = null);

(statearr_40662_43582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (43))){
var state_40562__$1 = state_40562;
var statearr_40663_43589 = state_40562__$1;
(statearr_40663_43589[(2)] = null);

(statearr_40663_43589[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (29))){
var inst_40544 = (state_40562[(2)]);
var state_40562__$1 = state_40562;
var statearr_40664_43591 = state_40562__$1;
(statearr_40664_43591[(2)] = inst_40544);

(statearr_40664_43591[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (44))){
var inst_40553 = (state_40562[(2)]);
var state_40562__$1 = (function (){var statearr_40665 = state_40562;
(statearr_40665[(26)] = inst_40553);

return statearr_40665;
})();
var statearr_40667_43593 = state_40562__$1;
(statearr_40667_43593[(2)] = null);

(statearr_40667_43593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (6))){
var inst_40493 = (state_40562[(27)]);
var inst_40492 = cljs.core.deref(cs);
var inst_40493__$1 = cljs.core.keys(inst_40492);
var inst_40494 = cljs.core.count(inst_40493__$1);
var inst_40495 = cljs.core.reset_BANG_(dctr,inst_40494);
var inst_40500 = cljs.core.seq(inst_40493__$1);
var inst_40501 = inst_40500;
var inst_40502 = null;
var inst_40503 = (0);
var inst_40504 = (0);
var state_40562__$1 = (function (){var statearr_40672 = state_40562;
(statearr_40672[(28)] = inst_40495);

(statearr_40672[(10)] = inst_40504);

(statearr_40672[(27)] = inst_40493__$1);

(statearr_40672[(12)] = inst_40502);

(statearr_40672[(19)] = inst_40503);

(statearr_40672[(20)] = inst_40501);

return statearr_40672;
})();
var statearr_40673_43606 = state_40562__$1;
(statearr_40673_43606[(2)] = null);

(statearr_40673_43606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (28))){
var inst_40501 = (state_40562[(20)]);
var inst_40520 = (state_40562[(23)]);
var inst_40520__$1 = cljs.core.seq(inst_40501);
var state_40562__$1 = (function (){var statearr_40675 = state_40562;
(statearr_40675[(23)] = inst_40520__$1);

return statearr_40675;
})();
if(inst_40520__$1){
var statearr_40680_43607 = state_40562__$1;
(statearr_40680_43607[(1)] = (33));

} else {
var statearr_40681_43609 = state_40562__$1;
(statearr_40681_43609[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (25))){
var inst_40504 = (state_40562[(10)]);
var inst_40503 = (state_40562[(19)]);
var inst_40506 = (inst_40504 < inst_40503);
var inst_40507 = inst_40506;
var state_40562__$1 = state_40562;
if(cljs.core.truth_(inst_40507)){
var statearr_40686_43611 = state_40562__$1;
(statearr_40686_43611[(1)] = (27));

} else {
var statearr_40687_43612 = state_40562__$1;
(statearr_40687_43612[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (34))){
var state_40562__$1 = state_40562;
var statearr_40689_43613 = state_40562__$1;
(statearr_40689_43613[(2)] = null);

(statearr_40689_43613[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (17))){
var state_40562__$1 = state_40562;
var statearr_40692_43615 = state_40562__$1;
(statearr_40692_43615[(2)] = null);

(statearr_40692_43615[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (3))){
var inst_40558 = (state_40562[(2)]);
var state_40562__$1 = state_40562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40562__$1,inst_40558);
} else {
if((state_val_40563 === (12))){
var inst_40488 = (state_40562[(2)]);
var state_40562__$1 = state_40562;
var statearr_40697_43616 = state_40562__$1;
(statearr_40697_43616[(2)] = inst_40488);

(statearr_40697_43616[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (2))){
var state_40562__$1 = state_40562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40562__$1,(4),ch);
} else {
if((state_val_40563 === (23))){
var state_40562__$1 = state_40562;
var statearr_40707_43617 = state_40562__$1;
(statearr_40707_43617[(2)] = null);

(statearr_40707_43617[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (35))){
var inst_40542 = (state_40562[(2)]);
var state_40562__$1 = state_40562;
var statearr_40708_43618 = state_40562__$1;
(statearr_40708_43618[(2)] = inst_40542);

(statearr_40708_43618[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (19))){
var inst_40456 = (state_40562[(7)]);
var inst_40460 = cljs.core.chunk_first(inst_40456);
var inst_40461 = cljs.core.chunk_rest(inst_40456);
var inst_40462 = cljs.core.count(inst_40460);
var inst_40421 = inst_40461;
var inst_40422 = inst_40460;
var inst_40423 = inst_40462;
var inst_40424 = (0);
var state_40562__$1 = (function (){var statearr_40711 = state_40562;
(statearr_40711[(13)] = inst_40424);

(statearr_40711[(14)] = inst_40423);

(statearr_40711[(16)] = inst_40422);

(statearr_40711[(17)] = inst_40421);

return statearr_40711;
})();
var statearr_40713_43625 = state_40562__$1;
(statearr_40713_43625[(2)] = null);

(statearr_40713_43625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (11))){
var inst_40456 = (state_40562[(7)]);
var inst_40421 = (state_40562[(17)]);
var inst_40456__$1 = cljs.core.seq(inst_40421);
var state_40562__$1 = (function (){var statearr_40719 = state_40562;
(statearr_40719[(7)] = inst_40456__$1);

return statearr_40719;
})();
if(inst_40456__$1){
var statearr_40720_43633 = state_40562__$1;
(statearr_40720_43633[(1)] = (16));

} else {
var statearr_40721_43634 = state_40562__$1;
(statearr_40721_43634[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (9))){
var inst_40490 = (state_40562[(2)]);
var state_40562__$1 = state_40562;
var statearr_40722_43635 = state_40562__$1;
(statearr_40722_43635[(2)] = inst_40490);

(statearr_40722_43635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (5))){
var inst_40418 = cljs.core.deref(cs);
var inst_40420 = cljs.core.seq(inst_40418);
var inst_40421 = inst_40420;
var inst_40422 = null;
var inst_40423 = (0);
var inst_40424 = (0);
var state_40562__$1 = (function (){var statearr_40729 = state_40562;
(statearr_40729[(13)] = inst_40424);

(statearr_40729[(14)] = inst_40423);

(statearr_40729[(16)] = inst_40422);

(statearr_40729[(17)] = inst_40421);

return statearr_40729;
})();
var statearr_40730_43639 = state_40562__$1;
(statearr_40730_43639[(2)] = null);

(statearr_40730_43639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (14))){
var state_40562__$1 = state_40562;
var statearr_40732_43643 = state_40562__$1;
(statearr_40732_43643[(2)] = null);

(statearr_40732_43643[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (45))){
var inst_40550 = (state_40562[(2)]);
var state_40562__$1 = state_40562;
var statearr_40736_43645 = state_40562__$1;
(statearr_40736_43645[(2)] = inst_40550);

(statearr_40736_43645[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (26))){
var inst_40493 = (state_40562[(27)]);
var inst_40546 = (state_40562[(2)]);
var inst_40547 = cljs.core.seq(inst_40493);
var state_40562__$1 = (function (){var statearr_40737 = state_40562;
(statearr_40737[(29)] = inst_40546);

return statearr_40737;
})();
if(inst_40547){
var statearr_40739_43649 = state_40562__$1;
(statearr_40739_43649[(1)] = (42));

} else {
var statearr_40740_43651 = state_40562__$1;
(statearr_40740_43651[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (16))){
var inst_40456 = (state_40562[(7)]);
var inst_40458 = cljs.core.chunked_seq_QMARK_(inst_40456);
var state_40562__$1 = state_40562;
if(inst_40458){
var statearr_40741_43653 = state_40562__$1;
(statearr_40741_43653[(1)] = (19));

} else {
var statearr_40742_43654 = state_40562__$1;
(statearr_40742_43654[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (38))){
var inst_40539 = (state_40562[(2)]);
var state_40562__$1 = state_40562;
var statearr_40748_43656 = state_40562__$1;
(statearr_40748_43656[(2)] = inst_40539);

(statearr_40748_43656[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (30))){
var state_40562__$1 = state_40562;
var statearr_40750_43662 = state_40562__$1;
(statearr_40750_43662[(2)] = null);

(statearr_40750_43662[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (10))){
var inst_40424 = (state_40562[(13)]);
var inst_40422 = (state_40562[(16)]);
var inst_40432 = cljs.core._nth(inst_40422,inst_40424);
var inst_40433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40432,(0),null);
var inst_40435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40432,(1),null);
var state_40562__$1 = (function (){var statearr_40751 = state_40562;
(statearr_40751[(24)] = inst_40433);

return statearr_40751;
})();
if(cljs.core.truth_(inst_40435)){
var statearr_40752_43665 = state_40562__$1;
(statearr_40752_43665[(1)] = (13));

} else {
var statearr_40753_43666 = state_40562__$1;
(statearr_40753_43666[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (18))){
var inst_40486 = (state_40562[(2)]);
var state_40562__$1 = state_40562;
var statearr_40754_43668 = state_40562__$1;
(statearr_40754_43668[(2)] = inst_40486);

(statearr_40754_43668[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (42))){
var state_40562__$1 = state_40562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40562__$1,(45),dchan);
} else {
if((state_val_40563 === (37))){
var inst_40529 = (state_40562[(22)]);
var inst_40411 = (state_40562[(11)]);
var inst_40520 = (state_40562[(23)]);
var inst_40529__$1 = cljs.core.first(inst_40520);
var inst_40530 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40529__$1,inst_40411,done);
var state_40562__$1 = (function (){var statearr_40756 = state_40562;
(statearr_40756[(22)] = inst_40529__$1);

return statearr_40756;
})();
if(cljs.core.truth_(inst_40530)){
var statearr_40757_43669 = state_40562__$1;
(statearr_40757_43669[(1)] = (39));

} else {
var statearr_40758_43670 = state_40562__$1;
(statearr_40758_43670[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (8))){
var inst_40424 = (state_40562[(13)]);
var inst_40423 = (state_40562[(14)]);
var inst_40426 = (inst_40424 < inst_40423);
var inst_40427 = inst_40426;
var state_40562__$1 = state_40562;
if(cljs.core.truth_(inst_40427)){
var statearr_40759_43672 = state_40562__$1;
(statearr_40759_43672[(1)] = (10));

} else {
var statearr_40760_43673 = state_40562__$1;
(statearr_40760_43673[(1)] = (11));

}

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
var cljs$core$async$mult_$_state_machine__38475__auto__ = null;
var cljs$core$async$mult_$_state_machine__38475__auto____0 = (function (){
var statearr_40762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40762[(0)] = cljs$core$async$mult_$_state_machine__38475__auto__);

(statearr_40762[(1)] = (1));

return statearr_40762;
});
var cljs$core$async$mult_$_state_machine__38475__auto____1 = (function (state_40562){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_40562);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e40763){var ex__38478__auto__ = e40763;
var statearr_40764_43675 = state_40562;
(statearr_40764_43675[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_40562[(4)]))){
var statearr_40767_43679 = state_40562;
(statearr_40767_43679[(1)] = cljs.core.first((state_40562[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43680 = state_40562;
state_40562 = G__43680;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38475__auto__ = function(state_40562){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38475__auto____1.call(this,state_40562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38475__auto____0;
cljs$core$async$mult_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38475__auto____1;
return cljs$core$async$mult_$_state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_40769 = f__38859__auto__();
(statearr_40769[(6)] = c__38858__auto___43485);

return statearr_40769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__40775 = arguments.length;
switch (G__40775) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_43693 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_43693(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_43701 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_43701(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_43703 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_43703(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_43711 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_43711(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_43718 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_43718(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43723 = arguments.length;
var i__4865__auto___43724 = (0);
while(true){
if((i__4865__auto___43724 < len__4864__auto___43723)){
args__4870__auto__.push((arguments[i__4865__auto___43724]));

var G__43725 = (i__4865__auto___43724 + (1));
i__4865__auto___43724 = G__43725;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40847){
var map__40850 = p__40847;
var map__40850__$1 = cljs.core.__destructure_map(map__40850);
var opts = map__40850__$1;
var statearr_40852_43727 = state;
(statearr_40852_43727[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_40856_43728 = state;
(statearr_40856_43728[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_40859_43729 = state;
(statearr_40859_43729[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40835){
var G__40836 = cljs.core.first(seq40835);
var seq40835__$1 = cljs.core.next(seq40835);
var G__40837 = cljs.core.first(seq40835__$1);
var seq40835__$2 = cljs.core.next(seq40835__$1);
var G__40838 = cljs.core.first(seq40835__$2);
var seq40835__$3 = cljs.core.next(seq40835__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40836,G__40837,G__40838,seq40835__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40897 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40897 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40898){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta40898 = meta40898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40899,meta40898__$1){
var self__ = this;
var _40899__$1 = this;
return (new cljs.core.async.t_cljs$core$async40897(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40898__$1));
}));

(cljs.core.async.t_cljs$core$async40897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40899){
var self__ = this;
var _40899__$1 = this;
return self__.meta40898;
}));

(cljs.core.async.t_cljs$core$async40897.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40897.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async40897.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40897.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40897.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40897.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40897.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40897.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta40898","meta40898",1043657395,null)], null);
}));

(cljs.core.async.t_cljs$core$async40897.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40897");

(cljs.core.async.t_cljs$core$async40897.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async40897");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40897.
 */
cljs.core.async.__GT_t_cljs$core$async40897 = (function cljs$core$async$mix_$___GT_t_cljs$core$async40897(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40898){
return (new cljs.core.async.t_cljs$core$async40897(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40898));
});

}

return (new cljs.core.async.t_cljs$core$async40897(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38858__auto___43740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_41042){
var state_val_41043 = (state_41042[(1)]);
if((state_val_41043 === (7))){
var inst_40987 = (state_41042[(2)]);
var state_41042__$1 = state_41042;
if(cljs.core.truth_(inst_40987)){
var statearr_41052_43742 = state_41042__$1;
(statearr_41052_43742[(1)] = (8));

} else {
var statearr_41055_43743 = state_41042__$1;
(statearr_41055_43743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (20))){
var inst_40979 = (state_41042[(7)]);
var state_41042__$1 = state_41042;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41042__$1,(23),out,inst_40979);
} else {
if((state_val_41043 === (1))){
var inst_40954 = calc_state();
var inst_40955 = cljs.core.__destructure_map(inst_40954);
var inst_40958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40955,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40955,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40955,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40962 = inst_40954;
var state_41042__$1 = (function (){var statearr_41064 = state_41042;
(statearr_41064[(8)] = inst_40962);

(statearr_41064[(9)] = inst_40958);

(statearr_41064[(10)] = inst_40961);

(statearr_41064[(11)] = inst_40959);

return statearr_41064;
})();
var statearr_41075_43745 = state_41042__$1;
(statearr_41075_43745[(2)] = null);

(statearr_41075_43745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (24))){
var inst_40966 = (state_41042[(12)]);
var inst_40962 = inst_40966;
var state_41042__$1 = (function (){var statearr_41080 = state_41042;
(statearr_41080[(8)] = inst_40962);

return statearr_41080;
})();
var statearr_41082_43746 = state_41042__$1;
(statearr_41082_43746[(2)] = null);

(statearr_41082_43746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (4))){
var inst_40982 = (state_41042[(13)]);
var inst_40979 = (state_41042[(7)]);
var inst_40978 = (state_41042[(2)]);
var inst_40979__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40978,(0),null);
var inst_40980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40978,(1),null);
var inst_40982__$1 = (inst_40979__$1 == null);
var state_41042__$1 = (function (){var statearr_41087 = state_41042;
(statearr_41087[(13)] = inst_40982__$1);

(statearr_41087[(7)] = inst_40979__$1);

(statearr_41087[(14)] = inst_40980);

return statearr_41087;
})();
if(cljs.core.truth_(inst_40982__$1)){
var statearr_41090_43751 = state_41042__$1;
(statearr_41090_43751[(1)] = (5));

} else {
var statearr_41092_43756 = state_41042__$1;
(statearr_41092_43756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (15))){
var inst_41007 = (state_41042[(15)]);
var inst_40967 = (state_41042[(16)]);
var inst_41007__$1 = cljs.core.empty_QMARK_(inst_40967);
var state_41042__$1 = (function (){var statearr_41094 = state_41042;
(statearr_41094[(15)] = inst_41007__$1);

return statearr_41094;
})();
if(inst_41007__$1){
var statearr_41098_43758 = state_41042__$1;
(statearr_41098_43758[(1)] = (17));

} else {
var statearr_41099_43759 = state_41042__$1;
(statearr_41099_43759[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (21))){
var inst_40966 = (state_41042[(12)]);
var inst_40962 = inst_40966;
var state_41042__$1 = (function (){var statearr_41101 = state_41042;
(statearr_41101[(8)] = inst_40962);

return statearr_41101;
})();
var statearr_41105_43761 = state_41042__$1;
(statearr_41105_43761[(2)] = null);

(statearr_41105_43761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (13))){
var inst_40997 = (state_41042[(2)]);
var inst_40998 = calc_state();
var inst_40962 = inst_40998;
var state_41042__$1 = (function (){var statearr_41109 = state_41042;
(statearr_41109[(17)] = inst_40997);

(statearr_41109[(8)] = inst_40962);

return statearr_41109;
})();
var statearr_41113_43765 = state_41042__$1;
(statearr_41113_43765[(2)] = null);

(statearr_41113_43765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (22))){
var inst_41030 = (state_41042[(2)]);
var state_41042__$1 = state_41042;
var statearr_41116_43766 = state_41042__$1;
(statearr_41116_43766[(2)] = inst_41030);

(statearr_41116_43766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (6))){
var inst_40980 = (state_41042[(14)]);
var inst_40985 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40980,change);
var state_41042__$1 = state_41042;
var statearr_41120_43767 = state_41042__$1;
(statearr_41120_43767[(2)] = inst_40985);

(statearr_41120_43767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (25))){
var state_41042__$1 = state_41042;
var statearr_41125_43769 = state_41042__$1;
(statearr_41125_43769[(2)] = null);

(statearr_41125_43769[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (17))){
var inst_40968 = (state_41042[(18)]);
var inst_40980 = (state_41042[(14)]);
var inst_41009 = (inst_40968.cljs$core$IFn$_invoke$arity$1 ? inst_40968.cljs$core$IFn$_invoke$arity$1(inst_40980) : inst_40968.call(null,inst_40980));
var inst_41010 = cljs.core.not(inst_41009);
var state_41042__$1 = state_41042;
var statearr_41130_43773 = state_41042__$1;
(statearr_41130_43773[(2)] = inst_41010);

(statearr_41130_43773[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (3))){
var inst_41035 = (state_41042[(2)]);
var state_41042__$1 = state_41042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41042__$1,inst_41035);
} else {
if((state_val_41043 === (12))){
var state_41042__$1 = state_41042;
var statearr_41138_43774 = state_41042__$1;
(statearr_41138_43774[(2)] = null);

(statearr_41138_43774[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (2))){
var inst_40962 = (state_41042[(8)]);
var inst_40966 = (state_41042[(12)]);
var inst_40966__$1 = cljs.core.__destructure_map(inst_40962);
var inst_40967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40966__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40966__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40966__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41042__$1 = (function (){var statearr_41153 = state_41042;
(statearr_41153[(16)] = inst_40967);

(statearr_41153[(18)] = inst_40968);

(statearr_41153[(12)] = inst_40966__$1);

return statearr_41153;
})();
return cljs.core.async.ioc_alts_BANG_(state_41042__$1,(4),inst_40970);
} else {
if((state_val_41043 === (23))){
var inst_41021 = (state_41042[(2)]);
var state_41042__$1 = state_41042;
if(cljs.core.truth_(inst_41021)){
var statearr_41157_43775 = state_41042__$1;
(statearr_41157_43775[(1)] = (24));

} else {
var statearr_41158_43776 = state_41042__$1;
(statearr_41158_43776[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (19))){
var inst_41013 = (state_41042[(2)]);
var state_41042__$1 = state_41042;
var statearr_41167_43777 = state_41042__$1;
(statearr_41167_43777[(2)] = inst_41013);

(statearr_41167_43777[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (11))){
var inst_40980 = (state_41042[(14)]);
var inst_40993 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_40980);
var state_41042__$1 = state_41042;
var statearr_41172_43784 = state_41042__$1;
(statearr_41172_43784[(2)] = inst_40993);

(statearr_41172_43784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (9))){
var inst_41002 = (state_41042[(19)]);
var inst_40967 = (state_41042[(16)]);
var inst_40980 = (state_41042[(14)]);
var inst_41002__$1 = (inst_40967.cljs$core$IFn$_invoke$arity$1 ? inst_40967.cljs$core$IFn$_invoke$arity$1(inst_40980) : inst_40967.call(null,inst_40980));
var state_41042__$1 = (function (){var statearr_41173 = state_41042;
(statearr_41173[(19)] = inst_41002__$1);

return statearr_41173;
})();
if(cljs.core.truth_(inst_41002__$1)){
var statearr_41174_43785 = state_41042__$1;
(statearr_41174_43785[(1)] = (14));

} else {
var statearr_41175_43786 = state_41042__$1;
(statearr_41175_43786[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (5))){
var inst_40982 = (state_41042[(13)]);
var state_41042__$1 = state_41042;
var statearr_41176_43787 = state_41042__$1;
(statearr_41176_43787[(2)] = inst_40982);

(statearr_41176_43787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (14))){
var inst_41002 = (state_41042[(19)]);
var state_41042__$1 = state_41042;
var statearr_41181_43788 = state_41042__$1;
(statearr_41181_43788[(2)] = inst_41002);

(statearr_41181_43788[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (26))){
var inst_41026 = (state_41042[(2)]);
var state_41042__$1 = state_41042;
var statearr_41186_43789 = state_41042__$1;
(statearr_41186_43789[(2)] = inst_41026);

(statearr_41186_43789[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (16))){
var inst_41015 = (state_41042[(2)]);
var state_41042__$1 = state_41042;
if(cljs.core.truth_(inst_41015)){
var statearr_41187_43791 = state_41042__$1;
(statearr_41187_43791[(1)] = (20));

} else {
var statearr_41188_43792 = state_41042__$1;
(statearr_41188_43792[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (10))){
var inst_41032 = (state_41042[(2)]);
var state_41042__$1 = state_41042;
var statearr_41191_43793 = state_41042__$1;
(statearr_41191_43793[(2)] = inst_41032);

(statearr_41191_43793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (18))){
var inst_41007 = (state_41042[(15)]);
var state_41042__$1 = state_41042;
var statearr_41195_43794 = state_41042__$1;
(statearr_41195_43794[(2)] = inst_41007);

(statearr_41195_43794[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (8))){
var inst_40979 = (state_41042[(7)]);
var inst_40989 = (inst_40979 == null);
var state_41042__$1 = state_41042;
if(cljs.core.truth_(inst_40989)){
var statearr_41198_43795 = state_41042__$1;
(statearr_41198_43795[(1)] = (11));

} else {
var statearr_41199_43796 = state_41042__$1;
(statearr_41199_43796[(1)] = (12));

}

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__38475__auto__ = null;
var cljs$core$async$mix_$_state_machine__38475__auto____0 = (function (){
var statearr_41203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41203[(0)] = cljs$core$async$mix_$_state_machine__38475__auto__);

(statearr_41203[(1)] = (1));

return statearr_41203;
});
var cljs$core$async$mix_$_state_machine__38475__auto____1 = (function (state_41042){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_41042);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e41207){var ex__38478__auto__ = e41207;
var statearr_41209_43797 = state_41042;
(statearr_41209_43797[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_41042[(4)]))){
var statearr_41211_43798 = state_41042;
(statearr_41211_43798[(1)] = cljs.core.first((state_41042[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43803 = state_41042;
state_41042 = G__43803;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38475__auto__ = function(state_41042){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38475__auto____1.call(this,state_41042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38475__auto____0;
cljs$core$async$mix_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38475__auto____1;
return cljs$core$async$mix_$_state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_41217 = f__38859__auto__();
(statearr_41217[(6)] = c__38858__auto___43740);

return statearr_41217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_43808 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_43808(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_43809 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_43809(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_43810 = (function() {
var G__43811 = null;
var G__43811__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__43811__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__43811 = function(p,v){
switch(arguments.length){
case 1:
return G__43811__1.call(this,p);
case 2:
return G__43811__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43811.cljs$core$IFn$_invoke$arity$1 = G__43811__1;
G__43811.cljs$core$IFn$_invoke$arity$2 = G__43811__2;
return G__43811;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__41265 = arguments.length;
switch (G__41265) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43810(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43810(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__41276 = arguments.length;
switch (G__41276) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__41273_SHARP_){
if(cljs.core.truth_((p1__41273_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__41273_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__41273_SHARP_.call(null,topic)))){
return p1__41273_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41273_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41290 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41290 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41291){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41291 = meta41291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41292,meta41291__$1){
var self__ = this;
var _41292__$1 = this;
return (new cljs.core.async.t_cljs$core$async41290(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41291__$1));
}));

(cljs.core.async.t_cljs$core$async41290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41292){
var self__ = this;
var _41292__$1 = this;
return self__.meta41291;
}));

(cljs.core.async.t_cljs$core$async41290.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41290.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41290.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41290.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async41290.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async41290.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async41290.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async41290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41291","meta41291",-336599320,null)], null);
}));

(cljs.core.async.t_cljs$core$async41290.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41290");

(cljs.core.async.t_cljs$core$async41290.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41290");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41290.
 */
cljs.core.async.__GT_t_cljs$core$async41290 = (function cljs$core$async$__GT_t_cljs$core$async41290(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41291){
return (new cljs.core.async.t_cljs$core$async41290(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41291));
});

}

return (new cljs.core.async.t_cljs$core$async41290(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38858__auto___43821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_41433){
var state_val_41438 = (state_41433[(1)]);
if((state_val_41438 === (7))){
var inst_41429 = (state_41433[(2)]);
var state_41433__$1 = state_41433;
var statearr_41444_43822 = state_41433__$1;
(statearr_41444_43822[(2)] = inst_41429);

(statearr_41444_43822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (20))){
var state_41433__$1 = state_41433;
var statearr_41445_43823 = state_41433__$1;
(statearr_41445_43823[(2)] = null);

(statearr_41445_43823[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (1))){
var state_41433__$1 = state_41433;
var statearr_41449_43824 = state_41433__$1;
(statearr_41449_43824[(2)] = null);

(statearr_41449_43824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (24))){
var inst_41411 = (state_41433[(7)]);
var inst_41421 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_41411);
var state_41433__$1 = state_41433;
var statearr_41451_43825 = state_41433__$1;
(statearr_41451_43825[(2)] = inst_41421);

(statearr_41451_43825[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (4))){
var inst_41358 = (state_41433[(8)]);
var inst_41358__$1 = (state_41433[(2)]);
var inst_41360 = (inst_41358__$1 == null);
var state_41433__$1 = (function (){var statearr_41452 = state_41433;
(statearr_41452[(8)] = inst_41358__$1);

return statearr_41452;
})();
if(cljs.core.truth_(inst_41360)){
var statearr_41456_43826 = state_41433__$1;
(statearr_41456_43826[(1)] = (5));

} else {
var statearr_41457_43827 = state_41433__$1;
(statearr_41457_43827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (15))){
var inst_41405 = (state_41433[(2)]);
var state_41433__$1 = state_41433;
var statearr_41462_43828 = state_41433__$1;
(statearr_41462_43828[(2)] = inst_41405);

(statearr_41462_43828[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (21))){
var inst_41426 = (state_41433[(2)]);
var state_41433__$1 = (function (){var statearr_41463 = state_41433;
(statearr_41463[(9)] = inst_41426);

return statearr_41463;
})();
var statearr_41464_43829 = state_41433__$1;
(statearr_41464_43829[(2)] = null);

(statearr_41464_43829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (13))){
var inst_41384 = (state_41433[(10)]);
var inst_41386 = cljs.core.chunked_seq_QMARK_(inst_41384);
var state_41433__$1 = state_41433;
if(inst_41386){
var statearr_41468_43830 = state_41433__$1;
(statearr_41468_43830[(1)] = (16));

} else {
var statearr_41469_43831 = state_41433__$1;
(statearr_41469_43831[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (22))){
var inst_41418 = (state_41433[(2)]);
var state_41433__$1 = state_41433;
if(cljs.core.truth_(inst_41418)){
var statearr_41473_43833 = state_41433__$1;
(statearr_41473_43833[(1)] = (23));

} else {
var statearr_41474_43834 = state_41433__$1;
(statearr_41474_43834[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (6))){
var inst_41414 = (state_41433[(11)]);
var inst_41358 = (state_41433[(8)]);
var inst_41411 = (state_41433[(7)]);
var inst_41411__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_41358) : topic_fn.call(null,inst_41358));
var inst_41413 = cljs.core.deref(mults);
var inst_41414__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41413,inst_41411__$1);
var state_41433__$1 = (function (){var statearr_41499 = state_41433;
(statearr_41499[(11)] = inst_41414__$1);

(statearr_41499[(7)] = inst_41411__$1);

return statearr_41499;
})();
if(cljs.core.truth_(inst_41414__$1)){
var statearr_41512_43836 = state_41433__$1;
(statearr_41512_43836[(1)] = (19));

} else {
var statearr_41513_43837 = state_41433__$1;
(statearr_41513_43837[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (25))){
var inst_41423 = (state_41433[(2)]);
var state_41433__$1 = state_41433;
var statearr_41514_43838 = state_41433__$1;
(statearr_41514_43838[(2)] = inst_41423);

(statearr_41514_43838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (17))){
var inst_41384 = (state_41433[(10)]);
var inst_41394 = cljs.core.first(inst_41384);
var inst_41396 = cljs.core.async.muxch_STAR_(inst_41394);
var inst_41397 = cljs.core.async.close_BANG_(inst_41396);
var inst_41398 = cljs.core.next(inst_41384);
var inst_41370 = inst_41398;
var inst_41371 = null;
var inst_41372 = (0);
var inst_41373 = (0);
var state_41433__$1 = (function (){var statearr_41519 = state_41433;
(statearr_41519[(12)] = inst_41373);

(statearr_41519[(13)] = inst_41397);

(statearr_41519[(14)] = inst_41371);

(statearr_41519[(15)] = inst_41372);

(statearr_41519[(16)] = inst_41370);

return statearr_41519;
})();
var statearr_41526_43839 = state_41433__$1;
(statearr_41526_43839[(2)] = null);

(statearr_41526_43839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (3))){
var inst_41431 = (state_41433[(2)]);
var state_41433__$1 = state_41433;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41433__$1,inst_41431);
} else {
if((state_val_41438 === (12))){
var inst_41407 = (state_41433[(2)]);
var state_41433__$1 = state_41433;
var statearr_41531_43844 = state_41433__$1;
(statearr_41531_43844[(2)] = inst_41407);

(statearr_41531_43844[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (2))){
var state_41433__$1 = state_41433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41433__$1,(4),ch);
} else {
if((state_val_41438 === (23))){
var state_41433__$1 = state_41433;
var statearr_41534_43845 = state_41433__$1;
(statearr_41534_43845[(2)] = null);

(statearr_41534_43845[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (19))){
var inst_41414 = (state_41433[(11)]);
var inst_41358 = (state_41433[(8)]);
var inst_41416 = cljs.core.async.muxch_STAR_(inst_41414);
var state_41433__$1 = state_41433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41433__$1,(22),inst_41416,inst_41358);
} else {
if((state_val_41438 === (11))){
var inst_41370 = (state_41433[(16)]);
var inst_41384 = (state_41433[(10)]);
var inst_41384__$1 = cljs.core.seq(inst_41370);
var state_41433__$1 = (function (){var statearr_41543 = state_41433;
(statearr_41543[(10)] = inst_41384__$1);

return statearr_41543;
})();
if(inst_41384__$1){
var statearr_41550_43848 = state_41433__$1;
(statearr_41550_43848[(1)] = (13));

} else {
var statearr_41554_43849 = state_41433__$1;
(statearr_41554_43849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (9))){
var inst_41409 = (state_41433[(2)]);
var state_41433__$1 = state_41433;
var statearr_41559_43853 = state_41433__$1;
(statearr_41559_43853[(2)] = inst_41409);

(statearr_41559_43853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (5))){
var inst_41367 = cljs.core.deref(mults);
var inst_41368 = cljs.core.vals(inst_41367);
var inst_41369 = cljs.core.seq(inst_41368);
var inst_41370 = inst_41369;
var inst_41371 = null;
var inst_41372 = (0);
var inst_41373 = (0);
var state_41433__$1 = (function (){var statearr_41565 = state_41433;
(statearr_41565[(12)] = inst_41373);

(statearr_41565[(14)] = inst_41371);

(statearr_41565[(15)] = inst_41372);

(statearr_41565[(16)] = inst_41370);

return statearr_41565;
})();
var statearr_41566_43854 = state_41433__$1;
(statearr_41566_43854[(2)] = null);

(statearr_41566_43854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (14))){
var state_41433__$1 = state_41433;
var statearr_41575_43855 = state_41433__$1;
(statearr_41575_43855[(2)] = null);

(statearr_41575_43855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (16))){
var inst_41384 = (state_41433[(10)]);
var inst_41389 = cljs.core.chunk_first(inst_41384);
var inst_41390 = cljs.core.chunk_rest(inst_41384);
var inst_41391 = cljs.core.count(inst_41389);
var inst_41370 = inst_41390;
var inst_41371 = inst_41389;
var inst_41372 = inst_41391;
var inst_41373 = (0);
var state_41433__$1 = (function (){var statearr_41578 = state_41433;
(statearr_41578[(12)] = inst_41373);

(statearr_41578[(14)] = inst_41371);

(statearr_41578[(15)] = inst_41372);

(statearr_41578[(16)] = inst_41370);

return statearr_41578;
})();
var statearr_41579_43856 = state_41433__$1;
(statearr_41579_43856[(2)] = null);

(statearr_41579_43856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (10))){
var inst_41373 = (state_41433[(12)]);
var inst_41371 = (state_41433[(14)]);
var inst_41372 = (state_41433[(15)]);
var inst_41370 = (state_41433[(16)]);
var inst_41378 = cljs.core._nth(inst_41371,inst_41373);
var inst_41379 = cljs.core.async.muxch_STAR_(inst_41378);
var inst_41380 = cljs.core.async.close_BANG_(inst_41379);
var inst_41381 = (inst_41373 + (1));
var tmp41572 = inst_41371;
var tmp41573 = inst_41372;
var tmp41574 = inst_41370;
var inst_41370__$1 = tmp41574;
var inst_41371__$1 = tmp41572;
var inst_41372__$1 = tmp41573;
var inst_41373__$1 = inst_41381;
var state_41433__$1 = (function (){var statearr_41586 = state_41433;
(statearr_41586[(12)] = inst_41373__$1);

(statearr_41586[(14)] = inst_41371__$1);

(statearr_41586[(17)] = inst_41380);

(statearr_41586[(15)] = inst_41372__$1);

(statearr_41586[(16)] = inst_41370__$1);

return statearr_41586;
})();
var statearr_41591_43857 = state_41433__$1;
(statearr_41591_43857[(2)] = null);

(statearr_41591_43857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (18))){
var inst_41401 = (state_41433[(2)]);
var state_41433__$1 = state_41433;
var statearr_41593_43858 = state_41433__$1;
(statearr_41593_43858[(2)] = inst_41401);

(statearr_41593_43858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (8))){
var inst_41373 = (state_41433[(12)]);
var inst_41372 = (state_41433[(15)]);
var inst_41375 = (inst_41373 < inst_41372);
var inst_41376 = inst_41375;
var state_41433__$1 = state_41433;
if(cljs.core.truth_(inst_41376)){
var statearr_41603_43859 = state_41433__$1;
(statearr_41603_43859[(1)] = (10));

} else {
var statearr_41605_43860 = state_41433__$1;
(statearr_41605_43860[(1)] = (11));

}

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
});
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_41617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41617[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_41617[(1)] = (1));

return statearr_41617;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_41433){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_41433);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e41618){var ex__38478__auto__ = e41618;
var statearr_41619_43861 = state_41433;
(statearr_41619_43861[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_41433[(4)]))){
var statearr_41623_43862 = state_41433;
(statearr_41623_43862[(1)] = cljs.core.first((state_41433[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43863 = state_41433;
state_41433 = G__43863;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_41433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_41433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_41627 = f__38859__auto__();
(statearr_41627[(6)] = c__38858__auto___43821);

return statearr_41627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__41633 = arguments.length;
switch (G__41633) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__41656 = arguments.length;
switch (G__41656) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__41667 = arguments.length;
switch (G__41667) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__38858__auto___43870 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_41736){
var state_val_41737 = (state_41736[(1)]);
if((state_val_41737 === (7))){
var state_41736__$1 = state_41736;
var statearr_41738_43874 = state_41736__$1;
(statearr_41738_43874[(2)] = null);

(statearr_41738_43874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41737 === (1))){
var state_41736__$1 = state_41736;
var statearr_41745_43875 = state_41736__$1;
(statearr_41745_43875[(2)] = null);

(statearr_41745_43875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41737 === (4))){
var inst_41676 = (state_41736[(7)]);
var inst_41677 = (state_41736[(8)]);
var inst_41679 = (inst_41677 < inst_41676);
var state_41736__$1 = state_41736;
if(cljs.core.truth_(inst_41679)){
var statearr_41746_43876 = state_41736__$1;
(statearr_41746_43876[(1)] = (6));

} else {
var statearr_41747_43877 = state_41736__$1;
(statearr_41747_43877[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41737 === (15))){
var inst_41718 = (state_41736[(9)]);
var inst_41726 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_41718);
var state_41736__$1 = state_41736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41736__$1,(17),out,inst_41726);
} else {
if((state_val_41737 === (13))){
var inst_41718 = (state_41736[(9)]);
var inst_41718__$1 = (state_41736[(2)]);
var inst_41722 = cljs.core.some(cljs.core.nil_QMARK_,inst_41718__$1);
var state_41736__$1 = (function (){var statearr_41756 = state_41736;
(statearr_41756[(9)] = inst_41718__$1);

return statearr_41756;
})();
if(cljs.core.truth_(inst_41722)){
var statearr_41757_43878 = state_41736__$1;
(statearr_41757_43878[(1)] = (14));

} else {
var statearr_41761_43879 = state_41736__$1;
(statearr_41761_43879[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41737 === (6))){
var state_41736__$1 = state_41736;
var statearr_41762_43880 = state_41736__$1;
(statearr_41762_43880[(2)] = null);

(statearr_41762_43880[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41737 === (17))){
var inst_41728 = (state_41736[(2)]);
var state_41736__$1 = (function (){var statearr_41765 = state_41736;
(statearr_41765[(10)] = inst_41728);

return statearr_41765;
})();
var statearr_41766_43881 = state_41736__$1;
(statearr_41766_43881[(2)] = null);

(statearr_41766_43881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41737 === (3))){
var inst_41734 = (state_41736[(2)]);
var state_41736__$1 = state_41736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41736__$1,inst_41734);
} else {
if((state_val_41737 === (12))){
var _ = (function (){var statearr_41772 = state_41736;
(statearr_41772[(4)] = cljs.core.rest((state_41736[(4)])));

return statearr_41772;
})();
var state_41736__$1 = state_41736;
var ex41764 = (state_41736__$1[(2)]);
var statearr_41778_43882 = state_41736__$1;
(statearr_41778_43882[(5)] = ex41764);


if((ex41764 instanceof Object)){
var statearr_41779_43883 = state_41736__$1;
(statearr_41779_43883[(1)] = (11));

(statearr_41779_43883[(5)] = null);

} else {
throw ex41764;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41737 === (2))){
var inst_41675 = cljs.core.reset_BANG_(dctr,cnt);
var inst_41676 = cnt;
var inst_41677 = (0);
var state_41736__$1 = (function (){var statearr_41797 = state_41736;
(statearr_41797[(7)] = inst_41676);

(statearr_41797[(8)] = inst_41677);

(statearr_41797[(11)] = inst_41675);

return statearr_41797;
})();
var statearr_41802_43884 = state_41736__$1;
(statearr_41802_43884[(2)] = null);

(statearr_41802_43884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41737 === (11))){
var inst_41697 = (state_41736[(2)]);
var inst_41698 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_41736__$1 = (function (){var statearr_41803 = state_41736;
(statearr_41803[(12)] = inst_41697);

return statearr_41803;
})();
var statearr_41804_43886 = state_41736__$1;
(statearr_41804_43886[(2)] = inst_41698);

(statearr_41804_43886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41737 === (9))){
var inst_41677 = (state_41736[(8)]);
var _ = (function (){var statearr_41805 = state_41736;
(statearr_41805[(4)] = cljs.core.cons((12),(state_41736[(4)])));

return statearr_41805;
})();
var inst_41704 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_41677) : chs__$1.call(null,inst_41677));
var inst_41705 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_41677) : done.call(null,inst_41677));
var inst_41706 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_41704,inst_41705);
var ___$1 = (function (){var statearr_41806 = state_41736;
(statearr_41806[(4)] = cljs.core.rest((state_41736[(4)])));

return statearr_41806;
})();
var state_41736__$1 = state_41736;
var statearr_41807_43887 = state_41736__$1;
(statearr_41807_43887[(2)] = inst_41706);

(statearr_41807_43887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41737 === (5))){
var inst_41716 = (state_41736[(2)]);
var state_41736__$1 = (function (){var statearr_41808 = state_41736;
(statearr_41808[(13)] = inst_41716);

return statearr_41808;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41736__$1,(13),dchan);
} else {
if((state_val_41737 === (14))){
var inst_41724 = cljs.core.async.close_BANG_(out);
var state_41736__$1 = state_41736;
var statearr_41812_43888 = state_41736__$1;
(statearr_41812_43888[(2)] = inst_41724);

(statearr_41812_43888[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41737 === (16))){
var inst_41731 = (state_41736[(2)]);
var state_41736__$1 = state_41736;
var statearr_41816_43893 = state_41736__$1;
(statearr_41816_43893[(2)] = inst_41731);

(statearr_41816_43893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41737 === (10))){
var inst_41677 = (state_41736[(8)]);
var inst_41709 = (state_41736[(2)]);
var inst_41710 = (inst_41677 + (1));
var inst_41677__$1 = inst_41710;
var state_41736__$1 = (function (){var statearr_41817 = state_41736;
(statearr_41817[(8)] = inst_41677__$1);

(statearr_41817[(14)] = inst_41709);

return statearr_41817;
})();
var statearr_41818_43894 = state_41736__$1;
(statearr_41818_43894[(2)] = null);

(statearr_41818_43894[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41737 === (8))){
var inst_41714 = (state_41736[(2)]);
var state_41736__$1 = state_41736;
var statearr_41819_43895 = state_41736__$1;
(statearr_41819_43895[(2)] = inst_41714);

(statearr_41819_43895[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_41820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41820[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_41820[(1)] = (1));

return statearr_41820;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_41736){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_41736);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e41823){var ex__38478__auto__ = e41823;
var statearr_41824_43896 = state_41736;
(statearr_41824_43896[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_41736[(4)]))){
var statearr_41825_43898 = state_41736;
(statearr_41825_43898[(1)] = cljs.core.first((state_41736[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43899 = state_41736;
state_41736 = G__43899;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_41736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_41736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_41830 = f__38859__auto__();
(statearr_41830[(6)] = c__38858__auto___43870);

return statearr_41830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__41837 = arguments.length;
switch (G__41837) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38858__auto___43904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_41874){
var state_val_41875 = (state_41874[(1)]);
if((state_val_41875 === (7))){
var inst_41852 = (state_41874[(7)]);
var inst_41851 = (state_41874[(8)]);
var inst_41851__$1 = (state_41874[(2)]);
var inst_41852__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41851__$1,(0),null);
var inst_41853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41851__$1,(1),null);
var inst_41854 = (inst_41852__$1 == null);
var state_41874__$1 = (function (){var statearr_41876 = state_41874;
(statearr_41876[(9)] = inst_41853);

(statearr_41876[(7)] = inst_41852__$1);

(statearr_41876[(8)] = inst_41851__$1);

return statearr_41876;
})();
if(cljs.core.truth_(inst_41854)){
var statearr_41877_43905 = state_41874__$1;
(statearr_41877_43905[(1)] = (8));

} else {
var statearr_41878_43906 = state_41874__$1;
(statearr_41878_43906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41875 === (1))){
var inst_41840 = cljs.core.vec(chs);
var inst_41841 = inst_41840;
var state_41874__$1 = (function (){var statearr_41879 = state_41874;
(statearr_41879[(10)] = inst_41841);

return statearr_41879;
})();
var statearr_41880_43907 = state_41874__$1;
(statearr_41880_43907[(2)] = null);

(statearr_41880_43907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41875 === (4))){
var inst_41841 = (state_41874[(10)]);
var state_41874__$1 = state_41874;
return cljs.core.async.ioc_alts_BANG_(state_41874__$1,(7),inst_41841);
} else {
if((state_val_41875 === (6))){
var inst_41869 = (state_41874[(2)]);
var state_41874__$1 = state_41874;
var statearr_41883_43908 = state_41874__$1;
(statearr_41883_43908[(2)] = inst_41869);

(statearr_41883_43908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41875 === (3))){
var inst_41871 = (state_41874[(2)]);
var state_41874__$1 = state_41874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41874__$1,inst_41871);
} else {
if((state_val_41875 === (2))){
var inst_41841 = (state_41874[(10)]);
var inst_41843 = cljs.core.count(inst_41841);
var inst_41844 = (inst_41843 > (0));
var state_41874__$1 = state_41874;
if(cljs.core.truth_(inst_41844)){
var statearr_41885_43913 = state_41874__$1;
(statearr_41885_43913[(1)] = (4));

} else {
var statearr_41888_43914 = state_41874__$1;
(statearr_41888_43914[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41875 === (11))){
var inst_41841 = (state_41874[(10)]);
var inst_41862 = (state_41874[(2)]);
var tmp41884 = inst_41841;
var inst_41841__$1 = tmp41884;
var state_41874__$1 = (function (){var statearr_41891 = state_41874;
(statearr_41891[(10)] = inst_41841__$1);

(statearr_41891[(11)] = inst_41862);

return statearr_41891;
})();
var statearr_41892_43918 = state_41874__$1;
(statearr_41892_43918[(2)] = null);

(statearr_41892_43918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41875 === (9))){
var inst_41852 = (state_41874[(7)]);
var state_41874__$1 = state_41874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41874__$1,(11),out,inst_41852);
} else {
if((state_val_41875 === (5))){
var inst_41867 = cljs.core.async.close_BANG_(out);
var state_41874__$1 = state_41874;
var statearr_41895_43919 = state_41874__$1;
(statearr_41895_43919[(2)] = inst_41867);

(statearr_41895_43919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41875 === (10))){
var inst_41865 = (state_41874[(2)]);
var state_41874__$1 = state_41874;
var statearr_41896_43920 = state_41874__$1;
(statearr_41896_43920[(2)] = inst_41865);

(statearr_41896_43920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41875 === (8))){
var inst_41841 = (state_41874[(10)]);
var inst_41853 = (state_41874[(9)]);
var inst_41852 = (state_41874[(7)]);
var inst_41851 = (state_41874[(8)]);
var inst_41856 = (function (){var cs = inst_41841;
var vec__41847 = inst_41851;
var v = inst_41852;
var c = inst_41853;
return (function (p1__41835_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__41835_SHARP_);
});
})();
var inst_41858 = cljs.core.filterv(inst_41856,inst_41841);
var inst_41841__$1 = inst_41858;
var state_41874__$1 = (function (){var statearr_41897 = state_41874;
(statearr_41897[(10)] = inst_41841__$1);

return statearr_41897;
})();
var statearr_41900_43925 = state_41874__$1;
(statearr_41900_43925[(2)] = null);

(statearr_41900_43925[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_41907 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41907[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_41907[(1)] = (1));

return statearr_41907;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_41874){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_41874);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e41908){var ex__38478__auto__ = e41908;
var statearr_41909_43929 = state_41874;
(statearr_41909_43929[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_41874[(4)]))){
var statearr_41910_43930 = state_41874;
(statearr_41910_43930[(1)] = cljs.core.first((state_41874[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43931 = state_41874;
state_41874 = G__43931;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_41874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_41874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_41913 = f__38859__auto__();
(statearr_41913[(6)] = c__38858__auto___43904);

return statearr_41913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__41926 = arguments.length;
switch (G__41926) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38858__auto___43936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_41958){
var state_val_41959 = (state_41958[(1)]);
if((state_val_41959 === (7))){
var inst_41938 = (state_41958[(7)]);
var inst_41938__$1 = (state_41958[(2)]);
var inst_41940 = (inst_41938__$1 == null);
var inst_41942 = cljs.core.not(inst_41940);
var state_41958__$1 = (function (){var statearr_41965 = state_41958;
(statearr_41965[(7)] = inst_41938__$1);

return statearr_41965;
})();
if(inst_41942){
var statearr_41966_43943 = state_41958__$1;
(statearr_41966_43943[(1)] = (8));

} else {
var statearr_41967_43944 = state_41958__$1;
(statearr_41967_43944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41959 === (1))){
var inst_41931 = (0);
var state_41958__$1 = (function (){var statearr_41968 = state_41958;
(statearr_41968[(8)] = inst_41931);

return statearr_41968;
})();
var statearr_41970_43948 = state_41958__$1;
(statearr_41970_43948[(2)] = null);

(statearr_41970_43948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41959 === (4))){
var state_41958__$1 = state_41958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41958__$1,(7),ch);
} else {
if((state_val_41959 === (6))){
var inst_41953 = (state_41958[(2)]);
var state_41958__$1 = state_41958;
var statearr_41971_43954 = state_41958__$1;
(statearr_41971_43954[(2)] = inst_41953);

(statearr_41971_43954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41959 === (3))){
var inst_41955 = (state_41958[(2)]);
var inst_41956 = cljs.core.async.close_BANG_(out);
var state_41958__$1 = (function (){var statearr_41980 = state_41958;
(statearr_41980[(9)] = inst_41955);

return statearr_41980;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41958__$1,inst_41956);
} else {
if((state_val_41959 === (2))){
var inst_41931 = (state_41958[(8)]);
var inst_41933 = (inst_41931 < n);
var state_41958__$1 = state_41958;
if(cljs.core.truth_(inst_41933)){
var statearr_41985_43955 = state_41958__$1;
(statearr_41985_43955[(1)] = (4));

} else {
var statearr_41986_43956 = state_41958__$1;
(statearr_41986_43956[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41959 === (11))){
var inst_41931 = (state_41958[(8)]);
var inst_41945 = (state_41958[(2)]);
var inst_41946 = (inst_41931 + (1));
var inst_41931__$1 = inst_41946;
var state_41958__$1 = (function (){var statearr_41994 = state_41958;
(statearr_41994[(10)] = inst_41945);

(statearr_41994[(8)] = inst_41931__$1);

return statearr_41994;
})();
var statearr_42001_43961 = state_41958__$1;
(statearr_42001_43961[(2)] = null);

(statearr_42001_43961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41959 === (9))){
var state_41958__$1 = state_41958;
var statearr_42002_43964 = state_41958__$1;
(statearr_42002_43964[(2)] = null);

(statearr_42002_43964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41959 === (5))){
var state_41958__$1 = state_41958;
var statearr_42009_43965 = state_41958__$1;
(statearr_42009_43965[(2)] = null);

(statearr_42009_43965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41959 === (10))){
var inst_41950 = (state_41958[(2)]);
var state_41958__$1 = state_41958;
var statearr_42010_43966 = state_41958__$1;
(statearr_42010_43966[(2)] = inst_41950);

(statearr_42010_43966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41959 === (8))){
var inst_41938 = (state_41958[(7)]);
var state_41958__$1 = state_41958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41958__$1,(11),out,inst_41938);
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
});
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_42012 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42012[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_42012[(1)] = (1));

return statearr_42012;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_41958){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_41958);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e42013){var ex__38478__auto__ = e42013;
var statearr_42014_43967 = state_41958;
(statearr_42014_43967[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_41958[(4)]))){
var statearr_42015_43968 = state_41958;
(statearr_42015_43968[(1)] = cljs.core.first((state_41958[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43969 = state_41958;
state_41958 = G__43969;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_41958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_41958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_42026 = f__38859__auto__();
(statearr_42026[(6)] = c__38858__auto___43936);

return statearr_42026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42033 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42033 = (function (f,ch,meta42034){
this.f = f;
this.ch = ch;
this.meta42034 = meta42034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42035,meta42034__$1){
var self__ = this;
var _42035__$1 = this;
return (new cljs.core.async.t_cljs$core$async42033(self__.f,self__.ch,meta42034__$1));
}));

(cljs.core.async.t_cljs$core$async42033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42035){
var self__ = this;
var _42035__$1 = this;
return self__.meta42034;
}));

(cljs.core.async.t_cljs$core$async42033.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42033.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42033.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42033.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42033.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42045 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42045 = (function (f,ch,meta42034,_,fn1,meta42046){
this.f = f;
this.ch = ch;
this.meta42034 = meta42034;
this._ = _;
this.fn1 = fn1;
this.meta42046 = meta42046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42047,meta42046__$1){
var self__ = this;
var _42047__$1 = this;
return (new cljs.core.async.t_cljs$core$async42045(self__.f,self__.ch,self__.meta42034,self__._,self__.fn1,meta42046__$1));
}));

(cljs.core.async.t_cljs$core$async42045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42047){
var self__ = this;
var _42047__$1 = this;
return self__.meta42046;
}));

(cljs.core.async.t_cljs$core$async42045.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42045.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async42045.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42045.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__42030_SHARP_){
var G__42054 = (((p1__42030_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__42030_SHARP_) : self__.f.call(null,p1__42030_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__42054) : f1.call(null,G__42054));
});
}));

(cljs.core.async.t_cljs$core$async42045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42034","meta42034",2081130240,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42033","cljs.core.async/t_cljs$core$async42033",280497140,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42046","meta42046",200125862,null)], null);
}));

(cljs.core.async.t_cljs$core$async42045.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42045");

(cljs.core.async.t_cljs$core$async42045.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42045");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42045.
 */
cljs.core.async.__GT_t_cljs$core$async42045 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42045(f__$1,ch__$1,meta42034__$1,___$2,fn1__$1,meta42046){
return (new cljs.core.async.t_cljs$core$async42045(f__$1,ch__$1,meta42034__$1,___$2,fn1__$1,meta42046));
});

}

return (new cljs.core.async.t_cljs$core$async42045(self__.f,self__.ch,self__.meta42034,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__42060 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42060) : self__.f.call(null,G__42060));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async42033.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42033.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async42033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42034","meta42034",2081130240,null)], null);
}));

(cljs.core.async.t_cljs$core$async42033.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42033");

(cljs.core.async.t_cljs$core$async42033.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42033");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42033.
 */
cljs.core.async.__GT_t_cljs$core$async42033 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42033(f__$1,ch__$1,meta42034){
return (new cljs.core.async.t_cljs$core$async42033(f__$1,ch__$1,meta42034));
});

}

return (new cljs.core.async.t_cljs$core$async42033(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42069 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42069 = (function (f,ch,meta42070){
this.f = f;
this.ch = ch;
this.meta42070 = meta42070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42071,meta42070__$1){
var self__ = this;
var _42071__$1 = this;
return (new cljs.core.async.t_cljs$core$async42069(self__.f,self__.ch,meta42070__$1));
}));

(cljs.core.async.t_cljs$core$async42069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42071){
var self__ = this;
var _42071__$1 = this;
return self__.meta42070;
}));

(cljs.core.async.t_cljs$core$async42069.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42069.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42069.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42069.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42069.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42069.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async42069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42070","meta42070",1897727690,null)], null);
}));

(cljs.core.async.t_cljs$core$async42069.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42069");

(cljs.core.async.t_cljs$core$async42069.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42069");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42069.
 */
cljs.core.async.__GT_t_cljs$core$async42069 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42069(f__$1,ch__$1,meta42070){
return (new cljs.core.async.t_cljs$core$async42069(f__$1,ch__$1,meta42070));
});

}

return (new cljs.core.async.t_cljs$core$async42069(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42077 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42077 = (function (p,ch,meta42078){
this.p = p;
this.ch = ch;
this.meta42078 = meta42078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42079,meta42078__$1){
var self__ = this;
var _42079__$1 = this;
return (new cljs.core.async.t_cljs$core$async42077(self__.p,self__.ch,meta42078__$1));
}));

(cljs.core.async.t_cljs$core$async42077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42079){
var self__ = this;
var _42079__$1 = this;
return self__.meta42078;
}));

(cljs.core.async.t_cljs$core$async42077.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42077.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42077.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42077.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42077.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42077.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42077.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async42077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42078","meta42078",-653595314,null)], null);
}));

(cljs.core.async.t_cljs$core$async42077.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42077");

(cljs.core.async.t_cljs$core$async42077.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42077");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42077.
 */
cljs.core.async.__GT_t_cljs$core$async42077 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42077(p__$1,ch__$1,meta42078){
return (new cljs.core.async.t_cljs$core$async42077(p__$1,ch__$1,meta42078));
});

}

return (new cljs.core.async.t_cljs$core$async42077(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__42096 = arguments.length;
switch (G__42096) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38858__auto___43995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_42121){
var state_val_42122 = (state_42121[(1)]);
if((state_val_42122 === (7))){
var inst_42117 = (state_42121[(2)]);
var state_42121__$1 = state_42121;
var statearr_42133_43997 = state_42121__$1;
(statearr_42133_43997[(2)] = inst_42117);

(statearr_42133_43997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42122 === (1))){
var state_42121__$1 = state_42121;
var statearr_42134_43998 = state_42121__$1;
(statearr_42134_43998[(2)] = null);

(statearr_42134_43998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42122 === (4))){
var inst_42099 = (state_42121[(7)]);
var inst_42099__$1 = (state_42121[(2)]);
var inst_42100 = (inst_42099__$1 == null);
var state_42121__$1 = (function (){var statearr_42137 = state_42121;
(statearr_42137[(7)] = inst_42099__$1);

return statearr_42137;
})();
if(cljs.core.truth_(inst_42100)){
var statearr_42138_44004 = state_42121__$1;
(statearr_42138_44004[(1)] = (5));

} else {
var statearr_42139_44007 = state_42121__$1;
(statearr_42139_44007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42122 === (6))){
var inst_42099 = (state_42121[(7)]);
var inst_42108 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42099) : p.call(null,inst_42099));
var state_42121__$1 = state_42121;
if(cljs.core.truth_(inst_42108)){
var statearr_42140_44009 = state_42121__$1;
(statearr_42140_44009[(1)] = (8));

} else {
var statearr_42141_44010 = state_42121__$1;
(statearr_42141_44010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42122 === (3))){
var inst_42119 = (state_42121[(2)]);
var state_42121__$1 = state_42121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42121__$1,inst_42119);
} else {
if((state_val_42122 === (2))){
var state_42121__$1 = state_42121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42121__$1,(4),ch);
} else {
if((state_val_42122 === (11))){
var inst_42111 = (state_42121[(2)]);
var state_42121__$1 = state_42121;
var statearr_42147_44017 = state_42121__$1;
(statearr_42147_44017[(2)] = inst_42111);

(statearr_42147_44017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42122 === (9))){
var state_42121__$1 = state_42121;
var statearr_42149_44018 = state_42121__$1;
(statearr_42149_44018[(2)] = null);

(statearr_42149_44018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42122 === (5))){
var inst_42102 = cljs.core.async.close_BANG_(out);
var state_42121__$1 = state_42121;
var statearr_42151_44020 = state_42121__$1;
(statearr_42151_44020[(2)] = inst_42102);

(statearr_42151_44020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42122 === (10))){
var inst_42114 = (state_42121[(2)]);
var state_42121__$1 = (function (){var statearr_42155 = state_42121;
(statearr_42155[(8)] = inst_42114);

return statearr_42155;
})();
var statearr_42156_44021 = state_42121__$1;
(statearr_42156_44021[(2)] = null);

(statearr_42156_44021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42122 === (8))){
var inst_42099 = (state_42121[(7)]);
var state_42121__$1 = state_42121;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42121__$1,(11),out,inst_42099);
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
});
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_42160 = [null,null,null,null,null,null,null,null,null];
(statearr_42160[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_42160[(1)] = (1));

return statearr_42160;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_42121){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_42121);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e42161){var ex__38478__auto__ = e42161;
var statearr_42162_44025 = state_42121;
(statearr_42162_44025[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_42121[(4)]))){
var statearr_42164_44026 = state_42121;
(statearr_42164_44026[(1)] = cljs.core.first((state_42121[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44027 = state_42121;
state_42121 = G__44027;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_42121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_42121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_42184 = f__38859__auto__();
(statearr_42184[(6)] = c__38858__auto___43995);

return statearr_42184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__42187 = arguments.length;
switch (G__42187) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38858__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_42259){
var state_val_42260 = (state_42259[(1)]);
if((state_val_42260 === (7))){
var inst_42255 = (state_42259[(2)]);
var state_42259__$1 = state_42259;
var statearr_42273_44037 = state_42259__$1;
(statearr_42273_44037[(2)] = inst_42255);

(statearr_42273_44037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42260 === (20))){
var inst_42225 = (state_42259[(7)]);
var inst_42236 = (state_42259[(2)]);
var inst_42237 = cljs.core.next(inst_42225);
var inst_42204 = inst_42237;
var inst_42205 = null;
var inst_42206 = (0);
var inst_42207 = (0);
var state_42259__$1 = (function (){var statearr_42278 = state_42259;
(statearr_42278[(8)] = inst_42205);

(statearr_42278[(9)] = inst_42206);

(statearr_42278[(10)] = inst_42207);

(statearr_42278[(11)] = inst_42236);

(statearr_42278[(12)] = inst_42204);

return statearr_42278;
})();
var statearr_42279_44042 = state_42259__$1;
(statearr_42279_44042[(2)] = null);

(statearr_42279_44042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42260 === (1))){
var state_42259__$1 = state_42259;
var statearr_42282_44045 = state_42259__$1;
(statearr_42282_44045[(2)] = null);

(statearr_42282_44045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42260 === (4))){
var inst_42193 = (state_42259[(13)]);
var inst_42193__$1 = (state_42259[(2)]);
var inst_42194 = (inst_42193__$1 == null);
var state_42259__$1 = (function (){var statearr_42286 = state_42259;
(statearr_42286[(13)] = inst_42193__$1);

return statearr_42286;
})();
if(cljs.core.truth_(inst_42194)){
var statearr_42287_44046 = state_42259__$1;
(statearr_42287_44046[(1)] = (5));

} else {
var statearr_42288_44047 = state_42259__$1;
(statearr_42288_44047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42260 === (15))){
var state_42259__$1 = state_42259;
var statearr_42295_44052 = state_42259__$1;
(statearr_42295_44052[(2)] = null);

(statearr_42295_44052[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42260 === (21))){
var state_42259__$1 = state_42259;
var statearr_42297_44053 = state_42259__$1;
(statearr_42297_44053[(2)] = null);

(statearr_42297_44053[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42260 === (13))){
var inst_42205 = (state_42259[(8)]);
var inst_42206 = (state_42259[(9)]);
var inst_42207 = (state_42259[(10)]);
var inst_42204 = (state_42259[(12)]);
var inst_42216 = (state_42259[(2)]);
var inst_42218 = (inst_42207 + (1));
var tmp42290 = inst_42205;
var tmp42291 = inst_42206;
var tmp42292 = inst_42204;
var inst_42204__$1 = tmp42292;
var inst_42205__$1 = tmp42290;
var inst_42206__$1 = tmp42291;
var inst_42207__$1 = inst_42218;
var state_42259__$1 = (function (){var statearr_42303 = state_42259;
(statearr_42303[(14)] = inst_42216);

(statearr_42303[(8)] = inst_42205__$1);

(statearr_42303[(9)] = inst_42206__$1);

(statearr_42303[(10)] = inst_42207__$1);

(statearr_42303[(12)] = inst_42204__$1);

return statearr_42303;
})();
var statearr_42304_44055 = state_42259__$1;
(statearr_42304_44055[(2)] = null);

(statearr_42304_44055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42260 === (22))){
var state_42259__$1 = state_42259;
var statearr_42308_44060 = state_42259__$1;
(statearr_42308_44060[(2)] = null);

(statearr_42308_44060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42260 === (6))){
var inst_42193 = (state_42259[(13)]);
var inst_42202 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42193) : f.call(null,inst_42193));
var inst_42203 = cljs.core.seq(inst_42202);
var inst_42204 = inst_42203;
var inst_42205 = null;
var inst_42206 = (0);
var inst_42207 = (0);
var state_42259__$1 = (function (){var statearr_42311 = state_42259;
(statearr_42311[(8)] = inst_42205);

(statearr_42311[(9)] = inst_42206);

(statearr_42311[(10)] = inst_42207);

(statearr_42311[(12)] = inst_42204);

return statearr_42311;
})();
var statearr_42314_44061 = state_42259__$1;
(statearr_42314_44061[(2)] = null);

(statearr_42314_44061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42260 === (17))){
var inst_42225 = (state_42259[(7)]);
var inst_42229 = cljs.core.chunk_first(inst_42225);
var inst_42230 = cljs.core.chunk_rest(inst_42225);
var inst_42231 = cljs.core.count(inst_42229);
var inst_42204 = inst_42230;
var inst_42205 = inst_42229;
var inst_42206 = inst_42231;
var inst_42207 = (0);
var state_42259__$1 = (function (){var statearr_42317 = state_42259;
(statearr_42317[(8)] = inst_42205);

(statearr_42317[(9)] = inst_42206);

(statearr_42317[(10)] = inst_42207);

(statearr_42317[(12)] = inst_42204);

return statearr_42317;
})();
var statearr_42318_44067 = state_42259__$1;
(statearr_42318_44067[(2)] = null);

(statearr_42318_44067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42260 === (3))){
var inst_42257 = (state_42259[(2)]);
var state_42259__$1 = state_42259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42259__$1,inst_42257);
} else {
if((state_val_42260 === (12))){
var inst_42245 = (state_42259[(2)]);
var state_42259__$1 = state_42259;
var statearr_42324_44069 = state_42259__$1;
(statearr_42324_44069[(2)] = inst_42245);

(statearr_42324_44069[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42260 === (2))){
var state_42259__$1 = state_42259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42259__$1,(4),in$);
} else {
if((state_val_42260 === (23))){
var inst_42253 = (state_42259[(2)]);
var state_42259__$1 = state_42259;
var statearr_42328_44070 = state_42259__$1;
(statearr_42328_44070[(2)] = inst_42253);

(statearr_42328_44070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42260 === (19))){
var inst_42240 = (state_42259[(2)]);
var state_42259__$1 = state_42259;
var statearr_42329_44071 = state_42259__$1;
(statearr_42329_44071[(2)] = inst_42240);

(statearr_42329_44071[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42260 === (11))){
var inst_42204 = (state_42259[(12)]);
var inst_42225 = (state_42259[(7)]);
var inst_42225__$1 = cljs.core.seq(inst_42204);
var state_42259__$1 = (function (){var statearr_42334 = state_42259;
(statearr_42334[(7)] = inst_42225__$1);

return statearr_42334;
})();
if(inst_42225__$1){
var statearr_42339_44076 = state_42259__$1;
(statearr_42339_44076[(1)] = (14));

} else {
var statearr_42341_44077 = state_42259__$1;
(statearr_42341_44077[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42260 === (9))){
var inst_42247 = (state_42259[(2)]);
var inst_42248 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_42259__$1 = (function (){var statearr_42363 = state_42259;
(statearr_42363[(15)] = inst_42247);

return statearr_42363;
})();
if(cljs.core.truth_(inst_42248)){
var statearr_42364_44078 = state_42259__$1;
(statearr_42364_44078[(1)] = (21));

} else {
var statearr_42365_44079 = state_42259__$1;
(statearr_42365_44079[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42260 === (5))){
var inst_42196 = cljs.core.async.close_BANG_(out);
var state_42259__$1 = state_42259;
var statearr_42366_44080 = state_42259__$1;
(statearr_42366_44080[(2)] = inst_42196);

(statearr_42366_44080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42260 === (14))){
var inst_42225 = (state_42259[(7)]);
var inst_42227 = cljs.core.chunked_seq_QMARK_(inst_42225);
var state_42259__$1 = state_42259;
if(inst_42227){
var statearr_42367_44081 = state_42259__$1;
(statearr_42367_44081[(1)] = (17));

} else {
var statearr_42368_44082 = state_42259__$1;
(statearr_42368_44082[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42260 === (16))){
var inst_42243 = (state_42259[(2)]);
var state_42259__$1 = state_42259;
var statearr_42369_44083 = state_42259__$1;
(statearr_42369_44083[(2)] = inst_42243);

(statearr_42369_44083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42260 === (10))){
var inst_42205 = (state_42259[(8)]);
var inst_42207 = (state_42259[(10)]);
var inst_42214 = cljs.core._nth(inst_42205,inst_42207);
var state_42259__$1 = state_42259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42259__$1,(13),out,inst_42214);
} else {
if((state_val_42260 === (18))){
var inst_42225 = (state_42259[(7)]);
var inst_42234 = cljs.core.first(inst_42225);
var state_42259__$1 = state_42259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42259__$1,(20),out,inst_42234);
} else {
if((state_val_42260 === (8))){
var inst_42206 = (state_42259[(9)]);
var inst_42207 = (state_42259[(10)]);
var inst_42209 = (inst_42207 < inst_42206);
var inst_42210 = inst_42209;
var state_42259__$1 = state_42259;
if(cljs.core.truth_(inst_42210)){
var statearr_42375_44084 = state_42259__$1;
(statearr_42375_44084[(1)] = (10));

} else {
var statearr_42378_44085 = state_42259__$1;
(statearr_42378_44085[(1)] = (11));

}

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38475__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38475__auto____0 = (function (){
var statearr_42381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42381[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38475__auto__);

(statearr_42381[(1)] = (1));

return statearr_42381;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38475__auto____1 = (function (state_42259){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_42259);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e42385){var ex__38478__auto__ = e42385;
var statearr_42386_44086 = state_42259;
(statearr_42386_44086[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_42259[(4)]))){
var statearr_42387_44087 = state_42259;
(statearr_42387_44087[(1)] = cljs.core.first((state_42259[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44088 = state_42259;
state_42259 = G__44088;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38475__auto__ = function(state_42259){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38475__auto____1.call(this,state_42259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38475__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38475__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_42388 = f__38859__auto__();
(statearr_42388[(6)] = c__38858__auto__);

return statearr_42388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));

return c__38858__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__42392 = arguments.length;
switch (G__42392) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__42406 = arguments.length;
switch (G__42406) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__42409 = arguments.length;
switch (G__42409) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38858__auto___44109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_42446){
var state_val_42447 = (state_42446[(1)]);
if((state_val_42447 === (7))){
var inst_42441 = (state_42446[(2)]);
var state_42446__$1 = state_42446;
var statearr_42452_44111 = state_42446__$1;
(statearr_42452_44111[(2)] = inst_42441);

(statearr_42452_44111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42447 === (1))){
var inst_42420 = null;
var state_42446__$1 = (function (){var statearr_42453 = state_42446;
(statearr_42453[(7)] = inst_42420);

return statearr_42453;
})();
var statearr_42454_44112 = state_42446__$1;
(statearr_42454_44112[(2)] = null);

(statearr_42454_44112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42447 === (4))){
var inst_42426 = (state_42446[(8)]);
var inst_42426__$1 = (state_42446[(2)]);
var inst_42427 = (inst_42426__$1 == null);
var inst_42428 = cljs.core.not(inst_42427);
var state_42446__$1 = (function (){var statearr_42458 = state_42446;
(statearr_42458[(8)] = inst_42426__$1);

return statearr_42458;
})();
if(inst_42428){
var statearr_42459_44116 = state_42446__$1;
(statearr_42459_44116[(1)] = (5));

} else {
var statearr_42460_44117 = state_42446__$1;
(statearr_42460_44117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42447 === (6))){
var state_42446__$1 = state_42446;
var statearr_42465_44122 = state_42446__$1;
(statearr_42465_44122[(2)] = null);

(statearr_42465_44122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42447 === (3))){
var inst_42443 = (state_42446[(2)]);
var inst_42444 = cljs.core.async.close_BANG_(out);
var state_42446__$1 = (function (){var statearr_42476 = state_42446;
(statearr_42476[(9)] = inst_42443);

return statearr_42476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42446__$1,inst_42444);
} else {
if((state_val_42447 === (2))){
var state_42446__$1 = state_42446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42446__$1,(4),ch);
} else {
if((state_val_42447 === (11))){
var inst_42426 = (state_42446[(8)]);
var inst_42435 = (state_42446[(2)]);
var inst_42420 = inst_42426;
var state_42446__$1 = (function (){var statearr_42477 = state_42446;
(statearr_42477[(7)] = inst_42420);

(statearr_42477[(10)] = inst_42435);

return statearr_42477;
})();
var statearr_42478_44126 = state_42446__$1;
(statearr_42478_44126[(2)] = null);

(statearr_42478_44126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42447 === (9))){
var inst_42426 = (state_42446[(8)]);
var state_42446__$1 = state_42446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42446__$1,(11),out,inst_42426);
} else {
if((state_val_42447 === (5))){
var inst_42426 = (state_42446[(8)]);
var inst_42420 = (state_42446[(7)]);
var inst_42430 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42426,inst_42420);
var state_42446__$1 = state_42446;
if(inst_42430){
var statearr_42486_44141 = state_42446__$1;
(statearr_42486_44141[(1)] = (8));

} else {
var statearr_42487_44142 = state_42446__$1;
(statearr_42487_44142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42447 === (10))){
var inst_42438 = (state_42446[(2)]);
var state_42446__$1 = state_42446;
var statearr_42488_44151 = state_42446__$1;
(statearr_42488_44151[(2)] = inst_42438);

(statearr_42488_44151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42447 === (8))){
var inst_42420 = (state_42446[(7)]);
var tmp42485 = inst_42420;
var inst_42420__$1 = tmp42485;
var state_42446__$1 = (function (){var statearr_42490 = state_42446;
(statearr_42490[(7)] = inst_42420__$1);

return statearr_42490;
})();
var statearr_42491_44168 = state_42446__$1;
(statearr_42491_44168[(2)] = null);

(statearr_42491_44168[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_42492 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42492[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_42492[(1)] = (1));

return statearr_42492;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_42446){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_42446);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e42493){var ex__38478__auto__ = e42493;
var statearr_42494_44176 = state_42446;
(statearr_42494_44176[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_42446[(4)]))){
var statearr_42495_44177 = state_42446;
(statearr_42495_44177[(1)] = cljs.core.first((state_42446[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44185 = state_42446;
state_42446 = G__44185;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_42446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_42446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_42506 = f__38859__auto__();
(statearr_42506[(6)] = c__38858__auto___44109);

return statearr_42506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__42521 = arguments.length;
switch (G__42521) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38858__auto___44207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_42565){
var state_val_42566 = (state_42565[(1)]);
if((state_val_42566 === (7))){
var inst_42560 = (state_42565[(2)]);
var state_42565__$1 = state_42565;
var statearr_42569_44208 = state_42565__$1;
(statearr_42569_44208[(2)] = inst_42560);

(statearr_42569_44208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (1))){
var inst_42526 = (new Array(n));
var inst_42527 = inst_42526;
var inst_42528 = (0);
var state_42565__$1 = (function (){var statearr_42572 = state_42565;
(statearr_42572[(7)] = inst_42527);

(statearr_42572[(8)] = inst_42528);

return statearr_42572;
})();
var statearr_42573_44210 = state_42565__$1;
(statearr_42573_44210[(2)] = null);

(statearr_42573_44210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (4))){
var inst_42531 = (state_42565[(9)]);
var inst_42531__$1 = (state_42565[(2)]);
var inst_42532 = (inst_42531__$1 == null);
var inst_42533 = cljs.core.not(inst_42532);
var state_42565__$1 = (function (){var statearr_42578 = state_42565;
(statearr_42578[(9)] = inst_42531__$1);

return statearr_42578;
})();
if(inst_42533){
var statearr_42581_44211 = state_42565__$1;
(statearr_42581_44211[(1)] = (5));

} else {
var statearr_42583_44213 = state_42565__$1;
(statearr_42583_44213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (15))){
var inst_42554 = (state_42565[(2)]);
var state_42565__$1 = state_42565;
var statearr_42584_44214 = state_42565__$1;
(statearr_42584_44214[(2)] = inst_42554);

(statearr_42584_44214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (13))){
var state_42565__$1 = state_42565;
var statearr_42593_44215 = state_42565__$1;
(statearr_42593_44215[(2)] = null);

(statearr_42593_44215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (6))){
var inst_42528 = (state_42565[(8)]);
var inst_42549 = (inst_42528 > (0));
var state_42565__$1 = state_42565;
if(cljs.core.truth_(inst_42549)){
var statearr_42601_44216 = state_42565__$1;
(statearr_42601_44216[(1)] = (12));

} else {
var statearr_42604_44217 = state_42565__$1;
(statearr_42604_44217[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (3))){
var inst_42562 = (state_42565[(2)]);
var state_42565__$1 = state_42565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42565__$1,inst_42562);
} else {
if((state_val_42566 === (12))){
var inst_42527 = (state_42565[(7)]);
var inst_42552 = cljs.core.vec(inst_42527);
var state_42565__$1 = state_42565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42565__$1,(15),out,inst_42552);
} else {
if((state_val_42566 === (2))){
var state_42565__$1 = state_42565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42565__$1,(4),ch);
} else {
if((state_val_42566 === (11))){
var inst_42543 = (state_42565[(2)]);
var inst_42544 = (new Array(n));
var inst_42527 = inst_42544;
var inst_42528 = (0);
var state_42565__$1 = (function (){var statearr_42612 = state_42565;
(statearr_42612[(7)] = inst_42527);

(statearr_42612[(8)] = inst_42528);

(statearr_42612[(10)] = inst_42543);

return statearr_42612;
})();
var statearr_42613_44223 = state_42565__$1;
(statearr_42613_44223[(2)] = null);

(statearr_42613_44223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (9))){
var inst_42527 = (state_42565[(7)]);
var inst_42541 = cljs.core.vec(inst_42527);
var state_42565__$1 = state_42565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42565__$1,(11),out,inst_42541);
} else {
if((state_val_42566 === (5))){
var inst_42531 = (state_42565[(9)]);
var inst_42527 = (state_42565[(7)]);
var inst_42528 = (state_42565[(8)]);
var inst_42536 = (state_42565[(11)]);
var inst_42535 = (inst_42527[inst_42528] = inst_42531);
var inst_42536__$1 = (inst_42528 + (1));
var inst_42537 = (inst_42536__$1 < n);
var state_42565__$1 = (function (){var statearr_42630 = state_42565;
(statearr_42630[(12)] = inst_42535);

(statearr_42630[(11)] = inst_42536__$1);

return statearr_42630;
})();
if(cljs.core.truth_(inst_42537)){
var statearr_42631_44229 = state_42565__$1;
(statearr_42631_44229[(1)] = (8));

} else {
var statearr_42632_44230 = state_42565__$1;
(statearr_42632_44230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (14))){
var inst_42557 = (state_42565[(2)]);
var inst_42558 = cljs.core.async.close_BANG_(out);
var state_42565__$1 = (function (){var statearr_42640 = state_42565;
(statearr_42640[(13)] = inst_42557);

return statearr_42640;
})();
var statearr_42641_44231 = state_42565__$1;
(statearr_42641_44231[(2)] = inst_42558);

(statearr_42641_44231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (10))){
var inst_42547 = (state_42565[(2)]);
var state_42565__$1 = state_42565;
var statearr_42644_44232 = state_42565__$1;
(statearr_42644_44232[(2)] = inst_42547);

(statearr_42644_44232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (8))){
var inst_42527 = (state_42565[(7)]);
var inst_42536 = (state_42565[(11)]);
var tmp42639 = inst_42527;
var inst_42527__$1 = tmp42639;
var inst_42528 = inst_42536;
var state_42565__$1 = (function (){var statearr_42645 = state_42565;
(statearr_42645[(7)] = inst_42527__$1);

(statearr_42645[(8)] = inst_42528);

return statearr_42645;
})();
var statearr_42648_44238 = state_42565__$1;
(statearr_42648_44238[(2)] = null);

(statearr_42648_44238[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_42650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42650[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_42650[(1)] = (1));

return statearr_42650;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_42565){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_42565);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e42656){var ex__38478__auto__ = e42656;
var statearr_42657_44240 = state_42565;
(statearr_42657_44240[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_42565[(4)]))){
var statearr_42658_44241 = state_42565;
(statearr_42658_44241[(1)] = cljs.core.first((state_42565[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44242 = state_42565;
state_42565 = G__44242;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_42565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_42565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_42665 = f__38859__auto__();
(statearr_42665[(6)] = c__38858__auto___44207);

return statearr_42665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__42667 = arguments.length;
switch (G__42667) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38858__auto___44246 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_42721){
var state_val_42722 = (state_42721[(1)]);
if((state_val_42722 === (7))){
var inst_42717 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
var statearr_42723_44252 = state_42721__$1;
(statearr_42723_44252[(2)] = inst_42717);

(statearr_42723_44252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (1))){
var inst_42675 = [];
var inst_42676 = inst_42675;
var inst_42677 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42721__$1 = (function (){var statearr_42724 = state_42721;
(statearr_42724[(7)] = inst_42677);

(statearr_42724[(8)] = inst_42676);

return statearr_42724;
})();
var statearr_42725_44254 = state_42721__$1;
(statearr_42725_44254[(2)] = null);

(statearr_42725_44254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (4))){
var inst_42680 = (state_42721[(9)]);
var inst_42680__$1 = (state_42721[(2)]);
var inst_42681 = (inst_42680__$1 == null);
var inst_42682 = cljs.core.not(inst_42681);
var state_42721__$1 = (function (){var statearr_42728 = state_42721;
(statearr_42728[(9)] = inst_42680__$1);

return statearr_42728;
})();
if(inst_42682){
var statearr_42729_44260 = state_42721__$1;
(statearr_42729_44260[(1)] = (5));

} else {
var statearr_42730_44261 = state_42721__$1;
(statearr_42730_44261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (15))){
var inst_42676 = (state_42721[(8)]);
var inst_42709 = cljs.core.vec(inst_42676);
var state_42721__$1 = state_42721;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42721__$1,(18),out,inst_42709);
} else {
if((state_val_42722 === (13))){
var inst_42704 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
var statearr_42731_44267 = state_42721__$1;
(statearr_42731_44267[(2)] = inst_42704);

(statearr_42731_44267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (6))){
var inst_42676 = (state_42721[(8)]);
var inst_42706 = inst_42676.length;
var inst_42707 = (inst_42706 > (0));
var state_42721__$1 = state_42721;
if(cljs.core.truth_(inst_42707)){
var statearr_42732_44268 = state_42721__$1;
(statearr_42732_44268[(1)] = (15));

} else {
var statearr_42733_44269 = state_42721__$1;
(statearr_42733_44269[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (17))){
var inst_42714 = (state_42721[(2)]);
var inst_42715 = cljs.core.async.close_BANG_(out);
var state_42721__$1 = (function (){var statearr_42734 = state_42721;
(statearr_42734[(10)] = inst_42714);

return statearr_42734;
})();
var statearr_42735_44270 = state_42721__$1;
(statearr_42735_44270[(2)] = inst_42715);

(statearr_42735_44270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (3))){
var inst_42719 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42721__$1,inst_42719);
} else {
if((state_val_42722 === (12))){
var inst_42676 = (state_42721[(8)]);
var inst_42697 = cljs.core.vec(inst_42676);
var state_42721__$1 = state_42721;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42721__$1,(14),out,inst_42697);
} else {
if((state_val_42722 === (2))){
var state_42721__$1 = state_42721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42721__$1,(4),ch);
} else {
if((state_val_42722 === (11))){
var inst_42680 = (state_42721[(9)]);
var inst_42685 = (state_42721[(11)]);
var inst_42676 = (state_42721[(8)]);
var inst_42694 = inst_42676.push(inst_42680);
var tmp42737 = inst_42676;
var inst_42676__$1 = tmp42737;
var inst_42677 = inst_42685;
var state_42721__$1 = (function (){var statearr_42741 = state_42721;
(statearr_42741[(7)] = inst_42677);

(statearr_42741[(12)] = inst_42694);

(statearr_42741[(8)] = inst_42676__$1);

return statearr_42741;
})();
var statearr_42742_44275 = state_42721__$1;
(statearr_42742_44275[(2)] = null);

(statearr_42742_44275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (9))){
var inst_42677 = (state_42721[(7)]);
var inst_42689 = cljs.core.keyword_identical_QMARK_(inst_42677,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_42721__$1 = state_42721;
var statearr_42743_44276 = state_42721__$1;
(statearr_42743_44276[(2)] = inst_42689);

(statearr_42743_44276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (5))){
var inst_42680 = (state_42721[(9)]);
var inst_42686 = (state_42721[(13)]);
var inst_42677 = (state_42721[(7)]);
var inst_42685 = (state_42721[(11)]);
var inst_42685__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42680) : f.call(null,inst_42680));
var inst_42686__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42685__$1,inst_42677);
var state_42721__$1 = (function (){var statearr_42744 = state_42721;
(statearr_42744[(13)] = inst_42686__$1);

(statearr_42744[(11)] = inst_42685__$1);

return statearr_42744;
})();
if(inst_42686__$1){
var statearr_42745_44277 = state_42721__$1;
(statearr_42745_44277[(1)] = (8));

} else {
var statearr_42746_44278 = state_42721__$1;
(statearr_42746_44278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (14))){
var inst_42680 = (state_42721[(9)]);
var inst_42685 = (state_42721[(11)]);
var inst_42699 = (state_42721[(2)]);
var inst_42700 = [];
var inst_42701 = inst_42700.push(inst_42680);
var inst_42676 = inst_42700;
var inst_42677 = inst_42685;
var state_42721__$1 = (function (){var statearr_42749 = state_42721;
(statearr_42749[(7)] = inst_42677);

(statearr_42749[(14)] = inst_42701);

(statearr_42749[(15)] = inst_42699);

(statearr_42749[(8)] = inst_42676);

return statearr_42749;
})();
var statearr_42750_44282 = state_42721__$1;
(statearr_42750_44282[(2)] = null);

(statearr_42750_44282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (16))){
var state_42721__$1 = state_42721;
var statearr_42752_44283 = state_42721__$1;
(statearr_42752_44283[(2)] = null);

(statearr_42752_44283[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (10))){
var inst_42691 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
if(cljs.core.truth_(inst_42691)){
var statearr_42755_44284 = state_42721__$1;
(statearr_42755_44284[(1)] = (11));

} else {
var statearr_42756_44285 = state_42721__$1;
(statearr_42756_44285[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (18))){
var inst_42711 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
var statearr_42761_44287 = state_42721__$1;
(statearr_42761_44287[(2)] = inst_42711);

(statearr_42761_44287[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (8))){
var inst_42686 = (state_42721[(13)]);
var state_42721__$1 = state_42721;
var statearr_42763_44288 = state_42721__$1;
(statearr_42763_44288[(2)] = inst_42686);

(statearr_42763_44288[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_42767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42767[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_42767[(1)] = (1));

return statearr_42767;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_42721){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_42721);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e42769){var ex__38478__auto__ = e42769;
var statearr_42770_44291 = state_42721;
(statearr_42770_44291[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_42721[(4)]))){
var statearr_42772_44292 = state_42721;
(statearr_42772_44292[(1)] = cljs.core.first((state_42721[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44293 = state_42721;
state_42721 = G__44293;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_42721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_42721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_42781 = f__38859__auto__();
(statearr_42781[(6)] = c__38858__auto___44246);

return statearr_42781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
