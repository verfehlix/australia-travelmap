let map

function initMap() {
    const mapElement = document.getElementById("map")

    const options = {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 15
    }

    map = new google.maps.Map(mapElement, options)
}