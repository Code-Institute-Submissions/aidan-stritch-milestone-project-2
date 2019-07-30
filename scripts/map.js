/* here we are declaring all variables that we need to be global */
var map;
var infowindow;
var center;
var updatedType = [];
var marker = [];
var markersClear = [];
var place = "";
var searchResults = [];
var city = [];
var search = [];

//create objects for the popular cities
var cityOne = { id: "dublin", cityName: "Dublin, Ireland", latlng: { lat: 53.3498, lng: -6.2603 } };
var cityTwo = { id: "milan", cityName: "Milan, Italy", latlng: { lat: 45.4642, lng: 9.1900 } };
var cityThree = { id: "paris", cityName: "Paris, France", latlng: { lat: 48.8566, lng: 2.3522 } };
var cityFour = { id: "newYork", cityName: "New York, United States", latlng: { lat: 40.7128, lng: -74.0060 } };
var cityFive = { id: "berlin", cityName: "Berlin, Germany", latlng: { lat: 52.5200, lng: 13.4050 } };

//create objects for the search types
var searchOne = { id: "attraction", title: "Attractions", typeList: ['art_gallery', 'aquarium', 'zoo', 'stadium', 'museum', 'park', 'casino', 'amusement_park', 'point_of_interest'] };
var searchTwo = { id: "accom", title: "Accomodation", typeList: ['campground', 'lodging', 'rv_park', 'room', 'premise'] };
var searchThree = { id: "bar", title: "Bars & Restaurants", typeList: ['bar', 'restaurant', 'night_club', 'food'] };
var searchFour = { id: "all", title: "Attractions, Accomodation, Bars & Restaurants", typeList: ['bar', 'food', 'art_gallery', 'zoo', 'stadium', 'museum', 'amusement_park', 'point_of_interest', 'lodging', 'premise'] };

//push the ohjects into the city and search arrays 
city.push(cityOne, cityTwo, cityThree, cityFour, cityFive);
search.push(searchOne, searchTwo, searchThree, searchFour);


/* here we are setting up the required variables for pagination */
var moreResults = document.getElementById('showMoreResults');
moreResults.onclick = function() {
    moreResults.disabled = true;
    if (getNextPage) getNextPage();
};

/* this function initiates the map element and displays it*/
function initMap() {
    //the map and results divs are shown to the user depending on what button has been clicked

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

/* this function handles button clicks for the search type buttons and updates the neccesary variables and elements to the chosen result*/
function buttonSelectSearchType(buttonID) {

    var i = 0;

    for (i = 0; i < search.length; i++) {

        //if statement ... if element clicked id = search[i].id then we change the items to show the chosen item
        if (search[i].id == buttonID) {
            document.getElementById('textSearchType').innerHTML = search[i].title;
            document.getElementById('search_type').value = search[i].title;
            updatedType = search[i].typeList;
            $('.step-two-tick').show();
        }
    }
}

/* this function handles button clicks for the popular buttons and updates the neccesary variables and elements to the chosen result*/
function buttonSelectCity(cityButtonID) {
    console.log(cityButtonID)
    var i = 0;

    for (i = 0; i < city.length; i++) {

        //if statement ... if element clicked id = search[i].id then we change the items to show the chosen item
        if (city[i].id == cityButtonID) {
            document.getElementById('textCity').innerHTML = city[i].cityName;
            document.getElementById('city_name').value = city[i].cityName;
            center = city[i].latlng;
            $('.step-one-tick').show();
            
        }
    }
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
            $('.step-one-tick').show();
        }
        else {
            alert("Please enter a city name before clicking select this city button");
        }
    });
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

        console.log(updatedType);
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

    if (searchResults.length == 0) {
        alert("There are no results for the currrent selection");
        $('#map').hide();
        $('.results-area').hide();
        $('.email-form-area').hide();
    }
}

/* this function adds the markers to the map element and adds an info window to show information for each result when the icon is clicked */
function createMarker(place) {
    marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    //adds each place item to  the markersClear array
    markersClear.push(marker);

    //adds the infowindow to each marker as a popup when the marker is clicked
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(`<h4>${place.name}</h4> <p><b>Rating:</b> ${place.rating}</p><p><b>Type:</b> ${document.getElementById('textSearchType').innerHTML}</p><p>See step 4 area for more details</p>`);
        infowindow.open(map, this);
    });

    //the step 1 and 2 divs are hidden once a search has been made
    $('.select-city').hide();
    $('.narrow-results').hide();
    $('#second-clear-button').show();
}

/* this function displays the written information for each of the results for the user to browse  */
function resultsTextDisplay(place) {
    var newPlace = place.place_id;
    var service = new google.maps.places.PlacesService(map);

    service.getDetails({ placeId: newPlace }, function(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            if (place) {
                document.getElementById('resultsRow').innerHTML += "<div class='row newResultsRow'><div class = 'col-md-4 newResultsCol'>" + "<h4 class='resultNames'>" + place.name + "</h4>" + "<p>" + "<b>" + "Rating: " + "</b>" +
                    rating + " Stars" + "</p>" + "</div>" + "<div class = 'col-md-4'>" + "<p>" + place.formatted_address + "</p>" + "</div>" +
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
clears the variables for a new search to take place and calls the clearMap() and resetFields() functions*/
function clearResults() {
    place = "";
    center = "";
    updatedType = [null];

    clearMap();
    resetFields();
}
