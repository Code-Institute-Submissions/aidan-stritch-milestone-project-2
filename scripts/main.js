$("#clearResults, #clearResultsBottonTwo").click(function() {
    //when the clearResults button is clicked - these divs and classes are hidden to the user
    $('#map').hide();
    $('.results-area').hide();
    $('.email-form-area').hide();
    $('.step-one-tick').hide();
    $('.step-two-tick').hide();
    $('.step-three-tick').hide();
    $('.step-four-tick').hide();
    $('.step-five-tick').hide();

    //these are shown to the user again
    $('.select-city').show();
    $('.narrow-results').show();
    $('#showResults').show();
    $('#showTextResults').show();
    $('#sendEmail').show();

});

$('#showResults, #showTextResults, #sendEmail, #showMap').click(function() {
    if (document.getElementById('textCity').innerHTML != "None" && document.getElementById('textSearchType').innerHTML != "None") {
        if (this.id == 'showResults') {
            //when the showResults button is clicked, the map area is shown and results and email area divs are hidden tick is shown
            $('.results-area').hide();
            $('.email-form-area').hide();
            $('.step-three-tick').show();
            $('#map').show();

            //when this button is clicked, the button is hidden from view to neaten view space and other buttons are made visible
            $('#showResults').hide();
            $('#showTextResults').show();
            $('#sendEmail').show();
        }
        else if (this.id == 'showMap') {
            //when the showMap button is clicked, the map area is shown and results and email area divs are hidden tick is shown
            $('.results-area').hide();
            $('.email-form-area').hide();
            $('.step-three-tick').show();
            $('#map').show();

            //when this button is clicked, the button is hidden from view to neaten view space and other buttons are made visible
            $('#showResults').hide();
            $('#showTextResults').show();
            $('#sendEmail').show();
        }
        else if (this.id == 'showTextResults') {
            //when the showTextResults button is clicked, the map and email area divs are hidden and the results area shown and tick is shown
            $('#map').hide();
            $('.email-form-area').hide();
            $('.results-area').show();
            $('.step-four-tick').show();

            //when this button is clicked, the button is hidden from view to neaten view space and other buttons are made visible
            $('#showResults').show();
            $('#showTextResults').hide();
            $('#sendEmail').show();
        }
        else if (this.id == 'sendEmail') {
            //when the sendEmail button is clicked, the map and results area divs are hidden and the email area shown and tick is shown
            $('#map').hide();
            $('.results-area').hide();
            $('.email-form-area').show();
            $('.step-five-tick').show();

            //when this button is clicked, the button is hidden from view to neaten view space and other buttons are made visible
            $('#showResults').show();
            $('#showTextResults').show();
            $('#sendEmail').hide();
        }
    }
});

//this function resets the input fields and forms so that the user can start a new search
function resetFields() {
    document.getElementById('textCity').innerHTML = "None";
    document.getElementById('textSearchType').innerHTML = "None";
    document.getElementById('city_name').value = "None Selected";
    document.getElementById('search_type').value = "None Selected";
    document.getElementById('resultsRow').innerHTML = "";
    $("#cityForm")[0].reset();
    $('#second-clear-button').hide();
}

//disable the enter key from being pressed so that user cannot try to use enter to select autocomplete result
$('html').bind('keypress', function(enterKeyPress) {
    if (enterKeyPress.keyCode == 13) {
        return false;
    }
    if (enterKeyPress.keyCode == 176) {
        return false;
    }
});

//when either of the clear/reset buttons are clicked, it invokes the clearResults() function in maps.js file
document.getElementById('clearResultsBottonTwo'|| 'clearResults').onclick = function() {
    clearResults();
};

//when either of the 'show' buttons for the maps or results areas or the 'showMap' button are clicked, it invokes the requestLocations() function in maps.js file
document.getElementById('showResults'|| 'showTextResults' || 'showMap').onclick = function() {
    requestLocations();
};