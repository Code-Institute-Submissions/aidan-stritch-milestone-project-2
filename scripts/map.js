var map;
var infowindow;
var center;
var updatedType =[];
var marker;
var marker2 = [];

function initMap() {
    
    infowindow = new google.maps.InfoWindow();
    
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: center
    });
    
    searchSelectCity();
    buttonSelectCity();
    buttonSelectSearchType();
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
        map.setZoom(13);
        center=updateLatLng;
        map.setCenter(center);
        document.getElementById('textCity').innerHTML=place.adr_address;
        document.getElementById('city_name').value=document.getElementById('textCity').textContent;
    });
}

function buttonSelectSearchType(){
    document.getElementById('attraction').onclick = function() {
        document.getElementById('textSearchType').innerHTML="Attractions";
        document.getElementById('search_type').value="Attractions";
        updatedType = ['art_gallery', 'aquarium', 'zoo', 'stadium', 'museum', 'park', 'casino', 'amusement_park', 'point_of_interest'];
    };
    document.getElementById('accom').onclick = function() {
        document.getElementById('textSearchType').innerHTML="Accomodation";
        document.getElementById('search_type').value="Accomodation";
        updatedType = ['campground', 'lodging', 'rv_park', 'room', 'premise'];
    };
    document.getElementById('bar').onclick = function() {
        document.getElementById('textSearchType').innerHTML="Bars & Restaurants";
        document.getElementById('search_type').value="Bars & Restaurants";
        updatedType = ['bar', 'restaurant', 'night_club', 'food'];
    };
    document.getElementById('all').onclick = function() {
        document.getElementById('textSearchType').innerHTML="Attractions, Accomodation, Bars & Restaurants";
        document.getElementById('search_type').value="Attractions, Accomodation, Bars & Restaurants";
        updatedType = ['bar', 'restaurant', 'night_club', 'food','campground', 'lodging', 'rv_park', 'room', 'premise', 'art_gallery', 'aquarium', 'zoo', 'stadium', 'museum', 'park', 'casino', 'amusement_park', 'point_of_interest'];
    };
}

function buttonSelectCity(){
    document.getElementById('dublin').onclick = function() {
        document.getElementById('textCity').innerHTML="Dublin, Ireland";
        document.getElementById('city_name').value="Dublin, Ireland";
        center = {lat: 53.3498, lng: -6.2603};
        map.setCenter(center);
    };
    document.getElementById('milan').onclick = function() {
        document.getElementById('textCity').innerHTML="Milan, Italy";
        document.getElementById('city_name').value="Milan, Italy";
        center = {lat: 45.4642, lng: 9.1900};
        map.setCenter(center);
    };
    document.getElementById('paris').onclick = function() {
        document.getElementById('textCity').innerHTML="Paris, France";
        document.getElementById('city_name').value="Paris, France";
        center = {lat: 48.8566, lng: 2.3522};
        map.setCenter(center);
    };
    document.getElementById('newYork').onclick = function() {
        document.getElementById('textCity').innerHTML="New York, United States";
        document.getElementById('city_name').value="New York, United States";
        center = {lat: 40.7128, lng: -74.0060};
        map.setCenter(center);
    };
    document.getElementById('berlin').onclick = function() {
        document.getElementById('textCity').innerHTML="Berlin, Germany";
        document.getElementById('city_name').value="Berlin, Germany";
        center = {lat: 52.5200, lng: 13.4050};
        map.setCenter(center);
    };
}

function requestLocations(){

    map.setCenter(center);

        var request = {
        location: center,
        radius: 8047, 
        types: updatedType
        };
        
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
}

function callback(results, status) {
  
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++){
            createMarker(results[i]);
            resultsTextDisplay(results[i]);
        }
    } 
}

function createMarker(place) {
    marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
    
    marker2.push(marker);

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(`<h2>${place.name}</h2> <h3>Rating: ${place.reviews}</h3> <h3>Opening Hours</h3> ${place.opening_hours}`);
      infowindow.open(map, this);
    });
  }

function resultsTextDisplay(place){
    var newPlace = place.place_id;
    var service = new google.maps.places.PlacesService(map);

    service.getDetails({ placeId: newPlace }, function(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            if(place) {
                document.getElementById('resultsRow').innerHTML+= "<div class='row newResultsRow'><div class = 'col-md-4 newResultsCol'>" + "<h4 class='resultNames'>" + place.name + "</h4>" + "<p>" + "Place Rating: " + 
                place.rating + " Stars" + "</p>" + "</div>" + "<div class = 'col-md-4 newResultsCol'>" + "<p>" + place.formatted_address + "</p>" + "</div>" 
                + "<div class = 'col-md-4 newResultsCol'>" + "<p>" + "<p>" + "Contact: " + place.formatted_phone_number + "</p>" + "<p>" + "Web: " + place.website + "</p>" + "</p>"+ "</div>" + "</div>";
            }
        }
    });
     
}

function clearResults(){
    document.getElementById('textCity').innerHTML="None";
    document.getElementById('textSearchType').innerHTML="None";
    updatedType = [0];

    for(i=0; i<marker2.length; i++){
        marker2[i].setMap(null);
    }

}
//when the showResults button is clicked - the map and results divs are shown to the user
$("#showResults").click(function(){ 
        $('#map').show();
        $('#results').show();
    }); 
    
//when the clearResults button is clicked - the map and results divs are hidden to the user
$("#clearResults").click(function(){ 
    $('#map').hide();
    $('#results').hide();
}); 