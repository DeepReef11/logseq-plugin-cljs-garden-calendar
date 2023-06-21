goog.provide('oops.core');
goog.scope(function(){
  oops.core.goog$module$goog$object = goog.module.get('goog.object');
});
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__49695 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__49695)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__49695)){
var G__49697 = (console["error"]);
var G__49698 = msg;
var G__49699 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__49696 = oops.state.get_console_reporter();
return (fexpr__49696.cljs$core$IFn$_invoke$arity$3 ? fexpr__49696.cljs$core$IFn$_invoke$arity$3(G__49697,G__49698,G__49699) : fexpr__49696.call(null,G__49697,G__49698,G__49699));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__49695)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49695)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__49700 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__49700)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__49700)){
var G__49702 = (console["warn"]);
var G__49703 = msg;
var G__49704 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__49701 = oops.state.get_console_reporter();
return (fexpr__49701.cljs$core$IFn$_invoke$arity$3 ? fexpr__49701.cljs$core$IFn$_invoke$arity$3(G__49702,G__49703,G__49704) : fexpr__49701.call(null,G__49702,G__49703,G__49704));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__49700)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49700)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49777 = arguments.length;
var i__4865__auto___49778 = (0);
while(true){
if((i__4865__auto___49778 < len__4864__auto___49777)){
args__4870__auto__.push((arguments[i__4865__auto___49778]));

var G__49779 = (i__4865__auto___49778 + (1));
i__4865__auto___49778 = G__49779;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__49707){
var vec__49708 = p__49707;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49708,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__49711_49780 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__49711_49780)){
oops.core.report_warning_dynamically(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__49711_49780)){
oops.core.report_error_dynamically(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__49711_49780)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__49711_49780)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49711_49780)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq49705){
var G__49706 = cljs.core.first(seq49705);
var seq49705__$1 = cljs.core.next(seq49705);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49706,seq49705__$1);
}));

oops.core.gobj_get = (function oops$core$gobj_get(obj,key){
return oops.core.goog$module$goog$object.get(obj,key);
});
oops.core.gobj_set = (function oops$core$gobj_set(obj,key,val){
return oops.core.goog$module$goog$object.set(obj,key,val);
});
oops.core.gobj_containsKey = (function oops$core$gobj_containsKey(obj,key){
return oops.core.goog$module$goog$object.containsKey(obj,key);
});
oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return false;
})()
):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return false;
})()
):((cljs.core.boolean_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return false;
})()
):((typeof obj === 'number')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return false;
})()
):((typeof obj === 'string')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);
} else {
}

var and__4251__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(oops.core.gobj_containsKey(obj,key)))))?oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0)):true):true);
if(cljs.core.truth_(and__4251__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5755__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5755__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));
} else {
return true;

}
}
} else {
var descriptor_49712 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_49712);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_49713 = temp__5755__auto____$1;
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_49713,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));
}
}
} else {
return true;
}
} else {
return and__4251__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(typeof fn === 'function'){
return true;
} else {
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_49715 = oops.config.get_child_factory();
var child_factory_49715__$1 = (function (){var G__49716 = child_factory_49715;
var G__49716__$1 = (((G__49716 instanceof cljs.core.Keyword))?G__49716.fqn:null);
switch (G__49716__$1) {
case "js-obj":
return (function (){
return ({});
});

break;
case "js-array":
return (function (){
return [];
});

break;
default:
return child_factory_49715;

}
})();

var child_obj_49714 = (child_factory_49715__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_49715__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_49715__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_49714);
} else {
}

return child_obj_49714;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_49719 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_49719);

return selector_path_49719;
} else {
var selector_path_49720 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_49720);

return selector_path_49720;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_49721 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_49721);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_49730 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_49730,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)], 0));
})():true))){
var path_49723 = (function (){var path_49722 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_49722,(0));

return path_49722;
})();
var len_49724 = path_49723.length;
var i_49725 = (0);
var obj_49726 = obj;
while(true){
if((i_49725 < len_49724)){
var mode_49727 = (path_49723[i_49725]);
var key_49728 = (path_49723[(i_49725 + (1))]);
var next_obj_49729 = oops.core.get_key_dynamically(obj_49726,key_49728,mode_49727);
var G__49731 = mode_49727;
switch (G__49731) {
case (0):
var G__49783 = (i_49725 + (2));
var G__49784 = next_obj_49729;
i_49725 = G__49783;
obj_49726 = G__49784;
continue;

break;
case (1):
if((!((next_obj_49729 == null)))){
var G__49785 = (i_49725 + (2));
var G__49786 = next_obj_49729;
i_49725 = G__49785;
obj_49726 = G__49786;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_49729 == null)))){
var G__49787 = (i_49725 + (2));
var G__49788 = next_obj_49729;
i_49725 = G__49787;
obj_49726 = G__49788;
continue;
} else {
var G__49789 = (i_49725 + (2));
var G__49790 = oops.core.punch_key_dynamically_BANG_(obj_49726,key_49728);
i_49725 = G__49789;
obj_49726 = G__49790;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49731)].join('')));

}
} else {
return obj_49726;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_49757 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_49757,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)], 0));
})():true))){
var path_49733 = (function (){var path_49732 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_49732,(0));

return path_49732;
})();
var len_49734 = path_49733.length;
if((len_49734 < (4))){
return [obj,(function (){var path_49736 = path_49733;
var len_49737 = path_49736.length;
var i_49738 = (0);
var obj_49739 = obj;
while(true){
if((i_49738 < len_49737)){
var mode_49740 = (path_49736[i_49738]);
var key_49741 = (path_49736[(i_49738 + (1))]);
var next_obj_49742 = oops.core.get_key_dynamically(obj_49739,key_49741,mode_49740);
var G__49758 = mode_49740;
switch (G__49758) {
case (0):
var G__49792 = (i_49738 + (2));
var G__49793 = next_obj_49742;
i_49738 = G__49792;
obj_49739 = G__49793;
continue;

break;
case (1):
if((!((next_obj_49742 == null)))){
var G__49794 = (i_49738 + (2));
var G__49795 = next_obj_49742;
i_49738 = G__49794;
obj_49739 = G__49795;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_49742 == null)))){
var G__49796 = (i_49738 + (2));
var G__49797 = next_obj_49742;
i_49738 = G__49796;
obj_49739 = G__49797;
continue;
} else {
var G__49798 = (i_49738 + (2));
var G__49799 = oops.core.punch_key_dynamically_BANG_(obj_49739,key_49741);
i_49738 = G__49798;
obj_49739 = G__49799;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49758)].join('')));

}
} else {
return obj_49739;
}
break;
}
})()];
} else {
var target_obj_49735 = (function (){var path_49743 = path_49733.slice((0),(len_49734 - (2)));
var len_49744 = path_49743.length;
var i_49745 = (0);
var obj_49746 = obj;
while(true){
if((i_49745 < len_49744)){
var mode_49747 = (path_49743[i_49745]);
var key_49748 = (path_49743[(i_49745 + (1))]);
var next_obj_49749 = oops.core.get_key_dynamically(obj_49746,key_49748,mode_49747);
var G__49759 = mode_49747;
switch (G__49759) {
case (0):
var G__49801 = (i_49745 + (2));
var G__49802 = next_obj_49749;
i_49745 = G__49801;
obj_49746 = G__49802;
continue;

break;
case (1):
if((!((next_obj_49749 == null)))){
var G__49803 = (i_49745 + (2));
var G__49804 = next_obj_49749;
i_49745 = G__49803;
obj_49746 = G__49804;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_49749 == null)))){
var G__49805 = (i_49745 + (2));
var G__49806 = next_obj_49749;
i_49745 = G__49805;
obj_49746 = G__49806;
continue;
} else {
var G__49807 = (i_49745 + (2));
var G__49808 = oops.core.punch_key_dynamically_BANG_(obj_49746,key_49748);
i_49745 = G__49807;
obj_49746 = G__49808;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49759)].join('')));

}
} else {
return obj_49746;
}
break;
}
})();
return [target_obj_49735,(function (){var path_49750 = [(path_49733[(len_49734 - (2))]),(path_49733[(len_49734 - (1))])];
var len_49751 = path_49750.length;
var i_49752 = (0);
var obj_49753 = target_obj_49735;
while(true){
if((i_49752 < len_49751)){
var mode_49754 = (path_49750[i_49752]);
var key_49755 = (path_49750[(i_49752 + (1))]);
var next_obj_49756 = oops.core.get_key_dynamically(obj_49753,key_49755,mode_49754);
var G__49760 = mode_49754;
switch (G__49760) {
case (0):
var G__49810 = (i_49752 + (2));
var G__49811 = next_obj_49756;
i_49752 = G__49810;
obj_49753 = G__49811;
continue;

break;
case (1):
if((!((next_obj_49756 == null)))){
var G__49812 = (i_49752 + (2));
var G__49813 = next_obj_49756;
i_49752 = G__49812;
obj_49753 = G__49813;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_49756 == null)))){
var G__49814 = (i_49752 + (2));
var G__49815 = next_obj_49756;
i_49752 = G__49814;
obj_49753 = G__49815;
continue;
} else {
var G__49816 = (i_49752 + (2));
var G__49817 = oops.core.punch_key_dynamically_BANG_(obj_49753,key_49755);
i_49752 = G__49816;
obj_49753 = G__49817;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49760)].join('')));

}
} else {
return obj_49753;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_49775 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_49775,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)], 0));
})():true))){
var path_49762 = (function (){var path_49761 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_49761,(1));

return path_49761;
})();
var len_49765 = path_49762.length;
var parent_obj_path_49766 = path_49762.slice((0),(len_49765 - (2)));
var key_49763 = (path_49762[(len_49765 - (1))]);
var mode_49764 = (path_49762[(len_49765 - (2))]);
var parent_obj_49767 = (function (){var path_49768 = parent_obj_path_49766;
var len_49769 = path_49768.length;
var i_49770 = (0);
var obj_49771 = obj;
while(true){
if((i_49770 < len_49769)){
var mode_49772 = (path_49768[i_49770]);
var key_49773 = (path_49768[(i_49770 + (1))]);
var next_obj_49774 = oops.core.get_key_dynamically(obj_49771,key_49773,mode_49772);
var G__49776 = mode_49772;
switch (G__49776) {
case (0):
var G__49820 = (i_49770 + (2));
var G__49821 = next_obj_49774;
i_49770 = G__49820;
obj_49771 = G__49821;
continue;

break;
case (1):
if((!((next_obj_49774 == null)))){
var G__49822 = (i_49770 + (2));
var G__49823 = next_obj_49774;
i_49770 = G__49822;
obj_49771 = G__49823;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_49774 == null)))){
var G__49824 = (i_49770 + (2));
var G__49825 = next_obj_49774;
i_49770 = G__49824;
obj_49771 = G__49825;
continue;
} else {
var G__49826 = (i_49770 + (2));
var G__49827 = oops.core.punch_key_dynamically_BANG_(obj_49771,key_49773);
i_49770 = G__49826;
obj_49771 = G__49827;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49776)].join('')));

}
} else {
return obj_49771;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_49767,key_49763,val,mode_49764);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
