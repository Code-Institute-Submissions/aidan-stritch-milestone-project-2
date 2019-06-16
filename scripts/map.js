var map;
var infowindow;
var center = {lat: 53.3498, lng: -6.2603};
var updatedType;

function initMap() {
    
    infowindow = new google.maps.InfoWindow();
    
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        //change this center to be the one we click? hide map until selection made? 
        center: center
    });
    
    searchSelectCity();
    buttonSelectSearchType();
    buttonSelectCity();
    
    
    
    
   
}
function searchSelectCity() {
    var typeCity = document.getElementById('cityName');
    var autocomplete = new google.maps.places.Autocomplete(typeCity);
    var updateLatLng;
    
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        place = autocomplete.getPlace();
    });
    
    cityForm.addEventListener("submit", function() {
        updateLatLng = new google.maps.LatLng(place.geometry.location.lat(),place.geometry.location.lng());
        map.setCenter(updateLatLng);
        map.setZoom(13);
        requestLocations(updateLatLng);
    });
}
function buttonSelectSearchType(){
    document.getElementById('attraction').onclick = function() {
        updatedType = ['art_gallery', 'aquarium', 'zoo', 'stadium', 'museum', 'park', 'casino', 'amusement_park', 'point_of_interest'];
    };
    document.getElementById('accom').onclick = function() {
        updatedType = ['campground', 'lodging', 'rv_park', 'room', 'premise'];
    };
    document.getElementById('bar').onclick = function() {
        updatedType = ['bar', 'restaurant', 'night_club', 'food'];
    };
    document.getElementById('all').onclick = function() {
        updatedType = ['bar', 'restaurant', 'night_club', 'food','campground', 'lodging', 'rv_park', 'room', 'premise', 'art_gallery', 
        'aquarium', 'zoo', 'stadium', 'museum', 'park', 'casino', 'amusement_park', 'point_of_interest'];
    };
}


function buttonSelectCity(){
    document.getElementById('dublin').onclick = function() {
        center = {lat: 53.3498, lng: -6.2603};
    };
    document.getElementById('milan').onclick = function() {
        center = {lat: 45.4642, lng: 9.1900};
    };
    document.getElementById('paris').onclick = function() {
        center = {lat: 48.8566, lng: 2.3522};
    };
    document.getElementById('newYork').onclick = function() {
        center = {lat: 40.7128, lng: -74.0060};
    };
    document.getElementById('berlin').onclick = function() {
        center = {lat: 52.5200, lng: 13.4050};
    };
}

function requestLocations(){
    map.setCenter(center);
    //use these to 'get' the session variables.. then tell the request to use them for the search
    //var newLocation;
    //var newType;
    
        var request = {
        location: center,
        radius: 8047, 
        //types: ['bar', 'restaurant', 'night_club', 'food']
        types: updatedType
        };
    
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
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

function showResults(){
    requestLocations();
}

function clearResults(){
    updatedType = [];
    createMarker(updatedType);

}


    