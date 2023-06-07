goog.provide('promesa.exec');
goog.scope(function(){
  promesa.exec.goog$module$goog$object = goog.module.get('goog.object');
});
promesa.exec._STAR_default_scheduler_STAR_ = null;
promesa.exec._STAR_default_executor_STAR_ = null;
/**
 * Var that indicates the availability of virtual threads.
 */
promesa.exec.virtual_threads_available_QMARK_ = false;
/**
 * backward compatibility alias for `virtual-threads-available?`
 */
promesa.exec.vthread_supported_QMARK_ = promesa.exec.virtual_threads_available_QMARK_;
promesa.exec.noop = cljs.core.constantly(null);
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_scheduler !== 'undefined')){
} else {
/**
 * Default scheduled executor instance.
 */
promesa.exec.default_scheduler = (new cljs.core.Delay((function (){
return (promesa.exec.scheduled_executor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.scheduled_executor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.scheduled_executor.call(null));
}),null));
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_executor !== 'undefined')){
} else {
/**
 * Default executor instance, ForkJoinPool/commonPool in JVM, MicrotaskExecutor on JS.
 */
promesa.exec.default_executor = (new cljs.core.Delay((function (){
return (promesa.exec.microtask_executor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.microtask_executor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.microtask_executor.call(null));
}),null));
}
/**
 * Default Executor instance that runs the task in the same thread.
 */
promesa.exec.default_current_thread_executor = (new cljs.core.Delay((function (){
return (promesa.exec.current_thread_executor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.current_thread_executor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.current_thread_executor.call(null));
}),null));
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_cached_executor !== 'undefined')){
} else {
/**
 * A global, cached thread executor service.
 */
promesa.exec.default_cached_executor = promesa.exec.default_executor;
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_thread_executor !== 'undefined')){
} else {
/**
 * A global, thread per task executor service.
 */
promesa.exec.default_thread_executor = promesa.exec.default_executor;
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_vthread_executor !== 'undefined')){
} else {
/**
 * A global, virtual thread per task executor service.
 */
promesa.exec.default_vthread_executor = promesa.exec.default_executor;
}
/**
 * Returns true if `o` is an instane of Executor or satisfies IExecutor protocol.
 */
promesa.exec.executor_QMARK_ = (function promesa$exec$executor_QMARK_(o){
if((!((o == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === o.promesa$protocols$IExecutor$)))){
return true;
} else {
if((!o.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(promesa.protocols.IExecutor,o);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(promesa.protocols.IExecutor,o);
}
});
promesa.exec.resolve_executor = (function promesa$exec$resolve_executor(var_args){
var G__40034 = arguments.length;
switch (G__40034) {
case 0:
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0 = (function (){
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(null);
}));

(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1 = (function (executor){
if((executor == null)){
return cljs.core.deref(promesa.exec.default_executor);
} else {
if(promesa.exec.executor_QMARK_(executor)){
return executor;
} else {
if(cljs.core.delay_QMARK_(executor)){
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(executor));
} else {
var G__40047 = executor;
var G__40047__$1 = (((G__40047 instanceof cljs.core.Keyword))?G__40047.fqn:null);
switch (G__40047__$1) {
case "default":
return cljs.core.deref(promesa.exec.default_executor);

break;
case "cached":
return cljs.core.deref(promesa.exec.default_cached_executor);

break;
case "thread":
return cljs.core.deref(promesa.exec.default_thread_executor);

break;
case "vthread":
return cljs.core.deref(promesa.exec.default_vthread_executor);

break;
case "same-thread":
return cljs.core.deref(promesa.exec.default_current_thread_executor);

break;
case "current-thread":
return cljs.core.deref(promesa.exec.default_current_thread_executor);

break;
default:
throw (new TypeError("invalid executor"));

}

}
}
}
}));

(promesa.exec.resolve_executor.cljs$lang$maxFixedArity = 1);

promesa.exec.resolve_scheduler = (function promesa$exec$resolve_scheduler(var_args){
var G__40059 = arguments.length;
switch (G__40059) {
case 0:
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0 = (function (){
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1(null);
}));

(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1 = (function (scheduler){
if((((scheduler == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),scheduler)))){
return cljs.core.deref(promesa.exec.default_scheduler);
} else {
return promesa.util.maybe_deref(scheduler);
}
}));

(promesa.exec.resolve_scheduler.cljs$lang$maxFixedArity = 1);

promesa.exec.wrap_bindings = (function promesa$exec$wrap_bindings(f){
return f;
});
/**
 * Run the task in the provided executor, returns `nil`. Analogous to
 *   the `(.execute executor f)`. Fire and forget.
 */
promesa.exec.exec_BANG_ = (function promesa$exec$exec_BANG_(var_args){
var G__40083 = arguments.length;
switch (G__40083) {
case 1:
return promesa.exec.exec_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.exec_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.exec_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return promesa.protocols._exec_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(promesa.exec._STAR_default_executor_STAR_),f);
}));

(promesa.exec.exec_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
return promesa.protocols._exec_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(executor),f);
}));

(promesa.exec.exec_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Run the task in the provided executor.
 */
promesa.exec.run_BANG_ = (function promesa$exec$run_BANG_(var_args){
var G__40102 = arguments.length;
switch (G__40102) {
case 1:
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return promesa.protocols._run_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(promesa.exec._STAR_default_executor_STAR_),f);
}));

(promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
return promesa.protocols._run_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(executor),f);
}));

(promesa.exec.run_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Submit a task to be executed in a provided executor
 *   and return a promise that will be completed with
 *   the return value of a task.
 * 
 *   A task is a plain clojure function.
 */
promesa.exec.submit_BANG_ = (function promesa$exec$submit_BANG_(var_args){
var G__40111 = arguments.length;
switch (G__40111) {
case 1:
return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return promesa.protocols._submit_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(promesa.exec._STAR_default_executor_STAR_),f);
}));

(promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
return promesa.protocols._submit_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(executor),f);
}));

(promesa.exec.submit_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule a callable to be executed after the `ms` delay
 *   is reached.
 * 
 *   In JVM it uses a scheduled executor service and in JS
 *   it uses the `setTimeout` function.
 */
promesa.exec.schedule_BANG_ = (function promesa$exec$schedule_BANG_(var_args){
var G__40121 = arguments.length;
switch (G__40121) {
case 2:
return promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ms,f){
return promesa.protocols._schedule_BANG_(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0(),ms,f);
}));

(promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (scheduler,ms,f){
return promesa.protocols._schedule_BANG_(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1(scheduler),ms,f);
}));

(promesa.exec.schedule_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates an executor instance that run tasks in the same thread.
 */
promesa.exec.current_thread_executor = (function promesa$exec$current_thread_executor(){
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.t_promesa$exec40141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {promesa.protocols.IExecutor}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.exec.t_promesa$exec40141 = (function (meta40142){
this.meta40142 = meta40142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(promesa.exec.t_promesa$exec40141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40143,meta40142__$1){
var self__ = this;
var _40143__$1 = this;
return (new promesa.exec.t_promesa$exec40141(meta40142__$1));
}));

(promesa.exec.t_promesa$exec40141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40143){
var self__ = this;
var _40143__$1 = this;
return self__.meta40142;
}));

(promesa.exec.t_promesa$exec40141.prototype.promesa$protocols$IExecutor$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.t_promesa$exec40141.prototype.promesa$protocols$IExecutor$_exec_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return null;
}catch (e40156){var _ = e40156;
return null;
}}));

(promesa.exec.t_promesa$exec40141.prototype.promesa$protocols$IExecutor$_run_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
try{return promesa.protocols._promise(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(promesa.exec.noop,f));
}catch (e40158){var cause = e40158;
return promesa.protocols._promise(cause);
}}));

(promesa.exec.t_promesa$exec40141.prototype.promesa$protocols$IExecutor$_submit_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
try{return promesa.protocols._promise((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}catch (e40169){var cause = e40169;
return promesa.protocols._promise(cause);
}}));

(promesa.exec.t_promesa$exec40141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40142","meta40142",-151025989,null)], null);
}));

(promesa.exec.t_promesa$exec40141.cljs$lang$type = true);

(promesa.exec.t_promesa$exec40141.cljs$lang$ctorStr = "promesa.exec/t_promesa$exec40141");

(promesa.exec.t_promesa$exec40141.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"promesa.exec/t_promesa$exec40141");
}));

/**
 * Positional factory function for promesa.exec/t_promesa$exec40141.
 */
promesa.exec.__GT_t_promesa$exec40141 = (function promesa$exec$current_thread_executor_$___GT_t_promesa$exec40141(meta40142){
return (new promesa.exec.t_promesa$exec40141(meta40142));
});

}

return (new promesa.exec.t_promesa$exec40141(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * An IExecutor that schedules tasks to be executed in the MicrotasksQueue.
 */
promesa.exec.microtask_executor = (function promesa$exec$microtask_executor(){
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.t_promesa$exec40184 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {promesa.protocols.IExecutor}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.exec.t_promesa$exec40184 = (function (meta40185){
this.meta40185 = meta40185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(promesa.exec.t_promesa$exec40184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40186,meta40185__$1){
var self__ = this;
var _40186__$1 = this;
return (new promesa.exec.t_promesa$exec40184(meta40185__$1));
}));

(promesa.exec.t_promesa$exec40184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40186){
var self__ = this;
var _40186__$1 = this;
return self__.meta40185;
}));

(promesa.exec.t_promesa$exec40184.prototype.promesa$protocols$IExecutor$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.t_promesa$exec40184.prototype.promesa$protocols$IExecutor$_exec_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.impl.promise.nextTick(f);
}));

(promesa.exec.t_promesa$exec40184.prototype.promesa$protocols$IExecutor$_run_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._fmap(promesa.protocols._fmap(promesa.protocols._promise(null),(function (_){
try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}catch (e40195){var ___$1 = e40195;
return null;
}})),promesa.exec.noop);
}));

(promesa.exec.t_promesa$exec40184.prototype.promesa$protocols$IExecutor$_submit_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._fmap(promesa.protocols._promise(null),(function (_){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}));
}));

(promesa.exec.t_promesa$exec40184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40185","meta40185",-329619351,null)], null);
}));

(promesa.exec.t_promesa$exec40184.cljs$lang$type = true);

(promesa.exec.t_promesa$exec40184.cljs$lang$ctorStr = "promesa.exec/t_promesa$exec40184");

(promesa.exec.t_promesa$exec40184.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"promesa.exec/t_promesa$exec40184");
}));

/**
 * Positional factory function for promesa.exec/t_promesa$exec40184.
 */
promesa.exec.__GT_t_promesa$exec40184 = (function promesa$exec$microtask_executor_$___GT_t_promesa$exec40184(meta40185){
return (new promesa.exec.t_promesa$exec40184(meta40185));
});

}

return (new promesa.exec.t_promesa$exec40184(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {promesa.protocols.IScheduler}
*/
promesa.exec.Scheduler = (function (){
});
(promesa.exec.Scheduler.prototype.promesa$protocols$IScheduler$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.Scheduler.prototype.promesa$protocols$IScheduler$_schedule_BANG_$arity$3 = (function (_,ms,f){
var self__ = this;
var ___$1 = this;
var df = promesa.impl.promise.deferred();
var tid = setTimeout((function (){
try{return promesa.protocols._resolve_BANG_(df,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}catch (e40219){var cause = e40219;
return promesa.protocols._reject_BANG_(df,cause);
}}),ms);
promesa.protocols._fnly(df,(function (___$2,c){
if(cljs.core.truth_(promesa.impl.promise.isCancellationError(c))){
return clearTimeout(tid);
} else {
return null;
}
}));

return df;
}));

(promesa.exec.Scheduler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(promesa.exec.Scheduler.cljs$lang$type = true);

(promesa.exec.Scheduler.cljs$lang$ctorStr = "promesa.exec/Scheduler");

(promesa.exec.Scheduler.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"promesa.exec/Scheduler");
}));

/**
 * Positional factory function for promesa.exec/Scheduler.
 */
promesa.exec.__GT_Scheduler = (function promesa$exec$__GT_Scheduler(){
return (new promesa.exec.Scheduler());
});

/**
 * A scheduled thread pool constructor. A ScheduledExecutor (IScheduler
 *   in CLJS) instance allows execute asynchronous tasks some time later.
 */
promesa.exec.scheduled_executor = (function promesa$exec$scheduled_executor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___40427 = arguments.length;
var i__4865__auto___40428 = (0);
while(true){
if((i__4865__auto___40428 < len__4864__auto___40427)){
args__4870__auto__.push((arguments[i__4865__auto___40428]));

var G__40433 = (i__4865__auto___40428 + (1));
i__4865__auto___40428 = G__40433;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return promesa.exec.scheduled_executor.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(promesa.exec.scheduled_executor.cljs$core$IFn$_invoke$arity$variadic = (function (p__40253){
var map__40255 = p__40253;
var map__40255__$1 = cljs.core.__destructure_map(map__40255);
var parallelism = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40255__$1,new cljs.core.Keyword(null,"parallelism","parallelism",-930922333),(1));
var factory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40255__$1,new cljs.core.Keyword(null,"factory","factory",63933746));
return promesa.exec.__GT_Scheduler();
}));

(promesa.exec.scheduled_executor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(promesa.exec.scheduled_executor.cljs$lang$applyTo = (function (seq40244){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40244));
}));


//# sourceMappingURL=promesa.exec.js.map
