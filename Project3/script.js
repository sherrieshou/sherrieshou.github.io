/* globals require */
console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyKomgoeFU5PMmX4" }).base(
  "app27HbWekLkrlSkU"
);

base('thesis-ver4').select({
  // Selecting the first 3 records in Grid view:
  maxRecords: 3,
  view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
  // This function (`page`) will get called for each page of records.

  records.forEach(function(record) {
      console.log('Retrieved', record.get('name'));
  });

  // To fetch the next page of records, call `fetchNextPage`.
  // If there are more records, `page` will get called again.
  // If there are no more records, `done` will get called.
  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }
});






// get the collection base select all the records
//specify function that will receive the data
base("signs")
  .select({})
  .eachPage(gotPageOfSigns, gotAllSigns);


  // and empty array to hold our data
  var signs = [];


  //call back function that reeceives our data
  function gotPageOfSigns(records, fetchNextPage) {
    console.log("gotPageOfSigns()");
    // add the records from this page to our array
    signs.push(...records);
    // request more pages
    fetchNextPage();
  }

  // call back function that is called when all pages are loaded
function gotAllSigns(err) {
    console.log("gotAllSigns()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }
  
    // call functions to log and show the signs
    consoleLogSigns();
    showSigns();
  }

// just loop through the signs and console.log them
function consoleLogSigns() {
    console.log("consoleLogSigns()");
    signs.forEach(sign => {
      console.log("Sign:", sign);
    });
  }
  

  
  
// look through our airtable data, create elements
function showSigns() {
    console.log("showSigns()");
    signs.forEach(sign => {



      var signContainer = document.createElement("div");
      signContainer.classList.add("sign-container");
      document.querySelector(".another").append(signContainer);

      

      //add dates to container

      var signTitle = document.createElement("h1");
      signTitle.classList.add("sign-title","test-class");
      signTitle.innerText = sign.fields.date;
      signContainer.append(signTitle);


      var signArtist = document.createElement("p");
      signArtist.classList.add("sign-artist");
      signArtist.innerText = sign.fields.photographer;
      signContainer.append(signArtist);



   


      //add image to the cointainer
      var signImage = document.createElement('img');
      signImage.classList.add("sign-image");
      signImage.src = sign.fields.attachments[0].url;
      signContainer.append(signImage);


      //add event listener
      //when user clicks on sign container
      //image and description will appear or disappear
      signContainer.addEventListener("click",function(){
          var active= document.querySelectorAll(".active");
          active.forEach((el) => el.classList.toggle("active"));
          signImage.classList.toggle("active");
          signTitle.classList.toggle("active");
          signArtist.classList.toggle("active");
      })

     //add background color
     signContainer.addEventListener("click", function(event) {
        document.body.style.backgroundColor = sign.fields.bgcolor;
        });
      
        signContainer.addEventListener("click", function() {
        document.body.style.backgroundColor = sign.fields.bgcolor;
        });
     


    //filter by category
    //get genre field from airtable
    //loop through the array and add each genre as
    //a class to the sign container

    var signGenre = sign.fields.genre;
    signGenre.forEach(function(genre) {
      signContainer.classList.add(genre);
    });



    // clicking on filter by billboard
    // change background of billboard genres to red
    // else change to white
    var filterBillboard = document.querySelector(".billboard");
    filterBillboard.addEventListener("click", function() {
      if (signContainer.classList.contains("billboard")) {
        signContainer.style.background = "#E4BB7E";

    } else {
        signContainer.style.background = "white";
        console.log("billboard click")
      }
    });
    
    // filter by protest
    var filterProtest = document.querySelector(".protest");
    filterProtest.addEventListener("click", function() {
      if (signContainer.classList.contains("protest")) {
        signContainer.style.background = "#D77B7B";
      } else {
        signContainer.style.background = "white";
      }
    });


    // filter by road
    var filterRoad = document.querySelector(".road");
    filterRoad.addEventListener("click", function() {
      if (signContainer.classList.contains("road")) {
        signContainer.style.background = "#81B8A4";
      } else {
        signContainer.style.background = "white";
      }
    });

    // filter by new shop
    var filterShop = document.querySelector(".shop");

    filterShop.addEventListener("click", function() {
      if (signContainer.classList.contains("shop")) {
        signContainer.style.background = "#7BB0D7";
      } else {
        signContainer.style.background = "white";
      }
    });


    // filter reset
    var filterReset = document.querySelector(".js-reset");
    filterReset.addEventListener("click", function() {
      signContainer.style.background = "#8A7DA4";
    });


    });

  
  
}