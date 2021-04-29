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

var xcimages = ["img/4pm.png", "img/5am.png", "img/7pm.png", ];
 // create the links arrey and name it hdLinks
//  var hdLinks = new Array();

var rnd = Math.floor(Math.random() * xcimages.length);

document.getElementById('images').src = xcimages[rnd];
  });