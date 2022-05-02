// github : https://github.com/medoiiehab.
/* Global Variables */
/** here we got several variables the first is the zipcode which we will take the input of it(in the function, here we just take it from the document and get it) 
 * and in the second we take the the feeling (then we make a function to take it's input(user input)) 
 * and the 3rd we got the date by id as well and the fourth we got the temperature 
 * then we got the link to the database to make a query and then generated an api key to access the database of the weather that they've got and the unit which is imperial
 * (imperial = f, standard = k and metric = c )  for some reason the rubric said it would be imperial (i dunno if that was optional or no but won't risk it)
 * (note. i left the howfeelings and the zipcode just incase I found something that I can do with it later)(also the place is in the US because this is the standard(felt no need to change it)and the tutor said it is ok*/

let TheCode = document.getElementById('zip');
let howFeelings = document.getElementById('feelings');
let timeNow = document.getElementById('date');
let temperature = document.getElementById('temp');
let contentHere = document.getElementById('content')
let wthrSiteUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';//this one is weather site url is the name of the variable
let appID = '&appID=5887be3da3a3c76ff4d814354bda3583&units=imperial';
const ButtonGen = document.getElementById('generate');
// Create a new date instance dynamically with JS
//here we get the full date as in mm/dd/yy
//made the month plus one to make it real (because there is no 0 month)
//and changed the dots"." to slashes"/" because usually that's how the dates look. 
let timed = new Date();
let newDate = (timed.getMonth()+1)+'/'+ timed.getDate()+'/'+ timed.getFullYear();

//got it from the lesson as it is but I understand it
//so we made an async function that have an empty url and emty data object (to be filled later by the database as it depends on the database that is received)
//the we made a fetch request which gets the url and the way to make the server get the data 
//so the method is post and the credentials is the same-origin(same location) and the boiler plate headers are that the content type are json
//then we make the strings into json by json.stringfy after that it waits till all of that happens and then transfere it into json and then it ends and then there is 
//the catch the error part as always
const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
        console.log(error);
      }
  }
//an event listener event where on click on the botton it would execute the weather (function)
ButtonGen.addEventListener('click', theWeather);



//the tutor preferred this way than then() but I didn't have any problem just removed the return so all you have to do is to put a function and a parameter for it and 
//return it;
async function theWeather(){
    //to get the zipcode value (made a whole constant incase I wanted to get more innovative after the finals)
    //thanks to the update ui demo lesson it really helped in that part (because it always came unidentified found out that I made the V capital,that was the whole reason)
    let theZip = TheCode.value;
    let feelings = howFeelings.value;console.log(feelings)
    //the 12345 is for now till i find out about what makes it unidentified 
    const goToURL = wthrSiteUrl +theZip+ appID;console.log(goToURL)
    //the fetchIt from the name fetches the gotoUrl variable which holds the 3 parts of the weather database the url , the zip code and the api key 
    //(the imperial part is optional but required by the rubric udacity)
    const fetchIt = await fetch(goToURL);
    //so it turns the fetchit into json for the server to read at the same time if it didn't resolve then it would tell where the problem is
    let intoJSON = await fetchIt.json(); 
    //this one gets what was fetched by the fetchit and translated into json and stored intoJSON (works even when reading. see!)then we get the temp from the database of the site
    let theTemp = intoJSON.main.temp; 
   //making it send what is putted by the user into the object 
   //just testing it first
    let storedData =await postData('/allisright', {temp: theTemp, content: feelings, date : newDate});
    await updateTheUI();
}


//got it from rubric and modified it 
//so what happens is that there is an async function 
// that got a var names request that fetches a directory called all where in the same time the server send the projectdata to that directory for that ui to fetch 
//and then it waits till the fetch happens and translate it into json and then modify on the elements with the id temp , content and date
//then theres is the error catcher that lets you know if something went wrong and you need to fix it 
 async function updateTheUI(){
    const request = await fetch('/all');
    try {
    
    const allData = await request.json();
    
    document.getElementById('temp').innerHTML = Math.round(allData.temp)+ ' deg';
    document.getElementById('content').innerHTML = allData.content;
    document.getElementById("date").innerHTML =allData.date;
    }
    catch(error) {
      console.log("error", error);
      
    }
   }
   
   //will continue working on it
   //not tottaly working as planned but will fix it after first exam in the finals (just studying for it)