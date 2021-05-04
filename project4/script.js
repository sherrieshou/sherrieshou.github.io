//When you can't decide where to go for weekend, you can use this webpage to help you
//You will first need to select an area 

//Here are the 4 buttons that generates different cards
//Haidian Random Images
let hdDiv = document.querySelector("#hd");

// Click Event - detect when this div has been clicked
hdDiv.addEventListener("click", function(event){

var images = ["img/2pm.png", "img/3pm.png", "img/9am.png"];
 // create the links arrey and name it hdLinks
//  var hdLinks = new Array();

var rnd = Math.floor(Math.random() * images.length);

document.getElementById('images').src = images[rnd];
  });



  //Chaoyang Random Images
  let cyDiv = document.querySelector("#cy");

// Click Event - detect when this div has been clicked
cyDiv.addEventListener("click", function(event){

var cyimages = ["img/1pm.png", "img/6pm.png", "img/8pm.png"];
 // create the links arrey and name it hdLinks
//  var hdLinks = new Array();

var rnd = Math.floor(Math.random() * cyimages.length);

document.getElementById('images').src = cyimages[rnd];
  });



  //DongCheng Random Images
  let dcDiv = document.querySelector("#dc");

// Click Event - detect when this div has been clicked
dcDiv.addEventListener("click", function(event){

var dcimages = ["img/6am.png", "img/7am.png", "img/8am.png", "img/11am.png"];
 // create the links arrey and name it hdLinks
//  var hdLinks = new Array();

var rnd = Math.floor(Math.random() * dcimages.length);

document.getElementById('images').src = dcimages[rnd];
  });



  //XiCheng Random Images
  let xcDiv = document.querySelector("#xc");
 
// Click Event - detect when this div has been clicked
xcDiv.addEventListener("click", function(event){
 //If the circle is clicked, add append text box to that button say click again for more
 //grab the element by id text and append inner html "Click again if you don't like the result"
 
if (sessionStorage.getItem('imgSrc')) {
  document.getElementById('images').src = sessionStorage.getItem('imgSrc');
}

var xcimages = ["img/4pm.png", "img/5am.png", "img/7pm.png", ];
 // create the links arrey and name it hdLinks
//  var hdLinks = new Array();
var rnd = Math.floor(Math.random() * xcimages.length);

document.getElementById('images').src = xcimages[rnd];

sessionStorage.setItem('imgSrc', xcimages[rnd]);

  });





  

  let hintDiv = document.querySelector("#xc,#dc,#hd,#cy");
  let textDiv = document.querySelector("#text")

  hintDiv.addEventListener("click", function(event){
    if (textDiv.classList.contains('hidden')) {
      textDiv.classList.remove('hidden');
      sessionStorage.setItem('textIsVisible', 'true');
    } else {
      textDiv.classList.add('hidden');
      sessionStorage.removeItem('textIsVisible');
    }
    if (sessionStorage.getItem('textIsVisible')) {
      textDiv.classList.remove('hidden');
    }
  });
  


//NightHaidian Random Images
let nhdDiv = document.querySelector("#nhd");

// Click Event - detect when this div has been clicked
nhdDiv.addEventListener("click", function(event){

var images = ["img/night/hd1.png"];
 // create the links arrey and name it hdLinks
//  var hdLinks = new Array();

var rnd = Math.floor(Math.random() * images.length);

document.getElementById('images').src = images[rnd];
  });



  //NightChaoyang Random Images
  let ncyDiv = document.querySelector("#ncy");

ncyDiv.addEventListener("click", function(event){

var cyimages = ["img/night/cy1.png","img/night/cy2.png","img/night/cy3.png","img/night/cy4.png"];

var rnd = Math.floor(Math.random() * cyimages.length);

document.getElementById('images').src = cyimages[rnd];
  });

   //NightDongCheng Random Images
   let ndcDiv = document.querySelector("#ndc");

   ndcDiv.addEventListener("click", function(event){
   
   var cyimages = ["img/night/dc1.png","img/night/dc2.png","img/night/dc3.png","img/night/dc4.png"];
   
   var rnd = Math.floor(Math.random() * cyimages.length);
   
   document.getElementById('images').src = cyimages[rnd];
     });



   //NightXiCheng Random Images
   let nxcDiv = document.querySelector("#nxc");

   nxcDiv.addEventListener("click", function(event){
   
   var cyimages = ["img/night/xc1.png","img/night/xc2.png","img/night/xc3.png"];
   
   var rnd = Math.floor(Math.random() * cyimages.length);
   
   document.getElementById('images').src = cyimages[rnd];
     });