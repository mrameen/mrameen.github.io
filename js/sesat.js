mapboxgl.accessToken = 'pk.eyJ1IjoibXJhbWVlbiIsImEiOiJjajg0anIwaWgwYWMwMzJyMzVuaXc5NW53In0.kE7sqGlwbkhJE-V62-Jk9w';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/light-v9',
    //style: 'mapbox://styles/mapbox/outdoors-v9',
    center: [101.63, 3.05], // starting position
    zoom: 5 // starting zoom
});

// Add geolocate control to the map.
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

function getLocation(){
if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
         window.alert("Geolocation is not supported by this browser.");
    }

    function showPosition(position){
      
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      var database = firebase.database();

      var ref = database.ref('SESAT');

      var data = {
        LATITUDE: lat,
        LONGITUDE: lon
      }
      ref.push(data);
      alert("Lokasi anda telah sampai kepada Mutawwif. Jangan bergerak lebih jauh!");
    }
}