"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[7],{687:function(n,e,t){t.d(e,{T:function(){return o},c:function(){return s}});var r=t(861),a=t(757),i=t.n(a),c=t(263);c.Z.defaults.baseURL="https://vpic.nhtsa.dot.gov/api/";var o=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("/vehicles/decodevin/".concat(e,"?format=json"));case 2:return t=n.sent,n.abrupt("return",t.data.Results.filter((function(n){var e=n.Value,t=n.Variable;return null!==e&&""!==e&&"Not Applicable"!==e&&"Error Code"!==t&&"Error Text"!==t&&"Other Engine Info"!==t})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("/vehicles/getvehiclevariablelist?format=json");case 2:return e=n.sent,n.abrupt("return",e.data.Results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},454:function(n,e,t){t.d(e,{a:function(){return s}});var r,a=t(243),i=t(168),c=t(444).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),o=t(184),s=function(){return(0,o.jsx)(c,{children:(0,o.jsx)(a.g4,{height:"100",width:"100",radius:"9",color:"#00c2e0",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},999:function(n,e,t){t.d(e,{P:function(){return o}});var r,a=t(168),i=t(444).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n\n  padding-top: 20px;\n  padding-bottom: 20px;\n\n  p {\n    text-transform: uppercase;\n  }\n\n  @media screen and (min-width: 768px) {\n    padding-top: 30px;\n    padding-bottom: 30px;\n  }\n"]))),c=t(184),o=function(n){var e=n.message;return(0,c.jsx)(i,{children:(0,c.jsx)("p",{children:e})})}},7:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,i=t(861),c=t(439),o=t(757),s=t.n(o),u=t(791),l=t(87),p=t(689),d=t(686),f=t(687),x=t(454),m=t(999),h=t(168),v=t(444),g=v.ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (min-width: 320px) {\n  }\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    margin-left: -30px;\n    margin-top: -30px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    flex-basis: calc(100% / 3 - 30px);\n  }\n"]))),b=v.ZP.li(a||(a=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding: 10px 5px;\n\n  border-radius: 4px;\n\n  cursor: pointer;\n\n  a {\n    color: ",";\n    text-decoration: none;\n    text-align: center;\n  }\n\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n\n  :hover,\n  :focus-visible {\n    background-color: ",";\n    color: ",";\n    box-shadow: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    flex-basis: calc(100% / 2 - 30px);\n    margin-left: 30px;\n    margin-top: 30px;\n\n    &:not(:last-child) {\n      margin-bottom: unset;\n    }\n  }\n\n  @media screen and (min-width: 1200px) {\n    flex-basis: calc(100% / 3 - 30px);\n  }\n"])),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.light}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.boxShadow})),w=t(184),Z="ideal",j="loading",y="error",k=function(){var n=(0,u.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,u.useState)(Z),o=(0,c.Z)(a,2),h=o[0],v=o[1],k=(0,u.useState)(""),P=(0,c.Z)(k,2),S=P[0],C=P[1],E=(0,p.TH)();return(0,u.useEffect)((function(){var n=function(){var n=(0,i.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(j),n.prev=1,n.next=4,(0,f.c)();case 4:e=n.sent,r(e),v(Z),n.next=14;break;case 9:n.prev=9,n.t0=n.catch(1),v(y),C(n.t0.message),d.Notify.failure(n.t0.message);case 14:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,w.jsxs)("div",{children:[h===j&&(0,w.jsx)(x.a,{}),h===Z&&(0,w.jsx)(g,{children:t.map((function(n){var e=n.ID,t=n.Name;return(0,w.jsx)(b,{children:(0,w.jsx)(l.rU,{to:"/variables/".concat(e),state:{from:E},children:t})},e)}))}),h===y&&(0,w.jsx)(m.P,{message:S})]})}}}]);
//# sourceMappingURL=7.74b37922.chunk.js.map