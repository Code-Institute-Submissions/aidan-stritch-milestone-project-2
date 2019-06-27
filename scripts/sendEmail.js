function sendMail(contactForm) {
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