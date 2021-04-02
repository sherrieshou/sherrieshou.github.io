/* globals require */
console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyKomgoeFU5PMmX4" }).base(
  "apptrAFHHdwJKhTQ3"
);

//get our collection base, select all the records
//specify functions that will receive the data
base("music").select({}).eachPage(gotPageOfSongs, gotAllSongs);

// an empty array to hold our data
  var songs = [];


// callback function that receive our data
function gotPageOfSongs(records, fetchNextPage) {
    console.log("gotPageOfSongs()");
    // add the records from this page to our array
    songs.push(...records);
    // request more pages
    fetchNextPage();
  }


// call back function that is called when all pages are loaded
function gotAllSongs(err) {
    console.log("gotAllSongs()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }
  
    // call functions to log and show the books
    consoleLogSongs();
    showSongs();
  }

  // just loop through the books and console.log them
function consoleLogSongs() {
    console.log("consoleLogSongs()");
    songs.forEach((song) => {
      console.log("Song:", song);
    });
  }


// loop through our airtable data, create elements for each one, and add it to the page
function showSongs() {
    console.log("showSongs()");
    songs.forEach((song) => {
      
        var songTitle = document.createElement("h1");
        songTitle.innerText = song.fields.title;
        document.body.append(songTitle);

        var nameOfArtist = document.createElement("p");
        nameOfArtist.innerText = song.fields.artist;
        document.body.append(nameOfArtist);

        var songImage = document.createElement("img");
        songImage.src = song.fields.song_image[0].url;
        document.querySelector(".container").append(songImage);
    });
  }
  
  


  
  


  
  