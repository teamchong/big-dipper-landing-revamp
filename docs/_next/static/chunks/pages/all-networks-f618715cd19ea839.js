(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[113],{70:function(n,t,e){"use strict";var r=e(5394);t.Z=void 0;var o=r(e(1938)),i=e(7611),a=(0,o.default)((0,i.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");t.Z=a},8947:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/all-networks",function(){return e(7996)}])},7996:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return An},default:function(){return In}});var r,o=e(7611),i=e(5129),a=e(1395),c=e(7385),l=e(7597),s=e(7774),u=e(2049),d=e.n(u),p=e(2241),g=e(6153),f=e(4884),h=e(7238),m=e(4910),v=e(2714),b=e(9134),x=e.n(b);!function(n){n[n.All=0]="All",n[n.Mainnet=1]="Mainnet",n[n.Testnet=2]="Testnet",n[n.Retired=3]="Retired",n[n.Devnet=4]="Devnet"}(r||(r={}));var w=r,Z=e(3262),y=e(1531),j=e(5616),k=e(2051),O=e(4167),P=e(8019),C=e(8546),R=e(4083),M=e(145),S=e(3723),B=e(4988);function T(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var $=(0,S.ZP)(O.Z)((function(n){var t,e=n.theme;return T(t={width:"100%"},e.breakpoints.up("md"),{width:e.spacing(40),minWidth:e.spacing(40)}),T(t,"& .MuiInputBase-root",{borderRadius:e.spacing(2),paddingRight:"".concat(e.spacing(2)," !important")}),t})),z=(0,S.ZP)(P.Z)((function(n){var t=n.theme;return{"& .MuiPaper-root":{backgroundColor:(0,B.Fq)(t.palette.background.mobileMenu,.9),borderRadius:t.spacing(1),zIndex:1}}})),N=(0,S.ZP)(C.ZP)((function(n){var t=n.theme;return{height:t.spacing(7),display:"flex",flexFlow:"row nowrap",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",padding:"0 ".concat(t.spacing(2)),marginTop:t.spacing(1),"&:hover":{backgroundColor:(0,B.Fq)(t.palette.background.mobileMenu,.8)}}})),_=(0,S.ZP)(R.Z)((function(n){var t=n.theme;return{flex:"0 0 ".concat(t.spacing(3)),justifyContent:"center","& img":{background:t.palette.common.white,borderRadius:"100%",padding:t.spacing(.2),border:"".concat(t.spacing(.2)," solid ").concat(t.palette.common.white," !important")}}})),A=(0,S.ZP)(M.Z)({flex:"1 1 auto",flexFlow:"row wrap"}),I=(0,S.ZP)(g.Z)({fontSize:"0.8rem"});function F(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function W(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){F(n,t,e[t])}))}return n}function D(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}function L(n){return W({},n,{startAdornment:(0,o.jsx)(j.Z,{position:"start",children:(0,o.jsx)(k.Z,{})})})}function E(n,t){var e=t.network,r=t.link;return(0,o.jsxs)(N,W({},n,{title:r.url,children:[(0,o.jsx)(_,{children:(0,o.jsx)("img",{alt:r.name,src:e.logo,width:"36",height:"36"})}),(0,o.jsxs)(A,{children:[e.name,(0,o.jsx)(I,{children:r.chain_id})]})]}))}function H(n,t){if(t){var e=t.link;(null===e||void 0===e?void 0:e.url)&&window.open(e.url,"_top")}}var G=function(n){var t=n.networks,e=(0,a.Z)("common").t,r=t.flatMap((function(n){return n.links.map((function(t){return{label:"".concat(n.name," ").concat(t.chain_id),network:n,link:t}}))}));return(0,o.jsx)($,{popupIcon:null,noOptionsText:e("noMatch"),options:r,PopperComponent:z,renderOption:E,renderInput:function(n){var t=n.InputProps,r=D(n,["InputProps"]);return(0,o.jsx)(y.Z,W({},r,{placeholder:e("searchNetwork"),InputProps:L(t)}))},onChange:H})};var q=e(4842),K=e(718),V=e(7384),X=e(6537);var J=n=>{const t=l.useRef({});return l.useEffect((()=>{t.current=n})),t.current},Q=e(6224);var U=e(7519),Y=e(4691);function nn(n){return(0,Y.Z)("BaseBadge",n)}(0,U.Z)("BaseBadge",["root","badge","invisible"]);var tn=e(6304);const en=["badgeContent","component","children","components","componentsProps","invisible","max","showZero"],rn=l.forwardRef((function(n,t){const{component:e,children:r,components:i={},componentsProps:a={},max:c=99,showZero:l=!1}=n,s=(0,K.Z)(n,en),{badgeContent:u,max:d,displayValue:p,invisible:g}=function(n){const{badgeContent:t,invisible:e=!1,max:r=99,showZero:o=!1}=n,i=J({badgeContent:t,max:r});let a=e;!1!==e||0!==t||o||(a=!0);const{badgeContent:c,max:l=r}=a?i:n;return{badgeContent:c,invisible:a,max:l,displayValue:c&&Number(c)>l?`${l}+`:c}}((0,V.Z)({},n,{max:c})),f=(0,V.Z)({},n,{badgeContent:u,invisible:g,max:d,showZero:l}),h=(n=>{const{invisible:t}=n,e={root:["root"],badge:["badge",t&&"invisible"]};return(0,Q.Z)(e,nn,void 0)})(f),m=e||i.Root||"span",v=(0,tn.Z)({elementType:m,externalSlotProps:a.root,externalForwardedProps:s,additionalProps:{ref:t},ownerState:f,className:h.root}),b=i.Badge||"span",x=(0,tn.Z)({elementType:b,externalSlotProps:a.badge,ownerState:f,className:h.badge});return(0,o.jsxs)(m,(0,V.Z)({},v,{children:[r,(0,o.jsx)(b,(0,V.Z)({},x,{children:p}))]}))}));var on=rn,an=e(9138),cn=e(3963);var ln=n=>!n||!(0,cn.Z)(n),sn=e(4810);function un(n){return(0,Y.Z)("MuiBadge",n)}var dn=(0,U.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]);const pn=["anchorOrigin","className","component","components","componentsProps","overlap","color","invisible","max","badgeContent","showZero","variant"],gn=(0,S.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(n,t)=>t.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),fn=(0,S.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.badge,t[e.variant],t[`anchorOrigin${(0,sn.Z)(e.anchorOrigin.vertical)}${(0,sn.Z)(e.anchorOrigin.horizontal)}${(0,sn.Z)(e.overlap)}`],"default"!==e.color&&t[`color${(0,sn.Z)(e.color)}`],e.invisible&&t.invisible]}})((({theme:n,ownerState:t})=>(0,V.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:n.typography.fontFamily,fontWeight:n.typography.fontWeightMedium,fontSize:n.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:n.transitions.create("transform",{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.enteringScreen})},"default"!==t.color&&{backgroundColor:(n.vars||n).palette[t.color].main,color:(n.vars||n).palette[t.color].contrastText},"dot"===t.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${dn.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${dn.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${dn.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${dn.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${dn.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${dn.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${dn.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${dn.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},t.invisible&&{transition:n.transitions.create("transform",{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.leavingScreen})})));var hn=l.forwardRef((function(n,t){var e,r,i,a;const c=(0,an.Z)({props:n,name:"MuiBadge"}),{anchorOrigin:l={vertical:"top",horizontal:"right"},className:s,component:u="span",components:d={},componentsProps:p={},overlap:g="rectangular",color:f="default",invisible:h=!1,max:m,badgeContent:v,showZero:b=!1,variant:x="standard"}=c,w=(0,K.Z)(c,pn),Z=J({anchorOrigin:l,color:f,overlap:g,variant:x});let y=h;!1===h&&(0===v&&!b||null==v&&"dot"!==x)&&(y=!0);const{color:j=f,overlap:k=g,anchorOrigin:O=l,variant:P=x}=y?Z:c,C=(n=>{const{color:t,anchorOrigin:e,invisible:r,overlap:o,variant:i,classes:a={}}=n,c={root:["root"],badge:["badge",i,r&&"invisible",`anchorOrigin${(0,sn.Z)(e.vertical)}${(0,sn.Z)(e.horizontal)}`,`anchorOrigin${(0,sn.Z)(e.vertical)}${(0,sn.Z)(e.horizontal)}${(0,sn.Z)(o)}`,`overlap${(0,sn.Z)(o)}`,"default"!==t&&`color${(0,sn.Z)(t)}`]};return(0,Q.Z)(c,un,a)})((0,V.Z)({},c,{anchorOrigin:O,invisible:y,color:j,overlap:k,variant:P}));let R;return"dot"!==P&&(R=v&&Number(v)>m?`${m}+`:v),(0,o.jsx)(on,(0,V.Z)({invisible:h,badgeContent:R,showZero:b,max:m},w,{components:(0,V.Z)({Root:gn,Badge:fn},d),className:(0,X.Z)(null==(e=p.root)?void 0:e.className,C.root,s),componentsProps:{root:(0,V.Z)({},p.root,ln(d.Root)&&{as:u,ownerState:(0,V.Z)({},null==(r=p.root)?void 0:r.ownerState,{anchorOrigin:O,color:j,overlap:k,variant:P})}),badge:(0,V.Z)({},p.badge,{className:(0,X.Z)(C.badge,null==(i=p.badge)?void 0:i.className)},ln(d.Badge)&&{ownerState:(0,V.Z)({},null==(a=p.badge)?void 0:a.ownerState,{anchorOrigin:O,color:j,overlap:k,variant:P})})},ref:t}))})),mn=e(2313);function vn(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var bn=(0,S.ZP)(p.Z)((function(n){var t=n.theme;return{position:"absolute",zIndex:2e3,borderRadius:t.spacing(2),padding:"".concat(t.spacing(1)," 0"),flexFlow:"column nowrap",gap:t.spacing(1),top:"110%",width:"100%",background:t.palette.grey.A200,color:t.palette.common.black,outline:"1px solid ".concat(t.palette.common.black),boxShadow:t.shadows[2],"& .MuiListItemButton-root":{padding:"".concat(t.spacing(1)," 0 ").concat(t.spacing(1)," ").concat(t.spacing(3)),background:"linear-gradient(0deg, ".concat(t.palette.grey.A200,", ").concat((0,B._j)(t.palette.grey.A200,.05)," 60%, ").concat(t.palette.grey.A200,")"),"&:hover":{background:t.palette.grey.A400},"& .MuiListItemIcon-root":{color:t.palette.common.black}},"& > .MuiBox-root:nth-of-type(1)":{display:"flex",flexFlow:"row nowrap",gap:t.spacing(1),justifyContent:"space-between",alignItems:"center",fontWeight:t.typography.fontWeightBold,"& img":{background:t.palette.common.white,borderRadius:"100%",border:"".concat(t.spacing(.5)," solid ").concat(t.palette.common.white," !important")}},"& > .MuiBox-root:nth-of-type(2)":{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",gap:t.spacing(1),"& > .MuiBox-root":{display:"flex",flexFlow:"row nowrap",justifyContent:"space-between",gap:t.spacing(1),alignItems:"center","& > .MuiBox-root":{flex:"1 0 auto"},"& > .MuiBox-root:nth-of-type(1)":{fontWeight:t.typography.fontWeightBold,textAlign:"left"},"& > .MuiBox-root:nth-of-type(2)":{textAlign:"right"}}}}})),xn=(0,S.ZP)(p.Z)((function(n){var t=n.theme;return{color:t.palette.primary.contrastText,fontSize:t.typography.overline.fontSize,display:"flex",width:"100%",height:"100%",justifyContent:"flex-start",alignItems:"center",flexFlow:"row unwrap",padding:"0 ".concat(t.spacing(3)),gap:t.spacing(2),textAlign:"left",cursor:"pointer","& .MuiBox-root":{flex:"1 1 auto"},"& img":{minWidth:t.spacing(5),minHeight:t.spacing(5)},"& .MuiTypography-root":{fontWeight:"900"},"& .MuiBadge-badge":{transform:"scale(1) translate(1.5rem, -0.1rem)"}}})),wn=(0,S.ZP)(p.Z)((function(n){var t,e=n.theme;return vn(t={minWidth:e.spacing(28),minHeight:e.spacing(10),borderRadius:e.spacing(2),background:e.palette.grey.A400,border:"2px solid ".concat(e.palette.text.primary),display:"inline-flex",justifyContent:"center",flexFlow:"row wrap",alignItems:"center",textAlign:"center",cursor:"pointer",position:"relative"},e.breakpoints.up("md"),{minWidth:e.spacing(32)}),vn(t,"&:hover, &.active",{background:e.palette.grey.A200}),t})),Zn=e(1886),yn=e(70),jn=function(n){var t=n.link,e=t.name,r=t.chain_id,i=t.url;return(0,o.jsx)(d(),{href:i,passHref:!0,children:(0,o.jsxs)(Zn.Z,{children:[(0,o.jsxs)(M.Z,{children:[(0,o.jsx)(g.Z,{variant:"h5",children:e}),(0,o.jsx)(g.Z,{variant:"subtitle1",children:r})]}),(0,o.jsx)(R.Z,{children:(0,o.jsx)(yn.Z,{width:16,height:16})})]})})},kn=function(n){var t=n.network,e=n.isOpened,r=n.onOpen,i=(0,l.useCallback)((function(){return r(t.name)}),[t,r]),a=function(n){var t,e,r,o,i=null===n||void 0===n||null===(t=n.links)||void 0===t?void 0:t.find((function(n){return/^mainnet$/i.test(n.name)}));if(null===i||void 0===i?void 0:i.url)return i.chain_id;var a,c=null===n||void 0===n||null===(e=n.links)||void 0===e?void 0:e.find((function(n){return/^testnet$/i.test(n.name)}));return(null===c||void 0===c?void 0:c.url)?c.chain_id:null!==(a=null===n||void 0===n||null===(r=n.links)||void 0===r||null===(o=r[0])||void 0===o?void 0:o.chain_id)&&void 0!==a?a:void 0}(t),c=t.name,s=t.logo,u=t.links;return(0,o.jsxs)(wn,{className:x()({active:e}),children:[e&&(0,o.jsx)(bn,{children:(0,o.jsx)(q.Z,{children:u.map((function(n){return(0,o.jsx)(jn,{link:n},n.chain_id)}))})}),(0,o.jsxs)(xn,{onClick:i,children:[(0,o.jsx)("img",{alt:c,src:s,width:"30",height:"30"}),(0,o.jsxs)(p.Z,{children:[(0,o.jsx)(g.Z,{children:c}),(0,o.jsx)(p.Z,{children:(0,o.jsx)(hn,{color:"secondary",badgeContent:null===u||void 0===u?void 0:u.length,children:a})})]}),!!(null===u||void 0===u?void 0:u[0])&&(0,o.jsxs)(o.Fragment,{children:[e&&(0,o.jsx)(f.Z,{width:16,height:16}),!e&&(0,o.jsx)(mn.Z,{width:16,height:16})]})]})]})},On=e(3842),Pn=e(8989);function Cn(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var Rn=(0,S.ZP)(On.Z)({padding:"0",overflow:"visible"}),Mn=(0,S.ZP)(p.Z)((function(n){var t=n.theme;return{padding:"0 ".concat(t.spacing(1))}})),Sn=(0,S.ZP)("a")((function(n){var t,e=n.theme;return Cn(t={display:"inline-block",padding:e.spacing(1),color:e.palette.secondary.contrastText},e.breakpoints.up("md"),{padding:"".concat(e.spacing(1)," ").concat(e.spacing(2))}),Cn(t,"&.active",{color:e.palette.secondary.main,borderBottom:"2px solid ".concat(e.palette.secondary.main)}),t})),Bn=(0,S.ZP)(p.Z)((function(n){var t,e,r=n.theme;return Cn(e={display:"flex",flexFlow:"row wrap",justifyContent:"space-between",alignItems:"center",padding:"0 ".concat(r.spacing(3)," ").concat(r.spacing(2)," ").concat(r.spacing(3))},r.breakpoints.up("md"),{padding:"0 0 ".concat(r.spacing(2)," 0")}),Cn(e,"& .MuiTypography-root",Cn({display:"inline-block",fontSize:r.typography.h3.fontSize,padding:"".concat(r.spacing(3)," 0"),textAlign:"center",width:"100%"},r.breakpoints.up("md"),{width:"auto",display:"block"})),Cn(e,"& > .MuiBox-root",(Cn(t={width:"100%",padding:"0 0 ".concat(r.spacing(2)," 0")},r.breakpoints.up("md"),{order:2}),Cn(t,"& .MuiTypography-subtitle1",{}),t)),e})),Tn=(0,S.ZP)(g.Z)((function(n){var t=n.theme;return Cn({fontSize:"0.8rem",textAlign:"center",padding:"0 0 ".concat(t.spacing(2)," 0")},t.breakpoints.up("md"),{textAlign:"left",fontSize:"0.9rem"})})),$n=(0,S.ZP)(p.Z)((function(n){var t=n.theme;return Cn({padding:"".concat(t.spacing(3)," ").concat(t.spacing(3)," ").concat(t.spacing(20)," ").concat(t.spacing(3)),display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(".concat(t.spacing(28),", 1fr))"),justifyContent:"space-between",gridGap:t.spacing(1)},t.breakpoints.up("md"),{padding:"0 0 ".concat(t.spacing(20)," 0"),gridGap:t.spacing(3),gridTemplateColumns:"repeat(auto-fill, minmax(".concat(t.spacing(32),", 1fr))")})})),zn=(0,S.ZP)(p.Z)((function(n){return{padding:n.theme.spacing(6),textAlign:"center"}})),Nn=(0,S.ZP)(Pn.Z)((function(n){var t=n.theme;return{width:t.spacing(4),height:t.spacing(4),background:"rgba(255,255,255,0.2)",border:"1px solid ".concat(t.palette.text.primary),color:t.palette.text.primary}}));var _n=function(n){var t=n.networkList,e=(0,i.useRouter)(),r=(0,l.useState)(null!==t&&void 0!==t?t:[]),u=r[0],b=r[1],y=(0,l.useState)(0),j=y[0],k=y[1],O=(0,l.useState)(""),P=O[0],C=O[1],R=(0,l.useCallback)((function(n){C((function(t){return(0,v.fS0)(t,n)?"":n}))}),[C]),M=(0,l.useCallback)((function(n){var t=function(n){switch(n){case"/all-networks#tab=Mainnet":return w.Mainnet;case"/all-networks#tab=Testnet":return w.Testnet;case"/all-networks#tab=Devnet":return w.Devnet;case"/all-networks#tab=Retired":return w.Retired;default:return w.All}}(n);k((function(n){return n===t?n:t}))}),[]);(0,l.useEffect)((function(){return(0,h.Z)().then((function(n){return b((function(t){return(0,v.fS0)(t,n)?t:n}))})),M(e.asPath),e.events.on("hashChangeStart",M),function(){return e.events.off("hashChangeStart",M)}}),[]);var S=(0,l.useMemo)((function(){return u.sort((function(n,t){return n.name.localeCompare(t.name)}))}),[u]),B=(0,l.useMemo)((function(){switch(j){case w.Mainnet:return S.filter((function(n){var t;return null===(t=n.links)||void 0===t?void 0:t.some((function(n){return/^mainnet$/i.test(n.name)}))}));case w.Testnet:return S.filter((function(n){var t;return null===(t=n.links)||void 0===t?void 0:t.some((function(n){return/^testnet$/i.test(n.name)}))}));case w.Devnet:return S.filter((function(n){var t;return null===(t=n.links)||void 0===t?void 0:t.some((function(n){return/^devnet$/i.test(n.name)}))}));case w.Retired:return S.filter((function(n){var t;return null===(t=n.links)||void 0===t?void 0:t.some((function(n){return/^retired$/i.test(n.name)}))}));default:return S}}),[S,j]),T=(0,a.Z)("all-networks").t;return(0,o.jsx)(s.Z,{children:(0,o.jsx)(Rn,{children:(0,o.jsxs)(Z.Z,{children:[(0,o.jsxs)(Bn,{children:[(0,o.jsx)(g.Z,{variant:"h3",children:T("allNetworks")}),(0,o.jsxs)(p.Z,{children:[(0,o.jsx)(Tn,{children:(0,o.jsx)(c.Z,{i18nKey:"all-networks:allNetworksDescription",components:[(0,o.jsx)(d(),{href:"https://www.forbole.com/contact"})]})}),(0,o.jsxs)(Mn,{children:[(0,o.jsx)(d(),{href:"/all-networks",passHref:!0,children:(0,o.jsx)(Sn,{className:x()({active:j===w.All}),children:"All"})}),(0,o.jsx)(d(),{href:"/all-networks#tab=Mainnet",passHref:!0,children:(0,o.jsx)(Sn,{className:x()({active:j===w.Mainnet}),children:"Mainnet"})}),(0,o.jsx)(d(),{href:"/all-networks#tab=Testnet",passHref:!0,children:(0,o.jsx)(Sn,{className:x()({active:j===w.Testnet}),children:"Testnet"})}),(0,o.jsx)(d(),{href:"/all-networks#tab=Devnet",passHref:!0,children:(0,o.jsx)(Sn,{className:x()({active:j===w.Devnet}),children:"Devnet"})}),(0,o.jsx)(d(),{href:"/all-networks#tab=Retired",passHref:!0,children:(0,o.jsx)(Sn,{className:x()({active:j===w.Retired}),children:"Retired"})})]})]}),(0,o.jsx)(G,{networks:B})]}),(0,o.jsxs)($n,{children:[B.map((function(n){return(0,o.jsx)(kn,{network:n,isOpened:n.name===P,onOpen:R},n.name)})),!B.length&&(0,o.jsx)(p.Z,{sx:{background:"#fff",padding:"2rem",borderRadius:"1rem",color:"#000"},children:T("common:noMatch")})]}),(0,o.jsx)(zn,{children:(0,o.jsx)(Nn,{onClick:m.Z,children:(0,o.jsx)(f.Z,{width:36,height:36})})})]})})})},An=!0,In=function(n){var t=n.networkList;return(0,o.jsx)(_n,{networkList:t})}},4910:function(n,t,e){"use strict";function r(){window.scrollTo({top:0,behavior:"smooth"})}e.d(t,{Z:function(){return r}})},7238:function(n,t,e){"use strict";e.d(t,{Z:function(){return c}});var r=e(8901),o=e.n(r);function i(n,t,e,r,o,i,a){try{var c=n[i](a),l=c.value}catch(s){return void e(s)}c.done?t(l):Promise.resolve(l).then(r,o)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function c(n){i(a,r,o,c,l,"next",n)}function l(n){i(a,r,o,c,l,"throw",n)}c(void 0)}))}}function c(){return l.apply(this,arguments)}function l(){return(l=a(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.next=2;break;case 2:return n.next=4,fetch("https://raw.githubusercontent.com/forbole/big-dipper-networks/main/networks.json");case 4:return t=n.sent,n.next=7,t.json();case 7:return e=n.sent,n.abrupt("return",e);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}},function(n){n.O(0,[972,112,268,786,774,888,179],(function(){return t=8947,n(n.s=t);var t}));var t=n.O();_N_E=t}]);