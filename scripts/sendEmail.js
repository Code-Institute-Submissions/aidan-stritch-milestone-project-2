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
                /* if successful, a success message is displayed on the console for developers reference and a popup alert for the user.
                If not, a failed message shows in the console*/
                function(response) {
                    console.log("SUCCESS", response);
                    alert("Thank you, your email will be with you shortly");
                },
                function(error) {
                    console.log("FAILED", error);
                    alert("Unfortunately, there has been an error in sending this email. Please try again.");
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