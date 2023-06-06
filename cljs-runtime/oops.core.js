goog.provide('oops.core');
goog.scope(function(){
  oops.core.goog$module$goog$object = goog.module.get('goog.object');
});
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__38630 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__38630)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__38630)){
var G__38632 = (console["error"]);
var G__38633 = msg;
var G__38634 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__38631 = oops.state.get_console_reporter();
return (fexpr__38631.cljs$core$IFn$_invoke$arity$3 ? fexpr__38631.cljs$core$IFn$_invoke$arity$3(G__38632,G__38633,G__38634) : fexpr__38631.call(null,G__38632,G__38633,G__38634));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__38630)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38630)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__38635 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__38635)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__38635)){
var G__38637 = (console["warn"]);
var G__38638 = msg;
var G__38639 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__38636 = oops.state.get_console_reporter();
return (fexpr__38636.cljs$core$IFn$_invoke$arity$3 ? fexpr__38636.cljs$core$IFn$_invoke$arity$3(G__38637,G__38638,G__38639) : fexpr__38636.call(null,G__38637,G__38638,G__38639));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__38635)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38635)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4870__auto__ = [];
var len__4864__auto___38712 = arguments.length;
var i__4865__auto___38713 = (0);
while(true){
if((i__4865__auto___38713 < len__4864__auto___38712)){
args__4870__auto__.push((arguments[i__4865__auto___38713]));

var G__38714 = (i__4865__auto___38713 + (1));
i__4865__auto___38713 = G__38714;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__38642){
var vec__38643 = p__38642;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38643,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__38646_38715 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__38646_38715)){
oops.core.report_warning_dynamically(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__38646_38715)){
oops.core.report_error_dynamically(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__38646_38715)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38646_38715)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38646_38715)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq38640){
var G__38641 = cljs.core.first(seq38640);
var seq38640__$1 = cljs.core.next(seq38640);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38641,seq38640__$1);
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
var descriptor_38647 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_38647);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_38648 = temp__5755__auto____$1;
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_38648,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));
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
var child_factory_38650 = oops.config.get_child_factory();
var child_factory_38650__$1 = (function (){var G__38651 = child_factory_38650;
var G__38651__$1 = (((G__38651 instanceof cljs.core.Keyword))?G__38651.fqn:null);
switch (G__38651__$1) {
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
return child_factory_38650;

}
})();

var child_obj_38649 = (child_factory_38650__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_38650__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_38650__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_38649);
} else {
}

return child_obj_38649;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_38654 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_38654);

return selector_path_38654;
} else {
var selector_path_38655 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_38655);

return selector_path_38655;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_38656 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_38656);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_38665 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_38665,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)], 0));
})():true))){
var path_38658 = (function (){var path_38657 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_38657,(0));

return path_38657;
})();
var len_38659 = path_38658.length;
var i_38660 = (0);
var obj_38661 = obj;
while(true){
if((i_38660 < len_38659)){
var mode_38662 = (path_38658[i_38660]);
var key_38663 = (path_38658[(i_38660 + (1))]);
var next_obj_38664 = oops.core.get_key_dynamically(obj_38661,key_38663,mode_38662);
var G__38666 = mode_38662;
switch (G__38666) {
case (0):
var G__38721 = (i_38660 + (2));
var G__38722 = next_obj_38664;
i_38660 = G__38721;
obj_38661 = G__38722;
continue;

break;
case (1):
if((!((next_obj_38664 == null)))){
var G__38723 = (i_38660 + (2));
var G__38724 = next_obj_38664;
i_38660 = G__38723;
obj_38661 = G__38724;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_38664 == null)))){
var G__38725 = (i_38660 + (2));
var G__38726 = next_obj_38664;
i_38660 = G__38725;
obj_38661 = G__38726;
continue;
} else {
var G__38727 = (i_38660 + (2));
var G__38728 = oops.core.punch_key_dynamically_BANG_(obj_38661,key_38663);
i_38660 = G__38727;
obj_38661 = G__38728;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38666)].join('')));

}
} else {
return obj_38661;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_38692 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_38692,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)], 0));
})():true))){
var path_38668 = (function (){var path_38667 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_38667,(0));

return path_38667;
})();
var len_38669 = path_38668.length;
if((len_38669 < (4))){
return [obj,(function (){var path_38671 = path_38668;
var len_38672 = path_38671.length;
var i_38673 = (0);
var obj_38674 = obj;
while(true){
if((i_38673 < len_38672)){
var mode_38675 = (path_38671[i_38673]);
var key_38676 = (path_38671[(i_38673 + (1))]);
var next_obj_38677 = oops.core.get_key_dynamically(obj_38674,key_38676,mode_38675);
var G__38693 = mode_38675;
switch (G__38693) {
case (0):
var G__38730 = (i_38673 + (2));
var G__38731 = next_obj_38677;
i_38673 = G__38730;
obj_38674 = G__38731;
continue;

break;
case (1):
if((!((next_obj_38677 == null)))){
var G__38732 = (i_38673 + (2));
var G__38733 = next_obj_38677;
i_38673 = G__38732;
obj_38674 = G__38733;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_38677 == null)))){
var G__38734 = (i_38673 + (2));
var G__38735 = next_obj_38677;
i_38673 = G__38734;
obj_38674 = G__38735;
continue;
} else {
var G__38736 = (i_38673 + (2));
var G__38737 = oops.core.punch_key_dynamically_BANG_(obj_38674,key_38676);
i_38673 = G__38736;
obj_38674 = G__38737;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38693)].join('')));

}
} else {
return obj_38674;
}
break;
}
})()];
} else {
var target_obj_38670 = (function (){var path_38678 = path_38668.slice((0),(len_38669 - (2)));
var len_38679 = path_38678.length;
var i_38680 = (0);
var obj_38681 = obj;
while(true){
if((i_38680 < len_38679)){
var mode_38682 = (path_38678[i_38680]);
var key_38683 = (path_38678[(i_38680 + (1))]);
var next_obj_38684 = oops.core.get_key_dynamically(obj_38681,key_38683,mode_38682);
var G__38694 = mode_38682;
switch (G__38694) {
case (0):
var G__38739 = (i_38680 + (2));
var G__38740 = next_obj_38684;
i_38680 = G__38739;
obj_38681 = G__38740;
continue;

break;
case (1):
if((!((next_obj_38684 == null)))){
var G__38741 = (i_38680 + (2));
var G__38742 = next_obj_38684;
i_38680 = G__38741;
obj_38681 = G__38742;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_38684 == null)))){
var G__38743 = (i_38680 + (2));
var G__38744 = next_obj_38684;
i_38680 = G__38743;
obj_38681 = G__38744;
continue;
} else {
var G__38745 = (i_38680 + (2));
var G__38746 = oops.core.punch_key_dynamically_BANG_(obj_38681,key_38683);
i_38680 = G__38745;
obj_38681 = G__38746;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38694)].join('')));

}
} else {
return obj_38681;
}
break;
}
})();
return [target_obj_38670,(function (){var path_38685 = [(path_38668[(len_38669 - (2))]),(path_38668[(len_38669 - (1))])];
var len_38686 = path_38685.length;
var i_38687 = (0);
var obj_38688 = target_obj_38670;
while(true){
if((i_38687 < len_38686)){
var mode_38689 = (path_38685[i_38687]);
var key_38690 = (path_38685[(i_38687 + (1))]);
var next_obj_38691 = oops.core.get_key_dynamically(obj_38688,key_38690,mode_38689);
var G__38695 = mode_38689;
switch (G__38695) {
case (0):
var G__38748 = (i_38687 + (2));
var G__38749 = next_obj_38691;
i_38687 = G__38748;
obj_38688 = G__38749;
continue;

break;
case (1):
if((!((next_obj_38691 == null)))){
var G__38750 = (i_38687 + (2));
var G__38751 = next_obj_38691;
i_38687 = G__38750;
obj_38688 = G__38751;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_38691 == null)))){
var G__38752 = (i_38687 + (2));
var G__38753 = next_obj_38691;
i_38687 = G__38752;
obj_38688 = G__38753;
continue;
} else {
var G__38754 = (i_38687 + (2));
var G__38755 = oops.core.punch_key_dynamically_BANG_(obj_38688,key_38690);
i_38687 = G__38754;
obj_38688 = G__38755;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38695)].join('')));

}
} else {
return obj_38688;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_38710 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_38710,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)], 0));
})():true))){
var path_38697 = (function (){var path_38696 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_38696,(1));

return path_38696;
})();
var len_38700 = path_38697.length;
var parent_obj_path_38701 = path_38697.slice((0),(len_38700 - (2)));
var key_38698 = (path_38697[(len_38700 - (1))]);
var mode_38699 = (path_38697[(len_38700 - (2))]);
var parent_obj_38702 = (function (){var path_38703 = parent_obj_path_38701;
var len_38704 = path_38703.length;
var i_38705 = (0);
var obj_38706 = obj;
while(true){
if((i_38705 < len_38704)){
var mode_38707 = (path_38703[i_38705]);
var key_38708 = (path_38703[(i_38705 + (1))]);
var next_obj_38709 = oops.core.get_key_dynamically(obj_38706,key_38708,mode_38707);
var G__38711 = mode_38707;
switch (G__38711) {
case (0):
var G__38757 = (i_38705 + (2));
var G__38758 = next_obj_38709;
i_38705 = G__38757;
obj_38706 = G__38758;
continue;

break;
case (1):
if((!((next_obj_38709 == null)))){
var G__38759 = (i_38705 + (2));
var G__38760 = next_obj_38709;
i_38705 = G__38759;
obj_38706 = G__38760;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_38709 == null)))){
var G__38761 = (i_38705 + (2));
var G__38762 = next_obj_38709;
i_38705 = G__38761;
obj_38706 = G__38762;
continue;
} else {
var G__38763 = (i_38705 + (2));
var G__38764 = oops.core.punch_key_dynamically_BANG_(obj_38706,key_38708);
i_38705 = G__38763;
obj_38706 = G__38764;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38711)].join('')));

}
} else {
return obj_38706;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_38702,key_38698,val,mode_38699);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
