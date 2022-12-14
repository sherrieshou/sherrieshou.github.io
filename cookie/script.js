console.log(document.cookie);
let cookielElement = document.getElementById("cookieObj");



// let left ;
// if(checkCookie("cookie_left ")){
// left = parseInt(getCookie("cookie_left"));
// } else {
//      left = 0; 
// }

let width = parseInt(getCookie("cookie_left")) || 1;


cookieObj.style.width = width + "vw"; 

cookieObj.addEventListener("mousedown",function(){
    width++ ;
    this.style.width = width + "vw"; 
        setCookie("cookie_left", width, 7);
    console.log(width);
})
const deleteAllCookies = () => {
    const cookies = document.cookie.split(";");
  
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}


//setting cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//get my cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

//check cookie
function checkCookie(cname) {
    if (!getCookie(cname) === undefined) {
        return true;
    } else {
        return false;
    }
}


// deleteAllCookies();