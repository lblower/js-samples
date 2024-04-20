(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let c,r,s;const d={a:{label:"1",location:{lat:-1.283975,lng:36.818797},name:"Central",description:"The Central Business District is a hub of economic activity during the day and a destination for great food at night."},b:{label:"2",location:{lat:-1.270955,lng:36.810857},name:"Westlands",description:"With many high-end restaurants and a vibrant nightlife, Westlands attracts young professionals and their families. "},c:{label:"3",location:{lat:-1.311868,lng:36.838624},name:"South",description:"Known for high-rise apartment buildings, South B and South C are in high demand."}};function f(){const t=new google.maps.localContext.LocalContextMapView({element:document.getElementById("map"),placeTypePreferences:[{type:"restaurant"},{type:"tourist_attraction"}],maxPlaceCount:12});c=t.map,c.setOptions({center:d.a.location,zoom:13});for(const a in d){const n=d[a],i=new google.maps.Marker({label:n.label,position:n.location,map:c,zIndex:30});i.addListener("click",()=>{t.hidePlaceDetailsView(),r&&r.close(),p(n,i),t.directionsOptions={origin:n.location}})}t.addListener("placedetailsviewshowstart",()=>{r&&r.close()}),t.addListener("placedetailsviewhidestart",()=>{s&&p(s.district,s.marker)})}function p(t,a){const n=document.createElement("div"),i=document.createElement("div"),e=document.createTextNode(t.description);n.classList.add("infowindow-content"),i.classList.add("title"),i.textContent=t.name,e.textContent=t.description,n.appendChild(i),n.appendChild(e),r=new google.maps.InfoWindow,r.setContent(n),r.open(c,a),s={district:t,marker:a},r.addListener("closeclick",()=>{s&&(s=null)})}window.initMap=f;
