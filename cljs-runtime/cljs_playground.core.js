goog.provide('cljs_playground.core');
var module$node_modules$$logseq$libs$dist$lsplugin_user=shadow.js.require("module$node_modules$$logseq$libs$dist$lsplugin_user", {});
cljs_playground.core.simple_component = (function cljs_playground$core$simple_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I am a component!"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),"I have ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"bold"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null)," and red "], null),"text."], null)], null);
});
cljs_playground.core.pxMult = (12);
cljs_playground.core.calendar_bar = (function cljs_playground$core$calendar_bar(lenght){
cljs_playground.core.width = (lenght * cljs_playground.core.pxMult);

return ["\n      <div class=\"bar\" style=\"width:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_playground.core.width),"px;\" >"," ","</div>"].join('');
});
cljs_playground.core.calendar_style = (function cljs_playground$core$calendar_style(){
return "<style>\n  .bar {\n      background-color: blue;\n  }\n</style>\n  ";
});
cljs_playground.core.create_garden_calendar = (function cljs_playground$core$create_garden_calendar(){
return logseq.Editor.getCurrentBlock().then((function (p1__41031_SHARP_){
console.log("3");

cljs_playground.core.result = p1__41031_SHARP_;

console.log(cljs_playground.core.result);

cljs_playground.core.block_uuid = (function (){var target_obj_41032 = cljs_playground.core.result;
var _STAR_runtime_state_STAR__orig_val__41034 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__41035 = oops.state.prepare_state(target_obj_41032,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__41035);

try{var next_obj_41033 = ((oops.core.validate_object_access_dynamically(target_obj_41032,(0),"uuid",true,true,false))?(target_obj_41032["uuid"]):null);
return next_obj_41033;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__41034);
}})();

cljs_playground.core.content = ["<body><div>",cljs_playground.core.calendar_bar((2)),cljs_playground.core.calendar_bar((3)),cljs_playground.core.calendar_style(),"</div></body>"].join('');

return logseq.Editor.updateBlock(cljs_playground.core.block_uuid,cljs_playground.core.content);
}));
});
cljs_playground.core.slashcommands = (function cljs_playground$core$slashcommands(){
cljs_playground.core.regSlashCmd = logseq.Editor.registerSlashCommand;

var G__41036 = "create-garden-calendar";
var G__41037 = (function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ok4"], 0));

return cljs_playground.core.create_garden_calendar();
});
return (cljs_playground.core.regSlashCmd.cljs$core$IFn$_invoke$arity$2 ? cljs_playground.core.regSlashCmd.cljs$core$IFn$_invoke$arity$2(G__41036,G__41037) : cljs_playground.core.regSlashCmd.call(null,G__41036,G__41037));
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
