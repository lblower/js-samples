var u=Object.defineProperty;var m=(r,e,t)=>e in r?u(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var n=(r,e,t)=>(m(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class y{constructor(e){n(this,"map_");n(this,"polys_",[]);n(this,"difficulty_","Easy");n(this,"count_",0);n(this,"pieceDiv_");n(this,"timeDiv_");n(this,"dataLoaded_",!1);n(this,"NUM_PIECES_",10);n(this,"countries_",[]);n(this,"timer_",0);n(this,"START_COLOR_","#3c79de");n(this,"END_COLOR_","#037e29");this.map_=e,this.pieceDiv_=document.createElement("div"),this.timeDiv_=document.createElement("div"),this.createMenu_(),this.setDifficultyStyle_(),this.loadData_()}createMenu_(){const e=document.createElement("div");e.style.cssText="margin: 40px 10px; border-radius: 8px; height: 320px; width: 180px;background-color: white; font-size: 14px; font-family: Roboto;text-align: center; color: grey;line-height: 32px; overflow: hidden";const t=document.createElement("div");t.style.cssText="width: 100%; background-color: #4285f4; color: white; font-size: 20px;line-height: 40px;margin-bottom: 24px",t.innerText="Game Options";const s=document.createElement("div");s.innerText="PIECE:",s.style.fontWeight="800";const i=this.pieceDiv_;i.innerText="0 / "+this.NUM_PIECES_;const o=document.createElement("div");o.innerText="TIME:",o.style.fontWeight="800";const l=this.timeDiv_;l.innerText="0.0 seconds";const a=document.createElement("div");a.innerText="DIFFICULTY:",a.style.fontWeight="800";const c=document.createElement("select");["Easy","Moderate","Hard","Extreme"].forEach(h=>{const p=document.createElement("option");p.value=h.toLowerCase(),p.innerText=h,c.appendChild(p)}),c.style.cssText="border: 2px solid lightgrey; background-color: white; color: #4275f4;padding: 6px;",c.onchange=()=>{this.setDifficulty_(c.value),this.resetGame_()};const d=document.createElement("div");d.innerText="Reset",d.style.cssText="cursor: pointer; border-top: 1px solid lightgrey; margin-top: 18px;color: #4275f4; line-height: 40px; font-weight: 800",d.onclick=this.resetGame_.bind(this),e.appendChild(t),e.appendChild(s),e.appendChild(i),e.appendChild(o),e.appendChild(l),e.appendChild(a),e.appendChild(c),e.appendChild(d),this.map_.controls[google.maps.ControlPosition.TOP_LEFT].push(e)}render(){this.dataLoaded_&&this.start_()}loadData_(){const e=new XMLHttpRequest;e.onreadystatechange=()=>{e.status!=200||e.readyState!=XMLHttpRequest.DONE||this.loadDataComplete_(JSON.parse(e.responseText))},e.open("GET","https://storage.googleapis.com/mapsdevsite/json/puzzle.json",!0),e.send(null)}loadDataComplete_(e){this.dataLoaded_=!0,this.countries_=e,this.start_()}setDifficulty_(e){this.difficulty_=e,this.map_&&this.setDifficultyStyle_()}setDifficultyStyle_(){const e={easy:[{stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{visibility:"on"},{color:"#d4d4d4"}]},{featureType:"landscape",stylers:[{visibility:"on"},{color:"#e5e3df"}]},{featureType:"administrative.country",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"administrative.country",elementType:"geometry",stylers:[{visibility:"on"},{weight:1.3}]}],moderate:[{stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{visibility:"on"},{color:"#d4d4d4"}]},{featureType:"landscape",stylers:[{visibility:"on"},{color:"#e5e3df"}]},{featureType:"administrative.country",elementType:"labels",stylers:[{visibility:"on"}]}],hard:[{stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{visibility:"on"},{color:"#d4d4d4"}]},{featureType:"landscape",stylers:[{visibility:"on"},{color:"#e5e3df"}]}],extreme:[{elementType:"geometry",stylers:[{visibility:"off"}]}]};this.map_.set("styles",e[this.difficulty_])}resetGame_(){this.removeCountries_(),this.count_=0,this.setCount_(),this.startClock_(),this.addRandomCountries_()}setCount_(){this.pieceDiv_.innerText=this.count_+" / "+this.NUM_PIECES_,this.count_==this.NUM_PIECES_&&this.stopClock_()}stopClock_(){window.clearInterval(this.timer_)}startClock_(){this.stopClock_();const e=this.timeDiv_;e&&(e.textContent="0.0 seconds");const t=new Date;this.timer_=window.setInterval(()=>{const s=new Date().getTime()-t.getTime();e&&(e.textContent=(s/1e3).toFixed(2)+" seconds")},100)}addRandomCountries_(){this.countries_.sort(()=>Math.round(Math.random())-.5);const e=this.countries_.slice(0,this.NUM_PIECES_);for(let t=0,s;s=e[t];t++)this.addCountry_(s)}addCountry_(e){const t={strokeColor:this.START_COLOR_,strokeOpacity:.8,strokeWeight:2,fillColor:this.START_COLOR_,fillOpacity:.35,geodesic:!0,map:this.map_,draggable:!0,zIndex:2,paths:e.start.map(google.maps.geometry.encoding.decodePath)},s=new google.maps.Polygon(t);google.maps.event.addListener(s,"dragend",()=>{this.checkPosition_(s,e)}),this.polys_.push(s)}boundsContainsPoly_(e,t){const s=new google.maps.LatLngBounds(new google.maps.LatLng(e[0][0],e[0][1]),new google.maps.LatLng(e[1][0],e[1][1])),i=t.getPaths().getArray();for(let o=0;o<i.length;o++){const l=i[o].getArray();for(let a=0;a<l.length;a++)if(!s.contains(l[a]))return!1}return!0}replacePiece_(e,t){const s={strokeColor:this.END_COLOR_,fillColor:this.END_COLOR_,draggable:!1,zIndex:1,paths:t.end.map(google.maps.geometry.encoding.decodePath)};e.setOptions(s),this.count_++,this.setCount_()}checkPosition_(e,t){this.boundsContainsPoly_(t.bounds,e)&&this.replacePiece_(e,t)}start_(){this.setDifficultyStyle_(),this.resetGame_()}removeCountries_(){for(let e=0,t;t=this.polys_[e];e++)t.setMap(null);this.polys_=[]}}function f(){const r=new google.maps.Map(document.getElementById("map"),{disableDefaultUI:!0,center:{lat:10,lng:60},zoom:2});new y(r)}window.initMap=f;
