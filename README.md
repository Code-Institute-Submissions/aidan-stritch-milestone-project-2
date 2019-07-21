# City Trip Planner
City Trip Planner provides a user with a simple search ability that allows them 
to easily select a city and narrow down the results to show only those that the 
customer is interested in seeing.

Once they have selected their options, the user can view these on a map showing
all results within 5 miles of the map center. They can also view a detailed list
of these results for more information on each result. 

Should they wish to have a record of what they searched for, the user can provide 
an email address and their name, and have the options searched for emailed to them.

In essence, this website allows the user to find results they are actually interested
in and plan their next trip away in 5 easy steps. 

## UX
This project was designed to fulfill the following criteria;
1. Select a destination city
2. Find tourist attractions in the selected city
3. Find accommodation results in the selected city
4. Find nearby bars & restaurants in the selected city
5. Showcase the full list of results in a visually appealing manner
6. Ensure that the website is responsive on all devices

To help the user select their destination city, this website uses two methods;
1. The user can select by clicking a button one of the most popular destinations
2. The user can type into an input field and google autocomplete will prompt them with results based on their input

We have opted to use these two methods as the popular destinations buttons allow
the user to quickly and easily select their destination city while the autocomplete
input allows them to find any other city that they may require. This has been 
labelled as Step 1 so that the user can follow their progress to know which area
is next to complete or view. 

Step 2 lets the user select their search type by clicking on a button. The user 
is provided with 4 options; 
1. Attractions
2. Accommodation
3. Bars & Restaurants
4. All results

Once the user has selected their city and their search type, their chosen options 
are shown in the "current Selection" area so that they are constantly aware of 
which results they will be viewing. 

In order to avoid confusion and to minimise the viewing pane for the user, once
they click on "show" in step 3, the step 1 and step 2 areas will be hidden from 
view. At the same time, the Google map will be shown to the user and will showcase
the results from the search the user has requested based on the chosen options. 

The user can click on the map marker icon to view some basic information on the 
individual result and will be prompted to see the step 4 area for more information. 

In step 4, the user can click on "show" again to hide the map and reveal a list
of the results that contains a summary of the information available such as the
name, rating, address and contact information. This will allow the user to take 
note of any results they may wish to visit on their trip. 

Step 5 allows the user to send a summary of what options had been used for the 
search and prompt them to return to search again for results in their next city 
trip. 

The Desktop view has been kept minimalistic in order to avoid unnecessary noise 
for the user so that they can focus on their city trip search. 

When scaled down, the website remains responsive so that the user can have a good 
UX on any screen size. When viewed on the smallest screen sizes, the website is 
still visually appealing and easy to navigate and use. 

### User Stories
#### New Customers
- As a new customer, I would like to search for bars and restaurants in my area so that I can plan a night out
- As a new customer, I would like to find accommodation options in paris for when I visit this summer
- As a new customer, I would like to find locations in a specific area so that I can plan an upcoming trip
- As a new customer, I would like to search for attractions in a city I plan on visiting this month and make a list of addreses and contact information for them. 
- As a new customer, I would like to send a summary of my search criteria to myself by email so I can keep a record in case I need to search again

#### Returning Customers
- As a returning customer, I would like to go to the email I received and click to go back to the website to have another look at my search results
- As a returning customer, I would like to double check an address for one of the results so that I can make note of it for my trip
- As a returning customer, I would like to check on the map how far my accommodation is from one of the attractions that I want to visit so I can plan my trip better
- As a returning customer, I would like to search for more results in the paris to see if I can get more attractions visited on my upcoming trip
- As a returning customer, I would like to email myself a summary of the search results as I did not do that the first time and would like a record of what criteria I searched for

### Wireframes / Templates
#### Desktop Wireframe
![desktop view index.html](Wireframes-and-templates/City-Trip-Planner-Wireframe-Desktop-View.png "desktop view for index.html page")
#### Mobile Wireframe
![mobile view index.html](Wireframes-and-templates/City-Trip-Planner-Wireframe-Mobile-View.png "mobile view for index.html page")
#### Email.js Email Template
![Email.js email template](Wireframes-and-templates/Email-js-Template.png "template for email sent by Email.js")

## Features
### Existing Features
- 'How To' Section - allows users to quickly see how the website works by reading the 'How To' guide 
- Step 1 Popular City Buttons - allows users to quickly select from one of the most popular locations by having them click on the desired city
- Step 1 Autocomplete City Search Input - allows users to find a specific location to use for their search by typing into the input field, clicking on the desired city and clicking on the "select this city" button
- Step 2 Search Type Buttons - allows users to select what results they would like to see in the chosen city by clicking on the button for the option they desire
- Current Selection Area - allows the user to keep track of what choices they have made by viewing this section
- Reset Search Buttons (in Current Selection area and at bottom of page) - allows the user to quickly and easily reset the website fields so that they can make a new search
- Step 3 Google Map - allows the users to view the results as markers on a Google map by clicking on the "show" button on Step 3 and viewing the map
- Google Map Info Window - allows the user to view more information of a specific result by clicking on the marker icon
- Step 4 Results Area - allows the user to read through the full list of results from their search to see more infomation textually by clicking on the "show" button in Step 4
- Show More Results Button - allows the user to view more results via pagination by clicking on the "more results" button
- Step 5 Email.js Form - allows the user to send themselves an email summary of their search criteria by clicking the "show" button in Step 5, filling in the form and clicking the "send email" button 

### Features Left to Implement
- Full Results List Email- allows the user to choose whether or not to include a full list of the results in the email that they have sent to themselves by clicking on a radio button on the email.js form
- Membership Section - allows the user to create and account so that they can keep track of their searches by having them create an account and logging in
- Save Results - allows the user to save their results so that they can automatically bring up the results by clicking on a save button, saving the code, and entering the code in an input field on their next visit
- Multi-trip Function - allows the user to search for multiple cities and search types and collate the data so that they can plan a trip to more than 1 city at a time for their next city trip plan
- Images of Results - allows the user to view images of the results in step 4 by clicking on a "view images" button and scrolling through an image viewer

## Technologies Used
- HTML - this site uses HTML to instruct the browser how to interprit the code correctly and arrange the layout
- CSS - this site uses CSS to aid in the style, and overall theme of the website
- Bootstrap - this site uses Bootstrap elements to help design the framework of the site
- Balsamiq - this was used to create the wireframes in the design phase
- Email.js - this was used to link the contact form to email.js so that the customer could send the search summary to themselves
- Javascript - this was used to program most of the features on this site
- Jasmine - this was used to test the sites functionality
- JQuery - this was used within the site to aid in visual elements
- FontAwesome - this was used to add images to help make the site more visually appealing

## Testing
The following manual testing was done to ensure that the website had no bugs or layout issues and that all links and media worked correctly. Jasmine automated testing was also used to test the submitted buttons.

#### Step 1
- go to step 1
- try to click the "select this city" button without entering any details in the input and verify that an error message about the required field appears
- type paris into the input field and click on the enter key to verify that it does not submit the request
- type paris into the input field, click on the first result and click on the "select this city" button and verify that the selected city label updates in the current selection area
- type paris into the input field, click on the first result and click on the "select this city" button, then click on the "dublin" button and verify that the selected city label updates in the current selection area to the last chosen option
- click on the "dublin" button and click on the "show" button in step 3 to verify that an error message about the required fields appears
- click on the "paris" button and click on the "show" button in step 4 to verify that an error message about the required fields appears
- click on the "milan" button and click on the "show" button in step 5 to verify that it does not show the form in step 5

#### Step 2
- go to step 2
- click on the "attractions" button and click on the "show" button in step 3 to verify that an error message about the required fields appears
- click on the "accommodation" button and click on the "show" button in step 4 to verify that an error message about the required fields appears
- click on the "all results" button and click on the "show" button in step 5 to verify that it does not show the form in step 5

#### Current Selection
- click on the "dublin" button in step 1 and click on the "all results" button in step 2 and verify that the "selected city" and "selected search type" labels update to the correct labels
- click on the "reset search" button and verify that the "selected city" and "selected search type" labels reset to "none"
- in step 1, type paris into the input field, click on the first result and click on the "select this city" button and verify that the "selected city" label updates, then click on the "reset search" button and verify that the "selected city" label and step 1 input field reset to "none", and empty respectively

#### Step 3
- click on the "dublin" button in step 1 and click on the "all results" button in step 2, then click on the "show" button in step 3 and verify that the map appears and shows the markers for the search in the correct city
    - once the map is visible, click on a map marker icon to verify that an infowindow appears 
    - once the map is visible, click on the "show" button in step 4 to verify that the step 3 div is hidden and the step 4 div is shown

#### Step 4
- click on the "dublin" button in step 1 and click on the "all results" button in step 2. Then click on the "show" button in step 4 to verify that the results area is shown with a full list of results for the search
    - once the results area is visible, click on the "show more results" button to verify that more results are shown for this search via pagination
    - once the results area is visible, click on the "show" button in step 5 to verify that the step 4 div is hidden and the step 5 div is shown

#### Step 5
- click on the "dublin" button in step 1 and click on the "all results" button in step 2 and click on the "show" button in step 5 to verify that the email form is shown
    -  without entering your name or email address, click on the "send email" button and verify that an error message about the required fields appears
    -  without entering your name, enter your correct email address and click on the "send email" button and verify that an error message about the required field appears
    -  enter your name correctly and do not enter an email address, click on the "send email" button and verify that an error message about the required field appears
    -  enter your name correctly and your email incorrectly, click on the "send email" button and verify that an error message about the required field appears
    -  enter your name and email address correctly and click on the "send email" button and verify that a success message appears 

#### Responsiveness
This website has been designed to scale correctly to different screen sizes with no issues on layout. In order to ensure that the view was pleasant to the user,
certain divs and items had to be arranged differently or hidden/shown depending on screen size. This was handled using CSS media queries. These changes can be seen 
listed in the section below. 

##### Desktop View v Mobile View
- Nav Bars
    - in desktop view, the nav bar has two divs. One for the title and one for a list of the 5 steps for the city trip planner
    - in mobile view, the second div is hidden as this is not essential and it improves visibility and functionality
- Step 1 & 2 divs
    - the divs for step 1 and step 2 are in the same row for desktop view as these are both required for the search and therefore are grouped together
    - in mobile view, this would not be visually appealing and therefore they are moved to one on top of the other. 
- Step 4 div
    - in desktop view the headings are visible and the content is layout out horizontally in a row as the space is available to lay the information out visually for the customer 
    - in mobile view, horizontal space is more limited so the headings are hidden and the content is layed out in a vertical way to improve its visualisation

#### Bugs Found 
Throughout the testing phase, several issues had been found which have since been corrected. Examples of these are as follows;
- the "reset search" button in the current selection section did not reset the input field in step 1 
- when a search had been made and the city or search type changed, the arrray was not being emptied and the new results would be added to the previous search results and displayed together
- when the email form was submitted with an incorrect email address, it did not request an email formatted entry as the input field had been set to type 'text' rather than 'email'.
- when the screen size was reduced, the horizontal scroll appeared with white space

## Deployment
This project was deployed to GitHub Pages at the address https://aidan-stritch.github.io/milestone-project-2/ using the following steps

- create a GitHub account
- create a new project on GitHub
- copy the code for pushing to a GitHub repository and paste in the terminal of your project on cloud9 (git remote add origin 'link')
- to commit the code on cloud9 to GitHub
    - in the terminal, type "git add ." to add all new changes to the code to staging area
    - next, type "git status" to see which files are ready to be commited
    - commit these by typing "git commit -m" and adding a detailed description of the commit in ""
    - next, push the code commit to GitHub Pages by typing "git push -u origin master"
    - you will be prompted to add your login details, once this is done, the code will be pushed to GitHub and you will see the results
- this was done after every new feature or when code was changed to fix any bugs or layout issues
- once the project was ready, it was deployed to GitHub pages as follows
    - click on settings 
    - scroll to "GitHub" pages section
    - click on dropdown under "source" and select "master branch"

## Credits
### Content
- Font icons imported from Font Awesome

### Acknowledgements
- I would like to acknowledge my mentor Anthony Ngene for all of his help and advice with this project
- I would also like to thank my friends and family for their testing help and advice with this project
