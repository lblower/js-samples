(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let i;function a(){i=new google.maps.Map(document.getElementById("map"),{zoom:2,center:new google.maps.LatLng(2.8,-187.3),mapTypeId:"terrain"});const r=document.createElement("script");r.src="https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js",document.getElementsByTagName("head")[0].appendChild(r)}const l=function(r){for(let o=0;o<r.features.length;o++){const n=r.features[o].geometry.coordinates,s=new google.maps.LatLng(n[1],n[0]);new google.maps.Marker({position:s,map:i})}};window.initMap=a;window.eqfeed_callback=l;