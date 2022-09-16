(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3619:function(n,e,r){"use strict";var t=r(4836);e.Z=void 0;var o=t(r(4938)),i=r(5893),s=(0,o.default)((0,i.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.Z=s},4850:function(n,e,r){"use strict";var t=r(7462),o=r(3366),i=r(7294),s=r(8662),a=r(2097),c=r(3566),l=r(4771),d=r(5893);const u=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],m={entering:{transform:"none"},entered:{transform:"none"}},p=i.forwardRef((function(n,e){const r=(0,a.Z)(),p={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:f,appear:x=!0,children:h,easing:g,in:y,onEnter:Z,onEntered:v,onEntering:b,onExit:w,onExited:j,onExiting:E,style:k,timeout:C=p,TransitionComponent:P=s.ZP}=n,S=(0,o.Z)(n,u),_=i.useRef(null),F=(0,l.Z)(h.ref,e),R=(0,l.Z)(_,F),L=n=>e=>{if(n){const r=_.current;void 0===e?n(r):n(r,e)}},A=L(b),D=L(((n,e)=>{(0,c.n)(n);const t=(0,c.C)({style:k,timeout:C,easing:g},{mode:"enter"});n.style.webkitTransition=r.transitions.create("transform",t),n.style.transition=r.transitions.create("transform",t),Z&&Z(n,e)})),N=L(v),T=L(E),H=L((n=>{const e=(0,c.C)({style:k,timeout:C,easing:g},{mode:"exit"});n.style.webkitTransition=r.transitions.create("transform",e),n.style.transition=r.transitions.create("transform",e),w&&w(n)})),M=L(j);return(0,d.jsx)(P,(0,t.Z)({appear:x,in:y,nodeRef:_,onEnter:D,onEntered:N,onEntering:A,onExit:H,onExited:M,onExiting:T,addEndListener:n=>{f&&f(_.current,n)},timeout:C},S,{children:(n,e)=>i.cloneElement(h,(0,t.Z)({style:(0,t.Z)({transform:"scale(0)",visibility:"exited"!==n||y?void 0:"hidden"},m[n],k,h.props.style),ref:R},e))}))}));e.Z=p},8312:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(91)}])},91:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return A}});var t=r(5893),o=r(7074),i=r(9072),s=r(3366),a=r(7462),c=r(7294),l=r(6010),d=r(4780),u=r(6622),m=r(6446),p=r(1625),f=r(4771),x=r(9630),h=r(4867);function g(n){return(0,h.Z)("MuiLink",n)}var y=(0,r(1588).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Z=r(4844),v=r(1796);const b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var w=({theme:n,ownerState:e})=>{const r=(n=>b[n]||n)(e.color),t=(0,Z.D)(n,`palette.${r}`,!1)||e.color,o=(0,Z.D)(n,`palette.${r}Channel`);return"vars"in n&&o?`rgba(${o} / 0.4)`:(0,v.Fq)(t,.4)};const j=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],E=(0,o.ZP)(x.Z,{name:"MuiLink",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:r}=n;return[e.root,e[`underline${(0,u.Z)(r.underline)}`],"button"===r.component&&e.button]}})((({theme:n,ownerState:e})=>(0,a.Z)({},"none"===e.underline&&{textDecoration:"none"},"hover"===e.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===e.underline&&(0,a.Z)({textDecoration:"underline"},"inherit"!==e.color&&{textDecorationColor:w({theme:n,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===e.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${y.focusVisible}`]:{outline:"auto"}})));var k=c.forwardRef((function(n,e){const r=(0,m.Z)({props:n,name:"MuiLink"}),{className:o,color:i="primary",component:x="a",onBlur:h,onFocus:y,TypographyClasses:Z,underline:v="always",variant:w="inherit",sx:k}=r,C=(0,s.Z)(r,j),{isFocusVisibleRef:P,onBlur:S,onFocus:_,ref:F}=(0,p.Z)(),[R,L]=c.useState(!1),A=(0,f.Z)(e,F),D=(0,a.Z)({},r,{color:i,component:x,focusVisible:R,underline:v,variant:w}),N=(n=>{const{classes:e,component:r,focusVisible:t,underline:o}=n,i={root:["root",`underline${(0,u.Z)(o)}`,"button"===r&&"button",t&&"focusVisible"]};return(0,d.Z)(i,g,e)})(D);return(0,t.jsx)(E,(0,a.Z)({color:i,className:(0,l.Z)(N.root,o),classes:Z,component:x,onBlur:n=>{S(n),!1===P.current&&L(!1),h&&h(n)},onFocus:n=>{_(n),!0===P.current&&L(!0),y&&y(n)},ref:A,ownerState:D,variant:w,sx:[...Object.keys(b).includes(i)?[]:[{color:i}],...Array.isArray(k)?k:[k]]},C))})),C=r(3360),P=r(3619),S=r(1270),_=r(4577),F=r(1664),R=r.n(F),L=(0,o.ZP)("div")({color:"white",border:"1px solid white",borderRadius:50,padding:"5px 15px",margin:"5px 10px",fontSize:"1rem"}),A=function(){return(0,t.jsx)(C.K,{fadeInMs:2500,children:(0,t.jsx)(S.f,{children:(0,t.jsxs)(i.ZP,{container:!0,spacing:2,children:[(0,t.jsx)(i.ZP,{item:!0,xs:12,justifyContent:"center",marginBottom:4,maxWidth:"100%",children:(0,t.jsx)(_.k,{})}),(0,t.jsxs)(i.ZP,{item:!0,xs:12,width:500,display:"flex",justifyContent:"center",marginBottom:3,children:[(0,t.jsx)(L,{children:"3rd - 4th February"}),(0,t.jsx)(L,{children:"Copenhagen"})]}),(0,t.jsxs)(i.ZP,{item:!0,xs:12,display:"flex",flexDirection:"column",alignItems:"center",children:[(0,t.jsx)(R(),{href:"https://docs.google.com/forms/d/e/1FAIpQLSd1L8AHc1fsbYmXLePW71v4g8SGf-61whxHMwF7oox6br5xQw/viewform?usp=sf_link",passHref:!0,children:(0,t.jsxs)(k,{underline:"hover",variant:"body1",color:"white",marginBottom:2,fontSize:"1rem",width:200,display:"flex",children:[(0,t.jsx)(P.Z,{sx:{marginRight:"10px"}}),"Register speaker"]})}),(0,t.jsx)(R(),{href:"https://docs.google.com/forms/d/e/1FAIpQLScFj8XfS7TZjRBCN2PUgw3zFbgy5QxwaX3r8-PHDMnPH_95qg/viewform?usp=sf_link",passHref:!0,children:(0,t.jsxs)(k,{underline:"hover",variant:"body1",color:"white",fontSize:"1rem",width:200,display:"flex",children:[(0,t.jsx)(P.Z,{sx:{marginRight:"10px"}}),"Register participant"]})})]})]})})})}},1270:function(n,e,r){"use strict";r.d(e,{c:function(){return i},f:function(){return s}});var t=r(7074),o=r(918),i=(0,t.ZP)(o.Z)({backgroundColor:"rgba(255,255,255,0.01)",backdropFilter:"blur(5px)",padding:"1rem",maxWidth:"750px"}),s=(0,t.ZP)(o.Z)({backgroundColor:"transparent",padding:"1rem",maxWidth:"750px"})},3360:function(n,e,r){"use strict";r.d(e,{K:function(){return s}});var t=r(5893),o=r(9072),i=r(4850),s=(r(7294),function(n){var e=n.fadeInMs,r=n.children;return(0,t.jsx)(o.ZP,{container:!0,justifyContent:"center",alignContent:"center",children:(0,t.jsx)(o.ZP,{item:!0,maxWidth:"100%",children:(0,t.jsx)(i.Z,{in:!0,timeout:e,children:(0,t.jsx)("div",{children:r})})})})})}},function(n){n.O(0,[774,888,179],(function(){return e=8312,n(n.s=e);var e}));var e=n.O();_N_E=e}]);