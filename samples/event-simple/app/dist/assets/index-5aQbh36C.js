(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */async function c(){await google.maps.importLibrary("maps"),await google.maps.importLibrary("marker");const i={lat:-25.363,lng:131.044},o=new google.maps.Map(document.getElementById("map"),{zoom:4,center:i,mapId:"DEMO_MAP_ID"}),r=new google.maps.marker.AdvancedMarkerElement({position:i,map:o,title:"Click to zoom"});o.addListener("center_changed",()=>{window.setTimeout(()=>{o.panTo(r.position)},3e3)}),r.addListener("click",()=>{o.setZoom(8),o.setCenter(r.position)})}c();
