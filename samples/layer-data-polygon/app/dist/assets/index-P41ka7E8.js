(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function s(){const i=new google.maps.Map(document.getElementById("map"),{zoom:6,center:{lat:-33.872,lng:151.252}}),o=[{lat:-32.364,lng:153.207},{lat:-35.364,lng:153.207},{lat:-35.364,lng:158.207},{lat:-32.364,lng:158.207}],r=[{lat:-33.364,lng:154.207},{lat:-34.364,lng:154.207},{lat:-34.364,lng:155.207},{lat:-33.364,lng:155.207}],n=[{lat:-33.364,lng:156.207},{lat:-34.364,lng:156.207},{lat:-34.364,lng:157.207},{lat:-33.364,lng:157.207}];i.data.add({geometry:new google.maps.Data.Polygon([o,r,n])})}window.initMap=s;
