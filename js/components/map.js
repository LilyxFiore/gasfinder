function initMap() {
  var pos;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      var directionsDisplay = new google.maps.DirectionsRenderer;
      var directionsService = new google.maps.DirectionsService;
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: pos
      });
      directionsDisplay.setMap(map);
      calculateAndDisplayRoute(directionsService, directionsDisplay, pos);
    })
  }
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, pos) {
  directionsService.route({
    origin: pos,
    destination: {lat: state.selectedStation.lat, lng: state.selectedStation.long},
    travelMode: 'DRIVING'
  }, function (response, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(response);
      var distancia = ((response.routes[0].legs[0].distance.text));
      $('#km').text(distancia);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
