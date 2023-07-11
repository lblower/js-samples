(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();function J(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Y=function i(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var s,r,n;if(Array.isArray(t)){if(s=t.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!i(t[r],e[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(n=Object.keys(t),s=n.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,n[r]))return!1;for(r=s;r--!==0;){var a=n[r];if(!i(t[a],e[a]))return!1}return!0}return t!==t&&e!==e};const R=J(Y),B=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],I=1,x=8;class U{static from(t){if(!(t instanceof ArrayBuffer))throw new Error("Data must be an instance of ArrayBuffer.");const[e,s]=new Uint8Array(t,0,2);if(e!==219)throw new Error("Data does not appear to be in a KDBush format.");const r=s>>4;if(r!==I)throw new Error(`Got v${r} data when expected v${I}.`);const n=B[s&15];if(!n)throw new Error("Unrecognized array type.");const[a]=new Uint16Array(t,2,1),[c]=new Uint32Array(t,4,1);return new U(c,a,n,t)}constructor(t,e=64,s=Float64Array,r){if(isNaN(t)||t<0)throw new Error(`Unpexpected numItems value: ${t}.`);this.numItems=+t,this.nodeSize=Math.min(Math.max(+e,2),65535),this.ArrayType=s,this.IndexArrayType=t<65536?Uint16Array:Uint32Array;const n=B.indexOf(this.ArrayType),a=t*2*this.ArrayType.BYTES_PER_ELEMENT,c=t*this.IndexArrayType.BYTES_PER_ELEMENT,o=(8-c%8)%8;if(n<0)throw new Error(`Unexpected typed array class: ${s}.`);r&&r instanceof ArrayBuffer?(this.data=r,this.ids=new this.IndexArrayType(this.data,x,t),this.coords=new this.ArrayType(this.data,x+c+o,t*2),this._pos=t*2,this._finished=!0):(this.data=new ArrayBuffer(x+a+c+o),this.ids=new this.IndexArrayType(this.data,x,t),this.coords=new this.ArrayType(this.data,x+c+o,t*2),this._pos=0,this._finished=!1,new Uint8Array(this.data,0,2).set([219,(I<<4)+n]),new Uint16Array(this.data,2,1)[0]=e,new Uint32Array(this.data,4,1)[0]=t)}add(t,e){const s=this._pos>>1;return this.ids[s]=s,this.coords[this._pos++]=t,this.coords[this._pos++]=e,s}finish(){const t=this._pos>>1;if(t!==this.numItems)throw new Error(`Added ${t} items when expected ${this.numItems}.`);return Z(this.ids,this.coords,this.nodeSize,0,this.numItems-1,0),this._finished=!0,this}range(t,e,s,r){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");const{ids:n,coords:a,nodeSize:c}=this,o=[0,n.length-1,0],h=[];for(;o.length;){const u=o.pop()||0,l=o.pop()||0,p=o.pop()||0;if(l-p<=c){for(let d=p;d<=l;d++){const y=a[2*d],w=a[2*d+1];y>=t&&y<=s&&w>=e&&w<=r&&h.push(n[d])}continue}const f=p+l>>1,g=a[2*f],m=a[2*f+1];g>=t&&g<=s&&m>=e&&m<=r&&h.push(n[f]),(u===0?t<=g:e<=m)&&(o.push(p),o.push(f-1),o.push(1-u)),(u===0?s>=g:r>=m)&&(o.push(f+1),o.push(l),o.push(1-u))}return h}within(t,e,s){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");const{ids:r,coords:n,nodeSize:a}=this,c=[0,r.length-1,0],o=[],h=s*s;for(;c.length;){const u=c.pop()||0,l=c.pop()||0,p=c.pop()||0;if(l-p<=a){for(let d=p;d<=l;d++)$(n[2*d],n[2*d+1],t,e)<=h&&o.push(r[d]);continue}const f=p+l>>1,g=n[2*f],m=n[2*f+1];$(g,m,t,e)<=h&&o.push(r[f]),(u===0?t-s<=g:e-s<=m)&&(c.push(p),c.push(f-1),c.push(1-u)),(u===0?t+s>=g:e+s>=m)&&(c.push(f+1),c.push(l),c.push(1-u))}return o}}function Z(i,t,e,s,r,n){if(r-s<=e)return;const a=s+r>>1;H(i,t,a,s,r,n),Z(i,t,e,s,a-1,1-n),Z(i,t,e,a+1,r,1-n)}function H(i,t,e,s,r,n){for(;r>s;){if(r-s>600){const h=r-s+1,u=e-s+1,l=Math.log(h),p=.5*Math.exp(2*l/3),f=.5*Math.sqrt(l*p*(h-p)/h)*(u-h/2<0?-1:1),g=Math.max(s,Math.floor(e-u*p/h+f)),m=Math.min(r,Math.floor(e+(h-u)*p/h+f));H(i,t,e,g,m,n)}const a=t[2*e+n];let c=s,o=r;for(k(i,t,s,e),t[2*r+n]>a&&k(i,t,s,r);c<o;){for(k(i,t,c,o),c++,o--;t[2*c+n]<a;)c++;for(;t[2*o+n]>a;)o--}t[2*s+n]===a?k(i,t,s,o):(o++,k(i,t,o,r)),o<=e&&(s=o+1),e<=o&&(r=o-1)}}function k(i,t,e,s){T(i,e,s),T(t,2*e,2*s),T(t,2*e+1,2*s+1)}function T(i,t,e){const s=i[t];i[t]=i[e],i[e]=s}function $(i,t,e,s){const r=i-e,n=t-s;return r*r+n*n}const Q={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:i=>i},G=Math.fround||(i=>t=>(i[0]=+t,i[0]))(new Float32Array(1)),O=2,E=3,S=4,A=5,V=6;class q{constructor(t){this.options=Object.assign(Object.create(Q),t),this.trees=new Array(this.options.maxZoom+1),this.stride=this.options.reduce?7:6,this.clusterProps=[]}load(t){const{log:e,minZoom:s,maxZoom:r}=this.options;e&&console.time("total time");const n=`prepare ${t.length} points`;e&&console.time(n),this.points=t;const a=[];for(let o=0;o<t.length;o++){const h=t[o];if(!h.geometry)continue;const[u,l]=h.geometry.coordinates,p=G(P(u)),f=G(L(l));a.push(p,f,1/0,o,-1,1),this.options.reduce&&a.push(0)}let c=this.trees[r+1]=this._createTree(a);e&&console.timeEnd(n);for(let o=r;o>=s;o--){const h=+Date.now();c=this.trees[o]=this._createTree(this._cluster(c,o)),e&&console.log("z%d: %d clusters in %dms",o,c.numItems,+Date.now()-h)}return e&&console.timeEnd("total time"),this}getClusters(t,e){let s=((t[0]+180)%360+360)%360-180;const r=Math.max(-90,Math.min(90,t[1]));let n=t[2]===180?180:((t[2]+180)%360+360)%360-180;const a=Math.max(-90,Math.min(90,t[3]));if(t[2]-t[0]>=360)s=-180,n=180;else if(s>n){const l=this.getClusters([s,r,180,a],e),p=this.getClusters([-180,r,n,a],e);return l.concat(p)}const c=this.trees[this._limitZoom(e)],o=c.range(P(s),L(a),P(n),L(r)),h=c.data,u=[];for(const l of o){const p=this.stride*l;u.push(h[p+A]>1?z(h,p,this.clusterProps):this.points[h[p+E]])}return u}getChildren(t){const e=this._getOriginId(t),s=this._getOriginZoom(t),r="No cluster with the specified id.",n=this.trees[s];if(!n)throw new Error(r);const a=n.data;if(e*this.stride>=a.length)throw new Error(r);const c=this.options.radius/(this.options.extent*Math.pow(2,s-1)),o=a[e*this.stride],h=a[e*this.stride+1],u=n.within(o,h,c),l=[];for(const p of u){const f=p*this.stride;a[f+S]===t&&l.push(a[f+A]>1?z(a,f,this.clusterProps):this.points[a[f+E]])}if(l.length===0)throw new Error(r);return l}getLeaves(t,e,s){e=e||10,s=s||0;const r=[];return this._appendLeaves(r,t,e,s,0),r}getTile(t,e,s){const r=this.trees[this._limitZoom(t)],n=Math.pow(2,t),{extent:a,radius:c}=this.options,o=c/a,h=(s-o)/n,u=(s+1+o)/n,l={features:[]};return this._addTileFeatures(r.range((e-o)/n,h,(e+1+o)/n,u),r.data,e,s,n,l),e===0&&this._addTileFeatures(r.range(1-o/n,h,1,u),r.data,n,s,n,l),e===n-1&&this._addTileFeatures(r.range(0,h,o/n,u),r.data,-1,s,n,l),l.features.length?l:null}getClusterExpansionZoom(t){let e=this._getOriginZoom(t)-1;for(;e<=this.options.maxZoom;){const s=this.getChildren(t);if(e++,s.length!==1)break;t=s[0].properties.cluster_id}return e}_appendLeaves(t,e,s,r,n){const a=this.getChildren(e);for(const c of a){const o=c.properties;if(o&&o.cluster?n+o.point_count<=r?n+=o.point_count:n=this._appendLeaves(t,o.cluster_id,s,r,n):n<r?n++:t.push(c),t.length===s)break}return n}_createTree(t){const e=new U(t.length/this.stride|0,this.options.nodeSize,Float32Array);for(let s=0;s<t.length;s+=this.stride)e.add(t[s],t[s+1]);return e.finish(),e.data=t,e}_addTileFeatures(t,e,s,r,n,a){for(const c of t){const o=c*this.stride,h=e[o+A]>1;let u,l,p;if(h)u=K(e,o,this.clusterProps),l=e[o],p=e[o+1];else{const m=this.points[e[o+E]];u=m.properties;const[d,y]=m.geometry.coordinates;l=P(d),p=L(y)}const f={type:1,geometry:[[Math.round(this.options.extent*(l*n-s)),Math.round(this.options.extent*(p*n-r))]],tags:u};let g;h||this.options.generateId?g=e[o+E]:g=this.points[e[o+E]].id,g!==void 0&&(f.id=g),a.features.push(f)}}_limitZoom(t){return Math.max(this.options.minZoom,Math.min(Math.floor(+t),this.options.maxZoom+1))}_cluster(t,e){const{radius:s,extent:r,reduce:n,minPoints:a}=this.options,c=s/(r*Math.pow(2,e)),o=t.data,h=[],u=this.stride;for(let l=0;l<o.length;l+=u){if(o[l+O]<=e)continue;o[l+O]=e;const p=o[l],f=o[l+1],g=t.within(o[l],o[l+1],c),m=o[l+A];let d=m;for(const y of g){const w=y*u;o[w+O]>e&&(d+=o[w+A])}if(d>m&&d>=a){let y=p*m,w=f*m,_,N=-1;const b=((l/u|0)<<5)+(e+1)+this.points.length;for(const W of g){const v=W*u;if(o[v+O]<=e)continue;o[v+O]=e;const D=o[v+A];y+=o[v]*D,w+=o[v+1]*D,o[v+S]=b,n&&(_||(_=this._map(o,l,!0),N=this.clusterProps.length,this.clusterProps.push(_)),n(_,this._map(o,v)))}o[l+S]=b,h.push(y/d,w/d,1/0,b,-1,d),n&&h.push(N)}else{for(let y=0;y<u;y++)h.push(o[l+y]);if(d>1)for(const y of g){const w=y*u;if(!(o[w+O]<=e)){o[w+O]=e;for(let _=0;_<u;_++)h.push(o[w+_])}}}}return h}_getOriginId(t){return t-this.points.length>>5}_getOriginZoom(t){return(t-this.points.length)%32}_map(t,e,s){if(t[e+A]>1){const a=this.clusterProps[t[e+V]];return s?Object.assign({},a):a}const r=this.points[t[e+E]].properties,n=this.options.map(r);return s&&n===r?Object.assign({},n):n}}function z(i,t,e){return{type:"Feature",id:i[t+E],properties:K(i,t,e),geometry:{type:"Point",coordinates:[X(i[t]),tt(i[t+1])]}}}function K(i,t,e){const s=i[t+A],r=s>=1e4?`${Math.round(s/1e3)}k`:s>=1e3?`${Math.round(s/100)/10}k`:s,n=i[t+V],a=n===-1?{}:Object.assign({},e[n]);return Object.assign(a,{cluster:!0,cluster_id:i[t+E],point_count:s,point_count_abbreviated:r})}function P(i){return i/360+.5}function L(i){const t=Math.sin(i*Math.PI/180),e=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return e<0?0:e>1?1:e}function X(i){return(i-.5)*360}function tt(i){const t=(180-i*360)*Math.PI/180;return 360*Math.atan(Math.exp(t))/Math.PI-90}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function et(i,t){var e={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&t.indexOf(s)<0&&(e[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(i);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(i,s[r])&&(e[s[r]]=i[s[r]]);return e}class M{static isAdvancedMarkerAvailable(t){return google.maps.marker&&t.getMapCapabilities().isAdvancedMarkersAvailable===!0}static isAdvancedMarker(t){return google.maps.marker&&t instanceof google.maps.marker.AdvancedMarkerElement}static setMap(t,e){this.isAdvancedMarker(t)?t.map=e:t.setMap(e)}static getPosition(t){if(this.isAdvancedMarker(t)){if(t.position){if(t.position instanceof google.maps.LatLng)return t.position;if(t.position.lat&&t.position.lng)return new google.maps.LatLng(t.position.lat,t.position.lng)}return new google.maps.LatLng(null)}return t.getPosition()}static getVisible(t){return this.isAdvancedMarker(t)?!0:t.getVisible()}}class F{constructor({markers:t,position:e}){this.markers=t,e&&(e instanceof google.maps.LatLng?this._position=e:this._position=new google.maps.LatLng(e))}get bounds(){if(this.markers.length===0&&!this._position)return;const t=new google.maps.LatLngBounds(this._position,this._position);for(const e of this.markers)t.extend(M.getPosition(e));return t}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter(t=>M.getVisible(t)).length}push(t){this.markers.push(t)}delete(){this.marker&&(M.setMap(this.marker,null),this.marker=void 0),this.markers.length=0}}class st{constructor({maxZoom:t=16}){this.maxZoom=t}noop({markers:t}){return rt(t)}}const rt=i=>i.map(e=>new F({position:M.getPosition(e),markers:[e]}));class nt extends st{constructor(t){var{maxZoom:e,radius:s=60}=t,r=et(t,["maxZoom","radius"]);super({maxZoom:e}),this.state={zoom:-1},this.superCluster=new q(Object.assign({maxZoom:this.maxZoom,radius:s},r))}calculate(t){let e=!1;const s={zoom:t.map.getZoom()};if(!R(t.markers,this.markers)){e=!0,this.markers=[...t.markers];const r=this.markers.map(n=>{const a=M.getPosition(n);return{type:"Feature",geometry:{type:"Point",coordinates:[a.lng(),a.lat()]},properties:{marker:n}}});this.superCluster.load(r)}return e||(this.state.zoom<=this.maxZoom||s.zoom<=this.maxZoom)&&(e=!R(this.state,s)),this.state=s,e&&(this.clusters=this.cluster(t)),{clusters:this.clusters,changed:e}}cluster({map:t}){return this.superCluster.getClusters([-180,-90,180,90],Math.round(t.getZoom())).map(e=>this.transformCluster(e))}transformCluster({geometry:{coordinates:[t,e]},properties:s}){if(s.cluster)return new F({markers:this.superCluster.getLeaves(s.cluster_id,1/0).map(n=>n.properties.marker),position:{lat:e,lng:t}});const r=s.marker;return new F({markers:[r],position:M.getPosition(r)})}}class ot{constructor(t,e){this.markers={sum:t.length};const s=e.map(n=>n.count),r=s.reduce((n,a)=>n+a,0);this.clusters={count:e.length,markers:{mean:r/e.length,sum:r,min:Math.min(...s),max:Math.max(...s)}}}}class it{render({count:t,position:e},s,r){const a=`<svg fill="${t>Math.max(10,s.clusters.markers.mean)?"#ff0000":"#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${t}</text>
</svg>`,c=`Cluster of ${t} markers`,o=Number(google.maps.Marker.MAX_ZINDEX)+t;if(M.isAdvancedMarkerAvailable(r)){const u=document.createElement("div");u.innerHTML=a;const l=u.firstElementChild;l.setAttribute("transform","translate(0 25)");const p={map:r,position:e,zIndex:o,title:c,content:l};return new google.maps.marker.AdvancedMarkerElement(p)}const h={position:e,zIndex:o,title:c,icon:{url:`data:image/svg+xml;base64,${btoa(a)}`,anchor:new google.maps.Point(25,25)}};return new google.maps.Marker(h)}}function at(i,t){for(let e in t.prototype)i.prototype[e]=t.prototype[e]}class j{constructor(){at(j,google.maps.OverlayView)}}var C;(function(i){i.CLUSTERING_BEGIN="clusteringbegin",i.CLUSTERING_END="clusteringend",i.CLUSTER_CLICK="click"})(C||(C={}));const ct=(i,t,e)=>{e.fitBounds(t.bounds)};class lt extends j{constructor({map:t,markers:e=[],algorithmOptions:s={},algorithm:r=new nt(s),renderer:n=new it,onClusterClick:a=ct}){super(),this.markers=[...e],this.clusters=[],this.algorithm=r,this.renderer=n,this.onClusterClick=a,t&&this.setMap(t)}addMarker(t,e){this.markers.includes(t)||(this.markers.push(t),e||this.render())}addMarkers(t,e){t.forEach(s=>{this.addMarker(s,!0)}),e||this.render()}removeMarker(t,e){const s=this.markers.indexOf(t);return s===-1?!1:(M.setMap(t,null),this.markers.splice(s,1),e||this.render(),!0)}removeMarkers(t,e){let s=!1;return t.forEach(r=>{s=this.removeMarker(r,!0)||s}),s&&!e&&this.render(),s}clearMarkers(t){this.markers.length=0,t||this.render()}render(){const t=this.getMap();if(t instanceof google.maps.Map&&t.getProjection()){google.maps.event.trigger(this,C.CLUSTERING_BEGIN,this);const{clusters:e,changed:s}=this.algorithm.calculate({markers:this.markers,map:t,mapCanvasProjection:this.getProjection()});(s||s==null)&&(this.reset(),this.clusters=e,this.renderClusters()),google.maps.event.trigger(this,C.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach(t=>M.setMap(t,null)),this.clusters.forEach(t=>t.delete()),this.clusters=[]}renderClusters(){const t=new ot(this.markers,this.clusters),e=this.getMap();this.clusters.forEach(s=>{s.markers.length===1?s.marker=s.markers[0]:(s.marker=this.renderer.render(s,t,e),this.onClusterClick&&s.marker.addListener("click",r=>{google.maps.event.trigger(this,C.CLUSTER_CLICK,s),this.onClusterClick(r,s,e)})),M.setMap(s.marker,e)})}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */async function ht(){await google.maps.importLibrary("maps"),await google.maps.importLibrary("marker");const i=new google.maps.Map(document.getElementById("map"),{zoom:3,center:{lat:-28.024,lng:140.887},mapId:"DEMO_MAP_ID"}),t=new google.maps.InfoWindow({content:"",disableAutoPan:!0}),e="ABCDEFGHIJKLMNOPQRSTUVWXYZ",s=ut.map((r,n)=>{const a=e[n%e.length],c=new google.maps.marker.PinElement({glyph:a,glyphColor:"white"}),o=new google.maps.marker.AdvancedMarkerElement({position:r,content:c.element});return o.addListener("click",()=>{t.setContent(r.lat+", "+r.lng),t.open(i,o)}),o});new lt({markers:s,map:i})}const ut=[{lat:-31.56391,lng:147.154312},{lat:-33.718234,lng:150.363181},{lat:-33.727111,lng:150.371124},{lat:-33.848588,lng:151.209834},{lat:-33.851702,lng:151.216968},{lat:-34.671264,lng:150.863657},{lat:-35.304724,lng:148.662905},{lat:-36.817685,lng:175.699196},{lat:-36.828611,lng:175.790222},{lat:-37.75,lng:145.116667},{lat:-37.759859,lng:145.128708},{lat:-37.765015,lng:145.133858},{lat:-37.770104,lng:145.143299},{lat:-37.7737,lng:145.145187},{lat:-37.774785,lng:145.137978},{lat:-37.819616,lng:144.968119},{lat:-38.330766,lng:144.695692},{lat:-39.927193,lng:175.053218},{lat:-41.330162,lng:174.865694},{lat:-42.734358,lng:147.439506},{lat:-42.734358,lng:147.501315},{lat:-42.735258,lng:147.438},{lat:-43.999792,lng:170.463352}];ht();
