//AIzaSyAxQwRApZQq4D_0iTu38MwdxUsiKrq4zu8 -- API key

//        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxQwRApZQq4D_0iTu38MwdxUsiKrq4zu8&libraries=places&callback=callback"></script>



function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        //change this center to be the one we click? hide map until selection made? 
        center: {lat: 53.3498, lng: -6.2603}
    });
    
   
    //request results to be added to the map
    
 /*   
    if (getElementById ('cityName') == 'a') {
        
        var request = {
        location: center,
        radius: 8000, 
        types: ['bar', 'restaurant', 'night_club', 'food']
        };
    }
    
    if (getElementById ('cityName') == 'b') {
        var request = {
        location: center,
        radius: 8000, 
        types: ['art_gallery', 'aquarium', 'zoo', 'stadium', 'museum', 'park', 'casino', 'amusement_park', 'point_of_interest']
        };
    }
    
    if (getElementById ('cityName') == 'c') {
        var request = {
        location: center,
        radius: 8000, 
        types: ['campground', 'lodging', 'rv_park', 'room', 'premise']
        };
    }
*/
    //delete this later
    
    var request = {
        location: center,
        radius: 8047, 
        types: ['cafe']
        };
    
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}

/*

function selectCity() {
            var city = document.getElementById('cityName');
            var autocomplete = new google.maps.place.Autocomplete(city);
*/


function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++){
            createMarker(results[i]);
        }
    } 
}

function createMarker(place){
    var marker = new google.maps.Marker({
        map: center,
        position: place.geometry.location,
        });
        

}


/*
53.3498 , -6.2603 - dublin
45.4642, -9.1900 - milan
48.8566, -2.3522 - paris
40.7128, -74.0060 - new york
52.5200, -13.4050 - berlin
*/

