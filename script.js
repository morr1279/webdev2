// script.js

///////////////////////////////////////////////////////////////////////////////
//
// This the Javascript file we'll use to make our leaflet map
// Based on Maptime Boston leaflet tutorial:
// https://maptimeboston.github.io/leaflet-intro/
//
///////////////////////////////////////////////////////////////////////////////

// initialize the map
// We pass the div with id "map" to the L.map function
var map = new L.map('map').setView([42.30, -71.58], 10);
// set initial map view to Boston with zoom level 13
// load a tile layer
// loading the base layer of map tiles using a URL template
// this template ({z}/{x}/{y}) allows leaflet to locate tiles with the
// correct zoom, x, and y coordinates
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
     }).addTo(map);
// use the .addTo method to add the tile layer to the map.
L.geoJson(airports, {
    
}).addTo(map);

// Visit http://leaflet-extras.github.io/leaflet-providers/preview/
// Have fun playing around with different basemaps that are available to use in Leaflet 

// FIXME: Load CSV data into leaflet markers
// Try Googling "leaflet csv" for a number of options
// One of the most basic of these is leaflet-omnivore (which handles much more
// than just CSV files)
// ref: https://github.com/mapbox/leaflet-omnivore
// I added csv by converting features in ArcMap to a Json file

// FIXME: Add styling to markers
// hint: refer to this tutorial for an example of how to do this:
// ref: https://leafletjs.com/examples/custom-icons/
// Use airport.png image file

//Add some GeoJSON
/* code below this line was found from youtube video https://www.youtube.com/watch?v=_vOojNn72NY  */

var airports = new L.Icon({iconUrl: 'images/marker-icon.png'});

function changesymbols (feature, layer){
    layer.bindPopup("<h3 class='infoHeader'>Hi, I am an info window</h3><p class='infoHeader'>" + feature.properties.name + "</p>");
    layer.setIcon(airports);
};

L.geoJson(airports, {
    
   // onEachFeature: changesymbols
    
}).addTo(map);

/*var airports = new L.Icon({iconUrl:
         "http://chittagongit.com//images/airport-icon-png/airport-icon-png-17.jpg"});
};*/

/*L.geoJson(airports, {
    
    onEachFeature: changesymbols
    
}).addTo(map);*/
