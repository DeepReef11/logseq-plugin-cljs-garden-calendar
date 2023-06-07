goog.provide('oops.core');
goog.scope(function(){
  oops.core.goog$module$goog$object = goog.module.get('goog.object');
});
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__44561 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__44561)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__44561)){
var G__44570 = (console["error"]);
var G__44571 = msg;
var G__44572 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__44569 = oops.state.get_console_reporter();
return (fexpr__44569.cljs$core$IFn$_invoke$arity$3 ? fexpr__44569.cljs$core$IFn$_invoke$arity$3(G__44570,G__44571,G__44572) : fexpr__44569.call(null,G__44570,G__44571,G__44572));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__44561)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44561)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__44574 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__44574)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__44574)){
var G__44576 = (console["warn"]);
var G__44577 = msg;
var G__44578 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__44575 = oops.state.get_console_reporter();
return (fexpr__44575.cljs$core$IFn$_invoke$arity$3 ? fexpr__44575.cljs$core$IFn$_invoke$arity$3(G__44576,G__44577,G__44578) : fexpr__44575.call(null,G__44576,G__44577,G__44578));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__44574)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44574)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4870__auto__ = [];
var len__4864__auto___44778 = arguments.length;
var i__4865__auto___44779 = (0);
while(true){
if((i__4865__auto___44779 < len__4864__auto___44778)){
args__4870__auto__.push((arguments[i__4865__auto___44779]));

var G__44780 = (i__4865__auto___44779 + (1));
i__4865__auto___44779 = G__44780;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__44605){
var vec__44610 = p__44605;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44610,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__44626_44782 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__44626_44782)){
oops.core.report_warning_dynamically(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__44626_44782)){
oops.core.report_error_dynamically(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__44626_44782)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__44626_44782)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44626_44782)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq44603){
var G__44604 = cljs.core.first(seq44603);
var seq44603__$1 = cljs.core.next(seq44603);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44604,seq44603__$1);
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
var descriptor_44697 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_44697);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_44698 = temp__5755__auto____$1;
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_44698,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));
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
var child_factory_44703 = oops.config.get_child_factory();
var child_factory_44703__$1 = (function (){var G__44704 = child_factory_44703;
var G__44704__$1 = (((G__44704 instanceof cljs.core.Keyword))?G__44704.fqn:null);
switch (G__44704__$1) {
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
return child_factory_44703;

}
})();

var child_obj_44702 = (child_factory_44703__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_44703__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_44703__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_44702);
} else {
}

return child_obj_44702;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_44707 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_44707);

return selector_path_44707;
} else {
var selector_path_44708 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_44708);

return selector_path_44708;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_44710 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_44710);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_44721 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_44721,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)], 0));
})():true))){
var path_44713 = (function (){var path_44712 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_44712,(0));

return path_44712;
})();
var len_44714 = path_44713.length;
var i_44715 = (0);
var obj_44716 = obj;
while(true){
if((i_44715 < len_44714)){
var mode_44717 = (path_44713[i_44715]);
var key_44718 = (path_44713[(i_44715 + (1))]);
var next_obj_44719 = oops.core.get_key_dynamically(obj_44716,key_44718,mode_44717);
var G__44722 = mode_44717;
switch (G__44722) {
case (0):
var G__44793 = (i_44715 + (2));
var G__44794 = next_obj_44719;
i_44715 = G__44793;
obj_44716 = G__44794;
continue;

break;
case (1):
if((!((next_obj_44719 == null)))){
var G__44795 = (i_44715 + (2));
var G__44796 = next_obj_44719;
i_44715 = G__44795;
obj_44716 = G__44796;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44719 == null)))){
var G__44800 = (i_44715 + (2));
var G__44801 = next_obj_44719;
i_44715 = G__44800;
obj_44716 = G__44801;
continue;
} else {
var G__44802 = (i_44715 + (2));
var G__44803 = oops.core.punch_key_dynamically_BANG_(obj_44716,key_44718);
i_44715 = G__44802;
obj_44716 = G__44803;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44722)].join('')));

}
} else {
return obj_44716;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_44748 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_44748,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)], 0));
})():true))){
var path_44724 = (function (){var path_44723 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_44723,(0));

return path_44723;
})();
var len_44725 = path_44724.length;
if((len_44725 < (4))){
return [obj,(function (){var path_44727 = path_44724;
var len_44728 = path_44727.length;
var i_44729 = (0);
var obj_44730 = obj;
while(true){
if((i_44729 < len_44728)){
var mode_44731 = (path_44727[i_44729]);
var key_44732 = (path_44727[(i_44729 + (1))]);
var next_obj_44733 = oops.core.get_key_dynamically(obj_44730,key_44732,mode_44731);
var G__44754 = mode_44731;
switch (G__44754) {
case (0):
var G__44806 = (i_44729 + (2));
var G__44807 = next_obj_44733;
i_44729 = G__44806;
obj_44730 = G__44807;
continue;

break;
case (1):
if((!((next_obj_44733 == null)))){
var G__44808 = (i_44729 + (2));
var G__44809 = next_obj_44733;
i_44729 = G__44808;
obj_44730 = G__44809;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44733 == null)))){
var G__44810 = (i_44729 + (2));
var G__44811 = next_obj_44733;
i_44729 = G__44810;
obj_44730 = G__44811;
continue;
} else {
var G__44812 = (i_44729 + (2));
var G__44813 = oops.core.punch_key_dynamically_BANG_(obj_44730,key_44732);
i_44729 = G__44812;
obj_44730 = G__44813;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44754)].join('')));

}
} else {
return obj_44730;
}
break;
}
})()];
} else {
var target_obj_44726 = (function (){var path_44734 = path_44724.slice((0),(len_44725 - (2)));
var len_44735 = path_44734.length;
var i_44736 = (0);
var obj_44737 = obj;
while(true){
if((i_44736 < len_44735)){
var mode_44738 = (path_44734[i_44736]);
var key_44739 = (path_44734[(i_44736 + (1))]);
var next_obj_44740 = oops.core.get_key_dynamically(obj_44737,key_44739,mode_44738);
var G__44756 = mode_44738;
switch (G__44756) {
case (0):
var G__44815 = (i_44736 + (2));
var G__44816 = next_obj_44740;
i_44736 = G__44815;
obj_44737 = G__44816;
continue;

break;
case (1):
if((!((next_obj_44740 == null)))){
var G__44817 = (i_44736 + (2));
var G__44818 = next_obj_44740;
i_44736 = G__44817;
obj_44737 = G__44818;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44740 == null)))){
var G__44822 = (i_44736 + (2));
var G__44823 = next_obj_44740;
i_44736 = G__44822;
obj_44737 = G__44823;
continue;
} else {
var G__44824 = (i_44736 + (2));
var G__44825 = oops.core.punch_key_dynamically_BANG_(obj_44737,key_44739);
i_44736 = G__44824;
obj_44737 = G__44825;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44756)].join('')));

}
} else {
return obj_44737;
}
break;
}
})();
return [target_obj_44726,(function (){var path_44741 = [(path_44724[(len_44725 - (2))]),(path_44724[(len_44725 - (1))])];
var len_44742 = path_44741.length;
var i_44743 = (0);
var obj_44744 = target_obj_44726;
while(true){
if((i_44743 < len_44742)){
var mode_44745 = (path_44741[i_44743]);
var key_44746 = (path_44741[(i_44743 + (1))]);
var next_obj_44747 = oops.core.get_key_dynamically(obj_44744,key_44746,mode_44745);
var G__44761 = mode_44745;
switch (G__44761) {
case (0):
var G__44829 = (i_44743 + (2));
var G__44830 = next_obj_44747;
i_44743 = G__44829;
obj_44744 = G__44830;
continue;

break;
case (1):
if((!((next_obj_44747 == null)))){
var G__44831 = (i_44743 + (2));
var G__44832 = next_obj_44747;
i_44743 = G__44831;
obj_44744 = G__44832;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44747 == null)))){
var G__44833 = (i_44743 + (2));
var G__44834 = next_obj_44747;
i_44743 = G__44833;
obj_44744 = G__44834;
continue;
} else {
var G__44835 = (i_44743 + (2));
var G__44836 = oops.core.punch_key_dynamically_BANG_(obj_44744,key_44746);
i_44743 = G__44835;
obj_44744 = G__44836;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44761)].join('')));

}
} else {
return obj_44744;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_44776 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_44776,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)], 0));
})():true))){
var path_44763 = (function (){var path_44762 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_44762,(1));

return path_44762;
})();
var len_44766 = path_44763.length;
var parent_obj_path_44767 = path_44763.slice((0),(len_44766 - (2)));
var key_44764 = (path_44763[(len_44766 - (1))]);
var mode_44765 = (path_44763[(len_44766 - (2))]);
var parent_obj_44768 = (function (){var path_44769 = parent_obj_path_44767;
var len_44770 = path_44769.length;
var i_44771 = (0);
var obj_44772 = obj;
while(true){
if((i_44771 < len_44770)){
var mode_44773 = (path_44769[i_44771]);
var key_44774 = (path_44769[(i_44771 + (1))]);
var next_obj_44775 = oops.core.get_key_dynamically(obj_44772,key_44774,mode_44773);
var G__44777 = mode_44773;
switch (G__44777) {
case (0):
var G__44839 = (i_44771 + (2));
var G__44840 = next_obj_44775;
i_44771 = G__44839;
obj_44772 = G__44840;
continue;

break;
case (1):
if((!((next_obj_44775 == null)))){
var G__44841 = (i_44771 + (2));
var G__44842 = next_obj_44775;
i_44771 = G__44841;
obj_44772 = G__44842;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44775 == null)))){
var G__44843 = (i_44771 + (2));
var G__44844 = next_obj_44775;
i_44771 = G__44843;
obj_44772 = G__44844;
continue;
} else {
var G__44845 = (i_44771 + (2));
var G__44846 = oops.core.punch_key_dynamically_BANG_(obj_44772,key_44774);
i_44771 = G__44845;
obj_44772 = G__44846;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44777)].join('')));

}
} else {
return obj_44772;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_44768,key_44764,val,mode_44765);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
