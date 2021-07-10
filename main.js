let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
         lat: 22.298066342348633, 
         lng: 73.15212294970244},
    zoom: 8,
  });
}