(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{8:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return t(7299)}])},7299:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return z},default:function(){return F}});var r=t(7611),i=t(7597),a=t(1395),o=t(6153),s=t(7774),l=t(3842),c=t(3723),u=t(3262),d=t(9134),f=t.n(d),p=t(5812);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}var v=(0,c.ZP)("div")((function(e){var n=e.theme;return{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:n.spacing(2,0),"& .button":m({},n.mixins.buttonSecondary,{margin:n.spacing(1,0)}),"& .button--active":m({},n.mixins.button)}})),w=function(e){var n=e.className,t=e.handleChange,i=e.items,a=e.selected;return(0,r.jsx)(v,{className:n,children:i.map((function(e,n){return(0,r.jsx)(p.Z,{variant:"contained",className:f()("button",{"button--active":n===a}),onClick:function(){return null===t||void 0===t?void 0:t(n)},children:e},e)}))})},g=t(5665),b=t(4988),j=t(6633);function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){x(e,n,t[n])}))}return e}var y=(0,c.ZP)(p.Z)((function(e){var n=e.theme;return q({},n.mixins.button,{padding:n.spacing(1,3)})})),_=(0,c.ZP)(g.Z)((function(e){var n=e.theme;return{marginTop:n.spacing(1),"& .MuiList-padding":{padding:0},"& .MuiMenu-paper":{background:(0,b.Fq)(n.palette.background.mobileMenu,.7),backdropFilter:"blur(24px)"}}})),k=(0,c.ZP)(j.Z)((function(e){var n=e.theme;return{padding:n.spacing(2,4),justifyContent:"center",color:n.palette.common.white,"&.active":q({},n.mixins.button,{borderRadius:0})}})),O=function(e){var n=e.className,t=e.handleChange,a=e.items,s=e.selected,l=function(){var e=(0,i.useState)(null),n=e[0],t=e[1];return{anchorEl:n,handleClick:function(e){t(e.currentTarget)},handleClose:function(){t(null)}}}(),c=l.anchorEl,u=l.handleClick,d=l.handleClose;return(0,r.jsxs)("div",{className:n,children:[(0,r.jsx)(y,{className:"selected",onClick:u,children:a[s]}),(0,r.jsx)(_,{elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},anchorEl:c,open:!!c,onClose:d,children:a.map((function(e,n){return(0,r.jsx)(k,{onClick:function(){null===t||void 0===t||t(n),d()},disableRipple:!0,className:f()({active:n===s}),children:(0,r.jsx)(o.Z,{variant:"h5",children:e})},e)}))})]})},Z=t(9864),N=(0,c.ZP)(Z.Z)((function(e){var n=e.theme;return{"& .faq__wrapper:not(:last-child)":{marginBottom:n.spacing(2)},"& .question":{color:n.palette.secondary.main,marginBottom:n.spacing(2)},"& .list":{marginTop:n.spacing(2),marginLeft:n.spacing(2)},"& .list__title":{marginBottom:n.spacing(1),color:n.palette.secondary.main},"& .list__title--bullet":{color:n.palette.grey.A200,marginRight:n.spacing(1)},"& .list__item:not(:last-child)":{marginBottom:n.spacing(3)}}})),P=function(e){var n=e.className,t=e.content;return(0,r.jsx)(N,{className:n,children:t.map((function(e){return(0,r.jsxs)("div",{className:"faq__wrapper",children:[(0,r.jsx)(o.Z,{variant:"h5",className:"question",children:e.question}),(0,r.jsx)(o.Z,{children:e.answer}),!!e.list&&(0,r.jsx)("div",{className:"list",children:e.list.map((function(e){return(0,r.jsxs)("div",{className:"list__item",children:[(0,r.jsxs)(o.Z,{variant:"h5",className:"list__title",children:[(0,r.jsx)("span",{className:"list__title--bullet",children:"\u2022"})," ",e.title,":"]}),(0,r.jsx)(o.Z,{children:e.description})]},e.title)}))})]},e.question)}))})};function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var S=(0,c.ZP)(u.Z)((function(e){var n=e.theme;return{"& .title":{color:n.palette.common.white},"& .header__wrapper":{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:n.spacing(2)},"& .content__wrapper":{display:"flex",alignItems:"flex-start"}}})),E=(0,c.ZP)(O)((function(e){return C({},e.theme.breakpoints.up("lg"),{display:"none"})})),B=(0,c.ZP)(w)((function(e){var n=e.theme;return C({display:"none"},n.breakpoints.up("lg"),{display:"flex",marginRight:n.spacing(4)})})),T=(0,c.ZP)(P)({flex:1});function D(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var M=function(){var e=(0,i.useState)({selected:0}),n=e[0],t=e[1];return{state:n,handleSelected:function(e){t(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){D(e,n,t[n])}))}return e}({},n,{selected:e}))}}},R=t(7385),I=function(e,n){return 0===e?function(e){return[{question:e("blockchain.one.question"),answer:(0,r.jsx)(R.Z,{i18nKey:"faq:blockchain.one.answer",components:[(0,r.jsx)("b",{})]})},{question:e("blockchain.two.question"),answer:e("blockchain.two.answer")}]}(n):1===e?function(e){return[{question:e("stakers.one.question"),answer:e("stakers.one.answer")},{question:e("stakers.two.question"),answer:(0,r.jsx)(R.Z,{i18nKey:"faq:stakers.two.answer",components:[(0,r.jsx)("a",{href:"https://www.forbole.com/stake-now",target:"_blank",rel:"noreferrer"})]})},{question:e("stakers.three.question"),answer:e("stakers.three.answer")},{question:e("stakers.four.question"),answer:e("stakers.four.answer")},{question:e("stakers.five.question"),answer:e("stakers.five.answer")}]}(n):2===e?function(e){return[{question:e("validators.one.question"),answer:e("validators.one.answer")},{question:e("validators.two.question"),answer:e("validators.two.answer")},{question:e("validators.three.question"),answer:e("validators.three.answer")},{question:e("validators.four.question"),answer:e("validators.four.answer"),list:[{title:e("validators.four.children.one.title"),description:e("validators.four.children.one.description")},{title:e("validators.four.children.two.title"),description:e("validators.four.children.two.description")},{title:e("validators.four.children.three.title"),description:e("validators.four.children.three.description")},{title:e("validators.four.children.four.title"),description:e("validators.four.children.four.description")},{title:e("validators.four.children.five.title"),description:e("validators.four.children.five.description")},{title:e("validators.four.children.six.title"),description:e("validators.four.children.six.description")}]}]}(n):3===e?function(e){return[{question:e("governance.one.question"),answer:e("governance.one.answer")},{question:e("governance.two.question"),answer:e("governance.two.answer")},{question:e("governance.three.question"),answer:(0,r.jsx)(R.Z,{i18nKey:"faq:governance.three.answer",components:[(0,r.jsx)("a",{href:"https://www.youtube.com/watch?v=0JCbnug2tU4",target:"_blank",rel:"noreferrer"})]})}]}(n):[]},K=function(){var e=(0,a.Z)("faq").t,n=M(),t=n.state,i=n.handleSelected,c=function(e){return[e("blockchain.title"),e("stakers.title"),e("validators.title"),e("governance.title")]}(e),u=I(t.selected,e);return(0,r.jsx)(s.Z,{children:(0,r.jsx)(l.Z,{main:!0,children:(0,r.jsxs)(S,{children:[(0,r.jsxs)("div",{className:"header__wrapper",children:[(0,r.jsx)(o.Z,{className:"title",variant:"h2",children:e("faq")}),(0,r.jsx)(E,{items:c,selected:t.selected,handleChange:i})]}),(0,r.jsxs)("div",{className:"content__wrapper",children:[(0,r.jsx)(B,{items:c,selected:t.selected,handleChange:i}),(0,r.jsx)(T,{content:u})]})]})})})},z=!0,F=function(){return(0,r.jsx)(K,{})}}},function(e){e.O(0,[972,112,737,786,774,888,179],(function(){return n=8,e(e.s=n);var n}));var n=e.O();_N_E=n}]);