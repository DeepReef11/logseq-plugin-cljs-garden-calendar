goog.provide('cljs_playground.core');
var module$node_modules$$logseq$libs$dist$lsplugin_user=shadow.js.require("module$node_modules$$logseq$libs$dist$lsplugin_user", {});
cljs_playground.core.create_garden_calendar = (function cljs_playground$core$create_garden_calendar(){
return logseq.Editor;
});
cljs_playground.core.x1 = cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(cljs.core.list((1),(2),(3)));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs_playground.core.x1[(2)])], 0));
cljs_playground.core.slashcommands = (function cljs_playground$core$slashcommands(){
cljs_playground.core.regSlashCmd = logseq.Editor.registerSlashCommand;

var G__29479 = "create-garden-calendar";
var G__29480 = (function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ok2"], 0));
});
return (cljs_playground.core.regSlashCmd.cljs$core$IFn$_invoke$arity$2 ? cljs_playground.core.regSlashCmd.cljs$core$IFn$_invoke$arity$2(G__29479,G__29480) : cljs_playground.core.regSlashCmd.call(null,G__29479,G__29480));
});
cljs_playground.core.main = (function cljs_playground$core$main(){
logseq.App.showMsg("Gardening rocks!");

return cljs_playground.core.slashcommands();
});
cljs_playground.core.init = (function cljs_playground$core$init(){
return logseq.ready(cljs_playground.core.main).catch(console.error);
});

//# sourceMappingURL=cljs_playground.core.js.map
