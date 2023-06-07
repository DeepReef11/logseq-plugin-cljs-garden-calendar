goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35338 = arguments.length;
switch (G__35338) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35362 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35362 = (function (f,blockable,meta35363){
this.f = f;
this.blockable = blockable;
this.meta35363 = meta35363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35364,meta35363__$1){
var self__ = this;
var _35364__$1 = this;
return (new cljs.core.async.t_cljs$core$async35362(self__.f,self__.blockable,meta35363__$1));
}));

(cljs.core.async.t_cljs$core$async35362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35364){
var self__ = this;
var _35364__$1 = this;
return self__.meta35363;
}));

(cljs.core.async.t_cljs$core$async35362.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35362.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35362.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async35362.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async35362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35363","meta35363",-1414275677,null)], null);
}));

(cljs.core.async.t_cljs$core$async35362.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35362");

(cljs.core.async.t_cljs$core$async35362.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async35362");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35362.
 */
cljs.core.async.__GT_t_cljs$core$async35362 = (function cljs$core$async$__GT_t_cljs$core$async35362(f__$1,blockable__$1,meta35363){
return (new cljs.core.async.t_cljs$core$async35362(f__$1,blockable__$1,meta35363));
});

}

return (new cljs.core.async.t_cljs$core$async35362(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35423 = arguments.length;
switch (G__35423) {
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
var G__35454 = arguments.length;
switch (G__35454) {
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
var G__35504 = arguments.length;
switch (G__35504) {
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
var val_39224 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39224) : fn1.call(null,val_39224));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39224) : fn1.call(null,val_39224));
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
var G__35556 = arguments.length;
switch (G__35556) {
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
var n__4741__auto___39241 = n;
var x_39242 = (0);
while(true){
if((x_39242 < n__4741__auto___39241)){
(a[x_39242] = x_39242);

var G__39243 = (x_39242 + (1));
x_39242 = G__39243;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35587 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35587 = (function (flag,meta35588){
this.flag = flag;
this.meta35588 = meta35588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35589,meta35588__$1){
var self__ = this;
var _35589__$1 = this;
return (new cljs.core.async.t_cljs$core$async35587(self__.flag,meta35588__$1));
}));

(cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35589){
var self__ = this;
var _35589__$1 = this;
return self__.meta35588;
}));

(cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async35587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35588","meta35588",1931943279,null)], null);
}));

(cljs.core.async.t_cljs$core$async35587.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35587");

(cljs.core.async.t_cljs$core$async35587.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async35587");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35587.
 */
cljs.core.async.__GT_t_cljs$core$async35587 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35587(flag__$1,meta35588){
return (new cljs.core.async.t_cljs$core$async35587(flag__$1,meta35588));
});

}

return (new cljs.core.async.t_cljs$core$async35587(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35608 = (function (flag,cb,meta35609){
this.flag = flag;
this.cb = cb;
this.meta35609 = meta35609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35610,meta35609__$1){
var self__ = this;
var _35610__$1 = this;
return (new cljs.core.async.t_cljs$core$async35608(self__.flag,self__.cb,meta35609__$1));
}));

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35610){
var self__ = this;
var _35610__$1 = this;
return self__.meta35609;
}));

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async35608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35609","meta35609",461725756,null)], null);
}));

(cljs.core.async.t_cljs$core$async35608.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35608");

(cljs.core.async.t_cljs$core$async35608.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async35608");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35608.
 */
cljs.core.async.__GT_t_cljs$core$async35608 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35608(flag__$1,cb__$1,meta35609){
return (new cljs.core.async.t_cljs$core$async35608(flag__$1,cb__$1,meta35609));
});

}

return (new cljs.core.async.t_cljs$core$async35608(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35620_SHARP_){
var G__35627 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35620_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35627) : fret.call(null,G__35627));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35621_SHARP_){
var G__35631 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35621_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35631) : fret.call(null,G__35631));
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
var G__39254 = (i + (1));
i = G__39254;
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
var len__4864__auto___39259 = arguments.length;
var i__4865__auto___39260 = (0);
while(true){
if((i__4865__auto___39260 < len__4864__auto___39259)){
args__4870__auto__.push((arguments[i__4865__auto___39260]));

var G__39263 = (i__4865__auto___39260 + (1));
i__4865__auto___39260 = G__39263;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35637){
var map__35638 = p__35637;
var map__35638__$1 = cljs.core.__destructure_map(map__35638);
var opts = map__35638__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35635){
var G__35636 = cljs.core.first(seq35635);
var seq35635__$1 = cljs.core.next(seq35635);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35636,seq35635__$1);
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
var G__35649 = arguments.length;
switch (G__35649) {
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
var c__35197__auto___39284 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_35712){
var state_val_35713 = (state_35712[(1)]);
if((state_val_35713 === (7))){
var inst_35707 = (state_35712[(2)]);
var state_35712__$1 = state_35712;
var statearr_35718_39285 = state_35712__$1;
(statearr_35718_39285[(2)] = inst_35707);

(statearr_35718_39285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (1))){
var state_35712__$1 = state_35712;
var statearr_35719_39287 = state_35712__$1;
(statearr_35719_39287[(2)] = null);

(statearr_35719_39287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (4))){
var inst_35681 = (state_35712[(7)]);
var inst_35681__$1 = (state_35712[(2)]);
var inst_35683 = (inst_35681__$1 == null);
var state_35712__$1 = (function (){var statearr_35720 = state_35712;
(statearr_35720[(7)] = inst_35681__$1);

return statearr_35720;
})();
if(cljs.core.truth_(inst_35683)){
var statearr_35721_39290 = state_35712__$1;
(statearr_35721_39290[(1)] = (5));

} else {
var statearr_35722_39291 = state_35712__$1;
(statearr_35722_39291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (13))){
var state_35712__$1 = state_35712;
var statearr_35726_39292 = state_35712__$1;
(statearr_35726_39292[(2)] = null);

(statearr_35726_39292[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (6))){
var inst_35681 = (state_35712[(7)]);
var state_35712__$1 = state_35712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35712__$1,(11),to,inst_35681);
} else {
if((state_val_35713 === (3))){
var inst_35710 = (state_35712[(2)]);
var state_35712__$1 = state_35712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35712__$1,inst_35710);
} else {
if((state_val_35713 === (12))){
var state_35712__$1 = state_35712;
var statearr_35734_39294 = state_35712__$1;
(statearr_35734_39294[(2)] = null);

(statearr_35734_39294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (2))){
var state_35712__$1 = state_35712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35712__$1,(4),from);
} else {
if((state_val_35713 === (11))){
var inst_35695 = (state_35712[(2)]);
var state_35712__$1 = state_35712;
if(cljs.core.truth_(inst_35695)){
var statearr_35735_39297 = state_35712__$1;
(statearr_35735_39297[(1)] = (12));

} else {
var statearr_35736_39298 = state_35712__$1;
(statearr_35736_39298[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (9))){
var state_35712__$1 = state_35712;
var statearr_35738_39299 = state_35712__$1;
(statearr_35738_39299[(2)] = null);

(statearr_35738_39299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (5))){
var state_35712__$1 = state_35712;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35740_39301 = state_35712__$1;
(statearr_35740_39301[(1)] = (8));

} else {
var statearr_35741_39302 = state_35712__$1;
(statearr_35741_39302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (14))){
var inst_35705 = (state_35712[(2)]);
var state_35712__$1 = state_35712;
var statearr_35742_39305 = state_35712__$1;
(statearr_35742_39305[(2)] = inst_35705);

(statearr_35742_39305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (10))){
var inst_35690 = (state_35712[(2)]);
var state_35712__$1 = state_35712;
var statearr_35743_39306 = state_35712__$1;
(statearr_35743_39306[(2)] = inst_35690);

(statearr_35743_39306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (8))){
var inst_35686 = cljs.core.async.close_BANG_(to);
var state_35712__$1 = state_35712;
var statearr_35745_39307 = state_35712__$1;
(statearr_35745_39307[(2)] = inst_35686);

(statearr_35745_39307[(1)] = (10));


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
var cljs$core$async$state_machine__34532__auto__ = null;
var cljs$core$async$state_machine__34532__auto____0 = (function (){
var statearr_35748 = [null,null,null,null,null,null,null,null];
(statearr_35748[(0)] = cljs$core$async$state_machine__34532__auto__);

(statearr_35748[(1)] = (1));

return statearr_35748;
});
var cljs$core$async$state_machine__34532__auto____1 = (function (state_35712){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_35712);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e35749){var ex__34535__auto__ = e35749;
var statearr_35752_39311 = state_35712;
(statearr_35752_39311[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_35712[(4)]))){
var statearr_35753_39312 = state_35712;
(statearr_35753_39312[(1)] = cljs.core.first((state_35712[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39314 = state_35712;
state_35712 = G__39314;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$state_machine__34532__auto__ = function(state_35712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34532__auto____1.call(this,state_35712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34532__auto____0;
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34532__auto____1;
return cljs$core$async$state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_35757 = f__35199__auto__();
(statearr_35757[(6)] = c__35197__auto___39284);

return statearr_35757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
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
var process = (function (p__35765){
var vec__35766 = p__35765;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35766,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35766,(1),null);
var job = vec__35766;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__35197__auto___39318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_35773){
var state_val_35774 = (state_35773[(1)]);
if((state_val_35774 === (1))){
var state_35773__$1 = state_35773;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35773__$1,(2),res,v);
} else {
if((state_val_35774 === (2))){
var inst_35770 = (state_35773[(2)]);
var inst_35771 = cljs.core.async.close_BANG_(res);
var state_35773__$1 = (function (){var statearr_35779 = state_35773;
(statearr_35779[(7)] = inst_35770);

return statearr_35779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35773__$1,inst_35771);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____0 = (function (){
var statearr_35780 = [null,null,null,null,null,null,null,null];
(statearr_35780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__);

(statearr_35780[(1)] = (1));

return statearr_35780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____1 = (function (state_35773){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_35773);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e35782){var ex__34535__auto__ = e35782;
var statearr_35783_39328 = state_35773;
(statearr_35783_39328[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_35773[(4)]))){
var statearr_35784_39329 = state_35773;
(statearr_35784_39329[(1)] = cljs.core.first((state_35773[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39330 = state_35773;
state_35773 = G__39330;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__ = function(state_35773){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____1.call(this,state_35773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_35786 = f__35199__auto__();
(statearr_35786[(6)] = c__35197__auto___39318);

return statearr_35786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__35787){
var vec__35788 = p__35787;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35788,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35788,(1),null);
var job = vec__35788;
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
var n__4741__auto___39340 = n;
var __39342 = (0);
while(true){
if((__39342 < n__4741__auto___39340)){
var G__35791_39344 = type;
var G__35791_39345__$1 = (((G__35791_39344 instanceof cljs.core.Keyword))?G__35791_39344.fqn:null);
switch (G__35791_39345__$1) {
case "compute":
var c__35197__auto___39348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39342,c__35197__auto___39348,G__35791_39344,G__35791_39345__$1,n__4741__auto___39340,jobs,results,process,async){
return (function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = ((function (__39342,c__35197__auto___39348,G__35791_39344,G__35791_39345__$1,n__4741__auto___39340,jobs,results,process,async){
return (function (state_35823){
var state_val_35824 = (state_35823[(1)]);
if((state_val_35824 === (1))){
var state_35823__$1 = state_35823;
var statearr_35840_39352 = state_35823__$1;
(statearr_35840_39352[(2)] = null);

(statearr_35840_39352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35824 === (2))){
var state_35823__$1 = state_35823;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35823__$1,(4),jobs);
} else {
if((state_val_35824 === (3))){
var inst_35818 = (state_35823[(2)]);
var state_35823__$1 = state_35823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35823__$1,inst_35818);
} else {
if((state_val_35824 === (4))){
var inst_35804 = (state_35823[(2)]);
var inst_35808 = process(inst_35804);
var state_35823__$1 = state_35823;
if(cljs.core.truth_(inst_35808)){
var statearr_35850_39356 = state_35823__$1;
(statearr_35850_39356[(1)] = (5));

} else {
var statearr_35851_39357 = state_35823__$1;
(statearr_35851_39357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35824 === (5))){
var state_35823__$1 = state_35823;
var statearr_35852_39358 = state_35823__$1;
(statearr_35852_39358[(2)] = null);

(statearr_35852_39358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35824 === (6))){
var state_35823__$1 = state_35823;
var statearr_35855_39360 = state_35823__$1;
(statearr_35855_39360[(2)] = null);

(statearr_35855_39360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35824 === (7))){
var inst_35816 = (state_35823[(2)]);
var state_35823__$1 = state_35823;
var statearr_35856_39363 = state_35823__$1;
(statearr_35856_39363[(2)] = inst_35816);

(statearr_35856_39363[(1)] = (3));


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
});})(__39342,c__35197__auto___39348,G__35791_39344,G__35791_39345__$1,n__4741__auto___39340,jobs,results,process,async))
;
return ((function (__39342,switch__34531__auto__,c__35197__auto___39348,G__35791_39344,G__35791_39345__$1,n__4741__auto___39340,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____0 = (function (){
var statearr_35858 = [null,null,null,null,null,null,null];
(statearr_35858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__);

(statearr_35858[(1)] = (1));

return statearr_35858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____1 = (function (state_35823){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_35823);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e35860){var ex__34535__auto__ = e35860;
var statearr_35864_39373 = state_35823;
(statearr_35864_39373[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_35823[(4)]))){
var statearr_35866_39375 = state_35823;
(statearr_35866_39375[(1)] = cljs.core.first((state_35823[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39377 = state_35823;
state_35823 = G__39377;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__ = function(state_35823){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____1.call(this,state_35823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__;
})()
;})(__39342,switch__34531__auto__,c__35197__auto___39348,G__35791_39344,G__35791_39345__$1,n__4741__auto___39340,jobs,results,process,async))
})();
var state__35200__auto__ = (function (){var statearr_35868 = f__35199__auto__();
(statearr_35868[(6)] = c__35197__auto___39348);

return statearr_35868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
});})(__39342,c__35197__auto___39348,G__35791_39344,G__35791_39345__$1,n__4741__auto___39340,jobs,results,process,async))
);


break;
case "async":
var c__35197__auto___39381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39342,c__35197__auto___39381,G__35791_39344,G__35791_39345__$1,n__4741__auto___39340,jobs,results,process,async){
return (function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = ((function (__39342,c__35197__auto___39381,G__35791_39344,G__35791_39345__$1,n__4741__auto___39340,jobs,results,process,async){
return (function (state_35883){
var state_val_35884 = (state_35883[(1)]);
if((state_val_35884 === (1))){
var state_35883__$1 = state_35883;
var statearr_35888_39382 = state_35883__$1;
(statearr_35888_39382[(2)] = null);

(statearr_35888_39382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (2))){
var state_35883__$1 = state_35883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35883__$1,(4),jobs);
} else {
if((state_val_35884 === (3))){
var inst_35880 = (state_35883[(2)]);
var state_35883__$1 = state_35883;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35883__$1,inst_35880);
} else {
if((state_val_35884 === (4))){
var inst_35871 = (state_35883[(2)]);
var inst_35872 = async(inst_35871);
var state_35883__$1 = state_35883;
if(cljs.core.truth_(inst_35872)){
var statearr_35898_39383 = state_35883__$1;
(statearr_35898_39383[(1)] = (5));

} else {
var statearr_35899_39384 = state_35883__$1;
(statearr_35899_39384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (5))){
var state_35883__$1 = state_35883;
var statearr_35900_39389 = state_35883__$1;
(statearr_35900_39389[(2)] = null);

(statearr_35900_39389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (6))){
var state_35883__$1 = state_35883;
var statearr_35901_39390 = state_35883__$1;
(statearr_35901_39390[(2)] = null);

(statearr_35901_39390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (7))){
var inst_35878 = (state_35883[(2)]);
var state_35883__$1 = state_35883;
var statearr_35902_39392 = state_35883__$1;
(statearr_35902_39392[(2)] = inst_35878);

(statearr_35902_39392[(1)] = (3));


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
});})(__39342,c__35197__auto___39381,G__35791_39344,G__35791_39345__$1,n__4741__auto___39340,jobs,results,process,async))
;
return ((function (__39342,switch__34531__auto__,c__35197__auto___39381,G__35791_39344,G__35791_39345__$1,n__4741__auto___39340,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____0 = (function (){
var statearr_35904 = [null,null,null,null,null,null,null];
(statearr_35904[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__);

(statearr_35904[(1)] = (1));

return statearr_35904;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____1 = (function (state_35883){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_35883);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e35905){var ex__34535__auto__ = e35905;
var statearr_35906_39396 = state_35883;
(statearr_35906_39396[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_35883[(4)]))){
var statearr_35907_39399 = state_35883;
(statearr_35907_39399[(1)] = cljs.core.first((state_35883[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39401 = state_35883;
state_35883 = G__39401;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__ = function(state_35883){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____1.call(this,state_35883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__;
})()
;})(__39342,switch__34531__auto__,c__35197__auto___39381,G__35791_39344,G__35791_39345__$1,n__4741__auto___39340,jobs,results,process,async))
})();
var state__35200__auto__ = (function (){var statearr_35914 = f__35199__auto__();
(statearr_35914[(6)] = c__35197__auto___39381);

return statearr_35914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
});})(__39342,c__35197__auto___39381,G__35791_39344,G__35791_39345__$1,n__4741__auto___39340,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35791_39345__$1)].join('')));

}

var G__39404 = (__39342 + (1));
__39342 = G__39404;
continue;
} else {
}
break;
}

var c__35197__auto___39406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_35945){
var state_val_35947 = (state_35945[(1)]);
if((state_val_35947 === (7))){
var inst_35940 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35948_39408 = state_35945__$1;
(statearr_35948_39408[(2)] = inst_35940);

(statearr_35948_39408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (1))){
var state_35945__$1 = state_35945;
var statearr_35949_39409 = state_35945__$1;
(statearr_35949_39409[(2)] = null);

(statearr_35949_39409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (4))){
var inst_35918 = (state_35945[(7)]);
var inst_35918__$1 = (state_35945[(2)]);
var inst_35919 = (inst_35918__$1 == null);
var state_35945__$1 = (function (){var statearr_35953 = state_35945;
(statearr_35953[(7)] = inst_35918__$1);

return statearr_35953;
})();
if(cljs.core.truth_(inst_35919)){
var statearr_35955_39414 = state_35945__$1;
(statearr_35955_39414[(1)] = (5));

} else {
var statearr_35956_39415 = state_35945__$1;
(statearr_35956_39415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (6))){
var inst_35918 = (state_35945[(7)]);
var inst_35923 = (state_35945[(8)]);
var inst_35923__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_35924 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35931 = [inst_35918,inst_35923__$1];
var inst_35932 = (new cljs.core.PersistentVector(null,2,(5),inst_35924,inst_35931,null));
var state_35945__$1 = (function (){var statearr_35958 = state_35945;
(statearr_35958[(8)] = inst_35923__$1);

return statearr_35958;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35945__$1,(8),jobs,inst_35932);
} else {
if((state_val_35947 === (3))){
var inst_35943 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35945__$1,inst_35943);
} else {
if((state_val_35947 === (2))){
var state_35945__$1 = state_35945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35945__$1,(4),from);
} else {
if((state_val_35947 === (9))){
var inst_35937 = (state_35945[(2)]);
var state_35945__$1 = (function (){var statearr_35960 = state_35945;
(statearr_35960[(9)] = inst_35937);

return statearr_35960;
})();
var statearr_35961_39422 = state_35945__$1;
(statearr_35961_39422[(2)] = null);

(statearr_35961_39422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (5))){
var inst_35921 = cljs.core.async.close_BANG_(jobs);
var state_35945__$1 = state_35945;
var statearr_35962_39425 = state_35945__$1;
(statearr_35962_39425[(2)] = inst_35921);

(statearr_35962_39425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (8))){
var inst_35923 = (state_35945[(8)]);
var inst_35935 = (state_35945[(2)]);
var state_35945__$1 = (function (){var statearr_35963 = state_35945;
(statearr_35963[(10)] = inst_35935);

return statearr_35963;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35945__$1,(9),results,inst_35923);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____0 = (function (){
var statearr_35965 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35965[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__);

(statearr_35965[(1)] = (1));

return statearr_35965;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____1 = (function (state_35945){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_35945);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e35966){var ex__34535__auto__ = e35966;
var statearr_35967_39433 = state_35945;
(statearr_35967_39433[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_35945[(4)]))){
var statearr_35968_39434 = state_35945;
(statearr_35968_39434[(1)] = cljs.core.first((state_35945[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39436 = state_35945;
state_35945 = G__39436;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__ = function(state_35945){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____1.call(this,state_35945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_35974 = f__35199__auto__();
(statearr_35974[(6)] = c__35197__auto___39406);

return statearr_35974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
}));


var c__35197__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_36025){
var state_val_36026 = (state_36025[(1)]);
if((state_val_36026 === (7))){
var inst_36021 = (state_36025[(2)]);
var state_36025__$1 = state_36025;
var statearr_36030_39442 = state_36025__$1;
(statearr_36030_39442[(2)] = inst_36021);

(statearr_36030_39442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (20))){
var state_36025__$1 = state_36025;
var statearr_36032_39443 = state_36025__$1;
(statearr_36032_39443[(2)] = null);

(statearr_36032_39443[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (1))){
var state_36025__$1 = state_36025;
var statearr_36033_39445 = state_36025__$1;
(statearr_36033_39445[(2)] = null);

(statearr_36033_39445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (4))){
var inst_35985 = (state_36025[(7)]);
var inst_35985__$1 = (state_36025[(2)]);
var inst_35986 = (inst_35985__$1 == null);
var state_36025__$1 = (function (){var statearr_36035 = state_36025;
(statearr_36035[(7)] = inst_35985__$1);

return statearr_36035;
})();
if(cljs.core.truth_(inst_35986)){
var statearr_36036_39452 = state_36025__$1;
(statearr_36036_39452[(1)] = (5));

} else {
var statearr_36037_39453 = state_36025__$1;
(statearr_36037_39453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (15))){
var inst_36000 = (state_36025[(8)]);
var state_36025__$1 = state_36025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36025__$1,(18),to,inst_36000);
} else {
if((state_val_36026 === (21))){
var inst_36014 = (state_36025[(2)]);
var state_36025__$1 = state_36025;
var statearr_36041_39454 = state_36025__$1;
(statearr_36041_39454[(2)] = inst_36014);

(statearr_36041_39454[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (13))){
var inst_36018 = (state_36025[(2)]);
var state_36025__$1 = (function (){var statearr_36047 = state_36025;
(statearr_36047[(9)] = inst_36018);

return statearr_36047;
})();
var statearr_36048_39457 = state_36025__$1;
(statearr_36048_39457[(2)] = null);

(statearr_36048_39457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (6))){
var inst_35985 = (state_36025[(7)]);
var state_36025__$1 = state_36025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36025__$1,(11),inst_35985);
} else {
if((state_val_36026 === (17))){
var inst_36009 = (state_36025[(2)]);
var state_36025__$1 = state_36025;
if(cljs.core.truth_(inst_36009)){
var statearr_36049_39462 = state_36025__$1;
(statearr_36049_39462[(1)] = (19));

} else {
var statearr_36050_39466 = state_36025__$1;
(statearr_36050_39466[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (3))){
var inst_36023 = (state_36025[(2)]);
var state_36025__$1 = state_36025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36025__$1,inst_36023);
} else {
if((state_val_36026 === (12))){
var inst_35997 = (state_36025[(10)]);
var state_36025__$1 = state_36025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36025__$1,(14),inst_35997);
} else {
if((state_val_36026 === (2))){
var state_36025__$1 = state_36025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36025__$1,(4),results);
} else {
if((state_val_36026 === (19))){
var state_36025__$1 = state_36025;
var statearr_36052_39472 = state_36025__$1;
(statearr_36052_39472[(2)] = null);

(statearr_36052_39472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (11))){
var inst_35997 = (state_36025[(2)]);
var state_36025__$1 = (function (){var statearr_36055 = state_36025;
(statearr_36055[(10)] = inst_35997);

return statearr_36055;
})();
var statearr_36056_39473 = state_36025__$1;
(statearr_36056_39473[(2)] = null);

(statearr_36056_39473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (9))){
var state_36025__$1 = state_36025;
var statearr_36058_39478 = state_36025__$1;
(statearr_36058_39478[(2)] = null);

(statearr_36058_39478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (5))){
var state_36025__$1 = state_36025;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36059_39479 = state_36025__$1;
(statearr_36059_39479[(1)] = (8));

} else {
var statearr_36060_39484 = state_36025__$1;
(statearr_36060_39484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (14))){
var inst_36003 = (state_36025[(11)]);
var inst_36000 = (state_36025[(8)]);
var inst_36000__$1 = (state_36025[(2)]);
var inst_36002 = (inst_36000__$1 == null);
var inst_36003__$1 = cljs.core.not(inst_36002);
var state_36025__$1 = (function (){var statearr_36061 = state_36025;
(statearr_36061[(11)] = inst_36003__$1);

(statearr_36061[(8)] = inst_36000__$1);

return statearr_36061;
})();
if(inst_36003__$1){
var statearr_36065_39490 = state_36025__$1;
(statearr_36065_39490[(1)] = (15));

} else {
var statearr_36066_39491 = state_36025__$1;
(statearr_36066_39491[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (16))){
var inst_36003 = (state_36025[(11)]);
var state_36025__$1 = state_36025;
var statearr_36067_39496 = state_36025__$1;
(statearr_36067_39496[(2)] = inst_36003);

(statearr_36067_39496[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (10))){
var inst_35993 = (state_36025[(2)]);
var state_36025__$1 = state_36025;
var statearr_36079_39497 = state_36025__$1;
(statearr_36079_39497[(2)] = inst_35993);

(statearr_36079_39497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (18))){
var inst_36006 = (state_36025[(2)]);
var state_36025__$1 = state_36025;
var statearr_36081_39498 = state_36025__$1;
(statearr_36081_39498[(2)] = inst_36006);

(statearr_36081_39498[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (8))){
var inst_35989 = cljs.core.async.close_BANG_(to);
var state_36025__$1 = state_36025;
var statearr_36086_39499 = state_36025__$1;
(statearr_36086_39499[(2)] = inst_35989);

(statearr_36086_39499[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____0 = (function (){
var statearr_36093 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36093[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__);

(statearr_36093[(1)] = (1));

return statearr_36093;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____1 = (function (state_36025){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_36025);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e36095){var ex__34535__auto__ = e36095;
var statearr_36097_39502 = state_36025;
(statearr_36097_39502[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_36025[(4)]))){
var statearr_36098_39503 = state_36025;
(statearr_36098_39503[(1)] = cljs.core.first((state_36025[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39504 = state_36025;
state_36025 = G__39504;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__ = function(state_36025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____1.call(this,state_36025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_36099 = f__35199__auto__();
(statearr_36099[(6)] = c__35197__auto__);

return statearr_36099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
}));

return c__35197__auto__;
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
var G__36102 = arguments.length;
switch (G__36102) {
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
var G__36112 = arguments.length;
switch (G__36112) {
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
var G__36122 = arguments.length;
switch (G__36122) {
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
var c__35197__auto___39524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_36158){
var state_val_36159 = (state_36158[(1)]);
if((state_val_36159 === (7))){
var inst_36154 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
var statearr_36166_39525 = state_36158__$1;
(statearr_36166_39525[(2)] = inst_36154);

(statearr_36166_39525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (1))){
var state_36158__$1 = state_36158;
var statearr_36169_39526 = state_36158__$1;
(statearr_36169_39526[(2)] = null);

(statearr_36169_39526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (4))){
var inst_36131 = (state_36158[(7)]);
var inst_36131__$1 = (state_36158[(2)]);
var inst_36132 = (inst_36131__$1 == null);
var state_36158__$1 = (function (){var statearr_36170 = state_36158;
(statearr_36170[(7)] = inst_36131__$1);

return statearr_36170;
})();
if(cljs.core.truth_(inst_36132)){
var statearr_36171_39527 = state_36158__$1;
(statearr_36171_39527[(1)] = (5));

} else {
var statearr_36173_39528 = state_36158__$1;
(statearr_36173_39528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (13))){
var state_36158__$1 = state_36158;
var statearr_36174_39529 = state_36158__$1;
(statearr_36174_39529[(2)] = null);

(statearr_36174_39529[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (6))){
var inst_36131 = (state_36158[(7)]);
var inst_36138 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36131) : p.call(null,inst_36131));
var state_36158__$1 = state_36158;
if(cljs.core.truth_(inst_36138)){
var statearr_36175_39530 = state_36158__$1;
(statearr_36175_39530[(1)] = (9));

} else {
var statearr_36176_39532 = state_36158__$1;
(statearr_36176_39532[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (3))){
var inst_36156 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36158__$1,inst_36156);
} else {
if((state_val_36159 === (12))){
var state_36158__$1 = state_36158;
var statearr_36179_39533 = state_36158__$1;
(statearr_36179_39533[(2)] = null);

(statearr_36179_39533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (2))){
var state_36158__$1 = state_36158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36158__$1,(4),ch);
} else {
if((state_val_36159 === (11))){
var inst_36131 = (state_36158[(7)]);
var inst_36145 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36158__$1,(8),inst_36145,inst_36131);
} else {
if((state_val_36159 === (9))){
var state_36158__$1 = state_36158;
var statearr_36184_39534 = state_36158__$1;
(statearr_36184_39534[(2)] = tc);

(statearr_36184_39534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (5))){
var inst_36135 = cljs.core.async.close_BANG_(tc);
var inst_36136 = cljs.core.async.close_BANG_(fc);
var state_36158__$1 = (function (){var statearr_36185 = state_36158;
(statearr_36185[(8)] = inst_36135);

return statearr_36185;
})();
var statearr_36186_39535 = state_36158__$1;
(statearr_36186_39535[(2)] = inst_36136);

(statearr_36186_39535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (14))){
var inst_36152 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
var statearr_36188_39536 = state_36158__$1;
(statearr_36188_39536[(2)] = inst_36152);

(statearr_36188_39536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (10))){
var state_36158__$1 = state_36158;
var statearr_36189_39537 = state_36158__$1;
(statearr_36189_39537[(2)] = fc);

(statearr_36189_39537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (8))){
var inst_36147 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
if(cljs.core.truth_(inst_36147)){
var statearr_36190_39538 = state_36158__$1;
(statearr_36190_39538[(1)] = (12));

} else {
var statearr_36191_39539 = state_36158__$1;
(statearr_36191_39539[(1)] = (13));

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
var cljs$core$async$state_machine__34532__auto__ = null;
var cljs$core$async$state_machine__34532__auto____0 = (function (){
var statearr_36193 = [null,null,null,null,null,null,null,null,null];
(statearr_36193[(0)] = cljs$core$async$state_machine__34532__auto__);

(statearr_36193[(1)] = (1));

return statearr_36193;
});
var cljs$core$async$state_machine__34532__auto____1 = (function (state_36158){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_36158);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e36197){var ex__34535__auto__ = e36197;
var statearr_36198_39540 = state_36158;
(statearr_36198_39540[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_36158[(4)]))){
var statearr_36199_39541 = state_36158;
(statearr_36199_39541[(1)] = cljs.core.first((state_36158[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39542 = state_36158;
state_36158 = G__39542;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$state_machine__34532__auto__ = function(state_36158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34532__auto____1.call(this,state_36158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34532__auto____0;
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34532__auto____1;
return cljs$core$async$state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_36204 = f__35199__auto__();
(statearr_36204[(6)] = c__35197__auto___39524);

return statearr_36204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
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
var c__35197__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_36230){
var state_val_36231 = (state_36230[(1)]);
if((state_val_36231 === (7))){
var inst_36225 = (state_36230[(2)]);
var state_36230__$1 = state_36230;
var statearr_36241_39544 = state_36230__$1;
(statearr_36241_39544[(2)] = inst_36225);

(statearr_36241_39544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (1))){
var inst_36208 = init;
var inst_36209 = inst_36208;
var state_36230__$1 = (function (){var statearr_36242 = state_36230;
(statearr_36242[(7)] = inst_36209);

return statearr_36242;
})();
var statearr_36243_39549 = state_36230__$1;
(statearr_36243_39549[(2)] = null);

(statearr_36243_39549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (4))){
var inst_36212 = (state_36230[(8)]);
var inst_36212__$1 = (state_36230[(2)]);
var inst_36213 = (inst_36212__$1 == null);
var state_36230__$1 = (function (){var statearr_36247 = state_36230;
(statearr_36247[(8)] = inst_36212__$1);

return statearr_36247;
})();
if(cljs.core.truth_(inst_36213)){
var statearr_36248_39550 = state_36230__$1;
(statearr_36248_39550[(1)] = (5));

} else {
var statearr_36249_39551 = state_36230__$1;
(statearr_36249_39551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (6))){
var inst_36216 = (state_36230[(9)]);
var inst_36212 = (state_36230[(8)]);
var inst_36209 = (state_36230[(7)]);
var inst_36216__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36209,inst_36212) : f.call(null,inst_36209,inst_36212));
var inst_36217 = cljs.core.reduced_QMARK_(inst_36216__$1);
var state_36230__$1 = (function (){var statearr_36256 = state_36230;
(statearr_36256[(9)] = inst_36216__$1);

return statearr_36256;
})();
if(inst_36217){
var statearr_36257_39552 = state_36230__$1;
(statearr_36257_39552[(1)] = (8));

} else {
var statearr_36258_39553 = state_36230__$1;
(statearr_36258_39553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (3))){
var inst_36227 = (state_36230[(2)]);
var state_36230__$1 = state_36230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36230__$1,inst_36227);
} else {
if((state_val_36231 === (2))){
var state_36230__$1 = state_36230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36230__$1,(4),ch);
} else {
if((state_val_36231 === (9))){
var inst_36216 = (state_36230[(9)]);
var inst_36209 = inst_36216;
var state_36230__$1 = (function (){var statearr_36259 = state_36230;
(statearr_36259[(7)] = inst_36209);

return statearr_36259;
})();
var statearr_36260_39555 = state_36230__$1;
(statearr_36260_39555[(2)] = null);

(statearr_36260_39555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (5))){
var inst_36209 = (state_36230[(7)]);
var state_36230__$1 = state_36230;
var statearr_36273_39556 = state_36230__$1;
(statearr_36273_39556[(2)] = inst_36209);

(statearr_36273_39556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (10))){
var inst_36223 = (state_36230[(2)]);
var state_36230__$1 = state_36230;
var statearr_36284_39557 = state_36230__$1;
(statearr_36284_39557[(2)] = inst_36223);

(statearr_36284_39557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (8))){
var inst_36216 = (state_36230[(9)]);
var inst_36219 = cljs.core.deref(inst_36216);
var state_36230__$1 = state_36230;
var statearr_36288_39558 = state_36230__$1;
(statearr_36288_39558[(2)] = inst_36219);

(statearr_36288_39558[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34532__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34532__auto____0 = (function (){
var statearr_36289 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36289[(0)] = cljs$core$async$reduce_$_state_machine__34532__auto__);

(statearr_36289[(1)] = (1));

return statearr_36289;
});
var cljs$core$async$reduce_$_state_machine__34532__auto____1 = (function (state_36230){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_36230);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e36290){var ex__34535__auto__ = e36290;
var statearr_36291_39567 = state_36230;
(statearr_36291_39567[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_36230[(4)]))){
var statearr_36292_39569 = state_36230;
(statearr_36292_39569[(1)] = cljs.core.first((state_36230[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39577 = state_36230;
state_36230 = G__39577;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34532__auto__ = function(state_36230){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34532__auto____1.call(this,state_36230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34532__auto____0;
cljs$core$async$reduce_$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34532__auto____1;
return cljs$core$async$reduce_$_state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_36297 = f__35199__auto__();
(statearr_36297[(6)] = c__35197__auto__);

return statearr_36297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
}));

return c__35197__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__35197__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_36308){
var state_val_36309 = (state_36308[(1)]);
if((state_val_36309 === (1))){
var inst_36303 = cljs.core.async.reduce(f__$1,init,ch);
var state_36308__$1 = state_36308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36308__$1,(2),inst_36303);
} else {
if((state_val_36309 === (2))){
var inst_36305 = (state_36308[(2)]);
var inst_36306 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_36305) : f__$1.call(null,inst_36305));
var state_36308__$1 = state_36308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36308__$1,inst_36306);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34532__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34532__auto____0 = (function (){
var statearr_36323 = [null,null,null,null,null,null,null];
(statearr_36323[(0)] = cljs$core$async$transduce_$_state_machine__34532__auto__);

(statearr_36323[(1)] = (1));

return statearr_36323;
});
var cljs$core$async$transduce_$_state_machine__34532__auto____1 = (function (state_36308){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_36308);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e36325){var ex__34535__auto__ = e36325;
var statearr_36327_39578 = state_36308;
(statearr_36327_39578[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_36308[(4)]))){
var statearr_36328_39579 = state_36308;
(statearr_36328_39579[(1)] = cljs.core.first((state_36308[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39583 = state_36308;
state_36308 = G__39583;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34532__auto__ = function(state_36308){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34532__auto____1.call(this,state_36308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34532__auto____0;
cljs$core$async$transduce_$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34532__auto____1;
return cljs$core$async$transduce_$_state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_36331 = f__35199__auto__();
(statearr_36331[(6)] = c__35197__auto__);

return statearr_36331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
}));

return c__35197__auto__;
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
var G__36345 = arguments.length;
switch (G__36345) {
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
var c__35197__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_36374){
var state_val_36375 = (state_36374[(1)]);
if((state_val_36375 === (7))){
var inst_36356 = (state_36374[(2)]);
var state_36374__$1 = state_36374;
var statearr_36378_39586 = state_36374__$1;
(statearr_36378_39586[(2)] = inst_36356);

(statearr_36378_39586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (1))){
var inst_36350 = cljs.core.seq(coll);
var inst_36351 = inst_36350;
var state_36374__$1 = (function (){var statearr_36379 = state_36374;
(statearr_36379[(7)] = inst_36351);

return statearr_36379;
})();
var statearr_36381_39588 = state_36374__$1;
(statearr_36381_39588[(2)] = null);

(statearr_36381_39588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (4))){
var inst_36351 = (state_36374[(7)]);
var inst_36354 = cljs.core.first(inst_36351);
var state_36374__$1 = state_36374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36374__$1,(7),ch,inst_36354);
} else {
if((state_val_36375 === (13))){
var inst_36368 = (state_36374[(2)]);
var state_36374__$1 = state_36374;
var statearr_36390_39589 = state_36374__$1;
(statearr_36390_39589[(2)] = inst_36368);

(statearr_36390_39589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (6))){
var inst_36359 = (state_36374[(2)]);
var state_36374__$1 = state_36374;
if(cljs.core.truth_(inst_36359)){
var statearr_36391_39590 = state_36374__$1;
(statearr_36391_39590[(1)] = (8));

} else {
var statearr_36392_39591 = state_36374__$1;
(statearr_36392_39591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (3))){
var inst_36372 = (state_36374[(2)]);
var state_36374__$1 = state_36374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36374__$1,inst_36372);
} else {
if((state_val_36375 === (12))){
var state_36374__$1 = state_36374;
var statearr_36395_39592 = state_36374__$1;
(statearr_36395_39592[(2)] = null);

(statearr_36395_39592[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (2))){
var inst_36351 = (state_36374[(7)]);
var state_36374__$1 = state_36374;
if(cljs.core.truth_(inst_36351)){
var statearr_36396_39593 = state_36374__$1;
(statearr_36396_39593[(1)] = (4));

} else {
var statearr_36397_39594 = state_36374__$1;
(statearr_36397_39594[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (11))){
var inst_36365 = cljs.core.async.close_BANG_(ch);
var state_36374__$1 = state_36374;
var statearr_36403_39595 = state_36374__$1;
(statearr_36403_39595[(2)] = inst_36365);

(statearr_36403_39595[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (9))){
var state_36374__$1 = state_36374;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36404_39596 = state_36374__$1;
(statearr_36404_39596[(1)] = (11));

} else {
var statearr_36405_39597 = state_36374__$1;
(statearr_36405_39597[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (5))){
var inst_36351 = (state_36374[(7)]);
var state_36374__$1 = state_36374;
var statearr_36406_39598 = state_36374__$1;
(statearr_36406_39598[(2)] = inst_36351);

(statearr_36406_39598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (10))){
var inst_36370 = (state_36374[(2)]);
var state_36374__$1 = state_36374;
var statearr_36407_39599 = state_36374__$1;
(statearr_36407_39599[(2)] = inst_36370);

(statearr_36407_39599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (8))){
var inst_36351 = (state_36374[(7)]);
var inst_36361 = cljs.core.next(inst_36351);
var inst_36351__$1 = inst_36361;
var state_36374__$1 = (function (){var statearr_36408 = state_36374;
(statearr_36408[(7)] = inst_36351__$1);

return statearr_36408;
})();
var statearr_36409_39600 = state_36374__$1;
(statearr_36409_39600[(2)] = null);

(statearr_36409_39600[(1)] = (2));


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
var cljs$core$async$state_machine__34532__auto__ = null;
var cljs$core$async$state_machine__34532__auto____0 = (function (){
var statearr_36411 = [null,null,null,null,null,null,null,null];
(statearr_36411[(0)] = cljs$core$async$state_machine__34532__auto__);

(statearr_36411[(1)] = (1));

return statearr_36411;
});
var cljs$core$async$state_machine__34532__auto____1 = (function (state_36374){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_36374);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e36412){var ex__34535__auto__ = e36412;
var statearr_36413_39601 = state_36374;
(statearr_36413_39601[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_36374[(4)]))){
var statearr_36414_39602 = state_36374;
(statearr_36414_39602[(1)] = cljs.core.first((state_36374[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39603 = state_36374;
state_36374 = G__39603;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$state_machine__34532__auto__ = function(state_36374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34532__auto____1.call(this,state_36374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34532__auto____0;
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34532__auto____1;
return cljs$core$async$state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_36418 = f__35199__auto__();
(statearr_36418[(6)] = c__35197__auto__);

return statearr_36418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
}));

return c__35197__auto__;
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
var G__36433 = arguments.length;
switch (G__36433) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_39613 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_39613(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_39617 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_39617(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_39621 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_39621(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_39622 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_39622(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36522 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36522 = (function (ch,cs,meta36523){
this.ch = ch;
this.cs = cs;
this.meta36523 = meta36523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36524,meta36523__$1){
var self__ = this;
var _36524__$1 = this;
return (new cljs.core.async.t_cljs$core$async36522(self__.ch,self__.cs,meta36523__$1));
}));

(cljs.core.async.t_cljs$core$async36522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36524){
var self__ = this;
var _36524__$1 = this;
return self__.meta36523;
}));

(cljs.core.async.t_cljs$core$async36522.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36522.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36522.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36522.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async36522.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async36522.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async36522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36523","meta36523",-1453599853,null)], null);
}));

(cljs.core.async.t_cljs$core$async36522.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36522");

(cljs.core.async.t_cljs$core$async36522.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async36522");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36522.
 */
cljs.core.async.__GT_t_cljs$core$async36522 = (function cljs$core$async$mult_$___GT_t_cljs$core$async36522(ch__$1,cs__$1,meta36523){
return (new cljs.core.async.t_cljs$core$async36522(ch__$1,cs__$1,meta36523));
});

}

return (new cljs.core.async.t_cljs$core$async36522(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35197__auto___39636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_36786){
var state_val_36789 = (state_36786[(1)]);
if((state_val_36789 === (7))){
var inst_36774 = (state_36786[(2)]);
var state_36786__$1 = state_36786;
var statearr_36802_39637 = state_36786__$1;
(statearr_36802_39637[(2)] = inst_36774);

(statearr_36802_39637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (20))){
var inst_36630 = (state_36786[(7)]);
var inst_36645 = cljs.core.first(inst_36630);
var inst_36647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36645,(0),null);
var inst_36649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36645,(1),null);
var state_36786__$1 = (function (){var statearr_36805 = state_36786;
(statearr_36805[(8)] = inst_36647);

return statearr_36805;
})();
if(cljs.core.truth_(inst_36649)){
var statearr_36809_39638 = state_36786__$1;
(statearr_36809_39638[(1)] = (22));

} else {
var statearr_36810_39639 = state_36786__$1;
(statearr_36810_39639[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (27))){
var inst_36684 = (state_36786[(9)]);
var inst_36686 = (state_36786[(10)]);
var inst_36694 = (state_36786[(11)]);
var inst_36582 = (state_36786[(12)]);
var inst_36694__$1 = cljs.core._nth(inst_36684,inst_36686);
var inst_36695 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36694__$1,inst_36582,done);
var state_36786__$1 = (function (){var statearr_36813 = state_36786;
(statearr_36813[(11)] = inst_36694__$1);

return statearr_36813;
})();
if(cljs.core.truth_(inst_36695)){
var statearr_36816_39643 = state_36786__$1;
(statearr_36816_39643[(1)] = (30));

} else {
var statearr_36817_39644 = state_36786__$1;
(statearr_36817_39644[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (1))){
var state_36786__$1 = state_36786;
var statearr_36823_39645 = state_36786__$1;
(statearr_36823_39645[(2)] = null);

(statearr_36823_39645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (24))){
var inst_36630 = (state_36786[(7)]);
var inst_36656 = (state_36786[(2)]);
var inst_36657 = cljs.core.next(inst_36630);
var inst_36594 = inst_36657;
var inst_36595 = null;
var inst_36596 = (0);
var inst_36597 = (0);
var state_36786__$1 = (function (){var statearr_36832 = state_36786;
(statearr_36832[(13)] = inst_36656);

(statearr_36832[(14)] = inst_36595);

(statearr_36832[(15)] = inst_36594);

(statearr_36832[(16)] = inst_36596);

(statearr_36832[(17)] = inst_36597);

return statearr_36832;
})();
var statearr_36834_39649 = state_36786__$1;
(statearr_36834_39649[(2)] = null);

(statearr_36834_39649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (39))){
var state_36786__$1 = state_36786;
var statearr_36841_39650 = state_36786__$1;
(statearr_36841_39650[(2)] = null);

(statearr_36841_39650[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (4))){
var inst_36582 = (state_36786[(12)]);
var inst_36582__$1 = (state_36786[(2)]);
var inst_36584 = (inst_36582__$1 == null);
var state_36786__$1 = (function (){var statearr_36843 = state_36786;
(statearr_36843[(12)] = inst_36582__$1);

return statearr_36843;
})();
if(cljs.core.truth_(inst_36584)){
var statearr_36847_39651 = state_36786__$1;
(statearr_36847_39651[(1)] = (5));

} else {
var statearr_36848_39652 = state_36786__$1;
(statearr_36848_39652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (15))){
var inst_36595 = (state_36786[(14)]);
var inst_36594 = (state_36786[(15)]);
var inst_36596 = (state_36786[(16)]);
var inst_36597 = (state_36786[(17)]);
var inst_36620 = (state_36786[(2)]);
var inst_36624 = (inst_36597 + (1));
var tmp36837 = inst_36595;
var tmp36838 = inst_36594;
var tmp36839 = inst_36596;
var inst_36594__$1 = tmp36838;
var inst_36595__$1 = tmp36837;
var inst_36596__$1 = tmp36839;
var inst_36597__$1 = inst_36624;
var state_36786__$1 = (function (){var statearr_36855 = state_36786;
(statearr_36855[(14)] = inst_36595__$1);

(statearr_36855[(15)] = inst_36594__$1);

(statearr_36855[(16)] = inst_36596__$1);

(statearr_36855[(18)] = inst_36620);

(statearr_36855[(17)] = inst_36597__$1);

return statearr_36855;
})();
var statearr_36865_39656 = state_36786__$1;
(statearr_36865_39656[(2)] = null);

(statearr_36865_39656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (21))){
var inst_36660 = (state_36786[(2)]);
var state_36786__$1 = state_36786;
var statearr_36874_39657 = state_36786__$1;
(statearr_36874_39657[(2)] = inst_36660);

(statearr_36874_39657[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (31))){
var inst_36694 = (state_36786[(11)]);
var inst_36698 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36694);
var state_36786__$1 = state_36786;
var statearr_36881_39658 = state_36786__$1;
(statearr_36881_39658[(2)] = inst_36698);

(statearr_36881_39658[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (32))){
var inst_36684 = (state_36786[(9)]);
var inst_36686 = (state_36786[(10)]);
var inst_36683 = (state_36786[(19)]);
var inst_36685 = (state_36786[(20)]);
var inst_36700 = (state_36786[(2)]);
var inst_36701 = (inst_36686 + (1));
var tmp36870 = inst_36684;
var tmp36871 = inst_36683;
var tmp36872 = inst_36685;
var inst_36683__$1 = tmp36871;
var inst_36684__$1 = tmp36870;
var inst_36685__$1 = tmp36872;
var inst_36686__$1 = inst_36701;
var state_36786__$1 = (function (){var statearr_36888 = state_36786;
(statearr_36888[(9)] = inst_36684__$1);

(statearr_36888[(10)] = inst_36686__$1);

(statearr_36888[(21)] = inst_36700);

(statearr_36888[(19)] = inst_36683__$1);

(statearr_36888[(20)] = inst_36685__$1);

return statearr_36888;
})();
var statearr_36890_39659 = state_36786__$1;
(statearr_36890_39659[(2)] = null);

(statearr_36890_39659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (40))){
var inst_36722 = (state_36786[(22)]);
var inst_36726 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36722);
var state_36786__$1 = state_36786;
var statearr_36896_39661 = state_36786__$1;
(statearr_36896_39661[(2)] = inst_36726);

(statearr_36896_39661[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (33))){
var inst_36705 = (state_36786[(23)]);
var inst_36707 = cljs.core.chunked_seq_QMARK_(inst_36705);
var state_36786__$1 = state_36786;
if(inst_36707){
var statearr_36900_39662 = state_36786__$1;
(statearr_36900_39662[(1)] = (36));

} else {
var statearr_36902_39663 = state_36786__$1;
(statearr_36902_39663[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (13))){
var inst_36613 = (state_36786[(24)]);
var inst_36617 = cljs.core.async.close_BANG_(inst_36613);
var state_36786__$1 = state_36786;
var statearr_36914_39664 = state_36786__$1;
(statearr_36914_39664[(2)] = inst_36617);

(statearr_36914_39664[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (22))){
var inst_36647 = (state_36786[(8)]);
var inst_36653 = cljs.core.async.close_BANG_(inst_36647);
var state_36786__$1 = state_36786;
var statearr_36929_39665 = state_36786__$1;
(statearr_36929_39665[(2)] = inst_36653);

(statearr_36929_39665[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (36))){
var inst_36705 = (state_36786[(23)]);
var inst_36713 = cljs.core.chunk_first(inst_36705);
var inst_36715 = cljs.core.chunk_rest(inst_36705);
var inst_36717 = cljs.core.count(inst_36713);
var inst_36683 = inst_36715;
var inst_36684 = inst_36713;
var inst_36685 = inst_36717;
var inst_36686 = (0);
var state_36786__$1 = (function (){var statearr_36935 = state_36786;
(statearr_36935[(9)] = inst_36684);

(statearr_36935[(10)] = inst_36686);

(statearr_36935[(19)] = inst_36683);

(statearr_36935[(20)] = inst_36685);

return statearr_36935;
})();
var statearr_36937_39666 = state_36786__$1;
(statearr_36937_39666[(2)] = null);

(statearr_36937_39666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (41))){
var inst_36705 = (state_36786[(23)]);
var inst_36728 = (state_36786[(2)]);
var inst_36729 = cljs.core.next(inst_36705);
var inst_36683 = inst_36729;
var inst_36684 = null;
var inst_36685 = (0);
var inst_36686 = (0);
var state_36786__$1 = (function (){var statearr_36941 = state_36786;
(statearr_36941[(9)] = inst_36684);

(statearr_36941[(10)] = inst_36686);

(statearr_36941[(19)] = inst_36683);

(statearr_36941[(20)] = inst_36685);

(statearr_36941[(25)] = inst_36728);

return statearr_36941;
})();
var statearr_36942_39667 = state_36786__$1;
(statearr_36942_39667[(2)] = null);

(statearr_36942_39667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (43))){
var state_36786__$1 = state_36786;
var statearr_36945_39668 = state_36786__$1;
(statearr_36945_39668[(2)] = null);

(statearr_36945_39668[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (29))){
var inst_36737 = (state_36786[(2)]);
var state_36786__$1 = state_36786;
var statearr_36954_39669 = state_36786__$1;
(statearr_36954_39669[(2)] = inst_36737);

(statearr_36954_39669[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (44))){
var inst_36768 = (state_36786[(2)]);
var state_36786__$1 = (function (){var statearr_36962 = state_36786;
(statearr_36962[(26)] = inst_36768);

return statearr_36962;
})();
var statearr_36966_39670 = state_36786__$1;
(statearr_36966_39670[(2)] = null);

(statearr_36966_39670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (6))){
var inst_36672 = (state_36786[(27)]);
var inst_36671 = cljs.core.deref(cs);
var inst_36672__$1 = cljs.core.keys(inst_36671);
var inst_36673 = cljs.core.count(inst_36672__$1);
var inst_36674 = cljs.core.reset_BANG_(dctr,inst_36673);
var inst_36682 = cljs.core.seq(inst_36672__$1);
var inst_36683 = inst_36682;
var inst_36684 = null;
var inst_36685 = (0);
var inst_36686 = (0);
var state_36786__$1 = (function (){var statearr_36971 = state_36786;
(statearr_36971[(9)] = inst_36684);

(statearr_36971[(28)] = inst_36674);

(statearr_36971[(10)] = inst_36686);

(statearr_36971[(19)] = inst_36683);

(statearr_36971[(20)] = inst_36685);

(statearr_36971[(27)] = inst_36672__$1);

return statearr_36971;
})();
var statearr_36974_39671 = state_36786__$1;
(statearr_36974_39671[(2)] = null);

(statearr_36974_39671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (28))){
var inst_36705 = (state_36786[(23)]);
var inst_36683 = (state_36786[(19)]);
var inst_36705__$1 = cljs.core.seq(inst_36683);
var state_36786__$1 = (function (){var statearr_36979 = state_36786;
(statearr_36979[(23)] = inst_36705__$1);

return statearr_36979;
})();
if(inst_36705__$1){
var statearr_36980_39672 = state_36786__$1;
(statearr_36980_39672[(1)] = (33));

} else {
var statearr_36983_39673 = state_36786__$1;
(statearr_36983_39673[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (25))){
var inst_36686 = (state_36786[(10)]);
var inst_36685 = (state_36786[(20)]);
var inst_36690 = (inst_36686 < inst_36685);
var inst_36691 = inst_36690;
var state_36786__$1 = state_36786;
if(cljs.core.truth_(inst_36691)){
var statearr_36986_39674 = state_36786__$1;
(statearr_36986_39674[(1)] = (27));

} else {
var statearr_36987_39675 = state_36786__$1;
(statearr_36987_39675[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (34))){
var state_36786__$1 = state_36786;
var statearr_36989_39676 = state_36786__$1;
(statearr_36989_39676[(2)] = null);

(statearr_36989_39676[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (17))){
var state_36786__$1 = state_36786;
var statearr_36990_39677 = state_36786__$1;
(statearr_36990_39677[(2)] = null);

(statearr_36990_39677[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (3))){
var inst_36776 = (state_36786[(2)]);
var state_36786__$1 = state_36786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36786__$1,inst_36776);
} else {
if((state_val_36789 === (12))){
var inst_36666 = (state_36786[(2)]);
var state_36786__$1 = state_36786;
var statearr_36992_39678 = state_36786__$1;
(statearr_36992_39678[(2)] = inst_36666);

(statearr_36992_39678[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (2))){
var state_36786__$1 = state_36786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36786__$1,(4),ch);
} else {
if((state_val_36789 === (23))){
var state_36786__$1 = state_36786;
var statearr_37003_39680 = state_36786__$1;
(statearr_37003_39680[(2)] = null);

(statearr_37003_39680[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (35))){
var inst_36735 = (state_36786[(2)]);
var state_36786__$1 = state_36786;
var statearr_37008_39681 = state_36786__$1;
(statearr_37008_39681[(2)] = inst_36735);

(statearr_37008_39681[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (19))){
var inst_36630 = (state_36786[(7)]);
var inst_36637 = cljs.core.chunk_first(inst_36630);
var inst_36638 = cljs.core.chunk_rest(inst_36630);
var inst_36639 = cljs.core.count(inst_36637);
var inst_36594 = inst_36638;
var inst_36595 = inst_36637;
var inst_36596 = inst_36639;
var inst_36597 = (0);
var state_36786__$1 = (function (){var statearr_37014 = state_36786;
(statearr_37014[(14)] = inst_36595);

(statearr_37014[(15)] = inst_36594);

(statearr_37014[(16)] = inst_36596);

(statearr_37014[(17)] = inst_36597);

return statearr_37014;
})();
var statearr_37019_39684 = state_36786__$1;
(statearr_37019_39684[(2)] = null);

(statearr_37019_39684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (11))){
var inst_36630 = (state_36786[(7)]);
var inst_36594 = (state_36786[(15)]);
var inst_36630__$1 = cljs.core.seq(inst_36594);
var state_36786__$1 = (function (){var statearr_37022 = state_36786;
(statearr_37022[(7)] = inst_36630__$1);

return statearr_37022;
})();
if(inst_36630__$1){
var statearr_37023_39685 = state_36786__$1;
(statearr_37023_39685[(1)] = (16));

} else {
var statearr_37024_39686 = state_36786__$1;
(statearr_37024_39686[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (9))){
var inst_36668 = (state_36786[(2)]);
var state_36786__$1 = state_36786;
var statearr_37025_39687 = state_36786__$1;
(statearr_37025_39687[(2)] = inst_36668);

(statearr_37025_39687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (5))){
var inst_36592 = cljs.core.deref(cs);
var inst_36593 = cljs.core.seq(inst_36592);
var inst_36594 = inst_36593;
var inst_36595 = null;
var inst_36596 = (0);
var inst_36597 = (0);
var state_36786__$1 = (function (){var statearr_37033 = state_36786;
(statearr_37033[(14)] = inst_36595);

(statearr_37033[(15)] = inst_36594);

(statearr_37033[(16)] = inst_36596);

(statearr_37033[(17)] = inst_36597);

return statearr_37033;
})();
var statearr_37035_39688 = state_36786__$1;
(statearr_37035_39688[(2)] = null);

(statearr_37035_39688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (14))){
var state_36786__$1 = state_36786;
var statearr_37036_39689 = state_36786__$1;
(statearr_37036_39689[(2)] = null);

(statearr_37036_39689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (45))){
var inst_36765 = (state_36786[(2)]);
var state_36786__$1 = state_36786;
var statearr_37040_39690 = state_36786__$1;
(statearr_37040_39690[(2)] = inst_36765);

(statearr_37040_39690[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (26))){
var inst_36672 = (state_36786[(27)]);
var inst_36740 = (state_36786[(2)]);
var inst_36741 = cljs.core.seq(inst_36672);
var state_36786__$1 = (function (){var statearr_37042 = state_36786;
(statearr_37042[(29)] = inst_36740);

return statearr_37042;
})();
if(inst_36741){
var statearr_37044_39691 = state_36786__$1;
(statearr_37044_39691[(1)] = (42));

} else {
var statearr_37046_39692 = state_36786__$1;
(statearr_37046_39692[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (16))){
var inst_36630 = (state_36786[(7)]);
var inst_36634 = cljs.core.chunked_seq_QMARK_(inst_36630);
var state_36786__$1 = state_36786;
if(inst_36634){
var statearr_37052_39693 = state_36786__$1;
(statearr_37052_39693[(1)] = (19));

} else {
var statearr_37053_39694 = state_36786__$1;
(statearr_37053_39694[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (38))){
var inst_36732 = (state_36786[(2)]);
var state_36786__$1 = state_36786;
var statearr_37057_39695 = state_36786__$1;
(statearr_37057_39695[(2)] = inst_36732);

(statearr_37057_39695[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (30))){
var state_36786__$1 = state_36786;
var statearr_37059_39696 = state_36786__$1;
(statearr_37059_39696[(2)] = null);

(statearr_37059_39696[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (10))){
var inst_36595 = (state_36786[(14)]);
var inst_36597 = (state_36786[(17)]);
var inst_36611 = cljs.core._nth(inst_36595,inst_36597);
var inst_36613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36611,(0),null);
var inst_36614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36611,(1),null);
var state_36786__$1 = (function (){var statearr_37063 = state_36786;
(statearr_37063[(24)] = inst_36613);

return statearr_37063;
})();
if(cljs.core.truth_(inst_36614)){
var statearr_37064_39697 = state_36786__$1;
(statearr_37064_39697[(1)] = (13));

} else {
var statearr_37067_39698 = state_36786__$1;
(statearr_37067_39698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (18))){
var inst_36664 = (state_36786[(2)]);
var state_36786__$1 = state_36786;
var statearr_37069_39699 = state_36786__$1;
(statearr_37069_39699[(2)] = inst_36664);

(statearr_37069_39699[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (42))){
var state_36786__$1 = state_36786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36786__$1,(45),dchan);
} else {
if((state_val_36789 === (37))){
var inst_36722 = (state_36786[(22)]);
var inst_36705 = (state_36786[(23)]);
var inst_36582 = (state_36786[(12)]);
var inst_36722__$1 = cljs.core.first(inst_36705);
var inst_36723 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36722__$1,inst_36582,done);
var state_36786__$1 = (function (){var statearr_37071 = state_36786;
(statearr_37071[(22)] = inst_36722__$1);

return statearr_37071;
})();
if(cljs.core.truth_(inst_36723)){
var statearr_37072_39700 = state_36786__$1;
(statearr_37072_39700[(1)] = (39));

} else {
var statearr_37073_39701 = state_36786__$1;
(statearr_37073_39701[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (8))){
var inst_36596 = (state_36786[(16)]);
var inst_36597 = (state_36786[(17)]);
var inst_36600 = (inst_36597 < inst_36596);
var inst_36601 = inst_36600;
var state_36786__$1 = state_36786;
if(cljs.core.truth_(inst_36601)){
var statearr_37083_39702 = state_36786__$1;
(statearr_37083_39702[(1)] = (10));

} else {
var statearr_37088_39703 = state_36786__$1;
(statearr_37088_39703[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__34532__auto__ = null;
var cljs$core$async$mult_$_state_machine__34532__auto____0 = (function (){
var statearr_37097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37097[(0)] = cljs$core$async$mult_$_state_machine__34532__auto__);

(statearr_37097[(1)] = (1));

return statearr_37097;
});
var cljs$core$async$mult_$_state_machine__34532__auto____1 = (function (state_36786){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_36786);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e37099){var ex__34535__auto__ = e37099;
var statearr_37101_39706 = state_36786;
(statearr_37101_39706[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_36786[(4)]))){
var statearr_37108_39707 = state_36786;
(statearr_37108_39707[(1)] = cljs.core.first((state_36786[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39708 = state_36786;
state_36786 = G__39708;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34532__auto__ = function(state_36786){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34532__auto____1.call(this,state_36786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34532__auto____0;
cljs$core$async$mult_$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34532__auto____1;
return cljs$core$async$mult_$_state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_37128 = f__35199__auto__();
(statearr_37128[(6)] = c__35197__auto___39636);

return statearr_37128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
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
var G__37145 = arguments.length;
switch (G__37145) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_39714 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_39714(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_39717 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_39717(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_39718 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_39718(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_39719 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_39719(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_39720 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_39720(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___39725 = arguments.length;
var i__4865__auto___39726 = (0);
while(true){
if((i__4865__auto___39726 < len__4864__auto___39725)){
args__4870__auto__.push((arguments[i__4865__auto___39726]));

var G__39727 = (i__4865__auto___39726 + (1));
i__4865__auto___39726 = G__39727;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37280){
var map__37285 = p__37280;
var map__37285__$1 = cljs.core.__destructure_map(map__37285);
var opts = map__37285__$1;
var statearr_37287_39732 = state;
(statearr_37287_39732[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_37288_39737 = state;
(statearr_37288_39737[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_37289_39738 = state;
(statearr_37289_39738[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37266){
var G__37267 = cljs.core.first(seq37266);
var seq37266__$1 = cljs.core.next(seq37266);
var G__37268 = cljs.core.first(seq37266__$1);
var seq37266__$2 = cljs.core.next(seq37266__$1);
var G__37269 = cljs.core.first(seq37266__$2);
var seq37266__$3 = cljs.core.next(seq37266__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37267,G__37268,G__37269,seq37266__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37301 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37301 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37302){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37302 = meta37302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37303,meta37302__$1){
var self__ = this;
var _37303__$1 = this;
return (new cljs.core.async.t_cljs$core$async37301(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37302__$1));
}));

(cljs.core.async.t_cljs$core$async37301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37303){
var self__ = this;
var _37303__$1 = this;
return self__.meta37302;
}));

(cljs.core.async.t_cljs$core$async37301.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37301.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37301.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37301.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37301.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37301.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37301.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37301.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37302","meta37302",1327072200,null)], null);
}));

(cljs.core.async.t_cljs$core$async37301.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37301");

(cljs.core.async.t_cljs$core$async37301.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async37301");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37301.
 */
cljs.core.async.__GT_t_cljs$core$async37301 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37301(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37302){
return (new cljs.core.async.t_cljs$core$async37301(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37302));
});

}

return (new cljs.core.async.t_cljs$core$async37301(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35197__auto___39758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_37399){
var state_val_37400 = (state_37399[(1)]);
if((state_val_37400 === (7))){
var inst_37353 = (state_37399[(2)]);
var state_37399__$1 = state_37399;
if(cljs.core.truth_(inst_37353)){
var statearr_37403_39759 = state_37399__$1;
(statearr_37403_39759[(1)] = (8));

} else {
var statearr_37404_39760 = state_37399__$1;
(statearr_37404_39760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (20))){
var inst_37346 = (state_37399[(7)]);
var state_37399__$1 = state_37399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37399__$1,(23),out,inst_37346);
} else {
if((state_val_37400 === (1))){
var inst_37326 = calc_state();
var inst_37327 = cljs.core.__destructure_map(inst_37326);
var inst_37328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37327,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37327,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37327,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37331 = inst_37326;
var state_37399__$1 = (function (){var statearr_37405 = state_37399;
(statearr_37405[(8)] = inst_37331);

(statearr_37405[(9)] = inst_37328);

(statearr_37405[(10)] = inst_37330);

(statearr_37405[(11)] = inst_37329);

return statearr_37405;
})();
var statearr_37407_39767 = state_37399__$1;
(statearr_37407_39767[(2)] = null);

(statearr_37407_39767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (24))){
var inst_37334 = (state_37399[(12)]);
var inst_37331 = inst_37334;
var state_37399__$1 = (function (){var statearr_37408 = state_37399;
(statearr_37408[(8)] = inst_37331);

return statearr_37408;
})();
var statearr_37409_39772 = state_37399__$1;
(statearr_37409_39772[(2)] = null);

(statearr_37409_39772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (4))){
var inst_37346 = (state_37399[(7)]);
var inst_37348 = (state_37399[(13)]);
var inst_37345 = (state_37399[(2)]);
var inst_37346__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37345,(0),null);
var inst_37347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37345,(1),null);
var inst_37348__$1 = (inst_37346__$1 == null);
var state_37399__$1 = (function (){var statearr_37415 = state_37399;
(statearr_37415[(7)] = inst_37346__$1);

(statearr_37415[(13)] = inst_37348__$1);

(statearr_37415[(14)] = inst_37347);

return statearr_37415;
})();
if(cljs.core.truth_(inst_37348__$1)){
var statearr_37419_39773 = state_37399__$1;
(statearr_37419_39773[(1)] = (5));

} else {
var statearr_37420_39774 = state_37399__$1;
(statearr_37420_39774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (15))){
var inst_37367 = (state_37399[(15)]);
var inst_37335 = (state_37399[(16)]);
var inst_37367__$1 = cljs.core.empty_QMARK_(inst_37335);
var state_37399__$1 = (function (){var statearr_37421 = state_37399;
(statearr_37421[(15)] = inst_37367__$1);

return statearr_37421;
})();
if(inst_37367__$1){
var statearr_37422_39775 = state_37399__$1;
(statearr_37422_39775[(1)] = (17));

} else {
var statearr_37423_39776 = state_37399__$1;
(statearr_37423_39776[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (21))){
var inst_37334 = (state_37399[(12)]);
var inst_37331 = inst_37334;
var state_37399__$1 = (function (){var statearr_37424 = state_37399;
(statearr_37424[(8)] = inst_37331);

return statearr_37424;
})();
var statearr_37427_39777 = state_37399__$1;
(statearr_37427_39777[(2)] = null);

(statearr_37427_39777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (13))){
var inst_37360 = (state_37399[(2)]);
var inst_37361 = calc_state();
var inst_37331 = inst_37361;
var state_37399__$1 = (function (){var statearr_37430 = state_37399;
(statearr_37430[(8)] = inst_37331);

(statearr_37430[(17)] = inst_37360);

return statearr_37430;
})();
var statearr_37432_39778 = state_37399__$1;
(statearr_37432_39778[(2)] = null);

(statearr_37432_39778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (22))){
var inst_37391 = (state_37399[(2)]);
var state_37399__$1 = state_37399;
var statearr_37434_39779 = state_37399__$1;
(statearr_37434_39779[(2)] = inst_37391);

(statearr_37434_39779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (6))){
var inst_37347 = (state_37399[(14)]);
var inst_37351 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37347,change);
var state_37399__$1 = state_37399;
var statearr_37436_39780 = state_37399__$1;
(statearr_37436_39780[(2)] = inst_37351);

(statearr_37436_39780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (25))){
var state_37399__$1 = state_37399;
var statearr_37438_39781 = state_37399__$1;
(statearr_37438_39781[(2)] = null);

(statearr_37438_39781[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (17))){
var inst_37336 = (state_37399[(18)]);
var inst_37347 = (state_37399[(14)]);
var inst_37369 = (inst_37336.cljs$core$IFn$_invoke$arity$1 ? inst_37336.cljs$core$IFn$_invoke$arity$1(inst_37347) : inst_37336.call(null,inst_37347));
var inst_37370 = cljs.core.not(inst_37369);
var state_37399__$1 = state_37399;
var statearr_37440_39789 = state_37399__$1;
(statearr_37440_39789[(2)] = inst_37370);

(statearr_37440_39789[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (3))){
var inst_37395 = (state_37399[(2)]);
var state_37399__$1 = state_37399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37399__$1,inst_37395);
} else {
if((state_val_37400 === (12))){
var state_37399__$1 = state_37399;
var statearr_37446_39790 = state_37399__$1;
(statearr_37446_39790[(2)] = null);

(statearr_37446_39790[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (2))){
var inst_37334 = (state_37399[(12)]);
var inst_37331 = (state_37399[(8)]);
var inst_37334__$1 = cljs.core.__destructure_map(inst_37331);
var inst_37335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37334__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37334__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37334__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37399__$1 = (function (){var statearr_37450 = state_37399;
(statearr_37450[(12)] = inst_37334__$1);

(statearr_37450[(18)] = inst_37336);

(statearr_37450[(16)] = inst_37335);

return statearr_37450;
})();
return cljs.core.async.ioc_alts_BANG_(state_37399__$1,(4),inst_37337);
} else {
if((state_val_37400 === (23))){
var inst_37381 = (state_37399[(2)]);
var state_37399__$1 = state_37399;
if(cljs.core.truth_(inst_37381)){
var statearr_37455_39792 = state_37399__$1;
(statearr_37455_39792[(1)] = (24));

} else {
var statearr_37457_39793 = state_37399__$1;
(statearr_37457_39793[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (19))){
var inst_37373 = (state_37399[(2)]);
var state_37399__$1 = state_37399;
var statearr_37462_39795 = state_37399__$1;
(statearr_37462_39795[(2)] = inst_37373);

(statearr_37462_39795[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (11))){
var inst_37347 = (state_37399[(14)]);
var inst_37357 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37347);
var state_37399__$1 = state_37399;
var statearr_37463_39796 = state_37399__$1;
(statearr_37463_39796[(2)] = inst_37357);

(statearr_37463_39796[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (9))){
var inst_37364 = (state_37399[(19)]);
var inst_37335 = (state_37399[(16)]);
var inst_37347 = (state_37399[(14)]);
var inst_37364__$1 = (inst_37335.cljs$core$IFn$_invoke$arity$1 ? inst_37335.cljs$core$IFn$_invoke$arity$1(inst_37347) : inst_37335.call(null,inst_37347));
var state_37399__$1 = (function (){var statearr_37467 = state_37399;
(statearr_37467[(19)] = inst_37364__$1);

return statearr_37467;
})();
if(cljs.core.truth_(inst_37364__$1)){
var statearr_37468_39798 = state_37399__$1;
(statearr_37468_39798[(1)] = (14));

} else {
var statearr_37469_39799 = state_37399__$1;
(statearr_37469_39799[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (5))){
var inst_37348 = (state_37399[(13)]);
var state_37399__$1 = state_37399;
var statearr_37473_39800 = state_37399__$1;
(statearr_37473_39800[(2)] = inst_37348);

(statearr_37473_39800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (14))){
var inst_37364 = (state_37399[(19)]);
var state_37399__$1 = state_37399;
var statearr_37474_39801 = state_37399__$1;
(statearr_37474_39801[(2)] = inst_37364);

(statearr_37474_39801[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (26))){
var inst_37387 = (state_37399[(2)]);
var state_37399__$1 = state_37399;
var statearr_37475_39803 = state_37399__$1;
(statearr_37475_39803[(2)] = inst_37387);

(statearr_37475_39803[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (16))){
var inst_37375 = (state_37399[(2)]);
var state_37399__$1 = state_37399;
if(cljs.core.truth_(inst_37375)){
var statearr_37478_39804 = state_37399__$1;
(statearr_37478_39804[(1)] = (20));

} else {
var statearr_37483_39805 = state_37399__$1;
(statearr_37483_39805[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (10))){
var inst_37393 = (state_37399[(2)]);
var state_37399__$1 = state_37399;
var statearr_37484_39811 = state_37399__$1;
(statearr_37484_39811[(2)] = inst_37393);

(statearr_37484_39811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (18))){
var inst_37367 = (state_37399[(15)]);
var state_37399__$1 = state_37399;
var statearr_37486_39812 = state_37399__$1;
(statearr_37486_39812[(2)] = inst_37367);

(statearr_37486_39812[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (8))){
var inst_37346 = (state_37399[(7)]);
var inst_37355 = (inst_37346 == null);
var state_37399__$1 = state_37399;
if(cljs.core.truth_(inst_37355)){
var statearr_37488_39817 = state_37399__$1;
(statearr_37488_39817[(1)] = (11));

} else {
var statearr_37489_39818 = state_37399__$1;
(statearr_37489_39818[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__34532__auto__ = null;
var cljs$core$async$mix_$_state_machine__34532__auto____0 = (function (){
var statearr_37493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37493[(0)] = cljs$core$async$mix_$_state_machine__34532__auto__);

(statearr_37493[(1)] = (1));

return statearr_37493;
});
var cljs$core$async$mix_$_state_machine__34532__auto____1 = (function (state_37399){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_37399);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e37496){var ex__34535__auto__ = e37496;
var statearr_37497_39820 = state_37399;
(statearr_37497_39820[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_37399[(4)]))){
var statearr_37499_39821 = state_37399;
(statearr_37499_39821[(1)] = cljs.core.first((state_37399[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39822 = state_37399;
state_37399 = G__39822;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34532__auto__ = function(state_37399){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34532__auto____1.call(this,state_37399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34532__auto____0;
cljs$core$async$mix_$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34532__auto____1;
return cljs$core$async$mix_$_state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_37501 = f__35199__auto__();
(statearr_37501[(6)] = c__35197__auto___39758);

return statearr_37501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_39833 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_39833(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_39836 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_39836(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_39842 = (function() {
var G__39843 = null;
var G__39843__1 = (function (p){
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
var G__39843__2 = (function (p,v){
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
G__39843 = function(p,v){
switch(arguments.length){
case 1:
return G__39843__1.call(this,p);
case 2:
return G__39843__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39843.cljs$core$IFn$_invoke$arity$1 = G__39843__1;
G__39843.cljs$core$IFn$_invoke$arity$2 = G__39843__2;
return G__39843;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37564 = arguments.length;
switch (G__37564) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_39842(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_39842(p,v);
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
var G__37659 = arguments.length;
switch (G__37659) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37652_SHARP_){
if(cljs.core.truth_((p1__37652_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37652_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37652_SHARP_.call(null,topic)))){
return p1__37652_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37652_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37689 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37689 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37690){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37690 = meta37690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37691,meta37690__$1){
var self__ = this;
var _37691__$1 = this;
return (new cljs.core.async.t_cljs$core$async37689(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37690__$1));
}));

(cljs.core.async.t_cljs$core$async37689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37691){
var self__ = this;
var _37691__$1 = this;
return self__.meta37690;
}));

(cljs.core.async.t_cljs$core$async37689.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37689.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37689.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37689.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37689.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async37689.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37689.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37690","meta37690",672337426,null)], null);
}));

(cljs.core.async.t_cljs$core$async37689.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37689");

(cljs.core.async.t_cljs$core$async37689.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async37689");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37689.
 */
cljs.core.async.__GT_t_cljs$core$async37689 = (function cljs$core$async$__GT_t_cljs$core$async37689(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37690){
return (new cljs.core.async.t_cljs$core$async37689(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37690));
});

}

return (new cljs.core.async.t_cljs$core$async37689(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35197__auto___39878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_37816){
var state_val_37817 = (state_37816[(1)]);
if((state_val_37817 === (7))){
var inst_37810 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
var statearr_37851_39882 = state_37816__$1;
(statearr_37851_39882[(2)] = inst_37810);

(statearr_37851_39882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (20))){
var state_37816__$1 = state_37816;
var statearr_37857_39887 = state_37816__$1;
(statearr_37857_39887[(2)] = null);

(statearr_37857_39887[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (1))){
var state_37816__$1 = state_37816;
var statearr_37863_39888 = state_37816__$1;
(statearr_37863_39888[(2)] = null);

(statearr_37863_39888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (24))){
var inst_37792 = (state_37816[(7)]);
var inst_37801 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37792);
var state_37816__$1 = state_37816;
var statearr_37865_39894 = state_37816__$1;
(statearr_37865_39894[(2)] = inst_37801);

(statearr_37865_39894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (4))){
var inst_37741 = (state_37816[(8)]);
var inst_37741__$1 = (state_37816[(2)]);
var inst_37743 = (inst_37741__$1 == null);
var state_37816__$1 = (function (){var statearr_37869 = state_37816;
(statearr_37869[(8)] = inst_37741__$1);

return statearr_37869;
})();
if(cljs.core.truth_(inst_37743)){
var statearr_37874_39904 = state_37816__$1;
(statearr_37874_39904[(1)] = (5));

} else {
var statearr_37875_39905 = state_37816__$1;
(statearr_37875_39905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (15))){
var inst_37785 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
var statearr_37876_39906 = state_37816__$1;
(statearr_37876_39906[(2)] = inst_37785);

(statearr_37876_39906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (21))){
var inst_37806 = (state_37816[(2)]);
var state_37816__$1 = (function (){var statearr_37877 = state_37816;
(statearr_37877[(9)] = inst_37806);

return statearr_37877;
})();
var statearr_37878_39916 = state_37816__$1;
(statearr_37878_39916[(2)] = null);

(statearr_37878_39916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (13))){
var inst_37767 = (state_37816[(10)]);
var inst_37769 = cljs.core.chunked_seq_QMARK_(inst_37767);
var state_37816__$1 = state_37816;
if(inst_37769){
var statearr_37881_39932 = state_37816__$1;
(statearr_37881_39932[(1)] = (16));

} else {
var statearr_37884_39933 = state_37816__$1;
(statearr_37884_39933[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (22))){
var inst_37798 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
if(cljs.core.truth_(inst_37798)){
var statearr_37885_39934 = state_37816__$1;
(statearr_37885_39934[(1)] = (23));

} else {
var statearr_37886_39935 = state_37816__$1;
(statearr_37886_39935[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (6))){
var inst_37792 = (state_37816[(7)]);
var inst_37741 = (state_37816[(8)]);
var inst_37794 = (state_37816[(11)]);
var inst_37792__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37741) : topic_fn.call(null,inst_37741));
var inst_37793 = cljs.core.deref(mults);
var inst_37794__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37793,inst_37792__$1);
var state_37816__$1 = (function (){var statearr_37892 = state_37816;
(statearr_37892[(7)] = inst_37792__$1);

(statearr_37892[(11)] = inst_37794__$1);

return statearr_37892;
})();
if(cljs.core.truth_(inst_37794__$1)){
var statearr_37894_39943 = state_37816__$1;
(statearr_37894_39943[(1)] = (19));

} else {
var statearr_37895_39944 = state_37816__$1;
(statearr_37895_39944[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (25))){
var inst_37803 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
var statearr_37902_39945 = state_37816__$1;
(statearr_37902_39945[(2)] = inst_37803);

(statearr_37902_39945[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (17))){
var inst_37767 = (state_37816[(10)]);
var inst_37776 = cljs.core.first(inst_37767);
var inst_37777 = cljs.core.async.muxch_STAR_(inst_37776);
var inst_37778 = cljs.core.async.close_BANG_(inst_37777);
var inst_37779 = cljs.core.next(inst_37767);
var inst_37752 = inst_37779;
var inst_37753 = null;
var inst_37754 = (0);
var inst_37755 = (0);
var state_37816__$1 = (function (){var statearr_37905 = state_37816;
(statearr_37905[(12)] = inst_37752);

(statearr_37905[(13)] = inst_37755);

(statearr_37905[(14)] = inst_37778);

(statearr_37905[(15)] = inst_37753);

(statearr_37905[(16)] = inst_37754);

return statearr_37905;
})();
var statearr_37911_39960 = state_37816__$1;
(statearr_37911_39960[(2)] = null);

(statearr_37911_39960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (3))){
var inst_37813 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37816__$1,inst_37813);
} else {
if((state_val_37817 === (12))){
var inst_37787 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
var statearr_37913_39965 = state_37816__$1;
(statearr_37913_39965[(2)] = inst_37787);

(statearr_37913_39965[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (2))){
var state_37816__$1 = state_37816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37816__$1,(4),ch);
} else {
if((state_val_37817 === (23))){
var state_37816__$1 = state_37816;
var statearr_37917_39970 = state_37816__$1;
(statearr_37917_39970[(2)] = null);

(statearr_37917_39970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (19))){
var inst_37741 = (state_37816[(8)]);
var inst_37794 = (state_37816[(11)]);
var inst_37796 = cljs.core.async.muxch_STAR_(inst_37794);
var state_37816__$1 = state_37816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37816__$1,(22),inst_37796,inst_37741);
} else {
if((state_val_37817 === (11))){
var inst_37752 = (state_37816[(12)]);
var inst_37767 = (state_37816[(10)]);
var inst_37767__$1 = cljs.core.seq(inst_37752);
var state_37816__$1 = (function (){var statearr_37922 = state_37816;
(statearr_37922[(10)] = inst_37767__$1);

return statearr_37922;
})();
if(inst_37767__$1){
var statearr_37923_39976 = state_37816__$1;
(statearr_37923_39976[(1)] = (13));

} else {
var statearr_37924_39977 = state_37816__$1;
(statearr_37924_39977[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (9))){
var inst_37789 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
var statearr_37925_39978 = state_37816__$1;
(statearr_37925_39978[(2)] = inst_37789);

(statearr_37925_39978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (5))){
var inst_37749 = cljs.core.deref(mults);
var inst_37750 = cljs.core.vals(inst_37749);
var inst_37751 = cljs.core.seq(inst_37750);
var inst_37752 = inst_37751;
var inst_37753 = null;
var inst_37754 = (0);
var inst_37755 = (0);
var state_37816__$1 = (function (){var statearr_37927 = state_37816;
(statearr_37927[(12)] = inst_37752);

(statearr_37927[(13)] = inst_37755);

(statearr_37927[(15)] = inst_37753);

(statearr_37927[(16)] = inst_37754);

return statearr_37927;
})();
var statearr_37929_39980 = state_37816__$1;
(statearr_37929_39980[(2)] = null);

(statearr_37929_39980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (14))){
var state_37816__$1 = state_37816;
var statearr_37934_39982 = state_37816__$1;
(statearr_37934_39982[(2)] = null);

(statearr_37934_39982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (16))){
var inst_37767 = (state_37816[(10)]);
var inst_37771 = cljs.core.chunk_first(inst_37767);
var inst_37772 = cljs.core.chunk_rest(inst_37767);
var inst_37773 = cljs.core.count(inst_37771);
var inst_37752 = inst_37772;
var inst_37753 = inst_37771;
var inst_37754 = inst_37773;
var inst_37755 = (0);
var state_37816__$1 = (function (){var statearr_37939 = state_37816;
(statearr_37939[(12)] = inst_37752);

(statearr_37939[(13)] = inst_37755);

(statearr_37939[(15)] = inst_37753);

(statearr_37939[(16)] = inst_37754);

return statearr_37939;
})();
var statearr_37940_39983 = state_37816__$1;
(statearr_37940_39983[(2)] = null);

(statearr_37940_39983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (10))){
var inst_37752 = (state_37816[(12)]);
var inst_37755 = (state_37816[(13)]);
var inst_37753 = (state_37816[(15)]);
var inst_37754 = (state_37816[(16)]);
var inst_37761 = cljs.core._nth(inst_37753,inst_37755);
var inst_37762 = cljs.core.async.muxch_STAR_(inst_37761);
var inst_37763 = cljs.core.async.close_BANG_(inst_37762);
var inst_37764 = (inst_37755 + (1));
var tmp37930 = inst_37752;
var tmp37931 = inst_37753;
var tmp37932 = inst_37754;
var inst_37752__$1 = tmp37930;
var inst_37753__$1 = tmp37931;
var inst_37754__$1 = tmp37932;
var inst_37755__$1 = inst_37764;
var state_37816__$1 = (function (){var statearr_37949 = state_37816;
(statearr_37949[(12)] = inst_37752__$1);

(statearr_37949[(13)] = inst_37755__$1);

(statearr_37949[(15)] = inst_37753__$1);

(statearr_37949[(17)] = inst_37763);

(statearr_37949[(16)] = inst_37754__$1);

return statearr_37949;
})();
var statearr_37961_39985 = state_37816__$1;
(statearr_37961_39985[(2)] = null);

(statearr_37961_39985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (18))){
var inst_37782 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
var statearr_37970_39986 = state_37816__$1;
(statearr_37970_39986[(2)] = inst_37782);

(statearr_37970_39986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (8))){
var inst_37755 = (state_37816[(13)]);
var inst_37754 = (state_37816[(16)]);
var inst_37757 = (inst_37755 < inst_37754);
var inst_37758 = inst_37757;
var state_37816__$1 = state_37816;
if(cljs.core.truth_(inst_37758)){
var statearr_37973_39987 = state_37816__$1;
(statearr_37973_39987[(1)] = (10));

} else {
var statearr_37974_39988 = state_37816__$1;
(statearr_37974_39988[(1)] = (11));

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
var cljs$core$async$state_machine__34532__auto__ = null;
var cljs$core$async$state_machine__34532__auto____0 = (function (){
var statearr_37982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37982[(0)] = cljs$core$async$state_machine__34532__auto__);

(statearr_37982[(1)] = (1));

return statearr_37982;
});
var cljs$core$async$state_machine__34532__auto____1 = (function (state_37816){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_37816);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e37986){var ex__34535__auto__ = e37986;
var statearr_37987_39990 = state_37816;
(statearr_37987_39990[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_37816[(4)]))){
var statearr_37990_39992 = state_37816;
(statearr_37990_39992[(1)] = cljs.core.first((state_37816[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39994 = state_37816;
state_37816 = G__39994;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$state_machine__34532__auto__ = function(state_37816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34532__auto____1.call(this,state_37816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34532__auto____0;
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34532__auto____1;
return cljs$core$async$state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_37991 = f__35199__auto__();
(statearr_37991[(6)] = c__35197__auto___39878);

return statearr_37991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
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
var G__37993 = arguments.length;
switch (G__37993) {
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
var G__38004 = arguments.length;
switch (G__38004) {
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
var G__38027 = arguments.length;
switch (G__38027) {
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
var c__35197__auto___40006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_38075){
var state_val_38076 = (state_38075[(1)]);
if((state_val_38076 === (7))){
var state_38075__$1 = state_38075;
var statearr_38079_40008 = state_38075__$1;
(statearr_38079_40008[(2)] = null);

(statearr_38079_40008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38076 === (1))){
var state_38075__$1 = state_38075;
var statearr_38080_40009 = state_38075__$1;
(statearr_38080_40009[(2)] = null);

(statearr_38080_40009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38076 === (4))){
var inst_38033 = (state_38075[(7)]);
var inst_38034 = (state_38075[(8)]);
var inst_38036 = (inst_38034 < inst_38033);
var state_38075__$1 = state_38075;
if(cljs.core.truth_(inst_38036)){
var statearr_38083_40010 = state_38075__$1;
(statearr_38083_40010[(1)] = (6));

} else {
var statearr_38085_40011 = state_38075__$1;
(statearr_38085_40011[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38076 === (15))){
var inst_38060 = (state_38075[(9)]);
var inst_38065 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38060);
var state_38075__$1 = state_38075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38075__$1,(17),out,inst_38065);
} else {
if((state_val_38076 === (13))){
var inst_38060 = (state_38075[(9)]);
var inst_38060__$1 = (state_38075[(2)]);
var inst_38061 = cljs.core.some(cljs.core.nil_QMARK_,inst_38060__$1);
var state_38075__$1 = (function (){var statearr_38087 = state_38075;
(statearr_38087[(9)] = inst_38060__$1);

return statearr_38087;
})();
if(cljs.core.truth_(inst_38061)){
var statearr_38088_40013 = state_38075__$1;
(statearr_38088_40013[(1)] = (14));

} else {
var statearr_38089_40014 = state_38075__$1;
(statearr_38089_40014[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38076 === (6))){
var state_38075__$1 = state_38075;
var statearr_38094_40015 = state_38075__$1;
(statearr_38094_40015[(2)] = null);

(statearr_38094_40015[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38076 === (17))){
var inst_38067 = (state_38075[(2)]);
var state_38075__$1 = (function (){var statearr_38104 = state_38075;
(statearr_38104[(10)] = inst_38067);

return statearr_38104;
})();
var statearr_38105_40017 = state_38075__$1;
(statearr_38105_40017[(2)] = null);

(statearr_38105_40017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38076 === (3))){
var inst_38072 = (state_38075[(2)]);
var state_38075__$1 = state_38075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38075__$1,inst_38072);
} else {
if((state_val_38076 === (12))){
var _ = (function (){var statearr_38109 = state_38075;
(statearr_38109[(4)] = cljs.core.rest((state_38075[(4)])));

return statearr_38109;
})();
var state_38075__$1 = state_38075;
var ex38099 = (state_38075__$1[(2)]);
var statearr_38112_40019 = state_38075__$1;
(statearr_38112_40019[(5)] = ex38099);


if((ex38099 instanceof Object)){
var statearr_38113_40020 = state_38075__$1;
(statearr_38113_40020[(1)] = (11));

(statearr_38113_40020[(5)] = null);

} else {
throw ex38099;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38076 === (2))){
var inst_38032 = cljs.core.reset_BANG_(dctr,cnt);
var inst_38033 = cnt;
var inst_38034 = (0);
var state_38075__$1 = (function (){var statearr_38148 = state_38075;
(statearr_38148[(11)] = inst_38032);

(statearr_38148[(7)] = inst_38033);

(statearr_38148[(8)] = inst_38034);

return statearr_38148;
})();
var statearr_38160_40023 = state_38075__$1;
(statearr_38160_40023[(2)] = null);

(statearr_38160_40023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38076 === (11))){
var inst_38039 = (state_38075[(2)]);
var inst_38040 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38075__$1 = (function (){var statearr_38179 = state_38075;
(statearr_38179[(12)] = inst_38039);

return statearr_38179;
})();
var statearr_38180_40030 = state_38075__$1;
(statearr_38180_40030[(2)] = inst_38040);

(statearr_38180_40030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38076 === (9))){
var inst_38034 = (state_38075[(8)]);
var _ = (function (){var statearr_38182 = state_38075;
(statearr_38182[(4)] = cljs.core.cons((12),(state_38075[(4)])));

return statearr_38182;
})();
var inst_38046 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38034) : chs__$1.call(null,inst_38034));
var inst_38047 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38034) : done.call(null,inst_38034));
var inst_38048 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38046,inst_38047);
var ___$1 = (function (){var statearr_38184 = state_38075;
(statearr_38184[(4)] = cljs.core.rest((state_38075[(4)])));

return statearr_38184;
})();
var state_38075__$1 = state_38075;
var statearr_38188_40032 = state_38075__$1;
(statearr_38188_40032[(2)] = inst_38048);

(statearr_38188_40032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38076 === (5))){
var inst_38058 = (state_38075[(2)]);
var state_38075__$1 = (function (){var statearr_38189 = state_38075;
(statearr_38189[(13)] = inst_38058);

return statearr_38189;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38075__$1,(13),dchan);
} else {
if((state_val_38076 === (14))){
var inst_38063 = cljs.core.async.close_BANG_(out);
var state_38075__$1 = state_38075;
var statearr_38190_40037 = state_38075__$1;
(statearr_38190_40037[(2)] = inst_38063);

(statearr_38190_40037[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38076 === (16))){
var inst_38070 = (state_38075[(2)]);
var state_38075__$1 = state_38075;
var statearr_38191_40041 = state_38075__$1;
(statearr_38191_40041[(2)] = inst_38070);

(statearr_38191_40041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38076 === (10))){
var inst_38034 = (state_38075[(8)]);
var inst_38051 = (state_38075[(2)]);
var inst_38052 = (inst_38034 + (1));
var inst_38034__$1 = inst_38052;
var state_38075__$1 = (function (){var statearr_38192 = state_38075;
(statearr_38192[(14)] = inst_38051);

(statearr_38192[(8)] = inst_38034__$1);

return statearr_38192;
})();
var statearr_38194_40043 = state_38075__$1;
(statearr_38194_40043[(2)] = null);

(statearr_38194_40043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38076 === (8))){
var inst_38056 = (state_38075[(2)]);
var state_38075__$1 = state_38075;
var statearr_38195_40044 = state_38075__$1;
(statearr_38195_40044[(2)] = inst_38056);

(statearr_38195_40044[(1)] = (5));


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
var cljs$core$async$state_machine__34532__auto__ = null;
var cljs$core$async$state_machine__34532__auto____0 = (function (){
var statearr_38209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38209[(0)] = cljs$core$async$state_machine__34532__auto__);

(statearr_38209[(1)] = (1));

return statearr_38209;
});
var cljs$core$async$state_machine__34532__auto____1 = (function (state_38075){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_38075);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e38214){var ex__34535__auto__ = e38214;
var statearr_38215_40045 = state_38075;
(statearr_38215_40045[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_38075[(4)]))){
var statearr_38217_40046 = state_38075;
(statearr_38217_40046[(1)] = cljs.core.first((state_38075[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40047 = state_38075;
state_38075 = G__40047;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$state_machine__34532__auto__ = function(state_38075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34532__auto____1.call(this,state_38075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34532__auto____0;
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34532__auto____1;
return cljs$core$async$state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_38220 = f__35199__auto__();
(statearr_38220[(6)] = c__35197__auto___40006);

return statearr_38220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
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
var G__38227 = arguments.length;
switch (G__38227) {
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
var c__35197__auto___40052 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_38303){
var state_val_38305 = (state_38303[(1)]);
if((state_val_38305 === (7))){
var inst_38274 = (state_38303[(7)]);
var inst_38275 = (state_38303[(8)]);
var inst_38274__$1 = (state_38303[(2)]);
var inst_38275__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38274__$1,(0),null);
var inst_38276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38274__$1,(1),null);
var inst_38277 = (inst_38275__$1 == null);
var state_38303__$1 = (function (){var statearr_38328 = state_38303;
(statearr_38328[(7)] = inst_38274__$1);

(statearr_38328[(9)] = inst_38276);

(statearr_38328[(8)] = inst_38275__$1);

return statearr_38328;
})();
if(cljs.core.truth_(inst_38277)){
var statearr_38329_40054 = state_38303__$1;
(statearr_38329_40054[(1)] = (8));

} else {
var statearr_38330_40055 = state_38303__$1;
(statearr_38330_40055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (1))){
var inst_38262 = cljs.core.vec(chs);
var inst_38263 = inst_38262;
var state_38303__$1 = (function (){var statearr_38332 = state_38303;
(statearr_38332[(10)] = inst_38263);

return statearr_38332;
})();
var statearr_38333_40056 = state_38303__$1;
(statearr_38333_40056[(2)] = null);

(statearr_38333_40056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (4))){
var inst_38263 = (state_38303[(10)]);
var state_38303__$1 = state_38303;
return cljs.core.async.ioc_alts_BANG_(state_38303__$1,(7),inst_38263);
} else {
if((state_val_38305 === (6))){
var inst_38298 = (state_38303[(2)]);
var state_38303__$1 = state_38303;
var statearr_38336_40058 = state_38303__$1;
(statearr_38336_40058[(2)] = inst_38298);

(statearr_38336_40058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (3))){
var inst_38300 = (state_38303[(2)]);
var state_38303__$1 = state_38303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38303__$1,inst_38300);
} else {
if((state_val_38305 === (2))){
var inst_38263 = (state_38303[(10)]);
var inst_38265 = cljs.core.count(inst_38263);
var inst_38266 = (inst_38265 > (0));
var state_38303__$1 = state_38303;
if(cljs.core.truth_(inst_38266)){
var statearr_38340_40059 = state_38303__$1;
(statearr_38340_40059[(1)] = (4));

} else {
var statearr_38341_40060 = state_38303__$1;
(statearr_38341_40060[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (11))){
var inst_38263 = (state_38303[(10)]);
var inst_38291 = (state_38303[(2)]);
var tmp38337 = inst_38263;
var inst_38263__$1 = tmp38337;
var state_38303__$1 = (function (){var statearr_38343 = state_38303;
(statearr_38343[(10)] = inst_38263__$1);

(statearr_38343[(11)] = inst_38291);

return statearr_38343;
})();
var statearr_38344_40062 = state_38303__$1;
(statearr_38344_40062[(2)] = null);

(statearr_38344_40062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (9))){
var inst_38275 = (state_38303[(8)]);
var state_38303__$1 = state_38303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38303__$1,(11),out,inst_38275);
} else {
if((state_val_38305 === (5))){
var inst_38296 = cljs.core.async.close_BANG_(out);
var state_38303__$1 = state_38303;
var statearr_38345_40063 = state_38303__$1;
(statearr_38345_40063[(2)] = inst_38296);

(statearr_38345_40063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (10))){
var inst_38294 = (state_38303[(2)]);
var state_38303__$1 = state_38303;
var statearr_38346_40064 = state_38303__$1;
(statearr_38346_40064[(2)] = inst_38294);

(statearr_38346_40064[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (8))){
var inst_38263 = (state_38303[(10)]);
var inst_38274 = (state_38303[(7)]);
var inst_38276 = (state_38303[(9)]);
var inst_38275 = (state_38303[(8)]);
var inst_38286 = (function (){var cs = inst_38263;
var vec__38268 = inst_38274;
var v = inst_38275;
var c = inst_38276;
return (function (p1__38221_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38221_SHARP_);
});
})();
var inst_38287 = cljs.core.filterv(inst_38286,inst_38263);
var inst_38263__$1 = inst_38287;
var state_38303__$1 = (function (){var statearr_38353 = state_38303;
(statearr_38353[(10)] = inst_38263__$1);

return statearr_38353;
})();
var statearr_38354_40066 = state_38303__$1;
(statearr_38354_40066[(2)] = null);

(statearr_38354_40066[(1)] = (2));


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
var cljs$core$async$state_machine__34532__auto__ = null;
var cljs$core$async$state_machine__34532__auto____0 = (function (){
var statearr_38366 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38366[(0)] = cljs$core$async$state_machine__34532__auto__);

(statearr_38366[(1)] = (1));

return statearr_38366;
});
var cljs$core$async$state_machine__34532__auto____1 = (function (state_38303){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_38303);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e38378){var ex__34535__auto__ = e38378;
var statearr_38379_40069 = state_38303;
(statearr_38379_40069[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_38303[(4)]))){
var statearr_38381_40070 = state_38303;
(statearr_38381_40070[(1)] = cljs.core.first((state_38303[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40071 = state_38303;
state_38303 = G__40071;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$state_machine__34532__auto__ = function(state_38303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34532__auto____1.call(this,state_38303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34532__auto____0;
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34532__auto____1;
return cljs$core$async$state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_38383 = f__35199__auto__();
(statearr_38383[(6)] = c__35197__auto___40052);

return statearr_38383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
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
var G__38390 = arguments.length;
switch (G__38390) {
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
var c__35197__auto___40080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_38421){
var state_val_38422 = (state_38421[(1)]);
if((state_val_38422 === (7))){
var inst_38402 = (state_38421[(7)]);
var inst_38402__$1 = (state_38421[(2)]);
var inst_38404 = (inst_38402__$1 == null);
var inst_38405 = cljs.core.not(inst_38404);
var state_38421__$1 = (function (){var statearr_38424 = state_38421;
(statearr_38424[(7)] = inst_38402__$1);

return statearr_38424;
})();
if(inst_38405){
var statearr_38426_40081 = state_38421__$1;
(statearr_38426_40081[(1)] = (8));

} else {
var statearr_38427_40082 = state_38421__$1;
(statearr_38427_40082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38422 === (1))){
var inst_38397 = (0);
var state_38421__$1 = (function (){var statearr_38428 = state_38421;
(statearr_38428[(8)] = inst_38397);

return statearr_38428;
})();
var statearr_38429_40083 = state_38421__$1;
(statearr_38429_40083[(2)] = null);

(statearr_38429_40083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38422 === (4))){
var state_38421__$1 = state_38421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38421__$1,(7),ch);
} else {
if((state_val_38422 === (6))){
var inst_38416 = (state_38421[(2)]);
var state_38421__$1 = state_38421;
var statearr_38430_40084 = state_38421__$1;
(statearr_38430_40084[(2)] = inst_38416);

(statearr_38430_40084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38422 === (3))){
var inst_38418 = (state_38421[(2)]);
var inst_38419 = cljs.core.async.close_BANG_(out);
var state_38421__$1 = (function (){var statearr_38431 = state_38421;
(statearr_38431[(9)] = inst_38418);

return statearr_38431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38421__$1,inst_38419);
} else {
if((state_val_38422 === (2))){
var inst_38397 = (state_38421[(8)]);
var inst_38399 = (inst_38397 < n);
var state_38421__$1 = state_38421;
if(cljs.core.truth_(inst_38399)){
var statearr_38432_40086 = state_38421__$1;
(statearr_38432_40086[(1)] = (4));

} else {
var statearr_38433_40087 = state_38421__$1;
(statearr_38433_40087[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38422 === (11))){
var inst_38397 = (state_38421[(8)]);
var inst_38408 = (state_38421[(2)]);
var inst_38409 = (inst_38397 + (1));
var inst_38397__$1 = inst_38409;
var state_38421__$1 = (function (){var statearr_38434 = state_38421;
(statearr_38434[(10)] = inst_38408);

(statearr_38434[(8)] = inst_38397__$1);

return statearr_38434;
})();
var statearr_38437_40092 = state_38421__$1;
(statearr_38437_40092[(2)] = null);

(statearr_38437_40092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38422 === (9))){
var state_38421__$1 = state_38421;
var statearr_38439_40093 = state_38421__$1;
(statearr_38439_40093[(2)] = null);

(statearr_38439_40093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38422 === (5))){
var state_38421__$1 = state_38421;
var statearr_38440_40094 = state_38421__$1;
(statearr_38440_40094[(2)] = null);

(statearr_38440_40094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38422 === (10))){
var inst_38413 = (state_38421[(2)]);
var state_38421__$1 = state_38421;
var statearr_38441_40095 = state_38421__$1;
(statearr_38441_40095[(2)] = inst_38413);

(statearr_38441_40095[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38422 === (8))){
var inst_38402 = (state_38421[(7)]);
var state_38421__$1 = state_38421;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38421__$1,(11),out,inst_38402);
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
var cljs$core$async$state_machine__34532__auto__ = null;
var cljs$core$async$state_machine__34532__auto____0 = (function (){
var statearr_38450 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38450[(0)] = cljs$core$async$state_machine__34532__auto__);

(statearr_38450[(1)] = (1));

return statearr_38450;
});
var cljs$core$async$state_machine__34532__auto____1 = (function (state_38421){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_38421);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e38451){var ex__34535__auto__ = e38451;
var statearr_38452_40100 = state_38421;
(statearr_38452_40100[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_38421[(4)]))){
var statearr_38456_40101 = state_38421;
(statearr_38456_40101[(1)] = cljs.core.first((state_38421[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40102 = state_38421;
state_38421 = G__40102;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$state_machine__34532__auto__ = function(state_38421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34532__auto____1.call(this,state_38421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34532__auto____0;
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34532__auto____1;
return cljs$core$async$state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_38459 = f__35199__auto__();
(statearr_38459[(6)] = c__35197__auto___40080);

return statearr_38459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38466 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38466 = (function (f,ch,meta38467){
this.f = f;
this.ch = ch;
this.meta38467 = meta38467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38468,meta38467__$1){
var self__ = this;
var _38468__$1 = this;
return (new cljs.core.async.t_cljs$core$async38466(self__.f,self__.ch,meta38467__$1));
}));

(cljs.core.async.t_cljs$core$async38466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38468){
var self__ = this;
var _38468__$1 = this;
return self__.meta38467;
}));

(cljs.core.async.t_cljs$core$async38466.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38466.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38466.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38466.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38466.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38471 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38471 = (function (f,ch,meta38467,_,fn1,meta38472){
this.f = f;
this.ch = ch;
this.meta38467 = meta38467;
this._ = _;
this.fn1 = fn1;
this.meta38472 = meta38472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38473,meta38472__$1){
var self__ = this;
var _38473__$1 = this;
return (new cljs.core.async.t_cljs$core$async38471(self__.f,self__.ch,self__.meta38467,self__._,self__.fn1,meta38472__$1));
}));

(cljs.core.async.t_cljs$core$async38471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38473){
var self__ = this;
var _38473__$1 = this;
return self__.meta38472;
}));

(cljs.core.async.t_cljs$core$async38471.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38471.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38464_SHARP_){
var G__38477 = (((p1__38464_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38464_SHARP_) : self__.f.call(null,p1__38464_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38477) : f1.call(null,G__38477));
});
}));

(cljs.core.async.t_cljs$core$async38471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38467","meta38467",-1467707143,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38466","cljs.core.async/t_cljs$core$async38466",747289551,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38472","meta38472",1045997688,null)], null);
}));

(cljs.core.async.t_cljs$core$async38471.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38471");

(cljs.core.async.t_cljs$core$async38471.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async38471");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38471.
 */
cljs.core.async.__GT_t_cljs$core$async38471 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38471(f__$1,ch__$1,meta38467__$1,___$2,fn1__$1,meta38472){
return (new cljs.core.async.t_cljs$core$async38471(f__$1,ch__$1,meta38467__$1,___$2,fn1__$1,meta38472));
});

}

return (new cljs.core.async.t_cljs$core$async38471(self__.f,self__.ch,self__.meta38467,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38483 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38483) : self__.f.call(null,G__38483));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38466.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38466.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38467","meta38467",-1467707143,null)], null);
}));

(cljs.core.async.t_cljs$core$async38466.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38466");

(cljs.core.async.t_cljs$core$async38466.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async38466");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38466.
 */
cljs.core.async.__GT_t_cljs$core$async38466 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38466(f__$1,ch__$1,meta38467){
return (new cljs.core.async.t_cljs$core$async38466(f__$1,ch__$1,meta38467));
});

}

return (new cljs.core.async.t_cljs$core$async38466(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38489 = (function (f,ch,meta38490){
this.f = f;
this.ch = ch;
this.meta38490 = meta38490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38491,meta38490__$1){
var self__ = this;
var _38491__$1 = this;
return (new cljs.core.async.t_cljs$core$async38489(self__.f,self__.ch,meta38490__$1));
}));

(cljs.core.async.t_cljs$core$async38489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38491){
var self__ = this;
var _38491__$1 = this;
return self__.meta38490;
}));

(cljs.core.async.t_cljs$core$async38489.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38489.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38489.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38489.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38489.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38489.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38490","meta38490",714930169,null)], null);
}));

(cljs.core.async.t_cljs$core$async38489.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38489");

(cljs.core.async.t_cljs$core$async38489.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async38489");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38489.
 */
cljs.core.async.__GT_t_cljs$core$async38489 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38489(f__$1,ch__$1,meta38490){
return (new cljs.core.async.t_cljs$core$async38489(f__$1,ch__$1,meta38490));
});

}

return (new cljs.core.async.t_cljs$core$async38489(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38493 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38493 = (function (p,ch,meta38494){
this.p = p;
this.ch = ch;
this.meta38494 = meta38494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38495,meta38494__$1){
var self__ = this;
var _38495__$1 = this;
return (new cljs.core.async.t_cljs$core$async38493(self__.p,self__.ch,meta38494__$1));
}));

(cljs.core.async.t_cljs$core$async38493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38495){
var self__ = this;
var _38495__$1 = this;
return self__.meta38494;
}));

(cljs.core.async.t_cljs$core$async38493.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38493.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38493.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38493.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38493.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38493.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38493.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38494","meta38494",-1559812948,null)], null);
}));

(cljs.core.async.t_cljs$core$async38493.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38493");

(cljs.core.async.t_cljs$core$async38493.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async38493");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38493.
 */
cljs.core.async.__GT_t_cljs$core$async38493 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38493(p__$1,ch__$1,meta38494){
return (new cljs.core.async.t_cljs$core$async38493(p__$1,ch__$1,meta38494));
});

}

return (new cljs.core.async.t_cljs$core$async38493(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38514 = arguments.length;
switch (G__38514) {
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
var c__35197__auto___40159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_38545){
var state_val_38546 = (state_38545[(1)]);
if((state_val_38546 === (7))){
var inst_38541 = (state_38545[(2)]);
var state_38545__$1 = state_38545;
var statearr_38557_40160 = state_38545__$1;
(statearr_38557_40160[(2)] = inst_38541);

(statearr_38557_40160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (1))){
var state_38545__$1 = state_38545;
var statearr_38561_40161 = state_38545__$1;
(statearr_38561_40161[(2)] = null);

(statearr_38561_40161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (4))){
var inst_38527 = (state_38545[(7)]);
var inst_38527__$1 = (state_38545[(2)]);
var inst_38528 = (inst_38527__$1 == null);
var state_38545__$1 = (function (){var statearr_38566 = state_38545;
(statearr_38566[(7)] = inst_38527__$1);

return statearr_38566;
})();
if(cljs.core.truth_(inst_38528)){
var statearr_38567_40163 = state_38545__$1;
(statearr_38567_40163[(1)] = (5));

} else {
var statearr_38568_40165 = state_38545__$1;
(statearr_38568_40165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (6))){
var inst_38527 = (state_38545[(7)]);
var inst_38532 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38527) : p.call(null,inst_38527));
var state_38545__$1 = state_38545;
if(cljs.core.truth_(inst_38532)){
var statearr_38569_40170 = state_38545__$1;
(statearr_38569_40170[(1)] = (8));

} else {
var statearr_38570_40174 = state_38545__$1;
(statearr_38570_40174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (3))){
var inst_38543 = (state_38545[(2)]);
var state_38545__$1 = state_38545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38545__$1,inst_38543);
} else {
if((state_val_38546 === (2))){
var state_38545__$1 = state_38545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38545__$1,(4),ch);
} else {
if((state_val_38546 === (11))){
var inst_38535 = (state_38545[(2)]);
var state_38545__$1 = state_38545;
var statearr_38579_40187 = state_38545__$1;
(statearr_38579_40187[(2)] = inst_38535);

(statearr_38579_40187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (9))){
var state_38545__$1 = state_38545;
var statearr_38580_40193 = state_38545__$1;
(statearr_38580_40193[(2)] = null);

(statearr_38580_40193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (5))){
var inst_38530 = cljs.core.async.close_BANG_(out);
var state_38545__$1 = state_38545;
var statearr_38581_40195 = state_38545__$1;
(statearr_38581_40195[(2)] = inst_38530);

(statearr_38581_40195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (10))){
var inst_38538 = (state_38545[(2)]);
var state_38545__$1 = (function (){var statearr_38582 = state_38545;
(statearr_38582[(8)] = inst_38538);

return statearr_38582;
})();
var statearr_38583_40199 = state_38545__$1;
(statearr_38583_40199[(2)] = null);

(statearr_38583_40199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (8))){
var inst_38527 = (state_38545[(7)]);
var state_38545__$1 = state_38545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38545__$1,(11),out,inst_38527);
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
var cljs$core$async$state_machine__34532__auto__ = null;
var cljs$core$async$state_machine__34532__auto____0 = (function (){
var statearr_38585 = [null,null,null,null,null,null,null,null,null];
(statearr_38585[(0)] = cljs$core$async$state_machine__34532__auto__);

(statearr_38585[(1)] = (1));

return statearr_38585;
});
var cljs$core$async$state_machine__34532__auto____1 = (function (state_38545){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_38545);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e38586){var ex__34535__auto__ = e38586;
var statearr_38587_40205 = state_38545;
(statearr_38587_40205[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_38545[(4)]))){
var statearr_38588_40212 = state_38545;
(statearr_38588_40212[(1)] = cljs.core.first((state_38545[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40213 = state_38545;
state_38545 = G__40213;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$state_machine__34532__auto__ = function(state_38545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34532__auto____1.call(this,state_38545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34532__auto____0;
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34532__auto____1;
return cljs$core$async$state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_38589 = f__35199__auto__();
(statearr_38589[(6)] = c__35197__auto___40159);

return statearr_38589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38599 = arguments.length;
switch (G__38599) {
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
var c__35197__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_38684){
var state_val_38685 = (state_38684[(1)]);
if((state_val_38685 === (7))){
var inst_38677 = (state_38684[(2)]);
var state_38684__$1 = state_38684;
var statearr_38697_40239 = state_38684__$1;
(statearr_38697_40239[(2)] = inst_38677);

(statearr_38697_40239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (20))){
var inst_38636 = (state_38684[(7)]);
var inst_38649 = (state_38684[(2)]);
var inst_38651 = cljs.core.next(inst_38636);
var inst_38619 = inst_38651;
var inst_38620 = null;
var inst_38621 = (0);
var inst_38622 = (0);
var state_38684__$1 = (function (){var statearr_38708 = state_38684;
(statearr_38708[(8)] = inst_38649);

(statearr_38708[(9)] = inst_38622);

(statearr_38708[(10)] = inst_38619);

(statearr_38708[(11)] = inst_38621);

(statearr_38708[(12)] = inst_38620);

return statearr_38708;
})();
var statearr_38719_40249 = state_38684__$1;
(statearr_38719_40249[(2)] = null);

(statearr_38719_40249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (1))){
var state_38684__$1 = state_38684;
var statearr_38720_40252 = state_38684__$1;
(statearr_38720_40252[(2)] = null);

(statearr_38720_40252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (4))){
var inst_38608 = (state_38684[(13)]);
var inst_38608__$1 = (state_38684[(2)]);
var inst_38609 = (inst_38608__$1 == null);
var state_38684__$1 = (function (){var statearr_38721 = state_38684;
(statearr_38721[(13)] = inst_38608__$1);

return statearr_38721;
})();
if(cljs.core.truth_(inst_38609)){
var statearr_38722_40261 = state_38684__$1;
(statearr_38722_40261[(1)] = (5));

} else {
var statearr_38723_40262 = state_38684__$1;
(statearr_38723_40262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (15))){
var state_38684__$1 = state_38684;
var statearr_38728_40263 = state_38684__$1;
(statearr_38728_40263[(2)] = null);

(statearr_38728_40263[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (21))){
var state_38684__$1 = state_38684;
var statearr_38729_40264 = state_38684__$1;
(statearr_38729_40264[(2)] = null);

(statearr_38729_40264[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (13))){
var inst_38622 = (state_38684[(9)]);
var inst_38619 = (state_38684[(10)]);
var inst_38621 = (state_38684[(11)]);
var inst_38620 = (state_38684[(12)]);
var inst_38629 = (state_38684[(2)]);
var inst_38633 = (inst_38622 + (1));
var tmp38725 = inst_38619;
var tmp38726 = inst_38621;
var tmp38727 = inst_38620;
var inst_38619__$1 = tmp38725;
var inst_38620__$1 = tmp38727;
var inst_38621__$1 = tmp38726;
var inst_38622__$1 = inst_38633;
var state_38684__$1 = (function (){var statearr_38735 = state_38684;
(statearr_38735[(14)] = inst_38629);

(statearr_38735[(9)] = inst_38622__$1);

(statearr_38735[(10)] = inst_38619__$1);

(statearr_38735[(11)] = inst_38621__$1);

(statearr_38735[(12)] = inst_38620__$1);

return statearr_38735;
})();
var statearr_38736_40268 = state_38684__$1;
(statearr_38736_40268[(2)] = null);

(statearr_38736_40268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (22))){
var state_38684__$1 = state_38684;
var statearr_38737_40269 = state_38684__$1;
(statearr_38737_40269[(2)] = null);

(statearr_38737_40269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (6))){
var inst_38608 = (state_38684[(13)]);
var inst_38617 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38608) : f.call(null,inst_38608));
var inst_38618 = cljs.core.seq(inst_38617);
var inst_38619 = inst_38618;
var inst_38620 = null;
var inst_38621 = (0);
var inst_38622 = (0);
var state_38684__$1 = (function (){var statearr_38738 = state_38684;
(statearr_38738[(9)] = inst_38622);

(statearr_38738[(10)] = inst_38619);

(statearr_38738[(11)] = inst_38621);

(statearr_38738[(12)] = inst_38620);

return statearr_38738;
})();
var statearr_38739_40270 = state_38684__$1;
(statearr_38739_40270[(2)] = null);

(statearr_38739_40270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (17))){
var inst_38636 = (state_38684[(7)]);
var inst_38640 = cljs.core.chunk_first(inst_38636);
var inst_38643 = cljs.core.chunk_rest(inst_38636);
var inst_38644 = cljs.core.count(inst_38640);
var inst_38619 = inst_38643;
var inst_38620 = inst_38640;
var inst_38621 = inst_38644;
var inst_38622 = (0);
var state_38684__$1 = (function (){var statearr_38741 = state_38684;
(statearr_38741[(9)] = inst_38622);

(statearr_38741[(10)] = inst_38619);

(statearr_38741[(11)] = inst_38621);

(statearr_38741[(12)] = inst_38620);

return statearr_38741;
})();
var statearr_38742_40271 = state_38684__$1;
(statearr_38742_40271[(2)] = null);

(statearr_38742_40271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (3))){
var inst_38682 = (state_38684[(2)]);
var state_38684__$1 = state_38684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38684__$1,inst_38682);
} else {
if((state_val_38685 === (12))){
var inst_38661 = (state_38684[(2)]);
var state_38684__$1 = state_38684;
var statearr_38743_40272 = state_38684__$1;
(statearr_38743_40272[(2)] = inst_38661);

(statearr_38743_40272[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (2))){
var state_38684__$1 = state_38684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38684__$1,(4),in$);
} else {
if((state_val_38685 === (23))){
var inst_38674 = (state_38684[(2)]);
var state_38684__$1 = state_38684;
var statearr_38744_40274 = state_38684__$1;
(statearr_38744_40274[(2)] = inst_38674);

(statearr_38744_40274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (19))){
var inst_38654 = (state_38684[(2)]);
var state_38684__$1 = state_38684;
var statearr_38750_40275 = state_38684__$1;
(statearr_38750_40275[(2)] = inst_38654);

(statearr_38750_40275[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (11))){
var inst_38619 = (state_38684[(10)]);
var inst_38636 = (state_38684[(7)]);
var inst_38636__$1 = cljs.core.seq(inst_38619);
var state_38684__$1 = (function (){var statearr_38751 = state_38684;
(statearr_38751[(7)] = inst_38636__$1);

return statearr_38751;
})();
if(inst_38636__$1){
var statearr_38752_40277 = state_38684__$1;
(statearr_38752_40277[(1)] = (14));

} else {
var statearr_38753_40278 = state_38684__$1;
(statearr_38753_40278[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (9))){
var inst_38663 = (state_38684[(2)]);
var inst_38668 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38684__$1 = (function (){var statearr_38760 = state_38684;
(statearr_38760[(15)] = inst_38663);

return statearr_38760;
})();
if(cljs.core.truth_(inst_38668)){
var statearr_38765_40279 = state_38684__$1;
(statearr_38765_40279[(1)] = (21));

} else {
var statearr_38771_40280 = state_38684__$1;
(statearr_38771_40280[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (5))){
var inst_38611 = cljs.core.async.close_BANG_(out);
var state_38684__$1 = state_38684;
var statearr_38787_40281 = state_38684__$1;
(statearr_38787_40281[(2)] = inst_38611);

(statearr_38787_40281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (14))){
var inst_38636 = (state_38684[(7)]);
var inst_38638 = cljs.core.chunked_seq_QMARK_(inst_38636);
var state_38684__$1 = state_38684;
if(inst_38638){
var statearr_38788_40286 = state_38684__$1;
(statearr_38788_40286[(1)] = (17));

} else {
var statearr_38790_40287 = state_38684__$1;
(statearr_38790_40287[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (16))){
var inst_38659 = (state_38684[(2)]);
var state_38684__$1 = state_38684;
var statearr_38791_40288 = state_38684__$1;
(statearr_38791_40288[(2)] = inst_38659);

(statearr_38791_40288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (10))){
var inst_38622 = (state_38684[(9)]);
var inst_38620 = (state_38684[(12)]);
var inst_38627 = cljs.core._nth(inst_38620,inst_38622);
var state_38684__$1 = state_38684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38684__$1,(13),out,inst_38627);
} else {
if((state_val_38685 === (18))){
var inst_38636 = (state_38684[(7)]);
var inst_38647 = cljs.core.first(inst_38636);
var state_38684__$1 = state_38684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38684__$1,(20),out,inst_38647);
} else {
if((state_val_38685 === (8))){
var inst_38622 = (state_38684[(9)]);
var inst_38621 = (state_38684[(11)]);
var inst_38624 = (inst_38622 < inst_38621);
var inst_38625 = inst_38624;
var state_38684__$1 = state_38684;
if(cljs.core.truth_(inst_38625)){
var statearr_38797_40289 = state_38684__$1;
(statearr_38797_40289[(1)] = (10));

} else {
var statearr_38798_40290 = state_38684__$1;
(statearr_38798_40290[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__34532__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34532__auto____0 = (function (){
var statearr_38800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38800[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34532__auto__);

(statearr_38800[(1)] = (1));

return statearr_38800;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34532__auto____1 = (function (state_38684){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_38684);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e38801){var ex__34535__auto__ = e38801;
var statearr_38802_40295 = state_38684;
(statearr_38802_40295[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_38684[(4)]))){
var statearr_38803_40296 = state_38684;
(statearr_38803_40296[(1)] = cljs.core.first((state_38684[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40297 = state_38684;
state_38684 = G__40297;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34532__auto__ = function(state_38684){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34532__auto____1.call(this,state_38684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34532__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34532__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_38813 = f__35199__auto__();
(statearr_38813[(6)] = c__35197__auto__);

return statearr_38813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
}));

return c__35197__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38815 = arguments.length;
switch (G__38815) {
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
var G__38818 = arguments.length;
switch (G__38818) {
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
var G__38825 = arguments.length;
switch (G__38825) {
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
var c__35197__auto___40302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_38856){
var state_val_38857 = (state_38856[(1)]);
if((state_val_38857 === (7))){
var inst_38849 = (state_38856[(2)]);
var state_38856__$1 = state_38856;
var statearr_38861_40303 = state_38856__$1;
(statearr_38861_40303[(2)] = inst_38849);

(statearr_38861_40303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (1))){
var inst_38829 = null;
var state_38856__$1 = (function (){var statearr_38862 = state_38856;
(statearr_38862[(7)] = inst_38829);

return statearr_38862;
})();
var statearr_38863_40304 = state_38856__$1;
(statearr_38863_40304[(2)] = null);

(statearr_38863_40304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (4))){
var inst_38832 = (state_38856[(8)]);
var inst_38832__$1 = (state_38856[(2)]);
var inst_38833 = (inst_38832__$1 == null);
var inst_38834 = cljs.core.not(inst_38833);
var state_38856__$1 = (function (){var statearr_38864 = state_38856;
(statearr_38864[(8)] = inst_38832__$1);

return statearr_38864;
})();
if(inst_38834){
var statearr_38865_40305 = state_38856__$1;
(statearr_38865_40305[(1)] = (5));

} else {
var statearr_38867_40307 = state_38856__$1;
(statearr_38867_40307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (6))){
var state_38856__$1 = state_38856;
var statearr_38868_40308 = state_38856__$1;
(statearr_38868_40308[(2)] = null);

(statearr_38868_40308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (3))){
var inst_38851 = (state_38856[(2)]);
var inst_38852 = cljs.core.async.close_BANG_(out);
var state_38856__$1 = (function (){var statearr_38870 = state_38856;
(statearr_38870[(9)] = inst_38851);

return statearr_38870;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38856__$1,inst_38852);
} else {
if((state_val_38857 === (2))){
var state_38856__$1 = state_38856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38856__$1,(4),ch);
} else {
if((state_val_38857 === (11))){
var inst_38832 = (state_38856[(8)]);
var inst_38843 = (state_38856[(2)]);
var inst_38829 = inst_38832;
var state_38856__$1 = (function (){var statearr_38875 = state_38856;
(statearr_38875[(7)] = inst_38829);

(statearr_38875[(10)] = inst_38843);

return statearr_38875;
})();
var statearr_38880_40313 = state_38856__$1;
(statearr_38880_40313[(2)] = null);

(statearr_38880_40313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (9))){
var inst_38832 = (state_38856[(8)]);
var state_38856__$1 = state_38856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38856__$1,(11),out,inst_38832);
} else {
if((state_val_38857 === (5))){
var inst_38829 = (state_38856[(7)]);
var inst_38832 = (state_38856[(8)]);
var inst_38838 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38832,inst_38829);
var state_38856__$1 = state_38856;
if(inst_38838){
var statearr_38882_40318 = state_38856__$1;
(statearr_38882_40318[(1)] = (8));

} else {
var statearr_38883_40319 = state_38856__$1;
(statearr_38883_40319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (10))){
var inst_38846 = (state_38856[(2)]);
var state_38856__$1 = state_38856;
var statearr_38884_40320 = state_38856__$1;
(statearr_38884_40320[(2)] = inst_38846);

(statearr_38884_40320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (8))){
var inst_38829 = (state_38856[(7)]);
var tmp38881 = inst_38829;
var inst_38829__$1 = tmp38881;
var state_38856__$1 = (function (){var statearr_38885 = state_38856;
(statearr_38885[(7)] = inst_38829__$1);

return statearr_38885;
})();
var statearr_38886_40321 = state_38856__$1;
(statearr_38886_40321[(2)] = null);

(statearr_38886_40321[(1)] = (2));


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
var cljs$core$async$state_machine__34532__auto__ = null;
var cljs$core$async$state_machine__34532__auto____0 = (function (){
var statearr_38887 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38887[(0)] = cljs$core$async$state_machine__34532__auto__);

(statearr_38887[(1)] = (1));

return statearr_38887;
});
var cljs$core$async$state_machine__34532__auto____1 = (function (state_38856){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_38856);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e38888){var ex__34535__auto__ = e38888;
var statearr_38889_40327 = state_38856;
(statearr_38889_40327[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_38856[(4)]))){
var statearr_38890_40328 = state_38856;
(statearr_38890_40328[(1)] = cljs.core.first((state_38856[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40329 = state_38856;
state_38856 = G__40329;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$state_machine__34532__auto__ = function(state_38856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34532__auto____1.call(this,state_38856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34532__auto____0;
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34532__auto____1;
return cljs$core$async$state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_38898 = f__35199__auto__();
(statearr_38898[(6)] = c__35197__auto___40302);

return statearr_38898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38901 = arguments.length;
switch (G__38901) {
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
var c__35197__auto___40332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_38959){
var state_val_38960 = (state_38959[(1)]);
if((state_val_38960 === (7))){
var inst_38949 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
var statearr_38962_40333 = state_38959__$1;
(statearr_38962_40333[(2)] = inst_38949);

(statearr_38962_40333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (1))){
var inst_38911 = (new Array(n));
var inst_38914 = inst_38911;
var inst_38915 = (0);
var state_38959__$1 = (function (){var statearr_38963 = state_38959;
(statearr_38963[(7)] = inst_38915);

(statearr_38963[(8)] = inst_38914);

return statearr_38963;
})();
var statearr_38964_40337 = state_38959__$1;
(statearr_38964_40337[(2)] = null);

(statearr_38964_40337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (4))){
var inst_38920 = (state_38959[(9)]);
var inst_38920__$1 = (state_38959[(2)]);
var inst_38921 = (inst_38920__$1 == null);
var inst_38922 = cljs.core.not(inst_38921);
var state_38959__$1 = (function (){var statearr_38967 = state_38959;
(statearr_38967[(9)] = inst_38920__$1);

return statearr_38967;
})();
if(inst_38922){
var statearr_38968_40343 = state_38959__$1;
(statearr_38968_40343[(1)] = (5));

} else {
var statearr_38969_40344 = state_38959__$1;
(statearr_38969_40344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (15))){
var inst_38942 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
var statearr_38977_40345 = state_38959__$1;
(statearr_38977_40345[(2)] = inst_38942);

(statearr_38977_40345[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (13))){
var state_38959__$1 = state_38959;
var statearr_38980_40346 = state_38959__$1;
(statearr_38980_40346[(2)] = null);

(statearr_38980_40346[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (6))){
var inst_38915 = (state_38959[(7)]);
var inst_38938 = (inst_38915 > (0));
var state_38959__$1 = state_38959;
if(cljs.core.truth_(inst_38938)){
var statearr_38986_40347 = state_38959__$1;
(statearr_38986_40347[(1)] = (12));

} else {
var statearr_38987_40350 = state_38959__$1;
(statearr_38987_40350[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (3))){
var inst_38957 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38959__$1,inst_38957);
} else {
if((state_val_38960 === (12))){
var inst_38914 = (state_38959[(8)]);
var inst_38940 = cljs.core.vec(inst_38914);
var state_38959__$1 = state_38959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38959__$1,(15),out,inst_38940);
} else {
if((state_val_38960 === (2))){
var state_38959__$1 = state_38959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38959__$1,(4),ch);
} else {
if((state_val_38960 === (11))){
var inst_38932 = (state_38959[(2)]);
var inst_38933 = (new Array(n));
var inst_38914 = inst_38933;
var inst_38915 = (0);
var state_38959__$1 = (function (){var statearr_38993 = state_38959;
(statearr_38993[(7)] = inst_38915);

(statearr_38993[(10)] = inst_38932);

(statearr_38993[(8)] = inst_38914);

return statearr_38993;
})();
var statearr_38994_40355 = state_38959__$1;
(statearr_38994_40355[(2)] = null);

(statearr_38994_40355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (9))){
var inst_38914 = (state_38959[(8)]);
var inst_38930 = cljs.core.vec(inst_38914);
var state_38959__$1 = state_38959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38959__$1,(11),out,inst_38930);
} else {
if((state_val_38960 === (5))){
var inst_38915 = (state_38959[(7)]);
var inst_38925 = (state_38959[(11)]);
var inst_38914 = (state_38959[(8)]);
var inst_38920 = (state_38959[(9)]);
var inst_38924 = (inst_38914[inst_38915] = inst_38920);
var inst_38925__$1 = (inst_38915 + (1));
var inst_38926 = (inst_38925__$1 < n);
var state_38959__$1 = (function (){var statearr_38999 = state_38959;
(statearr_38999[(11)] = inst_38925__$1);

(statearr_38999[(12)] = inst_38924);

return statearr_38999;
})();
if(cljs.core.truth_(inst_38926)){
var statearr_39000_40359 = state_38959__$1;
(statearr_39000_40359[(1)] = (8));

} else {
var statearr_39001_40360 = state_38959__$1;
(statearr_39001_40360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (14))){
var inst_38946 = (state_38959[(2)]);
var inst_38947 = cljs.core.async.close_BANG_(out);
var state_38959__$1 = (function (){var statearr_39003 = state_38959;
(statearr_39003[(13)] = inst_38946);

return statearr_39003;
})();
var statearr_39004_40361 = state_38959__$1;
(statearr_39004_40361[(2)] = inst_38947);

(statearr_39004_40361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (10))){
var inst_38936 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
var statearr_39005_40362 = state_38959__$1;
(statearr_39005_40362[(2)] = inst_38936);

(statearr_39005_40362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (8))){
var inst_38925 = (state_38959[(11)]);
var inst_38914 = (state_38959[(8)]);
var tmp39002 = inst_38914;
var inst_38914__$1 = tmp39002;
var inst_38915 = inst_38925;
var state_38959__$1 = (function (){var statearr_39006 = state_38959;
(statearr_39006[(7)] = inst_38915);

(statearr_39006[(8)] = inst_38914__$1);

return statearr_39006;
})();
var statearr_39007_40363 = state_38959__$1;
(statearr_39007_40363[(2)] = null);

(statearr_39007_40363[(1)] = (2));


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
var cljs$core$async$state_machine__34532__auto__ = null;
var cljs$core$async$state_machine__34532__auto____0 = (function (){
var statearr_39009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39009[(0)] = cljs$core$async$state_machine__34532__auto__);

(statearr_39009[(1)] = (1));

return statearr_39009;
});
var cljs$core$async$state_machine__34532__auto____1 = (function (state_38959){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_38959);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e39010){var ex__34535__auto__ = e39010;
var statearr_39011_40364 = state_38959;
(statearr_39011_40364[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_38959[(4)]))){
var statearr_39012_40365 = state_38959;
(statearr_39012_40365[(1)] = cljs.core.first((state_38959[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40366 = state_38959;
state_38959 = G__40366;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$state_machine__34532__auto__ = function(state_38959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34532__auto____1.call(this,state_38959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34532__auto____0;
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34532__auto____1;
return cljs$core$async$state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_39020 = f__35199__auto__();
(statearr_39020[(6)] = c__35197__auto___40332);

return statearr_39020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39023 = arguments.length;
switch (G__39023) {
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
var c__35197__auto___40369 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_39081){
var state_val_39083 = (state_39081[(1)]);
if((state_val_39083 === (7))){
var inst_39075 = (state_39081[(2)]);
var state_39081__$1 = state_39081;
var statearr_39085_40370 = state_39081__$1;
(statearr_39085_40370[(2)] = inst_39075);

(statearr_39085_40370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39083 === (1))){
var inst_39026 = [];
var inst_39027 = inst_39026;
var inst_39028 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39081__$1 = (function (){var statearr_39087 = state_39081;
(statearr_39087[(7)] = inst_39028);

(statearr_39087[(8)] = inst_39027);

return statearr_39087;
})();
var statearr_39088_40371 = state_39081__$1;
(statearr_39088_40371[(2)] = null);

(statearr_39088_40371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39083 === (4))){
var inst_39031 = (state_39081[(9)]);
var inst_39031__$1 = (state_39081[(2)]);
var inst_39034 = (inst_39031__$1 == null);
var inst_39035 = cljs.core.not(inst_39034);
var state_39081__$1 = (function (){var statearr_39089 = state_39081;
(statearr_39089[(9)] = inst_39031__$1);

return statearr_39089;
})();
if(inst_39035){
var statearr_39090_40372 = state_39081__$1;
(statearr_39090_40372[(1)] = (5));

} else {
var statearr_39091_40373 = state_39081__$1;
(statearr_39091_40373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39083 === (15))){
var inst_39027 = (state_39081[(8)]);
var inst_39067 = cljs.core.vec(inst_39027);
var state_39081__$1 = state_39081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39081__$1,(18),out,inst_39067);
} else {
if((state_val_39083 === (13))){
var inst_39059 = (state_39081[(2)]);
var state_39081__$1 = state_39081;
var statearr_39092_40374 = state_39081__$1;
(statearr_39092_40374[(2)] = inst_39059);

(statearr_39092_40374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39083 === (6))){
var inst_39027 = (state_39081[(8)]);
var inst_39063 = inst_39027.length;
var inst_39064 = (inst_39063 > (0));
var state_39081__$1 = state_39081;
if(cljs.core.truth_(inst_39064)){
var statearr_39093_40375 = state_39081__$1;
(statearr_39093_40375[(1)] = (15));

} else {
var statearr_39094_40376 = state_39081__$1;
(statearr_39094_40376[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39083 === (17))){
var inst_39072 = (state_39081[(2)]);
var inst_39073 = cljs.core.async.close_BANG_(out);
var state_39081__$1 = (function (){var statearr_39095 = state_39081;
(statearr_39095[(10)] = inst_39072);

return statearr_39095;
})();
var statearr_39096_40377 = state_39081__$1;
(statearr_39096_40377[(2)] = inst_39073);

(statearr_39096_40377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39083 === (3))){
var inst_39077 = (state_39081[(2)]);
var state_39081__$1 = state_39081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39081__$1,inst_39077);
} else {
if((state_val_39083 === (12))){
var inst_39027 = (state_39081[(8)]);
var inst_39051 = cljs.core.vec(inst_39027);
var state_39081__$1 = state_39081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39081__$1,(14),out,inst_39051);
} else {
if((state_val_39083 === (2))){
var state_39081__$1 = state_39081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39081__$1,(4),ch);
} else {
if((state_val_39083 === (11))){
var inst_39027 = (state_39081[(8)]);
var inst_39031 = (state_39081[(9)]);
var inst_39037 = (state_39081[(11)]);
var inst_39048 = inst_39027.push(inst_39031);
var tmp39097 = inst_39027;
var inst_39027__$1 = tmp39097;
var inst_39028 = inst_39037;
var state_39081__$1 = (function (){var statearr_39102 = state_39081;
(statearr_39102[(7)] = inst_39028);

(statearr_39102[(8)] = inst_39027__$1);

(statearr_39102[(12)] = inst_39048);

return statearr_39102;
})();
var statearr_39103_40378 = state_39081__$1;
(statearr_39103_40378[(2)] = null);

(statearr_39103_40378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39083 === (9))){
var inst_39028 = (state_39081[(7)]);
var inst_39043 = cljs.core.keyword_identical_QMARK_(inst_39028,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_39081__$1 = state_39081;
var statearr_39105_40379 = state_39081__$1;
(statearr_39105_40379[(2)] = inst_39043);

(statearr_39105_40379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39083 === (5))){
var inst_39028 = (state_39081[(7)]);
var inst_39031 = (state_39081[(9)]);
var inst_39037 = (state_39081[(11)]);
var inst_39039 = (state_39081[(13)]);
var inst_39037__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39031) : f.call(null,inst_39031));
var inst_39039__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39037__$1,inst_39028);
var state_39081__$1 = (function (){var statearr_39106 = state_39081;
(statearr_39106[(11)] = inst_39037__$1);

(statearr_39106[(13)] = inst_39039__$1);

return statearr_39106;
})();
if(inst_39039__$1){
var statearr_39107_40380 = state_39081__$1;
(statearr_39107_40380[(1)] = (8));

} else {
var statearr_39108_40381 = state_39081__$1;
(statearr_39108_40381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39083 === (14))){
var inst_39031 = (state_39081[(9)]);
var inst_39037 = (state_39081[(11)]);
var inst_39053 = (state_39081[(2)]);
var inst_39055 = [];
var inst_39056 = inst_39055.push(inst_39031);
var inst_39027 = inst_39055;
var inst_39028 = inst_39037;
var state_39081__$1 = (function (){var statearr_39110 = state_39081;
(statearr_39110[(7)] = inst_39028);

(statearr_39110[(14)] = inst_39056);

(statearr_39110[(8)] = inst_39027);

(statearr_39110[(15)] = inst_39053);

return statearr_39110;
})();
var statearr_39116_40382 = state_39081__$1;
(statearr_39116_40382[(2)] = null);

(statearr_39116_40382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39083 === (16))){
var state_39081__$1 = state_39081;
var statearr_39117_40383 = state_39081__$1;
(statearr_39117_40383[(2)] = null);

(statearr_39117_40383[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39083 === (10))){
var inst_39046 = (state_39081[(2)]);
var state_39081__$1 = state_39081;
if(cljs.core.truth_(inst_39046)){
var statearr_39119_40384 = state_39081__$1;
(statearr_39119_40384[(1)] = (11));

} else {
var statearr_39122_40385 = state_39081__$1;
(statearr_39122_40385[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39083 === (18))){
var inst_39069 = (state_39081[(2)]);
var state_39081__$1 = state_39081;
var statearr_39123_40386 = state_39081__$1;
(statearr_39123_40386[(2)] = inst_39069);

(statearr_39123_40386[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39083 === (8))){
var inst_39039 = (state_39081[(13)]);
var state_39081__$1 = state_39081;
var statearr_39124_40388 = state_39081__$1;
(statearr_39124_40388[(2)] = inst_39039);

(statearr_39124_40388[(1)] = (10));


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
var cljs$core$async$state_machine__34532__auto__ = null;
var cljs$core$async$state_machine__34532__auto____0 = (function (){
var statearr_39126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39126[(0)] = cljs$core$async$state_machine__34532__auto__);

(statearr_39126[(1)] = (1));

return statearr_39126;
});
var cljs$core$async$state_machine__34532__auto____1 = (function (state_39081){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_39081);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e39130){var ex__34535__auto__ = e39130;
var statearr_39131_40392 = state_39081;
(statearr_39131_40392[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_39081[(4)]))){
var statearr_39132_40393 = state_39081;
(statearr_39132_40393[(1)] = cljs.core.first((state_39081[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40394 = state_39081;
state_39081 = G__40394;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
cljs$core$async$state_machine__34532__auto__ = function(state_39081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34532__auto____1.call(this,state_39081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34532__auto____0;
cljs$core$async$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34532__auto____1;
return cljs$core$async$state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_39133 = f__35199__auto__();
(statearr_39133[(6)] = c__35197__auto___40369);

return statearr_39133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
