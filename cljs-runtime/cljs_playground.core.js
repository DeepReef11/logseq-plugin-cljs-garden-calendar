goog.provide('cljs_playground.core');
var module$node_modules$$logseq$libs$dist$lsplugin_user=shadow.js.require("module$node_modules$$logseq$libs$dist$lsplugin_user", {});
var G__38284_38288 = Thread.sleep((4000));
var G__38285_38289 = cljs_playground.core.create_garden_calendar = (function cljs_playground$core$create_garden_calendar(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___33724__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.Editor.getCurrentBlock()),(function (current_block){
return promesa.impl.resolved(null);
}));
}));
});
(cljs_playground.core.future.cljs$core$IFn$_invoke$arity$2 ? cljs_playground.core.future.cljs$core$IFn$_invoke$arity$2(G__38284_38288,G__38285_38289) : cljs_playground.core.future.call(null,G__38284_38288,G__38285_38289));
cljs_playground.core.slashcommands = (function cljs_playground$core$slashcommands(){
cljs_playground.core.regSlashCmd = logseq.Editor.registerSlashCommand;

var G__38286 = "create-garden-calendar";
var G__38287 = (function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ok3"], 0));
});
return (cljs_playground.core.regSlashCmd.cljs$core$IFn$_invoke$arity$2 ? cljs_playground.core.regSlashCmd.cljs$core$IFn$_invoke$arity$2(G__38286,G__38287) : cljs_playground.core.regSlashCmd.call(null,G__38286,G__38287));
});
logseq.App.showMsg("Gardening rocks!");
cljs_playground.core.main = (function cljs_playground$core$main(){
logseq.App.showMsg("Gardening rocks!");

return cljs_playground.core.slashcommands();
});
cljs_playground.core.init = (function cljs_playground$core$init(){
return logseq.ready(cljs_playground.core.main).catch(console.error);
});

//# sourceMappingURL=cljs_playground.core.js.map
