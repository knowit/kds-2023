_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"5W5Q":function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/schedule",function(){return n("NTwR")}])},NTwR:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),s=n.n(t),c=n("bgFo"),o=n("UI+n"),r=s.a.createElement;a.default=function(){var e=Object(t.useState)(JSON.parse(JSON.stringify(o.program))),a=e[0],n=e[1],s=Object(t.useState)(!1),l=s[0],u=s[1],i=Object(t.useState)([]),d=i[0],f=i[1],g=Object(t.useState)(0),h=g[0],m=g[1];Object(t.useEffect)((function(){p()}),[d,l]);var p=function(){var e=JSON.parse(JSON.stringify(o.program));e.days.forEach((function(e){e.slots.forEach((function(e){e.rooms=e.rooms.filter((function(e){return e.talks=e.talks.filter((function(e){var a=e.tags.concat([e.language]),n=null!=localStorage.getItem(e.talkId);return!(l&&!n)&&(0==d.length||d.some((function(e){return a.some((function(a){return a==e}))})))})),e.talks.length>0}))}))})),n(e)},N=function(e){m(e)};return r("div",{className:"schedule page"},r(c.e,{title:"Schedule",hideLogo:"small",background:!0},r("div",{className:"schedule-document negative-margin"},r("div",{className:"day-selector-top"},a.days.map((function(e,a){return r("span",{key:e.day},0!=a&&r("span",null," | "),r("span",{onClick:function(){return N(a)},className:"header-day ".concat(h==a?"selected":"")},e.day))}))),r("div",{className:"schedule-container"},r("div",{className:"header"},r(c.c,{onTagChange:function(e){f(e)},onFavoriteChange:function(e){u(e)},selectedTags:d,showOnlyFavorites:l,className:"hide-small schedule-filter",type:"dropdown"}),r("div",{className:"header-title"},r("h1",{className:"title"},"Schedule"),r("div",{className:"day-selector-header"},a.days.map((function(e,a){return r("span",{key:e.day},0!=a&&r("span",{className:"seperator"}," | "),r("span",{onClick:function(){return N(a)},className:"header-day ".concat(h==a?"selected":"")},e.day))}))))),a.days.length>0&&r(c.a,{onToggleTag:function(e){return function(e){d.indexOf(e)>-1?f(d.filter((function(a){return a!=e}))):f(d.concat(e))}(e)},onFavoriteChange:function(){return p()},tags:d,currDay:a.days[h],slots:a.days[h]&&a.days[h].slots})))))}}},[["5W5Q",0,2,1,3]]]);