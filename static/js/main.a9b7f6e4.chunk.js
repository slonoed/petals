(this.webpackJsonppetals=this.webpackJsonppetals||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),a=c.n(s),r=c(7),i=c.n(r),j=(c(23),c(17)),o=c(9),l=c(4),d=c(10),u=c(15);c(24),c(25),c(26);function b(e){for(var t=e.current,c=e.max,s=[],a=0;a<c;a++){var r=a<t?"\u2605":"\u2606";s.push(Object(n.jsx)("span",{children:r},a))}return Object(n.jsx)("div",{style:{fontSize:"40px",color:"hsl(36deg 100% 56%)"},children:s})}function O(e){var t=e.number,c=Object(s.useRef)(null);return Object(s.useEffect)((function(){c.current.classList.toggle("odd-roll"),c.current.classList.toggle("even-roll"),c.current.dataset.roll=t}),[t]),Object(n.jsxs)("ol",{ref:c,className:"die-list even-roll","data-roll":"1",id:"die-1",children:[Object(n.jsx)("li",{className:"die-item","data-side":"1",children:Object(n.jsx)("span",{className:"dot"})}),Object(n.jsxs)("li",{className:"die-item","data-side":"2",children:[Object(n.jsx)("span",{className:"dot"}),Object(n.jsx)("span",{className:"dot"})]}),Object(n.jsxs)("li",{className:"die-item","data-side":"3",children:[Object(n.jsx)("span",{className:"dot"}),Object(n.jsx)("span",{className:"dot"}),Object(n.jsx)("span",{className:"dot"})]}),Object(n.jsxs)("li",{className:"die-item","data-side":"4",children:[Object(n.jsx)("span",{className:"dot"}),Object(n.jsx)("span",{className:"dot"}),Object(n.jsx)("span",{className:"dot"}),Object(n.jsx)("span",{className:"dot"})]}),Object(n.jsxs)("li",{className:"die-item","data-side":"5",children:[Object(n.jsx)("span",{className:"dot"}),Object(n.jsx)("span",{className:"dot"}),Object(n.jsx)("span",{className:"dot"}),Object(n.jsx)("span",{className:"dot"}),Object(n.jsx)("span",{className:"dot"})]}),Object(n.jsxs)("li",{className:"die-item","data-side":"6",children:[Object(n.jsx)("span",{className:"dot"}),Object(n.jsx)("span",{className:"dot"}),Object(n.jsx)("span",{className:"dot"}),Object(n.jsx)("span",{className:"dot"}),Object(n.jsx)("span",{className:"dot"}),Object(n.jsx)("span",{className:"dot"})]})]})}c(27);var m,h,x=50,p=(m=-825,h=125,function(e){return Math.max(m,Math.min(h,e))});function f(e){for(var t=e.onChange,c=[],a=0;a<20;a++)c.push(Object(n.jsx)("div",{className:"num",children:2*a}));var r=Object(s.useRef)(null),i=Object(s.useState)(150),j=Object(o.a)(i,2),l=j[0],d=j[1],u=Object(s.useState)(!1),b=Object(o.a)(u,2),O=b[0],m=b[1],h=function(){m(!0)},f=function(){m(!1)};return Object(s.useEffect)((function(){if(O){var e=function(e){e.preventDefault();var t=e.touches?e.touches[0].clientX:e.clientX;if("number"===typeof r.current){var c=t-r.current;r.current=t,d((function(e){return p(e+c)}))}else r.current=t};return document.addEventListener("touchmove",e,{passive:!1}),document.addEventListener("mousemove",e,{passive:!1}),function(){r.current=null,document.removeEventListener("touchmove",e),document.removeEventListener("mousemove",e)}}d((function(e){return p((Math.round((e+25)/x)-.5)*x)}))}),[O]),Object(s.useEffect)((function(){if(!O){var e=(125-l)/x*2;Number.isInteger(e)&&t(e)}}),[l,O]),Object(n.jsxs)("div",{className:"number",onTouchStart:h,onTouchEnd:f,onMouseDown:h,onMouseUp:f,children:[Object(n.jsx)("div",{style:{transform:"translate(".concat(l,"px, 0px)")},className:"ninternal",children:c}),Object(n.jsx)("div",{className:"nframe"})]})}var v={screen:"intro",points:0,dices:[],num:0,checkState:"none"};function N(){return Math.round(5*Math.random()+1)}function g(e,t){if("again"===t.type)return Object(l.a)(Object(l.a)({},v),{},{screen:"game"});if("start"===t.type)return Object(l.a)(Object(l.a)({},e),{},{screen:"game"});if("numChange"===t.type)return Object(l.a)(Object(l.a)({},e),{},{num:t.value});if("check"===t.type){if("none"!==e.checkState||0===e.dices.length)return e;var c=y(e)===e.num,n=c?e.points+1:0;return 7===n?Object(l.a)(Object(l.a)({},e),{},{screen:"win"}):Object(l.a)(Object(l.a)({},e),{},{points:n,checkState:c?"correct":"incorrect"})}return"roll"===t.type?Object(l.a)(Object(l.a)({},e),{},{dices:[N(),N(),N(),N(),N()],checkState:"none"}):e}var k=function(){var e=Object(s.useReducer)(g,v),t=Object(o.a)(e,2),c=t[0],a=t[1],r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(c){return a(Object(l.a)(Object(l.a)({},t),{},{type:e,value:c.target.value}))}};return Object(s.useEffect)((function(){setTimeout((function(){!function(e){var t=document.querySelectorAll("button._space3d");Object(j.a)(t).forEach((function(e){e.click()}))}()}),30)}),[c.dices]),"intro"===c.screen?Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Petals around roses"}),Object(n.jsx)(d.a,{size:"lg",onClick:function(){return a({type:"start"})},children:"Start game"})]})}):"win"===c.screen?Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"You won!"}),Object(n.jsx)("b",{children:"You know the secret now!"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(d.a,{onClick:function(){return a({type:"again"})},children:"Play again"})]})}):Object(n.jsxs)("div",{className:"App App_game",children:[Object(n.jsx)(b,{max:7,current:c.points}),Object(n.jsx)("div",{className:"dices",children:c.dices.map((function(e,t){return Object(n.jsx)("div",{className:"dice-"+t,children:Object(n.jsx)(O,{number:e})},t)}))}),Object(n.jsxs)("div",{className:"check-state",children:["correct"===c.checkState?Object(n.jsx)(u.a,{variant:"success",children:"Correct"}):null,"incorrect"===c.checkState?Object(n.jsxs)(u.a,{variant:"danger",children:["Incorrect! Correct number is ",y(c)]}):null]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)(f,{onChange:function(e){return a({type:"numChange",value:e})}}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{style:{display:"grid",gridGap:"1em",gridTemplateColumns:"1fr"},children:"none"!==c.checkState||0===c.dices.length?Object(n.jsx)(d.a,{onClick:r("roll"),variant:"success",children:"Roll"}):Object(n.jsx)(d.a,{onClick:r("check"),disabled:"none"!==c.checkState||0===c.dices.length,children:"Check"})})]})]})};function y(e){return e.dices.reduce((function(e,t){var c=0;return 3===t&&(c=2),5===t&&(c=4),e+c}),0)}var S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};c(30);i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),S()}},[[31,1,2]]]);
//# sourceMappingURL=main.a9b7f6e4.chunk.js.map