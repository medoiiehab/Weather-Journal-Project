// Setup empty JS object to act as endpoint for all routes
//it acts as a database because my course didn't go deep into the subject(wich is cool considring that this is during the finals as well)
projectData = {};

// Require Express to run server and routes
//requiring express after installing the packages
const express = require('express')
// Start up an instance of app
//saving the express as a variable
const app = express()
/* Middleware*/
//getting the body parser
const bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
//here we order express to use body-parser as a middle ware(I also heard from the tutor that it isn't nessesary anymore)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
/**   here we get cors in this server and then make express use it
cors help in getting recources (information and data) from other servers to this server without any security interuptions
 which in our case is the open weather map server
also from browser to server and vice versa */
const cors = require('cors')
app.use(cors());

// Initialize the main project folder
//telling express (the server as well) where the website is (and it is located in the website folder)
app.use(express.static('website'));


// Setup Server
// setting the port to 8000 (which is popular for some reason along with 3000 and 8080)
// and making a server constant with express that listens to the port and the function that makes us know that the server is running
//making the function using the arrow is more readable (and easier after getting used to it)
const port = 8000;
const server = app.listen(port, ()=> {console.log("server is running"); console.log(`it is running on local host: ${port}`);})
//tells us that it's sent or no and also send data to the client
app.get('/all', (req, res)=>{res.send(projectData);console.log('server sent it to the client');})
//tells us that the client got that.and also changes the project data info into whatever that's in the body
//also the post method is more secure as it doesn't get in the url (security first)
app.post('/allisright', (req, res)=> {res.send('server got it from client');projectData = req.body;})



