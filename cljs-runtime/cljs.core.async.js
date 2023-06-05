goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29529 = arguments.length;
switch (G__29529) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29536 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29536 = (function (f,blockable,meta29537){
this.f = f;
this.blockable = blockable;
this.meta29537 = meta29537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29538,meta29537__$1){
var self__ = this;
var _29538__$1 = this;
return (new cljs.core.async.t_cljs$core$async29536(self__.f,self__.blockable,meta29537__$1));
}));

(cljs.core.async.t_cljs$core$async29536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29538){
var self__ = this;
var _29538__$1 = this;
return self__.meta29537;
}));

(cljs.core.async.t_cljs$core$async29536.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29536.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29536.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29536.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29537","meta29537",324643392,null)], null);
}));

(cljs.core.async.t_cljs$core$async29536.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29536");

(cljs.core.async.t_cljs$core$async29536.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29536");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29536.
 */
cljs.core.async.__GT_t_cljs$core$async29536 = (function cljs$core$async$__GT_t_cljs$core$async29536(f__$1,blockable__$1,meta29537){
return (new cljs.core.async.t_cljs$core$async29536(f__$1,blockable__$1,meta29537));
});

}

return (new cljs.core.async.t_cljs$core$async29536(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29583 = arguments.length;
switch (G__29583) {
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
var G__29598 = arguments.length;
switch (G__29598) {
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
var G__29622 = arguments.length;
switch (G__29622) {
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
var val_32994 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32994) : fn1.call(null,val_32994));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32994) : fn1.call(null,val_32994));
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
var G__29653 = arguments.length;
switch (G__29653) {
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
var n__4741__auto___33010 = n;
var x_33011 = (0);
while(true){
if((x_33011 < n__4741__auto___33010)){
(a[x_33011] = x_33011);

var G__33012 = (x_33011 + (1));
x_33011 = G__33012;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29671 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29671 = (function (flag,meta29672){
this.flag = flag;
this.meta29672 = meta29672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29673,meta29672__$1){
var self__ = this;
var _29673__$1 = this;
return (new cljs.core.async.t_cljs$core$async29671(self__.flag,meta29672__$1));
}));

(cljs.core.async.t_cljs$core$async29671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29673){
var self__ = this;
var _29673__$1 = this;
return self__.meta29672;
}));

(cljs.core.async.t_cljs$core$async29671.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29671.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29671.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29671.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29672","meta29672",-1231665960,null)], null);
}));

(cljs.core.async.t_cljs$core$async29671.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29671");

(cljs.core.async.t_cljs$core$async29671.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29671");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29671.
 */
cljs.core.async.__GT_t_cljs$core$async29671 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29671(flag__$1,meta29672){
return (new cljs.core.async.t_cljs$core$async29671(flag__$1,meta29672));
});

}

return (new cljs.core.async.t_cljs$core$async29671(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29684 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29684 = (function (flag,cb,meta29685){
this.flag = flag;
this.cb = cb;
this.meta29685 = meta29685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29686,meta29685__$1){
var self__ = this;
var _29686__$1 = this;
return (new cljs.core.async.t_cljs$core$async29684(self__.flag,self__.cb,meta29685__$1));
}));

(cljs.core.async.t_cljs$core$async29684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29686){
var self__ = this;
var _29686__$1 = this;
return self__.meta29685;
}));

(cljs.core.async.t_cljs$core$async29684.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29684.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29684.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29684.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29685","meta29685",-1824232303,null)], null);
}));

(cljs.core.async.t_cljs$core$async29684.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29684");

(cljs.core.async.t_cljs$core$async29684.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29684");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29684.
 */
cljs.core.async.__GT_t_cljs$core$async29684 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29684(flag__$1,cb__$1,meta29685){
return (new cljs.core.async.t_cljs$core$async29684(flag__$1,cb__$1,meta29685));
});

}

return (new cljs.core.async.t_cljs$core$async29684(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29707_SHARP_){
var G__29717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29707_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29717) : fret.call(null,G__29717));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29708_SHARP_){
var G__29724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29708_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29724) : fret.call(null,G__29724));
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
var G__33040 = (i + (1));
i = G__33040;
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
var len__4864__auto___33041 = arguments.length;
var i__4865__auto___33043 = (0);
while(true){
if((i__4865__auto___33043 < len__4864__auto___33041)){
args__4870__auto__.push((arguments[i__4865__auto___33043]));

var G__33046 = (i__4865__auto___33043 + (1));
i__4865__auto___33043 = G__33046;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29737){
var map__29738 = p__29737;
var map__29738__$1 = cljs.core.__destructure_map(map__29738);
var opts = map__29738__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29735){
var G__29736 = cljs.core.first(seq29735);
var seq29735__$1 = cljs.core.next(seq29735);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29736,seq29735__$1);
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
var G__29754 = arguments.length;
switch (G__29754) {
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
var c__29368__auto___33054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_29794){
var state_val_29798 = (state_29794[(1)]);
if((state_val_29798 === (7))){
var inst_29790 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29809_33055 = state_29794__$1;
(statearr_29809_33055[(2)] = inst_29790);

(statearr_29809_33055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (1))){
var state_29794__$1 = state_29794;
var statearr_29810_33056 = state_29794__$1;
(statearr_29810_33056[(2)] = null);

(statearr_29810_33056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (4))){
var inst_29772 = (state_29794[(7)]);
var inst_29772__$1 = (state_29794[(2)]);
var inst_29773 = (inst_29772__$1 == null);
var state_29794__$1 = (function (){var statearr_29814 = state_29794;
(statearr_29814[(7)] = inst_29772__$1);

return statearr_29814;
})();
if(cljs.core.truth_(inst_29773)){
var statearr_29815_33059 = state_29794__$1;
(statearr_29815_33059[(1)] = (5));

} else {
var statearr_29817_33060 = state_29794__$1;
(statearr_29817_33060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (13))){
var state_29794__$1 = state_29794;
var statearr_29820_33061 = state_29794__$1;
(statearr_29820_33061[(2)] = null);

(statearr_29820_33061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (6))){
var inst_29772 = (state_29794[(7)]);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29794__$1,(11),to,inst_29772);
} else {
if((state_val_29798 === (3))){
var inst_29792 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29794__$1,inst_29792);
} else {
if((state_val_29798 === (12))){
var state_29794__$1 = state_29794;
var statearr_29824_33062 = state_29794__$1;
(statearr_29824_33062[(2)] = null);

(statearr_29824_33062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (2))){
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29794__$1,(4),from);
} else {
if((state_val_29798 === (11))){
var inst_29783 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
if(cljs.core.truth_(inst_29783)){
var statearr_29826_33063 = state_29794__$1;
(statearr_29826_33063[(1)] = (12));

} else {
var statearr_29827_33064 = state_29794__$1;
(statearr_29827_33064[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (9))){
var state_29794__$1 = state_29794;
var statearr_29828_33068 = state_29794__$1;
(statearr_29828_33068[(2)] = null);

(statearr_29828_33068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (5))){
var state_29794__$1 = state_29794;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29829_33069 = state_29794__$1;
(statearr_29829_33069[(1)] = (8));

} else {
var statearr_29830_33070 = state_29794__$1;
(statearr_29830_33070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (14))){
var inst_29788 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29831_33071 = state_29794__$1;
(statearr_29831_33071[(2)] = inst_29788);

(statearr_29831_33071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (10))){
var inst_29780 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29832_33072 = state_29794__$1;
(statearr_29832_33072[(2)] = inst_29780);

(statearr_29832_33072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (8))){
var inst_29777 = cljs.core.async.close_BANG_(to);
var state_29794__$1 = state_29794;
var statearr_29833_33073 = state_29794__$1;
(statearr_29833_33073[(2)] = inst_29777);

(statearr_29833_33073[(1)] = (10));


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
var cljs$core$async$state_machine__28544__auto__ = null;
var cljs$core$async$state_machine__28544__auto____0 = (function (){
var statearr_29837 = [null,null,null,null,null,null,null,null];
(statearr_29837[(0)] = cljs$core$async$state_machine__28544__auto__);

(statearr_29837[(1)] = (1));

return statearr_29837;
});
var cljs$core$async$state_machine__28544__auto____1 = (function (state_29794){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_29794);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e29838){var ex__28547__auto__ = e29838;
var statearr_29839_33074 = state_29794;
(statearr_29839_33074[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_29794[(4)]))){
var statearr_29840_33075 = state_29794;
(statearr_29840_33075[(1)] = cljs.core.first((state_29794[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33076 = state_29794;
state_29794 = G__33076;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$state_machine__28544__auto__ = function(state_29794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28544__auto____1.call(this,state_29794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28544__auto____0;
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28544__auto____1;
return cljs$core$async$state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_29843 = f__29369__auto__();
(statearr_29843[(6)] = c__29368__auto___33054);

return statearr_29843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
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
var process = (function (p__29852){
var vec__29853 = p__29852;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29853,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29853,(1),null);
var job = vec__29853;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29368__auto___33077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_29860){
var state_val_29861 = (state_29860[(1)]);
if((state_val_29861 === (1))){
var state_29860__$1 = state_29860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29860__$1,(2),res,v);
} else {
if((state_val_29861 === (2))){
var inst_29857 = (state_29860[(2)]);
var inst_29858 = cljs.core.async.close_BANG_(res);
var state_29860__$1 = (function (){var statearr_29865 = state_29860;
(statearr_29865[(7)] = inst_29857);

return statearr_29865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29860__$1,inst_29858);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____0 = (function (){
var statearr_29866 = [null,null,null,null,null,null,null,null];
(statearr_29866[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__);

(statearr_29866[(1)] = (1));

return statearr_29866;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____1 = (function (state_29860){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_29860);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e29867){var ex__28547__auto__ = e29867;
var statearr_29868_33086 = state_29860;
(statearr_29868_33086[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_29860[(4)]))){
var statearr_29869_33087 = state_29860;
(statearr_29869_33087[(1)] = cljs.core.first((state_29860[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33088 = state_29860;
state_29860 = G__33088;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__ = function(state_29860){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____1.call(this,state_29860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_29870 = f__29369__auto__();
(statearr_29870[(6)] = c__29368__auto___33077);

return statearr_29870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29872){
var vec__29873 = p__29872;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29873,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29873,(1),null);
var job = vec__29873;
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
var n__4741__auto___33089 = n;
var __33090 = (0);
while(true){
if((__33090 < n__4741__auto___33089)){
var G__29879_33091 = type;
var G__29879_33092__$1 = (((G__29879_33091 instanceof cljs.core.Keyword))?G__29879_33091.fqn:null);
switch (G__29879_33092__$1) {
case "compute":
var c__29368__auto___33094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33090,c__29368__auto___33094,G__29879_33091,G__29879_33092__$1,n__4741__auto___33089,jobs,results,process,async){
return (function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = ((function (__33090,c__29368__auto___33094,G__29879_33091,G__29879_33092__$1,n__4741__auto___33089,jobs,results,process,async){
return (function (state_29896){
var state_val_29897 = (state_29896[(1)]);
if((state_val_29897 === (1))){
var state_29896__$1 = state_29896;
var statearr_29901_33095 = state_29896__$1;
(statearr_29901_33095[(2)] = null);

(statearr_29901_33095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (2))){
var state_29896__$1 = state_29896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29896__$1,(4),jobs);
} else {
if((state_val_29897 === (3))){
var inst_29894 = (state_29896[(2)]);
var state_29896__$1 = state_29896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29896__$1,inst_29894);
} else {
if((state_val_29897 === (4))){
var inst_29886 = (state_29896[(2)]);
var inst_29887 = process(inst_29886);
var state_29896__$1 = state_29896;
if(cljs.core.truth_(inst_29887)){
var statearr_29903_33096 = state_29896__$1;
(statearr_29903_33096[(1)] = (5));

} else {
var statearr_29904_33097 = state_29896__$1;
(statearr_29904_33097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (5))){
var state_29896__$1 = state_29896;
var statearr_29905_33098 = state_29896__$1;
(statearr_29905_33098[(2)] = null);

(statearr_29905_33098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (6))){
var state_29896__$1 = state_29896;
var statearr_29906_33099 = state_29896__$1;
(statearr_29906_33099[(2)] = null);

(statearr_29906_33099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (7))){
var inst_29892 = (state_29896[(2)]);
var state_29896__$1 = state_29896;
var statearr_29908_33100 = state_29896__$1;
(statearr_29908_33100[(2)] = inst_29892);

(statearr_29908_33100[(1)] = (3));


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
});})(__33090,c__29368__auto___33094,G__29879_33091,G__29879_33092__$1,n__4741__auto___33089,jobs,results,process,async))
;
return ((function (__33090,switch__28543__auto__,c__29368__auto___33094,G__29879_33091,G__29879_33092__$1,n__4741__auto___33089,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____0 = (function (){
var statearr_29910 = [null,null,null,null,null,null,null];
(statearr_29910[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__);

(statearr_29910[(1)] = (1));

return statearr_29910;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____1 = (function (state_29896){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_29896);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e29914){var ex__28547__auto__ = e29914;
var statearr_29920_33101 = state_29896;
(statearr_29920_33101[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_29896[(4)]))){
var statearr_29932_33102 = state_29896;
(statearr_29932_33102[(1)] = cljs.core.first((state_29896[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33105 = state_29896;
state_29896 = G__33105;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__ = function(state_29896){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____1.call(this,state_29896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__;
})()
;})(__33090,switch__28543__auto__,c__29368__auto___33094,G__29879_33091,G__29879_33092__$1,n__4741__auto___33089,jobs,results,process,async))
})();
var state__29370__auto__ = (function (){var statearr_29951 = f__29369__auto__();
(statearr_29951[(6)] = c__29368__auto___33094);

return statearr_29951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
});})(__33090,c__29368__auto___33094,G__29879_33091,G__29879_33092__$1,n__4741__auto___33089,jobs,results,process,async))
);


break;
case "async":
var c__29368__auto___33106 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33090,c__29368__auto___33106,G__29879_33091,G__29879_33092__$1,n__4741__auto___33089,jobs,results,process,async){
return (function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = ((function (__33090,c__29368__auto___33106,G__29879_33091,G__29879_33092__$1,n__4741__auto___33089,jobs,results,process,async){
return (function (state_29971){
var state_val_29972 = (state_29971[(1)]);
if((state_val_29972 === (1))){
var state_29971__$1 = state_29971;
var statearr_29975_33107 = state_29971__$1;
(statearr_29975_33107[(2)] = null);

(statearr_29975_33107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29972 === (2))){
var state_29971__$1 = state_29971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29971__$1,(4),jobs);
} else {
if((state_val_29972 === (3))){
var inst_29969 = (state_29971[(2)]);
var state_29971__$1 = state_29971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29971__$1,inst_29969);
} else {
if((state_val_29972 === (4))){
var inst_29961 = (state_29971[(2)]);
var inst_29962 = async(inst_29961);
var state_29971__$1 = state_29971;
if(cljs.core.truth_(inst_29962)){
var statearr_29977_33110 = state_29971__$1;
(statearr_29977_33110[(1)] = (5));

} else {
var statearr_29978_33111 = state_29971__$1;
(statearr_29978_33111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29972 === (5))){
var state_29971__$1 = state_29971;
var statearr_29980_33112 = state_29971__$1;
(statearr_29980_33112[(2)] = null);

(statearr_29980_33112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29972 === (6))){
var state_29971__$1 = state_29971;
var statearr_29981_33113 = state_29971__$1;
(statearr_29981_33113[(2)] = null);

(statearr_29981_33113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29972 === (7))){
var inst_29967 = (state_29971[(2)]);
var state_29971__$1 = state_29971;
var statearr_29982_33114 = state_29971__$1;
(statearr_29982_33114[(2)] = inst_29967);

(statearr_29982_33114[(1)] = (3));


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
});})(__33090,c__29368__auto___33106,G__29879_33091,G__29879_33092__$1,n__4741__auto___33089,jobs,results,process,async))
;
return ((function (__33090,switch__28543__auto__,c__29368__auto___33106,G__29879_33091,G__29879_33092__$1,n__4741__auto___33089,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____0 = (function (){
var statearr_29983 = [null,null,null,null,null,null,null];
(statearr_29983[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__);

(statearr_29983[(1)] = (1));

return statearr_29983;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____1 = (function (state_29971){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_29971);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e29985){var ex__28547__auto__ = e29985;
var statearr_29987_33116 = state_29971;
(statearr_29987_33116[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_29971[(4)]))){
var statearr_29988_33117 = state_29971;
(statearr_29988_33117[(1)] = cljs.core.first((state_29971[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33118 = state_29971;
state_29971 = G__33118;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__ = function(state_29971){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____1.call(this,state_29971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__;
})()
;})(__33090,switch__28543__auto__,c__29368__auto___33106,G__29879_33091,G__29879_33092__$1,n__4741__auto___33089,jobs,results,process,async))
})();
var state__29370__auto__ = (function (){var statearr_29989 = f__29369__auto__();
(statearr_29989[(6)] = c__29368__auto___33106);

return statearr_29989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
});})(__33090,c__29368__auto___33106,G__29879_33091,G__29879_33092__$1,n__4741__auto___33089,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29879_33092__$1)].join('')));

}

var G__33119 = (__33090 + (1));
__33090 = G__33119;
continue;
} else {
}
break;
}

var c__29368__auto___33120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_30016){
var state_val_30017 = (state_30016[(1)]);
if((state_val_30017 === (7))){
var inst_30010 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
var statearr_30027_33121 = state_30016__$1;
(statearr_30027_33121[(2)] = inst_30010);

(statearr_30027_33121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (1))){
var state_30016__$1 = state_30016;
var statearr_30028_33122 = state_30016__$1;
(statearr_30028_33122[(2)] = null);

(statearr_30028_33122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (4))){
var inst_29992 = (state_30016[(7)]);
var inst_29992__$1 = (state_30016[(2)]);
var inst_29993 = (inst_29992__$1 == null);
var state_30016__$1 = (function (){var statearr_30032 = state_30016;
(statearr_30032[(7)] = inst_29992__$1);

return statearr_30032;
})();
if(cljs.core.truth_(inst_29993)){
var statearr_30033_33123 = state_30016__$1;
(statearr_30033_33123[(1)] = (5));

} else {
var statearr_30034_33124 = state_30016__$1;
(statearr_30034_33124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (6))){
var inst_29992 = (state_30016[(7)]);
var inst_29997 = (state_30016[(8)]);
var inst_29997__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30000 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30002 = [inst_29992,inst_29997__$1];
var inst_30003 = (new cljs.core.PersistentVector(null,2,(5),inst_30000,inst_30002,null));
var state_30016__$1 = (function (){var statearr_30041 = state_30016;
(statearr_30041[(8)] = inst_29997__$1);

return statearr_30041;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30016__$1,(8),jobs,inst_30003);
} else {
if((state_val_30017 === (3))){
var inst_30012 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30016__$1,inst_30012);
} else {
if((state_val_30017 === (2))){
var state_30016__$1 = state_30016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30016__$1,(4),from);
} else {
if((state_val_30017 === (9))){
var inst_30007 = (state_30016[(2)]);
var state_30016__$1 = (function (){var statearr_30042 = state_30016;
(statearr_30042[(9)] = inst_30007);

return statearr_30042;
})();
var statearr_30043_33125 = state_30016__$1;
(statearr_30043_33125[(2)] = null);

(statearr_30043_33125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (5))){
var inst_29995 = cljs.core.async.close_BANG_(jobs);
var state_30016__$1 = state_30016;
var statearr_30044_33126 = state_30016__$1;
(statearr_30044_33126[(2)] = inst_29995);

(statearr_30044_33126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (8))){
var inst_29997 = (state_30016[(8)]);
var inst_30005 = (state_30016[(2)]);
var state_30016__$1 = (function (){var statearr_30045 = state_30016;
(statearr_30045[(10)] = inst_30005);

return statearr_30045;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30016__$1,(9),results,inst_29997);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____0 = (function (){
var statearr_30048 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30048[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__);

(statearr_30048[(1)] = (1));

return statearr_30048;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____1 = (function (state_30016){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_30016);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e30050){var ex__28547__auto__ = e30050;
var statearr_30051_33136 = state_30016;
(statearr_30051_33136[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_30016[(4)]))){
var statearr_30053_33137 = state_30016;
(statearr_30053_33137[(1)] = cljs.core.first((state_30016[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33138 = state_30016;
state_30016 = G__33138;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__ = function(state_30016){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____1.call(this,state_30016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_30054 = f__29369__auto__();
(statearr_30054[(6)] = c__29368__auto___33120);

return statearr_30054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
}));


var c__29368__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_30093){
var state_val_30094 = (state_30093[(1)]);
if((state_val_30094 === (7))){
var inst_30089 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
var statearr_30098_33143 = state_30093__$1;
(statearr_30098_33143[(2)] = inst_30089);

(statearr_30098_33143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (20))){
var state_30093__$1 = state_30093;
var statearr_30099_33145 = state_30093__$1;
(statearr_30099_33145[(2)] = null);

(statearr_30099_33145[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (1))){
var state_30093__$1 = state_30093;
var statearr_30101_33150 = state_30093__$1;
(statearr_30101_33150[(2)] = null);

(statearr_30101_33150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (4))){
var inst_30058 = (state_30093[(7)]);
var inst_30058__$1 = (state_30093[(2)]);
var inst_30059 = (inst_30058__$1 == null);
var state_30093__$1 = (function (){var statearr_30103 = state_30093;
(statearr_30103[(7)] = inst_30058__$1);

return statearr_30103;
})();
if(cljs.core.truth_(inst_30059)){
var statearr_30105_33151 = state_30093__$1;
(statearr_30105_33151[(1)] = (5));

} else {
var statearr_30106_33152 = state_30093__$1;
(statearr_30106_33152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (15))){
var inst_30071 = (state_30093[(8)]);
var state_30093__$1 = state_30093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30093__$1,(18),to,inst_30071);
} else {
if((state_val_30094 === (21))){
var inst_30084 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
var statearr_30109_33153 = state_30093__$1;
(statearr_30109_33153[(2)] = inst_30084);

(statearr_30109_33153[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (13))){
var inst_30086 = (state_30093[(2)]);
var state_30093__$1 = (function (){var statearr_30110 = state_30093;
(statearr_30110[(9)] = inst_30086);

return statearr_30110;
})();
var statearr_30111_33154 = state_30093__$1;
(statearr_30111_33154[(2)] = null);

(statearr_30111_33154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (6))){
var inst_30058 = (state_30093[(7)]);
var state_30093__$1 = state_30093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30093__$1,(11),inst_30058);
} else {
if((state_val_30094 === (17))){
var inst_30079 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
if(cljs.core.truth_(inst_30079)){
var statearr_30117_33159 = state_30093__$1;
(statearr_30117_33159[(1)] = (19));

} else {
var statearr_30118_33161 = state_30093__$1;
(statearr_30118_33161[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (3))){
var inst_30091 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30093__$1,inst_30091);
} else {
if((state_val_30094 === (12))){
var inst_30068 = (state_30093[(10)]);
var state_30093__$1 = state_30093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30093__$1,(14),inst_30068);
} else {
if((state_val_30094 === (2))){
var state_30093__$1 = state_30093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30093__$1,(4),results);
} else {
if((state_val_30094 === (19))){
var state_30093__$1 = state_30093;
var statearr_30124_33163 = state_30093__$1;
(statearr_30124_33163[(2)] = null);

(statearr_30124_33163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (11))){
var inst_30068 = (state_30093[(2)]);
var state_30093__$1 = (function (){var statearr_30126 = state_30093;
(statearr_30126[(10)] = inst_30068);

return statearr_30126;
})();
var statearr_30127_33164 = state_30093__$1;
(statearr_30127_33164[(2)] = null);

(statearr_30127_33164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (9))){
var state_30093__$1 = state_30093;
var statearr_30131_33165 = state_30093__$1;
(statearr_30131_33165[(2)] = null);

(statearr_30131_33165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (5))){
var state_30093__$1 = state_30093;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30132_33166 = state_30093__$1;
(statearr_30132_33166[(1)] = (8));

} else {
var statearr_30133_33167 = state_30093__$1;
(statearr_30133_33167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (14))){
var inst_30071 = (state_30093[(8)]);
var inst_30073 = (state_30093[(11)]);
var inst_30071__$1 = (state_30093[(2)]);
var inst_30072 = (inst_30071__$1 == null);
var inst_30073__$1 = cljs.core.not(inst_30072);
var state_30093__$1 = (function (){var statearr_30134 = state_30093;
(statearr_30134[(8)] = inst_30071__$1);

(statearr_30134[(11)] = inst_30073__$1);

return statearr_30134;
})();
if(inst_30073__$1){
var statearr_30136_33168 = state_30093__$1;
(statearr_30136_33168[(1)] = (15));

} else {
var statearr_30137_33169 = state_30093__$1;
(statearr_30137_33169[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (16))){
var inst_30073 = (state_30093[(11)]);
var state_30093__$1 = state_30093;
var statearr_30142_33170 = state_30093__$1;
(statearr_30142_33170[(2)] = inst_30073);

(statearr_30142_33170[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (10))){
var inst_30065 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
var statearr_30144_33171 = state_30093__$1;
(statearr_30144_33171[(2)] = inst_30065);

(statearr_30144_33171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (18))){
var inst_30076 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
var statearr_30151_33173 = state_30093__$1;
(statearr_30151_33173[(2)] = inst_30076);

(statearr_30151_33173[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (8))){
var inst_30062 = cljs.core.async.close_BANG_(to);
var state_30093__$1 = state_30093;
var statearr_30154_33175 = state_30093__$1;
(statearr_30154_33175[(2)] = inst_30062);

(statearr_30154_33175[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____0 = (function (){
var statearr_30158 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30158[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__);

(statearr_30158[(1)] = (1));

return statearr_30158;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____1 = (function (state_30093){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_30093);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e30160){var ex__28547__auto__ = e30160;
var statearr_30161_33176 = state_30093;
(statearr_30161_33176[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_30093[(4)]))){
var statearr_30162_33177 = state_30093;
(statearr_30162_33177[(1)] = cljs.core.first((state_30093[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33178 = state_30093;
state_30093 = G__33178;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__ = function(state_30093){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____1.call(this,state_30093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28544__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_30166 = f__29369__auto__();
(statearr_30166[(6)] = c__29368__auto__);

return statearr_30166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
}));

return c__29368__auto__;
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
var G__30172 = arguments.length;
switch (G__30172) {
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
var G__30184 = arguments.length;
switch (G__30184) {
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
var G__30198 = arguments.length;
switch (G__30198) {
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
var c__29368__auto___33184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_30249){
var state_val_30250 = (state_30249[(1)]);
if((state_val_30250 === (7))){
var inst_30245 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
var statearr_30255_33185 = state_30249__$1;
(statearr_30255_33185[(2)] = inst_30245);

(statearr_30255_33185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (1))){
var state_30249__$1 = state_30249;
var statearr_30256_33186 = state_30249__$1;
(statearr_30256_33186[(2)] = null);

(statearr_30256_33186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (4))){
var inst_30223 = (state_30249[(7)]);
var inst_30223__$1 = (state_30249[(2)]);
var inst_30224 = (inst_30223__$1 == null);
var state_30249__$1 = (function (){var statearr_30258 = state_30249;
(statearr_30258[(7)] = inst_30223__$1);

return statearr_30258;
})();
if(cljs.core.truth_(inst_30224)){
var statearr_30260_33187 = state_30249__$1;
(statearr_30260_33187[(1)] = (5));

} else {
var statearr_30262_33188 = state_30249__$1;
(statearr_30262_33188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (13))){
var state_30249__$1 = state_30249;
var statearr_30266_33189 = state_30249__$1;
(statearr_30266_33189[(2)] = null);

(statearr_30266_33189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (6))){
var inst_30223 = (state_30249[(7)]);
var inst_30231 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30223) : p.call(null,inst_30223));
var state_30249__$1 = state_30249;
if(cljs.core.truth_(inst_30231)){
var statearr_30269_33190 = state_30249__$1;
(statearr_30269_33190[(1)] = (9));

} else {
var statearr_30271_33191 = state_30249__$1;
(statearr_30271_33191[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (3))){
var inst_30247 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30249__$1,inst_30247);
} else {
if((state_val_30250 === (12))){
var state_30249__$1 = state_30249;
var statearr_30276_33192 = state_30249__$1;
(statearr_30276_33192[(2)] = null);

(statearr_30276_33192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (2))){
var state_30249__$1 = state_30249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30249__$1,(4),ch);
} else {
if((state_val_30250 === (11))){
var inst_30223 = (state_30249[(7)]);
var inst_30236 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30249__$1,(8),inst_30236,inst_30223);
} else {
if((state_val_30250 === (9))){
var state_30249__$1 = state_30249;
var statearr_30280_33194 = state_30249__$1;
(statearr_30280_33194[(2)] = tc);

(statearr_30280_33194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (5))){
var inst_30228 = cljs.core.async.close_BANG_(tc);
var inst_30229 = cljs.core.async.close_BANG_(fc);
var state_30249__$1 = (function (){var statearr_30283 = state_30249;
(statearr_30283[(8)] = inst_30228);

return statearr_30283;
})();
var statearr_30285_33196 = state_30249__$1;
(statearr_30285_33196[(2)] = inst_30229);

(statearr_30285_33196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (14))){
var inst_30243 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
var statearr_30287_33198 = state_30249__$1;
(statearr_30287_33198[(2)] = inst_30243);

(statearr_30287_33198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (10))){
var state_30249__$1 = state_30249;
var statearr_30288_33201 = state_30249__$1;
(statearr_30288_33201[(2)] = fc);

(statearr_30288_33201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (8))){
var inst_30238 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
if(cljs.core.truth_(inst_30238)){
var statearr_30291_33204 = state_30249__$1;
(statearr_30291_33204[(1)] = (12));

} else {
var statearr_30294_33205 = state_30249__$1;
(statearr_30294_33205[(1)] = (13));

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
var cljs$core$async$state_machine__28544__auto__ = null;
var cljs$core$async$state_machine__28544__auto____0 = (function (){
var statearr_30298 = [null,null,null,null,null,null,null,null,null];
(statearr_30298[(0)] = cljs$core$async$state_machine__28544__auto__);

(statearr_30298[(1)] = (1));

return statearr_30298;
});
var cljs$core$async$state_machine__28544__auto____1 = (function (state_30249){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_30249);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e30309){var ex__28547__auto__ = e30309;
var statearr_30311_33210 = state_30249;
(statearr_30311_33210[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_30249[(4)]))){
var statearr_30317_33211 = state_30249;
(statearr_30317_33211[(1)] = cljs.core.first((state_30249[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33214 = state_30249;
state_30249 = G__33214;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$state_machine__28544__auto__ = function(state_30249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28544__auto____1.call(this,state_30249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28544__auto____0;
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28544__auto____1;
return cljs$core$async$state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_30327 = f__29369__auto__();
(statearr_30327[(6)] = c__29368__auto___33184);

return statearr_30327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
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
var c__29368__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_30368){
var state_val_30369 = (state_30368[(1)]);
if((state_val_30369 === (7))){
var inst_30361 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
var statearr_30374_33216 = state_30368__$1;
(statearr_30374_33216[(2)] = inst_30361);

(statearr_30374_33216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (1))){
var inst_30338 = init;
var inst_30339 = inst_30338;
var state_30368__$1 = (function (){var statearr_30376 = state_30368;
(statearr_30376[(7)] = inst_30339);

return statearr_30376;
})();
var statearr_30377_33218 = state_30368__$1;
(statearr_30377_33218[(2)] = null);

(statearr_30377_33218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (4))){
var inst_30344 = (state_30368[(8)]);
var inst_30344__$1 = (state_30368[(2)]);
var inst_30345 = (inst_30344__$1 == null);
var state_30368__$1 = (function (){var statearr_30380 = state_30368;
(statearr_30380[(8)] = inst_30344__$1);

return statearr_30380;
})();
if(cljs.core.truth_(inst_30345)){
var statearr_30381_33220 = state_30368__$1;
(statearr_30381_33220[(1)] = (5));

} else {
var statearr_30382_33222 = state_30368__$1;
(statearr_30382_33222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (6))){
var inst_30344 = (state_30368[(8)]);
var inst_30339 = (state_30368[(7)]);
var inst_30349 = (state_30368[(9)]);
var inst_30349__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30339,inst_30344) : f.call(null,inst_30339,inst_30344));
var inst_30350 = cljs.core.reduced_QMARK_(inst_30349__$1);
var state_30368__$1 = (function (){var statearr_30387 = state_30368;
(statearr_30387[(9)] = inst_30349__$1);

return statearr_30387;
})();
if(inst_30350){
var statearr_30388_33223 = state_30368__$1;
(statearr_30388_33223[(1)] = (8));

} else {
var statearr_30389_33224 = state_30368__$1;
(statearr_30389_33224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (3))){
var inst_30363 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30368__$1,inst_30363);
} else {
if((state_val_30369 === (2))){
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30368__$1,(4),ch);
} else {
if((state_val_30369 === (9))){
var inst_30349 = (state_30368[(9)]);
var inst_30339 = inst_30349;
var state_30368__$1 = (function (){var statearr_30395 = state_30368;
(statearr_30395[(7)] = inst_30339);

return statearr_30395;
})();
var statearr_30397_33226 = state_30368__$1;
(statearr_30397_33226[(2)] = null);

(statearr_30397_33226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (5))){
var inst_30339 = (state_30368[(7)]);
var state_30368__$1 = state_30368;
var statearr_30399_33227 = state_30368__$1;
(statearr_30399_33227[(2)] = inst_30339);

(statearr_30399_33227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (10))){
var inst_30359 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
var statearr_30401_33228 = state_30368__$1;
(statearr_30401_33228[(2)] = inst_30359);

(statearr_30401_33228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (8))){
var inst_30349 = (state_30368[(9)]);
var inst_30355 = cljs.core.deref(inst_30349);
var state_30368__$1 = state_30368;
var statearr_30408_33229 = state_30368__$1;
(statearr_30408_33229[(2)] = inst_30355);

(statearr_30408_33229[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28544__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28544__auto____0 = (function (){
var statearr_30412 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30412[(0)] = cljs$core$async$reduce_$_state_machine__28544__auto__);

(statearr_30412[(1)] = (1));

return statearr_30412;
});
var cljs$core$async$reduce_$_state_machine__28544__auto____1 = (function (state_30368){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_30368);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e30413){var ex__28547__auto__ = e30413;
var statearr_30415_33230 = state_30368;
(statearr_30415_33230[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_30368[(4)]))){
var statearr_30416_33231 = state_30368;
(statearr_30416_33231[(1)] = cljs.core.first((state_30368[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33232 = state_30368;
state_30368 = G__33232;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28544__auto__ = function(state_30368){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28544__auto____1.call(this,state_30368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28544__auto____0;
cljs$core$async$reduce_$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28544__auto____1;
return cljs$core$async$reduce_$_state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_30421 = f__29369__auto__();
(statearr_30421[(6)] = c__29368__auto__);

return statearr_30421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
}));

return c__29368__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29368__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_30441){
var state_val_30442 = (state_30441[(1)]);
if((state_val_30442 === (1))){
var inst_30436 = cljs.core.async.reduce(f__$1,init,ch);
var state_30441__$1 = state_30441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30441__$1,(2),inst_30436);
} else {
if((state_val_30442 === (2))){
var inst_30438 = (state_30441[(2)]);
var inst_30439 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30438) : f__$1.call(null,inst_30438));
var state_30441__$1 = state_30441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30441__$1,inst_30439);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28544__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28544__auto____0 = (function (){
var statearr_30458 = [null,null,null,null,null,null,null];
(statearr_30458[(0)] = cljs$core$async$transduce_$_state_machine__28544__auto__);

(statearr_30458[(1)] = (1));

return statearr_30458;
});
var cljs$core$async$transduce_$_state_machine__28544__auto____1 = (function (state_30441){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_30441);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e30461){var ex__28547__auto__ = e30461;
var statearr_30463_33234 = state_30441;
(statearr_30463_33234[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_30441[(4)]))){
var statearr_30470_33236 = state_30441;
(statearr_30470_33236[(1)] = cljs.core.first((state_30441[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33237 = state_30441;
state_30441 = G__33237;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28544__auto__ = function(state_30441){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28544__auto____1.call(this,state_30441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28544__auto____0;
cljs$core$async$transduce_$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28544__auto____1;
return cljs$core$async$transduce_$_state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_30474 = f__29369__auto__();
(statearr_30474[(6)] = c__29368__auto__);

return statearr_30474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
}));

return c__29368__auto__;
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
var G__30478 = arguments.length;
switch (G__30478) {
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
var c__29368__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_30523){
var state_val_30524 = (state_30523[(1)]);
if((state_val_30524 === (7))){
var inst_30503 = (state_30523[(2)]);
var state_30523__$1 = state_30523;
var statearr_30532_33246 = state_30523__$1;
(statearr_30532_33246[(2)] = inst_30503);

(statearr_30532_33246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (1))){
var inst_30497 = cljs.core.seq(coll);
var inst_30498 = inst_30497;
var state_30523__$1 = (function (){var statearr_30536 = state_30523;
(statearr_30536[(7)] = inst_30498);

return statearr_30536;
})();
var statearr_30537_33247 = state_30523__$1;
(statearr_30537_33247[(2)] = null);

(statearr_30537_33247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (4))){
var inst_30498 = (state_30523[(7)]);
var inst_30501 = cljs.core.first(inst_30498);
var state_30523__$1 = state_30523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30523__$1,(7),ch,inst_30501);
} else {
if((state_val_30524 === (13))){
var inst_30517 = (state_30523[(2)]);
var state_30523__$1 = state_30523;
var statearr_30542_33249 = state_30523__$1;
(statearr_30542_33249[(2)] = inst_30517);

(statearr_30542_33249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (6))){
var inst_30506 = (state_30523[(2)]);
var state_30523__$1 = state_30523;
if(cljs.core.truth_(inst_30506)){
var statearr_30543_33250 = state_30523__$1;
(statearr_30543_33250[(1)] = (8));

} else {
var statearr_30544_33251 = state_30523__$1;
(statearr_30544_33251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (3))){
var inst_30521 = (state_30523[(2)]);
var state_30523__$1 = state_30523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30523__$1,inst_30521);
} else {
if((state_val_30524 === (12))){
var state_30523__$1 = state_30523;
var statearr_30546_33252 = state_30523__$1;
(statearr_30546_33252[(2)] = null);

(statearr_30546_33252[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (2))){
var inst_30498 = (state_30523[(7)]);
var state_30523__$1 = state_30523;
if(cljs.core.truth_(inst_30498)){
var statearr_30549_33253 = state_30523__$1;
(statearr_30549_33253[(1)] = (4));

} else {
var statearr_30550_33254 = state_30523__$1;
(statearr_30550_33254[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (11))){
var inst_30514 = cljs.core.async.close_BANG_(ch);
var state_30523__$1 = state_30523;
var statearr_30552_33255 = state_30523__$1;
(statearr_30552_33255[(2)] = inst_30514);

(statearr_30552_33255[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (9))){
var state_30523__$1 = state_30523;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30555_33256 = state_30523__$1;
(statearr_30555_33256[(1)] = (11));

} else {
var statearr_30560_33257 = state_30523__$1;
(statearr_30560_33257[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (5))){
var inst_30498 = (state_30523[(7)]);
var state_30523__$1 = state_30523;
var statearr_30563_33258 = state_30523__$1;
(statearr_30563_33258[(2)] = inst_30498);

(statearr_30563_33258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (10))){
var inst_30519 = (state_30523[(2)]);
var state_30523__$1 = state_30523;
var statearr_30568_33268 = state_30523__$1;
(statearr_30568_33268[(2)] = inst_30519);

(statearr_30568_33268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (8))){
var inst_30498 = (state_30523[(7)]);
var inst_30510 = cljs.core.next(inst_30498);
var inst_30498__$1 = inst_30510;
var state_30523__$1 = (function (){var statearr_30570 = state_30523;
(statearr_30570[(7)] = inst_30498__$1);

return statearr_30570;
})();
var statearr_30571_33269 = state_30523__$1;
(statearr_30571_33269[(2)] = null);

(statearr_30571_33269[(1)] = (2));


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
var cljs$core$async$state_machine__28544__auto__ = null;
var cljs$core$async$state_machine__28544__auto____0 = (function (){
var statearr_30576 = [null,null,null,null,null,null,null,null];
(statearr_30576[(0)] = cljs$core$async$state_machine__28544__auto__);

(statearr_30576[(1)] = (1));

return statearr_30576;
});
var cljs$core$async$state_machine__28544__auto____1 = (function (state_30523){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_30523);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e30577){var ex__28547__auto__ = e30577;
var statearr_30580_33270 = state_30523;
(statearr_30580_33270[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_30523[(4)]))){
var statearr_30582_33272 = state_30523;
(statearr_30582_33272[(1)] = cljs.core.first((state_30523[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33273 = state_30523;
state_30523 = G__33273;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$state_machine__28544__auto__ = function(state_30523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28544__auto____1.call(this,state_30523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28544__auto____0;
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28544__auto____1;
return cljs$core$async$state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_30588 = f__29369__auto__();
(statearr_30588[(6)] = c__29368__auto__);

return statearr_30588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
}));

return c__29368__auto__;
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
var G__30598 = arguments.length;
switch (G__30598) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33280 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33280(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33282 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33282(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33289 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33289(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33291 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33291(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30665 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30665 = (function (ch,cs,meta30666){
this.ch = ch;
this.cs = cs;
this.meta30666 = meta30666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30667,meta30666__$1){
var self__ = this;
var _30667__$1 = this;
return (new cljs.core.async.t_cljs$core$async30665(self__.ch,self__.cs,meta30666__$1));
}));

(cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30667){
var self__ = this;
var _30667__$1 = this;
return self__.meta30666;
}));

(cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30666","meta30666",2146358070,null)], null);
}));

(cljs.core.async.t_cljs$core$async30665.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30665");

(cljs.core.async.t_cljs$core$async30665.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30665");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30665.
 */
cljs.core.async.__GT_t_cljs$core$async30665 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30665(ch__$1,cs__$1,meta30666){
return (new cljs.core.async.t_cljs$core$async30665(ch__$1,cs__$1,meta30666));
});

}

return (new cljs.core.async.t_cljs$core$async30665(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29368__auto___33295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_30842){
var state_val_30843 = (state_30842[(1)]);
if((state_val_30843 === (7))){
var inst_30837 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30845_33299 = state_30842__$1;
(statearr_30845_33299[(2)] = inst_30837);

(statearr_30845_33299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (20))){
var inst_30729 = (state_30842[(7)]);
var inst_30742 = cljs.core.first(inst_30729);
var inst_30743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30742,(0),null);
var inst_30744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30742,(1),null);
var state_30842__$1 = (function (){var statearr_30846 = state_30842;
(statearr_30846[(8)] = inst_30743);

return statearr_30846;
})();
if(cljs.core.truth_(inst_30744)){
var statearr_30847_33300 = state_30842__$1;
(statearr_30847_33300[(1)] = (22));

} else {
var statearr_30848_33301 = state_30842__$1;
(statearr_30848_33301[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (27))){
var inst_30698 = (state_30842[(9)]);
var inst_30775 = (state_30842[(10)]);
var inst_30781 = (state_30842[(11)]);
var inst_30773 = (state_30842[(12)]);
var inst_30781__$1 = cljs.core._nth(inst_30773,inst_30775);
var inst_30782 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30781__$1,inst_30698,done);
var state_30842__$1 = (function (){var statearr_30854 = state_30842;
(statearr_30854[(11)] = inst_30781__$1);

return statearr_30854;
})();
if(cljs.core.truth_(inst_30782)){
var statearr_30857_33305 = state_30842__$1;
(statearr_30857_33305[(1)] = (30));

} else {
var statearr_30859_33306 = state_30842__$1;
(statearr_30859_33306[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (1))){
var state_30842__$1 = state_30842;
var statearr_30860_33307 = state_30842__$1;
(statearr_30860_33307[(2)] = null);

(statearr_30860_33307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (24))){
var inst_30729 = (state_30842[(7)]);
var inst_30750 = (state_30842[(2)]);
var inst_30751 = cljs.core.next(inst_30729);
var inst_30707 = inst_30751;
var inst_30708 = null;
var inst_30709 = (0);
var inst_30710 = (0);
var state_30842__$1 = (function (){var statearr_30861 = state_30842;
(statearr_30861[(13)] = inst_30707);

(statearr_30861[(14)] = inst_30709);

(statearr_30861[(15)] = inst_30710);

(statearr_30861[(16)] = inst_30750);

(statearr_30861[(17)] = inst_30708);

return statearr_30861;
})();
var statearr_30862_33310 = state_30842__$1;
(statearr_30862_33310[(2)] = null);

(statearr_30862_33310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (39))){
var state_30842__$1 = state_30842;
var statearr_30866_33311 = state_30842__$1;
(statearr_30866_33311[(2)] = null);

(statearr_30866_33311[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (4))){
var inst_30698 = (state_30842[(9)]);
var inst_30698__$1 = (state_30842[(2)]);
var inst_30699 = (inst_30698__$1 == null);
var state_30842__$1 = (function (){var statearr_30867 = state_30842;
(statearr_30867[(9)] = inst_30698__$1);

return statearr_30867;
})();
if(cljs.core.truth_(inst_30699)){
var statearr_30868_33312 = state_30842__$1;
(statearr_30868_33312[(1)] = (5));

} else {
var statearr_30869_33313 = state_30842__$1;
(statearr_30869_33313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (15))){
var inst_30707 = (state_30842[(13)]);
var inst_30709 = (state_30842[(14)]);
var inst_30710 = (state_30842[(15)]);
var inst_30708 = (state_30842[(17)]);
var inst_30725 = (state_30842[(2)]);
var inst_30726 = (inst_30710 + (1));
var tmp30863 = inst_30707;
var tmp30864 = inst_30709;
var tmp30865 = inst_30708;
var inst_30707__$1 = tmp30863;
var inst_30708__$1 = tmp30865;
var inst_30709__$1 = tmp30864;
var inst_30710__$1 = inst_30726;
var state_30842__$1 = (function (){var statearr_30878 = state_30842;
(statearr_30878[(13)] = inst_30707__$1);

(statearr_30878[(14)] = inst_30709__$1);

(statearr_30878[(18)] = inst_30725);

(statearr_30878[(15)] = inst_30710__$1);

(statearr_30878[(17)] = inst_30708__$1);

return statearr_30878;
})();
var statearr_30886_33318 = state_30842__$1;
(statearr_30886_33318[(2)] = null);

(statearr_30886_33318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (21))){
var inst_30754 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30890_33319 = state_30842__$1;
(statearr_30890_33319[(2)] = inst_30754);

(statearr_30890_33319[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (31))){
var inst_30781 = (state_30842[(11)]);
var inst_30785 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30781);
var state_30842__$1 = state_30842;
var statearr_30891_33320 = state_30842__$1;
(statearr_30891_33320[(2)] = inst_30785);

(statearr_30891_33320[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (32))){
var inst_30772 = (state_30842[(19)]);
var inst_30774 = (state_30842[(20)]);
var inst_30775 = (state_30842[(10)]);
var inst_30773 = (state_30842[(12)]);
var inst_30787 = (state_30842[(2)]);
var inst_30788 = (inst_30775 + (1));
var tmp30887 = inst_30772;
var tmp30888 = inst_30774;
var tmp30889 = inst_30773;
var inst_30772__$1 = tmp30887;
var inst_30773__$1 = tmp30889;
var inst_30774__$1 = tmp30888;
var inst_30775__$1 = inst_30788;
var state_30842__$1 = (function (){var statearr_30892 = state_30842;
(statearr_30892[(21)] = inst_30787);

(statearr_30892[(19)] = inst_30772__$1);

(statearr_30892[(20)] = inst_30774__$1);

(statearr_30892[(10)] = inst_30775__$1);

(statearr_30892[(12)] = inst_30773__$1);

return statearr_30892;
})();
var statearr_30895_33322 = state_30842__$1;
(statearr_30895_33322[(2)] = null);

(statearr_30895_33322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (40))){
var inst_30807 = (state_30842[(22)]);
var inst_30811 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30807);
var state_30842__$1 = state_30842;
var statearr_30896_33326 = state_30842__$1;
(statearr_30896_33326[(2)] = inst_30811);

(statearr_30896_33326[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (33))){
var inst_30791 = (state_30842[(23)]);
var inst_30798 = cljs.core.chunked_seq_QMARK_(inst_30791);
var state_30842__$1 = state_30842;
if(inst_30798){
var statearr_30898_33327 = state_30842__$1;
(statearr_30898_33327[(1)] = (36));

} else {
var statearr_30899_33328 = state_30842__$1;
(statearr_30899_33328[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (13))){
var inst_30719 = (state_30842[(24)]);
var inst_30722 = cljs.core.async.close_BANG_(inst_30719);
var state_30842__$1 = state_30842;
var statearr_30900_33329 = state_30842__$1;
(statearr_30900_33329[(2)] = inst_30722);

(statearr_30900_33329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (22))){
var inst_30743 = (state_30842[(8)]);
var inst_30747 = cljs.core.async.close_BANG_(inst_30743);
var state_30842__$1 = state_30842;
var statearr_30909_33331 = state_30842__$1;
(statearr_30909_33331[(2)] = inst_30747);

(statearr_30909_33331[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (36))){
var inst_30791 = (state_30842[(23)]);
var inst_30802 = cljs.core.chunk_first(inst_30791);
var inst_30803 = cljs.core.chunk_rest(inst_30791);
var inst_30804 = cljs.core.count(inst_30802);
var inst_30772 = inst_30803;
var inst_30773 = inst_30802;
var inst_30774 = inst_30804;
var inst_30775 = (0);
var state_30842__$1 = (function (){var statearr_30914 = state_30842;
(statearr_30914[(19)] = inst_30772);

(statearr_30914[(20)] = inst_30774);

(statearr_30914[(10)] = inst_30775);

(statearr_30914[(12)] = inst_30773);

return statearr_30914;
})();
var statearr_30915_33332 = state_30842__$1;
(statearr_30915_33332[(2)] = null);

(statearr_30915_33332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (41))){
var inst_30791 = (state_30842[(23)]);
var inst_30814 = (state_30842[(2)]);
var inst_30816 = cljs.core.next(inst_30791);
var inst_30772 = inst_30816;
var inst_30773 = null;
var inst_30774 = (0);
var inst_30775 = (0);
var state_30842__$1 = (function (){var statearr_30920 = state_30842;
(statearr_30920[(19)] = inst_30772);

(statearr_30920[(25)] = inst_30814);

(statearr_30920[(20)] = inst_30774);

(statearr_30920[(10)] = inst_30775);

(statearr_30920[(12)] = inst_30773);

return statearr_30920;
})();
var statearr_30922_33333 = state_30842__$1;
(statearr_30922_33333[(2)] = null);

(statearr_30922_33333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (43))){
var state_30842__$1 = state_30842;
var statearr_30927_33334 = state_30842__$1;
(statearr_30927_33334[(2)] = null);

(statearr_30927_33334[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (29))){
var inst_30824 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30930_33335 = state_30842__$1;
(statearr_30930_33335[(2)] = inst_30824);

(statearr_30930_33335[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (44))){
var inst_30834 = (state_30842[(2)]);
var state_30842__$1 = (function (){var statearr_30933 = state_30842;
(statearr_30933[(26)] = inst_30834);

return statearr_30933;
})();
var statearr_30934_33336 = state_30842__$1;
(statearr_30934_33336[(2)] = null);

(statearr_30934_33336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (6))){
var inst_30764 = (state_30842[(27)]);
var inst_30763 = cljs.core.deref(cs);
var inst_30764__$1 = cljs.core.keys(inst_30763);
var inst_30765 = cljs.core.count(inst_30764__$1);
var inst_30766 = cljs.core.reset_BANG_(dctr,inst_30765);
var inst_30771 = cljs.core.seq(inst_30764__$1);
var inst_30772 = inst_30771;
var inst_30773 = null;
var inst_30774 = (0);
var inst_30775 = (0);
var state_30842__$1 = (function (){var statearr_30937 = state_30842;
(statearr_30937[(19)] = inst_30772);

(statearr_30937[(20)] = inst_30774);

(statearr_30937[(10)] = inst_30775);

(statearr_30937[(28)] = inst_30766);

(statearr_30937[(27)] = inst_30764__$1);

(statearr_30937[(12)] = inst_30773);

return statearr_30937;
})();
var statearr_30938_33338 = state_30842__$1;
(statearr_30938_33338[(2)] = null);

(statearr_30938_33338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (28))){
var inst_30772 = (state_30842[(19)]);
var inst_30791 = (state_30842[(23)]);
var inst_30791__$1 = cljs.core.seq(inst_30772);
var state_30842__$1 = (function (){var statearr_30945 = state_30842;
(statearr_30945[(23)] = inst_30791__$1);

return statearr_30945;
})();
if(inst_30791__$1){
var statearr_30946_33340 = state_30842__$1;
(statearr_30946_33340[(1)] = (33));

} else {
var statearr_30950_33341 = state_30842__$1;
(statearr_30950_33341[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (25))){
var inst_30774 = (state_30842[(20)]);
var inst_30775 = (state_30842[(10)]);
var inst_30777 = (inst_30775 < inst_30774);
var inst_30778 = inst_30777;
var state_30842__$1 = state_30842;
if(cljs.core.truth_(inst_30778)){
var statearr_30951_33342 = state_30842__$1;
(statearr_30951_33342[(1)] = (27));

} else {
var statearr_30953_33343 = state_30842__$1;
(statearr_30953_33343[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (34))){
var state_30842__$1 = state_30842;
var statearr_30954_33344 = state_30842__$1;
(statearr_30954_33344[(2)] = null);

(statearr_30954_33344[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (17))){
var state_30842__$1 = state_30842;
var statearr_30955_33346 = state_30842__$1;
(statearr_30955_33346[(2)] = null);

(statearr_30955_33346[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (3))){
var inst_30839 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30842__$1,inst_30839);
} else {
if((state_val_30843 === (12))){
var inst_30759 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30956_33348 = state_30842__$1;
(statearr_30956_33348[(2)] = inst_30759);

(statearr_30956_33348[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (2))){
var state_30842__$1 = state_30842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30842__$1,(4),ch);
} else {
if((state_val_30843 === (23))){
var state_30842__$1 = state_30842;
var statearr_30962_33350 = state_30842__$1;
(statearr_30962_33350[(2)] = null);

(statearr_30962_33350[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (35))){
var inst_30822 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30963_33353 = state_30842__$1;
(statearr_30963_33353[(2)] = inst_30822);

(statearr_30963_33353[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (19))){
var inst_30729 = (state_30842[(7)]);
var inst_30733 = cljs.core.chunk_first(inst_30729);
var inst_30734 = cljs.core.chunk_rest(inst_30729);
var inst_30735 = cljs.core.count(inst_30733);
var inst_30707 = inst_30734;
var inst_30708 = inst_30733;
var inst_30709 = inst_30735;
var inst_30710 = (0);
var state_30842__$1 = (function (){var statearr_30964 = state_30842;
(statearr_30964[(13)] = inst_30707);

(statearr_30964[(14)] = inst_30709);

(statearr_30964[(15)] = inst_30710);

(statearr_30964[(17)] = inst_30708);

return statearr_30964;
})();
var statearr_30968_33358 = state_30842__$1;
(statearr_30968_33358[(2)] = null);

(statearr_30968_33358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (11))){
var inst_30707 = (state_30842[(13)]);
var inst_30729 = (state_30842[(7)]);
var inst_30729__$1 = cljs.core.seq(inst_30707);
var state_30842__$1 = (function (){var statearr_30976 = state_30842;
(statearr_30976[(7)] = inst_30729__$1);

return statearr_30976;
})();
if(inst_30729__$1){
var statearr_30977_33362 = state_30842__$1;
(statearr_30977_33362[(1)] = (16));

} else {
var statearr_30979_33363 = state_30842__$1;
(statearr_30979_33363[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (9))){
var inst_30761 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30981_33364 = state_30842__$1;
(statearr_30981_33364[(2)] = inst_30761);

(statearr_30981_33364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (5))){
var inst_30705 = cljs.core.deref(cs);
var inst_30706 = cljs.core.seq(inst_30705);
var inst_30707 = inst_30706;
var inst_30708 = null;
var inst_30709 = (0);
var inst_30710 = (0);
var state_30842__$1 = (function (){var statearr_30983 = state_30842;
(statearr_30983[(13)] = inst_30707);

(statearr_30983[(14)] = inst_30709);

(statearr_30983[(15)] = inst_30710);

(statearr_30983[(17)] = inst_30708);

return statearr_30983;
})();
var statearr_30984_33365 = state_30842__$1;
(statearr_30984_33365[(2)] = null);

(statearr_30984_33365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (14))){
var state_30842__$1 = state_30842;
var statearr_30988_33366 = state_30842__$1;
(statearr_30988_33366[(2)] = null);

(statearr_30988_33366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (45))){
var inst_30831 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30990_33367 = state_30842__$1;
(statearr_30990_33367[(2)] = inst_30831);

(statearr_30990_33367[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (26))){
var inst_30764 = (state_30842[(27)]);
var inst_30826 = (state_30842[(2)]);
var inst_30827 = cljs.core.seq(inst_30764);
var state_30842__$1 = (function (){var statearr_30991 = state_30842;
(statearr_30991[(29)] = inst_30826);

return statearr_30991;
})();
if(inst_30827){
var statearr_30992_33369 = state_30842__$1;
(statearr_30992_33369[(1)] = (42));

} else {
var statearr_30993_33370 = state_30842__$1;
(statearr_30993_33370[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (16))){
var inst_30729 = (state_30842[(7)]);
var inst_30731 = cljs.core.chunked_seq_QMARK_(inst_30729);
var state_30842__$1 = state_30842;
if(inst_30731){
var statearr_30994_33371 = state_30842__$1;
(statearr_30994_33371[(1)] = (19));

} else {
var statearr_30995_33372 = state_30842__$1;
(statearr_30995_33372[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (38))){
var inst_30819 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30997_33373 = state_30842__$1;
(statearr_30997_33373[(2)] = inst_30819);

(statearr_30997_33373[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (30))){
var state_30842__$1 = state_30842;
var statearr_30998_33374 = state_30842__$1;
(statearr_30998_33374[(2)] = null);

(statearr_30998_33374[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (10))){
var inst_30710 = (state_30842[(15)]);
var inst_30708 = (state_30842[(17)]);
var inst_30718 = cljs.core._nth(inst_30708,inst_30710);
var inst_30719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30718,(0),null);
var inst_30720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30718,(1),null);
var state_30842__$1 = (function (){var statearr_31000 = state_30842;
(statearr_31000[(24)] = inst_30719);

return statearr_31000;
})();
if(cljs.core.truth_(inst_30720)){
var statearr_31001_33381 = state_30842__$1;
(statearr_31001_33381[(1)] = (13));

} else {
var statearr_31002_33382 = state_30842__$1;
(statearr_31002_33382[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (18))){
var inst_30757 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_31003_33383 = state_30842__$1;
(statearr_31003_33383[(2)] = inst_30757);

(statearr_31003_33383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (42))){
var state_30842__$1 = state_30842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30842__$1,(45),dchan);
} else {
if((state_val_30843 === (37))){
var inst_30698 = (state_30842[(9)]);
var inst_30807 = (state_30842[(22)]);
var inst_30791 = (state_30842[(23)]);
var inst_30807__$1 = cljs.core.first(inst_30791);
var inst_30808 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30807__$1,inst_30698,done);
var state_30842__$1 = (function (){var statearr_31008 = state_30842;
(statearr_31008[(22)] = inst_30807__$1);

return statearr_31008;
})();
if(cljs.core.truth_(inst_30808)){
var statearr_31009_33386 = state_30842__$1;
(statearr_31009_33386[(1)] = (39));

} else {
var statearr_31010_33391 = state_30842__$1;
(statearr_31010_33391[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (8))){
var inst_30709 = (state_30842[(14)]);
var inst_30710 = (state_30842[(15)]);
var inst_30712 = (inst_30710 < inst_30709);
var inst_30713 = inst_30712;
var state_30842__$1 = state_30842;
if(cljs.core.truth_(inst_30713)){
var statearr_31014_33398 = state_30842__$1;
(statearr_31014_33398[(1)] = (10));

} else {
var statearr_31016_33399 = state_30842__$1;
(statearr_31016_33399[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28544__auto__ = null;
var cljs$core$async$mult_$_state_machine__28544__auto____0 = (function (){
var statearr_31019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31019[(0)] = cljs$core$async$mult_$_state_machine__28544__auto__);

(statearr_31019[(1)] = (1));

return statearr_31019;
});
var cljs$core$async$mult_$_state_machine__28544__auto____1 = (function (state_30842){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_30842);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e31021){var ex__28547__auto__ = e31021;
var statearr_31026_33409 = state_30842;
(statearr_31026_33409[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_30842[(4)]))){
var statearr_31027_33413 = state_30842;
(statearr_31027_33413[(1)] = cljs.core.first((state_30842[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33414 = state_30842;
state_30842 = G__33414;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28544__auto__ = function(state_30842){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28544__auto____1.call(this,state_30842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28544__auto____0;
cljs$core$async$mult_$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28544__auto____1;
return cljs$core$async$mult_$_state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_31029 = f__29369__auto__();
(statearr_31029[(6)] = c__29368__auto___33295);

return statearr_31029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
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
var G__31034 = arguments.length;
switch (G__31034) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33427 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33427(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33435 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33435(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33439 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33439(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33445 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33445(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33447 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33447(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33457 = arguments.length;
var i__4865__auto___33458 = (0);
while(true){
if((i__4865__auto___33458 < len__4864__auto___33457)){
args__4870__auto__.push((arguments[i__4865__auto___33458]));

var G__33462 = (i__4865__auto___33458 + (1));
i__4865__auto___33458 = G__33462;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31103){
var map__31104 = p__31103;
var map__31104__$1 = cljs.core.__destructure_map(map__31104);
var opts = map__31104__$1;
var statearr_31105_33466 = state;
(statearr_31105_33466[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31106_33467 = state;
(statearr_31106_33467[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31108_33468 = state;
(statearr_31108_33468[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31098){
var G__31099 = cljs.core.first(seq31098);
var seq31098__$1 = cljs.core.next(seq31098);
var G__31100 = cljs.core.first(seq31098__$1);
var seq31098__$2 = cljs.core.next(seq31098__$1);
var G__31101 = cljs.core.first(seq31098__$2);
var seq31098__$3 = cljs.core.next(seq31098__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31099,G__31100,G__31101,seq31098__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31131 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31132){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31132 = meta31132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31133,meta31132__$1){
var self__ = this;
var _31133__$1 = this;
return (new cljs.core.async.t_cljs$core$async31131(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31132__$1));
}));

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31133){
var self__ = this;
var _31133__$1 = this;
return self__.meta31132;
}));

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31132","meta31132",1398646460,null)], null);
}));

(cljs.core.async.t_cljs$core$async31131.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31131");

(cljs.core.async.t_cljs$core$async31131.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31131");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31131.
 */
cljs.core.async.__GT_t_cljs$core$async31131 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31131(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31132){
return (new cljs.core.async.t_cljs$core$async31131(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31132));
});

}

return (new cljs.core.async.t_cljs$core$async31131(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29368__auto___33511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_31259){
var state_val_31260 = (state_31259[(1)]);
if((state_val_31260 === (7))){
var inst_31211 = (state_31259[(2)]);
var state_31259__$1 = state_31259;
if(cljs.core.truth_(inst_31211)){
var statearr_31266_33514 = state_31259__$1;
(statearr_31266_33514[(1)] = (8));

} else {
var statearr_31267_33515 = state_31259__$1;
(statearr_31267_33515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (20))){
var inst_31198 = (state_31259[(7)]);
var state_31259__$1 = state_31259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31259__$1,(23),out,inst_31198);
} else {
if((state_val_31260 === (1))){
var inst_31178 = calc_state();
var inst_31179 = cljs.core.__destructure_map(inst_31178);
var inst_31180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31179,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31179,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31179,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31185 = inst_31178;
var state_31259__$1 = (function (){var statearr_31270 = state_31259;
(statearr_31270[(8)] = inst_31182);

(statearr_31270[(9)] = inst_31184);

(statearr_31270[(10)] = inst_31185);

(statearr_31270[(11)] = inst_31180);

return statearr_31270;
})();
var statearr_31275_33520 = state_31259__$1;
(statearr_31275_33520[(2)] = null);

(statearr_31275_33520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (24))){
var inst_31189 = (state_31259[(12)]);
var inst_31185 = inst_31189;
var state_31259__$1 = (function (){var statearr_31276 = state_31259;
(statearr_31276[(10)] = inst_31185);

return statearr_31276;
})();
var statearr_31278_33523 = state_31259__$1;
(statearr_31278_33523[(2)] = null);

(statearr_31278_33523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (4))){
var inst_31200 = (state_31259[(13)]);
var inst_31198 = (state_31259[(7)]);
var inst_31197 = (state_31259[(2)]);
var inst_31198__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31197,(0),null);
var inst_31199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31197,(1),null);
var inst_31200__$1 = (inst_31198__$1 == null);
var state_31259__$1 = (function (){var statearr_31284 = state_31259;
(statearr_31284[(13)] = inst_31200__$1);

(statearr_31284[(7)] = inst_31198__$1);

(statearr_31284[(14)] = inst_31199);

return statearr_31284;
})();
if(cljs.core.truth_(inst_31200__$1)){
var statearr_31285_33528 = state_31259__$1;
(statearr_31285_33528[(1)] = (5));

} else {
var statearr_31286_33529 = state_31259__$1;
(statearr_31286_33529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (15))){
var inst_31190 = (state_31259[(15)]);
var inst_31227 = (state_31259[(16)]);
var inst_31227__$1 = cljs.core.empty_QMARK_(inst_31190);
var state_31259__$1 = (function (){var statearr_31288 = state_31259;
(statearr_31288[(16)] = inst_31227__$1);

return statearr_31288;
})();
if(inst_31227__$1){
var statearr_31289_33530 = state_31259__$1;
(statearr_31289_33530[(1)] = (17));

} else {
var statearr_31290_33531 = state_31259__$1;
(statearr_31290_33531[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (21))){
var inst_31189 = (state_31259[(12)]);
var inst_31185 = inst_31189;
var state_31259__$1 = (function (){var statearr_31291 = state_31259;
(statearr_31291[(10)] = inst_31185);

return statearr_31291;
})();
var statearr_31292_33532 = state_31259__$1;
(statearr_31292_33532[(2)] = null);

(statearr_31292_33532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (13))){
var inst_31219 = (state_31259[(2)]);
var inst_31220 = calc_state();
var inst_31185 = inst_31220;
var state_31259__$1 = (function (){var statearr_31293 = state_31259;
(statearr_31293[(17)] = inst_31219);

(statearr_31293[(10)] = inst_31185);

return statearr_31293;
})();
var statearr_31294_33537 = state_31259__$1;
(statearr_31294_33537[(2)] = null);

(statearr_31294_33537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (22))){
var inst_31249 = (state_31259[(2)]);
var state_31259__$1 = state_31259;
var statearr_31296_33544 = state_31259__$1;
(statearr_31296_33544[(2)] = inst_31249);

(statearr_31296_33544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (6))){
var inst_31199 = (state_31259[(14)]);
var inst_31209 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31199,change);
var state_31259__$1 = state_31259;
var statearr_31298_33546 = state_31259__$1;
(statearr_31298_33546[(2)] = inst_31209);

(statearr_31298_33546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (25))){
var state_31259__$1 = state_31259;
var statearr_31303_33549 = state_31259__$1;
(statearr_31303_33549[(2)] = null);

(statearr_31303_33549[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (17))){
var inst_31199 = (state_31259[(14)]);
var inst_31191 = (state_31259[(18)]);
var inst_31229 = (inst_31191.cljs$core$IFn$_invoke$arity$1 ? inst_31191.cljs$core$IFn$_invoke$arity$1(inst_31199) : inst_31191.call(null,inst_31199));
var inst_31230 = cljs.core.not(inst_31229);
var state_31259__$1 = state_31259;
var statearr_31304_33551 = state_31259__$1;
(statearr_31304_33551[(2)] = inst_31230);

(statearr_31304_33551[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (3))){
var inst_31253 = (state_31259[(2)]);
var state_31259__$1 = state_31259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31259__$1,inst_31253);
} else {
if((state_val_31260 === (12))){
var state_31259__$1 = state_31259;
var statearr_31305_33557 = state_31259__$1;
(statearr_31305_33557[(2)] = null);

(statearr_31305_33557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (2))){
var inst_31185 = (state_31259[(10)]);
var inst_31189 = (state_31259[(12)]);
var inst_31189__$1 = cljs.core.__destructure_map(inst_31185);
var inst_31190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31189__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31189__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31189__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31259__$1 = (function (){var statearr_31306 = state_31259;
(statearr_31306[(15)] = inst_31190);

(statearr_31306[(12)] = inst_31189__$1);

(statearr_31306[(18)] = inst_31191);

return statearr_31306;
})();
return cljs.core.async.ioc_alts_BANG_(state_31259__$1,(4),inst_31192);
} else {
if((state_val_31260 === (23))){
var inst_31238 = (state_31259[(2)]);
var state_31259__$1 = state_31259;
if(cljs.core.truth_(inst_31238)){
var statearr_31307_33565 = state_31259__$1;
(statearr_31307_33565[(1)] = (24));

} else {
var statearr_31308_33566 = state_31259__$1;
(statearr_31308_33566[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (19))){
var inst_31233 = (state_31259[(2)]);
var state_31259__$1 = state_31259;
var statearr_31310_33567 = state_31259__$1;
(statearr_31310_33567[(2)] = inst_31233);

(statearr_31310_33567[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (11))){
var inst_31199 = (state_31259[(14)]);
var inst_31216 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31199);
var state_31259__$1 = state_31259;
var statearr_31313_33570 = state_31259__$1;
(statearr_31313_33570[(2)] = inst_31216);

(statearr_31313_33570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (9))){
var inst_31223 = (state_31259[(19)]);
var inst_31190 = (state_31259[(15)]);
var inst_31199 = (state_31259[(14)]);
var inst_31223__$1 = (inst_31190.cljs$core$IFn$_invoke$arity$1 ? inst_31190.cljs$core$IFn$_invoke$arity$1(inst_31199) : inst_31190.call(null,inst_31199));
var state_31259__$1 = (function (){var statearr_31317 = state_31259;
(statearr_31317[(19)] = inst_31223__$1);

return statearr_31317;
})();
if(cljs.core.truth_(inst_31223__$1)){
var statearr_31318_33577 = state_31259__$1;
(statearr_31318_33577[(1)] = (14));

} else {
var statearr_31319_33579 = state_31259__$1;
(statearr_31319_33579[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (5))){
var inst_31200 = (state_31259[(13)]);
var state_31259__$1 = state_31259;
var statearr_31320_33581 = state_31259__$1;
(statearr_31320_33581[(2)] = inst_31200);

(statearr_31320_33581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (14))){
var inst_31223 = (state_31259[(19)]);
var state_31259__$1 = state_31259;
var statearr_31325_33585 = state_31259__$1;
(statearr_31325_33585[(2)] = inst_31223);

(statearr_31325_33585[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (26))){
var inst_31245 = (state_31259[(2)]);
var state_31259__$1 = state_31259;
var statearr_31326_33589 = state_31259__$1;
(statearr_31326_33589[(2)] = inst_31245);

(statearr_31326_33589[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (16))){
var inst_31235 = (state_31259[(2)]);
var state_31259__$1 = state_31259;
if(cljs.core.truth_(inst_31235)){
var statearr_31330_33590 = state_31259__$1;
(statearr_31330_33590[(1)] = (20));

} else {
var statearr_31335_33591 = state_31259__$1;
(statearr_31335_33591[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (10))){
var inst_31251 = (state_31259[(2)]);
var state_31259__$1 = state_31259;
var statearr_31336_33594 = state_31259__$1;
(statearr_31336_33594[(2)] = inst_31251);

(statearr_31336_33594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (18))){
var inst_31227 = (state_31259[(16)]);
var state_31259__$1 = state_31259;
var statearr_31337_33596 = state_31259__$1;
(statearr_31337_33596[(2)] = inst_31227);

(statearr_31337_33596[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (8))){
var inst_31198 = (state_31259[(7)]);
var inst_31214 = (inst_31198 == null);
var state_31259__$1 = state_31259;
if(cljs.core.truth_(inst_31214)){
var statearr_31338_33597 = state_31259__$1;
(statearr_31338_33597[(1)] = (11));

} else {
var statearr_31339_33598 = state_31259__$1;
(statearr_31339_33598[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__28544__auto__ = null;
var cljs$core$async$mix_$_state_machine__28544__auto____0 = (function (){
var statearr_31348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31348[(0)] = cljs$core$async$mix_$_state_machine__28544__auto__);

(statearr_31348[(1)] = (1));

return statearr_31348;
});
var cljs$core$async$mix_$_state_machine__28544__auto____1 = (function (state_31259){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_31259);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e31353){var ex__28547__auto__ = e31353;
var statearr_31354_33603 = state_31259;
(statearr_31354_33603[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_31259[(4)]))){
var statearr_31355_33604 = state_31259;
(statearr_31355_33604[(1)] = cljs.core.first((state_31259[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33606 = state_31259;
state_31259 = G__33606;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28544__auto__ = function(state_31259){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28544__auto____1.call(this,state_31259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28544__auto____0;
cljs$core$async$mix_$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28544__auto____1;
return cljs$core$async$mix_$_state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_31356 = f__29369__auto__();
(statearr_31356[(6)] = c__29368__auto___33511);

return statearr_31356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33621 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33621(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33628 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33628(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33641 = (function() {
var G__33642 = null;
var G__33642__1 = (function (p){
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
var G__33642__2 = (function (p,v){
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
G__33642 = function(p,v){
switch(arguments.length){
case 1:
return G__33642__1.call(this,p);
case 2:
return G__33642__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33642.cljs$core$IFn$_invoke$arity$1 = G__33642__1;
G__33642.cljs$core$IFn$_invoke$arity$2 = G__33642__2;
return G__33642;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31406 = arguments.length;
switch (G__31406) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33641(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33641(p,v);
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
var G__31414 = arguments.length;
switch (G__31414) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31412_SHARP_){
if(cljs.core.truth_((p1__31412_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31412_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31412_SHARP_.call(null,topic)))){
return p1__31412_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31412_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31428 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31428 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31429){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31429 = meta31429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31430,meta31429__$1){
var self__ = this;
var _31430__$1 = this;
return (new cljs.core.async.t_cljs$core$async31428(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31429__$1));
}));

(cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31430){
var self__ = this;
var _31430__$1 = this;
return self__.meta31429;
}));

(cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31429","meta31429",-1697874909,null)], null);
}));

(cljs.core.async.t_cljs$core$async31428.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31428");

(cljs.core.async.t_cljs$core$async31428.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31428");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31428.
 */
cljs.core.async.__GT_t_cljs$core$async31428 = (function cljs$core$async$__GT_t_cljs$core$async31428(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31429){
return (new cljs.core.async.t_cljs$core$async31428(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31429));
});

}

return (new cljs.core.async.t_cljs$core$async31428(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29368__auto___33689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_31540){
var state_val_31541 = (state_31540[(1)]);
if((state_val_31541 === (7))){
var inst_31536 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
var statearr_31551_33694 = state_31540__$1;
(statearr_31551_33694[(2)] = inst_31536);

(statearr_31551_33694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (20))){
var state_31540__$1 = state_31540;
var statearr_31558_33695 = state_31540__$1;
(statearr_31558_33695[(2)] = null);

(statearr_31558_33695[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (1))){
var state_31540__$1 = state_31540;
var statearr_31566_33696 = state_31540__$1;
(statearr_31566_33696[(2)] = null);

(statearr_31566_33696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (24))){
var inst_31519 = (state_31540[(7)]);
var inst_31528 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31519);
var state_31540__$1 = state_31540;
var statearr_31569_33697 = state_31540__$1;
(statearr_31569_33697[(2)] = inst_31528);

(statearr_31569_33697[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (4))){
var inst_31462 = (state_31540[(8)]);
var inst_31462__$1 = (state_31540[(2)]);
var inst_31463 = (inst_31462__$1 == null);
var state_31540__$1 = (function (){var statearr_31573 = state_31540;
(statearr_31573[(8)] = inst_31462__$1);

return statearr_31573;
})();
if(cljs.core.truth_(inst_31463)){
var statearr_31575_33700 = state_31540__$1;
(statearr_31575_33700[(1)] = (5));

} else {
var statearr_31576_33701 = state_31540__$1;
(statearr_31576_33701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (15))){
var inst_31513 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
var statearr_31577_33707 = state_31540__$1;
(statearr_31577_33707[(2)] = inst_31513);

(statearr_31577_33707[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (21))){
var inst_31533 = (state_31540[(2)]);
var state_31540__$1 = (function (){var statearr_31578 = state_31540;
(statearr_31578[(9)] = inst_31533);

return statearr_31578;
})();
var statearr_31583_33708 = state_31540__$1;
(statearr_31583_33708[(2)] = null);

(statearr_31583_33708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (13))){
var inst_31491 = (state_31540[(10)]);
var inst_31493 = cljs.core.chunked_seq_QMARK_(inst_31491);
var state_31540__$1 = state_31540;
if(inst_31493){
var statearr_31588_33709 = state_31540__$1;
(statearr_31588_33709[(1)] = (16));

} else {
var statearr_31589_33710 = state_31540__$1;
(statearr_31589_33710[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (22))){
var inst_31525 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
if(cljs.core.truth_(inst_31525)){
var statearr_31593_33712 = state_31540__$1;
(statearr_31593_33712[(1)] = (23));

} else {
var statearr_31594_33718 = state_31540__$1;
(statearr_31594_33718[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (6))){
var inst_31521 = (state_31540[(11)]);
var inst_31462 = (state_31540[(8)]);
var inst_31519 = (state_31540[(7)]);
var inst_31519__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31462) : topic_fn.call(null,inst_31462));
var inst_31520 = cljs.core.deref(mults);
var inst_31521__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31520,inst_31519__$1);
var state_31540__$1 = (function (){var statearr_31595 = state_31540;
(statearr_31595[(11)] = inst_31521__$1);

(statearr_31595[(7)] = inst_31519__$1);

return statearr_31595;
})();
if(cljs.core.truth_(inst_31521__$1)){
var statearr_31599_33725 = state_31540__$1;
(statearr_31599_33725[(1)] = (19));

} else {
var statearr_31601_33726 = state_31540__$1;
(statearr_31601_33726[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (25))){
var inst_31530 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
var statearr_31606_33729 = state_31540__$1;
(statearr_31606_33729[(2)] = inst_31530);

(statearr_31606_33729[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (17))){
var inst_31491 = (state_31540[(10)]);
var inst_31504 = cljs.core.first(inst_31491);
var inst_31505 = cljs.core.async.muxch_STAR_(inst_31504);
var inst_31506 = cljs.core.async.close_BANG_(inst_31505);
var inst_31507 = cljs.core.next(inst_31491);
var inst_31473 = inst_31507;
var inst_31474 = null;
var inst_31475 = (0);
var inst_31476 = (0);
var state_31540__$1 = (function (){var statearr_31607 = state_31540;
(statearr_31607[(12)] = inst_31476);

(statearr_31607[(13)] = inst_31474);

(statearr_31607[(14)] = inst_31475);

(statearr_31607[(15)] = inst_31473);

(statearr_31607[(16)] = inst_31506);

return statearr_31607;
})();
var statearr_31608_33736 = state_31540__$1;
(statearr_31608_33736[(2)] = null);

(statearr_31608_33736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (3))){
var inst_31538 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31540__$1,inst_31538);
} else {
if((state_val_31541 === (12))){
var inst_31515 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
var statearr_31612_33737 = state_31540__$1;
(statearr_31612_33737[(2)] = inst_31515);

(statearr_31612_33737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (2))){
var state_31540__$1 = state_31540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31540__$1,(4),ch);
} else {
if((state_val_31541 === (23))){
var state_31540__$1 = state_31540;
var statearr_31613_33738 = state_31540__$1;
(statearr_31613_33738[(2)] = null);

(statearr_31613_33738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (19))){
var inst_31521 = (state_31540[(11)]);
var inst_31462 = (state_31540[(8)]);
var inst_31523 = cljs.core.async.muxch_STAR_(inst_31521);
var state_31540__$1 = state_31540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31540__$1,(22),inst_31523,inst_31462);
} else {
if((state_val_31541 === (11))){
var inst_31491 = (state_31540[(10)]);
var inst_31473 = (state_31540[(15)]);
var inst_31491__$1 = cljs.core.seq(inst_31473);
var state_31540__$1 = (function (){var statearr_31617 = state_31540;
(statearr_31617[(10)] = inst_31491__$1);

return statearr_31617;
})();
if(inst_31491__$1){
var statearr_31618_33740 = state_31540__$1;
(statearr_31618_33740[(1)] = (13));

} else {
var statearr_31619_33742 = state_31540__$1;
(statearr_31619_33742[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (9))){
var inst_31517 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
var statearr_31624_33744 = state_31540__$1;
(statearr_31624_33744[(2)] = inst_31517);

(statearr_31624_33744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (5))){
var inst_31470 = cljs.core.deref(mults);
var inst_31471 = cljs.core.vals(inst_31470);
var inst_31472 = cljs.core.seq(inst_31471);
var inst_31473 = inst_31472;
var inst_31474 = null;
var inst_31475 = (0);
var inst_31476 = (0);
var state_31540__$1 = (function (){var statearr_31630 = state_31540;
(statearr_31630[(12)] = inst_31476);

(statearr_31630[(13)] = inst_31474);

(statearr_31630[(14)] = inst_31475);

(statearr_31630[(15)] = inst_31473);

return statearr_31630;
})();
var statearr_31632_33747 = state_31540__$1;
(statearr_31632_33747[(2)] = null);

(statearr_31632_33747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (14))){
var state_31540__$1 = state_31540;
var statearr_31636_33749 = state_31540__$1;
(statearr_31636_33749[(2)] = null);

(statearr_31636_33749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (16))){
var inst_31491 = (state_31540[(10)]);
var inst_31498 = cljs.core.chunk_first(inst_31491);
var inst_31499 = cljs.core.chunk_rest(inst_31491);
var inst_31501 = cljs.core.count(inst_31498);
var inst_31473 = inst_31499;
var inst_31474 = inst_31498;
var inst_31475 = inst_31501;
var inst_31476 = (0);
var state_31540__$1 = (function (){var statearr_31640 = state_31540;
(statearr_31640[(12)] = inst_31476);

(statearr_31640[(13)] = inst_31474);

(statearr_31640[(14)] = inst_31475);

(statearr_31640[(15)] = inst_31473);

return statearr_31640;
})();
var statearr_31641_33750 = state_31540__$1;
(statearr_31641_33750[(2)] = null);

(statearr_31641_33750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (10))){
var inst_31476 = (state_31540[(12)]);
var inst_31474 = (state_31540[(13)]);
var inst_31475 = (state_31540[(14)]);
var inst_31473 = (state_31540[(15)]);
var inst_31481 = cljs.core._nth(inst_31474,inst_31476);
var inst_31485 = cljs.core.async.muxch_STAR_(inst_31481);
var inst_31486 = cljs.core.async.close_BANG_(inst_31485);
var inst_31487 = (inst_31476 + (1));
var tmp31633 = inst_31474;
var tmp31634 = inst_31475;
var tmp31635 = inst_31473;
var inst_31473__$1 = tmp31635;
var inst_31474__$1 = tmp31633;
var inst_31475__$1 = tmp31634;
var inst_31476__$1 = inst_31487;
var state_31540__$1 = (function (){var statearr_31645 = state_31540;
(statearr_31645[(17)] = inst_31486);

(statearr_31645[(12)] = inst_31476__$1);

(statearr_31645[(13)] = inst_31474__$1);

(statearr_31645[(14)] = inst_31475__$1);

(statearr_31645[(15)] = inst_31473__$1);

return statearr_31645;
})();
var statearr_31646_33754 = state_31540__$1;
(statearr_31646_33754[(2)] = null);

(statearr_31646_33754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (18))){
var inst_31510 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
var statearr_31647_33756 = state_31540__$1;
(statearr_31647_33756[(2)] = inst_31510);

(statearr_31647_33756[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (8))){
var inst_31476 = (state_31540[(12)]);
var inst_31475 = (state_31540[(14)]);
var inst_31478 = (inst_31476 < inst_31475);
var inst_31479 = inst_31478;
var state_31540__$1 = state_31540;
if(cljs.core.truth_(inst_31479)){
var statearr_31648_33761 = state_31540__$1;
(statearr_31648_33761[(1)] = (10));

} else {
var statearr_31649_33763 = state_31540__$1;
(statearr_31649_33763[(1)] = (11));

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
var cljs$core$async$state_machine__28544__auto__ = null;
var cljs$core$async$state_machine__28544__auto____0 = (function (){
var statearr_31657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31657[(0)] = cljs$core$async$state_machine__28544__auto__);

(statearr_31657[(1)] = (1));

return statearr_31657;
});
var cljs$core$async$state_machine__28544__auto____1 = (function (state_31540){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_31540);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e31661){var ex__28547__auto__ = e31661;
var statearr_31662_33771 = state_31540;
(statearr_31662_33771[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_31540[(4)]))){
var statearr_31663_33772 = state_31540;
(statearr_31663_33772[(1)] = cljs.core.first((state_31540[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33773 = state_31540;
state_31540 = G__33773;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$state_machine__28544__auto__ = function(state_31540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28544__auto____1.call(this,state_31540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28544__auto____0;
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28544__auto____1;
return cljs$core$async$state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_31666 = f__29369__auto__();
(statearr_31666[(6)] = c__29368__auto___33689);

return statearr_31666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
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
var G__31670 = arguments.length;
switch (G__31670) {
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
var G__31676 = arguments.length;
switch (G__31676) {
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
var G__31680 = arguments.length;
switch (G__31680) {
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
var c__29368__auto___33788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_31735){
var state_val_31736 = (state_31735[(1)]);
if((state_val_31736 === (7))){
var state_31735__$1 = state_31735;
var statearr_31741_33797 = state_31735__$1;
(statearr_31741_33797[(2)] = null);

(statearr_31741_33797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (1))){
var state_31735__$1 = state_31735;
var statearr_31742_33798 = state_31735__$1;
(statearr_31742_33798[(2)] = null);

(statearr_31742_33798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (4))){
var inst_31690 = (state_31735[(7)]);
var inst_31691 = (state_31735[(8)]);
var inst_31693 = (inst_31691 < inst_31690);
var state_31735__$1 = state_31735;
if(cljs.core.truth_(inst_31693)){
var statearr_31743_33799 = state_31735__$1;
(statearr_31743_33799[(1)] = (6));

} else {
var statearr_31744_33800 = state_31735__$1;
(statearr_31744_33800[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (15))){
var inst_31721 = (state_31735[(9)]);
var inst_31726 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31721);
var state_31735__$1 = state_31735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31735__$1,(17),out,inst_31726);
} else {
if((state_val_31736 === (13))){
var inst_31721 = (state_31735[(9)]);
var inst_31721__$1 = (state_31735[(2)]);
var inst_31722 = cljs.core.some(cljs.core.nil_QMARK_,inst_31721__$1);
var state_31735__$1 = (function (){var statearr_31750 = state_31735;
(statearr_31750[(9)] = inst_31721__$1);

return statearr_31750;
})();
if(cljs.core.truth_(inst_31722)){
var statearr_31752_33801 = state_31735__$1;
(statearr_31752_33801[(1)] = (14));

} else {
var statearr_31753_33802 = state_31735__$1;
(statearr_31753_33802[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (6))){
var state_31735__$1 = state_31735;
var statearr_31755_33803 = state_31735__$1;
(statearr_31755_33803[(2)] = null);

(statearr_31755_33803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (17))){
var inst_31728 = (state_31735[(2)]);
var state_31735__$1 = (function (){var statearr_31765 = state_31735;
(statearr_31765[(10)] = inst_31728);

return statearr_31765;
})();
var statearr_31766_33804 = state_31735__$1;
(statearr_31766_33804[(2)] = null);

(statearr_31766_33804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (3))){
var inst_31733 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31735__$1,inst_31733);
} else {
if((state_val_31736 === (12))){
var _ = (function (){var statearr_31774 = state_31735;
(statearr_31774[(4)] = cljs.core.rest((state_31735[(4)])));

return statearr_31774;
})();
var state_31735__$1 = state_31735;
var ex31763 = (state_31735__$1[(2)]);
var statearr_31776_33806 = state_31735__$1;
(statearr_31776_33806[(5)] = ex31763);


if((ex31763 instanceof Object)){
var statearr_31785_33807 = state_31735__$1;
(statearr_31785_33807[(1)] = (11));

(statearr_31785_33807[(5)] = null);

} else {
throw ex31763;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (2))){
var inst_31688 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31690 = cnt;
var inst_31691 = (0);
var state_31735__$1 = (function (){var statearr_31805 = state_31735;
(statearr_31805[(7)] = inst_31690);

(statearr_31805[(8)] = inst_31691);

(statearr_31805[(11)] = inst_31688);

return statearr_31805;
})();
var statearr_31807_33811 = state_31735__$1;
(statearr_31807_33811[(2)] = null);

(statearr_31807_33811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (11))){
var inst_31700 = (state_31735[(2)]);
var inst_31701 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31735__$1 = (function (){var statearr_31813 = state_31735;
(statearr_31813[(12)] = inst_31700);

return statearr_31813;
})();
var statearr_31816_33818 = state_31735__$1;
(statearr_31816_33818[(2)] = inst_31701);

(statearr_31816_33818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (9))){
var inst_31691 = (state_31735[(8)]);
var _ = (function (){var statearr_31818 = state_31735;
(statearr_31818[(4)] = cljs.core.cons((12),(state_31735[(4)])));

return statearr_31818;
})();
var inst_31707 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31691) : chs__$1.call(null,inst_31691));
var inst_31708 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31691) : done.call(null,inst_31691));
var inst_31709 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31707,inst_31708);
var ___$1 = (function (){var statearr_31819 = state_31735;
(statearr_31819[(4)] = cljs.core.rest((state_31735[(4)])));

return statearr_31819;
})();
var state_31735__$1 = state_31735;
var statearr_31820_33819 = state_31735__$1;
(statearr_31820_33819[(2)] = inst_31709);

(statearr_31820_33819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (5))){
var inst_31719 = (state_31735[(2)]);
var state_31735__$1 = (function (){var statearr_31825 = state_31735;
(statearr_31825[(13)] = inst_31719);

return statearr_31825;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31735__$1,(13),dchan);
} else {
if((state_val_31736 === (14))){
var inst_31724 = cljs.core.async.close_BANG_(out);
var state_31735__$1 = state_31735;
var statearr_31831_33820 = state_31735__$1;
(statearr_31831_33820[(2)] = inst_31724);

(statearr_31831_33820[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (16))){
var inst_31731 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
var statearr_31835_33821 = state_31735__$1;
(statearr_31835_33821[(2)] = inst_31731);

(statearr_31835_33821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (10))){
var inst_31691 = (state_31735[(8)]);
var inst_31712 = (state_31735[(2)]);
var inst_31713 = (inst_31691 + (1));
var inst_31691__$1 = inst_31713;
var state_31735__$1 = (function (){var statearr_31838 = state_31735;
(statearr_31838[(8)] = inst_31691__$1);

(statearr_31838[(14)] = inst_31712);

return statearr_31838;
})();
var statearr_31840_33822 = state_31735__$1;
(statearr_31840_33822[(2)] = null);

(statearr_31840_33822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (8))){
var inst_31717 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
var statearr_31844_33823 = state_31735__$1;
(statearr_31844_33823[(2)] = inst_31717);

(statearr_31844_33823[(1)] = (5));


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
var cljs$core$async$state_machine__28544__auto__ = null;
var cljs$core$async$state_machine__28544__auto____0 = (function (){
var statearr_31850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31850[(0)] = cljs$core$async$state_machine__28544__auto__);

(statearr_31850[(1)] = (1));

return statearr_31850;
});
var cljs$core$async$state_machine__28544__auto____1 = (function (state_31735){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_31735);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e31851){var ex__28547__auto__ = e31851;
var statearr_31852_33824 = state_31735;
(statearr_31852_33824[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_31735[(4)]))){
var statearr_31853_33825 = state_31735;
(statearr_31853_33825[(1)] = cljs.core.first((state_31735[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33830 = state_31735;
state_31735 = G__33830;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$state_machine__28544__auto__ = function(state_31735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28544__auto____1.call(this,state_31735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28544__auto____0;
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28544__auto____1;
return cljs$core$async$state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_31855 = f__29369__auto__();
(statearr_31855[(6)] = c__29368__auto___33788);

return statearr_31855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
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
var G__31859 = arguments.length;
switch (G__31859) {
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
var c__29368__auto___33838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_31919){
var state_val_31920 = (state_31919[(1)]);
if((state_val_31920 === (7))){
var inst_31891 = (state_31919[(7)]);
var inst_31887 = (state_31919[(8)]);
var inst_31887__$1 = (state_31919[(2)]);
var inst_31891__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31887__$1,(0),null);
var inst_31892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31887__$1,(1),null);
var inst_31893 = (inst_31891__$1 == null);
var state_31919__$1 = (function (){var statearr_31928 = state_31919;
(statearr_31928[(7)] = inst_31891__$1);

(statearr_31928[(9)] = inst_31892);

(statearr_31928[(8)] = inst_31887__$1);

return statearr_31928;
})();
if(cljs.core.truth_(inst_31893)){
var statearr_31936_33839 = state_31919__$1;
(statearr_31936_33839[(1)] = (8));

} else {
var statearr_31941_33840 = state_31919__$1;
(statearr_31941_33840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31920 === (1))){
var inst_31875 = cljs.core.vec(chs);
var inst_31877 = inst_31875;
var state_31919__$1 = (function (){var statearr_31946 = state_31919;
(statearr_31946[(10)] = inst_31877);

return statearr_31946;
})();
var statearr_31947_33841 = state_31919__$1;
(statearr_31947_33841[(2)] = null);

(statearr_31947_33841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31920 === (4))){
var inst_31877 = (state_31919[(10)]);
var state_31919__$1 = state_31919;
return cljs.core.async.ioc_alts_BANG_(state_31919__$1,(7),inst_31877);
} else {
if((state_val_31920 === (6))){
var inst_31913 = (state_31919[(2)]);
var state_31919__$1 = state_31919;
var statearr_31950_33842 = state_31919__$1;
(statearr_31950_33842[(2)] = inst_31913);

(statearr_31950_33842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31920 === (3))){
var inst_31915 = (state_31919[(2)]);
var state_31919__$1 = state_31919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31919__$1,inst_31915);
} else {
if((state_val_31920 === (2))){
var inst_31877 = (state_31919[(10)]);
var inst_31880 = cljs.core.count(inst_31877);
var inst_31881 = (inst_31880 > (0));
var state_31919__$1 = state_31919;
if(cljs.core.truth_(inst_31881)){
var statearr_31952_33843 = state_31919__$1;
(statearr_31952_33843[(1)] = (4));

} else {
var statearr_31957_33844 = state_31919__$1;
(statearr_31957_33844[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31920 === (11))){
var inst_31877 = (state_31919[(10)]);
var inst_31906 = (state_31919[(2)]);
var tmp31951 = inst_31877;
var inst_31877__$1 = tmp31951;
var state_31919__$1 = (function (){var statearr_31961 = state_31919;
(statearr_31961[(10)] = inst_31877__$1);

(statearr_31961[(11)] = inst_31906);

return statearr_31961;
})();
var statearr_31962_33845 = state_31919__$1;
(statearr_31962_33845[(2)] = null);

(statearr_31962_33845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31920 === (9))){
var inst_31891 = (state_31919[(7)]);
var state_31919__$1 = state_31919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31919__$1,(11),out,inst_31891);
} else {
if((state_val_31920 === (5))){
var inst_31911 = cljs.core.async.close_BANG_(out);
var state_31919__$1 = state_31919;
var statearr_31969_33852 = state_31919__$1;
(statearr_31969_33852[(2)] = inst_31911);

(statearr_31969_33852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31920 === (10))){
var inst_31909 = (state_31919[(2)]);
var state_31919__$1 = state_31919;
var statearr_31970_33853 = state_31919__$1;
(statearr_31970_33853[(2)] = inst_31909);

(statearr_31970_33853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31920 === (8))){
var inst_31877 = (state_31919[(10)]);
var inst_31891 = (state_31919[(7)]);
var inst_31892 = (state_31919[(9)]);
var inst_31887 = (state_31919[(8)]);
var inst_31901 = (function (){var cs = inst_31877;
var vec__31883 = inst_31887;
var v = inst_31891;
var c = inst_31892;
return (function (p1__31856_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31856_SHARP_);
});
})();
var inst_31902 = cljs.core.filterv(inst_31901,inst_31877);
var inst_31877__$1 = inst_31902;
var state_31919__$1 = (function (){var statearr_31976 = state_31919;
(statearr_31976[(10)] = inst_31877__$1);

return statearr_31976;
})();
var statearr_31977_33854 = state_31919__$1;
(statearr_31977_33854[(2)] = null);

(statearr_31977_33854[(1)] = (2));


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
var cljs$core$async$state_machine__28544__auto__ = null;
var cljs$core$async$state_machine__28544__auto____0 = (function (){
var statearr_31980 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31980[(0)] = cljs$core$async$state_machine__28544__auto__);

(statearr_31980[(1)] = (1));

return statearr_31980;
});
var cljs$core$async$state_machine__28544__auto____1 = (function (state_31919){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_31919);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e31987){var ex__28547__auto__ = e31987;
var statearr_31988_33855 = state_31919;
(statearr_31988_33855[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_31919[(4)]))){
var statearr_31989_33856 = state_31919;
(statearr_31989_33856[(1)] = cljs.core.first((state_31919[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33857 = state_31919;
state_31919 = G__33857;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$state_machine__28544__auto__ = function(state_31919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28544__auto____1.call(this,state_31919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28544__auto____0;
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28544__auto____1;
return cljs$core$async$state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_31990 = f__29369__auto__();
(statearr_31990[(6)] = c__29368__auto___33838);

return statearr_31990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
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
var G__32012 = arguments.length;
switch (G__32012) {
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
var c__29368__auto___33862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_32054){
var state_val_32055 = (state_32054[(1)]);
if((state_val_32055 === (7))){
var inst_32031 = (state_32054[(7)]);
var inst_32031__$1 = (state_32054[(2)]);
var inst_32033 = (inst_32031__$1 == null);
var inst_32034 = cljs.core.not(inst_32033);
var state_32054__$1 = (function (){var statearr_32060 = state_32054;
(statearr_32060[(7)] = inst_32031__$1);

return statearr_32060;
})();
if(inst_32034){
var statearr_32063_33863 = state_32054__$1;
(statearr_32063_33863[(1)] = (8));

} else {
var statearr_32067_33864 = state_32054__$1;
(statearr_32067_33864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (1))){
var inst_32023 = (0);
var state_32054__$1 = (function (){var statearr_32070 = state_32054;
(statearr_32070[(8)] = inst_32023);

return statearr_32070;
})();
var statearr_32072_33865 = state_32054__$1;
(statearr_32072_33865[(2)] = null);

(statearr_32072_33865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (4))){
var state_32054__$1 = state_32054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32054__$1,(7),ch);
} else {
if((state_val_32055 === (6))){
var inst_32049 = (state_32054[(2)]);
var state_32054__$1 = state_32054;
var statearr_32074_33866 = state_32054__$1;
(statearr_32074_33866[(2)] = inst_32049);

(statearr_32074_33866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (3))){
var inst_32051 = (state_32054[(2)]);
var inst_32052 = cljs.core.async.close_BANG_(out);
var state_32054__$1 = (function (){var statearr_32078 = state_32054;
(statearr_32078[(9)] = inst_32051);

return statearr_32078;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32054__$1,inst_32052);
} else {
if((state_val_32055 === (2))){
var inst_32023 = (state_32054[(8)]);
var inst_32027 = (inst_32023 < n);
var state_32054__$1 = state_32054;
if(cljs.core.truth_(inst_32027)){
var statearr_32081_33867 = state_32054__$1;
(statearr_32081_33867[(1)] = (4));

} else {
var statearr_32082_33868 = state_32054__$1;
(statearr_32082_33868[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (11))){
var inst_32023 = (state_32054[(8)]);
var inst_32038 = (state_32054[(2)]);
var inst_32042 = (inst_32023 + (1));
var inst_32023__$1 = inst_32042;
var state_32054__$1 = (function (){var statearr_32092 = state_32054;
(statearr_32092[(10)] = inst_32038);

(statearr_32092[(8)] = inst_32023__$1);

return statearr_32092;
})();
var statearr_32094_33869 = state_32054__$1;
(statearr_32094_33869[(2)] = null);

(statearr_32094_33869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (9))){
var state_32054__$1 = state_32054;
var statearr_32096_33870 = state_32054__$1;
(statearr_32096_33870[(2)] = null);

(statearr_32096_33870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (5))){
var state_32054__$1 = state_32054;
var statearr_32098_33871 = state_32054__$1;
(statearr_32098_33871[(2)] = null);

(statearr_32098_33871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (10))){
var inst_32046 = (state_32054[(2)]);
var state_32054__$1 = state_32054;
var statearr_32101_33872 = state_32054__$1;
(statearr_32101_33872[(2)] = inst_32046);

(statearr_32101_33872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (8))){
var inst_32031 = (state_32054[(7)]);
var state_32054__$1 = state_32054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32054__$1,(11),out,inst_32031);
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
var cljs$core$async$state_machine__28544__auto__ = null;
var cljs$core$async$state_machine__28544__auto____0 = (function (){
var statearr_32104 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32104[(0)] = cljs$core$async$state_machine__28544__auto__);

(statearr_32104[(1)] = (1));

return statearr_32104;
});
var cljs$core$async$state_machine__28544__auto____1 = (function (state_32054){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_32054);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e32106){var ex__28547__auto__ = e32106;
var statearr_32107_33873 = state_32054;
(statearr_32107_33873[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_32054[(4)]))){
var statearr_32108_33874 = state_32054;
(statearr_32108_33874[(1)] = cljs.core.first((state_32054[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33875 = state_32054;
state_32054 = G__33875;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$state_machine__28544__auto__ = function(state_32054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28544__auto____1.call(this,state_32054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28544__auto____0;
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28544__auto____1;
return cljs$core$async$state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_32112 = f__29369__auto__();
(statearr_32112[(6)] = c__29368__auto___33862);

return statearr_32112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32127 = (function (f,ch,meta32128){
this.f = f;
this.ch = ch;
this.meta32128 = meta32128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32129,meta32128__$1){
var self__ = this;
var _32129__$1 = this;
return (new cljs.core.async.t_cljs$core$async32127(self__.f,self__.ch,meta32128__$1));
}));

(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32129){
var self__ = this;
var _32129__$1 = this;
return self__.meta32128;
}));

(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32135 = (function (f,ch,meta32128,_,fn1,meta32136){
this.f = f;
this.ch = ch;
this.meta32128 = meta32128;
this._ = _;
this.fn1 = fn1;
this.meta32136 = meta32136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32137,meta32136__$1){
var self__ = this;
var _32137__$1 = this;
return (new cljs.core.async.t_cljs$core$async32135(self__.f,self__.ch,self__.meta32128,self__._,self__.fn1,meta32136__$1));
}));

(cljs.core.async.t_cljs$core$async32135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32137){
var self__ = this;
var _32137__$1 = this;
return self__.meta32136;
}));

(cljs.core.async.t_cljs$core$async32135.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32135.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32123_SHARP_){
var G__32161 = (((p1__32123_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32123_SHARP_) : self__.f.call(null,p1__32123_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32161) : f1.call(null,G__32161));
});
}));

(cljs.core.async.t_cljs$core$async32135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32128","meta32128",-1895678342,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32127","cljs.core.async/t_cljs$core$async32127",-2084549233,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32136","meta32136",61026561,null)], null);
}));

(cljs.core.async.t_cljs$core$async32135.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32135");

(cljs.core.async.t_cljs$core$async32135.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32135");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32135.
 */
cljs.core.async.__GT_t_cljs$core$async32135 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32135(f__$1,ch__$1,meta32128__$1,___$2,fn1__$1,meta32136){
return (new cljs.core.async.t_cljs$core$async32135(f__$1,ch__$1,meta32128__$1,___$2,fn1__$1,meta32136));
});

}

return (new cljs.core.async.t_cljs$core$async32135(self__.f,self__.ch,self__.meta32128,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32166 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32166) : self__.f.call(null,G__32166));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32128","meta32128",-1895678342,null)], null);
}));

(cljs.core.async.t_cljs$core$async32127.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32127");

(cljs.core.async.t_cljs$core$async32127.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32127");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32127.
 */
cljs.core.async.__GT_t_cljs$core$async32127 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32127(f__$1,ch__$1,meta32128){
return (new cljs.core.async.t_cljs$core$async32127(f__$1,ch__$1,meta32128));
});

}

return (new cljs.core.async.t_cljs$core$async32127(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32171 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32171 = (function (f,ch,meta32172){
this.f = f;
this.ch = ch;
this.meta32172 = meta32172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32173,meta32172__$1){
var self__ = this;
var _32173__$1 = this;
return (new cljs.core.async.t_cljs$core$async32171(self__.f,self__.ch,meta32172__$1));
}));

(cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32173){
var self__ = this;
var _32173__$1 = this;
return self__.meta32172;
}));

(cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32172","meta32172",-1684646642,null)], null);
}));

(cljs.core.async.t_cljs$core$async32171.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32171");

(cljs.core.async.t_cljs$core$async32171.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32171");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32171.
 */
cljs.core.async.__GT_t_cljs$core$async32171 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32171(f__$1,ch__$1,meta32172){
return (new cljs.core.async.t_cljs$core$async32171(f__$1,ch__$1,meta32172));
});

}

return (new cljs.core.async.t_cljs$core$async32171(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32213 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32213 = (function (p,ch,meta32214){
this.p = p;
this.ch = ch;
this.meta32214 = meta32214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32215,meta32214__$1){
var self__ = this;
var _32215__$1 = this;
return (new cljs.core.async.t_cljs$core$async32213(self__.p,self__.ch,meta32214__$1));
}));

(cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32215){
var self__ = this;
var _32215__$1 = this;
return self__.meta32214;
}));

(cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32214","meta32214",1908496581,null)], null);
}));

(cljs.core.async.t_cljs$core$async32213.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32213");

(cljs.core.async.t_cljs$core$async32213.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32213");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32213.
 */
cljs.core.async.__GT_t_cljs$core$async32213 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32213(p__$1,ch__$1,meta32214){
return (new cljs.core.async.t_cljs$core$async32213(p__$1,ch__$1,meta32214));
});

}

return (new cljs.core.async.t_cljs$core$async32213(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32230 = arguments.length;
switch (G__32230) {
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
var c__29368__auto___33883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_32253){
var state_val_32254 = (state_32253[(1)]);
if((state_val_32254 === (7))){
var inst_32249 = (state_32253[(2)]);
var state_32253__$1 = state_32253;
var statearr_32255_33884 = state_32253__$1;
(statearr_32255_33884[(2)] = inst_32249);

(statearr_32255_33884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (1))){
var state_32253__$1 = state_32253;
var statearr_32256_33885 = state_32253__$1;
(statearr_32256_33885[(2)] = null);

(statearr_32256_33885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (4))){
var inst_32235 = (state_32253[(7)]);
var inst_32235__$1 = (state_32253[(2)]);
var inst_32236 = (inst_32235__$1 == null);
var state_32253__$1 = (function (){var statearr_32257 = state_32253;
(statearr_32257[(7)] = inst_32235__$1);

return statearr_32257;
})();
if(cljs.core.truth_(inst_32236)){
var statearr_32258_33886 = state_32253__$1;
(statearr_32258_33886[(1)] = (5));

} else {
var statearr_32259_33887 = state_32253__$1;
(statearr_32259_33887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (6))){
var inst_32235 = (state_32253[(7)]);
var inst_32240 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32235) : p.call(null,inst_32235));
var state_32253__$1 = state_32253;
if(cljs.core.truth_(inst_32240)){
var statearr_32261_33888 = state_32253__$1;
(statearr_32261_33888[(1)] = (8));

} else {
var statearr_32262_33889 = state_32253__$1;
(statearr_32262_33889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (3))){
var inst_32251 = (state_32253[(2)]);
var state_32253__$1 = state_32253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32253__$1,inst_32251);
} else {
if((state_val_32254 === (2))){
var state_32253__$1 = state_32253;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32253__$1,(4),ch);
} else {
if((state_val_32254 === (11))){
var inst_32243 = (state_32253[(2)]);
var state_32253__$1 = state_32253;
var statearr_32266_33890 = state_32253__$1;
(statearr_32266_33890[(2)] = inst_32243);

(statearr_32266_33890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (9))){
var state_32253__$1 = state_32253;
var statearr_32267_33891 = state_32253__$1;
(statearr_32267_33891[(2)] = null);

(statearr_32267_33891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (5))){
var inst_32238 = cljs.core.async.close_BANG_(out);
var state_32253__$1 = state_32253;
var statearr_32268_33892 = state_32253__$1;
(statearr_32268_33892[(2)] = inst_32238);

(statearr_32268_33892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (10))){
var inst_32246 = (state_32253[(2)]);
var state_32253__$1 = (function (){var statearr_32269 = state_32253;
(statearr_32269[(8)] = inst_32246);

return statearr_32269;
})();
var statearr_32270_33893 = state_32253__$1;
(statearr_32270_33893[(2)] = null);

(statearr_32270_33893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (8))){
var inst_32235 = (state_32253[(7)]);
var state_32253__$1 = state_32253;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32253__$1,(11),out,inst_32235);
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
var cljs$core$async$state_machine__28544__auto__ = null;
var cljs$core$async$state_machine__28544__auto____0 = (function (){
var statearr_32287 = [null,null,null,null,null,null,null,null,null];
(statearr_32287[(0)] = cljs$core$async$state_machine__28544__auto__);

(statearr_32287[(1)] = (1));

return statearr_32287;
});
var cljs$core$async$state_machine__28544__auto____1 = (function (state_32253){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_32253);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e32288){var ex__28547__auto__ = e32288;
var statearr_32289_33894 = state_32253;
(statearr_32289_33894[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_32253[(4)]))){
var statearr_32297_33895 = state_32253;
(statearr_32297_33895[(1)] = cljs.core.first((state_32253[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33896 = state_32253;
state_32253 = G__33896;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$state_machine__28544__auto__ = function(state_32253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28544__auto____1.call(this,state_32253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28544__auto____0;
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28544__auto____1;
return cljs$core$async$state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_32299 = f__29369__auto__();
(statearr_32299[(6)] = c__29368__auto___33883);

return statearr_32299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32306 = arguments.length;
switch (G__32306) {
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
var c__29368__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_32400){
var state_val_32401 = (state_32400[(1)]);
if((state_val_32401 === (7))){
var inst_32396 = (state_32400[(2)]);
var state_32400__$1 = state_32400;
var statearr_32429_33902 = state_32400__$1;
(statearr_32429_33902[(2)] = inst_32396);

(statearr_32429_33902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (20))){
var inst_32363 = (state_32400[(7)]);
var inst_32377 = (state_32400[(2)]);
var inst_32378 = cljs.core.next(inst_32363);
var inst_32345 = inst_32378;
var inst_32346 = null;
var inst_32347 = (0);
var inst_32348 = (0);
var state_32400__$1 = (function (){var statearr_32443 = state_32400;
(statearr_32443[(8)] = inst_32377);

(statearr_32443[(9)] = inst_32345);

(statearr_32443[(10)] = inst_32347);

(statearr_32443[(11)] = inst_32346);

(statearr_32443[(12)] = inst_32348);

return statearr_32443;
})();
var statearr_32448_33907 = state_32400__$1;
(statearr_32448_33907[(2)] = null);

(statearr_32448_33907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (1))){
var state_32400__$1 = state_32400;
var statearr_32454_33908 = state_32400__$1;
(statearr_32454_33908[(2)] = null);

(statearr_32454_33908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (4))){
var inst_32334 = (state_32400[(13)]);
var inst_32334__$1 = (state_32400[(2)]);
var inst_32335 = (inst_32334__$1 == null);
var state_32400__$1 = (function (){var statearr_32464 = state_32400;
(statearr_32464[(13)] = inst_32334__$1);

return statearr_32464;
})();
if(cljs.core.truth_(inst_32335)){
var statearr_32470_33910 = state_32400__$1;
(statearr_32470_33910[(1)] = (5));

} else {
var statearr_32471_33911 = state_32400__$1;
(statearr_32471_33911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (15))){
var state_32400__$1 = state_32400;
var statearr_32482_33912 = state_32400__$1;
(statearr_32482_33912[(2)] = null);

(statearr_32482_33912[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (21))){
var state_32400__$1 = state_32400;
var statearr_32483_33913 = state_32400__$1;
(statearr_32483_33913[(2)] = null);

(statearr_32483_33913[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (13))){
var inst_32345 = (state_32400[(9)]);
var inst_32347 = (state_32400[(10)]);
var inst_32346 = (state_32400[(11)]);
var inst_32348 = (state_32400[(12)]);
var inst_32359 = (state_32400[(2)]);
var inst_32360 = (inst_32348 + (1));
var tmp32474 = inst_32345;
var tmp32475 = inst_32347;
var tmp32476 = inst_32346;
var inst_32345__$1 = tmp32474;
var inst_32346__$1 = tmp32476;
var inst_32347__$1 = tmp32475;
var inst_32348__$1 = inst_32360;
var state_32400__$1 = (function (){var statearr_32498 = state_32400;
(statearr_32498[(9)] = inst_32345__$1);

(statearr_32498[(10)] = inst_32347__$1);

(statearr_32498[(11)] = inst_32346__$1);

(statearr_32498[(12)] = inst_32348__$1);

(statearr_32498[(14)] = inst_32359);

return statearr_32498;
})();
var statearr_32500_33916 = state_32400__$1;
(statearr_32500_33916[(2)] = null);

(statearr_32500_33916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (22))){
var state_32400__$1 = state_32400;
var statearr_32507_33920 = state_32400__$1;
(statearr_32507_33920[(2)] = null);

(statearr_32507_33920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (6))){
var inst_32334 = (state_32400[(13)]);
var inst_32343 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32334) : f.call(null,inst_32334));
var inst_32344 = cljs.core.seq(inst_32343);
var inst_32345 = inst_32344;
var inst_32346 = null;
var inst_32347 = (0);
var inst_32348 = (0);
var state_32400__$1 = (function (){var statearr_32510 = state_32400;
(statearr_32510[(9)] = inst_32345);

(statearr_32510[(10)] = inst_32347);

(statearr_32510[(11)] = inst_32346);

(statearr_32510[(12)] = inst_32348);

return statearr_32510;
})();
var statearr_32517_33921 = state_32400__$1;
(statearr_32517_33921[(2)] = null);

(statearr_32517_33921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (17))){
var inst_32363 = (state_32400[(7)]);
var inst_32368 = cljs.core.chunk_first(inst_32363);
var inst_32369 = cljs.core.chunk_rest(inst_32363);
var inst_32371 = cljs.core.count(inst_32368);
var inst_32345 = inst_32369;
var inst_32346 = inst_32368;
var inst_32347 = inst_32371;
var inst_32348 = (0);
var state_32400__$1 = (function (){var statearr_32518 = state_32400;
(statearr_32518[(9)] = inst_32345);

(statearr_32518[(10)] = inst_32347);

(statearr_32518[(11)] = inst_32346);

(statearr_32518[(12)] = inst_32348);

return statearr_32518;
})();
var statearr_32519_33922 = state_32400__$1;
(statearr_32519_33922[(2)] = null);

(statearr_32519_33922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (3))){
var inst_32398 = (state_32400[(2)]);
var state_32400__$1 = state_32400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32400__$1,inst_32398);
} else {
if((state_val_32401 === (12))){
var inst_32386 = (state_32400[(2)]);
var state_32400__$1 = state_32400;
var statearr_32522_33923 = state_32400__$1;
(statearr_32522_33923[(2)] = inst_32386);

(statearr_32522_33923[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (2))){
var state_32400__$1 = state_32400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32400__$1,(4),in$);
} else {
if((state_val_32401 === (23))){
var inst_32394 = (state_32400[(2)]);
var state_32400__$1 = state_32400;
var statearr_32529_33925 = state_32400__$1;
(statearr_32529_33925[(2)] = inst_32394);

(statearr_32529_33925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (19))){
var inst_32381 = (state_32400[(2)]);
var state_32400__$1 = state_32400;
var statearr_32530_33926 = state_32400__$1;
(statearr_32530_33926[(2)] = inst_32381);

(statearr_32530_33926[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (11))){
var inst_32345 = (state_32400[(9)]);
var inst_32363 = (state_32400[(7)]);
var inst_32363__$1 = cljs.core.seq(inst_32345);
var state_32400__$1 = (function (){var statearr_32533 = state_32400;
(statearr_32533[(7)] = inst_32363__$1);

return statearr_32533;
})();
if(inst_32363__$1){
var statearr_32534_33927 = state_32400__$1;
(statearr_32534_33927[(1)] = (14));

} else {
var statearr_32535_33928 = state_32400__$1;
(statearr_32535_33928[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (9))){
var inst_32388 = (state_32400[(2)]);
var inst_32389 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32400__$1 = (function (){var statearr_32537 = state_32400;
(statearr_32537[(15)] = inst_32388);

return statearr_32537;
})();
if(cljs.core.truth_(inst_32389)){
var statearr_32538_33931 = state_32400__$1;
(statearr_32538_33931[(1)] = (21));

} else {
var statearr_32539_33932 = state_32400__$1;
(statearr_32539_33932[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (5))){
var inst_32337 = cljs.core.async.close_BANG_(out);
var state_32400__$1 = state_32400;
var statearr_32540_33936 = state_32400__$1;
(statearr_32540_33936[(2)] = inst_32337);

(statearr_32540_33936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (14))){
var inst_32363 = (state_32400[(7)]);
var inst_32365 = cljs.core.chunked_seq_QMARK_(inst_32363);
var state_32400__$1 = state_32400;
if(inst_32365){
var statearr_32542_33937 = state_32400__$1;
(statearr_32542_33937[(1)] = (17));

} else {
var statearr_32543_33938 = state_32400__$1;
(statearr_32543_33938[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (16))){
var inst_32384 = (state_32400[(2)]);
var state_32400__$1 = state_32400;
var statearr_32544_33939 = state_32400__$1;
(statearr_32544_33939[(2)] = inst_32384);

(statearr_32544_33939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (10))){
var inst_32346 = (state_32400[(11)]);
var inst_32348 = (state_32400[(12)]);
var inst_32357 = cljs.core._nth(inst_32346,inst_32348);
var state_32400__$1 = state_32400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32400__$1,(13),out,inst_32357);
} else {
if((state_val_32401 === (18))){
var inst_32363 = (state_32400[(7)]);
var inst_32374 = cljs.core.first(inst_32363);
var state_32400__$1 = state_32400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32400__$1,(20),out,inst_32374);
} else {
if((state_val_32401 === (8))){
var inst_32347 = (state_32400[(10)]);
var inst_32348 = (state_32400[(12)]);
var inst_32350 = (inst_32348 < inst_32347);
var inst_32351 = inst_32350;
var state_32400__$1 = state_32400;
if(cljs.core.truth_(inst_32351)){
var statearr_32550_33940 = state_32400__$1;
(statearr_32550_33940[(1)] = (10));

} else {
var statearr_32555_33941 = state_32400__$1;
(statearr_32555_33941[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28544__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28544__auto____0 = (function (){
var statearr_32570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32570[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28544__auto__);

(statearr_32570[(1)] = (1));

return statearr_32570;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28544__auto____1 = (function (state_32400){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_32400);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e32575){var ex__28547__auto__ = e32575;
var statearr_32576_33945 = state_32400;
(statearr_32576_33945[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_32400[(4)]))){
var statearr_32577_33946 = state_32400;
(statearr_32577_33946[(1)] = cljs.core.first((state_32400[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33947 = state_32400;
state_32400 = G__33947;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28544__auto__ = function(state_32400){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28544__auto____1.call(this,state_32400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28544__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28544__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_32580 = f__29369__auto__();
(statearr_32580[(6)] = c__29368__auto__);

return statearr_32580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
}));

return c__29368__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32584 = arguments.length;
switch (G__32584) {
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
var G__32590 = arguments.length;
switch (G__32590) {
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
var G__32597 = arguments.length;
switch (G__32597) {
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
var c__29368__auto___33954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_32622){
var state_val_32623 = (state_32622[(1)]);
if((state_val_32623 === (7))){
var inst_32616 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32636_33956 = state_32622__$1;
(statearr_32636_33956[(2)] = inst_32616);

(statearr_32636_33956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (1))){
var inst_32598 = null;
var state_32622__$1 = (function (){var statearr_32640 = state_32622;
(statearr_32640[(7)] = inst_32598);

return statearr_32640;
})();
var statearr_32641_33959 = state_32622__$1;
(statearr_32641_33959[(2)] = null);

(statearr_32641_33959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (4))){
var inst_32601 = (state_32622[(8)]);
var inst_32601__$1 = (state_32622[(2)]);
var inst_32602 = (inst_32601__$1 == null);
var inst_32603 = cljs.core.not(inst_32602);
var state_32622__$1 = (function (){var statearr_32642 = state_32622;
(statearr_32642[(8)] = inst_32601__$1);

return statearr_32642;
})();
if(inst_32603){
var statearr_32643_33961 = state_32622__$1;
(statearr_32643_33961[(1)] = (5));

} else {
var statearr_32644_33962 = state_32622__$1;
(statearr_32644_33962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (6))){
var state_32622__$1 = state_32622;
var statearr_32645_33963 = state_32622__$1;
(statearr_32645_33963[(2)] = null);

(statearr_32645_33963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (3))){
var inst_32618 = (state_32622[(2)]);
var inst_32619 = cljs.core.async.close_BANG_(out);
var state_32622__$1 = (function (){var statearr_32646 = state_32622;
(statearr_32646[(9)] = inst_32618);

return statearr_32646;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32622__$1,inst_32619);
} else {
if((state_val_32623 === (2))){
var state_32622__$1 = state_32622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32622__$1,(4),ch);
} else {
if((state_val_32623 === (11))){
var inst_32601 = (state_32622[(8)]);
var inst_32610 = (state_32622[(2)]);
var inst_32598 = inst_32601;
var state_32622__$1 = (function (){var statearr_32648 = state_32622;
(statearr_32648[(7)] = inst_32598);

(statearr_32648[(10)] = inst_32610);

return statearr_32648;
})();
var statearr_32649_33964 = state_32622__$1;
(statearr_32649_33964[(2)] = null);

(statearr_32649_33964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (9))){
var inst_32601 = (state_32622[(8)]);
var state_32622__$1 = state_32622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32622__$1,(11),out,inst_32601);
} else {
if((state_val_32623 === (5))){
var inst_32598 = (state_32622[(7)]);
var inst_32601 = (state_32622[(8)]);
var inst_32605 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32601,inst_32598);
var state_32622__$1 = state_32622;
if(inst_32605){
var statearr_32658_33965 = state_32622__$1;
(statearr_32658_33965[(1)] = (8));

} else {
var statearr_32659_33967 = state_32622__$1;
(statearr_32659_33967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (10))){
var inst_32613 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32661_33968 = state_32622__$1;
(statearr_32661_33968[(2)] = inst_32613);

(statearr_32661_33968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (8))){
var inst_32598 = (state_32622[(7)]);
var tmp32655 = inst_32598;
var inst_32598__$1 = tmp32655;
var state_32622__$1 = (function (){var statearr_32662 = state_32622;
(statearr_32662[(7)] = inst_32598__$1);

return statearr_32662;
})();
var statearr_32663_33969 = state_32622__$1;
(statearr_32663_33969[(2)] = null);

(statearr_32663_33969[(1)] = (2));


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
var cljs$core$async$state_machine__28544__auto__ = null;
var cljs$core$async$state_machine__28544__auto____0 = (function (){
var statearr_32666 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32666[(0)] = cljs$core$async$state_machine__28544__auto__);

(statearr_32666[(1)] = (1));

return statearr_32666;
});
var cljs$core$async$state_machine__28544__auto____1 = (function (state_32622){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_32622);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e32667){var ex__28547__auto__ = e32667;
var statearr_32668_33972 = state_32622;
(statearr_32668_33972[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_32622[(4)]))){
var statearr_32672_33973 = state_32622;
(statearr_32672_33973[(1)] = cljs.core.first((state_32622[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33974 = state_32622;
state_32622 = G__33974;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$state_machine__28544__auto__ = function(state_32622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28544__auto____1.call(this,state_32622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28544__auto____0;
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28544__auto____1;
return cljs$core$async$state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_32673 = f__29369__auto__();
(statearr_32673[(6)] = c__29368__auto___33954);

return statearr_32673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32677 = arguments.length;
switch (G__32677) {
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
var c__29368__auto___33977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_32722){
var state_val_32723 = (state_32722[(1)]);
if((state_val_32723 === (7))){
var inst_32718 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
var statearr_32724_33979 = state_32722__$1;
(statearr_32724_33979[(2)] = inst_32718);

(statearr_32724_33979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (1))){
var inst_32683 = (new Array(n));
var inst_32684 = inst_32683;
var inst_32685 = (0);
var state_32722__$1 = (function (){var statearr_32725 = state_32722;
(statearr_32725[(7)] = inst_32684);

(statearr_32725[(8)] = inst_32685);

return statearr_32725;
})();
var statearr_32726_33980 = state_32722__$1;
(statearr_32726_33980[(2)] = null);

(statearr_32726_33980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (4))){
var inst_32689 = (state_32722[(9)]);
var inst_32689__$1 = (state_32722[(2)]);
var inst_32690 = (inst_32689__$1 == null);
var inst_32691 = cljs.core.not(inst_32690);
var state_32722__$1 = (function (){var statearr_32727 = state_32722;
(statearr_32727[(9)] = inst_32689__$1);

return statearr_32727;
})();
if(inst_32691){
var statearr_32728_33981 = state_32722__$1;
(statearr_32728_33981[(1)] = (5));

} else {
var statearr_32729_33983 = state_32722__$1;
(statearr_32729_33983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (15))){
var inst_32712 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
var statearr_32731_33985 = state_32722__$1;
(statearr_32731_33985[(2)] = inst_32712);

(statearr_32731_33985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (13))){
var state_32722__$1 = state_32722;
var statearr_32734_33986 = state_32722__$1;
(statearr_32734_33986[(2)] = null);

(statearr_32734_33986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (6))){
var inst_32685 = (state_32722[(8)]);
var inst_32708 = (inst_32685 > (0));
var state_32722__$1 = state_32722;
if(cljs.core.truth_(inst_32708)){
var statearr_32735_33987 = state_32722__$1;
(statearr_32735_33987[(1)] = (12));

} else {
var statearr_32736_33988 = state_32722__$1;
(statearr_32736_33988[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (3))){
var inst_32720 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32722__$1,inst_32720);
} else {
if((state_val_32723 === (12))){
var inst_32684 = (state_32722[(7)]);
var inst_32710 = cljs.core.vec(inst_32684);
var state_32722__$1 = state_32722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32722__$1,(15),out,inst_32710);
} else {
if((state_val_32723 === (2))){
var state_32722__$1 = state_32722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32722__$1,(4),ch);
} else {
if((state_val_32723 === (11))){
var inst_32701 = (state_32722[(2)]);
var inst_32703 = (new Array(n));
var inst_32684 = inst_32703;
var inst_32685 = (0);
var state_32722__$1 = (function (){var statearr_32740 = state_32722;
(statearr_32740[(10)] = inst_32701);

(statearr_32740[(7)] = inst_32684);

(statearr_32740[(8)] = inst_32685);

return statearr_32740;
})();
var statearr_32742_33989 = state_32722__$1;
(statearr_32742_33989[(2)] = null);

(statearr_32742_33989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (9))){
var inst_32684 = (state_32722[(7)]);
var inst_32699 = cljs.core.vec(inst_32684);
var state_32722__$1 = state_32722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32722__$1,(11),out,inst_32699);
} else {
if((state_val_32723 === (5))){
var inst_32694 = (state_32722[(11)]);
var inst_32684 = (state_32722[(7)]);
var inst_32689 = (state_32722[(9)]);
var inst_32685 = (state_32722[(8)]);
var inst_32693 = (inst_32684[inst_32685] = inst_32689);
var inst_32694__$1 = (inst_32685 + (1));
var inst_32695 = (inst_32694__$1 < n);
var state_32722__$1 = (function (){var statearr_32743 = state_32722;
(statearr_32743[(12)] = inst_32693);

(statearr_32743[(11)] = inst_32694__$1);

return statearr_32743;
})();
if(cljs.core.truth_(inst_32695)){
var statearr_32744_33992 = state_32722__$1;
(statearr_32744_33992[(1)] = (8));

} else {
var statearr_32745_33993 = state_32722__$1;
(statearr_32745_33993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (14))){
var inst_32715 = (state_32722[(2)]);
var inst_32716 = cljs.core.async.close_BANG_(out);
var state_32722__$1 = (function (){var statearr_32747 = state_32722;
(statearr_32747[(13)] = inst_32715);

return statearr_32747;
})();
var statearr_32748_33995 = state_32722__$1;
(statearr_32748_33995[(2)] = inst_32716);

(statearr_32748_33995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (10))){
var inst_32706 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
var statearr_32752_33997 = state_32722__$1;
(statearr_32752_33997[(2)] = inst_32706);

(statearr_32752_33997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (8))){
var inst_32694 = (state_32722[(11)]);
var inst_32684 = (state_32722[(7)]);
var tmp32746 = inst_32684;
var inst_32684__$1 = tmp32746;
var inst_32685 = inst_32694;
var state_32722__$1 = (function (){var statearr_32754 = state_32722;
(statearr_32754[(7)] = inst_32684__$1);

(statearr_32754[(8)] = inst_32685);

return statearr_32754;
})();
var statearr_32755_33998 = state_32722__$1;
(statearr_32755_33998[(2)] = null);

(statearr_32755_33998[(1)] = (2));


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
var cljs$core$async$state_machine__28544__auto__ = null;
var cljs$core$async$state_machine__28544__auto____0 = (function (){
var statearr_32757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32757[(0)] = cljs$core$async$state_machine__28544__auto__);

(statearr_32757[(1)] = (1));

return statearr_32757;
});
var cljs$core$async$state_machine__28544__auto____1 = (function (state_32722){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_32722);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e32758){var ex__28547__auto__ = e32758;
var statearr_32759_34000 = state_32722;
(statearr_32759_34000[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_32722[(4)]))){
var statearr_32760_34005 = state_32722;
(statearr_32760_34005[(1)] = cljs.core.first((state_32722[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34006 = state_32722;
state_32722 = G__34006;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$state_machine__28544__auto__ = function(state_32722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28544__auto____1.call(this,state_32722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28544__auto____0;
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28544__auto____1;
return cljs$core$async$state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_32761 = f__29369__auto__();
(statearr_32761[(6)] = c__29368__auto___33977);

return statearr_32761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32764 = arguments.length;
switch (G__32764) {
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
var c__29368__auto___34009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_32811){
var state_val_32812 = (state_32811[(1)]);
if((state_val_32812 === (7))){
var inst_32807 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
var statearr_32816_34015 = state_32811__$1;
(statearr_32816_34015[(2)] = inst_32807);

(statearr_32816_34015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (1))){
var inst_32765 = [];
var inst_32766 = inst_32765;
var inst_32767 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32811__$1 = (function (){var statearr_32817 = state_32811;
(statearr_32817[(7)] = inst_32767);

(statearr_32817[(8)] = inst_32766);

return statearr_32817;
})();
var statearr_32818_34016 = state_32811__$1;
(statearr_32818_34016[(2)] = null);

(statearr_32818_34016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (4))){
var inst_32770 = (state_32811[(9)]);
var inst_32770__$1 = (state_32811[(2)]);
var inst_32771 = (inst_32770__$1 == null);
var inst_32772 = cljs.core.not(inst_32771);
var state_32811__$1 = (function (){var statearr_32819 = state_32811;
(statearr_32819[(9)] = inst_32770__$1);

return statearr_32819;
})();
if(inst_32772){
var statearr_32820_34017 = state_32811__$1;
(statearr_32820_34017[(1)] = (5));

} else {
var statearr_32821_34018 = state_32811__$1;
(statearr_32821_34018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (15))){
var inst_32766 = (state_32811[(8)]);
var inst_32799 = cljs.core.vec(inst_32766);
var state_32811__$1 = state_32811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32811__$1,(18),out,inst_32799);
} else {
if((state_val_32812 === (13))){
var inst_32794 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
var statearr_32822_34019 = state_32811__$1;
(statearr_32822_34019[(2)] = inst_32794);

(statearr_32822_34019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (6))){
var inst_32766 = (state_32811[(8)]);
var inst_32796 = inst_32766.length;
var inst_32797 = (inst_32796 > (0));
var state_32811__$1 = state_32811;
if(cljs.core.truth_(inst_32797)){
var statearr_32829_34021 = state_32811__$1;
(statearr_32829_34021[(1)] = (15));

} else {
var statearr_32830_34022 = state_32811__$1;
(statearr_32830_34022[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (17))){
var inst_32804 = (state_32811[(2)]);
var inst_32805 = cljs.core.async.close_BANG_(out);
var state_32811__$1 = (function (){var statearr_32831 = state_32811;
(statearr_32831[(10)] = inst_32804);

return statearr_32831;
})();
var statearr_32832_34023 = state_32811__$1;
(statearr_32832_34023[(2)] = inst_32805);

(statearr_32832_34023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (3))){
var inst_32809 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32811__$1,inst_32809);
} else {
if((state_val_32812 === (12))){
var inst_32766 = (state_32811[(8)]);
var inst_32786 = cljs.core.vec(inst_32766);
var state_32811__$1 = state_32811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32811__$1,(14),out,inst_32786);
} else {
if((state_val_32812 === (2))){
var state_32811__$1 = state_32811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32811__$1,(4),ch);
} else {
if((state_val_32812 === (11))){
var inst_32766 = (state_32811[(8)]);
var inst_32770 = (state_32811[(9)]);
var inst_32774 = (state_32811[(11)]);
var inst_32783 = inst_32766.push(inst_32770);
var tmp32836 = inst_32766;
var inst_32766__$1 = tmp32836;
var inst_32767 = inst_32774;
var state_32811__$1 = (function (){var statearr_32845 = state_32811;
(statearr_32845[(7)] = inst_32767);

(statearr_32845[(12)] = inst_32783);

(statearr_32845[(8)] = inst_32766__$1);

return statearr_32845;
})();
var statearr_32847_34025 = state_32811__$1;
(statearr_32847_34025[(2)] = null);

(statearr_32847_34025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (9))){
var inst_32767 = (state_32811[(7)]);
var inst_32779 = cljs.core.keyword_identical_QMARK_(inst_32767,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32811__$1 = state_32811;
var statearr_32855_34026 = state_32811__$1;
(statearr_32855_34026[(2)] = inst_32779);

(statearr_32855_34026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (5))){
var inst_32767 = (state_32811[(7)]);
var inst_32776 = (state_32811[(13)]);
var inst_32770 = (state_32811[(9)]);
var inst_32774 = (state_32811[(11)]);
var inst_32774__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32770) : f.call(null,inst_32770));
var inst_32776__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32774__$1,inst_32767);
var state_32811__$1 = (function (){var statearr_32858 = state_32811;
(statearr_32858[(13)] = inst_32776__$1);

(statearr_32858[(11)] = inst_32774__$1);

return statearr_32858;
})();
if(inst_32776__$1){
var statearr_32859_34028 = state_32811__$1;
(statearr_32859_34028[(1)] = (8));

} else {
var statearr_32862_34029 = state_32811__$1;
(statearr_32862_34029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (14))){
var inst_32770 = (state_32811[(9)]);
var inst_32774 = (state_32811[(11)]);
var inst_32788 = (state_32811[(2)]);
var inst_32790 = [];
var inst_32791 = inst_32790.push(inst_32770);
var inst_32766 = inst_32790;
var inst_32767 = inst_32774;
var state_32811__$1 = (function (){var statearr_32863 = state_32811;
(statearr_32863[(7)] = inst_32767);

(statearr_32863[(8)] = inst_32766);

(statearr_32863[(14)] = inst_32791);

(statearr_32863[(15)] = inst_32788);

return statearr_32863;
})();
var statearr_32864_34031 = state_32811__$1;
(statearr_32864_34031[(2)] = null);

(statearr_32864_34031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (16))){
var state_32811__$1 = state_32811;
var statearr_32869_34032 = state_32811__$1;
(statearr_32869_34032[(2)] = null);

(statearr_32869_34032[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (10))){
var inst_32781 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
if(cljs.core.truth_(inst_32781)){
var statearr_32873_34033 = state_32811__$1;
(statearr_32873_34033[(1)] = (11));

} else {
var statearr_32874_34034 = state_32811__$1;
(statearr_32874_34034[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (18))){
var inst_32801 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
var statearr_32878_34035 = state_32811__$1;
(statearr_32878_34035[(2)] = inst_32801);

(statearr_32878_34035[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (8))){
var inst_32776 = (state_32811[(13)]);
var state_32811__$1 = state_32811;
var statearr_32881_34036 = state_32811__$1;
(statearr_32881_34036[(2)] = inst_32776);

(statearr_32881_34036[(1)] = (10));


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
var cljs$core$async$state_machine__28544__auto__ = null;
var cljs$core$async$state_machine__28544__auto____0 = (function (){
var statearr_32885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32885[(0)] = cljs$core$async$state_machine__28544__auto__);

(statearr_32885[(1)] = (1));

return statearr_32885;
});
var cljs$core$async$state_machine__28544__auto____1 = (function (state_32811){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_32811);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e32889){var ex__28547__auto__ = e32889;
var statearr_32890_34039 = state_32811;
(statearr_32890_34039[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_32811[(4)]))){
var statearr_32891_34040 = state_32811;
(statearr_32891_34040[(1)] = cljs.core.first((state_32811[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34042 = state_32811;
state_32811 = G__34042;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
cljs$core$async$state_machine__28544__auto__ = function(state_32811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28544__auto____1.call(this,state_32811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28544__auto____0;
cljs$core$async$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28544__auto____1;
return cljs$core$async$state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_32895 = f__29369__auto__();
(statearr_32895[(6)] = c__29368__auto___34009);

return statearr_32895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
