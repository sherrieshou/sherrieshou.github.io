
var up =  ["-20","10", "25", "30", "40" ]
var rndT = Math.floor(Math.random()* up.length);

function showclick1(){
  // document.addEventListener("mousemove", function showclick1(){
  //    // document.getElementById("ans").style.textTransform  = "uppercase";
  // document.getElementById("ans").style.transform  = 'skew(70deg)';

  
  // })
}




var name;
var ans;



function showValue() {
  var name = document.getElementById('name').value;
    document.getElementById('ans').innerHTML = name;
    // document.getElementById('hello').style.display = "none";
  }

  function underline(){
    document.getElementById("ans").style.textDecoration = "underline";
    document.getElementById("ans").style.backgroundImage = "linear-gradient(to right, white , white";
  }

  function underdot(){
    document.getElementById("ans").style.textDecoration = "underline dotted";
    document.getElementById("ans").style.backgroundImage = "linear-gradient(to right, white , white";
 
  }
function underthr(){
  document.getElementById("ans").style.textDecorationLine = "none";
  document.getElementById("ans").style.backgroundImage = "linear-gradient(to right, black , white";
  document.getElementById("ans").style.backgroundSize = "100% 10%";
  document.getElementById("ans").style.backgroundRepeat = "no-repeat";
  document.getElementById("ans").style.backgroundPosition = "center bottom";
  
  // document.getElementById("ans").style.backgroundClip = "text";
  // document.getElementById("ans").style.color = "transparent";
}

function underfou(){
  document.getElementById("ans").style.textDecorationLine = "none";
  document.getElementById("ans").style.backgroundImage = "linear-gradient(to left, black , white";
  document.getElementById("ans").style.backgroundSize = "100% 10%";
  document.getElementById("ans").style.backgroundRepeat = "no-repeat";
  document.getElementById("ans").style.backgroundPosition = "center bottom";
  
  // document.getElementById("ans").style.backgroundClip = "text";
  // document.getElementById("ans").style.color = "transparent";
}


  function PainOne(){
    document.getElementById("ans").style.fontWeight  = "100";
    document.getElementById("ans").style.fontSize  = "6rem";
    document.getElementById("ans2").style.fontWeight  = "100";
    document.getElementById("ans2").style.fontSize  = "6rem";
    document.getElementById("ans3").style.fontWeight  = "100";
    document.getElementById("ans3").style.fontSize  = "6rem";
    document.getElementById("ans4").style.fontWeight  = "100";
    document.getElementById("ans4").style.fontSize  = "6rem";
    document.getElementById("ans5").style.fontWeight  = "100";
    document.getElementById("ans5").style.fontSize  = "6rem";
  }
  function PainTwo(){
    document.getElementById("ans").style.fontWeight  = "200";
    document.getElementById("ans").style.fontSize  = "7rem";
    document.getElementById("ans2").style.fontWeight  = "200";
    document.getElementById("ans2").style.fontSize  = "7rem";
    document.getElementById("ans3").style.fontWeight  = "200";
    document.getElementById("ans3").style.fontSize  = "7rem";
    document.getElementById("ans4").style.fontWeight  = "200";
    document.getElementById("ans4").style.fontSize  = "7rem";
    document.getElementById("ans5").style.fontWeight  = "200";
    document.getElementById("ans5").style.fontSize  = "7rem";
  }
  function PainThr(){
    document.getElementById("ans").style.fontWeight  = "300";
    document.getElementById("ans").style.fontSize  = "8rem";
    document.getElementById("ans2").style.fontWeight  = "300";
    document.getElementById("ans2").style.fontSize  = "8rem";
    document.getElementById("ans3").style.fontWeight  = "300";
    document.getElementById("ans3").style.fontSize  = "8rem";
    document.getElementById("ans4").style.fontWeight  = "300";
    document.getElementById("ans4").style.fontSize  = "8rem";
    document.getElementById("ans5").style.fontWeight  = "300";
    document.getElementById("ans5").style.fontSize  = "8rem";

  }
  function PainFor(){
    document.getElementById("ans").style.fontWeight  = "400";
    document.getElementById("ans").style.fontSize  = "9rem";
    document.getElementById("ans2").style.fontWeight  = "400";
    document.getElementById("ans2").style.fontSize  = "9rem";
    document.getElementById("ans3").style.fontWeight  = "400";
    document.getElementById("ans3").style.fontSize  = "9rem";
    document.getElementById("ans4").style.fontWeight  = "400";
    document.getElementById("ans4").style.fontSize  = "9rem";
    document.getElementById("ans5").style.fontWeight  = "400";
    document.getElementById("ans5").style.fontSize  = "9rem";
  }
  function PainFiv(){
    document.getElementById("ans").style.fontWeight  = "500";
    document.getElementById("ans").style.fontSize  = "10rem";
    document.getElementById("ans2").style.fontWeight  = "500";
    document.getElementById("ans2").style.fontSize  = "10rem";
    document.getElementById("ans3").style.fontWeight  = "500";
    document.getElementById("ans3").style.fontSize  = "10rem";
    document.getElementById("ans4").style.fontWeight  = "500";
    document.getElementById("ans4").style.fontSize  = "10rem";
    document.getElementById("ans5").style.fontWeight  = "500";
    document.getElementById("ans5").style.fontSize  = "10rem";
  }
  function PainSix(){
    document.getElementById("ans").style.fontWeight  = "600";
    document.getElementById("ans").style.fontSize  = "11rem";
    document.getElementById("ans2").style.fontWeight  = "600";
    document.getElementById("ans2").style.fontSize  = "11rem";
    document.getElementById("ans3").style.fontWeight  = "600";
    document.getElementById("ans3").style.fontSize  = "11rem";
    document.getElementById("ans4").style.fontWeight  = "600";
    document.getElementById("ans4").style.fontSize  = "11rem";
    document.getElementById("ans5").style.fontWeight  = "600";
    document.getElementById("ans5").style.fontSize  = "11rem";
  }
  function PainSev(){
    document.getElementById("ans").style.fontWeight  = "700";
    document.getElementById("ans").style.fontSize  = "12rem";
    document.getElementById("ans2").style.fontWeight  = "700";
    document.getElementById("ans2").style.fontSize  = "12rem";
    document.getElementById("ans3").style.fontWeight  = "700";
    document.getElementById("ans3").style.fontSize  = "12rem";    
    document.getElementById("ans4").style.fontWeight  = "700";
    document.getElementById("ans4").style.fontSize  = "12rem";    
    document.getElementById("ans5").style.fontWeight  = "700";
    document.getElementById("ans5").style.fontSize  = "12rem";
  }
  function PainEig(){
    document.getElementById("ans").style.fontWeight  = "800";
    document.getElementById("ans").style.fontSize  = "13rem";
    document.getElementById("ans2").style.fontWeight  = "800";
    document.getElementById("ans2").style.fontSize  = "13rem";  
    document.getElementById("ans3").style.fontWeight  = "800";
    document.getElementById("ans3").style.fontSize  = "13rem";  
    document.getElementById("ans4").style.fontWeight  = "800";
    document.getElementById("ans4").style.fontSize  = "13rem";  
    document.getElementById("ans5").style.fontWeight  = "800";
    document.getElementById("ans5").style.fontSize  = "13rem";
  }
  function PainNin(){
    document.getElementById("ans").style.fontWeight  = "900";
    document.getElementById("ans").style.fontSize  = "14rem";
    document.getElementById("ans2").style.fontWeight  = "900";
    document.getElementById("ans2").style.fontSize  = "14rem";
    document.getElementById("ans3").style.fontWeight  = "900";
    document.getElementById("ans3").style.fontSize  = "14rem";
    document.getElementById("ans4").style.fontWeight  = "900";
    document.getElementById("ans4").style.fontSize  = "14rem";
    document.getElementById("ans5").style.fontWeight  = "900";
    document.getElementById("ans5").style.fontSize  = "14rem";
  }
  function PainTen(){
    document.getElementById("ans").style.fontWeight  = "900";
    document.getElementById("ans").style.fontSize  = "15rem";
    document.getElementById("ans2").style.fontWeight  = "900";
    document.getElementById("ans2").style.fontSize  = "15rem";
    document.getElementById("ans3").style.fontWeight  = "900";
    document.getElementById("ans3").style.fontSize  = "15rem";
    document.getElementById("ans4").style.fontWeight  = "900";
    document.getElementById("ans4").style.fontSize  = "15rem";
    document.getElementById("ans5").style.fontWeight  = "900";
    document.getElementById("ans5").style.fontSize  = "15rem";
  }

  function spreadOne(){
    document.getElementById("ans").style.textShadow  = "0 0 100px #000000";
    document.getElementById("ans2").style.textShadow  = "0 0 100px #000000";
    document.getElementById("ans3").style.textShadow  = "0 0 100px #000000";
    document.getElementById("ans4").style.textShadow  = "0 0 100px #000000";
    document.getElementById("ans5").style.textShadow  = "0 0 100px #000000";
  }

  function spreadTwo(){
    document.getElementById("ans").style.textShadow  = "none";
    document.getElementById("ans2").style.textShadow  = "none";
    document.getElementById("ans3").style.textShadow  = "none";
    document.getElementById("ans4").style.textShadow  = "none";
    document.getElementById("ans5").style.textShadow  = "none";
    document.getElementById('ans2').style.opacity  = "0";
    document.getElementById('ans3').style.opacity  = "0";
    document.getElementById('ans4').style.opacity  = "0";
    document.getElementById('ans5').style.opacity  = "0";
  }

  function spreadThr(){
    var name = document.getElementById('name').value;
    document.getElementById('ans2').innerHTML = name;
    document.getElementById('ans3').innerHTML = name;
    document.getElementById('ans4').innerHTML = name;
    document.getElementById('ans5').innerHTML = name;
    document.getElementById('ans2').style.opacity  = "1";
    document.getElementById('ans3').style.opacity  = "1";
    document.getElementById('ans4').style.opacity  = "1";
    document.getElementById('ans5').style.opacity  = "1";
    document.getElementById('ans2').style.left = up[rndT] + '%';
    document.getElementById('ans3').style.left = up[rndT] + '%';
    document.getElementById('ans4').style.left = up[rndT] + '%';
    document.getElementById('ans5').style.left = up[rndT] + '%';
// document.results = name;

    // for(var i=1; j<=2; i++){
    //   for(var j=1;j<=2; j++){
    //     document.write= ("name");
    //   }
    // }

  }
  // transform: skew(0deg);
  function CondOne(){
    document.getElementById("board").style.backgroundColor  = "white";
    document.getElementById("ans").style.transform = "skew(-50deg)";
    document.getElementById("ans2").style.transform = "skew(-50deg)";
    document.getElementById("ans3").style.transform = "skew(-50deg)";
    document.getElementById("ans4").style.transform = "skew(-50deg)";
    document.getElementById("ans5").style.transform = "skew(-50deg)";
  }

  function CondTwo(){
    document.getElementById("board").style.backgroundColor  = "white";
    document.getElementById("ans").style.animation = "rotate 1s linear infinite";
    document.getElementById("ans2").style.animation = "rotate2 2s linear infinite";
    document.getElementById("ans3").style.animation = "rotate 0.5s linear infinite";
    document.getElementById("ans4").style.animation = "rotate2 3s linear infinite";
    document.getElementById("ans5").style.animation = "rotate 2s linear infinite";
  }
  function CondThr(){
    document.getElementById("board").style.backgroundColor  = "#141414";
  }

  function CondFou(){
    document.getElementById("board").style.backgroundColor  = "white";
    document.getElementById("board").style.filter = "blur(4px)";
    // document.getElementById("ans2").style.filter = "blur(4px)";
    // document.getElementById("ans3").style.filter = "blur(4px)";
    // document.getElementById("ans4").style.filter = "blur(4px)";
    // document.getElementById("ans5").style.filter = "blur(4px)";
  }

  function CondFiv(){
    document.getElementById("board").style.backgroundColor  = "white";
    document.getElementById("ans").style.letterSpacing = "-0.295em";
    document.getElementById("ans2").style.letterSpacing = "-0.295em";
    document.getElementById("ans3").style.letterSpacing = "-0.295em";
    document.getElementById("ans4").style.letterSpacing = "-0.295em";
    document.getElementById("ans5").style.letterSpacing = "-0.295em";
  }

  function CondSix(){
    document.getElementById("ans").style.animation = "blink 1s step-start 0s infinite";
  }