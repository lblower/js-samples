(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let l,a,c;async function u(){const{Map:r}=await google.maps.importLibrary("maps");c={lat:41.059,lng:-124.151},l=new r(document.getElementById("map"),{center:c,zoom:15,mapId:"a3efe1c035bad51b"}),a=l.getFeatureLayer("LOCALITY"),d()}async function d(){const r={query:"Trinidad, CA",fields:["id","location"],includedType:"locality",locationBias:c},{Place:o}=await google.maps.importLibrary("places"),{places:i}=await o.searchByText(r);if(i.length){const n=i[0];f(n.id),l.setCenter(n.location)}else console.log("No results")}function f(r){const o={strokeColor:"#810FCB",strokeOpacity:1,strokeWeight:3,fillColor:"#810FCB",fillOpacity:.5};a.style=i=>{if(i.feature.placeId==r)return o}}u();
