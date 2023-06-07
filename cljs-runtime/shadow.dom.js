goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_40668 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_40668(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_40685 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_40685(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__38928 = coll;
var G__38929 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__38928,G__38929) : shadow.dom.lazy_native_coll_seq.call(null,G__38928,G__38929));
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
var G__38985 = arguments.length;
switch (G__38985) {
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
var G__39009 = arguments.length;
switch (G__39009) {
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
var G__39020 = arguments.length;
switch (G__39020) {
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
var G__39032 = arguments.length;
switch (G__39032) {
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
var G__39050 = arguments.length;
switch (G__39050) {
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
var G__39090 = arguments.length;
switch (G__39090) {
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
}catch (e39134){if((e39134 instanceof Object)){
var e = e39134;
return console.log("didnt support attachEvent",el,e);
} else {
throw e39134;

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
var seq__39154 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__39155 = null;
var count__39156 = (0);
var i__39157 = (0);
while(true){
if((i__39157 < count__39156)){
var el = chunk__39155.cljs$core$IIndexed$_nth$arity$2(null,i__39157);
var handler_40807__$1 = ((function (seq__39154,chunk__39155,count__39156,i__39157,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39154,chunk__39155,count__39156,i__39157,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40807__$1);


var G__40808 = seq__39154;
var G__40809 = chunk__39155;
var G__40810 = count__39156;
var G__40811 = (i__39157 + (1));
seq__39154 = G__40808;
chunk__39155 = G__40809;
count__39156 = G__40810;
i__39157 = G__40811;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39154);
if(temp__5753__auto__){
var seq__39154__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39154__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39154__$1);
var G__40812 = cljs.core.chunk_rest(seq__39154__$1);
var G__40813 = c__4679__auto__;
var G__40814 = cljs.core.count(c__4679__auto__);
var G__40815 = (0);
seq__39154 = G__40812;
chunk__39155 = G__40813;
count__39156 = G__40814;
i__39157 = G__40815;
continue;
} else {
var el = cljs.core.first(seq__39154__$1);
var handler_40818__$1 = ((function (seq__39154,chunk__39155,count__39156,i__39157,el,seq__39154__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39154,chunk__39155,count__39156,i__39157,el,seq__39154__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40818__$1);


var G__40819 = cljs.core.next(seq__39154__$1);
var G__40820 = null;
var G__40821 = (0);
var G__40822 = (0);
seq__39154 = G__40819;
chunk__39155 = G__40820;
count__39156 = G__40821;
i__39157 = G__40822;
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
var G__39197 = arguments.length;
switch (G__39197) {
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
var seq__39221 = cljs.core.seq(events);
var chunk__39223 = null;
var count__39224 = (0);
var i__39225 = (0);
while(true){
if((i__39225 < count__39224)){
var vec__39243 = chunk__39223.cljs$core$IIndexed$_nth$arity$2(null,i__39225);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39243,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39243,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40842 = seq__39221;
var G__40843 = chunk__39223;
var G__40844 = count__39224;
var G__40845 = (i__39225 + (1));
seq__39221 = G__40842;
chunk__39223 = G__40843;
count__39224 = G__40844;
i__39225 = G__40845;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39221);
if(temp__5753__auto__){
var seq__39221__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39221__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39221__$1);
var G__40848 = cljs.core.chunk_rest(seq__39221__$1);
var G__40850 = c__4679__auto__;
var G__40851 = cljs.core.count(c__4679__auto__);
var G__40852 = (0);
seq__39221 = G__40848;
chunk__39223 = G__40850;
count__39224 = G__40851;
i__39225 = G__40852;
continue;
} else {
var vec__39248 = cljs.core.first(seq__39221__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39248,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39248,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40856 = cljs.core.next(seq__39221__$1);
var G__40857 = null;
var G__40858 = (0);
var G__40859 = (0);
seq__39221 = G__40856;
chunk__39223 = G__40857;
count__39224 = G__40858;
i__39225 = G__40859;
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
var seq__39256 = cljs.core.seq(styles);
var chunk__39257 = null;
var count__39258 = (0);
var i__39259 = (0);
while(true){
if((i__39259 < count__39258)){
var vec__39282 = chunk__39257.cljs$core$IIndexed$_nth$arity$2(null,i__39259);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39282,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39282,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40869 = seq__39256;
var G__40870 = chunk__39257;
var G__40871 = count__39258;
var G__40872 = (i__39259 + (1));
seq__39256 = G__40869;
chunk__39257 = G__40870;
count__39258 = G__40871;
i__39259 = G__40872;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39256);
if(temp__5753__auto__){
var seq__39256__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39256__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39256__$1);
var G__40878 = cljs.core.chunk_rest(seq__39256__$1);
var G__40879 = c__4679__auto__;
var G__40880 = cljs.core.count(c__4679__auto__);
var G__40881 = (0);
seq__39256 = G__40878;
chunk__39257 = G__40879;
count__39258 = G__40880;
i__39259 = G__40881;
continue;
} else {
var vec__39292 = cljs.core.first(seq__39256__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39292,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39292,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40888 = cljs.core.next(seq__39256__$1);
var G__40889 = null;
var G__40890 = (0);
var G__40891 = (0);
seq__39256 = G__40888;
chunk__39257 = G__40889;
count__39258 = G__40890;
i__39259 = G__40891;
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
var G__39310_40894 = key;
var G__39310_40895__$1 = (((G__39310_40894 instanceof cljs.core.Keyword))?G__39310_40894.fqn:null);
switch (G__39310_40895__$1) {
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
var ks_40921 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_40921,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_40921,"aria-");
}
})())){
el.setAttribute(ks_40921,value);
} else {
(el[ks_40921] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__39343){
var map__39345 = p__39343;
var map__39345__$1 = cljs.core.__destructure_map(map__39345);
var props = map__39345__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39345__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__39347 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39347,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39347,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39347,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__39353 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__39353,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__39353;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__39358 = arguments.length;
switch (G__39358) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__39376){
var vec__39380 = p__39376;
var seq__39381 = cljs.core.seq(vec__39380);
var first__39382 = cljs.core.first(seq__39381);
var seq__39381__$1 = cljs.core.next(seq__39381);
var nn = first__39382;
var first__39382__$1 = cljs.core.first(seq__39381__$1);
var seq__39381__$2 = cljs.core.next(seq__39381__$1);
var np = first__39382__$1;
var nc = seq__39381__$2;
var node = vec__39380;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39389 = nn;
var G__39390 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39389,G__39390) : create_fn.call(null,G__39389,G__39390));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39395 = nn;
var G__39396 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39395,G__39396) : create_fn.call(null,G__39395,G__39396));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__39408 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39408,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39408,(1),null);
var seq__39411_40975 = cljs.core.seq(node_children);
var chunk__39413_40976 = null;
var count__39414_40977 = (0);
var i__39415_40978 = (0);
while(true){
if((i__39415_40978 < count__39414_40977)){
var child_struct_40979 = chunk__39413_40976.cljs$core$IIndexed$_nth$arity$2(null,i__39415_40978);
var children_40985 = shadow.dom.dom_node(child_struct_40979);
if(cljs.core.seq_QMARK_(children_40985)){
var seq__39475_40987 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40985));
var chunk__39477_40988 = null;
var count__39478_40989 = (0);
var i__39479_40990 = (0);
while(true){
if((i__39479_40990 < count__39478_40989)){
var child_40993 = chunk__39477_40988.cljs$core$IIndexed$_nth$arity$2(null,i__39479_40990);
if(cljs.core.truth_(child_40993)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40993);


var G__40994 = seq__39475_40987;
var G__40995 = chunk__39477_40988;
var G__40996 = count__39478_40989;
var G__40997 = (i__39479_40990 + (1));
seq__39475_40987 = G__40994;
chunk__39477_40988 = G__40995;
count__39478_40989 = G__40996;
i__39479_40990 = G__40997;
continue;
} else {
var G__40998 = seq__39475_40987;
var G__40999 = chunk__39477_40988;
var G__41000 = count__39478_40989;
var G__41001 = (i__39479_40990 + (1));
seq__39475_40987 = G__40998;
chunk__39477_40988 = G__40999;
count__39478_40989 = G__41000;
i__39479_40990 = G__41001;
continue;
}
} else {
var temp__5753__auto___41002 = cljs.core.seq(seq__39475_40987);
if(temp__5753__auto___41002){
var seq__39475_41006__$1 = temp__5753__auto___41002;
if(cljs.core.chunked_seq_QMARK_(seq__39475_41006__$1)){
var c__4679__auto___41008 = cljs.core.chunk_first(seq__39475_41006__$1);
var G__41012 = cljs.core.chunk_rest(seq__39475_41006__$1);
var G__41013 = c__4679__auto___41008;
var G__41014 = cljs.core.count(c__4679__auto___41008);
var G__41015 = (0);
seq__39475_40987 = G__41012;
chunk__39477_40988 = G__41013;
count__39478_40989 = G__41014;
i__39479_40990 = G__41015;
continue;
} else {
var child_41018 = cljs.core.first(seq__39475_41006__$1);
if(cljs.core.truth_(child_41018)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41018);


var G__41020 = cljs.core.next(seq__39475_41006__$1);
var G__41021 = null;
var G__41022 = (0);
var G__41023 = (0);
seq__39475_40987 = G__41020;
chunk__39477_40988 = G__41021;
count__39478_40989 = G__41022;
i__39479_40990 = G__41023;
continue;
} else {
var G__41024 = cljs.core.next(seq__39475_41006__$1);
var G__41025 = null;
var G__41026 = (0);
var G__41027 = (0);
seq__39475_40987 = G__41024;
chunk__39477_40988 = G__41025;
count__39478_40989 = G__41026;
i__39479_40990 = G__41027;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40985);
}


var G__41029 = seq__39411_40975;
var G__41030 = chunk__39413_40976;
var G__41031 = count__39414_40977;
var G__41032 = (i__39415_40978 + (1));
seq__39411_40975 = G__41029;
chunk__39413_40976 = G__41030;
count__39414_40977 = G__41031;
i__39415_40978 = G__41032;
continue;
} else {
var temp__5753__auto___41034 = cljs.core.seq(seq__39411_40975);
if(temp__5753__auto___41034){
var seq__39411_41036__$1 = temp__5753__auto___41034;
if(cljs.core.chunked_seq_QMARK_(seq__39411_41036__$1)){
var c__4679__auto___41038 = cljs.core.chunk_first(seq__39411_41036__$1);
var G__41040 = cljs.core.chunk_rest(seq__39411_41036__$1);
var G__41041 = c__4679__auto___41038;
var G__41042 = cljs.core.count(c__4679__auto___41038);
var G__41043 = (0);
seq__39411_40975 = G__41040;
chunk__39413_40976 = G__41041;
count__39414_40977 = G__41042;
i__39415_40978 = G__41043;
continue;
} else {
var child_struct_41045 = cljs.core.first(seq__39411_41036__$1);
var children_41046 = shadow.dom.dom_node(child_struct_41045);
if(cljs.core.seq_QMARK_(children_41046)){
var seq__39499_41049 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_41046));
var chunk__39501_41050 = null;
var count__39502_41051 = (0);
var i__39503_41052 = (0);
while(true){
if((i__39503_41052 < count__39502_41051)){
var child_41056 = chunk__39501_41050.cljs$core$IIndexed$_nth$arity$2(null,i__39503_41052);
if(cljs.core.truth_(child_41056)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41056);


var G__41058 = seq__39499_41049;
var G__41059 = chunk__39501_41050;
var G__41060 = count__39502_41051;
var G__41061 = (i__39503_41052 + (1));
seq__39499_41049 = G__41058;
chunk__39501_41050 = G__41059;
count__39502_41051 = G__41060;
i__39503_41052 = G__41061;
continue;
} else {
var G__41063 = seq__39499_41049;
var G__41064 = chunk__39501_41050;
var G__41065 = count__39502_41051;
var G__41066 = (i__39503_41052 + (1));
seq__39499_41049 = G__41063;
chunk__39501_41050 = G__41064;
count__39502_41051 = G__41065;
i__39503_41052 = G__41066;
continue;
}
} else {
var temp__5753__auto___41068__$1 = cljs.core.seq(seq__39499_41049);
if(temp__5753__auto___41068__$1){
var seq__39499_41071__$1 = temp__5753__auto___41068__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39499_41071__$1)){
var c__4679__auto___41074 = cljs.core.chunk_first(seq__39499_41071__$1);
var G__41076 = cljs.core.chunk_rest(seq__39499_41071__$1);
var G__41077 = c__4679__auto___41074;
var G__41078 = cljs.core.count(c__4679__auto___41074);
var G__41079 = (0);
seq__39499_41049 = G__41076;
chunk__39501_41050 = G__41077;
count__39502_41051 = G__41078;
i__39503_41052 = G__41079;
continue;
} else {
var child_41081 = cljs.core.first(seq__39499_41071__$1);
if(cljs.core.truth_(child_41081)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41081);


var G__41086 = cljs.core.next(seq__39499_41071__$1);
var G__41087 = null;
var G__41088 = (0);
var G__41089 = (0);
seq__39499_41049 = G__41086;
chunk__39501_41050 = G__41087;
count__39502_41051 = G__41088;
i__39503_41052 = G__41089;
continue;
} else {
var G__41091 = cljs.core.next(seq__39499_41071__$1);
var G__41092 = null;
var G__41093 = (0);
var G__41094 = (0);
seq__39499_41049 = G__41091;
chunk__39501_41050 = G__41092;
count__39502_41051 = G__41093;
i__39503_41052 = G__41094;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_41046);
}


var G__41097 = cljs.core.next(seq__39411_41036__$1);
var G__41098 = null;
var G__41099 = (0);
var G__41100 = (0);
seq__39411_40975 = G__41097;
chunk__39413_40976 = G__41098;
count__39414_40977 = G__41099;
i__39415_40978 = G__41100;
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
var seq__39630 = cljs.core.seq(node);
var chunk__39631 = null;
var count__39632 = (0);
var i__39633 = (0);
while(true){
if((i__39633 < count__39632)){
var n = chunk__39631.cljs$core$IIndexed$_nth$arity$2(null,i__39633);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__41114 = seq__39630;
var G__41115 = chunk__39631;
var G__41116 = count__39632;
var G__41117 = (i__39633 + (1));
seq__39630 = G__41114;
chunk__39631 = G__41115;
count__39632 = G__41116;
i__39633 = G__41117;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39630);
if(temp__5753__auto__){
var seq__39630__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39630__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39630__$1);
var G__41120 = cljs.core.chunk_rest(seq__39630__$1);
var G__41122 = c__4679__auto__;
var G__41123 = cljs.core.count(c__4679__auto__);
var G__41124 = (0);
seq__39630 = G__41120;
chunk__39631 = G__41122;
count__39632 = G__41123;
i__39633 = G__41124;
continue;
} else {
var n = cljs.core.first(seq__39630__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__41126 = cljs.core.next(seq__39630__$1);
var G__41127 = null;
var G__41128 = (0);
var G__41129 = (0);
seq__39630 = G__41126;
chunk__39631 = G__41127;
count__39632 = G__41128;
i__39633 = G__41129;
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
var G__39733 = arguments.length;
switch (G__39733) {
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
var G__39769 = arguments.length;
switch (G__39769) {
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
var G__39799 = arguments.length;
switch (G__39799) {
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
var len__4864__auto___41176 = arguments.length;
var i__4865__auto___41177 = (0);
while(true){
if((i__4865__auto___41177 < len__4864__auto___41176)){
args__4870__auto__.push((arguments[i__4865__auto___41177]));

var G__41178 = (i__4865__auto___41177 + (1));
i__4865__auto___41177 = G__41178;
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
var seq__39889_41189 = cljs.core.seq(nodes);
var chunk__39890_41190 = null;
var count__39891_41191 = (0);
var i__39892_41192 = (0);
while(true){
if((i__39892_41192 < count__39891_41191)){
var node_41197 = chunk__39890_41190.cljs$core$IIndexed$_nth$arity$2(null,i__39892_41192);
fragment.appendChild(shadow.dom._to_dom(node_41197));


var G__41198 = seq__39889_41189;
var G__41199 = chunk__39890_41190;
var G__41200 = count__39891_41191;
var G__41201 = (i__39892_41192 + (1));
seq__39889_41189 = G__41198;
chunk__39890_41190 = G__41199;
count__39891_41191 = G__41200;
i__39892_41192 = G__41201;
continue;
} else {
var temp__5753__auto___41203 = cljs.core.seq(seq__39889_41189);
if(temp__5753__auto___41203){
var seq__39889_41206__$1 = temp__5753__auto___41203;
if(cljs.core.chunked_seq_QMARK_(seq__39889_41206__$1)){
var c__4679__auto___41208 = cljs.core.chunk_first(seq__39889_41206__$1);
var G__41209 = cljs.core.chunk_rest(seq__39889_41206__$1);
var G__41210 = c__4679__auto___41208;
var G__41211 = cljs.core.count(c__4679__auto___41208);
var G__41212 = (0);
seq__39889_41189 = G__41209;
chunk__39890_41190 = G__41210;
count__39891_41191 = G__41211;
i__39892_41192 = G__41212;
continue;
} else {
var node_41215 = cljs.core.first(seq__39889_41206__$1);
fragment.appendChild(shadow.dom._to_dom(node_41215));


var G__41217 = cljs.core.next(seq__39889_41206__$1);
var G__41218 = null;
var G__41219 = (0);
var G__41220 = (0);
seq__39889_41189 = G__41217;
chunk__39890_41190 = G__41218;
count__39891_41191 = G__41219;
i__39892_41192 = G__41220;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq39877){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39877));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__39910_41224 = cljs.core.seq(scripts);
var chunk__39911_41225 = null;
var count__39912_41226 = (0);
var i__39913_41227 = (0);
while(true){
if((i__39913_41227 < count__39912_41226)){
var vec__39929_41233 = chunk__39911_41225.cljs$core$IIndexed$_nth$arity$2(null,i__39913_41227);
var script_tag_41234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39929_41233,(0),null);
var script_body_41235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39929_41233,(1),null);
eval(script_body_41235);


var G__41237 = seq__39910_41224;
var G__41238 = chunk__39911_41225;
var G__41239 = count__39912_41226;
var G__41240 = (i__39913_41227 + (1));
seq__39910_41224 = G__41237;
chunk__39911_41225 = G__41238;
count__39912_41226 = G__41239;
i__39913_41227 = G__41240;
continue;
} else {
var temp__5753__auto___41241 = cljs.core.seq(seq__39910_41224);
if(temp__5753__auto___41241){
var seq__39910_41244__$1 = temp__5753__auto___41241;
if(cljs.core.chunked_seq_QMARK_(seq__39910_41244__$1)){
var c__4679__auto___41246 = cljs.core.chunk_first(seq__39910_41244__$1);
var G__41248 = cljs.core.chunk_rest(seq__39910_41244__$1);
var G__41249 = c__4679__auto___41246;
var G__41250 = cljs.core.count(c__4679__auto___41246);
var G__41251 = (0);
seq__39910_41224 = G__41248;
chunk__39911_41225 = G__41249;
count__39912_41226 = G__41250;
i__39913_41227 = G__41251;
continue;
} else {
var vec__39937_41253 = cljs.core.first(seq__39910_41244__$1);
var script_tag_41254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39937_41253,(0),null);
var script_body_41255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39937_41253,(1),null);
eval(script_body_41255);


var G__41259 = cljs.core.next(seq__39910_41244__$1);
var G__41260 = null;
var G__41261 = (0);
var G__41262 = (0);
seq__39910_41224 = G__41259;
chunk__39911_41225 = G__41260;
count__39912_41226 = G__41261;
i__39913_41227 = G__41262;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__39940){
var vec__39941 = p__39940;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39941,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39941,(1),null);
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
var G__39950 = arguments.length;
switch (G__39950) {
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
var seq__39967 = cljs.core.seq(style_keys);
var chunk__39968 = null;
var count__39969 = (0);
var i__39970 = (0);
while(true){
if((i__39970 < count__39969)){
var it = chunk__39968.cljs$core$IIndexed$_nth$arity$2(null,i__39970);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41297 = seq__39967;
var G__41298 = chunk__39968;
var G__41299 = count__39969;
var G__41300 = (i__39970 + (1));
seq__39967 = G__41297;
chunk__39968 = G__41298;
count__39969 = G__41299;
i__39970 = G__41300;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39967);
if(temp__5753__auto__){
var seq__39967__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39967__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39967__$1);
var G__41304 = cljs.core.chunk_rest(seq__39967__$1);
var G__41305 = c__4679__auto__;
var G__41306 = cljs.core.count(c__4679__auto__);
var G__41307 = (0);
seq__39967 = G__41304;
chunk__39968 = G__41305;
count__39969 = G__41306;
i__39970 = G__41307;
continue;
} else {
var it = cljs.core.first(seq__39967__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41311 = cljs.core.next(seq__39967__$1);
var G__41312 = null;
var G__41313 = (0);
var G__41314 = (0);
seq__39967 = G__41311;
chunk__39968 = G__41312;
count__39969 = G__41313;
i__39970 = G__41314;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k39979,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__39987 = k39979;
var G__39987__$1 = (((G__39987 instanceof cljs.core.Keyword))?G__39987.fqn:null);
switch (G__39987__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39979,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__39991){
var vec__39992 = p__39991;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39992,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39992,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39978){
var self__ = this;
var G__39978__$1 = this;
return (new cljs.core.RecordIter((0),G__39978__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39980,other39981){
var self__ = this;
var this39980__$1 = this;
return (((!((other39981 == null)))) && ((((this39980__$1.constructor === other39981.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39980__$1.x,other39981.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39980__$1.y,other39981.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39980__$1.__extmap,other39981.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k39979){
var self__ = this;
var this__4509__auto____$1 = this;
var G__40016 = k39979;
var G__40016__$1 = (((G__40016 instanceof cljs.core.Keyword))?G__40016.fqn:null);
switch (G__40016__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k39979);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__39978){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__40019 = cljs.core.keyword_identical_QMARK_;
var expr__40020 = k__4511__auto__;
if(cljs.core.truth_((pred__40019.cljs$core$IFn$_invoke$arity$2 ? pred__40019.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__40020) : pred__40019.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__40020)))){
return (new shadow.dom.Coordinate(G__39978,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40019.cljs$core$IFn$_invoke$arity$2 ? pred__40019.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__40020) : pred__40019.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__40020)))){
return (new shadow.dom.Coordinate(self__.x,G__39978,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__39978),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__39978){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__39978,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__39982){
var extmap__4542__auto__ = (function (){var G__40046 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39982,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__39982)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40046);
} else {
return G__40046;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__39982),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__39982),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k40069,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__40090 = k40069;
var G__40090__$1 = (((G__40090 instanceof cljs.core.Keyword))?G__40090.fqn:null);
switch (G__40090__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40069,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__40098){
var vec__40099 = p__40098;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40099,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40099,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40068){
var self__ = this;
var G__40068__$1 = this;
return (new cljs.core.RecordIter((0),G__40068__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40071,other40072){
var self__ = this;
var this40071__$1 = this;
return (((!((other40072 == null)))) && ((((this40071__$1.constructor === other40072.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40071__$1.w,other40072.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40071__$1.h,other40072.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40071__$1.__extmap,other40072.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k40069){
var self__ = this;
var this__4509__auto____$1 = this;
var G__40129 = k40069;
var G__40129__$1 = (((G__40129 instanceof cljs.core.Keyword))?G__40129.fqn:null);
switch (G__40129__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40069);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__40068){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__40135 = cljs.core.keyword_identical_QMARK_;
var expr__40136 = k__4511__auto__;
if(cljs.core.truth_((pred__40135.cljs$core$IFn$_invoke$arity$2 ? pred__40135.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__40136) : pred__40135.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__40136)))){
return (new shadow.dom.Size(G__40068,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40135.cljs$core$IFn$_invoke$arity$2 ? pred__40135.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__40136) : pred__40135.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__40136)))){
return (new shadow.dom.Size(self__.w,G__40068,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__40068),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__40068){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__40068,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__40075){
var extmap__4542__auto__ = (function (){var G__40170 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40075,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__40075)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40170);
} else {
return G__40170;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__40075),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__40075),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var G__41492 = (i + (1));
var G__41493 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__41492;
ret = G__41493;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40221){
var vec__40223 = p__40221;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40223,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40223,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__40239 = arguments.length;
switch (G__40239) {
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
var G__41513 = ps;
var G__41514 = (i + (1));
el__$1 = G__41513;
i = G__41514;
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
var vec__40304 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40304,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40304,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40304,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__40308_41535 = cljs.core.seq(props);
var chunk__40309_41536 = null;
var count__40310_41537 = (0);
var i__40311_41538 = (0);
while(true){
if((i__40311_41538 < count__40310_41537)){
var vec__40348_41540 = chunk__40309_41536.cljs$core$IIndexed$_nth$arity$2(null,i__40311_41538);
var k_41541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40348_41540,(0),null);
var v_41542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40348_41540,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_41541);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41541),v_41542);


var G__41548 = seq__40308_41535;
var G__41549 = chunk__40309_41536;
var G__41550 = count__40310_41537;
var G__41551 = (i__40311_41538 + (1));
seq__40308_41535 = G__41548;
chunk__40309_41536 = G__41549;
count__40310_41537 = G__41550;
i__40311_41538 = G__41551;
continue;
} else {
var temp__5753__auto___41555 = cljs.core.seq(seq__40308_41535);
if(temp__5753__auto___41555){
var seq__40308_41556__$1 = temp__5753__auto___41555;
if(cljs.core.chunked_seq_QMARK_(seq__40308_41556__$1)){
var c__4679__auto___41557 = cljs.core.chunk_first(seq__40308_41556__$1);
var G__41558 = cljs.core.chunk_rest(seq__40308_41556__$1);
var G__41559 = c__4679__auto___41557;
var G__41560 = cljs.core.count(c__4679__auto___41557);
var G__41561 = (0);
seq__40308_41535 = G__41558;
chunk__40309_41536 = G__41559;
count__40310_41537 = G__41560;
i__40311_41538 = G__41561;
continue;
} else {
var vec__40365_41562 = cljs.core.first(seq__40308_41556__$1);
var k_41563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40365_41562,(0),null);
var v_41564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40365_41562,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_41563);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41563),v_41564);


var G__41570 = cljs.core.next(seq__40308_41556__$1);
var G__41571 = null;
var G__41572 = (0);
var G__41573 = (0);
seq__40308_41535 = G__41570;
chunk__40309_41536 = G__41571;
count__40310_41537 = G__41572;
i__40311_41538 = G__41573;
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
var vec__40389 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40389,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40389,(1),null);
var seq__40403_41581 = cljs.core.seq(node_children);
var chunk__40405_41582 = null;
var count__40406_41583 = (0);
var i__40407_41584 = (0);
while(true){
if((i__40407_41584 < count__40406_41583)){
var child_struct_41588 = chunk__40405_41582.cljs$core$IIndexed$_nth$arity$2(null,i__40407_41584);
if((!((child_struct_41588 == null)))){
if(typeof child_struct_41588 === 'string'){
var text_41592 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41592),child_struct_41588].join(''));
} else {
var children_41594 = shadow.dom.svg_node(child_struct_41588);
if(cljs.core.seq_QMARK_(children_41594)){
var seq__40490_41595 = cljs.core.seq(children_41594);
var chunk__40492_41596 = null;
var count__40493_41597 = (0);
var i__40494_41598 = (0);
while(true){
if((i__40494_41598 < count__40493_41597)){
var child_41602 = chunk__40492_41596.cljs$core$IIndexed$_nth$arity$2(null,i__40494_41598);
if(cljs.core.truth_(child_41602)){
node.appendChild(child_41602);


var G__41605 = seq__40490_41595;
var G__41606 = chunk__40492_41596;
var G__41607 = count__40493_41597;
var G__41608 = (i__40494_41598 + (1));
seq__40490_41595 = G__41605;
chunk__40492_41596 = G__41606;
count__40493_41597 = G__41607;
i__40494_41598 = G__41608;
continue;
} else {
var G__41610 = seq__40490_41595;
var G__41611 = chunk__40492_41596;
var G__41612 = count__40493_41597;
var G__41613 = (i__40494_41598 + (1));
seq__40490_41595 = G__41610;
chunk__40492_41596 = G__41611;
count__40493_41597 = G__41612;
i__40494_41598 = G__41613;
continue;
}
} else {
var temp__5753__auto___41614 = cljs.core.seq(seq__40490_41595);
if(temp__5753__auto___41614){
var seq__40490_41615__$1 = temp__5753__auto___41614;
if(cljs.core.chunked_seq_QMARK_(seq__40490_41615__$1)){
var c__4679__auto___41616 = cljs.core.chunk_first(seq__40490_41615__$1);
var G__41617 = cljs.core.chunk_rest(seq__40490_41615__$1);
var G__41618 = c__4679__auto___41616;
var G__41619 = cljs.core.count(c__4679__auto___41616);
var G__41620 = (0);
seq__40490_41595 = G__41617;
chunk__40492_41596 = G__41618;
count__40493_41597 = G__41619;
i__40494_41598 = G__41620;
continue;
} else {
var child_41621 = cljs.core.first(seq__40490_41615__$1);
if(cljs.core.truth_(child_41621)){
node.appendChild(child_41621);


var G__41623 = cljs.core.next(seq__40490_41615__$1);
var G__41624 = null;
var G__41625 = (0);
var G__41626 = (0);
seq__40490_41595 = G__41623;
chunk__40492_41596 = G__41624;
count__40493_41597 = G__41625;
i__40494_41598 = G__41626;
continue;
} else {
var G__41628 = cljs.core.next(seq__40490_41615__$1);
var G__41629 = null;
var G__41630 = (0);
var G__41631 = (0);
seq__40490_41595 = G__41628;
chunk__40492_41596 = G__41629;
count__40493_41597 = G__41630;
i__40494_41598 = G__41631;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41594);
}
}


var G__41633 = seq__40403_41581;
var G__41634 = chunk__40405_41582;
var G__41635 = count__40406_41583;
var G__41636 = (i__40407_41584 + (1));
seq__40403_41581 = G__41633;
chunk__40405_41582 = G__41634;
count__40406_41583 = G__41635;
i__40407_41584 = G__41636;
continue;
} else {
var G__41637 = seq__40403_41581;
var G__41638 = chunk__40405_41582;
var G__41639 = count__40406_41583;
var G__41640 = (i__40407_41584 + (1));
seq__40403_41581 = G__41637;
chunk__40405_41582 = G__41638;
count__40406_41583 = G__41639;
i__40407_41584 = G__41640;
continue;
}
} else {
var temp__5753__auto___41641 = cljs.core.seq(seq__40403_41581);
if(temp__5753__auto___41641){
var seq__40403_41645__$1 = temp__5753__auto___41641;
if(cljs.core.chunked_seq_QMARK_(seq__40403_41645__$1)){
var c__4679__auto___41646 = cljs.core.chunk_first(seq__40403_41645__$1);
var G__41647 = cljs.core.chunk_rest(seq__40403_41645__$1);
var G__41648 = c__4679__auto___41646;
var G__41649 = cljs.core.count(c__4679__auto___41646);
var G__41650 = (0);
seq__40403_41581 = G__41647;
chunk__40405_41582 = G__41648;
count__40406_41583 = G__41649;
i__40407_41584 = G__41650;
continue;
} else {
var child_struct_41653 = cljs.core.first(seq__40403_41645__$1);
if((!((child_struct_41653 == null)))){
if(typeof child_struct_41653 === 'string'){
var text_41655 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41655),child_struct_41653].join(''));
} else {
var children_41658 = shadow.dom.svg_node(child_struct_41653);
if(cljs.core.seq_QMARK_(children_41658)){
var seq__40528_41659 = cljs.core.seq(children_41658);
var chunk__40530_41660 = null;
var count__40531_41661 = (0);
var i__40532_41662 = (0);
while(true){
if((i__40532_41662 < count__40531_41661)){
var child_41663 = chunk__40530_41660.cljs$core$IIndexed$_nth$arity$2(null,i__40532_41662);
if(cljs.core.truth_(child_41663)){
node.appendChild(child_41663);


var G__41666 = seq__40528_41659;
var G__41667 = chunk__40530_41660;
var G__41668 = count__40531_41661;
var G__41669 = (i__40532_41662 + (1));
seq__40528_41659 = G__41666;
chunk__40530_41660 = G__41667;
count__40531_41661 = G__41668;
i__40532_41662 = G__41669;
continue;
} else {
var G__41672 = seq__40528_41659;
var G__41673 = chunk__40530_41660;
var G__41674 = count__40531_41661;
var G__41675 = (i__40532_41662 + (1));
seq__40528_41659 = G__41672;
chunk__40530_41660 = G__41673;
count__40531_41661 = G__41674;
i__40532_41662 = G__41675;
continue;
}
} else {
var temp__5753__auto___41676__$1 = cljs.core.seq(seq__40528_41659);
if(temp__5753__auto___41676__$1){
var seq__40528_41677__$1 = temp__5753__auto___41676__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40528_41677__$1)){
var c__4679__auto___41680 = cljs.core.chunk_first(seq__40528_41677__$1);
var G__41681 = cljs.core.chunk_rest(seq__40528_41677__$1);
var G__41682 = c__4679__auto___41680;
var G__41683 = cljs.core.count(c__4679__auto___41680);
var G__41684 = (0);
seq__40528_41659 = G__41681;
chunk__40530_41660 = G__41682;
count__40531_41661 = G__41683;
i__40532_41662 = G__41684;
continue;
} else {
var child_41685 = cljs.core.first(seq__40528_41677__$1);
if(cljs.core.truth_(child_41685)){
node.appendChild(child_41685);


var G__41686 = cljs.core.next(seq__40528_41677__$1);
var G__41687 = null;
var G__41688 = (0);
var G__41689 = (0);
seq__40528_41659 = G__41686;
chunk__40530_41660 = G__41687;
count__40531_41661 = G__41688;
i__40532_41662 = G__41689;
continue;
} else {
var G__41692 = cljs.core.next(seq__40528_41677__$1);
var G__41693 = null;
var G__41694 = (0);
var G__41695 = (0);
seq__40528_41659 = G__41692;
chunk__40530_41660 = G__41693;
count__40531_41661 = G__41694;
i__40532_41662 = G__41695;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41658);
}
}


var G__41696 = cljs.core.next(seq__40403_41645__$1);
var G__41697 = null;
var G__41698 = (0);
var G__41699 = (0);
seq__40403_41581 = G__41696;
chunk__40405_41582 = G__41697;
count__40406_41583 = G__41698;
i__40407_41584 = G__41699;
continue;
} else {
var G__41701 = cljs.core.next(seq__40403_41645__$1);
var G__41702 = null;
var G__41703 = (0);
var G__41704 = (0);
seq__40403_41581 = G__41701;
chunk__40405_41582 = G__41702;
count__40406_41583 = G__41703;
i__40407_41584 = G__41704;
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
var len__4864__auto___41721 = arguments.length;
var i__4865__auto___41722 = (0);
while(true){
if((i__4865__auto___41722 < len__4864__auto___41721)){
args__4870__auto__.push((arguments[i__4865__auto___41722]));

var G__41723 = (i__4865__auto___41722 + (1));
i__4865__auto___41722 = G__41723;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq40560){
var G__40561 = cljs.core.first(seq40560);
var seq40560__$1 = cljs.core.next(seq40560);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40561,seq40560__$1);
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
var G__40572 = arguments.length;
switch (G__40572) {
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
var c__35081__auto___41744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35082__auto__ = (function (){var switch__34344__auto__ = (function (state_40598){
var state_val_40599 = (state_40598[(1)]);
if((state_val_40599 === (1))){
var state_40598__$1 = state_40598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40598__$1,(2),once_or_cleanup);
} else {
if((state_val_40599 === (2))){
var inst_40595 = (state_40598[(2)]);
var inst_40596 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40598__$1 = (function (){var statearr_40605 = state_40598;
(statearr_40605[(7)] = inst_40595);

return statearr_40605;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40598__$1,inst_40596);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34345__auto__ = null;
var shadow$dom$state_machine__34345__auto____0 = (function (){
var statearr_40608 = [null,null,null,null,null,null,null,null];
(statearr_40608[(0)] = shadow$dom$state_machine__34345__auto__);

(statearr_40608[(1)] = (1));

return statearr_40608;
});
var shadow$dom$state_machine__34345__auto____1 = (function (state_40598){
while(true){
var ret_value__34346__auto__ = (function (){try{while(true){
var result__34347__auto__ = switch__34344__auto__(state_40598);
if(cljs.core.keyword_identical_QMARK_(result__34347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34347__auto__;
}
break;
}
}catch (e40610){var ex__34348__auto__ = e40610;
var statearr_40611_41758 = state_40598;
(statearr_40611_41758[(2)] = ex__34348__auto__);


if(cljs.core.seq((state_40598[(4)]))){
var statearr_40613_41760 = state_40598;
(statearr_40613_41760[(1)] = cljs.core.first((state_40598[(4)])));

} else {
throw ex__34348__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41766 = state_40598;
state_40598 = G__41766;
continue;
} else {
return ret_value__34346__auto__;
}
break;
}
});
shadow$dom$state_machine__34345__auto__ = function(state_40598){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34345__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34345__auto____1.call(this,state_40598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34345__auto____0;
shadow$dom$state_machine__34345__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34345__auto____1;
return shadow$dom$state_machine__34345__auto__;
})()
})();
var state__35083__auto__ = (function (){var statearr_40617 = f__35082__auto__();
(statearr_40617[(6)] = c__35081__auto___41744);

return statearr_40617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35083__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
