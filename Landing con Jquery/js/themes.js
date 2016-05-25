$(document).ready(init);

function init(){
  $("#rain").click(changeFont);
  $("#rain").click(changeTitle);
  $("#rain").click(changeBackground);
}

function changeFont(){
  $("body").css({
    "color":"blue",
    "font-size":"3rem",
    "font-family":"Edwardian Script ITC"
  });
  $("label").css({
    "font-family":"Edwardian Script ITC",
    "font-size":"4rem"
  });
  $("footer").css({
    "font-family":"Edwardian Script ITC",
    "font-size":"2rem"
  });
 }


  //$(this).text("This is the new Tittle!!");
  //console.log($("h1").text());

function changeTitle(){
  $("h1").css({
    "color":"white",
    "font-size":"8rem",
    "font-family":"Edwardian Script ITC"
  });
  $("h2").css({
    "color":"yellow",
    "font-size":"6rem",
    "font-family":"Edwardian Script ITC"
  });
}



function changeBackground(){
   $("body").css({
     "background-image":"url(img/rainbow.jpg)"
    });
   $(".container-fluid").css({
    "background-image":"url(img/rainbow.jpg)",
    "background-repeat":"repeat-x"
    });
   $(".fondo2").css({
    "background-image": "url('img/cubo.png')",
    "background-size":"inherit"
    });
   $(".mapa").css({
    "background-image":"url('img/exotic.png')",
    "background-size":"inherit"
    });
   $(".pie").css({
    "background-image": "url('img/nubes.gif')",
    "background-size":"cover"
    });

}
