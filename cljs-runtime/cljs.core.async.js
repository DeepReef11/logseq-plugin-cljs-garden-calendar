goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35139 = arguments.length;
switch (G__35139) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35144 = (function (f,blockable,meta35145){
this.f = f;
this.blockable = blockable;
this.meta35145 = meta35145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35146,meta35145__$1){
var self__ = this;
var _35146__$1 = this;
return (new cljs.core.async.t_cljs$core$async35144(self__.f,self__.blockable,meta35145__$1));
}));

(cljs.core.async.t_cljs$core$async35144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35146){
var self__ = this;
var _35146__$1 = this;
return self__.meta35145;
}));

(cljs.core.async.t_cljs$core$async35144.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35144.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async35144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async35144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35145","meta35145",821491985,null)], null);
}));

(cljs.core.async.t_cljs$core$async35144.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35144");

(cljs.core.async.t_cljs$core$async35144.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async35144");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35144.
 */
cljs.core.async.__GT_t_cljs$core$async35144 = (function cljs$core$async$__GT_t_cljs$core$async35144(f__$1,blockable__$1,meta35145){
return (new cljs.core.async.t_cljs$core$async35144(f__$1,blockable__$1,meta35145));
});

}

return (new cljs.core.async.t_cljs$core$async35144(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35182 = arguments.length;
switch (G__35182) {
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
var G__35203 = arguments.length;
switch (G__35203) {
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
var G__35221 = arguments.length;
switch (G__35221) {
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
var val_38857 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38857) : fn1.call(null,val_38857));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38857) : fn1.call(null,val_38857));
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
var G__35250 = arguments.length;
switch (G__35250) {
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
var n__4741__auto___38864 = n;
var x_38865 = (0);
while(true){
if((x_38865 < n__4741__auto___38864)){
(a[x_38865] = x_38865);

var G__38866 = (x_38865 + (1));
x_38865 = G__38866;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35288 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35288 = (function (flag,meta35289){
this.flag = flag;
this.meta35289 = meta35289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35290,meta35289__$1){
var self__ = this;
var _35290__$1 = this;
return (new cljs.core.async.t_cljs$core$async35288(self__.flag,meta35289__$1));
}));

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35290){
var self__ = this;
var _35290__$1 = this;
return self__.meta35289;
}));

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async35288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35289","meta35289",-1349085962,null)], null);
}));

(cljs.core.async.t_cljs$core$async35288.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35288");

(cljs.core.async.t_cljs$core$async35288.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async35288");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35288.
 */
cljs.core.async.__GT_t_cljs$core$async35288 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35288(flag__$1,meta35289){
return (new cljs.core.async.t_cljs$core$async35288(flag__$1,meta35289));
});

}

return (new cljs.core.async.t_cljs$core$async35288(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35332 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35332 = (function (flag,cb,meta35333){
this.flag = flag;
this.cb = cb;
this.meta35333 = meta35333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35334,meta35333__$1){
var self__ = this;
var _35334__$1 = this;
return (new cljs.core.async.t_cljs$core$async35332(self__.flag,self__.cb,meta35333__$1));
}));

(cljs.core.async.t_cljs$core$async35332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35334){
var self__ = this;
var _35334__$1 = this;
return self__.meta35333;
}));

(cljs.core.async.t_cljs$core$async35332.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35332.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35332.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35332.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async35332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35333","meta35333",-1371391446,null)], null);
}));

(cljs.core.async.t_cljs$core$async35332.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35332");

(cljs.core.async.t_cljs$core$async35332.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async35332");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35332.
 */
cljs.core.async.__GT_t_cljs$core$async35332 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35332(flag__$1,cb__$1,meta35333){
return (new cljs.core.async.t_cljs$core$async35332(flag__$1,cb__$1,meta35333));
});

}

return (new cljs.core.async.t_cljs$core$async35332(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35364_SHARP_){
var G__35380 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35364_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35380) : fret.call(null,G__35380));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35366_SHARP_){
var G__35382 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35366_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35382) : fret.call(null,G__35382));
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
var G__38874 = (i + (1));
i = G__38874;
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
var len__4864__auto___38877 = arguments.length;
var i__4865__auto___38878 = (0);
while(true){
if((i__4865__auto___38878 < len__4864__auto___38877)){
args__4870__auto__.push((arguments[i__4865__auto___38878]));

var G__38879 = (i__4865__auto___38878 + (1));
i__4865__auto___38878 = G__38879;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35411){
var map__35412 = p__35411;
var map__35412__$1 = cljs.core.__destructure_map(map__35412);
var opts = map__35412__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35401){
var G__35402 = cljs.core.first(seq35401);
var seq35401__$1 = cljs.core.next(seq35401);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35402,seq35401__$1);
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
var G__35429 = arguments.length;
switch (G__35429) {
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
var c__35001__auto___38883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_35506){
var state_val_35507 = (state_35506[(1)]);
if((state_val_35507 === (7))){
var inst_35497 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35518_38884 = state_35506__$1;
(statearr_35518_38884[(2)] = inst_35497);

(statearr_35518_38884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (1))){
var state_35506__$1 = state_35506;
var statearr_35522_38885 = state_35506__$1;
(statearr_35522_38885[(2)] = null);

(statearr_35522_38885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (4))){
var inst_35475 = (state_35506[(7)]);
var inst_35475__$1 = (state_35506[(2)]);
var inst_35477 = (inst_35475__$1 == null);
var state_35506__$1 = (function (){var statearr_35525 = state_35506;
(statearr_35525[(7)] = inst_35475__$1);

return statearr_35525;
})();
if(cljs.core.truth_(inst_35477)){
var statearr_35526_38886 = state_35506__$1;
(statearr_35526_38886[(1)] = (5));

} else {
var statearr_35527_38887 = state_35506__$1;
(statearr_35527_38887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (13))){
var state_35506__$1 = state_35506;
var statearr_35535_38889 = state_35506__$1;
(statearr_35535_38889[(2)] = null);

(statearr_35535_38889[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (6))){
var inst_35475 = (state_35506[(7)]);
var state_35506__$1 = state_35506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35506__$1,(11),to,inst_35475);
} else {
if((state_val_35507 === (3))){
var inst_35500 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35506__$1,inst_35500);
} else {
if((state_val_35507 === (12))){
var state_35506__$1 = state_35506;
var statearr_35563_38893 = state_35506__$1;
(statearr_35563_38893[(2)] = null);

(statearr_35563_38893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (2))){
var state_35506__$1 = state_35506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35506__$1,(4),from);
} else {
if((state_val_35507 === (11))){
var inst_35489 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
if(cljs.core.truth_(inst_35489)){
var statearr_35567_38894 = state_35506__$1;
(statearr_35567_38894[(1)] = (12));

} else {
var statearr_35568_38895 = state_35506__$1;
(statearr_35568_38895[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (9))){
var state_35506__$1 = state_35506;
var statearr_35571_38896 = state_35506__$1;
(statearr_35571_38896[(2)] = null);

(statearr_35571_38896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (5))){
var state_35506__$1 = state_35506;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35572_38897 = state_35506__$1;
(statearr_35572_38897[(1)] = (8));

} else {
var statearr_35574_38898 = state_35506__$1;
(statearr_35574_38898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (14))){
var inst_35495 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35578_38899 = state_35506__$1;
(statearr_35578_38899[(2)] = inst_35495);

(statearr_35578_38899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (10))){
var inst_35486 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35581_38900 = state_35506__$1;
(statearr_35581_38900[(2)] = inst_35486);

(statearr_35581_38900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (8))){
var inst_35481 = cljs.core.async.close_BANG_(to);
var state_35506__$1 = state_35506;
var statearr_35585_38901 = state_35506__$1;
(statearr_35585_38901[(2)] = inst_35481);

(statearr_35585_38901[(1)] = (10));


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
var cljs$core$async$state_machine__34351__auto__ = null;
var cljs$core$async$state_machine__34351__auto____0 = (function (){
var statearr_35591 = [null,null,null,null,null,null,null,null];
(statearr_35591[(0)] = cljs$core$async$state_machine__34351__auto__);

(statearr_35591[(1)] = (1));

return statearr_35591;
});
var cljs$core$async$state_machine__34351__auto____1 = (function (state_35506){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_35506);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e35594){var ex__34355__auto__ = e35594;
var statearr_35595_38902 = state_35506;
(statearr_35595_38902[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_35506[(4)]))){
var statearr_35601_38903 = state_35506;
(statearr_35601_38903[(1)] = cljs.core.first((state_35506[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38904 = state_35506;
state_35506 = G__38904;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$state_machine__34351__auto__ = function(state_35506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34351__auto____1.call(this,state_35506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34351__auto____0;
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34351__auto____1;
return cljs$core$async$state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_35616 = f__35002__auto__();
(statearr_35616[(6)] = c__35001__auto___38883);

return statearr_35616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
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
var process = (function (p__35634){
var vec__35637 = p__35634;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35637,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35637,(1),null);
var job = vec__35637;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__35001__auto___38905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_35662){
var state_val_35665 = (state_35662[(1)]);
if((state_val_35665 === (1))){
var state_35662__$1 = state_35662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35662__$1,(2),res,v);
} else {
if((state_val_35665 === (2))){
var inst_35654 = (state_35662[(2)]);
var inst_35658 = cljs.core.async.close_BANG_(res);
var state_35662__$1 = (function (){var statearr_35711 = state_35662;
(statearr_35711[(7)] = inst_35654);

return statearr_35711;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35662__$1,inst_35658);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____0 = (function (){
var statearr_35724 = [null,null,null,null,null,null,null,null];
(statearr_35724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__);

(statearr_35724[(1)] = (1));

return statearr_35724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____1 = (function (state_35662){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_35662);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e35727){var ex__34355__auto__ = e35727;
var statearr_35728_38906 = state_35662;
(statearr_35728_38906[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_35662[(4)]))){
var statearr_35731_38907 = state_35662;
(statearr_35731_38907[(1)] = cljs.core.first((state_35662[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38908 = state_35662;
state_35662 = G__38908;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__ = function(state_35662){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____1.call(this,state_35662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_35733 = f__35002__auto__();
(statearr_35733[(6)] = c__35001__auto___38905);

return statearr_35733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__35739){
var vec__35740 = p__35739;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35740,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35740,(1),null);
var job = vec__35740;
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
var n__4741__auto___38909 = n;
var __38910 = (0);
while(true){
if((__38910 < n__4741__auto___38909)){
var G__35751_38911 = type;
var G__35751_38912__$1 = (((G__35751_38911 instanceof cljs.core.Keyword))?G__35751_38911.fqn:null);
switch (G__35751_38912__$1) {
case "compute":
var c__35001__auto___38914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38910,c__35001__auto___38914,G__35751_38911,G__35751_38912__$1,n__4741__auto___38909,jobs,results,process,async){
return (function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = ((function (__38910,c__35001__auto___38914,G__35751_38911,G__35751_38912__$1,n__4741__auto___38909,jobs,results,process,async){
return (function (state_35767){
var state_val_35769 = (state_35767[(1)]);
if((state_val_35769 === (1))){
var state_35767__$1 = state_35767;
var statearr_35774_38915 = state_35767__$1;
(statearr_35774_38915[(2)] = null);

(statearr_35774_38915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (2))){
var state_35767__$1 = state_35767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35767__$1,(4),jobs);
} else {
if((state_val_35769 === (3))){
var inst_35765 = (state_35767[(2)]);
var state_35767__$1 = state_35767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35767__$1,inst_35765);
} else {
if((state_val_35769 === (4))){
var inst_35757 = (state_35767[(2)]);
var inst_35758 = process(inst_35757);
var state_35767__$1 = state_35767;
if(cljs.core.truth_(inst_35758)){
var statearr_35776_38916 = state_35767__$1;
(statearr_35776_38916[(1)] = (5));

} else {
var statearr_35778_38917 = state_35767__$1;
(statearr_35778_38917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (5))){
var state_35767__$1 = state_35767;
var statearr_35785_38918 = state_35767__$1;
(statearr_35785_38918[(2)] = null);

(statearr_35785_38918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (6))){
var state_35767__$1 = state_35767;
var statearr_35793_38919 = state_35767__$1;
(statearr_35793_38919[(2)] = null);

(statearr_35793_38919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (7))){
var inst_35763 = (state_35767[(2)]);
var state_35767__$1 = state_35767;
var statearr_35798_38920 = state_35767__$1;
(statearr_35798_38920[(2)] = inst_35763);

(statearr_35798_38920[(1)] = (3));


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
});})(__38910,c__35001__auto___38914,G__35751_38911,G__35751_38912__$1,n__4741__auto___38909,jobs,results,process,async))
;
return ((function (__38910,switch__34350__auto__,c__35001__auto___38914,G__35751_38911,G__35751_38912__$1,n__4741__auto___38909,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____0 = (function (){
var statearr_35801 = [null,null,null,null,null,null,null];
(statearr_35801[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__);

(statearr_35801[(1)] = (1));

return statearr_35801;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____1 = (function (state_35767){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_35767);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e35804){var ex__34355__auto__ = e35804;
var statearr_35805_38921 = state_35767;
(statearr_35805_38921[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_35767[(4)]))){
var statearr_35806_38922 = state_35767;
(statearr_35806_38922[(1)] = cljs.core.first((state_35767[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38923 = state_35767;
state_35767 = G__38923;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__ = function(state_35767){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____1.call(this,state_35767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__;
})()
;})(__38910,switch__34350__auto__,c__35001__auto___38914,G__35751_38911,G__35751_38912__$1,n__4741__auto___38909,jobs,results,process,async))
})();
var state__35003__auto__ = (function (){var statearr_35807 = f__35002__auto__();
(statearr_35807[(6)] = c__35001__auto___38914);

return statearr_35807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
});})(__38910,c__35001__auto___38914,G__35751_38911,G__35751_38912__$1,n__4741__auto___38909,jobs,results,process,async))
);


break;
case "async":
var c__35001__auto___38925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38910,c__35001__auto___38925,G__35751_38911,G__35751_38912__$1,n__4741__auto___38909,jobs,results,process,async){
return (function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = ((function (__38910,c__35001__auto___38925,G__35751_38911,G__35751_38912__$1,n__4741__auto___38909,jobs,results,process,async){
return (function (state_35820){
var state_val_35821 = (state_35820[(1)]);
if((state_val_35821 === (1))){
var state_35820__$1 = state_35820;
var statearr_35823_38926 = state_35820__$1;
(statearr_35823_38926[(2)] = null);

(statearr_35823_38926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35821 === (2))){
var state_35820__$1 = state_35820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35820__$1,(4),jobs);
} else {
if((state_val_35821 === (3))){
var inst_35818 = (state_35820[(2)]);
var state_35820__$1 = state_35820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35820__$1,inst_35818);
} else {
if((state_val_35821 === (4))){
var inst_35810 = (state_35820[(2)]);
var inst_35811 = async(inst_35810);
var state_35820__$1 = state_35820;
if(cljs.core.truth_(inst_35811)){
var statearr_35824_38930 = state_35820__$1;
(statearr_35824_38930[(1)] = (5));

} else {
var statearr_35825_38931 = state_35820__$1;
(statearr_35825_38931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35821 === (5))){
var state_35820__$1 = state_35820;
var statearr_35827_38934 = state_35820__$1;
(statearr_35827_38934[(2)] = null);

(statearr_35827_38934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35821 === (6))){
var state_35820__$1 = state_35820;
var statearr_35828_38936 = state_35820__$1;
(statearr_35828_38936[(2)] = null);

(statearr_35828_38936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35821 === (7))){
var inst_35816 = (state_35820[(2)]);
var state_35820__$1 = state_35820;
var statearr_35830_38937 = state_35820__$1;
(statearr_35830_38937[(2)] = inst_35816);

(statearr_35830_38937[(1)] = (3));


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
});})(__38910,c__35001__auto___38925,G__35751_38911,G__35751_38912__$1,n__4741__auto___38909,jobs,results,process,async))
;
return ((function (__38910,switch__34350__auto__,c__35001__auto___38925,G__35751_38911,G__35751_38912__$1,n__4741__auto___38909,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____0 = (function (){
var statearr_35831 = [null,null,null,null,null,null,null];
(statearr_35831[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__);

(statearr_35831[(1)] = (1));

return statearr_35831;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____1 = (function (state_35820){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_35820);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e35832){var ex__34355__auto__ = e35832;
var statearr_35834_38941 = state_35820;
(statearr_35834_38941[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_35820[(4)]))){
var statearr_35835_38943 = state_35820;
(statearr_35835_38943[(1)] = cljs.core.first((state_35820[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38944 = state_35820;
state_35820 = G__38944;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__ = function(state_35820){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____1.call(this,state_35820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__;
})()
;})(__38910,switch__34350__auto__,c__35001__auto___38925,G__35751_38911,G__35751_38912__$1,n__4741__auto___38909,jobs,results,process,async))
})();
var state__35003__auto__ = (function (){var statearr_35837 = f__35002__auto__();
(statearr_35837[(6)] = c__35001__auto___38925);

return statearr_35837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
});})(__38910,c__35001__auto___38925,G__35751_38911,G__35751_38912__$1,n__4741__auto___38909,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35751_38912__$1)].join('')));

}

var G__38945 = (__38910 + (1));
__38910 = G__38945;
continue;
} else {
}
break;
}

var c__35001__auto___38946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_35866){
var state_val_35867 = (state_35866[(1)]);
if((state_val_35867 === (7))){
var inst_35860 = (state_35866[(2)]);
var state_35866__$1 = state_35866;
var statearr_35870_38947 = state_35866__$1;
(statearr_35870_38947[(2)] = inst_35860);

(statearr_35870_38947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (1))){
var state_35866__$1 = state_35866;
var statearr_35873_38948 = state_35866__$1;
(statearr_35873_38948[(2)] = null);

(statearr_35873_38948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (4))){
var inst_35844 = (state_35866[(7)]);
var inst_35844__$1 = (state_35866[(2)]);
var inst_35845 = (inst_35844__$1 == null);
var state_35866__$1 = (function (){var statearr_35875 = state_35866;
(statearr_35875[(7)] = inst_35844__$1);

return statearr_35875;
})();
if(cljs.core.truth_(inst_35845)){
var statearr_35877_38950 = state_35866__$1;
(statearr_35877_38950[(1)] = (5));

} else {
var statearr_35878_38951 = state_35866__$1;
(statearr_35878_38951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (6))){
var inst_35844 = (state_35866[(7)]);
var inst_35849 = (state_35866[(8)]);
var inst_35849__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_35850 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35851 = [inst_35844,inst_35849__$1];
var inst_35852 = (new cljs.core.PersistentVector(null,2,(5),inst_35850,inst_35851,null));
var state_35866__$1 = (function (){var statearr_35879 = state_35866;
(statearr_35879[(8)] = inst_35849__$1);

return statearr_35879;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35866__$1,(8),jobs,inst_35852);
} else {
if((state_val_35867 === (3))){
var inst_35862 = (state_35866[(2)]);
var state_35866__$1 = state_35866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35866__$1,inst_35862);
} else {
if((state_val_35867 === (2))){
var state_35866__$1 = state_35866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35866__$1,(4),from);
} else {
if((state_val_35867 === (9))){
var inst_35856 = (state_35866[(2)]);
var state_35866__$1 = (function (){var statearr_35884 = state_35866;
(statearr_35884[(9)] = inst_35856);

return statearr_35884;
})();
var statearr_35885_38953 = state_35866__$1;
(statearr_35885_38953[(2)] = null);

(statearr_35885_38953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (5))){
var inst_35847 = cljs.core.async.close_BANG_(jobs);
var state_35866__$1 = state_35866;
var statearr_35887_38954 = state_35866__$1;
(statearr_35887_38954[(2)] = inst_35847);

(statearr_35887_38954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (8))){
var inst_35849 = (state_35866[(8)]);
var inst_35854 = (state_35866[(2)]);
var state_35866__$1 = (function (){var statearr_35888 = state_35866;
(statearr_35888[(10)] = inst_35854);

return statearr_35888;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35866__$1,(9),results,inst_35849);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____0 = (function (){
var statearr_35894 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35894[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__);

(statearr_35894[(1)] = (1));

return statearr_35894;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____1 = (function (state_35866){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_35866);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e35895){var ex__34355__auto__ = e35895;
var statearr_35896_38959 = state_35866;
(statearr_35896_38959[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_35866[(4)]))){
var statearr_35898_38964 = state_35866;
(statearr_35898_38964[(1)] = cljs.core.first((state_35866[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38965 = state_35866;
state_35866 = G__38965;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__ = function(state_35866){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____1.call(this,state_35866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_35902 = f__35002__auto__();
(statearr_35902[(6)] = c__35001__auto___38946);

return statearr_35902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
}));


var c__35001__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_35946){
var state_val_35947 = (state_35946[(1)]);
if((state_val_35947 === (7))){
var inst_35942 = (state_35946[(2)]);
var state_35946__$1 = state_35946;
var statearr_35950_38969 = state_35946__$1;
(statearr_35950_38969[(2)] = inst_35942);

(statearr_35950_38969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (20))){
var state_35946__$1 = state_35946;
var statearr_35954_38970 = state_35946__$1;
(statearr_35954_38970[(2)] = null);

(statearr_35954_38970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (1))){
var state_35946__$1 = state_35946;
var statearr_35958_38974 = state_35946__$1;
(statearr_35958_38974[(2)] = null);

(statearr_35958_38974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (4))){
var inst_35911 = (state_35946[(7)]);
var inst_35911__$1 = (state_35946[(2)]);
var inst_35912 = (inst_35911__$1 == null);
var state_35946__$1 = (function (){var statearr_35965 = state_35946;
(statearr_35965[(7)] = inst_35911__$1);

return statearr_35965;
})();
if(cljs.core.truth_(inst_35912)){
var statearr_35966_38980 = state_35946__$1;
(statearr_35966_38980[(1)] = (5));

} else {
var statearr_35967_38981 = state_35946__$1;
(statearr_35967_38981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (15))){
var inst_35924 = (state_35946[(8)]);
var state_35946__$1 = state_35946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35946__$1,(18),to,inst_35924);
} else {
if((state_val_35947 === (21))){
var inst_35937 = (state_35946[(2)]);
var state_35946__$1 = state_35946;
var statearr_35970_38985 = state_35946__$1;
(statearr_35970_38985[(2)] = inst_35937);

(statearr_35970_38985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (13))){
var inst_35939 = (state_35946[(2)]);
var state_35946__$1 = (function (){var statearr_35975 = state_35946;
(statearr_35975[(9)] = inst_35939);

return statearr_35975;
})();
var statearr_35976_38986 = state_35946__$1;
(statearr_35976_38986[(2)] = null);

(statearr_35976_38986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (6))){
var inst_35911 = (state_35946[(7)]);
var state_35946__$1 = state_35946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35946__$1,(11),inst_35911);
} else {
if((state_val_35947 === (17))){
var inst_35932 = (state_35946[(2)]);
var state_35946__$1 = state_35946;
if(cljs.core.truth_(inst_35932)){
var statearr_35981_38990 = state_35946__$1;
(statearr_35981_38990[(1)] = (19));

} else {
var statearr_35982_38991 = state_35946__$1;
(statearr_35982_38991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (3))){
var inst_35944 = (state_35946[(2)]);
var state_35946__$1 = state_35946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35946__$1,inst_35944);
} else {
if((state_val_35947 === (12))){
var inst_35921 = (state_35946[(10)]);
var state_35946__$1 = state_35946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35946__$1,(14),inst_35921);
} else {
if((state_val_35947 === (2))){
var state_35946__$1 = state_35946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35946__$1,(4),results);
} else {
if((state_val_35947 === (19))){
var state_35946__$1 = state_35946;
var statearr_35983_38993 = state_35946__$1;
(statearr_35983_38993[(2)] = null);

(statearr_35983_38993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (11))){
var inst_35921 = (state_35946[(2)]);
var state_35946__$1 = (function (){var statearr_35985 = state_35946;
(statearr_35985[(10)] = inst_35921);

return statearr_35985;
})();
var statearr_35986_38998 = state_35946__$1;
(statearr_35986_38998[(2)] = null);

(statearr_35986_38998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (9))){
var state_35946__$1 = state_35946;
var statearr_35987_39005 = state_35946__$1;
(statearr_35987_39005[(2)] = null);

(statearr_35987_39005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (5))){
var state_35946__$1 = state_35946;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35990_39010 = state_35946__$1;
(statearr_35990_39010[(1)] = (8));

} else {
var statearr_35991_39011 = state_35946__$1;
(statearr_35991_39011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (14))){
var inst_35926 = (state_35946[(11)]);
var inst_35924 = (state_35946[(8)]);
var inst_35924__$1 = (state_35946[(2)]);
var inst_35925 = (inst_35924__$1 == null);
var inst_35926__$1 = cljs.core.not(inst_35925);
var state_35946__$1 = (function (){var statearr_35993 = state_35946;
(statearr_35993[(11)] = inst_35926__$1);

(statearr_35993[(8)] = inst_35924__$1);

return statearr_35993;
})();
if(inst_35926__$1){
var statearr_35995_39014 = state_35946__$1;
(statearr_35995_39014[(1)] = (15));

} else {
var statearr_35996_39015 = state_35946__$1;
(statearr_35996_39015[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (16))){
var inst_35926 = (state_35946[(11)]);
var state_35946__$1 = state_35946;
var statearr_36002_39019 = state_35946__$1;
(statearr_36002_39019[(2)] = inst_35926);

(statearr_36002_39019[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (10))){
var inst_35918 = (state_35946[(2)]);
var state_35946__$1 = state_35946;
var statearr_36009_39022 = state_35946__$1;
(statearr_36009_39022[(2)] = inst_35918);

(statearr_36009_39022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (18))){
var inst_35929 = (state_35946[(2)]);
var state_35946__$1 = state_35946;
var statearr_36010_39025 = state_35946__$1;
(statearr_36010_39025[(2)] = inst_35929);

(statearr_36010_39025[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (8))){
var inst_35915 = cljs.core.async.close_BANG_(to);
var state_35946__$1 = state_35946;
var statearr_36012_39027 = state_35946__$1;
(statearr_36012_39027[(2)] = inst_35915);

(statearr_36012_39027[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____0 = (function (){
var statearr_36014 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36014[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__);

(statearr_36014[(1)] = (1));

return statearr_36014;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____1 = (function (state_35946){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_35946);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e36016){var ex__34355__auto__ = e36016;
var statearr_36019_39028 = state_35946;
(statearr_36019_39028[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_35946[(4)]))){
var statearr_36025_39030 = state_35946;
(statearr_36025_39030[(1)] = cljs.core.first((state_35946[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39031 = state_35946;
state_35946 = G__39031;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__ = function(state_35946){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____1.call(this,state_35946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34351__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_36029 = f__35002__auto__();
(statearr_36029[(6)] = c__35001__auto__);

return statearr_36029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
}));

return c__35001__auto__;
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
var G__36034 = arguments.length;
switch (G__36034) {
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
var G__36053 = arguments.length;
switch (G__36053) {
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
var G__36067 = arguments.length;
switch (G__36067) {
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
var c__35001__auto___39069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_36099){
var state_val_36100 = (state_36099[(1)]);
if((state_val_36100 === (7))){
var inst_36095 = (state_36099[(2)]);
var state_36099__$1 = state_36099;
var statearr_36112_39071 = state_36099__$1;
(statearr_36112_39071[(2)] = inst_36095);

(statearr_36112_39071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36100 === (1))){
var state_36099__$1 = state_36099;
var statearr_36114_39073 = state_36099__$1;
(statearr_36114_39073[(2)] = null);

(statearr_36114_39073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36100 === (4))){
var inst_36071 = (state_36099[(7)]);
var inst_36071__$1 = (state_36099[(2)]);
var inst_36076 = (inst_36071__$1 == null);
var state_36099__$1 = (function (){var statearr_36121 = state_36099;
(statearr_36121[(7)] = inst_36071__$1);

return statearr_36121;
})();
if(cljs.core.truth_(inst_36076)){
var statearr_36123_39076 = state_36099__$1;
(statearr_36123_39076[(1)] = (5));

} else {
var statearr_36126_39077 = state_36099__$1;
(statearr_36126_39077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36100 === (13))){
var state_36099__$1 = state_36099;
var statearr_36128_39078 = state_36099__$1;
(statearr_36128_39078[(2)] = null);

(statearr_36128_39078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36100 === (6))){
var inst_36071 = (state_36099[(7)]);
var inst_36081 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36071) : p.call(null,inst_36071));
var state_36099__$1 = state_36099;
if(cljs.core.truth_(inst_36081)){
var statearr_36132_39081 = state_36099__$1;
(statearr_36132_39081[(1)] = (9));

} else {
var statearr_36145_39082 = state_36099__$1;
(statearr_36145_39082[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36100 === (3))){
var inst_36097 = (state_36099[(2)]);
var state_36099__$1 = state_36099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36099__$1,inst_36097);
} else {
if((state_val_36100 === (12))){
var state_36099__$1 = state_36099;
var statearr_36148_39083 = state_36099__$1;
(statearr_36148_39083[(2)] = null);

(statearr_36148_39083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36100 === (2))){
var state_36099__$1 = state_36099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36099__$1,(4),ch);
} else {
if((state_val_36100 === (11))){
var inst_36071 = (state_36099[(7)]);
var inst_36086 = (state_36099[(2)]);
var state_36099__$1 = state_36099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36099__$1,(8),inst_36086,inst_36071);
} else {
if((state_val_36100 === (9))){
var state_36099__$1 = state_36099;
var statearr_36150_39084 = state_36099__$1;
(statearr_36150_39084[(2)] = tc);

(statearr_36150_39084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36100 === (5))){
var inst_36078 = cljs.core.async.close_BANG_(tc);
var inst_36079 = cljs.core.async.close_BANG_(fc);
var state_36099__$1 = (function (){var statearr_36152 = state_36099;
(statearr_36152[(8)] = inst_36078);

return statearr_36152;
})();
var statearr_36154_39089 = state_36099__$1;
(statearr_36154_39089[(2)] = inst_36079);

(statearr_36154_39089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36100 === (14))){
var inst_36093 = (state_36099[(2)]);
var state_36099__$1 = state_36099;
var statearr_36158_39090 = state_36099__$1;
(statearr_36158_39090[(2)] = inst_36093);

(statearr_36158_39090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36100 === (10))){
var state_36099__$1 = state_36099;
var statearr_36159_39093 = state_36099__$1;
(statearr_36159_39093[(2)] = fc);

(statearr_36159_39093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36100 === (8))){
var inst_36088 = (state_36099[(2)]);
var state_36099__$1 = state_36099;
if(cljs.core.truth_(inst_36088)){
var statearr_36161_39095 = state_36099__$1;
(statearr_36161_39095[(1)] = (12));

} else {
var statearr_36163_39096 = state_36099__$1;
(statearr_36163_39096[(1)] = (13));

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
var cljs$core$async$state_machine__34351__auto__ = null;
var cljs$core$async$state_machine__34351__auto____0 = (function (){
var statearr_36167 = [null,null,null,null,null,null,null,null,null];
(statearr_36167[(0)] = cljs$core$async$state_machine__34351__auto__);

(statearr_36167[(1)] = (1));

return statearr_36167;
});
var cljs$core$async$state_machine__34351__auto____1 = (function (state_36099){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_36099);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e36168){var ex__34355__auto__ = e36168;
var statearr_36169_39097 = state_36099;
(statearr_36169_39097[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_36099[(4)]))){
var statearr_36170_39098 = state_36099;
(statearr_36170_39098[(1)] = cljs.core.first((state_36099[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39100 = state_36099;
state_36099 = G__39100;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$state_machine__34351__auto__ = function(state_36099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34351__auto____1.call(this,state_36099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34351__auto____0;
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34351__auto____1;
return cljs$core$async$state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_36175 = f__35002__auto__();
(statearr_36175[(6)] = c__35001__auto___39069);

return statearr_36175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
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
var c__35001__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_36204){
var state_val_36205 = (state_36204[(1)]);
if((state_val_36205 === (7))){
var inst_36197 = (state_36204[(2)]);
var state_36204__$1 = state_36204;
var statearr_36219_39106 = state_36204__$1;
(statearr_36219_39106[(2)] = inst_36197);

(statearr_36219_39106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36205 === (1))){
var inst_36176 = init;
var inst_36177 = inst_36176;
var state_36204__$1 = (function (){var statearr_36224 = state_36204;
(statearr_36224[(7)] = inst_36177);

return statearr_36224;
})();
var statearr_36225_39107 = state_36204__$1;
(statearr_36225_39107[(2)] = null);

(statearr_36225_39107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36205 === (4))){
var inst_36180 = (state_36204[(8)]);
var inst_36180__$1 = (state_36204[(2)]);
var inst_36181 = (inst_36180__$1 == null);
var state_36204__$1 = (function (){var statearr_36226 = state_36204;
(statearr_36226[(8)] = inst_36180__$1);

return statearr_36226;
})();
if(cljs.core.truth_(inst_36181)){
var statearr_36227_39108 = state_36204__$1;
(statearr_36227_39108[(1)] = (5));

} else {
var statearr_36228_39110 = state_36204__$1;
(statearr_36228_39110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36205 === (6))){
var inst_36186 = (state_36204[(9)]);
var inst_36177 = (state_36204[(7)]);
var inst_36180 = (state_36204[(8)]);
var inst_36186__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36177,inst_36180) : f.call(null,inst_36177,inst_36180));
var inst_36188 = cljs.core.reduced_QMARK_(inst_36186__$1);
var state_36204__$1 = (function (){var statearr_36230 = state_36204;
(statearr_36230[(9)] = inst_36186__$1);

return statearr_36230;
})();
if(inst_36188){
var statearr_36233_39111 = state_36204__$1;
(statearr_36233_39111[(1)] = (8));

} else {
var statearr_36234_39112 = state_36204__$1;
(statearr_36234_39112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36205 === (3))){
var inst_36199 = (state_36204[(2)]);
var state_36204__$1 = state_36204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36204__$1,inst_36199);
} else {
if((state_val_36205 === (2))){
var state_36204__$1 = state_36204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36204__$1,(4),ch);
} else {
if((state_val_36205 === (9))){
var inst_36186 = (state_36204[(9)]);
var inst_36177 = inst_36186;
var state_36204__$1 = (function (){var statearr_36239 = state_36204;
(statearr_36239[(7)] = inst_36177);

return statearr_36239;
})();
var statearr_36240_39113 = state_36204__$1;
(statearr_36240_39113[(2)] = null);

(statearr_36240_39113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36205 === (5))){
var inst_36177 = (state_36204[(7)]);
var state_36204__$1 = state_36204;
var statearr_36241_39115 = state_36204__$1;
(statearr_36241_39115[(2)] = inst_36177);

(statearr_36241_39115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36205 === (10))){
var inst_36194 = (state_36204[(2)]);
var state_36204__$1 = state_36204;
var statearr_36243_39116 = state_36204__$1;
(statearr_36243_39116[(2)] = inst_36194);

(statearr_36243_39116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36205 === (8))){
var inst_36186 = (state_36204[(9)]);
var inst_36190 = cljs.core.deref(inst_36186);
var state_36204__$1 = state_36204;
var statearr_36246_39117 = state_36204__$1;
(statearr_36246_39117[(2)] = inst_36190);

(statearr_36246_39117[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34351__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34351__auto____0 = (function (){
var statearr_36247 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36247[(0)] = cljs$core$async$reduce_$_state_machine__34351__auto__);

(statearr_36247[(1)] = (1));

return statearr_36247;
});
var cljs$core$async$reduce_$_state_machine__34351__auto____1 = (function (state_36204){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_36204);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e36250){var ex__34355__auto__ = e36250;
var statearr_36251_39118 = state_36204;
(statearr_36251_39118[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_36204[(4)]))){
var statearr_36254_39119 = state_36204;
(statearr_36254_39119[(1)] = cljs.core.first((state_36204[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39120 = state_36204;
state_36204 = G__39120;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34351__auto__ = function(state_36204){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34351__auto____1.call(this,state_36204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34351__auto____0;
cljs$core$async$reduce_$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34351__auto____1;
return cljs$core$async$reduce_$_state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_36257 = f__35002__auto__();
(statearr_36257[(6)] = c__35001__auto__);

return statearr_36257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
}));

return c__35001__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__35001__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_36272){
var state_val_36273 = (state_36272[(1)]);
if((state_val_36273 === (1))){
var inst_36261 = cljs.core.async.reduce(f__$1,init,ch);
var state_36272__$1 = state_36272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36272__$1,(2),inst_36261);
} else {
if((state_val_36273 === (2))){
var inst_36263 = (state_36272[(2)]);
var inst_36264 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_36263) : f__$1.call(null,inst_36263));
var state_36272__$1 = state_36272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36272__$1,inst_36264);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34351__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34351__auto____0 = (function (){
var statearr_36277 = [null,null,null,null,null,null,null];
(statearr_36277[(0)] = cljs$core$async$transduce_$_state_machine__34351__auto__);

(statearr_36277[(1)] = (1));

return statearr_36277;
});
var cljs$core$async$transduce_$_state_machine__34351__auto____1 = (function (state_36272){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_36272);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e36281){var ex__34355__auto__ = e36281;
var statearr_36282_39133 = state_36272;
(statearr_36282_39133[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_36272[(4)]))){
var statearr_36283_39134 = state_36272;
(statearr_36283_39134[(1)] = cljs.core.first((state_36272[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39135 = state_36272;
state_36272 = G__39135;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34351__auto__ = function(state_36272){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34351__auto____1.call(this,state_36272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34351__auto____0;
cljs$core$async$transduce_$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34351__auto____1;
return cljs$core$async$transduce_$_state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_36289 = f__35002__auto__();
(statearr_36289[(6)] = c__35001__auto__);

return statearr_36289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
}));

return c__35001__auto__;
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
var G__36295 = arguments.length;
switch (G__36295) {
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
var c__35001__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_36330){
var state_val_36331 = (state_36330[(1)]);
if((state_val_36331 === (7))){
var inst_36312 = (state_36330[(2)]);
var state_36330__$1 = state_36330;
var statearr_36340_39155 = state_36330__$1;
(statearr_36340_39155[(2)] = inst_36312);

(statearr_36340_39155[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36331 === (1))){
var inst_36306 = cljs.core.seq(coll);
var inst_36307 = inst_36306;
var state_36330__$1 = (function (){var statearr_36345 = state_36330;
(statearr_36345[(7)] = inst_36307);

return statearr_36345;
})();
var statearr_36346_39162 = state_36330__$1;
(statearr_36346_39162[(2)] = null);

(statearr_36346_39162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36331 === (4))){
var inst_36307 = (state_36330[(7)]);
var inst_36310 = cljs.core.first(inst_36307);
var state_36330__$1 = state_36330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36330__$1,(7),ch,inst_36310);
} else {
if((state_val_36331 === (13))){
var inst_36324 = (state_36330[(2)]);
var state_36330__$1 = state_36330;
var statearr_36348_39175 = state_36330__$1;
(statearr_36348_39175[(2)] = inst_36324);

(statearr_36348_39175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36331 === (6))){
var inst_36315 = (state_36330[(2)]);
var state_36330__$1 = state_36330;
if(cljs.core.truth_(inst_36315)){
var statearr_36349_39176 = state_36330__$1;
(statearr_36349_39176[(1)] = (8));

} else {
var statearr_36351_39181 = state_36330__$1;
(statearr_36351_39181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36331 === (3))){
var inst_36328 = (state_36330[(2)]);
var state_36330__$1 = state_36330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36330__$1,inst_36328);
} else {
if((state_val_36331 === (12))){
var state_36330__$1 = state_36330;
var statearr_36357_39188 = state_36330__$1;
(statearr_36357_39188[(2)] = null);

(statearr_36357_39188[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36331 === (2))){
var inst_36307 = (state_36330[(7)]);
var state_36330__$1 = state_36330;
if(cljs.core.truth_(inst_36307)){
var statearr_36358_39192 = state_36330__$1;
(statearr_36358_39192[(1)] = (4));

} else {
var statearr_36359_39194 = state_36330__$1;
(statearr_36359_39194[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36331 === (11))){
var inst_36321 = cljs.core.async.close_BANG_(ch);
var state_36330__$1 = state_36330;
var statearr_36364_39201 = state_36330__$1;
(statearr_36364_39201[(2)] = inst_36321);

(statearr_36364_39201[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36331 === (9))){
var state_36330__$1 = state_36330;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36365_39203 = state_36330__$1;
(statearr_36365_39203[(1)] = (11));

} else {
var statearr_36366_39205 = state_36330__$1;
(statearr_36366_39205[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36331 === (5))){
var inst_36307 = (state_36330[(7)]);
var state_36330__$1 = state_36330;
var statearr_36368_39211 = state_36330__$1;
(statearr_36368_39211[(2)] = inst_36307);

(statearr_36368_39211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36331 === (10))){
var inst_36326 = (state_36330[(2)]);
var state_36330__$1 = state_36330;
var statearr_36369_39213 = state_36330__$1;
(statearr_36369_39213[(2)] = inst_36326);

(statearr_36369_39213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36331 === (8))){
var inst_36307 = (state_36330[(7)]);
var inst_36317 = cljs.core.next(inst_36307);
var inst_36307__$1 = inst_36317;
var state_36330__$1 = (function (){var statearr_36372 = state_36330;
(statearr_36372[(7)] = inst_36307__$1);

return statearr_36372;
})();
var statearr_36375_39221 = state_36330__$1;
(statearr_36375_39221[(2)] = null);

(statearr_36375_39221[(1)] = (2));


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
var cljs$core$async$state_machine__34351__auto__ = null;
var cljs$core$async$state_machine__34351__auto____0 = (function (){
var statearr_36376 = [null,null,null,null,null,null,null,null];
(statearr_36376[(0)] = cljs$core$async$state_machine__34351__auto__);

(statearr_36376[(1)] = (1));

return statearr_36376;
});
var cljs$core$async$state_machine__34351__auto____1 = (function (state_36330){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_36330);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e36377){var ex__34355__auto__ = e36377;
var statearr_36378_39223 = state_36330;
(statearr_36378_39223[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_36330[(4)]))){
var statearr_36379_39225 = state_36330;
(statearr_36379_39225[(1)] = cljs.core.first((state_36330[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39226 = state_36330;
state_36330 = G__39226;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$state_machine__34351__auto__ = function(state_36330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34351__auto____1.call(this,state_36330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34351__auto____0;
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34351__auto____1;
return cljs$core$async$state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_36389 = f__35002__auto__();
(statearr_36389[(6)] = c__35001__auto__);

return statearr_36389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
}));

return c__35001__auto__;
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
var G__36394 = arguments.length;
switch (G__36394) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_39236 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_39236(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_39242 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_39242(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_39245 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_39245(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_39246 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_39246(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36442 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36442 = (function (ch,cs,meta36443){
this.ch = ch;
this.cs = cs;
this.meta36443 = meta36443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36444,meta36443__$1){
var self__ = this;
var _36444__$1 = this;
return (new cljs.core.async.t_cljs$core$async36442(self__.ch,self__.cs,meta36443__$1));
}));

(cljs.core.async.t_cljs$core$async36442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36444){
var self__ = this;
var _36444__$1 = this;
return self__.meta36443;
}));

(cljs.core.async.t_cljs$core$async36442.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36442.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36442.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36442.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async36442.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async36442.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async36442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36443","meta36443",1346074850,null)], null);
}));

(cljs.core.async.t_cljs$core$async36442.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36442");

(cljs.core.async.t_cljs$core$async36442.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async36442");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36442.
 */
cljs.core.async.__GT_t_cljs$core$async36442 = (function cljs$core$async$mult_$___GT_t_cljs$core$async36442(ch__$1,cs__$1,meta36443){
return (new cljs.core.async.t_cljs$core$async36442(ch__$1,cs__$1,meta36443));
});

}

return (new cljs.core.async.t_cljs$core$async36442(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35001__auto___39277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_36611){
var state_val_36612 = (state_36611[(1)]);
if((state_val_36612 === (7))){
var inst_36607 = (state_36611[(2)]);
var state_36611__$1 = state_36611;
var statearr_36622_39279 = state_36611__$1;
(statearr_36622_39279[(2)] = inst_36607);

(statearr_36622_39279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (20))){
var inst_36490 = (state_36611[(7)]);
var inst_36502 = cljs.core.first(inst_36490);
var inst_36503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36502,(0),null);
var inst_36504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36502,(1),null);
var state_36611__$1 = (function (){var statearr_36623 = state_36611;
(statearr_36623[(8)] = inst_36503);

return statearr_36623;
})();
if(cljs.core.truth_(inst_36504)){
var statearr_36625_39284 = state_36611__$1;
(statearr_36625_39284[(1)] = (22));

} else {
var statearr_36626_39286 = state_36611__$1;
(statearr_36626_39286[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (27))){
var inst_36543 = (state_36611[(9)]);
var inst_36550 = (state_36611[(10)]);
var inst_36458 = (state_36611[(11)]);
var inst_36545 = (state_36611[(12)]);
var inst_36550__$1 = cljs.core._nth(inst_36543,inst_36545);
var inst_36554 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36550__$1,inst_36458,done);
var state_36611__$1 = (function (){var statearr_36629 = state_36611;
(statearr_36629[(10)] = inst_36550__$1);

return statearr_36629;
})();
if(cljs.core.truth_(inst_36554)){
var statearr_36630_39290 = state_36611__$1;
(statearr_36630_39290[(1)] = (30));

} else {
var statearr_36631_39291 = state_36611__$1;
(statearr_36631_39291[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (1))){
var state_36611__$1 = state_36611;
var statearr_36636_39293 = state_36611__$1;
(statearr_36636_39293[(2)] = null);

(statearr_36636_39293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (24))){
var inst_36490 = (state_36611[(7)]);
var inst_36510 = (state_36611[(2)]);
var inst_36511 = cljs.core.next(inst_36490);
var inst_36468 = inst_36511;
var inst_36469 = null;
var inst_36470 = (0);
var inst_36471 = (0);
var state_36611__$1 = (function (){var statearr_36638 = state_36611;
(statearr_36638[(13)] = inst_36471);

(statearr_36638[(14)] = inst_36510);

(statearr_36638[(15)] = inst_36468);

(statearr_36638[(16)] = inst_36470);

(statearr_36638[(17)] = inst_36469);

return statearr_36638;
})();
var statearr_36640_39297 = state_36611__$1;
(statearr_36640_39297[(2)] = null);

(statearr_36640_39297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (39))){
var state_36611__$1 = state_36611;
var statearr_36644_39298 = state_36611__$1;
(statearr_36644_39298[(2)] = null);

(statearr_36644_39298[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (4))){
var inst_36458 = (state_36611[(11)]);
var inst_36458__$1 = (state_36611[(2)]);
var inst_36459 = (inst_36458__$1 == null);
var state_36611__$1 = (function (){var statearr_36645 = state_36611;
(statearr_36645[(11)] = inst_36458__$1);

return statearr_36645;
})();
if(cljs.core.truth_(inst_36459)){
var statearr_36646_39302 = state_36611__$1;
(statearr_36646_39302[(1)] = (5));

} else {
var statearr_36647_39304 = state_36611__$1;
(statearr_36647_39304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (15))){
var inst_36471 = (state_36611[(13)]);
var inst_36468 = (state_36611[(15)]);
var inst_36470 = (state_36611[(16)]);
var inst_36469 = (state_36611[(17)]);
var inst_36486 = (state_36611[(2)]);
var inst_36487 = (inst_36471 + (1));
var tmp36641 = inst_36468;
var tmp36642 = inst_36470;
var tmp36643 = inst_36469;
var inst_36468__$1 = tmp36641;
var inst_36469__$1 = tmp36643;
var inst_36470__$1 = tmp36642;
var inst_36471__$1 = inst_36487;
var state_36611__$1 = (function (){var statearr_36652 = state_36611;
(statearr_36652[(18)] = inst_36486);

(statearr_36652[(13)] = inst_36471__$1);

(statearr_36652[(15)] = inst_36468__$1);

(statearr_36652[(16)] = inst_36470__$1);

(statearr_36652[(17)] = inst_36469__$1);

return statearr_36652;
})();
var statearr_36658_39313 = state_36611__$1;
(statearr_36658_39313[(2)] = null);

(statearr_36658_39313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (21))){
var inst_36514 = (state_36611[(2)]);
var state_36611__$1 = state_36611;
var statearr_36664_39319 = state_36611__$1;
(statearr_36664_39319[(2)] = inst_36514);

(statearr_36664_39319[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (31))){
var inst_36550 = (state_36611[(10)]);
var inst_36558 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36550);
var state_36611__$1 = state_36611;
var statearr_36665_39321 = state_36611__$1;
(statearr_36665_39321[(2)] = inst_36558);

(statearr_36665_39321[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (32))){
var inst_36543 = (state_36611[(9)]);
var inst_36542 = (state_36611[(19)]);
var inst_36544 = (state_36611[(20)]);
var inst_36545 = (state_36611[(12)]);
var inst_36560 = (state_36611[(2)]);
var inst_36561 = (inst_36545 + (1));
var tmp36659 = inst_36543;
var tmp36660 = inst_36542;
var tmp36661 = inst_36544;
var inst_36542__$1 = tmp36660;
var inst_36543__$1 = tmp36659;
var inst_36544__$1 = tmp36661;
var inst_36545__$1 = inst_36561;
var state_36611__$1 = (function (){var statearr_36666 = state_36611;
(statearr_36666[(9)] = inst_36543__$1);

(statearr_36666[(21)] = inst_36560);

(statearr_36666[(19)] = inst_36542__$1);

(statearr_36666[(20)] = inst_36544__$1);

(statearr_36666[(12)] = inst_36545__$1);

return statearr_36666;
})();
var statearr_36672_39326 = state_36611__$1;
(statearr_36672_39326[(2)] = null);

(statearr_36672_39326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (40))){
var inst_36578 = (state_36611[(22)]);
var inst_36583 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36578);
var state_36611__$1 = state_36611;
var statearr_36678_39328 = state_36611__$1;
(statearr_36678_39328[(2)] = inst_36583);

(statearr_36678_39328[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (33))){
var inst_36564 = (state_36611[(23)]);
var inst_36571 = cljs.core.chunked_seq_QMARK_(inst_36564);
var state_36611__$1 = state_36611;
if(inst_36571){
var statearr_36679_39332 = state_36611__$1;
(statearr_36679_39332[(1)] = (36));

} else {
var statearr_36680_39333 = state_36611__$1;
(statearr_36680_39333[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (13))){
var inst_36480 = (state_36611[(24)]);
var inst_36483 = cljs.core.async.close_BANG_(inst_36480);
var state_36611__$1 = state_36611;
var statearr_36681_39334 = state_36611__$1;
(statearr_36681_39334[(2)] = inst_36483);

(statearr_36681_39334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (22))){
var inst_36503 = (state_36611[(8)]);
var inst_36507 = cljs.core.async.close_BANG_(inst_36503);
var state_36611__$1 = state_36611;
var statearr_36682_39339 = state_36611__$1;
(statearr_36682_39339[(2)] = inst_36507);

(statearr_36682_39339[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (36))){
var inst_36564 = (state_36611[(23)]);
var inst_36573 = cljs.core.chunk_first(inst_36564);
var inst_36574 = cljs.core.chunk_rest(inst_36564);
var inst_36575 = cljs.core.count(inst_36573);
var inst_36542 = inst_36574;
var inst_36543 = inst_36573;
var inst_36544 = inst_36575;
var inst_36545 = (0);
var state_36611__$1 = (function (){var statearr_36685 = state_36611;
(statearr_36685[(9)] = inst_36543);

(statearr_36685[(19)] = inst_36542);

(statearr_36685[(20)] = inst_36544);

(statearr_36685[(12)] = inst_36545);

return statearr_36685;
})();
var statearr_36688_39345 = state_36611__$1;
(statearr_36688_39345[(2)] = null);

(statearr_36688_39345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (41))){
var inst_36564 = (state_36611[(23)]);
var inst_36585 = (state_36611[(2)]);
var inst_36586 = cljs.core.next(inst_36564);
var inst_36542 = inst_36586;
var inst_36543 = null;
var inst_36544 = (0);
var inst_36545 = (0);
var state_36611__$1 = (function (){var statearr_36690 = state_36611;
(statearr_36690[(9)] = inst_36543);

(statearr_36690[(25)] = inst_36585);

(statearr_36690[(19)] = inst_36542);

(statearr_36690[(20)] = inst_36544);

(statearr_36690[(12)] = inst_36545);

return statearr_36690;
})();
var statearr_36693_39348 = state_36611__$1;
(statearr_36693_39348[(2)] = null);

(statearr_36693_39348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (43))){
var state_36611__$1 = state_36611;
var statearr_36695_39350 = state_36611__$1;
(statearr_36695_39350[(2)] = null);

(statearr_36695_39350[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (29))){
var inst_36594 = (state_36611[(2)]);
var state_36611__$1 = state_36611;
var statearr_36696_39351 = state_36611__$1;
(statearr_36696_39351[(2)] = inst_36594);

(statearr_36696_39351[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (44))){
var inst_36603 = (state_36611[(2)]);
var state_36611__$1 = (function (){var statearr_36697 = state_36611;
(statearr_36697[(26)] = inst_36603);

return statearr_36697;
})();
var statearr_36698_39357 = state_36611__$1;
(statearr_36698_39357[(2)] = null);

(statearr_36698_39357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (6))){
var inst_36534 = (state_36611[(27)]);
var inst_36533 = cljs.core.deref(cs);
var inst_36534__$1 = cljs.core.keys(inst_36533);
var inst_36535 = cljs.core.count(inst_36534__$1);
var inst_36536 = cljs.core.reset_BANG_(dctr,inst_36535);
var inst_36541 = cljs.core.seq(inst_36534__$1);
var inst_36542 = inst_36541;
var inst_36543 = null;
var inst_36544 = (0);
var inst_36545 = (0);
var state_36611__$1 = (function (){var statearr_36699 = state_36611;
(statearr_36699[(9)] = inst_36543);

(statearr_36699[(27)] = inst_36534__$1);

(statearr_36699[(28)] = inst_36536);

(statearr_36699[(19)] = inst_36542);

(statearr_36699[(20)] = inst_36544);

(statearr_36699[(12)] = inst_36545);

return statearr_36699;
})();
var statearr_36704_39363 = state_36611__$1;
(statearr_36704_39363[(2)] = null);

(statearr_36704_39363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (28))){
var inst_36564 = (state_36611[(23)]);
var inst_36542 = (state_36611[(19)]);
var inst_36564__$1 = cljs.core.seq(inst_36542);
var state_36611__$1 = (function (){var statearr_36708 = state_36611;
(statearr_36708[(23)] = inst_36564__$1);

return statearr_36708;
})();
if(inst_36564__$1){
var statearr_36710_39365 = state_36611__$1;
(statearr_36710_39365[(1)] = (33));

} else {
var statearr_36711_39366 = state_36611__$1;
(statearr_36711_39366[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (25))){
var inst_36544 = (state_36611[(20)]);
var inst_36545 = (state_36611[(12)]);
var inst_36547 = (inst_36545 < inst_36544);
var inst_36548 = inst_36547;
var state_36611__$1 = state_36611;
if(cljs.core.truth_(inst_36548)){
var statearr_36715_39368 = state_36611__$1;
(statearr_36715_39368[(1)] = (27));

} else {
var statearr_36716_39372 = state_36611__$1;
(statearr_36716_39372[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (34))){
var state_36611__$1 = state_36611;
var statearr_36720_39377 = state_36611__$1;
(statearr_36720_39377[(2)] = null);

(statearr_36720_39377[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (17))){
var state_36611__$1 = state_36611;
var statearr_36722_39379 = state_36611__$1;
(statearr_36722_39379[(2)] = null);

(statearr_36722_39379[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (3))){
var inst_36609 = (state_36611[(2)]);
var state_36611__$1 = state_36611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36611__$1,inst_36609);
} else {
if((state_val_36612 === (12))){
var inst_36520 = (state_36611[(2)]);
var state_36611__$1 = state_36611;
var statearr_36728_39385 = state_36611__$1;
(statearr_36728_39385[(2)] = inst_36520);

(statearr_36728_39385[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (2))){
var state_36611__$1 = state_36611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36611__$1,(4),ch);
} else {
if((state_val_36612 === (23))){
var state_36611__$1 = state_36611;
var statearr_36729_39390 = state_36611__$1;
(statearr_36729_39390[(2)] = null);

(statearr_36729_39390[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (35))){
var inst_36592 = (state_36611[(2)]);
var state_36611__$1 = state_36611;
var statearr_36731_39391 = state_36611__$1;
(statearr_36731_39391[(2)] = inst_36592);

(statearr_36731_39391[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (19))){
var inst_36490 = (state_36611[(7)]);
var inst_36494 = cljs.core.chunk_first(inst_36490);
var inst_36495 = cljs.core.chunk_rest(inst_36490);
var inst_36496 = cljs.core.count(inst_36494);
var inst_36468 = inst_36495;
var inst_36469 = inst_36494;
var inst_36470 = inst_36496;
var inst_36471 = (0);
var state_36611__$1 = (function (){var statearr_36735 = state_36611;
(statearr_36735[(13)] = inst_36471);

(statearr_36735[(15)] = inst_36468);

(statearr_36735[(16)] = inst_36470);

(statearr_36735[(17)] = inst_36469);

return statearr_36735;
})();
var statearr_36736_39393 = state_36611__$1;
(statearr_36736_39393[(2)] = null);

(statearr_36736_39393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (11))){
var inst_36468 = (state_36611[(15)]);
var inst_36490 = (state_36611[(7)]);
var inst_36490__$1 = cljs.core.seq(inst_36468);
var state_36611__$1 = (function (){var statearr_36739 = state_36611;
(statearr_36739[(7)] = inst_36490__$1);

return statearr_36739;
})();
if(inst_36490__$1){
var statearr_36742_39396 = state_36611__$1;
(statearr_36742_39396[(1)] = (16));

} else {
var statearr_36744_39397 = state_36611__$1;
(statearr_36744_39397[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (9))){
var inst_36522 = (state_36611[(2)]);
var state_36611__$1 = state_36611;
var statearr_36745_39402 = state_36611__$1;
(statearr_36745_39402[(2)] = inst_36522);

(statearr_36745_39402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (5))){
var inst_36466 = cljs.core.deref(cs);
var inst_36467 = cljs.core.seq(inst_36466);
var inst_36468 = inst_36467;
var inst_36469 = null;
var inst_36470 = (0);
var inst_36471 = (0);
var state_36611__$1 = (function (){var statearr_36750 = state_36611;
(statearr_36750[(13)] = inst_36471);

(statearr_36750[(15)] = inst_36468);

(statearr_36750[(16)] = inst_36470);

(statearr_36750[(17)] = inst_36469);

return statearr_36750;
})();
var statearr_36754_39407 = state_36611__$1;
(statearr_36754_39407[(2)] = null);

(statearr_36754_39407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (14))){
var state_36611__$1 = state_36611;
var statearr_36755_39408 = state_36611__$1;
(statearr_36755_39408[(2)] = null);

(statearr_36755_39408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (45))){
var inst_36600 = (state_36611[(2)]);
var state_36611__$1 = state_36611;
var statearr_36757_39411 = state_36611__$1;
(statearr_36757_39411[(2)] = inst_36600);

(statearr_36757_39411[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (26))){
var inst_36534 = (state_36611[(27)]);
var inst_36596 = (state_36611[(2)]);
var inst_36597 = cljs.core.seq(inst_36534);
var state_36611__$1 = (function (){var statearr_36761 = state_36611;
(statearr_36761[(29)] = inst_36596);

return statearr_36761;
})();
if(inst_36597){
var statearr_36762_39418 = state_36611__$1;
(statearr_36762_39418[(1)] = (42));

} else {
var statearr_36763_39419 = state_36611__$1;
(statearr_36763_39419[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (16))){
var inst_36490 = (state_36611[(7)]);
var inst_36492 = cljs.core.chunked_seq_QMARK_(inst_36490);
var state_36611__$1 = state_36611;
if(inst_36492){
var statearr_36765_39421 = state_36611__$1;
(statearr_36765_39421[(1)] = (19));

} else {
var statearr_36766_39422 = state_36611__$1;
(statearr_36766_39422[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (38))){
var inst_36589 = (state_36611[(2)]);
var state_36611__$1 = state_36611;
var statearr_36771_39425 = state_36611__$1;
(statearr_36771_39425[(2)] = inst_36589);

(statearr_36771_39425[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (30))){
var state_36611__$1 = state_36611;
var statearr_36773_39426 = state_36611__$1;
(statearr_36773_39426[(2)] = null);

(statearr_36773_39426[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (10))){
var inst_36471 = (state_36611[(13)]);
var inst_36469 = (state_36611[(17)]);
var inst_36479 = cljs.core._nth(inst_36469,inst_36471);
var inst_36480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36479,(0),null);
var inst_36481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36479,(1),null);
var state_36611__$1 = (function (){var statearr_36779 = state_36611;
(statearr_36779[(24)] = inst_36480);

return statearr_36779;
})();
if(cljs.core.truth_(inst_36481)){
var statearr_36781_39429 = state_36611__$1;
(statearr_36781_39429[(1)] = (13));

} else {
var statearr_36783_39430 = state_36611__$1;
(statearr_36783_39430[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (18))){
var inst_36518 = (state_36611[(2)]);
var state_36611__$1 = state_36611;
var statearr_36786_39433 = state_36611__$1;
(statearr_36786_39433[(2)] = inst_36518);

(statearr_36786_39433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (42))){
var state_36611__$1 = state_36611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36611__$1,(45),dchan);
} else {
if((state_val_36612 === (37))){
var inst_36564 = (state_36611[(23)]);
var inst_36578 = (state_36611[(22)]);
var inst_36458 = (state_36611[(11)]);
var inst_36578__$1 = cljs.core.first(inst_36564);
var inst_36580 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36578__$1,inst_36458,done);
var state_36611__$1 = (function (){var statearr_36791 = state_36611;
(statearr_36791[(22)] = inst_36578__$1);

return statearr_36791;
})();
if(cljs.core.truth_(inst_36580)){
var statearr_36793_39441 = state_36611__$1;
(statearr_36793_39441[(1)] = (39));

} else {
var statearr_36794_39442 = state_36611__$1;
(statearr_36794_39442[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (8))){
var inst_36471 = (state_36611[(13)]);
var inst_36470 = (state_36611[(16)]);
var inst_36473 = (inst_36471 < inst_36470);
var inst_36474 = inst_36473;
var state_36611__$1 = state_36611;
if(cljs.core.truth_(inst_36474)){
var statearr_36797_39443 = state_36611__$1;
(statearr_36797_39443[(1)] = (10));

} else {
var statearr_36799_39444 = state_36611__$1;
(statearr_36799_39444[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__34351__auto__ = null;
var cljs$core$async$mult_$_state_machine__34351__auto____0 = (function (){
var statearr_36803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36803[(0)] = cljs$core$async$mult_$_state_machine__34351__auto__);

(statearr_36803[(1)] = (1));

return statearr_36803;
});
var cljs$core$async$mult_$_state_machine__34351__auto____1 = (function (state_36611){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_36611);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e36805){var ex__34355__auto__ = e36805;
var statearr_36806_39451 = state_36611;
(statearr_36806_39451[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_36611[(4)]))){
var statearr_36808_39452 = state_36611;
(statearr_36808_39452[(1)] = cljs.core.first((state_36611[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39454 = state_36611;
state_36611 = G__39454;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34351__auto__ = function(state_36611){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34351__auto____1.call(this,state_36611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34351__auto____0;
cljs$core$async$mult_$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34351__auto____1;
return cljs$core$async$mult_$_state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_36814 = f__35002__auto__();
(statearr_36814[(6)] = c__35001__auto___39277);

return statearr_36814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
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
var G__36824 = arguments.length;
switch (G__36824) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_39463 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_39463(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_39474 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_39474(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_39483 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_39483(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_39486 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_39486(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_39490 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_39490(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___39491 = arguments.length;
var i__4865__auto___39492 = (0);
while(true){
if((i__4865__auto___39492 < len__4864__auto___39491)){
args__4870__auto__.push((arguments[i__4865__auto___39492]));

var G__39493 = (i__4865__auto___39492 + (1));
i__4865__auto___39492 = G__39493;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36910){
var map__36913 = p__36910;
var map__36913__$1 = cljs.core.__destructure_map(map__36913);
var opts = map__36913__$1;
var statearr_36915_39495 = state;
(statearr_36915_39495[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_36917_39498 = state;
(statearr_36917_39498[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_36920_39499 = state;
(statearr_36920_39499[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36902){
var G__36903 = cljs.core.first(seq36902);
var seq36902__$1 = cljs.core.next(seq36902);
var G__36904 = cljs.core.first(seq36902__$1);
var seq36902__$2 = cljs.core.next(seq36902__$1);
var G__36905 = cljs.core.first(seq36902__$2);
var seq36902__$3 = cljs.core.next(seq36902__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36903,G__36904,G__36905,seq36902__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36942 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36942 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36943){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36943 = meta36943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36944,meta36943__$1){
var self__ = this;
var _36944__$1 = this;
return (new cljs.core.async.t_cljs$core$async36942(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36943__$1));
}));

(cljs.core.async.t_cljs$core$async36942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36944){
var self__ = this;
var _36944__$1 = this;
return self__.meta36943;
}));

(cljs.core.async.t_cljs$core$async36942.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36942.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async36942.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36942.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36942.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36942.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36942.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36942.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36943","meta36943",-414607523,null)], null);
}));

(cljs.core.async.t_cljs$core$async36942.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36942");

(cljs.core.async.t_cljs$core$async36942.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async36942");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36942.
 */
cljs.core.async.__GT_t_cljs$core$async36942 = (function cljs$core$async$mix_$___GT_t_cljs$core$async36942(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36943){
return (new cljs.core.async.t_cljs$core$async36942(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36943));
});

}

return (new cljs.core.async.t_cljs$core$async36942(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35001__auto___39517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_37090){
var state_val_37091 = (state_37090[(1)]);
if((state_val_37091 === (7))){
var inst_37028 = (state_37090[(2)]);
var state_37090__$1 = state_37090;
if(cljs.core.truth_(inst_37028)){
var statearr_37100_39518 = state_37090__$1;
(statearr_37100_39518[(1)] = (8));

} else {
var statearr_37101_39520 = state_37090__$1;
(statearr_37101_39520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (20))){
var inst_37019 = (state_37090[(7)]);
var state_37090__$1 = state_37090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37090__$1,(23),out,inst_37019);
} else {
if((state_val_37091 === (1))){
var inst_36993 = calc_state();
var inst_36997 = cljs.core.__destructure_map(inst_36993);
var inst_36998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36997,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36997,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36997,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37001 = inst_36993;
var state_37090__$1 = (function (){var statearr_37106 = state_37090;
(statearr_37106[(8)] = inst_37000);

(statearr_37106[(9)] = inst_36998);

(statearr_37106[(10)] = inst_37001);

(statearr_37106[(11)] = inst_36999);

return statearr_37106;
})();
var statearr_37112_39524 = state_37090__$1;
(statearr_37112_39524[(2)] = null);

(statearr_37112_39524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (24))){
var inst_37005 = (state_37090[(12)]);
var inst_37001 = inst_37005;
var state_37090__$1 = (function (){var statearr_37118 = state_37090;
(statearr_37118[(10)] = inst_37001);

return statearr_37118;
})();
var statearr_37119_39525 = state_37090__$1;
(statearr_37119_39525[(2)] = null);

(statearr_37119_39525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (4))){
var inst_37022 = (state_37090[(13)]);
var inst_37019 = (state_37090[(7)]);
var inst_37016 = (state_37090[(2)]);
var inst_37019__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37016,(0),null);
var inst_37020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37016,(1),null);
var inst_37022__$1 = (inst_37019__$1 == null);
var state_37090__$1 = (function (){var statearr_37127 = state_37090;
(statearr_37127[(14)] = inst_37020);

(statearr_37127[(13)] = inst_37022__$1);

(statearr_37127[(7)] = inst_37019__$1);

return statearr_37127;
})();
if(cljs.core.truth_(inst_37022__$1)){
var statearr_37129_39529 = state_37090__$1;
(statearr_37129_39529[(1)] = (5));

} else {
var statearr_37130_39530 = state_37090__$1;
(statearr_37130_39530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (15))){
var inst_37047 = (state_37090[(15)]);
var inst_37007 = (state_37090[(16)]);
var inst_37047__$1 = cljs.core.empty_QMARK_(inst_37007);
var state_37090__$1 = (function (){var statearr_37140 = state_37090;
(statearr_37140[(15)] = inst_37047__$1);

return statearr_37140;
})();
if(inst_37047__$1){
var statearr_37142_39531 = state_37090__$1;
(statearr_37142_39531[(1)] = (17));

} else {
var statearr_37145_39532 = state_37090__$1;
(statearr_37145_39532[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (21))){
var inst_37005 = (state_37090[(12)]);
var inst_37001 = inst_37005;
var state_37090__$1 = (function (){var statearr_37152 = state_37090;
(statearr_37152[(10)] = inst_37001);

return statearr_37152;
})();
var statearr_37156_39536 = state_37090__$1;
(statearr_37156_39536[(2)] = null);

(statearr_37156_39536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (13))){
var inst_37039 = (state_37090[(2)]);
var inst_37040 = calc_state();
var inst_37001 = inst_37040;
var state_37090__$1 = (function (){var statearr_37166 = state_37090;
(statearr_37166[(10)] = inst_37001);

(statearr_37166[(17)] = inst_37039);

return statearr_37166;
})();
var statearr_37171_39538 = state_37090__$1;
(statearr_37171_39538[(2)] = null);

(statearr_37171_39538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (22))){
var inst_37071 = (state_37090[(2)]);
var state_37090__$1 = state_37090;
var statearr_37177_39539 = state_37090__$1;
(statearr_37177_39539[(2)] = inst_37071);

(statearr_37177_39539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (6))){
var inst_37020 = (state_37090[(14)]);
var inst_37026 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37020,change);
var state_37090__$1 = state_37090;
var statearr_37180_39541 = state_37090__$1;
(statearr_37180_39541[(2)] = inst_37026);

(statearr_37180_39541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (25))){
var state_37090__$1 = state_37090;
var statearr_37182_39542 = state_37090__$1;
(statearr_37182_39542[(2)] = null);

(statearr_37182_39542[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (17))){
var inst_37008 = (state_37090[(18)]);
var inst_37020 = (state_37090[(14)]);
var inst_37049 = (inst_37008.cljs$core$IFn$_invoke$arity$1 ? inst_37008.cljs$core$IFn$_invoke$arity$1(inst_37020) : inst_37008.call(null,inst_37020));
var inst_37050 = cljs.core.not(inst_37049);
var state_37090__$1 = state_37090;
var statearr_37183_39543 = state_37090__$1;
(statearr_37183_39543[(2)] = inst_37050);

(statearr_37183_39543[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (3))){
var inst_37076 = (state_37090[(2)]);
var state_37090__$1 = state_37090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37090__$1,inst_37076);
} else {
if((state_val_37091 === (12))){
var state_37090__$1 = state_37090;
var statearr_37193_39545 = state_37090__$1;
(statearr_37193_39545[(2)] = null);

(statearr_37193_39545[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (2))){
var inst_37001 = (state_37090[(10)]);
var inst_37005 = (state_37090[(12)]);
var inst_37005__$1 = cljs.core.__destructure_map(inst_37001);
var inst_37007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37005__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37005__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37005__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37090__$1 = (function (){var statearr_37196 = state_37090;
(statearr_37196[(18)] = inst_37008);

(statearr_37196[(12)] = inst_37005__$1);

(statearr_37196[(16)] = inst_37007);

return statearr_37196;
})();
return cljs.core.async.ioc_alts_BANG_(state_37090__$1,(4),inst_37010);
} else {
if((state_val_37091 === (23))){
var inst_37060 = (state_37090[(2)]);
var state_37090__$1 = state_37090;
if(cljs.core.truth_(inst_37060)){
var statearr_37200_39547 = state_37090__$1;
(statearr_37200_39547[(1)] = (24));

} else {
var statearr_37201_39548 = state_37090__$1;
(statearr_37201_39548[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (19))){
var inst_37053 = (state_37090[(2)]);
var state_37090__$1 = state_37090;
var statearr_37203_39549 = state_37090__$1;
(statearr_37203_39549[(2)] = inst_37053);

(statearr_37203_39549[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (11))){
var inst_37020 = (state_37090[(14)]);
var inst_37036 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37020);
var state_37090__$1 = state_37090;
var statearr_37207_39550 = state_37090__$1;
(statearr_37207_39550[(2)] = inst_37036);

(statearr_37207_39550[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (9))){
var inst_37020 = (state_37090[(14)]);
var inst_37043 = (state_37090[(19)]);
var inst_37007 = (state_37090[(16)]);
var inst_37043__$1 = (inst_37007.cljs$core$IFn$_invoke$arity$1 ? inst_37007.cljs$core$IFn$_invoke$arity$1(inst_37020) : inst_37007.call(null,inst_37020));
var state_37090__$1 = (function (){var statearr_37210 = state_37090;
(statearr_37210[(19)] = inst_37043__$1);

return statearr_37210;
})();
if(cljs.core.truth_(inst_37043__$1)){
var statearr_37213_39551 = state_37090__$1;
(statearr_37213_39551[(1)] = (14));

} else {
var statearr_37216_39553 = state_37090__$1;
(statearr_37216_39553[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (5))){
var inst_37022 = (state_37090[(13)]);
var state_37090__$1 = state_37090;
var statearr_37218_39554 = state_37090__$1;
(statearr_37218_39554[(2)] = inst_37022);

(statearr_37218_39554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (14))){
var inst_37043 = (state_37090[(19)]);
var state_37090__$1 = state_37090;
var statearr_37221_39556 = state_37090__$1;
(statearr_37221_39556[(2)] = inst_37043);

(statearr_37221_39556[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (26))){
var inst_37067 = (state_37090[(2)]);
var state_37090__$1 = state_37090;
var statearr_37222_39564 = state_37090__$1;
(statearr_37222_39564[(2)] = inst_37067);

(statearr_37222_39564[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (16))){
var inst_37055 = (state_37090[(2)]);
var state_37090__$1 = state_37090;
if(cljs.core.truth_(inst_37055)){
var statearr_37224_39565 = state_37090__$1;
(statearr_37224_39565[(1)] = (20));

} else {
var statearr_37225_39566 = state_37090__$1;
(statearr_37225_39566[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (10))){
var inst_37073 = (state_37090[(2)]);
var state_37090__$1 = state_37090;
var statearr_37227_39568 = state_37090__$1;
(statearr_37227_39568[(2)] = inst_37073);

(statearr_37227_39568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (18))){
var inst_37047 = (state_37090[(15)]);
var state_37090__$1 = state_37090;
var statearr_37229_39569 = state_37090__$1;
(statearr_37229_39569[(2)] = inst_37047);

(statearr_37229_39569[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (8))){
var inst_37019 = (state_37090[(7)]);
var inst_37033 = (inst_37019 == null);
var state_37090__$1 = state_37090;
if(cljs.core.truth_(inst_37033)){
var statearr_37234_39573 = state_37090__$1;
(statearr_37234_39573[(1)] = (11));

} else {
var statearr_37236_39574 = state_37090__$1;
(statearr_37236_39574[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__34351__auto__ = null;
var cljs$core$async$mix_$_state_machine__34351__auto____0 = (function (){
var statearr_37244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37244[(0)] = cljs$core$async$mix_$_state_machine__34351__auto__);

(statearr_37244[(1)] = (1));

return statearr_37244;
});
var cljs$core$async$mix_$_state_machine__34351__auto____1 = (function (state_37090){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_37090);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e37245){var ex__34355__auto__ = e37245;
var statearr_37246_39580 = state_37090;
(statearr_37246_39580[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_37090[(4)]))){
var statearr_37248_39581 = state_37090;
(statearr_37248_39581[(1)] = cljs.core.first((state_37090[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39588 = state_37090;
state_37090 = G__39588;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34351__auto__ = function(state_37090){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34351__auto____1.call(this,state_37090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34351__auto____0;
cljs$core$async$mix_$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34351__auto____1;
return cljs$core$async$mix_$_state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_37250 = f__35002__auto__();
(statearr_37250[(6)] = c__35001__auto___39517);

return statearr_37250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_39604 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_39604(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_39605 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_39605(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_39615 = (function() {
var G__39616 = null;
var G__39616__1 = (function (p){
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
var G__39616__2 = (function (p,v){
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
G__39616 = function(p,v){
switch(arguments.length){
case 1:
return G__39616__1.call(this,p);
case 2:
return G__39616__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39616.cljs$core$IFn$_invoke$arity$1 = G__39616__1;
G__39616.cljs$core$IFn$_invoke$arity$2 = G__39616__2;
return G__39616;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37284 = arguments.length;
switch (G__37284) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_39615(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_39615(p,v);
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
var G__37307 = arguments.length;
switch (G__37307) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37297_SHARP_){
if(cljs.core.truth_((p1__37297_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37297_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37297_SHARP_.call(null,topic)))){
return p1__37297_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37297_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37331 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37332){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37332 = meta37332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37333,meta37332__$1){
var self__ = this;
var _37333__$1 = this;
return (new cljs.core.async.t_cljs$core$async37331(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37332__$1));
}));

(cljs.core.async.t_cljs$core$async37331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37333){
var self__ = this;
var _37333__$1 = this;
return self__.meta37332;
}));

(cljs.core.async.t_cljs$core$async37331.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37331.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37331.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37331.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37331.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async37331.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37331.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37332","meta37332",-2107527381,null)], null);
}));

(cljs.core.async.t_cljs$core$async37331.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37331");

(cljs.core.async.t_cljs$core$async37331.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async37331");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37331.
 */
cljs.core.async.__GT_t_cljs$core$async37331 = (function cljs$core$async$__GT_t_cljs$core$async37331(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37332){
return (new cljs.core.async.t_cljs$core$async37331(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37332));
});

}

return (new cljs.core.async.t_cljs$core$async37331(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35001__auto___39637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_37440){
var state_val_37441 = (state_37440[(1)]);
if((state_val_37441 === (7))){
var inst_37436 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
var statearr_37446_39641 = state_37440__$1;
(statearr_37446_39641[(2)] = inst_37436);

(statearr_37446_39641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (20))){
var state_37440__$1 = state_37440;
var statearr_37448_39642 = state_37440__$1;
(statearr_37448_39642[(2)] = null);

(statearr_37448_39642[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (1))){
var state_37440__$1 = state_37440;
var statearr_37449_39645 = state_37440__$1;
(statearr_37449_39645[(2)] = null);

(statearr_37449_39645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (24))){
var inst_37415 = (state_37440[(7)]);
var inst_37428 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37415);
var state_37440__$1 = state_37440;
var statearr_37450_39646 = state_37440__$1;
(statearr_37450_39646[(2)] = inst_37428);

(statearr_37450_39646[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (4))){
var inst_37361 = (state_37440[(8)]);
var inst_37361__$1 = (state_37440[(2)]);
var inst_37362 = (inst_37361__$1 == null);
var state_37440__$1 = (function (){var statearr_37451 = state_37440;
(statearr_37451[(8)] = inst_37361__$1);

return statearr_37451;
})();
if(cljs.core.truth_(inst_37362)){
var statearr_37452_39648 = state_37440__$1;
(statearr_37452_39648[(1)] = (5));

} else {
var statearr_37455_39654 = state_37440__$1;
(statearr_37455_39654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (15))){
var inst_37409 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
var statearr_37464_39655 = state_37440__$1;
(statearr_37464_39655[(2)] = inst_37409);

(statearr_37464_39655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (21))){
var inst_37433 = (state_37440[(2)]);
var state_37440__$1 = (function (){var statearr_37470 = state_37440;
(statearr_37470[(9)] = inst_37433);

return statearr_37470;
})();
var statearr_37471_39656 = state_37440__$1;
(statearr_37471_39656[(2)] = null);

(statearr_37471_39656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (13))){
var inst_37390 = (state_37440[(10)]);
var inst_37393 = cljs.core.chunked_seq_QMARK_(inst_37390);
var state_37440__$1 = state_37440;
if(inst_37393){
var statearr_37485_39657 = state_37440__$1;
(statearr_37485_39657[(1)] = (16));

} else {
var statearr_37486_39658 = state_37440__$1;
(statearr_37486_39658[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (22))){
var inst_37424 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
if(cljs.core.truth_(inst_37424)){
var statearr_37488_39659 = state_37440__$1;
(statearr_37488_39659[(1)] = (23));

} else {
var statearr_37489_39660 = state_37440__$1;
(statearr_37489_39660[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (6))){
var inst_37418 = (state_37440[(11)]);
var inst_37415 = (state_37440[(7)]);
var inst_37361 = (state_37440[(8)]);
var inst_37415__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37361) : topic_fn.call(null,inst_37361));
var inst_37417 = cljs.core.deref(mults);
var inst_37418__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37417,inst_37415__$1);
var state_37440__$1 = (function (){var statearr_37495 = state_37440;
(statearr_37495[(11)] = inst_37418__$1);

(statearr_37495[(7)] = inst_37415__$1);

return statearr_37495;
})();
if(cljs.core.truth_(inst_37418__$1)){
var statearr_37496_39662 = state_37440__$1;
(statearr_37496_39662[(1)] = (19));

} else {
var statearr_37497_39663 = state_37440__$1;
(statearr_37497_39663[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (25))){
var inst_37430 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
var statearr_37498_39664 = state_37440__$1;
(statearr_37498_39664[(2)] = inst_37430);

(statearr_37498_39664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (17))){
var inst_37390 = (state_37440[(10)]);
var inst_37400 = cljs.core.first(inst_37390);
var inst_37401 = cljs.core.async.muxch_STAR_(inst_37400);
var inst_37402 = cljs.core.async.close_BANG_(inst_37401);
var inst_37403 = cljs.core.next(inst_37390);
var inst_37371 = inst_37403;
var inst_37372 = null;
var inst_37373 = (0);
var inst_37374 = (0);
var state_37440__$1 = (function (){var statearr_37504 = state_37440;
(statearr_37504[(12)] = inst_37374);

(statearr_37504[(13)] = inst_37402);

(statearr_37504[(14)] = inst_37373);

(statearr_37504[(15)] = inst_37372);

(statearr_37504[(16)] = inst_37371);

return statearr_37504;
})();
var statearr_37505_39668 = state_37440__$1;
(statearr_37505_39668[(2)] = null);

(statearr_37505_39668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (3))){
var inst_37438 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37440__$1,inst_37438);
} else {
if((state_val_37441 === (12))){
var inst_37411 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
var statearr_37508_39669 = state_37440__$1;
(statearr_37508_39669[(2)] = inst_37411);

(statearr_37508_39669[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (2))){
var state_37440__$1 = state_37440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37440__$1,(4),ch);
} else {
if((state_val_37441 === (23))){
var state_37440__$1 = state_37440;
var statearr_37513_39671 = state_37440__$1;
(statearr_37513_39671[(2)] = null);

(statearr_37513_39671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (19))){
var inst_37418 = (state_37440[(11)]);
var inst_37361 = (state_37440[(8)]);
var inst_37421 = cljs.core.async.muxch_STAR_(inst_37418);
var state_37440__$1 = state_37440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37440__$1,(22),inst_37421,inst_37361);
} else {
if((state_val_37441 === (11))){
var inst_37390 = (state_37440[(10)]);
var inst_37371 = (state_37440[(16)]);
var inst_37390__$1 = cljs.core.seq(inst_37371);
var state_37440__$1 = (function (){var statearr_37522 = state_37440;
(statearr_37522[(10)] = inst_37390__$1);

return statearr_37522;
})();
if(inst_37390__$1){
var statearr_37528_39672 = state_37440__$1;
(statearr_37528_39672[(1)] = (13));

} else {
var statearr_37534_39673 = state_37440__$1;
(statearr_37534_39673[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (9))){
var inst_37413 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
var statearr_37559_39674 = state_37440__$1;
(statearr_37559_39674[(2)] = inst_37413);

(statearr_37559_39674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (5))){
var inst_37368 = cljs.core.deref(mults);
var inst_37369 = cljs.core.vals(inst_37368);
var inst_37370 = cljs.core.seq(inst_37369);
var inst_37371 = inst_37370;
var inst_37372 = null;
var inst_37373 = (0);
var inst_37374 = (0);
var state_37440__$1 = (function (){var statearr_37561 = state_37440;
(statearr_37561[(12)] = inst_37374);

(statearr_37561[(14)] = inst_37373);

(statearr_37561[(15)] = inst_37372);

(statearr_37561[(16)] = inst_37371);

return statearr_37561;
})();
var statearr_37563_39675 = state_37440__$1;
(statearr_37563_39675[(2)] = null);

(statearr_37563_39675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (14))){
var state_37440__$1 = state_37440;
var statearr_37571_39676 = state_37440__$1;
(statearr_37571_39676[(2)] = null);

(statearr_37571_39676[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (16))){
var inst_37390 = (state_37440[(10)]);
var inst_37395 = cljs.core.chunk_first(inst_37390);
var inst_37396 = cljs.core.chunk_rest(inst_37390);
var inst_37397 = cljs.core.count(inst_37395);
var inst_37371 = inst_37396;
var inst_37372 = inst_37395;
var inst_37373 = inst_37397;
var inst_37374 = (0);
var state_37440__$1 = (function (){var statearr_37573 = state_37440;
(statearr_37573[(12)] = inst_37374);

(statearr_37573[(14)] = inst_37373);

(statearr_37573[(15)] = inst_37372);

(statearr_37573[(16)] = inst_37371);

return statearr_37573;
})();
var statearr_37574_39677 = state_37440__$1;
(statearr_37574_39677[(2)] = null);

(statearr_37574_39677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (10))){
var inst_37374 = (state_37440[(12)]);
var inst_37373 = (state_37440[(14)]);
var inst_37372 = (state_37440[(15)]);
var inst_37371 = (state_37440[(16)]);
var inst_37384 = cljs.core._nth(inst_37372,inst_37374);
var inst_37385 = cljs.core.async.muxch_STAR_(inst_37384);
var inst_37386 = cljs.core.async.close_BANG_(inst_37385);
var inst_37387 = (inst_37374 + (1));
var tmp37568 = inst_37373;
var tmp37569 = inst_37372;
var tmp37570 = inst_37371;
var inst_37371__$1 = tmp37570;
var inst_37372__$1 = tmp37569;
var inst_37373__$1 = tmp37568;
var inst_37374__$1 = inst_37387;
var state_37440__$1 = (function (){var statearr_37579 = state_37440;
(statearr_37579[(12)] = inst_37374__$1);

(statearr_37579[(17)] = inst_37386);

(statearr_37579[(14)] = inst_37373__$1);

(statearr_37579[(15)] = inst_37372__$1);

(statearr_37579[(16)] = inst_37371__$1);

return statearr_37579;
})();
var statearr_37581_39684 = state_37440__$1;
(statearr_37581_39684[(2)] = null);

(statearr_37581_39684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (18))){
var inst_37406 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
var statearr_37588_39686 = state_37440__$1;
(statearr_37588_39686[(2)] = inst_37406);

(statearr_37588_39686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (8))){
var inst_37374 = (state_37440[(12)]);
var inst_37373 = (state_37440[(14)]);
var inst_37380 = (inst_37374 < inst_37373);
var inst_37381 = inst_37380;
var state_37440__$1 = state_37440;
if(cljs.core.truth_(inst_37381)){
var statearr_37592_39687 = state_37440__$1;
(statearr_37592_39687[(1)] = (10));

} else {
var statearr_37593_39688 = state_37440__$1;
(statearr_37593_39688[(1)] = (11));

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
var cljs$core$async$state_machine__34351__auto__ = null;
var cljs$core$async$state_machine__34351__auto____0 = (function (){
var statearr_37596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37596[(0)] = cljs$core$async$state_machine__34351__auto__);

(statearr_37596[(1)] = (1));

return statearr_37596;
});
var cljs$core$async$state_machine__34351__auto____1 = (function (state_37440){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_37440);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e37597){var ex__34355__auto__ = e37597;
var statearr_37598_39689 = state_37440;
(statearr_37598_39689[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_37440[(4)]))){
var statearr_37599_39694 = state_37440;
(statearr_37599_39694[(1)] = cljs.core.first((state_37440[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39698 = state_37440;
state_37440 = G__39698;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$state_machine__34351__auto__ = function(state_37440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34351__auto____1.call(this,state_37440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34351__auto____0;
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34351__auto____1;
return cljs$core$async$state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_37602 = f__35002__auto__();
(statearr_37602[(6)] = c__35001__auto___39637);

return statearr_37602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
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
var G__37605 = arguments.length;
switch (G__37605) {
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
var G__37656 = arguments.length;
switch (G__37656) {
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
var G__37663 = arguments.length;
switch (G__37663) {
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
var c__35001__auto___39703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_37717){
var state_val_37719 = (state_37717[(1)]);
if((state_val_37719 === (7))){
var state_37717__$1 = state_37717;
var statearr_37720_39704 = state_37717__$1;
(statearr_37720_39704[(2)] = null);

(statearr_37720_39704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (1))){
var state_37717__$1 = state_37717;
var statearr_37721_39705 = state_37717__$1;
(statearr_37721_39705[(2)] = null);

(statearr_37721_39705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (4))){
var inst_37672 = (state_37717[(7)]);
var inst_37673 = (state_37717[(8)]);
var inst_37675 = (inst_37673 < inst_37672);
var state_37717__$1 = state_37717;
if(cljs.core.truth_(inst_37675)){
var statearr_37724_39706 = state_37717__$1;
(statearr_37724_39706[(1)] = (6));

} else {
var statearr_37725_39707 = state_37717__$1;
(statearr_37725_39707[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (15))){
var inst_37699 = (state_37717[(9)]);
var inst_37705 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37699);
var state_37717__$1 = state_37717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37717__$1,(17),out,inst_37705);
} else {
if((state_val_37719 === (13))){
var inst_37699 = (state_37717[(9)]);
var inst_37699__$1 = (state_37717[(2)]);
var inst_37701 = cljs.core.some(cljs.core.nil_QMARK_,inst_37699__$1);
var state_37717__$1 = (function (){var statearr_37730 = state_37717;
(statearr_37730[(9)] = inst_37699__$1);

return statearr_37730;
})();
if(cljs.core.truth_(inst_37701)){
var statearr_37731_39708 = state_37717__$1;
(statearr_37731_39708[(1)] = (14));

} else {
var statearr_37732_39711 = state_37717__$1;
(statearr_37732_39711[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (6))){
var state_37717__$1 = state_37717;
var statearr_37733_39714 = state_37717__$1;
(statearr_37733_39714[(2)] = null);

(statearr_37733_39714[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (17))){
var inst_37707 = (state_37717[(2)]);
var state_37717__$1 = (function (){var statearr_37737 = state_37717;
(statearr_37737[(10)] = inst_37707);

return statearr_37737;
})();
var statearr_37738_39719 = state_37717__$1;
(statearr_37738_39719[(2)] = null);

(statearr_37738_39719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (3))){
var inst_37712 = (state_37717[(2)]);
var state_37717__$1 = state_37717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37717__$1,inst_37712);
} else {
if((state_val_37719 === (12))){
var _ = (function (){var statearr_37739 = state_37717;
(statearr_37739[(4)] = cljs.core.rest((state_37717[(4)])));

return statearr_37739;
})();
var state_37717__$1 = state_37717;
var ex37736 = (state_37717__$1[(2)]);
var statearr_37740_39720 = state_37717__$1;
(statearr_37740_39720[(5)] = ex37736);


if((ex37736 instanceof Object)){
var statearr_37742_39721 = state_37717__$1;
(statearr_37742_39721[(1)] = (11));

(statearr_37742_39721[(5)] = null);

} else {
throw ex37736;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (2))){
var inst_37671 = cljs.core.reset_BANG_(dctr,cnt);
var inst_37672 = cnt;
var inst_37673 = (0);
var state_37717__$1 = (function (){var statearr_37746 = state_37717;
(statearr_37746[(7)] = inst_37672);

(statearr_37746[(11)] = inst_37671);

(statearr_37746[(8)] = inst_37673);

return statearr_37746;
})();
var statearr_37748_39724 = state_37717__$1;
(statearr_37748_39724[(2)] = null);

(statearr_37748_39724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (11))){
var inst_37677 = (state_37717[(2)]);
var inst_37678 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_37717__$1 = (function (){var statearr_37753 = state_37717;
(statearr_37753[(12)] = inst_37677);

return statearr_37753;
})();
var statearr_37754_39725 = state_37717__$1;
(statearr_37754_39725[(2)] = inst_37678);

(statearr_37754_39725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (9))){
var inst_37673 = (state_37717[(8)]);
var _ = (function (){var statearr_37758 = state_37717;
(statearr_37758[(4)] = cljs.core.cons((12),(state_37717[(4)])));

return statearr_37758;
})();
var inst_37684 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37673) : chs__$1.call(null,inst_37673));
var inst_37685 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37673) : done.call(null,inst_37673));
var inst_37686 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37684,inst_37685);
var ___$1 = (function (){var statearr_37760 = state_37717;
(statearr_37760[(4)] = cljs.core.rest((state_37717[(4)])));

return statearr_37760;
})();
var state_37717__$1 = state_37717;
var statearr_37761_39726 = state_37717__$1;
(statearr_37761_39726[(2)] = inst_37686);

(statearr_37761_39726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (5))){
var inst_37697 = (state_37717[(2)]);
var state_37717__$1 = (function (){var statearr_37762 = state_37717;
(statearr_37762[(13)] = inst_37697);

return statearr_37762;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37717__$1,(13),dchan);
} else {
if((state_val_37719 === (14))){
var inst_37703 = cljs.core.async.close_BANG_(out);
var state_37717__$1 = state_37717;
var statearr_37772_39727 = state_37717__$1;
(statearr_37772_39727[(2)] = inst_37703);

(statearr_37772_39727[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (16))){
var inst_37710 = (state_37717[(2)]);
var state_37717__$1 = state_37717;
var statearr_37779_39728 = state_37717__$1;
(statearr_37779_39728[(2)] = inst_37710);

(statearr_37779_39728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (10))){
var inst_37673 = (state_37717[(8)]);
var inst_37689 = (state_37717[(2)]);
var inst_37691 = (inst_37673 + (1));
var inst_37673__$1 = inst_37691;
var state_37717__$1 = (function (){var statearr_37785 = state_37717;
(statearr_37785[(8)] = inst_37673__$1);

(statearr_37785[(14)] = inst_37689);

return statearr_37785;
})();
var statearr_37786_39729 = state_37717__$1;
(statearr_37786_39729[(2)] = null);

(statearr_37786_39729[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (8))){
var inst_37695 = (state_37717[(2)]);
var state_37717__$1 = state_37717;
var statearr_37788_39730 = state_37717__$1;
(statearr_37788_39730[(2)] = inst_37695);

(statearr_37788_39730[(1)] = (5));


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
var cljs$core$async$state_machine__34351__auto__ = null;
var cljs$core$async$state_machine__34351__auto____0 = (function (){
var statearr_37790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37790[(0)] = cljs$core$async$state_machine__34351__auto__);

(statearr_37790[(1)] = (1));

return statearr_37790;
});
var cljs$core$async$state_machine__34351__auto____1 = (function (state_37717){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_37717);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e37791){var ex__34355__auto__ = e37791;
var statearr_37792_39732 = state_37717;
(statearr_37792_39732[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_37717[(4)]))){
var statearr_37793_39733 = state_37717;
(statearr_37793_39733[(1)] = cljs.core.first((state_37717[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39734 = state_37717;
state_37717 = G__39734;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$state_machine__34351__auto__ = function(state_37717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34351__auto____1.call(this,state_37717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34351__auto____0;
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34351__auto____1;
return cljs$core$async$state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_37794 = f__35002__auto__();
(statearr_37794[(6)] = c__35001__auto___39703);

return statearr_37794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
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
var G__37801 = arguments.length;
switch (G__37801) {
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
var c__35001__auto___39737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_37837){
var state_val_37838 = (state_37837[(1)]);
if((state_val_37838 === (7))){
var inst_37816 = (state_37837[(7)]);
var inst_37815 = (state_37837[(8)]);
var inst_37815__$1 = (state_37837[(2)]);
var inst_37816__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37815__$1,(0),null);
var inst_37817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37815__$1,(1),null);
var inst_37818 = (inst_37816__$1 == null);
var state_37837__$1 = (function (){var statearr_37841 = state_37837;
(statearr_37841[(9)] = inst_37817);

(statearr_37841[(7)] = inst_37816__$1);

(statearr_37841[(8)] = inst_37815__$1);

return statearr_37841;
})();
if(cljs.core.truth_(inst_37818)){
var statearr_37846_39738 = state_37837__$1;
(statearr_37846_39738[(1)] = (8));

} else {
var statearr_37847_39739 = state_37837__$1;
(statearr_37847_39739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (1))){
var inst_37805 = cljs.core.vec(chs);
var inst_37806 = inst_37805;
var state_37837__$1 = (function (){var statearr_37850 = state_37837;
(statearr_37850[(10)] = inst_37806);

return statearr_37850;
})();
var statearr_37856_39740 = state_37837__$1;
(statearr_37856_39740[(2)] = null);

(statearr_37856_39740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (4))){
var inst_37806 = (state_37837[(10)]);
var state_37837__$1 = state_37837;
return cljs.core.async.ioc_alts_BANG_(state_37837__$1,(7),inst_37806);
} else {
if((state_val_37838 === (6))){
var inst_37833 = (state_37837[(2)]);
var state_37837__$1 = state_37837;
var statearr_37869_39741 = state_37837__$1;
(statearr_37869_39741[(2)] = inst_37833);

(statearr_37869_39741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (3))){
var inst_37835 = (state_37837[(2)]);
var state_37837__$1 = state_37837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37837__$1,inst_37835);
} else {
if((state_val_37838 === (2))){
var inst_37806 = (state_37837[(10)]);
var inst_37808 = cljs.core.count(inst_37806);
var inst_37809 = (inst_37808 > (0));
var state_37837__$1 = state_37837;
if(cljs.core.truth_(inst_37809)){
var statearr_37872_39742 = state_37837__$1;
(statearr_37872_39742[(1)] = (4));

} else {
var statearr_37873_39743 = state_37837__$1;
(statearr_37873_39743[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (11))){
var inst_37806 = (state_37837[(10)]);
var inst_37826 = (state_37837[(2)]);
var tmp37870 = inst_37806;
var inst_37806__$1 = tmp37870;
var state_37837__$1 = (function (){var statearr_37878 = state_37837;
(statearr_37878[(11)] = inst_37826);

(statearr_37878[(10)] = inst_37806__$1);

return statearr_37878;
})();
var statearr_37879_39744 = state_37837__$1;
(statearr_37879_39744[(2)] = null);

(statearr_37879_39744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (9))){
var inst_37816 = (state_37837[(7)]);
var state_37837__$1 = state_37837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37837__$1,(11),out,inst_37816);
} else {
if((state_val_37838 === (5))){
var inst_37831 = cljs.core.async.close_BANG_(out);
var state_37837__$1 = state_37837;
var statearr_37884_39745 = state_37837__$1;
(statearr_37884_39745[(2)] = inst_37831);

(statearr_37884_39745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (10))){
var inst_37829 = (state_37837[(2)]);
var state_37837__$1 = state_37837;
var statearr_37886_39746 = state_37837__$1;
(statearr_37886_39746[(2)] = inst_37829);

(statearr_37886_39746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (8))){
var inst_37817 = (state_37837[(9)]);
var inst_37816 = (state_37837[(7)]);
var inst_37815 = (state_37837[(8)]);
var inst_37806 = (state_37837[(10)]);
var inst_37821 = (function (){var cs = inst_37806;
var vec__37811 = inst_37815;
var v = inst_37816;
var c = inst_37817;
return (function (p1__37797_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37797_SHARP_);
});
})();
var inst_37822 = cljs.core.filterv(inst_37821,inst_37806);
var inst_37806__$1 = inst_37822;
var state_37837__$1 = (function (){var statearr_37890 = state_37837;
(statearr_37890[(10)] = inst_37806__$1);

return statearr_37890;
})();
var statearr_37891_39747 = state_37837__$1;
(statearr_37891_39747[(2)] = null);

(statearr_37891_39747[(1)] = (2));


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
var cljs$core$async$state_machine__34351__auto__ = null;
var cljs$core$async$state_machine__34351__auto____0 = (function (){
var statearr_37894 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37894[(0)] = cljs$core$async$state_machine__34351__auto__);

(statearr_37894[(1)] = (1));

return statearr_37894;
});
var cljs$core$async$state_machine__34351__auto____1 = (function (state_37837){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_37837);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e37899){var ex__34355__auto__ = e37899;
var statearr_37900_39748 = state_37837;
(statearr_37900_39748[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_37837[(4)]))){
var statearr_37901_39749 = state_37837;
(statearr_37901_39749[(1)] = cljs.core.first((state_37837[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39750 = state_37837;
state_37837 = G__39750;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$state_machine__34351__auto__ = function(state_37837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34351__auto____1.call(this,state_37837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34351__auto____0;
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34351__auto____1;
return cljs$core$async$state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_37902 = f__35002__auto__();
(statearr_37902[(6)] = c__35001__auto___39737);

return statearr_37902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
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
var G__37907 = arguments.length;
switch (G__37907) {
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
var c__35001__auto___39756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_37934){
var state_val_37936 = (state_37934[(1)]);
if((state_val_37936 === (7))){
var inst_37916 = (state_37934[(7)]);
var inst_37916__$1 = (state_37934[(2)]);
var inst_37917 = (inst_37916__$1 == null);
var inst_37918 = cljs.core.not(inst_37917);
var state_37934__$1 = (function (){var statearr_37956 = state_37934;
(statearr_37956[(7)] = inst_37916__$1);

return statearr_37956;
})();
if(inst_37918){
var statearr_37957_39757 = state_37934__$1;
(statearr_37957_39757[(1)] = (8));

} else {
var statearr_37958_39758 = state_37934__$1;
(statearr_37958_39758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37936 === (1))){
var inst_37911 = (0);
var state_37934__$1 = (function (){var statearr_37960 = state_37934;
(statearr_37960[(8)] = inst_37911);

return statearr_37960;
})();
var statearr_37961_39759 = state_37934__$1;
(statearr_37961_39759[(2)] = null);

(statearr_37961_39759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37936 === (4))){
var state_37934__$1 = state_37934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37934__$1,(7),ch);
} else {
if((state_val_37936 === (6))){
var inst_37929 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37970_39760 = state_37934__$1;
(statearr_37970_39760[(2)] = inst_37929);

(statearr_37970_39760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37936 === (3))){
var inst_37931 = (state_37934[(2)]);
var inst_37932 = cljs.core.async.close_BANG_(out);
var state_37934__$1 = (function (){var statearr_37971 = state_37934;
(statearr_37971[(9)] = inst_37931);

return statearr_37971;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37934__$1,inst_37932);
} else {
if((state_val_37936 === (2))){
var inst_37911 = (state_37934[(8)]);
var inst_37913 = (inst_37911 < n);
var state_37934__$1 = state_37934;
if(cljs.core.truth_(inst_37913)){
var statearr_37972_39762 = state_37934__$1;
(statearr_37972_39762[(1)] = (4));

} else {
var statearr_37973_39763 = state_37934__$1;
(statearr_37973_39763[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37936 === (11))){
var inst_37911 = (state_37934[(8)]);
var inst_37921 = (state_37934[(2)]);
var inst_37922 = (inst_37911 + (1));
var inst_37911__$1 = inst_37922;
var state_37934__$1 = (function (){var statearr_37974 = state_37934;
(statearr_37974[(8)] = inst_37911__$1);

(statearr_37974[(10)] = inst_37921);

return statearr_37974;
})();
var statearr_37975_39764 = state_37934__$1;
(statearr_37975_39764[(2)] = null);

(statearr_37975_39764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37936 === (9))){
var state_37934__$1 = state_37934;
var statearr_37976_39765 = state_37934__$1;
(statearr_37976_39765[(2)] = null);

(statearr_37976_39765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37936 === (5))){
var state_37934__$1 = state_37934;
var statearr_37987_39771 = state_37934__$1;
(statearr_37987_39771[(2)] = null);

(statearr_37987_39771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37936 === (10))){
var inst_37926 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37988_39772 = state_37934__$1;
(statearr_37988_39772[(2)] = inst_37926);

(statearr_37988_39772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37936 === (8))){
var inst_37916 = (state_37934[(7)]);
var state_37934__$1 = state_37934;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37934__$1,(11),out,inst_37916);
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
var cljs$core$async$state_machine__34351__auto__ = null;
var cljs$core$async$state_machine__34351__auto____0 = (function (){
var statearr_37992 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37992[(0)] = cljs$core$async$state_machine__34351__auto__);

(statearr_37992[(1)] = (1));

return statearr_37992;
});
var cljs$core$async$state_machine__34351__auto____1 = (function (state_37934){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_37934);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e37994){var ex__34355__auto__ = e37994;
var statearr_37995_39773 = state_37934;
(statearr_37995_39773[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_37934[(4)]))){
var statearr_37996_39774 = state_37934;
(statearr_37996_39774[(1)] = cljs.core.first((state_37934[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39775 = state_37934;
state_37934 = G__39775;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$state_machine__34351__auto__ = function(state_37934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34351__auto____1.call(this,state_37934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34351__auto____0;
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34351__auto____1;
return cljs$core$async$state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_38000 = f__35002__auto__();
(statearr_38000[(6)] = c__35001__auto___39756);

return statearr_38000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38002 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38002 = (function (f,ch,meta38003){
this.f = f;
this.ch = ch;
this.meta38003 = meta38003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38004,meta38003__$1){
var self__ = this;
var _38004__$1 = this;
return (new cljs.core.async.t_cljs$core$async38002(self__.f,self__.ch,meta38003__$1));
}));

(cljs.core.async.t_cljs$core$async38002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38004){
var self__ = this;
var _38004__$1 = this;
return self__.meta38003;
}));

(cljs.core.async.t_cljs$core$async38002.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38002.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38002.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38002.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38002.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38010 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38010 = (function (f,ch,meta38003,_,fn1,meta38011){
this.f = f;
this.ch = ch;
this.meta38003 = meta38003;
this._ = _;
this.fn1 = fn1;
this.meta38011 = meta38011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38012,meta38011__$1){
var self__ = this;
var _38012__$1 = this;
return (new cljs.core.async.t_cljs$core$async38010(self__.f,self__.ch,self__.meta38003,self__._,self__.fn1,meta38011__$1));
}));

(cljs.core.async.t_cljs$core$async38010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38012){
var self__ = this;
var _38012__$1 = this;
return self__.meta38011;
}));

(cljs.core.async.t_cljs$core$async38010.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38010.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38010.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38010.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38001_SHARP_){
var G__38026 = (((p1__38001_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38001_SHARP_) : self__.f.call(null,p1__38001_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38026) : f1.call(null,G__38026));
});
}));

(cljs.core.async.t_cljs$core$async38010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38003","meta38003",1669314503,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38002","cljs.core.async/t_cljs$core$async38002",-208575390,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38011","meta38011",-269184448,null)], null);
}));

(cljs.core.async.t_cljs$core$async38010.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38010");

(cljs.core.async.t_cljs$core$async38010.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async38010");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38010.
 */
cljs.core.async.__GT_t_cljs$core$async38010 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38010(f__$1,ch__$1,meta38003__$1,___$2,fn1__$1,meta38011){
return (new cljs.core.async.t_cljs$core$async38010(f__$1,ch__$1,meta38003__$1,___$2,fn1__$1,meta38011));
});

}

return (new cljs.core.async.t_cljs$core$async38010(self__.f,self__.ch,self__.meta38003,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38030 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38030) : self__.f.call(null,G__38030));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38002.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38002.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38003","meta38003",1669314503,null)], null);
}));

(cljs.core.async.t_cljs$core$async38002.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38002");

(cljs.core.async.t_cljs$core$async38002.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async38002");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38002.
 */
cljs.core.async.__GT_t_cljs$core$async38002 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38002(f__$1,ch__$1,meta38003){
return (new cljs.core.async.t_cljs$core$async38002(f__$1,ch__$1,meta38003));
});

}

return (new cljs.core.async.t_cljs$core$async38002(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38037 = (function (f,ch,meta38038){
this.f = f;
this.ch = ch;
this.meta38038 = meta38038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38039,meta38038__$1){
var self__ = this;
var _38039__$1 = this;
return (new cljs.core.async.t_cljs$core$async38037(self__.f,self__.ch,meta38038__$1));
}));

(cljs.core.async.t_cljs$core$async38037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38039){
var self__ = this;
var _38039__$1 = this;
return self__.meta38038;
}));

(cljs.core.async.t_cljs$core$async38037.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38037.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38037.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38037.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38037.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38037.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38038","meta38038",1240343333,null)], null);
}));

(cljs.core.async.t_cljs$core$async38037.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38037");

(cljs.core.async.t_cljs$core$async38037.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async38037");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38037.
 */
cljs.core.async.__GT_t_cljs$core$async38037 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38037(f__$1,ch__$1,meta38038){
return (new cljs.core.async.t_cljs$core$async38037(f__$1,ch__$1,meta38038));
});

}

return (new cljs.core.async.t_cljs$core$async38037(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38053 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38053 = (function (p,ch,meta38054){
this.p = p;
this.ch = ch;
this.meta38054 = meta38054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38055,meta38054__$1){
var self__ = this;
var _38055__$1 = this;
return (new cljs.core.async.t_cljs$core$async38053(self__.p,self__.ch,meta38054__$1));
}));

(cljs.core.async.t_cljs$core$async38053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38055){
var self__ = this;
var _38055__$1 = this;
return self__.meta38054;
}));

(cljs.core.async.t_cljs$core$async38053.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38053.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38053.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38053.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38053.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38053.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38053.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38054","meta38054",1431086253,null)], null);
}));

(cljs.core.async.t_cljs$core$async38053.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38053");

(cljs.core.async.t_cljs$core$async38053.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async38053");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38053.
 */
cljs.core.async.__GT_t_cljs$core$async38053 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38053(p__$1,ch__$1,meta38054){
return (new cljs.core.async.t_cljs$core$async38053(p__$1,ch__$1,meta38054));
});

}

return (new cljs.core.async.t_cljs$core$async38053(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38090 = arguments.length;
switch (G__38090) {
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
var c__35001__auto___39806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_38124){
var state_val_38125 = (state_38124[(1)]);
if((state_val_38125 === (7))){
var inst_38120 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
var statearr_38133_39807 = state_38124__$1;
(statearr_38133_39807[(2)] = inst_38120);

(statearr_38133_39807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (1))){
var state_38124__$1 = state_38124;
var statearr_38141_39808 = state_38124__$1;
(statearr_38141_39808[(2)] = null);

(statearr_38141_39808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (4))){
var inst_38106 = (state_38124[(7)]);
var inst_38106__$1 = (state_38124[(2)]);
var inst_38107 = (inst_38106__$1 == null);
var state_38124__$1 = (function (){var statearr_38143 = state_38124;
(statearr_38143[(7)] = inst_38106__$1);

return statearr_38143;
})();
if(cljs.core.truth_(inst_38107)){
var statearr_38144_39809 = state_38124__$1;
(statearr_38144_39809[(1)] = (5));

} else {
var statearr_38145_39810 = state_38124__$1;
(statearr_38145_39810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (6))){
var inst_38106 = (state_38124[(7)]);
var inst_38111 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38106) : p.call(null,inst_38106));
var state_38124__$1 = state_38124;
if(cljs.core.truth_(inst_38111)){
var statearr_38146_39812 = state_38124__$1;
(statearr_38146_39812[(1)] = (8));

} else {
var statearr_38147_39813 = state_38124__$1;
(statearr_38147_39813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (3))){
var inst_38122 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38124__$1,inst_38122);
} else {
if((state_val_38125 === (2))){
var state_38124__$1 = state_38124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38124__$1,(4),ch);
} else {
if((state_val_38125 === (11))){
var inst_38114 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
var statearr_38148_39815 = state_38124__$1;
(statearr_38148_39815[(2)] = inst_38114);

(statearr_38148_39815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (9))){
var state_38124__$1 = state_38124;
var statearr_38151_39816 = state_38124__$1;
(statearr_38151_39816[(2)] = null);

(statearr_38151_39816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (5))){
var inst_38109 = cljs.core.async.close_BANG_(out);
var state_38124__$1 = state_38124;
var statearr_38152_39817 = state_38124__$1;
(statearr_38152_39817[(2)] = inst_38109);

(statearr_38152_39817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (10))){
var inst_38117 = (state_38124[(2)]);
var state_38124__$1 = (function (){var statearr_38153 = state_38124;
(statearr_38153[(8)] = inst_38117);

return statearr_38153;
})();
var statearr_38154_39819 = state_38124__$1;
(statearr_38154_39819[(2)] = null);

(statearr_38154_39819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (8))){
var inst_38106 = (state_38124[(7)]);
var state_38124__$1 = state_38124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38124__$1,(11),out,inst_38106);
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
var cljs$core$async$state_machine__34351__auto__ = null;
var cljs$core$async$state_machine__34351__auto____0 = (function (){
var statearr_38160 = [null,null,null,null,null,null,null,null,null];
(statearr_38160[(0)] = cljs$core$async$state_machine__34351__auto__);

(statearr_38160[(1)] = (1));

return statearr_38160;
});
var cljs$core$async$state_machine__34351__auto____1 = (function (state_38124){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_38124);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e38163){var ex__34355__auto__ = e38163;
var statearr_38164_39820 = state_38124;
(statearr_38164_39820[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_38124[(4)]))){
var statearr_38165_39821 = state_38124;
(statearr_38165_39821[(1)] = cljs.core.first((state_38124[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39822 = state_38124;
state_38124 = G__39822;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$state_machine__34351__auto__ = function(state_38124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34351__auto____1.call(this,state_38124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34351__auto____0;
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34351__auto____1;
return cljs$core$async$state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_38168 = f__35002__auto__();
(statearr_38168[(6)] = c__35001__auto___39806);

return statearr_38168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38170 = arguments.length;
switch (G__38170) {
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
var c__35001__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_38250){
var state_val_38251 = (state_38250[(1)]);
if((state_val_38251 === (7))){
var inst_38242 = (state_38250[(2)]);
var state_38250__$1 = state_38250;
var statearr_38264_39824 = state_38250__$1;
(statearr_38264_39824[(2)] = inst_38242);

(statearr_38264_39824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (20))){
var inst_38212 = (state_38250[(7)]);
var inst_38223 = (state_38250[(2)]);
var inst_38224 = cljs.core.next(inst_38212);
var inst_38196 = inst_38224;
var inst_38197 = null;
var inst_38198 = (0);
var inst_38199 = (0);
var state_38250__$1 = (function (){var statearr_38270 = state_38250;
(statearr_38270[(8)] = inst_38197);

(statearr_38270[(9)] = inst_38196);

(statearr_38270[(10)] = inst_38198);

(statearr_38270[(11)] = inst_38199);

(statearr_38270[(12)] = inst_38223);

return statearr_38270;
})();
var statearr_38271_39832 = state_38250__$1;
(statearr_38271_39832[(2)] = null);

(statearr_38271_39832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (1))){
var state_38250__$1 = state_38250;
var statearr_38276_39833 = state_38250__$1;
(statearr_38276_39833[(2)] = null);

(statearr_38276_39833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (4))){
var inst_38185 = (state_38250[(13)]);
var inst_38185__$1 = (state_38250[(2)]);
var inst_38186 = (inst_38185__$1 == null);
var state_38250__$1 = (function (){var statearr_38278 = state_38250;
(statearr_38278[(13)] = inst_38185__$1);

return statearr_38278;
})();
if(cljs.core.truth_(inst_38186)){
var statearr_38279_39839 = state_38250__$1;
(statearr_38279_39839[(1)] = (5));

} else {
var statearr_38280_39840 = state_38250__$1;
(statearr_38280_39840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (15))){
var state_38250__$1 = state_38250;
var statearr_38288_39842 = state_38250__$1;
(statearr_38288_39842[(2)] = null);

(statearr_38288_39842[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (21))){
var state_38250__$1 = state_38250;
var statearr_38313_39843 = state_38250__$1;
(statearr_38313_39843[(2)] = null);

(statearr_38313_39843[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (13))){
var inst_38197 = (state_38250[(8)]);
var inst_38196 = (state_38250[(9)]);
var inst_38198 = (state_38250[(10)]);
var inst_38199 = (state_38250[(11)]);
var inst_38206 = (state_38250[(2)]);
var inst_38207 = (inst_38199 + (1));
var tmp38285 = inst_38197;
var tmp38286 = inst_38196;
var tmp38287 = inst_38198;
var inst_38196__$1 = tmp38286;
var inst_38197__$1 = tmp38285;
var inst_38198__$1 = tmp38287;
var inst_38199__$1 = inst_38207;
var state_38250__$1 = (function (){var statearr_38318 = state_38250;
(statearr_38318[(8)] = inst_38197__$1);

(statearr_38318[(9)] = inst_38196__$1);

(statearr_38318[(10)] = inst_38198__$1);

(statearr_38318[(14)] = inst_38206);

(statearr_38318[(11)] = inst_38199__$1);

return statearr_38318;
})();
var statearr_38321_39844 = state_38250__$1;
(statearr_38321_39844[(2)] = null);

(statearr_38321_39844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (22))){
var state_38250__$1 = state_38250;
var statearr_38323_39845 = state_38250__$1;
(statearr_38323_39845[(2)] = null);

(statearr_38323_39845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (6))){
var inst_38185 = (state_38250[(13)]);
var inst_38194 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38185) : f.call(null,inst_38185));
var inst_38195 = cljs.core.seq(inst_38194);
var inst_38196 = inst_38195;
var inst_38197 = null;
var inst_38198 = (0);
var inst_38199 = (0);
var state_38250__$1 = (function (){var statearr_38327 = state_38250;
(statearr_38327[(8)] = inst_38197);

(statearr_38327[(9)] = inst_38196);

(statearr_38327[(10)] = inst_38198);

(statearr_38327[(11)] = inst_38199);

return statearr_38327;
})();
var statearr_38328_39846 = state_38250__$1;
(statearr_38328_39846[(2)] = null);

(statearr_38328_39846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (17))){
var inst_38212 = (state_38250[(7)]);
var inst_38216 = cljs.core.chunk_first(inst_38212);
var inst_38217 = cljs.core.chunk_rest(inst_38212);
var inst_38218 = cljs.core.count(inst_38216);
var inst_38196 = inst_38217;
var inst_38197 = inst_38216;
var inst_38198 = inst_38218;
var inst_38199 = (0);
var state_38250__$1 = (function (){var statearr_38336 = state_38250;
(statearr_38336[(8)] = inst_38197);

(statearr_38336[(9)] = inst_38196);

(statearr_38336[(10)] = inst_38198);

(statearr_38336[(11)] = inst_38199);

return statearr_38336;
})();
var statearr_38338_39847 = state_38250__$1;
(statearr_38338_39847[(2)] = null);

(statearr_38338_39847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (3))){
var inst_38244 = (state_38250[(2)]);
var state_38250__$1 = state_38250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38250__$1,inst_38244);
} else {
if((state_val_38251 === (12))){
var inst_38232 = (state_38250[(2)]);
var state_38250__$1 = state_38250;
var statearr_38339_39848 = state_38250__$1;
(statearr_38339_39848[(2)] = inst_38232);

(statearr_38339_39848[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (2))){
var state_38250__$1 = state_38250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38250__$1,(4),in$);
} else {
if((state_val_38251 === (23))){
var inst_38240 = (state_38250[(2)]);
var state_38250__$1 = state_38250;
var statearr_38341_39850 = state_38250__$1;
(statearr_38341_39850[(2)] = inst_38240);

(statearr_38341_39850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (19))){
var inst_38227 = (state_38250[(2)]);
var state_38250__$1 = state_38250;
var statearr_38345_39851 = state_38250__$1;
(statearr_38345_39851[(2)] = inst_38227);

(statearr_38345_39851[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (11))){
var inst_38196 = (state_38250[(9)]);
var inst_38212 = (state_38250[(7)]);
var inst_38212__$1 = cljs.core.seq(inst_38196);
var state_38250__$1 = (function (){var statearr_38354 = state_38250;
(statearr_38354[(7)] = inst_38212__$1);

return statearr_38354;
})();
if(inst_38212__$1){
var statearr_38355_39852 = state_38250__$1;
(statearr_38355_39852[(1)] = (14));

} else {
var statearr_38360_39855 = state_38250__$1;
(statearr_38360_39855[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (9))){
var inst_38234 = (state_38250[(2)]);
var inst_38235 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38250__$1 = (function (){var statearr_38361 = state_38250;
(statearr_38361[(15)] = inst_38234);

return statearr_38361;
})();
if(cljs.core.truth_(inst_38235)){
var statearr_38362_39856 = state_38250__$1;
(statearr_38362_39856[(1)] = (21));

} else {
var statearr_38363_39857 = state_38250__$1;
(statearr_38363_39857[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (5))){
var inst_38188 = cljs.core.async.close_BANG_(out);
var state_38250__$1 = state_38250;
var statearr_38364_39859 = state_38250__$1;
(statearr_38364_39859[(2)] = inst_38188);

(statearr_38364_39859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (14))){
var inst_38212 = (state_38250[(7)]);
var inst_38214 = cljs.core.chunked_seq_QMARK_(inst_38212);
var state_38250__$1 = state_38250;
if(inst_38214){
var statearr_38365_39863 = state_38250__$1;
(statearr_38365_39863[(1)] = (17));

} else {
var statearr_38366_39864 = state_38250__$1;
(statearr_38366_39864[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (16))){
var inst_38230 = (state_38250[(2)]);
var state_38250__$1 = state_38250;
var statearr_38367_39866 = state_38250__$1;
(statearr_38367_39866[(2)] = inst_38230);

(statearr_38367_39866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (10))){
var inst_38197 = (state_38250[(8)]);
var inst_38199 = (state_38250[(11)]);
var inst_38204 = cljs.core._nth(inst_38197,inst_38199);
var state_38250__$1 = state_38250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38250__$1,(13),out,inst_38204);
} else {
if((state_val_38251 === (18))){
var inst_38212 = (state_38250[(7)]);
var inst_38221 = cljs.core.first(inst_38212);
var state_38250__$1 = state_38250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38250__$1,(20),out,inst_38221);
} else {
if((state_val_38251 === (8))){
var inst_38198 = (state_38250[(10)]);
var inst_38199 = (state_38250[(11)]);
var inst_38201 = (inst_38199 < inst_38198);
var inst_38202 = inst_38201;
var state_38250__$1 = state_38250;
if(cljs.core.truth_(inst_38202)){
var statearr_38369_39867 = state_38250__$1;
(statearr_38369_39867[(1)] = (10));

} else {
var statearr_38370_39868 = state_38250__$1;
(statearr_38370_39868[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__34351__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34351__auto____0 = (function (){
var statearr_38373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38373[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34351__auto__);

(statearr_38373[(1)] = (1));

return statearr_38373;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34351__auto____1 = (function (state_38250){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_38250);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e38376){var ex__34355__auto__ = e38376;
var statearr_38377_39874 = state_38250;
(statearr_38377_39874[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_38250[(4)]))){
var statearr_38381_39877 = state_38250;
(statearr_38381_39877[(1)] = cljs.core.first((state_38250[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39878 = state_38250;
state_38250 = G__39878;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34351__auto__ = function(state_38250){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34351__auto____1.call(this,state_38250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34351__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34351__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_38385 = f__35002__auto__();
(statearr_38385[(6)] = c__35001__auto__);

return statearr_38385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
}));

return c__35001__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38391 = arguments.length;
switch (G__38391) {
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
var G__38396 = arguments.length;
switch (G__38396) {
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
var G__38412 = arguments.length;
switch (G__38412) {
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
var c__35001__auto___39888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_38445){
var state_val_38446 = (state_38445[(1)]);
if((state_val_38446 === (7))){
var inst_38440 = (state_38445[(2)]);
var state_38445__$1 = state_38445;
var statearr_38451_39893 = state_38445__$1;
(statearr_38451_39893[(2)] = inst_38440);

(statearr_38451_39893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (1))){
var inst_38419 = null;
var state_38445__$1 = (function (){var statearr_38452 = state_38445;
(statearr_38452[(7)] = inst_38419);

return statearr_38452;
})();
var statearr_38453_39899 = state_38445__$1;
(statearr_38453_39899[(2)] = null);

(statearr_38453_39899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (4))){
var inst_38425 = (state_38445[(8)]);
var inst_38425__$1 = (state_38445[(2)]);
var inst_38426 = (inst_38425__$1 == null);
var inst_38427 = cljs.core.not(inst_38426);
var state_38445__$1 = (function (){var statearr_38455 = state_38445;
(statearr_38455[(8)] = inst_38425__$1);

return statearr_38455;
})();
if(inst_38427){
var statearr_38456_39904 = state_38445__$1;
(statearr_38456_39904[(1)] = (5));

} else {
var statearr_38458_39905 = state_38445__$1;
(statearr_38458_39905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (6))){
var state_38445__$1 = state_38445;
var statearr_38462_39906 = state_38445__$1;
(statearr_38462_39906[(2)] = null);

(statearr_38462_39906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (3))){
var inst_38442 = (state_38445[(2)]);
var inst_38443 = cljs.core.async.close_BANG_(out);
var state_38445__$1 = (function (){var statearr_38463 = state_38445;
(statearr_38463[(9)] = inst_38442);

return statearr_38463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38445__$1,inst_38443);
} else {
if((state_val_38446 === (2))){
var state_38445__$1 = state_38445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38445__$1,(4),ch);
} else {
if((state_val_38446 === (11))){
var inst_38425 = (state_38445[(8)]);
var inst_38434 = (state_38445[(2)]);
var inst_38419 = inst_38425;
var state_38445__$1 = (function (){var statearr_38465 = state_38445;
(statearr_38465[(7)] = inst_38419);

(statearr_38465[(10)] = inst_38434);

return statearr_38465;
})();
var statearr_38466_39911 = state_38445__$1;
(statearr_38466_39911[(2)] = null);

(statearr_38466_39911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (9))){
var inst_38425 = (state_38445[(8)]);
var state_38445__$1 = state_38445;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38445__$1,(11),out,inst_38425);
} else {
if((state_val_38446 === (5))){
var inst_38425 = (state_38445[(8)]);
var inst_38419 = (state_38445[(7)]);
var inst_38429 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38425,inst_38419);
var state_38445__$1 = state_38445;
if(inst_38429){
var statearr_38469_39912 = state_38445__$1;
(statearr_38469_39912[(1)] = (8));

} else {
var statearr_38470_39913 = state_38445__$1;
(statearr_38470_39913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (10))){
var inst_38437 = (state_38445[(2)]);
var state_38445__$1 = state_38445;
var statearr_38472_39914 = state_38445__$1;
(statearr_38472_39914[(2)] = inst_38437);

(statearr_38472_39914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (8))){
var inst_38419 = (state_38445[(7)]);
var tmp38468 = inst_38419;
var inst_38419__$1 = tmp38468;
var state_38445__$1 = (function (){var statearr_38473 = state_38445;
(statearr_38473[(7)] = inst_38419__$1);

return statearr_38473;
})();
var statearr_38474_39915 = state_38445__$1;
(statearr_38474_39915[(2)] = null);

(statearr_38474_39915[(1)] = (2));


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
var cljs$core$async$state_machine__34351__auto__ = null;
var cljs$core$async$state_machine__34351__auto____0 = (function (){
var statearr_38475 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38475[(0)] = cljs$core$async$state_machine__34351__auto__);

(statearr_38475[(1)] = (1));

return statearr_38475;
});
var cljs$core$async$state_machine__34351__auto____1 = (function (state_38445){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_38445);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e38476){var ex__34355__auto__ = e38476;
var statearr_38481_39916 = state_38445;
(statearr_38481_39916[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_38445[(4)]))){
var statearr_38482_39917 = state_38445;
(statearr_38482_39917[(1)] = cljs.core.first((state_38445[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39918 = state_38445;
state_38445 = G__39918;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$state_machine__34351__auto__ = function(state_38445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34351__auto____1.call(this,state_38445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34351__auto____0;
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34351__auto____1;
return cljs$core$async$state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_38483 = f__35002__auto__();
(statearr_38483[(6)] = c__35001__auto___39888);

return statearr_38483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38494 = arguments.length;
switch (G__38494) {
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
var c__35001__auto___39930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_38532){
var state_val_38533 = (state_38532[(1)]);
if((state_val_38533 === (7))){
var inst_38528 = (state_38532[(2)]);
var state_38532__$1 = state_38532;
var statearr_38540_39934 = state_38532__$1;
(statearr_38540_39934[(2)] = inst_38528);

(statearr_38540_39934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (1))){
var inst_38495 = (new Array(n));
var inst_38496 = inst_38495;
var inst_38497 = (0);
var state_38532__$1 = (function (){var statearr_38541 = state_38532;
(statearr_38541[(7)] = inst_38497);

(statearr_38541[(8)] = inst_38496);

return statearr_38541;
})();
var statearr_38542_39939 = state_38532__$1;
(statearr_38542_39939[(2)] = null);

(statearr_38542_39939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (4))){
var inst_38500 = (state_38532[(9)]);
var inst_38500__$1 = (state_38532[(2)]);
var inst_38501 = (inst_38500__$1 == null);
var inst_38502 = cljs.core.not(inst_38501);
var state_38532__$1 = (function (){var statearr_38543 = state_38532;
(statearr_38543[(9)] = inst_38500__$1);

return statearr_38543;
})();
if(inst_38502){
var statearr_38544_39943 = state_38532__$1;
(statearr_38544_39943[(1)] = (5));

} else {
var statearr_38546_39944 = state_38532__$1;
(statearr_38546_39944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (15))){
var inst_38522 = (state_38532[(2)]);
var state_38532__$1 = state_38532;
var statearr_38548_39945 = state_38532__$1;
(statearr_38548_39945[(2)] = inst_38522);

(statearr_38548_39945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (13))){
var state_38532__$1 = state_38532;
var statearr_38549_39946 = state_38532__$1;
(statearr_38549_39946[(2)] = null);

(statearr_38549_39946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (6))){
var inst_38497 = (state_38532[(7)]);
var inst_38518 = (inst_38497 > (0));
var state_38532__$1 = state_38532;
if(cljs.core.truth_(inst_38518)){
var statearr_38552_39947 = state_38532__$1;
(statearr_38552_39947[(1)] = (12));

} else {
var statearr_38553_39948 = state_38532__$1;
(statearr_38553_39948[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (3))){
var inst_38530 = (state_38532[(2)]);
var state_38532__$1 = state_38532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38532__$1,inst_38530);
} else {
if((state_val_38533 === (12))){
var inst_38496 = (state_38532[(8)]);
var inst_38520 = cljs.core.vec(inst_38496);
var state_38532__$1 = state_38532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38532__$1,(15),out,inst_38520);
} else {
if((state_val_38533 === (2))){
var state_38532__$1 = state_38532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38532__$1,(4),ch);
} else {
if((state_val_38533 === (11))){
var inst_38512 = (state_38532[(2)]);
var inst_38513 = (new Array(n));
var inst_38496 = inst_38513;
var inst_38497 = (0);
var state_38532__$1 = (function (){var statearr_38554 = state_38532;
(statearr_38554[(10)] = inst_38512);

(statearr_38554[(7)] = inst_38497);

(statearr_38554[(8)] = inst_38496);

return statearr_38554;
})();
var statearr_38555_39953 = state_38532__$1;
(statearr_38555_39953[(2)] = null);

(statearr_38555_39953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (9))){
var inst_38496 = (state_38532[(8)]);
var inst_38510 = cljs.core.vec(inst_38496);
var state_38532__$1 = state_38532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38532__$1,(11),out,inst_38510);
} else {
if((state_val_38533 === (5))){
var inst_38497 = (state_38532[(7)]);
var inst_38496 = (state_38532[(8)]);
var inst_38500 = (state_38532[(9)]);
var inst_38505 = (state_38532[(11)]);
var inst_38504 = (inst_38496[inst_38497] = inst_38500);
var inst_38505__$1 = (inst_38497 + (1));
var inst_38506 = (inst_38505__$1 < n);
var state_38532__$1 = (function (){var statearr_38558 = state_38532;
(statearr_38558[(12)] = inst_38504);

(statearr_38558[(11)] = inst_38505__$1);

return statearr_38558;
})();
if(cljs.core.truth_(inst_38506)){
var statearr_38559_39957 = state_38532__$1;
(statearr_38559_39957[(1)] = (8));

} else {
var statearr_38560_39961 = state_38532__$1;
(statearr_38560_39961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (14))){
var inst_38525 = (state_38532[(2)]);
var inst_38526 = cljs.core.async.close_BANG_(out);
var state_38532__$1 = (function (){var statearr_38562 = state_38532;
(statearr_38562[(13)] = inst_38525);

return statearr_38562;
})();
var statearr_38563_39962 = state_38532__$1;
(statearr_38563_39962[(2)] = inst_38526);

(statearr_38563_39962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (10))){
var inst_38516 = (state_38532[(2)]);
var state_38532__$1 = state_38532;
var statearr_38565_39966 = state_38532__$1;
(statearr_38565_39966[(2)] = inst_38516);

(statearr_38565_39966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (8))){
var inst_38496 = (state_38532[(8)]);
var inst_38505 = (state_38532[(11)]);
var tmp38561 = inst_38496;
var inst_38496__$1 = tmp38561;
var inst_38497 = inst_38505;
var state_38532__$1 = (function (){var statearr_38566 = state_38532;
(statearr_38566[(7)] = inst_38497);

(statearr_38566[(8)] = inst_38496__$1);

return statearr_38566;
})();
var statearr_38567_39967 = state_38532__$1;
(statearr_38567_39967[(2)] = null);

(statearr_38567_39967[(1)] = (2));


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
var cljs$core$async$state_machine__34351__auto__ = null;
var cljs$core$async$state_machine__34351__auto____0 = (function (){
var statearr_38568 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38568[(0)] = cljs$core$async$state_machine__34351__auto__);

(statearr_38568[(1)] = (1));

return statearr_38568;
});
var cljs$core$async$state_machine__34351__auto____1 = (function (state_38532){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_38532);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e38570){var ex__34355__auto__ = e38570;
var statearr_38572_39972 = state_38532;
(statearr_38572_39972[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_38532[(4)]))){
var statearr_38573_39973 = state_38532;
(statearr_38573_39973[(1)] = cljs.core.first((state_38532[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39974 = state_38532;
state_38532 = G__39974;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$state_machine__34351__auto__ = function(state_38532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34351__auto____1.call(this,state_38532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34351__auto____0;
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34351__auto____1;
return cljs$core$async$state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_38574 = f__35002__auto__();
(statearr_38574[(6)] = c__35001__auto___39930);

return statearr_38574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38596 = arguments.length;
switch (G__38596) {
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
var c__35001__auto___39976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_38679){
var state_val_38680 = (state_38679[(1)]);
if((state_val_38680 === (7))){
var inst_38667 = (state_38679[(2)]);
var state_38679__$1 = state_38679;
var statearr_38690_39977 = state_38679__$1;
(statearr_38690_39977[(2)] = inst_38667);

(statearr_38690_39977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (1))){
var inst_38609 = [];
var inst_38610 = inst_38609;
var inst_38611 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38679__$1 = (function (){var statearr_38694 = state_38679;
(statearr_38694[(7)] = inst_38611);

(statearr_38694[(8)] = inst_38610);

return statearr_38694;
})();
var statearr_38696_39978 = state_38679__$1;
(statearr_38696_39978[(2)] = null);

(statearr_38696_39978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (4))){
var inst_38615 = (state_38679[(9)]);
var inst_38615__$1 = (state_38679[(2)]);
var inst_38616 = (inst_38615__$1 == null);
var inst_38617 = cljs.core.not(inst_38616);
var state_38679__$1 = (function (){var statearr_38699 = state_38679;
(statearr_38699[(9)] = inst_38615__$1);

return statearr_38699;
})();
if(inst_38617){
var statearr_38700_39979 = state_38679__$1;
(statearr_38700_39979[(1)] = (5));

} else {
var statearr_38701_39980 = state_38679__$1;
(statearr_38701_39980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (15))){
var inst_38610 = (state_38679[(8)]);
var inst_38658 = cljs.core.vec(inst_38610);
var state_38679__$1 = state_38679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38679__$1,(18),out,inst_38658);
} else {
if((state_val_38680 === (13))){
var inst_38653 = (state_38679[(2)]);
var state_38679__$1 = state_38679;
var statearr_38705_39982 = state_38679__$1;
(statearr_38705_39982[(2)] = inst_38653);

(statearr_38705_39982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (6))){
var inst_38610 = (state_38679[(8)]);
var inst_38655 = inst_38610.length;
var inst_38656 = (inst_38655 > (0));
var state_38679__$1 = state_38679;
if(cljs.core.truth_(inst_38656)){
var statearr_38710_39984 = state_38679__$1;
(statearr_38710_39984[(1)] = (15));

} else {
var statearr_38712_39985 = state_38679__$1;
(statearr_38712_39985[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (17))){
var inst_38664 = (state_38679[(2)]);
var inst_38665 = cljs.core.async.close_BANG_(out);
var state_38679__$1 = (function (){var statearr_38713 = state_38679;
(statearr_38713[(10)] = inst_38664);

return statearr_38713;
})();
var statearr_38716_39986 = state_38679__$1;
(statearr_38716_39986[(2)] = inst_38665);

(statearr_38716_39986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (3))){
var inst_38675 = (state_38679[(2)]);
var state_38679__$1 = state_38679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38679__$1,inst_38675);
} else {
if((state_val_38680 === (12))){
var inst_38610 = (state_38679[(8)]);
var inst_38638 = cljs.core.vec(inst_38610);
var state_38679__$1 = state_38679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38679__$1,(14),out,inst_38638);
} else {
if((state_val_38680 === (2))){
var state_38679__$1 = state_38679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38679__$1,(4),ch);
} else {
if((state_val_38680 === (11))){
var inst_38615 = (state_38679[(9)]);
var inst_38610 = (state_38679[(8)]);
var inst_38621 = (state_38679[(11)]);
var inst_38635 = inst_38610.push(inst_38615);
var tmp38721 = inst_38610;
var inst_38610__$1 = tmp38721;
var inst_38611 = inst_38621;
var state_38679__$1 = (function (){var statearr_38727 = state_38679;
(statearr_38727[(7)] = inst_38611);

(statearr_38727[(8)] = inst_38610__$1);

(statearr_38727[(12)] = inst_38635);

return statearr_38727;
})();
var statearr_38728_39987 = state_38679__$1;
(statearr_38728_39987[(2)] = null);

(statearr_38728_39987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (9))){
var inst_38611 = (state_38679[(7)]);
var inst_38630 = cljs.core.keyword_identical_QMARK_(inst_38611,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_38679__$1 = state_38679;
var statearr_38729_39988 = state_38679__$1;
(statearr_38729_39988[(2)] = inst_38630);

(statearr_38729_39988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (5))){
var inst_38623 = (state_38679[(13)]);
var inst_38615 = (state_38679[(9)]);
var inst_38611 = (state_38679[(7)]);
var inst_38621 = (state_38679[(11)]);
var inst_38621__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38615) : f.call(null,inst_38615));
var inst_38623__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38621__$1,inst_38611);
var state_38679__$1 = (function (){var statearr_38730 = state_38679;
(statearr_38730[(13)] = inst_38623__$1);

(statearr_38730[(11)] = inst_38621__$1);

return statearr_38730;
})();
if(inst_38623__$1){
var statearr_38734_39989 = state_38679__$1;
(statearr_38734_39989[(1)] = (8));

} else {
var statearr_38735_39990 = state_38679__$1;
(statearr_38735_39990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (14))){
var inst_38615 = (state_38679[(9)]);
var inst_38621 = (state_38679[(11)]);
var inst_38640 = (state_38679[(2)]);
var inst_38647 = [];
var inst_38650 = inst_38647.push(inst_38615);
var inst_38610 = inst_38647;
var inst_38611 = inst_38621;
var state_38679__$1 = (function (){var statearr_38736 = state_38679;
(statearr_38736[(14)] = inst_38650);

(statearr_38736[(7)] = inst_38611);

(statearr_38736[(15)] = inst_38640);

(statearr_38736[(8)] = inst_38610);

return statearr_38736;
})();
var statearr_38737_39991 = state_38679__$1;
(statearr_38737_39991[(2)] = null);

(statearr_38737_39991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (16))){
var state_38679__$1 = state_38679;
var statearr_38738_39992 = state_38679__$1;
(statearr_38738_39992[(2)] = null);

(statearr_38738_39992[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (10))){
var inst_38632 = (state_38679[(2)]);
var state_38679__$1 = state_38679;
if(cljs.core.truth_(inst_38632)){
var statearr_38744_39993 = state_38679__$1;
(statearr_38744_39993[(1)] = (11));

} else {
var statearr_38745_39994 = state_38679__$1;
(statearr_38745_39994[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (18))){
var inst_38661 = (state_38679[(2)]);
var state_38679__$1 = state_38679;
var statearr_38751_39995 = state_38679__$1;
(statearr_38751_39995[(2)] = inst_38661);

(statearr_38751_39995[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (8))){
var inst_38623 = (state_38679[(13)]);
var state_38679__$1 = state_38679;
var statearr_38752_39996 = state_38679__$1;
(statearr_38752_39996[(2)] = inst_38623);

(statearr_38752_39996[(1)] = (10));


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
var cljs$core$async$state_machine__34351__auto__ = null;
var cljs$core$async$state_machine__34351__auto____0 = (function (){
var statearr_38760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38760[(0)] = cljs$core$async$state_machine__34351__auto__);

(statearr_38760[(1)] = (1));

return statearr_38760;
});
var cljs$core$async$state_machine__34351__auto____1 = (function (state_38679){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_38679);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e38765){var ex__34355__auto__ = e38765;
var statearr_38770_39997 = state_38679;
(statearr_38770_39997[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_38679[(4)]))){
var statearr_38771_39998 = state_38679;
(statearr_38771_39998[(1)] = cljs.core.first((state_38679[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39999 = state_38679;
state_38679 = G__39999;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
cljs$core$async$state_machine__34351__auto__ = function(state_38679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34351__auto____1.call(this,state_38679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34351__auto____0;
cljs$core$async$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34351__auto____1;
return cljs$core$async$state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_38772 = f__35002__auto__();
(statearr_38772[(6)] = c__35001__auto___39976);

return statearr_38772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
