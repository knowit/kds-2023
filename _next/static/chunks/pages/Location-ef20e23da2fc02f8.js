(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[124],{3454:function(e,t,n){"use strict";var o,r;e.exports=(null==(o=n.g.process)?void 0:o.env)&&"object"===typeof(null==(r=n.g.process)?void 0:r.env)?n.g.process:n(7663)},2373:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Location",function(){return n(3202)}])},3202:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var o=n(5893),r=n(7074),i=n(9630),s=n(9072),a=n(918),l=n(2432),c=n(1664),u=n.n(c),d=n(7294);const p=d.createContext(null);function m(e){return{longitude:e.center.lng,latitude:e.center.lat,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing,padding:e.padding}}function f(e,t){const n=t.viewState||t;let o=!1;if("longitude"in n&&"latitude"in n){const t=e.center;e.center=new t.constructor(n.longitude,n.latitude),o=o||t!==e.center}if("zoom"in n){const t=e.zoom;e.zoom=n.zoom,o=o||t!==e.zoom}if("bearing"in n){const t=e.bearing;e.bearing=n.bearing,o=o||t!==e.bearing}if("pitch"in n){const t=e.pitch;e.pitch=n.pitch,o=o||t!==e.pitch}return n.padding&&!e.isPaddingEqual(n.padding)&&(o=!0,e.padding=n.padding),o}const h=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function g(e){if(!e)return null;if("string"===typeof e)return e;if("toJS"in e&&(e=e.toJS()),!e.layers)return e;const t={};for(const o of e.layers)t[o.id]=o;const n=e.layers.map((e=>{const n=t[e.ref];let o=null;if("interactive"in e&&(o={...e},delete o.interactive),n){o=o||{...e},delete o.ref;for(const e of h)e in n&&(o[e]=n[e])}return o||e}));return{...e,layers:n}}function v(e,t){if(e===t)return!0;if(!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!v(e[n],t[n]))return!1;return!0}if(Array.isArray(t))return!1;if("object"===typeof e&&"object"===typeof t){const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(const r of n){if(!t.hasOwnProperty(r))return!1;if(!v(e[r],t[r]))return!1}return!0}return!1}var y=n(3454);const _={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},x={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},b={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},w=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],E=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class L{constructor(e,t,n){this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=e=>{const t=this.props[b[e.type]];t&&t(e)},this._onPointerEvent=e=>{"mousemove"!==e.type&&"mouseout"!==e.type||this._updateHover(e);const t=this.props[_[e.type]];if(t){if(this.props.interactiveLayerIds&&"mouseover"!==e.type&&"mouseout"!==e.type){const t=this._hoveredFeatures||this._map.queryRenderedFeatures(e.point,{layers:this.props.interactiveLayerIds});e.features=t}t(e),delete e.features}},this._onCameraEvent=e=>{if(!this._internalUpdate){const t=this.props[x[e.type]];t&&t(e)}e.type in this._deferredEvents&&(this._deferredEvents[e.type]=!1)},this._MapClass=e,this.props=t,this._initialize(n)}get map(){return this._map}get transform(){return this._renderTransform}setProps(e){const t=this.props;this.props=e;const n=this._updateSettings(e,t);n&&this._createShadowTransform(this._map);const o=this._updateSize(e),r=this._updateViewState(e,!0);this._updateStyle(e,t),this._updateStyleComponents(e,t),this._updateHandlers(e,t),(n||o||r&&!this._map.isMoving())&&this.redraw()}static reuse(e,t){const n=L.savedMaps.pop();if(!n)return null;const o=n.map,r=o.getContainer();for(t.className=r.className;r.childNodes.length>0;)t.appendChild(r.childNodes[0]);o._container=t,n.setProps({...e,styleDiffing:!1}),o.resize();const{initialViewState:i}=e;return i&&(i.bounds?o.fitBounds(i.bounds,{...i.fitBoundsOptions,duration:0}):n._updateViewState(i,!1)),o.isStyleLoaded()?o.fire("load"):o.once("styledata",(()=>o.fire("load"))),n}_initialize(e){const{props:t}=this,n={...t,...t.initialViewState,accessToken:t.mapboxAccessToken||P()||null,container:e,style:g(t.mapStyle)},o=n.initialViewState||n.viewState||n;if(Object.assign(n,{center:[o.longitude||0,o.latitude||0],zoom:o.zoom||0,pitch:o.pitch||0,bearing:o.bearing||0}),t.gl){const e=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=e,t.gl)}const r=new this._MapClass(n);o.padding&&r.setPadding(o.padding),t.cursor&&(r.getCanvas().style.cursor=t.cursor),this._createShadowTransform(r);const i=r._render;r._render=e=>{this._inRender=!0,i.call(r,e),this._inRender=!1};const s=r._renderTaskQueue.run;r._renderTaskQueue.run=e=>{s.call(r._renderTaskQueue,e),this._onBeforeRepaint()},r.on("render",(()=>this._onAfterRepaint()));const a=r.fire;r.fire=this._fireEvent.bind(this,a),r.on("resize",(()=>{this._renderTransform.resize(r.transform.width,r.transform.height)})),r.on("styledata",(()=>this._updateStyleComponents(this.props,{}))),r.on("sourcedata",(()=>this._updateStyleComponents(this.props,{})));for(const l in _)r.on(l,this._onPointerEvent);for(const l in x)r.on(l,this._onCameraEvent);for(const l in b)r.on(l,this._onEvent);this._map=r}recycle(){L.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){const e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())}_createShadowTransform(e){const t=function(e){const t=e.clone();return t.pixelsToGLUnits=e.pixelsToGLUnits,t}(e.transform);e.painter.transform=t,this._renderTransform=t}_updateSize(e){const{viewState:t}=e;if(t){const e=this._map;if(t.width!==e.transform.width||t.height!==e.transform.height)return e.resize(),!0}return!1}_updateViewState(e,t){if(this._internalUpdate)return!1;const n=this._map,o=this._renderTransform,{zoom:r,pitch:i,bearing:s}=o,a=n.isMoving();a&&(o.cameraElevationReference="sea");const l=f(o,{...m(n.transform),...e});if(a&&(o.cameraElevationReference="ground"),l&&t){const e=this._deferredEvents;e.move=!0,e.zoom||(e.zoom=r!==o.zoom),e.rotate||(e.rotate=s!==o.bearing),e.pitch||(e.pitch=i!==o.pitch)}return a||f(n.transform,e),l}_updateSettings(e,t){const n=this._map;let o=!1;for(const r of w)r in e&&!v(e[r],t[r])&&(o=!0,n[`set${r[0].toUpperCase()}${r.slice(1)}`](e[r]));return o}_updateStyle(e,t){if(e.cursor!==t.cursor&&(this._map.getCanvas().style.cursor=e.cursor),e.mapStyle!==t.mapStyle){const t={diff:e.styleDiffing};return"localIdeographFontFamily"in e&&(t.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(g(e.mapStyle),t),!0}return!1}_updateStyleComponents(e,t){const n=this._map;let o=!1;return n.style.loaded()&&("light"in e&&!v(e.light,t.light)&&(o=!0,n.setLight(e.light)),"fog"in e&&!v(e.fog,t.fog)&&(o=!0,n.setFog(e.fog)),"terrain"in e&&!v(e.terrain,t.terrain)&&(e.terrain&&!n.getSource(e.terrain.source)||(o=!0,n.setTerrain(e.terrain)))),o}_updateHandlers(e,t){const n=this._map;let o=!1;for(const r of E){const i=e[r];v(i,t[r])||(o=!0,i?n[r].enable(i):n[r].disable())}return o}_updateHover(e){var t;const{props:n}=this;if(n.interactiveLayerIds&&(n.onMouseMove||n.onMouseEnter||n.onMouseLeave)){const r=e.type,i=(null===(t=this._hoveredFeatures)||void 0===t?void 0:t.length)>0;let s;if("mousemove"===r)try{s=this._map.queryRenderedFeatures(e.point,{layers:n.interactiveLayerIds})}catch(o){s=[]}else s=[];const a=s.length>0;!a&&i&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=s,a&&!i&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=r}else this._hoveredFeatures=null}_fireEvent(e,t,n){const o=this._map,r=o.transform,i="string"===typeof t?t:t.type;return"move"===i&&this._updateViewState(this.props,!1),i in x&&("object"===typeof t&&(t.viewState=m(r)),this._map.isMoving())?(o.transform=this._renderTransform,e.call(o,t,n),o.transform=r,o):(e.call(o,t,n),o)}_onBeforeRepaint(){const e=this._map;this._internalUpdate=!0;for(const n in this._deferredEvents)this._deferredEvents[n]&&e.fire(n);this._internalUpdate=!1;const t=this._map.transform;this._map.transform=this._renderTransform,this._onAfterRepaint=()=>{this._map.transform=t}}}function P(){let e=null;if("undefined"!==typeof location){const t=/access_token=([^&\/]*)/.exec(location.search);e=t&&t[1]}try{e=e||y.env.MapboxAccessToken}catch(t){}try{e=e||y.env.REACT_APP_MAPBOX_ACCESS_TOKEN}catch(n){}return e}L.savedMaps=[];const T=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function C(e,t){if(!e)return null;const n=e.map,o={getMap:()=>n,getCenter:()=>e.transform.center,getZoom:()=>e.transform.zoom,getBearing:()=>e.transform.bearing,getPitch:()=>e.transform.pitch,getPadding:()=>e.transform.padding,getBounds:()=>e.transform.getBounds(),project:n=>e.transform.locationPoint(t.LngLat.convert(n)),unproject:n=>e.transform.pointLocation(t.Point.convert(n)),queryTerrainElevation:(t,o)=>{const r=n.transform;n.transform=e.transform;const i=n.queryTerrainElevation(t,o);return n.transform=r,i}};for(const r of function(e){const t=new Set;let n=e;for(;n;){for(const o of Object.getOwnPropertyNames(n))"_"!==o[0]&&"function"===typeof e[o]&&"fire"!==o&&"setEventedParent"!==o&&t.add(o);n=Object.getPrototypeOf(n)}return Array.from(t)}(n))r in o||T.includes(r)||(o[r]=n[r].bind(n));return o}var S="undefined"!==typeof document?d.useLayoutEffect:d.useEffect;const M=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];const k=d.createContext(null),j={minZoom:0,maxZoom:22,minPitch:0,maxPitch:60,scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,touchPitch:!0,mapStyle:{version:8,sources:{},layers:[]},styleDiffing:!0,projection:"mercator",renderWorldCopies:!0,onError:e=>console.error(e.error),RTLTextPlugin:"https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"},R=(0,d.forwardRef)(((e,t)=>{const o=(0,d.useContext)(p),[r,i]=(0,d.useState)(null),s=(0,d.useRef)(),{current:a}=(0,d.useRef)({mapLib:null,map:null});(0,d.useEffect)((()=>{const t=e.mapLib;let r,l=!0;return Promise.resolve(t||n.e(634).then(n.t.bind(n,6158,23))).then((t=>{if(l){if(t.Map||(t=t.default),!t||!t.Map)throw new Error("Invalid mapLib");if(!t.supported(e))throw new Error("Map is not supported by this browser");!function(e,t){for(const n of M)n in t&&(e[n]=t[n]);t.RTLTextPlugin&&e.getRTLTextPluginStatus&&"unavailable"===e.getRTLTextPluginStatus()&&e.setRTLTextPlugin(t.RTLTextPlugin,(e=>{e&&console.error(e)}),!1)}(t,e),e.reuseMaps&&(r=L.reuse(e,s.current)),r||(r=new L(t.Map,e,s.current)),a.map=C(r,t),a.mapLib=t,i(r),null===o||void 0===o||o.onMapMount(a.map,e.id)}})).catch((t=>{e.onError({type:"error",target:null,originalEvent:null,error:t})})),()=>{l=!1,r&&(null===o||void 0===o||o.onMapUnmount(e.id),e.reuseMaps?r.recycle():r.destroy())}}),[]),S((()=>{r&&r.setProps(e)})),(0,d.useImperativeHandle)(t,(()=>a.map),[r]);const l=(0,d.useMemo)((()=>({position:"relative",width:"100%",height:"100%",...e.style})),[e.style]);return d.createElement("div",{id:e.id,ref:s,style:l},r&&d.createElement(k.Provider,{value:a},e.children))}));R.displayName="Map",R.defaultProps=j;var Z=R,z=n(3935);const A=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function O(e,t){if(!e||!t)return;const n=e.style;for(const o in t){const e=t[o];Number.isFinite(e)&&!A.test(o)?n[o]=`${e}px`:n[o]=e}}function N(e){const{map:t,mapLib:n}=(0,d.useContext)(k),o=(0,d.useRef)({props:e});o.current.props=e;const r=(0,d.useMemo)((()=>{let t=!1;d.Children.forEach(e.children,(e=>{e&&(t=!0)}));const i={...e,element:t?document.createElement("div"):null},s=new n.Marker(i).setLngLat([e.longitude,e.latitude]);return s.getElement().addEventListener("click",(e=>{var t,n;null===(n=(t=o.current.props).onClick)||void 0===n||n.call(t,{type:"click",target:s,originalEvent:e})})),s.on("dragstart",(e=>{var t,n;const i=e;i.lngLat=r.getLngLat(),null===(n=(t=o.current.props).onDragStart)||void 0===n||n.call(t,i)})),s.on("drag",(e=>{var t,n;const i=e;i.lngLat=r.getLngLat(),null===(n=(t=o.current.props).onDrag)||void 0===n||n.call(t,i)})),s.on("dragend",(e=>{var t,n;const i=e;i.lngLat=r.getLngLat(),null===(n=(t=o.current.props).onDragEnd)||void 0===n||n.call(t,i)})),s}),[]);return(0,d.useEffect)((()=>(r.addTo(t.getMap()),()=>{r.remove()})),[]),(0,d.useEffect)((()=>{O(r.getElement(),e.style)}),[e.style]),r.getLngLat().lng===e.longitude&&r.getLngLat().lat===e.latitude||r.setLngLat([e.longitude,e.latitude]),e.offset&&!function(e,t){const n=Array.isArray(e)?e[0]:e?e.x:0,o=Array.isArray(e)?e[1]:e?e.y:0,r=Array.isArray(t)?t[0]:t?t.x:0,i=Array.isArray(t)?t[1]:t?t.y:0;return n===r&&o===i}(r.getOffset(),e.offset)&&r.setOffset(e.offset),r.isDraggable()!==e.draggable&&r.setDraggable(e.draggable),r.getRotation()!==e.rotation&&r.setRotation(e.rotation),r.getRotationAlignment()!==e.rotationAlignment&&r.setRotationAlignment(e.rotationAlignment),r.getPitchAlignment()!==e.pitchAlignment&&r.setPitchAlignment(e.pitchAlignment),r.getPopup()!==e.popup&&r.setPopup(e.popup),(0,z.createPortal)(e.children,r.getElement())}N.defaultProps={draggable:!1,popup:null,rotation:0,rotationAlignment:"auto",pitchAlignment:"auto"};var I=d.memo(N);function D(e){return new Set(e?e.trim().split(/\s+/):[])}d.memo((function(e){const{map:t,mapLib:n}=(0,d.useContext)(k),o=(0,d.useMemo)((()=>document.createElement("div")),[]),r=(0,d.useRef)({props:e});r.current.props=e;const i=(0,d.useMemo)((()=>{const t={...e},o=new n.Popup(t).setLngLat([e.longitude,e.latitude]);return o.once("open",(e=>{var t,n;null===(n=(t=r.current.props).onOpen)||void 0===n||n.call(t,e)})),o}),[]);if((0,d.useEffect)((()=>{const e=e=>{var t,n;null===(n=(t=r.current.props).onClose)||void 0===n||n.call(t,e)};return i.on("close",e),i.setDOMContent(o).addTo(t.getMap()),()=>{i.off("close",e),i.isOpen()&&i.remove()}}),[]),(0,d.useEffect)((()=>{O(i.getElement(),e.style)}),[e.style]),i.isOpen()&&(i.getLngLat().lng===e.longitude&&i.getLngLat().lat===e.latitude||i.setLngLat([e.longitude,e.latitude]),e.offset&&!v(i.options.offset,e.offset)&&i.setOffset(e.offset),i.options.anchor===e.anchor&&i.options.maxWidth===e.maxWidth||(i.options.anchor=e.anchor,i.setMaxWidth(e.maxWidth)),i.options.className!==e.className)){const t=D(i.options.className),n=D(e.className);for(const e of t)n.has(e)||i.removeClassName(e);for(const e of n)t.has(e)||i.addClassName(e);i.options.className=e.className}return(0,z.createPortal)(e.children,o)}));var F=function(e,t,n,o){const r=(0,d.useContext)(k),i=(0,d.useMemo)((()=>e(r)),[]);return(0,d.useEffect)((()=>{const e=o||n||t,s="function"===typeof t&&"function"===typeof n?t:null,a="function"===typeof n?n:"function"===typeof t?t:null,{map:l}=r;return l.hasControl(i)||(l.addControl(i,null===e||void 0===e?void 0:e.position),s&&s(r)),()=>{a&&a(r),l.hasControl(i)&&l.removeControl(i)}}),[]),i};d.memo((function(e){const t=F((({mapLib:t})=>new t.AttributionControl(e)),{position:e.position});return(0,d.useEffect)((()=>{O(t._container,e.style)}),[e.style]),null}));d.memo((function(e){const t=F((({mapLib:t})=>new t.FullscreenControl({container:e.containerId&&document.getElementById(e.containerId)})),{position:e.position});return(0,d.useEffect)((()=>{O(t._controlContainer,e.style)}),[e.style]),null}));const B=(0,d.forwardRef)(((e,t)=>{const n=(0,d.useRef)({props:e}),o=F((({mapLib:t})=>{const o=new t.GeolocateControl(e),r=o._setupUI;return o._setupUI=e=>{o._container.hasChildNodes()||r(e)},o.on("geolocate",(e=>{var t,o;null===(o=(t=n.current.props).onGeolocate)||void 0===o||o.call(t,e)})),o.on("error",(e=>{var t,o;null===(o=(t=n.current.props).onError)||void 0===o||o.call(t,e)})),o.on("outofmaxbounds",(e=>{var t,o;null===(o=(t=n.current.props).onOutOfMaxBounds)||void 0===o||o.call(t,e)})),o.on("trackuserlocationstart",(e=>{var t,o;null===(o=(t=n.current.props).onTrackUserLocationStart)||void 0===o||o.call(t,e)})),o.on("trackuserlocationend",(e=>{var t,o;null===(o=(t=n.current.props).onTrackUserLocationEnd)||void 0===o||o.call(t,e)})),o}),{position:e.position});return n.current.props=e,(0,d.useImperativeHandle)(t,(()=>({trigger:()=>o.trigger()})),[]),(0,d.useEffect)((()=>{O(o._container,e.style)}),[e.style]),null}));B.displayName="GeolocateControl";d.memo(B);d.memo((function(e){const t=F((({mapLib:t})=>new t.NavigationControl(e)),{position:e.position});return(0,d.useEffect)((()=>{O(t._container,e.style)}),[e.style]),null}));function U(e){const t=F((({mapLib:t})=>new t.ScaleControl(e)),{position:e.position});return t.options.unit===e.unit&&t.options.maxWidth===e.maxWidth||(t.options.maxWidth=e.maxWidth,t.setUnit(e.unit)),(0,d.useEffect)((()=>{O(t._container,e.style)}),[e.style]),null}U.defaultProps={unit:"metric",maxWidth:100};d.memo(U);n(1634);var H=n(4158),W=(0,r.ZP)(i.Z)({textAlign:"center",textDecoration:"underline",cursor:"pointer",textUnderlineOffset:"4px","&:hover":{color:l.sC}}),q=(0,r.ZP)("a")({all:"unset"}),V=function(){var e=(0,d.useContext)(H.N),t=(e[0],e[1]);return(0,d.useEffect)((function(){t("soft1")}),[]),(0,o.jsxs)(s.ZP,{container:!0,justifyContent:"center",children:[(0,o.jsxs)(s.ZP,{item:!0,container:!0,xs:12,columnSpacing:2,children:[(0,o.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,o.jsxs)(a.Z,{variant:"glass",children:[(0,o.jsx)(u(),{href:"https://www.thesquarecopenhagen.com/",passHref:!0,children:(0,o.jsx)(q,{target:"_blank",children:(0,o.jsx)(W,{variant:"h5",children:"Hotel: The Square"})})}),(0,o.jsx)(s.ZP,{item:!0,children:(0,o.jsx)(i.Z,{variant:"body1",children:"This year we are staying at The Square hotel in the middle of Copenhagen, close to the Tivoli and City Hall. It is only a 10-minute walk from the Central Station to the hotel, and only 2 minutes to the conference venue."})})]})}),(0,o.jsxs)(s.ZP,{item:!0,xs:12,md:4,children:[(0,o.jsx)(s.ZP,{item:!0,children:(0,o.jsx)(u(),{href:"https://politiken.dk/indland/art7424866/Pressen",passHref:!0,children:(0,o.jsx)(q,{target:"_blank",children:(0,o.jsx)(W,{variant:"h5",children:"Venue: Pressen"})})})}),(0,o.jsx)(s.ZP,{item:!0,children:(0,o.jsx)(i.Z,{variant:"body1",children:"The conference will be held at Pressen in central Copenhagen, just two minutes from the hotel. It is in the old printing press in Politikkens Hus, which makes the space feel industrial and unique. It\u2019s just a two-minute walk from the hotel, and 10 minutes from the Central Station."})})]}),(0,o.jsxs)(s.ZP,{item:!0,xs:12,md:4,children:[(0,o.jsx)(s.ZP,{item:!0,children:(0,o.jsx)(u(),{href:"https://www.madklubben.dk/restauranter/koebenhavn/food-club/noerrebro",passHref:!0,children:(0,o.jsx)(q,{target:"_blank",children:(0,o.jsx)(W,{variant:"h5",children:"Dinner: Food Club"})})})}),(0,o.jsx)(s.ZP,{item:!0,children:(0,o.jsx)(i.Z,{variant:"body1",children:"The main dinner will be held at N\xf8rrebro Food Club, which provides an assortment of options for all."})})]})]}),(0,o.jsx)(s.ZP,{item:!0,xs:12,flexGrow:1,minWidth:"200px",minHeight:"400px",marginLeft:1,marginRight:1,children:(0,o.jsxs)(Z,{mapboxAccessToken:"pk.eyJ1Ijoia2Rzam9obiIsImEiOiJjbDkzdnhiZmowMzJjM3VqbmlscjN0OGQ3In0.TkEbwmgl6wiEPELfW9kT7Q",initialViewState:{latitude:55.68330754383056,longitude:12.567135883719853,zoom:13},mapStyle:"mapbox://styles/kdsjohn/cl92trwcs001k14oz5ogwhst4",children:[(0,o.jsx)(I,{latitude:55.67618,longitude:12.56697,color:l.fB}),(0,o.jsx)(I,{latitude:55.67713,longitude:12.5682,color:l.fB}),(0,o.jsx)(I,{latitude:55.68822,longitude:12.56287,color:l.fB})]})})]})}},1634:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,o=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(o){try{return t.call(null,e,0)}catch(o){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:r}catch(e){t=r}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var a,l=[],c=!1,u=-1;function d(){c&&a&&(c=!1,a.length?l=a.concat(l):u=-1,l.length&&p())}function p(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(a=l,l=[];++u<t;)a&&a[u].run();u=-1,t=l.length}a=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||c||s(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=f,o.addListener=f,o.once=f,o.off=f,o.removeListener=f,o.removeAllListeners=f,o.emit=f,o.prependListener=f,o.prependOnceListener=f,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}},s=!0;try{t[e](i,i.exports,o),s=!1}finally{s&&delete n[e]}return i.exports}o.ab="//";var r=o(229);e.exports=r}()}},function(e){e.O(0,[913,774,888,179],(function(){return t=2373,e(e.s=t);var t}));var t=e.O();_N_E=t}]);