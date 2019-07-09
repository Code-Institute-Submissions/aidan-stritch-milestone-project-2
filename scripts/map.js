/* here we are declaring all variables that we need to be global */
var map;
var infowindow;
var center;
var updatedType = [];
var marker = [];
var markersClear =[];
var place = "";
var searchResults = [];
/* here we are setting up the required variables for pagination */
var moreResults = document.getElementById('showMoreResults');
moreResults.onclick = function() {
    moreResults.disabled = true;
    if (getNextPage) getNextPage();
};

/* this function initiates the map element and displays it*/
function initMap() {

    infowindow = new google.maps.InfoWindow();

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: center
    });
    
    /* this area calls the functions required to set the city and search type variables */
    searchSelectCity();
    buttonSelectCity();
    buttonSelectSearchType();
}

/* this function handles the text input and the autocomplete functionality so that the user can select a specific city */
function searchSelectCity() {

    var restrictionSet = {
        types: ['(cities)'],
    };
    var typeCity = document.getElementById('cityName');
    var autocomplete = new google.maps.places.Autocomplete(typeCity, restrictionSet);
    var updateLatLng;

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        place = autocomplete.getPlace();
    });
    
    /* when the submit button is clicked in the cityForm, the map center is changed to this new location and the values are set using the DOM */
    cityForm.addEventListener("submit", function() {
        if (place !== "") {
            updateLatLng = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
            map.setZoom(13);
            center = updateLatLng;
            map.setCenter(center);
            document.getElementById('textCity').innerHTML = place.adr_address;
            document.getElementById('city_name').value = document.getElementById('textCity').textContent;
        }
        else {
            alert("Please enter a city name before clicking select this city button");
        }
    });
}

/* this function handles button clicks for the search type buttons and updates the neccesary variables and elements to the chosen result*/
function buttonSelectSearchType() {
    document.getElementById('attraction').onclick = function() {
        document.getElementById('textSearchType').innerHTML = "Attractions";
        document.getElementById('search_type').value = "Attractions";
        updatedType = ['art_gallery', 'aquarium', 'zoo', 'stadium', 'museum', 'park', 'casino', 'amusement_park', 'point_of_interest'];
    };
    document.getElementById('accom').onclick = function() {
        document.getElementById('textSearchType').innerHTML = "Accomodation";
        document.getElementById('search_type').value = "Accomodation";
        updatedType = ['campground', 'lodging', 'rv_park', 'room', 'premise'];
    };
    document.getElementById('bar').onclick = function() {
        document.getElementById('textSearchType').innerHTML = "Bars & Restaurants";
        document.getElementById('search_type').value = "Bars & Restaurants";
        updatedType = ['bar', 'restaurant', 'night_club', 'food'];
    };
    document.getElementById('all').onclick = function() {
        document.getElementById('textSearchType').innerHTML = "Attractions, Accomodation, Bars & Restaurants";
        document.getElementById('search_type').value = "Attractions, Accomodation, Bars & Restaurants";
        updatedType = ['bar', 'restaurant', 'night_club', 'food', 'art_gallery', 'aquarium', 'zoo', 'stadium', 'museum', 'park', 'casino', 'amusement_park', 'point_of_interest', 'campground', 'lodging', 'rv_park', 'room', 'premise'];
    };
}

/* this function handles button clicks for the popular buttons and updates the neccesary variables and elements to the chosen result*/
function buttonSelectCity() {
    document.getElementById('dublin').onclick = function() {
        document.getElementById('textCity').innerHTML = "Dublin, Ireland";
        document.getElementById('city_name').value = "Dublin, Ireland";
        center = { lat: 53.3498, lng: -6.2603 };
    };
    document.getElementById('milan').onclick = function() {
        document.getElementById('textCity').innerHTML = "Milan, Italy";
        document.getElementById('city_name').value = "Milan, Italy";
        center = { lat: 45.4642, lng: 9.1900 };
    };
    document.getElementById('paris').onclick = function() {
        document.getElementById('textCity').innerHTML = "Paris, France";
        document.getElementById('city_name').value = "Paris, France";
        center = { lat: 48.8566, lng: 2.3522 };
    };
    document.getElementById('newYork').onclick = function() {
        document.getElementById('textCity').innerHTML = "New York, United States";
        document.getElementById('city_name').value = "New York, United States";
        center = { lat: 40.7128, lng: -74.0060 };
    };
    document.getElementById('berlin').onclick = function() {
        document.getElementById('textCity').innerHTML = "Berlin, Germany";
        document.getElementById('city_name').value = "Berlin, Germany";
        center = { lat: 52.5200, lng: 13.4050 };
    };
}
/* this function creates the request and passes it to google before calling the callback function*/
function requestLocations() {
    clearMap();
    /* city and search type must be chosen for code to continue*/
    if (document.getElementById('textCity').innerHTML != "None" && document.getElementById('textSearchType').innerHTML != "None") {

        document.getElementById('resultsRow').innerHTML = "";

        map.setCenter(center);

        var request = {
            location: center,
            radius: 8047,
            types: updatedType
        };

        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
    }
    /* if either option is not selected, user is prompted to select them before continuing */
    else {
        alert("Please select a city AND a search type before searching");
    }
}

/* this function takes in the results of the request and adds markers to the map and 
places the text results using createMarker() and resultsTextDisplay() respectively*/
function callback(results, status, pagination) {
    searchResults = [];
    searchResults = results;
    
    console.log(status);

    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < searchResults.length; i++) {
            createMarker(searchResults[i]);
            resultsTextDisplay(searchResults[i]);
        }

        moreResults.disabled = !pagination.hasNextPage;
        getNextPage = pagination.hasNextPage && function() {
            pagination.nextPage();
        };
    }
    
    if(searchResults.length == 0){
        alert("There are no results for the currrent selection");
        $('#map').hide();
        $('#results').hide();
    }
    
}

/* this function adds the markers to the map element and adds an info window to show information for each result when the icon is clicked */
function createMarker(place) {
    marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    markersClear.push(marker);

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(`<h4>${place.name}</h4> <p><b>Rating:</b> ${place.rating}</p><p><b>Type:</b> ${document.getElementById('textSearchType').innerHTML}</p><p>See results section for more details</p>`);
        infowindow.open(map, this);
    });

    //the map and results divs are shown to the user
    $('#map').show();
    $('#results').show();
}

/* this function displays the written information for each of the results for the user to browse  */
function resultsTextDisplay(place) {
    var newPlace = place.place_id;
    var service = new google.maps.places.PlacesService(map);

    service.getDetails({ placeId: newPlace }, function(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            if (place) {
                document.getElementById('resultsRow').innerHTML += "<div class='row newResultsRow'><div class = 'col-md-4 newResultsCol'>" + "<h4 class='resultNames'>" + place.name + "</h4>" + "<p>" + "<b>" + "Place Rating: " + "</b>" + 
                    place.rating + " Stars" + "</p>" + "</div>" + "<div class = 'col-md-4'>" + "<p>" + "<h5 class='resultNames'>" + "Address: " + "</h5>" + place.formatted_address + "</p>" + "</div>" +
                    "<div class = 'col-md-4 newResultsCol'>" + "<p>" + "<b>" + "Contact: " + "</b>" + place.formatted_phone_number + "</p>" + "<p>" + "<b>" + "Web: " + "</b>" + place.website + "</p>" + "</p>" + "</div>" + "</div>";
                
                
                
            }
        }
    });
}

/* this function removes the map markers from the map element when the clear button is clicked*/
function clearMap() {
    
        for (var i = 0; i < markersClear.length; i++) {
            markersClear[i].setMap(null);
        }
        markersClear = [];
}

/* this function resets the input fields and values to their inital values and 
clears the variables for a new search to take place and callsthe clearMap () function*/
function clearResults() {
    document.getElementById('textCity').innerHTML = "None";
    document.getElementById('textSearchType').innerHTML = "None";
    document.getElementById('city_name').value = "None Selected";
    document.getElementById('search_type').value = "None Selected";
    document.getElementById('resultsRow').innerHTML = "";
    document.getElementById('cityName').value = "Search by city name...";
    place = "";
    center = "";
    updatedType = [null];
    clearMap();
}


//when the clearResults button is clicked - the map and results divs are hidden to the user
$("#clearResults").click(function() {
    $('#map').hide();
    $('#results').hide();
});
