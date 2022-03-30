// Add console.log to check to see if our code is working.
console.log("wooorking");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([38.6213, -111.3790], 5);

// Coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.63972, -73.77889],
    
  ];

  // Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue", 
    dashArray:'10',
    weight: '4',
    opacity: '0.5'
  }).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 8,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

