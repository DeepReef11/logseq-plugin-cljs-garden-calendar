goog.provide('oops.config');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900),new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338),new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580),new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031)],[new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"console","console",1228072057),true,new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"js-obj","js-obj",-1298148277),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),true,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032)]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config();
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){
if(cljs.core.map_QMARK_(new_config)){
} else {
throw (new Error("Assert failed: (map? new-config)"));
}

(oops.config._STAR_runtime_config_STAR_ = new_config);

return new_config;
});
oops.config.get_current_runtime_config = (function oops$config$get_current_runtime_config(){
return oops.config._STAR_runtime_config_STAR_;
});
oops.config.update_current_runtime_config_BANG_ = (function oops$config$update_current_runtime_config_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37107 = arguments.length;
var i__4865__auto___37111 = (0);
while(true){
if((i__4865__auto___37111 < len__4864__auto___37107)){
args__4870__auto__.push((arguments[i__4865__auto___37111]));

var G__37114 = (i__4865__auto___37111 + (1));
i__4865__auto___37111 = G__37114;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_(f_or_map)){
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f_or_map], 0));
} else {
return oops.config.set_current_runtime_config_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_or_map,oops.config.get_current_runtime_config(),args));
}
}));

(oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq36707){
var G__36712 = cljs.core.first(seq36707);
var seq36707__$1 = cljs.core.next(seq36707);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36712,seq36707__$1);
}));

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37132 = arguments.length;
var i__4865__auto___37134 = (0);
while(true){
if((i__4865__auto___37134 < len__4864__auto___37132)){
args__4870__auto__.push((arguments[i__4865__auto___37134]));

var G__37137 = (i__4865__auto___37134 + (1));
i__4865__auto___37134 = G__37137;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__36837){
var vec__36838 = p__36837;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36838,(0),null);
var G__36842 = (function (){var or__4253__auto__ = config;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__36842) : key.call(null,G__36842));
}));

(oops.config.get_config_key.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.get_config_key.cljs$lang$applyTo = (function (seq36799){
var G__36801 = cljs.core.first(seq36799);
var seq36799__$1 = cljs.core.next(seq36799);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36801,seq36799__$1);
}));

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37145 = arguments.length;
var i__4865__auto___37146 = (0);
while(true){
if((i__4865__auto___37146 < len__4864__auto___37145)){
args__4870__auto__.push((arguments[i__4865__auto___37146]));

var G__37149 = (i__4865__auto___37146 + (1));
i__4865__auto___37146 = G__37149;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__36869){
var vec__36870 = p__36869;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36870,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457),cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__4253__auto__ = config;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})(),key,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457)));
}));

(oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq36852){
var G__36853 = cljs.core.first(seq36852);
var seq36852__$1 = cljs.core.next(seq36852);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36853,seq36852__$1);
}));

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37158 = arguments.length;
var i__4865__auto___37160 = (0);
while(true){
if((i__4865__auto___37160 < len__4864__auto___37158)){
args__4870__auto__.push((arguments[i__4865__auto___37160]));

var G__37161 = (i__4865__auto___37160 + (1));
i__4865__auto___37160 = G__37161;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__36903){
var vec__36907 = p__36903;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36907,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq36880){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36880));
}));

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37171 = arguments.length;
var i__4865__auto___37172 = (0);
while(true){
if((i__4865__auto___37172 < len__4864__auto___37171)){
args__4870__auto__.push((arguments[i__4865__auto___37172]));

var G__37176 = (i__4865__auto___37172 + (1));
i__4865__auto___37172 = G__37176;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__36942){
var vec__36943 = p__36942;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36943,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq36927){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36927));
}));

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37186 = arguments.length;
var i__4865__auto___37187 = (0);
while(true){
if((i__4865__auto___37187 < len__4864__auto___37186)){
args__4870__auto__.push((arguments[i__4865__auto___37187]));

var G__37188 = (i__4865__auto___37187 + (1));
i__4865__auto___37187 = G__37188;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__36964){
var vec__36967 = p__36964;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36967,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"suppress-reporting","suppress-reporting",43885458),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq36954){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36954));
}));

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37200 = arguments.length;
var i__4865__auto___37201 = (0);
while(true){
if((i__4865__auto___37201 < len__4864__auto___37200)){
args__4870__auto__.push((arguments[i__4865__auto___37201]));

var G__37202 = (i__4865__auto___37201 + (1));
i__4865__auto___37201 = G__37202;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__36998){
var vec__36999 = p__36998;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36999,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_child_factory.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_child_factory.cljs$lang$applyTo = (function (seq36981){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36981));
}));

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37217 = arguments.length;
var i__4865__auto___37218 = (0);
while(true){
if((i__4865__auto___37218 < len__4864__auto___37217)){
args__4870__auto__.push((arguments[i__4865__auto___37218]));

var G__37220 = (i__4865__auto___37218 + (1));
i__4865__auto___37218 = G__37220;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__37040){
var vec__37041 = p__37040;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37041,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
}));

(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq37025){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37025));
}));

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37233 = arguments.length;
var i__4865__auto___37235 = (0);
while(true){
if((i__4865__auto___37235 < len__4864__auto___37233)){
args__4870__auto__.push((arguments[i__4865__auto___37235]));

var G__37239 = (i__4865__auto___37235 + (1));
i__4865__auto___37235 = G__37239;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__37076){
var vec__37078 = p__37076;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37078,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
}));

(oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq37054){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37054));
}));


//# sourceMappingURL=oops.config.js.map
