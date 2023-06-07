goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_40664 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_40664(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_40677 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_40677(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__39261 = coll;
var G__39262 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__39261,G__39262) : shadow.dom.lazy_native_coll_seq.call(null,G__39261,G__39262));
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
var G__39350 = arguments.length;
switch (G__39350) {
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
var G__39380 = arguments.length;
switch (G__39380) {
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
var G__39402 = arguments.length;
switch (G__39402) {
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
var G__39428 = arguments.length;
switch (G__39428) {
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
var G__39471 = arguments.length;
switch (G__39471) {
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
var G__39514 = arguments.length;
switch (G__39514) {
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
}catch (e39531){if((e39531 instanceof Object)){
var e = e39531;
return console.log("didnt support attachEvent",el,e);
} else {
throw e39531;

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
var seq__39545 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__39546 = null;
var count__39547 = (0);
var i__39548 = (0);
while(true){
if((i__39548 < count__39547)){
var el = chunk__39546.cljs$core$IIndexed$_nth$arity$2(null,i__39548);
var handler_40687__$1 = ((function (seq__39545,chunk__39546,count__39547,i__39548,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39545,chunk__39546,count__39547,i__39548,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40687__$1);


var G__40688 = seq__39545;
var G__40689 = chunk__39546;
var G__40690 = count__39547;
var G__40691 = (i__39548 + (1));
seq__39545 = G__40688;
chunk__39546 = G__40689;
count__39547 = G__40690;
i__39548 = G__40691;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39545);
if(temp__5753__auto__){
var seq__39545__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39545__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39545__$1);
var G__40692 = cljs.core.chunk_rest(seq__39545__$1);
var G__40693 = c__4679__auto__;
var G__40694 = cljs.core.count(c__4679__auto__);
var G__40695 = (0);
seq__39545 = G__40692;
chunk__39546 = G__40693;
count__39547 = G__40694;
i__39548 = G__40695;
continue;
} else {
var el = cljs.core.first(seq__39545__$1);
var handler_40696__$1 = ((function (seq__39545,chunk__39546,count__39547,i__39548,el,seq__39545__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39545,chunk__39546,count__39547,i__39548,el,seq__39545__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40696__$1);


var G__40697 = cljs.core.next(seq__39545__$1);
var G__40698 = null;
var G__40699 = (0);
var G__40700 = (0);
seq__39545 = G__40697;
chunk__39546 = G__40698;
count__39547 = G__40699;
i__39548 = G__40700;
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
var G__39587 = arguments.length;
switch (G__39587) {
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
var seq__39604 = cljs.core.seq(events);
var chunk__39605 = null;
var count__39606 = (0);
var i__39607 = (0);
while(true){
if((i__39607 < count__39606)){
var vec__39618 = chunk__39605.cljs$core$IIndexed$_nth$arity$2(null,i__39607);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39618,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39618,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40702 = seq__39604;
var G__40703 = chunk__39605;
var G__40704 = count__39606;
var G__40705 = (i__39607 + (1));
seq__39604 = G__40702;
chunk__39605 = G__40703;
count__39606 = G__40704;
i__39607 = G__40705;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39604);
if(temp__5753__auto__){
var seq__39604__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39604__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39604__$1);
var G__40706 = cljs.core.chunk_rest(seq__39604__$1);
var G__40707 = c__4679__auto__;
var G__40708 = cljs.core.count(c__4679__auto__);
var G__40709 = (0);
seq__39604 = G__40706;
chunk__39605 = G__40707;
count__39606 = G__40708;
i__39607 = G__40709;
continue;
} else {
var vec__39623 = cljs.core.first(seq__39604__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39623,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39623,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40710 = cljs.core.next(seq__39604__$1);
var G__40711 = null;
var G__40712 = (0);
var G__40713 = (0);
seq__39604 = G__40710;
chunk__39605 = G__40711;
count__39606 = G__40712;
i__39607 = G__40713;
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
var seq__39629 = cljs.core.seq(styles);
var chunk__39630 = null;
var count__39631 = (0);
var i__39632 = (0);
while(true){
if((i__39632 < count__39631)){
var vec__39646 = chunk__39630.cljs$core$IIndexed$_nth$arity$2(null,i__39632);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39646,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39646,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40714 = seq__39629;
var G__40715 = chunk__39630;
var G__40716 = count__39631;
var G__40717 = (i__39632 + (1));
seq__39629 = G__40714;
chunk__39630 = G__40715;
count__39631 = G__40716;
i__39632 = G__40717;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39629);
if(temp__5753__auto__){
var seq__39629__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39629__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39629__$1);
var G__40718 = cljs.core.chunk_rest(seq__39629__$1);
var G__40719 = c__4679__auto__;
var G__40720 = cljs.core.count(c__4679__auto__);
var G__40721 = (0);
seq__39629 = G__40718;
chunk__39630 = G__40719;
count__39631 = G__40720;
i__39632 = G__40721;
continue;
} else {
var vec__39653 = cljs.core.first(seq__39629__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39653,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39653,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40722 = cljs.core.next(seq__39629__$1);
var G__40723 = null;
var G__40724 = (0);
var G__40725 = (0);
seq__39629 = G__40722;
chunk__39630 = G__40723;
count__39631 = G__40724;
i__39632 = G__40725;
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
var G__39660_40726 = key;
var G__39660_40727__$1 = (((G__39660_40726 instanceof cljs.core.Keyword))?G__39660_40726.fqn:null);
switch (G__39660_40727__$1) {
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
var ks_40729 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_40729,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_40729,"aria-");
}
})())){
el.setAttribute(ks_40729,value);
} else {
(el[ks_40729] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__39704){
var map__39705 = p__39704;
var map__39705__$1 = cljs.core.__destructure_map(map__39705);
var props = map__39705__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39705__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__39709 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39709,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39709,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39709,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__39713 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__39713,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__39713;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__39716 = arguments.length;
switch (G__39716) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__39728){
var vec__39729 = p__39728;
var seq__39730 = cljs.core.seq(vec__39729);
var first__39731 = cljs.core.first(seq__39730);
var seq__39730__$1 = cljs.core.next(seq__39730);
var nn = first__39731;
var first__39731__$1 = cljs.core.first(seq__39730__$1);
var seq__39730__$2 = cljs.core.next(seq__39730__$1);
var np = first__39731__$1;
var nc = seq__39730__$2;
var node = vec__39729;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39739 = nn;
var G__39740 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39739,G__39740) : create_fn.call(null,G__39739,G__39740));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39741 = nn;
var G__39742 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39741,G__39742) : create_fn.call(null,G__39741,G__39742));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__39743 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39743,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39743,(1),null);
var seq__39746_40731 = cljs.core.seq(node_children);
var chunk__39747_40732 = null;
var count__39748_40733 = (0);
var i__39749_40734 = (0);
while(true){
if((i__39749_40734 < count__39748_40733)){
var child_struct_40735 = chunk__39747_40732.cljs$core$IIndexed$_nth$arity$2(null,i__39749_40734);
var children_40736 = shadow.dom.dom_node(child_struct_40735);
if(cljs.core.seq_QMARK_(children_40736)){
var seq__39782_40737 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40736));
var chunk__39784_40738 = null;
var count__39785_40739 = (0);
var i__39786_40740 = (0);
while(true){
if((i__39786_40740 < count__39785_40739)){
var child_40741 = chunk__39784_40738.cljs$core$IIndexed$_nth$arity$2(null,i__39786_40740);
if(cljs.core.truth_(child_40741)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40741);


var G__40742 = seq__39782_40737;
var G__40743 = chunk__39784_40738;
var G__40744 = count__39785_40739;
var G__40745 = (i__39786_40740 + (1));
seq__39782_40737 = G__40742;
chunk__39784_40738 = G__40743;
count__39785_40739 = G__40744;
i__39786_40740 = G__40745;
continue;
} else {
var G__40746 = seq__39782_40737;
var G__40747 = chunk__39784_40738;
var G__40748 = count__39785_40739;
var G__40749 = (i__39786_40740 + (1));
seq__39782_40737 = G__40746;
chunk__39784_40738 = G__40747;
count__39785_40739 = G__40748;
i__39786_40740 = G__40749;
continue;
}
} else {
var temp__5753__auto___40750 = cljs.core.seq(seq__39782_40737);
if(temp__5753__auto___40750){
var seq__39782_40751__$1 = temp__5753__auto___40750;
if(cljs.core.chunked_seq_QMARK_(seq__39782_40751__$1)){
var c__4679__auto___40753 = cljs.core.chunk_first(seq__39782_40751__$1);
var G__40754 = cljs.core.chunk_rest(seq__39782_40751__$1);
var G__40755 = c__4679__auto___40753;
var G__40756 = cljs.core.count(c__4679__auto___40753);
var G__40757 = (0);
seq__39782_40737 = G__40754;
chunk__39784_40738 = G__40755;
count__39785_40739 = G__40756;
i__39786_40740 = G__40757;
continue;
} else {
var child_40758 = cljs.core.first(seq__39782_40751__$1);
if(cljs.core.truth_(child_40758)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40758);


var G__40759 = cljs.core.next(seq__39782_40751__$1);
var G__40760 = null;
var G__40761 = (0);
var G__40762 = (0);
seq__39782_40737 = G__40759;
chunk__39784_40738 = G__40760;
count__39785_40739 = G__40761;
i__39786_40740 = G__40762;
continue;
} else {
var G__40763 = cljs.core.next(seq__39782_40751__$1);
var G__40764 = null;
var G__40765 = (0);
var G__40766 = (0);
seq__39782_40737 = G__40763;
chunk__39784_40738 = G__40764;
count__39785_40739 = G__40765;
i__39786_40740 = G__40766;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40736);
}


var G__40768 = seq__39746_40731;
var G__40769 = chunk__39747_40732;
var G__40770 = count__39748_40733;
var G__40771 = (i__39749_40734 + (1));
seq__39746_40731 = G__40768;
chunk__39747_40732 = G__40769;
count__39748_40733 = G__40770;
i__39749_40734 = G__40771;
continue;
} else {
var temp__5753__auto___40772 = cljs.core.seq(seq__39746_40731);
if(temp__5753__auto___40772){
var seq__39746_40773__$1 = temp__5753__auto___40772;
if(cljs.core.chunked_seq_QMARK_(seq__39746_40773__$1)){
var c__4679__auto___40774 = cljs.core.chunk_first(seq__39746_40773__$1);
var G__40775 = cljs.core.chunk_rest(seq__39746_40773__$1);
var G__40776 = c__4679__auto___40774;
var G__40777 = cljs.core.count(c__4679__auto___40774);
var G__40778 = (0);
seq__39746_40731 = G__40775;
chunk__39747_40732 = G__40776;
count__39748_40733 = G__40777;
i__39749_40734 = G__40778;
continue;
} else {
var child_struct_40779 = cljs.core.first(seq__39746_40773__$1);
var children_40780 = shadow.dom.dom_node(child_struct_40779);
if(cljs.core.seq_QMARK_(children_40780)){
var seq__39823_40781 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40780));
var chunk__39825_40782 = null;
var count__39826_40783 = (0);
var i__39827_40784 = (0);
while(true){
if((i__39827_40784 < count__39826_40783)){
var child_40785 = chunk__39825_40782.cljs$core$IIndexed$_nth$arity$2(null,i__39827_40784);
if(cljs.core.truth_(child_40785)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40785);


var G__40786 = seq__39823_40781;
var G__40787 = chunk__39825_40782;
var G__40788 = count__39826_40783;
var G__40789 = (i__39827_40784 + (1));
seq__39823_40781 = G__40786;
chunk__39825_40782 = G__40787;
count__39826_40783 = G__40788;
i__39827_40784 = G__40789;
continue;
} else {
var G__40790 = seq__39823_40781;
var G__40791 = chunk__39825_40782;
var G__40792 = count__39826_40783;
var G__40793 = (i__39827_40784 + (1));
seq__39823_40781 = G__40790;
chunk__39825_40782 = G__40791;
count__39826_40783 = G__40792;
i__39827_40784 = G__40793;
continue;
}
} else {
var temp__5753__auto___40794__$1 = cljs.core.seq(seq__39823_40781);
if(temp__5753__auto___40794__$1){
var seq__39823_40795__$1 = temp__5753__auto___40794__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39823_40795__$1)){
var c__4679__auto___40796 = cljs.core.chunk_first(seq__39823_40795__$1);
var G__40797 = cljs.core.chunk_rest(seq__39823_40795__$1);
var G__40798 = c__4679__auto___40796;
var G__40799 = cljs.core.count(c__4679__auto___40796);
var G__40800 = (0);
seq__39823_40781 = G__40797;
chunk__39825_40782 = G__40798;
count__39826_40783 = G__40799;
i__39827_40784 = G__40800;
continue;
} else {
var child_40801 = cljs.core.first(seq__39823_40795__$1);
if(cljs.core.truth_(child_40801)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40801);


var G__40802 = cljs.core.next(seq__39823_40795__$1);
var G__40803 = null;
var G__40804 = (0);
var G__40805 = (0);
seq__39823_40781 = G__40802;
chunk__39825_40782 = G__40803;
count__39826_40783 = G__40804;
i__39827_40784 = G__40805;
continue;
} else {
var G__40806 = cljs.core.next(seq__39823_40795__$1);
var G__40807 = null;
var G__40808 = (0);
var G__40809 = (0);
seq__39823_40781 = G__40806;
chunk__39825_40782 = G__40807;
count__39826_40783 = G__40808;
i__39827_40784 = G__40809;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40780);
}


var G__40810 = cljs.core.next(seq__39746_40773__$1);
var G__40811 = null;
var G__40812 = (0);
var G__40813 = (0);
seq__39746_40731 = G__40810;
chunk__39747_40732 = G__40811;
count__39748_40733 = G__40812;
i__39749_40734 = G__40813;
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
var seq__39883 = cljs.core.seq(node);
var chunk__39884 = null;
var count__39885 = (0);
var i__39886 = (0);
while(true){
if((i__39886 < count__39885)){
var n = chunk__39884.cljs$core$IIndexed$_nth$arity$2(null,i__39886);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40814 = seq__39883;
var G__40815 = chunk__39884;
var G__40816 = count__39885;
var G__40817 = (i__39886 + (1));
seq__39883 = G__40814;
chunk__39884 = G__40815;
count__39885 = G__40816;
i__39886 = G__40817;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39883);
if(temp__5753__auto__){
var seq__39883__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39883__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39883__$1);
var G__40818 = cljs.core.chunk_rest(seq__39883__$1);
var G__40819 = c__4679__auto__;
var G__40820 = cljs.core.count(c__4679__auto__);
var G__40821 = (0);
seq__39883 = G__40818;
chunk__39884 = G__40819;
count__39885 = G__40820;
i__39886 = G__40821;
continue;
} else {
var n = cljs.core.first(seq__39883__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40822 = cljs.core.next(seq__39883__$1);
var G__40823 = null;
var G__40824 = (0);
var G__40825 = (0);
seq__39883 = G__40822;
chunk__39884 = G__40823;
count__39885 = G__40824;
i__39886 = G__40825;
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
var G__39979 = arguments.length;
switch (G__39979) {
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
var G__39991 = arguments.length;
switch (G__39991) {
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
var G__40027 = arguments.length;
switch (G__40027) {
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
var len__4864__auto___40834 = arguments.length;
var i__4865__auto___40835 = (0);
while(true){
if((i__4865__auto___40835 < len__4864__auto___40834)){
args__4870__auto__.push((arguments[i__4865__auto___40835]));

var G__40836 = (i__4865__auto___40835 + (1));
i__4865__auto___40835 = G__40836;
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
var seq__40076_40837 = cljs.core.seq(nodes);
var chunk__40077_40838 = null;
var count__40078_40839 = (0);
var i__40079_40840 = (0);
while(true){
if((i__40079_40840 < count__40078_40839)){
var node_40841 = chunk__40077_40838.cljs$core$IIndexed$_nth$arity$2(null,i__40079_40840);
fragment.appendChild(shadow.dom._to_dom(node_40841));


var G__40842 = seq__40076_40837;
var G__40843 = chunk__40077_40838;
var G__40844 = count__40078_40839;
var G__40845 = (i__40079_40840 + (1));
seq__40076_40837 = G__40842;
chunk__40077_40838 = G__40843;
count__40078_40839 = G__40844;
i__40079_40840 = G__40845;
continue;
} else {
var temp__5753__auto___40846 = cljs.core.seq(seq__40076_40837);
if(temp__5753__auto___40846){
var seq__40076_40847__$1 = temp__5753__auto___40846;
if(cljs.core.chunked_seq_QMARK_(seq__40076_40847__$1)){
var c__4679__auto___40848 = cljs.core.chunk_first(seq__40076_40847__$1);
var G__40849 = cljs.core.chunk_rest(seq__40076_40847__$1);
var G__40850 = c__4679__auto___40848;
var G__40851 = cljs.core.count(c__4679__auto___40848);
var G__40852 = (0);
seq__40076_40837 = G__40849;
chunk__40077_40838 = G__40850;
count__40078_40839 = G__40851;
i__40079_40840 = G__40852;
continue;
} else {
var node_40853 = cljs.core.first(seq__40076_40847__$1);
fragment.appendChild(shadow.dom._to_dom(node_40853));


var G__40854 = cljs.core.next(seq__40076_40847__$1);
var G__40855 = null;
var G__40856 = (0);
var G__40857 = (0);
seq__40076_40837 = G__40854;
chunk__40077_40838 = G__40855;
count__40078_40839 = G__40856;
i__40079_40840 = G__40857;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq40065){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40065));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__40104_40858 = cljs.core.seq(scripts);
var chunk__40105_40859 = null;
var count__40106_40860 = (0);
var i__40107_40861 = (0);
while(true){
if((i__40107_40861 < count__40106_40860)){
var vec__40133_40862 = chunk__40105_40859.cljs$core$IIndexed$_nth$arity$2(null,i__40107_40861);
var script_tag_40863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40133_40862,(0),null);
var script_body_40864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40133_40862,(1),null);
eval(script_body_40864);


var G__40865 = seq__40104_40858;
var G__40866 = chunk__40105_40859;
var G__40867 = count__40106_40860;
var G__40868 = (i__40107_40861 + (1));
seq__40104_40858 = G__40865;
chunk__40105_40859 = G__40866;
count__40106_40860 = G__40867;
i__40107_40861 = G__40868;
continue;
} else {
var temp__5753__auto___40869 = cljs.core.seq(seq__40104_40858);
if(temp__5753__auto___40869){
var seq__40104_40871__$1 = temp__5753__auto___40869;
if(cljs.core.chunked_seq_QMARK_(seq__40104_40871__$1)){
var c__4679__auto___40872 = cljs.core.chunk_first(seq__40104_40871__$1);
var G__40873 = cljs.core.chunk_rest(seq__40104_40871__$1);
var G__40874 = c__4679__auto___40872;
var G__40875 = cljs.core.count(c__4679__auto___40872);
var G__40876 = (0);
seq__40104_40858 = G__40873;
chunk__40105_40859 = G__40874;
count__40106_40860 = G__40875;
i__40107_40861 = G__40876;
continue;
} else {
var vec__40144_40878 = cljs.core.first(seq__40104_40871__$1);
var script_tag_40879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40144_40878,(0),null);
var script_body_40880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40144_40878,(1),null);
eval(script_body_40880);


var G__40881 = cljs.core.next(seq__40104_40871__$1);
var G__40882 = null;
var G__40883 = (0);
var G__40884 = (0);
seq__40104_40858 = G__40881;
chunk__40105_40859 = G__40882;
count__40106_40860 = G__40883;
i__40107_40861 = G__40884;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__40147){
var vec__40148 = p__40147;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40148,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40148,(1),null);
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
var G__40164 = arguments.length;
switch (G__40164) {
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
var seq__40291 = cljs.core.seq(style_keys);
var chunk__40292 = null;
var count__40293 = (0);
var i__40294 = (0);
while(true){
if((i__40294 < count__40293)){
var it = chunk__40292.cljs$core$IIndexed$_nth$arity$2(null,i__40294);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40890 = seq__40291;
var G__40891 = chunk__40292;
var G__40892 = count__40293;
var G__40893 = (i__40294 + (1));
seq__40291 = G__40890;
chunk__40292 = G__40891;
count__40293 = G__40892;
i__40294 = G__40893;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40291);
if(temp__5753__auto__){
var seq__40291__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40291__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__40291__$1);
var G__40895 = cljs.core.chunk_rest(seq__40291__$1);
var G__40896 = c__4679__auto__;
var G__40897 = cljs.core.count(c__4679__auto__);
var G__40898 = (0);
seq__40291 = G__40895;
chunk__40292 = G__40896;
count__40293 = G__40897;
i__40294 = G__40898;
continue;
} else {
var it = cljs.core.first(seq__40291__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40899 = cljs.core.next(seq__40291__$1);
var G__40900 = null;
var G__40901 = (0);
var G__40902 = (0);
seq__40291 = G__40899;
chunk__40292 = G__40900;
count__40293 = G__40901;
i__40294 = G__40902;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k40315,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__40338 = k40315;
var G__40338__$1 = (((G__40338 instanceof cljs.core.Keyword))?G__40338.fqn:null);
switch (G__40338__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40315,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__40351){
var vec__40352 = p__40351;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40352,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40352,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40314){
var self__ = this;
var G__40314__$1 = this;
return (new cljs.core.RecordIter((0),G__40314__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40316,other40317){
var self__ = this;
var this40316__$1 = this;
return (((!((other40317 == null)))) && ((((this40316__$1.constructor === other40317.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40316__$1.x,other40317.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40316__$1.y,other40317.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40316__$1.__extmap,other40317.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k40315){
var self__ = this;
var this__4509__auto____$1 = this;
var G__40387 = k40315;
var G__40387__$1 = (((G__40387 instanceof cljs.core.Keyword))?G__40387.fqn:null);
switch (G__40387__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40315);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__40314){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__40395 = cljs.core.keyword_identical_QMARK_;
var expr__40396 = k__4511__auto__;
if(cljs.core.truth_((pred__40395.cljs$core$IFn$_invoke$arity$2 ? pred__40395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__40396) : pred__40395.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__40396)))){
return (new shadow.dom.Coordinate(G__40314,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40395.cljs$core$IFn$_invoke$arity$2 ? pred__40395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__40396) : pred__40395.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__40396)))){
return (new shadow.dom.Coordinate(self__.x,G__40314,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__40314),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__40314){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__40314,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__40322){
var extmap__4542__auto__ = (function (){var G__40398 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40322,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__40322)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40398);
} else {
return G__40398;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__40322),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__40322),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k40410,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__40416 = k40410;
var G__40416__$1 = (((G__40416 instanceof cljs.core.Keyword))?G__40416.fqn:null);
switch (G__40416__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40410,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__40417){
var vec__40418 = p__40417;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40418,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40418,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40409){
var self__ = this;
var G__40409__$1 = this;
return (new cljs.core.RecordIter((0),G__40409__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40411,other40412){
var self__ = this;
var this40411__$1 = this;
return (((!((other40412 == null)))) && ((((this40411__$1.constructor === other40412.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40411__$1.w,other40412.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40411__$1.h,other40412.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40411__$1.__extmap,other40412.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k40410){
var self__ = this;
var this__4509__auto____$1 = this;
var G__40429 = k40410;
var G__40429__$1 = (((G__40429 instanceof cljs.core.Keyword))?G__40429.fqn:null);
switch (G__40429__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40410);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__40409){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__40431 = cljs.core.keyword_identical_QMARK_;
var expr__40432 = k__4511__auto__;
if(cljs.core.truth_((pred__40431.cljs$core$IFn$_invoke$arity$2 ? pred__40431.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__40432) : pred__40431.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__40432)))){
return (new shadow.dom.Size(G__40409,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40431.cljs$core$IFn$_invoke$arity$2 ? pred__40431.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__40432) : pred__40431.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__40432)))){
return (new shadow.dom.Size(self__.w,G__40409,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__40409),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__40409){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__40409,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__40413){
var extmap__4542__auto__ = (function (){var G__40441 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40413,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__40413)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40441);
} else {
return G__40441;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__40413),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__40413),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var G__40931 = (i + (1));
var G__40932 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__40931;
ret = G__40932;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40467){
var vec__40468 = p__40467;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40468,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40468,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__40472 = arguments.length;
switch (G__40472) {
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
var G__40942 = ps;
var G__40943 = (i + (1));
el__$1 = G__40942;
i = G__40943;
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
var vec__40491 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40491,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40491,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40491,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__40494_40944 = cljs.core.seq(props);
var chunk__40495_40945 = null;
var count__40496_40946 = (0);
var i__40497_40947 = (0);
while(true){
if((i__40497_40947 < count__40496_40946)){
var vec__40506_40948 = chunk__40495_40945.cljs$core$IIndexed$_nth$arity$2(null,i__40497_40947);
var k_40949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40506_40948,(0),null);
var v_40950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40506_40948,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_40949);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40949),v_40950);


var G__40953 = seq__40494_40944;
var G__40954 = chunk__40495_40945;
var G__40955 = count__40496_40946;
var G__40956 = (i__40497_40947 + (1));
seq__40494_40944 = G__40953;
chunk__40495_40945 = G__40954;
count__40496_40946 = G__40955;
i__40497_40947 = G__40956;
continue;
} else {
var temp__5753__auto___40957 = cljs.core.seq(seq__40494_40944);
if(temp__5753__auto___40957){
var seq__40494_40958__$1 = temp__5753__auto___40957;
if(cljs.core.chunked_seq_QMARK_(seq__40494_40958__$1)){
var c__4679__auto___40959 = cljs.core.chunk_first(seq__40494_40958__$1);
var G__40960 = cljs.core.chunk_rest(seq__40494_40958__$1);
var G__40961 = c__4679__auto___40959;
var G__40962 = cljs.core.count(c__4679__auto___40959);
var G__40963 = (0);
seq__40494_40944 = G__40960;
chunk__40495_40945 = G__40961;
count__40496_40946 = G__40962;
i__40497_40947 = G__40963;
continue;
} else {
var vec__40511_40964 = cljs.core.first(seq__40494_40958__$1);
var k_40965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40511_40964,(0),null);
var v_40966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40511_40964,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_40965);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40965),v_40966);


var G__40968 = cljs.core.next(seq__40494_40958__$1);
var G__40969 = null;
var G__40970 = (0);
var G__40971 = (0);
seq__40494_40944 = G__40968;
chunk__40495_40945 = G__40969;
count__40496_40946 = G__40970;
i__40497_40947 = G__40971;
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
var vec__40522 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40522,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40522,(1),null);
var seq__40525_40976 = cljs.core.seq(node_children);
var chunk__40527_40977 = null;
var count__40528_40978 = (0);
var i__40529_40979 = (0);
while(true){
if((i__40529_40979 < count__40528_40978)){
var child_struct_40980 = chunk__40527_40977.cljs$core$IIndexed$_nth$arity$2(null,i__40529_40979);
if((!((child_struct_40980 == null)))){
if(typeof child_struct_40980 === 'string'){
var text_40982 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40982),child_struct_40980].join(''));
} else {
var children_40983 = shadow.dom.svg_node(child_struct_40980);
if(cljs.core.seq_QMARK_(children_40983)){
var seq__40564_40984 = cljs.core.seq(children_40983);
var chunk__40566_40985 = null;
var count__40567_40986 = (0);
var i__40568_40987 = (0);
while(true){
if((i__40568_40987 < count__40567_40986)){
var child_40989 = chunk__40566_40985.cljs$core$IIndexed$_nth$arity$2(null,i__40568_40987);
if(cljs.core.truth_(child_40989)){
node.appendChild(child_40989);


var G__40990 = seq__40564_40984;
var G__40991 = chunk__40566_40985;
var G__40992 = count__40567_40986;
var G__40993 = (i__40568_40987 + (1));
seq__40564_40984 = G__40990;
chunk__40566_40985 = G__40991;
count__40567_40986 = G__40992;
i__40568_40987 = G__40993;
continue;
} else {
var G__40994 = seq__40564_40984;
var G__40995 = chunk__40566_40985;
var G__40996 = count__40567_40986;
var G__40997 = (i__40568_40987 + (1));
seq__40564_40984 = G__40994;
chunk__40566_40985 = G__40995;
count__40567_40986 = G__40996;
i__40568_40987 = G__40997;
continue;
}
} else {
var temp__5753__auto___40998 = cljs.core.seq(seq__40564_40984);
if(temp__5753__auto___40998){
var seq__40564_40999__$1 = temp__5753__auto___40998;
if(cljs.core.chunked_seq_QMARK_(seq__40564_40999__$1)){
var c__4679__auto___41000 = cljs.core.chunk_first(seq__40564_40999__$1);
var G__41001 = cljs.core.chunk_rest(seq__40564_40999__$1);
var G__41002 = c__4679__auto___41000;
var G__41003 = cljs.core.count(c__4679__auto___41000);
var G__41004 = (0);
seq__40564_40984 = G__41001;
chunk__40566_40985 = G__41002;
count__40567_40986 = G__41003;
i__40568_40987 = G__41004;
continue;
} else {
var child_41005 = cljs.core.first(seq__40564_40999__$1);
if(cljs.core.truth_(child_41005)){
node.appendChild(child_41005);


var G__41006 = cljs.core.next(seq__40564_40999__$1);
var G__41007 = null;
var G__41008 = (0);
var G__41009 = (0);
seq__40564_40984 = G__41006;
chunk__40566_40985 = G__41007;
count__40567_40986 = G__41008;
i__40568_40987 = G__41009;
continue;
} else {
var G__41010 = cljs.core.next(seq__40564_40999__$1);
var G__41011 = null;
var G__41012 = (0);
var G__41013 = (0);
seq__40564_40984 = G__41010;
chunk__40566_40985 = G__41011;
count__40567_40986 = G__41012;
i__40568_40987 = G__41013;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40983);
}
}


var G__41014 = seq__40525_40976;
var G__41015 = chunk__40527_40977;
var G__41016 = count__40528_40978;
var G__41017 = (i__40529_40979 + (1));
seq__40525_40976 = G__41014;
chunk__40527_40977 = G__41015;
count__40528_40978 = G__41016;
i__40529_40979 = G__41017;
continue;
} else {
var G__41018 = seq__40525_40976;
var G__41019 = chunk__40527_40977;
var G__41020 = count__40528_40978;
var G__41021 = (i__40529_40979 + (1));
seq__40525_40976 = G__41018;
chunk__40527_40977 = G__41019;
count__40528_40978 = G__41020;
i__40529_40979 = G__41021;
continue;
}
} else {
var temp__5753__auto___41022 = cljs.core.seq(seq__40525_40976);
if(temp__5753__auto___41022){
var seq__40525_41023__$1 = temp__5753__auto___41022;
if(cljs.core.chunked_seq_QMARK_(seq__40525_41023__$1)){
var c__4679__auto___41024 = cljs.core.chunk_first(seq__40525_41023__$1);
var G__41025 = cljs.core.chunk_rest(seq__40525_41023__$1);
var G__41026 = c__4679__auto___41024;
var G__41027 = cljs.core.count(c__4679__auto___41024);
var G__41028 = (0);
seq__40525_40976 = G__41025;
chunk__40527_40977 = G__41026;
count__40528_40978 = G__41027;
i__40529_40979 = G__41028;
continue;
} else {
var child_struct_41029 = cljs.core.first(seq__40525_41023__$1);
if((!((child_struct_41029 == null)))){
if(typeof child_struct_41029 === 'string'){
var text_41030 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41030),child_struct_41029].join(''));
} else {
var children_41031 = shadow.dom.svg_node(child_struct_41029);
if(cljs.core.seq_QMARK_(children_41031)){
var seq__40576_41032 = cljs.core.seq(children_41031);
var chunk__40578_41033 = null;
var count__40579_41034 = (0);
var i__40580_41035 = (0);
while(true){
if((i__40580_41035 < count__40579_41034)){
var child_41036 = chunk__40578_41033.cljs$core$IIndexed$_nth$arity$2(null,i__40580_41035);
if(cljs.core.truth_(child_41036)){
node.appendChild(child_41036);


var G__41037 = seq__40576_41032;
var G__41038 = chunk__40578_41033;
var G__41039 = count__40579_41034;
var G__41040 = (i__40580_41035 + (1));
seq__40576_41032 = G__41037;
chunk__40578_41033 = G__41038;
count__40579_41034 = G__41039;
i__40580_41035 = G__41040;
continue;
} else {
var G__41042 = seq__40576_41032;
var G__41043 = chunk__40578_41033;
var G__41044 = count__40579_41034;
var G__41045 = (i__40580_41035 + (1));
seq__40576_41032 = G__41042;
chunk__40578_41033 = G__41043;
count__40579_41034 = G__41044;
i__40580_41035 = G__41045;
continue;
}
} else {
var temp__5753__auto___41046__$1 = cljs.core.seq(seq__40576_41032);
if(temp__5753__auto___41046__$1){
var seq__40576_41047__$1 = temp__5753__auto___41046__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40576_41047__$1)){
var c__4679__auto___41049 = cljs.core.chunk_first(seq__40576_41047__$1);
var G__41050 = cljs.core.chunk_rest(seq__40576_41047__$1);
var G__41051 = c__4679__auto___41049;
var G__41052 = cljs.core.count(c__4679__auto___41049);
var G__41053 = (0);
seq__40576_41032 = G__41050;
chunk__40578_41033 = G__41051;
count__40579_41034 = G__41052;
i__40580_41035 = G__41053;
continue;
} else {
var child_41054 = cljs.core.first(seq__40576_41047__$1);
if(cljs.core.truth_(child_41054)){
node.appendChild(child_41054);


var G__41055 = cljs.core.next(seq__40576_41047__$1);
var G__41056 = null;
var G__41057 = (0);
var G__41058 = (0);
seq__40576_41032 = G__41055;
chunk__40578_41033 = G__41056;
count__40579_41034 = G__41057;
i__40580_41035 = G__41058;
continue;
} else {
var G__41059 = cljs.core.next(seq__40576_41047__$1);
var G__41060 = null;
var G__41061 = (0);
var G__41062 = (0);
seq__40576_41032 = G__41059;
chunk__40578_41033 = G__41060;
count__40579_41034 = G__41061;
i__40580_41035 = G__41062;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41031);
}
}


var G__41063 = cljs.core.next(seq__40525_41023__$1);
var G__41064 = null;
var G__41065 = (0);
var G__41066 = (0);
seq__40525_40976 = G__41063;
chunk__40527_40977 = G__41064;
count__40528_40978 = G__41065;
i__40529_40979 = G__41066;
continue;
} else {
var G__41067 = cljs.core.next(seq__40525_41023__$1);
var G__41068 = null;
var G__41069 = (0);
var G__41070 = (0);
seq__40525_40976 = G__41067;
chunk__40527_40977 = G__41068;
count__40528_40978 = G__41069;
i__40529_40979 = G__41070;
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
var len__4864__auto___41074 = arguments.length;
var i__4865__auto___41075 = (0);
while(true){
if((i__4865__auto___41075 < len__4864__auto___41074)){
args__4870__auto__.push((arguments[i__4865__auto___41075]));

var G__41076 = (i__4865__auto___41075 + (1));
i__4865__auto___41075 = G__41076;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq40593){
var G__40594 = cljs.core.first(seq40593);
var seq40593__$1 = cljs.core.next(seq40593);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40594,seq40593__$1);
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
var G__40609 = arguments.length;
switch (G__40609) {
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
var c__35197__auto___41083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35199__auto__ = (function (){var switch__34531__auto__ = (function (state_40641){
var state_val_40642 = (state_40641[(1)]);
if((state_val_40642 === (1))){
var state_40641__$1 = state_40641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40641__$1,(2),once_or_cleanup);
} else {
if((state_val_40642 === (2))){
var inst_40636 = (state_40641[(2)]);
var inst_40637 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40641__$1 = (function (){var statearr_40646 = state_40641;
(statearr_40646[(7)] = inst_40636);

return statearr_40646;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40641__$1,inst_40637);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34532__auto__ = null;
var shadow$dom$state_machine__34532__auto____0 = (function (){
var statearr_40652 = [null,null,null,null,null,null,null,null];
(statearr_40652[(0)] = shadow$dom$state_machine__34532__auto__);

(statearr_40652[(1)] = (1));

return statearr_40652;
});
var shadow$dom$state_machine__34532__auto____1 = (function (state_40641){
while(true){
var ret_value__34533__auto__ = (function (){try{while(true){
var result__34534__auto__ = switch__34531__auto__(state_40641);
if(cljs.core.keyword_identical_QMARK_(result__34534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34534__auto__;
}
break;
}
}catch (e40656){var ex__34535__auto__ = e40656;
var statearr_40657_41084 = state_40641;
(statearr_40657_41084[(2)] = ex__34535__auto__);


if(cljs.core.seq((state_40641[(4)]))){
var statearr_40658_41085 = state_40641;
(statearr_40658_41085[(1)] = cljs.core.first((state_40641[(4)])));

} else {
throw ex__34535__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41086 = state_40641;
state_40641 = G__41086;
continue;
} else {
return ret_value__34533__auto__;
}
break;
}
});
shadow$dom$state_machine__34532__auto__ = function(state_40641){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34532__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34532__auto____1.call(this,state_40641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34532__auto____0;
shadow$dom$state_machine__34532__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34532__auto____1;
return shadow$dom$state_machine__34532__auto__;
})()
})();
var state__35200__auto__ = (function (){var statearr_40659 = f__35199__auto__();
(statearr_40659[(6)] = c__35197__auto___41083);

return statearr_40659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35200__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
