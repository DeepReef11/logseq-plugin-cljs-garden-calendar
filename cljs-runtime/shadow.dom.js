goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34490 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_34490(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34491 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_34491(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33043 = coll;
var G__33044 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33043,G__33044) : shadow.dom.lazy_native_coll_seq.call(null,G__33043,G__33044));
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
var G__33095 = arguments.length;
switch (G__33095) {
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
var G__33120 = arguments.length;
switch (G__33120) {
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
var G__33144 = arguments.length;
switch (G__33144) {
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
var G__33173 = arguments.length;
switch (G__33173) {
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
var G__33200 = arguments.length;
switch (G__33200) {
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
var G__33219 = arguments.length;
switch (G__33219) {
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
}catch (e33247){if((e33247 instanceof Object)){
var e = e33247;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33247;

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
var seq__33269 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33270 = null;
var count__33271 = (0);
var i__33272 = (0);
while(true){
if((i__33272 < count__33271)){
var el = chunk__33270.cljs$core$IIndexed$_nth$arity$2(null,i__33272);
var handler_34513__$1 = ((function (seq__33269,chunk__33270,count__33271,i__33272,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33269,chunk__33270,count__33271,i__33272,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34513__$1);


var G__34514 = seq__33269;
var G__34515 = chunk__33270;
var G__34516 = count__33271;
var G__34517 = (i__33272 + (1));
seq__33269 = G__34514;
chunk__33270 = G__34515;
count__33271 = G__34516;
i__33272 = G__34517;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33269);
if(temp__5753__auto__){
var seq__33269__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33269__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33269__$1);
var G__34519 = cljs.core.chunk_rest(seq__33269__$1);
var G__34520 = c__4679__auto__;
var G__34521 = cljs.core.count(c__4679__auto__);
var G__34522 = (0);
seq__33269 = G__34519;
chunk__33270 = G__34520;
count__33271 = G__34521;
i__33272 = G__34522;
continue;
} else {
var el = cljs.core.first(seq__33269__$1);
var handler_34524__$1 = ((function (seq__33269,chunk__33270,count__33271,i__33272,el,seq__33269__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33269,chunk__33270,count__33271,i__33272,el,seq__33269__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34524__$1);


var G__34525 = cljs.core.next(seq__33269__$1);
var G__34526 = null;
var G__34527 = (0);
var G__34528 = (0);
seq__33269 = G__34525;
chunk__33270 = G__34526;
count__33271 = G__34527;
i__33272 = G__34528;
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
var G__33302 = arguments.length;
switch (G__33302) {
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
var seq__33313 = cljs.core.seq(events);
var chunk__33314 = null;
var count__33315 = (0);
var i__33316 = (0);
while(true){
if((i__33316 < count__33315)){
var vec__33346 = chunk__33314.cljs$core$IIndexed$_nth$arity$2(null,i__33316);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33346,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33346,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34532 = seq__33313;
var G__34533 = chunk__33314;
var G__34534 = count__33315;
var G__34535 = (i__33316 + (1));
seq__33313 = G__34532;
chunk__33314 = G__34533;
count__33315 = G__34534;
i__33316 = G__34535;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33313);
if(temp__5753__auto__){
var seq__33313__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33313__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33313__$1);
var G__34536 = cljs.core.chunk_rest(seq__33313__$1);
var G__34537 = c__4679__auto__;
var G__34538 = cljs.core.count(c__4679__auto__);
var G__34539 = (0);
seq__33313 = G__34536;
chunk__33314 = G__34537;
count__33315 = G__34538;
i__33316 = G__34539;
continue;
} else {
var vec__33355 = cljs.core.first(seq__33313__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33355,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33355,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34540 = cljs.core.next(seq__33313__$1);
var G__34541 = null;
var G__34542 = (0);
var G__34543 = (0);
seq__33313 = G__34540;
chunk__33314 = G__34541;
count__33315 = G__34542;
i__33316 = G__34543;
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
var seq__33368 = cljs.core.seq(styles);
var chunk__33369 = null;
var count__33370 = (0);
var i__33371 = (0);
while(true){
if((i__33371 < count__33370)){
var vec__33394 = chunk__33369.cljs$core$IIndexed$_nth$arity$2(null,i__33371);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33394,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33394,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34546 = seq__33368;
var G__34547 = chunk__33369;
var G__34548 = count__33370;
var G__34549 = (i__33371 + (1));
seq__33368 = G__34546;
chunk__33369 = G__34547;
count__33370 = G__34548;
i__33371 = G__34549;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33368);
if(temp__5753__auto__){
var seq__33368__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33368__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33368__$1);
var G__34550 = cljs.core.chunk_rest(seq__33368__$1);
var G__34551 = c__4679__auto__;
var G__34552 = cljs.core.count(c__4679__auto__);
var G__34553 = (0);
seq__33368 = G__34550;
chunk__33369 = G__34551;
count__33370 = G__34552;
i__33371 = G__34553;
continue;
} else {
var vec__33406 = cljs.core.first(seq__33368__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33406,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33406,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34556 = cljs.core.next(seq__33368__$1);
var G__34557 = null;
var G__34558 = (0);
var G__34559 = (0);
seq__33368 = G__34556;
chunk__33369 = G__34557;
count__33370 = G__34558;
i__33371 = G__34559;
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
var G__33416_34560 = key;
var G__33416_34561__$1 = (((G__33416_34560 instanceof cljs.core.Keyword))?G__33416_34560.fqn:null);
switch (G__33416_34561__$1) {
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
var ks_34565 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_34565,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_34565,"aria-");
}
})())){
el.setAttribute(ks_34565,value);
} else {
(el[ks_34565] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33464){
var map__33466 = p__33464;
var map__33466__$1 = cljs.core.__destructure_map(map__33466);
var props = map__33466__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33466__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33470 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33470,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33470,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33470,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33474 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33474,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33474;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33476 = arguments.length;
switch (G__33476) {
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
var vec__33504 = p__33503;
var seq__33505 = cljs.core.seq(vec__33504);
var first__33506 = cljs.core.first(seq__33505);
var seq__33505__$1 = cljs.core.next(seq__33505);
var nn = first__33506;
var first__33506__$1 = cljs.core.first(seq__33505__$1);
var seq__33505__$2 = cljs.core.next(seq__33505__$1);
var np = first__33506__$1;
var nc = seq__33505__$2;
var node = vec__33504;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33513 = nn;
var G__33514 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33513,G__33514) : create_fn.call(null,G__33513,G__33514));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33520 = nn;
var G__33521 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33520,G__33521) : create_fn.call(null,G__33520,G__33521));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33529 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33529,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33529,(1),null);
var seq__33534_34578 = cljs.core.seq(node_children);
var chunk__33535_34579 = null;
var count__33536_34580 = (0);
var i__33537_34581 = (0);
while(true){
if((i__33537_34581 < count__33536_34580)){
var child_struct_34582 = chunk__33535_34579.cljs$core$IIndexed$_nth$arity$2(null,i__33537_34581);
var children_34583 = shadow.dom.dom_node(child_struct_34582);
if(cljs.core.seq_QMARK_(children_34583)){
var seq__33590_34584 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34583));
var chunk__33592_34585 = null;
var count__33593_34586 = (0);
var i__33594_34587 = (0);
while(true){
if((i__33594_34587 < count__33593_34586)){
var child_34588 = chunk__33592_34585.cljs$core$IIndexed$_nth$arity$2(null,i__33594_34587);
if(cljs.core.truth_(child_34588)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34588);


var G__34589 = seq__33590_34584;
var G__34590 = chunk__33592_34585;
var G__34591 = count__33593_34586;
var G__34592 = (i__33594_34587 + (1));
seq__33590_34584 = G__34589;
chunk__33592_34585 = G__34590;
count__33593_34586 = G__34591;
i__33594_34587 = G__34592;
continue;
} else {
var G__34593 = seq__33590_34584;
var G__34594 = chunk__33592_34585;
var G__34595 = count__33593_34586;
var G__34596 = (i__33594_34587 + (1));
seq__33590_34584 = G__34593;
chunk__33592_34585 = G__34594;
count__33593_34586 = G__34595;
i__33594_34587 = G__34596;
continue;
}
} else {
var temp__5753__auto___34597 = cljs.core.seq(seq__33590_34584);
if(temp__5753__auto___34597){
var seq__33590_34598__$1 = temp__5753__auto___34597;
if(cljs.core.chunked_seq_QMARK_(seq__33590_34598__$1)){
var c__4679__auto___34599 = cljs.core.chunk_first(seq__33590_34598__$1);
var G__34600 = cljs.core.chunk_rest(seq__33590_34598__$1);
var G__34601 = c__4679__auto___34599;
var G__34602 = cljs.core.count(c__4679__auto___34599);
var G__34603 = (0);
seq__33590_34584 = G__34600;
chunk__33592_34585 = G__34601;
count__33593_34586 = G__34602;
i__33594_34587 = G__34603;
continue;
} else {
var child_34604 = cljs.core.first(seq__33590_34598__$1);
if(cljs.core.truth_(child_34604)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34604);


var G__34606 = cljs.core.next(seq__33590_34598__$1);
var G__34607 = null;
var G__34608 = (0);
var G__34609 = (0);
seq__33590_34584 = G__34606;
chunk__33592_34585 = G__34607;
count__33593_34586 = G__34608;
i__33594_34587 = G__34609;
continue;
} else {
var G__34611 = cljs.core.next(seq__33590_34598__$1);
var G__34612 = null;
var G__34613 = (0);
var G__34614 = (0);
seq__33590_34584 = G__34611;
chunk__33592_34585 = G__34612;
count__33593_34586 = G__34613;
i__33594_34587 = G__34614;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34583);
}


var G__34616 = seq__33534_34578;
var G__34617 = chunk__33535_34579;
var G__34618 = count__33536_34580;
var G__34619 = (i__33537_34581 + (1));
seq__33534_34578 = G__34616;
chunk__33535_34579 = G__34617;
count__33536_34580 = G__34618;
i__33537_34581 = G__34619;
continue;
} else {
var temp__5753__auto___34620 = cljs.core.seq(seq__33534_34578);
if(temp__5753__auto___34620){
var seq__33534_34621__$1 = temp__5753__auto___34620;
if(cljs.core.chunked_seq_QMARK_(seq__33534_34621__$1)){
var c__4679__auto___34622 = cljs.core.chunk_first(seq__33534_34621__$1);
var G__34623 = cljs.core.chunk_rest(seq__33534_34621__$1);
var G__34624 = c__4679__auto___34622;
var G__34625 = cljs.core.count(c__4679__auto___34622);
var G__34626 = (0);
seq__33534_34578 = G__34623;
chunk__33535_34579 = G__34624;
count__33536_34580 = G__34625;
i__33537_34581 = G__34626;
continue;
} else {
var child_struct_34628 = cljs.core.first(seq__33534_34621__$1);
var children_34629 = shadow.dom.dom_node(child_struct_34628);
if(cljs.core.seq_QMARK_(children_34629)){
var seq__33630_34630 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34629));
var chunk__33632_34631 = null;
var count__33633_34632 = (0);
var i__33634_34634 = (0);
while(true){
if((i__33634_34634 < count__33633_34632)){
var child_34635 = chunk__33632_34631.cljs$core$IIndexed$_nth$arity$2(null,i__33634_34634);
if(cljs.core.truth_(child_34635)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34635);


var G__34636 = seq__33630_34630;
var G__34637 = chunk__33632_34631;
var G__34638 = count__33633_34632;
var G__34639 = (i__33634_34634 + (1));
seq__33630_34630 = G__34636;
chunk__33632_34631 = G__34637;
count__33633_34632 = G__34638;
i__33634_34634 = G__34639;
continue;
} else {
var G__34640 = seq__33630_34630;
var G__34641 = chunk__33632_34631;
var G__34642 = count__33633_34632;
var G__34643 = (i__33634_34634 + (1));
seq__33630_34630 = G__34640;
chunk__33632_34631 = G__34641;
count__33633_34632 = G__34642;
i__33634_34634 = G__34643;
continue;
}
} else {
var temp__5753__auto___34644__$1 = cljs.core.seq(seq__33630_34630);
if(temp__5753__auto___34644__$1){
var seq__33630_34645__$1 = temp__5753__auto___34644__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33630_34645__$1)){
var c__4679__auto___34646 = cljs.core.chunk_first(seq__33630_34645__$1);
var G__34647 = cljs.core.chunk_rest(seq__33630_34645__$1);
var G__34648 = c__4679__auto___34646;
var G__34649 = cljs.core.count(c__4679__auto___34646);
var G__34650 = (0);
seq__33630_34630 = G__34647;
chunk__33632_34631 = G__34648;
count__33633_34632 = G__34649;
i__33634_34634 = G__34650;
continue;
} else {
var child_34651 = cljs.core.first(seq__33630_34645__$1);
if(cljs.core.truth_(child_34651)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34651);


var G__34653 = cljs.core.next(seq__33630_34645__$1);
var G__34654 = null;
var G__34655 = (0);
var G__34656 = (0);
seq__33630_34630 = G__34653;
chunk__33632_34631 = G__34654;
count__33633_34632 = G__34655;
i__33634_34634 = G__34656;
continue;
} else {
var G__34657 = cljs.core.next(seq__33630_34645__$1);
var G__34658 = null;
var G__34659 = (0);
var G__34660 = (0);
seq__33630_34630 = G__34657;
chunk__33632_34631 = G__34658;
count__33633_34632 = G__34659;
i__33634_34634 = G__34660;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34629);
}


var G__34662 = cljs.core.next(seq__33534_34621__$1);
var G__34663 = null;
var G__34664 = (0);
var G__34665 = (0);
seq__33534_34578 = G__34662;
chunk__33535_34579 = G__34663;
count__33536_34580 = G__34664;
i__33537_34581 = G__34665;
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
var seq__33717 = cljs.core.seq(node);
var chunk__33718 = null;
var count__33719 = (0);
var i__33720 = (0);
while(true){
if((i__33720 < count__33719)){
var n = chunk__33718.cljs$core$IIndexed$_nth$arity$2(null,i__33720);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34672 = seq__33717;
var G__34673 = chunk__33718;
var G__34674 = count__33719;
var G__34675 = (i__33720 + (1));
seq__33717 = G__34672;
chunk__33718 = G__34673;
count__33719 = G__34674;
i__33720 = G__34675;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33717);
if(temp__5753__auto__){
var seq__33717__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33717__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33717__$1);
var G__34676 = cljs.core.chunk_rest(seq__33717__$1);
var G__34677 = c__4679__auto__;
var G__34678 = cljs.core.count(c__4679__auto__);
var G__34679 = (0);
seq__33717 = G__34676;
chunk__33718 = G__34677;
count__33719 = G__34678;
i__33720 = G__34679;
continue;
} else {
var n = cljs.core.first(seq__33717__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34680 = cljs.core.next(seq__33717__$1);
var G__34681 = null;
var G__34682 = (0);
var G__34683 = (0);
seq__33717 = G__34680;
chunk__33718 = G__34681;
count__33719 = G__34682;
i__33720 = G__34683;
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
var G__33760 = arguments.length;
switch (G__33760) {
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
var G__33790 = arguments.length;
switch (G__33790) {
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
var G__33833 = arguments.length;
switch (G__33833) {
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
var len__4864__auto___34690 = arguments.length;
var i__4865__auto___34691 = (0);
while(true){
if((i__4865__auto___34691 < len__4864__auto___34690)){
args__4870__auto__.push((arguments[i__4865__auto___34691]));

var G__34692 = (i__4865__auto___34691 + (1));
i__4865__auto___34691 = G__34692;
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
var seq__33925_34693 = cljs.core.seq(nodes);
var chunk__33926_34694 = null;
var count__33927_34695 = (0);
var i__33928_34696 = (0);
while(true){
if((i__33928_34696 < count__33927_34695)){
var node_34697 = chunk__33926_34694.cljs$core$IIndexed$_nth$arity$2(null,i__33928_34696);
fragment.appendChild(shadow.dom._to_dom(node_34697));


var G__34698 = seq__33925_34693;
var G__34699 = chunk__33926_34694;
var G__34700 = count__33927_34695;
var G__34701 = (i__33928_34696 + (1));
seq__33925_34693 = G__34698;
chunk__33926_34694 = G__34699;
count__33927_34695 = G__34700;
i__33928_34696 = G__34701;
continue;
} else {
var temp__5753__auto___34702 = cljs.core.seq(seq__33925_34693);
if(temp__5753__auto___34702){
var seq__33925_34704__$1 = temp__5753__auto___34702;
if(cljs.core.chunked_seq_QMARK_(seq__33925_34704__$1)){
var c__4679__auto___34705 = cljs.core.chunk_first(seq__33925_34704__$1);
var G__34706 = cljs.core.chunk_rest(seq__33925_34704__$1);
var G__34707 = c__4679__auto___34705;
var G__34708 = cljs.core.count(c__4679__auto___34705);
var G__34709 = (0);
seq__33925_34693 = G__34706;
chunk__33926_34694 = G__34707;
count__33927_34695 = G__34708;
i__33928_34696 = G__34709;
continue;
} else {
var node_34711 = cljs.core.first(seq__33925_34704__$1);
fragment.appendChild(shadow.dom._to_dom(node_34711));


var G__34712 = cljs.core.next(seq__33925_34704__$1);
var G__34713 = null;
var G__34714 = (0);
var G__34715 = (0);
seq__33925_34693 = G__34712;
chunk__33926_34694 = G__34713;
count__33927_34695 = G__34714;
i__33928_34696 = G__34715;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33912){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33912));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33961_34717 = cljs.core.seq(scripts);
var chunk__33962_34718 = null;
var count__33963_34719 = (0);
var i__33964_34720 = (0);
while(true){
if((i__33964_34720 < count__33963_34719)){
var vec__33983_34721 = chunk__33962_34718.cljs$core$IIndexed$_nth$arity$2(null,i__33964_34720);
var script_tag_34722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33983_34721,(0),null);
var script_body_34723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33983_34721,(1),null);
eval(script_body_34723);


var G__34724 = seq__33961_34717;
var G__34725 = chunk__33962_34718;
var G__34726 = count__33963_34719;
var G__34727 = (i__33964_34720 + (1));
seq__33961_34717 = G__34724;
chunk__33962_34718 = G__34725;
count__33963_34719 = G__34726;
i__33964_34720 = G__34727;
continue;
} else {
var temp__5753__auto___34728 = cljs.core.seq(seq__33961_34717);
if(temp__5753__auto___34728){
var seq__33961_34729__$1 = temp__5753__auto___34728;
if(cljs.core.chunked_seq_QMARK_(seq__33961_34729__$1)){
var c__4679__auto___34730 = cljs.core.chunk_first(seq__33961_34729__$1);
var G__34731 = cljs.core.chunk_rest(seq__33961_34729__$1);
var G__34732 = c__4679__auto___34730;
var G__34733 = cljs.core.count(c__4679__auto___34730);
var G__34734 = (0);
seq__33961_34717 = G__34731;
chunk__33962_34718 = G__34732;
count__33963_34719 = G__34733;
i__33964_34720 = G__34734;
continue;
} else {
var vec__33991_34735 = cljs.core.first(seq__33961_34729__$1);
var script_tag_34736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33991_34735,(0),null);
var script_body_34737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33991_34735,(1),null);
eval(script_body_34737);


var G__34738 = cljs.core.next(seq__33961_34729__$1);
var G__34739 = null;
var G__34740 = (0);
var G__34741 = (0);
seq__33961_34717 = G__34738;
chunk__33962_34718 = G__34739;
count__33963_34719 = G__34740;
i__33964_34720 = G__34741;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33997){
var vec__33998 = p__33997;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33998,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33998,(1),null);
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
var G__34025 = arguments.length;
switch (G__34025) {
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
var seq__34030 = cljs.core.seq(style_keys);
var chunk__34031 = null;
var count__34032 = (0);
var i__34033 = (0);
while(true){
if((i__34033 < count__34032)){
var it = chunk__34031.cljs$core$IIndexed$_nth$arity$2(null,i__34033);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34744 = seq__34030;
var G__34745 = chunk__34031;
var G__34746 = count__34032;
var G__34747 = (i__34033 + (1));
seq__34030 = G__34744;
chunk__34031 = G__34745;
count__34032 = G__34746;
i__34033 = G__34747;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34030);
if(temp__5753__auto__){
var seq__34030__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34030__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34030__$1);
var G__34748 = cljs.core.chunk_rest(seq__34030__$1);
var G__34749 = c__4679__auto__;
var G__34750 = cljs.core.count(c__4679__auto__);
var G__34751 = (0);
seq__34030 = G__34748;
chunk__34031 = G__34749;
count__34032 = G__34750;
i__34033 = G__34751;
continue;
} else {
var it = cljs.core.first(seq__34030__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34752 = cljs.core.next(seq__34030__$1);
var G__34753 = null;
var G__34754 = (0);
var G__34755 = (0);
seq__34030 = G__34752;
chunk__34031 = G__34753;
count__34032 = G__34754;
i__34033 = G__34755;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34037,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34041 = k34037;
var G__34041__$1 = (((G__34041 instanceof cljs.core.Keyword))?G__34041.fqn:null);
switch (G__34041__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34037,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34042){
var vec__34043 = p__34042;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34043,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34043,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34036){
var self__ = this;
var G__34036__$1 = this;
return (new cljs.core.RecordIter((0),G__34036__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34038,other34039){
var self__ = this;
var this34038__$1 = this;
return (((!((other34039 == null)))) && ((((this34038__$1.constructor === other34039.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34038__$1.x,other34039.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34038__$1.y,other34039.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34038__$1.__extmap,other34039.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34037){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34054 = k34037;
var G__34054__$1 = (((G__34054 instanceof cljs.core.Keyword))?G__34054.fqn:null);
switch (G__34054__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34037);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34036){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34055 = cljs.core.keyword_identical_QMARK_;
var expr__34056 = k__4511__auto__;
if(cljs.core.truth_((pred__34055.cljs$core$IFn$_invoke$arity$2 ? pred__34055.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34056) : pred__34055.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34056)))){
return (new shadow.dom.Coordinate(G__34036,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34055.cljs$core$IFn$_invoke$arity$2 ? pred__34055.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34056) : pred__34055.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34056)))){
return (new shadow.dom.Coordinate(self__.x,G__34036,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34036),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34036){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34036,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34040){
var extmap__4542__auto__ = (function (){var G__34058 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34040,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34040)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34058);
} else {
return G__34058;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34040),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34040),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34066,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34073 = k34066;
var G__34073__$1 = (((G__34073 instanceof cljs.core.Keyword))?G__34073.fqn:null);
switch (G__34073__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34066,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34076){
var vec__34081 = p__34076;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34081,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34081,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34065){
var self__ = this;
var G__34065__$1 = this;
return (new cljs.core.RecordIter((0),G__34065__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34067,other34068){
var self__ = this;
var this34067__$1 = this;
return (((!((other34068 == null)))) && ((((this34067__$1.constructor === other34068.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34067__$1.w,other34068.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34067__$1.h,other34068.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34067__$1.__extmap,other34068.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34066){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34110 = k34066;
var G__34110__$1 = (((G__34110 instanceof cljs.core.Keyword))?G__34110.fqn:null);
switch (G__34110__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34066);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34065){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34112 = cljs.core.keyword_identical_QMARK_;
var expr__34113 = k__4511__auto__;
if(cljs.core.truth_((pred__34112.cljs$core$IFn$_invoke$arity$2 ? pred__34112.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34113) : pred__34112.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34113)))){
return (new shadow.dom.Size(G__34065,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34112.cljs$core$IFn$_invoke$arity$2 ? pred__34112.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34113) : pred__34112.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34113)))){
return (new shadow.dom.Size(self__.w,G__34065,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34065),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34065){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34065,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34070){
var extmap__4542__auto__ = (function (){var G__34132 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34070,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34070)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34132);
} else {
return G__34132;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34070),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34070),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var G__34793 = (i + (1));
var G__34794 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34793;
ret = G__34794;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34218){
var vec__34222 = p__34218;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34222,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34222,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34229 = arguments.length;
switch (G__34229) {
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
var G__34809 = ps;
var G__34810 = (i + (1));
el__$1 = G__34809;
i = G__34810;
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
var vec__34265 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34265,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34265,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34265,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34272_34820 = cljs.core.seq(props);
var chunk__34273_34821 = null;
var count__34274_34822 = (0);
var i__34275_34823 = (0);
while(true){
if((i__34275_34823 < count__34274_34822)){
var vec__34305_34824 = chunk__34273_34821.cljs$core$IIndexed$_nth$arity$2(null,i__34275_34823);
var k_34825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34305_34824,(0),null);
var v_34826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34305_34824,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34825);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34825),v_34826);


var G__34827 = seq__34272_34820;
var G__34828 = chunk__34273_34821;
var G__34829 = count__34274_34822;
var G__34830 = (i__34275_34823 + (1));
seq__34272_34820 = G__34827;
chunk__34273_34821 = G__34828;
count__34274_34822 = G__34829;
i__34275_34823 = G__34830;
continue;
} else {
var temp__5753__auto___34831 = cljs.core.seq(seq__34272_34820);
if(temp__5753__auto___34831){
var seq__34272_34832__$1 = temp__5753__auto___34831;
if(cljs.core.chunked_seq_QMARK_(seq__34272_34832__$1)){
var c__4679__auto___34835 = cljs.core.chunk_first(seq__34272_34832__$1);
var G__34836 = cljs.core.chunk_rest(seq__34272_34832__$1);
var G__34837 = c__4679__auto___34835;
var G__34838 = cljs.core.count(c__4679__auto___34835);
var G__34839 = (0);
seq__34272_34820 = G__34836;
chunk__34273_34821 = G__34837;
count__34274_34822 = G__34838;
i__34275_34823 = G__34839;
continue;
} else {
var vec__34313_34841 = cljs.core.first(seq__34272_34832__$1);
var k_34842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34313_34841,(0),null);
var v_34843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34313_34841,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34842);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34842),v_34843);


var G__34845 = cljs.core.next(seq__34272_34832__$1);
var G__34846 = null;
var G__34847 = (0);
var G__34848 = (0);
seq__34272_34820 = G__34845;
chunk__34273_34821 = G__34846;
count__34274_34822 = G__34847;
i__34275_34823 = G__34848;
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
var vec__34340 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34340,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34340,(1),null);
var seq__34343_34850 = cljs.core.seq(node_children);
var chunk__34345_34851 = null;
var count__34346_34852 = (0);
var i__34347_34853 = (0);
while(true){
if((i__34347_34853 < count__34346_34852)){
var child_struct_34855 = chunk__34345_34851.cljs$core$IIndexed$_nth$arity$2(null,i__34347_34853);
if((!((child_struct_34855 == null)))){
if(typeof child_struct_34855 === 'string'){
var text_34856 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34856),child_struct_34855].join(''));
} else {
var children_34857 = shadow.dom.svg_node(child_struct_34855);
if(cljs.core.seq_QMARK_(children_34857)){
var seq__34420_34858 = cljs.core.seq(children_34857);
var chunk__34422_34859 = null;
var count__34423_34860 = (0);
var i__34424_34861 = (0);
while(true){
if((i__34424_34861 < count__34423_34860)){
var child_34862 = chunk__34422_34859.cljs$core$IIndexed$_nth$arity$2(null,i__34424_34861);
if(cljs.core.truth_(child_34862)){
node.appendChild(child_34862);


var G__34863 = seq__34420_34858;
var G__34864 = chunk__34422_34859;
var G__34865 = count__34423_34860;
var G__34866 = (i__34424_34861 + (1));
seq__34420_34858 = G__34863;
chunk__34422_34859 = G__34864;
count__34423_34860 = G__34865;
i__34424_34861 = G__34866;
continue;
} else {
var G__34867 = seq__34420_34858;
var G__34868 = chunk__34422_34859;
var G__34869 = count__34423_34860;
var G__34870 = (i__34424_34861 + (1));
seq__34420_34858 = G__34867;
chunk__34422_34859 = G__34868;
count__34423_34860 = G__34869;
i__34424_34861 = G__34870;
continue;
}
} else {
var temp__5753__auto___34873 = cljs.core.seq(seq__34420_34858);
if(temp__5753__auto___34873){
var seq__34420_34875__$1 = temp__5753__auto___34873;
if(cljs.core.chunked_seq_QMARK_(seq__34420_34875__$1)){
var c__4679__auto___34876 = cljs.core.chunk_first(seq__34420_34875__$1);
var G__34877 = cljs.core.chunk_rest(seq__34420_34875__$1);
var G__34878 = c__4679__auto___34876;
var G__34879 = cljs.core.count(c__4679__auto___34876);
var G__34880 = (0);
seq__34420_34858 = G__34877;
chunk__34422_34859 = G__34878;
count__34423_34860 = G__34879;
i__34424_34861 = G__34880;
continue;
} else {
var child_34881 = cljs.core.first(seq__34420_34875__$1);
if(cljs.core.truth_(child_34881)){
node.appendChild(child_34881);


var G__34882 = cljs.core.next(seq__34420_34875__$1);
var G__34883 = null;
var G__34884 = (0);
var G__34885 = (0);
seq__34420_34858 = G__34882;
chunk__34422_34859 = G__34883;
count__34423_34860 = G__34884;
i__34424_34861 = G__34885;
continue;
} else {
var G__34886 = cljs.core.next(seq__34420_34875__$1);
var G__34887 = null;
var G__34888 = (0);
var G__34889 = (0);
seq__34420_34858 = G__34886;
chunk__34422_34859 = G__34887;
count__34423_34860 = G__34888;
i__34424_34861 = G__34889;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34857);
}
}


var G__34890 = seq__34343_34850;
var G__34891 = chunk__34345_34851;
var G__34892 = count__34346_34852;
var G__34893 = (i__34347_34853 + (1));
seq__34343_34850 = G__34890;
chunk__34345_34851 = G__34891;
count__34346_34852 = G__34892;
i__34347_34853 = G__34893;
continue;
} else {
var G__34894 = seq__34343_34850;
var G__34895 = chunk__34345_34851;
var G__34896 = count__34346_34852;
var G__34897 = (i__34347_34853 + (1));
seq__34343_34850 = G__34894;
chunk__34345_34851 = G__34895;
count__34346_34852 = G__34896;
i__34347_34853 = G__34897;
continue;
}
} else {
var temp__5753__auto___34898 = cljs.core.seq(seq__34343_34850);
if(temp__5753__auto___34898){
var seq__34343_34899__$1 = temp__5753__auto___34898;
if(cljs.core.chunked_seq_QMARK_(seq__34343_34899__$1)){
var c__4679__auto___34900 = cljs.core.chunk_first(seq__34343_34899__$1);
var G__34901 = cljs.core.chunk_rest(seq__34343_34899__$1);
var G__34902 = c__4679__auto___34900;
var G__34903 = cljs.core.count(c__4679__auto___34900);
var G__34904 = (0);
seq__34343_34850 = G__34901;
chunk__34345_34851 = G__34902;
count__34346_34852 = G__34903;
i__34347_34853 = G__34904;
continue;
} else {
var child_struct_34906 = cljs.core.first(seq__34343_34899__$1);
if((!((child_struct_34906 == null)))){
if(typeof child_struct_34906 === 'string'){
var text_34910 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34910),child_struct_34906].join(''));
} else {
var children_34911 = shadow.dom.svg_node(child_struct_34906);
if(cljs.core.seq_QMARK_(children_34911)){
var seq__34433_34912 = cljs.core.seq(children_34911);
var chunk__34435_34913 = null;
var count__34436_34914 = (0);
var i__34437_34915 = (0);
while(true){
if((i__34437_34915 < count__34436_34914)){
var child_34916 = chunk__34435_34913.cljs$core$IIndexed$_nth$arity$2(null,i__34437_34915);
if(cljs.core.truth_(child_34916)){
node.appendChild(child_34916);


var G__34917 = seq__34433_34912;
var G__34918 = chunk__34435_34913;
var G__34919 = count__34436_34914;
var G__34920 = (i__34437_34915 + (1));
seq__34433_34912 = G__34917;
chunk__34435_34913 = G__34918;
count__34436_34914 = G__34919;
i__34437_34915 = G__34920;
continue;
} else {
var G__34921 = seq__34433_34912;
var G__34922 = chunk__34435_34913;
var G__34923 = count__34436_34914;
var G__34924 = (i__34437_34915 + (1));
seq__34433_34912 = G__34921;
chunk__34435_34913 = G__34922;
count__34436_34914 = G__34923;
i__34437_34915 = G__34924;
continue;
}
} else {
var temp__5753__auto___34925__$1 = cljs.core.seq(seq__34433_34912);
if(temp__5753__auto___34925__$1){
var seq__34433_34926__$1 = temp__5753__auto___34925__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34433_34926__$1)){
var c__4679__auto___34927 = cljs.core.chunk_first(seq__34433_34926__$1);
var G__34928 = cljs.core.chunk_rest(seq__34433_34926__$1);
var G__34929 = c__4679__auto___34927;
var G__34930 = cljs.core.count(c__4679__auto___34927);
var G__34931 = (0);
seq__34433_34912 = G__34928;
chunk__34435_34913 = G__34929;
count__34436_34914 = G__34930;
i__34437_34915 = G__34931;
continue;
} else {
var child_34932 = cljs.core.first(seq__34433_34926__$1);
if(cljs.core.truth_(child_34932)){
node.appendChild(child_34932);


var G__34933 = cljs.core.next(seq__34433_34926__$1);
var G__34934 = null;
var G__34935 = (0);
var G__34936 = (0);
seq__34433_34912 = G__34933;
chunk__34435_34913 = G__34934;
count__34436_34914 = G__34935;
i__34437_34915 = G__34936;
continue;
} else {
var G__34937 = cljs.core.next(seq__34433_34926__$1);
var G__34938 = null;
var G__34939 = (0);
var G__34940 = (0);
seq__34433_34912 = G__34937;
chunk__34435_34913 = G__34938;
count__34436_34914 = G__34939;
i__34437_34915 = G__34940;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34911);
}
}


var G__34941 = cljs.core.next(seq__34343_34899__$1);
var G__34942 = null;
var G__34943 = (0);
var G__34944 = (0);
seq__34343_34850 = G__34941;
chunk__34345_34851 = G__34942;
count__34346_34852 = G__34943;
i__34347_34853 = G__34944;
continue;
} else {
var G__34945 = cljs.core.next(seq__34343_34899__$1);
var G__34946 = null;
var G__34947 = (0);
var G__34948 = (0);
seq__34343_34850 = G__34945;
chunk__34345_34851 = G__34946;
count__34346_34852 = G__34947;
i__34347_34853 = G__34948;
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
var len__4864__auto___34955 = arguments.length;
var i__4865__auto___34956 = (0);
while(true){
if((i__4865__auto___34956 < len__4864__auto___34955)){
args__4870__auto__.push((arguments[i__4865__auto___34956]));

var G__34961 = (i__4865__auto___34956 + (1));
i__4865__auto___34956 = G__34961;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34454){
var G__34455 = cljs.core.first(seq34454);
var seq34454__$1 = cljs.core.next(seq34454);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34455,seq34454__$1);
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
var G__34465 = arguments.length;
switch (G__34465) {
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
var c__29321__auto___34967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29322__auto__ = (function (){var switch__28600__auto__ = (function (state_34472){
var state_val_34473 = (state_34472[(1)]);
if((state_val_34473 === (1))){
var state_34472__$1 = state_34472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34472__$1,(2),once_or_cleanup);
} else {
if((state_val_34473 === (2))){
var inst_34469 = (state_34472[(2)]);
var inst_34470 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34472__$1 = (function (){var statearr_34474 = state_34472;
(statearr_34474[(7)] = inst_34469);

return statearr_34474;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34472__$1,inst_34470);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28601__auto__ = null;
var shadow$dom$state_machine__28601__auto____0 = (function (){
var statearr_34475 = [null,null,null,null,null,null,null,null];
(statearr_34475[(0)] = shadow$dom$state_machine__28601__auto__);

(statearr_34475[(1)] = (1));

return statearr_34475;
});
var shadow$dom$state_machine__28601__auto____1 = (function (state_34472){
while(true){
var ret_value__28602__auto__ = (function (){try{while(true){
var result__28603__auto__ = switch__28600__auto__(state_34472);
if(cljs.core.keyword_identical_QMARK_(result__28603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28603__auto__;
}
break;
}
}catch (e34476){var ex__28604__auto__ = e34476;
var statearr_34477_34973 = state_34472;
(statearr_34477_34973[(2)] = ex__28604__auto__);


if(cljs.core.seq((state_34472[(4)]))){
var statearr_34478_34974 = state_34472;
(statearr_34478_34974[(1)] = cljs.core.first((state_34472[(4)])));

} else {
throw ex__28604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34975 = state_34472;
state_34472 = G__34975;
continue;
} else {
return ret_value__28602__auto__;
}
break;
}
});
shadow$dom$state_machine__28601__auto__ = function(state_34472){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28601__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28601__auto____1.call(this,state_34472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28601__auto____0;
shadow$dom$state_machine__28601__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28601__auto____1;
return shadow$dom$state_machine__28601__auto__;
})()
})();
var state__29323__auto__ = (function (){var statearr_34480 = f__29322__auto__();
(statearr_34480[(6)] = c__29321__auto___34967);

return statearr_34480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29323__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
