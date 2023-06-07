goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__35425 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__35426 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__35426);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__35427 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__35428 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__35428);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__35427);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__35425);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__35436 = arguments.length;
switch (G__35436) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__35441 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35441,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35441,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__35448_35465 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__35449_35466 = null;
var count__35450_35467 = (0);
var i__35451_35468 = (0);
while(true){
if((i__35451_35468 < count__35450_35467)){
var vec__35458_35469 = chunk__35449_35466.cljs$core$IIndexed$_nth$arity$2(null,i__35451_35468);
var container_35470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35458_35469,(0),null);
var comp_35471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35458_35469,(1),null);
reagent.dom.re_render_component(comp_35471,container_35470);


var G__35472 = seq__35448_35465;
var G__35473 = chunk__35449_35466;
var G__35474 = count__35450_35467;
var G__35475 = (i__35451_35468 + (1));
seq__35448_35465 = G__35472;
chunk__35449_35466 = G__35473;
count__35450_35467 = G__35474;
i__35451_35468 = G__35475;
continue;
} else {
var temp__5753__auto___35476 = cljs.core.seq(seq__35448_35465);
if(temp__5753__auto___35476){
var seq__35448_35477__$1 = temp__5753__auto___35476;
if(cljs.core.chunked_seq_QMARK_(seq__35448_35477__$1)){
var c__4679__auto___35478 = cljs.core.chunk_first(seq__35448_35477__$1);
var G__35479 = cljs.core.chunk_rest(seq__35448_35477__$1);
var G__35480 = c__4679__auto___35478;
var G__35481 = cljs.core.count(c__4679__auto___35478);
var G__35482 = (0);
seq__35448_35465 = G__35479;
chunk__35449_35466 = G__35480;
count__35450_35467 = G__35481;
i__35451_35468 = G__35482;
continue;
} else {
var vec__35461_35483 = cljs.core.first(seq__35448_35477__$1);
var container_35484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35461_35483,(0),null);
var comp_35485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35461_35483,(1),null);
reagent.dom.re_render_component(comp_35485,container_35484);


var G__35486 = cljs.core.next(seq__35448_35477__$1);
var G__35487 = null;
var G__35488 = (0);
var G__35489 = (0);
seq__35448_35465 = G__35486;
chunk__35449_35466 = G__35487;
count__35450_35467 = G__35488;
i__35451_35468 = G__35489;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
