goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29471 = arguments.length;
switch (G__29471) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29480 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29480 = (function (f,blockable,meta29481){
this.f = f;
this.blockable = blockable;
this.meta29481 = meta29481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29482,meta29481__$1){
var self__ = this;
var _29482__$1 = this;
return (new cljs.core.async.t_cljs$core$async29480(self__.f,self__.blockable,meta29481__$1));
}));

(cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29482){
var self__ = this;
var _29482__$1 = this;
return self__.meta29481;
}));

(cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29481","meta29481",-1611547607,null)], null);
}));

(cljs.core.async.t_cljs$core$async29480.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29480");

(cljs.core.async.t_cljs$core$async29480.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29480");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29480.
 */
cljs.core.async.__GT_t_cljs$core$async29480 = (function cljs$core$async$__GT_t_cljs$core$async29480(f__$1,blockable__$1,meta29481){
return (new cljs.core.async.t_cljs$core$async29480(f__$1,blockable__$1,meta29481));
});

}

return (new cljs.core.async.t_cljs$core$async29480(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29580 = arguments.length;
switch (G__29580) {
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
var G__29613 = arguments.length;
switch (G__29613) {
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
var G__29640 = arguments.length;
switch (G__29640) {
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
var val_32991 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32991) : fn1.call(null,val_32991));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32991) : fn1.call(null,val_32991));
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
var G__29651 = arguments.length;
switch (G__29651) {
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
var n__4741__auto___33030 = n;
var x_33031 = (0);
while(true){
if((x_33031 < n__4741__auto___33030)){
(a[x_33031] = x_33031);

var G__33032 = (x_33031 + (1));
x_33031 = G__33032;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29660 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29660 = (function (flag,meta29661){
this.flag = flag;
this.meta29661 = meta29661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29662,meta29661__$1){
var self__ = this;
var _29662__$1 = this;
return (new cljs.core.async.t_cljs$core$async29660(self__.flag,meta29661__$1));
}));

(cljs.core.async.t_cljs$core$async29660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29662){
var self__ = this;
var _29662__$1 = this;
return self__.meta29661;
}));

(cljs.core.async.t_cljs$core$async29660.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29660.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29661","meta29661",1555836631,null)], null);
}));

(cljs.core.async.t_cljs$core$async29660.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29660");

(cljs.core.async.t_cljs$core$async29660.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29660");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29660.
 */
cljs.core.async.__GT_t_cljs$core$async29660 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29660(flag__$1,meta29661){
return (new cljs.core.async.t_cljs$core$async29660(flag__$1,meta29661));
});

}

return (new cljs.core.async.t_cljs$core$async29660(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29687 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29687 = (function (flag,cb,meta29688){
this.flag = flag;
this.cb = cb;
this.meta29688 = meta29688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29689,meta29688__$1){
var self__ = this;
var _29689__$1 = this;
return (new cljs.core.async.t_cljs$core$async29687(self__.flag,self__.cb,meta29688__$1));
}));

(cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29689){
var self__ = this;
var _29689__$1 = this;
return self__.meta29688;
}));

(cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29688","meta29688",876233580,null)], null);
}));

(cljs.core.async.t_cljs$core$async29687.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29687");

(cljs.core.async.t_cljs$core$async29687.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29687");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29687.
 */
cljs.core.async.__GT_t_cljs$core$async29687 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29687(flag__$1,cb__$1,meta29688){
return (new cljs.core.async.t_cljs$core$async29687(flag__$1,cb__$1,meta29688));
});

}

return (new cljs.core.async.t_cljs$core$async29687(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29708_SHARP_){
var G__29717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29708_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29717) : fret.call(null,G__29717));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29709_SHARP_){
var G__29718 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29709_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29718) : fret.call(null,G__29718));
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
var i__4865__auto___33042 = (0);
while(true){
if((i__4865__auto___33042 < len__4864__auto___33041)){
args__4870__auto__.push((arguments[i__4865__auto___33042]));

var G__33045 = (i__4865__auto___33042 + (1));
i__4865__auto___33042 = G__33045;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29722){
var map__29723 = p__29722;
var map__29723__$1 = cljs.core.__destructure_map(map__29723);
var opts = map__29723__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29720){
var G__29721 = cljs.core.first(seq29720);
var seq29720__$1 = cljs.core.next(seq29720);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29721,seq29720__$1);
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
var G__29735 = arguments.length;
switch (G__29735) {
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
var c__29321__auto___33047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_29786){
var state_val_29787 = (state_29786[(1)]);
if((state_val_29787 === (7))){
var inst_29781 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29790_33048 = state_29786__$1;
(statearr_29790_33048[(2)] = inst_29781);

(statearr_29790_33048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (1))){
var state_29786__$1 = state_29786;
var statearr_29792_33049 = state_29786__$1;
(statearr_29792_33049[(2)] = null);

(statearr_29792_33049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (4))){
var inst_29763 = (state_29786[(7)]);
var inst_29763__$1 = (state_29786[(2)]);
var inst_29764 = (inst_29763__$1 == null);
var state_29786__$1 = (function (){var statearr_29797 = state_29786;
(statearr_29797[(7)] = inst_29763__$1);

return statearr_29797;
})();
if(cljs.core.truth_(inst_29764)){
var statearr_29798_33050 = state_29786__$1;
(statearr_29798_33050[(1)] = (5));

} else {
var statearr_29799_33051 = state_29786__$1;
(statearr_29799_33051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (13))){
var state_29786__$1 = state_29786;
var statearr_29802_33052 = state_29786__$1;
(statearr_29802_33052[(2)] = null);

(statearr_29802_33052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (6))){
var inst_29763 = (state_29786[(7)]);
var state_29786__$1 = state_29786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29786__$1,(11),to,inst_29763);
} else {
if((state_val_29787 === (3))){
var inst_29783 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29786__$1,inst_29783);
} else {
if((state_val_29787 === (12))){
var state_29786__$1 = state_29786;
var statearr_29809_33053 = state_29786__$1;
(statearr_29809_33053[(2)] = null);

(statearr_29809_33053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (2))){
var state_29786__$1 = state_29786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29786__$1,(4),from);
} else {
if((state_val_29787 === (11))){
var inst_29773 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
if(cljs.core.truth_(inst_29773)){
var statearr_29810_33056 = state_29786__$1;
(statearr_29810_33056[(1)] = (12));

} else {
var statearr_29812_33057 = state_29786__$1;
(statearr_29812_33057[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (9))){
var state_29786__$1 = state_29786;
var statearr_29816_33058 = state_29786__$1;
(statearr_29816_33058[(2)] = null);

(statearr_29816_33058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (5))){
var state_29786__$1 = state_29786;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29817_33059 = state_29786__$1;
(statearr_29817_33059[(1)] = (8));

} else {
var statearr_29818_33060 = state_29786__$1;
(statearr_29818_33060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (14))){
var inst_29779 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29819_33061 = state_29786__$1;
(statearr_29819_33061[(2)] = inst_29779);

(statearr_29819_33061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (10))){
var inst_29770 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29820_33062 = state_29786__$1;
(statearr_29820_33062[(2)] = inst_29770);

(statearr_29820_33062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (8))){
var inst_29767 = cljs.core.async.close_BANG_(to);
var state_29786__$1 = state_29786;
var statearr_29821_33063 = state_29786__$1;
(statearr_29821_33063[(2)] = inst_29767);

(statearr_29821_33063[(1)] = (10));


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
var cljs$core$async$state_machine__28601__auto__ = null;
var cljs$core$async$state_machine__28601__auto____0 = (function (){
var statearr_29829 = [null,null,null,null,null,null,null,null];
(statearr_29829[(0)] = cljs$core$async$state_machine__28601__auto__);

(statearr_29829[(1)] = (1));

return statearr_29829;
});
var cljs$core$async$state_machine__28601__auto____1 = (function (state_29786){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_29786);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e29831){var ex__28604__auto__ = e29831;
var statearr_29832_33064 = state_29786;
(statearr_29832_33064[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_29786[(4)]))){
var statearr_29833_33065 = state_29786;
(statearr_29833_33065[(1)] = cljs.core.first((state_29786[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33066 = state_29786;
state_29786 = G__33066;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$state_machine__28601__auto__ = function(state_29786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28601__auto____1.call(this,state_29786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28601__auto____0;
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28601__auto____1;
return cljs$core$async$state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_29834 = f__29322__auto__();
(statearr_29834[(6)] = c__29321__auto___33047);

return statearr_29834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
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
var process = (function (p__29838){
var vec__29839 = p__29838;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29839,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29839,(1),null);
var job = vec__29839;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29321__auto___33071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_29846){
var state_val_29847 = (state_29846[(1)]);
if((state_val_29847 === (1))){
var state_29846__$1 = state_29846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29846__$1,(2),res,v);
} else {
if((state_val_29847 === (2))){
var inst_29843 = (state_29846[(2)]);
var inst_29844 = cljs.core.async.close_BANG_(res);
var state_29846__$1 = (function (){var statearr_29851 = state_29846;
(statearr_29851[(7)] = inst_29843);

return statearr_29851;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29846__$1,inst_29844);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____0 = (function (){
var statearr_29852 = [null,null,null,null,null,null,null,null];
(statearr_29852[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__);

(statearr_29852[(1)] = (1));

return statearr_29852;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____1 = (function (state_29846){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_29846);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e29853){var ex__28604__auto__ = e29853;
var statearr_29854_33073 = state_29846;
(statearr_29854_33073[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_29846[(4)]))){
var statearr_29855_33074 = state_29846;
(statearr_29855_33074[(1)] = cljs.core.first((state_29846[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33075 = state_29846;
state_29846 = G__33075;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__ = function(state_29846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____1.call(this,state_29846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_29856 = f__29322__auto__();
(statearr_29856[(6)] = c__29321__auto___33071);

return statearr_29856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29858){
var vec__29859 = p__29858;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29859,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29859,(1),null);
var job = vec__29859;
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
var n__4741__auto___33079 = n;
var __33080 = (0);
while(true){
if((__33080 < n__4741__auto___33079)){
var G__29865_33081 = type;
var G__29865_33082__$1 = (((G__29865_33081 instanceof cljs.core.Keyword))?G__29865_33081.fqn:null);
switch (G__29865_33082__$1) {
case "compute":
var c__29321__auto___33084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33080,c__29321__auto___33084,G__29865_33081,G__29865_33082__$1,n__4741__auto___33079,jobs,results,process,async){
return (function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = ((function (__33080,c__29321__auto___33084,G__29865_33081,G__29865_33082__$1,n__4741__auto___33079,jobs,results,process,async){
return (function (state_29878){
var state_val_29879 = (state_29878[(1)]);
if((state_val_29879 === (1))){
var state_29878__$1 = state_29878;
var statearr_29880_33085 = state_29878__$1;
(statearr_29880_33085[(2)] = null);

(statearr_29880_33085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (2))){
var state_29878__$1 = state_29878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29878__$1,(4),jobs);
} else {
if((state_val_29879 === (3))){
var inst_29876 = (state_29878[(2)]);
var state_29878__$1 = state_29878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29878__$1,inst_29876);
} else {
if((state_val_29879 === (4))){
var inst_29868 = (state_29878[(2)]);
var inst_29869 = process(inst_29868);
var state_29878__$1 = state_29878;
if(cljs.core.truth_(inst_29869)){
var statearr_29881_33089 = state_29878__$1;
(statearr_29881_33089[(1)] = (5));

} else {
var statearr_29883_33090 = state_29878__$1;
(statearr_29883_33090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (5))){
var state_29878__$1 = state_29878;
var statearr_29884_33091 = state_29878__$1;
(statearr_29884_33091[(2)] = null);

(statearr_29884_33091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (6))){
var state_29878__$1 = state_29878;
var statearr_29885_33093 = state_29878__$1;
(statearr_29885_33093[(2)] = null);

(statearr_29885_33093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (7))){
var inst_29874 = (state_29878[(2)]);
var state_29878__$1 = state_29878;
var statearr_29886_33094 = state_29878__$1;
(statearr_29886_33094[(2)] = inst_29874);

(statearr_29886_33094[(1)] = (3));


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
});})(__33080,c__29321__auto___33084,G__29865_33081,G__29865_33082__$1,n__4741__auto___33079,jobs,results,process,async))
;
return ((function (__33080,switch__28600__auto__,c__29321__auto___33084,G__29865_33081,G__29865_33082__$1,n__4741__auto___33079,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____0 = (function (){
var statearr_29888 = [null,null,null,null,null,null,null];
(statearr_29888[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__);

(statearr_29888[(1)] = (1));

return statearr_29888;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____1 = (function (state_29878){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_29878);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e29890){var ex__28604__auto__ = e29890;
var statearr_29891_33096 = state_29878;
(statearr_29891_33096[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_29878[(4)]))){
var statearr_29892_33100 = state_29878;
(statearr_29892_33100[(1)] = cljs.core.first((state_29878[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33107 = state_29878;
state_29878 = G__33107;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__ = function(state_29878){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____1.call(this,state_29878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__;
})()
;})(__33080,switch__28600__auto__,c__29321__auto___33084,G__29865_33081,G__29865_33082__$1,n__4741__auto___33079,jobs,results,process,async))
})();
var state__29323__auto__ = (function (){var statearr_29893 = f__29322__auto__();
(statearr_29893[(6)] = c__29321__auto___33084);

return statearr_29893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
});})(__33080,c__29321__auto___33084,G__29865_33081,G__29865_33082__$1,n__4741__auto___33079,jobs,results,process,async))
);


break;
case "async":
var c__29321__auto___33108 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33080,c__29321__auto___33108,G__29865_33081,G__29865_33082__$1,n__4741__auto___33079,jobs,results,process,async){
return (function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = ((function (__33080,c__29321__auto___33108,G__29865_33081,G__29865_33082__$1,n__4741__auto___33079,jobs,results,process,async){
return (function (state_29907){
var state_val_29908 = (state_29907[(1)]);
if((state_val_29908 === (1))){
var state_29907__$1 = state_29907;
var statearr_29912_33109 = state_29907__$1;
(statearr_29912_33109[(2)] = null);

(statearr_29912_33109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (2))){
var state_29907__$1 = state_29907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29907__$1,(4),jobs);
} else {
if((state_val_29908 === (3))){
var inst_29905 = (state_29907[(2)]);
var state_29907__$1 = state_29907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29907__$1,inst_29905);
} else {
if((state_val_29908 === (4))){
var inst_29897 = (state_29907[(2)]);
var inst_29898 = async(inst_29897);
var state_29907__$1 = state_29907;
if(cljs.core.truth_(inst_29898)){
var statearr_29913_33111 = state_29907__$1;
(statearr_29913_33111[(1)] = (5));

} else {
var statearr_29915_33112 = state_29907__$1;
(statearr_29915_33112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (5))){
var state_29907__$1 = state_29907;
var statearr_29916_33113 = state_29907__$1;
(statearr_29916_33113[(2)] = null);

(statearr_29916_33113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (6))){
var state_29907__$1 = state_29907;
var statearr_29919_33118 = state_29907__$1;
(statearr_29919_33118[(2)] = null);

(statearr_29919_33118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (7))){
var inst_29903 = (state_29907[(2)]);
var state_29907__$1 = state_29907;
var statearr_29920_33119 = state_29907__$1;
(statearr_29920_33119[(2)] = inst_29903);

(statearr_29920_33119[(1)] = (3));


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
});})(__33080,c__29321__auto___33108,G__29865_33081,G__29865_33082__$1,n__4741__auto___33079,jobs,results,process,async))
;
return ((function (__33080,switch__28600__auto__,c__29321__auto___33108,G__29865_33081,G__29865_33082__$1,n__4741__auto___33079,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____0 = (function (){
var statearr_29926 = [null,null,null,null,null,null,null];
(statearr_29926[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__);

(statearr_29926[(1)] = (1));

return statearr_29926;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____1 = (function (state_29907){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_29907);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e29928){var ex__28604__auto__ = e29928;
var statearr_29929_33130 = state_29907;
(statearr_29929_33130[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_29907[(4)]))){
var statearr_29930_33131 = state_29907;
(statearr_29930_33131[(1)] = cljs.core.first((state_29907[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33132 = state_29907;
state_29907 = G__33132;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__ = function(state_29907){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____1.call(this,state_29907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__;
})()
;})(__33080,switch__28600__auto__,c__29321__auto___33108,G__29865_33081,G__29865_33082__$1,n__4741__auto___33079,jobs,results,process,async))
})();
var state__29323__auto__ = (function (){var statearr_29931 = f__29322__auto__();
(statearr_29931[(6)] = c__29321__auto___33108);

return statearr_29931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
});})(__33080,c__29321__auto___33108,G__29865_33081,G__29865_33082__$1,n__4741__auto___33079,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29865_33082__$1)].join('')));

}

var G__33133 = (__33080 + (1));
__33080 = G__33133;
continue;
} else {
}
break;
}

var c__29321__auto___33134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_29954){
var state_val_29955 = (state_29954[(1)]);
if((state_val_29955 === (7))){
var inst_29950 = (state_29954[(2)]);
var state_29954__$1 = state_29954;
var statearr_29968_33135 = state_29954__$1;
(statearr_29968_33135[(2)] = inst_29950);

(statearr_29968_33135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (1))){
var state_29954__$1 = state_29954;
var statearr_29975_33136 = state_29954__$1;
(statearr_29975_33136[(2)] = null);

(statearr_29975_33136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (4))){
var inst_29934 = (state_29954[(7)]);
var inst_29934__$1 = (state_29954[(2)]);
var inst_29935 = (inst_29934__$1 == null);
var state_29954__$1 = (function (){var statearr_29991 = state_29954;
(statearr_29991[(7)] = inst_29934__$1);

return statearr_29991;
})();
if(cljs.core.truth_(inst_29935)){
var statearr_29992_33137 = state_29954__$1;
(statearr_29992_33137[(1)] = (5));

} else {
var statearr_29993_33140 = state_29954__$1;
(statearr_29993_33140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (6))){
var inst_29939 = (state_29954[(8)]);
var inst_29934 = (state_29954[(7)]);
var inst_29939__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29942 = [inst_29934,inst_29939__$1];
var inst_29943 = (new cljs.core.PersistentVector(null,2,(5),inst_29940,inst_29942,null));
var state_29954__$1 = (function (){var statearr_29999 = state_29954;
(statearr_29999[(8)] = inst_29939__$1);

return statearr_29999;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29954__$1,(8),jobs,inst_29943);
} else {
if((state_val_29955 === (3))){
var inst_29952 = (state_29954[(2)]);
var state_29954__$1 = state_29954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29954__$1,inst_29952);
} else {
if((state_val_29955 === (2))){
var state_29954__$1 = state_29954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29954__$1,(4),from);
} else {
if((state_val_29955 === (9))){
var inst_29947 = (state_29954[(2)]);
var state_29954__$1 = (function (){var statearr_30006 = state_29954;
(statearr_30006[(9)] = inst_29947);

return statearr_30006;
})();
var statearr_30009_33145 = state_29954__$1;
(statearr_30009_33145[(2)] = null);

(statearr_30009_33145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (5))){
var inst_29937 = cljs.core.async.close_BANG_(jobs);
var state_29954__$1 = state_29954;
var statearr_30010_33150 = state_29954__$1;
(statearr_30010_33150[(2)] = inst_29937);

(statearr_30010_33150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (8))){
var inst_29939 = (state_29954[(8)]);
var inst_29945 = (state_29954[(2)]);
var state_29954__$1 = (function (){var statearr_30014 = state_29954;
(statearr_30014[(10)] = inst_29945);

return statearr_30014;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29954__$1,(9),results,inst_29939);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____0 = (function (){
var statearr_30016 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30016[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__);

(statearr_30016[(1)] = (1));

return statearr_30016;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____1 = (function (state_29954){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_29954);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e30017){var ex__28604__auto__ = e30017;
var statearr_30019_33162 = state_29954;
(statearr_30019_33162[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_29954[(4)]))){
var statearr_30020_33163 = state_29954;
(statearr_30020_33163[(1)] = cljs.core.first((state_29954[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33164 = state_29954;
state_29954 = G__33164;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__ = function(state_29954){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____1.call(this,state_29954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_30021 = f__29322__auto__();
(statearr_30021[(6)] = c__29321__auto___33134);

return statearr_30021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
}));


var c__29321__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_30064){
var state_val_30065 = (state_30064[(1)]);
if((state_val_30065 === (7))){
var inst_30059 = (state_30064[(2)]);
var state_30064__$1 = state_30064;
var statearr_30066_33166 = state_30064__$1;
(statearr_30066_33166[(2)] = inst_30059);

(statearr_30066_33166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30065 === (20))){
var state_30064__$1 = state_30064;
var statearr_30067_33167 = state_30064__$1;
(statearr_30067_33167[(2)] = null);

(statearr_30067_33167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30065 === (1))){
var state_30064__$1 = state_30064;
var statearr_30068_33168 = state_30064__$1;
(statearr_30068_33168[(2)] = null);

(statearr_30068_33168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30065 === (4))){
var inst_30024 = (state_30064[(7)]);
var inst_30024__$1 = (state_30064[(2)]);
var inst_30025 = (inst_30024__$1 == null);
var state_30064__$1 = (function (){var statearr_30072 = state_30064;
(statearr_30072[(7)] = inst_30024__$1);

return statearr_30072;
})();
if(cljs.core.truth_(inst_30025)){
var statearr_30073_33169 = state_30064__$1;
(statearr_30073_33169[(1)] = (5));

} else {
var statearr_30074_33170 = state_30064__$1;
(statearr_30074_33170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30065 === (15))){
var inst_30039 = (state_30064[(8)]);
var state_30064__$1 = state_30064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30064__$1,(18),to,inst_30039);
} else {
if((state_val_30065 === (21))){
var inst_30054 = (state_30064[(2)]);
var state_30064__$1 = state_30064;
var statearr_30076_33172 = state_30064__$1;
(statearr_30076_33172[(2)] = inst_30054);

(statearr_30076_33172[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30065 === (13))){
var inst_30056 = (state_30064[(2)]);
var state_30064__$1 = (function (){var statearr_30078 = state_30064;
(statearr_30078[(9)] = inst_30056);

return statearr_30078;
})();
var statearr_30081_33174 = state_30064__$1;
(statearr_30081_33174[(2)] = null);

(statearr_30081_33174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30065 === (6))){
var inst_30024 = (state_30064[(7)]);
var state_30064__$1 = state_30064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30064__$1,(11),inst_30024);
} else {
if((state_val_30065 === (17))){
var inst_30049 = (state_30064[(2)]);
var state_30064__$1 = state_30064;
if(cljs.core.truth_(inst_30049)){
var statearr_30082_33175 = state_30064__$1;
(statearr_30082_33175[(1)] = (19));

} else {
var statearr_30086_33176 = state_30064__$1;
(statearr_30086_33176[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30065 === (3))){
var inst_30061 = (state_30064[(2)]);
var state_30064__$1 = state_30064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30064__$1,inst_30061);
} else {
if((state_val_30065 === (12))){
var inst_30036 = (state_30064[(10)]);
var state_30064__$1 = state_30064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30064__$1,(14),inst_30036);
} else {
if((state_val_30065 === (2))){
var state_30064__$1 = state_30064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30064__$1,(4),results);
} else {
if((state_val_30065 === (19))){
var state_30064__$1 = state_30064;
var statearr_30087_33179 = state_30064__$1;
(statearr_30087_33179[(2)] = null);

(statearr_30087_33179[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30065 === (11))){
var inst_30036 = (state_30064[(2)]);
var state_30064__$1 = (function (){var statearr_30088 = state_30064;
(statearr_30088[(10)] = inst_30036);

return statearr_30088;
})();
var statearr_30089_33180 = state_30064__$1;
(statearr_30089_33180[(2)] = null);

(statearr_30089_33180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30065 === (9))){
var state_30064__$1 = state_30064;
var statearr_30090_33184 = state_30064__$1;
(statearr_30090_33184[(2)] = null);

(statearr_30090_33184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30065 === (5))){
var state_30064__$1 = state_30064;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30091_33187 = state_30064__$1;
(statearr_30091_33187[(1)] = (8));

} else {
var statearr_30092_33188 = state_30064__$1;
(statearr_30092_33188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30065 === (14))){
var inst_30041 = (state_30064[(11)]);
var inst_30039 = (state_30064[(8)]);
var inst_30039__$1 = (state_30064[(2)]);
var inst_30040 = (inst_30039__$1 == null);
var inst_30041__$1 = cljs.core.not(inst_30040);
var state_30064__$1 = (function (){var statearr_30095 = state_30064;
(statearr_30095[(11)] = inst_30041__$1);

(statearr_30095[(8)] = inst_30039__$1);

return statearr_30095;
})();
if(inst_30041__$1){
var statearr_30096_33189 = state_30064__$1;
(statearr_30096_33189[(1)] = (15));

} else {
var statearr_30097_33190 = state_30064__$1;
(statearr_30097_33190[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30065 === (16))){
var inst_30041 = (state_30064[(11)]);
var state_30064__$1 = state_30064;
var statearr_30098_33191 = state_30064__$1;
(statearr_30098_33191[(2)] = inst_30041);

(statearr_30098_33191[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30065 === (10))){
var inst_30033 = (state_30064[(2)]);
var state_30064__$1 = state_30064;
var statearr_30100_33192 = state_30064__$1;
(statearr_30100_33192[(2)] = inst_30033);

(statearr_30100_33192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30065 === (18))){
var inst_30046 = (state_30064[(2)]);
var state_30064__$1 = state_30064;
var statearr_30104_33193 = state_30064__$1;
(statearr_30104_33193[(2)] = inst_30046);

(statearr_30104_33193[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30065 === (8))){
var inst_30030 = cljs.core.async.close_BANG_(to);
var state_30064__$1 = state_30064;
var statearr_30105_33194 = state_30064__$1;
(statearr_30105_33194[(2)] = inst_30030);

(statearr_30105_33194[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____0 = (function (){
var statearr_30106 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30106[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__);

(statearr_30106[(1)] = (1));

return statearr_30106;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____1 = (function (state_30064){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_30064);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e30108){var ex__28604__auto__ = e30108;
var statearr_30109_33197 = state_30064;
(statearr_30109_33197[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_30064[(4)]))){
var statearr_30111_33198 = state_30064;
(statearr_30111_33198[(1)] = cljs.core.first((state_30064[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33199 = state_30064;
state_30064 = G__33199;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__ = function(state_30064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____1.call(this,state_30064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28601__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_30113 = f__29322__auto__();
(statearr_30113[(6)] = c__29321__auto__);

return statearr_30113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
}));

return c__29321__auto__;
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
var G__30119 = arguments.length;
switch (G__30119) {
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
var G__30126 = arguments.length;
switch (G__30126) {
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
var G__30132 = arguments.length;
switch (G__30132) {
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
var c__29321__auto___33208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_30162){
var state_val_30163 = (state_30162[(1)]);
if((state_val_30163 === (7))){
var inst_30157 = (state_30162[(2)]);
var state_30162__$1 = state_30162;
var statearr_30165_33209 = state_30162__$1;
(statearr_30165_33209[(2)] = inst_30157);

(statearr_30165_33209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (1))){
var state_30162__$1 = state_30162;
var statearr_30166_33210 = state_30162__$1;
(statearr_30166_33210[(2)] = null);

(statearr_30166_33210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (4))){
var inst_30138 = (state_30162[(7)]);
var inst_30138__$1 = (state_30162[(2)]);
var inst_30139 = (inst_30138__$1 == null);
var state_30162__$1 = (function (){var statearr_30167 = state_30162;
(statearr_30167[(7)] = inst_30138__$1);

return statearr_30167;
})();
if(cljs.core.truth_(inst_30139)){
var statearr_30168_33211 = state_30162__$1;
(statearr_30168_33211[(1)] = (5));

} else {
var statearr_30169_33212 = state_30162__$1;
(statearr_30169_33212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (13))){
var state_30162__$1 = state_30162;
var statearr_30170_33213 = state_30162__$1;
(statearr_30170_33213[(2)] = null);

(statearr_30170_33213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (6))){
var inst_30138 = (state_30162[(7)]);
var inst_30144 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30138) : p.call(null,inst_30138));
var state_30162__$1 = state_30162;
if(cljs.core.truth_(inst_30144)){
var statearr_30173_33215 = state_30162__$1;
(statearr_30173_33215[(1)] = (9));

} else {
var statearr_30174_33217 = state_30162__$1;
(statearr_30174_33217[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (3))){
var inst_30159 = (state_30162[(2)]);
var state_30162__$1 = state_30162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30162__$1,inst_30159);
} else {
if((state_val_30163 === (12))){
var state_30162__$1 = state_30162;
var statearr_30176_33218 = state_30162__$1;
(statearr_30176_33218[(2)] = null);

(statearr_30176_33218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (2))){
var state_30162__$1 = state_30162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30162__$1,(4),ch);
} else {
if((state_val_30163 === (11))){
var inst_30138 = (state_30162[(7)]);
var inst_30148 = (state_30162[(2)]);
var state_30162__$1 = state_30162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30162__$1,(8),inst_30148,inst_30138);
} else {
if((state_val_30163 === (9))){
var state_30162__$1 = state_30162;
var statearr_30179_33220 = state_30162__$1;
(statearr_30179_33220[(2)] = tc);

(statearr_30179_33220[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (5))){
var inst_30141 = cljs.core.async.close_BANG_(tc);
var inst_30142 = cljs.core.async.close_BANG_(fc);
var state_30162__$1 = (function (){var statearr_30180 = state_30162;
(statearr_30180[(8)] = inst_30141);

return statearr_30180;
})();
var statearr_30181_33221 = state_30162__$1;
(statearr_30181_33221[(2)] = inst_30142);

(statearr_30181_33221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (14))){
var inst_30155 = (state_30162[(2)]);
var state_30162__$1 = state_30162;
var statearr_30182_33222 = state_30162__$1;
(statearr_30182_33222[(2)] = inst_30155);

(statearr_30182_33222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (10))){
var state_30162__$1 = state_30162;
var statearr_30183_33224 = state_30162__$1;
(statearr_30183_33224[(2)] = fc);

(statearr_30183_33224[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (8))){
var inst_30150 = (state_30162[(2)]);
var state_30162__$1 = state_30162;
if(cljs.core.truth_(inst_30150)){
var statearr_30187_33231 = state_30162__$1;
(statearr_30187_33231[(1)] = (12));

} else {
var statearr_30188_33232 = state_30162__$1;
(statearr_30188_33232[(1)] = (13));

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
var cljs$core$async$state_machine__28601__auto__ = null;
var cljs$core$async$state_machine__28601__auto____0 = (function (){
var statearr_30192 = [null,null,null,null,null,null,null,null,null];
(statearr_30192[(0)] = cljs$core$async$state_machine__28601__auto__);

(statearr_30192[(1)] = (1));

return statearr_30192;
});
var cljs$core$async$state_machine__28601__auto____1 = (function (state_30162){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_30162);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e30193){var ex__28604__auto__ = e30193;
var statearr_30194_33233 = state_30162;
(statearr_30194_33233[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_30162[(4)]))){
var statearr_30195_33234 = state_30162;
(statearr_30195_33234[(1)] = cljs.core.first((state_30162[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33235 = state_30162;
state_30162 = G__33235;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$state_machine__28601__auto__ = function(state_30162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28601__auto____1.call(this,state_30162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28601__auto____0;
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28601__auto____1;
return cljs$core$async$state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_30204 = f__29322__auto__();
(statearr_30204[(6)] = c__29321__auto___33208);

return statearr_30204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
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
var c__29321__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_30227){
var state_val_30228 = (state_30227[(1)]);
if((state_val_30228 === (7))){
var inst_30223 = (state_30227[(2)]);
var state_30227__$1 = state_30227;
var statearr_30239_33237 = state_30227__$1;
(statearr_30239_33237[(2)] = inst_30223);

(statearr_30239_33237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (1))){
var inst_30206 = init;
var inst_30207 = inst_30206;
var state_30227__$1 = (function (){var statearr_30242 = state_30227;
(statearr_30242[(7)] = inst_30207);

return statearr_30242;
})();
var statearr_30247_33238 = state_30227__$1;
(statearr_30247_33238[(2)] = null);

(statearr_30247_33238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (4))){
var inst_30210 = (state_30227[(8)]);
var inst_30210__$1 = (state_30227[(2)]);
var inst_30211 = (inst_30210__$1 == null);
var state_30227__$1 = (function (){var statearr_30248 = state_30227;
(statearr_30248[(8)] = inst_30210__$1);

return statearr_30248;
})();
if(cljs.core.truth_(inst_30211)){
var statearr_30249_33239 = state_30227__$1;
(statearr_30249_33239[(1)] = (5));

} else {
var statearr_30250_33240 = state_30227__$1;
(statearr_30250_33240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (6))){
var inst_30214 = (state_30227[(9)]);
var inst_30210 = (state_30227[(8)]);
var inst_30207 = (state_30227[(7)]);
var inst_30214__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30207,inst_30210) : f.call(null,inst_30207,inst_30210));
var inst_30215 = cljs.core.reduced_QMARK_(inst_30214__$1);
var state_30227__$1 = (function (){var statearr_30251 = state_30227;
(statearr_30251[(9)] = inst_30214__$1);

return statearr_30251;
})();
if(inst_30215){
var statearr_30252_33245 = state_30227__$1;
(statearr_30252_33245[(1)] = (8));

} else {
var statearr_30255_33246 = state_30227__$1;
(statearr_30255_33246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (3))){
var inst_30225 = (state_30227[(2)]);
var state_30227__$1 = state_30227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30227__$1,inst_30225);
} else {
if((state_val_30228 === (2))){
var state_30227__$1 = state_30227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30227__$1,(4),ch);
} else {
if((state_val_30228 === (9))){
var inst_30214 = (state_30227[(9)]);
var inst_30207 = inst_30214;
var state_30227__$1 = (function (){var statearr_30256 = state_30227;
(statearr_30256[(7)] = inst_30207);

return statearr_30256;
})();
var statearr_30257_33253 = state_30227__$1;
(statearr_30257_33253[(2)] = null);

(statearr_30257_33253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (5))){
var inst_30207 = (state_30227[(7)]);
var state_30227__$1 = state_30227;
var statearr_30258_33254 = state_30227__$1;
(statearr_30258_33254[(2)] = inst_30207);

(statearr_30258_33254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (10))){
var inst_30221 = (state_30227[(2)]);
var state_30227__$1 = state_30227;
var statearr_30259_33257 = state_30227__$1;
(statearr_30259_33257[(2)] = inst_30221);

(statearr_30259_33257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30228 === (8))){
var inst_30214 = (state_30227[(9)]);
var inst_30217 = cljs.core.deref(inst_30214);
var state_30227__$1 = state_30227;
var statearr_30261_33258 = state_30227__$1;
(statearr_30261_33258[(2)] = inst_30217);

(statearr_30261_33258[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28601__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28601__auto____0 = (function (){
var statearr_30264 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30264[(0)] = cljs$core$async$reduce_$_state_machine__28601__auto__);

(statearr_30264[(1)] = (1));

return statearr_30264;
});
var cljs$core$async$reduce_$_state_machine__28601__auto____1 = (function (state_30227){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_30227);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e30265){var ex__28604__auto__ = e30265;
var statearr_30266_33259 = state_30227;
(statearr_30266_33259[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_30227[(4)]))){
var statearr_30267_33260 = state_30227;
(statearr_30267_33260[(1)] = cljs.core.first((state_30227[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33261 = state_30227;
state_30227 = G__33261;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28601__auto__ = function(state_30227){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28601__auto____1.call(this,state_30227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28601__auto____0;
cljs$core$async$reduce_$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28601__auto____1;
return cljs$core$async$reduce_$_state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_30272 = f__29322__auto__();
(statearr_30272[(6)] = c__29321__auto__);

return statearr_30272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
}));

return c__29321__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29321__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_30278){
var state_val_30279 = (state_30278[(1)]);
if((state_val_30279 === (1))){
var inst_30273 = cljs.core.async.reduce(f__$1,init,ch);
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30278__$1,(2),inst_30273);
} else {
if((state_val_30279 === (2))){
var inst_30275 = (state_30278[(2)]);
var inst_30276 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30275) : f__$1.call(null,inst_30275));
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30278__$1,inst_30276);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28601__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28601__auto____0 = (function (){
var statearr_30283 = [null,null,null,null,null,null,null];
(statearr_30283[(0)] = cljs$core$async$transduce_$_state_machine__28601__auto__);

(statearr_30283[(1)] = (1));

return statearr_30283;
});
var cljs$core$async$transduce_$_state_machine__28601__auto____1 = (function (state_30278){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_30278);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e30285){var ex__28604__auto__ = e30285;
var statearr_30286_33268 = state_30278;
(statearr_30286_33268[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_30278[(4)]))){
var statearr_30287_33273 = state_30278;
(statearr_30287_33273[(1)] = cljs.core.first((state_30278[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33274 = state_30278;
state_30278 = G__33274;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28601__auto__ = function(state_30278){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28601__auto____1.call(this,state_30278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28601__auto____0;
cljs$core$async$transduce_$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28601__auto____1;
return cljs$core$async$transduce_$_state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_30289 = f__29322__auto__();
(statearr_30289[(6)] = c__29321__auto__);

return statearr_30289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
}));

return c__29321__auto__;
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
var G__30302 = arguments.length;
switch (G__30302) {
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
var c__29321__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_30348){
var state_val_30349 = (state_30348[(1)]);
if((state_val_30349 === (7))){
var inst_30330 = (state_30348[(2)]);
var state_30348__$1 = state_30348;
var statearr_30350_33277 = state_30348__$1;
(statearr_30350_33277[(2)] = inst_30330);

(statearr_30350_33277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30349 === (1))){
var inst_30322 = cljs.core.seq(coll);
var inst_30323 = inst_30322;
var state_30348__$1 = (function (){var statearr_30351 = state_30348;
(statearr_30351[(7)] = inst_30323);

return statearr_30351;
})();
var statearr_30354_33279 = state_30348__$1;
(statearr_30354_33279[(2)] = null);

(statearr_30354_33279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30349 === (4))){
var inst_30323 = (state_30348[(7)]);
var inst_30328 = cljs.core.first(inst_30323);
var state_30348__$1 = state_30348;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30348__$1,(7),ch,inst_30328);
} else {
if((state_val_30349 === (13))){
var inst_30342 = (state_30348[(2)]);
var state_30348__$1 = state_30348;
var statearr_30355_33280 = state_30348__$1;
(statearr_30355_33280[(2)] = inst_30342);

(statearr_30355_33280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30349 === (6))){
var inst_30333 = (state_30348[(2)]);
var state_30348__$1 = state_30348;
if(cljs.core.truth_(inst_30333)){
var statearr_30357_33281 = state_30348__$1;
(statearr_30357_33281[(1)] = (8));

} else {
var statearr_30361_33282 = state_30348__$1;
(statearr_30361_33282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30349 === (3))){
var inst_30346 = (state_30348[(2)]);
var state_30348__$1 = state_30348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30348__$1,inst_30346);
} else {
if((state_val_30349 === (12))){
var state_30348__$1 = state_30348;
var statearr_30363_33283 = state_30348__$1;
(statearr_30363_33283[(2)] = null);

(statearr_30363_33283[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30349 === (2))){
var inst_30323 = (state_30348[(7)]);
var state_30348__$1 = state_30348;
if(cljs.core.truth_(inst_30323)){
var statearr_30368_33284 = state_30348__$1;
(statearr_30368_33284[(1)] = (4));

} else {
var statearr_30370_33285 = state_30348__$1;
(statearr_30370_33285[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30349 === (11))){
var inst_30339 = cljs.core.async.close_BANG_(ch);
var state_30348__$1 = state_30348;
var statearr_30371_33286 = state_30348__$1;
(statearr_30371_33286[(2)] = inst_30339);

(statearr_30371_33286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30349 === (9))){
var state_30348__$1 = state_30348;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30374_33287 = state_30348__$1;
(statearr_30374_33287[(1)] = (11));

} else {
var statearr_30376_33288 = state_30348__$1;
(statearr_30376_33288[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30349 === (5))){
var inst_30323 = (state_30348[(7)]);
var state_30348__$1 = state_30348;
var statearr_30380_33289 = state_30348__$1;
(statearr_30380_33289[(2)] = inst_30323);

(statearr_30380_33289[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30349 === (10))){
var inst_30344 = (state_30348[(2)]);
var state_30348__$1 = state_30348;
var statearr_30383_33290 = state_30348__$1;
(statearr_30383_33290[(2)] = inst_30344);

(statearr_30383_33290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30349 === (8))){
var inst_30323 = (state_30348[(7)]);
var inst_30335 = cljs.core.next(inst_30323);
var inst_30323__$1 = inst_30335;
var state_30348__$1 = (function (){var statearr_30384 = state_30348;
(statearr_30384[(7)] = inst_30323__$1);

return statearr_30384;
})();
var statearr_30385_33291 = state_30348__$1;
(statearr_30385_33291[(2)] = null);

(statearr_30385_33291[(1)] = (2));


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
var cljs$core$async$state_machine__28601__auto__ = null;
var cljs$core$async$state_machine__28601__auto____0 = (function (){
var statearr_30387 = [null,null,null,null,null,null,null,null];
(statearr_30387[(0)] = cljs$core$async$state_machine__28601__auto__);

(statearr_30387[(1)] = (1));

return statearr_30387;
});
var cljs$core$async$state_machine__28601__auto____1 = (function (state_30348){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_30348);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e30393){var ex__28604__auto__ = e30393;
var statearr_30394_33292 = state_30348;
(statearr_30394_33292[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_30348[(4)]))){
var statearr_30397_33293 = state_30348;
(statearr_30397_33293[(1)] = cljs.core.first((state_30348[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33294 = state_30348;
state_30348 = G__33294;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$state_machine__28601__auto__ = function(state_30348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28601__auto____1.call(this,state_30348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28601__auto____0;
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28601__auto____1;
return cljs$core$async$state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_30400 = f__29322__auto__();
(statearr_30400[(6)] = c__29321__auto__);

return statearr_30400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
}));

return c__29321__auto__;
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
var G__30419 = arguments.length;
switch (G__30419) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33296 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33296(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33303 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33303(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33304 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33304(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33305 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33305(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30515 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30515 = (function (ch,cs,meta30516){
this.ch = ch;
this.cs = cs;
this.meta30516 = meta30516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30517,meta30516__$1){
var self__ = this;
var _30517__$1 = this;
return (new cljs.core.async.t_cljs$core$async30515(self__.ch,self__.cs,meta30516__$1));
}));

(cljs.core.async.t_cljs$core$async30515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30517){
var self__ = this;
var _30517__$1 = this;
return self__.meta30516;
}));

(cljs.core.async.t_cljs$core$async30515.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30515.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30515.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30515.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30515.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30515.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30516","meta30516",-1855888205,null)], null);
}));

(cljs.core.async.t_cljs$core$async30515.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30515");

(cljs.core.async.t_cljs$core$async30515.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30515");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30515.
 */
cljs.core.async.__GT_t_cljs$core$async30515 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30515(ch__$1,cs__$1,meta30516){
return (new cljs.core.async.t_cljs$core$async30515(ch__$1,cs__$1,meta30516));
});

}

return (new cljs.core.async.t_cljs$core$async30515(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29321__auto___33317 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_30737){
var state_val_30739 = (state_30737[(1)]);
if((state_val_30739 === (7))){
var inst_30727 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
var statearr_30748_33321 = state_30737__$1;
(statearr_30748_33321[(2)] = inst_30727);

(statearr_30748_33321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (20))){
var inst_30611 = (state_30737[(7)]);
var inst_30626 = cljs.core.first(inst_30611);
var inst_30627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30626,(0),null);
var inst_30628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30626,(1),null);
var state_30737__$1 = (function (){var statearr_30756 = state_30737;
(statearr_30756[(8)] = inst_30627);

return statearr_30756;
})();
if(cljs.core.truth_(inst_30628)){
var statearr_30758_33328 = state_30737__$1;
(statearr_30758_33328[(1)] = (22));

} else {
var statearr_30760_33329 = state_30737__$1;
(statearr_30760_33329[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (27))){
var inst_30663 = (state_30737[(9)]);
var inst_30661 = (state_30737[(10)]);
var inst_30671 = (state_30737[(11)]);
var inst_30568 = (state_30737[(12)]);
var inst_30671__$1 = cljs.core._nth(inst_30661,inst_30663);
var inst_30672 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30671__$1,inst_30568,done);
var state_30737__$1 = (function (){var statearr_30763 = state_30737;
(statearr_30763[(11)] = inst_30671__$1);

return statearr_30763;
})();
if(cljs.core.truth_(inst_30672)){
var statearr_30764_33330 = state_30737__$1;
(statearr_30764_33330[(1)] = (30));

} else {
var statearr_30765_33333 = state_30737__$1;
(statearr_30765_33333[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (1))){
var state_30737__$1 = state_30737;
var statearr_30770_33341 = state_30737__$1;
(statearr_30770_33341[(2)] = null);

(statearr_30770_33341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (24))){
var inst_30611 = (state_30737[(7)]);
var inst_30634 = (state_30737[(2)]);
var inst_30635 = cljs.core.next(inst_30611);
var inst_30578 = inst_30635;
var inst_30579 = null;
var inst_30580 = (0);
var inst_30581 = (0);
var state_30737__$1 = (function (){var statearr_30773 = state_30737;
(statearr_30773[(13)] = inst_30580);

(statearr_30773[(14)] = inst_30578);

(statearr_30773[(15)] = inst_30579);

(statearr_30773[(16)] = inst_30581);

(statearr_30773[(17)] = inst_30634);

return statearr_30773;
})();
var statearr_30776_33344 = state_30737__$1;
(statearr_30776_33344[(2)] = null);

(statearr_30776_33344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (39))){
var state_30737__$1 = state_30737;
var statearr_30785_33345 = state_30737__$1;
(statearr_30785_33345[(2)] = null);

(statearr_30785_33345[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (4))){
var inst_30568 = (state_30737[(12)]);
var inst_30568__$1 = (state_30737[(2)]);
var inst_30569 = (inst_30568__$1 == null);
var state_30737__$1 = (function (){var statearr_30788 = state_30737;
(statearr_30788[(12)] = inst_30568__$1);

return statearr_30788;
})();
if(cljs.core.truth_(inst_30569)){
var statearr_30790_33351 = state_30737__$1;
(statearr_30790_33351[(1)] = (5));

} else {
var statearr_30791_33353 = state_30737__$1;
(statearr_30791_33353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (15))){
var inst_30580 = (state_30737[(13)]);
var inst_30578 = (state_30737[(14)]);
var inst_30579 = (state_30737[(15)]);
var inst_30581 = (state_30737[(16)]);
var inst_30606 = (state_30737[(2)]);
var inst_30608 = (inst_30581 + (1));
var tmp30781 = inst_30580;
var tmp30782 = inst_30578;
var tmp30783 = inst_30579;
var inst_30578__$1 = tmp30782;
var inst_30579__$1 = tmp30783;
var inst_30580__$1 = tmp30781;
var inst_30581__$1 = inst_30608;
var state_30737__$1 = (function (){var statearr_30794 = state_30737;
(statearr_30794[(13)] = inst_30580__$1);

(statearr_30794[(14)] = inst_30578__$1);

(statearr_30794[(15)] = inst_30579__$1);

(statearr_30794[(18)] = inst_30606);

(statearr_30794[(16)] = inst_30581__$1);

return statearr_30794;
})();
var statearr_30797_33354 = state_30737__$1;
(statearr_30797_33354[(2)] = null);

(statearr_30797_33354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (21))){
var inst_30641 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
var statearr_30804_33358 = state_30737__$1;
(statearr_30804_33358[(2)] = inst_30641);

(statearr_30804_33358[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (31))){
var inst_30671 = (state_30737[(11)]);
var inst_30675 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30671);
var state_30737__$1 = state_30737;
var statearr_30808_33359 = state_30737__$1;
(statearr_30808_33359[(2)] = inst_30675);

(statearr_30808_33359[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (32))){
var inst_30663 = (state_30737[(9)]);
var inst_30661 = (state_30737[(10)]);
var inst_30662 = (state_30737[(19)]);
var inst_30660 = (state_30737[(20)]);
var inst_30677 = (state_30737[(2)]);
var inst_30678 = (inst_30663 + (1));
var tmp30800 = inst_30661;
var tmp30801 = inst_30662;
var tmp30802 = inst_30660;
var inst_30660__$1 = tmp30802;
var inst_30661__$1 = tmp30800;
var inst_30662__$1 = tmp30801;
var inst_30663__$1 = inst_30678;
var state_30737__$1 = (function (){var statearr_30813 = state_30737;
(statearr_30813[(9)] = inst_30663__$1);

(statearr_30813[(21)] = inst_30677);

(statearr_30813[(10)] = inst_30661__$1);

(statearr_30813[(19)] = inst_30662__$1);

(statearr_30813[(20)] = inst_30660__$1);

return statearr_30813;
})();
var statearr_30821_33366 = state_30737__$1;
(statearr_30821_33366[(2)] = null);

(statearr_30821_33366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (40))){
var inst_30697 = (state_30737[(22)]);
var inst_30701 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30697);
var state_30737__$1 = state_30737;
var statearr_30823_33367 = state_30737__$1;
(statearr_30823_33367[(2)] = inst_30701);

(statearr_30823_33367[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (33))){
var inst_30682 = (state_30737[(23)]);
var inst_30688 = cljs.core.chunked_seq_QMARK_(inst_30682);
var state_30737__$1 = state_30737;
if(inst_30688){
var statearr_30829_33372 = state_30737__$1;
(statearr_30829_33372[(1)] = (36));

} else {
var statearr_30830_33373 = state_30737__$1;
(statearr_30830_33373[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (13))){
var inst_30596 = (state_30737[(24)]);
var inst_30603 = cljs.core.async.close_BANG_(inst_30596);
var state_30737__$1 = state_30737;
var statearr_30837_33374 = state_30737__$1;
(statearr_30837_33374[(2)] = inst_30603);

(statearr_30837_33374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (22))){
var inst_30627 = (state_30737[(8)]);
var inst_30631 = cljs.core.async.close_BANG_(inst_30627);
var state_30737__$1 = state_30737;
var statearr_30842_33378 = state_30737__$1;
(statearr_30842_33378[(2)] = inst_30631);

(statearr_30842_33378[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (36))){
var inst_30682 = (state_30737[(23)]);
var inst_30690 = cljs.core.chunk_first(inst_30682);
var inst_30691 = cljs.core.chunk_rest(inst_30682);
var inst_30692 = cljs.core.count(inst_30690);
var inst_30660 = inst_30691;
var inst_30661 = inst_30690;
var inst_30662 = inst_30692;
var inst_30663 = (0);
var state_30737__$1 = (function (){var statearr_30848 = state_30737;
(statearr_30848[(9)] = inst_30663);

(statearr_30848[(10)] = inst_30661);

(statearr_30848[(19)] = inst_30662);

(statearr_30848[(20)] = inst_30660);

return statearr_30848;
})();
var statearr_30851_33385 = state_30737__$1;
(statearr_30851_33385[(2)] = null);

(statearr_30851_33385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (41))){
var inst_30682 = (state_30737[(23)]);
var inst_30703 = (state_30737[(2)]);
var inst_30706 = cljs.core.next(inst_30682);
var inst_30660 = inst_30706;
var inst_30661 = null;
var inst_30662 = (0);
var inst_30663 = (0);
var state_30737__$1 = (function (){var statearr_30854 = state_30737;
(statearr_30854[(9)] = inst_30663);

(statearr_30854[(10)] = inst_30661);

(statearr_30854[(19)] = inst_30662);

(statearr_30854[(20)] = inst_30660);

(statearr_30854[(25)] = inst_30703);

return statearr_30854;
})();
var statearr_30859_33386 = state_30737__$1;
(statearr_30859_33386[(2)] = null);

(statearr_30859_33386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (43))){
var state_30737__$1 = state_30737;
var statearr_30861_33390 = state_30737__$1;
(statearr_30861_33390[(2)] = null);

(statearr_30861_33390[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (29))){
var inst_30715 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
var statearr_30864_33391 = state_30737__$1;
(statearr_30864_33391[(2)] = inst_30715);

(statearr_30864_33391[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (44))){
var inst_30724 = (state_30737[(2)]);
var state_30737__$1 = (function (){var statearr_30866 = state_30737;
(statearr_30866[(26)] = inst_30724);

return statearr_30866;
})();
var statearr_30867_33392 = state_30737__$1;
(statearr_30867_33392[(2)] = null);

(statearr_30867_33392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (6))){
var inst_30651 = (state_30737[(27)]);
var inst_30650 = cljs.core.deref(cs);
var inst_30651__$1 = cljs.core.keys(inst_30650);
var inst_30653 = cljs.core.count(inst_30651__$1);
var inst_30654 = cljs.core.reset_BANG_(dctr,inst_30653);
var inst_30659 = cljs.core.seq(inst_30651__$1);
var inst_30660 = inst_30659;
var inst_30661 = null;
var inst_30662 = (0);
var inst_30663 = (0);
var state_30737__$1 = (function (){var statearr_30868 = state_30737;
(statearr_30868[(27)] = inst_30651__$1);

(statearr_30868[(9)] = inst_30663);

(statearr_30868[(10)] = inst_30661);

(statearr_30868[(19)] = inst_30662);

(statearr_30868[(28)] = inst_30654);

(statearr_30868[(20)] = inst_30660);

return statearr_30868;
})();
var statearr_30870_33397 = state_30737__$1;
(statearr_30870_33397[(2)] = null);

(statearr_30870_33397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (28))){
var inst_30682 = (state_30737[(23)]);
var inst_30660 = (state_30737[(20)]);
var inst_30682__$1 = cljs.core.seq(inst_30660);
var state_30737__$1 = (function (){var statearr_30872 = state_30737;
(statearr_30872[(23)] = inst_30682__$1);

return statearr_30872;
})();
if(inst_30682__$1){
var statearr_30874_33398 = state_30737__$1;
(statearr_30874_33398[(1)] = (33));

} else {
var statearr_30875_33399 = state_30737__$1;
(statearr_30875_33399[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (25))){
var inst_30663 = (state_30737[(9)]);
var inst_30662 = (state_30737[(19)]);
var inst_30666 = (inst_30663 < inst_30662);
var inst_30667 = inst_30666;
var state_30737__$1 = state_30737;
if(cljs.core.truth_(inst_30667)){
var statearr_30878_33400 = state_30737__$1;
(statearr_30878_33400[(1)] = (27));

} else {
var statearr_30880_33401 = state_30737__$1;
(statearr_30880_33401[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (34))){
var state_30737__$1 = state_30737;
var statearr_30882_33402 = state_30737__$1;
(statearr_30882_33402[(2)] = null);

(statearr_30882_33402[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (17))){
var state_30737__$1 = state_30737;
var statearr_30883_33403 = state_30737__$1;
(statearr_30883_33403[(2)] = null);

(statearr_30883_33403[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (3))){
var inst_30729 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30737__$1,inst_30729);
} else {
if((state_val_30739 === (12))){
var inst_30646 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
var statearr_30890_33405 = state_30737__$1;
(statearr_30890_33405[(2)] = inst_30646);

(statearr_30890_33405[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (2))){
var state_30737__$1 = state_30737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30737__$1,(4),ch);
} else {
if((state_val_30739 === (23))){
var state_30737__$1 = state_30737;
var statearr_30891_33409 = state_30737__$1;
(statearr_30891_33409[(2)] = null);

(statearr_30891_33409[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (35))){
var inst_30712 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
var statearr_30900_33410 = state_30737__$1;
(statearr_30900_33410[(2)] = inst_30712);

(statearr_30900_33410[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (19))){
var inst_30611 = (state_30737[(7)]);
var inst_30616 = cljs.core.chunk_first(inst_30611);
var inst_30617 = cljs.core.chunk_rest(inst_30611);
var inst_30618 = cljs.core.count(inst_30616);
var inst_30578 = inst_30617;
var inst_30579 = inst_30616;
var inst_30580 = inst_30618;
var inst_30581 = (0);
var state_30737__$1 = (function (){var statearr_30905 = state_30737;
(statearr_30905[(13)] = inst_30580);

(statearr_30905[(14)] = inst_30578);

(statearr_30905[(15)] = inst_30579);

(statearr_30905[(16)] = inst_30581);

return statearr_30905;
})();
var statearr_30906_33411 = state_30737__$1;
(statearr_30906_33411[(2)] = null);

(statearr_30906_33411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (11))){
var inst_30578 = (state_30737[(14)]);
var inst_30611 = (state_30737[(7)]);
var inst_30611__$1 = cljs.core.seq(inst_30578);
var state_30737__$1 = (function (){var statearr_30908 = state_30737;
(statearr_30908[(7)] = inst_30611__$1);

return statearr_30908;
})();
if(inst_30611__$1){
var statearr_30909_33412 = state_30737__$1;
(statearr_30909_33412[(1)] = (16));

} else {
var statearr_30910_33413 = state_30737__$1;
(statearr_30910_33413[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (9))){
var inst_30648 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
var statearr_30911_33414 = state_30737__$1;
(statearr_30911_33414[(2)] = inst_30648);

(statearr_30911_33414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (5))){
var inst_30575 = cljs.core.deref(cs);
var inst_30576 = cljs.core.seq(inst_30575);
var inst_30578 = inst_30576;
var inst_30579 = null;
var inst_30580 = (0);
var inst_30581 = (0);
var state_30737__$1 = (function (){var statearr_30912 = state_30737;
(statearr_30912[(13)] = inst_30580);

(statearr_30912[(14)] = inst_30578);

(statearr_30912[(15)] = inst_30579);

(statearr_30912[(16)] = inst_30581);

return statearr_30912;
})();
var statearr_30917_33415 = state_30737__$1;
(statearr_30917_33415[(2)] = null);

(statearr_30917_33415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (14))){
var state_30737__$1 = state_30737;
var statearr_30918_33417 = state_30737__$1;
(statearr_30918_33417[(2)] = null);

(statearr_30918_33417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (45))){
var inst_30721 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
var statearr_30920_33418 = state_30737__$1;
(statearr_30920_33418[(2)] = inst_30721);

(statearr_30920_33418[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (26))){
var inst_30651 = (state_30737[(27)]);
var inst_30717 = (state_30737[(2)]);
var inst_30718 = cljs.core.seq(inst_30651);
var state_30737__$1 = (function (){var statearr_30923 = state_30737;
(statearr_30923[(29)] = inst_30717);

return statearr_30923;
})();
if(inst_30718){
var statearr_30924_33424 = state_30737__$1;
(statearr_30924_33424[(1)] = (42));

} else {
var statearr_30926_33425 = state_30737__$1;
(statearr_30926_33425[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (16))){
var inst_30611 = (state_30737[(7)]);
var inst_30614 = cljs.core.chunked_seq_QMARK_(inst_30611);
var state_30737__$1 = state_30737;
if(inst_30614){
var statearr_30927_33426 = state_30737__$1;
(statearr_30927_33426[(1)] = (19));

} else {
var statearr_30928_33427 = state_30737__$1;
(statearr_30928_33427[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (38))){
var inst_30709 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
var statearr_30929_33428 = state_30737__$1;
(statearr_30929_33428[(2)] = inst_30709);

(statearr_30929_33428[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (30))){
var state_30737__$1 = state_30737;
var statearr_30932_33429 = state_30737__$1;
(statearr_30932_33429[(2)] = null);

(statearr_30932_33429[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (10))){
var inst_30579 = (state_30737[(15)]);
var inst_30581 = (state_30737[(16)]);
var inst_30595 = cljs.core._nth(inst_30579,inst_30581);
var inst_30596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30595,(0),null);
var inst_30597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30595,(1),null);
var state_30737__$1 = (function (){var statearr_30936 = state_30737;
(statearr_30936[(24)] = inst_30596);

return statearr_30936;
})();
if(cljs.core.truth_(inst_30597)){
var statearr_30938_33435 = state_30737__$1;
(statearr_30938_33435[(1)] = (13));

} else {
var statearr_30943_33436 = state_30737__$1;
(statearr_30943_33436[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (18))){
var inst_30644 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
var statearr_30945_33437 = state_30737__$1;
(statearr_30945_33437[(2)] = inst_30644);

(statearr_30945_33437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (42))){
var state_30737__$1 = state_30737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30737__$1,(45),dchan);
} else {
if((state_val_30739 === (37))){
var inst_30697 = (state_30737[(22)]);
var inst_30682 = (state_30737[(23)]);
var inst_30568 = (state_30737[(12)]);
var inst_30697__$1 = cljs.core.first(inst_30682);
var inst_30698 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30697__$1,inst_30568,done);
var state_30737__$1 = (function (){var statearr_30950 = state_30737;
(statearr_30950[(22)] = inst_30697__$1);

return statearr_30950;
})();
if(cljs.core.truth_(inst_30698)){
var statearr_30951_33438 = state_30737__$1;
(statearr_30951_33438[(1)] = (39));

} else {
var statearr_30952_33439 = state_30737__$1;
(statearr_30952_33439[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (8))){
var inst_30580 = (state_30737[(13)]);
var inst_30581 = (state_30737[(16)]);
var inst_30585 = (inst_30581 < inst_30580);
var inst_30587 = inst_30585;
var state_30737__$1 = state_30737;
if(cljs.core.truth_(inst_30587)){
var statearr_30953_33440 = state_30737__$1;
(statearr_30953_33440[(1)] = (10));

} else {
var statearr_30954_33441 = state_30737__$1;
(statearr_30954_33441[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28601__auto__ = null;
var cljs$core$async$mult_$_state_machine__28601__auto____0 = (function (){
var statearr_30963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30963[(0)] = cljs$core$async$mult_$_state_machine__28601__auto__);

(statearr_30963[(1)] = (1));

return statearr_30963;
});
var cljs$core$async$mult_$_state_machine__28601__auto____1 = (function (state_30737){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_30737);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e30969){var ex__28604__auto__ = e30969;
var statearr_30970_33442 = state_30737;
(statearr_30970_33442[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_30737[(4)]))){
var statearr_30971_33443 = state_30737;
(statearr_30971_33443[(1)] = cljs.core.first((state_30737[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33444 = state_30737;
state_30737 = G__33444;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28601__auto__ = function(state_30737){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28601__auto____1.call(this,state_30737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28601__auto____0;
cljs$core$async$mult_$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28601__auto____1;
return cljs$core$async$mult_$_state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_30975 = f__29322__auto__();
(statearr_30975[(6)] = c__29321__auto___33317);

return statearr_30975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
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
var G__30987 = arguments.length;
switch (G__30987) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33447 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33447(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33449 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33449(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33450 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33450(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33451 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33451(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33457 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33457(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33458 = arguments.length;
var i__4865__auto___33459 = (0);
while(true){
if((i__4865__auto___33459 < len__4864__auto___33458)){
args__4870__auto__.push((arguments[i__4865__auto___33459]));

var G__33460 = (i__4865__auto___33459 + (1));
i__4865__auto___33459 = G__33460;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31061){
var map__31062 = p__31061;
var map__31062__$1 = cljs.core.__destructure_map(map__31062);
var opts = map__31062__$1;
var statearr_31064_33461 = state;
(statearr_31064_33461[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31065_33462 = state;
(statearr_31065_33462[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31075_33463 = state;
(statearr_31075_33463[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31049){
var G__31050 = cljs.core.first(seq31049);
var seq31049__$1 = cljs.core.next(seq31049);
var G__31051 = cljs.core.first(seq31049__$1);
var seq31049__$2 = cljs.core.next(seq31049__$1);
var G__31052 = cljs.core.first(seq31049__$2);
var seq31049__$3 = cljs.core.next(seq31049__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31050,G__31051,G__31052,seq31049__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31118 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31118 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31119){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31119 = meta31119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31120,meta31119__$1){
var self__ = this;
var _31120__$1 = this;
return (new cljs.core.async.t_cljs$core$async31118(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31119__$1));
}));

(cljs.core.async.t_cljs$core$async31118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31120){
var self__ = this;
var _31120__$1 = this;
return self__.meta31119;
}));

(cljs.core.async.t_cljs$core$async31118.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31118.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31118.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31118.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31118.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31118.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31118.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31118.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31119","meta31119",-1334571987,null)], null);
}));

(cljs.core.async.t_cljs$core$async31118.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31118");

(cljs.core.async.t_cljs$core$async31118.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31118");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31118.
 */
cljs.core.async.__GT_t_cljs$core$async31118 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31118(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31119){
return (new cljs.core.async.t_cljs$core$async31118(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31119));
});

}

return (new cljs.core.async.t_cljs$core$async31118(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29321__auto___33477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_31246){
var state_val_31247 = (state_31246[(1)]);
if((state_val_31247 === (7))){
var inst_31200 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
if(cljs.core.truth_(inst_31200)){
var statearr_31253_33482 = state_31246__$1;
(statearr_31253_33482[(1)] = (8));

} else {
var statearr_31254_33483 = state_31246__$1;
(statearr_31254_33483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (20))){
var inst_31192 = (state_31246[(7)]);
var state_31246__$1 = state_31246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31246__$1,(23),out,inst_31192);
} else {
if((state_val_31247 === (1))){
var inst_31172 = calc_state();
var inst_31173 = cljs.core.__destructure_map(inst_31172);
var inst_31174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31173,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31173,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31173,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31177 = inst_31172;
var state_31246__$1 = (function (){var statearr_31256 = state_31246;
(statearr_31256[(8)] = inst_31177);

(statearr_31256[(9)] = inst_31176);

(statearr_31256[(10)] = inst_31174);

(statearr_31256[(11)] = inst_31175);

return statearr_31256;
})();
var statearr_31258_33487 = state_31246__$1;
(statearr_31258_33487[(2)] = null);

(statearr_31258_33487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (24))){
var inst_31182 = (state_31246[(12)]);
var inst_31177 = inst_31182;
var state_31246__$1 = (function (){var statearr_31261 = state_31246;
(statearr_31261[(8)] = inst_31177);

return statearr_31261;
})();
var statearr_31262_33491 = state_31246__$1;
(statearr_31262_33491[(2)] = null);

(statearr_31262_33491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (4))){
var inst_31194 = (state_31246[(13)]);
var inst_31192 = (state_31246[(7)]);
var inst_31191 = (state_31246[(2)]);
var inst_31192__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31191,(0),null);
var inst_31193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31191,(1),null);
var inst_31194__$1 = (inst_31192__$1 == null);
var state_31246__$1 = (function (){var statearr_31263 = state_31246;
(statearr_31263[(13)] = inst_31194__$1);

(statearr_31263[(7)] = inst_31192__$1);

(statearr_31263[(14)] = inst_31193);

return statearr_31263;
})();
if(cljs.core.truth_(inst_31194__$1)){
var statearr_31264_33492 = state_31246__$1;
(statearr_31264_33492[(1)] = (5));

} else {
var statearr_31265_33493 = state_31246__$1;
(statearr_31265_33493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (15))){
var inst_31184 = (state_31246[(15)]);
var inst_31217 = (state_31246[(16)]);
var inst_31217__$1 = cljs.core.empty_QMARK_(inst_31184);
var state_31246__$1 = (function (){var statearr_31266 = state_31246;
(statearr_31266[(16)] = inst_31217__$1);

return statearr_31266;
})();
if(inst_31217__$1){
var statearr_31267_33494 = state_31246__$1;
(statearr_31267_33494[(1)] = (17));

} else {
var statearr_31268_33495 = state_31246__$1;
(statearr_31268_33495[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (21))){
var inst_31182 = (state_31246[(12)]);
var inst_31177 = inst_31182;
var state_31246__$1 = (function (){var statearr_31269 = state_31246;
(statearr_31269[(8)] = inst_31177);

return statearr_31269;
})();
var statearr_31270_33496 = state_31246__$1;
(statearr_31270_33496[(2)] = null);

(statearr_31270_33496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (13))){
var inst_31208 = (state_31246[(2)]);
var inst_31209 = calc_state();
var inst_31177 = inst_31209;
var state_31246__$1 = (function (){var statearr_31271 = state_31246;
(statearr_31271[(17)] = inst_31208);

(statearr_31271[(8)] = inst_31177);

return statearr_31271;
})();
var statearr_31272_33497 = state_31246__$1;
(statearr_31272_33497[(2)] = null);

(statearr_31272_33497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (22))){
var inst_31238 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
var statearr_31273_33498 = state_31246__$1;
(statearr_31273_33498[(2)] = inst_31238);

(statearr_31273_33498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (6))){
var inst_31193 = (state_31246[(14)]);
var inst_31198 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31193,change);
var state_31246__$1 = state_31246;
var statearr_31274_33499 = state_31246__$1;
(statearr_31274_33499[(2)] = inst_31198);

(statearr_31274_33499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (25))){
var state_31246__$1 = state_31246;
var statearr_31276_33500 = state_31246__$1;
(statearr_31276_33500[(2)] = null);

(statearr_31276_33500[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (17))){
var inst_31185 = (state_31246[(18)]);
var inst_31193 = (state_31246[(14)]);
var inst_31220 = (inst_31185.cljs$core$IFn$_invoke$arity$1 ? inst_31185.cljs$core$IFn$_invoke$arity$1(inst_31193) : inst_31185.call(null,inst_31193));
var inst_31221 = cljs.core.not(inst_31220);
var state_31246__$1 = state_31246;
var statearr_31278_33501 = state_31246__$1;
(statearr_31278_33501[(2)] = inst_31221);

(statearr_31278_33501[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (3))){
var inst_31242 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31246__$1,inst_31242);
} else {
if((state_val_31247 === (12))){
var state_31246__$1 = state_31246;
var statearr_31279_33502 = state_31246__$1;
(statearr_31279_33502[(2)] = null);

(statearr_31279_33502[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (2))){
var inst_31177 = (state_31246[(8)]);
var inst_31182 = (state_31246[(12)]);
var inst_31182__$1 = cljs.core.__destructure_map(inst_31177);
var inst_31184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31182__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31182__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31182__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31246__$1 = (function (){var statearr_31280 = state_31246;
(statearr_31280[(12)] = inst_31182__$1);

(statearr_31280[(15)] = inst_31184);

(statearr_31280[(18)] = inst_31185);

return statearr_31280;
})();
return cljs.core.async.ioc_alts_BANG_(state_31246__$1,(4),inst_31186);
} else {
if((state_val_31247 === (23))){
var inst_31229 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
if(cljs.core.truth_(inst_31229)){
var statearr_31281_33507 = state_31246__$1;
(statearr_31281_33507[(1)] = (24));

} else {
var statearr_31282_33508 = state_31246__$1;
(statearr_31282_33508[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (19))){
var inst_31224 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
var statearr_31292_33509 = state_31246__$1;
(statearr_31292_33509[(2)] = inst_31224);

(statearr_31292_33509[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (11))){
var inst_31193 = (state_31246[(14)]);
var inst_31205 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31193);
var state_31246__$1 = state_31246;
var statearr_31293_33510 = state_31246__$1;
(statearr_31293_33510[(2)] = inst_31205);

(statearr_31293_33510[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (9))){
var inst_31212 = (state_31246[(19)]);
var inst_31184 = (state_31246[(15)]);
var inst_31193 = (state_31246[(14)]);
var inst_31212__$1 = (inst_31184.cljs$core$IFn$_invoke$arity$1 ? inst_31184.cljs$core$IFn$_invoke$arity$1(inst_31193) : inst_31184.call(null,inst_31193));
var state_31246__$1 = (function (){var statearr_31298 = state_31246;
(statearr_31298[(19)] = inst_31212__$1);

return statearr_31298;
})();
if(cljs.core.truth_(inst_31212__$1)){
var statearr_31299_33511 = state_31246__$1;
(statearr_31299_33511[(1)] = (14));

} else {
var statearr_31302_33512 = state_31246__$1;
(statearr_31302_33512[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (5))){
var inst_31194 = (state_31246[(13)]);
var state_31246__$1 = state_31246;
var statearr_31304_33515 = state_31246__$1;
(statearr_31304_33515[(2)] = inst_31194);

(statearr_31304_33515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (14))){
var inst_31212 = (state_31246[(19)]);
var state_31246__$1 = state_31246;
var statearr_31305_33519 = state_31246__$1;
(statearr_31305_33519[(2)] = inst_31212);

(statearr_31305_33519[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (26))){
var inst_31234 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
var statearr_31306_33522 = state_31246__$1;
(statearr_31306_33522[(2)] = inst_31234);

(statearr_31306_33522[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (16))){
var inst_31226 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
if(cljs.core.truth_(inst_31226)){
var statearr_31310_33523 = state_31246__$1;
(statearr_31310_33523[(1)] = (20));

} else {
var statearr_31311_33524 = state_31246__$1;
(statearr_31311_33524[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (10))){
var inst_31240 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
var statearr_31312_33525 = state_31246__$1;
(statearr_31312_33525[(2)] = inst_31240);

(statearr_31312_33525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (18))){
var inst_31217 = (state_31246[(16)]);
var state_31246__$1 = state_31246;
var statearr_31313_33526 = state_31246__$1;
(statearr_31313_33526[(2)] = inst_31217);

(statearr_31313_33526[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (8))){
var inst_31192 = (state_31246[(7)]);
var inst_31203 = (inst_31192 == null);
var state_31246__$1 = state_31246;
if(cljs.core.truth_(inst_31203)){
var statearr_31314_33527 = state_31246__$1;
(statearr_31314_33527[(1)] = (11));

} else {
var statearr_31315_33528 = state_31246__$1;
(statearr_31315_33528[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__28601__auto__ = null;
var cljs$core$async$mix_$_state_machine__28601__auto____0 = (function (){
var statearr_31318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31318[(0)] = cljs$core$async$mix_$_state_machine__28601__auto__);

(statearr_31318[(1)] = (1));

return statearr_31318;
});
var cljs$core$async$mix_$_state_machine__28601__auto____1 = (function (state_31246){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_31246);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e31319){var ex__28604__auto__ = e31319;
var statearr_31320_33532 = state_31246;
(statearr_31320_33532[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_31246[(4)]))){
var statearr_31321_33533 = state_31246;
(statearr_31321_33533[(1)] = cljs.core.first((state_31246[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33538 = state_31246;
state_31246 = G__33538;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28601__auto__ = function(state_31246){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28601__auto____1.call(this,state_31246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28601__auto____0;
cljs$core$async$mix_$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28601__auto____1;
return cljs$core$async$mix_$_state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_31322 = f__29322__auto__();
(statearr_31322[(6)] = c__29321__auto___33477);

return statearr_31322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33545 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33545(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33546 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33546(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33547 = (function() {
var G__33548 = null;
var G__33548__1 = (function (p){
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
var G__33548__2 = (function (p,v){
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
G__33548 = function(p,v){
switch(arguments.length){
case 1:
return G__33548__1.call(this,p);
case 2:
return G__33548__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33548.cljs$core$IFn$_invoke$arity$1 = G__33548__1;
G__33548.cljs$core$IFn$_invoke$arity$2 = G__33548__2;
return G__33548;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31388 = arguments.length;
switch (G__31388) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33547(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33547(p,v);
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
var G__31398 = arguments.length;
switch (G__31398) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31390_SHARP_){
if(cljs.core.truth_((p1__31390_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31390_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31390_SHARP_.call(null,topic)))){
return p1__31390_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31390_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31416 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31416 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31417){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31417 = meta31417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31418,meta31417__$1){
var self__ = this;
var _31418__$1 = this;
return (new cljs.core.async.t_cljs$core$async31416(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31417__$1));
}));

(cljs.core.async.t_cljs$core$async31416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31418){
var self__ = this;
var _31418__$1 = this;
return self__.meta31417;
}));

(cljs.core.async.t_cljs$core$async31416.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31416.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31416.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31416.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31416.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async31416.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31416.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31417","meta31417",1535259013,null)], null);
}));

(cljs.core.async.t_cljs$core$async31416.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31416");

(cljs.core.async.t_cljs$core$async31416.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31416");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31416.
 */
cljs.core.async.__GT_t_cljs$core$async31416 = (function cljs$core$async$__GT_t_cljs$core$async31416(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31417){
return (new cljs.core.async.t_cljs$core$async31416(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31417));
});

}

return (new cljs.core.async.t_cljs$core$async31416(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29321__auto___33559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_31554){
var state_val_31555 = (state_31554[(1)]);
if((state_val_31555 === (7))){
var inst_31539 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
var statearr_31556_33564 = state_31554__$1;
(statearr_31556_33564[(2)] = inst_31539);

(statearr_31556_33564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (20))){
var state_31554__$1 = state_31554;
var statearr_31557_33567 = state_31554__$1;
(statearr_31557_33567[(2)] = null);

(statearr_31557_33567[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (1))){
var state_31554__$1 = state_31554;
var statearr_31558_33568 = state_31554__$1;
(statearr_31558_33568[(2)] = null);

(statearr_31558_33568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (24))){
var inst_31519 = (state_31554[(7)]);
var inst_31530 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31519);
var state_31554__$1 = state_31554;
var statearr_31567_33571 = state_31554__$1;
(statearr_31567_33571[(2)] = inst_31530);

(statearr_31567_33571[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (4))){
var inst_31450 = (state_31554[(8)]);
var inst_31450__$1 = (state_31554[(2)]);
var inst_31451 = (inst_31450__$1 == null);
var state_31554__$1 = (function (){var statearr_31573 = state_31554;
(statearr_31573[(8)] = inst_31450__$1);

return statearr_31573;
})();
if(cljs.core.truth_(inst_31451)){
var statearr_31574_33572 = state_31554__$1;
(statearr_31574_33572[(1)] = (5));

} else {
var statearr_31575_33573 = state_31554__$1;
(statearr_31575_33573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (15))){
var inst_31507 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
var statearr_31576_33578 = state_31554__$1;
(statearr_31576_33578[(2)] = inst_31507);

(statearr_31576_33578[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (21))){
var inst_31535 = (state_31554[(2)]);
var state_31554__$1 = (function (){var statearr_31577 = state_31554;
(statearr_31577[(9)] = inst_31535);

return statearr_31577;
})();
var statearr_31581_33581 = state_31554__$1;
(statearr_31581_33581[(2)] = null);

(statearr_31581_33581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (13))){
var inst_31482 = (state_31554[(10)]);
var inst_31484 = cljs.core.chunked_seq_QMARK_(inst_31482);
var state_31554__$1 = state_31554;
if(inst_31484){
var statearr_31587_33582 = state_31554__$1;
(statearr_31587_33582[(1)] = (16));

} else {
var statearr_31588_33583 = state_31554__$1;
(statearr_31588_33583[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (22))){
var inst_31526 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
if(cljs.core.truth_(inst_31526)){
var statearr_31589_33586 = state_31554__$1;
(statearr_31589_33586[(1)] = (23));

} else {
var statearr_31590_33587 = state_31554__$1;
(statearr_31590_33587[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (6))){
var inst_31450 = (state_31554[(8)]);
var inst_31521 = (state_31554[(11)]);
var inst_31519 = (state_31554[(7)]);
var inst_31519__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31450) : topic_fn.call(null,inst_31450));
var inst_31520 = cljs.core.deref(mults);
var inst_31521__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31520,inst_31519__$1);
var state_31554__$1 = (function (){var statearr_31591 = state_31554;
(statearr_31591[(11)] = inst_31521__$1);

(statearr_31591[(7)] = inst_31519__$1);

return statearr_31591;
})();
if(cljs.core.truth_(inst_31521__$1)){
var statearr_31593_33589 = state_31554__$1;
(statearr_31593_33589[(1)] = (19));

} else {
var statearr_31594_33596 = state_31554__$1;
(statearr_31594_33596[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (25))){
var inst_31532 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
var statearr_31595_33599 = state_31554__$1;
(statearr_31595_33599[(2)] = inst_31532);

(statearr_31595_33599[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (17))){
var inst_31482 = (state_31554[(10)]);
var inst_31491 = cljs.core.first(inst_31482);
var inst_31499 = cljs.core.async.muxch_STAR_(inst_31491);
var inst_31500 = cljs.core.async.close_BANG_(inst_31499);
var inst_31501 = cljs.core.next(inst_31482);
var inst_31464 = inst_31501;
var inst_31465 = null;
var inst_31466 = (0);
var inst_31467 = (0);
var state_31554__$1 = (function (){var statearr_31596 = state_31554;
(statearr_31596[(12)] = inst_31500);

(statearr_31596[(13)] = inst_31464);

(statearr_31596[(14)] = inst_31466);

(statearr_31596[(15)] = inst_31467);

(statearr_31596[(16)] = inst_31465);

return statearr_31596;
})();
var statearr_31598_33600 = state_31554__$1;
(statearr_31598_33600[(2)] = null);

(statearr_31598_33600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (3))){
var inst_31545 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31554__$1,inst_31545);
} else {
if((state_val_31555 === (12))){
var inst_31509 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
var statearr_31603_33601 = state_31554__$1;
(statearr_31603_33601[(2)] = inst_31509);

(statearr_31603_33601[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (2))){
var state_31554__$1 = state_31554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31554__$1,(4),ch);
} else {
if((state_val_31555 === (23))){
var state_31554__$1 = state_31554;
var statearr_31604_33602 = state_31554__$1;
(statearr_31604_33602[(2)] = null);

(statearr_31604_33602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (19))){
var inst_31450 = (state_31554[(8)]);
var inst_31521 = (state_31554[(11)]);
var inst_31524 = cljs.core.async.muxch_STAR_(inst_31521);
var state_31554__$1 = state_31554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31554__$1,(22),inst_31524,inst_31450);
} else {
if((state_val_31555 === (11))){
var inst_31464 = (state_31554[(13)]);
var inst_31482 = (state_31554[(10)]);
var inst_31482__$1 = cljs.core.seq(inst_31464);
var state_31554__$1 = (function (){var statearr_31605 = state_31554;
(statearr_31605[(10)] = inst_31482__$1);

return statearr_31605;
})();
if(inst_31482__$1){
var statearr_31606_33603 = state_31554__$1;
(statearr_31606_33603[(1)] = (13));

} else {
var statearr_31607_33608 = state_31554__$1;
(statearr_31607_33608[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (9))){
var inst_31511 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
var statearr_31609_33609 = state_31554__$1;
(statearr_31609_33609[(2)] = inst_31511);

(statearr_31609_33609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (5))){
var inst_31460 = cljs.core.deref(mults);
var inst_31461 = cljs.core.vals(inst_31460);
var inst_31462 = cljs.core.seq(inst_31461);
var inst_31464 = inst_31462;
var inst_31465 = null;
var inst_31466 = (0);
var inst_31467 = (0);
var state_31554__$1 = (function (){var statearr_31610 = state_31554;
(statearr_31610[(13)] = inst_31464);

(statearr_31610[(14)] = inst_31466);

(statearr_31610[(15)] = inst_31467);

(statearr_31610[(16)] = inst_31465);

return statearr_31610;
})();
var statearr_31611_33612 = state_31554__$1;
(statearr_31611_33612[(2)] = null);

(statearr_31611_33612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (14))){
var state_31554__$1 = state_31554;
var statearr_31615_33617 = state_31554__$1;
(statearr_31615_33617[(2)] = null);

(statearr_31615_33617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (16))){
var inst_31482 = (state_31554[(10)]);
var inst_31486 = cljs.core.chunk_first(inst_31482);
var inst_31487 = cljs.core.chunk_rest(inst_31482);
var inst_31488 = cljs.core.count(inst_31486);
var inst_31464 = inst_31487;
var inst_31465 = inst_31486;
var inst_31466 = inst_31488;
var inst_31467 = (0);
var state_31554__$1 = (function (){var statearr_31618 = state_31554;
(statearr_31618[(13)] = inst_31464);

(statearr_31618[(14)] = inst_31466);

(statearr_31618[(15)] = inst_31467);

(statearr_31618[(16)] = inst_31465);

return statearr_31618;
})();
var statearr_31619_33618 = state_31554__$1;
(statearr_31619_33618[(2)] = null);

(statearr_31619_33618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (10))){
var inst_31464 = (state_31554[(13)]);
var inst_31466 = (state_31554[(14)]);
var inst_31467 = (state_31554[(15)]);
var inst_31465 = (state_31554[(16)]);
var inst_31473 = cljs.core._nth(inst_31465,inst_31467);
var inst_31474 = cljs.core.async.muxch_STAR_(inst_31473);
var inst_31475 = cljs.core.async.close_BANG_(inst_31474);
var inst_31476 = (inst_31467 + (1));
var tmp31612 = inst_31464;
var tmp31613 = inst_31466;
var tmp31614 = inst_31465;
var inst_31464__$1 = tmp31612;
var inst_31465__$1 = tmp31614;
var inst_31466__$1 = tmp31613;
var inst_31467__$1 = inst_31476;
var state_31554__$1 = (function (){var statearr_31624 = state_31554;
(statearr_31624[(13)] = inst_31464__$1);

(statearr_31624[(14)] = inst_31466__$1);

(statearr_31624[(17)] = inst_31475);

(statearr_31624[(15)] = inst_31467__$1);

(statearr_31624[(16)] = inst_31465__$1);

return statearr_31624;
})();
var statearr_31625_33622 = state_31554__$1;
(statearr_31625_33622[(2)] = null);

(statearr_31625_33622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (18))){
var inst_31504 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
var statearr_31626_33623 = state_31554__$1;
(statearr_31626_33623[(2)] = inst_31504);

(statearr_31626_33623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (8))){
var inst_31466 = (state_31554[(14)]);
var inst_31467 = (state_31554[(15)]);
var inst_31469 = (inst_31467 < inst_31466);
var inst_31470 = inst_31469;
var state_31554__$1 = state_31554;
if(cljs.core.truth_(inst_31470)){
var statearr_31629_33625 = state_31554__$1;
(statearr_31629_33625[(1)] = (10));

} else {
var statearr_31632_33626 = state_31554__$1;
(statearr_31632_33626[(1)] = (11));

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
var cljs$core$async$state_machine__28601__auto__ = null;
var cljs$core$async$state_machine__28601__auto____0 = (function (){
var statearr_31635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31635[(0)] = cljs$core$async$state_machine__28601__auto__);

(statearr_31635[(1)] = (1));

return statearr_31635;
});
var cljs$core$async$state_machine__28601__auto____1 = (function (state_31554){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_31554);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e31640){var ex__28604__auto__ = e31640;
var statearr_31641_33629 = state_31554;
(statearr_31641_33629[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_31554[(4)]))){
var statearr_31642_33636 = state_31554;
(statearr_31642_33636[(1)] = cljs.core.first((state_31554[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33637 = state_31554;
state_31554 = G__33637;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$state_machine__28601__auto__ = function(state_31554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28601__auto____1.call(this,state_31554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28601__auto____0;
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28601__auto____1;
return cljs$core$async$state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_31644 = f__29322__auto__();
(statearr_31644[(6)] = c__29321__auto___33559);

return statearr_31644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
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
var G__31646 = arguments.length;
switch (G__31646) {
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
var G__31663 = arguments.length;
switch (G__31663) {
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
var G__31677 = arguments.length;
switch (G__31677) {
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
var c__29321__auto___33651 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_31735){
var state_val_31736 = (state_31735[(1)]);
if((state_val_31736 === (7))){
var state_31735__$1 = state_31735;
var statearr_31738_33652 = state_31735__$1;
(statearr_31738_33652[(2)] = null);

(statearr_31738_33652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (1))){
var state_31735__$1 = state_31735;
var statearr_31739_33653 = state_31735__$1;
(statearr_31739_33653[(2)] = null);

(statearr_31739_33653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (4))){
var inst_31694 = (state_31735[(7)]);
var inst_31693 = (state_31735[(8)]);
var inst_31696 = (inst_31694 < inst_31693);
var state_31735__$1 = state_31735;
if(cljs.core.truth_(inst_31696)){
var statearr_31740_33654 = state_31735__$1;
(statearr_31740_33654[(1)] = (6));

} else {
var statearr_31742_33658 = state_31735__$1;
(statearr_31742_33658[(1)] = (7));

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
var state_31735__$1 = (function (){var statearr_31749 = state_31735;
(statearr_31749[(9)] = inst_31721__$1);

return statearr_31749;
})();
if(cljs.core.truth_(inst_31722)){
var statearr_31752_33659 = state_31735__$1;
(statearr_31752_33659[(1)] = (14));

} else {
var statearr_31753_33660 = state_31735__$1;
(statearr_31753_33660[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (6))){
var state_31735__$1 = state_31735;
var statearr_31757_33661 = state_31735__$1;
(statearr_31757_33661[(2)] = null);

(statearr_31757_33661[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (17))){
var inst_31728 = (state_31735[(2)]);
var state_31735__$1 = (function (){var statearr_31766 = state_31735;
(statearr_31766[(10)] = inst_31728);

return statearr_31766;
})();
var statearr_31769_33662 = state_31735__$1;
(statearr_31769_33662[(2)] = null);

(statearr_31769_33662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (3))){
var inst_31733 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31735__$1,inst_31733);
} else {
if((state_val_31736 === (12))){
var _ = (function (){var statearr_31773 = state_31735;
(statearr_31773[(4)] = cljs.core.rest((state_31735[(4)])));

return statearr_31773;
})();
var state_31735__$1 = state_31735;
var ex31764 = (state_31735__$1[(2)]);
var statearr_31775_33663 = state_31735__$1;
(statearr_31775_33663[(5)] = ex31764);


if((ex31764 instanceof Object)){
var statearr_31779_33664 = state_31735__$1;
(statearr_31779_33664[(1)] = (11));

(statearr_31779_33664[(5)] = null);

} else {
throw ex31764;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (2))){
var inst_31692 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31693 = cnt;
var inst_31694 = (0);
var state_31735__$1 = (function (){var statearr_31790 = state_31735;
(statearr_31790[(7)] = inst_31694);

(statearr_31790[(11)] = inst_31692);

(statearr_31790[(8)] = inst_31693);

return statearr_31790;
})();
var statearr_31792_33665 = state_31735__$1;
(statearr_31792_33665[(2)] = null);

(statearr_31792_33665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (11))){
var inst_31699 = (state_31735[(2)]);
var inst_31700 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31735__$1 = (function (){var statearr_31797 = state_31735;
(statearr_31797[(12)] = inst_31699);

return statearr_31797;
})();
var statearr_31800_33666 = state_31735__$1;
(statearr_31800_33666[(2)] = inst_31700);

(statearr_31800_33666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (9))){
var inst_31694 = (state_31735[(7)]);
var _ = (function (){var statearr_31801 = state_31735;
(statearr_31801[(4)] = cljs.core.cons((12),(state_31735[(4)])));

return statearr_31801;
})();
var inst_31707 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31694) : chs__$1.call(null,inst_31694));
var inst_31708 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31694) : done.call(null,inst_31694));
var inst_31709 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31707,inst_31708);
var ___$1 = (function (){var statearr_31803 = state_31735;
(statearr_31803[(4)] = cljs.core.rest((state_31735[(4)])));

return statearr_31803;
})();
var state_31735__$1 = state_31735;
var statearr_31804_33671 = state_31735__$1;
(statearr_31804_33671[(2)] = inst_31709);

(statearr_31804_33671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (5))){
var inst_31719 = (state_31735[(2)]);
var state_31735__$1 = (function (){var statearr_31810 = state_31735;
(statearr_31810[(13)] = inst_31719);

return statearr_31810;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31735__$1,(13),dchan);
} else {
if((state_val_31736 === (14))){
var inst_31724 = cljs.core.async.close_BANG_(out);
var state_31735__$1 = state_31735;
var statearr_31812_33675 = state_31735__$1;
(statearr_31812_33675[(2)] = inst_31724);

(statearr_31812_33675[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (16))){
var inst_31731 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
var statearr_31813_33677 = state_31735__$1;
(statearr_31813_33677[(2)] = inst_31731);

(statearr_31813_33677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (10))){
var inst_31694 = (state_31735[(7)]);
var inst_31712 = (state_31735[(2)]);
var inst_31713 = (inst_31694 + (1));
var inst_31694__$1 = inst_31713;
var state_31735__$1 = (function (){var statearr_31814 = state_31735;
(statearr_31814[(14)] = inst_31712);

(statearr_31814[(7)] = inst_31694__$1);

return statearr_31814;
})();
var statearr_31815_33678 = state_31735__$1;
(statearr_31815_33678[(2)] = null);

(statearr_31815_33678[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (8))){
var inst_31717 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
var statearr_31816_33680 = state_31735__$1;
(statearr_31816_33680[(2)] = inst_31717);

(statearr_31816_33680[(1)] = (5));


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
var cljs$core$async$state_machine__28601__auto__ = null;
var cljs$core$async$state_machine__28601__auto____0 = (function (){
var statearr_31820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31820[(0)] = cljs$core$async$state_machine__28601__auto__);

(statearr_31820[(1)] = (1));

return statearr_31820;
});
var cljs$core$async$state_machine__28601__auto____1 = (function (state_31735){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_31735);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e31821){var ex__28604__auto__ = e31821;
var statearr_31822_33687 = state_31735;
(statearr_31822_33687[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_31735[(4)]))){
var statearr_31823_33688 = state_31735;
(statearr_31823_33688[(1)] = cljs.core.first((state_31735[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33693 = state_31735;
state_31735 = G__33693;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$state_machine__28601__auto__ = function(state_31735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28601__auto____1.call(this,state_31735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28601__auto____0;
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28601__auto____1;
return cljs$core$async$state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_31825 = f__29322__auto__();
(statearr_31825[(6)] = c__29321__auto___33651);

return statearr_31825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
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
var G__31854 = arguments.length;
switch (G__31854) {
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
var c__29321__auto___33699 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_31911){
var state_val_31912 = (state_31911[(1)]);
if((state_val_31912 === (7))){
var inst_31881 = (state_31911[(7)]);
var inst_31882 = (state_31911[(8)]);
var inst_31881__$1 = (state_31911[(2)]);
var inst_31882__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31881__$1,(0),null);
var inst_31883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31881__$1,(1),null);
var inst_31884 = (inst_31882__$1 == null);
var state_31911__$1 = (function (){var statearr_31916 = state_31911;
(statearr_31916[(9)] = inst_31883);

(statearr_31916[(7)] = inst_31881__$1);

(statearr_31916[(8)] = inst_31882__$1);

return statearr_31916;
})();
if(cljs.core.truth_(inst_31884)){
var statearr_31918_33703 = state_31911__$1;
(statearr_31918_33703[(1)] = (8));

} else {
var statearr_31919_33704 = state_31911__$1;
(statearr_31919_33704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (1))){
var inst_31871 = cljs.core.vec(chs);
var inst_31872 = inst_31871;
var state_31911__$1 = (function (){var statearr_31922 = state_31911;
(statearr_31922[(10)] = inst_31872);

return statearr_31922;
})();
var statearr_31924_33705 = state_31911__$1;
(statearr_31924_33705[(2)] = null);

(statearr_31924_33705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (4))){
var inst_31872 = (state_31911[(10)]);
var state_31911__$1 = state_31911;
return cljs.core.async.ioc_alts_BANG_(state_31911__$1,(7),inst_31872);
} else {
if((state_val_31912 === (6))){
var inst_31907 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31929_33709 = state_31911__$1;
(statearr_31929_33709[(2)] = inst_31907);

(statearr_31929_33709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (3))){
var inst_31909 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31911__$1,inst_31909);
} else {
if((state_val_31912 === (2))){
var inst_31872 = (state_31911[(10)]);
var inst_31874 = cljs.core.count(inst_31872);
var inst_31875 = (inst_31874 > (0));
var state_31911__$1 = state_31911;
if(cljs.core.truth_(inst_31875)){
var statearr_31948_33711 = state_31911__$1;
(statearr_31948_33711[(1)] = (4));

} else {
var statearr_31951_33712 = state_31911__$1;
(statearr_31951_33712[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (11))){
var inst_31872 = (state_31911[(10)]);
var inst_31899 = (state_31911[(2)]);
var tmp31931 = inst_31872;
var inst_31872__$1 = tmp31931;
var state_31911__$1 = (function (){var statearr_31957 = state_31911;
(statearr_31957[(11)] = inst_31899);

(statearr_31957[(10)] = inst_31872__$1);

return statearr_31957;
})();
var statearr_31962_33716 = state_31911__$1;
(statearr_31962_33716[(2)] = null);

(statearr_31962_33716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (9))){
var inst_31882 = (state_31911[(8)]);
var state_31911__$1 = state_31911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31911__$1,(11),out,inst_31882);
} else {
if((state_val_31912 === (5))){
var inst_31905 = cljs.core.async.close_BANG_(out);
var state_31911__$1 = state_31911;
var statearr_31973_33721 = state_31911__$1;
(statearr_31973_33721[(2)] = inst_31905);

(statearr_31973_33721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (10))){
var inst_31903 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31976_33722 = state_31911__$1;
(statearr_31976_33722[(2)] = inst_31903);

(statearr_31976_33722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (8))){
var inst_31883 = (state_31911[(9)]);
var inst_31881 = (state_31911[(7)]);
var inst_31872 = (state_31911[(10)]);
var inst_31882 = (state_31911[(8)]);
var inst_31892 = (function (){var cs = inst_31872;
var vec__31877 = inst_31881;
var v = inst_31882;
var c = inst_31883;
return (function (p1__31846_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31846_SHARP_);
});
})();
var inst_31893 = cljs.core.filterv(inst_31892,inst_31872);
var inst_31872__$1 = inst_31893;
var state_31911__$1 = (function (){var statearr_31983 = state_31911;
(statearr_31983[(10)] = inst_31872__$1);

return statearr_31983;
})();
var statearr_31986_33727 = state_31911__$1;
(statearr_31986_33727[(2)] = null);

(statearr_31986_33727[(1)] = (2));


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
var cljs$core$async$state_machine__28601__auto__ = null;
var cljs$core$async$state_machine__28601__auto____0 = (function (){
var statearr_31989 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31989[(0)] = cljs$core$async$state_machine__28601__auto__);

(statearr_31989[(1)] = (1));

return statearr_31989;
});
var cljs$core$async$state_machine__28601__auto____1 = (function (state_31911){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_31911);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e31992){var ex__28604__auto__ = e31992;
var statearr_31995_33732 = state_31911;
(statearr_31995_33732[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_31911[(4)]))){
var statearr_31997_33733 = state_31911;
(statearr_31997_33733[(1)] = cljs.core.first((state_31911[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33734 = state_31911;
state_31911 = G__33734;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$state_machine__28601__auto__ = function(state_31911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28601__auto____1.call(this,state_31911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28601__auto____0;
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28601__auto____1;
return cljs$core$async$state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_32002 = f__29322__auto__();
(statearr_32002[(6)] = c__29321__auto___33699);

return statearr_32002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
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
var G__32015 = arguments.length;
switch (G__32015) {
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
var c__29321__auto___33740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_32058){
var state_val_32059 = (state_32058[(1)]);
if((state_val_32059 === (7))){
var inst_32037 = (state_32058[(7)]);
var inst_32037__$1 = (state_32058[(2)]);
var inst_32041 = (inst_32037__$1 == null);
var inst_32042 = cljs.core.not(inst_32041);
var state_32058__$1 = (function (){var statearr_32073 = state_32058;
(statearr_32073[(7)] = inst_32037__$1);

return statearr_32073;
})();
if(inst_32042){
var statearr_32074_33744 = state_32058__$1;
(statearr_32074_33744[(1)] = (8));

} else {
var statearr_32075_33745 = state_32058__$1;
(statearr_32075_33745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32059 === (1))){
var inst_32032 = (0);
var state_32058__$1 = (function (){var statearr_32078 = state_32058;
(statearr_32078[(8)] = inst_32032);

return statearr_32078;
})();
var statearr_32079_33746 = state_32058__$1;
(statearr_32079_33746[(2)] = null);

(statearr_32079_33746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32059 === (4))){
var state_32058__$1 = state_32058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32058__$1,(7),ch);
} else {
if((state_val_32059 === (6))){
var inst_32053 = (state_32058[(2)]);
var state_32058__$1 = state_32058;
var statearr_32082_33754 = state_32058__$1;
(statearr_32082_33754[(2)] = inst_32053);

(statearr_32082_33754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32059 === (3))){
var inst_32055 = (state_32058[(2)]);
var inst_32056 = cljs.core.async.close_BANG_(out);
var state_32058__$1 = (function (){var statearr_32083 = state_32058;
(statearr_32083[(9)] = inst_32055);

return statearr_32083;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32058__$1,inst_32056);
} else {
if((state_val_32059 === (2))){
var inst_32032 = (state_32058[(8)]);
var inst_32034 = (inst_32032 < n);
var state_32058__$1 = state_32058;
if(cljs.core.truth_(inst_32034)){
var statearr_32085_33757 = state_32058__$1;
(statearr_32085_33757[(1)] = (4));

} else {
var statearr_32086_33759 = state_32058__$1;
(statearr_32086_33759[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32059 === (11))){
var inst_32032 = (state_32058[(8)]);
var inst_32045 = (state_32058[(2)]);
var inst_32046 = (inst_32032 + (1));
var inst_32032__$1 = inst_32046;
var state_32058__$1 = (function (){var statearr_32087 = state_32058;
(statearr_32087[(8)] = inst_32032__$1);

(statearr_32087[(10)] = inst_32045);

return statearr_32087;
})();
var statearr_32088_33764 = state_32058__$1;
(statearr_32088_33764[(2)] = null);

(statearr_32088_33764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32059 === (9))){
var state_32058__$1 = state_32058;
var statearr_32089_33767 = state_32058__$1;
(statearr_32089_33767[(2)] = null);

(statearr_32089_33767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32059 === (5))){
var state_32058__$1 = state_32058;
var statearr_32092_33768 = state_32058__$1;
(statearr_32092_33768[(2)] = null);

(statearr_32092_33768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32059 === (10))){
var inst_32050 = (state_32058[(2)]);
var state_32058__$1 = state_32058;
var statearr_32095_33773 = state_32058__$1;
(statearr_32095_33773[(2)] = inst_32050);

(statearr_32095_33773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32059 === (8))){
var inst_32037 = (state_32058[(7)]);
var state_32058__$1 = state_32058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32058__$1,(11),out,inst_32037);
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
var cljs$core$async$state_machine__28601__auto__ = null;
var cljs$core$async$state_machine__28601__auto____0 = (function (){
var statearr_32096 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32096[(0)] = cljs$core$async$state_machine__28601__auto__);

(statearr_32096[(1)] = (1));

return statearr_32096;
});
var cljs$core$async$state_machine__28601__auto____1 = (function (state_32058){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_32058);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e32097){var ex__28604__auto__ = e32097;
var statearr_32098_33778 = state_32058;
(statearr_32098_33778[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_32058[(4)]))){
var statearr_32099_33779 = state_32058;
(statearr_32099_33779[(1)] = cljs.core.first((state_32058[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33782 = state_32058;
state_32058 = G__33782;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$state_machine__28601__auto__ = function(state_32058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28601__auto____1.call(this,state_32058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28601__auto____0;
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28601__auto____1;
return cljs$core$async$state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_32104 = f__29322__auto__();
(statearr_32104[(6)] = c__29321__auto___33740);

return statearr_32104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32110 = (function (f,ch,meta32111){
this.f = f;
this.ch = ch;
this.meta32111 = meta32111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32112,meta32111__$1){
var self__ = this;
var _32112__$1 = this;
return (new cljs.core.async.t_cljs$core$async32110(self__.f,self__.ch,meta32111__$1));
}));

(cljs.core.async.t_cljs$core$async32110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32112){
var self__ = this;
var _32112__$1 = this;
return self__.meta32111;
}));

(cljs.core.async.t_cljs$core$async32110.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32110.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32110.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32110.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32110.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32119 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32119 = (function (f,ch,meta32111,_,fn1,meta32120){
this.f = f;
this.ch = ch;
this.meta32111 = meta32111;
this._ = _;
this.fn1 = fn1;
this.meta32120 = meta32120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32121,meta32120__$1){
var self__ = this;
var _32121__$1 = this;
return (new cljs.core.async.t_cljs$core$async32119(self__.f,self__.ch,self__.meta32111,self__._,self__.fn1,meta32120__$1));
}));

(cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32121){
var self__ = this;
var _32121__$1 = this;
return self__.meta32120;
}));

(cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32109_SHARP_){
var G__32131 = (((p1__32109_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32109_SHARP_) : self__.f.call(null,p1__32109_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32131) : f1.call(null,G__32131));
});
}));

(cljs.core.async.t_cljs$core$async32119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32111","meta32111",2017421518,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32110","cljs.core.async/t_cljs$core$async32110",57692150,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32120","meta32120",1638625787,null)], null);
}));

(cljs.core.async.t_cljs$core$async32119.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32119");

(cljs.core.async.t_cljs$core$async32119.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32119");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32119.
 */
cljs.core.async.__GT_t_cljs$core$async32119 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32119(f__$1,ch__$1,meta32111__$1,___$2,fn1__$1,meta32120){
return (new cljs.core.async.t_cljs$core$async32119(f__$1,ch__$1,meta32111__$1,___$2,fn1__$1,meta32120));
});

}

return (new cljs.core.async.t_cljs$core$async32119(self__.f,self__.ch,self__.meta32111,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32144 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32144) : self__.f.call(null,G__32144));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32110.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32110.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32111","meta32111",2017421518,null)], null);
}));

(cljs.core.async.t_cljs$core$async32110.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32110");

(cljs.core.async.t_cljs$core$async32110.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32110");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32110.
 */
cljs.core.async.__GT_t_cljs$core$async32110 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32110(f__$1,ch__$1,meta32111){
return (new cljs.core.async.t_cljs$core$async32110(f__$1,ch__$1,meta32111));
});

}

return (new cljs.core.async.t_cljs$core$async32110(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32153 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32153 = (function (f,ch,meta32154){
this.f = f;
this.ch = ch;
this.meta32154 = meta32154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32155,meta32154__$1){
var self__ = this;
var _32155__$1 = this;
return (new cljs.core.async.t_cljs$core$async32153(self__.f,self__.ch,meta32154__$1));
}));

(cljs.core.async.t_cljs$core$async32153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32155){
var self__ = this;
var _32155__$1 = this;
return self__.meta32154;
}));

(cljs.core.async.t_cljs$core$async32153.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32153.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32153.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32153.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32153.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32153.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32154","meta32154",1327094487,null)], null);
}));

(cljs.core.async.t_cljs$core$async32153.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32153");

(cljs.core.async.t_cljs$core$async32153.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32153");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32153.
 */
cljs.core.async.__GT_t_cljs$core$async32153 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32153(f__$1,ch__$1,meta32154){
return (new cljs.core.async.t_cljs$core$async32153(f__$1,ch__$1,meta32154));
});

}

return (new cljs.core.async.t_cljs$core$async32153(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32203 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32203 = (function (p,ch,meta32204){
this.p = p;
this.ch = ch;
this.meta32204 = meta32204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32205,meta32204__$1){
var self__ = this;
var _32205__$1 = this;
return (new cljs.core.async.t_cljs$core$async32203(self__.p,self__.ch,meta32204__$1));
}));

(cljs.core.async.t_cljs$core$async32203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32205){
var self__ = this;
var _32205__$1 = this;
return self__.meta32204;
}));

(cljs.core.async.t_cljs$core$async32203.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32203.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32203.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32203.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32203.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32203.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32203.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32204","meta32204",1935928839,null)], null);
}));

(cljs.core.async.t_cljs$core$async32203.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32203");

(cljs.core.async.t_cljs$core$async32203.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32203");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32203.
 */
cljs.core.async.__GT_t_cljs$core$async32203 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32203(p__$1,ch__$1,meta32204){
return (new cljs.core.async.t_cljs$core$async32203(p__$1,ch__$1,meta32204));
});

}

return (new cljs.core.async.t_cljs$core$async32203(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32241 = arguments.length;
switch (G__32241) {
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
var c__29321__auto___33843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_32303){
var state_val_32304 = (state_32303[(1)]);
if((state_val_32304 === (7))){
var inst_32299 = (state_32303[(2)]);
var state_32303__$1 = state_32303;
var statearr_32313_33848 = state_32303__$1;
(statearr_32313_33848[(2)] = inst_32299);

(statearr_32313_33848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (1))){
var state_32303__$1 = state_32303;
var statearr_32316_33849 = state_32303__$1;
(statearr_32316_33849[(2)] = null);

(statearr_32316_33849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (4))){
var inst_32285 = (state_32303[(7)]);
var inst_32285__$1 = (state_32303[(2)]);
var inst_32286 = (inst_32285__$1 == null);
var state_32303__$1 = (function (){var statearr_32317 = state_32303;
(statearr_32317[(7)] = inst_32285__$1);

return statearr_32317;
})();
if(cljs.core.truth_(inst_32286)){
var statearr_32318_33850 = state_32303__$1;
(statearr_32318_33850[(1)] = (5));

} else {
var statearr_32319_33851 = state_32303__$1;
(statearr_32319_33851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (6))){
var inst_32285 = (state_32303[(7)]);
var inst_32290 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32285) : p.call(null,inst_32285));
var state_32303__$1 = state_32303;
if(cljs.core.truth_(inst_32290)){
var statearr_32325_33852 = state_32303__$1;
(statearr_32325_33852[(1)] = (8));

} else {
var statearr_32329_33853 = state_32303__$1;
(statearr_32329_33853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (3))){
var inst_32301 = (state_32303[(2)]);
var state_32303__$1 = state_32303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32303__$1,inst_32301);
} else {
if((state_val_32304 === (2))){
var state_32303__$1 = state_32303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32303__$1,(4),ch);
} else {
if((state_val_32304 === (11))){
var inst_32293 = (state_32303[(2)]);
var state_32303__$1 = state_32303;
var statearr_32344_33856 = state_32303__$1;
(statearr_32344_33856[(2)] = inst_32293);

(statearr_32344_33856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (9))){
var state_32303__$1 = state_32303;
var statearr_32349_33857 = state_32303__$1;
(statearr_32349_33857[(2)] = null);

(statearr_32349_33857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (5))){
var inst_32288 = cljs.core.async.close_BANG_(out);
var state_32303__$1 = state_32303;
var statearr_32360_33858 = state_32303__$1;
(statearr_32360_33858[(2)] = inst_32288);

(statearr_32360_33858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (10))){
var inst_32296 = (state_32303[(2)]);
var state_32303__$1 = (function (){var statearr_32363 = state_32303;
(statearr_32363[(8)] = inst_32296);

return statearr_32363;
})();
var statearr_32369_33863 = state_32303__$1;
(statearr_32369_33863[(2)] = null);

(statearr_32369_33863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (8))){
var inst_32285 = (state_32303[(7)]);
var state_32303__$1 = state_32303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32303__$1,(11),out,inst_32285);
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
var cljs$core$async$state_machine__28601__auto__ = null;
var cljs$core$async$state_machine__28601__auto____0 = (function (){
var statearr_32377 = [null,null,null,null,null,null,null,null,null];
(statearr_32377[(0)] = cljs$core$async$state_machine__28601__auto__);

(statearr_32377[(1)] = (1));

return statearr_32377;
});
var cljs$core$async$state_machine__28601__auto____1 = (function (state_32303){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_32303);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e32378){var ex__28604__auto__ = e32378;
var statearr_32383_33866 = state_32303;
(statearr_32383_33866[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_32303[(4)]))){
var statearr_32384_33868 = state_32303;
(statearr_32384_33868[(1)] = cljs.core.first((state_32303[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33871 = state_32303;
state_32303 = G__33871;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$state_machine__28601__auto__ = function(state_32303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28601__auto____1.call(this,state_32303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28601__auto____0;
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28601__auto____1;
return cljs$core$async$state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_32400 = f__29322__auto__();
(statearr_32400[(6)] = c__29321__auto___33843);

return statearr_32400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32403 = arguments.length;
switch (G__32403) {
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
var c__29321__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_32485){
var state_val_32486 = (state_32485[(1)]);
if((state_val_32486 === (7))){
var inst_32481 = (state_32485[(2)]);
var state_32485__$1 = state_32485;
var statearr_32491_33879 = state_32485__$1;
(statearr_32491_33879[(2)] = inst_32481);

(statearr_32491_33879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (20))){
var inst_32447 = (state_32485[(7)]);
var inst_32461 = (state_32485[(2)]);
var inst_32462 = cljs.core.next(inst_32447);
var inst_32432 = inst_32462;
var inst_32433 = null;
var inst_32434 = (0);
var inst_32435 = (0);
var state_32485__$1 = (function (){var statearr_32493 = state_32485;
(statearr_32493[(8)] = inst_32434);

(statearr_32493[(9)] = inst_32433);

(statearr_32493[(10)] = inst_32432);

(statearr_32493[(11)] = inst_32461);

(statearr_32493[(12)] = inst_32435);

return statearr_32493;
})();
var statearr_32495_33880 = state_32485__$1;
(statearr_32495_33880[(2)] = null);

(statearr_32495_33880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (1))){
var state_32485__$1 = state_32485;
var statearr_32497_33881 = state_32485__$1;
(statearr_32497_33881[(2)] = null);

(statearr_32497_33881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (4))){
var inst_32421 = (state_32485[(13)]);
var inst_32421__$1 = (state_32485[(2)]);
var inst_32422 = (inst_32421__$1 == null);
var state_32485__$1 = (function (){var statearr_32498 = state_32485;
(statearr_32498[(13)] = inst_32421__$1);

return statearr_32498;
})();
if(cljs.core.truth_(inst_32422)){
var statearr_32499_33882 = state_32485__$1;
(statearr_32499_33882[(1)] = (5));

} else {
var statearr_32500_33883 = state_32485__$1;
(statearr_32500_33883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (15))){
var state_32485__$1 = state_32485;
var statearr_32504_33885 = state_32485__$1;
(statearr_32504_33885[(2)] = null);

(statearr_32504_33885[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (21))){
var state_32485__$1 = state_32485;
var statearr_32505_33887 = state_32485__$1;
(statearr_32505_33887[(2)] = null);

(statearr_32505_33887[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (13))){
var inst_32434 = (state_32485[(8)]);
var inst_32433 = (state_32485[(9)]);
var inst_32432 = (state_32485[(10)]);
var inst_32435 = (state_32485[(12)]);
var inst_32443 = (state_32485[(2)]);
var inst_32444 = (inst_32435 + (1));
var tmp32501 = inst_32434;
var tmp32502 = inst_32433;
var tmp32503 = inst_32432;
var inst_32432__$1 = tmp32503;
var inst_32433__$1 = tmp32502;
var inst_32434__$1 = tmp32501;
var inst_32435__$1 = inst_32444;
var state_32485__$1 = (function (){var statearr_32506 = state_32485;
(statearr_32506[(8)] = inst_32434__$1);

(statearr_32506[(9)] = inst_32433__$1);

(statearr_32506[(10)] = inst_32432__$1);

(statearr_32506[(14)] = inst_32443);

(statearr_32506[(12)] = inst_32435__$1);

return statearr_32506;
})();
var statearr_32509_33893 = state_32485__$1;
(statearr_32509_33893[(2)] = null);

(statearr_32509_33893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (22))){
var state_32485__$1 = state_32485;
var statearr_32513_33894 = state_32485__$1;
(statearr_32513_33894[(2)] = null);

(statearr_32513_33894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (6))){
var inst_32421 = (state_32485[(13)]);
var inst_32430 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32421) : f.call(null,inst_32421));
var inst_32431 = cljs.core.seq(inst_32430);
var inst_32432 = inst_32431;
var inst_32433 = null;
var inst_32434 = (0);
var inst_32435 = (0);
var state_32485__$1 = (function (){var statearr_32516 = state_32485;
(statearr_32516[(8)] = inst_32434);

(statearr_32516[(9)] = inst_32433);

(statearr_32516[(10)] = inst_32432);

(statearr_32516[(12)] = inst_32435);

return statearr_32516;
})();
var statearr_32517_33899 = state_32485__$1;
(statearr_32517_33899[(2)] = null);

(statearr_32517_33899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (17))){
var inst_32447 = (state_32485[(7)]);
var inst_32454 = cljs.core.chunk_first(inst_32447);
var inst_32455 = cljs.core.chunk_rest(inst_32447);
var inst_32456 = cljs.core.count(inst_32454);
var inst_32432 = inst_32455;
var inst_32433 = inst_32454;
var inst_32434 = inst_32456;
var inst_32435 = (0);
var state_32485__$1 = (function (){var statearr_32521 = state_32485;
(statearr_32521[(8)] = inst_32434);

(statearr_32521[(9)] = inst_32433);

(statearr_32521[(10)] = inst_32432);

(statearr_32521[(12)] = inst_32435);

return statearr_32521;
})();
var statearr_32523_33900 = state_32485__$1;
(statearr_32523_33900[(2)] = null);

(statearr_32523_33900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (3))){
var inst_32483 = (state_32485[(2)]);
var state_32485__$1 = state_32485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32485__$1,inst_32483);
} else {
if((state_val_32486 === (12))){
var inst_32470 = (state_32485[(2)]);
var state_32485__$1 = state_32485;
var statearr_32538_33901 = state_32485__$1;
(statearr_32538_33901[(2)] = inst_32470);

(statearr_32538_33901[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (2))){
var state_32485__$1 = state_32485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32485__$1,(4),in$);
} else {
if((state_val_32486 === (23))){
var inst_32479 = (state_32485[(2)]);
var state_32485__$1 = state_32485;
var statearr_32555_33903 = state_32485__$1;
(statearr_32555_33903[(2)] = inst_32479);

(statearr_32555_33903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (19))){
var inst_32465 = (state_32485[(2)]);
var state_32485__$1 = state_32485;
var statearr_32557_33904 = state_32485__$1;
(statearr_32557_33904[(2)] = inst_32465);

(statearr_32557_33904[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (11))){
var inst_32432 = (state_32485[(10)]);
var inst_32447 = (state_32485[(7)]);
var inst_32447__$1 = cljs.core.seq(inst_32432);
var state_32485__$1 = (function (){var statearr_32559 = state_32485;
(statearr_32559[(7)] = inst_32447__$1);

return statearr_32559;
})();
if(inst_32447__$1){
var statearr_32560_33905 = state_32485__$1;
(statearr_32560_33905[(1)] = (14));

} else {
var statearr_32561_33906 = state_32485__$1;
(statearr_32561_33906[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (9))){
var inst_32472 = (state_32485[(2)]);
var inst_32473 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32485__$1 = (function (){var statearr_32563 = state_32485;
(statearr_32563[(15)] = inst_32472);

return statearr_32563;
})();
if(cljs.core.truth_(inst_32473)){
var statearr_32564_33907 = state_32485__$1;
(statearr_32564_33907[(1)] = (21));

} else {
var statearr_32566_33908 = state_32485__$1;
(statearr_32566_33908[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (5))){
var inst_32424 = cljs.core.async.close_BANG_(out);
var state_32485__$1 = state_32485;
var statearr_32567_33909 = state_32485__$1;
(statearr_32567_33909[(2)] = inst_32424);

(statearr_32567_33909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (14))){
var inst_32447 = (state_32485[(7)]);
var inst_32451 = cljs.core.chunked_seq_QMARK_(inst_32447);
var state_32485__$1 = state_32485;
if(inst_32451){
var statearr_32570_33910 = state_32485__$1;
(statearr_32570_33910[(1)] = (17));

} else {
var statearr_32571_33911 = state_32485__$1;
(statearr_32571_33911[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (16))){
var inst_32468 = (state_32485[(2)]);
var state_32485__$1 = state_32485;
var statearr_32574_33913 = state_32485__$1;
(statearr_32574_33913[(2)] = inst_32468);

(statearr_32574_33913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (10))){
var inst_32433 = (state_32485[(9)]);
var inst_32435 = (state_32485[(12)]);
var inst_32441 = cljs.core._nth(inst_32433,inst_32435);
var state_32485__$1 = state_32485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32485__$1,(13),out,inst_32441);
} else {
if((state_val_32486 === (18))){
var inst_32447 = (state_32485[(7)]);
var inst_32459 = cljs.core.first(inst_32447);
var state_32485__$1 = state_32485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32485__$1,(20),out,inst_32459);
} else {
if((state_val_32486 === (8))){
var inst_32434 = (state_32485[(8)]);
var inst_32435 = (state_32485[(12)]);
var inst_32438 = (inst_32435 < inst_32434);
var inst_32439 = inst_32438;
var state_32485__$1 = state_32485;
if(cljs.core.truth_(inst_32439)){
var statearr_32577_33918 = state_32485__$1;
(statearr_32577_33918[(1)] = (10));

} else {
var statearr_32579_33919 = state_32485__$1;
(statearr_32579_33919[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28601__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28601__auto____0 = (function (){
var statearr_32581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32581[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28601__auto__);

(statearr_32581[(1)] = (1));

return statearr_32581;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28601__auto____1 = (function (state_32485){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_32485);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e32582){var ex__28604__auto__ = e32582;
var statearr_32583_33920 = state_32485;
(statearr_32583_33920[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_32485[(4)]))){
var statearr_32584_33921 = state_32485;
(statearr_32584_33921[(1)] = cljs.core.first((state_32485[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33922 = state_32485;
state_32485 = G__33922;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28601__auto__ = function(state_32485){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28601__auto____1.call(this,state_32485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28601__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28601__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_32587 = f__29322__auto__();
(statearr_32587[(6)] = c__29321__auto__);

return statearr_32587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
}));

return c__29321__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32605 = arguments.length;
switch (G__32605) {
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
var G__32615 = arguments.length;
switch (G__32615) {
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
var G__32622 = arguments.length;
switch (G__32622) {
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
var c__29321__auto___33935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_32652){
var state_val_32653 = (state_32652[(1)]);
if((state_val_32653 === (7))){
var inst_32647 = (state_32652[(2)]);
var state_32652__$1 = state_32652;
var statearr_32654_33940 = state_32652__$1;
(statearr_32654_33940[(2)] = inst_32647);

(statearr_32654_33940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (1))){
var inst_32629 = null;
var state_32652__$1 = (function (){var statearr_32655 = state_32652;
(statearr_32655[(7)] = inst_32629);

return statearr_32655;
})();
var statearr_32656_33945 = state_32652__$1;
(statearr_32656_33945[(2)] = null);

(statearr_32656_33945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (4))){
var inst_32632 = (state_32652[(8)]);
var inst_32632__$1 = (state_32652[(2)]);
var inst_32633 = (inst_32632__$1 == null);
var inst_32634 = cljs.core.not(inst_32633);
var state_32652__$1 = (function (){var statearr_32657 = state_32652;
(statearr_32657[(8)] = inst_32632__$1);

return statearr_32657;
})();
if(inst_32634){
var statearr_32658_33950 = state_32652__$1;
(statearr_32658_33950[(1)] = (5));

} else {
var statearr_32659_33951 = state_32652__$1;
(statearr_32659_33951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (6))){
var state_32652__$1 = state_32652;
var statearr_32660_33952 = state_32652__$1;
(statearr_32660_33952[(2)] = null);

(statearr_32660_33952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (3))){
var inst_32649 = (state_32652[(2)]);
var inst_32650 = cljs.core.async.close_BANG_(out);
var state_32652__$1 = (function (){var statearr_32664 = state_32652;
(statearr_32664[(9)] = inst_32649);

return statearr_32664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32652__$1,inst_32650);
} else {
if((state_val_32653 === (2))){
var state_32652__$1 = state_32652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32652__$1,(4),ch);
} else {
if((state_val_32653 === (11))){
var inst_32632 = (state_32652[(8)]);
var inst_32641 = (state_32652[(2)]);
var inst_32629 = inst_32632;
var state_32652__$1 = (function (){var statearr_32665 = state_32652;
(statearr_32665[(10)] = inst_32641);

(statearr_32665[(7)] = inst_32629);

return statearr_32665;
})();
var statearr_32666_33953 = state_32652__$1;
(statearr_32666_33953[(2)] = null);

(statearr_32666_33953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (9))){
var inst_32632 = (state_32652[(8)]);
var state_32652__$1 = state_32652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32652__$1,(11),out,inst_32632);
} else {
if((state_val_32653 === (5))){
var inst_32632 = (state_32652[(8)]);
var inst_32629 = (state_32652[(7)]);
var inst_32636 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32632,inst_32629);
var state_32652__$1 = state_32652;
if(inst_32636){
var statearr_32668_33954 = state_32652__$1;
(statearr_32668_33954[(1)] = (8));

} else {
var statearr_32669_33955 = state_32652__$1;
(statearr_32669_33955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (10))){
var inst_32644 = (state_32652[(2)]);
var state_32652__$1 = state_32652;
var statearr_32670_33956 = state_32652__$1;
(statearr_32670_33956[(2)] = inst_32644);

(statearr_32670_33956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (8))){
var inst_32629 = (state_32652[(7)]);
var tmp32667 = inst_32629;
var inst_32629__$1 = tmp32667;
var state_32652__$1 = (function (){var statearr_32671 = state_32652;
(statearr_32671[(7)] = inst_32629__$1);

return statearr_32671;
})();
var statearr_32674_33957 = state_32652__$1;
(statearr_32674_33957[(2)] = null);

(statearr_32674_33957[(1)] = (2));


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
var cljs$core$async$state_machine__28601__auto__ = null;
var cljs$core$async$state_machine__28601__auto____0 = (function (){
var statearr_32682 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32682[(0)] = cljs$core$async$state_machine__28601__auto__);

(statearr_32682[(1)] = (1));

return statearr_32682;
});
var cljs$core$async$state_machine__28601__auto____1 = (function (state_32652){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_32652);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e32683){var ex__28604__auto__ = e32683;
var statearr_32684_33958 = state_32652;
(statearr_32684_33958[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_32652[(4)]))){
var statearr_32686_33959 = state_32652;
(statearr_32686_33959[(1)] = cljs.core.first((state_32652[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33960 = state_32652;
state_32652 = G__33960;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$state_machine__28601__auto__ = function(state_32652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28601__auto____1.call(this,state_32652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28601__auto____0;
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28601__auto____1;
return cljs$core$async$state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_32687 = f__29322__auto__();
(statearr_32687[(6)] = c__29321__auto___33935);

return statearr_32687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32691 = arguments.length;
switch (G__32691) {
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
var c__29321__auto___33969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_32745){
var state_val_32746 = (state_32745[(1)]);
if((state_val_32746 === (7))){
var inst_32738 = (state_32745[(2)]);
var state_32745__$1 = state_32745;
var statearr_32748_33970 = state_32745__$1;
(statearr_32748_33970[(2)] = inst_32738);

(statearr_32748_33970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (1))){
var inst_32697 = (new Array(n));
var inst_32698 = inst_32697;
var inst_32699 = (0);
var state_32745__$1 = (function (){var statearr_32749 = state_32745;
(statearr_32749[(7)] = inst_32699);

(statearr_32749[(8)] = inst_32698);

return statearr_32749;
})();
var statearr_32750_33971 = state_32745__$1;
(statearr_32750_33971[(2)] = null);

(statearr_32750_33971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (4))){
var inst_32707 = (state_32745[(9)]);
var inst_32707__$1 = (state_32745[(2)]);
var inst_32708 = (inst_32707__$1 == null);
var inst_32709 = cljs.core.not(inst_32708);
var state_32745__$1 = (function (){var statearr_32755 = state_32745;
(statearr_32755[(9)] = inst_32707__$1);

return statearr_32755;
})();
if(inst_32709){
var statearr_32760_33973 = state_32745__$1;
(statearr_32760_33973[(1)] = (5));

} else {
var statearr_32761_33974 = state_32745__$1;
(statearr_32761_33974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (15))){
var inst_32732 = (state_32745[(2)]);
var state_32745__$1 = state_32745;
var statearr_32765_33975 = state_32745__$1;
(statearr_32765_33975[(2)] = inst_32732);

(statearr_32765_33975[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (13))){
var state_32745__$1 = state_32745;
var statearr_32766_33979 = state_32745__$1;
(statearr_32766_33979[(2)] = null);

(statearr_32766_33979[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (6))){
var inst_32699 = (state_32745[(7)]);
var inst_32728 = (inst_32699 > (0));
var state_32745__$1 = state_32745;
if(cljs.core.truth_(inst_32728)){
var statearr_32767_33980 = state_32745__$1;
(statearr_32767_33980[(1)] = (12));

} else {
var statearr_32768_33981 = state_32745__$1;
(statearr_32768_33981[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (3))){
var inst_32741 = (state_32745[(2)]);
var state_32745__$1 = state_32745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32745__$1,inst_32741);
} else {
if((state_val_32746 === (12))){
var inst_32698 = (state_32745[(8)]);
var inst_32730 = cljs.core.vec(inst_32698);
var state_32745__$1 = state_32745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32745__$1,(15),out,inst_32730);
} else {
if((state_val_32746 === (2))){
var state_32745__$1 = state_32745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32745__$1,(4),ch);
} else {
if((state_val_32746 === (11))){
var inst_32722 = (state_32745[(2)]);
var inst_32723 = (new Array(n));
var inst_32698 = inst_32723;
var inst_32699 = (0);
var state_32745__$1 = (function (){var statearr_32777 = state_32745;
(statearr_32777[(10)] = inst_32722);

(statearr_32777[(7)] = inst_32699);

(statearr_32777[(8)] = inst_32698);

return statearr_32777;
})();
var statearr_32781_33982 = state_32745__$1;
(statearr_32781_33982[(2)] = null);

(statearr_32781_33982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (9))){
var inst_32698 = (state_32745[(8)]);
var inst_32720 = cljs.core.vec(inst_32698);
var state_32745__$1 = state_32745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32745__$1,(11),out,inst_32720);
} else {
if((state_val_32746 === (5))){
var inst_32707 = (state_32745[(9)]);
var inst_32715 = (state_32745[(11)]);
var inst_32699 = (state_32745[(7)]);
var inst_32698 = (state_32745[(8)]);
var inst_32711 = (inst_32698[inst_32699] = inst_32707);
var inst_32715__$1 = (inst_32699 + (1));
var inst_32716 = (inst_32715__$1 < n);
var state_32745__$1 = (function (){var statearr_32786 = state_32745;
(statearr_32786[(11)] = inst_32715__$1);

(statearr_32786[(12)] = inst_32711);

return statearr_32786;
})();
if(cljs.core.truth_(inst_32716)){
var statearr_32791_33986 = state_32745__$1;
(statearr_32791_33986[(1)] = (8));

} else {
var statearr_32792_33987 = state_32745__$1;
(statearr_32792_33987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (14))){
var inst_32735 = (state_32745[(2)]);
var inst_32736 = cljs.core.async.close_BANG_(out);
var state_32745__$1 = (function (){var statearr_32794 = state_32745;
(statearr_32794[(13)] = inst_32735);

return statearr_32794;
})();
var statearr_32795_33988 = state_32745__$1;
(statearr_32795_33988[(2)] = inst_32736);

(statearr_32795_33988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (10))){
var inst_32726 = (state_32745[(2)]);
var state_32745__$1 = state_32745;
var statearr_32796_33989 = state_32745__$1;
(statearr_32796_33989[(2)] = inst_32726);

(statearr_32796_33989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (8))){
var inst_32715 = (state_32745[(11)]);
var inst_32698 = (state_32745[(8)]);
var tmp32793 = inst_32698;
var inst_32698__$1 = tmp32793;
var inst_32699 = inst_32715;
var state_32745__$1 = (function (){var statearr_32799 = state_32745;
(statearr_32799[(7)] = inst_32699);

(statearr_32799[(8)] = inst_32698__$1);

return statearr_32799;
})();
var statearr_32800_33990 = state_32745__$1;
(statearr_32800_33990[(2)] = null);

(statearr_32800_33990[(1)] = (2));


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
var cljs$core$async$state_machine__28601__auto__ = null;
var cljs$core$async$state_machine__28601__auto____0 = (function (){
var statearr_32806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32806[(0)] = cljs$core$async$state_machine__28601__auto__);

(statearr_32806[(1)] = (1));

return statearr_32806;
});
var cljs$core$async$state_machine__28601__auto____1 = (function (state_32745){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_32745);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e32808){var ex__28604__auto__ = e32808;
var statearr_32809_33994 = state_32745;
(statearr_32809_33994[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_32745[(4)]))){
var statearr_32812_33995 = state_32745;
(statearr_32812_33995[(1)] = cljs.core.first((state_32745[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33996 = state_32745;
state_32745 = G__33996;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$state_machine__28601__auto__ = function(state_32745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28601__auto____1.call(this,state_32745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28601__auto____0;
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28601__auto____1;
return cljs$core$async$state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_32814 = f__29322__auto__();
(statearr_32814[(6)] = c__29321__auto___33969);

return statearr_32814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32825 = arguments.length;
switch (G__32825) {
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
var c__29321__auto___34002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_32878){
var state_val_32879 = (state_32878[(1)]);
if((state_val_32879 === (7))){
var inst_32872 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
var statearr_32881_34003 = state_32878__$1;
(statearr_32881_34003[(2)] = inst_32872);

(statearr_32881_34003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (1))){
var inst_32831 = [];
var inst_32832 = inst_32831;
var inst_32833 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32878__$1 = (function (){var statearr_32882 = state_32878;
(statearr_32882[(7)] = inst_32832);

(statearr_32882[(8)] = inst_32833);

return statearr_32882;
})();
var statearr_32883_34004 = state_32878__$1;
(statearr_32883_34004[(2)] = null);

(statearr_32883_34004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (4))){
var inst_32836 = (state_32878[(9)]);
var inst_32836__$1 = (state_32878[(2)]);
var inst_32837 = (inst_32836__$1 == null);
var inst_32838 = cljs.core.not(inst_32837);
var state_32878__$1 = (function (){var statearr_32884 = state_32878;
(statearr_32884[(9)] = inst_32836__$1);

return statearr_32884;
})();
if(inst_32838){
var statearr_32885_34005 = state_32878__$1;
(statearr_32885_34005[(1)] = (5));

} else {
var statearr_32887_34006 = state_32878__$1;
(statearr_32887_34006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (15))){
var inst_32832 = (state_32878[(7)]);
var inst_32864 = cljs.core.vec(inst_32832);
var state_32878__$1 = state_32878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32878__$1,(18),out,inst_32864);
} else {
if((state_val_32879 === (13))){
var inst_32859 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
var statearr_32888_34007 = state_32878__$1;
(statearr_32888_34007[(2)] = inst_32859);

(statearr_32888_34007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (6))){
var inst_32832 = (state_32878[(7)]);
var inst_32861 = inst_32832.length;
var inst_32862 = (inst_32861 > (0));
var state_32878__$1 = state_32878;
if(cljs.core.truth_(inst_32862)){
var statearr_32889_34011 = state_32878__$1;
(statearr_32889_34011[(1)] = (15));

} else {
var statearr_32890_34012 = state_32878__$1;
(statearr_32890_34012[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (17))){
var inst_32869 = (state_32878[(2)]);
var inst_32870 = cljs.core.async.close_BANG_(out);
var state_32878__$1 = (function (){var statearr_32891 = state_32878;
(statearr_32891[(10)] = inst_32869);

return statearr_32891;
})();
var statearr_32892_34013 = state_32878__$1;
(statearr_32892_34013[(2)] = inst_32870);

(statearr_32892_34013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (3))){
var inst_32874 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32878__$1,inst_32874);
} else {
if((state_val_32879 === (12))){
var inst_32832 = (state_32878[(7)]);
var inst_32852 = cljs.core.vec(inst_32832);
var state_32878__$1 = state_32878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32878__$1,(14),out,inst_32852);
} else {
if((state_val_32879 === (2))){
var state_32878__$1 = state_32878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32878__$1,(4),ch);
} else {
if((state_val_32879 === (11))){
var inst_32836 = (state_32878[(9)]);
var inst_32832 = (state_32878[(7)]);
var inst_32840 = (state_32878[(11)]);
var inst_32849 = inst_32832.push(inst_32836);
var tmp32893 = inst_32832;
var inst_32832__$1 = tmp32893;
var inst_32833 = inst_32840;
var state_32878__$1 = (function (){var statearr_32894 = state_32878;
(statearr_32894[(12)] = inst_32849);

(statearr_32894[(7)] = inst_32832__$1);

(statearr_32894[(8)] = inst_32833);

return statearr_32894;
})();
var statearr_32895_34014 = state_32878__$1;
(statearr_32895_34014[(2)] = null);

(statearr_32895_34014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (9))){
var inst_32833 = (state_32878[(8)]);
var inst_32845 = cljs.core.keyword_identical_QMARK_(inst_32833,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32878__$1 = state_32878;
var statearr_32896_34015 = state_32878__$1;
(statearr_32896_34015[(2)] = inst_32845);

(statearr_32896_34015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (5))){
var inst_32836 = (state_32878[(9)]);
var inst_32833 = (state_32878[(8)]);
var inst_32842 = (state_32878[(13)]);
var inst_32840 = (state_32878[(11)]);
var inst_32840__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32836) : f.call(null,inst_32836));
var inst_32842__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32840__$1,inst_32833);
var state_32878__$1 = (function (){var statearr_32903 = state_32878;
(statearr_32903[(13)] = inst_32842__$1);

(statearr_32903[(11)] = inst_32840__$1);

return statearr_32903;
})();
if(inst_32842__$1){
var statearr_32905_34016 = state_32878__$1;
(statearr_32905_34016[(1)] = (8));

} else {
var statearr_32906_34017 = state_32878__$1;
(statearr_32906_34017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (14))){
var inst_32836 = (state_32878[(9)]);
var inst_32840 = (state_32878[(11)]);
var inst_32854 = (state_32878[(2)]);
var inst_32855 = [];
var inst_32856 = inst_32855.push(inst_32836);
var inst_32832 = inst_32855;
var inst_32833 = inst_32840;
var state_32878__$1 = (function (){var statearr_32908 = state_32878;
(statearr_32908[(14)] = inst_32854);

(statearr_32908[(7)] = inst_32832);

(statearr_32908[(8)] = inst_32833);

(statearr_32908[(15)] = inst_32856);

return statearr_32908;
})();
var statearr_32909_34018 = state_32878__$1;
(statearr_32909_34018[(2)] = null);

(statearr_32909_34018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (16))){
var state_32878__$1 = state_32878;
var statearr_32910_34019 = state_32878__$1;
(statearr_32910_34019[(2)] = null);

(statearr_32910_34019[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (10))){
var inst_32847 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
if(cljs.core.truth_(inst_32847)){
var statearr_32911_34020 = state_32878__$1;
(statearr_32911_34020[(1)] = (11));

} else {
var statearr_32912_34021 = state_32878__$1;
(statearr_32912_34021[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (18))){
var inst_32866 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
var statearr_32913_34023 = state_32878__$1;
(statearr_32913_34023[(2)] = inst_32866);

(statearr_32913_34023[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (8))){
var inst_32842 = (state_32878[(13)]);
var state_32878__$1 = state_32878;
var statearr_32914_34024 = state_32878__$1;
(statearr_32914_34024[(2)] = inst_32842);

(statearr_32914_34024[(1)] = (10));


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
var cljs$core$async$state_machine__28601__auto__ = null;
var cljs$core$async$state_machine__28601__auto____0 = (function (){
var statearr_32920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32920[(0)] = cljs$core$async$state_machine__28601__auto__);

(statearr_32920[(1)] = (1));

return statearr_32920;
});
var cljs$core$async$state_machine__28601__auto____1 = (function (state_32878){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_32878);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e32931){var ex__28604__auto__ = e32931;
var statearr_32932_34026 = state_32878;
(statearr_32932_34026[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_32878[(4)]))){
var statearr_32933_34027 = state_32878;
(statearr_32933_34027[(1)] = cljs.core.first((state_32878[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34028 = state_32878;
state_32878 = G__34028;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
cljs$core$async$state_machine__28601__auto__ = function(state_32878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28601__auto____1.call(this,state_32878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28601__auto____0;
cljs$core$async$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28601__auto____1;
return cljs$core$async$state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_32938 = f__29322__auto__();
(statearr_32938[(6)] = c__29321__auto___34002);

return statearr_32938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
