(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let o;function d(){o=new google.maps.Map(document.getElementById("map"),{center:{lat:-33.86,lng:151.209},zoom:13,mapTypeControl:!1});const i=document.getElementById("style-selector-control");o.controls[google.maps.ControlPosition.TOP_LEFT].push(i),document.getElementById("hide-poi").addEventListener("click",()=>{o.setOptions({styles:l.hide})}),document.getElementById("show-poi").addEventListener("click",()=>{o.setOptions({styles:l.default})})}const l={default:[],hide:[{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels.icon",stylers:[{visibility:"off"}]}]};window.initMap=d;
