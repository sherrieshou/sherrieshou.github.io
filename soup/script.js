let allContainer = document.getElementById("all");
// save your sheet ID and name of the tab as variables for use
let sheetID = "1tSAReBpAHCnmsou1jV-QqWwJLoaJtdL9CF1qTneF07o";
let tabName = 'sheet1';

let oneN = 'Organic Chunky Vegetable Soup';
let twoN = 'Lentil';
let thrN = 'Organic Lentil Vegetable Soup';
let fouN = 'Organic Chunky Tomato Bisque, light in Sodium';
let fivN = 'Organic Black Bean Vegetable Soup';
let sixN = 'Organic Split Pea Soup, Light In Sodium';
let sevN = 'Organic Vegetable Barley Soup';
let eigN = 'Organic Minestrone Soup, Light In Sodium';
let ninN = 'Mushroom Bisque With Porcini';
let tenN = 'Organic Quinoa, Kale & Red Lentil Soup';
let oneoneN = 'Organic Alphabet Soup';
let onetwoN = 'Indian Golden Lentil Soup';
let onethrN = 'Organic Carrot Ginger Soup';
let onefouN = 'Organic Butternut Squash Soup';
let onefivN = 'Organic Cream of Mushroom Soup';
let onesixN = 'Organic Cream of Tomato Soup';
let onesevN = 'Organic Fire Roasted Southwestern Vegetable Soup';
let oneeigN = 'No Chicken Noodle Soup';
let oneninN = 'Organic Tortilla Soup';
let onetenN = 'Organic Hearty Rustic Italian Vegetable Soup';
let twooneN = 'Organic Hearty French Country Vegetable Soup';
let twotwoN = 'Organic Hearty Spanish Rice & Red Bean Soup';
let twothrN = 'Organic Hearty Minestrone with Vegetables';
let twofouN = 'Thai Coconut Soup';
let twofivN = 'Thai Curry Sweet Potato Lentil Soup';
let twosixN = 'Organic vegan Mushroom Bisque';
let twosevN = 'Sweet Potato & Corn Chowder';
let twoeigN = 'Lentil & Chickpea Soup';
let twoninN = 'Organic Red Bean & Vegetable Soup';


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

let dataArr = [];

      for (let datapoint of data){
    let chewy = parseFloat(datapoint.chews);
    let thick = parseFloat(datapoint.thickness);
    let sweet = parseFloat(datapoint.sweetness);
    let season = parseFloat(datapoint.season);
    let veg = parseFloat(datapoint.veg);
    let pro = parseFloat(datapoint.img);
    let title = parseFloat(datapoint.varname);
 
    console.log(title);

     // add this object to our blank array
     dataArr.push([chewy, thick, sweet, season, veg, pro]);



    let soupContainer = document.createElement("DIV");
    let soupInner = document.createElement("DIV");
    let soupStroke = document.createElement("IMG");
    let soupName = document.createElement("p");
    let soupLogo = document.createElement("IMG");
    let soupImg = document.createElement("IMG");

    soupContainer.classList.add("container");
    soupInner.classList.add("inner-container");
    soupStroke.classList.add("stroke");
    soupName.classList.add("soup-name");
    soupLogo.classList.add("logo");
    soupImg.classList.add("soup-img");
    


   
//product source
   soupImg.src = "img/" + pro + ".png";
//    soupName.innerText = title;

// season
    if (season == 1){ 
        soupInner.style.background = "#E2AD9F";
    }

    if (season == 2){ 
        soupInner.style.background = "#A5A67A";
    }

    if (season == 3){ 
        soupInner.style.background = "#DAB469";
    }

    if (season == 4){ 
        soupInner.style.background = "#99ABBF";
    }
// vegetable
    if (veg == 0){ 
        soupStroke.src = "stroke1.svg";
    }
    if (veg == 1){ 
        soupStroke.src = "stroke2.svg";
    }
    if (veg == 2){ 
        soupStroke.src = "stroke3.svg";
    }
    if (veg == 3){ 
        soupStroke.src = "stroke4.svg";
    }



// clear or creamy

//creamy spring
if (thick == 1 && season == 1){ 
        soupContainer.style.background = "#E2AD9F";
        soupInner.style.background = "#F9F5ED";
    }
    
//creamy summer
if (thick == 1 && season == 2){ 
    soupContainer.style.background = "#A5A67A";
    soupInner.style.background = "#F9F5ED";
}
//creamy fall
if (thick == 1 && season == 3){ 
    soupContainer.style.background = "#DAB469";
    soupInner.style.background = "#F9F5ED";
}
//creamy winter
if (thick == 1 && season == 4){ 
    soupContainer.style.background = "#99ABBF";
    soupInner.style.background = "#F9F5ED";
}

//    soupName.innerHTML += title;

//appendChild
    soupContainer.appendChild(soupStroke);
    soupContainer.appendChild(soupInner);
    soupContainer.appendChild(soupName);
    soupContainer.appendChild(soupLogo);
    soupContainer.appendChild(soupImg);
    allContainer.appendChild(soupContainer);
    
    }

    console.log(dataArr);

    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
