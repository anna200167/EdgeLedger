let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
         lat: 22.298066342348633, 
         lng: 73.15212294970244},
    zoom: 8,
  });
}
// document.querySelector('#showcase').scrollIntoView({ 
//   behavior: 'smooth' 
// });
// document.querySelector('#what').scrollIntoView({ 
//   behavior: 'smooth' 
// });
// document.querySelector('#who').scrollIntoView({ 
//   behavior: 'smooth' 
// });
// document.querySelector('#contact').scrollIntoView({ 
//   behavior: 'smooth' 
// });