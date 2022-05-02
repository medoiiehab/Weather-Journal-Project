# Weather-Journal App Project
# made to undertstand the server and the client relationship

## Overview
#### this projects uses post and get requests and it stores data in the server in an object 
#### it takes from openweathermap site the api key to know the current temp (in celcius) 
#### the link of the site "https://openweathermap.org/api"
#### to see the data base on it's own then copy paste this :
#### "https://api.openweathermap.org/data/2.5/weather?zip=12345&appID=5887be3da3a3c76ff4d814354bda3583&units=metric"

## the process (server-side)
I first decided to make some changes to the css to make the app look more modern and beautiful then I went and installed the next packages (express, body-parser and cors) of course after installing node (the code to install in the terminal is "npm install name-of-the-package)
then I required express then stored it in a variable called "app" (and there is also an end point that works as a dataBase )
and the next thing is body-parser to act as a middle ware that express uses and then required cors and also made express (app) use it.
cors lets the browser and the server communicate without any security problems and also I saw in a coding site(can't remeber where) that cors lets the servers also communicate(not sure tho).
anyway I made a port and set it to 8000 (because it is even and simple).
then made the app listen to the port and a function that would tell me if the server is running or no.
then i made a get request to send data to the client to update the user interface 
also i made a post request to save and store the user input into the object project data

## the process (client-side)
signed to the site got the link and the api key and then 
 I declared all the used IDs by getting them via document.getelembyid (shortened) and then fixed the date as it was 0.14.2022 and made the month to increase by one (to be a real month) then made a post data that saves what ever you put in it (will be used to update the ui and be stored in the project data) so i declared the method and the headers and the creden.. and strangfied the data , and made it wait till all of that happen then it would be ready to continue exe or show an error.
 then made an event listner for the button to execute a function on click made the full url by setting parts of it (the url and the zip code (user input) and the api key to (access the database)) then when the process finishes it gets fetched and then stored as a json and then comes the post data time (the one we talked about before) where we use it to store the data like the temp and what the user is feeling like and the date of them getting on the site and then saved it in a variable
 then the async function awaits for all of htis to happen (and here comes the update ui to work) so it fetches the directory all which the get request sends to client from the server and then gets stored as a json and then executes the parts where the temp, content and the date is gonna be in the most recent entry box also it is ready to catch errors.

## styling
the styling was the relaxing and easy part just a picture at the background (will try a gif (would be awesome)) and change the colors because didn't feel that the main ones were good(sorry!) and also made a new class just for the heading
## known issues
1-the site looks weird when you have it on 100% zoom but looks great on 80% zoom no more no less (my display's resolution is 1080p)

## sources
udacity-class room lessons of web api and async data
the webinar before the project
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing))that is an intro to async "also helped"
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
mdn as a whole 
w3schools javascript 
and the tutors who are always working on discourse


## feelings about it
I am really proud of it and felt it was an awesome expreience and the code were like soldiers working together one waits for another to do their part
## thanks for reading  

