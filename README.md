# Mapping_Earthquakes
## Project Overview

The purpose of this project is to show the different earthquake magnitudes all over the world for the last seven days. First of all created a script to pull the GeoJSON data from the [USGS website](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) to retrieve the geographical coordinates and magnitudes of earthquakes for the last seven days. The data is then added to a map. As the information is linked to a real-time source, the map will update whenever the user accesses it. Scripts are built using **JavaScript** and **D3.js** library to retrieve the coordinates and magnitudes of the earthquakes from the GeoJSON data. After that we have used **Leaflet** library to plot the data on a **Mapbox** style map through an API request and made it interactive by adding visualization for different map styles, creating layers to display Tectonic plates, Earthquake magnitude and location information.

Overall in this ,I learned how to create map layers, visual customizations that included:

1) Toggling between map styles (i.e. dark, streets, satellite)
2) Color changes to lines, marker types, and sizes
3) Adding popup info box
4) Plotting different points, multiple points, lines, polygons

## Resources
- Leaflet.js
- Javascript
- HTML and CSS
- GeoJSON 

## Results
Below is the final look

![Screenshot 2022-03-31 150910](https://user-images.githubusercontent.com/96033163/161131367-2c6f4e67-1b48-4a75-a7ba-a4c9deb4e58e.png)