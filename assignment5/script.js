console.log("inside");



$( "p" )
  .on( "mouseenter", function() {
    $( this ).css({
      "background-color": "#FFA500",
      "font-weight": ""
    });
  })
  .on( "mouseleave", function() {
    var styles = {
      backgroundColor : "#F0F8FF",
      fontWeight: ""
    };
    $( this ).css( styles );
  });

  console.log("here");




  
  var a;
function show_hide()

{
    if(a==1)
    {
        document.getElementById("hide").style.display="inline";
        return a=0;
    }

    else
    {
        document.getElementById("hide").style.display="none";
        return a=1;
    }

}


$(document).ready(function(){
    $("#card").flip({
        

    });
});

