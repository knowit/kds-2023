(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[295],{9055:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var i=r(n(4938)),a=n(5893),o=(0,i.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"}),"Public");t.Z=o},1983:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var i=r(n(4938)),a=n(5893),o=(0,i.default)((0,a.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"Room");t.Z=o},1386:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Talks",function(){return n(9868)}])},9987:function(e,t,n){"use strict";var r=new(n(3204).ZT)("https://ylop7zcb.directus.app/");t.Z=r},9868:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var r=n(7568);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=n(655),l=n(5893),s=n(9072),c=n(918),d=n(9630),h=n(562),u=n(4225),m=n(754),p=n(1953),f=n(3366),x=n(7462),v=n(7294),g=n(6010),Z=n(4780),j=n(1796),k=n(7074),S=n(6446),b=n(5741);const w=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],T=(0,k.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,x.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,j.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,x.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,x.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,x.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),y=(0,k.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,x.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})));var P=v.forwardRef((function(e,t){const n=(0,S.Z)({props:e,name:"MuiDivider"}),{absolute:r=!1,children:i,className:a,component:o=(i?"div":"hr"),flexItem:s=!1,light:c=!1,orientation:d="horizontal",role:h=("hr"!==o?"separator":void 0),textAlign:u="center",variant:m="fullWidth"}=n,p=(0,f.Z)(n,w),v=(0,x.Z)({},n,{absolute:r,component:o,flexItem:s,light:c,orientation:d,role:h,textAlign:u,variant:m}),j=(e=>{const{absolute:t,children:n,classes:r,flexItem:i,light:a,orientation:o,textAlign:l,variant:s}=e,c={root:["root",t&&"absolute",s,a&&"light","vertical"===o&&"vertical",i&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,Z.Z)(c,b.V,r)})(v);return(0,l.jsx)(T,(0,x.Z)({as:o,className:(0,g.Z)(j.root,a),role:h,ref:t,ownerState:v},p,{children:i?(0,l.jsx)(y,{className:j.wrapper,ownerState:v,children:i}):null}))})),C=n(9987),I=n(594),A=n(4158),_=n(2432),N=n(244),z=n(9055),D=n(1983),E=function(e){var t,n,r=e.timeslot,i=e.tagFilters,a=e.handleTagClick;return(0,l.jsxs)(c.Z,{variant:"transparent",sx:{maxWidth:"1000px"},children:[(0,l.jsxs)(s.ZP,{container:!0,children:[(0,l.jsxs)(s.ZP,{item:!0,container:!0,xs:12,children:[(0,l.jsxs)(s.ZP,{item:!0,container:!0,alignItems:"center",columnSpacing:1,xs:4,children:[(0,l.jsx)(s.ZP,{item:!0,children:(0,l.jsx)(N.Z,{})}),(0,l.jsx)(s.ZP,{item:!0,children:(0,l.jsx)(d.Z,{children:"TBA"})})]}),(0,l.jsxs)(s.ZP,{item:!0,container:!0,alignItems:"center",columnSpacing:1,xs:4,children:[(0,l.jsx)(s.ZP,{item:!0,children:(0,l.jsx)(D.Z,{})}),(0,l.jsx)(s.ZP,{children:(0,l.jsx)(d.Z,{children:"TBA"})})]}),(0,l.jsxs)(s.ZP,{item:!0,container:!0,alignItems:"center",columnSpacing:1,xs:4,children:[(0,l.jsx)(s.ZP,{item:!0,children:(0,l.jsx)(z.Z,{})}),(0,l.jsx)(s.ZP,{item:!0,children:(0,l.jsx)(d.Z,{variant:"caption",textTransform:"capitalize",children:r.Talk.Language})})]})]}),(0,l.jsx)(s.ZP,{item:!0,xs:12,children:(0,l.jsx)(d.Z,{variant:"h5",children:r.Talk.Title})}),(0,l.jsx)(s.ZP,{item:!0,children:(0,l.jsx)(d.Z,{variant:"caption",sx:{textTransform:"capitalize"},children:"".concat(r.Talk.Type," talk (").concat(r.Talk.Duration," minutes)")})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,children:(0,l.jsx)(d.Z,{children:r.Talk.Description})}),null===(t=r.Talk.Speakers)||void 0===t?void 0:t.map((function(e,t){return(0,l.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,l.jsx)(d.Z,{variant:"body2",children:"".concat(e.Speaker_SpeakerId.SpeakerName," - ").concat(e.Speaker_SpeakerId.CompanyName)}),(0,l.jsx)(d.Z,{variant:"caption"}),(0,l.jsx)(d.Z,{children:e.Speaker_SpeakerId.Description})]},t)}))]}),(0,l.jsx)(s.ZP,{item:!0,container:!0,xs:12,spacing:1,children:null===(n=r.Talk.Tags)||void 0===n?void 0:n.map((function(e,t){return(0,l.jsx)(s.ZP,{item:!0,xs:"auto",children:(0,l.jsx)(u.Z,{variant:i.includes(e)?"tagSelected":"tag",onClick:function(){return a(e)},children:(0,l.jsx)(d.Z,{variant:"caption",children:e})})},t)}))})]})},R=function(){var e=(0,v.useContext)(A.N),t=(e[0],e[1]);(0,v.useEffect)((function(){t("soft1")}),[]);var n=(0,v.useState)(),i=n[0],f=n[1],x=function(){var e=(0,r.Z)((function(){var e,t,n,r;return(0,o.__generator)(this,(function(i){switch(i.label){case 0:return t={},[4,C.Z.items("Conference").readByQuery((t.limit=1,t.fields=["Name","Timeslots.Type","Timeslots.StartTime","Timeslots.Talk.*.*","Timeslots.Talk.Speakers.Speaker_SpeakerId.CompanyName","Timeslots.Talk.Speakers.Speaker_SpeakerId.Description","Timeslots.Talk.Speakers.Speaker_SpeakerId.SpeakerId","Timeslots.Talk.Speakers.Speaker_SpeakerId.SpeakerName"],t.filter={Name:{_eq:"KDS 2023"}},t))];case 1:return(e=i.sent()).data&&(n=e.data.find((function(e){return e})),r=n.Timeslots.filter((function(e){return"talk"==e.Type})),f(0==r.length?[]:r)),[2]}}))}));return function(){return e.apply(this,arguments)}}();(0,v.useEffect)((function(){x()}),[]);var g=(0,v.useState)([]),Z=g[0],j=g[1],k=(0,v.useState)([]),S=k[0],b=k[1],w=function(e){if(null===Z||void 0===Z?void 0:Z.includes(e)){var t=Z.filter((function(t){return t!=e}));j(t)}else j((function(t){return a(t).concat([e])}))};return(0,v.useEffect)((function(){i&&(Z.length<1?b(i):b(i.filter((function(e){var t;return null===(t=e.Talk.Tags)||void 0===t?void 0:t.some((function(e){return Z.includes(e)}))}))))}),[Z]),(0,v.useEffect)((function(){i&&i.length>0&&b(i)}),[i]),(0,l.jsxs)(s.ZP,{container:!0,rowSpacing:2,justifyContent:"center",alignItems:"center",children:[(0,l.jsx)(s.ZP,{item:!0,container:!0,justifyContent:"center",alignItems:"center",xs:12,children:(0,l.jsx)(c.Z,{variant:"transparent",sx:{maxWidth:"1000px"},children:(0,l.jsxs)(s.ZP,{item:!0,container:!0,children:[(0,l.jsx)(s.ZP,{item:!0,container:!0,justifyContent:"center",children:(0,l.jsx)(d.Z,{variant:"h3",children:"Talks"})}),(0,l.jsxs)(s.ZP,{item:!0,children:[(0,l.jsx)(d.Z,{children:"Welcome to Knowit Developer Summit! Let yourself be inspired to attend this year by browsing the talks submitted to our conference. Timeslots and programs will be published at a later date."}),(0,l.jsx)(s.ZP,{item:!0,children:(0,l.jsxs)(d.Z,{children:["If you are a presentor and wish to make any changes to your presentation info, contact ",(0,l.jsx)("u",{children:"johnny.bjanesoy@knowit.no "}),". For cancellations or other inquiries, contact"," ",(0,l.jsx)("u",{children:"kds@knowit.no"})]})})]})]})})}),(0,l.jsx)(s.ZP,{item:!0,display:Z.length>0?"block":"none",children:(0,l.jsxs)(c.Z,{variant:"transparent",sx:{maxWidth:"1000px"},children:[(0,l.jsx)(d.Z,{children:"Filtered by the following tags:"}),(0,l.jsx)(h.Z,{onClick:function(){j([])},color:"error",children:(0,l.jsx)(I.Z,{})}),Z.map((function(e,t){return(0,l.jsx)(u.Z,{variant:"tagSelected",onClick:function(){return w(e)},children:(0,l.jsx)(d.Z,{variant:"caption",children:e})},t)}))]})}),(0,l.jsx)(s.ZP,{item:!0,container:!0,children:void 0===i?(0,l.jsx)(s.ZP,{item:!0,container:!0,justifyContent:"center",children:(0,l.jsx)(m.Z,{size:"6rem",color:"secondary"})}):0==i.length?(0,l.jsx)(d.Z,{children:"Error retrieving talks from Directus"}):null===S||void 0===S?void 0:S.map((function(e,t){return(0,l.jsxs)(s.ZP,{item:!0,container:!0,xs:12,alignItems:"center",justifyContent:"center",children:[(0,l.jsx)(E,{timeslot:e,tagFilters:Z,handleTagClick:w}),(0,l.jsx)(p.Z,{width:"50%",margin:"2rem 0rem",children:(0,l.jsx)(P,{color:_.sC})})]},t)}))})]})}}},function(e){e.O(0,[427,774,888,179],(function(){return t=1386,e(e.s=t);var t}));var t=e.O();_N_E=t}]);