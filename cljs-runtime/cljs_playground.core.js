goog.provide('cljs_playground.core');
var module$node_modules$$logseq$libs$dist$lsplugin_user=shadow.js.require("module$node_modules$$logseq$libs$dist$lsplugin_user", {});
cljs_playground.core.create_garden_calendar = (function cljs_playground$core$create_garden_calendar(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27724__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.Editor.getCurrentBlock()),(function (current_block){
return promesa.impl.resolved(null);
}));
}));
});
cljs_playground.core.x = cljs_playground.core.create_garden_calendar();
promesa.core.then.cljs$core$IFn$_invoke$arity$2(cljs_playground.core.x,cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([promesa.core.extract,cljs_playground.core.x], 0)));
cljs_playground.core.x1 = cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(cljs.core.list((1),(2),(3)));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs_playground.core.x1[(2)])], 0));
cljs_playground.core.slashcommands = (function cljs_playground$core$slashcommands(){
return null;
});
var G__28252_28255 = (function (){var G__28253 = "create-garden-calendar";
var G__28254 = (function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ok3"], 0));
});
return (cljs_playground.core.regSlashCmd.cljs$core$IFn$_invoke$arity$2 ? cljs_playground.core.regSlashCmd.cljs$core$IFn$_invoke$arity$2(G__28253,G__28254) : cljs_playground.core.regSlashCmd.call(null,G__28253,G__28254));
})();
var fexpr__28251_28256 = cljs_playground.core.regSlashCmd = logseq.Editor.registerSlashCommand;
(fexpr__28251_28256.cljs$core$IFn$_invoke$arity$1 ? fexpr__28251_28256.cljs$core$IFn$_invoke$arity$1(G__28252_28255) : fexpr__28251_28256.call(null,G__28252_28255));
cljs_playground.core.main = (function cljs_playground$core$main(){
logseq.App.showMsg("Gardening rocks!");

return cljs_playground.core.slashcommands();
});
cljs_playground.core.init = (function cljs_playground$core$init(){
return logseq.ready(cljs_playground.core.main).catch(console.error);
});

//# sourceMappingURL=cljs_playground.core.js.map
