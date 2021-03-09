let map

function initMap() {
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center:  { lat: 40.4167278, lng: -3.7033387 }
    });
}