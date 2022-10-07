var Airtable = require("airtable");
console.log(Airtable);

var base = new Airtable({ apiKey:"keyLxTvyMYwiGn1fa"}).base("appJbjSqUwws8iTef");




function showGif1(){
    document.getElementById("gif").src="imgs/1.gif";
}

function showGif2(){    
    document.getElementById("gif").src="imgs/2.gif";
}
function showGif3(){
    document.getElementById("gif").src="imgs/3.gif";
}
function showGif4(){
    document.getElementById("gif").src="imgs/4.gif";
}
function showGif5(){
    document.getElementById("gif").src="imgs/5.gif";
}
function showGif6(){
    document.getElementById("gif").src="imgs/6.gif";
}
function showGif7(){
    document.getElementById("gif").src="imgs/7.gif";
}
function showGif8(){
    document.getElementById("gif").src="imgs/8.gif";
}
function showGif9(){
    document.getElementById("gif").src="imgs/9.gif";
}
function showGif10(){
    document.getElementById("gif").src="imgs/10.gif";
}
function showGif11(){
    document.getElementById("gif").src="imgs/11.gif";
}

function showGif12(){
    document.getElementById("gif").src="imgs/12.gif";
}
function showGif13(){
    document.getElementById("gif").src="imgs/13.gif";
}





function showValue() {
    var name = document.getElementById('name').value;
    document.getElementById('ans').innerHTML = name;
    // document.getElementById('hello').style.display = "none";
  }

  function underline(){
    document.getElementById("ans").style.textDecoration = "underline";
  }

  function underdot(){
    document.getElementById("ans").style.textDecoration = "underline dotted";
  }

  function PainOne(){
    document.getElementById("ans").style.fontWeight  = "100";
    document.getElementById("ans").style.fontSize  = "6rem";
  }
  function PainTwo(){
    document.getElementById("ans").style.fontWeight  = "200";
    document.getElementById("ans").style.fontSize  = "7rem";
  }
  function PainThr(){
    document.getElementById("ans").style.fontWeight  = "300";
    document.getElementById("ans").style.fontSize  = "8rem";
  }
  function PainFor(){
    document.getElementById("ans").style.fontWeight  = "400";
    document.getElementById("ans").style.fontSize  = "9rem";
  }
  function PainFiv(){
    document.getElementById("ans").style.fontWeight  = "500";
    document.getElementById("ans").style.fontSize  = "10rem";
  }
  function PainSix(){
    document.getElementById("ans").style.fontWeight  = "600";
    document.getElementById("ans").style.fontSize  = "11rem";
  }
  function PainSev(){
    document.getElementById("ans").style.fontWeight  = "700";
    document.getElementById("ans").style.fontSize  = "12rem";
  }
  function PainEig(){
    document.getElementById("ans").style.fontWeight  = "800";
    document.getElementById("ans").style.fontSize  = "13rem";
  }
  function PainNin(){
    document.getElementById("ans").style.fontWeight  = "900";
    document.getElementById("ans").style.fontSize  = "14rem";
  }
  function PainTen(){
    document.getElementById("ans").style.fontWeight  = "900";
    document.getElementById("ans").style.fontSize  = "15rem";
  }

  function spread(){
    document.getElementById("ans").style.textShadow  = "0 0 100px #000000";
  }

  function spreadNo(){
    document.getElementById("ans").style.textShadow  = "none";
  }