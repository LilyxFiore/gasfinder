function initMap() {
  let pos;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      const directionsDisplay = new google.maps.DirectionsRenderer;
      const directionsService = new google.maps.DirectionsService;
      const map = new google.maps.Map(document.getElementById("map"), {
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
      const distancia = ((response.routes[0].legs[0].distance.text));
      $('#km').text(distancia);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}