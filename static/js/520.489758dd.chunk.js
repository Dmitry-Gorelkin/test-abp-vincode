"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[520],{1687:function(n,e,t){t.d(e,{T:function(){return c},c:function(){return s}});var r=t(5861),a=t(7757),i=t.n(a),o=t(3263);o.Z.defaults.baseURL="https://vpic.nhtsa.dot.gov/api/";var c=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/vehicles/decodevin/".concat(e,"?format=json"));case 2:return t=n.sent,n.abrupt("return",t.data.Results.filter((function(n){var e=n.Value,t=n.Variable;return null!==e&&""!==e&&"Not Applicable"!==e&&"Error Code"!==t&&"Error Text"!==t&&"Other Engine Info"!==t})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/vehicles/getvehiclevariablelist?format=json");case 2:return e=n.sent,n.abrupt("return",e.data.Results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},1454:function(n,e,t){t.d(e,{a:function(){return s}});var r,a=t(5243),i=t(168),o=t(6444).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),c=t(184),s=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(a.g4,{height:"100",width:"100",radius:"9",color:"#00c2e0",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},9999:function(n,e,t){t.d(e,{P:function(){return c}});var r,a=t(168),i=t(6444).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n\n  padding-top: 20px;\n  padding-bottom: 20px;\n\n  p {\n    text-transform: uppercase;\n  }\n\n  @media screen and (min-width: 768px) {\n    padding-top: 30px;\n    padding-bottom: 30px;\n  }\n"]))),o=t(184),c=function(n){var e=n.message;return(0,o.jsx)(i,{children:(0,o.jsx)("p",{children:e})})}},2520:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,i=t(5861),o=t(9439),c=t(7757),s=t.n(c),u=t(2791),l=t(7689),p=t(1686),d=t(3313),f=t(1687),h=t(1454),x=t(9999),v=t(168),m=t(6444),g=t(1087),b=(0,m.ZP)(g.rU)(r||(r=(0,v.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n\n  width: 128px;\n\n  margin-bottom: 20px;\n  padding: 10px 4px;\n\n  border-radius: 4px;\n\n  cursor: pointer;\n\n  color: ",";\n  text-decoration: none;\n  text-align: center;\n\n  :hover,\n  :focus-visible {\n    background-color: ",";\n    color: ",";\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.light}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.boxShadow})),j=m.ZP.h2(a||(a=(0,v.Z)(["\n  display: block;\n\n  margin-bottom: 30px;\n\n  text-align: center;\n"]))),w=t(184),Z="ideal",k="loading",y="error",P=function(){var n,e,t=(0,u.useState)({}),r=(0,o.Z)(t,2),a=r[0],c=r[1],v=(0,u.useState)(Z),m=(0,o.Z)(v,2),g=m[0],P=m[1],N=(0,u.useState)(""),S=(0,o.Z)(N,2),C=S[0],E=S[1],R=(0,l.UO)().id,_=(0,l.TH)(),F=(0,u.useRef)(null!==(n=null===(e=_.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/variables");(0,u.useEffect)((function(){var n=function(){var n=(0,i.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return P(k),n.prev=1,n.next=4,(0,f.c)();case 4:e=n.sent,c(e.find((function(n){return n.ID===Number(R)}))),P(Z),n.next=14;break;case 9:n.prev=9,n.t0=n.catch(1),P(y),E(n.t0.message),p.Notify.failure(n.t0.message);case 14:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[R]);var T=a.Name,U=a.Description;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(b,{to:F.current,children:[(0,w.jsx)(d.YFh,{size:"20px"}),"Go back"]}),g===k&&(0,w.jsx)(h.a,{}),g===Z&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(j,{children:T}),(0,w.jsx)("p",{children:U})]}),g===y&&(0,w.jsx)(x.P,{message:C})]})}}}]);
//# sourceMappingURL=520.489758dd.chunk.js.map