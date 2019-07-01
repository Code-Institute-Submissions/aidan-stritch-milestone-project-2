function sendMail(contactForm) {

    if (document.getElementById('textCity').innerHTML != "None" && document.getElementById('textSearchType').innerHTML != "None") {

        emailjs.send("gmail", "city_planner_results", {
                "email_address": contactForm.email_address.value,
                "cust_name": contactForm.cust_name.value,
                "search_city": contactForm.city_name.value,
                "search_type": contactForm.search_type.value
            })
            .then(
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
        alert("Please select a city AND a search type before emailing your summary");
        return false;
    }
}