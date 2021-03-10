function initMap() {
    const defaultPosition = { lat: 40.33485055409575, lng:  -3.7048817687377777 }
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: defaultPosition,
    });

    const marker = new google.maps.Marker({
        position:defaultPosition,
        map: map
    })

}