goog.provide('cljs_playground.core');
var module$node_modules$$logseq$libs$dist$lsplugin_user=shadow.js.require("module$node_modules$$logseq$libs$dist$lsplugin_user", {});
logseq.App.showMsg("Gardening rocks!");
cljs_playground.core.main = (function cljs_playground$core$main(){
return logseq.App.showMsg("Gardening rocks!");
});
cljs_playground.core.init = (function cljs_playground$core$init(){
return logseq.ready(cljs_playground.core.main).catch(console.error);
});

//# sourceMappingURL=cljs_playground.core.js.map
