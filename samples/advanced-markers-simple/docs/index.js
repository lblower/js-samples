/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_advanced_markers_simple]
// [START maps_advanced_markers_simple_snippet]
async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("map"), {
    center: { lat: 37.4239163, lng: -122.0947209 },
    zoom: 14,
    mapId: "4504f8b37365c3d0",
  });
  const marker = new AdvancedMarkerElement({
    map,
    position: { lat: 37.4239163, lng: -122.0947209 },
  });
}

// [END maps_advanced_markers_simple_snippet]
initMap();
// [END maps_advanced_markers_simple]
