var map;
var infowindow;
var city = {lat: 53.3498, lng: -6.2603};
//can be simply var city; and change it later with buttons
function initMap() {
    var center = city;
    infowindow = new google.maps.InfoWindow();
    
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        //change this center to be the one we click? hide map until selection made? 
        center: center
    });
    
    searchCity();
    
    var request = {
        location: city,
        radius: 8047, 
        types: ['bar', 'restaurant', 'night_club', 'food']
        };
    
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}

function searchCity() {
    var typeCity = document.getElementById('cityName');
    var autocomplete = new google.maps.places.Autocomplete(typeCity);
    
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        place = autocomplete.getPlace();
    });
    
    cityForm.addEventListener("submit", function() {
        var updateLatLng = new google.maps.LatLng(place.geometry.location.lat(),place.geometry.location.lng());
        map.setCenter(updateLatLng);
        map.setZoom(13);
        city = updateLatLng;
            console.log(city);

    });
    
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++){
            createMarker(results[i]);
        }
    } 
}

function createMarker(place) {
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(`<h1>Example HTML, city name: ${place.name}</h1>`);
      infowindow.open(map, this);
    });
  }





/*
{lat: 53.3498, lng: -6.2603}; - dublin
{lat: 45.4642, lng: 9.1900}; - milan
{lat: 48.8566, lng: 2.3522}; - paris
{lat: 40.7128, lng: 74.0060}; - new york
{lat: 52.5200, lng: 13.4050}; - berlin
*/

