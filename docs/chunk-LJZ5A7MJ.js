import{a as g}from"./chunk-DOMWCVYK.js";import"./chunk-CKZQZNXB.js";import"./chunk-4KX6UJK3.js";import"./chunk-QJPZIJLW.js";import{d as u,f as D}from"./chunk-5XD2OXE3.js";import{a as x}from"./chunk-SH32YSIN.js";import{a as h}from"./chunk-RURXA3RU.js";import"./chunk-LIVYS4BP.js";import{Sa as a,Ua as c,Va as l,W as m,_a as d,ab as f,cb as t,db as n,eb as p,mb as e,rb as s}from"./chunk-OJTWMRHI.js";var C=()=>[import("./chunk-ZNB2FFWI.js").then(i=>i.LazyPrefetchComponent)];function E(i,o){i&1&&(t(0,"lazy-prefetch")(1,"article"),e(2," some content "),n()())}function y(i,o){i&1&&p(0,"loader")}function w(i,o){i&1&&(t(0,"app-button"),e(1,"\u{1F449} "),t(2,"strong"),e(3,"interact with me"),n(),e(4," \u{1F448} "),t(5,"div")(6,"code"),e(7,"prefetch on timer(2s)"),n(),e(8," will start after 2 seconds pass "),n()())}function _(i,o){i&1&&e(0," something went wrong! ")}var H=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=m({type:o,selectors:[["defer-prefetch"]],standalone:!0,features:[s],decls:34,vars:0,consts:[[1e3,100],[500]],template:function(r,P){r&1&&(t(0,"app-box")(1,"content"),e(2,"\u{1F4DA} "),t(3,"code"),e(4,"@defer"),n(),e(5," allows to specify conditions when prefetching of the dependencies should be triggered. You can use a special "),t(6,"code"),e(7,"prefetch"),n(),e(8," keyword. "),t(9,"code"),e(10,"prefetch"),n(),e(11," syntax works similarly to the main defer conditions, and accepts "),t(12,"code"),e(13,"when"),n(),e(14," and/or "),t(15,"code"),e(16,"on"),n(),e(17," to declare the trigger."),n(),t(18,"content"),e(19,"\u{1F4A1} Common pattern: "),t(20,"code"),e(21,"@defer (on interaction; prefetch on idle)"),n(),e(22," - display something as the user really needs it, but prefetch when the browser is not busy."),n(),t(23,"content"),e(24,"\u{1F590}\uFE0F loading itself is triggered by interaction in the example below. Prefetching starts "),t(25,"code"),e(26,"on timer(2s)"),n(),e(27,"."),n()(),a(28,E,3,0)(29,y,1,0)(30,w,9,0)(31,_,1,0),l(32,28,C,29,30,31,0,1,c),f(0,-1),d(2e3))},dependencies:[u,D,h,x,g],encapsulation:2});let i=o;return i})();export{H as DeferPrefetchComponent};