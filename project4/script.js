//When you can't decide where to go for weekend, you can use this webpage to help you
//You will first need to select an area 

//set up button colors for Haidian
var color = ["#c3d5e5", "#9dc2e3","#7bb2e3", "#5799d4", "#3f8cd1","#2872b5", "#1a61a1"]
 var i = 0;
 document.querySelector("#hd").addEventListener("click",
 function(){
i = 1 < color.length ? ++i : 0;
document.querySelector("#hd").style.background = color[i]
 })

//Here are the 4 buttons that generates different cards
//Haidian Random Images
let hdDiv = document.querySelector("#hd");

// Click Event - detect when this div has been clicked
hdDiv.addEventListener("click", function(event){

var images = ["img/hd1.png", "img/hd2.png", "img/hd3.png","img/hd4.png","img/hd5.png", "img/hd6.png"];
 // create the links arrey and name it hdLinks
//  var hdLinks = new Array();

var rnd = Math.floor(Math.random() * images.length);

document.getElementById('images').src = images[rnd];
  });



//set up button colors for Chaoyang
var cycolor = ["#dab461", "#d4a339","#d1991f", "#ba8513", "#ba7713","#ba6613", "#9c530b"]
 var a = 0;
 document.querySelector("#cy").addEventListener("click",
 function(){
i = 1 < cycolor.length ? ++a : 0;
document.querySelector("#cy").style.background = cycolor[a]
 })
  //Chaoyang Random Images
  let cyDiv = document.querySelector("#cy");

// Click Event - detect when this div has been clicked
cyDiv.addEventListener("click", function(event){

var cyimages = ["img/cy1.png", "img/cy2.png", "img/cy3.png"];
 // create the links arrey and name it hdLinks
//  var hdLinks = new Array();

var rnd = Math.floor(Math.random() * cyimages.length);

document.getElementById('images').src = cyimages[rnd];
  });



//set up button colors for Dongcheng
var dccolor = ["#bd6464", "#bf5858","#bf4545", "#bf3232", "#b51d1d","#9c1616", "#7d0e0e"]
 var d = 0;
 document.querySelector("#dc").addEventListener("click",
 function(){
i = 1 < cycolor.length ? ++d : 0;
document.querySelector("#dc").style.background = dccolor[d]
 })
  //DongCheng Random Images
  let dcDiv = document.querySelector("#dc");

// Click Event - detect when this div has been clicked
dcDiv.addEventListener("click", function(event){

var dcimages = ["img/dc1.png", "img/dc2.png", "img/dc3.png"];
 // create the links arrey and name it hdLinks
//  var hdLinks = new Array();

var rnd = Math.floor(Math.random() * dcimages.length);

document.getElementById('images').src = dcimages[rnd];
  });



//set up button colors for Xicheng
var xccolor = ["#739152", "#688c3f","#5f8731", "#4f781f", "#3f6612","#365c0b", "#2b4d05"]
 var x = 0;
 document.querySelector("#xc").addEventListener("click",
 function(){
i = 1 < cycolor.length ? ++x : 0;
document.querySelector("#xc").style.background = xccolor[x]
 })
  //XiCheng Random Images
  let xcDiv = document.querySelector("#xc");
 
// Click Event - detect when this div has been clicked
xcDiv.addEventListener("click", function(event){
 //If the circle is clicked, add append text box to that button say click again for more
 //grab the element by id text and append inner html "Click again if you don't like the result"
 
if (sessionStorage.getItem('imgSrc')) {
  document.getElementById('images').src = sessionStorage.getItem('imgSrc');
}

var xcimages = ["img/xc1.png", "img/xc2.png", "img/xc3.png", "img/xc4.png" ];
 // create the links arrey and name it hdLinks
//  var hdLinks = new Array();
var rnd = Math.floor(Math.random() * xcimages.length);

document.getElementById('images').src = xcimages[rnd];

sessionStorage.setItem('imgSrc', xcimages[rnd]);

  });





  

  // let hintDiv = document.querySelector("#xc,#dc,#hd,#cy");
  // let textDiv = document.querySelector("#text")

  // hintDiv.addEventListener("click", function(event){
  //   if (textDiv.classList.contains('hidden')) {
  //     textDiv.classList.remove('hidden');
  //     sessionStorage.setItem('textIsVisible', 'true');
  //   } else {
  //     textDiv.classList.add('hidden');
  //     sessionStorage.removeItem('textIsVisible');
  //   }
  //   if (sessionStorage.getItem('textIsVisible')) {
  //     textDiv.classList.remove('hidden');
  //   }
  // });
  


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

    document.addEventListener('keydown',function(event){
      if(event.key=="h"){
        console.log("Hello")
      }
    })