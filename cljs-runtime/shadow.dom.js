goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_40316 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_40316(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_40318 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_40318(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__38891 = coll;
var G__38892 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__38891,G__38892) : shadow.dom.lazy_native_coll_seq.call(null,G__38891,G__38892));
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
var G__38942 = arguments.length;
switch (G__38942) {
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
var G__38955 = arguments.length;
switch (G__38955) {
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
var G__38984 = arguments.length;
switch (G__38984) {
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
var G__39026 = arguments.length;
switch (G__39026) {
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
var G__39068 = arguments.length;
switch (G__39068) {
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
var G__39105 = arguments.length;
switch (G__39105) {
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
}catch (e39121){if((e39121 instanceof Object)){
var e = e39121;
return console.log("didnt support attachEvent",el,e);
} else {
throw e39121;

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
var seq__39177 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__39178 = null;
var count__39179 = (0);
var i__39180 = (0);
while(true){
if((i__39180 < count__39179)){
var el = chunk__39178.cljs$core$IIndexed$_nth$arity$2(null,i__39180);
var handler_40352__$1 = ((function (seq__39177,chunk__39178,count__39179,i__39180,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39177,chunk__39178,count__39179,i__39180,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40352__$1);


var G__40358 = seq__39177;
var G__40359 = chunk__39178;
var G__40360 = count__39179;
var G__40361 = (i__39180 + (1));
seq__39177 = G__40358;
chunk__39178 = G__40359;
count__39179 = G__40360;
i__39180 = G__40361;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39177);
if(temp__5753__auto__){
var seq__39177__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39177__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39177__$1);
var G__40367 = cljs.core.chunk_rest(seq__39177__$1);
var G__40368 = c__4679__auto__;
var G__40369 = cljs.core.count(c__4679__auto__);
var G__40370 = (0);
seq__39177 = G__40367;
chunk__39178 = G__40368;
count__39179 = G__40369;
i__39180 = G__40370;
continue;
} else {
var el = cljs.core.first(seq__39177__$1);
var handler_40371__$1 = ((function (seq__39177,chunk__39178,count__39179,i__39180,el,seq__39177__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39177,chunk__39178,count__39179,i__39180,el,seq__39177__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40371__$1);


var G__40376 = cljs.core.next(seq__39177__$1);
var G__40377 = null;
var G__40378 = (0);
var G__40379 = (0);
seq__39177 = G__40376;
chunk__39178 = G__40377;
count__39179 = G__40378;
i__39180 = G__40379;
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
var G__39254 = arguments.length;
switch (G__39254) {
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
var seq__39308 = cljs.core.seq(events);
var chunk__39309 = null;
var count__39310 = (0);
var i__39311 = (0);
while(true){
if((i__39311 < count__39310)){
var vec__39341 = chunk__39309.cljs$core$IIndexed$_nth$arity$2(null,i__39311);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39341,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39341,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40390 = seq__39308;
var G__40391 = chunk__39309;
var G__40392 = count__39310;
var G__40393 = (i__39311 + (1));
seq__39308 = G__40390;
chunk__39309 = G__40391;
count__39310 = G__40392;
i__39311 = G__40393;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39308);
if(temp__5753__auto__){
var seq__39308__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39308__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39308__$1);
var G__40394 = cljs.core.chunk_rest(seq__39308__$1);
var G__40395 = c__4679__auto__;
var G__40396 = cljs.core.count(c__4679__auto__);
var G__40397 = (0);
seq__39308 = G__40394;
chunk__39309 = G__40395;
count__39310 = G__40396;
i__39311 = G__40397;
continue;
} else {
var vec__39354 = cljs.core.first(seq__39308__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39354,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39354,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40398 = cljs.core.next(seq__39308__$1);
var G__40399 = null;
var G__40400 = (0);
var G__40401 = (0);
seq__39308 = G__40398;
chunk__39309 = G__40399;
count__39310 = G__40400;
i__39311 = G__40401;
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
var seq__39373 = cljs.core.seq(styles);
var chunk__39374 = null;
var count__39375 = (0);
var i__39376 = (0);
while(true){
if((i__39376 < count__39375)){
var vec__39414 = chunk__39374.cljs$core$IIndexed$_nth$arity$2(null,i__39376);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39414,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39414,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40403 = seq__39373;
var G__40404 = chunk__39374;
var G__40405 = count__39375;
var G__40406 = (i__39376 + (1));
seq__39373 = G__40403;
chunk__39374 = G__40404;
count__39375 = G__40405;
i__39376 = G__40406;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39373);
if(temp__5753__auto__){
var seq__39373__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39373__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39373__$1);
var G__40407 = cljs.core.chunk_rest(seq__39373__$1);
var G__40408 = c__4679__auto__;
var G__40409 = cljs.core.count(c__4679__auto__);
var G__40410 = (0);
seq__39373 = G__40407;
chunk__39374 = G__40408;
count__39375 = G__40409;
i__39376 = G__40410;
continue;
} else {
var vec__39434 = cljs.core.first(seq__39373__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39434,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39434,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40411 = cljs.core.next(seq__39373__$1);
var G__40412 = null;
var G__40413 = (0);
var G__40414 = (0);
seq__39373 = G__40411;
chunk__39374 = G__40412;
count__39375 = G__40413;
i__39376 = G__40414;
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
var G__39455_40415 = key;
var G__39455_40416__$1 = (((G__39455_40415 instanceof cljs.core.Keyword))?G__39455_40415.fqn:null);
switch (G__39455_40416__$1) {
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
var ks_40418 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_40418,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_40418,"aria-");
}
})())){
el.setAttribute(ks_40418,value);
} else {
(el[ks_40418] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__39515){
var map__39516 = p__39515;
var map__39516__$1 = cljs.core.__destructure_map(map__39516);
var props = map__39516__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39516__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__39521 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39521,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39521,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39521,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__39526 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__39526,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__39526;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__39537 = arguments.length;
switch (G__39537) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__39567){
var vec__39570 = p__39567;
var seq__39571 = cljs.core.seq(vec__39570);
var first__39572 = cljs.core.first(seq__39571);
var seq__39571__$1 = cljs.core.next(seq__39571);
var nn = first__39572;
var first__39572__$1 = cljs.core.first(seq__39571__$1);
var seq__39571__$2 = cljs.core.next(seq__39571__$1);
var np = first__39572__$1;
var nc = seq__39571__$2;
var node = vec__39570;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39586 = nn;
var G__39587 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39586,G__39587) : create_fn.call(null,G__39586,G__39587));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39593 = nn;
var G__39594 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39593,G__39594) : create_fn.call(null,G__39593,G__39594));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__39606 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39606,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39606,(1),null);
var seq__39609_40492 = cljs.core.seq(node_children);
var chunk__39610_40493 = null;
var count__39611_40494 = (0);
var i__39612_40495 = (0);
while(true){
if((i__39612_40495 < count__39611_40494)){
var child_struct_40496 = chunk__39610_40493.cljs$core$IIndexed$_nth$arity$2(null,i__39612_40495);
var children_40497 = shadow.dom.dom_node(child_struct_40496);
if(cljs.core.seq_QMARK_(children_40497)){
var seq__39678_40498 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40497));
var chunk__39680_40499 = null;
var count__39681_40500 = (0);
var i__39682_40501 = (0);
while(true){
if((i__39682_40501 < count__39681_40500)){
var child_40506 = chunk__39680_40499.cljs$core$IIndexed$_nth$arity$2(null,i__39682_40501);
if(cljs.core.truth_(child_40506)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40506);


var G__40507 = seq__39678_40498;
var G__40508 = chunk__39680_40499;
var G__40509 = count__39681_40500;
var G__40510 = (i__39682_40501 + (1));
seq__39678_40498 = G__40507;
chunk__39680_40499 = G__40508;
count__39681_40500 = G__40509;
i__39682_40501 = G__40510;
continue;
} else {
var G__40511 = seq__39678_40498;
var G__40512 = chunk__39680_40499;
var G__40513 = count__39681_40500;
var G__40514 = (i__39682_40501 + (1));
seq__39678_40498 = G__40511;
chunk__39680_40499 = G__40512;
count__39681_40500 = G__40513;
i__39682_40501 = G__40514;
continue;
}
} else {
var temp__5753__auto___40515 = cljs.core.seq(seq__39678_40498);
if(temp__5753__auto___40515){
var seq__39678_40516__$1 = temp__5753__auto___40515;
if(cljs.core.chunked_seq_QMARK_(seq__39678_40516__$1)){
var c__4679__auto___40517 = cljs.core.chunk_first(seq__39678_40516__$1);
var G__40518 = cljs.core.chunk_rest(seq__39678_40516__$1);
var G__40519 = c__4679__auto___40517;
var G__40520 = cljs.core.count(c__4679__auto___40517);
var G__40521 = (0);
seq__39678_40498 = G__40518;
chunk__39680_40499 = G__40519;
count__39681_40500 = G__40520;
i__39682_40501 = G__40521;
continue;
} else {
var child_40522 = cljs.core.first(seq__39678_40516__$1);
if(cljs.core.truth_(child_40522)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40522);


var G__40523 = cljs.core.next(seq__39678_40516__$1);
var G__40524 = null;
var G__40525 = (0);
var G__40526 = (0);
seq__39678_40498 = G__40523;
chunk__39680_40499 = G__40524;
count__39681_40500 = G__40525;
i__39682_40501 = G__40526;
continue;
} else {
var G__40527 = cljs.core.next(seq__39678_40516__$1);
var G__40528 = null;
var G__40529 = (0);
var G__40530 = (0);
seq__39678_40498 = G__40527;
chunk__39680_40499 = G__40528;
count__39681_40500 = G__40529;
i__39682_40501 = G__40530;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40497);
}


var G__40536 = seq__39609_40492;
var G__40537 = chunk__39610_40493;
var G__40538 = count__39611_40494;
var G__40539 = (i__39612_40495 + (1));
seq__39609_40492 = G__40536;
chunk__39610_40493 = G__40537;
count__39611_40494 = G__40538;
i__39612_40495 = G__40539;
continue;
} else {
var temp__5753__auto___40540 = cljs.core.seq(seq__39609_40492);
if(temp__5753__auto___40540){
var seq__39609_40541__$1 = temp__5753__auto___40540;
if(cljs.core.chunked_seq_QMARK_(seq__39609_40541__$1)){
var c__4679__auto___40543 = cljs.core.chunk_first(seq__39609_40541__$1);
var G__40544 = cljs.core.chunk_rest(seq__39609_40541__$1);
var G__40545 = c__4679__auto___40543;
var G__40546 = cljs.core.count(c__4679__auto___40543);
var G__40547 = (0);
seq__39609_40492 = G__40544;
chunk__39610_40493 = G__40545;
count__39611_40494 = G__40546;
i__39612_40495 = G__40547;
continue;
} else {
var child_struct_40548 = cljs.core.first(seq__39609_40541__$1);
var children_40549 = shadow.dom.dom_node(child_struct_40548);
if(cljs.core.seq_QMARK_(children_40549)){
var seq__39712_40550 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40549));
var chunk__39715_40551 = null;
var count__39716_40552 = (0);
var i__39717_40553 = (0);
while(true){
if((i__39717_40553 < count__39716_40552)){
var child_40554 = chunk__39715_40551.cljs$core$IIndexed$_nth$arity$2(null,i__39717_40553);
if(cljs.core.truth_(child_40554)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40554);


var G__40555 = seq__39712_40550;
var G__40556 = chunk__39715_40551;
var G__40557 = count__39716_40552;
var G__40558 = (i__39717_40553 + (1));
seq__39712_40550 = G__40555;
chunk__39715_40551 = G__40556;
count__39716_40552 = G__40557;
i__39717_40553 = G__40558;
continue;
} else {
var G__40559 = seq__39712_40550;
var G__40560 = chunk__39715_40551;
var G__40561 = count__39716_40552;
var G__40562 = (i__39717_40553 + (1));
seq__39712_40550 = G__40559;
chunk__39715_40551 = G__40560;
count__39716_40552 = G__40561;
i__39717_40553 = G__40562;
continue;
}
} else {
var temp__5753__auto___40563__$1 = cljs.core.seq(seq__39712_40550);
if(temp__5753__auto___40563__$1){
var seq__39712_40564__$1 = temp__5753__auto___40563__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39712_40564__$1)){
var c__4679__auto___40565 = cljs.core.chunk_first(seq__39712_40564__$1);
var G__40567 = cljs.core.chunk_rest(seq__39712_40564__$1);
var G__40568 = c__4679__auto___40565;
var G__40569 = cljs.core.count(c__4679__auto___40565);
var G__40570 = (0);
seq__39712_40550 = G__40567;
chunk__39715_40551 = G__40568;
count__39716_40552 = G__40569;
i__39717_40553 = G__40570;
continue;
} else {
var child_40571 = cljs.core.first(seq__39712_40564__$1);
if(cljs.core.truth_(child_40571)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40571);


var G__40572 = cljs.core.next(seq__39712_40564__$1);
var G__40573 = null;
var G__40574 = (0);
var G__40575 = (0);
seq__39712_40550 = G__40572;
chunk__39715_40551 = G__40573;
count__39716_40552 = G__40574;
i__39717_40553 = G__40575;
continue;
} else {
var G__40576 = cljs.core.next(seq__39712_40564__$1);
var G__40577 = null;
var G__40578 = (0);
var G__40579 = (0);
seq__39712_40550 = G__40576;
chunk__39715_40551 = G__40577;
count__39716_40552 = G__40578;
i__39717_40553 = G__40579;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40549);
}


var G__40580 = cljs.core.next(seq__39609_40541__$1);
var G__40581 = null;
var G__40582 = (0);
var G__40583 = (0);
seq__39609_40492 = G__40580;
chunk__39610_40493 = G__40581;
count__39611_40494 = G__40582;
i__39612_40495 = G__40583;
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
var seq__39767 = cljs.core.seq(node);
var chunk__39768 = null;
var count__39769 = (0);
var i__39770 = (0);
while(true){
if((i__39770 < count__39769)){
var n = chunk__39768.cljs$core$IIndexed$_nth$arity$2(null,i__39770);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40586 = seq__39767;
var G__40587 = chunk__39768;
var G__40588 = count__39769;
var G__40589 = (i__39770 + (1));
seq__39767 = G__40586;
chunk__39768 = G__40587;
count__39769 = G__40588;
i__39770 = G__40589;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39767);
if(temp__5753__auto__){
var seq__39767__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39767__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39767__$1);
var G__40590 = cljs.core.chunk_rest(seq__39767__$1);
var G__40591 = c__4679__auto__;
var G__40592 = cljs.core.count(c__4679__auto__);
var G__40593 = (0);
seq__39767 = G__40590;
chunk__39768 = G__40591;
count__39769 = G__40592;
i__39770 = G__40593;
continue;
} else {
var n = cljs.core.first(seq__39767__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40594 = cljs.core.next(seq__39767__$1);
var G__40595 = null;
var G__40596 = (0);
var G__40597 = (0);
seq__39767 = G__40594;
chunk__39768 = G__40595;
count__39769 = G__40596;
i__39770 = G__40597;
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
var G__39790 = arguments.length;
switch (G__39790) {
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
var G__39804 = arguments.length;
switch (G__39804) {
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
var G__39831 = arguments.length;
switch (G__39831) {
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
var len__4864__auto___40609 = arguments.length;
var i__4865__auto___40610 = (0);
while(true){
if((i__4865__auto___40610 < len__4864__auto___40609)){
args__4870__auto__.push((arguments[i__4865__auto___40610]));

var G__40611 = (i__4865__auto___40610 + (1));
i__4865__auto___40610 = G__40611;
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
var seq__39900_40613 = cljs.core.seq(nodes);
var chunk__39901_40614 = null;
var count__39902_40615 = (0);
var i__39903_40616 = (0);
while(true){
if((i__39903_40616 < count__39902_40615)){
var node_40617 = chunk__39901_40614.cljs$core$IIndexed$_nth$arity$2(null,i__39903_40616);
fragment.appendChild(shadow.dom._to_dom(node_40617));


var G__40618 = seq__39900_40613;
var G__40619 = chunk__39901_40614;
var G__40620 = count__39902_40615;
var G__40621 = (i__39903_40616 + (1));
seq__39900_40613 = G__40618;
chunk__39901_40614 = G__40619;
count__39902_40615 = G__40620;
i__39903_40616 = G__40621;
continue;
} else {
var temp__5753__auto___40622 = cljs.core.seq(seq__39900_40613);
if(temp__5753__auto___40622){
var seq__39900_40623__$1 = temp__5753__auto___40622;
if(cljs.core.chunked_seq_QMARK_(seq__39900_40623__$1)){
var c__4679__auto___40624 = cljs.core.chunk_first(seq__39900_40623__$1);
var G__40625 = cljs.core.chunk_rest(seq__39900_40623__$1);
var G__40626 = c__4679__auto___40624;
var G__40627 = cljs.core.count(c__4679__auto___40624);
var G__40628 = (0);
seq__39900_40613 = G__40625;
chunk__39901_40614 = G__40626;
count__39902_40615 = G__40627;
i__39903_40616 = G__40628;
continue;
} else {
var node_40629 = cljs.core.first(seq__39900_40623__$1);
fragment.appendChild(shadow.dom._to_dom(node_40629));


var G__40630 = cljs.core.next(seq__39900_40623__$1);
var G__40631 = null;
var G__40632 = (0);
var G__40633 = (0);
seq__39900_40613 = G__40630;
chunk__39901_40614 = G__40631;
count__39902_40615 = G__40632;
i__39903_40616 = G__40633;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq39880){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39880));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__39935_40642 = cljs.core.seq(scripts);
var chunk__39936_40643 = null;
var count__39937_40644 = (0);
var i__39938_40645 = (0);
while(true){
if((i__39938_40645 < count__39937_40644)){
var vec__39954_40646 = chunk__39936_40643.cljs$core$IIndexed$_nth$arity$2(null,i__39938_40645);
var script_tag_40647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39954_40646,(0),null);
var script_body_40648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39954_40646,(1),null);
eval(script_body_40648);


var G__40649 = seq__39935_40642;
var G__40650 = chunk__39936_40643;
var G__40651 = count__39937_40644;
var G__40652 = (i__39938_40645 + (1));
seq__39935_40642 = G__40649;
chunk__39936_40643 = G__40650;
count__39937_40644 = G__40651;
i__39938_40645 = G__40652;
continue;
} else {
var temp__5753__auto___40653 = cljs.core.seq(seq__39935_40642);
if(temp__5753__auto___40653){
var seq__39935_40654__$1 = temp__5753__auto___40653;
if(cljs.core.chunked_seq_QMARK_(seq__39935_40654__$1)){
var c__4679__auto___40655 = cljs.core.chunk_first(seq__39935_40654__$1);
var G__40656 = cljs.core.chunk_rest(seq__39935_40654__$1);
var G__40657 = c__4679__auto___40655;
var G__40658 = cljs.core.count(c__4679__auto___40655);
var G__40659 = (0);
seq__39935_40642 = G__40656;
chunk__39936_40643 = G__40657;
count__39937_40644 = G__40658;
i__39938_40645 = G__40659;
continue;
} else {
var vec__39963_40660 = cljs.core.first(seq__39935_40654__$1);
var script_tag_40661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39963_40660,(0),null);
var script_body_40662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39963_40660,(1),null);
eval(script_body_40662);


var G__40666 = cljs.core.next(seq__39935_40654__$1);
var G__40667 = null;
var G__40668 = (0);
var G__40669 = (0);
seq__39935_40642 = G__40666;
chunk__39936_40643 = G__40667;
count__39937_40644 = G__40668;
i__39938_40645 = G__40669;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__39968){
var vec__39969 = p__39968;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39969,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39969,(1),null);
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
var G__39983 = arguments.length;
switch (G__39983) {
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
var seq__40000 = cljs.core.seq(style_keys);
var chunk__40001 = null;
var count__40002 = (0);
var i__40003 = (0);
while(true){
if((i__40003 < count__40002)){
var it = chunk__40001.cljs$core$IIndexed$_nth$arity$2(null,i__40003);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40681 = seq__40000;
var G__40682 = chunk__40001;
var G__40683 = count__40002;
var G__40684 = (i__40003 + (1));
seq__40000 = G__40681;
chunk__40001 = G__40682;
count__40002 = G__40683;
i__40003 = G__40684;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40000);
if(temp__5753__auto__){
var seq__40000__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40000__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__40000__$1);
var G__40685 = cljs.core.chunk_rest(seq__40000__$1);
var G__40686 = c__4679__auto__;
var G__40687 = cljs.core.count(c__4679__auto__);
var G__40688 = (0);
seq__40000 = G__40685;
chunk__40001 = G__40686;
count__40002 = G__40687;
i__40003 = G__40688;
continue;
} else {
var it = cljs.core.first(seq__40000__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40689 = cljs.core.next(seq__40000__$1);
var G__40690 = null;
var G__40691 = (0);
var G__40692 = (0);
seq__40000 = G__40689;
chunk__40001 = G__40690;
count__40002 = G__40691;
i__40003 = G__40692;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k40009,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__40016 = k40009;
var G__40016__$1 = (((G__40016 instanceof cljs.core.Keyword))?G__40016.fqn:null);
switch (G__40016__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40009,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__40017){
var vec__40018 = p__40017;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40018,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40018,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40008){
var self__ = this;
var G__40008__$1 = this;
return (new cljs.core.RecordIter((0),G__40008__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40010,other40011){
var self__ = this;
var this40010__$1 = this;
return (((!((other40011 == null)))) && ((((this40010__$1.constructor === other40011.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40010__$1.x,other40011.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40010__$1.y,other40011.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40010__$1.__extmap,other40011.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k40009){
var self__ = this;
var this__4509__auto____$1 = this;
var G__40030 = k40009;
var G__40030__$1 = (((G__40030 instanceof cljs.core.Keyword))?G__40030.fqn:null);
switch (G__40030__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40009);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__40008){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__40031 = cljs.core.keyword_identical_QMARK_;
var expr__40032 = k__4511__auto__;
if(cljs.core.truth_((pred__40031.cljs$core$IFn$_invoke$arity$2 ? pred__40031.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__40032) : pred__40031.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__40032)))){
return (new shadow.dom.Coordinate(G__40008,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40031.cljs$core$IFn$_invoke$arity$2 ? pred__40031.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__40032) : pred__40031.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__40032)))){
return (new shadow.dom.Coordinate(self__.x,G__40008,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__40008),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__40008){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__40008,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__40015){
var extmap__4542__auto__ = (function (){var G__40036 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40015,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__40015)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40036);
} else {
return G__40036;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__40015),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__40015),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k40038,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__40042 = k40038;
var G__40042__$1 = (((G__40042 instanceof cljs.core.Keyword))?G__40042.fqn:null);
switch (G__40042__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40038,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__40043){
var vec__40044 = p__40043;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40044,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40044,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40037){
var self__ = this;
var G__40037__$1 = this;
return (new cljs.core.RecordIter((0),G__40037__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40039,other40040){
var self__ = this;
var this40039__$1 = this;
return (((!((other40040 == null)))) && ((((this40039__$1.constructor === other40040.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40039__$1.w,other40040.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40039__$1.h,other40040.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40039__$1.__extmap,other40040.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k40038){
var self__ = this;
var this__4509__auto____$1 = this;
var G__40054 = k40038;
var G__40054__$1 = (((G__40054 instanceof cljs.core.Keyword))?G__40054.fqn:null);
switch (G__40054__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40038);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__40037){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__40056 = cljs.core.keyword_identical_QMARK_;
var expr__40057 = k__4511__auto__;
if(cljs.core.truth_((pred__40056.cljs$core$IFn$_invoke$arity$2 ? pred__40056.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__40057) : pred__40056.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__40057)))){
return (new shadow.dom.Size(G__40037,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40056.cljs$core$IFn$_invoke$arity$2 ? pred__40056.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__40057) : pred__40056.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__40057)))){
return (new shadow.dom.Size(self__.w,G__40037,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__40037),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__40037){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__40037,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__40041){
var extmap__4542__auto__ = (function (){var G__40062 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40041,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__40041)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40062);
} else {
return G__40062;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__40041),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__40041),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var G__40729 = (i + (1));
var G__40730 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__40729;
ret = G__40730;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40067){
var vec__40068 = p__40067;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40068,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40068,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__40073 = arguments.length;
switch (G__40073) {
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
var G__40741 = ps;
var G__40742 = (i + (1));
el__$1 = G__40741;
i = G__40742;
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
var vec__40084 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40084,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40084,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40084,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__40087_40743 = cljs.core.seq(props);
var chunk__40088_40744 = null;
var count__40089_40745 = (0);
var i__40090_40746 = (0);
while(true){
if((i__40090_40746 < count__40089_40745)){
var vec__40097_40747 = chunk__40088_40744.cljs$core$IIndexed$_nth$arity$2(null,i__40090_40746);
var k_40748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40097_40747,(0),null);
var v_40749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40097_40747,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_40748);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40748),v_40749);


var G__40751 = seq__40087_40743;
var G__40752 = chunk__40088_40744;
var G__40753 = count__40089_40745;
var G__40754 = (i__40090_40746 + (1));
seq__40087_40743 = G__40751;
chunk__40088_40744 = G__40752;
count__40089_40745 = G__40753;
i__40090_40746 = G__40754;
continue;
} else {
var temp__5753__auto___40755 = cljs.core.seq(seq__40087_40743);
if(temp__5753__auto___40755){
var seq__40087_40756__$1 = temp__5753__auto___40755;
if(cljs.core.chunked_seq_QMARK_(seq__40087_40756__$1)){
var c__4679__auto___40757 = cljs.core.chunk_first(seq__40087_40756__$1);
var G__40758 = cljs.core.chunk_rest(seq__40087_40756__$1);
var G__40759 = c__4679__auto___40757;
var G__40760 = cljs.core.count(c__4679__auto___40757);
var G__40761 = (0);
seq__40087_40743 = G__40758;
chunk__40088_40744 = G__40759;
count__40089_40745 = G__40760;
i__40090_40746 = G__40761;
continue;
} else {
var vec__40100_40762 = cljs.core.first(seq__40087_40756__$1);
var k_40763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40100_40762,(0),null);
var v_40764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40100_40762,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_40763);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40763),v_40764);


var G__40765 = cljs.core.next(seq__40087_40756__$1);
var G__40766 = null;
var G__40767 = (0);
var G__40768 = (0);
seq__40087_40743 = G__40765;
chunk__40088_40744 = G__40766;
count__40089_40745 = G__40767;
i__40090_40746 = G__40768;
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
var vec__40104 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40104,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40104,(1),null);
var seq__40107_40773 = cljs.core.seq(node_children);
var chunk__40109_40774 = null;
var count__40110_40775 = (0);
var i__40111_40776 = (0);
while(true){
if((i__40111_40776 < count__40110_40775)){
var child_struct_40777 = chunk__40109_40774.cljs$core$IIndexed$_nth$arity$2(null,i__40111_40776);
if((!((child_struct_40777 == null)))){
if(typeof child_struct_40777 === 'string'){
var text_40778 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40778),child_struct_40777].join(''));
} else {
var children_40779 = shadow.dom.svg_node(child_struct_40777);
if(cljs.core.seq_QMARK_(children_40779)){
var seq__40138_40780 = cljs.core.seq(children_40779);
var chunk__40140_40781 = null;
var count__40141_40782 = (0);
var i__40142_40783 = (0);
while(true){
if((i__40142_40783 < count__40141_40782)){
var child_40784 = chunk__40140_40781.cljs$core$IIndexed$_nth$arity$2(null,i__40142_40783);
if(cljs.core.truth_(child_40784)){
node.appendChild(child_40784);


var G__40785 = seq__40138_40780;
var G__40786 = chunk__40140_40781;
var G__40787 = count__40141_40782;
var G__40788 = (i__40142_40783 + (1));
seq__40138_40780 = G__40785;
chunk__40140_40781 = G__40786;
count__40141_40782 = G__40787;
i__40142_40783 = G__40788;
continue;
} else {
var G__40789 = seq__40138_40780;
var G__40790 = chunk__40140_40781;
var G__40791 = count__40141_40782;
var G__40792 = (i__40142_40783 + (1));
seq__40138_40780 = G__40789;
chunk__40140_40781 = G__40790;
count__40141_40782 = G__40791;
i__40142_40783 = G__40792;
continue;
}
} else {
var temp__5753__auto___40793 = cljs.core.seq(seq__40138_40780);
if(temp__5753__auto___40793){
var seq__40138_40794__$1 = temp__5753__auto___40793;
if(cljs.core.chunked_seq_QMARK_(seq__40138_40794__$1)){
var c__4679__auto___40795 = cljs.core.chunk_first(seq__40138_40794__$1);
var G__40796 = cljs.core.chunk_rest(seq__40138_40794__$1);
var G__40797 = c__4679__auto___40795;
var G__40798 = cljs.core.count(c__4679__auto___40795);
var G__40799 = (0);
seq__40138_40780 = G__40796;
chunk__40140_40781 = G__40797;
count__40141_40782 = G__40798;
i__40142_40783 = G__40799;
continue;
} else {
var child_40800 = cljs.core.first(seq__40138_40794__$1);
if(cljs.core.truth_(child_40800)){
node.appendChild(child_40800);


var G__40802 = cljs.core.next(seq__40138_40794__$1);
var G__40803 = null;
var G__40804 = (0);
var G__40805 = (0);
seq__40138_40780 = G__40802;
chunk__40140_40781 = G__40803;
count__40141_40782 = G__40804;
i__40142_40783 = G__40805;
continue;
} else {
var G__40806 = cljs.core.next(seq__40138_40794__$1);
var G__40807 = null;
var G__40808 = (0);
var G__40809 = (0);
seq__40138_40780 = G__40806;
chunk__40140_40781 = G__40807;
count__40141_40782 = G__40808;
i__40142_40783 = G__40809;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40779);
}
}


var G__40811 = seq__40107_40773;
var G__40812 = chunk__40109_40774;
var G__40813 = count__40110_40775;
var G__40814 = (i__40111_40776 + (1));
seq__40107_40773 = G__40811;
chunk__40109_40774 = G__40812;
count__40110_40775 = G__40813;
i__40111_40776 = G__40814;
continue;
} else {
var G__40815 = seq__40107_40773;
var G__40816 = chunk__40109_40774;
var G__40817 = count__40110_40775;
var G__40818 = (i__40111_40776 + (1));
seq__40107_40773 = G__40815;
chunk__40109_40774 = G__40816;
count__40110_40775 = G__40817;
i__40111_40776 = G__40818;
continue;
}
} else {
var temp__5753__auto___40819 = cljs.core.seq(seq__40107_40773);
if(temp__5753__auto___40819){
var seq__40107_40820__$1 = temp__5753__auto___40819;
if(cljs.core.chunked_seq_QMARK_(seq__40107_40820__$1)){
var c__4679__auto___40821 = cljs.core.chunk_first(seq__40107_40820__$1);
var G__40822 = cljs.core.chunk_rest(seq__40107_40820__$1);
var G__40823 = c__4679__auto___40821;
var G__40824 = cljs.core.count(c__4679__auto___40821);
var G__40825 = (0);
seq__40107_40773 = G__40822;
chunk__40109_40774 = G__40823;
count__40110_40775 = G__40824;
i__40111_40776 = G__40825;
continue;
} else {
var child_struct_40827 = cljs.core.first(seq__40107_40820__$1);
if((!((child_struct_40827 == null)))){
if(typeof child_struct_40827 === 'string'){
var text_40831 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40831),child_struct_40827].join(''));
} else {
var children_40833 = shadow.dom.svg_node(child_struct_40827);
if(cljs.core.seq_QMARK_(children_40833)){
var seq__40159_40834 = cljs.core.seq(children_40833);
var chunk__40161_40835 = null;
var count__40162_40836 = (0);
var i__40163_40837 = (0);
while(true){
if((i__40163_40837 < count__40162_40836)){
var child_40838 = chunk__40161_40835.cljs$core$IIndexed$_nth$arity$2(null,i__40163_40837);
if(cljs.core.truth_(child_40838)){
node.appendChild(child_40838);


var G__40842 = seq__40159_40834;
var G__40843 = chunk__40161_40835;
var G__40844 = count__40162_40836;
var G__40845 = (i__40163_40837 + (1));
seq__40159_40834 = G__40842;
chunk__40161_40835 = G__40843;
count__40162_40836 = G__40844;
i__40163_40837 = G__40845;
continue;
} else {
var G__40846 = seq__40159_40834;
var G__40847 = chunk__40161_40835;
var G__40848 = count__40162_40836;
var G__40849 = (i__40163_40837 + (1));
seq__40159_40834 = G__40846;
chunk__40161_40835 = G__40847;
count__40162_40836 = G__40848;
i__40163_40837 = G__40849;
continue;
}
} else {
var temp__5753__auto___40851__$1 = cljs.core.seq(seq__40159_40834);
if(temp__5753__auto___40851__$1){
var seq__40159_40852__$1 = temp__5753__auto___40851__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40159_40852__$1)){
var c__4679__auto___40854 = cljs.core.chunk_first(seq__40159_40852__$1);
var G__40855 = cljs.core.chunk_rest(seq__40159_40852__$1);
var G__40856 = c__4679__auto___40854;
var G__40857 = cljs.core.count(c__4679__auto___40854);
var G__40858 = (0);
seq__40159_40834 = G__40855;
chunk__40161_40835 = G__40856;
count__40162_40836 = G__40857;
i__40163_40837 = G__40858;
continue;
} else {
var child_40859 = cljs.core.first(seq__40159_40852__$1);
if(cljs.core.truth_(child_40859)){
node.appendChild(child_40859);


var G__40860 = cljs.core.next(seq__40159_40852__$1);
var G__40861 = null;
var G__40862 = (0);
var G__40863 = (0);
seq__40159_40834 = G__40860;
chunk__40161_40835 = G__40861;
count__40162_40836 = G__40862;
i__40163_40837 = G__40863;
continue;
} else {
var G__40864 = cljs.core.next(seq__40159_40852__$1);
var G__40865 = null;
var G__40866 = (0);
var G__40867 = (0);
seq__40159_40834 = G__40864;
chunk__40161_40835 = G__40865;
count__40162_40836 = G__40866;
i__40163_40837 = G__40867;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40833);
}
}


var G__40868 = cljs.core.next(seq__40107_40820__$1);
var G__40869 = null;
var G__40870 = (0);
var G__40871 = (0);
seq__40107_40773 = G__40868;
chunk__40109_40774 = G__40869;
count__40110_40775 = G__40870;
i__40111_40776 = G__40871;
continue;
} else {
var G__40872 = cljs.core.next(seq__40107_40820__$1);
var G__40873 = null;
var G__40874 = (0);
var G__40875 = (0);
seq__40107_40773 = G__40872;
chunk__40109_40774 = G__40873;
count__40110_40775 = G__40874;
i__40111_40776 = G__40875;
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
var len__4864__auto___40878 = arguments.length;
var i__4865__auto___40879 = (0);
while(true){
if((i__4865__auto___40879 < len__4864__auto___40878)){
args__4870__auto__.push((arguments[i__4865__auto___40879]));

var G__40880 = (i__4865__auto___40879 + (1));
i__4865__auto___40879 = G__40880;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq40203){
var G__40204 = cljs.core.first(seq40203);
var seq40203__$1 = cljs.core.next(seq40203);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40204,seq40203__$1);
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
var G__40248 = arguments.length;
switch (G__40248) {
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
var c__35001__auto___40891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35002__auto__ = (function (){var switch__34350__auto__ = (function (state_40282){
var state_val_40283 = (state_40282[(1)]);
if((state_val_40283 === (1))){
var state_40282__$1 = state_40282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40282__$1,(2),once_or_cleanup);
} else {
if((state_val_40283 === (2))){
var inst_40279 = (state_40282[(2)]);
var inst_40280 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40282__$1 = (function (){var statearr_40286 = state_40282;
(statearr_40286[(7)] = inst_40279);

return statearr_40286;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40282__$1,inst_40280);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34351__auto__ = null;
var shadow$dom$state_machine__34351__auto____0 = (function (){
var statearr_40289 = [null,null,null,null,null,null,null,null];
(statearr_40289[(0)] = shadow$dom$state_machine__34351__auto__);

(statearr_40289[(1)] = (1));

return statearr_40289;
});
var shadow$dom$state_machine__34351__auto____1 = (function (state_40282){
while(true){
var ret_value__34352__auto__ = (function (){try{while(true){
var result__34353__auto__ = switch__34350__auto__(state_40282);
if(cljs.core.keyword_identical_QMARK_(result__34353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34353__auto__;
}
break;
}
}catch (e40290){var ex__34355__auto__ = e40290;
var statearr_40291_40895 = state_40282;
(statearr_40291_40895[(2)] = ex__34355__auto__);


if(cljs.core.seq((state_40282[(4)]))){
var statearr_40292_40897 = state_40282;
(statearr_40292_40897[(1)] = cljs.core.first((state_40282[(4)])));

} else {
throw ex__34355__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40899 = state_40282;
state_40282 = G__40899;
continue;
} else {
return ret_value__34352__auto__;
}
break;
}
});
shadow$dom$state_machine__34351__auto__ = function(state_40282){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34351__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34351__auto____1.call(this,state_40282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34351__auto____0;
shadow$dom$state_machine__34351__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34351__auto____1;
return shadow$dom$state_machine__34351__auto__;
})()
})();
var state__35003__auto__ = (function (){var statearr_40298 = f__35002__auto__();
(statearr_40298[(6)] = c__35001__auto___40891);

return statearr_40298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35003__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
