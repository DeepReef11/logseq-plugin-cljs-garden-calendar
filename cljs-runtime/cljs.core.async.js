goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29063 = arguments.length;
switch (G__29063) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29068 = (function (f,blockable,meta29069){
this.f = f;
this.blockable = blockable;
this.meta29069 = meta29069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29070,meta29069__$1){
var self__ = this;
var _29070__$1 = this;
return (new cljs.core.async.t_cljs$core$async29068(self__.f,self__.blockable,meta29069__$1));
}));

(cljs.core.async.t_cljs$core$async29068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29070){
var self__ = this;
var _29070__$1 = this;
return self__.meta29069;
}));

(cljs.core.async.t_cljs$core$async29068.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29068.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29068.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29068.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29069","meta29069",-15890365,null)], null);
}));

(cljs.core.async.t_cljs$core$async29068.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29068");

(cljs.core.async.t_cljs$core$async29068.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29068");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29068.
 */
cljs.core.async.__GT_t_cljs$core$async29068 = (function cljs$core$async$__GT_t_cljs$core$async29068(f__$1,blockable__$1,meta29069){
return (new cljs.core.async.t_cljs$core$async29068(f__$1,blockable__$1,meta29069));
});

}

return (new cljs.core.async.t_cljs$core$async29068(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29089 = arguments.length;
switch (G__29089) {
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
var G__29098 = arguments.length;
switch (G__29098) {
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
var G__29120 = arguments.length;
switch (G__29120) {
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
var val_33088 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33088) : fn1.call(null,val_33088));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33088) : fn1.call(null,val_33088));
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
var G__29146 = arguments.length;
switch (G__29146) {
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
var n__4741__auto___33094 = n;
var x_33095 = (0);
while(true){
if((x_33095 < n__4741__auto___33094)){
(a[x_33095] = x_33095);

var G__33096 = (x_33095 + (1));
x_33095 = G__33096;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29167 = (function (flag,meta29168){
this.flag = flag;
this.meta29168 = meta29168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29169,meta29168__$1){
var self__ = this;
var _29169__$1 = this;
return (new cljs.core.async.t_cljs$core$async29167(self__.flag,meta29168__$1));
}));

(cljs.core.async.t_cljs$core$async29167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29169){
var self__ = this;
var _29169__$1 = this;
return self__.meta29168;
}));

(cljs.core.async.t_cljs$core$async29167.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29167.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29167.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29167.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29168","meta29168",1522069285,null)], null);
}));

(cljs.core.async.t_cljs$core$async29167.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29167");

(cljs.core.async.t_cljs$core$async29167.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29167");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29167.
 */
cljs.core.async.__GT_t_cljs$core$async29167 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29167(flag__$1,meta29168){
return (new cljs.core.async.t_cljs$core$async29167(flag__$1,meta29168));
});

}

return (new cljs.core.async.t_cljs$core$async29167(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29187 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29187 = (function (flag,cb,meta29188){
this.flag = flag;
this.cb = cb;
this.meta29188 = meta29188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29189,meta29188__$1){
var self__ = this;
var _29189__$1 = this;
return (new cljs.core.async.t_cljs$core$async29187(self__.flag,self__.cb,meta29188__$1));
}));

(cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29189){
var self__ = this;
var _29189__$1 = this;
return self__.meta29188;
}));

(cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29188","meta29188",-62090708,null)], null);
}));

(cljs.core.async.t_cljs$core$async29187.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29187");

(cljs.core.async.t_cljs$core$async29187.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29187");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29187.
 */
cljs.core.async.__GT_t_cljs$core$async29187 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29187(flag__$1,cb__$1,meta29188){
return (new cljs.core.async.t_cljs$core$async29187(flag__$1,cb__$1,meta29188));
});

}

return (new cljs.core.async.t_cljs$core$async29187(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29211_SHARP_){
var G__29220 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29211_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29220) : fret.call(null,G__29220));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29212_SHARP_){
var G__29222 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29212_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29222) : fret.call(null,G__29222));
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
var G__33122 = (i + (1));
i = G__33122;
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
var len__4864__auto___33133 = arguments.length;
var i__4865__auto___33134 = (0);
while(true){
if((i__4865__auto___33134 < len__4864__auto___33133)){
args__4870__auto__.push((arguments[i__4865__auto___33134]));

var G__33135 = (i__4865__auto___33134 + (1));
i__4865__auto___33134 = G__33135;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29247){
var map__29248 = p__29247;
var map__29248__$1 = cljs.core.__destructure_map(map__29248);
var opts = map__29248__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29233){
var G__29234 = cljs.core.first(seq29233);
var seq29233__$1 = cljs.core.next(seq29233);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29234,seq29233__$1);
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
var G__29281 = arguments.length;
switch (G__29281) {
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
var c__28967__auto___33144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_29379){
var state_val_29380 = (state_29379[(1)]);
if((state_val_29380 === (7))){
var inst_29357 = (state_29379[(2)]);
var state_29379__$1 = state_29379;
var statearr_29389_33145 = state_29379__$1;
(statearr_29389_33145[(2)] = inst_29357);

(statearr_29389_33145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (1))){
var state_29379__$1 = state_29379;
var statearr_29390_33146 = state_29379__$1;
(statearr_29390_33146[(2)] = null);

(statearr_29390_33146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (4))){
var inst_29333 = (state_29379[(7)]);
var inst_29333__$1 = (state_29379[(2)]);
var inst_29334 = (inst_29333__$1 == null);
var state_29379__$1 = (function (){var statearr_29393 = state_29379;
(statearr_29393[(7)] = inst_29333__$1);

return statearr_29393;
})();
if(cljs.core.truth_(inst_29334)){
var statearr_29395_33148 = state_29379__$1;
(statearr_29395_33148[(1)] = (5));

} else {
var statearr_29396_33149 = state_29379__$1;
(statearr_29396_33149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (13))){
var state_29379__$1 = state_29379;
var statearr_29400_33150 = state_29379__$1;
(statearr_29400_33150[(2)] = null);

(statearr_29400_33150[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (6))){
var inst_29333 = (state_29379[(7)]);
var state_29379__$1 = state_29379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29379__$1,(11),to,inst_29333);
} else {
if((state_val_29380 === (3))){
var inst_29359 = (state_29379[(2)]);
var state_29379__$1 = state_29379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29379__$1,inst_29359);
} else {
if((state_val_29380 === (12))){
var state_29379__$1 = state_29379;
var statearr_29405_33152 = state_29379__$1;
(statearr_29405_33152[(2)] = null);

(statearr_29405_33152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (2))){
var state_29379__$1 = state_29379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29379__$1,(4),from);
} else {
if((state_val_29380 === (11))){
var inst_29349 = (state_29379[(2)]);
var state_29379__$1 = state_29379;
if(cljs.core.truth_(inst_29349)){
var statearr_29415_33153 = state_29379__$1;
(statearr_29415_33153[(1)] = (12));

} else {
var statearr_29416_33154 = state_29379__$1;
(statearr_29416_33154[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (9))){
var state_29379__$1 = state_29379;
var statearr_29417_33157 = state_29379__$1;
(statearr_29417_33157[(2)] = null);

(statearr_29417_33157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (5))){
var state_29379__$1 = state_29379;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29418_33161 = state_29379__$1;
(statearr_29418_33161[(1)] = (8));

} else {
var statearr_29419_33162 = state_29379__$1;
(statearr_29419_33162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (14))){
var inst_29355 = (state_29379[(2)]);
var state_29379__$1 = state_29379;
var statearr_29421_33164 = state_29379__$1;
(statearr_29421_33164[(2)] = inst_29355);

(statearr_29421_33164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (10))){
var inst_29344 = (state_29379[(2)]);
var state_29379__$1 = state_29379;
var statearr_29427_33171 = state_29379__$1;
(statearr_29427_33171[(2)] = inst_29344);

(statearr_29427_33171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (8))){
var inst_29341 = cljs.core.async.close_BANG_(to);
var state_29379__$1 = state_29379;
var statearr_29442_33172 = state_29379__$1;
(statearr_29442_33172[(2)] = inst_29341);

(statearr_29442_33172[(1)] = (10));


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
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_29461 = [null,null,null,null,null,null,null,null];
(statearr_29461[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_29461[(1)] = (1));

return statearr_29461;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_29379){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_29379);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e29462){var ex__28353__auto__ = e29462;
var statearr_29463_33173 = state_29379;
(statearr_29463_33173[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_29379[(4)]))){
var statearr_29464_33174 = state_29379;
(statearr_29464_33174[(1)] = cljs.core.first((state_29379[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33176 = state_29379;
state_29379 = G__33176;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_29379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_29379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_29475 = f__28968__auto__();
(statearr_29475[(6)] = c__28967__auto___33144);

return statearr_29475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
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
var process = (function (p__29488){
var vec__29489 = p__29488;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29489,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29489,(1),null);
var job = vec__29489;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28967__auto___33181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_29499){
var state_val_29500 = (state_29499[(1)]);
if((state_val_29500 === (1))){
var state_29499__$1 = state_29499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29499__$1,(2),res,v);
} else {
if((state_val_29500 === (2))){
var inst_29496 = (state_29499[(2)]);
var inst_29497 = cljs.core.async.close_BANG_(res);
var state_29499__$1 = (function (){var statearr_29506 = state_29499;
(statearr_29506[(7)] = inst_29496);

return statearr_29506;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29499__$1,inst_29497);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0 = (function (){
var statearr_29516 = [null,null,null,null,null,null,null,null];
(statearr_29516[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__);

(statearr_29516[(1)] = (1));

return statearr_29516;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1 = (function (state_29499){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_29499);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e29517){var ex__28353__auto__ = e29517;
var statearr_29518_33188 = state_29499;
(statearr_29518_33188[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_29499[(4)]))){
var statearr_29520_33190 = state_29499;
(statearr_29520_33190[(1)] = cljs.core.first((state_29499[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33191 = state_29499;
state_29499 = G__33191;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = function(state_29499){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1.call(this,state_29499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_29522 = f__28968__auto__();
(statearr_29522[(6)] = c__28967__auto___33181);

return statearr_29522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29526){
var vec__29527 = p__29526;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29527,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29527,(1),null);
var job = vec__29527;
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
var n__4741__auto___33193 = n;
var __33194 = (0);
while(true){
if((__33194 < n__4741__auto___33193)){
var G__29531_33195 = type;
var G__29531_33196__$1 = (((G__29531_33195 instanceof cljs.core.Keyword))?G__29531_33195.fqn:null);
switch (G__29531_33196__$1) {
case "compute":
var c__28967__auto___33198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33194,c__28967__auto___33198,G__29531_33195,G__29531_33196__$1,n__4741__auto___33193,jobs,results,process,async){
return (function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = ((function (__33194,c__28967__auto___33198,G__29531_33195,G__29531_33196__$1,n__4741__auto___33193,jobs,results,process,async){
return (function (state_29544){
var state_val_29545 = (state_29544[(1)]);
if((state_val_29545 === (1))){
var state_29544__$1 = state_29544;
var statearr_29555_33199 = state_29544__$1;
(statearr_29555_33199[(2)] = null);

(statearr_29555_33199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (2))){
var state_29544__$1 = state_29544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29544__$1,(4),jobs);
} else {
if((state_val_29545 === (3))){
var inst_29542 = (state_29544[(2)]);
var state_29544__$1 = state_29544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29544__$1,inst_29542);
} else {
if((state_val_29545 === (4))){
var inst_29534 = (state_29544[(2)]);
var inst_29535 = process(inst_29534);
var state_29544__$1 = state_29544;
if(cljs.core.truth_(inst_29535)){
var statearr_29561_33207 = state_29544__$1;
(statearr_29561_33207[(1)] = (5));

} else {
var statearr_29562_33210 = state_29544__$1;
(statearr_29562_33210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (5))){
var state_29544__$1 = state_29544;
var statearr_29566_33217 = state_29544__$1;
(statearr_29566_33217[(2)] = null);

(statearr_29566_33217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (6))){
var state_29544__$1 = state_29544;
var statearr_29568_33218 = state_29544__$1;
(statearr_29568_33218[(2)] = null);

(statearr_29568_33218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (7))){
var inst_29540 = (state_29544[(2)]);
var state_29544__$1 = state_29544;
var statearr_29571_33219 = state_29544__$1;
(statearr_29571_33219[(2)] = inst_29540);

(statearr_29571_33219[(1)] = (3));


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
});})(__33194,c__28967__auto___33198,G__29531_33195,G__29531_33196__$1,n__4741__auto___33193,jobs,results,process,async))
;
return ((function (__33194,switch__28349__auto__,c__28967__auto___33198,G__29531_33195,G__29531_33196__$1,n__4741__auto___33193,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0 = (function (){
var statearr_29576 = [null,null,null,null,null,null,null];
(statearr_29576[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__);

(statearr_29576[(1)] = (1));

return statearr_29576;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1 = (function (state_29544){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_29544);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e29579){var ex__28353__auto__ = e29579;
var statearr_29580_33227 = state_29544;
(statearr_29580_33227[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_29544[(4)]))){
var statearr_29581_33229 = state_29544;
(statearr_29581_33229[(1)] = cljs.core.first((state_29544[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33235 = state_29544;
state_29544 = G__33235;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = function(state_29544){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1.call(this,state_29544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__;
})()
;})(__33194,switch__28349__auto__,c__28967__auto___33198,G__29531_33195,G__29531_33196__$1,n__4741__auto___33193,jobs,results,process,async))
})();
var state__28969__auto__ = (function (){var statearr_29583 = f__28968__auto__();
(statearr_29583[(6)] = c__28967__auto___33198);

return statearr_29583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
});})(__33194,c__28967__auto___33198,G__29531_33195,G__29531_33196__$1,n__4741__auto___33193,jobs,results,process,async))
);


break;
case "async":
var c__28967__auto___33239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33194,c__28967__auto___33239,G__29531_33195,G__29531_33196__$1,n__4741__auto___33193,jobs,results,process,async){
return (function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = ((function (__33194,c__28967__auto___33239,G__29531_33195,G__29531_33196__$1,n__4741__auto___33193,jobs,results,process,async){
return (function (state_29602){
var state_val_29603 = (state_29602[(1)]);
if((state_val_29603 === (1))){
var state_29602__$1 = state_29602;
var statearr_29605_33243 = state_29602__$1;
(statearr_29605_33243[(2)] = null);

(statearr_29605_33243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29603 === (2))){
var state_29602__$1 = state_29602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29602__$1,(4),jobs);
} else {
if((state_val_29603 === (3))){
var inst_29599 = (state_29602[(2)]);
var state_29602__$1 = state_29602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29602__$1,inst_29599);
} else {
if((state_val_29603 === (4))){
var inst_29590 = (state_29602[(2)]);
var inst_29591 = async(inst_29590);
var state_29602__$1 = state_29602;
if(cljs.core.truth_(inst_29591)){
var statearr_29613_33254 = state_29602__$1;
(statearr_29613_33254[(1)] = (5));

} else {
var statearr_29615_33255 = state_29602__$1;
(statearr_29615_33255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29603 === (5))){
var state_29602__$1 = state_29602;
var statearr_29616_33261 = state_29602__$1;
(statearr_29616_33261[(2)] = null);

(statearr_29616_33261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29603 === (6))){
var state_29602__$1 = state_29602;
var statearr_29618_33262 = state_29602__$1;
(statearr_29618_33262[(2)] = null);

(statearr_29618_33262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29603 === (7))){
var inst_29596 = (state_29602[(2)]);
var state_29602__$1 = state_29602;
var statearr_29622_33264 = state_29602__$1;
(statearr_29622_33264[(2)] = inst_29596);

(statearr_29622_33264[(1)] = (3));


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
});})(__33194,c__28967__auto___33239,G__29531_33195,G__29531_33196__$1,n__4741__auto___33193,jobs,results,process,async))
;
return ((function (__33194,switch__28349__auto__,c__28967__auto___33239,G__29531_33195,G__29531_33196__$1,n__4741__auto___33193,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0 = (function (){
var statearr_29623 = [null,null,null,null,null,null,null];
(statearr_29623[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__);

(statearr_29623[(1)] = (1));

return statearr_29623;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1 = (function (state_29602){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_29602);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e29624){var ex__28353__auto__ = e29624;
var statearr_29625_33265 = state_29602;
(statearr_29625_33265[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_29602[(4)]))){
var statearr_29631_33266 = state_29602;
(statearr_29631_33266[(1)] = cljs.core.first((state_29602[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33270 = state_29602;
state_29602 = G__33270;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = function(state_29602){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1.call(this,state_29602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__;
})()
;})(__33194,switch__28349__auto__,c__28967__auto___33239,G__29531_33195,G__29531_33196__$1,n__4741__auto___33193,jobs,results,process,async))
})();
var state__28969__auto__ = (function (){var statearr_29646 = f__28968__auto__();
(statearr_29646[(6)] = c__28967__auto___33239);

return statearr_29646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
});})(__33194,c__28967__auto___33239,G__29531_33195,G__29531_33196__$1,n__4741__auto___33193,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29531_33196__$1)].join('')));

}

var G__33271 = (__33194 + (1));
__33194 = G__33271;
continue;
} else {
}
break;
}

var c__28967__auto___33272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_29683){
var state_val_29684 = (state_29683[(1)]);
if((state_val_29684 === (7))){
var inst_29679 = (state_29683[(2)]);
var state_29683__$1 = state_29683;
var statearr_29701_33273 = state_29683__$1;
(statearr_29701_33273[(2)] = inst_29679);

(statearr_29701_33273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29684 === (1))){
var state_29683__$1 = state_29683;
var statearr_29703_33276 = state_29683__$1;
(statearr_29703_33276[(2)] = null);

(statearr_29703_33276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29684 === (4))){
var inst_29659 = (state_29683[(7)]);
var inst_29659__$1 = (state_29683[(2)]);
var inst_29660 = (inst_29659__$1 == null);
var state_29683__$1 = (function (){var statearr_29705 = state_29683;
(statearr_29705[(7)] = inst_29659__$1);

return statearr_29705;
})();
if(cljs.core.truth_(inst_29660)){
var statearr_29706_33278 = state_29683__$1;
(statearr_29706_33278[(1)] = (5));

} else {
var statearr_29707_33279 = state_29683__$1;
(statearr_29707_33279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29684 === (6))){
var inst_29664 = (state_29683[(8)]);
var inst_29659 = (state_29683[(7)]);
var inst_29664__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29666 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29668 = [inst_29659,inst_29664__$1];
var inst_29669 = (new cljs.core.PersistentVector(null,2,(5),inst_29666,inst_29668,null));
var state_29683__$1 = (function (){var statearr_29714 = state_29683;
(statearr_29714[(8)] = inst_29664__$1);

return statearr_29714;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29683__$1,(8),jobs,inst_29669);
} else {
if((state_val_29684 === (3))){
var inst_29681 = (state_29683[(2)]);
var state_29683__$1 = state_29683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29683__$1,inst_29681);
} else {
if((state_val_29684 === (2))){
var state_29683__$1 = state_29683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29683__$1,(4),from);
} else {
if((state_val_29684 === (9))){
var inst_29674 = (state_29683[(2)]);
var state_29683__$1 = (function (){var statearr_29732 = state_29683;
(statearr_29732[(9)] = inst_29674);

return statearr_29732;
})();
var statearr_29737_33282 = state_29683__$1;
(statearr_29737_33282[(2)] = null);

(statearr_29737_33282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29684 === (5))){
var inst_29662 = cljs.core.async.close_BANG_(jobs);
var state_29683__$1 = state_29683;
var statearr_29739_33284 = state_29683__$1;
(statearr_29739_33284[(2)] = inst_29662);

(statearr_29739_33284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29684 === (8))){
var inst_29664 = (state_29683[(8)]);
var inst_29672 = (state_29683[(2)]);
var state_29683__$1 = (function (){var statearr_29743 = state_29683;
(statearr_29743[(10)] = inst_29672);

return statearr_29743;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29683__$1,(9),results,inst_29664);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0 = (function (){
var statearr_29745 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29745[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__);

(statearr_29745[(1)] = (1));

return statearr_29745;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1 = (function (state_29683){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_29683);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e29753){var ex__28353__auto__ = e29753;
var statearr_29755_33285 = state_29683;
(statearr_29755_33285[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_29683[(4)]))){
var statearr_29764_33286 = state_29683;
(statearr_29764_33286[(1)] = cljs.core.first((state_29683[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33287 = state_29683;
state_29683 = G__33287;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = function(state_29683){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1.call(this,state_29683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_29781 = f__28968__auto__();
(statearr_29781[(6)] = c__28967__auto___33272);

return statearr_29781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
}));


var c__28967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_29859){
var state_val_29860 = (state_29859[(1)]);
if((state_val_29860 === (7))){
var inst_29855 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29866_33288 = state_29859__$1;
(statearr_29866_33288[(2)] = inst_29855);

(statearr_29866_33288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (20))){
var state_29859__$1 = state_29859;
var statearr_29868_33290 = state_29859__$1;
(statearr_29868_33290[(2)] = null);

(statearr_29868_33290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (1))){
var state_29859__$1 = state_29859;
var statearr_29869_33291 = state_29859__$1;
(statearr_29869_33291[(2)] = null);

(statearr_29869_33291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (4))){
var inst_29791 = (state_29859[(7)]);
var inst_29791__$1 = (state_29859[(2)]);
var inst_29797 = (inst_29791__$1 == null);
var state_29859__$1 = (function (){var statearr_29875 = state_29859;
(statearr_29875[(7)] = inst_29791__$1);

return statearr_29875;
})();
if(cljs.core.truth_(inst_29797)){
var statearr_29876_33292 = state_29859__$1;
(statearr_29876_33292[(1)] = (5));

} else {
var statearr_29883_33293 = state_29859__$1;
(statearr_29883_33293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (15))){
var inst_29825 = (state_29859[(8)]);
var state_29859__$1 = state_29859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29859__$1,(18),to,inst_29825);
} else {
if((state_val_29860 === (21))){
var inst_29850 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29902_33294 = state_29859__$1;
(statearr_29902_33294[(2)] = inst_29850);

(statearr_29902_33294[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (13))){
var inst_29852 = (state_29859[(2)]);
var state_29859__$1 = (function (){var statearr_29921 = state_29859;
(statearr_29921[(9)] = inst_29852);

return statearr_29921;
})();
var statearr_29923_33295 = state_29859__$1;
(statearr_29923_33295[(2)] = null);

(statearr_29923_33295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (6))){
var inst_29791 = (state_29859[(7)]);
var state_29859__$1 = state_29859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29859__$1,(11),inst_29791);
} else {
if((state_val_29860 === (17))){
var inst_29845 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
if(cljs.core.truth_(inst_29845)){
var statearr_29927_33296 = state_29859__$1;
(statearr_29927_33296[(1)] = (19));

} else {
var statearr_29933_33297 = state_29859__$1;
(statearr_29933_33297[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (3))){
var inst_29857 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29859__$1,inst_29857);
} else {
if((state_val_29860 === (12))){
var inst_29815 = (state_29859[(10)]);
var state_29859__$1 = state_29859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29859__$1,(14),inst_29815);
} else {
if((state_val_29860 === (2))){
var state_29859__$1 = state_29859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29859__$1,(4),results);
} else {
if((state_val_29860 === (19))){
var state_29859__$1 = state_29859;
var statearr_29958_33298 = state_29859__$1;
(statearr_29958_33298[(2)] = null);

(statearr_29958_33298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (11))){
var inst_29815 = (state_29859[(2)]);
var state_29859__$1 = (function (){var statearr_29960 = state_29859;
(statearr_29960[(10)] = inst_29815);

return statearr_29960;
})();
var statearr_29961_33303 = state_29859__$1;
(statearr_29961_33303[(2)] = null);

(statearr_29961_33303[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (9))){
var state_29859__$1 = state_29859;
var statearr_29965_33304 = state_29859__$1;
(statearr_29965_33304[(2)] = null);

(statearr_29965_33304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (5))){
var state_29859__$1 = state_29859;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29966_33305 = state_29859__$1;
(statearr_29966_33305[(1)] = (8));

} else {
var statearr_29968_33306 = state_29859__$1;
(statearr_29968_33306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (14))){
var inst_29833 = (state_29859[(11)]);
var inst_29825 = (state_29859[(8)]);
var inst_29825__$1 = (state_29859[(2)]);
var inst_29832 = (inst_29825__$1 == null);
var inst_29833__$1 = cljs.core.not(inst_29832);
var state_29859__$1 = (function (){var statearr_29971 = state_29859;
(statearr_29971[(11)] = inst_29833__$1);

(statearr_29971[(8)] = inst_29825__$1);

return statearr_29971;
})();
if(inst_29833__$1){
var statearr_29972_33308 = state_29859__$1;
(statearr_29972_33308[(1)] = (15));

} else {
var statearr_29973_33309 = state_29859__$1;
(statearr_29973_33309[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (16))){
var inst_29833 = (state_29859[(11)]);
var state_29859__$1 = state_29859;
var statearr_29974_33310 = state_29859__$1;
(statearr_29974_33310[(2)] = inst_29833);

(statearr_29974_33310[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (10))){
var inst_29806 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29978_33311 = state_29859__$1;
(statearr_29978_33311[(2)] = inst_29806);

(statearr_29978_33311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (18))){
var inst_29842 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29980_33312 = state_29859__$1;
(statearr_29980_33312[(2)] = inst_29842);

(statearr_29980_33312[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (8))){
var inst_29802 = cljs.core.async.close_BANG_(to);
var state_29859__$1 = state_29859;
var statearr_29983_33313 = state_29859__$1;
(statearr_29983_33313[(2)] = inst_29802);

(statearr_29983_33313[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0 = (function (){
var statearr_29986 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29986[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__);

(statearr_29986[(1)] = (1));

return statearr_29986;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1 = (function (state_29859){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_29859);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e29987){var ex__28353__auto__ = e29987;
var statearr_29988_33317 = state_29859;
(statearr_29988_33317[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_29859[(4)]))){
var statearr_29991_33318 = state_29859;
(statearr_29991_33318[(1)] = cljs.core.first((state_29859[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33319 = state_29859;
state_29859 = G__33319;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = function(state_29859){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1.call(this,state_29859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_29993 = f__28968__auto__();
(statearr_29993[(6)] = c__28967__auto__);

return statearr_29993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
}));

return c__28967__auto__;
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
var G__30001 = arguments.length;
switch (G__30001) {
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
var G__30017 = arguments.length;
switch (G__30017) {
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
var G__30034 = arguments.length;
switch (G__30034) {
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
var c__28967__auto___33328 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_30066){
var state_val_30067 = (state_30066[(1)]);
if((state_val_30067 === (7))){
var inst_30062 = (state_30066[(2)]);
var state_30066__$1 = state_30066;
var statearr_30069_33329 = state_30066__$1;
(statearr_30069_33329[(2)] = inst_30062);

(statearr_30069_33329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30067 === (1))){
var state_30066__$1 = state_30066;
var statearr_30070_33330 = state_30066__$1;
(statearr_30070_33330[(2)] = null);

(statearr_30070_33330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30067 === (4))){
var inst_30039 = (state_30066[(7)]);
var inst_30039__$1 = (state_30066[(2)]);
var inst_30042 = (inst_30039__$1 == null);
var state_30066__$1 = (function (){var statearr_30072 = state_30066;
(statearr_30072[(7)] = inst_30039__$1);

return statearr_30072;
})();
if(cljs.core.truth_(inst_30042)){
var statearr_30074_33331 = state_30066__$1;
(statearr_30074_33331[(1)] = (5));

} else {
var statearr_30078_33332 = state_30066__$1;
(statearr_30078_33332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30067 === (13))){
var state_30066__$1 = state_30066;
var statearr_30079_33333 = state_30066__$1;
(statearr_30079_33333[(2)] = null);

(statearr_30079_33333[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30067 === (6))){
var inst_30039 = (state_30066[(7)]);
var inst_30049 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30039) : p.call(null,inst_30039));
var state_30066__$1 = state_30066;
if(cljs.core.truth_(inst_30049)){
var statearr_30082_33335 = state_30066__$1;
(statearr_30082_33335[(1)] = (9));

} else {
var statearr_30086_33336 = state_30066__$1;
(statearr_30086_33336[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30067 === (3))){
var inst_30064 = (state_30066[(2)]);
var state_30066__$1 = state_30066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30066__$1,inst_30064);
} else {
if((state_val_30067 === (12))){
var state_30066__$1 = state_30066;
var statearr_30091_33338 = state_30066__$1;
(statearr_30091_33338[(2)] = null);

(statearr_30091_33338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30067 === (2))){
var state_30066__$1 = state_30066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30066__$1,(4),ch);
} else {
if((state_val_30067 === (11))){
var inst_30039 = (state_30066[(7)]);
var inst_30053 = (state_30066[(2)]);
var state_30066__$1 = state_30066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30066__$1,(8),inst_30053,inst_30039);
} else {
if((state_val_30067 === (9))){
var state_30066__$1 = state_30066;
var statearr_30101_33343 = state_30066__$1;
(statearr_30101_33343[(2)] = tc);

(statearr_30101_33343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30067 === (5))){
var inst_30046 = cljs.core.async.close_BANG_(tc);
var inst_30047 = cljs.core.async.close_BANG_(fc);
var state_30066__$1 = (function (){var statearr_30103 = state_30066;
(statearr_30103[(8)] = inst_30046);

return statearr_30103;
})();
var statearr_30106_33347 = state_30066__$1;
(statearr_30106_33347[(2)] = inst_30047);

(statearr_30106_33347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30067 === (14))){
var inst_30060 = (state_30066[(2)]);
var state_30066__$1 = state_30066;
var statearr_30107_33348 = state_30066__$1;
(statearr_30107_33348[(2)] = inst_30060);

(statearr_30107_33348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30067 === (10))){
var state_30066__$1 = state_30066;
var statearr_30110_33349 = state_30066__$1;
(statearr_30110_33349[(2)] = fc);

(statearr_30110_33349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30067 === (8))){
var inst_30055 = (state_30066[(2)]);
var state_30066__$1 = state_30066;
if(cljs.core.truth_(inst_30055)){
var statearr_30114_33350 = state_30066__$1;
(statearr_30114_33350[(1)] = (12));

} else {
var statearr_30116_33351 = state_30066__$1;
(statearr_30116_33351[(1)] = (13));

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
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_30117 = [null,null,null,null,null,null,null,null,null];
(statearr_30117[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_30117[(1)] = (1));

return statearr_30117;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_30066){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_30066);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e30119){var ex__28353__auto__ = e30119;
var statearr_30120_33359 = state_30066;
(statearr_30120_33359[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_30066[(4)]))){
var statearr_30121_33360 = state_30066;
(statearr_30121_33360[(1)] = cljs.core.first((state_30066[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33361 = state_30066;
state_30066 = G__33361;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_30066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_30066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_30123 = f__28968__auto__();
(statearr_30123[(6)] = c__28967__auto___33328);

return statearr_30123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
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
var c__28967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_30152){
var state_val_30153 = (state_30152[(1)]);
if((state_val_30153 === (7))){
var inst_30148 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
var statearr_30156_33369 = state_30152__$1;
(statearr_30156_33369[(2)] = inst_30148);

(statearr_30156_33369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (1))){
var inst_30126 = init;
var inst_30129 = inst_30126;
var state_30152__$1 = (function (){var statearr_30158 = state_30152;
(statearr_30158[(7)] = inst_30129);

return statearr_30158;
})();
var statearr_30159_33370 = state_30152__$1;
(statearr_30159_33370[(2)] = null);

(statearr_30159_33370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (4))){
var inst_30132 = (state_30152[(8)]);
var inst_30132__$1 = (state_30152[(2)]);
var inst_30135 = (inst_30132__$1 == null);
var state_30152__$1 = (function (){var statearr_30168 = state_30152;
(statearr_30168[(8)] = inst_30132__$1);

return statearr_30168;
})();
if(cljs.core.truth_(inst_30135)){
var statearr_30170_33374 = state_30152__$1;
(statearr_30170_33374[(1)] = (5));

} else {
var statearr_30171_33375 = state_30152__$1;
(statearr_30171_33375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (6))){
var inst_30129 = (state_30152[(7)]);
var inst_30132 = (state_30152[(8)]);
var inst_30139 = (state_30152[(9)]);
var inst_30139__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30129,inst_30132) : f.call(null,inst_30129,inst_30132));
var inst_30140 = cljs.core.reduced_QMARK_(inst_30139__$1);
var state_30152__$1 = (function (){var statearr_30176 = state_30152;
(statearr_30176[(9)] = inst_30139__$1);

return statearr_30176;
})();
if(inst_30140){
var statearr_30178_33376 = state_30152__$1;
(statearr_30178_33376[(1)] = (8));

} else {
var statearr_30182_33377 = state_30152__$1;
(statearr_30182_33377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (3))){
var inst_30150 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30152__$1,inst_30150);
} else {
if((state_val_30153 === (2))){
var state_30152__$1 = state_30152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30152__$1,(4),ch);
} else {
if((state_val_30153 === (9))){
var inst_30139 = (state_30152[(9)]);
var inst_30129 = inst_30139;
var state_30152__$1 = (function (){var statearr_30185 = state_30152;
(statearr_30185[(7)] = inst_30129);

return statearr_30185;
})();
var statearr_30186_33382 = state_30152__$1;
(statearr_30186_33382[(2)] = null);

(statearr_30186_33382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (5))){
var inst_30129 = (state_30152[(7)]);
var state_30152__$1 = state_30152;
var statearr_30188_33386 = state_30152__$1;
(statearr_30188_33386[(2)] = inst_30129);

(statearr_30188_33386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (10))){
var inst_30146 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
var statearr_30193_33387 = state_30152__$1;
(statearr_30193_33387[(2)] = inst_30146);

(statearr_30193_33387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (8))){
var inst_30139 = (state_30152[(9)]);
var inst_30142 = cljs.core.deref(inst_30139);
var state_30152__$1 = state_30152;
var statearr_30194_33388 = state_30152__$1;
(statearr_30194_33388[(2)] = inst_30142);

(statearr_30194_33388[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28350__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28350__auto____0 = (function (){
var statearr_30199 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30199[(0)] = cljs$core$async$reduce_$_state_machine__28350__auto__);

(statearr_30199[(1)] = (1));

return statearr_30199;
});
var cljs$core$async$reduce_$_state_machine__28350__auto____1 = (function (state_30152){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_30152);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e30200){var ex__28353__auto__ = e30200;
var statearr_30201_33394 = state_30152;
(statearr_30201_33394[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_30152[(4)]))){
var statearr_30202_33395 = state_30152;
(statearr_30202_33395[(1)] = cljs.core.first((state_30152[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33396 = state_30152;
state_30152 = G__33396;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28350__auto__ = function(state_30152){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28350__auto____1.call(this,state_30152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28350__auto____0;
cljs$core$async$reduce_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28350__auto____1;
return cljs$core$async$reduce_$_state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_30204 = f__28968__auto__();
(statearr_30204[(6)] = c__28967__auto__);

return statearr_30204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
}));

return c__28967__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_30214){
var state_val_30216 = (state_30214[(1)]);
if((state_val_30216 === (1))){
var inst_30209 = cljs.core.async.reduce(f__$1,init,ch);
var state_30214__$1 = state_30214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30214__$1,(2),inst_30209);
} else {
if((state_val_30216 === (2))){
var inst_30211 = (state_30214[(2)]);
var inst_30212 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30211) : f__$1.call(null,inst_30211));
var state_30214__$1 = state_30214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30214__$1,inst_30212);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28350__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28350__auto____0 = (function (){
var statearr_30225 = [null,null,null,null,null,null,null];
(statearr_30225[(0)] = cljs$core$async$transduce_$_state_machine__28350__auto__);

(statearr_30225[(1)] = (1));

return statearr_30225;
});
var cljs$core$async$transduce_$_state_machine__28350__auto____1 = (function (state_30214){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_30214);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e30230){var ex__28353__auto__ = e30230;
var statearr_30231_33400 = state_30214;
(statearr_30231_33400[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_30214[(4)]))){
var statearr_30232_33404 = state_30214;
(statearr_30232_33404[(1)] = cljs.core.first((state_30214[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33405 = state_30214;
state_30214 = G__33405;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28350__auto__ = function(state_30214){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28350__auto____1.call(this,state_30214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28350__auto____0;
cljs$core$async$transduce_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28350__auto____1;
return cljs$core$async$transduce_$_state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_30235 = f__28968__auto__();
(statearr_30235[(6)] = c__28967__auto__);

return statearr_30235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
}));

return c__28967__auto__;
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
var G__30245 = arguments.length;
switch (G__30245) {
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
var c__28967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_30275){
var state_val_30276 = (state_30275[(1)]);
if((state_val_30276 === (7))){
var inst_30257 = (state_30275[(2)]);
var state_30275__$1 = state_30275;
var statearr_30283_33407 = state_30275__$1;
(statearr_30283_33407[(2)] = inst_30257);

(statearr_30283_33407[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (1))){
var inst_30250 = cljs.core.seq(coll);
var inst_30251 = inst_30250;
var state_30275__$1 = (function (){var statearr_30288 = state_30275;
(statearr_30288[(7)] = inst_30251);

return statearr_30288;
})();
var statearr_30289_33411 = state_30275__$1;
(statearr_30289_33411[(2)] = null);

(statearr_30289_33411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (4))){
var inst_30251 = (state_30275[(7)]);
var inst_30255 = cljs.core.first(inst_30251);
var state_30275__$1 = state_30275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30275__$1,(7),ch,inst_30255);
} else {
if((state_val_30276 === (13))){
var inst_30269 = (state_30275[(2)]);
var state_30275__$1 = state_30275;
var statearr_30291_33412 = state_30275__$1;
(statearr_30291_33412[(2)] = inst_30269);

(statearr_30291_33412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (6))){
var inst_30260 = (state_30275[(2)]);
var state_30275__$1 = state_30275;
if(cljs.core.truth_(inst_30260)){
var statearr_30293_33413 = state_30275__$1;
(statearr_30293_33413[(1)] = (8));

} else {
var statearr_30294_33414 = state_30275__$1;
(statearr_30294_33414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (3))){
var inst_30273 = (state_30275[(2)]);
var state_30275__$1 = state_30275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30275__$1,inst_30273);
} else {
if((state_val_30276 === (12))){
var state_30275__$1 = state_30275;
var statearr_30296_33415 = state_30275__$1;
(statearr_30296_33415[(2)] = null);

(statearr_30296_33415[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (2))){
var inst_30251 = (state_30275[(7)]);
var state_30275__$1 = state_30275;
if(cljs.core.truth_(inst_30251)){
var statearr_30300_33416 = state_30275__$1;
(statearr_30300_33416[(1)] = (4));

} else {
var statearr_30301_33417 = state_30275__$1;
(statearr_30301_33417[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (11))){
var inst_30266 = cljs.core.async.close_BANG_(ch);
var state_30275__$1 = state_30275;
var statearr_30307_33418 = state_30275__$1;
(statearr_30307_33418[(2)] = inst_30266);

(statearr_30307_33418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (9))){
var state_30275__$1 = state_30275;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30308_33419 = state_30275__$1;
(statearr_30308_33419[(1)] = (11));

} else {
var statearr_30309_33420 = state_30275__$1;
(statearr_30309_33420[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (5))){
var inst_30251 = (state_30275[(7)]);
var state_30275__$1 = state_30275;
var statearr_30310_33421 = state_30275__$1;
(statearr_30310_33421[(2)] = inst_30251);

(statearr_30310_33421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (10))){
var inst_30271 = (state_30275[(2)]);
var state_30275__$1 = state_30275;
var statearr_30317_33422 = state_30275__$1;
(statearr_30317_33422[(2)] = inst_30271);

(statearr_30317_33422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (8))){
var inst_30251 = (state_30275[(7)]);
var inst_30262 = cljs.core.next(inst_30251);
var inst_30251__$1 = inst_30262;
var state_30275__$1 = (function (){var statearr_30318 = state_30275;
(statearr_30318[(7)] = inst_30251__$1);

return statearr_30318;
})();
var statearr_30319_33423 = state_30275__$1;
(statearr_30319_33423[(2)] = null);

(statearr_30319_33423[(1)] = (2));


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
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_30327 = [null,null,null,null,null,null,null,null];
(statearr_30327[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_30327[(1)] = (1));

return statearr_30327;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_30275){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_30275);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e30329){var ex__28353__auto__ = e30329;
var statearr_30331_33428 = state_30275;
(statearr_30331_33428[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_30275[(4)]))){
var statearr_30333_33429 = state_30275;
(statearr_30333_33429[(1)] = cljs.core.first((state_30275[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33432 = state_30275;
state_30275 = G__33432;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_30275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_30275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_30339 = f__28968__auto__();
(statearr_30339[(6)] = c__28967__auto__);

return statearr_30339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
}));

return c__28967__auto__;
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
var G__30356 = arguments.length;
switch (G__30356) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33446 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33446(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33455 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33455(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33456 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33456(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33463 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33463(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30385 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30385 = (function (ch,cs,meta30386){
this.ch = ch;
this.cs = cs;
this.meta30386 = meta30386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30387,meta30386__$1){
var self__ = this;
var _30387__$1 = this;
return (new cljs.core.async.t_cljs$core$async30385(self__.ch,self__.cs,meta30386__$1));
}));

(cljs.core.async.t_cljs$core$async30385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30387){
var self__ = this;
var _30387__$1 = this;
return self__.meta30386;
}));

(cljs.core.async.t_cljs$core$async30385.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30385.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30385.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30385.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30385.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30385.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30386","meta30386",-1438686521,null)], null);
}));

(cljs.core.async.t_cljs$core$async30385.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30385");

(cljs.core.async.t_cljs$core$async30385.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30385");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30385.
 */
cljs.core.async.__GT_t_cljs$core$async30385 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30385(ch__$1,cs__$1,meta30386){
return (new cljs.core.async.t_cljs$core$async30385(ch__$1,cs__$1,meta30386));
});

}

return (new cljs.core.async.t_cljs$core$async30385(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28967__auto___33480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_30554){
var state_val_30561 = (state_30554[(1)]);
if((state_val_30561 === (7))){
var inst_30549 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30563_33486 = state_30554__$1;
(statearr_30563_33486[(2)] = inst_30549);

(statearr_30563_33486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (20))){
var inst_30439 = (state_30554[(7)]);
var inst_30452 = cljs.core.first(inst_30439);
var inst_30453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30452,(0),null);
var inst_30454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30452,(1),null);
var state_30554__$1 = (function (){var statearr_30565 = state_30554;
(statearr_30565[(8)] = inst_30453);

return statearr_30565;
})();
if(cljs.core.truth_(inst_30454)){
var statearr_30566_33488 = state_30554__$1;
(statearr_30566_33488[(1)] = (22));

} else {
var statearr_30568_33489 = state_30554__$1;
(statearr_30568_33489[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (27))){
var inst_30407 = (state_30554[(9)]);
var inst_30492 = (state_30554[(10)]);
var inst_30484 = (state_30554[(11)]);
var inst_30486 = (state_30554[(12)]);
var inst_30492__$1 = cljs.core._nth(inst_30484,inst_30486);
var inst_30493 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30492__$1,inst_30407,done);
var state_30554__$1 = (function (){var statearr_30571 = state_30554;
(statearr_30571[(10)] = inst_30492__$1);

return statearr_30571;
})();
if(cljs.core.truth_(inst_30493)){
var statearr_30573_33492 = state_30554__$1;
(statearr_30573_33492[(1)] = (30));

} else {
var statearr_30575_33494 = state_30554__$1;
(statearr_30575_33494[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (1))){
var state_30554__$1 = state_30554;
var statearr_30576_33495 = state_30554__$1;
(statearr_30576_33495[(2)] = null);

(statearr_30576_33495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (24))){
var inst_30439 = (state_30554[(7)]);
var inst_30459 = (state_30554[(2)]);
var inst_30461 = cljs.core.next(inst_30439);
var inst_30416 = inst_30461;
var inst_30417 = null;
var inst_30418 = (0);
var inst_30419 = (0);
var state_30554__$1 = (function (){var statearr_30577 = state_30554;
(statearr_30577[(13)] = inst_30416);

(statearr_30577[(14)] = inst_30418);

(statearr_30577[(15)] = inst_30419);

(statearr_30577[(16)] = inst_30459);

(statearr_30577[(17)] = inst_30417);

return statearr_30577;
})();
var statearr_30582_33496 = state_30554__$1;
(statearr_30582_33496[(2)] = null);

(statearr_30582_33496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (39))){
var state_30554__$1 = state_30554;
var statearr_30589_33500 = state_30554__$1;
(statearr_30589_33500[(2)] = null);

(statearr_30589_33500[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (4))){
var inst_30407 = (state_30554[(9)]);
var inst_30407__$1 = (state_30554[(2)]);
var inst_30408 = (inst_30407__$1 == null);
var state_30554__$1 = (function (){var statearr_30590 = state_30554;
(statearr_30590[(9)] = inst_30407__$1);

return statearr_30590;
})();
if(cljs.core.truth_(inst_30408)){
var statearr_30591_33501 = state_30554__$1;
(statearr_30591_33501[(1)] = (5));

} else {
var statearr_30592_33502 = state_30554__$1;
(statearr_30592_33502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (15))){
var inst_30416 = (state_30554[(13)]);
var inst_30418 = (state_30554[(14)]);
var inst_30419 = (state_30554[(15)]);
var inst_30417 = (state_30554[(17)]);
var inst_30435 = (state_30554[(2)]);
var inst_30436 = (inst_30419 + (1));
var tmp30583 = inst_30416;
var tmp30584 = inst_30418;
var tmp30585 = inst_30417;
var inst_30416__$1 = tmp30583;
var inst_30417__$1 = tmp30585;
var inst_30418__$1 = tmp30584;
var inst_30419__$1 = inst_30436;
var state_30554__$1 = (function (){var statearr_30593 = state_30554;
(statearr_30593[(13)] = inst_30416__$1);

(statearr_30593[(14)] = inst_30418__$1);

(statearr_30593[(18)] = inst_30435);

(statearr_30593[(15)] = inst_30419__$1);

(statearr_30593[(17)] = inst_30417__$1);

return statearr_30593;
})();
var statearr_30598_33504 = state_30554__$1;
(statearr_30598_33504[(2)] = null);

(statearr_30598_33504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (21))){
var inst_30464 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30610_33508 = state_30554__$1;
(statearr_30610_33508[(2)] = inst_30464);

(statearr_30610_33508[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (31))){
var inst_30492 = (state_30554[(10)]);
var inst_30497 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30492);
var state_30554__$1 = state_30554;
var statearr_30617_33513 = state_30554__$1;
(statearr_30617_33513[(2)] = inst_30497);

(statearr_30617_33513[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (32))){
var inst_30485 = (state_30554[(19)]);
var inst_30483 = (state_30554[(20)]);
var inst_30484 = (state_30554[(11)]);
var inst_30486 = (state_30554[(12)]);
var inst_30499 = (state_30554[(2)]);
var inst_30501 = (inst_30486 + (1));
var tmp30607 = inst_30485;
var tmp30608 = inst_30483;
var tmp30609 = inst_30484;
var inst_30483__$1 = tmp30608;
var inst_30484__$1 = tmp30609;
var inst_30485__$1 = tmp30607;
var inst_30486__$1 = inst_30501;
var state_30554__$1 = (function (){var statearr_30620 = state_30554;
(statearr_30620[(19)] = inst_30485__$1);

(statearr_30620[(21)] = inst_30499);

(statearr_30620[(20)] = inst_30483__$1);

(statearr_30620[(11)] = inst_30484__$1);

(statearr_30620[(12)] = inst_30486__$1);

return statearr_30620;
})();
var statearr_30621_33520 = state_30554__$1;
(statearr_30621_33520[(2)] = null);

(statearr_30621_33520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (40))){
var inst_30520 = (state_30554[(22)]);
var inst_30524 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30520);
var state_30554__$1 = state_30554;
var statearr_30622_33524 = state_30554__$1;
(statearr_30622_33524[(2)] = inst_30524);

(statearr_30622_33524[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (33))){
var inst_30505 = (state_30554[(23)]);
var inst_30509 = cljs.core.chunked_seq_QMARK_(inst_30505);
var state_30554__$1 = state_30554;
if(inst_30509){
var statearr_30627_33528 = state_30554__$1;
(statearr_30627_33528[(1)] = (36));

} else {
var statearr_30628_33532 = state_30554__$1;
(statearr_30628_33532[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (13))){
var inst_30429 = (state_30554[(24)]);
var inst_30432 = cljs.core.async.close_BANG_(inst_30429);
var state_30554__$1 = state_30554;
var statearr_30631_33537 = state_30554__$1;
(statearr_30631_33537[(2)] = inst_30432);

(statearr_30631_33537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (22))){
var inst_30453 = (state_30554[(8)]);
var inst_30456 = cljs.core.async.close_BANG_(inst_30453);
var state_30554__$1 = state_30554;
var statearr_30635_33538 = state_30554__$1;
(statearr_30635_33538[(2)] = inst_30456);

(statearr_30635_33538[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (36))){
var inst_30505 = (state_30554[(23)]);
var inst_30511 = cljs.core.chunk_first(inst_30505);
var inst_30512 = cljs.core.chunk_rest(inst_30505);
var inst_30514 = cljs.core.count(inst_30511);
var inst_30483 = inst_30512;
var inst_30484 = inst_30511;
var inst_30485 = inst_30514;
var inst_30486 = (0);
var state_30554__$1 = (function (){var statearr_30639 = state_30554;
(statearr_30639[(19)] = inst_30485);

(statearr_30639[(20)] = inst_30483);

(statearr_30639[(11)] = inst_30484);

(statearr_30639[(12)] = inst_30486);

return statearr_30639;
})();
var statearr_30640_33550 = state_30554__$1;
(statearr_30640_33550[(2)] = null);

(statearr_30640_33550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (41))){
var inst_30505 = (state_30554[(23)]);
var inst_30526 = (state_30554[(2)]);
var inst_30527 = cljs.core.next(inst_30505);
var inst_30483 = inst_30527;
var inst_30484 = null;
var inst_30485 = (0);
var inst_30486 = (0);
var state_30554__$1 = (function (){var statearr_30646 = state_30554;
(statearr_30646[(19)] = inst_30485);

(statearr_30646[(20)] = inst_30483);

(statearr_30646[(25)] = inst_30526);

(statearr_30646[(11)] = inst_30484);

(statearr_30646[(12)] = inst_30486);

return statearr_30646;
})();
var statearr_30649_33560 = state_30554__$1;
(statearr_30649_33560[(2)] = null);

(statearr_30649_33560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (43))){
var state_30554__$1 = state_30554;
var statearr_30654_33561 = state_30554__$1;
(statearr_30654_33561[(2)] = null);

(statearr_30654_33561[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (29))){
var inst_30535 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30664_33563 = state_30554__$1;
(statearr_30664_33563[(2)] = inst_30535);

(statearr_30664_33563[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (44))){
var inst_30546 = (state_30554[(2)]);
var state_30554__$1 = (function (){var statearr_30668 = state_30554;
(statearr_30668[(26)] = inst_30546);

return statearr_30668;
})();
var statearr_30669_33566 = state_30554__$1;
(statearr_30669_33566[(2)] = null);

(statearr_30669_33566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (6))){
var inst_30475 = (state_30554[(27)]);
var inst_30474 = cljs.core.deref(cs);
var inst_30475__$1 = cljs.core.keys(inst_30474);
var inst_30476 = cljs.core.count(inst_30475__$1);
var inst_30477 = cljs.core.reset_BANG_(dctr,inst_30476);
var inst_30482 = cljs.core.seq(inst_30475__$1);
var inst_30483 = inst_30482;
var inst_30484 = null;
var inst_30485 = (0);
var inst_30486 = (0);
var state_30554__$1 = (function (){var statearr_30674 = state_30554;
(statearr_30674[(19)] = inst_30485);

(statearr_30674[(27)] = inst_30475__$1);

(statearr_30674[(20)] = inst_30483);

(statearr_30674[(28)] = inst_30477);

(statearr_30674[(11)] = inst_30484);

(statearr_30674[(12)] = inst_30486);

return statearr_30674;
})();
var statearr_30675_33570 = state_30554__$1;
(statearr_30675_33570[(2)] = null);

(statearr_30675_33570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (28))){
var inst_30483 = (state_30554[(20)]);
var inst_30505 = (state_30554[(23)]);
var inst_30505__$1 = cljs.core.seq(inst_30483);
var state_30554__$1 = (function (){var statearr_30679 = state_30554;
(statearr_30679[(23)] = inst_30505__$1);

return statearr_30679;
})();
if(inst_30505__$1){
var statearr_30682_33572 = state_30554__$1;
(statearr_30682_33572[(1)] = (33));

} else {
var statearr_30683_33573 = state_30554__$1;
(statearr_30683_33573[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (25))){
var inst_30485 = (state_30554[(19)]);
var inst_30486 = (state_30554[(12)]);
var inst_30488 = (inst_30486 < inst_30485);
var inst_30489 = inst_30488;
var state_30554__$1 = state_30554;
if(cljs.core.truth_(inst_30489)){
var statearr_30684_33576 = state_30554__$1;
(statearr_30684_33576[(1)] = (27));

} else {
var statearr_30685_33577 = state_30554__$1;
(statearr_30685_33577[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (34))){
var state_30554__$1 = state_30554;
var statearr_30689_33580 = state_30554__$1;
(statearr_30689_33580[(2)] = null);

(statearr_30689_33580[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (17))){
var state_30554__$1 = state_30554;
var statearr_30694_33583 = state_30554__$1;
(statearr_30694_33583[(2)] = null);

(statearr_30694_33583[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (3))){
var inst_30551 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30554__$1,inst_30551);
} else {
if((state_val_30561 === (12))){
var inst_30469 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30696_33587 = state_30554__$1;
(statearr_30696_33587[(2)] = inst_30469);

(statearr_30696_33587[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (2))){
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30554__$1,(4),ch);
} else {
if((state_val_30561 === (23))){
var state_30554__$1 = state_30554;
var statearr_30697_33588 = state_30554__$1;
(statearr_30697_33588[(2)] = null);

(statearr_30697_33588[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (35))){
var inst_30533 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30699_33589 = state_30554__$1;
(statearr_30699_33589[(2)] = inst_30533);

(statearr_30699_33589[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (19))){
var inst_30439 = (state_30554[(7)]);
var inst_30444 = cljs.core.chunk_first(inst_30439);
var inst_30445 = cljs.core.chunk_rest(inst_30439);
var inst_30446 = cljs.core.count(inst_30444);
var inst_30416 = inst_30445;
var inst_30417 = inst_30444;
var inst_30418 = inst_30446;
var inst_30419 = (0);
var state_30554__$1 = (function (){var statearr_30705 = state_30554;
(statearr_30705[(13)] = inst_30416);

(statearr_30705[(14)] = inst_30418);

(statearr_30705[(15)] = inst_30419);

(statearr_30705[(17)] = inst_30417);

return statearr_30705;
})();
var statearr_30707_33600 = state_30554__$1;
(statearr_30707_33600[(2)] = null);

(statearr_30707_33600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (11))){
var inst_30416 = (state_30554[(13)]);
var inst_30439 = (state_30554[(7)]);
var inst_30439__$1 = cljs.core.seq(inst_30416);
var state_30554__$1 = (function (){var statearr_30715 = state_30554;
(statearr_30715[(7)] = inst_30439__$1);

return statearr_30715;
})();
if(inst_30439__$1){
var statearr_30717_33604 = state_30554__$1;
(statearr_30717_33604[(1)] = (16));

} else {
var statearr_30718_33605 = state_30554__$1;
(statearr_30718_33605[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (9))){
var inst_30471 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30721_33606 = state_30554__$1;
(statearr_30721_33606[(2)] = inst_30471);

(statearr_30721_33606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (5))){
var inst_30414 = cljs.core.deref(cs);
var inst_30415 = cljs.core.seq(inst_30414);
var inst_30416 = inst_30415;
var inst_30417 = null;
var inst_30418 = (0);
var inst_30419 = (0);
var state_30554__$1 = (function (){var statearr_30725 = state_30554;
(statearr_30725[(13)] = inst_30416);

(statearr_30725[(14)] = inst_30418);

(statearr_30725[(15)] = inst_30419);

(statearr_30725[(17)] = inst_30417);

return statearr_30725;
})();
var statearr_30727_33610 = state_30554__$1;
(statearr_30727_33610[(2)] = null);

(statearr_30727_33610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (14))){
var state_30554__$1 = state_30554;
var statearr_30732_33612 = state_30554__$1;
(statearr_30732_33612[(2)] = null);

(statearr_30732_33612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (45))){
var inst_30543 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30734_33615 = state_30554__$1;
(statearr_30734_33615[(2)] = inst_30543);

(statearr_30734_33615[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (26))){
var inst_30475 = (state_30554[(27)]);
var inst_30538 = (state_30554[(2)]);
var inst_30539 = cljs.core.seq(inst_30475);
var state_30554__$1 = (function (){var statearr_30738 = state_30554;
(statearr_30738[(29)] = inst_30538);

return statearr_30738;
})();
if(inst_30539){
var statearr_30740_33620 = state_30554__$1;
(statearr_30740_33620[(1)] = (42));

} else {
var statearr_30743_33621 = state_30554__$1;
(statearr_30743_33621[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (16))){
var inst_30439 = (state_30554[(7)]);
var inst_30441 = cljs.core.chunked_seq_QMARK_(inst_30439);
var state_30554__$1 = state_30554;
if(inst_30441){
var statearr_30747_33623 = state_30554__$1;
(statearr_30747_33623[(1)] = (19));

} else {
var statearr_30749_33624 = state_30554__$1;
(statearr_30749_33624[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (38))){
var inst_30530 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30751_33627 = state_30554__$1;
(statearr_30751_33627[(2)] = inst_30530);

(statearr_30751_33627[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (30))){
var state_30554__$1 = state_30554;
var statearr_30754_33628 = state_30554__$1;
(statearr_30754_33628[(2)] = null);

(statearr_30754_33628[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (10))){
var inst_30419 = (state_30554[(15)]);
var inst_30417 = (state_30554[(17)]);
var inst_30428 = cljs.core._nth(inst_30417,inst_30419);
var inst_30429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30428,(0),null);
var inst_30430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30428,(1),null);
var state_30554__$1 = (function (){var statearr_30758 = state_30554;
(statearr_30758[(24)] = inst_30429);

return statearr_30758;
})();
if(cljs.core.truth_(inst_30430)){
var statearr_30759_33633 = state_30554__$1;
(statearr_30759_33633[(1)] = (13));

} else {
var statearr_30762_33636 = state_30554__$1;
(statearr_30762_33636[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (18))){
var inst_30467 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30764_33638 = state_30554__$1;
(statearr_30764_33638[(2)] = inst_30467);

(statearr_30764_33638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (42))){
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30554__$1,(45),dchan);
} else {
if((state_val_30561 === (37))){
var inst_30407 = (state_30554[(9)]);
var inst_30520 = (state_30554[(22)]);
var inst_30505 = (state_30554[(23)]);
var inst_30520__$1 = cljs.core.first(inst_30505);
var inst_30521 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30520__$1,inst_30407,done);
var state_30554__$1 = (function (){var statearr_30769 = state_30554;
(statearr_30769[(22)] = inst_30520__$1);

return statearr_30769;
})();
if(cljs.core.truth_(inst_30521)){
var statearr_30771_33649 = state_30554__$1;
(statearr_30771_33649[(1)] = (39));

} else {
var statearr_30772_33651 = state_30554__$1;
(statearr_30772_33651[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30561 === (8))){
var inst_30418 = (state_30554[(14)]);
var inst_30419 = (state_30554[(15)]);
var inst_30422 = (inst_30419 < inst_30418);
var inst_30423 = inst_30422;
var state_30554__$1 = state_30554;
if(cljs.core.truth_(inst_30423)){
var statearr_30776_33652 = state_30554__$1;
(statearr_30776_33652[(1)] = (10));

} else {
var statearr_30777_33653 = state_30554__$1;
(statearr_30777_33653[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28350__auto__ = null;
var cljs$core$async$mult_$_state_machine__28350__auto____0 = (function (){
var statearr_30788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30788[(0)] = cljs$core$async$mult_$_state_machine__28350__auto__);

(statearr_30788[(1)] = (1));

return statearr_30788;
});
var cljs$core$async$mult_$_state_machine__28350__auto____1 = (function (state_30554){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_30554);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e30794){var ex__28353__auto__ = e30794;
var statearr_30797_33658 = state_30554;
(statearr_30797_33658[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_30554[(4)]))){
var statearr_30799_33659 = state_30554;
(statearr_30799_33659[(1)] = cljs.core.first((state_30554[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33665 = state_30554;
state_30554 = G__33665;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28350__auto__ = function(state_30554){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28350__auto____1.call(this,state_30554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28350__auto____0;
cljs$core$async$mult_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28350__auto____1;
return cljs$core$async$mult_$_state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_30805 = f__28968__auto__();
(statearr_30805[(6)] = c__28967__auto___33480);

return statearr_30805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
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
var G__30818 = arguments.length;
switch (G__30818) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33679 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33679(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33686 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33686(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33697 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33697(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33704 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33704(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33708 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33708(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33713 = arguments.length;
var i__4865__auto___33715 = (0);
while(true){
if((i__4865__auto___33715 < len__4864__auto___33713)){
args__4870__auto__.push((arguments[i__4865__auto___33715]));

var G__33717 = (i__4865__auto___33715 + (1));
i__4865__auto___33715 = G__33717;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30921){
var map__30923 = p__30921;
var map__30923__$1 = cljs.core.__destructure_map(map__30923);
var opts = map__30923__$1;
var statearr_30927_33722 = state;
(statearr_30927_33722[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30929_33725 = state;
(statearr_30929_33725[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_30930_33726 = state;
(statearr_30930_33726[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30911){
var G__30912 = cljs.core.first(seq30911);
var seq30911__$1 = cljs.core.next(seq30911);
var G__30913 = cljs.core.first(seq30911__$1);
var seq30911__$2 = cljs.core.next(seq30911__$1);
var G__30914 = cljs.core.first(seq30911__$2);
var seq30911__$3 = cljs.core.next(seq30911__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30912,G__30913,G__30914,seq30911__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30963 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30963 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30964){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30964 = meta30964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30965,meta30964__$1){
var self__ = this;
var _30965__$1 = this;
return (new cljs.core.async.t_cljs$core$async30963(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30964__$1));
}));

(cljs.core.async.t_cljs$core$async30963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30965){
var self__ = this;
var _30965__$1 = this;
return self__.meta30964;
}));

(cljs.core.async.t_cljs$core$async30963.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30963.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30963.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30963.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30963.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30963.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30963.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30963.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30964","meta30964",377372842,null)], null);
}));

(cljs.core.async.t_cljs$core$async30963.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30963");

(cljs.core.async.t_cljs$core$async30963.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30963");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30963.
 */
cljs.core.async.__GT_t_cljs$core$async30963 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30963(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30964){
return (new cljs.core.async.t_cljs$core$async30963(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30964));
});

}

return (new cljs.core.async.t_cljs$core$async30963(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28967__auto___33771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_31090){
var state_val_31091 = (state_31090[(1)]);
if((state_val_31091 === (7))){
var inst_31043 = (state_31090[(2)]);
var state_31090__$1 = state_31090;
if(cljs.core.truth_(inst_31043)){
var statearr_31094_33773 = state_31090__$1;
(statearr_31094_33773[(1)] = (8));

} else {
var statearr_31095_33774 = state_31090__$1;
(statearr_31095_33774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (20))){
var inst_31034 = (state_31090[(7)]);
var state_31090__$1 = state_31090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31090__$1,(23),out,inst_31034);
} else {
if((state_val_31091 === (1))){
var inst_31009 = calc_state();
var inst_31010 = cljs.core.__destructure_map(inst_31009);
var inst_31011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31010,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31010,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31010,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31014 = inst_31009;
var state_31090__$1 = (function (){var statearr_31103 = state_31090;
(statearr_31103[(8)] = inst_31014);

(statearr_31103[(9)] = inst_31013);

(statearr_31103[(10)] = inst_31011);

(statearr_31103[(11)] = inst_31012);

return statearr_31103;
})();
var statearr_31106_33778 = state_31090__$1;
(statearr_31106_33778[(2)] = null);

(statearr_31106_33778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (24))){
var inst_31024 = (state_31090[(12)]);
var inst_31014 = inst_31024;
var state_31090__$1 = (function (){var statearr_31107 = state_31090;
(statearr_31107[(8)] = inst_31014);

return statearr_31107;
})();
var statearr_31108_33779 = state_31090__$1;
(statearr_31108_33779[(2)] = null);

(statearr_31108_33779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (4))){
var inst_31034 = (state_31090[(7)]);
var inst_31036 = (state_31090[(13)]);
var inst_31033 = (state_31090[(2)]);
var inst_31034__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31033,(0),null);
var inst_31035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31033,(1),null);
var inst_31036__$1 = (inst_31034__$1 == null);
var state_31090__$1 = (function (){var statearr_31111 = state_31090;
(statearr_31111[(7)] = inst_31034__$1);

(statearr_31111[(13)] = inst_31036__$1);

(statearr_31111[(14)] = inst_31035);

return statearr_31111;
})();
if(cljs.core.truth_(inst_31036__$1)){
var statearr_31112_33781 = state_31090__$1;
(statearr_31112_33781[(1)] = (5));

} else {
var statearr_31113_33782 = state_31090__$1;
(statearr_31113_33782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (15))){
var inst_31061 = (state_31090[(15)]);
var inst_31025 = (state_31090[(16)]);
var inst_31061__$1 = cljs.core.empty_QMARK_(inst_31025);
var state_31090__$1 = (function (){var statearr_31115 = state_31090;
(statearr_31115[(15)] = inst_31061__$1);

return statearr_31115;
})();
if(inst_31061__$1){
var statearr_31116_33784 = state_31090__$1;
(statearr_31116_33784[(1)] = (17));

} else {
var statearr_31121_33785 = state_31090__$1;
(statearr_31121_33785[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (21))){
var inst_31024 = (state_31090[(12)]);
var inst_31014 = inst_31024;
var state_31090__$1 = (function (){var statearr_31124 = state_31090;
(statearr_31124[(8)] = inst_31014);

return statearr_31124;
})();
var statearr_31129_33787 = state_31090__$1;
(statearr_31129_33787[(2)] = null);

(statearr_31129_33787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (13))){
var inst_31051 = (state_31090[(2)]);
var inst_31052 = calc_state();
var inst_31014 = inst_31052;
var state_31090__$1 = (function (){var statearr_31135 = state_31090;
(statearr_31135[(17)] = inst_31051);

(statearr_31135[(8)] = inst_31014);

return statearr_31135;
})();
var statearr_31136_33788 = state_31090__$1;
(statearr_31136_33788[(2)] = null);

(statearr_31136_33788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (22))){
var inst_31082 = (state_31090[(2)]);
var state_31090__$1 = state_31090;
var statearr_31138_33789 = state_31090__$1;
(statearr_31138_33789[(2)] = inst_31082);

(statearr_31138_33789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (6))){
var inst_31035 = (state_31090[(14)]);
var inst_31041 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31035,change);
var state_31090__$1 = state_31090;
var statearr_31143_33790 = state_31090__$1;
(statearr_31143_33790[(2)] = inst_31041);

(statearr_31143_33790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (25))){
var state_31090__$1 = state_31090;
var statearr_31144_33791 = state_31090__$1;
(statearr_31144_33791[(2)] = null);

(statearr_31144_33791[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (17))){
var inst_31035 = (state_31090[(14)]);
var inst_31026 = (state_31090[(18)]);
var inst_31064 = (inst_31026.cljs$core$IFn$_invoke$arity$1 ? inst_31026.cljs$core$IFn$_invoke$arity$1(inst_31035) : inst_31026.call(null,inst_31035));
var inst_31065 = cljs.core.not(inst_31064);
var state_31090__$1 = state_31090;
var statearr_31145_33792 = state_31090__$1;
(statearr_31145_33792[(2)] = inst_31065);

(statearr_31145_33792[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (3))){
var inst_31086 = (state_31090[(2)]);
var state_31090__$1 = state_31090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31090__$1,inst_31086);
} else {
if((state_val_31091 === (12))){
var state_31090__$1 = state_31090;
var statearr_31157_33794 = state_31090__$1;
(statearr_31157_33794[(2)] = null);

(statearr_31157_33794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (2))){
var inst_31024 = (state_31090[(12)]);
var inst_31014 = (state_31090[(8)]);
var inst_31024__$1 = cljs.core.__destructure_map(inst_31014);
var inst_31025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31024__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31024__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31024__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31090__$1 = (function (){var statearr_31167 = state_31090;
(statearr_31167[(12)] = inst_31024__$1);

(statearr_31167[(18)] = inst_31026);

(statearr_31167[(16)] = inst_31025);

return statearr_31167;
})();
return cljs.core.async.ioc_alts_BANG_(state_31090__$1,(4),inst_31027);
} else {
if((state_val_31091 === (23))){
var inst_31073 = (state_31090[(2)]);
var state_31090__$1 = state_31090;
if(cljs.core.truth_(inst_31073)){
var statearr_31170_33801 = state_31090__$1;
(statearr_31170_33801[(1)] = (24));

} else {
var statearr_31174_33802 = state_31090__$1;
(statearr_31174_33802[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (19))){
var inst_31068 = (state_31090[(2)]);
var state_31090__$1 = state_31090;
var statearr_31178_33807 = state_31090__$1;
(statearr_31178_33807[(2)] = inst_31068);

(statearr_31178_33807[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (11))){
var inst_31035 = (state_31090[(14)]);
var inst_31048 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31035);
var state_31090__$1 = state_31090;
var statearr_31182_33808 = state_31090__$1;
(statearr_31182_33808[(2)] = inst_31048);

(statearr_31182_33808[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (9))){
var inst_31035 = (state_31090[(14)]);
var inst_31025 = (state_31090[(16)]);
var inst_31055 = (state_31090[(19)]);
var inst_31055__$1 = (inst_31025.cljs$core$IFn$_invoke$arity$1 ? inst_31025.cljs$core$IFn$_invoke$arity$1(inst_31035) : inst_31025.call(null,inst_31035));
var state_31090__$1 = (function (){var statearr_31184 = state_31090;
(statearr_31184[(19)] = inst_31055__$1);

return statearr_31184;
})();
if(cljs.core.truth_(inst_31055__$1)){
var statearr_31185_33809 = state_31090__$1;
(statearr_31185_33809[(1)] = (14));

} else {
var statearr_31186_33810 = state_31090__$1;
(statearr_31186_33810[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (5))){
var inst_31036 = (state_31090[(13)]);
var state_31090__$1 = state_31090;
var statearr_31187_33813 = state_31090__$1;
(statearr_31187_33813[(2)] = inst_31036);

(statearr_31187_33813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (14))){
var inst_31055 = (state_31090[(19)]);
var state_31090__$1 = state_31090;
var statearr_31191_33815 = state_31090__$1;
(statearr_31191_33815[(2)] = inst_31055);

(statearr_31191_33815[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (26))){
var inst_31078 = (state_31090[(2)]);
var state_31090__$1 = state_31090;
var statearr_31197_33816 = state_31090__$1;
(statearr_31197_33816[(2)] = inst_31078);

(statearr_31197_33816[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (16))){
var inst_31070 = (state_31090[(2)]);
var state_31090__$1 = state_31090;
if(cljs.core.truth_(inst_31070)){
var statearr_31198_33817 = state_31090__$1;
(statearr_31198_33817[(1)] = (20));

} else {
var statearr_31200_33818 = state_31090__$1;
(statearr_31200_33818[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (10))){
var inst_31084 = (state_31090[(2)]);
var state_31090__$1 = state_31090;
var statearr_31201_33819 = state_31090__$1;
(statearr_31201_33819[(2)] = inst_31084);

(statearr_31201_33819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (18))){
var inst_31061 = (state_31090[(15)]);
var state_31090__$1 = state_31090;
var statearr_31205_33824 = state_31090__$1;
(statearr_31205_33824[(2)] = inst_31061);

(statearr_31205_33824[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31091 === (8))){
var inst_31034 = (state_31090[(7)]);
var inst_31046 = (inst_31034 == null);
var state_31090__$1 = state_31090;
if(cljs.core.truth_(inst_31046)){
var statearr_31207_33832 = state_31090__$1;
(statearr_31207_33832[(1)] = (11));

} else {
var statearr_31208_33833 = state_31090__$1;
(statearr_31208_33833[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__28350__auto__ = null;
var cljs$core$async$mix_$_state_machine__28350__auto____0 = (function (){
var statearr_31213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31213[(0)] = cljs$core$async$mix_$_state_machine__28350__auto__);

(statearr_31213[(1)] = (1));

return statearr_31213;
});
var cljs$core$async$mix_$_state_machine__28350__auto____1 = (function (state_31090){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_31090);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e31218){var ex__28353__auto__ = e31218;
var statearr_31219_33842 = state_31090;
(statearr_31219_33842[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_31090[(4)]))){
var statearr_31225_33843 = state_31090;
(statearr_31225_33843[(1)] = cljs.core.first((state_31090[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33848 = state_31090;
state_31090 = G__33848;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28350__auto__ = function(state_31090){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28350__auto____1.call(this,state_31090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28350__auto____0;
cljs$core$async$mix_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28350__auto____1;
return cljs$core$async$mix_$_state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_31229 = f__28968__auto__();
(statearr_31229[(6)] = c__28967__auto___33771);

return statearr_31229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33850 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33850(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33856 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33856(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33857 = (function() {
var G__33858 = null;
var G__33858__1 = (function (p){
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
var G__33858__2 = (function (p,v){
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
G__33858 = function(p,v){
switch(arguments.length){
case 1:
return G__33858__1.call(this,p);
case 2:
return G__33858__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33858.cljs$core$IFn$_invoke$arity$1 = G__33858__1;
G__33858.cljs$core$IFn$_invoke$arity$2 = G__33858__2;
return G__33858;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31270 = arguments.length;
switch (G__31270) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33857(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33857(p,v);
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
var G__31287 = arguments.length;
switch (G__31287) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31284_SHARP_){
if(cljs.core.truth_((p1__31284_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31284_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31284_SHARP_.call(null,topic)))){
return p1__31284_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31284_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31306 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31306 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31307){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31307 = meta31307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31308,meta31307__$1){
var self__ = this;
var _31308__$1 = this;
return (new cljs.core.async.t_cljs$core$async31306(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31307__$1));
}));

(cljs.core.async.t_cljs$core$async31306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31308){
var self__ = this;
var _31308__$1 = this;
return self__.meta31307;
}));

(cljs.core.async.t_cljs$core$async31306.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31306.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31306.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31306.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31306.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async31306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31307","meta31307",2092895045,null)], null);
}));

(cljs.core.async.t_cljs$core$async31306.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31306");

(cljs.core.async.t_cljs$core$async31306.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31306");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31306.
 */
cljs.core.async.__GT_t_cljs$core$async31306 = (function cljs$core$async$__GT_t_cljs$core$async31306(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31307){
return (new cljs.core.async.t_cljs$core$async31306(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31307));
});

}

return (new cljs.core.async.t_cljs$core$async31306(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28967__auto___33884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_31421){
var state_val_31422 = (state_31421[(1)]);
if((state_val_31422 === (7))){
var inst_31417 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
var statearr_31423_33892 = state_31421__$1;
(statearr_31423_33892[(2)] = inst_31417);

(statearr_31423_33892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (20))){
var state_31421__$1 = state_31421;
var statearr_31424_33893 = state_31421__$1;
(statearr_31424_33893[(2)] = null);

(statearr_31424_33893[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (1))){
var state_31421__$1 = state_31421;
var statearr_31425_33894 = state_31421__$1;
(statearr_31425_33894[(2)] = null);

(statearr_31425_33894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (24))){
var inst_31400 = (state_31421[(7)]);
var inst_31409 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31400);
var state_31421__$1 = state_31421;
var statearr_31426_33895 = state_31421__$1;
(statearr_31426_33895[(2)] = inst_31409);

(statearr_31426_33895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (4))){
var inst_31349 = (state_31421[(8)]);
var inst_31349__$1 = (state_31421[(2)]);
var inst_31350 = (inst_31349__$1 == null);
var state_31421__$1 = (function (){var statearr_31427 = state_31421;
(statearr_31427[(8)] = inst_31349__$1);

return statearr_31427;
})();
if(cljs.core.truth_(inst_31350)){
var statearr_31428_33900 = state_31421__$1;
(statearr_31428_33900[(1)] = (5));

} else {
var statearr_31429_33901 = state_31421__$1;
(statearr_31429_33901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (15))){
var inst_31393 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
var statearr_31430_33904 = state_31421__$1;
(statearr_31430_33904[(2)] = inst_31393);

(statearr_31430_33904[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (21))){
var inst_31414 = (state_31421[(2)]);
var state_31421__$1 = (function (){var statearr_31431 = state_31421;
(statearr_31431[(9)] = inst_31414);

return statearr_31431;
})();
var statearr_31432_33913 = state_31421__$1;
(statearr_31432_33913[(2)] = null);

(statearr_31432_33913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (13))){
var inst_31373 = (state_31421[(10)]);
var inst_31376 = cljs.core.chunked_seq_QMARK_(inst_31373);
var state_31421__$1 = state_31421;
if(inst_31376){
var statearr_31433_33915 = state_31421__$1;
(statearr_31433_33915[(1)] = (16));

} else {
var statearr_31434_33916 = state_31421__$1;
(statearr_31434_33916[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (22))){
var inst_31406 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
if(cljs.core.truth_(inst_31406)){
var statearr_31435_33917 = state_31421__$1;
(statearr_31435_33917[(1)] = (23));

} else {
var statearr_31436_33922 = state_31421__$1;
(statearr_31436_33922[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (6))){
var inst_31402 = (state_31421[(11)]);
var inst_31349 = (state_31421[(8)]);
var inst_31400 = (state_31421[(7)]);
var inst_31400__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31349) : topic_fn.call(null,inst_31349));
var inst_31401 = cljs.core.deref(mults);
var inst_31402__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31401,inst_31400__$1);
var state_31421__$1 = (function (){var statearr_31441 = state_31421;
(statearr_31441[(11)] = inst_31402__$1);

(statearr_31441[(7)] = inst_31400__$1);

return statearr_31441;
})();
if(cljs.core.truth_(inst_31402__$1)){
var statearr_31446_33934 = state_31421__$1;
(statearr_31446_33934[(1)] = (19));

} else {
var statearr_31447_33944 = state_31421__$1;
(statearr_31447_33944[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (25))){
var inst_31411 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
var statearr_31452_33945 = state_31421__$1;
(statearr_31452_33945[(2)] = inst_31411);

(statearr_31452_33945[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (17))){
var inst_31373 = (state_31421[(10)]);
var inst_31384 = cljs.core.first(inst_31373);
var inst_31385 = cljs.core.async.muxch_STAR_(inst_31384);
var inst_31386 = cljs.core.async.close_BANG_(inst_31385);
var inst_31387 = cljs.core.next(inst_31373);
var inst_31359 = inst_31387;
var inst_31360 = null;
var inst_31361 = (0);
var inst_31362 = (0);
var state_31421__$1 = (function (){var statearr_31453 = state_31421;
(statearr_31453[(12)] = inst_31360);

(statearr_31453[(13)] = inst_31362);

(statearr_31453[(14)] = inst_31361);

(statearr_31453[(15)] = inst_31359);

(statearr_31453[(16)] = inst_31386);

return statearr_31453;
})();
var statearr_31457_33950 = state_31421__$1;
(statearr_31457_33950[(2)] = null);

(statearr_31457_33950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (3))){
var inst_31419 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31421__$1,inst_31419);
} else {
if((state_val_31422 === (12))){
var inst_31395 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
var statearr_31462_33955 = state_31421__$1;
(statearr_31462_33955[(2)] = inst_31395);

(statearr_31462_33955[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (2))){
var state_31421__$1 = state_31421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31421__$1,(4),ch);
} else {
if((state_val_31422 === (23))){
var state_31421__$1 = state_31421;
var statearr_31463_33959 = state_31421__$1;
(statearr_31463_33959[(2)] = null);

(statearr_31463_33959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (19))){
var inst_31402 = (state_31421[(11)]);
var inst_31349 = (state_31421[(8)]);
var inst_31404 = cljs.core.async.muxch_STAR_(inst_31402);
var state_31421__$1 = state_31421;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31421__$1,(22),inst_31404,inst_31349);
} else {
if((state_val_31422 === (11))){
var inst_31373 = (state_31421[(10)]);
var inst_31359 = (state_31421[(15)]);
var inst_31373__$1 = cljs.core.seq(inst_31359);
var state_31421__$1 = (function (){var statearr_31466 = state_31421;
(statearr_31466[(10)] = inst_31373__$1);

return statearr_31466;
})();
if(inst_31373__$1){
var statearr_31467_33964 = state_31421__$1;
(statearr_31467_33964[(1)] = (13));

} else {
var statearr_31468_33965 = state_31421__$1;
(statearr_31468_33965[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (9))){
var inst_31397 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
var statearr_31470_33969 = state_31421__$1;
(statearr_31470_33969[(2)] = inst_31397);

(statearr_31470_33969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (5))){
var inst_31356 = cljs.core.deref(mults);
var inst_31357 = cljs.core.vals(inst_31356);
var inst_31358 = cljs.core.seq(inst_31357);
var inst_31359 = inst_31358;
var inst_31360 = null;
var inst_31361 = (0);
var inst_31362 = (0);
var state_31421__$1 = (function (){var statearr_31474 = state_31421;
(statearr_31474[(12)] = inst_31360);

(statearr_31474[(13)] = inst_31362);

(statearr_31474[(14)] = inst_31361);

(statearr_31474[(15)] = inst_31359);

return statearr_31474;
})();
var statearr_31475_33977 = state_31421__$1;
(statearr_31475_33977[(2)] = null);

(statearr_31475_33977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (14))){
var state_31421__$1 = state_31421;
var statearr_31479_33978 = state_31421__$1;
(statearr_31479_33978[(2)] = null);

(statearr_31479_33978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (16))){
var inst_31373 = (state_31421[(10)]);
var inst_31378 = cljs.core.chunk_first(inst_31373);
var inst_31380 = cljs.core.chunk_rest(inst_31373);
var inst_31381 = cljs.core.count(inst_31378);
var inst_31359 = inst_31380;
var inst_31360 = inst_31378;
var inst_31361 = inst_31381;
var inst_31362 = (0);
var state_31421__$1 = (function (){var statearr_31486 = state_31421;
(statearr_31486[(12)] = inst_31360);

(statearr_31486[(13)] = inst_31362);

(statearr_31486[(14)] = inst_31361);

(statearr_31486[(15)] = inst_31359);

return statearr_31486;
})();
var statearr_31487_33987 = state_31421__$1;
(statearr_31487_33987[(2)] = null);

(statearr_31487_33987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (10))){
var inst_31360 = (state_31421[(12)]);
var inst_31362 = (state_31421[(13)]);
var inst_31361 = (state_31421[(14)]);
var inst_31359 = (state_31421[(15)]);
var inst_31367 = cljs.core._nth(inst_31360,inst_31362);
var inst_31368 = cljs.core.async.muxch_STAR_(inst_31367);
var inst_31369 = cljs.core.async.close_BANG_(inst_31368);
var inst_31370 = (inst_31362 + (1));
var tmp31476 = inst_31360;
var tmp31477 = inst_31361;
var tmp31478 = inst_31359;
var inst_31359__$1 = tmp31478;
var inst_31360__$1 = tmp31476;
var inst_31361__$1 = tmp31477;
var inst_31362__$1 = inst_31370;
var state_31421__$1 = (function (){var statearr_31491 = state_31421;
(statearr_31491[(12)] = inst_31360__$1);

(statearr_31491[(17)] = inst_31369);

(statearr_31491[(13)] = inst_31362__$1);

(statearr_31491[(14)] = inst_31361__$1);

(statearr_31491[(15)] = inst_31359__$1);

return statearr_31491;
})();
var statearr_31495_33994 = state_31421__$1;
(statearr_31495_33994[(2)] = null);

(statearr_31495_33994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (18))){
var inst_31390 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
var statearr_31510_33999 = state_31421__$1;
(statearr_31510_33999[(2)] = inst_31390);

(statearr_31510_33999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (8))){
var inst_31362 = (state_31421[(13)]);
var inst_31361 = (state_31421[(14)]);
var inst_31364 = (inst_31362 < inst_31361);
var inst_31365 = inst_31364;
var state_31421__$1 = state_31421;
if(cljs.core.truth_(inst_31365)){
var statearr_31511_34007 = state_31421__$1;
(statearr_31511_34007[(1)] = (10));

} else {
var statearr_31512_34009 = state_31421__$1;
(statearr_31512_34009[(1)] = (11));

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
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_31514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31514[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_31514[(1)] = (1));

return statearr_31514;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_31421){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_31421);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e31517){var ex__28353__auto__ = e31517;
var statearr_31518_34010 = state_31421;
(statearr_31518_34010[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_31421[(4)]))){
var statearr_31519_34011 = state_31421;
(statearr_31519_34011[(1)] = cljs.core.first((state_31421[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34015 = state_31421;
state_31421 = G__34015;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_31421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_31421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_31525 = f__28968__auto__();
(statearr_31525[(6)] = c__28967__auto___33884);

return statearr_31525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
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
var G__31536 = arguments.length;
switch (G__31536) {
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
var G__31574 = arguments.length;
switch (G__31574) {
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
var G__31590 = arguments.length;
switch (G__31590) {
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
var c__28967__auto___34037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_31667){
var state_val_31674 = (state_31667[(1)]);
if((state_val_31674 === (7))){
var state_31667__$1 = state_31667;
var statearr_31688_34038 = state_31667__$1;
(statearr_31688_34038[(2)] = null);

(statearr_31688_34038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (1))){
var state_31667__$1 = state_31667;
var statearr_31691_34039 = state_31667__$1;
(statearr_31691_34039[(2)] = null);

(statearr_31691_34039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (4))){
var inst_31609 = (state_31667[(7)]);
var inst_31608 = (state_31667[(8)]);
var inst_31612 = (inst_31609 < inst_31608);
var state_31667__$1 = state_31667;
if(cljs.core.truth_(inst_31612)){
var statearr_31700_34043 = state_31667__$1;
(statearr_31700_34043[(1)] = (6));

} else {
var statearr_31701_34044 = state_31667__$1;
(statearr_31701_34044[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (15))){
var inst_31649 = (state_31667[(9)]);
var inst_31655 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31649);
var state_31667__$1 = state_31667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31667__$1,(17),out,inst_31655);
} else {
if((state_val_31674 === (13))){
var inst_31649 = (state_31667[(9)]);
var inst_31649__$1 = (state_31667[(2)]);
var inst_31651 = cljs.core.some(cljs.core.nil_QMARK_,inst_31649__$1);
var state_31667__$1 = (function (){var statearr_31718 = state_31667;
(statearr_31718[(9)] = inst_31649__$1);

return statearr_31718;
})();
if(cljs.core.truth_(inst_31651)){
var statearr_31719_34047 = state_31667__$1;
(statearr_31719_34047[(1)] = (14));

} else {
var statearr_31721_34048 = state_31667__$1;
(statearr_31721_34048[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (6))){
var state_31667__$1 = state_31667;
var statearr_31726_34049 = state_31667__$1;
(statearr_31726_34049[(2)] = null);

(statearr_31726_34049[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (17))){
var inst_31657 = (state_31667[(2)]);
var state_31667__$1 = (function (){var statearr_31737 = state_31667;
(statearr_31737[(10)] = inst_31657);

return statearr_31737;
})();
var statearr_31738_34051 = state_31667__$1;
(statearr_31738_34051[(2)] = null);

(statearr_31738_34051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (3))){
var inst_31662 = (state_31667[(2)]);
var state_31667__$1 = state_31667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31667__$1,inst_31662);
} else {
if((state_val_31674 === (12))){
var _ = (function (){var statearr_31741 = state_31667;
(statearr_31741[(4)] = cljs.core.rest((state_31667[(4)])));

return statearr_31741;
})();
var state_31667__$1 = state_31667;
var ex31736 = (state_31667__$1[(2)]);
var statearr_31749_34052 = state_31667__$1;
(statearr_31749_34052[(5)] = ex31736);


if((ex31736 instanceof Object)){
var statearr_31755_34053 = state_31667__$1;
(statearr_31755_34053[(1)] = (11));

(statearr_31755_34053[(5)] = null);

} else {
throw ex31736;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (2))){
var inst_31607 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31608 = cnt;
var inst_31609 = (0);
var state_31667__$1 = (function (){var statearr_31771 = state_31667;
(statearr_31771[(11)] = inst_31607);

(statearr_31771[(7)] = inst_31609);

(statearr_31771[(8)] = inst_31608);

return statearr_31771;
})();
var statearr_31776_34057 = state_31667__$1;
(statearr_31776_34057[(2)] = null);

(statearr_31776_34057[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (11))){
var inst_31623 = (state_31667[(2)]);
var inst_31624 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31667__$1 = (function (){var statearr_31778 = state_31667;
(statearr_31778[(12)] = inst_31623);

return statearr_31778;
})();
var statearr_31779_34059 = state_31667__$1;
(statearr_31779_34059[(2)] = inst_31624);

(statearr_31779_34059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (9))){
var inst_31609 = (state_31667[(7)]);
var _ = (function (){var statearr_31780 = state_31667;
(statearr_31780[(4)] = cljs.core.cons((12),(state_31667[(4)])));

return statearr_31780;
})();
var inst_31633 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31609) : chs__$1.call(null,inst_31609));
var inst_31635 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31609) : done.call(null,inst_31609));
var inst_31636 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31633,inst_31635);
var ___$1 = (function (){var statearr_31782 = state_31667;
(statearr_31782[(4)] = cljs.core.rest((state_31667[(4)])));

return statearr_31782;
})();
var state_31667__$1 = state_31667;
var statearr_31783_34062 = state_31667__$1;
(statearr_31783_34062[(2)] = inst_31636);

(statearr_31783_34062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (5))){
var inst_31647 = (state_31667[(2)]);
var state_31667__$1 = (function (){var statearr_31784 = state_31667;
(statearr_31784[(13)] = inst_31647);

return statearr_31784;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31667__$1,(13),dchan);
} else {
if((state_val_31674 === (14))){
var inst_31653 = cljs.core.async.close_BANG_(out);
var state_31667__$1 = state_31667;
var statearr_31786_34065 = state_31667__$1;
(statearr_31786_34065[(2)] = inst_31653);

(statearr_31786_34065[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (16))){
var inst_31660 = (state_31667[(2)]);
var state_31667__$1 = state_31667;
var statearr_31787_34066 = state_31667__$1;
(statearr_31787_34066[(2)] = inst_31660);

(statearr_31787_34066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (10))){
var inst_31609 = (state_31667[(7)]);
var inst_31640 = (state_31667[(2)]);
var inst_31641 = (inst_31609 + (1));
var inst_31609__$1 = inst_31641;
var state_31667__$1 = (function (){var statearr_31789 = state_31667;
(statearr_31789[(7)] = inst_31609__$1);

(statearr_31789[(14)] = inst_31640);

return statearr_31789;
})();
var statearr_31790_34067 = state_31667__$1;
(statearr_31790_34067[(2)] = null);

(statearr_31790_34067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (8))){
var inst_31645 = (state_31667[(2)]);
var state_31667__$1 = state_31667;
var statearr_31800_34068 = state_31667__$1;
(statearr_31800_34068[(2)] = inst_31645);

(statearr_31800_34068[(1)] = (5));


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
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_31805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31805[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_31805[(1)] = (1));

return statearr_31805;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_31667){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_31667);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e31811){var ex__28353__auto__ = e31811;
var statearr_31812_34069 = state_31667;
(statearr_31812_34069[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_31667[(4)]))){
var statearr_31819_34070 = state_31667;
(statearr_31819_34070[(1)] = cljs.core.first((state_31667[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34071 = state_31667;
state_31667 = G__34071;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_31667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_31667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_31823 = f__28968__auto__();
(statearr_31823[(6)] = c__28967__auto___34037);

return statearr_31823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
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
var G__31850 = arguments.length;
switch (G__31850) {
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
var c__28967__auto___34075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_31903){
var state_val_31905 = (state_31903[(1)]);
if((state_val_31905 === (7))){
var inst_31864 = (state_31903[(7)]);
var inst_31863 = (state_31903[(8)]);
var inst_31863__$1 = (state_31903[(2)]);
var inst_31864__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31863__$1,(0),null);
var inst_31865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31863__$1,(1),null);
var inst_31870 = (inst_31864__$1 == null);
var state_31903__$1 = (function (){var statearr_31915 = state_31903;
(statearr_31915[(7)] = inst_31864__$1);

(statearr_31915[(8)] = inst_31863__$1);

(statearr_31915[(9)] = inst_31865);

return statearr_31915;
})();
if(cljs.core.truth_(inst_31870)){
var statearr_31916_34078 = state_31903__$1;
(statearr_31916_34078[(1)] = (8));

} else {
var statearr_31917_34079 = state_31903__$1;
(statearr_31917_34079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (1))){
var inst_31853 = cljs.core.vec(chs);
var inst_31854 = inst_31853;
var state_31903__$1 = (function (){var statearr_31918 = state_31903;
(statearr_31918[(10)] = inst_31854);

return statearr_31918;
})();
var statearr_31919_34080 = state_31903__$1;
(statearr_31919_34080[(2)] = null);

(statearr_31919_34080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (4))){
var inst_31854 = (state_31903[(10)]);
var state_31903__$1 = state_31903;
return cljs.core.async.ioc_alts_BANG_(state_31903__$1,(7),inst_31854);
} else {
if((state_val_31905 === (6))){
var inst_31891 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
var statearr_31929_34081 = state_31903__$1;
(statearr_31929_34081[(2)] = inst_31891);

(statearr_31929_34081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (3))){
var inst_31897 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31903__$1,inst_31897);
} else {
if((state_val_31905 === (2))){
var inst_31854 = (state_31903[(10)]);
var inst_31856 = cljs.core.count(inst_31854);
var inst_31857 = (inst_31856 > (0));
var state_31903__$1 = state_31903;
if(cljs.core.truth_(inst_31857)){
var statearr_31933_34086 = state_31903__$1;
(statearr_31933_34086[(1)] = (4));

} else {
var statearr_31934_34087 = state_31903__$1;
(statearr_31934_34087[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (11))){
var inst_31854 = (state_31903[(10)]);
var inst_31884 = (state_31903[(2)]);
var tmp31931 = inst_31854;
var inst_31854__$1 = tmp31931;
var state_31903__$1 = (function (){var statearr_31935 = state_31903;
(statearr_31935[(11)] = inst_31884);

(statearr_31935[(10)] = inst_31854__$1);

return statearr_31935;
})();
var statearr_31938_34089 = state_31903__$1;
(statearr_31938_34089[(2)] = null);

(statearr_31938_34089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (9))){
var inst_31864 = (state_31903[(7)]);
var state_31903__$1 = state_31903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31903__$1,(11),out,inst_31864);
} else {
if((state_val_31905 === (5))){
var inst_31889 = cljs.core.async.close_BANG_(out);
var state_31903__$1 = state_31903;
var statearr_31965_34094 = state_31903__$1;
(statearr_31965_34094[(2)] = inst_31889);

(statearr_31965_34094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (10))){
var inst_31887 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
var statearr_31966_34103 = state_31903__$1;
(statearr_31966_34103[(2)] = inst_31887);

(statearr_31966_34103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (8))){
var inst_31864 = (state_31903[(7)]);
var inst_31863 = (state_31903[(8)]);
var inst_31854 = (state_31903[(10)]);
var inst_31865 = (state_31903[(9)]);
var inst_31877 = (function (){var cs = inst_31854;
var vec__31859 = inst_31863;
var v = inst_31864;
var c = inst_31865;
return (function (p1__31837_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31837_SHARP_);
});
})();
var inst_31879 = cljs.core.filterv(inst_31877,inst_31854);
var inst_31854__$1 = inst_31879;
var state_31903__$1 = (function (){var statearr_31971 = state_31903;
(statearr_31971[(10)] = inst_31854__$1);

return statearr_31971;
})();
var statearr_31974_34108 = state_31903__$1;
(statearr_31974_34108[(2)] = null);

(statearr_31974_34108[(1)] = (2));


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
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_31976 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31976[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_31976[(1)] = (1));

return statearr_31976;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_31903){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_31903);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e31978){var ex__28353__auto__ = e31978;
var statearr_31979_34109 = state_31903;
(statearr_31979_34109[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_31903[(4)]))){
var statearr_31980_34110 = state_31903;
(statearr_31980_34110[(1)] = cljs.core.first((state_31903[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34111 = state_31903;
state_31903 = G__34111;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_31903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_31903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_31981 = f__28968__auto__();
(statearr_31981[(6)] = c__28967__auto___34075);

return statearr_31981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
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
var G__31992 = arguments.length;
switch (G__31992) {
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
var c__28967__auto___34132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_32030){
var state_val_32031 = (state_32030[(1)]);
if((state_val_32031 === (7))){
var inst_32010 = (state_32030[(7)]);
var inst_32010__$1 = (state_32030[(2)]);
var inst_32011 = (inst_32010__$1 == null);
var inst_32012 = cljs.core.not(inst_32011);
var state_32030__$1 = (function (){var statearr_32038 = state_32030;
(statearr_32038[(7)] = inst_32010__$1);

return statearr_32038;
})();
if(inst_32012){
var statearr_32039_34134 = state_32030__$1;
(statearr_32039_34134[(1)] = (8));

} else {
var statearr_32040_34135 = state_32030__$1;
(statearr_32040_34135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (1))){
var inst_32005 = (0);
var state_32030__$1 = (function (){var statearr_32043 = state_32030;
(statearr_32043[(8)] = inst_32005);

return statearr_32043;
})();
var statearr_32044_34136 = state_32030__$1;
(statearr_32044_34136[(2)] = null);

(statearr_32044_34136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (4))){
var state_32030__$1 = state_32030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32030__$1,(7),ch);
} else {
if((state_val_32031 === (6))){
var inst_32024 = (state_32030[(2)]);
var state_32030__$1 = state_32030;
var statearr_32048_34141 = state_32030__$1;
(statearr_32048_34141[(2)] = inst_32024);

(statearr_32048_34141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (3))){
var inst_32026 = (state_32030[(2)]);
var inst_32027 = cljs.core.async.close_BANG_(out);
var state_32030__$1 = (function (){var statearr_32050 = state_32030;
(statearr_32050[(9)] = inst_32026);

return statearr_32050;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32030__$1,inst_32027);
} else {
if((state_val_32031 === (2))){
var inst_32005 = (state_32030[(8)]);
var inst_32007 = (inst_32005 < n);
var state_32030__$1 = state_32030;
if(cljs.core.truth_(inst_32007)){
var statearr_32053_34146 = state_32030__$1;
(statearr_32053_34146[(1)] = (4));

} else {
var statearr_32054_34147 = state_32030__$1;
(statearr_32054_34147[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (11))){
var inst_32005 = (state_32030[(8)]);
var inst_32015 = (state_32030[(2)]);
var inst_32016 = (inst_32005 + (1));
var inst_32005__$1 = inst_32016;
var state_32030__$1 = (function (){var statearr_32055 = state_32030;
(statearr_32055[(10)] = inst_32015);

(statearr_32055[(8)] = inst_32005__$1);

return statearr_32055;
})();
var statearr_32056_34149 = state_32030__$1;
(statearr_32056_34149[(2)] = null);

(statearr_32056_34149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (9))){
var state_32030__$1 = state_32030;
var statearr_32058_34150 = state_32030__$1;
(statearr_32058_34150[(2)] = null);

(statearr_32058_34150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (5))){
var state_32030__$1 = state_32030;
var statearr_32060_34151 = state_32030__$1;
(statearr_32060_34151[(2)] = null);

(statearr_32060_34151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (10))){
var inst_32020 = (state_32030[(2)]);
var state_32030__$1 = state_32030;
var statearr_32066_34152 = state_32030__$1;
(statearr_32066_34152[(2)] = inst_32020);

(statearr_32066_34152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (8))){
var inst_32010 = (state_32030[(7)]);
var state_32030__$1 = state_32030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32030__$1,(11),out,inst_32010);
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
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_32075 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32075[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_32075[(1)] = (1));

return statearr_32075;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_32030){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_32030);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e32077){var ex__28353__auto__ = e32077;
var statearr_32078_34162 = state_32030;
(statearr_32078_34162[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_32030[(4)]))){
var statearr_32079_34163 = state_32030;
(statearr_32079_34163[(1)] = cljs.core.first((state_32030[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34165 = state_32030;
state_32030 = G__34165;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_32030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_32030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_32080 = f__28968__auto__();
(statearr_32080[(6)] = c__28967__auto___34132);

return statearr_32080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32088 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32088 = (function (f,ch,meta32089){
this.f = f;
this.ch = ch;
this.meta32089 = meta32089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32090,meta32089__$1){
var self__ = this;
var _32090__$1 = this;
return (new cljs.core.async.t_cljs$core$async32088(self__.f,self__.ch,meta32089__$1));
}));

(cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32090){
var self__ = this;
var _32090__$1 = this;
return self__.meta32089;
}));

(cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32101 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32101 = (function (f,ch,meta32089,_,fn1,meta32102){
this.f = f;
this.ch = ch;
this.meta32089 = meta32089;
this._ = _;
this.fn1 = fn1;
this.meta32102 = meta32102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32103,meta32102__$1){
var self__ = this;
var _32103__$1 = this;
return (new cljs.core.async.t_cljs$core$async32101(self__.f,self__.ch,self__.meta32089,self__._,self__.fn1,meta32102__$1));
}));

(cljs.core.async.t_cljs$core$async32101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32103){
var self__ = this;
var _32103__$1 = this;
return self__.meta32102;
}));

(cljs.core.async.t_cljs$core$async32101.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32101.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32101.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32101.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32086_SHARP_){
var G__32107 = (((p1__32086_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32086_SHARP_) : self__.f.call(null,p1__32086_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32107) : f1.call(null,G__32107));
});
}));

(cljs.core.async.t_cljs$core$async32101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32089","meta32089",-1635450389,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32088","cljs.core.async/t_cljs$core$async32088",-858075122,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32102","meta32102",427812466,null)], null);
}));

(cljs.core.async.t_cljs$core$async32101.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32101");

(cljs.core.async.t_cljs$core$async32101.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32101");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32101.
 */
cljs.core.async.__GT_t_cljs$core$async32101 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32101(f__$1,ch__$1,meta32089__$1,___$2,fn1__$1,meta32102){
return (new cljs.core.async.t_cljs$core$async32101(f__$1,ch__$1,meta32089__$1,___$2,fn1__$1,meta32102));
});

}

return (new cljs.core.async.t_cljs$core$async32101(self__.f,self__.ch,self__.meta32089,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32113 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32113) : self__.f.call(null,G__32113));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32089","meta32089",-1635450389,null)], null);
}));

(cljs.core.async.t_cljs$core$async32088.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32088");

(cljs.core.async.t_cljs$core$async32088.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32088");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32088.
 */
cljs.core.async.__GT_t_cljs$core$async32088 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32088(f__$1,ch__$1,meta32089){
return (new cljs.core.async.t_cljs$core$async32088(f__$1,ch__$1,meta32089));
});

}

return (new cljs.core.async.t_cljs$core$async32088(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32119 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32119 = (function (f,ch,meta32120){
this.f = f;
this.ch = ch;
this.meta32120 = meta32120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32121,meta32120__$1){
var self__ = this;
var _32121__$1 = this;
return (new cljs.core.async.t_cljs$core$async32119(self__.f,self__.ch,meta32120__$1));
}));

(cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32121){
var self__ = this;
var _32121__$1 = this;
return self__.meta32120;
}));

(cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32120","meta32120",1638625787,null)], null);
}));

(cljs.core.async.t_cljs$core$async32119.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32119");

(cljs.core.async.t_cljs$core$async32119.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32119");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32119.
 */
cljs.core.async.__GT_t_cljs$core$async32119 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32119(f__$1,ch__$1,meta32120){
return (new cljs.core.async.t_cljs$core$async32119(f__$1,ch__$1,meta32120));
});

}

return (new cljs.core.async.t_cljs$core$async32119(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
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
cljs.core.async.t_cljs$core$async32127 = (function (p,ch,meta32128){
this.p = p;
this.ch = ch;
this.meta32128 = meta32128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32129,meta32128__$1){
var self__ = this;
var _32129__$1 = this;
return (new cljs.core.async.t_cljs$core$async32127(self__.p,self__.ch,meta32128__$1));
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
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32128","meta32128",-1895678342,null)], null);
}));

(cljs.core.async.t_cljs$core$async32127.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32127");

(cljs.core.async.t_cljs$core$async32127.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32127");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32127.
 */
cljs.core.async.__GT_t_cljs$core$async32127 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32127(p__$1,ch__$1,meta32128){
return (new cljs.core.async.t_cljs$core$async32127(p__$1,ch__$1,meta32128));
});

}

return (new cljs.core.async.t_cljs$core$async32127(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32157 = arguments.length;
switch (G__32157) {
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
var c__28967__auto___34249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_32189){
var state_val_32190 = (state_32189[(1)]);
if((state_val_32190 === (7))){
var inst_32184 = (state_32189[(2)]);
var state_32189__$1 = state_32189;
var statearr_32193_34250 = state_32189__$1;
(statearr_32193_34250[(2)] = inst_32184);

(statearr_32193_34250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (1))){
var state_32189__$1 = state_32189;
var statearr_32196_34252 = state_32189__$1;
(statearr_32196_34252[(2)] = null);

(statearr_32196_34252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (4))){
var inst_32167 = (state_32189[(7)]);
var inst_32167__$1 = (state_32189[(2)]);
var inst_32168 = (inst_32167__$1 == null);
var state_32189__$1 = (function (){var statearr_32200 = state_32189;
(statearr_32200[(7)] = inst_32167__$1);

return statearr_32200;
})();
if(cljs.core.truth_(inst_32168)){
var statearr_32201_34256 = state_32189__$1;
(statearr_32201_34256[(1)] = (5));

} else {
var statearr_32202_34257 = state_32189__$1;
(statearr_32202_34257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (6))){
var inst_32167 = (state_32189[(7)]);
var inst_32173 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32167) : p.call(null,inst_32167));
var state_32189__$1 = state_32189;
if(cljs.core.truth_(inst_32173)){
var statearr_32207_34258 = state_32189__$1;
(statearr_32207_34258[(1)] = (8));

} else {
var statearr_32209_34259 = state_32189__$1;
(statearr_32209_34259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (3))){
var inst_32186 = (state_32189[(2)]);
var state_32189__$1 = state_32189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32189__$1,inst_32186);
} else {
if((state_val_32190 === (2))){
var state_32189__$1 = state_32189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32189__$1,(4),ch);
} else {
if((state_val_32190 === (11))){
var inst_32176 = (state_32189[(2)]);
var state_32189__$1 = state_32189;
var statearr_32216_34260 = state_32189__$1;
(statearr_32216_34260[(2)] = inst_32176);

(statearr_32216_34260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (9))){
var state_32189__$1 = state_32189;
var statearr_32217_34262 = state_32189__$1;
(statearr_32217_34262[(2)] = null);

(statearr_32217_34262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (5))){
var inst_32171 = cljs.core.async.close_BANG_(out);
var state_32189__$1 = state_32189;
var statearr_32218_34264 = state_32189__$1;
(statearr_32218_34264[(2)] = inst_32171);

(statearr_32218_34264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (10))){
var inst_32180 = (state_32189[(2)]);
var state_32189__$1 = (function (){var statearr_32220 = state_32189;
(statearr_32220[(8)] = inst_32180);

return statearr_32220;
})();
var statearr_32221_34266 = state_32189__$1;
(statearr_32221_34266[(2)] = null);

(statearr_32221_34266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (8))){
var inst_32167 = (state_32189[(7)]);
var state_32189__$1 = state_32189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32189__$1,(11),out,inst_32167);
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
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_32232 = [null,null,null,null,null,null,null,null,null];
(statearr_32232[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_32232[(1)] = (1));

return statearr_32232;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_32189){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_32189);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e32233){var ex__28353__auto__ = e32233;
var statearr_32234_34267 = state_32189;
(statearr_32234_34267[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_32189[(4)]))){
var statearr_32236_34268 = state_32189;
(statearr_32236_34268[(1)] = cljs.core.first((state_32189[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34269 = state_32189;
state_32189 = G__34269;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_32189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_32189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_32243 = f__28968__auto__();
(statearr_32243[(6)] = c__28967__auto___34249);

return statearr_32243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32266 = arguments.length;
switch (G__32266) {
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
var c__28967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_32365){
var state_val_32367 = (state_32365[(1)]);
if((state_val_32367 === (7))){
var inst_32353 = (state_32365[(2)]);
var state_32365__$1 = state_32365;
var statearr_32382_34275 = state_32365__$1;
(statearr_32382_34275[(2)] = inst_32353);

(statearr_32382_34275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (20))){
var inst_32299 = (state_32365[(7)]);
var inst_32332 = (state_32365[(2)]);
var inst_32335 = cljs.core.next(inst_32299);
var inst_32285 = inst_32335;
var inst_32286 = null;
var inst_32287 = (0);
var inst_32288 = (0);
var state_32365__$1 = (function (){var statearr_32391 = state_32365;
(statearr_32391[(8)] = inst_32332);

(statearr_32391[(9)] = inst_32286);

(statearr_32391[(10)] = inst_32285);

(statearr_32391[(11)] = inst_32287);

(statearr_32391[(12)] = inst_32288);

return statearr_32391;
})();
var statearr_32393_34276 = state_32365__$1;
(statearr_32393_34276[(2)] = null);

(statearr_32393_34276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (1))){
var state_32365__$1 = state_32365;
var statearr_32403_34281 = state_32365__$1;
(statearr_32403_34281[(2)] = null);

(statearr_32403_34281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (4))){
var inst_32274 = (state_32365[(13)]);
var inst_32274__$1 = (state_32365[(2)]);
var inst_32275 = (inst_32274__$1 == null);
var state_32365__$1 = (function (){var statearr_32413 = state_32365;
(statearr_32413[(13)] = inst_32274__$1);

return statearr_32413;
})();
if(cljs.core.truth_(inst_32275)){
var statearr_32414_34282 = state_32365__$1;
(statearr_32414_34282[(1)] = (5));

} else {
var statearr_32415_34283 = state_32365__$1;
(statearr_32415_34283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (15))){
var state_32365__$1 = state_32365;
var statearr_32419_34285 = state_32365__$1;
(statearr_32419_34285[(2)] = null);

(statearr_32419_34285[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (21))){
var state_32365__$1 = state_32365;
var statearr_32420_34286 = state_32365__$1;
(statearr_32420_34286[(2)] = null);

(statearr_32420_34286[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (13))){
var inst_32286 = (state_32365[(9)]);
var inst_32285 = (state_32365[(10)]);
var inst_32287 = (state_32365[(11)]);
var inst_32288 = (state_32365[(12)]);
var inst_32295 = (state_32365[(2)]);
var inst_32296 = (inst_32288 + (1));
var tmp32416 = inst_32286;
var tmp32417 = inst_32285;
var tmp32418 = inst_32287;
var inst_32285__$1 = tmp32417;
var inst_32286__$1 = tmp32416;
var inst_32287__$1 = tmp32418;
var inst_32288__$1 = inst_32296;
var state_32365__$1 = (function (){var statearr_32423 = state_32365;
(statearr_32423[(14)] = inst_32295);

(statearr_32423[(9)] = inst_32286__$1);

(statearr_32423[(10)] = inst_32285__$1);

(statearr_32423[(11)] = inst_32287__$1);

(statearr_32423[(12)] = inst_32288__$1);

return statearr_32423;
})();
var statearr_32424_34288 = state_32365__$1;
(statearr_32424_34288[(2)] = null);

(statearr_32424_34288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (22))){
var state_32365__$1 = state_32365;
var statearr_32427_34289 = state_32365__$1;
(statearr_32427_34289[(2)] = null);

(statearr_32427_34289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (6))){
var inst_32274 = (state_32365[(13)]);
var inst_32283 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32274) : f.call(null,inst_32274));
var inst_32284 = cljs.core.seq(inst_32283);
var inst_32285 = inst_32284;
var inst_32286 = null;
var inst_32287 = (0);
var inst_32288 = (0);
var state_32365__$1 = (function (){var statearr_32428 = state_32365;
(statearr_32428[(9)] = inst_32286);

(statearr_32428[(10)] = inst_32285);

(statearr_32428[(11)] = inst_32287);

(statearr_32428[(12)] = inst_32288);

return statearr_32428;
})();
var statearr_32429_34294 = state_32365__$1;
(statearr_32429_34294[(2)] = null);

(statearr_32429_34294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (17))){
var inst_32299 = (state_32365[(7)]);
var inst_32316 = cljs.core.chunk_first(inst_32299);
var inst_32317 = cljs.core.chunk_rest(inst_32299);
var inst_32324 = cljs.core.count(inst_32316);
var inst_32285 = inst_32317;
var inst_32286 = inst_32316;
var inst_32287 = inst_32324;
var inst_32288 = (0);
var state_32365__$1 = (function (){var statearr_32433 = state_32365;
(statearr_32433[(9)] = inst_32286);

(statearr_32433[(10)] = inst_32285);

(statearr_32433[(11)] = inst_32287);

(statearr_32433[(12)] = inst_32288);

return statearr_32433;
})();
var statearr_32434_34297 = state_32365__$1;
(statearr_32434_34297[(2)] = null);

(statearr_32434_34297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (3))){
var inst_32355 = (state_32365[(2)]);
var state_32365__$1 = state_32365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32365__$1,inst_32355);
} else {
if((state_val_32367 === (12))){
var inst_32343 = (state_32365[(2)]);
var state_32365__$1 = state_32365;
var statearr_32446_34303 = state_32365__$1;
(statearr_32446_34303[(2)] = inst_32343);

(statearr_32446_34303[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (2))){
var state_32365__$1 = state_32365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32365__$1,(4),in$);
} else {
if((state_val_32367 === (23))){
var inst_32351 = (state_32365[(2)]);
var state_32365__$1 = state_32365;
var statearr_32451_34307 = state_32365__$1;
(statearr_32451_34307[(2)] = inst_32351);

(statearr_32451_34307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (19))){
var inst_32338 = (state_32365[(2)]);
var state_32365__$1 = state_32365;
var statearr_32452_34308 = state_32365__$1;
(statearr_32452_34308[(2)] = inst_32338);

(statearr_32452_34308[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (11))){
var inst_32299 = (state_32365[(7)]);
var inst_32285 = (state_32365[(10)]);
var inst_32299__$1 = cljs.core.seq(inst_32285);
var state_32365__$1 = (function (){var statearr_32458 = state_32365;
(statearr_32458[(7)] = inst_32299__$1);

return statearr_32458;
})();
if(inst_32299__$1){
var statearr_32462_34310 = state_32365__$1;
(statearr_32462_34310[(1)] = (14));

} else {
var statearr_32464_34311 = state_32365__$1;
(statearr_32464_34311[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (9))){
var inst_32345 = (state_32365[(2)]);
var inst_32346 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32365__$1 = (function (){var statearr_32466 = state_32365;
(statearr_32466[(15)] = inst_32345);

return statearr_32466;
})();
if(cljs.core.truth_(inst_32346)){
var statearr_32467_34312 = state_32365__$1;
(statearr_32467_34312[(1)] = (21));

} else {
var statearr_32470_34313 = state_32365__$1;
(statearr_32470_34313[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (5))){
var inst_32277 = cljs.core.async.close_BANG_(out);
var state_32365__$1 = state_32365;
var statearr_32473_34314 = state_32365__$1;
(statearr_32473_34314[(2)] = inst_32277);

(statearr_32473_34314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (14))){
var inst_32299 = (state_32365[(7)]);
var inst_32312 = cljs.core.chunked_seq_QMARK_(inst_32299);
var state_32365__$1 = state_32365;
if(inst_32312){
var statearr_32477_34315 = state_32365__$1;
(statearr_32477_34315[(1)] = (17));

} else {
var statearr_32480_34316 = state_32365__$1;
(statearr_32480_34316[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (16))){
var inst_32341 = (state_32365[(2)]);
var state_32365__$1 = state_32365;
var statearr_32481_34321 = state_32365__$1;
(statearr_32481_34321[(2)] = inst_32341);

(statearr_32481_34321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (10))){
var inst_32286 = (state_32365[(9)]);
var inst_32288 = (state_32365[(12)]);
var inst_32293 = cljs.core._nth(inst_32286,inst_32288);
var state_32365__$1 = state_32365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32365__$1,(13),out,inst_32293);
} else {
if((state_val_32367 === (18))){
var inst_32299 = (state_32365[(7)]);
var inst_32330 = cljs.core.first(inst_32299);
var state_32365__$1 = state_32365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32365__$1,(20),out,inst_32330);
} else {
if((state_val_32367 === (8))){
var inst_32287 = (state_32365[(11)]);
var inst_32288 = (state_32365[(12)]);
var inst_32290 = (inst_32288 < inst_32287);
var inst_32291 = inst_32290;
var state_32365__$1 = state_32365;
if(cljs.core.truth_(inst_32291)){
var statearr_32487_34323 = state_32365__$1;
(statearr_32487_34323[(1)] = (10));

} else {
var statearr_32490_34324 = state_32365__$1;
(statearr_32490_34324[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28350__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28350__auto____0 = (function (){
var statearr_32496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32496[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28350__auto__);

(statearr_32496[(1)] = (1));

return statearr_32496;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28350__auto____1 = (function (state_32365){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_32365);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e32499){var ex__28353__auto__ = e32499;
var statearr_32500_34325 = state_32365;
(statearr_32500_34325[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_32365[(4)]))){
var statearr_32501_34326 = state_32365;
(statearr_32501_34326[(1)] = cljs.core.first((state_32365[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34327 = state_32365;
state_32365 = G__34327;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28350__auto__ = function(state_32365){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28350__auto____1.call(this,state_32365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28350__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28350__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_32505 = f__28968__auto__();
(statearr_32505[(6)] = c__28967__auto__);

return statearr_32505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
}));

return c__28967__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32511 = arguments.length;
switch (G__32511) {
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
var G__32519 = arguments.length;
switch (G__32519) {
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
var G__32533 = arguments.length;
switch (G__32533) {
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
var c__28967__auto___34334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_32557){
var state_val_32558 = (state_32557[(1)]);
if((state_val_32558 === (7))){
var inst_32552 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32560_34335 = state_32557__$1;
(statearr_32560_34335[(2)] = inst_32552);

(statearr_32560_34335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (1))){
var inst_32534 = null;
var state_32557__$1 = (function (){var statearr_32561 = state_32557;
(statearr_32561[(7)] = inst_32534);

return statearr_32561;
})();
var statearr_32562_34337 = state_32557__$1;
(statearr_32562_34337[(2)] = null);

(statearr_32562_34337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (4))){
var inst_32537 = (state_32557[(8)]);
var inst_32537__$1 = (state_32557[(2)]);
var inst_32538 = (inst_32537__$1 == null);
var inst_32539 = cljs.core.not(inst_32538);
var state_32557__$1 = (function (){var statearr_32563 = state_32557;
(statearr_32563[(8)] = inst_32537__$1);

return statearr_32563;
})();
if(inst_32539){
var statearr_32565_34341 = state_32557__$1;
(statearr_32565_34341[(1)] = (5));

} else {
var statearr_32566_34342 = state_32557__$1;
(statearr_32566_34342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (6))){
var state_32557__$1 = state_32557;
var statearr_32568_34346 = state_32557__$1;
(statearr_32568_34346[(2)] = null);

(statearr_32568_34346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (3))){
var inst_32554 = (state_32557[(2)]);
var inst_32555 = cljs.core.async.close_BANG_(out);
var state_32557__$1 = (function (){var statearr_32571 = state_32557;
(statearr_32571[(9)] = inst_32554);

return statearr_32571;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32557__$1,inst_32555);
} else {
if((state_val_32558 === (2))){
var state_32557__$1 = state_32557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32557__$1,(4),ch);
} else {
if((state_val_32558 === (11))){
var inst_32537 = (state_32557[(8)]);
var inst_32546 = (state_32557[(2)]);
var inst_32534 = inst_32537;
var state_32557__$1 = (function (){var statearr_32574 = state_32557;
(statearr_32574[(7)] = inst_32534);

(statearr_32574[(10)] = inst_32546);

return statearr_32574;
})();
var statearr_32576_34349 = state_32557__$1;
(statearr_32576_34349[(2)] = null);

(statearr_32576_34349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (9))){
var inst_32537 = (state_32557[(8)]);
var state_32557__$1 = state_32557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32557__$1,(11),out,inst_32537);
} else {
if((state_val_32558 === (5))){
var inst_32537 = (state_32557[(8)]);
var inst_32534 = (state_32557[(7)]);
var inst_32541 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32537,inst_32534);
var state_32557__$1 = state_32557;
if(inst_32541){
var statearr_32580_34353 = state_32557__$1;
(statearr_32580_34353[(1)] = (8));

} else {
var statearr_32581_34355 = state_32557__$1;
(statearr_32581_34355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (10))){
var inst_32549 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32582_34356 = state_32557__$1;
(statearr_32582_34356[(2)] = inst_32549);

(statearr_32582_34356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (8))){
var inst_32534 = (state_32557[(7)]);
var tmp32577 = inst_32534;
var inst_32534__$1 = tmp32577;
var state_32557__$1 = (function (){var statearr_32583 = state_32557;
(statearr_32583[(7)] = inst_32534__$1);

return statearr_32583;
})();
var statearr_32584_34357 = state_32557__$1;
(statearr_32584_34357[(2)] = null);

(statearr_32584_34357[(1)] = (2));


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
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_32585 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32585[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_32585[(1)] = (1));

return statearr_32585;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_32557){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_32557);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e32586){var ex__28353__auto__ = e32586;
var statearr_32587_34359 = state_32557;
(statearr_32587_34359[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_32557[(4)]))){
var statearr_32588_34361 = state_32557;
(statearr_32588_34361[(1)] = cljs.core.first((state_32557[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34362 = state_32557;
state_32557 = G__34362;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_32557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_32557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_32589 = f__28968__auto__();
(statearr_32589[(6)] = c__28967__auto___34334);

return statearr_32589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32594 = arguments.length;
switch (G__32594) {
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
var c__28967__auto___34367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_32645){
var state_val_32646 = (state_32645[(1)]);
if((state_val_32646 === (7))){
var inst_32638 = (state_32645[(2)]);
var state_32645__$1 = state_32645;
var statearr_32660_34368 = state_32645__$1;
(statearr_32660_34368[(2)] = inst_32638);

(statearr_32660_34368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (1))){
var inst_32595 = (new Array(n));
var inst_32596 = inst_32595;
var inst_32597 = (0);
var state_32645__$1 = (function (){var statearr_32667 = state_32645;
(statearr_32667[(7)] = inst_32597);

(statearr_32667[(8)] = inst_32596);

return statearr_32667;
})();
var statearr_32669_34369 = state_32645__$1;
(statearr_32669_34369[(2)] = null);

(statearr_32669_34369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (4))){
var inst_32600 = (state_32645[(9)]);
var inst_32600__$1 = (state_32645[(2)]);
var inst_32601 = (inst_32600__$1 == null);
var inst_32602 = cljs.core.not(inst_32601);
var state_32645__$1 = (function (){var statearr_32670 = state_32645;
(statearr_32670[(9)] = inst_32600__$1);

return statearr_32670;
})();
if(inst_32602){
var statearr_32674_34372 = state_32645__$1;
(statearr_32674_34372[(1)] = (5));

} else {
var statearr_32675_34373 = state_32645__$1;
(statearr_32675_34373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (15))){
var inst_32632 = (state_32645[(2)]);
var state_32645__$1 = state_32645;
var statearr_32683_34374 = state_32645__$1;
(statearr_32683_34374[(2)] = inst_32632);

(statearr_32683_34374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (13))){
var state_32645__$1 = state_32645;
var statearr_32687_34375 = state_32645__$1;
(statearr_32687_34375[(2)] = null);

(statearr_32687_34375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (6))){
var inst_32597 = (state_32645[(7)]);
var inst_32625 = (inst_32597 > (0));
var state_32645__$1 = state_32645;
if(cljs.core.truth_(inst_32625)){
var statearr_32692_34376 = state_32645__$1;
(statearr_32692_34376[(1)] = (12));

} else {
var statearr_32693_34377 = state_32645__$1;
(statearr_32693_34377[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (3))){
var inst_32640 = (state_32645[(2)]);
var state_32645__$1 = state_32645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32645__$1,inst_32640);
} else {
if((state_val_32646 === (12))){
var inst_32596 = (state_32645[(8)]);
var inst_32630 = cljs.core.vec(inst_32596);
var state_32645__$1 = state_32645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32645__$1,(15),out,inst_32630);
} else {
if((state_val_32646 === (2))){
var state_32645__$1 = state_32645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32645__$1,(4),ch);
} else {
if((state_val_32646 === (11))){
var inst_32615 = (state_32645[(2)]);
var inst_32617 = (new Array(n));
var inst_32596 = inst_32617;
var inst_32597 = (0);
var state_32645__$1 = (function (){var statearr_32706 = state_32645;
(statearr_32706[(7)] = inst_32597);

(statearr_32706[(10)] = inst_32615);

(statearr_32706[(8)] = inst_32596);

return statearr_32706;
})();
var statearr_32708_34378 = state_32645__$1;
(statearr_32708_34378[(2)] = null);

(statearr_32708_34378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (9))){
var inst_32596 = (state_32645[(8)]);
var inst_32613 = cljs.core.vec(inst_32596);
var state_32645__$1 = state_32645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32645__$1,(11),out,inst_32613);
} else {
if((state_val_32646 === (5))){
var inst_32597 = (state_32645[(7)]);
var inst_32605 = (state_32645[(11)]);
var inst_32596 = (state_32645[(8)]);
var inst_32600 = (state_32645[(9)]);
var inst_32604 = (inst_32596[inst_32597] = inst_32600);
var inst_32605__$1 = (inst_32597 + (1));
var inst_32606 = (inst_32605__$1 < n);
var state_32645__$1 = (function (){var statearr_32709 = state_32645;
(statearr_32709[(12)] = inst_32604);

(statearr_32709[(11)] = inst_32605__$1);

return statearr_32709;
})();
if(cljs.core.truth_(inst_32606)){
var statearr_32710_34379 = state_32645__$1;
(statearr_32710_34379[(1)] = (8));

} else {
var statearr_32712_34380 = state_32645__$1;
(statearr_32712_34380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (14))){
var inst_32635 = (state_32645[(2)]);
var inst_32636 = cljs.core.async.close_BANG_(out);
var state_32645__$1 = (function (){var statearr_32720 = state_32645;
(statearr_32720[(13)] = inst_32635);

return statearr_32720;
})();
var statearr_32721_34381 = state_32645__$1;
(statearr_32721_34381[(2)] = inst_32636);

(statearr_32721_34381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (10))){
var inst_32623 = (state_32645[(2)]);
var state_32645__$1 = state_32645;
var statearr_32723_34382 = state_32645__$1;
(statearr_32723_34382[(2)] = inst_32623);

(statearr_32723_34382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (8))){
var inst_32605 = (state_32645[(11)]);
var inst_32596 = (state_32645[(8)]);
var tmp32716 = inst_32596;
var inst_32596__$1 = tmp32716;
var inst_32597 = inst_32605;
var state_32645__$1 = (function (){var statearr_32727 = state_32645;
(statearr_32727[(7)] = inst_32597);

(statearr_32727[(8)] = inst_32596__$1);

return statearr_32727;
})();
var statearr_32729_34383 = state_32645__$1;
(statearr_32729_34383[(2)] = null);

(statearr_32729_34383[(1)] = (2));


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
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_32731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32731[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_32731[(1)] = (1));

return statearr_32731;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_32645){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_32645);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e32733){var ex__28353__auto__ = e32733;
var statearr_32737_34385 = state_32645;
(statearr_32737_34385[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_32645[(4)]))){
var statearr_32742_34386 = state_32645;
(statearr_32742_34386[(1)] = cljs.core.first((state_32645[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34387 = state_32645;
state_32645 = G__34387;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_32645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_32645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_32746 = f__28968__auto__();
(statearr_32746[(6)] = c__28967__auto___34367);

return statearr_32746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32752 = arguments.length;
switch (G__32752) {
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
var c__28967__auto___34394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_32837){
var state_val_32838 = (state_32837[(1)]);
if((state_val_32838 === (7))){
var inst_32825 = (state_32837[(2)]);
var state_32837__$1 = state_32837;
var statearr_32865_34396 = state_32837__$1;
(statearr_32865_34396[(2)] = inst_32825);

(statearr_32865_34396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (1))){
var inst_32770 = [];
var inst_32771 = inst_32770;
var inst_32772 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32837__$1 = (function (){var statearr_32867 = state_32837;
(statearr_32867[(7)] = inst_32771);

(statearr_32867[(8)] = inst_32772);

return statearr_32867;
})();
var statearr_32868_34401 = state_32837__$1;
(statearr_32868_34401[(2)] = null);

(statearr_32868_34401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (4))){
var inst_32775 = (state_32837[(9)]);
var inst_32775__$1 = (state_32837[(2)]);
var inst_32777 = (inst_32775__$1 == null);
var inst_32778 = cljs.core.not(inst_32777);
var state_32837__$1 = (function (){var statearr_32870 = state_32837;
(statearr_32870[(9)] = inst_32775__$1);

return statearr_32870;
})();
if(inst_32778){
var statearr_32874_34404 = state_32837__$1;
(statearr_32874_34404[(1)] = (5));

} else {
var statearr_32875_34405 = state_32837__$1;
(statearr_32875_34405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (15))){
var inst_32771 = (state_32837[(7)]);
var inst_32816 = cljs.core.vec(inst_32771);
var state_32837__$1 = state_32837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32837__$1,(18),out,inst_32816);
} else {
if((state_val_32838 === (13))){
var inst_32806 = (state_32837[(2)]);
var state_32837__$1 = state_32837;
var statearr_32876_34409 = state_32837__$1;
(statearr_32876_34409[(2)] = inst_32806);

(statearr_32876_34409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (6))){
var inst_32771 = (state_32837[(7)]);
var inst_32812 = inst_32771.length;
var inst_32813 = (inst_32812 > (0));
var state_32837__$1 = state_32837;
if(cljs.core.truth_(inst_32813)){
var statearr_32878_34411 = state_32837__$1;
(statearr_32878_34411[(1)] = (15));

} else {
var statearr_32881_34412 = state_32837__$1;
(statearr_32881_34412[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (17))){
var inst_32822 = (state_32837[(2)]);
var inst_32823 = cljs.core.async.close_BANG_(out);
var state_32837__$1 = (function (){var statearr_32885 = state_32837;
(statearr_32885[(10)] = inst_32822);

return statearr_32885;
})();
var statearr_32888_34414 = state_32837__$1;
(statearr_32888_34414[(2)] = inst_32823);

(statearr_32888_34414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (3))){
var inst_32828 = (state_32837[(2)]);
var state_32837__$1 = state_32837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32837__$1,inst_32828);
} else {
if((state_val_32838 === (12))){
var inst_32771 = (state_32837[(7)]);
var inst_32796 = cljs.core.vec(inst_32771);
var state_32837__$1 = state_32837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32837__$1,(14),out,inst_32796);
} else {
if((state_val_32838 === (2))){
var state_32837__$1 = state_32837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32837__$1,(4),ch);
} else {
if((state_val_32838 === (11))){
var inst_32771 = (state_32837[(7)]);
var inst_32780 = (state_32837[(11)]);
var inst_32775 = (state_32837[(9)]);
var inst_32788 = inst_32771.push(inst_32775);
var tmp32891 = inst_32771;
var inst_32771__$1 = tmp32891;
var inst_32772 = inst_32780;
var state_32837__$1 = (function (){var statearr_32899 = state_32837;
(statearr_32899[(7)] = inst_32771__$1);

(statearr_32899[(12)] = inst_32788);

(statearr_32899[(8)] = inst_32772);

return statearr_32899;
})();
var statearr_32900_34416 = state_32837__$1;
(statearr_32900_34416[(2)] = null);

(statearr_32900_34416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (9))){
var inst_32772 = (state_32837[(8)]);
var inst_32784 = cljs.core.keyword_identical_QMARK_(inst_32772,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32837__$1 = state_32837;
var statearr_32914_34418 = state_32837__$1;
(statearr_32914_34418[(2)] = inst_32784);

(statearr_32914_34418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (5))){
var inst_32780 = (state_32837[(11)]);
var inst_32781 = (state_32837[(13)]);
var inst_32772 = (state_32837[(8)]);
var inst_32775 = (state_32837[(9)]);
var inst_32780__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32775) : f.call(null,inst_32775));
var inst_32781__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32780__$1,inst_32772);
var state_32837__$1 = (function (){var statearr_32939 = state_32837;
(statearr_32939[(11)] = inst_32780__$1);

(statearr_32939[(13)] = inst_32781__$1);

return statearr_32939;
})();
if(inst_32781__$1){
var statearr_32941_34420 = state_32837__$1;
(statearr_32941_34420[(1)] = (8));

} else {
var statearr_32942_34421 = state_32837__$1;
(statearr_32942_34421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (14))){
var inst_32780 = (state_32837[(11)]);
var inst_32775 = (state_32837[(9)]);
var inst_32798 = (state_32837[(2)]);
var inst_32802 = [];
var inst_32803 = inst_32802.push(inst_32775);
var inst_32771 = inst_32802;
var inst_32772 = inst_32780;
var state_32837__$1 = (function (){var statearr_32946 = state_32837;
(statearr_32946[(7)] = inst_32771);

(statearr_32946[(14)] = inst_32803);

(statearr_32946[(15)] = inst_32798);

(statearr_32946[(8)] = inst_32772);

return statearr_32946;
})();
var statearr_32947_34423 = state_32837__$1;
(statearr_32947_34423[(2)] = null);

(statearr_32947_34423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (16))){
var state_32837__$1 = state_32837;
var statearr_32954_34425 = state_32837__$1;
(statearr_32954_34425[(2)] = null);

(statearr_32954_34425[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (10))){
var inst_32786 = (state_32837[(2)]);
var state_32837__$1 = state_32837;
if(cljs.core.truth_(inst_32786)){
var statearr_32955_34426 = state_32837__$1;
(statearr_32955_34426[(1)] = (11));

} else {
var statearr_32956_34428 = state_32837__$1;
(statearr_32956_34428[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (18))){
var inst_32818 = (state_32837[(2)]);
var state_32837__$1 = state_32837;
var statearr_32959_34430 = state_32837__$1;
(statearr_32959_34430[(2)] = inst_32818);

(statearr_32959_34430[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (8))){
var inst_32781 = (state_32837[(13)]);
var state_32837__$1 = state_32837;
var statearr_32961_34431 = state_32837__$1;
(statearr_32961_34431[(2)] = inst_32781);

(statearr_32961_34431[(1)] = (10));


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
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_32965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32965[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_32965[(1)] = (1));

return statearr_32965;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_32837){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_32837);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e32967){var ex__28353__auto__ = e32967;
var statearr_32968_34437 = state_32837;
(statearr_32968_34437[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_32837[(4)]))){
var statearr_32971_34438 = state_32837;
(statearr_32971_34438[(1)] = cljs.core.first((state_32837[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34439 = state_32837;
state_32837 = G__34439;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_32837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_32837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_32972 = f__28968__auto__();
(statearr_32972[(6)] = c__28967__auto___34394);

return statearr_32972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
