var a=Object.defineProperty;var d=(o,t,i)=>t in o?a(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var n=(o,t,i)=>(d(o,typeof t!="symbol"?t+"":t,i),i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class c{constructor(t){n(this,"tileSize");n(this,"maxZoom",19);n(this,"name","Tile #s");n(this,"alt","Tile Coordinate Map Type");this.tileSize=t}getTile(t,i,s){const e=s.createElement("div");return e.innerHTML=String(t),e.style.width=this.tileSize.width+"px",e.style.height=this.tileSize.height+"px",e.style.fontSize="10",e.style.borderStyle="solid",e.style.borderWidth="1px",e.style.borderColor="#AAAAAA",e.style.backgroundColor="#E5E3DF",e}releaseTile(t){}}function p(){const o=new google.maps.Map(document.getElementById("map"),{zoom:10,center:{lat:41.85,lng:-87.65},streetViewControl:!1,mapTypeId:"coordinate",mapTypeControlOptions:{mapTypeIds:["coordinate","roadmap"],style:google.maps.MapTypeControlStyle.DROPDOWN_MENU}});o.addListener("maptypeid_changed",()=>{const t=o.getMapTypeId()!=="coordinate";o.setOptions({streetViewControl:t})}),o.mapTypes.set("coordinate",new c(new google.maps.Size(256,256)))}window.initMap=p;
