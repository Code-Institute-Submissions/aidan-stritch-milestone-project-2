function sendMail(contactForm) {

    /* this if statement restricts the user from sending the email until they have selected a city and a search type */
    if (document.getElementById('textCity').innerHTML != "None" && document.getElementById('textSearchType').innerHTML != "None") {
        /* gets the values of the required fields and passes them to email.js so that the site can send an automated email to the user*/
        emailjs.send("gmail", "city_planner_results", {
                "email_address": contactForm.email_address.value,
                "cust_name": contactForm.cust_name.value,
                "search_city": contactForm.city_name.value,
                "search_type": contactForm.search_type.value
            })
            .then(
                /* if successful, a sucess message is displayed on the console for developers reference. If not, a failed message shows*/
                function(response) {
                    console.log("SUCCESS", response);
                },
                function(error) {
                    console.log("FAILED", error);
                }
            );
        return false;

    }
    else {
        /* if there are no options for city or search type selected, the following message is displayed to the user to help them continue */
        alert("Please select a city AND a search type before emailing your summary");
        return false;
    }
}