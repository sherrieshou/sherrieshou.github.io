// makeThingsMoveLink: https://www.youtube.com/watch?v=gX3gSJ43f7I
var character = document.getElementById("character");
var block = document.getElementById("block");
var interval;
var both = 0;

function moveLeft(){
  var left =
      parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  character.style.left = left - 2 + "px";
}

function moveRight(){
  var left =
      parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  character.style.left = left + 2 + "px";
}

document.addEventListener("keydown", event => {
  if(both==0){
    both++;
      if(event.key==="ArrowLeft"){
        interval = setInterval(moveLeft, 1);
      }
       if(event.key==="ArrowRight"){
        interval = setInterval(moveRight, 1);
      }
  }
});
document.addEventListener("keyup", event =>{
  clearInterval(interval);
  both=0;
});

//Turn on the light
var checkDead = setInterval(function() {
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    // let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(characterLeft>=170 && characterLeft<=175 ){
      console.log("hit!");
      document.getElementById("dark").style.display = "none";
    }else{

    }
}, 10);

//click show room2
function myFunction() {
    document.getElementById('check3').style.display = "block";
  var x = document.getElementById("room2");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Turn on room3
var checkDead = setInterval(function() {
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(characterLeft>=574 && characterLeft<=578 ){
      console.log("turn on room 3");
      document.getElementById("room3").style.display = "block";
    }else{

    }
}, 10);

//show list on shelf

function showList() {
    console.log("open");
    document.getElementById('listdiv').style.display = "block";
 };
 
function hideList() {
    console.log("hide");
    document.getElementById('listdiv').style.display = "none";
 };
 

//Turn on room4
var checkDead = setInterval(function() {
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(characterLeft>=840 && characterLeft<=845 ){
      console.log("turn on room 4");
      document.getElementById("room4").style.display = "block";
    }else{

    }
}, 10);

 //play music
 var playmusic = document.querySelector("#musicplay")

 // Click Event - detect when this div has been clicked
 playmusic.addEventListener("click", function(event){
   console.log("playmusic");
   var audio = new Audio('img/bgm.mp3');
   audio.play();
   document.getElementById('check1').style.display = "block";

 });



//Turn on room5
var checkDead = setInterval(function() {
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(characterLeft>=1110 && characterLeft<=1115 ){
      console.log("turn on room 5");
      document.getElementById("room5").style.display = "block";
    }else{

    }
}, 10);


//Here are the button that generates different movies
//Haidian Random Images
var playDiv = document.querySelector("#play");

// Click Event - detect when this div has been clicked
playDiv.addEventListener("click", function(event){
    console.log("playmovie");
    document.getElementById('check2').style.display = "block";

 // create the links arrey of movies
var images = ["img/mov1.gif", "img/mov2.gif", "img/mov3.gif","img/mov4.gif","img/mov5.gif"];

//  var hdLinks = new Array();
var rnd = Math.floor(Math.random() * images.length);

document.getElementById('movie').src = images[rnd];

  });


 