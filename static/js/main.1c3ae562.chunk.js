(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(4),s=n.n(i),l=n(2),o=n(0);function r(e){var t=e.keyi,n=e.item,i=e.removeElement,s=Object(c.useState)(!0),r=Object(l.a)(s,2),u=r[0],a=r[1],d=t+1;return Object(o.jsxs)("div",{id:"liElement",className:"liElement".concat(t),children:[Object(o.jsx)("span",{id:"itemID",children:d}),Object(o.jsxs)("li",{style:{backgroundColor:u?"lightgreen":"red"},children:[Object(o.jsxs)("div",{id:"elements",children:[Object(o.jsx)("span",{id:"stop".concat(t),style:{display:"none"},children:"\u2705"}),Object(o.jsx)("span",{id:"text",children:n})]}),Object(o.jsxs)("div",{id:"elements",style:{display:u?"inline":"none"},children:[Object(o.jsx)("input",{type:"button",value:"Delete",id:"itemButton",onClick:i}),Object(o.jsx)("input",{type:"button",value:"Done",id:"itemButton",onClick:function(){return document.getElementById("stop".concat(t)).style="display: inline",document.querySelector(".liElement".concat(t)).style.transform="scaleX(0)",document.querySelector(".liElement".concat(t)).style.transition="transform .5s",void setTimeout((function(){document.querySelector(".liElement".concat(t)).style.transform="scaleX(1)",a(!1)}),500)}})]})]})]})}n(10);function u(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(),u=Object(l.a)(s,2),a=u[0],d=u[1],j=Object(c.useRef)(),m=function(){""===j.current.value?alert("Please enter something..."):(n.unshift(j.current.value),i(n),console.log(n),j.current.value="",b())},b=function(){d(n.map((function(e,t){return Object(o.jsx)(r,{item:e,keyi:t,removeElement:function(){return h(t)}},t)})))},h=function(e){delete n[e],b()};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"ToDo List"}),Object(o.jsxs)("div",{className:"elements",children:[Object(o.jsx)("input",{type:"text",placeholder:"Name here",ref:j,id:"elementName",onKeyDown:function(e){"Enter"===e.key&&m()},autoFocus:!0}),Object(o.jsx)("input",{type:"button",value:"Add Item",id:"submit",onClick:m})]}),Object(o.jsx)("div",{id:"showElements",children:Object(o.jsx)("input",{type:"button",value:"Check Elements",id:"show",onClick:function(){alert("You have created ".concat(n.length," items in total. (deleted + done)"))}})}),Object(o.jsx)("ul",{children:a})]})}s.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.1c3ae562.chunk.js.map