let  imgContainer = document.getElementById("all");
let  textContainer = document.getElementById("art");

// save your sheet ID and name of the tab as variables for use
let sheetID = "1-CWUYtMeGmGrnE4ZDv3G2rFDLFPq24_GetTXUG28lYo";
let tabName = 'sheet1';


// format them into Ben's uri
let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`
console.log(opensheet_uri);


fetch(opensheet_uri)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
				//do something with the data here
      
//  let img = data.img;
// console.log(img);

 let dataArr = [];

for (let datapoint of data){
 let dataimg = parseFloat(datapoint.img);
 let datacolor = parseFloat(datapoint.color);
 let datapart = parseFloat(datapoint.part);
 let datatitle = parseFloat(datapoint.title);
 let datadetail = parseFloat(datapoint.detail);
 let datamedium = parseFloat(datapoint.medium);
 let datasize = parseFloat(datapoint.size);
 let datamain = parseFloat(datapoint.main);


 // add this object to our blank array
 dataArr.push([dataimg, datacolor, datapart, datatitle, datadetail, datamedium, datasize, datamain]);


 let imgShow = document.createElement("IMG");
 imgShow.classList.add("img-inner");

 let imgTitle = document.createElement("h2");
 imgTitle.classList.add("img-title");

 let imgDetail = document.createElement("p");
 imgDetail.classList.add("img-detail");

 let imgMedium = document.createElement("p");
 imgMedium.classList.add("img-medium");

 let imgSize = document.createElement("p");
 imgSize.classList.add("img-size");

 let imgMain = document.createElement("IMG");
 imgMain.classList.add("img-Main");



 imgShow.src = "img/" + dataimg + ".png";


    //filter black

    var filterBlack = document.getElementById("black");
    filterBlack.addEventListener("click", function() {
      if (datacolor == 1) {
        imgShow.style.display = "block";

    } else {
        imgShow.style.display = "none";
      }
    });
 
    //filter white

    var filterWhite = document.getElementById("white");
    filterWhite.addEventListener("click", function() {
      if (datacolor == 2) {
        imgShow.style.display = "block";

    } else {
        imgShow.style.display = "none";
      }
    });

     //filter red

    var filterRed = document.getElementById("red");
    filterRed.addEventListener("click", function() {
      if (datacolor == 3) {
        imgShow.style.display = "block";

    } else {
        imgShow.style.display = "none";
      }
    });

    //filter blue

    var filterBlue = document.getElementById("blue");
    filterBlue.addEventListener("click", function() {
      if (datacolor == 4) {
        imgShow.style.display = "block";

    } else {
        imgShow.style.display = "none";
      }
    });

    //filter brown

    var filterBrown = document.getElementById("brown");
    filterBrown.addEventListener("click", function() {
      if (datacolor == 5) {
        imgShow.style.display = "block";

    } else {
        imgShow.style.display = "none";
      }
    });

    //filter hat

    var filterHat = document.getElementById("hat");
    filterHat.addEventListener("click", function() {
      if ( datapart == 1) {
        imgShow.style.display = "block";

    } else {
        imgShow.style.display = "none";
      }
    });

   //filter top

   var filterTop = document.getElementById("top");
   filterTop.addEventListener("click", function() {
     if ( datapart == 2) {
       imgShow.style.display = "block";

   } else {
       imgShow.style.display = "none";
     }
   });

   //filter cuff

   var filterCuff = document.getElementById("cuff");
   filterCuff.addEventListener("click", function() {
     if ( datapart == 3) {
       imgShow.style.display = "block";

   } else {
       imgShow.style.display = "none";
     }
   });

   //filter collar

   var filterCollar = document.getElementById("collar");
   filterCollar.addEventListener("click", function() {
     if ( datapart == 4) {
       imgShow.style.display = "block";

   } else {
       imgShow.style.display = "none";
     }
   });

   //filter dress

   var filterDress = document.getElementById("dress");
   filterDress.addEventListener("click", function() {
     if ( datapart == 5) {
       imgShow.style.display = "block";

   } else {
       imgShow.style.display = "none";
     }
   });

   //filter accessories

   var filterAccessories = document.getElementById("accessories");
   filterAccessories.addEventListener("click", function() {
     if ( datapart == 6) {
       imgShow.style.display = "block";

   } else {
       imgShow.style.display = "none";
     }
   });

   //filter Furniture

   var filterFurniture = document.getElementById("furniture");
   filterFurniture.addEventListener("click", function() {
     if ( datapart == 7) {
       imgShow.style.display = "block";

   } else {
       imgShow.style.display = "none";
     }
   });

   //filter Other

   var filterOther = document.getElementById("other");
   filterOther.addEventListener("click", function() {
     if ( datapart == 8) {
       imgShow.style.display = "block";

   } else {
       imgShow.style.display = "none";
     }
   });

   //filter all
   var filterAll = document.getElementById("over");
   filterAll.addEventListener("click", function() {
       imgShow.style.display = "block";
    //    imgShow.style.opacity = "1";
   });


//show detail information
imgShow.addEventListener("mouseenter", function() {
    imgShow.style.opacity = "1";
    imgTitle.innerText = datapoint.title;
    imgDetail.innerText = datapoint.detail;
    imgMedium.innerText = datapoint.medium;
    imgSize.innerText = datapoint.size;
    imgMain.src = "img/" + datapoint.main + ".png";
    // sq.style.display = "nonw";
    // textin.style.display = "none";
    
});

imgShow.addEventListener("mouseleave", function() {
    imgShow.style.opacity = "0.5";
    imgTitle.innerText = "";
    imgDetail.innerText = "";
    imgMedium.innerText =  "";
    imgSize.innerText =  "";
    imgMain.src = "";

    imgContainer.style.diaplay = "none";

});

//show info




 imgContainer.appendChild(imgShow);
//  textContainer.appendChild(imgTitle);
//  textContainer.appendChild(imgDetail);
//  textContainer.appendChild(imgMedium);
//  textContainer.appendChild(imgSize);
 textContainer.appendChild(imgMain);

//box for information


 let descriptionDiv = document.createElement("div");
 descriptionDiv.classList.add("descriptionDiv");
 descriptionDiv.appendChild(imgTitle);
 descriptionDiv.appendChild(imgDetail);
 descriptionDiv.appendChild(imgMedium);
 descriptionDiv.appendChild(imgSize);
 textContainer.appendChild(descriptionDiv);

}





 })
 .catch(function (err) {
     console.log("Something went wrong!", err);
 });
        


// var  info = document.getElementById("info");
// var  textin = document.getElementById("in");
// info.addEventListener("click", function() {
//     textin.style.display = "block";
//  });


