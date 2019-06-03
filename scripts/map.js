//AIzaSyAMKEXR1MPX21maPjxSSX1zAweVa6JiXPw -- API key

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: {lat: 46.619261, lng: -33.134766}
    });
    
    var markerLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var places = [
        { lat: 53.3498, lng: -6.2603 },
        { lat: 45.4642, lng: 9.1900 },
        { lat: 48.8566, lng: 2.3522 },
        { lat: 40.7128, lng: -74.0060 },
        { lat: 52.5200, lng: 13.4050 }
    ];

    var markers = places.map(function(place, i) {
        return new google.maps.Marker({
            position: place,
            label: markerLabels[i % markerLabels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

/*
53.3498 , -6.2603 - dublin
45.4642, -9.1900 - milan
48.8566, -2.3522 - paris
40.7128, -74.0060 - new york
52.5200, -13.4050 - berlin
*/
