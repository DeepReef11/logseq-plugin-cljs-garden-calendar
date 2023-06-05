goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34595 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34595(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34598 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34598(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33103 = coll;
var G__33104 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33103,G__33104) : shadow.dom.lazy_native_coll_seq.call(null,G__33103,G__33104));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33174 = arguments.length;
switch (G__33174) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33182 = arguments.length;
switch (G__33182) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33195 = arguments.length;
switch (G__33195) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33221 = arguments.length;
switch (G__33221) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33235 = arguments.length;
switch (G__33235) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33274 = arguments.length;
switch (G__33274) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33292){if((e33292 instanceof Object)){
var e = e33292;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33292;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33314 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33315 = null;
var count__33316 = (0);
var i__33317 = (0);
while(true){
if((i__33317 < count__33316)){
var el = chunk__33315.cljs$core$IIndexed$_nth$arity$2(null,i__33317);
var handler_34615__$1 = ((function (seq__33314,chunk__33315,count__33316,i__33317,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33314,chunk__33315,count__33316,i__33317,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34615__$1);


var G__34617 = seq__33314;
var G__34618 = chunk__33315;
var G__34619 = count__33316;
var G__34620 = (i__33317 + (1));
seq__33314 = G__34617;
chunk__33315 = G__34618;
count__33316 = G__34619;
i__33317 = G__34620;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33314);
if(temp__5753__auto__){
var seq__33314__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33314__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33314__$1);
var G__34622 = cljs.core.chunk_rest(seq__33314__$1);
var G__34623 = c__4679__auto__;
var G__34624 = cljs.core.count(c__4679__auto__);
var G__34625 = (0);
seq__33314 = G__34622;
chunk__33315 = G__34623;
count__33316 = G__34624;
i__33317 = G__34625;
continue;
} else {
var el = cljs.core.first(seq__33314__$1);
var handler_34626__$1 = ((function (seq__33314,chunk__33315,count__33316,i__33317,el,seq__33314__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33314,chunk__33315,count__33316,i__33317,el,seq__33314__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34626__$1);


var G__34627 = cljs.core.next(seq__33314__$1);
var G__34628 = null;
var G__34629 = (0);
var G__34630 = (0);
seq__33314 = G__34627;
chunk__33315 = G__34628;
count__33316 = G__34629;
i__33317 = G__34630;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33351 = arguments.length;
switch (G__33351) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33394 = cljs.core.seq(events);
var chunk__33395 = null;
var count__33396 = (0);
var i__33397 = (0);
while(true){
if((i__33397 < count__33396)){
var vec__33428 = chunk__33395.cljs$core$IIndexed$_nth$arity$2(null,i__33397);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33428,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33428,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34636 = seq__33394;
var G__34637 = chunk__33395;
var G__34638 = count__33396;
var G__34639 = (i__33397 + (1));
seq__33394 = G__34636;
chunk__33395 = G__34637;
count__33396 = G__34638;
i__33397 = G__34639;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33394);
if(temp__5753__auto__){
var seq__33394__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33394__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33394__$1);
var G__34641 = cljs.core.chunk_rest(seq__33394__$1);
var G__34642 = c__4679__auto__;
var G__34643 = cljs.core.count(c__4679__auto__);
var G__34644 = (0);
seq__33394 = G__34641;
chunk__33395 = G__34642;
count__33396 = G__34643;
i__33397 = G__34644;
continue;
} else {
var vec__33442 = cljs.core.first(seq__33394__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33442,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33442,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34645 = cljs.core.next(seq__33394__$1);
var G__34646 = null;
var G__34647 = (0);
var G__34648 = (0);
seq__33394 = G__34645;
chunk__33395 = G__34646;
count__33396 = G__34647;
i__33397 = G__34648;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33452 = cljs.core.seq(styles);
var chunk__33453 = null;
var count__33454 = (0);
var i__33455 = (0);
while(true){
if((i__33455 < count__33454)){
var vec__33472 = chunk__33453.cljs$core$IIndexed$_nth$arity$2(null,i__33455);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33472,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33472,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34651 = seq__33452;
var G__34652 = chunk__33453;
var G__34653 = count__33454;
var G__34654 = (i__33455 + (1));
seq__33452 = G__34651;
chunk__33453 = G__34652;
count__33454 = G__34653;
i__33455 = G__34654;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33452);
if(temp__5753__auto__){
var seq__33452__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33452__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33452__$1);
var G__34655 = cljs.core.chunk_rest(seq__33452__$1);
var G__34656 = c__4679__auto__;
var G__34657 = cljs.core.count(c__4679__auto__);
var G__34658 = (0);
seq__33452 = G__34655;
chunk__33453 = G__34656;
count__33454 = G__34657;
i__33455 = G__34658;
continue;
} else {
var vec__33490 = cljs.core.first(seq__33452__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33490,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33490,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34659 = cljs.core.next(seq__33452__$1);
var G__34660 = null;
var G__34661 = (0);
var G__34662 = (0);
seq__33452 = G__34659;
chunk__33453 = G__34660;
count__33454 = G__34661;
i__33455 = G__34662;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33512_34663 = key;
var G__33512_34664__$1 = (((G__33512_34663 instanceof cljs.core.Keyword))?G__33512_34663.fqn:null);
switch (G__33512_34664__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34668 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_34668,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_34668,"aria-");
}
})())){
el.setAttribute(ks_34668,value);
} else {
(el[ks_34668] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33645){
var map__33648 = p__33645;
var map__33648__$1 = cljs.core.__destructure_map(map__33648);
var props = map__33648__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33648__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33653 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33653,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33653,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33653,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33663 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33663,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33663;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33679 = arguments.length;
switch (G__33679) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33732){
var vec__33733 = p__33732;
var seq__33734 = cljs.core.seq(vec__33733);
var first__33735 = cljs.core.first(seq__33734);
var seq__33734__$1 = cljs.core.next(seq__33734);
var nn = first__33735;
var first__33735__$1 = cljs.core.first(seq__33734__$1);
var seq__33734__$2 = cljs.core.next(seq__33734__$1);
var np = first__33735__$1;
var nc = seq__33734__$2;
var node = vec__33733;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33741 = nn;
var G__33743 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33741,G__33743) : create_fn.call(null,G__33741,G__33743));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33745 = nn;
var G__33746 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33745,G__33746) : create_fn.call(null,G__33745,G__33746));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33751 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33751,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33751,(1),null);
var seq__33757_34692 = cljs.core.seq(node_children);
var chunk__33758_34693 = null;
var count__33759_34694 = (0);
var i__33760_34695 = (0);
while(true){
if((i__33760_34695 < count__33759_34694)){
var child_struct_34696 = chunk__33758_34693.cljs$core$IIndexed$_nth$arity$2(null,i__33760_34695);
var children_34697 = shadow.dom.dom_node(child_struct_34696);
if(cljs.core.seq_QMARK_(children_34697)){
var seq__33846_34699 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34697));
var chunk__33848_34700 = null;
var count__33849_34701 = (0);
var i__33850_34702 = (0);
while(true){
if((i__33850_34702 < count__33849_34701)){
var child_34704 = chunk__33848_34700.cljs$core$IIndexed$_nth$arity$2(null,i__33850_34702);
if(cljs.core.truth_(child_34704)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34704);


var G__34705 = seq__33846_34699;
var G__34706 = chunk__33848_34700;
var G__34707 = count__33849_34701;
var G__34708 = (i__33850_34702 + (1));
seq__33846_34699 = G__34705;
chunk__33848_34700 = G__34706;
count__33849_34701 = G__34707;
i__33850_34702 = G__34708;
continue;
} else {
var G__34709 = seq__33846_34699;
var G__34710 = chunk__33848_34700;
var G__34711 = count__33849_34701;
var G__34712 = (i__33850_34702 + (1));
seq__33846_34699 = G__34709;
chunk__33848_34700 = G__34710;
count__33849_34701 = G__34711;
i__33850_34702 = G__34712;
continue;
}
} else {
var temp__5753__auto___34713 = cljs.core.seq(seq__33846_34699);
if(temp__5753__auto___34713){
var seq__33846_34714__$1 = temp__5753__auto___34713;
if(cljs.core.chunked_seq_QMARK_(seq__33846_34714__$1)){
var c__4679__auto___34715 = cljs.core.chunk_first(seq__33846_34714__$1);
var G__34717 = cljs.core.chunk_rest(seq__33846_34714__$1);
var G__34718 = c__4679__auto___34715;
var G__34719 = cljs.core.count(c__4679__auto___34715);
var G__34720 = (0);
seq__33846_34699 = G__34717;
chunk__33848_34700 = G__34718;
count__33849_34701 = G__34719;
i__33850_34702 = G__34720;
continue;
} else {
var child_34721 = cljs.core.first(seq__33846_34714__$1);
if(cljs.core.truth_(child_34721)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34721);


var G__34722 = cljs.core.next(seq__33846_34714__$1);
var G__34723 = null;
var G__34724 = (0);
var G__34725 = (0);
seq__33846_34699 = G__34722;
chunk__33848_34700 = G__34723;
count__33849_34701 = G__34724;
i__33850_34702 = G__34725;
continue;
} else {
var G__34727 = cljs.core.next(seq__33846_34714__$1);
var G__34728 = null;
var G__34729 = (0);
var G__34730 = (0);
seq__33846_34699 = G__34727;
chunk__33848_34700 = G__34728;
count__33849_34701 = G__34729;
i__33850_34702 = G__34730;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34697);
}


var G__34734 = seq__33757_34692;
var G__34735 = chunk__33758_34693;
var G__34736 = count__33759_34694;
var G__34737 = (i__33760_34695 + (1));
seq__33757_34692 = G__34734;
chunk__33758_34693 = G__34735;
count__33759_34694 = G__34736;
i__33760_34695 = G__34737;
continue;
} else {
var temp__5753__auto___34738 = cljs.core.seq(seq__33757_34692);
if(temp__5753__auto___34738){
var seq__33757_34739__$1 = temp__5753__auto___34738;
if(cljs.core.chunked_seq_QMARK_(seq__33757_34739__$1)){
var c__4679__auto___34740 = cljs.core.chunk_first(seq__33757_34739__$1);
var G__34741 = cljs.core.chunk_rest(seq__33757_34739__$1);
var G__34742 = c__4679__auto___34740;
var G__34743 = cljs.core.count(c__4679__auto___34740);
var G__34744 = (0);
seq__33757_34692 = G__34741;
chunk__33758_34693 = G__34742;
count__33759_34694 = G__34743;
i__33760_34695 = G__34744;
continue;
} else {
var child_struct_34747 = cljs.core.first(seq__33757_34739__$1);
var children_34748 = shadow.dom.dom_node(child_struct_34747);
if(cljs.core.seq_QMARK_(children_34748)){
var seq__33876_34750 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34748));
var chunk__33878_34751 = null;
var count__33879_34752 = (0);
var i__33880_34753 = (0);
while(true){
if((i__33880_34753 < count__33879_34752)){
var child_34754 = chunk__33878_34751.cljs$core$IIndexed$_nth$arity$2(null,i__33880_34753);
if(cljs.core.truth_(child_34754)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34754);


var G__34755 = seq__33876_34750;
var G__34756 = chunk__33878_34751;
var G__34757 = count__33879_34752;
var G__34758 = (i__33880_34753 + (1));
seq__33876_34750 = G__34755;
chunk__33878_34751 = G__34756;
count__33879_34752 = G__34757;
i__33880_34753 = G__34758;
continue;
} else {
var G__34759 = seq__33876_34750;
var G__34760 = chunk__33878_34751;
var G__34761 = count__33879_34752;
var G__34762 = (i__33880_34753 + (1));
seq__33876_34750 = G__34759;
chunk__33878_34751 = G__34760;
count__33879_34752 = G__34761;
i__33880_34753 = G__34762;
continue;
}
} else {
var temp__5753__auto___34763__$1 = cljs.core.seq(seq__33876_34750);
if(temp__5753__auto___34763__$1){
var seq__33876_34764__$1 = temp__5753__auto___34763__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33876_34764__$1)){
var c__4679__auto___34765 = cljs.core.chunk_first(seq__33876_34764__$1);
var G__34766 = cljs.core.chunk_rest(seq__33876_34764__$1);
var G__34767 = c__4679__auto___34765;
var G__34768 = cljs.core.count(c__4679__auto___34765);
var G__34769 = (0);
seq__33876_34750 = G__34766;
chunk__33878_34751 = G__34767;
count__33879_34752 = G__34768;
i__33880_34753 = G__34769;
continue;
} else {
var child_34771 = cljs.core.first(seq__33876_34764__$1);
if(cljs.core.truth_(child_34771)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34771);


var G__34772 = cljs.core.next(seq__33876_34764__$1);
var G__34773 = null;
var G__34774 = (0);
var G__34775 = (0);
seq__33876_34750 = G__34772;
chunk__33878_34751 = G__34773;
count__33879_34752 = G__34774;
i__33880_34753 = G__34775;
continue;
} else {
var G__34776 = cljs.core.next(seq__33876_34764__$1);
var G__34777 = null;
var G__34778 = (0);
var G__34779 = (0);
seq__33876_34750 = G__34776;
chunk__33878_34751 = G__34777;
count__33879_34752 = G__34778;
i__33880_34753 = G__34779;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34748);
}


var G__34780 = cljs.core.next(seq__33757_34739__$1);
var G__34781 = null;
var G__34782 = (0);
var G__34783 = (0);
seq__33757_34692 = G__34780;
chunk__33758_34693 = G__34781;
count__33759_34694 = G__34782;
i__33760_34695 = G__34783;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33903 = cljs.core.seq(node);
var chunk__33904 = null;
var count__33905 = (0);
var i__33906 = (0);
while(true){
if((i__33906 < count__33905)){
var n = chunk__33904.cljs$core$IIndexed$_nth$arity$2(null,i__33906);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34786 = seq__33903;
var G__34787 = chunk__33904;
var G__34788 = count__33905;
var G__34789 = (i__33906 + (1));
seq__33903 = G__34786;
chunk__33904 = G__34787;
count__33905 = G__34788;
i__33906 = G__34789;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33903);
if(temp__5753__auto__){
var seq__33903__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33903__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33903__$1);
var G__34790 = cljs.core.chunk_rest(seq__33903__$1);
var G__34791 = c__4679__auto__;
var G__34792 = cljs.core.count(c__4679__auto__);
var G__34793 = (0);
seq__33903 = G__34790;
chunk__33904 = G__34791;
count__33905 = G__34792;
i__33906 = G__34793;
continue;
} else {
var n = cljs.core.first(seq__33903__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34795 = cljs.core.next(seq__33903__$1);
var G__34796 = null;
var G__34797 = (0);
var G__34798 = (0);
seq__33903 = G__34795;
chunk__33904 = G__34796;
count__33905 = G__34797;
i__33906 = G__34798;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33944 = arguments.length;
switch (G__33944) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33958 = arguments.length;
switch (G__33958) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33994 = arguments.length;
switch (G__33994) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34813 = arguments.length;
var i__4865__auto___34814 = (0);
while(true){
if((i__4865__auto___34814 < len__4864__auto___34813)){
args__4870__auto__.push((arguments[i__4865__auto___34814]));

var G__34815 = (i__4865__auto___34814 + (1));
i__4865__auto___34814 = G__34815;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34046_34816 = cljs.core.seq(nodes);
var chunk__34047_34817 = null;
var count__34048_34818 = (0);
var i__34049_34819 = (0);
while(true){
if((i__34049_34819 < count__34048_34818)){
var node_34821 = chunk__34047_34817.cljs$core$IIndexed$_nth$arity$2(null,i__34049_34819);
fragment.appendChild(shadow.dom._to_dom(node_34821));


var G__34822 = seq__34046_34816;
var G__34823 = chunk__34047_34817;
var G__34824 = count__34048_34818;
var G__34825 = (i__34049_34819 + (1));
seq__34046_34816 = G__34822;
chunk__34047_34817 = G__34823;
count__34048_34818 = G__34824;
i__34049_34819 = G__34825;
continue;
} else {
var temp__5753__auto___34826 = cljs.core.seq(seq__34046_34816);
if(temp__5753__auto___34826){
var seq__34046_34827__$1 = temp__5753__auto___34826;
if(cljs.core.chunked_seq_QMARK_(seq__34046_34827__$1)){
var c__4679__auto___34828 = cljs.core.chunk_first(seq__34046_34827__$1);
var G__34829 = cljs.core.chunk_rest(seq__34046_34827__$1);
var G__34830 = c__4679__auto___34828;
var G__34831 = cljs.core.count(c__4679__auto___34828);
var G__34832 = (0);
seq__34046_34816 = G__34829;
chunk__34047_34817 = G__34830;
count__34048_34818 = G__34831;
i__34049_34819 = G__34832;
continue;
} else {
var node_34833 = cljs.core.first(seq__34046_34827__$1);
fragment.appendChild(shadow.dom._to_dom(node_34833));


var G__34834 = cljs.core.next(seq__34046_34827__$1);
var G__34835 = null;
var G__34836 = (0);
var G__34837 = (0);
seq__34046_34816 = G__34834;
chunk__34047_34817 = G__34835;
count__34048_34818 = G__34836;
i__34049_34819 = G__34837;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34038){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34038));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34056_34839 = cljs.core.seq(scripts);
var chunk__34057_34840 = null;
var count__34058_34841 = (0);
var i__34059_34842 = (0);
while(true){
if((i__34059_34842 < count__34058_34841)){
var vec__34070_34845 = chunk__34057_34840.cljs$core$IIndexed$_nth$arity$2(null,i__34059_34842);
var script_tag_34846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34070_34845,(0),null);
var script_body_34847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34070_34845,(1),null);
eval(script_body_34847);


var G__34856 = seq__34056_34839;
var G__34857 = chunk__34057_34840;
var G__34858 = count__34058_34841;
var G__34859 = (i__34059_34842 + (1));
seq__34056_34839 = G__34856;
chunk__34057_34840 = G__34857;
count__34058_34841 = G__34858;
i__34059_34842 = G__34859;
continue;
} else {
var temp__5753__auto___34861 = cljs.core.seq(seq__34056_34839);
if(temp__5753__auto___34861){
var seq__34056_34863__$1 = temp__5753__auto___34861;
if(cljs.core.chunked_seq_QMARK_(seq__34056_34863__$1)){
var c__4679__auto___34864 = cljs.core.chunk_first(seq__34056_34863__$1);
var G__34865 = cljs.core.chunk_rest(seq__34056_34863__$1);
var G__34866 = c__4679__auto___34864;
var G__34867 = cljs.core.count(c__4679__auto___34864);
var G__34868 = (0);
seq__34056_34839 = G__34865;
chunk__34057_34840 = G__34866;
count__34058_34841 = G__34867;
i__34059_34842 = G__34868;
continue;
} else {
var vec__34075_34869 = cljs.core.first(seq__34056_34863__$1);
var script_tag_34870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34075_34869,(0),null);
var script_body_34871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34075_34869,(1),null);
eval(script_body_34871);


var G__34872 = cljs.core.next(seq__34056_34863__$1);
var G__34873 = null;
var G__34874 = (0);
var G__34875 = (0);
seq__34056_34839 = G__34872;
chunk__34057_34840 = G__34873;
count__34058_34841 = G__34874;
i__34059_34842 = G__34875;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34079){
var vec__34080 = p__34079;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34080,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34080,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34096 = arguments.length;
switch (G__34096) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34108 = cljs.core.seq(style_keys);
var chunk__34109 = null;
var count__34110 = (0);
var i__34111 = (0);
while(true){
if((i__34111 < count__34110)){
var it = chunk__34109.cljs$core$IIndexed$_nth$arity$2(null,i__34111);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34883 = seq__34108;
var G__34884 = chunk__34109;
var G__34885 = count__34110;
var G__34886 = (i__34111 + (1));
seq__34108 = G__34883;
chunk__34109 = G__34884;
count__34110 = G__34885;
i__34111 = G__34886;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34108);
if(temp__5753__auto__){
var seq__34108__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34108__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34108__$1);
var G__34887 = cljs.core.chunk_rest(seq__34108__$1);
var G__34888 = c__4679__auto__;
var G__34889 = cljs.core.count(c__4679__auto__);
var G__34890 = (0);
seq__34108 = G__34887;
chunk__34109 = G__34888;
count__34110 = G__34889;
i__34111 = G__34890;
continue;
} else {
var it = cljs.core.first(seq__34108__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34891 = cljs.core.next(seq__34108__$1);
var G__34892 = null;
var G__34893 = (0);
var G__34894 = (0);
seq__34108 = G__34891;
chunk__34109 = G__34892;
count__34110 = G__34893;
i__34111 = G__34894;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34116,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34120 = k34116;
var G__34120__$1 = (((G__34120 instanceof cljs.core.Keyword))?G__34120.fqn:null);
switch (G__34120__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34116,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34121){
var vec__34122 = p__34121;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34122,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34122,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34115){
var self__ = this;
var G__34115__$1 = this;
return (new cljs.core.RecordIter((0),G__34115__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34117,other34118){
var self__ = this;
var this34117__$1 = this;
return (((!((other34118 == null)))) && ((((this34117__$1.constructor === other34118.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34117__$1.x,other34118.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34117__$1.y,other34118.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34117__$1.__extmap,other34118.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34116){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34128 = k34116;
var G__34128__$1 = (((G__34128 instanceof cljs.core.Keyword))?G__34128.fqn:null);
switch (G__34128__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34116);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34115){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34129 = cljs.core.keyword_identical_QMARK_;
var expr__34130 = k__4511__auto__;
if(cljs.core.truth_((pred__34129.cljs$core$IFn$_invoke$arity$2 ? pred__34129.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34130) : pred__34129.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34130)))){
return (new shadow.dom.Coordinate(G__34115,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34129.cljs$core$IFn$_invoke$arity$2 ? pred__34129.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34130) : pred__34129.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34130)))){
return (new shadow.dom.Coordinate(self__.x,G__34115,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34115),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34115){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34115,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34119){
var extmap__4542__auto__ = (function (){var G__34132 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34119,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34119)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34132);
} else {
return G__34132;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34119),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34119),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34134,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34146 = k34134;
var G__34146__$1 = (((G__34146 instanceof cljs.core.Keyword))?G__34146.fqn:null);
switch (G__34146__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34134,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34147){
var vec__34148 = p__34147;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34148,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34148,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34133){
var self__ = this;
var G__34133__$1 = this;
return (new cljs.core.RecordIter((0),G__34133__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34135,other34136){
var self__ = this;
var this34135__$1 = this;
return (((!((other34136 == null)))) && ((((this34135__$1.constructor === other34136.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34135__$1.w,other34136.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34135__$1.h,other34136.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34135__$1.__extmap,other34136.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34134){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34157 = k34134;
var G__34157__$1 = (((G__34157 instanceof cljs.core.Keyword))?G__34157.fqn:null);
switch (G__34157__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34134);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34133){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34158 = cljs.core.keyword_identical_QMARK_;
var expr__34159 = k__4511__auto__;
if(cljs.core.truth_((pred__34158.cljs$core$IFn$_invoke$arity$2 ? pred__34158.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34159) : pred__34158.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34159)))){
return (new shadow.dom.Size(G__34133,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34158.cljs$core$IFn$_invoke$arity$2 ? pred__34158.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34159) : pred__34158.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34159)))){
return (new shadow.dom.Size(self__.w,G__34133,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34133),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34133){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34133,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34137){
var extmap__4542__auto__ = (function (){var G__34176 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34137,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34137)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34176);
} else {
return G__34176;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34137),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34137),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__34919 = (i + (1));
var G__34920 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34919;
ret = G__34920;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34202){
var vec__34203 = p__34202;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34203,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34203,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34207 = arguments.length;
switch (G__34207) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34928 = ps;
var G__34929 = (i + (1));
el__$1 = G__34928;
i = G__34929;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34330 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34330,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34330,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34330,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34335_34938 = cljs.core.seq(props);
var chunk__34336_34939 = null;
var count__34337_34940 = (0);
var i__34338_34941 = (0);
while(true){
if((i__34338_34941 < count__34337_34940)){
var vec__34359_34943 = chunk__34336_34939.cljs$core$IIndexed$_nth$arity$2(null,i__34338_34941);
var k_34944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34359_34943,(0),null);
var v_34945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34359_34943,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34944);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34944),v_34945);


var G__34949 = seq__34335_34938;
var G__34950 = chunk__34336_34939;
var G__34951 = count__34337_34940;
var G__34952 = (i__34338_34941 + (1));
seq__34335_34938 = G__34949;
chunk__34336_34939 = G__34950;
count__34337_34940 = G__34951;
i__34338_34941 = G__34952;
continue;
} else {
var temp__5753__auto___34953 = cljs.core.seq(seq__34335_34938);
if(temp__5753__auto___34953){
var seq__34335_34954__$1 = temp__5753__auto___34953;
if(cljs.core.chunked_seq_QMARK_(seq__34335_34954__$1)){
var c__4679__auto___34955 = cljs.core.chunk_first(seq__34335_34954__$1);
var G__34956 = cljs.core.chunk_rest(seq__34335_34954__$1);
var G__34957 = c__4679__auto___34955;
var G__34958 = cljs.core.count(c__4679__auto___34955);
var G__34959 = (0);
seq__34335_34938 = G__34956;
chunk__34336_34939 = G__34957;
count__34337_34940 = G__34958;
i__34338_34941 = G__34959;
continue;
} else {
var vec__34383_34960 = cljs.core.first(seq__34335_34954__$1);
var k_34961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34383_34960,(0),null);
var v_34962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34383_34960,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34961);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34961),v_34962);


var G__34963 = cljs.core.next(seq__34335_34954__$1);
var G__34964 = null;
var G__34965 = (0);
var G__34966 = (0);
seq__34335_34938 = G__34963;
chunk__34336_34939 = G__34964;
count__34337_34940 = G__34965;
i__34338_34941 = G__34966;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34395 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34395,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34395,(1),null);
var seq__34398_34969 = cljs.core.seq(node_children);
var chunk__34400_34970 = null;
var count__34401_34971 = (0);
var i__34402_34972 = (0);
while(true){
if((i__34402_34972 < count__34401_34971)){
var child_struct_34973 = chunk__34400_34970.cljs$core$IIndexed$_nth$arity$2(null,i__34402_34972);
if((!((child_struct_34973 == null)))){
if(typeof child_struct_34973 === 'string'){
var text_34974 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34974),child_struct_34973].join(''));
} else {
var children_34975 = shadow.dom.svg_node(child_struct_34973);
if(cljs.core.seq_QMARK_(children_34975)){
var seq__34503_34976 = cljs.core.seq(children_34975);
var chunk__34505_34977 = null;
var count__34506_34978 = (0);
var i__34507_34979 = (0);
while(true){
if((i__34507_34979 < count__34506_34978)){
var child_34980 = chunk__34505_34977.cljs$core$IIndexed$_nth$arity$2(null,i__34507_34979);
if(cljs.core.truth_(child_34980)){
node.appendChild(child_34980);


var G__34981 = seq__34503_34976;
var G__34982 = chunk__34505_34977;
var G__34983 = count__34506_34978;
var G__34984 = (i__34507_34979 + (1));
seq__34503_34976 = G__34981;
chunk__34505_34977 = G__34982;
count__34506_34978 = G__34983;
i__34507_34979 = G__34984;
continue;
} else {
var G__34985 = seq__34503_34976;
var G__34986 = chunk__34505_34977;
var G__34987 = count__34506_34978;
var G__34988 = (i__34507_34979 + (1));
seq__34503_34976 = G__34985;
chunk__34505_34977 = G__34986;
count__34506_34978 = G__34987;
i__34507_34979 = G__34988;
continue;
}
} else {
var temp__5753__auto___34989 = cljs.core.seq(seq__34503_34976);
if(temp__5753__auto___34989){
var seq__34503_34990__$1 = temp__5753__auto___34989;
if(cljs.core.chunked_seq_QMARK_(seq__34503_34990__$1)){
var c__4679__auto___34991 = cljs.core.chunk_first(seq__34503_34990__$1);
var G__34992 = cljs.core.chunk_rest(seq__34503_34990__$1);
var G__34993 = c__4679__auto___34991;
var G__34994 = cljs.core.count(c__4679__auto___34991);
var G__34995 = (0);
seq__34503_34976 = G__34992;
chunk__34505_34977 = G__34993;
count__34506_34978 = G__34994;
i__34507_34979 = G__34995;
continue;
} else {
var child_34996 = cljs.core.first(seq__34503_34990__$1);
if(cljs.core.truth_(child_34996)){
node.appendChild(child_34996);


var G__34997 = cljs.core.next(seq__34503_34990__$1);
var G__34998 = null;
var G__34999 = (0);
var G__35000 = (0);
seq__34503_34976 = G__34997;
chunk__34505_34977 = G__34998;
count__34506_34978 = G__34999;
i__34507_34979 = G__35000;
continue;
} else {
var G__35001 = cljs.core.next(seq__34503_34990__$1);
var G__35002 = null;
var G__35003 = (0);
var G__35004 = (0);
seq__34503_34976 = G__35001;
chunk__34505_34977 = G__35002;
count__34506_34978 = G__35003;
i__34507_34979 = G__35004;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34975);
}
}


var G__35005 = seq__34398_34969;
var G__35006 = chunk__34400_34970;
var G__35007 = count__34401_34971;
var G__35008 = (i__34402_34972 + (1));
seq__34398_34969 = G__35005;
chunk__34400_34970 = G__35006;
count__34401_34971 = G__35007;
i__34402_34972 = G__35008;
continue;
} else {
var G__35009 = seq__34398_34969;
var G__35010 = chunk__34400_34970;
var G__35011 = count__34401_34971;
var G__35012 = (i__34402_34972 + (1));
seq__34398_34969 = G__35009;
chunk__34400_34970 = G__35010;
count__34401_34971 = G__35011;
i__34402_34972 = G__35012;
continue;
}
} else {
var temp__5753__auto___35013 = cljs.core.seq(seq__34398_34969);
if(temp__5753__auto___35013){
var seq__34398_35016__$1 = temp__5753__auto___35013;
if(cljs.core.chunked_seq_QMARK_(seq__34398_35016__$1)){
var c__4679__auto___35017 = cljs.core.chunk_first(seq__34398_35016__$1);
var G__35018 = cljs.core.chunk_rest(seq__34398_35016__$1);
var G__35019 = c__4679__auto___35017;
var G__35020 = cljs.core.count(c__4679__auto___35017);
var G__35021 = (0);
seq__34398_34969 = G__35018;
chunk__34400_34970 = G__35019;
count__34401_34971 = G__35020;
i__34402_34972 = G__35021;
continue;
} else {
var child_struct_35024 = cljs.core.first(seq__34398_35016__$1);
if((!((child_struct_35024 == null)))){
if(typeof child_struct_35024 === 'string'){
var text_35025 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35025),child_struct_35024].join(''));
} else {
var children_35026 = shadow.dom.svg_node(child_struct_35024);
if(cljs.core.seq_QMARK_(children_35026)){
var seq__34524_35027 = cljs.core.seq(children_35026);
var chunk__34526_35028 = null;
var count__34528_35029 = (0);
var i__34529_35030 = (0);
while(true){
if((i__34529_35030 < count__34528_35029)){
var child_35031 = chunk__34526_35028.cljs$core$IIndexed$_nth$arity$2(null,i__34529_35030);
if(cljs.core.truth_(child_35031)){
node.appendChild(child_35031);


var G__35032 = seq__34524_35027;
var G__35033 = chunk__34526_35028;
var G__35034 = count__34528_35029;
var G__35035 = (i__34529_35030 + (1));
seq__34524_35027 = G__35032;
chunk__34526_35028 = G__35033;
count__34528_35029 = G__35034;
i__34529_35030 = G__35035;
continue;
} else {
var G__35036 = seq__34524_35027;
var G__35037 = chunk__34526_35028;
var G__35038 = count__34528_35029;
var G__35039 = (i__34529_35030 + (1));
seq__34524_35027 = G__35036;
chunk__34526_35028 = G__35037;
count__34528_35029 = G__35038;
i__34529_35030 = G__35039;
continue;
}
} else {
var temp__5753__auto___35040__$1 = cljs.core.seq(seq__34524_35027);
if(temp__5753__auto___35040__$1){
var seq__34524_35041__$1 = temp__5753__auto___35040__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34524_35041__$1)){
var c__4679__auto___35042 = cljs.core.chunk_first(seq__34524_35041__$1);
var G__35043 = cljs.core.chunk_rest(seq__34524_35041__$1);
var G__35044 = c__4679__auto___35042;
var G__35045 = cljs.core.count(c__4679__auto___35042);
var G__35046 = (0);
seq__34524_35027 = G__35043;
chunk__34526_35028 = G__35044;
count__34528_35029 = G__35045;
i__34529_35030 = G__35046;
continue;
} else {
var child_35047 = cljs.core.first(seq__34524_35041__$1);
if(cljs.core.truth_(child_35047)){
node.appendChild(child_35047);


var G__35048 = cljs.core.next(seq__34524_35041__$1);
var G__35049 = null;
var G__35050 = (0);
var G__35051 = (0);
seq__34524_35027 = G__35048;
chunk__34526_35028 = G__35049;
count__34528_35029 = G__35050;
i__34529_35030 = G__35051;
continue;
} else {
var G__35052 = cljs.core.next(seq__34524_35041__$1);
var G__35053 = null;
var G__35054 = (0);
var G__35055 = (0);
seq__34524_35027 = G__35052;
chunk__34526_35028 = G__35053;
count__34528_35029 = G__35054;
i__34529_35030 = G__35055;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35026);
}
}


var G__35056 = cljs.core.next(seq__34398_35016__$1);
var G__35057 = null;
var G__35058 = (0);
var G__35059 = (0);
seq__34398_34969 = G__35056;
chunk__34400_34970 = G__35057;
count__34401_34971 = G__35058;
i__34402_34972 = G__35059;
continue;
} else {
var G__35060 = cljs.core.next(seq__34398_35016__$1);
var G__35061 = null;
var G__35062 = (0);
var G__35063 = (0);
seq__34398_34969 = G__35060;
chunk__34400_34970 = G__35061;
count__34401_34971 = G__35062;
i__34402_34972 = G__35063;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35073 = arguments.length;
var i__4865__auto___35075 = (0);
while(true){
if((i__4865__auto___35075 < len__4864__auto___35073)){
args__4870__auto__.push((arguments[i__4865__auto___35075]));

var G__35076 = (i__4865__auto___35075 + (1));
i__4865__auto___35075 = G__35076;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34542){
var G__34543 = cljs.core.first(seq34542);
var seq34542__$1 = cljs.core.next(seq34542);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34543,seq34542__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34552 = arguments.length;
switch (G__34552) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__29368__auto___35082 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29369__auto__ = (function (){var switch__28543__auto__ = (function (state_34561){
var state_val_34562 = (state_34561[(1)]);
if((state_val_34562 === (1))){
var state_34561__$1 = state_34561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34561__$1,(2),once_or_cleanup);
} else {
if((state_val_34562 === (2))){
var inst_34558 = (state_34561[(2)]);
var inst_34559 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34561__$1 = (function (){var statearr_34563 = state_34561;
(statearr_34563[(7)] = inst_34558);

return statearr_34563;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34561__$1,inst_34559);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28544__auto__ = null;
var shadow$dom$state_machine__28544__auto____0 = (function (){
var statearr_34565 = [null,null,null,null,null,null,null,null];
(statearr_34565[(0)] = shadow$dom$state_machine__28544__auto__);

(statearr_34565[(1)] = (1));

return statearr_34565;
});
var shadow$dom$state_machine__28544__auto____1 = (function (state_34561){
while(true){
var ret_value__28545__auto__ = (function (){try{while(true){
var result__28546__auto__ = switch__28543__auto__(state_34561);
if(cljs.core.keyword_identical_QMARK_(result__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28546__auto__;
}
break;
}
}catch (e34569){var ex__28547__auto__ = e34569;
var statearr_34571_35086 = state_34561;
(statearr_34571_35086[(2)] = ex__28547__auto__);


if(cljs.core.seq((state_34561[(4)]))){
var statearr_34572_35087 = state_34561;
(statearr_34572_35087[(1)] = cljs.core.first((state_34561[(4)])));

} else {
throw ex__28547__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35088 = state_34561;
state_34561 = G__35088;
continue;
} else {
return ret_value__28545__auto__;
}
break;
}
});
shadow$dom$state_machine__28544__auto__ = function(state_34561){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28544__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28544__auto____1.call(this,state_34561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28544__auto____0;
shadow$dom$state_machine__28544__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28544__auto____1;
return shadow$dom$state_machine__28544__auto__;
})()
})();
var state__29370__auto__ = (function (){var statearr_34576 = f__29369__auto__();
(statearr_34576[(6)] = c__29368__auto___35082);

return statearr_34576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29370__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
