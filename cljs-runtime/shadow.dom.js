goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34600 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_34600(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34601 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_34601(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33098 = coll;
var G__33099 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33098,G__33099) : shadow.dom.lazy_native_coll_seq.call(null,G__33098,G__33099));
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
var G__33170 = arguments.length;
switch (G__33170) {
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
var G__33179 = arguments.length;
switch (G__33179) {
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
var G__33192 = arguments.length;
switch (G__33192) {
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
var G__33214 = arguments.length;
switch (G__33214) {
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
var G__33263 = arguments.length;
switch (G__33263) {
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
var G__33281 = arguments.length;
switch (G__33281) {
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
}catch (e33289){if((e33289 instanceof Object)){
var e = e33289;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33289;

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
var seq__33299 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33300 = null;
var count__33301 = (0);
var i__33302 = (0);
while(true){
if((i__33302 < count__33301)){
var el = chunk__33300.cljs$core$IIndexed$_nth$arity$2(null,i__33302);
var handler_34632__$1 = ((function (seq__33299,chunk__33300,count__33301,i__33302,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33299,chunk__33300,count__33301,i__33302,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34632__$1);


var G__34633 = seq__33299;
var G__34634 = chunk__33300;
var G__34635 = count__33301;
var G__34636 = (i__33302 + (1));
seq__33299 = G__34633;
chunk__33300 = G__34634;
count__33301 = G__34635;
i__33302 = G__34636;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33299);
if(temp__5753__auto__){
var seq__33299__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33299__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33299__$1);
var G__34637 = cljs.core.chunk_rest(seq__33299__$1);
var G__34638 = c__4679__auto__;
var G__34639 = cljs.core.count(c__4679__auto__);
var G__34640 = (0);
seq__33299 = G__34637;
chunk__33300 = G__34638;
count__33301 = G__34639;
i__33302 = G__34640;
continue;
} else {
var el = cljs.core.first(seq__33299__$1);
var handler_34643__$1 = ((function (seq__33299,chunk__33300,count__33301,i__33302,el,seq__33299__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33299,chunk__33300,count__33301,i__33302,el,seq__33299__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34643__$1);


var G__34645 = cljs.core.next(seq__33299__$1);
var G__34646 = null;
var G__34647 = (0);
var G__34648 = (0);
seq__33299 = G__34645;
chunk__33300 = G__34646;
count__33301 = G__34647;
i__33302 = G__34648;
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
var G__33326 = arguments.length;
switch (G__33326) {
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
var seq__33339 = cljs.core.seq(events);
var chunk__33340 = null;
var count__33341 = (0);
var i__33342 = (0);
while(true){
if((i__33342 < count__33341)){
var vec__33362 = chunk__33340.cljs$core$IIndexed$_nth$arity$2(null,i__33342);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33362,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33362,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34650 = seq__33339;
var G__34651 = chunk__33340;
var G__34652 = count__33341;
var G__34653 = (i__33342 + (1));
seq__33339 = G__34650;
chunk__33340 = G__34651;
count__33341 = G__34652;
i__33342 = G__34653;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33339);
if(temp__5753__auto__){
var seq__33339__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33339__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33339__$1);
var G__34654 = cljs.core.chunk_rest(seq__33339__$1);
var G__34655 = c__4679__auto__;
var G__34656 = cljs.core.count(c__4679__auto__);
var G__34657 = (0);
seq__33339 = G__34654;
chunk__33340 = G__34655;
count__33341 = G__34656;
i__33342 = G__34657;
continue;
} else {
var vec__33371 = cljs.core.first(seq__33339__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33371,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33371,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34658 = cljs.core.next(seq__33339__$1);
var G__34659 = null;
var G__34660 = (0);
var G__34661 = (0);
seq__33339 = G__34658;
chunk__33340 = G__34659;
count__33341 = G__34660;
i__33342 = G__34661;
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
var seq__33378 = cljs.core.seq(styles);
var chunk__33379 = null;
var count__33380 = (0);
var i__33381 = (0);
while(true){
if((i__33381 < count__33380)){
var vec__33397 = chunk__33379.cljs$core$IIndexed$_nth$arity$2(null,i__33381);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33397,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33397,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34662 = seq__33378;
var G__34663 = chunk__33379;
var G__34664 = count__33380;
var G__34665 = (i__33381 + (1));
seq__33378 = G__34662;
chunk__33379 = G__34663;
count__33380 = G__34664;
i__33381 = G__34665;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33378);
if(temp__5753__auto__){
var seq__33378__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33378__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33378__$1);
var G__34666 = cljs.core.chunk_rest(seq__33378__$1);
var G__34667 = c__4679__auto__;
var G__34668 = cljs.core.count(c__4679__auto__);
var G__34669 = (0);
seq__33378 = G__34666;
chunk__33379 = G__34667;
count__33380 = G__34668;
i__33381 = G__34669;
continue;
} else {
var vec__33401 = cljs.core.first(seq__33378__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33401,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33401,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34670 = cljs.core.next(seq__33378__$1);
var G__34671 = null;
var G__34672 = (0);
var G__34673 = (0);
seq__33378 = G__34670;
chunk__33379 = G__34671;
count__33380 = G__34672;
i__33381 = G__34673;
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
var G__33408_34674 = key;
var G__33408_34675__$1 = (((G__33408_34674 instanceof cljs.core.Keyword))?G__33408_34674.fqn:null);
switch (G__33408_34675__$1) {
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
var ks_34677 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_34677,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_34677,"aria-");
}
})())){
el.setAttribute(ks_34677,value);
} else {
(el[ks_34677] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33468){
var map__33471 = p__33468;
var map__33471__$1 = cljs.core.__destructure_map(map__33471);
var props = map__33471__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33471__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33472 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33472,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33472,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33472,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33479 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33479,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33479;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33487 = arguments.length;
switch (G__33487) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33503){
var vec__33505 = p__33503;
var seq__33506 = cljs.core.seq(vec__33505);
var first__33507 = cljs.core.first(seq__33506);
var seq__33506__$1 = cljs.core.next(seq__33506);
var nn = first__33507;
var first__33507__$1 = cljs.core.first(seq__33506__$1);
var seq__33506__$2 = cljs.core.next(seq__33506__$1);
var np = first__33507__$1;
var nc = seq__33506__$2;
var node = vec__33505;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33516 = nn;
var G__33517 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33516,G__33517) : create_fn.call(null,G__33516,G__33517));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33521 = nn;
var G__33522 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33521,G__33522) : create_fn.call(null,G__33521,G__33522));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33539 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33539,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33539,(1),null);
var seq__33546_34691 = cljs.core.seq(node_children);
var chunk__33547_34692 = null;
var count__33548_34693 = (0);
var i__33549_34694 = (0);
while(true){
if((i__33549_34694 < count__33548_34693)){
var child_struct_34695 = chunk__33547_34692.cljs$core$IIndexed$_nth$arity$2(null,i__33549_34694);
var children_34696 = shadow.dom.dom_node(child_struct_34695);
if(cljs.core.seq_QMARK_(children_34696)){
var seq__33641_34697 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34696));
var chunk__33643_34698 = null;
var count__33644_34699 = (0);
var i__33645_34700 = (0);
while(true){
if((i__33645_34700 < count__33644_34699)){
var child_34701 = chunk__33643_34698.cljs$core$IIndexed$_nth$arity$2(null,i__33645_34700);
if(cljs.core.truth_(child_34701)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34701);


var G__34702 = seq__33641_34697;
var G__34703 = chunk__33643_34698;
var G__34704 = count__33644_34699;
var G__34705 = (i__33645_34700 + (1));
seq__33641_34697 = G__34702;
chunk__33643_34698 = G__34703;
count__33644_34699 = G__34704;
i__33645_34700 = G__34705;
continue;
} else {
var G__34706 = seq__33641_34697;
var G__34707 = chunk__33643_34698;
var G__34708 = count__33644_34699;
var G__34709 = (i__33645_34700 + (1));
seq__33641_34697 = G__34706;
chunk__33643_34698 = G__34707;
count__33644_34699 = G__34708;
i__33645_34700 = G__34709;
continue;
}
} else {
var temp__5753__auto___34710 = cljs.core.seq(seq__33641_34697);
if(temp__5753__auto___34710){
var seq__33641_34711__$1 = temp__5753__auto___34710;
if(cljs.core.chunked_seq_QMARK_(seq__33641_34711__$1)){
var c__4679__auto___34712 = cljs.core.chunk_first(seq__33641_34711__$1);
var G__34713 = cljs.core.chunk_rest(seq__33641_34711__$1);
var G__34714 = c__4679__auto___34712;
var G__34715 = cljs.core.count(c__4679__auto___34712);
var G__34716 = (0);
seq__33641_34697 = G__34713;
chunk__33643_34698 = G__34714;
count__33644_34699 = G__34715;
i__33645_34700 = G__34716;
continue;
} else {
var child_34720 = cljs.core.first(seq__33641_34711__$1);
if(cljs.core.truth_(child_34720)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34720);


var G__34721 = cljs.core.next(seq__33641_34711__$1);
var G__34722 = null;
var G__34723 = (0);
var G__34724 = (0);
seq__33641_34697 = G__34721;
chunk__33643_34698 = G__34722;
count__33644_34699 = G__34723;
i__33645_34700 = G__34724;
continue;
} else {
var G__34725 = cljs.core.next(seq__33641_34711__$1);
var G__34726 = null;
var G__34727 = (0);
var G__34728 = (0);
seq__33641_34697 = G__34725;
chunk__33643_34698 = G__34726;
count__33644_34699 = G__34727;
i__33645_34700 = G__34728;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34696);
}


var G__34729 = seq__33546_34691;
var G__34730 = chunk__33547_34692;
var G__34731 = count__33548_34693;
var G__34732 = (i__33549_34694 + (1));
seq__33546_34691 = G__34729;
chunk__33547_34692 = G__34730;
count__33548_34693 = G__34731;
i__33549_34694 = G__34732;
continue;
} else {
var temp__5753__auto___34733 = cljs.core.seq(seq__33546_34691);
if(temp__5753__auto___34733){
var seq__33546_34734__$1 = temp__5753__auto___34733;
if(cljs.core.chunked_seq_QMARK_(seq__33546_34734__$1)){
var c__4679__auto___34735 = cljs.core.chunk_first(seq__33546_34734__$1);
var G__34736 = cljs.core.chunk_rest(seq__33546_34734__$1);
var G__34737 = c__4679__auto___34735;
var G__34738 = cljs.core.count(c__4679__auto___34735);
var G__34739 = (0);
seq__33546_34691 = G__34736;
chunk__33547_34692 = G__34737;
count__33548_34693 = G__34738;
i__33549_34694 = G__34739;
continue;
} else {
var child_struct_34740 = cljs.core.first(seq__33546_34734__$1);
var children_34744 = shadow.dom.dom_node(child_struct_34740);
if(cljs.core.seq_QMARK_(children_34744)){
var seq__33691_34745 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34744));
var chunk__33693_34746 = null;
var count__33694_34747 = (0);
var i__33695_34748 = (0);
while(true){
if((i__33695_34748 < count__33694_34747)){
var child_34749 = chunk__33693_34746.cljs$core$IIndexed$_nth$arity$2(null,i__33695_34748);
if(cljs.core.truth_(child_34749)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34749);


var G__34750 = seq__33691_34745;
var G__34751 = chunk__33693_34746;
var G__34752 = count__33694_34747;
var G__34753 = (i__33695_34748 + (1));
seq__33691_34745 = G__34750;
chunk__33693_34746 = G__34751;
count__33694_34747 = G__34752;
i__33695_34748 = G__34753;
continue;
} else {
var G__34754 = seq__33691_34745;
var G__34755 = chunk__33693_34746;
var G__34756 = count__33694_34747;
var G__34757 = (i__33695_34748 + (1));
seq__33691_34745 = G__34754;
chunk__33693_34746 = G__34755;
count__33694_34747 = G__34756;
i__33695_34748 = G__34757;
continue;
}
} else {
var temp__5753__auto___34758__$1 = cljs.core.seq(seq__33691_34745);
if(temp__5753__auto___34758__$1){
var seq__33691_34759__$1 = temp__5753__auto___34758__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33691_34759__$1)){
var c__4679__auto___34760 = cljs.core.chunk_first(seq__33691_34759__$1);
var G__34761 = cljs.core.chunk_rest(seq__33691_34759__$1);
var G__34762 = c__4679__auto___34760;
var G__34763 = cljs.core.count(c__4679__auto___34760);
var G__34764 = (0);
seq__33691_34745 = G__34761;
chunk__33693_34746 = G__34762;
count__33694_34747 = G__34763;
i__33695_34748 = G__34764;
continue;
} else {
var child_34765 = cljs.core.first(seq__33691_34759__$1);
if(cljs.core.truth_(child_34765)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34765);


var G__34766 = cljs.core.next(seq__33691_34759__$1);
var G__34767 = null;
var G__34768 = (0);
var G__34769 = (0);
seq__33691_34745 = G__34766;
chunk__33693_34746 = G__34767;
count__33694_34747 = G__34768;
i__33695_34748 = G__34769;
continue;
} else {
var G__34773 = cljs.core.next(seq__33691_34759__$1);
var G__34774 = null;
var G__34775 = (0);
var G__34776 = (0);
seq__33691_34745 = G__34773;
chunk__33693_34746 = G__34774;
count__33694_34747 = G__34775;
i__33695_34748 = G__34776;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34744);
}


var G__34777 = cljs.core.next(seq__33546_34734__$1);
var G__34778 = null;
var G__34779 = (0);
var G__34780 = (0);
seq__33546_34691 = G__34777;
chunk__33547_34692 = G__34778;
count__33548_34693 = G__34779;
i__33549_34694 = G__34780;
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
var seq__33765 = cljs.core.seq(node);
var chunk__33768 = null;
var count__33769 = (0);
var i__33770 = (0);
while(true){
if((i__33770 < count__33769)){
var n = chunk__33768.cljs$core$IIndexed$_nth$arity$2(null,i__33770);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34782 = seq__33765;
var G__34783 = chunk__33768;
var G__34784 = count__33769;
var G__34785 = (i__33770 + (1));
seq__33765 = G__34782;
chunk__33768 = G__34783;
count__33769 = G__34784;
i__33770 = G__34785;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33765);
if(temp__5753__auto__){
var seq__33765__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33765__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33765__$1);
var G__34787 = cljs.core.chunk_rest(seq__33765__$1);
var G__34788 = c__4679__auto__;
var G__34789 = cljs.core.count(c__4679__auto__);
var G__34790 = (0);
seq__33765 = G__34787;
chunk__33768 = G__34788;
count__33769 = G__34789;
i__33770 = G__34790;
continue;
} else {
var n = cljs.core.first(seq__33765__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34791 = cljs.core.next(seq__33765__$1);
var G__34792 = null;
var G__34793 = (0);
var G__34794 = (0);
seq__33765 = G__34791;
chunk__33768 = G__34792;
count__33769 = G__34793;
i__33770 = G__34794;
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
var G__33799 = arguments.length;
switch (G__33799) {
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
var G__33831 = arguments.length;
switch (G__33831) {
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
var G__33865 = arguments.length;
switch (G__33865) {
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
var len__4864__auto___34800 = arguments.length;
var i__4865__auto___34801 = (0);
while(true){
if((i__4865__auto___34801 < len__4864__auto___34800)){
args__4870__auto__.push((arguments[i__4865__auto___34801]));

var G__34802 = (i__4865__auto___34801 + (1));
i__4865__auto___34801 = G__34802;
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
var seq__33946_34803 = cljs.core.seq(nodes);
var chunk__33947_34804 = null;
var count__33948_34805 = (0);
var i__33949_34806 = (0);
while(true){
if((i__33949_34806 < count__33948_34805)){
var node_34807 = chunk__33947_34804.cljs$core$IIndexed$_nth$arity$2(null,i__33949_34806);
fragment.appendChild(shadow.dom._to_dom(node_34807));


var G__34808 = seq__33946_34803;
var G__34809 = chunk__33947_34804;
var G__34810 = count__33948_34805;
var G__34811 = (i__33949_34806 + (1));
seq__33946_34803 = G__34808;
chunk__33947_34804 = G__34809;
count__33948_34805 = G__34810;
i__33949_34806 = G__34811;
continue;
} else {
var temp__5753__auto___34812 = cljs.core.seq(seq__33946_34803);
if(temp__5753__auto___34812){
var seq__33946_34813__$1 = temp__5753__auto___34812;
if(cljs.core.chunked_seq_QMARK_(seq__33946_34813__$1)){
var c__4679__auto___34814 = cljs.core.chunk_first(seq__33946_34813__$1);
var G__34815 = cljs.core.chunk_rest(seq__33946_34813__$1);
var G__34816 = c__4679__auto___34814;
var G__34817 = cljs.core.count(c__4679__auto___34814);
var G__34818 = (0);
seq__33946_34803 = G__34815;
chunk__33947_34804 = G__34816;
count__33948_34805 = G__34817;
i__33949_34806 = G__34818;
continue;
} else {
var node_34819 = cljs.core.first(seq__33946_34813__$1);
fragment.appendChild(shadow.dom._to_dom(node_34819));


var G__34820 = cljs.core.next(seq__33946_34813__$1);
var G__34821 = null;
var G__34822 = (0);
var G__34823 = (0);
seq__33946_34803 = G__34820;
chunk__33947_34804 = G__34821;
count__33948_34805 = G__34822;
i__33949_34806 = G__34823;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33914){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33914));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33995_34832 = cljs.core.seq(scripts);
var chunk__33996_34833 = null;
var count__33997_34834 = (0);
var i__33998_34835 = (0);
while(true){
if((i__33998_34835 < count__33997_34834)){
var vec__34020_34836 = chunk__33996_34833.cljs$core$IIndexed$_nth$arity$2(null,i__33998_34835);
var script_tag_34837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34020_34836,(0),null);
var script_body_34838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34020_34836,(1),null);
eval(script_body_34838);


var G__34839 = seq__33995_34832;
var G__34840 = chunk__33996_34833;
var G__34841 = count__33997_34834;
var G__34842 = (i__33998_34835 + (1));
seq__33995_34832 = G__34839;
chunk__33996_34833 = G__34840;
count__33997_34834 = G__34841;
i__33998_34835 = G__34842;
continue;
} else {
var temp__5753__auto___34843 = cljs.core.seq(seq__33995_34832);
if(temp__5753__auto___34843){
var seq__33995_34848__$1 = temp__5753__auto___34843;
if(cljs.core.chunked_seq_QMARK_(seq__33995_34848__$1)){
var c__4679__auto___34849 = cljs.core.chunk_first(seq__33995_34848__$1);
var G__34850 = cljs.core.chunk_rest(seq__33995_34848__$1);
var G__34851 = c__4679__auto___34849;
var G__34852 = cljs.core.count(c__4679__auto___34849);
var G__34853 = (0);
seq__33995_34832 = G__34850;
chunk__33996_34833 = G__34851;
count__33997_34834 = G__34852;
i__33998_34835 = G__34853;
continue;
} else {
var vec__34026_34854 = cljs.core.first(seq__33995_34848__$1);
var script_tag_34855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34026_34854,(0),null);
var script_body_34856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34026_34854,(1),null);
eval(script_body_34856);


var G__34859 = cljs.core.next(seq__33995_34848__$1);
var G__34860 = null;
var G__34861 = (0);
var G__34862 = (0);
seq__33995_34832 = G__34859;
chunk__33996_34833 = G__34860;
count__33997_34834 = G__34861;
i__33998_34835 = G__34862;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34031){
var vec__34033 = p__34031;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34033,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34033,(1),null);
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
var G__34061 = arguments.length;
switch (G__34061) {
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
var seq__34090 = cljs.core.seq(style_keys);
var chunk__34091 = null;
var count__34092 = (0);
var i__34093 = (0);
while(true){
if((i__34093 < count__34092)){
var it = chunk__34091.cljs$core$IIndexed$_nth$arity$2(null,i__34093);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34869 = seq__34090;
var G__34870 = chunk__34091;
var G__34871 = count__34092;
var G__34872 = (i__34093 + (1));
seq__34090 = G__34869;
chunk__34091 = G__34870;
count__34092 = G__34871;
i__34093 = G__34872;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34090);
if(temp__5753__auto__){
var seq__34090__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34090__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34090__$1);
var G__34873 = cljs.core.chunk_rest(seq__34090__$1);
var G__34874 = c__4679__auto__;
var G__34875 = cljs.core.count(c__4679__auto__);
var G__34876 = (0);
seq__34090 = G__34873;
chunk__34091 = G__34874;
count__34092 = G__34875;
i__34093 = G__34876;
continue;
} else {
var it = cljs.core.first(seq__34090__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34877 = cljs.core.next(seq__34090__$1);
var G__34878 = null;
var G__34879 = (0);
var G__34880 = (0);
seq__34090 = G__34877;
chunk__34091 = G__34878;
count__34092 = G__34879;
i__34093 = G__34880;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34124,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34148 = k34124;
var G__34148__$1 = (((G__34148 instanceof cljs.core.Keyword))?G__34148.fqn:null);
switch (G__34148__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34124,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34158){
var vec__34159 = p__34158;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34159,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34159,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34123){
var self__ = this;
var G__34123__$1 = this;
return (new cljs.core.RecordIter((0),G__34123__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34125,other34126){
var self__ = this;
var this34125__$1 = this;
return (((!((other34126 == null)))) && ((((this34125__$1.constructor === other34126.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34125__$1.x,other34126.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34125__$1.y,other34126.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34125__$1.__extmap,other34126.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34124){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34224 = k34124;
var G__34224__$1 = (((G__34224 instanceof cljs.core.Keyword))?G__34224.fqn:null);
switch (G__34224__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34124);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34123){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34232 = cljs.core.keyword_identical_QMARK_;
var expr__34233 = k__4511__auto__;
if(cljs.core.truth_((pred__34232.cljs$core$IFn$_invoke$arity$2 ? pred__34232.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34233) : pred__34232.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34233)))){
return (new shadow.dom.Coordinate(G__34123,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34232.cljs$core$IFn$_invoke$arity$2 ? pred__34232.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34233) : pred__34232.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34233)))){
return (new shadow.dom.Coordinate(self__.x,G__34123,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34123),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34123){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34123,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34133){
var extmap__4542__auto__ = (function (){var G__34265 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34133,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34133)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34265);
} else {
return G__34265;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34133),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34133),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34278,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34290 = k34278;
var G__34290__$1 = (((G__34290 instanceof cljs.core.Keyword))?G__34290.fqn:null);
switch (G__34290__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34278,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34302){
var vec__34304 = p__34302;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34304,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34304,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34277){
var self__ = this;
var G__34277__$1 = this;
return (new cljs.core.RecordIter((0),G__34277__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34279,other34280){
var self__ = this;
var this34279__$1 = this;
return (((!((other34280 == null)))) && ((((this34279__$1.constructor === other34280.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34279__$1.w,other34280.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34279__$1.h,other34280.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34279__$1.__extmap,other34280.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34278){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34336 = k34278;
var G__34336__$1 = (((G__34336 instanceof cljs.core.Keyword))?G__34336.fqn:null);
switch (G__34336__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34278);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34277){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34343 = cljs.core.keyword_identical_QMARK_;
var expr__34344 = k__4511__auto__;
if(cljs.core.truth_((pred__34343.cljs$core$IFn$_invoke$arity$2 ? pred__34343.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34344) : pred__34343.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34344)))){
return (new shadow.dom.Size(G__34277,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34343.cljs$core$IFn$_invoke$arity$2 ? pred__34343.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34344) : pred__34343.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34344)))){
return (new shadow.dom.Size(self__.w,G__34277,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34277),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34277){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34277,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34284){
var extmap__4542__auto__ = (function (){var G__34366 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34284,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34284)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34366);
} else {
return G__34366;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34284),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34284),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var G__34898 = (i + (1));
var G__34899 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34898;
ret = G__34899;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34395){
var vec__34397 = p__34395;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34397,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34397,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34410 = arguments.length;
switch (G__34410) {
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
var G__34901 = ps;
var G__34902 = (i + (1));
el__$1 = G__34901;
i = G__34902;
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
var vec__34454 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34454,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34454,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34454,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34458_34903 = cljs.core.seq(props);
var chunk__34460_34904 = null;
var count__34461_34905 = (0);
var i__34462_34906 = (0);
while(true){
if((i__34462_34906 < count__34461_34905)){
var vec__34475_34907 = chunk__34460_34904.cljs$core$IIndexed$_nth$arity$2(null,i__34462_34906);
var k_34908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34475_34907,(0),null);
var v_34909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34475_34907,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34908);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34908),v_34909);


var G__34910 = seq__34458_34903;
var G__34911 = chunk__34460_34904;
var G__34912 = count__34461_34905;
var G__34913 = (i__34462_34906 + (1));
seq__34458_34903 = G__34910;
chunk__34460_34904 = G__34911;
count__34461_34905 = G__34912;
i__34462_34906 = G__34913;
continue;
} else {
var temp__5753__auto___34914 = cljs.core.seq(seq__34458_34903);
if(temp__5753__auto___34914){
var seq__34458_34915__$1 = temp__5753__auto___34914;
if(cljs.core.chunked_seq_QMARK_(seq__34458_34915__$1)){
var c__4679__auto___34916 = cljs.core.chunk_first(seq__34458_34915__$1);
var G__34917 = cljs.core.chunk_rest(seq__34458_34915__$1);
var G__34918 = c__4679__auto___34916;
var G__34919 = cljs.core.count(c__4679__auto___34916);
var G__34920 = (0);
seq__34458_34903 = G__34917;
chunk__34460_34904 = G__34918;
count__34461_34905 = G__34919;
i__34462_34906 = G__34920;
continue;
} else {
var vec__34481_34921 = cljs.core.first(seq__34458_34915__$1);
var k_34922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34481_34921,(0),null);
var v_34923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34481_34921,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34922);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34922),v_34923);


var G__34924 = cljs.core.next(seq__34458_34915__$1);
var G__34925 = null;
var G__34926 = (0);
var G__34927 = (0);
seq__34458_34903 = G__34924;
chunk__34460_34904 = G__34925;
count__34461_34905 = G__34926;
i__34462_34906 = G__34927;
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
var vec__34488 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34488,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34488,(1),null);
var seq__34491_34929 = cljs.core.seq(node_children);
var chunk__34493_34930 = null;
var count__34494_34931 = (0);
var i__34495_34932 = (0);
while(true){
if((i__34495_34932 < count__34494_34931)){
var child_struct_34933 = chunk__34493_34930.cljs$core$IIndexed$_nth$arity$2(null,i__34495_34932);
if((!((child_struct_34933 == null)))){
if(typeof child_struct_34933 === 'string'){
var text_34935 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34935),child_struct_34933].join(''));
} else {
var children_34936 = shadow.dom.svg_node(child_struct_34933);
if(cljs.core.seq_QMARK_(children_34936)){
var seq__34520_34937 = cljs.core.seq(children_34936);
var chunk__34522_34938 = null;
var count__34523_34939 = (0);
var i__34524_34940 = (0);
while(true){
if((i__34524_34940 < count__34523_34939)){
var child_34941 = chunk__34522_34938.cljs$core$IIndexed$_nth$arity$2(null,i__34524_34940);
if(cljs.core.truth_(child_34941)){
node.appendChild(child_34941);


var G__34942 = seq__34520_34937;
var G__34943 = chunk__34522_34938;
var G__34944 = count__34523_34939;
var G__34945 = (i__34524_34940 + (1));
seq__34520_34937 = G__34942;
chunk__34522_34938 = G__34943;
count__34523_34939 = G__34944;
i__34524_34940 = G__34945;
continue;
} else {
var G__34946 = seq__34520_34937;
var G__34947 = chunk__34522_34938;
var G__34948 = count__34523_34939;
var G__34949 = (i__34524_34940 + (1));
seq__34520_34937 = G__34946;
chunk__34522_34938 = G__34947;
count__34523_34939 = G__34948;
i__34524_34940 = G__34949;
continue;
}
} else {
var temp__5753__auto___34950 = cljs.core.seq(seq__34520_34937);
if(temp__5753__auto___34950){
var seq__34520_34951__$1 = temp__5753__auto___34950;
if(cljs.core.chunked_seq_QMARK_(seq__34520_34951__$1)){
var c__4679__auto___34952 = cljs.core.chunk_first(seq__34520_34951__$1);
var G__34953 = cljs.core.chunk_rest(seq__34520_34951__$1);
var G__34954 = c__4679__auto___34952;
var G__34955 = cljs.core.count(c__4679__auto___34952);
var G__34956 = (0);
seq__34520_34937 = G__34953;
chunk__34522_34938 = G__34954;
count__34523_34939 = G__34955;
i__34524_34940 = G__34956;
continue;
} else {
var child_34957 = cljs.core.first(seq__34520_34951__$1);
if(cljs.core.truth_(child_34957)){
node.appendChild(child_34957);


var G__34958 = cljs.core.next(seq__34520_34951__$1);
var G__34959 = null;
var G__34960 = (0);
var G__34961 = (0);
seq__34520_34937 = G__34958;
chunk__34522_34938 = G__34959;
count__34523_34939 = G__34960;
i__34524_34940 = G__34961;
continue;
} else {
var G__34962 = cljs.core.next(seq__34520_34951__$1);
var G__34963 = null;
var G__34964 = (0);
var G__34965 = (0);
seq__34520_34937 = G__34962;
chunk__34522_34938 = G__34963;
count__34523_34939 = G__34964;
i__34524_34940 = G__34965;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34936);
}
}


var G__34966 = seq__34491_34929;
var G__34967 = chunk__34493_34930;
var G__34968 = count__34494_34931;
var G__34969 = (i__34495_34932 + (1));
seq__34491_34929 = G__34966;
chunk__34493_34930 = G__34967;
count__34494_34931 = G__34968;
i__34495_34932 = G__34969;
continue;
} else {
var G__34970 = seq__34491_34929;
var G__34971 = chunk__34493_34930;
var G__34972 = count__34494_34931;
var G__34973 = (i__34495_34932 + (1));
seq__34491_34929 = G__34970;
chunk__34493_34930 = G__34971;
count__34494_34931 = G__34972;
i__34495_34932 = G__34973;
continue;
}
} else {
var temp__5753__auto___34974 = cljs.core.seq(seq__34491_34929);
if(temp__5753__auto___34974){
var seq__34491_34975__$1 = temp__5753__auto___34974;
if(cljs.core.chunked_seq_QMARK_(seq__34491_34975__$1)){
var c__4679__auto___34976 = cljs.core.chunk_first(seq__34491_34975__$1);
var G__34977 = cljs.core.chunk_rest(seq__34491_34975__$1);
var G__34978 = c__4679__auto___34976;
var G__34979 = cljs.core.count(c__4679__auto___34976);
var G__34980 = (0);
seq__34491_34929 = G__34977;
chunk__34493_34930 = G__34978;
count__34494_34931 = G__34979;
i__34495_34932 = G__34980;
continue;
} else {
var child_struct_34981 = cljs.core.first(seq__34491_34975__$1);
if((!((child_struct_34981 == null)))){
if(typeof child_struct_34981 === 'string'){
var text_34982 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34982),child_struct_34981].join(''));
} else {
var children_34984 = shadow.dom.svg_node(child_struct_34981);
if(cljs.core.seq_QMARK_(children_34984)){
var seq__34534_34985 = cljs.core.seq(children_34984);
var chunk__34536_34986 = null;
var count__34537_34987 = (0);
var i__34538_34988 = (0);
while(true){
if((i__34538_34988 < count__34537_34987)){
var child_34989 = chunk__34536_34986.cljs$core$IIndexed$_nth$arity$2(null,i__34538_34988);
if(cljs.core.truth_(child_34989)){
node.appendChild(child_34989);


var G__34990 = seq__34534_34985;
var G__34991 = chunk__34536_34986;
var G__34992 = count__34537_34987;
var G__34993 = (i__34538_34988 + (1));
seq__34534_34985 = G__34990;
chunk__34536_34986 = G__34991;
count__34537_34987 = G__34992;
i__34538_34988 = G__34993;
continue;
} else {
var G__34994 = seq__34534_34985;
var G__34995 = chunk__34536_34986;
var G__34996 = count__34537_34987;
var G__34997 = (i__34538_34988 + (1));
seq__34534_34985 = G__34994;
chunk__34536_34986 = G__34995;
count__34537_34987 = G__34996;
i__34538_34988 = G__34997;
continue;
}
} else {
var temp__5753__auto___34998__$1 = cljs.core.seq(seq__34534_34985);
if(temp__5753__auto___34998__$1){
var seq__34534_34999__$1 = temp__5753__auto___34998__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34534_34999__$1)){
var c__4679__auto___35001 = cljs.core.chunk_first(seq__34534_34999__$1);
var G__35002 = cljs.core.chunk_rest(seq__34534_34999__$1);
var G__35003 = c__4679__auto___35001;
var G__35004 = cljs.core.count(c__4679__auto___35001);
var G__35005 = (0);
seq__34534_34985 = G__35002;
chunk__34536_34986 = G__35003;
count__34537_34987 = G__35004;
i__34538_34988 = G__35005;
continue;
} else {
var child_35007 = cljs.core.first(seq__34534_34999__$1);
if(cljs.core.truth_(child_35007)){
node.appendChild(child_35007);


var G__35008 = cljs.core.next(seq__34534_34999__$1);
var G__35009 = null;
var G__35010 = (0);
var G__35011 = (0);
seq__34534_34985 = G__35008;
chunk__34536_34986 = G__35009;
count__34537_34987 = G__35010;
i__34538_34988 = G__35011;
continue;
} else {
var G__35012 = cljs.core.next(seq__34534_34999__$1);
var G__35013 = null;
var G__35014 = (0);
var G__35015 = (0);
seq__34534_34985 = G__35012;
chunk__34536_34986 = G__35013;
count__34537_34987 = G__35014;
i__34538_34988 = G__35015;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34984);
}
}


var G__35016 = cljs.core.next(seq__34491_34975__$1);
var G__35017 = null;
var G__35018 = (0);
var G__35019 = (0);
seq__34491_34929 = G__35016;
chunk__34493_34930 = G__35017;
count__34494_34931 = G__35018;
i__34495_34932 = G__35019;
continue;
} else {
var G__35020 = cljs.core.next(seq__34491_34975__$1);
var G__35021 = null;
var G__35022 = (0);
var G__35023 = (0);
seq__34491_34929 = G__35020;
chunk__34493_34930 = G__35021;
count__34494_34931 = G__35022;
i__34495_34932 = G__35023;
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
var len__4864__auto___35027 = arguments.length;
var i__4865__auto___35028 = (0);
while(true){
if((i__4865__auto___35028 < len__4864__auto___35027)){
args__4870__auto__.push((arguments[i__4865__auto___35028]));

var G__35029 = (i__4865__auto___35028 + (1));
i__4865__auto___35028 = G__35029;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34550){
var G__34551 = cljs.core.first(seq34550);
var seq34550__$1 = cljs.core.next(seq34550);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34551,seq34550__$1);
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
var G__34567 = arguments.length;
switch (G__34567) {
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
var c__28967__auto___35031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28968__auto__ = (function (){var switch__28349__auto__ = (function (state_34578){
var state_val_34579 = (state_34578[(1)]);
if((state_val_34579 === (1))){
var state_34578__$1 = state_34578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34578__$1,(2),once_or_cleanup);
} else {
if((state_val_34579 === (2))){
var inst_34575 = (state_34578[(2)]);
var inst_34576 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34578__$1 = (function (){var statearr_34581 = state_34578;
(statearr_34581[(7)] = inst_34575);

return statearr_34581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34578__$1,inst_34576);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28350__auto__ = null;
var shadow$dom$state_machine__28350__auto____0 = (function (){
var statearr_34583 = [null,null,null,null,null,null,null,null];
(statearr_34583[(0)] = shadow$dom$state_machine__28350__auto__);

(statearr_34583[(1)] = (1));

return statearr_34583;
});
var shadow$dom$state_machine__28350__auto____1 = (function (state_34578){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_34578);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e34584){var ex__28353__auto__ = e34584;
var statearr_34585_35032 = state_34578;
(statearr_34585_35032[(2)] = ex__28353__auto__);


if(cljs.core.seq((state_34578[(4)]))){
var statearr_34586_35033 = state_34578;
(statearr_34586_35033[(1)] = cljs.core.first((state_34578[(4)])));

} else {
throw ex__28353__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35034 = state_34578;
state_34578 = G__35034;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
shadow$dom$state_machine__28350__auto__ = function(state_34578){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28350__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28350__auto____1.call(this,state_34578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28350__auto____0;
shadow$dom$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28350__auto____1;
return shadow$dom$state_machine__28350__auto__;
})()
})();
var state__28969__auto__ = (function (){var statearr_34588 = f__28968__auto__();
(statearr_34588[(6)] = c__28967__auto___35031);

return statearr_34588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28969__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
