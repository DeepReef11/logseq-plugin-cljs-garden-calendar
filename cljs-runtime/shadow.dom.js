goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_44593 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_44593(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_44596 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_44596(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__43035 = coll;
var G__43036 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__43035,G__43036) : shadow.dom.lazy_native_coll_seq.call(null,G__43035,G__43036));
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
var G__43130 = arguments.length;
switch (G__43130) {
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
var G__43145 = arguments.length;
switch (G__43145) {
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
var G__43166 = arguments.length;
switch (G__43166) {
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
var G__43195 = arguments.length;
switch (G__43195) {
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
var G__43246 = arguments.length;
switch (G__43246) {
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
var G__43277 = arguments.length;
switch (G__43277) {
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
}catch (e43310){if((e43310 instanceof Object)){
var e = e43310;
return console.log("didnt support attachEvent",el,e);
} else {
throw e43310;

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
var seq__43341 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__43342 = null;
var count__43343 = (0);
var i__43344 = (0);
while(true){
if((i__43344 < count__43343)){
var el = chunk__43342.cljs$core$IIndexed$_nth$arity$2(null,i__43344);
var handler_44617__$1 = ((function (seq__43341,chunk__43342,count__43343,i__43344,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__43341,chunk__43342,count__43343,i__43344,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_44617__$1);


var G__44618 = seq__43341;
var G__44619 = chunk__43342;
var G__44620 = count__43343;
var G__44621 = (i__43344 + (1));
seq__43341 = G__44618;
chunk__43342 = G__44619;
count__43343 = G__44620;
i__43344 = G__44621;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43341);
if(temp__5753__auto__){
var seq__43341__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43341__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43341__$1);
var G__44622 = cljs.core.chunk_rest(seq__43341__$1);
var G__44623 = c__4679__auto__;
var G__44624 = cljs.core.count(c__4679__auto__);
var G__44625 = (0);
seq__43341 = G__44622;
chunk__43342 = G__44623;
count__43343 = G__44624;
i__43344 = G__44625;
continue;
} else {
var el = cljs.core.first(seq__43341__$1);
var handler_44626__$1 = ((function (seq__43341,chunk__43342,count__43343,i__43344,el,seq__43341__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__43341,chunk__43342,count__43343,i__43344,el,seq__43341__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_44626__$1);


var G__44627 = cljs.core.next(seq__43341__$1);
var G__44628 = null;
var G__44629 = (0);
var G__44630 = (0);
seq__43341 = G__44627;
chunk__43342 = G__44628;
count__43343 = G__44629;
i__43344 = G__44630;
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
var G__43390 = arguments.length;
switch (G__43390) {
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
var seq__43427 = cljs.core.seq(events);
var chunk__43428 = null;
var count__43429 = (0);
var i__43430 = (0);
while(true){
if((i__43430 < count__43429)){
var vec__43454 = chunk__43428.cljs$core$IIndexed$_nth$arity$2(null,i__43430);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43454,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43454,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__44632 = seq__43427;
var G__44633 = chunk__43428;
var G__44634 = count__43429;
var G__44635 = (i__43430 + (1));
seq__43427 = G__44632;
chunk__43428 = G__44633;
count__43429 = G__44634;
i__43430 = G__44635;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43427);
if(temp__5753__auto__){
var seq__43427__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43427__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43427__$1);
var G__44636 = cljs.core.chunk_rest(seq__43427__$1);
var G__44637 = c__4679__auto__;
var G__44638 = cljs.core.count(c__4679__auto__);
var G__44639 = (0);
seq__43427 = G__44636;
chunk__43428 = G__44637;
count__43429 = G__44638;
i__43430 = G__44639;
continue;
} else {
var vec__43463 = cljs.core.first(seq__43427__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43463,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43463,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__44640 = cljs.core.next(seq__43427__$1);
var G__44641 = null;
var G__44642 = (0);
var G__44643 = (0);
seq__43427 = G__44640;
chunk__43428 = G__44641;
count__43429 = G__44642;
i__43430 = G__44643;
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
var seq__43471 = cljs.core.seq(styles);
var chunk__43472 = null;
var count__43473 = (0);
var i__43474 = (0);
while(true){
if((i__43474 < count__43473)){
var vec__43493 = chunk__43472.cljs$core$IIndexed$_nth$arity$2(null,i__43474);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43493,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43493,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__44644 = seq__43471;
var G__44645 = chunk__43472;
var G__44646 = count__43473;
var G__44647 = (i__43474 + (1));
seq__43471 = G__44644;
chunk__43472 = G__44645;
count__43473 = G__44646;
i__43474 = G__44647;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43471);
if(temp__5753__auto__){
var seq__43471__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43471__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43471__$1);
var G__44648 = cljs.core.chunk_rest(seq__43471__$1);
var G__44649 = c__4679__auto__;
var G__44650 = cljs.core.count(c__4679__auto__);
var G__44651 = (0);
seq__43471 = G__44648;
chunk__43472 = G__44649;
count__43473 = G__44650;
i__43474 = G__44651;
continue;
} else {
var vec__43530 = cljs.core.first(seq__43471__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43530,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43530,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__44652 = cljs.core.next(seq__43471__$1);
var G__44653 = null;
var G__44654 = (0);
var G__44655 = (0);
seq__43471 = G__44652;
chunk__43472 = G__44653;
count__43473 = G__44654;
i__43474 = G__44655;
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
var G__43557_44656 = key;
var G__43557_44657__$1 = (((G__43557_44656 instanceof cljs.core.Keyword))?G__43557_44656.fqn:null);
switch (G__43557_44657__$1) {
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
var ks_44659 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_44659,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_44659,"aria-");
}
})())){
el.setAttribute(ks_44659,value);
} else {
(el[ks_44659] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__43636){
var map__43638 = p__43636;
var map__43638__$1 = cljs.core.__destructure_map(map__43638);
var props = map__43638__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43638__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__43640 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43640,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43640,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43640,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__43646 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__43646,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__43646;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__43663 = arguments.length;
switch (G__43663) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__43681){
var vec__43683 = p__43681;
var seq__43684 = cljs.core.seq(vec__43683);
var first__43685 = cljs.core.first(seq__43684);
var seq__43684__$1 = cljs.core.next(seq__43684);
var nn = first__43685;
var first__43685__$1 = cljs.core.first(seq__43684__$1);
var seq__43684__$2 = cljs.core.next(seq__43684__$1);
var np = first__43685__$1;
var nc = seq__43684__$2;
var node = vec__43683;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__43694 = nn;
var G__43695 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__43694,G__43695) : create_fn.call(null,G__43694,G__43695));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__43699 = nn;
var G__43700 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__43699,G__43700) : create_fn.call(null,G__43699,G__43700));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__43704 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43704,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43704,(1),null);
var seq__43707_44669 = cljs.core.seq(node_children);
var chunk__43708_44670 = null;
var count__43709_44671 = (0);
var i__43710_44672 = (0);
while(true){
if((i__43710_44672 < count__43709_44671)){
var child_struct_44673 = chunk__43708_44670.cljs$core$IIndexed$_nth$arity$2(null,i__43710_44672);
var children_44674 = shadow.dom.dom_node(child_struct_44673);
if(cljs.core.seq_QMARK_(children_44674)){
var seq__43749_44675 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_44674));
var chunk__43752_44676 = null;
var count__43753_44677 = (0);
var i__43754_44678 = (0);
while(true){
if((i__43754_44678 < count__43753_44677)){
var child_44679 = chunk__43752_44676.cljs$core$IIndexed$_nth$arity$2(null,i__43754_44678);
if(cljs.core.truth_(child_44679)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44679);


var G__44680 = seq__43749_44675;
var G__44681 = chunk__43752_44676;
var G__44682 = count__43753_44677;
var G__44683 = (i__43754_44678 + (1));
seq__43749_44675 = G__44680;
chunk__43752_44676 = G__44681;
count__43753_44677 = G__44682;
i__43754_44678 = G__44683;
continue;
} else {
var G__44684 = seq__43749_44675;
var G__44685 = chunk__43752_44676;
var G__44686 = count__43753_44677;
var G__44687 = (i__43754_44678 + (1));
seq__43749_44675 = G__44684;
chunk__43752_44676 = G__44685;
count__43753_44677 = G__44686;
i__43754_44678 = G__44687;
continue;
}
} else {
var temp__5753__auto___44688 = cljs.core.seq(seq__43749_44675);
if(temp__5753__auto___44688){
var seq__43749_44689__$1 = temp__5753__auto___44688;
if(cljs.core.chunked_seq_QMARK_(seq__43749_44689__$1)){
var c__4679__auto___44690 = cljs.core.chunk_first(seq__43749_44689__$1);
var G__44691 = cljs.core.chunk_rest(seq__43749_44689__$1);
var G__44692 = c__4679__auto___44690;
var G__44693 = cljs.core.count(c__4679__auto___44690);
var G__44694 = (0);
seq__43749_44675 = G__44691;
chunk__43752_44676 = G__44692;
count__43753_44677 = G__44693;
i__43754_44678 = G__44694;
continue;
} else {
var child_44696 = cljs.core.first(seq__43749_44689__$1);
if(cljs.core.truth_(child_44696)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44696);


var G__44698 = cljs.core.next(seq__43749_44689__$1);
var G__44699 = null;
var G__44700 = (0);
var G__44701 = (0);
seq__43749_44675 = G__44698;
chunk__43752_44676 = G__44699;
count__43753_44677 = G__44700;
i__43754_44678 = G__44701;
continue;
} else {
var G__44702 = cljs.core.next(seq__43749_44689__$1);
var G__44703 = null;
var G__44704 = (0);
var G__44705 = (0);
seq__43749_44675 = G__44702;
chunk__43752_44676 = G__44703;
count__43753_44677 = G__44704;
i__43754_44678 = G__44705;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_44674);
}


var G__44706 = seq__43707_44669;
var G__44707 = chunk__43708_44670;
var G__44708 = count__43709_44671;
var G__44709 = (i__43710_44672 + (1));
seq__43707_44669 = G__44706;
chunk__43708_44670 = G__44707;
count__43709_44671 = G__44708;
i__43710_44672 = G__44709;
continue;
} else {
var temp__5753__auto___44710 = cljs.core.seq(seq__43707_44669);
if(temp__5753__auto___44710){
var seq__43707_44711__$1 = temp__5753__auto___44710;
if(cljs.core.chunked_seq_QMARK_(seq__43707_44711__$1)){
var c__4679__auto___44712 = cljs.core.chunk_first(seq__43707_44711__$1);
var G__44713 = cljs.core.chunk_rest(seq__43707_44711__$1);
var G__44714 = c__4679__auto___44712;
var G__44715 = cljs.core.count(c__4679__auto___44712);
var G__44716 = (0);
seq__43707_44669 = G__44713;
chunk__43708_44670 = G__44714;
count__43709_44671 = G__44715;
i__43710_44672 = G__44716;
continue;
} else {
var child_struct_44717 = cljs.core.first(seq__43707_44711__$1);
var children_44718 = shadow.dom.dom_node(child_struct_44717);
if(cljs.core.seq_QMARK_(children_44718)){
var seq__43778_44719 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_44718));
var chunk__43780_44720 = null;
var count__43781_44721 = (0);
var i__43782_44722 = (0);
while(true){
if((i__43782_44722 < count__43781_44721)){
var child_44725 = chunk__43780_44720.cljs$core$IIndexed$_nth$arity$2(null,i__43782_44722);
if(cljs.core.truth_(child_44725)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44725);


var G__44726 = seq__43778_44719;
var G__44727 = chunk__43780_44720;
var G__44728 = count__43781_44721;
var G__44729 = (i__43782_44722 + (1));
seq__43778_44719 = G__44726;
chunk__43780_44720 = G__44727;
count__43781_44721 = G__44728;
i__43782_44722 = G__44729;
continue;
} else {
var G__44730 = seq__43778_44719;
var G__44731 = chunk__43780_44720;
var G__44732 = count__43781_44721;
var G__44733 = (i__43782_44722 + (1));
seq__43778_44719 = G__44730;
chunk__43780_44720 = G__44731;
count__43781_44721 = G__44732;
i__43782_44722 = G__44733;
continue;
}
} else {
var temp__5753__auto___44734__$1 = cljs.core.seq(seq__43778_44719);
if(temp__5753__auto___44734__$1){
var seq__43778_44735__$1 = temp__5753__auto___44734__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43778_44735__$1)){
var c__4679__auto___44736 = cljs.core.chunk_first(seq__43778_44735__$1);
var G__44737 = cljs.core.chunk_rest(seq__43778_44735__$1);
var G__44738 = c__4679__auto___44736;
var G__44739 = cljs.core.count(c__4679__auto___44736);
var G__44740 = (0);
seq__43778_44719 = G__44737;
chunk__43780_44720 = G__44738;
count__43781_44721 = G__44739;
i__43782_44722 = G__44740;
continue;
} else {
var child_44741 = cljs.core.first(seq__43778_44735__$1);
if(cljs.core.truth_(child_44741)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44741);


var G__44742 = cljs.core.next(seq__43778_44735__$1);
var G__44743 = null;
var G__44744 = (0);
var G__44745 = (0);
seq__43778_44719 = G__44742;
chunk__43780_44720 = G__44743;
count__43781_44721 = G__44744;
i__43782_44722 = G__44745;
continue;
} else {
var G__44746 = cljs.core.next(seq__43778_44735__$1);
var G__44747 = null;
var G__44749 = (0);
var G__44750 = (0);
seq__43778_44719 = G__44746;
chunk__43780_44720 = G__44747;
count__43781_44721 = G__44749;
i__43782_44722 = G__44750;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_44718);
}


var G__44753 = cljs.core.next(seq__43707_44711__$1);
var G__44754 = null;
var G__44755 = (0);
var G__44756 = (0);
seq__43707_44669 = G__44753;
chunk__43708_44670 = G__44754;
count__43709_44671 = G__44755;
i__43710_44672 = G__44756;
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
var seq__43817 = cljs.core.seq(node);
var chunk__43818 = null;
var count__43819 = (0);
var i__43820 = (0);
while(true){
if((i__43820 < count__43819)){
var n = chunk__43818.cljs$core$IIndexed$_nth$arity$2(null,i__43820);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__44760 = seq__43817;
var G__44761 = chunk__43818;
var G__44762 = count__43819;
var G__44763 = (i__43820 + (1));
seq__43817 = G__44760;
chunk__43818 = G__44761;
count__43819 = G__44762;
i__43820 = G__44763;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43817);
if(temp__5753__auto__){
var seq__43817__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43817__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43817__$1);
var G__44764 = cljs.core.chunk_rest(seq__43817__$1);
var G__44765 = c__4679__auto__;
var G__44766 = cljs.core.count(c__4679__auto__);
var G__44767 = (0);
seq__43817 = G__44764;
chunk__43818 = G__44765;
count__43819 = G__44766;
i__43820 = G__44767;
continue;
} else {
var n = cljs.core.first(seq__43817__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__44769 = cljs.core.next(seq__43817__$1);
var G__44770 = null;
var G__44771 = (0);
var G__44772 = (0);
seq__43817 = G__44769;
chunk__43818 = G__44770;
count__43819 = G__44771;
i__43820 = G__44772;
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
var G__43835 = arguments.length;
switch (G__43835) {
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
var G__43847 = arguments.length;
switch (G__43847) {
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
var G__43867 = arguments.length;
switch (G__43867) {
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
var len__4864__auto___44782 = arguments.length;
var i__4865__auto___44783 = (0);
while(true){
if((i__4865__auto___44783 < len__4864__auto___44782)){
args__4870__auto__.push((arguments[i__4865__auto___44783]));

var G__44784 = (i__4865__auto___44783 + (1));
i__4865__auto___44783 = G__44784;
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
var seq__43889_44785 = cljs.core.seq(nodes);
var chunk__43890_44786 = null;
var count__43891_44787 = (0);
var i__43892_44788 = (0);
while(true){
if((i__43892_44788 < count__43891_44787)){
var node_44791 = chunk__43890_44786.cljs$core$IIndexed$_nth$arity$2(null,i__43892_44788);
fragment.appendChild(shadow.dom._to_dom(node_44791));


var G__44792 = seq__43889_44785;
var G__44793 = chunk__43890_44786;
var G__44794 = count__43891_44787;
var G__44795 = (i__43892_44788 + (1));
seq__43889_44785 = G__44792;
chunk__43890_44786 = G__44793;
count__43891_44787 = G__44794;
i__43892_44788 = G__44795;
continue;
} else {
var temp__5753__auto___44798 = cljs.core.seq(seq__43889_44785);
if(temp__5753__auto___44798){
var seq__43889_44799__$1 = temp__5753__auto___44798;
if(cljs.core.chunked_seq_QMARK_(seq__43889_44799__$1)){
var c__4679__auto___44800 = cljs.core.chunk_first(seq__43889_44799__$1);
var G__44801 = cljs.core.chunk_rest(seq__43889_44799__$1);
var G__44802 = c__4679__auto___44800;
var G__44803 = cljs.core.count(c__4679__auto___44800);
var G__44804 = (0);
seq__43889_44785 = G__44801;
chunk__43890_44786 = G__44802;
count__43891_44787 = G__44803;
i__43892_44788 = G__44804;
continue;
} else {
var node_44805 = cljs.core.first(seq__43889_44799__$1);
fragment.appendChild(shadow.dom._to_dom(node_44805));


var G__44806 = cljs.core.next(seq__43889_44799__$1);
var G__44807 = null;
var G__44808 = (0);
var G__44809 = (0);
seq__43889_44785 = G__44806;
chunk__43890_44786 = G__44807;
count__43891_44787 = G__44808;
i__43892_44788 = G__44809;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq43885){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43885));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__43909_44811 = cljs.core.seq(scripts);
var chunk__43910_44812 = null;
var count__43911_44813 = (0);
var i__43912_44814 = (0);
while(true){
if((i__43912_44814 < count__43911_44813)){
var vec__43926_44815 = chunk__43910_44812.cljs$core$IIndexed$_nth$arity$2(null,i__43912_44814);
var script_tag_44816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43926_44815,(0),null);
var script_body_44817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43926_44815,(1),null);
eval(script_body_44817);


var G__44818 = seq__43909_44811;
var G__44819 = chunk__43910_44812;
var G__44820 = count__43911_44813;
var G__44821 = (i__43912_44814 + (1));
seq__43909_44811 = G__44818;
chunk__43910_44812 = G__44819;
count__43911_44813 = G__44820;
i__43912_44814 = G__44821;
continue;
} else {
var temp__5753__auto___44822 = cljs.core.seq(seq__43909_44811);
if(temp__5753__auto___44822){
var seq__43909_44823__$1 = temp__5753__auto___44822;
if(cljs.core.chunked_seq_QMARK_(seq__43909_44823__$1)){
var c__4679__auto___44825 = cljs.core.chunk_first(seq__43909_44823__$1);
var G__44826 = cljs.core.chunk_rest(seq__43909_44823__$1);
var G__44827 = c__4679__auto___44825;
var G__44828 = cljs.core.count(c__4679__auto___44825);
var G__44829 = (0);
seq__43909_44811 = G__44826;
chunk__43910_44812 = G__44827;
count__43911_44813 = G__44828;
i__43912_44814 = G__44829;
continue;
} else {
var vec__43932_44831 = cljs.core.first(seq__43909_44823__$1);
var script_tag_44832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43932_44831,(0),null);
var script_body_44833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43932_44831,(1),null);
eval(script_body_44833);


var G__44834 = cljs.core.next(seq__43909_44823__$1);
var G__44835 = null;
var G__44836 = (0);
var G__44837 = (0);
seq__43909_44811 = G__44834;
chunk__43910_44812 = G__44835;
count__43911_44813 = G__44836;
i__43912_44814 = G__44837;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__43939){
var vec__43940 = p__43939;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43940,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43940,(1),null);
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
var G__43976 = arguments.length;
switch (G__43976) {
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
var seq__43989 = cljs.core.seq(style_keys);
var chunk__43990 = null;
var count__43991 = (0);
var i__43992 = (0);
while(true){
if((i__43992 < count__43991)){
var it = chunk__43990.cljs$core$IIndexed$_nth$arity$2(null,i__43992);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__44847 = seq__43989;
var G__44848 = chunk__43990;
var G__44849 = count__43991;
var G__44850 = (i__43992 + (1));
seq__43989 = G__44847;
chunk__43990 = G__44848;
count__43991 = G__44849;
i__43992 = G__44850;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43989);
if(temp__5753__auto__){
var seq__43989__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43989__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43989__$1);
var G__44851 = cljs.core.chunk_rest(seq__43989__$1);
var G__44852 = c__4679__auto__;
var G__44853 = cljs.core.count(c__4679__auto__);
var G__44854 = (0);
seq__43989 = G__44851;
chunk__43990 = G__44852;
count__43991 = G__44853;
i__43992 = G__44854;
continue;
} else {
var it = cljs.core.first(seq__43989__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__44855 = cljs.core.next(seq__43989__$1);
var G__44856 = null;
var G__44857 = (0);
var G__44858 = (0);
seq__43989 = G__44855;
chunk__43990 = G__44856;
count__43991 = G__44857;
i__43992 = G__44858;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k44003,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__44023 = k44003;
var G__44023__$1 = (((G__44023 instanceof cljs.core.Keyword))?G__44023.fqn:null);
switch (G__44023__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44003,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__44029){
var vec__44030 = p__44029;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44030,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44030,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44002){
var self__ = this;
var G__44002__$1 = this;
return (new cljs.core.RecordIter((0),G__44002__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44005,other44006){
var self__ = this;
var this44005__$1 = this;
return (((!((other44006 == null)))) && ((((this44005__$1.constructor === other44006.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44005__$1.x,other44006.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44005__$1.y,other44006.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44005__$1.__extmap,other44006.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k44003){
var self__ = this;
var this__4509__auto____$1 = this;
var G__44110 = k44003;
var G__44110__$1 = (((G__44110 instanceof cljs.core.Keyword))?G__44110.fqn:null);
switch (G__44110__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k44003);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__44002){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__44113 = cljs.core.keyword_identical_QMARK_;
var expr__44114 = k__4511__auto__;
if(cljs.core.truth_((pred__44113.cljs$core$IFn$_invoke$arity$2 ? pred__44113.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__44114) : pred__44113.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__44114)))){
return (new shadow.dom.Coordinate(G__44002,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44113.cljs$core$IFn$_invoke$arity$2 ? pred__44113.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__44114) : pred__44113.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__44114)))){
return (new shadow.dom.Coordinate(self__.x,G__44002,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__44002),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__44002){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__44002,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__44011){
var extmap__4542__auto__ = (function (){var G__44202 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44011,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__44011)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44202);
} else {
return G__44202;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__44011),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__44011),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k44220,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__44239 = k44220;
var G__44239__$1 = (((G__44239 instanceof cljs.core.Keyword))?G__44239.fqn:null);
switch (G__44239__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44220,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__44247){
var vec__44249 = p__44247;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44249,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44249,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44219){
var self__ = this;
var G__44219__$1 = this;
return (new cljs.core.RecordIter((0),G__44219__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44221,other44222){
var self__ = this;
var this44221__$1 = this;
return (((!((other44222 == null)))) && ((((this44221__$1.constructor === other44222.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44221__$1.w,other44222.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44221__$1.h,other44222.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44221__$1.__extmap,other44222.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k44220){
var self__ = this;
var this__4509__auto____$1 = this;
var G__44294 = k44220;
var G__44294__$1 = (((G__44294 instanceof cljs.core.Keyword))?G__44294.fqn:null);
switch (G__44294__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k44220);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__44219){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__44296 = cljs.core.keyword_identical_QMARK_;
var expr__44297 = k__4511__auto__;
if(cljs.core.truth_((pred__44296.cljs$core$IFn$_invoke$arity$2 ? pred__44296.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__44297) : pred__44296.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__44297)))){
return (new shadow.dom.Size(G__44219,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44296.cljs$core$IFn$_invoke$arity$2 ? pred__44296.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__44297) : pred__44296.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__44297)))){
return (new shadow.dom.Size(self__.w,G__44219,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__44219),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__44219){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__44219,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__44225){
var extmap__4542__auto__ = (function (){var G__44303 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44225,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__44225)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44303);
} else {
return G__44303;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__44225),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__44225),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var G__44892 = (i + (1));
var G__44893 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__44892;
ret = G__44893;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44352){
var vec__44353 = p__44352;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44353,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44353,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__44357 = arguments.length;
switch (G__44357) {
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
var G__44896 = ps;
var G__44897 = (i + (1));
el__$1 = G__44896;
i = G__44897;
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
var vec__44445 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44445,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44445,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44445,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__44448_44898 = cljs.core.seq(props);
var chunk__44449_44899 = null;
var count__44450_44900 = (0);
var i__44451_44901 = (0);
while(true){
if((i__44451_44901 < count__44450_44900)){
var vec__44469_44902 = chunk__44449_44899.cljs$core$IIndexed$_nth$arity$2(null,i__44451_44901);
var k_44903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44469_44902,(0),null);
var v_44904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44469_44902,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_44903);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_44903),v_44904);


var G__44905 = seq__44448_44898;
var G__44906 = chunk__44449_44899;
var G__44907 = count__44450_44900;
var G__44908 = (i__44451_44901 + (1));
seq__44448_44898 = G__44905;
chunk__44449_44899 = G__44906;
count__44450_44900 = G__44907;
i__44451_44901 = G__44908;
continue;
} else {
var temp__5753__auto___44909 = cljs.core.seq(seq__44448_44898);
if(temp__5753__auto___44909){
var seq__44448_44910__$1 = temp__5753__auto___44909;
if(cljs.core.chunked_seq_QMARK_(seq__44448_44910__$1)){
var c__4679__auto___44911 = cljs.core.chunk_first(seq__44448_44910__$1);
var G__44912 = cljs.core.chunk_rest(seq__44448_44910__$1);
var G__44913 = c__4679__auto___44911;
var G__44914 = cljs.core.count(c__4679__auto___44911);
var G__44915 = (0);
seq__44448_44898 = G__44912;
chunk__44449_44899 = G__44913;
count__44450_44900 = G__44914;
i__44451_44901 = G__44915;
continue;
} else {
var vec__44475_44916 = cljs.core.first(seq__44448_44910__$1);
var k_44917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44475_44916,(0),null);
var v_44918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44475_44916,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_44917);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_44917),v_44918);


var G__44923 = cljs.core.next(seq__44448_44910__$1);
var G__44924 = null;
var G__44925 = (0);
var G__44926 = (0);
seq__44448_44898 = G__44923;
chunk__44449_44899 = G__44924;
count__44450_44900 = G__44925;
i__44451_44901 = G__44926;
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
var vec__44484 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44484,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44484,(1),null);
var seq__44487_44927 = cljs.core.seq(node_children);
var chunk__44489_44928 = null;
var count__44490_44929 = (0);
var i__44491_44930 = (0);
while(true){
if((i__44491_44930 < count__44490_44929)){
var child_struct_44931 = chunk__44489_44928.cljs$core$IIndexed$_nth$arity$2(null,i__44491_44930);
if((!((child_struct_44931 == null)))){
if(typeof child_struct_44931 === 'string'){
var text_44932 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_44932),child_struct_44931].join(''));
} else {
var children_44933 = shadow.dom.svg_node(child_struct_44931);
if(cljs.core.seq_QMARK_(children_44933)){
var seq__44520_44934 = cljs.core.seq(children_44933);
var chunk__44522_44935 = null;
var count__44523_44936 = (0);
var i__44524_44937 = (0);
while(true){
if((i__44524_44937 < count__44523_44936)){
var child_44938 = chunk__44522_44935.cljs$core$IIndexed$_nth$arity$2(null,i__44524_44937);
if(cljs.core.truth_(child_44938)){
node.appendChild(child_44938);


var G__44939 = seq__44520_44934;
var G__44940 = chunk__44522_44935;
var G__44941 = count__44523_44936;
var G__44942 = (i__44524_44937 + (1));
seq__44520_44934 = G__44939;
chunk__44522_44935 = G__44940;
count__44523_44936 = G__44941;
i__44524_44937 = G__44942;
continue;
} else {
var G__44943 = seq__44520_44934;
var G__44944 = chunk__44522_44935;
var G__44945 = count__44523_44936;
var G__44946 = (i__44524_44937 + (1));
seq__44520_44934 = G__44943;
chunk__44522_44935 = G__44944;
count__44523_44936 = G__44945;
i__44524_44937 = G__44946;
continue;
}
} else {
var temp__5753__auto___44947 = cljs.core.seq(seq__44520_44934);
if(temp__5753__auto___44947){
var seq__44520_44948__$1 = temp__5753__auto___44947;
if(cljs.core.chunked_seq_QMARK_(seq__44520_44948__$1)){
var c__4679__auto___44949 = cljs.core.chunk_first(seq__44520_44948__$1);
var G__44950 = cljs.core.chunk_rest(seq__44520_44948__$1);
var G__44951 = c__4679__auto___44949;
var G__44952 = cljs.core.count(c__4679__auto___44949);
var G__44953 = (0);
seq__44520_44934 = G__44950;
chunk__44522_44935 = G__44951;
count__44523_44936 = G__44952;
i__44524_44937 = G__44953;
continue;
} else {
var child_44954 = cljs.core.first(seq__44520_44948__$1);
if(cljs.core.truth_(child_44954)){
node.appendChild(child_44954);


var G__44955 = cljs.core.next(seq__44520_44948__$1);
var G__44956 = null;
var G__44957 = (0);
var G__44958 = (0);
seq__44520_44934 = G__44955;
chunk__44522_44935 = G__44956;
count__44523_44936 = G__44957;
i__44524_44937 = G__44958;
continue;
} else {
var G__44959 = cljs.core.next(seq__44520_44948__$1);
var G__44960 = null;
var G__44961 = (0);
var G__44962 = (0);
seq__44520_44934 = G__44959;
chunk__44522_44935 = G__44960;
count__44523_44936 = G__44961;
i__44524_44937 = G__44962;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_44933);
}
}


var G__44963 = seq__44487_44927;
var G__44964 = chunk__44489_44928;
var G__44965 = count__44490_44929;
var G__44966 = (i__44491_44930 + (1));
seq__44487_44927 = G__44963;
chunk__44489_44928 = G__44964;
count__44490_44929 = G__44965;
i__44491_44930 = G__44966;
continue;
} else {
var G__44967 = seq__44487_44927;
var G__44968 = chunk__44489_44928;
var G__44969 = count__44490_44929;
var G__44970 = (i__44491_44930 + (1));
seq__44487_44927 = G__44967;
chunk__44489_44928 = G__44968;
count__44490_44929 = G__44969;
i__44491_44930 = G__44970;
continue;
}
} else {
var temp__5753__auto___44971 = cljs.core.seq(seq__44487_44927);
if(temp__5753__auto___44971){
var seq__44487_44972__$1 = temp__5753__auto___44971;
if(cljs.core.chunked_seq_QMARK_(seq__44487_44972__$1)){
var c__4679__auto___44973 = cljs.core.chunk_first(seq__44487_44972__$1);
var G__44974 = cljs.core.chunk_rest(seq__44487_44972__$1);
var G__44975 = c__4679__auto___44973;
var G__44976 = cljs.core.count(c__4679__auto___44973);
var G__44977 = (0);
seq__44487_44927 = G__44974;
chunk__44489_44928 = G__44975;
count__44490_44929 = G__44976;
i__44491_44930 = G__44977;
continue;
} else {
var child_struct_44978 = cljs.core.first(seq__44487_44972__$1);
if((!((child_struct_44978 == null)))){
if(typeof child_struct_44978 === 'string'){
var text_44979 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_44979),child_struct_44978].join(''));
} else {
var children_44980 = shadow.dom.svg_node(child_struct_44978);
if(cljs.core.seq_QMARK_(children_44980)){
var seq__44531_44983 = cljs.core.seq(children_44980);
var chunk__44533_44984 = null;
var count__44534_44986 = (0);
var i__44535_44987 = (0);
while(true){
if((i__44535_44987 < count__44534_44986)){
var child_44988 = chunk__44533_44984.cljs$core$IIndexed$_nth$arity$2(null,i__44535_44987);
if(cljs.core.truth_(child_44988)){
node.appendChild(child_44988);


var G__44989 = seq__44531_44983;
var G__44990 = chunk__44533_44984;
var G__44991 = count__44534_44986;
var G__44992 = (i__44535_44987 + (1));
seq__44531_44983 = G__44989;
chunk__44533_44984 = G__44990;
count__44534_44986 = G__44991;
i__44535_44987 = G__44992;
continue;
} else {
var G__44993 = seq__44531_44983;
var G__44994 = chunk__44533_44984;
var G__44995 = count__44534_44986;
var G__44996 = (i__44535_44987 + (1));
seq__44531_44983 = G__44993;
chunk__44533_44984 = G__44994;
count__44534_44986 = G__44995;
i__44535_44987 = G__44996;
continue;
}
} else {
var temp__5753__auto___44997__$1 = cljs.core.seq(seq__44531_44983);
if(temp__5753__auto___44997__$1){
var seq__44531_44998__$1 = temp__5753__auto___44997__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44531_44998__$1)){
var c__4679__auto___44999 = cljs.core.chunk_first(seq__44531_44998__$1);
var G__45000 = cljs.core.chunk_rest(seq__44531_44998__$1);
var G__45001 = c__4679__auto___44999;
var G__45002 = cljs.core.count(c__4679__auto___44999);
var G__45003 = (0);
seq__44531_44983 = G__45000;
chunk__44533_44984 = G__45001;
count__44534_44986 = G__45002;
i__44535_44987 = G__45003;
continue;
} else {
var child_45004 = cljs.core.first(seq__44531_44998__$1);
if(cljs.core.truth_(child_45004)){
node.appendChild(child_45004);


var G__45005 = cljs.core.next(seq__44531_44998__$1);
var G__45006 = null;
var G__45007 = (0);
var G__45008 = (0);
seq__44531_44983 = G__45005;
chunk__44533_44984 = G__45006;
count__44534_44986 = G__45007;
i__44535_44987 = G__45008;
continue;
} else {
var G__45009 = cljs.core.next(seq__44531_44998__$1);
var G__45010 = null;
var G__45011 = (0);
var G__45012 = (0);
seq__44531_44983 = G__45009;
chunk__44533_44984 = G__45010;
count__44534_44986 = G__45011;
i__44535_44987 = G__45012;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_44980);
}
}


var G__45013 = cljs.core.next(seq__44487_44972__$1);
var G__45014 = null;
var G__45015 = (0);
var G__45016 = (0);
seq__44487_44927 = G__45013;
chunk__44489_44928 = G__45014;
count__44490_44929 = G__45015;
i__44491_44930 = G__45016;
continue;
} else {
var G__45017 = cljs.core.next(seq__44487_44972__$1);
var G__45018 = null;
var G__45019 = (0);
var G__45020 = (0);
seq__44487_44927 = G__45017;
chunk__44489_44928 = G__45018;
count__44490_44929 = G__45019;
i__44491_44930 = G__45020;
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
var len__4864__auto___45021 = arguments.length;
var i__4865__auto___45022 = (0);
while(true){
if((i__4865__auto___45022 < len__4864__auto___45021)){
args__4870__auto__.push((arguments[i__4865__auto___45022]));

var G__45023 = (i__4865__auto___45022 + (1));
i__4865__auto___45022 = G__45023;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq44541){
var G__44542 = cljs.core.first(seq44541);
var seq44541__$1 = cljs.core.next(seq44541);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44542,seq44541__$1);
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
var G__44547 = arguments.length;
switch (G__44547) {
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
var c__38858__auto___45030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38859__auto__ = (function (){var switch__38474__auto__ = (function (state_44560){
var state_val_44561 = (state_44560[(1)]);
if((state_val_44561 === (1))){
var state_44560__$1 = state_44560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44560__$1,(2),once_or_cleanup);
} else {
if((state_val_44561 === (2))){
var inst_44555 = (state_44560[(2)]);
var inst_44557 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_44560__$1 = (function (){var statearr_44564 = state_44560;
(statearr_44564[(7)] = inst_44555);

return statearr_44564;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44560__$1,inst_44557);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__38475__auto__ = null;
var shadow$dom$state_machine__38475__auto____0 = (function (){
var statearr_44566 = [null,null,null,null,null,null,null,null];
(statearr_44566[(0)] = shadow$dom$state_machine__38475__auto__);

(statearr_44566[(1)] = (1));

return statearr_44566;
});
var shadow$dom$state_machine__38475__auto____1 = (function (state_44560){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__(state_44560);
if(cljs.core.keyword_identical_QMARK_(result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e44568){var ex__38478__auto__ = e44568;
var statearr_44569_45037 = state_44560;
(statearr_44569_45037[(2)] = ex__38478__auto__);


if(cljs.core.seq((state_44560[(4)]))){
var statearr_44570_45038 = state_44560;
(statearr_44570_45038[(1)] = cljs.core.first((state_44560[(4)])));

} else {
throw ex__38478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45041 = state_44560;
state_44560 = G__45041;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
shadow$dom$state_machine__38475__auto__ = function(state_44560){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__38475__auto____0.call(this);
case 1:
return shadow$dom$state_machine__38475__auto____1.call(this,state_44560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__38475__auto____0;
shadow$dom$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__38475__auto____1;
return shadow$dom$state_machine__38475__auto__;
})()
})();
var state__38860__auto__ = (function (){var statearr_44574 = f__38859__auto__();
(statearr_44574[(6)] = c__38858__auto___45030);

return statearr_44574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38860__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
