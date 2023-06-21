goog.provide('cljs_playground.core');
var module$node_modules$$logseq$libs$dist$lsplugin_user=shadow.js.require("module$node_modules$$logseq$libs$dist$lsplugin_user", {});
cljs_playground.core.simple_component = (function cljs_playground$core$simple_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I am a component!"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),"I have ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"bold"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null)," and red "], null),"text."], null)], null);
});
cljs_playground.core.render_simple = (function cljs_playground$core$render_simple(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_playground.core.simple_component], null),document.body);
});
cljs_playground.core.pxMultWeek = (12);
cljs_playground.core.pxMultMonth = (cljs_playground.core.pxMultWeek * (4));
cljs_playground.core.monthsName = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], null);
/**
 * Render months on top of calendar
 */
cljs_playground.core.render_calendar_month = (function cljs_playground$core$render_calendar_month(){
return ["<div class=\"calendar-month-row\">",clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
return ["<div class=\"calendar-month\">|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"</div>"].join('');
}),cljs_playground.core.monthsName)),"|</div>"].join('');
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_playground.core.render_calendar_month()], 0));
cljs_playground.core.render_calendar_bar = (function cljs_playground$core$render_calendar_bar(lenght){
cljs_playground.core.width = (lenght * cljs_playground.core.pxMultWeek);

return ["\n      <div class=\"calendar-bar\" style=\"width:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_playground.core.width),"px;\" >"," ","</div>"].join('');
});
cljs_playground.core.calendar_style = (function cljs_playground$core$calendar_style(){
return ["<style>\n  .calendar-bar {\n      background-color: blue;\n       height: 0.5em;\n  }\n       .calendar-month-row {\n          display:flex;\n\n       }\n       .calendar-month {\n          width:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_playground.core.pxMultMonth),"px;\n       }\n .calendar-month:nth-child(odd) {\n       background-color: lightblue;\n      } \n       .calendar {\n       display: flex;\n       flex-direction: column;\n       \n       }\n</style>\n  "].join('');
});
cljs_playground.core.create_garden_calendar = (function cljs_playground$core$create_garden_calendar(){
return logseq.Editor.getCurrentBlock().then((function (p1__39198_SHARP_){
console.log("3");

cljs_playground.core.result = p1__39198_SHARP_;

console.log(cljs_playground.core.result);

cljs_playground.core.block_uuid = (function (){var target_obj_39199 = cljs_playground.core.result;
var _STAR_runtime_state_STAR__orig_val__39201 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__39202 = oops.state.prepare_state(target_obj_39199,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__39202);

try{var next_obj_39200 = ((oops.core.validate_object_access_dynamically(target_obj_39199,(0),"uuid",true,true,false))?(target_obj_39199["uuid"]):null);
return next_obj_39200;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__39201);
}})();

cljs_playground.core.content = ["<body><div class=\"calendar\" >",cljs_playground.core.render_calendar_month(),cljs_playground.core.render_calendar_bar((2)),cljs_playground.core.render_calendar_bar((3)),cljs_playground.core.render_calendar_bar((4)),cljs_playground.core.render_calendar_bar((6)),cljs_playground.core.render_calendar_bar((20)),"</div>",cljs_playground.core.calendar_style(),"</body>"].join('');

return logseq.Editor.updateBlock(cljs_playground.core.block_uuid,cljs_playground.core.content);
}));
});
cljs_playground.core.slashcommands = (function cljs_playground$core$slashcommands(){
cljs_playground.core.regSlashCmd = logseq.Editor.registerSlashCommand;

var G__39203 = "create-garden-calendar";
var G__39204 = (function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ok4"], 0));

return cljs_playground.core.create_garden_calendar();
});
return (cljs_playground.core.regSlashCmd.cljs$core$IFn$_invoke$arity$2 ? cljs_playground.core.regSlashCmd.cljs$core$IFn$_invoke$arity$2(G__39203,G__39204) : cljs_playground.core.regSlashCmd.call(null,G__39203,G__39204));
});
logseq.App.showMsg("Gardening rocks!");
cljs_playground.core.calendar_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indoor","indoor",-322691437),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"week-before-frost","week-before-frost",-308597739),(-1)], null),new cljs.core.Keyword(null,"outdoor","outdoor",760862191),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"week-before-frost","week-before-frost",-308597739),(-10)], null)], null);
cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs_playground.core.calendar_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"outdoor","outdoor",760862191),new cljs.core.Keyword(null,"week-before-frost","week-before-frost",-308597739)], null));
new cljs.core.Keyword(null,"week-before-frost","week-before-frost",-308597739).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"outdoor","outdoor",760862191).cljs$core$IFn$_invoke$arity$1(cljs_playground.core.calendar_data));
cljs_playground.core.main = (function cljs_playground$core$main(){
logseq.App.showMsg("Gardening rocks!");

return cljs_playground.core.slashcommands();
});
cljs_playground.core.init = (function cljs_playground$core$init(){
return logseq.ready(cljs_playground.core.main).catch(console.error);
});

//# sourceMappingURL=cljs_playground.core.js.map
