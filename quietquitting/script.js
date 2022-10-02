var top = this.scrollY;

var up =  ["-88", "-62", "-38", "-12","12", "38", "62" ]

var up2 =  ["-88", "-62", "-38", "-12","12", "38", "62" ]

var up3 =  ["-88", "-62", "-38", "-12","12", "38", "62" ]

var up4 =  ["-88", "-62", "-38", "-12","12", "38", "62" ]

var up5 =  ["-88", "-62", "-38", "-12","12", "38", "62" ]

var up6 =  ["-88", "-62", "-38", "-12","12", "38", "62" ]

var rndPos1 = Math.floor(Math.random()* up.length);

var rndPos2 = Math.floor(Math.random()* up.length);

var rndPos3 = Math.floor(Math.random()* up.length);

var rndPos4 = Math.floor(Math.random()* up.length);

var rndPos5 = Math.floor(Math.random()* up.length);

var rndPos6 = Math.floor(Math.random()* up.length);

var images = ["img/events/box1.png", "img/events/box2.png", "img/events/box3.png", "img/events/box4.png", "img/events/box5.png", "img/events/box6.png",]

var images2 = ["img/events/box21.png", "img/events/box22.png", "img/events/box23.png", "img/events/box24.png", "img/events/box25.png", "img/events/box26.png",]

var images3 = ["img/events/box31.png", "img/events/box32.png", "img/events/box33.png", "img/events/box34.png", "img/events/box35.png", "img/events/box36.png",]

var images4 = ["img/events/box41.png", "img/events/box42.png", "img/events/box43.png", "img/events/box44.png", "img/events/box45.png", "img/events/box46.png",]

var images5 = ["img/events/box51.png", "img/events/box52.png", "img/events/box53.png", "img/events/box54.png", "img/events/box55.png", "img/events/box56.png",]

var images6 = ["img/events/box61.png", "img/events/box62.png", "img/events/box63.png", "img/events/box64.png", "img/events/box65.png", "img/events/box66.png",]

var rnd = Math.floor(Math.random()* images.length);

var rnd2 = Math.floor(Math.random()* images.length);

var rnd3 = Math.floor(Math.random()* images.length);

var rnd4 = Math.floor(Math.random()* images.length);

var rnd5 = Math.floor(Math.random()* images.length);

var rnd6 = Math.floor(Math.random()* images.length);


// // Title Disappear
// Title = document.getElementById("title");
// var titleScroll = function () {
//     var y = window.scrollY;
//     if (y >= 200) {
//         Title.className = "titlehide"
//     } else {
//         // Title.className = "titleshow"
//     }


// };
// window.addEventListener("scroll", titleScroll);




// scroll1
myBox1 = document.getElementById("myBox1");
var myFirScroll = function () {
    var y = window.scrollY;
    if (y >= 500) {
        myBox1.className = "bottomMenu show"
        // console.log(images[rnd])
        document.getElementById('images1').src = images[rnd];
        myBox1.style.left = up[rndPos1] + '%';

    } else {
        myBox1.className = "bottomMenu hide"
    }


};
window.addEventListener("scroll", myFirScroll);

// scroll2
myBox2 = document.getElementById("myBox2");
var mySecScroll = function () {
    var y = window.scrollY;
    if (y >= 800) {
        myBox2.className = "bottomMenu show"
        document.getElementById('images2').src = images2[rnd2];
        myBox2.style.left = up2[rndPos2] + '%';

    } else {
        myBox2.className = "bottomMenu hide"
    }


};

window.addEventListener("scroll", mySecScroll);

// scroll3
myBox3 = document.getElementById("myBox3");
var myTrdScroll = function () {
    var y = window.scrollY;
    if (y >= 1400) {
        myBox3.className = "bottomMenu show"
        document.getElementById('images3').src = images3[rnd3];
        myBox3.style.left = up3[rndPos3] + '%';

    } else {
        myBox3.className = "bottomMenu hide"
    }


};

window.addEventListener("scroll", myTrdScroll);


// scroll4
myBox4 = document.getElementById("myBox4");
var myForScroll = function () {
    var y = window.scrollY;
    if (y >= 1700) {
        myBox4.className = "bottomMenu show"
        document.getElementById('images4').src = images4[rnd4];
        myBox4.style.left = up4[rndPos4] + '%';

    } else {
        myBox4.className = "bottomMenu hide"
    }


};

window.addEventListener("scroll", myForScroll);


// scroll5
myBox5 = document.getElementById("myBox5");
var myFivScroll = function () {
    var y = window.scrollY;
    if (y >= 2500) {
        myBox5.className = "bottomMenu show"
        document.getElementById('images5').src = images5[rnd5];
        myBox5.style.left = up5[rndPos5] + '%';
    } else {
        myBox5.className = "bottomMenu hide"
    }


};

window.addEventListener("scroll", myFivScroll);


// scroll6
myBox6 = document.getElementById("myBox6");
var mySixScroll = function () {
    var y = window.scrollY;
    if (y >= 3000) {
        myBox6.className = "bottomMenu show"
        document.getElementById('images6').src = images6[rnd6];
        myBox6.style.left = up6[rndPos6] + '%';
    } else {
        myBox6.className = "bottomMenu hide"
    }


};

window.addEventListener("scroll", mySixScroll);

