
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'acdddcfa20msh4e90dda5748af83p1d8207jsn90dd93893d6a',
		'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
	}
};


let lonely = document.getElementById("lonely");
let planet = document.getElementById("planet");
var oList = document.getElementById('circle');

let drag = document.getElementById('form');
let deco = document.getElementById("deco");

// //drag item
// let initialX = 0,
// initialY = 0;
// let moveElement = false;

// //Events Object
// let events = {
// 	mouse:{
// 		down:"mousedown",
// 		move:"mousemove",
// 		up:"mouseup",
// 	},
// 	touch:{
// 		down:"touchstart",
// 		move:"touchmove",
// 		up:"touchend",
// 	}
// };

// let deviceType = "";


// //Detech touch device
// const isTouchDevice = () =>{
// 	try{
// 		document.createEvent("TouchEvent");
// 		deviceType = "touch";
// 		return true;
// 	}
// 	catch(e){
// 		deviceType = "mouse";
// 		return false;
// 	}
// };

// isTouchDevice();


// //Start (mouse down / touch start)
// drag.addEventListener(events[deviceType].down,
// (e) =>{
// 	e.preventDefault();
// 	//initial x and y points
// 	initialX = !isTouchDevice()? e.clientX : e.touches[0].clientX;
// 	initialY = !isTouchDevice()? e.clientY : e.touches[0].clientY;

// 	//Start movement
// 	moveElement = true;
// });


// drag.addEventListener(events[deviceType].move,
// 	(e) => {
// //if movement == true then set top and left to new X and Y while removing any offset
// 	if (moveElement){
// 	e.preventDefault();
// 	let newX = !isTouchDevice() ? e.clientX : e.touches [0].clientX;
// 	let newY = !isTouchDevice() ? e.clientY : e.touches [0].clientY;
// 	drag.style.top = drag.offsetTop - (initialY - newY) + "px";
// 	drag.style.left = drag.offsetLeft - (initialX - newX) + "px";
// 	initialX = newX;
// 	initialY = newY;
// }

// });

// //mouse up / touch end
// drag.addEventListener (events[deviceType].up,
// 	(stopMovement = (e) =>{
// 		moveElement = false;
// 	})
// );

// drag.addEventListener("mouseleave",
// stopMovement);
// drag.addEventListener(events[deviceType].up,
// 	(e) => {
// 		moveElement = false;
// 	})





function submit() {
// var teavelFrom = document.getElementById("from").value;
// var teavelTo = document.getElementById("to").value;


let cityOne = document.getElementById("from").value;
let cityTwo = document.getElementById("to").value;
console.log('Travelling from' + cityOne+'to'+cityTwo);

// let cityOne = "NewYork";
// let cityTwo = "Beijing";
// console.log(cityOne);

let oneUrl = `https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname?name=${cityOne}`  ;

let twoUrl = `https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname?name=${cityTwo}`  ;




fetch(oneUrl, options)

	.then(function(response){
		return response.json();
	})
	
	.then(function(data){
		console.log(data);
		let oneLat = data.lat;
		let oneLon = data.lon;
		// console.log(oneLat);
		// console.log(oneLon);
		let oneLeft = Math.abs(map(oneLon, -180, 180, 0, 100));
		let oneTop = Math.abs(map(oneLat, -90, 90, 0, 50));
		console.log('Departure city Lontitude' + oneLeft);
		console.log('Departure city Latitude'+ oneTop);
		lonely.style.left = oneLeft+ 'vw';
		lonely.style.top = oneTop + 'vh';
		oList.style.left = oneLeft + 'vw';
		oList.style.top = oneTop + 'vh';
	})

	// longtitude:经度（-180=180）， latitude：纬度（-90=90）
	
	
	
	.catch(err => console.error(err));




	fetch(twoUrl, options)

	.then(function(response){
		return response.json();
	})
	
	.then(function(data){
		console.log(data);
		let twoLat = data.lat;
		let twoLon = data.lon;
		let twoPop = data.population;

		// console.log(twoLat);
		// console.log(twoLon);
		let twoLeft = Math.abs(map(twoLon, -180, 180, 0,100));
		let twoTop = Math.abs(map(twoLat, 90, -90, 0, 50));
		let twoAmt = Math.abs(map(twoPop, 0, 37435191, 0, 100));
		console.log('Destination city Lontitude'+ twoLeft);
		console.log('Destination city Latitude'+ twoTop);
		console.log('Population of Desitination is'+ twoPop);
		console.log('scaled Population'+twoAmt)
		planet.style.left = twoLeft+ 'vw';
		planet.style.top = twoTop+ 'vh';


//for loop "o"s
		for (i=1; i<=twoAmt;i++){

			for(j=0;j<=i;j++){
				oList.innerHTML += 'o';
			}
			oList.innerHTML += '</br>';
		}


		drag.style.display = ('none');
		deco.style.display = ('none');
	})


	.catch(err => console.error(err));


	// For loop video : https://www.youtube.com/watch?v=vYjh707rmok

// document.addEventListener("mousemove",function(e){
//     // console.log(e.clientX);
// let lonelyVal = map(e.clientX, 0, window.innerWidth, 0,100);
// // console.log(lonelyVal);
// lonely.style.left = lonelyVal+ '%';
// })




//map numbers
function map(value, low1, high1, low2, high2){
    return low2 + (high2 - low2) * (value - low1)/(high1 - low1);
}


}








