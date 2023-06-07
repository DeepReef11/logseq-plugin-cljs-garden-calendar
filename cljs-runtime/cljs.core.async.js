goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35196 = arguments.length;
switch (G__35196) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35206 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35206 = (function (f,blockable,meta35207){
this.f = f;
this.blockable = blockable;
this.meta35207 = meta35207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35208,meta35207__$1){
var self__ = this;
var _35208__$1 = this;
return (new cljs.core.async.t_cljs$core$async35206(self__.f,self__.blockable,meta35207__$1));
}));

(cljs.core.async.t_cljs$core$async35206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35208){
var self__ = this;
var _35208__$1 = this;
return self__.meta35207;
}));

(cljs.core.async.t_cljs$core$async35206.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35206.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35206.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async35206.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async35206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35207","meta35207",-53090032,null)], null);
}));

(cljs.core.async.t_cljs$core$async35206.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35206");

(cljs.core.async.t_cljs$core$async35206.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async35206");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35206.
 */
cljs.core.async.__GT_t_cljs$core$async35206 = (function cljs$core$async$__GT_t_cljs$core$async35206(f__$1,blockable__$1,meta35207){
return (new cljs.core.async.t_cljs$core$async35206(f__$1,blockable__$1,meta35207));
});

}

return (new cljs.core.async.t_cljs$core$async35206(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35272 = arguments.length;
switch (G__35272) {
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
var G__35304 = arguments.length;
switch (G__35304) {
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
var G__35336 = arguments.length;
switch (G__35336) {
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
var val_38894 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38894) : fn1.call(null,val_38894));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38894) : fn1.call(null,val_38894));
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
var G__35370 = arguments.length;
switch (G__35370) {
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
var n__4741__auto___38911 = n;
var x_38912 = (0);
while(true){
if((x_38912 < n__4741__auto___38911)){
(a[x_38912] = x_38912);

var G__38913 = (x_38912 + (1));
x_38912 = G__38913;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35404 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35404 = (function (flag,meta35405){
this.flag = flag;
this.meta35405 = meta35405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35406,meta35405__$1){
var self__ = this;
var _35406__$1 = this;
return (new cljs.core.async.t_cljs$core$async35404(self__.flag,meta35405__$1));
}));

(cljs.core.async.t_cljs$core$async35404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35406){
var self__ = this;
var _35406__$1 = this;
return self__.meta35405;
}));

(cljs.core.async.t_cljs$core$async35404.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35404.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35404.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35404.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async35404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35405","meta35405",-1566167683,null)], null);
}));

(cljs.core.async.t_cljs$core$async35404.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35404");

(cljs.core.async.t_cljs$core$async35404.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async35404");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35404.
 */
cljs.core.async.__GT_t_cljs$core$async35404 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35404(flag__$1,meta35405){
return (new cljs.core.async.t_cljs$core$async35404(flag__$1,meta35405));
});

}

return (new cljs.core.async.t_cljs$core$async35404(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35433 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35433 = (function (flag,cb,meta35434){
this.flag = flag;
this.cb = cb;
this.meta35434 = meta35434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35435,meta35434__$1){
var self__ = this;
var _35435__$1 = this;
return (new cljs.core.async.t_cljs$core$async35433(self__.flag,self__.cb,meta35434__$1));
}));

(cljs.core.async.t_cljs$core$async35433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35435){
var self__ = this;
var _35435__$1 = this;
return self__.meta35434;
}));

(cljs.core.async.t_cljs$core$async35433.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35433.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35433.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35433.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async35433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35434","meta35434",840184924,null)], null);
}));

(cljs.core.async.t_cljs$core$async35433.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35433");

(cljs.core.async.t_cljs$core$async35433.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async35433");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35433.
 */
cljs.core.async.__GT_t_cljs$core$async35433 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35433(flag__$1,cb__$1,meta35434){
return (new cljs.core.async.t_cljs$core$async35433(flag__$1,cb__$1,meta35434));
});

}

return (new cljs.core.async.t_cljs$core$async35433(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35460_SHARP_){
var G__35474 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35460_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35474) : fret.call(null,G__35474));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35461_SHARP_){
var G__35478 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35461_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35478) : fret.call(null,G__35478));
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
var G__38949 = (i + (1));
i = G__38949;
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
var len__4864__auto___38950 = arguments.length;
var i__4865__auto___38951 = (0);
while(true){
if((i__4865__auto___38951 < len__4864__auto___38950)){
args__4870__auto__.push((arguments[i__4865__auto___38951]));

var G__38952 = (i__4865__auto___38951 + (1));
i__4865__auto___38951 = G__38952;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35495){
var map__35496 = p__35495;
var map__35496__$1 = cljs.core.__destructure_map(map__35496);
var opts = map__35496__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35492){
var G__35493 = cljs.core.first(seq35492);
var seq35492__$1 = cljs.core.next(seq35492);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35493,seq35492__$1);
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
var G__35520 = arguments.length;
switch (G__35520) {
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
var c__35081__auto___38957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_35576){
var state_val_35577 = (state_35576[(1)]);
if((state_val_35577 === (7))){
var inst_35562 = (state_35576[(2)]);
var state_35576__$1 = state_35576;
var statearr_35594_38958 = state_35576__$1;
(statearr_35594_38958[(2)] = inst_35562);

(statearr_35594_38958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (1))){
var state_35576__$1 = state_35576;
var statearr_35598_38959 = state_35576__$1;
(statearr_35598_38959[(2)] = null);

(statearr_35598_38959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (4))){
var inst_35542 = (state_35576[(7)]);
var inst_35542__$1 = (state_35576[(2)]);
var inst_35544 = (inst_35542__$1 == null);
var state_35576__$1 = (function (){var statearr_35601 = state_35576;
(statearr_35601[(7)] = inst_35542__$1);

return statearr_35601;
})();
if(cljs.core.truth_(inst_35544)){
var statearr_35602_38966 = state_35576__$1;
(statearr_35602_38966[(1)] = (5));

} else {
var statearr_35605_38967 = state_35576__$1;
(statearr_35605_38967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (13))){
var state_35576__$1 = state_35576;
var statearr_35614_38968 = state_35576__$1;
(statearr_35614_38968[(2)] = null);

(statearr_35614_38968[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (6))){
var inst_35542 = (state_35576[(7)]);
var state_35576__$1 = state_35576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35576__$1,(11),to,inst_35542);
} else {
if((state_val_35577 === (3))){
var inst_35564 = (state_35576[(2)]);
var state_35576__$1 = state_35576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35576__$1,inst_35564);
} else {
if((state_val_35577 === (12))){
var state_35576__$1 = state_35576;
var statearr_35625_38978 = state_35576__$1;
(statearr_35625_38978[(2)] = null);

(statearr_35625_38978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (2))){
var state_35576__$1 = state_35576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35576__$1,(4),from);
} else {
if((state_val_35577 === (11))){
var inst_35555 = (state_35576[(2)]);
var state_35576__$1 = state_35576;
if(cljs.core.truth_(inst_35555)){
var statearr_35629_38984 = state_35576__$1;
(statearr_35629_38984[(1)] = (12));

} else {
var statearr_35630_38986 = state_35576__$1;
(statearr_35630_38986[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (9))){
var state_35576__$1 = state_35576;
var statearr_35634_38989 = state_35576__$1;
(statearr_35634_38989[(2)] = null);

(statearr_35634_38989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (5))){
var state_35576__$1 = state_35576;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35635_38991 = state_35576__$1;
(statearr_35635_38991[(1)] = (8));

} else {
var statearr_35636_38992 = state_35576__$1;
(statearr_35636_38992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (14))){
var inst_35560 = (state_35576[(2)]);
var state_35576__$1 = state_35576;
var statearr_35638_38993 = state_35576__$1;
(statearr_35638_38993[(2)] = inst_35560);

(statearr_35638_38993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (10))){
var inst_35552 = (state_35576[(2)]);
var state_35576__$1 = state_35576;
var statearr_35639_38994 = state_35576__$1;
(statearr_35639_38994[(2)] = inst_35552);

(statearr_35639_38994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (8))){
var inst_35549 = cljs.core.async.close_BANG_(to);
var state_35576__$1 = state_35576;
var statearr_35641_38999 = state_35576__$1;
(statearr_35641_38999[(2)] = inst_35549);

(statearr_35641_38999[(1)] = (10));


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
var cljs$core$async$state_machine__34345__auto__ = null;
var cljs$core$async$state_machine__34345__auto____0 = (function (){
var statearr_35643 = [null,null,null,null,null,null,null,null];
(statearr_35643[(0)] = cljs$core$async$state_machine__34345__auto__);

(statearr_35643[(1)] = (1));

return statearr_35643;
});
var cljs$core$async$state_machine__34345__auto____1 = (function (state_35576){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_35576);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e35645){var ex__34348__auto__ = e35645;
var statearr_35646_39010 = state_35576;
(statearr_35646_39010[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_35576[(4)]))){
var statearr_35648_39011 = state_35576;
(statearr_35648_39011[(1)] = cljs.core.first((state_35576[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39012 = state_35576;
state_35576 = G__39012;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$state_machine__34345__auto__ = function(state_35576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34345__auto____1.call(this,state_35576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34345__auto____0;
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34345__auto____1;
return cljs$core$async$state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_35649 = f__35082__auto__();
(statearr_35649[(6)] = c__35081__auto___38957);

return statearr_35649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
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
var process = (function (p__35664){
var vec__35665 = p__35664;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35665,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35665,(1),null);
var job = vec__35665;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__35081__auto___39018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_35677){
var state_val_35678 = (state_35677[(1)]);
if((state_val_35678 === (1))){
var state_35677__$1 = state_35677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35677__$1,(2),res,v);
} else {
if((state_val_35678 === (2))){
var inst_35674 = (state_35677[(2)]);
var inst_35675 = cljs.core.async.close_BANG_(res);
var state_35677__$1 = (function (){var statearr_35687 = state_35677;
(statearr_35687[(7)] = inst_35674);

return statearr_35687;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35677__$1,inst_35675);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____0 = (function (){
var statearr_35688 = [null,null,null,null,null,null,null,null];
(statearr_35688[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__);

(statearr_35688[(1)] = (1));

return statearr_35688;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____1 = (function (state_35677){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_35677);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e35691){var ex__34348__auto__ = e35691;
var statearr_35692_39025 = state_35677;
(statearr_35692_39025[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_35677[(4)]))){
var statearr_35693_39026 = state_35677;
(statearr_35693_39026[(1)] = cljs.core.first((state_35677[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39027 = state_35677;
state_35677 = G__39027;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__ = function(state_35677){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____1.call(this,state_35677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_35697 = f__35082__auto__();
(statearr_35697[(6)] = c__35081__auto___39018);

return statearr_35697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__35700){
var vec__35701 = p__35700;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35701,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35701,(1),null);
var job = vec__35701;
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
var n__4741__auto___39031 = n;
var __39033 = (0);
while(true){
if((__39033 < n__4741__auto___39031)){
var G__35709_39034 = type;
var G__35709_39035__$1 = (((G__35709_39034 instanceof cljs.core.Keyword))?G__35709_39034.fqn:null);
switch (G__35709_39035__$1) {
case "compute":
var c__35081__auto___39037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39033,c__35081__auto___39037,G__35709_39034,G__35709_39035__$1,n__4741__auto___39031,jobs,results,process,async){
return (function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = ((function (__39033,c__35081__auto___39037,G__35709_39034,G__35709_39035__$1,n__4741__auto___39031,jobs,results,process,async){
return (function (state_35723){
var state_val_35724 = (state_35723[(1)]);
if((state_val_35724 === (1))){
var state_35723__$1 = state_35723;
var statearr_35725_39039 = state_35723__$1;
(statearr_35725_39039[(2)] = null);

(statearr_35725_39039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (2))){
var state_35723__$1 = state_35723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35723__$1,(4),jobs);
} else {
if((state_val_35724 === (3))){
var inst_35721 = (state_35723[(2)]);
var state_35723__$1 = state_35723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35723__$1,inst_35721);
} else {
if((state_val_35724 === (4))){
var inst_35713 = (state_35723[(2)]);
var inst_35714 = process(inst_35713);
var state_35723__$1 = state_35723;
if(cljs.core.truth_(inst_35714)){
var statearr_35732_39043 = state_35723__$1;
(statearr_35732_39043[(1)] = (5));

} else {
var statearr_35733_39044 = state_35723__$1;
(statearr_35733_39044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (5))){
var state_35723__$1 = state_35723;
var statearr_35737_39045 = state_35723__$1;
(statearr_35737_39045[(2)] = null);

(statearr_35737_39045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (6))){
var state_35723__$1 = state_35723;
var statearr_35738_39046 = state_35723__$1;
(statearr_35738_39046[(2)] = null);

(statearr_35738_39046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (7))){
var inst_35719 = (state_35723[(2)]);
var state_35723__$1 = state_35723;
var statearr_35740_39047 = state_35723__$1;
(statearr_35740_39047[(2)] = inst_35719);

(statearr_35740_39047[(1)] = (3));


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
});})(__39033,c__35081__auto___39037,G__35709_39034,G__35709_39035__$1,n__4741__auto___39031,jobs,results,process,async))
;
return ((function (__39033,switch__34344__auto__,c__35081__auto___39037,G__35709_39034,G__35709_39035__$1,n__4741__auto___39031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____0 = (function (){
var statearr_35742 = [null,null,null,null,null,null,null];
(statearr_35742[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__);

(statearr_35742[(1)] = (1));

return statearr_35742;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____1 = (function (state_35723){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_35723);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e35746){var ex__34348__auto__ = e35746;
var statearr_35747_39051 = state_35723;
(statearr_35747_39051[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_35723[(4)]))){
var statearr_35749_39052 = state_35723;
(statearr_35749_39052[(1)] = cljs.core.first((state_35723[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39059 = state_35723;
state_35723 = G__39059;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__ = function(state_35723){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____1.call(this,state_35723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__;
})()
;})(__39033,switch__34344__auto__,c__35081__auto___39037,G__35709_39034,G__35709_39035__$1,n__4741__auto___39031,jobs,results,process,async))
})();
var state__35083__auto__ = (function (){var statearr_35756 = f__35082__auto__();
(statearr_35756[(6)] = c__35081__auto___39037);

return statearr_35756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
});})(__39033,c__35081__auto___39037,G__35709_39034,G__35709_39035__$1,n__4741__auto___39031,jobs,results,process,async))
);


break;
case "async":
var c__35081__auto___39060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39033,c__35081__auto___39060,G__35709_39034,G__35709_39035__$1,n__4741__auto___39031,jobs,results,process,async){
return (function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = ((function (__39033,c__35081__auto___39060,G__35709_39034,G__35709_39035__$1,n__4741__auto___39031,jobs,results,process,async){
return (function (state_35772){
var state_val_35773 = (state_35772[(1)]);
if((state_val_35773 === (1))){
var state_35772__$1 = state_35772;
var statearr_35776_39061 = state_35772__$1;
(statearr_35776_39061[(2)] = null);

(statearr_35776_39061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (2))){
var state_35772__$1 = state_35772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35772__$1,(4),jobs);
} else {
if((state_val_35773 === (3))){
var inst_35768 = (state_35772[(2)]);
var state_35772__$1 = state_35772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35772__$1,inst_35768);
} else {
if((state_val_35773 === (4))){
var inst_35760 = (state_35772[(2)]);
var inst_35761 = async(inst_35760);
var state_35772__$1 = state_35772;
if(cljs.core.truth_(inst_35761)){
var statearr_35783_39070 = state_35772__$1;
(statearr_35783_39070[(1)] = (5));

} else {
var statearr_35787_39076 = state_35772__$1;
(statearr_35787_39076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (5))){
var state_35772__$1 = state_35772;
var statearr_35788_39077 = state_35772__$1;
(statearr_35788_39077[(2)] = null);

(statearr_35788_39077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (6))){
var state_35772__$1 = state_35772;
var statearr_35789_39083 = state_35772__$1;
(statearr_35789_39083[(2)] = null);

(statearr_35789_39083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (7))){
var inst_35766 = (state_35772[(2)]);
var state_35772__$1 = state_35772;
var statearr_35792_39091 = state_35772__$1;
(statearr_35792_39091[(2)] = inst_35766);

(statearr_35792_39091[(1)] = (3));


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
});})(__39033,c__35081__auto___39060,G__35709_39034,G__35709_39035__$1,n__4741__auto___39031,jobs,results,process,async))
;
return ((function (__39033,switch__34344__auto__,c__35081__auto___39060,G__35709_39034,G__35709_39035__$1,n__4741__auto___39031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____0 = (function (){
var statearr_35794 = [null,null,null,null,null,null,null];
(statearr_35794[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__);

(statearr_35794[(1)] = (1));

return statearr_35794;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____1 = (function (state_35772){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_35772);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e35798){var ex__34348__auto__ = e35798;
var statearr_35799_39092 = state_35772;
(statearr_35799_39092[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_35772[(4)]))){
var statearr_35800_39097 = state_35772;
(statearr_35800_39097[(1)] = cljs.core.first((state_35772[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39101 = state_35772;
state_35772 = G__39101;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__ = function(state_35772){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____1.call(this,state_35772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__;
})()
;})(__39033,switch__34344__auto__,c__35081__auto___39060,G__35709_39034,G__35709_39035__$1,n__4741__auto___39031,jobs,results,process,async))
})();
var state__35083__auto__ = (function (){var statearr_35802 = f__35082__auto__();
(statearr_35802[(6)] = c__35081__auto___39060);

return statearr_35802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
});})(__39033,c__35081__auto___39060,G__35709_39034,G__35709_39035__$1,n__4741__auto___39031,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35709_39035__$1)].join('')));

}

var G__39125 = (__39033 + (1));
__39033 = G__39125;
continue;
} else {
}
break;
}

var c__35081__auto___39126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_35829){
var state_val_35830 = (state_35829[(1)]);
if((state_val_35830 === (7))){
var inst_35825 = (state_35829[(2)]);
var state_35829__$1 = state_35829;
var statearr_35836_39131 = state_35829__$1;
(statearr_35836_39131[(2)] = inst_35825);

(statearr_35836_39131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (1))){
var state_35829__$1 = state_35829;
var statearr_35841_39133 = state_35829__$1;
(statearr_35841_39133[(2)] = null);

(statearr_35841_39133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (4))){
var inst_35808 = (state_35829[(7)]);
var inst_35808__$1 = (state_35829[(2)]);
var inst_35809 = (inst_35808__$1 == null);
var state_35829__$1 = (function (){var statearr_35843 = state_35829;
(statearr_35843[(7)] = inst_35808__$1);

return statearr_35843;
})();
if(cljs.core.truth_(inst_35809)){
var statearr_35844_39136 = state_35829__$1;
(statearr_35844_39136[(1)] = (5));

} else {
var statearr_35845_39137 = state_35829__$1;
(statearr_35845_39137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (6))){
var inst_35808 = (state_35829[(7)]);
var inst_35815 = (state_35829[(8)]);
var inst_35815__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_35816 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35817 = [inst_35808,inst_35815__$1];
var inst_35818 = (new cljs.core.PersistentVector(null,2,(5),inst_35816,inst_35817,null));
var state_35829__$1 = (function (){var statearr_35850 = state_35829;
(statearr_35850[(8)] = inst_35815__$1);

return statearr_35850;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35829__$1,(8),jobs,inst_35818);
} else {
if((state_val_35830 === (3))){
var inst_35827 = (state_35829[(2)]);
var state_35829__$1 = state_35829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35829__$1,inst_35827);
} else {
if((state_val_35830 === (2))){
var state_35829__$1 = state_35829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35829__$1,(4),from);
} else {
if((state_val_35830 === (9))){
var inst_35822 = (state_35829[(2)]);
var state_35829__$1 = (function (){var statearr_35860 = state_35829;
(statearr_35860[(9)] = inst_35822);

return statearr_35860;
})();
var statearr_35862_39149 = state_35829__$1;
(statearr_35862_39149[(2)] = null);

(statearr_35862_39149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (5))){
var inst_35813 = cljs.core.async.close_BANG_(jobs);
var state_35829__$1 = state_35829;
var statearr_35867_39153 = state_35829__$1;
(statearr_35867_39153[(2)] = inst_35813);

(statearr_35867_39153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (8))){
var inst_35815 = (state_35829[(8)]);
var inst_35820 = (state_35829[(2)]);
var state_35829__$1 = (function (){var statearr_35880 = state_35829;
(statearr_35880[(10)] = inst_35820);

return statearr_35880;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35829__$1,(9),results,inst_35815);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____0 = (function (){
var statearr_35908 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35908[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__);

(statearr_35908[(1)] = (1));

return statearr_35908;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____1 = (function (state_35829){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_35829);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e35909){var ex__34348__auto__ = e35909;
var statearr_35910_39160 = state_35829;
(statearr_35910_39160[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_35829[(4)]))){
var statearr_35925_39164 = state_35829;
(statearr_35925_39164[(1)] = cljs.core.first((state_35829[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39170 = state_35829;
state_35829 = G__39170;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__ = function(state_35829){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____1.call(this,state_35829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_35930 = f__35082__auto__();
(statearr_35930[(6)] = c__35081__auto___39126);

return statearr_35930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
}));


var c__35081__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_35969){
var state_val_35970 = (state_35969[(1)]);
if((state_val_35970 === (7))){
var inst_35965 = (state_35969[(2)]);
var state_35969__$1 = state_35969;
var statearr_35977_39172 = state_35969__$1;
(statearr_35977_39172[(2)] = inst_35965);

(statearr_35977_39172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (20))){
var state_35969__$1 = state_35969;
var statearr_35978_39173 = state_35969__$1;
(statearr_35978_39173[(2)] = null);

(statearr_35978_39173[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (1))){
var state_35969__$1 = state_35969;
var statearr_35979_39177 = state_35969__$1;
(statearr_35979_39177[(2)] = null);

(statearr_35979_39177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (4))){
var inst_35934 = (state_35969[(7)]);
var inst_35934__$1 = (state_35969[(2)]);
var inst_35935 = (inst_35934__$1 == null);
var state_35969__$1 = (function (){var statearr_35980 = state_35969;
(statearr_35980[(7)] = inst_35934__$1);

return statearr_35980;
})();
if(cljs.core.truth_(inst_35935)){
var statearr_35983_39179 = state_35969__$1;
(statearr_35983_39179[(1)] = (5));

} else {
var statearr_35984_39180 = state_35969__$1;
(statearr_35984_39180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (15))){
var inst_35947 = (state_35969[(8)]);
var state_35969__$1 = state_35969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35969__$1,(18),to,inst_35947);
} else {
if((state_val_35970 === (21))){
var inst_35960 = (state_35969[(2)]);
var state_35969__$1 = state_35969;
var statearr_35987_39182 = state_35969__$1;
(statearr_35987_39182[(2)] = inst_35960);

(statearr_35987_39182[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (13))){
var inst_35962 = (state_35969[(2)]);
var state_35969__$1 = (function (){var statearr_35988 = state_35969;
(statearr_35988[(9)] = inst_35962);

return statearr_35988;
})();
var statearr_35989_39187 = state_35969__$1;
(statearr_35989_39187[(2)] = null);

(statearr_35989_39187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (6))){
var inst_35934 = (state_35969[(7)]);
var state_35969__$1 = state_35969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35969__$1,(11),inst_35934);
} else {
if((state_val_35970 === (17))){
var inst_35955 = (state_35969[(2)]);
var state_35969__$1 = state_35969;
if(cljs.core.truth_(inst_35955)){
var statearr_35992_39188 = state_35969__$1;
(statearr_35992_39188[(1)] = (19));

} else {
var statearr_35993_39189 = state_35969__$1;
(statearr_35993_39189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (3))){
var inst_35967 = (state_35969[(2)]);
var state_35969__$1 = state_35969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35969__$1,inst_35967);
} else {
if((state_val_35970 === (12))){
var inst_35944 = (state_35969[(10)]);
var state_35969__$1 = state_35969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35969__$1,(14),inst_35944);
} else {
if((state_val_35970 === (2))){
var state_35969__$1 = state_35969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35969__$1,(4),results);
} else {
if((state_val_35970 === (19))){
var state_35969__$1 = state_35969;
var statearr_35996_39194 = state_35969__$1;
(statearr_35996_39194[(2)] = null);

(statearr_35996_39194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (11))){
var inst_35944 = (state_35969[(2)]);
var state_35969__$1 = (function (){var statearr_35997 = state_35969;
(statearr_35997[(10)] = inst_35944);

return statearr_35997;
})();
var statearr_36001_39198 = state_35969__$1;
(statearr_36001_39198[(2)] = null);

(statearr_36001_39198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (9))){
var state_35969__$1 = state_35969;
var statearr_36002_39199 = state_35969__$1;
(statearr_36002_39199[(2)] = null);

(statearr_36002_39199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (5))){
var state_35969__$1 = state_35969;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36006_39200 = state_35969__$1;
(statearr_36006_39200[(1)] = (8));

} else {
var statearr_36008_39201 = state_35969__$1;
(statearr_36008_39201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (14))){
var inst_35947 = (state_35969[(8)]);
var inst_35949 = (state_35969[(11)]);
var inst_35947__$1 = (state_35969[(2)]);
var inst_35948 = (inst_35947__$1 == null);
var inst_35949__$1 = cljs.core.not(inst_35948);
var state_35969__$1 = (function (){var statearr_36011 = state_35969;
(statearr_36011[(8)] = inst_35947__$1);

(statearr_36011[(11)] = inst_35949__$1);

return statearr_36011;
})();
if(inst_35949__$1){
var statearr_36019_39203 = state_35969__$1;
(statearr_36019_39203[(1)] = (15));

} else {
var statearr_36022_39204 = state_35969__$1;
(statearr_36022_39204[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (16))){
var inst_35949 = (state_35969[(11)]);
var state_35969__$1 = state_35969;
var statearr_36024_39206 = state_35969__$1;
(statearr_36024_39206[(2)] = inst_35949);

(statearr_36024_39206[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (10))){
var inst_35941 = (state_35969[(2)]);
var state_35969__$1 = state_35969;
var statearr_36025_39207 = state_35969__$1;
(statearr_36025_39207[(2)] = inst_35941);

(statearr_36025_39207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (18))){
var inst_35952 = (state_35969[(2)]);
var state_35969__$1 = state_35969;
var statearr_36026_39211 = state_35969__$1;
(statearr_36026_39211[(2)] = inst_35952);

(statearr_36026_39211[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (8))){
var inst_35938 = cljs.core.async.close_BANG_(to);
var state_35969__$1 = state_35969;
var statearr_36027_39215 = state_35969__$1;
(statearr_36027_39215[(2)] = inst_35938);

(statearr_36027_39215[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____0 = (function (){
var statearr_36028 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36028[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__);

(statearr_36028[(1)] = (1));

return statearr_36028;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____1 = (function (state_35969){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_35969);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e36029){var ex__34348__auto__ = e36029;
var statearr_36030_39222 = state_35969;
(statearr_36030_39222[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_35969[(4)]))){
var statearr_36032_39228 = state_35969;
(statearr_36032_39228[(1)] = cljs.core.first((state_35969[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39233 = state_35969;
state_35969 = G__39233;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__ = function(state_35969){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____1.call(this,state_35969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34345__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_36033 = f__35082__auto__();
(statearr_36033[(6)] = c__35081__auto__);

return statearr_36033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
}));

return c__35081__auto__;
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
var G__36036 = arguments.length;
switch (G__36036) {
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
var G__36043 = arguments.length;
switch (G__36043) {
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
var G__36052 = arguments.length;
switch (G__36052) {
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
var c__35081__auto___39255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_36088){
var state_val_36089 = (state_36088[(1)]);
if((state_val_36089 === (7))){
var inst_36084 = (state_36088[(2)]);
var state_36088__$1 = state_36088;
var statearr_36092_39260 = state_36088__$1;
(statearr_36092_39260[(2)] = inst_36084);

(statearr_36092_39260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (1))){
var state_36088__$1 = state_36088;
var statearr_36093_39264 = state_36088__$1;
(statearr_36093_39264[(2)] = null);

(statearr_36093_39264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (4))){
var inst_36065 = (state_36088[(7)]);
var inst_36065__$1 = (state_36088[(2)]);
var inst_36066 = (inst_36065__$1 == null);
var state_36088__$1 = (function (){var statearr_36095 = state_36088;
(statearr_36095[(7)] = inst_36065__$1);

return statearr_36095;
})();
if(cljs.core.truth_(inst_36066)){
var statearr_36098_39268 = state_36088__$1;
(statearr_36098_39268[(1)] = (5));

} else {
var statearr_36099_39270 = state_36088__$1;
(statearr_36099_39270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (13))){
var state_36088__$1 = state_36088;
var statearr_36100_39271 = state_36088__$1;
(statearr_36100_39271[(2)] = null);

(statearr_36100_39271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (6))){
var inst_36065 = (state_36088[(7)]);
var inst_36071 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36065) : p.call(null,inst_36065));
var state_36088__$1 = state_36088;
if(cljs.core.truth_(inst_36071)){
var statearr_36101_39275 = state_36088__$1;
(statearr_36101_39275[(1)] = (9));

} else {
var statearr_36103_39276 = state_36088__$1;
(statearr_36103_39276[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (3))){
var inst_36086 = (state_36088[(2)]);
var state_36088__$1 = state_36088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36088__$1,inst_36086);
} else {
if((state_val_36089 === (12))){
var state_36088__$1 = state_36088;
var statearr_36104_39277 = state_36088__$1;
(statearr_36104_39277[(2)] = null);

(statearr_36104_39277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (2))){
var state_36088__$1 = state_36088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36088__$1,(4),ch);
} else {
if((state_val_36089 === (11))){
var inst_36065 = (state_36088[(7)]);
var inst_36075 = (state_36088[(2)]);
var state_36088__$1 = state_36088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36088__$1,(8),inst_36075,inst_36065);
} else {
if((state_val_36089 === (9))){
var state_36088__$1 = state_36088;
var statearr_36108_39285 = state_36088__$1;
(statearr_36108_39285[(2)] = tc);

(statearr_36108_39285[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (5))){
var inst_36068 = cljs.core.async.close_BANG_(tc);
var inst_36069 = cljs.core.async.close_BANG_(fc);
var state_36088__$1 = (function (){var statearr_36110 = state_36088;
(statearr_36110[(8)] = inst_36068);

return statearr_36110;
})();
var statearr_36112_39286 = state_36088__$1;
(statearr_36112_39286[(2)] = inst_36069);

(statearr_36112_39286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (14))){
var inst_36082 = (state_36088[(2)]);
var state_36088__$1 = state_36088;
var statearr_36114_39287 = state_36088__$1;
(statearr_36114_39287[(2)] = inst_36082);

(statearr_36114_39287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (10))){
var state_36088__$1 = state_36088;
var statearr_36115_39296 = state_36088__$1;
(statearr_36115_39296[(2)] = fc);

(statearr_36115_39296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (8))){
var inst_36077 = (state_36088[(2)]);
var state_36088__$1 = state_36088;
if(cljs.core.truth_(inst_36077)){
var statearr_36117_39300 = state_36088__$1;
(statearr_36117_39300[(1)] = (12));

} else {
var statearr_36121_39301 = state_36088__$1;
(statearr_36121_39301[(1)] = (13));

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
var cljs$core$async$state_machine__34345__auto__ = null;
var cljs$core$async$state_machine__34345__auto____0 = (function (){
var statearr_36122 = [null,null,null,null,null,null,null,null,null];
(statearr_36122[(0)] = cljs$core$async$state_machine__34345__auto__);

(statearr_36122[(1)] = (1));

return statearr_36122;
});
var cljs$core$async$state_machine__34345__auto____1 = (function (state_36088){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_36088);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e36126){var ex__34348__auto__ = e36126;
var statearr_36127_39308 = state_36088;
(statearr_36127_39308[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_36088[(4)]))){
var statearr_36132_39309 = state_36088;
(statearr_36132_39309[(1)] = cljs.core.first((state_36088[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39311 = state_36088;
state_36088 = G__39311;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$state_machine__34345__auto__ = function(state_36088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34345__auto____1.call(this,state_36088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34345__auto____0;
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34345__auto____1;
return cljs$core$async$state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_36133 = f__35082__auto__();
(statearr_36133[(6)] = c__35081__auto___39255);

return statearr_36133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
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
var c__35081__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_36162){
var state_val_36163 = (state_36162[(1)]);
if((state_val_36163 === (7))){
var inst_36157 = (state_36162[(2)]);
var state_36162__$1 = state_36162;
var statearr_36164_39313 = state_36162__$1;
(statearr_36164_39313[(2)] = inst_36157);

(statearr_36164_39313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (1))){
var inst_36135 = init;
var inst_36136 = inst_36135;
var state_36162__$1 = (function (){var statearr_36167 = state_36162;
(statearr_36167[(7)] = inst_36136);

return statearr_36167;
})();
var statearr_36168_39315 = state_36162__$1;
(statearr_36168_39315[(2)] = null);

(statearr_36168_39315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (4))){
var inst_36139 = (state_36162[(8)]);
var inst_36139__$1 = (state_36162[(2)]);
var inst_36141 = (inst_36139__$1 == null);
var state_36162__$1 = (function (){var statearr_36169 = state_36162;
(statearr_36169[(8)] = inst_36139__$1);

return statearr_36169;
})();
if(cljs.core.truth_(inst_36141)){
var statearr_36170_39316 = state_36162__$1;
(statearr_36170_39316[(1)] = (5));

} else {
var statearr_36171_39317 = state_36162__$1;
(statearr_36171_39317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (6))){
var inst_36147 = (state_36162[(9)]);
var inst_36139 = (state_36162[(8)]);
var inst_36136 = (state_36162[(7)]);
var inst_36147__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36136,inst_36139) : f.call(null,inst_36136,inst_36139));
var inst_36148 = cljs.core.reduced_QMARK_(inst_36147__$1);
var state_36162__$1 = (function (){var statearr_36177 = state_36162;
(statearr_36177[(9)] = inst_36147__$1);

return statearr_36177;
})();
if(inst_36148){
var statearr_36181_39319 = state_36162__$1;
(statearr_36181_39319[(1)] = (8));

} else {
var statearr_36182_39320 = state_36162__$1;
(statearr_36182_39320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (3))){
var inst_36159 = (state_36162[(2)]);
var state_36162__$1 = state_36162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36162__$1,inst_36159);
} else {
if((state_val_36163 === (2))){
var state_36162__$1 = state_36162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36162__$1,(4),ch);
} else {
if((state_val_36163 === (9))){
var inst_36147 = (state_36162[(9)]);
var inst_36136 = inst_36147;
var state_36162__$1 = (function (){var statearr_36186 = state_36162;
(statearr_36186[(7)] = inst_36136);

return statearr_36186;
})();
var statearr_36187_39326 = state_36162__$1;
(statearr_36187_39326[(2)] = null);

(statearr_36187_39326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (5))){
var inst_36136 = (state_36162[(7)]);
var state_36162__$1 = state_36162;
var statearr_36192_39327 = state_36162__$1;
(statearr_36192_39327[(2)] = inst_36136);

(statearr_36192_39327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (10))){
var inst_36155 = (state_36162[(2)]);
var state_36162__$1 = state_36162;
var statearr_36193_39333 = state_36162__$1;
(statearr_36193_39333[(2)] = inst_36155);

(statearr_36193_39333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (8))){
var inst_36147 = (state_36162[(9)]);
var inst_36150 = cljs.core.deref(inst_36147);
var state_36162__$1 = state_36162;
var statearr_36194_39334 = state_36162__$1;
(statearr_36194_39334[(2)] = inst_36150);

(statearr_36194_39334[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34345__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34345__auto____0 = (function (){
var statearr_36197 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36197[(0)] = cljs$core$async$reduce_$_state_machine__34345__auto__);

(statearr_36197[(1)] = (1));

return statearr_36197;
});
var cljs$core$async$reduce_$_state_machine__34345__auto____1 = (function (state_36162){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_36162);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e36202){var ex__34348__auto__ = e36202;
var statearr_36205_39336 = state_36162;
(statearr_36205_39336[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_36162[(4)]))){
var statearr_36207_39337 = state_36162;
(statearr_36207_39337[(1)] = cljs.core.first((state_36162[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39339 = state_36162;
state_36162 = G__39339;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34345__auto__ = function(state_36162){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34345__auto____1.call(this,state_36162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34345__auto____0;
cljs$core$async$reduce_$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34345__auto____1;
return cljs$core$async$reduce_$_state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_36211 = f__35082__auto__();
(statearr_36211[(6)] = c__35081__auto__);

return statearr_36211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
}));

return c__35081__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__35081__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_36225){
var state_val_36226 = (state_36225[(1)]);
if((state_val_36226 === (1))){
var inst_36220 = cljs.core.async.reduce(f__$1,init,ch);
var state_36225__$1 = state_36225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36225__$1,(2),inst_36220);
} else {
if((state_val_36226 === (2))){
var inst_36222 = (state_36225[(2)]);
var inst_36223 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_36222) : f__$1.call(null,inst_36222));
var state_36225__$1 = state_36225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36225__$1,inst_36223);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34345__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34345__auto____0 = (function (){
var statearr_36234 = [null,null,null,null,null,null,null];
(statearr_36234[(0)] = cljs$core$async$transduce_$_state_machine__34345__auto__);

(statearr_36234[(1)] = (1));

return statearr_36234;
});
var cljs$core$async$transduce_$_state_machine__34345__auto____1 = (function (state_36225){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_36225);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e36239){var ex__34348__auto__ = e36239;
var statearr_36240_39341 = state_36225;
(statearr_36240_39341[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_36225[(4)]))){
var statearr_36246_39344 = state_36225;
(statearr_36246_39344[(1)] = cljs.core.first((state_36225[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39346 = state_36225;
state_36225 = G__39346;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34345__auto__ = function(state_36225){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34345__auto____1.call(this,state_36225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34345__auto____0;
cljs$core$async$transduce_$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34345__auto____1;
return cljs$core$async$transduce_$_state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_36250 = f__35082__auto__();
(statearr_36250[(6)] = c__35081__auto__);

return statearr_36250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
}));

return c__35081__auto__;
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
var G__36257 = arguments.length;
switch (G__36257) {
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
var c__35081__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_36296){
var state_val_36297 = (state_36296[(1)]);
if((state_val_36297 === (7))){
var inst_36276 = (state_36296[(2)]);
var state_36296__$1 = state_36296;
var statearr_36309_39357 = state_36296__$1;
(statearr_36309_39357[(2)] = inst_36276);

(statearr_36309_39357[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (1))){
var inst_36267 = cljs.core.seq(coll);
var inst_36268 = inst_36267;
var state_36296__$1 = (function (){var statearr_36318 = state_36296;
(statearr_36318[(7)] = inst_36268);

return statearr_36318;
})();
var statearr_36319_39360 = state_36296__$1;
(statearr_36319_39360[(2)] = null);

(statearr_36319_39360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (4))){
var inst_36268 = (state_36296[(7)]);
var inst_36274 = cljs.core.first(inst_36268);
var state_36296__$1 = state_36296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36296__$1,(7),ch,inst_36274);
} else {
if((state_val_36297 === (13))){
var inst_36288 = (state_36296[(2)]);
var state_36296__$1 = state_36296;
var statearr_36324_39365 = state_36296__$1;
(statearr_36324_39365[(2)] = inst_36288);

(statearr_36324_39365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (6))){
var inst_36279 = (state_36296[(2)]);
var state_36296__$1 = state_36296;
if(cljs.core.truth_(inst_36279)){
var statearr_36325_39367 = state_36296__$1;
(statearr_36325_39367[(1)] = (8));

} else {
var statearr_36328_39368 = state_36296__$1;
(statearr_36328_39368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (3))){
var inst_36292 = (state_36296[(2)]);
var state_36296__$1 = state_36296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36296__$1,inst_36292);
} else {
if((state_val_36297 === (12))){
var state_36296__$1 = state_36296;
var statearr_36332_39369 = state_36296__$1;
(statearr_36332_39369[(2)] = null);

(statearr_36332_39369[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (2))){
var inst_36268 = (state_36296[(7)]);
var state_36296__$1 = state_36296;
if(cljs.core.truth_(inst_36268)){
var statearr_36346_39372 = state_36296__$1;
(statearr_36346_39372[(1)] = (4));

} else {
var statearr_36349_39373 = state_36296__$1;
(statearr_36349_39373[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (11))){
var inst_36285 = cljs.core.async.close_BANG_(ch);
var state_36296__$1 = state_36296;
var statearr_36351_39374 = state_36296__$1;
(statearr_36351_39374[(2)] = inst_36285);

(statearr_36351_39374[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (9))){
var state_36296__$1 = state_36296;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36353_39377 = state_36296__$1;
(statearr_36353_39377[(1)] = (11));

} else {
var statearr_36354_39379 = state_36296__$1;
(statearr_36354_39379[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (5))){
var inst_36268 = (state_36296[(7)]);
var state_36296__$1 = state_36296;
var statearr_36362_39383 = state_36296__$1;
(statearr_36362_39383[(2)] = inst_36268);

(statearr_36362_39383[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (10))){
var inst_36290 = (state_36296[(2)]);
var state_36296__$1 = state_36296;
var statearr_36363_39385 = state_36296__$1;
(statearr_36363_39385[(2)] = inst_36290);

(statearr_36363_39385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (8))){
var inst_36268 = (state_36296[(7)]);
var inst_36281 = cljs.core.next(inst_36268);
var inst_36268__$1 = inst_36281;
var state_36296__$1 = (function (){var statearr_36365 = state_36296;
(statearr_36365[(7)] = inst_36268__$1);

return statearr_36365;
})();
var statearr_36366_39392 = state_36296__$1;
(statearr_36366_39392[(2)] = null);

(statearr_36366_39392[(1)] = (2));


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
var cljs$core$async$state_machine__34345__auto__ = null;
var cljs$core$async$state_machine__34345__auto____0 = (function (){
var statearr_36370 = [null,null,null,null,null,null,null,null];
(statearr_36370[(0)] = cljs$core$async$state_machine__34345__auto__);

(statearr_36370[(1)] = (1));

return statearr_36370;
});
var cljs$core$async$state_machine__34345__auto____1 = (function (state_36296){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_36296);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e36372){var ex__34348__auto__ = e36372;
var statearr_36373_39405 = state_36296;
(statearr_36373_39405[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_36296[(4)]))){
var statearr_36377_39407 = state_36296;
(statearr_36377_39407[(1)] = cljs.core.first((state_36296[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39412 = state_36296;
state_36296 = G__39412;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$state_machine__34345__auto__ = function(state_36296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34345__auto____1.call(this,state_36296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34345__auto____0;
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34345__auto____1;
return cljs$core$async$state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_36379 = f__35082__auto__();
(statearr_36379[(6)] = c__35081__auto__);

return statearr_36379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
}));

return c__35081__auto__;
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
var G__36390 = arguments.length;
switch (G__36390) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_39435 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_39435(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_39441 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_39441(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_39442 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_39442(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_39458 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_39458(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36467 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36467 = (function (ch,cs,meta36468){
this.ch = ch;
this.cs = cs;
this.meta36468 = meta36468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36469,meta36468__$1){
var self__ = this;
var _36469__$1 = this;
return (new cljs.core.async.t_cljs$core$async36467(self__.ch,self__.cs,meta36468__$1));
}));

(cljs.core.async.t_cljs$core$async36467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36469){
var self__ = this;
var _36469__$1 = this;
return self__.meta36468;
}));

(cljs.core.async.t_cljs$core$async36467.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36467.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36467.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36467.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async36467.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async36467.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async36467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36468","meta36468",1026904501,null)], null);
}));

(cljs.core.async.t_cljs$core$async36467.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36467");

(cljs.core.async.t_cljs$core$async36467.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async36467");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36467.
 */
cljs.core.async.__GT_t_cljs$core$async36467 = (function cljs$core$async$mult_$___GT_t_cljs$core$async36467(ch__$1,cs__$1,meta36468){
return (new cljs.core.async.t_cljs$core$async36467(ch__$1,cs__$1,meta36468));
});

}

return (new cljs.core.async.t_cljs$core$async36467(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35081__auto___39481 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_36664){
var state_val_36665 = (state_36664[(1)]);
if((state_val_36665 === (7))){
var inst_36655 = (state_36664[(2)]);
var state_36664__$1 = state_36664;
var statearr_36677_39482 = state_36664__$1;
(statearr_36677_39482[(2)] = inst_36655);

(statearr_36677_39482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (20))){
var inst_36538 = (state_36664[(7)]);
var inst_36558 = cljs.core.first(inst_36538);
var inst_36560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36558,(0),null);
var inst_36561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36558,(1),null);
var state_36664__$1 = (function (){var statearr_36682 = state_36664;
(statearr_36682[(8)] = inst_36560);

return statearr_36682;
})();
if(cljs.core.truth_(inst_36561)){
var statearr_36683_39484 = state_36664__$1;
(statearr_36683_39484[(1)] = (22));

} else {
var statearr_36684_39485 = state_36664__$1;
(statearr_36684_39485[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (27))){
var inst_36593 = (state_36664[(9)]);
var inst_36501 = (state_36664[(10)]);
var inst_36591 = (state_36664[(11)]);
var inst_36601 = (state_36664[(12)]);
var inst_36601__$1 = cljs.core._nth(inst_36591,inst_36593);
var inst_36602 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36601__$1,inst_36501,done);
var state_36664__$1 = (function (){var statearr_36690 = state_36664;
(statearr_36690[(12)] = inst_36601__$1);

return statearr_36690;
})();
if(cljs.core.truth_(inst_36602)){
var statearr_36691_39488 = state_36664__$1;
(statearr_36691_39488[(1)] = (30));

} else {
var statearr_36692_39489 = state_36664__$1;
(statearr_36692_39489[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (1))){
var state_36664__$1 = state_36664;
var statearr_36694_39491 = state_36664__$1;
(statearr_36694_39491[(2)] = null);

(statearr_36694_39491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (24))){
var inst_36538 = (state_36664[(7)]);
var inst_36567 = (state_36664[(2)]);
var inst_36568 = cljs.core.next(inst_36538);
var inst_36510 = inst_36568;
var inst_36511 = null;
var inst_36512 = (0);
var inst_36513 = (0);
var state_36664__$1 = (function (){var statearr_36699 = state_36664;
(statearr_36699[(13)] = inst_36510);

(statearr_36699[(14)] = inst_36511);

(statearr_36699[(15)] = inst_36512);

(statearr_36699[(16)] = inst_36513);

(statearr_36699[(17)] = inst_36567);

return statearr_36699;
})();
var statearr_36705_39493 = state_36664__$1;
(statearr_36705_39493[(2)] = null);

(statearr_36705_39493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (39))){
var state_36664__$1 = state_36664;
var statearr_36714_39494 = state_36664__$1;
(statearr_36714_39494[(2)] = null);

(statearr_36714_39494[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (4))){
var inst_36501 = (state_36664[(10)]);
var inst_36501__$1 = (state_36664[(2)]);
var inst_36502 = (inst_36501__$1 == null);
var state_36664__$1 = (function (){var statearr_36717 = state_36664;
(statearr_36717[(10)] = inst_36501__$1);

return statearr_36717;
})();
if(cljs.core.truth_(inst_36502)){
var statearr_36719_39496 = state_36664__$1;
(statearr_36719_39496[(1)] = (5));

} else {
var statearr_36723_39498 = state_36664__$1;
(statearr_36723_39498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (15))){
var inst_36510 = (state_36664[(13)]);
var inst_36511 = (state_36664[(14)]);
var inst_36512 = (state_36664[(15)]);
var inst_36513 = (state_36664[(16)]);
var inst_36532 = (state_36664[(2)]);
var inst_36534 = (inst_36513 + (1));
var tmp36709 = inst_36510;
var tmp36710 = inst_36511;
var tmp36711 = inst_36512;
var inst_36510__$1 = tmp36709;
var inst_36511__$1 = tmp36710;
var inst_36512__$1 = tmp36711;
var inst_36513__$1 = inst_36534;
var state_36664__$1 = (function (){var statearr_36728 = state_36664;
(statearr_36728[(18)] = inst_36532);

(statearr_36728[(13)] = inst_36510__$1);

(statearr_36728[(14)] = inst_36511__$1);

(statearr_36728[(15)] = inst_36512__$1);

(statearr_36728[(16)] = inst_36513__$1);

return statearr_36728;
})();
var statearr_36733_39512 = state_36664__$1;
(statearr_36733_39512[(2)] = null);

(statearr_36733_39512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (21))){
var inst_36571 = (state_36664[(2)]);
var state_36664__$1 = state_36664;
var statearr_36741_39513 = state_36664__$1;
(statearr_36741_39513[(2)] = inst_36571);

(statearr_36741_39513[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (31))){
var inst_36601 = (state_36664[(12)]);
var inst_36605 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36601);
var state_36664__$1 = state_36664;
var statearr_36750_39514 = state_36664__$1;
(statearr_36750_39514[(2)] = inst_36605);

(statearr_36750_39514[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (32))){
var inst_36593 = (state_36664[(9)]);
var inst_36592 = (state_36664[(19)]);
var inst_36591 = (state_36664[(11)]);
var inst_36590 = (state_36664[(20)]);
var inst_36607 = (state_36664[(2)]);
var inst_36608 = (inst_36593 + (1));
var tmp36737 = inst_36592;
var tmp36738 = inst_36591;
var tmp36739 = inst_36590;
var inst_36590__$1 = tmp36739;
var inst_36591__$1 = tmp36738;
var inst_36592__$1 = tmp36737;
var inst_36593__$1 = inst_36608;
var state_36664__$1 = (function (){var statearr_36751 = state_36664;
(statearr_36751[(21)] = inst_36607);

(statearr_36751[(9)] = inst_36593__$1);

(statearr_36751[(19)] = inst_36592__$1);

(statearr_36751[(11)] = inst_36591__$1);

(statearr_36751[(20)] = inst_36590__$1);

return statearr_36751;
})();
var statearr_36752_39519 = state_36664__$1;
(statearr_36752_39519[(2)] = null);

(statearr_36752_39519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (40))){
var inst_36625 = (state_36664[(22)]);
var inst_36629 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36625);
var state_36664__$1 = state_36664;
var statearr_36757_39521 = state_36664__$1;
(statearr_36757_39521[(2)] = inst_36629);

(statearr_36757_39521[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (33))){
var inst_36612 = (state_36664[(23)]);
var inst_36614 = cljs.core.chunked_seq_QMARK_(inst_36612);
var state_36664__$1 = state_36664;
if(inst_36614){
var statearr_36759_39524 = state_36664__$1;
(statearr_36759_39524[(1)] = (36));

} else {
var statearr_36760_39530 = state_36664__$1;
(statearr_36760_39530[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (13))){
var inst_36523 = (state_36664[(24)]);
var inst_36529 = cljs.core.async.close_BANG_(inst_36523);
var state_36664__$1 = state_36664;
var statearr_36761_39535 = state_36664__$1;
(statearr_36761_39535[(2)] = inst_36529);

(statearr_36761_39535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (22))){
var inst_36560 = (state_36664[(8)]);
var inst_36564 = cljs.core.async.close_BANG_(inst_36560);
var state_36664__$1 = state_36664;
var statearr_36766_39548 = state_36664__$1;
(statearr_36766_39548[(2)] = inst_36564);

(statearr_36766_39548[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (36))){
var inst_36612 = (state_36664[(23)]);
var inst_36619 = cljs.core.chunk_first(inst_36612);
var inst_36621 = cljs.core.chunk_rest(inst_36612);
var inst_36622 = cljs.core.count(inst_36619);
var inst_36590 = inst_36621;
var inst_36591 = inst_36619;
var inst_36592 = inst_36622;
var inst_36593 = (0);
var state_36664__$1 = (function (){var statearr_36768 = state_36664;
(statearr_36768[(9)] = inst_36593);

(statearr_36768[(19)] = inst_36592);

(statearr_36768[(11)] = inst_36591);

(statearr_36768[(20)] = inst_36590);

return statearr_36768;
})();
var statearr_36769_39551 = state_36664__$1;
(statearr_36769_39551[(2)] = null);

(statearr_36769_39551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (41))){
var inst_36612 = (state_36664[(23)]);
var inst_36631 = (state_36664[(2)]);
var inst_36632 = cljs.core.next(inst_36612);
var inst_36590 = inst_36632;
var inst_36591 = null;
var inst_36592 = (0);
var inst_36593 = (0);
var state_36664__$1 = (function (){var statearr_36774 = state_36664;
(statearr_36774[(9)] = inst_36593);

(statearr_36774[(19)] = inst_36592);

(statearr_36774[(25)] = inst_36631);

(statearr_36774[(11)] = inst_36591);

(statearr_36774[(20)] = inst_36590);

return statearr_36774;
})();
var statearr_36775_39562 = state_36664__$1;
(statearr_36775_39562[(2)] = null);

(statearr_36775_39562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (43))){
var state_36664__$1 = state_36664;
var statearr_36777_39565 = state_36664__$1;
(statearr_36777_39565[(2)] = null);

(statearr_36777_39565[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (29))){
var inst_36642 = (state_36664[(2)]);
var state_36664__$1 = state_36664;
var statearr_36778_39568 = state_36664__$1;
(statearr_36778_39568[(2)] = inst_36642);

(statearr_36778_39568[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (44))){
var inst_36652 = (state_36664[(2)]);
var state_36664__$1 = (function (){var statearr_36779 = state_36664;
(statearr_36779[(26)] = inst_36652);

return statearr_36779;
})();
var statearr_36780_39575 = state_36664__$1;
(statearr_36780_39575[(2)] = null);

(statearr_36780_39575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (6))){
var inst_36582 = (state_36664[(27)]);
var inst_36581 = cljs.core.deref(cs);
var inst_36582__$1 = cljs.core.keys(inst_36581);
var inst_36583 = cljs.core.count(inst_36582__$1);
var inst_36584 = cljs.core.reset_BANG_(dctr,inst_36583);
var inst_36589 = cljs.core.seq(inst_36582__$1);
var inst_36590 = inst_36589;
var inst_36591 = null;
var inst_36592 = (0);
var inst_36593 = (0);
var state_36664__$1 = (function (){var statearr_36782 = state_36664;
(statearr_36782[(9)] = inst_36593);

(statearr_36782[(19)] = inst_36592);

(statearr_36782[(27)] = inst_36582__$1);

(statearr_36782[(11)] = inst_36591);

(statearr_36782[(28)] = inst_36584);

(statearr_36782[(20)] = inst_36590);

return statearr_36782;
})();
var statearr_36783_39589 = state_36664__$1;
(statearr_36783_39589[(2)] = null);

(statearr_36783_39589[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (28))){
var inst_36612 = (state_36664[(23)]);
var inst_36590 = (state_36664[(20)]);
var inst_36612__$1 = cljs.core.seq(inst_36590);
var state_36664__$1 = (function (){var statearr_36784 = state_36664;
(statearr_36784[(23)] = inst_36612__$1);

return statearr_36784;
})();
if(inst_36612__$1){
var statearr_36785_39609 = state_36664__$1;
(statearr_36785_39609[(1)] = (33));

} else {
var statearr_36786_39610 = state_36664__$1;
(statearr_36786_39610[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (25))){
var inst_36593 = (state_36664[(9)]);
var inst_36592 = (state_36664[(19)]);
var inst_36597 = (inst_36593 < inst_36592);
var inst_36598 = inst_36597;
var state_36664__$1 = state_36664;
if(cljs.core.truth_(inst_36598)){
var statearr_36787_39635 = state_36664__$1;
(statearr_36787_39635[(1)] = (27));

} else {
var statearr_36788_39641 = state_36664__$1;
(statearr_36788_39641[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (34))){
var state_36664__$1 = state_36664;
var statearr_36789_39645 = state_36664__$1;
(statearr_36789_39645[(2)] = null);

(statearr_36789_39645[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (17))){
var state_36664__$1 = state_36664;
var statearr_36791_39650 = state_36664__$1;
(statearr_36791_39650[(2)] = null);

(statearr_36791_39650[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (3))){
var inst_36657 = (state_36664[(2)]);
var state_36664__$1 = state_36664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36664__$1,inst_36657);
} else {
if((state_val_36665 === (12))){
var inst_36576 = (state_36664[(2)]);
var state_36664__$1 = state_36664;
var statearr_36797_39668 = state_36664__$1;
(statearr_36797_39668[(2)] = inst_36576);

(statearr_36797_39668[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (2))){
var state_36664__$1 = state_36664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36664__$1,(4),ch);
} else {
if((state_val_36665 === (23))){
var state_36664__$1 = state_36664;
var statearr_36799_39676 = state_36664__$1;
(statearr_36799_39676[(2)] = null);

(statearr_36799_39676[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (35))){
var inst_36639 = (state_36664[(2)]);
var state_36664__$1 = state_36664;
var statearr_36802_39685 = state_36664__$1;
(statearr_36802_39685[(2)] = inst_36639);

(statearr_36802_39685[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (19))){
var inst_36538 = (state_36664[(7)]);
var inst_36549 = cljs.core.chunk_first(inst_36538);
var inst_36550 = cljs.core.chunk_rest(inst_36538);
var inst_36551 = cljs.core.count(inst_36549);
var inst_36510 = inst_36550;
var inst_36511 = inst_36549;
var inst_36512 = inst_36551;
var inst_36513 = (0);
var state_36664__$1 = (function (){var statearr_36805 = state_36664;
(statearr_36805[(13)] = inst_36510);

(statearr_36805[(14)] = inst_36511);

(statearr_36805[(15)] = inst_36512);

(statearr_36805[(16)] = inst_36513);

return statearr_36805;
})();
var statearr_36807_39706 = state_36664__$1;
(statearr_36807_39706[(2)] = null);

(statearr_36807_39706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (11))){
var inst_36510 = (state_36664[(13)]);
var inst_36538 = (state_36664[(7)]);
var inst_36538__$1 = cljs.core.seq(inst_36510);
var state_36664__$1 = (function (){var statearr_36808 = state_36664;
(statearr_36808[(7)] = inst_36538__$1);

return statearr_36808;
})();
if(inst_36538__$1){
var statearr_36809_39716 = state_36664__$1;
(statearr_36809_39716[(1)] = (16));

} else {
var statearr_36811_39721 = state_36664__$1;
(statearr_36811_39721[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (9))){
var inst_36578 = (state_36664[(2)]);
var state_36664__$1 = state_36664;
var statearr_36813_39726 = state_36664__$1;
(statearr_36813_39726[(2)] = inst_36578);

(statearr_36813_39726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (5))){
var inst_36508 = cljs.core.deref(cs);
var inst_36509 = cljs.core.seq(inst_36508);
var inst_36510 = inst_36509;
var inst_36511 = null;
var inst_36512 = (0);
var inst_36513 = (0);
var state_36664__$1 = (function (){var statearr_36816 = state_36664;
(statearr_36816[(13)] = inst_36510);

(statearr_36816[(14)] = inst_36511);

(statearr_36816[(15)] = inst_36512);

(statearr_36816[(16)] = inst_36513);

return statearr_36816;
})();
var statearr_36818_39736 = state_36664__$1;
(statearr_36818_39736[(2)] = null);

(statearr_36818_39736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (14))){
var state_36664__$1 = state_36664;
var statearr_36823_39743 = state_36664__$1;
(statearr_36823_39743[(2)] = null);

(statearr_36823_39743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (45))){
var inst_36649 = (state_36664[(2)]);
var state_36664__$1 = state_36664;
var statearr_36824_39749 = state_36664__$1;
(statearr_36824_39749[(2)] = inst_36649);

(statearr_36824_39749[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (26))){
var inst_36582 = (state_36664[(27)]);
var inst_36644 = (state_36664[(2)]);
var inst_36645 = cljs.core.seq(inst_36582);
var state_36664__$1 = (function (){var statearr_36825 = state_36664;
(statearr_36825[(29)] = inst_36644);

return statearr_36825;
})();
if(inst_36645){
var statearr_36826_39759 = state_36664__$1;
(statearr_36826_39759[(1)] = (42));

} else {
var statearr_36830_39760 = state_36664__$1;
(statearr_36830_39760[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (16))){
var inst_36538 = (state_36664[(7)]);
var inst_36541 = cljs.core.chunked_seq_QMARK_(inst_36538);
var state_36664__$1 = state_36664;
if(inst_36541){
var statearr_36834_39765 = state_36664__$1;
(statearr_36834_39765[(1)] = (19));

} else {
var statearr_36835_39768 = state_36664__$1;
(statearr_36835_39768[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (38))){
var inst_36635 = (state_36664[(2)]);
var state_36664__$1 = state_36664;
var statearr_36836_39770 = state_36664__$1;
(statearr_36836_39770[(2)] = inst_36635);

(statearr_36836_39770[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (30))){
var state_36664__$1 = state_36664;
var statearr_36837_39771 = state_36664__$1;
(statearr_36837_39771[(2)] = null);

(statearr_36837_39771[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (10))){
var inst_36511 = (state_36664[(14)]);
var inst_36513 = (state_36664[(16)]);
var inst_36522 = cljs.core._nth(inst_36511,inst_36513);
var inst_36523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36522,(0),null);
var inst_36524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36522,(1),null);
var state_36664__$1 = (function (){var statearr_36839 = state_36664;
(statearr_36839[(24)] = inst_36523);

return statearr_36839;
})();
if(cljs.core.truth_(inst_36524)){
var statearr_36840_39777 = state_36664__$1;
(statearr_36840_39777[(1)] = (13));

} else {
var statearr_36841_39779 = state_36664__$1;
(statearr_36841_39779[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (18))){
var inst_36574 = (state_36664[(2)]);
var state_36664__$1 = state_36664;
var statearr_36842_39780 = state_36664__$1;
(statearr_36842_39780[(2)] = inst_36574);

(statearr_36842_39780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (42))){
var state_36664__$1 = state_36664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36664__$1,(45),dchan);
} else {
if((state_val_36665 === (37))){
var inst_36501 = (state_36664[(10)]);
var inst_36625 = (state_36664[(22)]);
var inst_36612 = (state_36664[(23)]);
var inst_36625__$1 = cljs.core.first(inst_36612);
var inst_36626 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36625__$1,inst_36501,done);
var state_36664__$1 = (function (){var statearr_36844 = state_36664;
(statearr_36844[(22)] = inst_36625__$1);

return statearr_36844;
})();
if(cljs.core.truth_(inst_36626)){
var statearr_36851_39782 = state_36664__$1;
(statearr_36851_39782[(1)] = (39));

} else {
var statearr_36852_39785 = state_36664__$1;
(statearr_36852_39785[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (8))){
var inst_36512 = (state_36664[(15)]);
var inst_36513 = (state_36664[(16)]);
var inst_36516 = (inst_36513 < inst_36512);
var inst_36517 = inst_36516;
var state_36664__$1 = state_36664;
if(cljs.core.truth_(inst_36517)){
var statearr_36857_39789 = state_36664__$1;
(statearr_36857_39789[(1)] = (10));

} else {
var statearr_36858_39791 = state_36664__$1;
(statearr_36858_39791[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__34345__auto__ = null;
var cljs$core$async$mult_$_state_machine__34345__auto____0 = (function (){
var statearr_36863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36863[(0)] = cljs$core$async$mult_$_state_machine__34345__auto__);

(statearr_36863[(1)] = (1));

return statearr_36863;
});
var cljs$core$async$mult_$_state_machine__34345__auto____1 = (function (state_36664){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_36664);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e36864){var ex__34348__auto__ = e36864;
var statearr_36865_39807 = state_36664;
(statearr_36865_39807[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_36664[(4)]))){
var statearr_36866_39814 = state_36664;
(statearr_36866_39814[(1)] = cljs.core.first((state_36664[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39822 = state_36664;
state_36664 = G__39822;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34345__auto__ = function(state_36664){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34345__auto____1.call(this,state_36664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34345__auto____0;
cljs$core$async$mult_$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34345__auto____1;
return cljs$core$async$mult_$_state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_36874 = f__35082__auto__();
(statearr_36874[(6)] = c__35081__auto___39481);

return statearr_36874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
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
var G__36888 = arguments.length;
switch (G__36888) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_39849 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_39849(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_39864 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_39864(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_39888 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_39888(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_39897 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_39897(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_39905 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_39905(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___39914 = arguments.length;
var i__4865__auto___39915 = (0);
while(true){
if((i__4865__auto___39915 < len__4864__auto___39914)){
args__4870__auto__.push((arguments[i__4865__auto___39915]));

var G__39923 = (i__4865__auto___39915 + (1));
i__4865__auto___39915 = G__39923;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36987){
var map__36988 = p__36987;
var map__36988__$1 = cljs.core.__destructure_map(map__36988);
var opts = map__36988__$1;
var statearr_36989_39927 = state;
(statearr_36989_39927[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_36997_39928 = state;
(statearr_36997_39928[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_37001_39933 = state;
(statearr_37001_39933[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36967){
var G__36971 = cljs.core.first(seq36967);
var seq36967__$1 = cljs.core.next(seq36967);
var G__36972 = cljs.core.first(seq36967__$1);
var seq36967__$2 = cljs.core.next(seq36967__$1);
var G__36973 = cljs.core.first(seq36967__$2);
var seq36967__$3 = cljs.core.next(seq36967__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36971,G__36972,G__36973,seq36967__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37038 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37039){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37039 = meta37039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37040,meta37039__$1){
var self__ = this;
var _37040__$1 = this;
return (new cljs.core.async.t_cljs$core$async37038(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37039__$1));
}));

(cljs.core.async.t_cljs$core$async37038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37040){
var self__ = this;
var _37040__$1 = this;
return self__.meta37039;
}));

(cljs.core.async.t_cljs$core$async37038.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37038.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37038.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37038.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37038.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37038.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37038.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37038.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37039","meta37039",-2013090935,null)], null);
}));

(cljs.core.async.t_cljs$core$async37038.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37038");

(cljs.core.async.t_cljs$core$async37038.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async37038");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37038.
 */
cljs.core.async.__GT_t_cljs$core$async37038 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37038(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37039){
return (new cljs.core.async.t_cljs$core$async37038(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37039));
});

}

return (new cljs.core.async.t_cljs$core$async37038(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35081__auto___39973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_37151){
var state_val_37152 = (state_37151[(1)]);
if((state_val_37152 === (7))){
var inst_37111 = (state_37151[(2)]);
var state_37151__$1 = state_37151;
if(cljs.core.truth_(inst_37111)){
var statearr_37158_39974 = state_37151__$1;
(statearr_37158_39974[(1)] = (8));

} else {
var statearr_37159_39976 = state_37151__$1;
(statearr_37159_39976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (20))){
var inst_37104 = (state_37151[(7)]);
var state_37151__$1 = state_37151;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37151__$1,(23),out,inst_37104);
} else {
if((state_val_37152 === (1))){
var inst_37079 = calc_state();
var inst_37080 = cljs.core.__destructure_map(inst_37079);
var inst_37081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37080,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37080,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37080,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37087 = inst_37079;
var state_37151__$1 = (function (){var statearr_37165 = state_37151;
(statearr_37165[(8)] = inst_37082);

(statearr_37165[(9)] = inst_37086);

(statearr_37165[(10)] = inst_37087);

(statearr_37165[(11)] = inst_37081);

return statearr_37165;
})();
var statearr_37166_39984 = state_37151__$1;
(statearr_37166_39984[(2)] = null);

(statearr_37166_39984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (24))){
var inst_37095 = (state_37151[(12)]);
var inst_37087 = inst_37095;
var state_37151__$1 = (function (){var statearr_37173 = state_37151;
(statearr_37173[(10)] = inst_37087);

return statearr_37173;
})();
var statearr_37174_39985 = state_37151__$1;
(statearr_37174_39985[(2)] = null);

(statearr_37174_39985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (4))){
var inst_37104 = (state_37151[(7)]);
var inst_37106 = (state_37151[(13)]);
var inst_37103 = (state_37151[(2)]);
var inst_37104__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37103,(0),null);
var inst_37105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37103,(1),null);
var inst_37106__$1 = (inst_37104__$1 == null);
var state_37151__$1 = (function (){var statearr_37181 = state_37151;
(statearr_37181[(7)] = inst_37104__$1);

(statearr_37181[(13)] = inst_37106__$1);

(statearr_37181[(14)] = inst_37105);

return statearr_37181;
})();
if(cljs.core.truth_(inst_37106__$1)){
var statearr_37183_39989 = state_37151__$1;
(statearr_37183_39989[(1)] = (5));

} else {
var statearr_37184_39990 = state_37151__$1;
(statearr_37184_39990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (15))){
var inst_37096 = (state_37151[(15)]);
var inst_37125 = (state_37151[(16)]);
var inst_37125__$1 = cljs.core.empty_QMARK_(inst_37096);
var state_37151__$1 = (function (){var statearr_37186 = state_37151;
(statearr_37186[(16)] = inst_37125__$1);

return statearr_37186;
})();
if(inst_37125__$1){
var statearr_37189_39995 = state_37151__$1;
(statearr_37189_39995[(1)] = (17));

} else {
var statearr_37190_39997 = state_37151__$1;
(statearr_37190_39997[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (21))){
var inst_37095 = (state_37151[(12)]);
var inst_37087 = inst_37095;
var state_37151__$1 = (function (){var statearr_37191 = state_37151;
(statearr_37191[(10)] = inst_37087);

return statearr_37191;
})();
var statearr_37192_39998 = state_37151__$1;
(statearr_37192_39998[(2)] = null);

(statearr_37192_39998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (13))){
var inst_37118 = (state_37151[(2)]);
var inst_37119 = calc_state();
var inst_37087 = inst_37119;
var state_37151__$1 = (function (){var statearr_37193 = state_37151;
(statearr_37193[(17)] = inst_37118);

(statearr_37193[(10)] = inst_37087);

return statearr_37193;
})();
var statearr_37198_40000 = state_37151__$1;
(statearr_37198_40000[(2)] = null);

(statearr_37198_40000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (22))){
var inst_37145 = (state_37151[(2)]);
var state_37151__$1 = state_37151;
var statearr_37199_40004 = state_37151__$1;
(statearr_37199_40004[(2)] = inst_37145);

(statearr_37199_40004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (6))){
var inst_37105 = (state_37151[(14)]);
var inst_37109 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37105,change);
var state_37151__$1 = state_37151;
var statearr_37202_40005 = state_37151__$1;
(statearr_37202_40005[(2)] = inst_37109);

(statearr_37202_40005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (25))){
var state_37151__$1 = state_37151;
var statearr_37205_40006 = state_37151__$1;
(statearr_37205_40006[(2)] = null);

(statearr_37205_40006[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (17))){
var inst_37105 = (state_37151[(14)]);
var inst_37097 = (state_37151[(18)]);
var inst_37127 = (inst_37097.cljs$core$IFn$_invoke$arity$1 ? inst_37097.cljs$core$IFn$_invoke$arity$1(inst_37105) : inst_37097.call(null,inst_37105));
var inst_37128 = cljs.core.not(inst_37127);
var state_37151__$1 = state_37151;
var statearr_37213_40010 = state_37151__$1;
(statearr_37213_40010[(2)] = inst_37128);

(statearr_37213_40010[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (3))){
var inst_37149 = (state_37151[(2)]);
var state_37151__$1 = state_37151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37151__$1,inst_37149);
} else {
if((state_val_37152 === (12))){
var state_37151__$1 = state_37151;
var statearr_37214_40013 = state_37151__$1;
(statearr_37214_40013[(2)] = null);

(statearr_37214_40013[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (2))){
var inst_37095 = (state_37151[(12)]);
var inst_37087 = (state_37151[(10)]);
var inst_37095__$1 = cljs.core.__destructure_map(inst_37087);
var inst_37096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37095__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37095__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37095__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37151__$1 = (function (){var statearr_37215 = state_37151;
(statearr_37215[(12)] = inst_37095__$1);

(statearr_37215[(15)] = inst_37096);

(statearr_37215[(18)] = inst_37097);

return statearr_37215;
})();
return cljs.core.async.ioc_alts_BANG_(state_37151__$1,(4),inst_37098);
} else {
if((state_val_37152 === (23))){
var inst_37136 = (state_37151[(2)]);
var state_37151__$1 = state_37151;
if(cljs.core.truth_(inst_37136)){
var statearr_37216_40017 = state_37151__$1;
(statearr_37216_40017[(1)] = (24));

} else {
var statearr_37217_40018 = state_37151__$1;
(statearr_37217_40018[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (19))){
var inst_37131 = (state_37151[(2)]);
var state_37151__$1 = state_37151;
var statearr_37219_40023 = state_37151__$1;
(statearr_37219_40023[(2)] = inst_37131);

(statearr_37219_40023[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (11))){
var inst_37105 = (state_37151[(14)]);
var inst_37115 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37105);
var state_37151__$1 = state_37151;
var statearr_37221_40028 = state_37151__$1;
(statearr_37221_40028[(2)] = inst_37115);

(statearr_37221_40028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (9))){
var inst_37096 = (state_37151[(15)]);
var inst_37122 = (state_37151[(19)]);
var inst_37105 = (state_37151[(14)]);
var inst_37122__$1 = (inst_37096.cljs$core$IFn$_invoke$arity$1 ? inst_37096.cljs$core$IFn$_invoke$arity$1(inst_37105) : inst_37096.call(null,inst_37105));
var state_37151__$1 = (function (){var statearr_37224 = state_37151;
(statearr_37224[(19)] = inst_37122__$1);

return statearr_37224;
})();
if(cljs.core.truth_(inst_37122__$1)){
var statearr_37225_40031 = state_37151__$1;
(statearr_37225_40031[(1)] = (14));

} else {
var statearr_37226_40032 = state_37151__$1;
(statearr_37226_40032[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (5))){
var inst_37106 = (state_37151[(13)]);
var state_37151__$1 = state_37151;
var statearr_37227_40035 = state_37151__$1;
(statearr_37227_40035[(2)] = inst_37106);

(statearr_37227_40035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (14))){
var inst_37122 = (state_37151[(19)]);
var state_37151__$1 = state_37151;
var statearr_37228_40040 = state_37151__$1;
(statearr_37228_40040[(2)] = inst_37122);

(statearr_37228_40040[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (26))){
var inst_37141 = (state_37151[(2)]);
var state_37151__$1 = state_37151;
var statearr_37232_40043 = state_37151__$1;
(statearr_37232_40043[(2)] = inst_37141);

(statearr_37232_40043[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (16))){
var inst_37133 = (state_37151[(2)]);
var state_37151__$1 = state_37151;
if(cljs.core.truth_(inst_37133)){
var statearr_37236_40048 = state_37151__$1;
(statearr_37236_40048[(1)] = (20));

} else {
var statearr_37237_40049 = state_37151__$1;
(statearr_37237_40049[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (10))){
var inst_37147 = (state_37151[(2)]);
var state_37151__$1 = state_37151;
var statearr_37238_40050 = state_37151__$1;
(statearr_37238_40050[(2)] = inst_37147);

(statearr_37238_40050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (18))){
var inst_37125 = (state_37151[(16)]);
var state_37151__$1 = state_37151;
var statearr_37239_40055 = state_37151__$1;
(statearr_37239_40055[(2)] = inst_37125);

(statearr_37239_40055[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37152 === (8))){
var inst_37104 = (state_37151[(7)]);
var inst_37113 = (inst_37104 == null);
var state_37151__$1 = state_37151;
if(cljs.core.truth_(inst_37113)){
var statearr_37244_40060 = state_37151__$1;
(statearr_37244_40060[(1)] = (11));

} else {
var statearr_37245_40063 = state_37151__$1;
(statearr_37245_40063[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__34345__auto__ = null;
var cljs$core$async$mix_$_state_machine__34345__auto____0 = (function (){
var statearr_37249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37249[(0)] = cljs$core$async$mix_$_state_machine__34345__auto__);

(statearr_37249[(1)] = (1));

return statearr_37249;
});
var cljs$core$async$mix_$_state_machine__34345__auto____1 = (function (state_37151){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_37151);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e37250){var ex__34348__auto__ = e37250;
var statearr_37251_40073 = state_37151;
(statearr_37251_40073[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_37151[(4)]))){
var statearr_37252_40074 = state_37151;
(statearr_37252_40074[(1)] = cljs.core.first((state_37151[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40077 = state_37151;
state_37151 = G__40077;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34345__auto__ = function(state_37151){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34345__auto____1.call(this,state_37151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34345__auto____0;
cljs$core$async$mix_$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34345__auto____1;
return cljs$core$async$mix_$_state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_37261 = f__35082__auto__();
(statearr_37261[(6)] = c__35081__auto___39973);

return statearr_37261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_40092 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_40092(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_40108 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_40108(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_40117 = (function() {
var G__40118 = null;
var G__40118__1 = (function (p){
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
var G__40118__2 = (function (p,v){
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
G__40118 = function(p,v){
switch(arguments.length){
case 1:
return G__40118__1.call(this,p);
case 2:
return G__40118__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40118.cljs$core$IFn$_invoke$arity$1 = G__40118__1;
G__40118.cljs$core$IFn$_invoke$arity$2 = G__40118__2;
return G__40118;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37275 = arguments.length;
switch (G__37275) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_40117(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_40117(p,v);
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
var G__37290 = arguments.length;
switch (G__37290) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37285_SHARP_){
if(cljs.core.truth_((p1__37285_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37285_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37285_SHARP_.call(null,topic)))){
return p1__37285_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37285_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37300 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37300 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37301){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37301 = meta37301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37302,meta37301__$1){
var self__ = this;
var _37302__$1 = this;
return (new cljs.core.async.t_cljs$core$async37300(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37301__$1));
}));

(cljs.core.async.t_cljs$core$async37300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37302){
var self__ = this;
var _37302__$1 = this;
return self__.meta37301;
}));

(cljs.core.async.t_cljs$core$async37300.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37300.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37300.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37300.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37300.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async37300.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37300.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37301","meta37301",1846186912,null)], null);
}));

(cljs.core.async.t_cljs$core$async37300.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37300");

(cljs.core.async.t_cljs$core$async37300.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async37300");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37300.
 */
cljs.core.async.__GT_t_cljs$core$async37300 = (function cljs$core$async$__GT_t_cljs$core$async37300(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37301){
return (new cljs.core.async.t_cljs$core$async37300(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37301));
});

}

return (new cljs.core.async.t_cljs$core$async37300(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35081__auto___40192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_37435){
var state_val_37436 = (state_37435[(1)]);
if((state_val_37436 === (7))){
var inst_37430 = (state_37435[(2)]);
var state_37435__$1 = state_37435;
var statearr_37439_40196 = state_37435__$1;
(statearr_37439_40196[(2)] = inst_37430);

(statearr_37439_40196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (20))){
var state_37435__$1 = state_37435;
var statearr_37440_40198 = state_37435__$1;
(statearr_37440_40198[(2)] = null);

(statearr_37440_40198[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (1))){
var state_37435__$1 = state_37435;
var statearr_37445_40200 = state_37435__$1;
(statearr_37445_40200[(2)] = null);

(statearr_37445_40200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (24))){
var inst_37413 = (state_37435[(7)]);
var inst_37422 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37413);
var state_37435__$1 = state_37435;
var statearr_37446_40205 = state_37435__$1;
(statearr_37446_40205[(2)] = inst_37422);

(statearr_37446_40205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (4))){
var inst_37355 = (state_37435[(8)]);
var inst_37355__$1 = (state_37435[(2)]);
var inst_37360 = (inst_37355__$1 == null);
var state_37435__$1 = (function (){var statearr_37447 = state_37435;
(statearr_37447[(8)] = inst_37355__$1);

return statearr_37447;
})();
if(cljs.core.truth_(inst_37360)){
var statearr_37448_40212 = state_37435__$1;
(statearr_37448_40212[(1)] = (5));

} else {
var statearr_37449_40214 = state_37435__$1;
(statearr_37449_40214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (15))){
var inst_37407 = (state_37435[(2)]);
var state_37435__$1 = state_37435;
var statearr_37450_40218 = state_37435__$1;
(statearr_37450_40218[(2)] = inst_37407);

(statearr_37450_40218[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (21))){
var inst_37427 = (state_37435[(2)]);
var state_37435__$1 = (function (){var statearr_37451 = state_37435;
(statearr_37451[(9)] = inst_37427);

return statearr_37451;
})();
var statearr_37452_40226 = state_37435__$1;
(statearr_37452_40226[(2)] = null);

(statearr_37452_40226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (13))){
var inst_37386 = (state_37435[(10)]);
var inst_37391 = cljs.core.chunked_seq_QMARK_(inst_37386);
var state_37435__$1 = state_37435;
if(inst_37391){
var statearr_37453_40231 = state_37435__$1;
(statearr_37453_40231[(1)] = (16));

} else {
var statearr_37454_40236 = state_37435__$1;
(statearr_37454_40236[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (22))){
var inst_37419 = (state_37435[(2)]);
var state_37435__$1 = state_37435;
if(cljs.core.truth_(inst_37419)){
var statearr_37455_40240 = state_37435__$1;
(statearr_37455_40240[(1)] = (23));

} else {
var statearr_37456_40242 = state_37435__$1;
(statearr_37456_40242[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (6))){
var inst_37355 = (state_37435[(8)]);
var inst_37415 = (state_37435[(11)]);
var inst_37413 = (state_37435[(7)]);
var inst_37413__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37355) : topic_fn.call(null,inst_37355));
var inst_37414 = cljs.core.deref(mults);
var inst_37415__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37414,inst_37413__$1);
var state_37435__$1 = (function (){var statearr_37457 = state_37435;
(statearr_37457[(11)] = inst_37415__$1);

(statearr_37457[(7)] = inst_37413__$1);

return statearr_37457;
})();
if(cljs.core.truth_(inst_37415__$1)){
var statearr_37462_40248 = state_37435__$1;
(statearr_37462_40248[(1)] = (19));

} else {
var statearr_37463_40249 = state_37435__$1;
(statearr_37463_40249[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (25))){
var inst_37424 = (state_37435[(2)]);
var state_37435__$1 = state_37435;
var statearr_37468_40251 = state_37435__$1;
(statearr_37468_40251[(2)] = inst_37424);

(statearr_37468_40251[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (17))){
var inst_37386 = (state_37435[(10)]);
var inst_37398 = cljs.core.first(inst_37386);
var inst_37399 = cljs.core.async.muxch_STAR_(inst_37398);
var inst_37400 = cljs.core.async.close_BANG_(inst_37399);
var inst_37401 = cljs.core.next(inst_37386);
var inst_37372 = inst_37401;
var inst_37373 = null;
var inst_37374 = (0);
var inst_37375 = (0);
var state_37435__$1 = (function (){var statearr_37477 = state_37435;
(statearr_37477[(12)] = inst_37374);

(statearr_37477[(13)] = inst_37400);

(statearr_37477[(14)] = inst_37375);

(statearr_37477[(15)] = inst_37373);

(statearr_37477[(16)] = inst_37372);

return statearr_37477;
})();
var statearr_37478_40261 = state_37435__$1;
(statearr_37478_40261[(2)] = null);

(statearr_37478_40261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (3))){
var inst_37432 = (state_37435[(2)]);
var state_37435__$1 = state_37435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37435__$1,inst_37432);
} else {
if((state_val_37436 === (12))){
var inst_37409 = (state_37435[(2)]);
var state_37435__$1 = state_37435;
var statearr_37479_40265 = state_37435__$1;
(statearr_37479_40265[(2)] = inst_37409);

(statearr_37479_40265[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (2))){
var state_37435__$1 = state_37435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37435__$1,(4),ch);
} else {
if((state_val_37436 === (23))){
var state_37435__$1 = state_37435;
var statearr_37482_40270 = state_37435__$1;
(statearr_37482_40270[(2)] = null);

(statearr_37482_40270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (19))){
var inst_37355 = (state_37435[(8)]);
var inst_37415 = (state_37435[(11)]);
var inst_37417 = cljs.core.async.muxch_STAR_(inst_37415);
var state_37435__$1 = state_37435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37435__$1,(22),inst_37417,inst_37355);
} else {
if((state_val_37436 === (11))){
var inst_37386 = (state_37435[(10)]);
var inst_37372 = (state_37435[(16)]);
var inst_37386__$1 = cljs.core.seq(inst_37372);
var state_37435__$1 = (function (){var statearr_37484 = state_37435;
(statearr_37484[(10)] = inst_37386__$1);

return statearr_37484;
})();
if(inst_37386__$1){
var statearr_37486_40280 = state_37435__$1;
(statearr_37486_40280[(1)] = (13));

} else {
var statearr_37488_40282 = state_37435__$1;
(statearr_37488_40282[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (9))){
var inst_37411 = (state_37435[(2)]);
var state_37435__$1 = state_37435;
var statearr_37490_40286 = state_37435__$1;
(statearr_37490_40286[(2)] = inst_37411);

(statearr_37490_40286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (5))){
var inst_37369 = cljs.core.deref(mults);
var inst_37370 = cljs.core.vals(inst_37369);
var inst_37371 = cljs.core.seq(inst_37370);
var inst_37372 = inst_37371;
var inst_37373 = null;
var inst_37374 = (0);
var inst_37375 = (0);
var state_37435__$1 = (function (){var statearr_37492 = state_37435;
(statearr_37492[(12)] = inst_37374);

(statearr_37492[(14)] = inst_37375);

(statearr_37492[(15)] = inst_37373);

(statearr_37492[(16)] = inst_37372);

return statearr_37492;
})();
var statearr_37493_40287 = state_37435__$1;
(statearr_37493_40287[(2)] = null);

(statearr_37493_40287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (14))){
var state_37435__$1 = state_37435;
var statearr_37497_40292 = state_37435__$1;
(statearr_37497_40292[(2)] = null);

(statearr_37497_40292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (16))){
var inst_37386 = (state_37435[(10)]);
var inst_37393 = cljs.core.chunk_first(inst_37386);
var inst_37394 = cljs.core.chunk_rest(inst_37386);
var inst_37395 = cljs.core.count(inst_37393);
var inst_37372 = inst_37394;
var inst_37373 = inst_37393;
var inst_37374 = inst_37395;
var inst_37375 = (0);
var state_37435__$1 = (function (){var statearr_37500 = state_37435;
(statearr_37500[(12)] = inst_37374);

(statearr_37500[(14)] = inst_37375);

(statearr_37500[(15)] = inst_37373);

(statearr_37500[(16)] = inst_37372);

return statearr_37500;
})();
var statearr_37501_40296 = state_37435__$1;
(statearr_37501_40296[(2)] = null);

(statearr_37501_40296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (10))){
var inst_37374 = (state_37435[(12)]);
var inst_37375 = (state_37435[(14)]);
var inst_37373 = (state_37435[(15)]);
var inst_37372 = (state_37435[(16)]);
var inst_37380 = cljs.core._nth(inst_37373,inst_37375);
var inst_37381 = cljs.core.async.muxch_STAR_(inst_37380);
var inst_37382 = cljs.core.async.close_BANG_(inst_37381);
var inst_37383 = (inst_37375 + (1));
var tmp37494 = inst_37374;
var tmp37495 = inst_37373;
var tmp37496 = inst_37372;
var inst_37372__$1 = tmp37496;
var inst_37373__$1 = tmp37495;
var inst_37374__$1 = tmp37494;
var inst_37375__$1 = inst_37383;
var state_37435__$1 = (function (){var statearr_37502 = state_37435;
(statearr_37502[(12)] = inst_37374__$1);

(statearr_37502[(17)] = inst_37382);

(statearr_37502[(14)] = inst_37375__$1);

(statearr_37502[(15)] = inst_37373__$1);

(statearr_37502[(16)] = inst_37372__$1);

return statearr_37502;
})();
var statearr_37503_40313 = state_37435__$1;
(statearr_37503_40313[(2)] = null);

(statearr_37503_40313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (18))){
var inst_37404 = (state_37435[(2)]);
var state_37435__$1 = state_37435;
var statearr_37504_40322 = state_37435__$1;
(statearr_37504_40322[(2)] = inst_37404);

(statearr_37504_40322[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (8))){
var inst_37374 = (state_37435[(12)]);
var inst_37375 = (state_37435[(14)]);
var inst_37377 = (inst_37375 < inst_37374);
var inst_37378 = inst_37377;
var state_37435__$1 = state_37435;
if(cljs.core.truth_(inst_37378)){
var statearr_37507_40333 = state_37435__$1;
(statearr_37507_40333[(1)] = (10));

} else {
var statearr_37508_40334 = state_37435__$1;
(statearr_37508_40334[(1)] = (11));

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
var cljs$core$async$state_machine__34345__auto__ = null;
var cljs$core$async$state_machine__34345__auto____0 = (function (){
var statearr_37510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37510[(0)] = cljs$core$async$state_machine__34345__auto__);

(statearr_37510[(1)] = (1));

return statearr_37510;
});
var cljs$core$async$state_machine__34345__auto____1 = (function (state_37435){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_37435);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e37512){var ex__34348__auto__ = e37512;
var statearr_37515_40347 = state_37435;
(statearr_37515_40347[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_37435[(4)]))){
var statearr_37516_40357 = state_37435;
(statearr_37516_40357[(1)] = cljs.core.first((state_37435[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40358 = state_37435;
state_37435 = G__40358;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$state_machine__34345__auto__ = function(state_37435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34345__auto____1.call(this,state_37435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34345__auto____0;
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34345__auto____1;
return cljs$core$async$state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_37521 = f__35082__auto__();
(statearr_37521[(6)] = c__35081__auto___40192);

return statearr_37521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
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
var G__37525 = arguments.length;
switch (G__37525) {
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
var G__37544 = arguments.length;
switch (G__37544) {
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
var G__37551 = arguments.length;
switch (G__37551) {
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
var c__35081__auto___40434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_37624){
var state_val_37629 = (state_37624[(1)]);
if((state_val_37629 === (7))){
var state_37624__$1 = state_37624;
var statearr_37638_40442 = state_37624__$1;
(statearr_37638_40442[(2)] = null);

(statearr_37638_40442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (1))){
var state_37624__$1 = state_37624;
var statearr_37640_40443 = state_37624__$1;
(statearr_37640_40443[(2)] = null);

(statearr_37640_40443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (4))){
var inst_37568 = (state_37624[(7)]);
var inst_37570 = (state_37624[(8)]);
var inst_37573 = (inst_37570 < inst_37568);
var state_37624__$1 = state_37624;
if(cljs.core.truth_(inst_37573)){
var statearr_37642_40450 = state_37624__$1;
(statearr_37642_40450[(1)] = (6));

} else {
var statearr_37643_40453 = state_37624__$1;
(statearr_37643_40453[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (15))){
var inst_37605 = (state_37624[(9)]);
var inst_37613 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37605);
var state_37624__$1 = state_37624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37624__$1,(17),out,inst_37613);
} else {
if((state_val_37629 === (13))){
var inst_37605 = (state_37624[(9)]);
var inst_37605__$1 = (state_37624[(2)]);
var inst_37606 = cljs.core.some(cljs.core.nil_QMARK_,inst_37605__$1);
var state_37624__$1 = (function (){var statearr_37646 = state_37624;
(statearr_37646[(9)] = inst_37605__$1);

return statearr_37646;
})();
if(cljs.core.truth_(inst_37606)){
var statearr_37647_40468 = state_37624__$1;
(statearr_37647_40468[(1)] = (14));

} else {
var statearr_37648_40469 = state_37624__$1;
(statearr_37648_40469[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (6))){
var state_37624__$1 = state_37624;
var statearr_37650_40470 = state_37624__$1;
(statearr_37650_40470[(2)] = null);

(statearr_37650_40470[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (17))){
var inst_37615 = (state_37624[(2)]);
var state_37624__$1 = (function (){var statearr_37662 = state_37624;
(statearr_37662[(10)] = inst_37615);

return statearr_37662;
})();
var statearr_37663_40473 = state_37624__$1;
(statearr_37663_40473[(2)] = null);

(statearr_37663_40473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (3))){
var inst_37620 = (state_37624[(2)]);
var state_37624__$1 = state_37624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37624__$1,inst_37620);
} else {
if((state_val_37629 === (12))){
var _ = (function (){var statearr_37666 = state_37624;
(statearr_37666[(4)] = cljs.core.rest((state_37624[(4)])));

return statearr_37666;
})();
var state_37624__$1 = state_37624;
var ex37660 = (state_37624__$1[(2)]);
var statearr_37667_40479 = state_37624__$1;
(statearr_37667_40479[(5)] = ex37660);


if((ex37660 instanceof Object)){
var statearr_37671_40484 = state_37624__$1;
(statearr_37671_40484[(1)] = (11));

(statearr_37671_40484[(5)] = null);

} else {
throw ex37660;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (2))){
var inst_37566 = cljs.core.reset_BANG_(dctr,cnt);
var inst_37568 = cnt;
var inst_37570 = (0);
var state_37624__$1 = (function (){var statearr_37682 = state_37624;
(statearr_37682[(11)] = inst_37566);

(statearr_37682[(7)] = inst_37568);

(statearr_37682[(8)] = inst_37570);

return statearr_37682;
})();
var statearr_37687_40497 = state_37624__$1;
(statearr_37687_40497[(2)] = null);

(statearr_37687_40497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (11))){
var inst_37577 = (state_37624[(2)]);
var inst_37580 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_37624__$1 = (function (){var statearr_37689 = state_37624;
(statearr_37689[(12)] = inst_37577);

return statearr_37689;
})();
var statearr_37690_40511 = state_37624__$1;
(statearr_37690_40511[(2)] = inst_37580);

(statearr_37690_40511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (9))){
var inst_37570 = (state_37624[(8)]);
var _ = (function (){var statearr_37695 = state_37624;
(statearr_37695[(4)] = cljs.core.cons((12),(state_37624[(4)])));

return statearr_37695;
})();
var inst_37586 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37570) : chs__$1.call(null,inst_37570));
var inst_37587 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37570) : done.call(null,inst_37570));
var inst_37588 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37586,inst_37587);
var ___$1 = (function (){var statearr_37696 = state_37624;
(statearr_37696[(4)] = cljs.core.rest((state_37624[(4)])));

return statearr_37696;
})();
var state_37624__$1 = state_37624;
var statearr_37697_40521 = state_37624__$1;
(statearr_37697_40521[(2)] = inst_37588);

(statearr_37697_40521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (5))){
var inst_37601 = (state_37624[(2)]);
var state_37624__$1 = (function (){var statearr_37701 = state_37624;
(statearr_37701[(13)] = inst_37601);

return statearr_37701;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37624__$1,(13),dchan);
} else {
if((state_val_37629 === (14))){
var inst_37608 = cljs.core.async.close_BANG_(out);
var state_37624__$1 = state_37624;
var statearr_37711_40526 = state_37624__$1;
(statearr_37711_40526[(2)] = inst_37608);

(statearr_37711_40526[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (16))){
var inst_37618 = (state_37624[(2)]);
var state_37624__$1 = state_37624;
var statearr_37715_40527 = state_37624__$1;
(statearr_37715_40527[(2)] = inst_37618);

(statearr_37715_40527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (10))){
var inst_37570 = (state_37624[(8)]);
var inst_37591 = (state_37624[(2)]);
var inst_37595 = (inst_37570 + (1));
var inst_37570__$1 = inst_37595;
var state_37624__$1 = (function (){var statearr_37719 = state_37624;
(statearr_37719[(14)] = inst_37591);

(statearr_37719[(8)] = inst_37570__$1);

return statearr_37719;
})();
var statearr_37721_40538 = state_37624__$1;
(statearr_37721_40538[(2)] = null);

(statearr_37721_40538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (8))){
var inst_37599 = (state_37624[(2)]);
var state_37624__$1 = state_37624;
var statearr_37722_40539 = state_37624__$1;
(statearr_37722_40539[(2)] = inst_37599);

(statearr_37722_40539[(1)] = (5));


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
var cljs$core$async$state_machine__34345__auto__ = null;
var cljs$core$async$state_machine__34345__auto____0 = (function (){
var statearr_37723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37723[(0)] = cljs$core$async$state_machine__34345__auto__);

(statearr_37723[(1)] = (1));

return statearr_37723;
});
var cljs$core$async$state_machine__34345__auto____1 = (function (state_37624){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_37624);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e37728){var ex__34348__auto__ = e37728;
var statearr_37729_40544 = state_37624;
(statearr_37729_40544[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_37624[(4)]))){
var statearr_37730_40545 = state_37624;
(statearr_37730_40545[(1)] = cljs.core.first((state_37624[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40551 = state_37624;
state_37624 = G__40551;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$state_machine__34345__auto__ = function(state_37624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34345__auto____1.call(this,state_37624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34345__auto____0;
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34345__auto____1;
return cljs$core$async$state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_37733 = f__35082__auto__();
(statearr_37733[(6)] = c__35081__auto___40434);

return statearr_37733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
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
var G__37746 = arguments.length;
switch (G__37746) {
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
var c__35081__auto___40557 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_37792){
var state_val_37793 = (state_37792[(1)]);
if((state_val_37793 === (7))){
var inst_37769 = (state_37792[(7)]);
var inst_37768 = (state_37792[(8)]);
var inst_37768__$1 = (state_37792[(2)]);
var inst_37769__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37768__$1,(0),null);
var inst_37770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37768__$1,(1),null);
var inst_37771 = (inst_37769__$1 == null);
var state_37792__$1 = (function (){var statearr_37797 = state_37792;
(statearr_37797[(9)] = inst_37770);

(statearr_37797[(7)] = inst_37769__$1);

(statearr_37797[(8)] = inst_37768__$1);

return statearr_37797;
})();
if(cljs.core.truth_(inst_37771)){
var statearr_37798_40564 = state_37792__$1;
(statearr_37798_40564[(1)] = (8));

} else {
var statearr_37799_40565 = state_37792__$1;
(statearr_37799_40565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (1))){
var inst_37757 = cljs.core.vec(chs);
var inst_37758 = inst_37757;
var state_37792__$1 = (function (){var statearr_37802 = state_37792;
(statearr_37802[(10)] = inst_37758);

return statearr_37802;
})();
var statearr_37804_40567 = state_37792__$1;
(statearr_37804_40567[(2)] = null);

(statearr_37804_40567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (4))){
var inst_37758 = (state_37792[(10)]);
var state_37792__$1 = state_37792;
return cljs.core.async.ioc_alts_BANG_(state_37792__$1,(7),inst_37758);
} else {
if((state_val_37793 === (6))){
var inst_37787 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37807_40570 = state_37792__$1;
(statearr_37807_40570[(2)] = inst_37787);

(statearr_37807_40570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (3))){
var inst_37789 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37792__$1,inst_37789);
} else {
if((state_val_37793 === (2))){
var inst_37758 = (state_37792[(10)]);
var inst_37761 = cljs.core.count(inst_37758);
var inst_37762 = (inst_37761 > (0));
var state_37792__$1 = state_37792;
if(cljs.core.truth_(inst_37762)){
var statearr_37812_40577 = state_37792__$1;
(statearr_37812_40577[(1)] = (4));

} else {
var statearr_37815_40578 = state_37792__$1;
(statearr_37815_40578[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (11))){
var inst_37758 = (state_37792[(10)]);
var inst_37780 = (state_37792[(2)]);
var tmp37808 = inst_37758;
var inst_37758__$1 = tmp37808;
var state_37792__$1 = (function (){var statearr_37816 = state_37792;
(statearr_37816[(10)] = inst_37758__$1);

(statearr_37816[(11)] = inst_37780);

return statearr_37816;
})();
var statearr_37819_40591 = state_37792__$1;
(statearr_37819_40591[(2)] = null);

(statearr_37819_40591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (9))){
var inst_37769 = (state_37792[(7)]);
var state_37792__$1 = state_37792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37792__$1,(11),out,inst_37769);
} else {
if((state_val_37793 === (5))){
var inst_37785 = cljs.core.async.close_BANG_(out);
var state_37792__$1 = state_37792;
var statearr_37841_40592 = state_37792__$1;
(statearr_37841_40592[(2)] = inst_37785);

(statearr_37841_40592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (10))){
var inst_37783 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37844_40593 = state_37792__$1;
(statearr_37844_40593[(2)] = inst_37783);

(statearr_37844_40593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (8))){
var inst_37758 = (state_37792[(10)]);
var inst_37770 = (state_37792[(9)]);
var inst_37769 = (state_37792[(7)]);
var inst_37768 = (state_37792[(8)]);
var inst_37774 = (function (){var cs = inst_37758;
var vec__37764 = inst_37768;
var v = inst_37769;
var c = inst_37770;
return (function (p1__37735_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37735_SHARP_);
});
})();
var inst_37775 = cljs.core.filterv(inst_37774,inst_37758);
var inst_37758__$1 = inst_37775;
var state_37792__$1 = (function (){var statearr_37856 = state_37792;
(statearr_37856[(10)] = inst_37758__$1);

return statearr_37856;
})();
var statearr_37857_40604 = state_37792__$1;
(statearr_37857_40604[(2)] = null);

(statearr_37857_40604[(1)] = (2));


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
var cljs$core$async$state_machine__34345__auto__ = null;
var cljs$core$async$state_machine__34345__auto____0 = (function (){
var statearr_37859 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37859[(0)] = cljs$core$async$state_machine__34345__auto__);

(statearr_37859[(1)] = (1));

return statearr_37859;
});
var cljs$core$async$state_machine__34345__auto____1 = (function (state_37792){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_37792);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e37860){var ex__34348__auto__ = e37860;
var statearr_37861_40614 = state_37792;
(statearr_37861_40614[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_37792[(4)]))){
var statearr_37862_40616 = state_37792;
(statearr_37862_40616[(1)] = cljs.core.first((state_37792[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40618 = state_37792;
state_37792 = G__40618;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$state_machine__34345__auto__ = function(state_37792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34345__auto____1.call(this,state_37792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34345__auto____0;
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34345__auto____1;
return cljs$core$async$state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_37868 = f__35082__auto__();
(statearr_37868[(6)] = c__35081__auto___40557);

return statearr_37868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
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
var G__37873 = arguments.length;
switch (G__37873) {
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
var c__35081__auto___40626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_37901){
var state_val_37902 = (state_37901[(1)]);
if((state_val_37902 === (7))){
var inst_37882 = (state_37901[(7)]);
var inst_37882__$1 = (state_37901[(2)]);
var inst_37883 = (inst_37882__$1 == null);
var inst_37884 = cljs.core.not(inst_37883);
var state_37901__$1 = (function (){var statearr_37904 = state_37901;
(statearr_37904[(7)] = inst_37882__$1);

return statearr_37904;
})();
if(inst_37884){
var statearr_37905_40632 = state_37901__$1;
(statearr_37905_40632[(1)] = (8));

} else {
var statearr_37906_40634 = state_37901__$1;
(statearr_37906_40634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (1))){
var inst_37877 = (0);
var state_37901__$1 = (function (){var statearr_37912 = state_37901;
(statearr_37912[(8)] = inst_37877);

return statearr_37912;
})();
var statearr_37920_40635 = state_37901__$1;
(statearr_37920_40635[(2)] = null);

(statearr_37920_40635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (4))){
var state_37901__$1 = state_37901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37901__$1,(7),ch);
} else {
if((state_val_37902 === (6))){
var inst_37896 = (state_37901[(2)]);
var state_37901__$1 = state_37901;
var statearr_37929_40637 = state_37901__$1;
(statearr_37929_40637[(2)] = inst_37896);

(statearr_37929_40637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (3))){
var inst_37898 = (state_37901[(2)]);
var inst_37899 = cljs.core.async.close_BANG_(out);
var state_37901__$1 = (function (){var statearr_37934 = state_37901;
(statearr_37934[(9)] = inst_37898);

return statearr_37934;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37901__$1,inst_37899);
} else {
if((state_val_37902 === (2))){
var inst_37877 = (state_37901[(8)]);
var inst_37879 = (inst_37877 < n);
var state_37901__$1 = state_37901;
if(cljs.core.truth_(inst_37879)){
var statearr_37935_40641 = state_37901__$1;
(statearr_37935_40641[(1)] = (4));

} else {
var statearr_37936_40646 = state_37901__$1;
(statearr_37936_40646[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (11))){
var inst_37877 = (state_37901[(8)]);
var inst_37887 = (state_37901[(2)]);
var inst_37889 = (inst_37877 + (1));
var inst_37877__$1 = inst_37889;
var state_37901__$1 = (function (){var statearr_37938 = state_37901;
(statearr_37938[(10)] = inst_37887);

(statearr_37938[(8)] = inst_37877__$1);

return statearr_37938;
})();
var statearr_37939_40658 = state_37901__$1;
(statearr_37939_40658[(2)] = null);

(statearr_37939_40658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (9))){
var state_37901__$1 = state_37901;
var statearr_37940_40659 = state_37901__$1;
(statearr_37940_40659[(2)] = null);

(statearr_37940_40659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (5))){
var state_37901__$1 = state_37901;
var statearr_37941_40662 = state_37901__$1;
(statearr_37941_40662[(2)] = null);

(statearr_37941_40662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (10))){
var inst_37893 = (state_37901[(2)]);
var state_37901__$1 = state_37901;
var statearr_37942_40663 = state_37901__$1;
(statearr_37942_40663[(2)] = inst_37893);

(statearr_37942_40663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (8))){
var inst_37882 = (state_37901[(7)]);
var state_37901__$1 = state_37901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37901__$1,(11),out,inst_37882);
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
var cljs$core$async$state_machine__34345__auto__ = null;
var cljs$core$async$state_machine__34345__auto____0 = (function (){
var statearr_37943 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37943[(0)] = cljs$core$async$state_machine__34345__auto__);

(statearr_37943[(1)] = (1));

return statearr_37943;
});
var cljs$core$async$state_machine__34345__auto____1 = (function (state_37901){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_37901);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e37944){var ex__34348__auto__ = e37944;
var statearr_37945_40669 = state_37901;
(statearr_37945_40669[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_37901[(4)]))){
var statearr_37946_40671 = state_37901;
(statearr_37946_40671[(1)] = cljs.core.first((state_37901[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40678 = state_37901;
state_37901 = G__40678;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$state_machine__34345__auto__ = function(state_37901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34345__auto____1.call(this,state_37901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34345__auto____0;
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34345__auto____1;
return cljs$core$async$state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_37948 = f__35082__auto__();
(statearr_37948[(6)] = c__35081__auto___40626);

return statearr_37948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37965 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37965 = (function (f,ch,meta37966){
this.f = f;
this.ch = ch;
this.meta37966 = meta37966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37967,meta37966__$1){
var self__ = this;
var _37967__$1 = this;
return (new cljs.core.async.t_cljs$core$async37965(self__.f,self__.ch,meta37966__$1));
}));

(cljs.core.async.t_cljs$core$async37965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37967){
var self__ = this;
var _37967__$1 = this;
return self__.meta37966;
}));

(cljs.core.async.t_cljs$core$async37965.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37965.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37965.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37965.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37965.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37996 = (function (f,ch,meta37966,_,fn1,meta37997){
this.f = f;
this.ch = ch;
this.meta37966 = meta37966;
this._ = _;
this.fn1 = fn1;
this.meta37997 = meta37997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37998,meta37997__$1){
var self__ = this;
var _37998__$1 = this;
return (new cljs.core.async.t_cljs$core$async37996(self__.f,self__.ch,self__.meta37966,self__._,self__.fn1,meta37997__$1));
}));

(cljs.core.async.t_cljs$core$async37996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37998){
var self__ = this;
var _37998__$1 = this;
return self__.meta37997;
}));

(cljs.core.async.t_cljs$core$async37996.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async37996.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__37950_SHARP_){
var G__38004 = (((p1__37950_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37950_SHARP_) : self__.f.call(null,p1__37950_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38004) : f1.call(null,G__38004));
});
}));

(cljs.core.async.t_cljs$core$async37996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37966","meta37966",-387160064,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37965","cljs.core.async/t_cljs$core$async37965",434526813,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37997","meta37997",971685900,null)], null);
}));

(cljs.core.async.t_cljs$core$async37996.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37996");

(cljs.core.async.t_cljs$core$async37996.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async37996");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37996.
 */
cljs.core.async.__GT_t_cljs$core$async37996 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37996(f__$1,ch__$1,meta37966__$1,___$2,fn1__$1,meta37997){
return (new cljs.core.async.t_cljs$core$async37996(f__$1,ch__$1,meta37966__$1,___$2,fn1__$1,meta37997));
});

}

return (new cljs.core.async.t_cljs$core$async37996(self__.f,self__.ch,self__.meta37966,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38028 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38028) : self__.f.call(null,G__38028));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async37965.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37965.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async37965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37966","meta37966",-387160064,null)], null);
}));

(cljs.core.async.t_cljs$core$async37965.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37965");

(cljs.core.async.t_cljs$core$async37965.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async37965");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37965.
 */
cljs.core.async.__GT_t_cljs$core$async37965 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37965(f__$1,ch__$1,meta37966){
return (new cljs.core.async.t_cljs$core$async37965(f__$1,ch__$1,meta37966));
});

}

return (new cljs.core.async.t_cljs$core$async37965(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38036 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38036 = (function (f,ch,meta38037){
this.f = f;
this.ch = ch;
this.meta38037 = meta38037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38038,meta38037__$1){
var self__ = this;
var _38038__$1 = this;
return (new cljs.core.async.t_cljs$core$async38036(self__.f,self__.ch,meta38037__$1));
}));

(cljs.core.async.t_cljs$core$async38036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38038){
var self__ = this;
var _38038__$1 = this;
return self__.meta38037;
}));

(cljs.core.async.t_cljs$core$async38036.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38036.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38036.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38036.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38036.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38036.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38037","meta38037",2032867209,null)], null);
}));

(cljs.core.async.t_cljs$core$async38036.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38036");

(cljs.core.async.t_cljs$core$async38036.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async38036");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38036.
 */
cljs.core.async.__GT_t_cljs$core$async38036 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38036(f__$1,ch__$1,meta38037){
return (new cljs.core.async.t_cljs$core$async38036(f__$1,ch__$1,meta38037));
});

}

return (new cljs.core.async.t_cljs$core$async38036(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38048 = (function (p,ch,meta38049){
this.p = p;
this.ch = ch;
this.meta38049 = meta38049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38050,meta38049__$1){
var self__ = this;
var _38050__$1 = this;
return (new cljs.core.async.t_cljs$core$async38048(self__.p,self__.ch,meta38049__$1));
}));

(cljs.core.async.t_cljs$core$async38048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38050){
var self__ = this;
var _38050__$1 = this;
return self__.meta38049;
}));

(cljs.core.async.t_cljs$core$async38048.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38048.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38048.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38048.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38048.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38048.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38048.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38049","meta38049",-1351848949,null)], null);
}));

(cljs.core.async.t_cljs$core$async38048.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38048");

(cljs.core.async.t_cljs$core$async38048.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async38048");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38048.
 */
cljs.core.async.__GT_t_cljs$core$async38048 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38048(p__$1,ch__$1,meta38049){
return (new cljs.core.async.t_cljs$core$async38048(p__$1,ch__$1,meta38049));
});

}

return (new cljs.core.async.t_cljs$core$async38048(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38081 = arguments.length;
switch (G__38081) {
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
var c__35081__auto___40847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_38108){
var state_val_38109 = (state_38108[(1)]);
if((state_val_38109 === (7))){
var inst_38103 = (state_38108[(2)]);
var state_38108__$1 = state_38108;
var statearr_38113_40862 = state_38108__$1;
(statearr_38113_40862[(2)] = inst_38103);

(statearr_38113_40862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38109 === (1))){
var state_38108__$1 = state_38108;
var statearr_38116_40868 = state_38108__$1;
(statearr_38116_40868[(2)] = null);

(statearr_38116_40868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38109 === (4))){
var inst_38088 = (state_38108[(7)]);
var inst_38088__$1 = (state_38108[(2)]);
var inst_38089 = (inst_38088__$1 == null);
var state_38108__$1 = (function (){var statearr_38118 = state_38108;
(statearr_38118[(7)] = inst_38088__$1);

return statearr_38118;
})();
if(cljs.core.truth_(inst_38089)){
var statearr_38119_40883 = state_38108__$1;
(statearr_38119_40883[(1)] = (5));

} else {
var statearr_38122_40884 = state_38108__$1;
(statearr_38122_40884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38109 === (6))){
var inst_38088 = (state_38108[(7)]);
var inst_38093 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38088) : p.call(null,inst_38088));
var state_38108__$1 = state_38108;
if(cljs.core.truth_(inst_38093)){
var statearr_38124_40896 = state_38108__$1;
(statearr_38124_40896[(1)] = (8));

} else {
var statearr_38125_40900 = state_38108__$1;
(statearr_38125_40900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38109 === (3))){
var inst_38106 = (state_38108[(2)]);
var state_38108__$1 = state_38108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38108__$1,inst_38106);
} else {
if((state_val_38109 === (2))){
var state_38108__$1 = state_38108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38108__$1,(4),ch);
} else {
if((state_val_38109 === (11))){
var inst_38096 = (state_38108[(2)]);
var state_38108__$1 = state_38108;
var statearr_38127_40911 = state_38108__$1;
(statearr_38127_40911[(2)] = inst_38096);

(statearr_38127_40911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38109 === (9))){
var state_38108__$1 = state_38108;
var statearr_38129_40920 = state_38108__$1;
(statearr_38129_40920[(2)] = null);

(statearr_38129_40920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38109 === (5))){
var inst_38091 = cljs.core.async.close_BANG_(out);
var state_38108__$1 = state_38108;
var statearr_38130_40924 = state_38108__$1;
(statearr_38130_40924[(2)] = inst_38091);

(statearr_38130_40924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38109 === (10))){
var inst_38100 = (state_38108[(2)]);
var state_38108__$1 = (function (){var statearr_38131 = state_38108;
(statearr_38131[(8)] = inst_38100);

return statearr_38131;
})();
var statearr_38132_40934 = state_38108__$1;
(statearr_38132_40934[(2)] = null);

(statearr_38132_40934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38109 === (8))){
var inst_38088 = (state_38108[(7)]);
var state_38108__$1 = state_38108;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38108__$1,(11),out,inst_38088);
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
var cljs$core$async$state_machine__34345__auto__ = null;
var cljs$core$async$state_machine__34345__auto____0 = (function (){
var statearr_38135 = [null,null,null,null,null,null,null,null,null];
(statearr_38135[(0)] = cljs$core$async$state_machine__34345__auto__);

(statearr_38135[(1)] = (1));

return statearr_38135;
});
var cljs$core$async$state_machine__34345__auto____1 = (function (state_38108){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_38108);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e38137){var ex__34348__auto__ = e38137;
var statearr_38139_40940 = state_38108;
(statearr_38139_40940[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_38108[(4)]))){
var statearr_38140_40943 = state_38108;
(statearr_38140_40943[(1)] = cljs.core.first((state_38108[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40948 = state_38108;
state_38108 = G__40948;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$state_machine__34345__auto__ = function(state_38108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34345__auto____1.call(this,state_38108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34345__auto____0;
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34345__auto____1;
return cljs$core$async$state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_38142 = f__35082__auto__();
(statearr_38142[(6)] = c__35081__auto___40847);

return statearr_38142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38146 = arguments.length;
switch (G__38146) {
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
var c__35081__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_38213){
var state_val_38214 = (state_38213[(1)]);
if((state_val_38214 === (7))){
var inst_38209 = (state_38213[(2)]);
var state_38213__$1 = state_38213;
var statearr_38215_40966 = state_38213__$1;
(statearr_38215_40966[(2)] = inst_38209);

(statearr_38215_40966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (20))){
var inst_38178 = (state_38213[(7)]);
var inst_38189 = (state_38213[(2)]);
var inst_38190 = cljs.core.next(inst_38178);
var inst_38164 = inst_38190;
var inst_38165 = null;
var inst_38166 = (0);
var inst_38167 = (0);
var state_38213__$1 = (function (){var statearr_38219 = state_38213;
(statearr_38219[(8)] = inst_38167);

(statearr_38219[(9)] = inst_38189);

(statearr_38219[(10)] = inst_38166);

(statearr_38219[(11)] = inst_38164);

(statearr_38219[(12)] = inst_38165);

return statearr_38219;
})();
var statearr_38221_40972 = state_38213__$1;
(statearr_38221_40972[(2)] = null);

(statearr_38221_40972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (1))){
var state_38213__$1 = state_38213;
var statearr_38224_40984 = state_38213__$1;
(statearr_38224_40984[(2)] = null);

(statearr_38224_40984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (4))){
var inst_38153 = (state_38213[(13)]);
var inst_38153__$1 = (state_38213[(2)]);
var inst_38154 = (inst_38153__$1 == null);
var state_38213__$1 = (function (){var statearr_38225 = state_38213;
(statearr_38225[(13)] = inst_38153__$1);

return statearr_38225;
})();
if(cljs.core.truth_(inst_38154)){
var statearr_38226_41003 = state_38213__$1;
(statearr_38226_41003[(1)] = (5));

} else {
var statearr_38227_41007 = state_38213__$1;
(statearr_38227_41007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (15))){
var state_38213__$1 = state_38213;
var statearr_38234_41019 = state_38213__$1;
(statearr_38234_41019[(2)] = null);

(statearr_38234_41019[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (21))){
var state_38213__$1 = state_38213;
var statearr_38235_41033 = state_38213__$1;
(statearr_38235_41033[(2)] = null);

(statearr_38235_41033[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (13))){
var inst_38167 = (state_38213[(8)]);
var inst_38166 = (state_38213[(10)]);
var inst_38164 = (state_38213[(11)]);
var inst_38165 = (state_38213[(12)]);
var inst_38174 = (state_38213[(2)]);
var inst_38175 = (inst_38167 + (1));
var tmp38228 = inst_38166;
var tmp38229 = inst_38164;
var tmp38230 = inst_38165;
var inst_38164__$1 = tmp38229;
var inst_38165__$1 = tmp38230;
var inst_38166__$1 = tmp38228;
var inst_38167__$1 = inst_38175;
var state_38213__$1 = (function (){var statearr_38243 = state_38213;
(statearr_38243[(14)] = inst_38174);

(statearr_38243[(8)] = inst_38167__$1);

(statearr_38243[(10)] = inst_38166__$1);

(statearr_38243[(11)] = inst_38164__$1);

(statearr_38243[(12)] = inst_38165__$1);

return statearr_38243;
})();
var statearr_38247_41070 = state_38213__$1;
(statearr_38247_41070[(2)] = null);

(statearr_38247_41070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (22))){
var state_38213__$1 = state_38213;
var statearr_38251_41083 = state_38213__$1;
(statearr_38251_41083[(2)] = null);

(statearr_38251_41083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (6))){
var inst_38153 = (state_38213[(13)]);
var inst_38162 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38153) : f.call(null,inst_38153));
var inst_38163 = cljs.core.seq(inst_38162);
var inst_38164 = inst_38163;
var inst_38165 = null;
var inst_38166 = (0);
var inst_38167 = (0);
var state_38213__$1 = (function (){var statearr_38255 = state_38213;
(statearr_38255[(8)] = inst_38167);

(statearr_38255[(10)] = inst_38166);

(statearr_38255[(11)] = inst_38164);

(statearr_38255[(12)] = inst_38165);

return statearr_38255;
})();
var statearr_38256_41101 = state_38213__$1;
(statearr_38256_41101[(2)] = null);

(statearr_38256_41101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (17))){
var inst_38178 = (state_38213[(7)]);
var inst_38182 = cljs.core.chunk_first(inst_38178);
var inst_38183 = cljs.core.chunk_rest(inst_38178);
var inst_38184 = cljs.core.count(inst_38182);
var inst_38164 = inst_38183;
var inst_38165 = inst_38182;
var inst_38166 = inst_38184;
var inst_38167 = (0);
var state_38213__$1 = (function (){var statearr_38267 = state_38213;
(statearr_38267[(8)] = inst_38167);

(statearr_38267[(10)] = inst_38166);

(statearr_38267[(11)] = inst_38164);

(statearr_38267[(12)] = inst_38165);

return statearr_38267;
})();
var statearr_38268_41111 = state_38213__$1;
(statearr_38268_41111[(2)] = null);

(statearr_38268_41111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (3))){
var inst_38211 = (state_38213[(2)]);
var state_38213__$1 = state_38213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38213__$1,inst_38211);
} else {
if((state_val_38214 === (12))){
var inst_38198 = (state_38213[(2)]);
var state_38213__$1 = state_38213;
var statearr_38272_41121 = state_38213__$1;
(statearr_38272_41121[(2)] = inst_38198);

(statearr_38272_41121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (2))){
var state_38213__$1 = state_38213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38213__$1,(4),in$);
} else {
if((state_val_38214 === (23))){
var inst_38207 = (state_38213[(2)]);
var state_38213__$1 = state_38213;
var statearr_38288_41131 = state_38213__$1;
(statearr_38288_41131[(2)] = inst_38207);

(statearr_38288_41131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (19))){
var inst_38193 = (state_38213[(2)]);
var state_38213__$1 = state_38213;
var statearr_38300_41137 = state_38213__$1;
(statearr_38300_41137[(2)] = inst_38193);

(statearr_38300_41137[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (11))){
var inst_38178 = (state_38213[(7)]);
var inst_38164 = (state_38213[(11)]);
var inst_38178__$1 = cljs.core.seq(inst_38164);
var state_38213__$1 = (function (){var statearr_38301 = state_38213;
(statearr_38301[(7)] = inst_38178__$1);

return statearr_38301;
})();
if(inst_38178__$1){
var statearr_38302_41147 = state_38213__$1;
(statearr_38302_41147[(1)] = (14));

} else {
var statearr_38304_41148 = state_38213__$1;
(statearr_38304_41148[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (9))){
var inst_38200 = (state_38213[(2)]);
var inst_38201 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38213__$1 = (function (){var statearr_38308 = state_38213;
(statearr_38308[(15)] = inst_38200);

return statearr_38308;
})();
if(cljs.core.truth_(inst_38201)){
var statearr_38309_41158 = state_38213__$1;
(statearr_38309_41158[(1)] = (21));

} else {
var statearr_38310_41160 = state_38213__$1;
(statearr_38310_41160[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (5))){
var inst_38156 = cljs.core.async.close_BANG_(out);
var state_38213__$1 = state_38213;
var statearr_38311_41167 = state_38213__$1;
(statearr_38311_41167[(2)] = inst_38156);

(statearr_38311_41167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (14))){
var inst_38178 = (state_38213[(7)]);
var inst_38180 = cljs.core.chunked_seq_QMARK_(inst_38178);
var state_38213__$1 = state_38213;
if(inst_38180){
var statearr_38312_41169 = state_38213__$1;
(statearr_38312_41169[(1)] = (17));

} else {
var statearr_38314_41170 = state_38213__$1;
(statearr_38314_41170[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (16))){
var inst_38196 = (state_38213[(2)]);
var state_38213__$1 = state_38213;
var statearr_38317_41173 = state_38213__$1;
(statearr_38317_41173[(2)] = inst_38196);

(statearr_38317_41173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (10))){
var inst_38167 = (state_38213[(8)]);
var inst_38165 = (state_38213[(12)]);
var inst_38172 = cljs.core._nth(inst_38165,inst_38167);
var state_38213__$1 = state_38213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38213__$1,(13),out,inst_38172);
} else {
if((state_val_38214 === (18))){
var inst_38178 = (state_38213[(7)]);
var inst_38187 = cljs.core.first(inst_38178);
var state_38213__$1 = state_38213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38213__$1,(20),out,inst_38187);
} else {
if((state_val_38214 === (8))){
var inst_38167 = (state_38213[(8)]);
var inst_38166 = (state_38213[(10)]);
var inst_38169 = (inst_38167 < inst_38166);
var inst_38170 = inst_38169;
var state_38213__$1 = state_38213;
if(cljs.core.truth_(inst_38170)){
var statearr_38322_41202 = state_38213__$1;
(statearr_38322_41202[(1)] = (10));

} else {
var statearr_38323_41207 = state_38213__$1;
(statearr_38323_41207[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__34345__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34345__auto____0 = (function (){
var statearr_38325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38325[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34345__auto__);

(statearr_38325[(1)] = (1));

return statearr_38325;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34345__auto____1 = (function (state_38213){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_38213);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e38327){var ex__34348__auto__ = e38327;
var statearr_38328_41231 = state_38213;
(statearr_38328_41231[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_38213[(4)]))){
var statearr_38329_41236 = state_38213;
(statearr_38329_41236[(1)] = cljs.core.first((state_38213[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41247 = state_38213;
state_38213 = G__41247;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34345__auto__ = function(state_38213){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34345__auto____1.call(this,state_38213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34345__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34345__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_38336 = f__35082__auto__();
(statearr_38336[(6)] = c__35081__auto__);

return statearr_38336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
}));

return c__35081__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38347 = arguments.length;
switch (G__38347) {
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
var G__38367 = arguments.length;
switch (G__38367) {
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
var G__38382 = arguments.length;
switch (G__38382) {
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
var c__35081__auto___41303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_38422){
var state_val_38423 = (state_38422[(1)]);
if((state_val_38423 === (7))){
var inst_38417 = (state_38422[(2)]);
var state_38422__$1 = state_38422;
var statearr_38425_41317 = state_38422__$1;
(statearr_38425_41317[(2)] = inst_38417);

(statearr_38425_41317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38423 === (1))){
var inst_38398 = null;
var state_38422__$1 = (function (){var statearr_38427 = state_38422;
(statearr_38427[(7)] = inst_38398);

return statearr_38427;
})();
var statearr_38428_41321 = state_38422__$1;
(statearr_38428_41321[(2)] = null);

(statearr_38428_41321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38423 === (4))){
var inst_38401 = (state_38422[(8)]);
var inst_38401__$1 = (state_38422[(2)]);
var inst_38403 = (inst_38401__$1 == null);
var inst_38404 = cljs.core.not(inst_38403);
var state_38422__$1 = (function (){var statearr_38431 = state_38422;
(statearr_38431[(8)] = inst_38401__$1);

return statearr_38431;
})();
if(inst_38404){
var statearr_38432_41325 = state_38422__$1;
(statearr_38432_41325[(1)] = (5));

} else {
var statearr_38434_41330 = state_38422__$1;
(statearr_38434_41330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38423 === (6))){
var state_38422__$1 = state_38422;
var statearr_38435_41333 = state_38422__$1;
(statearr_38435_41333[(2)] = null);

(statearr_38435_41333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38423 === (3))){
var inst_38419 = (state_38422[(2)]);
var inst_38420 = cljs.core.async.close_BANG_(out);
var state_38422__$1 = (function (){var statearr_38436 = state_38422;
(statearr_38436[(9)] = inst_38419);

return statearr_38436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38422__$1,inst_38420);
} else {
if((state_val_38423 === (2))){
var state_38422__$1 = state_38422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38422__$1,(4),ch);
} else {
if((state_val_38423 === (11))){
var inst_38401 = (state_38422[(8)]);
var inst_38411 = (state_38422[(2)]);
var inst_38398 = inst_38401;
var state_38422__$1 = (function (){var statearr_38437 = state_38422;
(statearr_38437[(10)] = inst_38411);

(statearr_38437[(7)] = inst_38398);

return statearr_38437;
})();
var statearr_38438_41344 = state_38422__$1;
(statearr_38438_41344[(2)] = null);

(statearr_38438_41344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38423 === (9))){
var inst_38401 = (state_38422[(8)]);
var state_38422__$1 = state_38422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38422__$1,(11),out,inst_38401);
} else {
if((state_val_38423 === (5))){
var inst_38401 = (state_38422[(8)]);
var inst_38398 = (state_38422[(7)]);
var inst_38406 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38401,inst_38398);
var state_38422__$1 = state_38422;
if(inst_38406){
var statearr_38440_41356 = state_38422__$1;
(statearr_38440_41356[(1)] = (8));

} else {
var statearr_38441_41359 = state_38422__$1;
(statearr_38441_41359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38423 === (10))){
var inst_38414 = (state_38422[(2)]);
var state_38422__$1 = state_38422;
var statearr_38445_41360 = state_38422__$1;
(statearr_38445_41360[(2)] = inst_38414);

(statearr_38445_41360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38423 === (8))){
var inst_38398 = (state_38422[(7)]);
var tmp38439 = inst_38398;
var inst_38398__$1 = tmp38439;
var state_38422__$1 = (function (){var statearr_38446 = state_38422;
(statearr_38446[(7)] = inst_38398__$1);

return statearr_38446;
})();
var statearr_38447_41366 = state_38422__$1;
(statearr_38447_41366[(2)] = null);

(statearr_38447_41366[(1)] = (2));


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
var cljs$core$async$state_machine__34345__auto__ = null;
var cljs$core$async$state_machine__34345__auto____0 = (function (){
var statearr_38453 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38453[(0)] = cljs$core$async$state_machine__34345__auto__);

(statearr_38453[(1)] = (1));

return statearr_38453;
});
var cljs$core$async$state_machine__34345__auto____1 = (function (state_38422){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_38422);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e38456){var ex__34348__auto__ = e38456;
var statearr_38460_41377 = state_38422;
(statearr_38460_41377[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_38422[(4)]))){
var statearr_38462_41379 = state_38422;
(statearr_38462_41379[(1)] = cljs.core.first((state_38422[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41386 = state_38422;
state_38422 = G__41386;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$state_machine__34345__auto__ = function(state_38422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34345__auto____1.call(this,state_38422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34345__auto____0;
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34345__auto____1;
return cljs$core$async$state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_38466 = f__35082__auto__();
(statearr_38466[(6)] = c__35081__auto___41303);

return statearr_38466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38482 = arguments.length;
switch (G__38482) {
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
var c__35081__auto___41414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_38545){
var state_val_38546 = (state_38545[(1)]);
if((state_val_38546 === (7))){
var inst_38541 = (state_38545[(2)]);
var state_38545__$1 = state_38545;
var statearr_38549_41424 = state_38545__$1;
(statearr_38549_41424[(2)] = inst_38541);

(statearr_38549_41424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (1))){
var inst_38501 = (new Array(n));
var inst_38503 = inst_38501;
var inst_38504 = (0);
var state_38545__$1 = (function (){var statearr_38550 = state_38545;
(statearr_38550[(7)] = inst_38503);

(statearr_38550[(8)] = inst_38504);

return statearr_38550;
})();
var statearr_38551_41435 = state_38545__$1;
(statearr_38551_41435[(2)] = null);

(statearr_38551_41435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (4))){
var inst_38507 = (state_38545[(9)]);
var inst_38507__$1 = (state_38545[(2)]);
var inst_38508 = (inst_38507__$1 == null);
var inst_38509 = cljs.core.not(inst_38508);
var state_38545__$1 = (function (){var statearr_38552 = state_38545;
(statearr_38552[(9)] = inst_38507__$1);

return statearr_38552;
})();
if(inst_38509){
var statearr_38555_41437 = state_38545__$1;
(statearr_38555_41437[(1)] = (5));

} else {
var statearr_38556_41438 = state_38545__$1;
(statearr_38556_41438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (15))){
var inst_38535 = (state_38545[(2)]);
var state_38545__$1 = state_38545;
var statearr_38557_41441 = state_38545__$1;
(statearr_38557_41441[(2)] = inst_38535);

(statearr_38557_41441[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (13))){
var state_38545__$1 = state_38545;
var statearr_38560_41442 = state_38545__$1;
(statearr_38560_41442[(2)] = null);

(statearr_38560_41442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (6))){
var inst_38504 = (state_38545[(8)]);
var inst_38530 = (inst_38504 > (0));
var state_38545__$1 = state_38545;
if(cljs.core.truth_(inst_38530)){
var statearr_38563_41450 = state_38545__$1;
(statearr_38563_41450[(1)] = (12));

} else {
var statearr_38564_41453 = state_38545__$1;
(statearr_38564_41453[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (3))){
var inst_38543 = (state_38545[(2)]);
var state_38545__$1 = state_38545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38545__$1,inst_38543);
} else {
if((state_val_38546 === (12))){
var inst_38503 = (state_38545[(7)]);
var inst_38533 = cljs.core.vec(inst_38503);
var state_38545__$1 = state_38545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38545__$1,(15),out,inst_38533);
} else {
if((state_val_38546 === (2))){
var state_38545__$1 = state_38545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38545__$1,(4),ch);
} else {
if((state_val_38546 === (11))){
var inst_38524 = (state_38545[(2)]);
var inst_38525 = (new Array(n));
var inst_38503 = inst_38525;
var inst_38504 = (0);
var state_38545__$1 = (function (){var statearr_38573 = state_38545;
(statearr_38573[(7)] = inst_38503);

(statearr_38573[(8)] = inst_38504);

(statearr_38573[(10)] = inst_38524);

return statearr_38573;
})();
var statearr_38574_41464 = state_38545__$1;
(statearr_38574_41464[(2)] = null);

(statearr_38574_41464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (9))){
var inst_38503 = (state_38545[(7)]);
var inst_38522 = cljs.core.vec(inst_38503);
var state_38545__$1 = state_38545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38545__$1,(11),out,inst_38522);
} else {
if((state_val_38546 === (5))){
var inst_38503 = (state_38545[(7)]);
var inst_38512 = (state_38545[(11)]);
var inst_38504 = (state_38545[(8)]);
var inst_38507 = (state_38545[(9)]);
var inst_38511 = (inst_38503[inst_38504] = inst_38507);
var inst_38512__$1 = (inst_38504 + (1));
var inst_38514 = (inst_38512__$1 < n);
var state_38545__$1 = (function (){var statearr_38577 = state_38545;
(statearr_38577[(11)] = inst_38512__$1);

(statearr_38577[(12)] = inst_38511);

return statearr_38577;
})();
if(cljs.core.truth_(inst_38514)){
var statearr_38579_41477 = state_38545__$1;
(statearr_38579_41477[(1)] = (8));

} else {
var statearr_38580_41480 = state_38545__$1;
(statearr_38580_41480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (14))){
var inst_38538 = (state_38545[(2)]);
var inst_38539 = cljs.core.async.close_BANG_(out);
var state_38545__$1 = (function (){var statearr_38583 = state_38545;
(statearr_38583[(13)] = inst_38538);

return statearr_38583;
})();
var statearr_38585_41488 = state_38545__$1;
(statearr_38585_41488[(2)] = inst_38539);

(statearr_38585_41488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (10))){
var inst_38528 = (state_38545[(2)]);
var state_38545__$1 = state_38545;
var statearr_38588_41491 = state_38545__$1;
(statearr_38588_41491[(2)] = inst_38528);

(statearr_38588_41491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (8))){
var inst_38503 = (state_38545[(7)]);
var inst_38512 = (state_38545[(11)]);
var tmp38581 = inst_38503;
var inst_38503__$1 = tmp38581;
var inst_38504 = inst_38512;
var state_38545__$1 = (function (){var statearr_38589 = state_38545;
(statearr_38589[(7)] = inst_38503__$1);

(statearr_38589[(8)] = inst_38504);

return statearr_38589;
})();
var statearr_38591_41496 = state_38545__$1;
(statearr_38591_41496[(2)] = null);

(statearr_38591_41496[(1)] = (2));


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
var cljs$core$async$state_machine__34345__auto__ = null;
var cljs$core$async$state_machine__34345__auto____0 = (function (){
var statearr_38602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38602[(0)] = cljs$core$async$state_machine__34345__auto__);

(statearr_38602[(1)] = (1));

return statearr_38602;
});
var cljs$core$async$state_machine__34345__auto____1 = (function (state_38545){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_38545);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e38604){var ex__34348__auto__ = e38604;
var statearr_38605_41505 = state_38545;
(statearr_38605_41505[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_38545[(4)]))){
var statearr_38606_41506 = state_38545;
(statearr_38606_41506[(1)] = cljs.core.first((state_38545[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41509 = state_38545;
state_38545 = G__41509;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$state_machine__34345__auto__ = function(state_38545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34345__auto____1.call(this,state_38545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34345__auto____0;
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34345__auto____1;
return cljs$core$async$state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_38616 = f__35082__auto__();
(statearr_38616[(6)] = c__35081__auto___41414);

return statearr_38616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38624 = arguments.length;
switch (G__38624) {
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
var c__35081__auto___41525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_38687){
var state_val_38688 = (state_38687[(1)]);
if((state_val_38688 === (7))){
var inst_38680 = (state_38687[(2)]);
var state_38687__$1 = state_38687;
var statearr_38692_41531 = state_38687__$1;
(statearr_38692_41531[(2)] = inst_38680);

(statearr_38692_41531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (1))){
var inst_38634 = [];
var inst_38635 = inst_38634;
var inst_38637 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38687__$1 = (function (){var statearr_38694 = state_38687;
(statearr_38694[(7)] = inst_38637);

(statearr_38694[(8)] = inst_38635);

return statearr_38694;
})();
var statearr_38695_41534 = state_38687__$1;
(statearr_38695_41534[(2)] = null);

(statearr_38695_41534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (4))){
var inst_38640 = (state_38687[(9)]);
var inst_38640__$1 = (state_38687[(2)]);
var inst_38641 = (inst_38640__$1 == null);
var inst_38642 = cljs.core.not(inst_38641);
var state_38687__$1 = (function (){var statearr_38699 = state_38687;
(statearr_38699[(9)] = inst_38640__$1);

return statearr_38699;
})();
if(inst_38642){
var statearr_38702_41547 = state_38687__$1;
(statearr_38702_41547[(1)] = (5));

} else {
var statearr_38705_41553 = state_38687__$1;
(statearr_38705_41553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (15))){
var inst_38635 = (state_38687[(8)]);
var inst_38672 = cljs.core.vec(inst_38635);
var state_38687__$1 = state_38687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38687__$1,(18),out,inst_38672);
} else {
if((state_val_38688 === (13))){
var inst_38667 = (state_38687[(2)]);
var state_38687__$1 = state_38687;
var statearr_38709_41567 = state_38687__$1;
(statearr_38709_41567[(2)] = inst_38667);

(statearr_38709_41567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (6))){
var inst_38635 = (state_38687[(8)]);
var inst_38669 = inst_38635.length;
var inst_38670 = (inst_38669 > (0));
var state_38687__$1 = state_38687;
if(cljs.core.truth_(inst_38670)){
var statearr_38711_41574 = state_38687__$1;
(statearr_38711_41574[(1)] = (15));

} else {
var statearr_38712_41575 = state_38687__$1;
(statearr_38712_41575[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (17))){
var inst_38677 = (state_38687[(2)]);
var inst_38678 = cljs.core.async.close_BANG_(out);
var state_38687__$1 = (function (){var statearr_38714 = state_38687;
(statearr_38714[(10)] = inst_38677);

return statearr_38714;
})();
var statearr_38715_41586 = state_38687__$1;
(statearr_38715_41586[(2)] = inst_38678);

(statearr_38715_41586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (3))){
var inst_38682 = (state_38687[(2)]);
var state_38687__$1 = state_38687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38687__$1,inst_38682);
} else {
if((state_val_38688 === (12))){
var inst_38635 = (state_38687[(8)]);
var inst_38658 = cljs.core.vec(inst_38635);
var state_38687__$1 = state_38687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38687__$1,(14),out,inst_38658);
} else {
if((state_val_38688 === (2))){
var state_38687__$1 = state_38687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38687__$1,(4),ch);
} else {
if((state_val_38688 === (11))){
var inst_38640 = (state_38687[(9)]);
var inst_38645 = (state_38687[(11)]);
var inst_38635 = (state_38687[(8)]);
var inst_38655 = inst_38635.push(inst_38640);
var tmp38717 = inst_38635;
var inst_38635__$1 = tmp38717;
var inst_38637 = inst_38645;
var state_38687__$1 = (function (){var statearr_38727 = state_38687;
(statearr_38727[(7)] = inst_38637);

(statearr_38727[(8)] = inst_38635__$1);

(statearr_38727[(12)] = inst_38655);

return statearr_38727;
})();
var statearr_38728_41622 = state_38687__$1;
(statearr_38728_41622[(2)] = null);

(statearr_38728_41622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (9))){
var inst_38637 = (state_38687[(7)]);
var inst_38651 = cljs.core.keyword_identical_QMARK_(inst_38637,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_38687__$1 = state_38687;
var statearr_38730_41643 = state_38687__$1;
(statearr_38730_41643[(2)] = inst_38651);

(statearr_38730_41643[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (5))){
var inst_38640 = (state_38687[(9)]);
var inst_38647 = (state_38687[(13)]);
var inst_38637 = (state_38687[(7)]);
var inst_38645 = (state_38687[(11)]);
var inst_38645__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38640) : f.call(null,inst_38640));
var inst_38647__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38645__$1,inst_38637);
var state_38687__$1 = (function (){var statearr_38731 = state_38687;
(statearr_38731[(13)] = inst_38647__$1);

(statearr_38731[(11)] = inst_38645__$1);

return statearr_38731;
})();
if(inst_38647__$1){
var statearr_38732_41664 = state_38687__$1;
(statearr_38732_41664[(1)] = (8));

} else {
var statearr_38733_41665 = state_38687__$1;
(statearr_38733_41665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (14))){
var inst_38640 = (state_38687[(9)]);
var inst_38645 = (state_38687[(11)]);
var inst_38660 = (state_38687[(2)]);
var inst_38663 = [];
var inst_38664 = inst_38663.push(inst_38640);
var inst_38635 = inst_38663;
var inst_38637 = inst_38645;
var state_38687__$1 = (function (){var statearr_38738 = state_38687;
(statearr_38738[(14)] = inst_38660);

(statearr_38738[(7)] = inst_38637);

(statearr_38738[(8)] = inst_38635);

(statearr_38738[(15)] = inst_38664);

return statearr_38738;
})();
var statearr_38740_41691 = state_38687__$1;
(statearr_38740_41691[(2)] = null);

(statearr_38740_41691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (16))){
var state_38687__$1 = state_38687;
var statearr_38741_41706 = state_38687__$1;
(statearr_38741_41706[(2)] = null);

(statearr_38741_41706[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (10))){
var inst_38653 = (state_38687[(2)]);
var state_38687__$1 = state_38687;
if(cljs.core.truth_(inst_38653)){
var statearr_38745_41711 = state_38687__$1;
(statearr_38745_41711[(1)] = (11));

} else {
var statearr_38746_41713 = state_38687__$1;
(statearr_38746_41713[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (18))){
var inst_38674 = (state_38687[(2)]);
var state_38687__$1 = state_38687;
var statearr_38748_41719 = state_38687__$1;
(statearr_38748_41719[(2)] = inst_38674);

(statearr_38748_41719[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (8))){
var inst_38647 = (state_38687[(13)]);
var state_38687__$1 = state_38687;
var statearr_38749_41720 = state_38687__$1;
(statearr_38749_41720[(2)] = inst_38647);

(statearr_38749_41720[(1)] = (10));


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
var cljs$core$async$state_machine__34345__auto__ = null;
var cljs$core$async$state_machine__34345__auto____0 = (function (){
var statearr_38752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38752[(0)] = cljs$core$async$state_machine__34345__auto__);

(statearr_38752[(1)] = (1));

return statearr_38752;
});
var cljs$core$async$state_machine__34345__auto____1 = (function (state_38687){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_38687);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e38753){var ex__34348__auto__ = e38753;
var statearr_38754_41732 = state_38687;
(statearr_38754_41732[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_38687[(4)]))){
var statearr_38756_41735 = state_38687;
(statearr_38756_41735[(1)] = cljs.core.first((state_38687[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41738 = state_38687;
state_38687 = G__41738;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
cljs$core$async$state_machine__34345__auto__ = function(state_38687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34345__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34345__auto____1.call(this,state_38687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34345__auto____0;
cljs$core$async$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34345__auto____1;
return cljs$core$async$state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_38757 = f__35082__auto__();
(statearr_38757[(6)] = c__35081__auto___41525);

return statearr_38757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
