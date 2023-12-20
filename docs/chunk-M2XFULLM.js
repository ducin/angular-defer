import{a as D}from"./chunk-DOMWCVYK.js";import{d as x,f as h}from"./chunk-5XD2OXE3.js";import{a as u}from"./chunk-SH32YSIN.js";import{a as f}from"./chunk-RURXA3RU.js";import"./chunk-LIVYS4BP.js";import{Sa as a,Ua as d,Va as m,W as c,ab as r,cb as t,db as i,eb as s,mb as e,rb as p}from"./chunk-OJTWMRHI.js";var E=()=>[import("./chunk-AWMYU3NT.js").then(n=>n.LazyLoadingVsPlaceholder)],S=()=>[import("./chunk-AWMYU3NT.js").then(n=>n.LazyLoadingVsPlaceholder)];function _(n,o){n&1&&(t(0,"lazy-loading-vs-placeholder")(1,"article"),e(2," some content "),i()())}function C(n,o){n&1&&s(0,"loader")}function L(n,o){n&1&&(t(0,"app-button"),e(1,"\u{1F449} "),t(2,"strong"),e(3,"interact with me \u{1F448}"),i(),t(4,"div")(5,"code"),e(6,"@placeholder (minimum 500ms)"),i(),e(7," / "),t(8,"code"),e(9,"@loading (minimum 1s)"),i()()())}function y(n,o){n&1&&(t(0,"lazy-loading-vs-placeholder")(1,"article"),e(2," some content "),i()())}function v(n,o){n&1&&s(0,"loader")}function P(n,o){n&1&&(t(0,"app-button"),e(1,"\u{1F449} "),t(2,"strong"),e(3,"interact with me"),i(),e(4," \u{1F448} "),t(5,"div")(6,"code"),e(7,"@placeholder (minimum 500ms)"),i(),e(8," / "),t(9,"code"),e(10,"@loading (minimum 1s; after 100ms)"),i()()())}var M=(()=>{let o=class o{};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=c({type:o,selectors:[["defer-loading-vs-placeholder"]],standalone:!0,features:[p],decls:69,vars:0,consts:[[1e3],[500],[1e3,100]],template:function(l,w){l&1&&(t(0,"app-box")(1,"content"),e(2,"\u{1F914} do "),t(3,"code"),e(4,"@placeholder"),i(),e(5," and "),t(6,"code"),e(7,"@loading"),i(),e(8," sound too familiar to each other?"),i(),t(9,"content"),e(10,"\u{1F4A1} TL;DR; "),t(11,"code"),e(12,"@placeholder"),i(),e(13," is shown "),t(14,"strong"),e(15,"BEFORE"),i(),e(16," loading starts, whereas "),t(17,"code"),e(18,"@loading"),i(),e(19," is shown "),t(20,"strong"),e(21,"WHILE"),i(),e(22," the lazy chunk is being loaded"),i(),t(23,"content"),e(24,"\u{1F590}\uFE0F demo below includes "),t(25,"code"),e(26,"@placeholder (minimum 500ms)"),i(),e(27," & "),t(28,"code"),e(29,"@loading (minimum 1s; after 10ms)"),i(),e(30,". The "),t(31,"code"),e(32,"@placeholder"),i(),e(33," is displayed before loading is triggered (via "),t(34,"code"),e(35,"interaction"),i(),e(36,"). Once loading is triggered, "),t(37,"code"),e(38,"@loading"),i(),e(39," will displayed for at least 1s ("),t(40,"code"),e(41,"minimum 1s"),i(),e(42,"). But there are 2 examples: in the first one "),t(43,"code"),e(44,"@loading"),i(),e(45," is displayed with no conditions; in the second one "),t(46,"strong"),e(47,"loading"),i(),e(48," has to last at least 100ms ("),t(49,"code"),e(50,"after 100ms"),i(),e(51,") until its shown."),i(),t(52,"content"),e(53,"\u{1F4A1} it's user-friendly to avoid blinking loaders (show up and immediately disappear), so most of the times you'd like to use the "),t(54,"code"),e(55,"after 100ms"),i(),e(56," or so."),i()(),t(57,"div"),a(58,_,3,0)(59,C,1,0)(60,L,10,0),m(61,58,E,59,60,null,0,1,d),r(0,-1),i(),t(63,"div"),a(64,y,3,0)(65,v,1,0)(66,P,11,0),m(67,64,S,65,66,null,2,1,d),r(0,-1),i())},dependencies:[x,h,f,u,D],encapsulation:2});let n=o;return n})();export{M as DeferLoadingVsPlaceholderComponent};