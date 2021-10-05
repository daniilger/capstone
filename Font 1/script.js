


$(document).ready(function() {

var end = false;
$("#restart").hide();
$("#fastforward").hide();
$("#restart2").delay(2000).hide();


// if($("playbutton").width() < 11){
//   $("#playbutton").animate(
//      {
//        width: "15%"
//      },
//      2000,
//      function() {}
//    );
// }
//
// else if($("playbutton").width() > 14){
//   $("#playbutton").animate(
//      {
//        width: "10%"
//      },
//      2000,
//      function() {}
//    );
// }

$(".caption").mouseover(function() {
$("body").css("cursor","pointer");
})
$(".about").mouseout(function() {
$("body").removeAttr("style");
})

$(".about").click(function() {
  window.open("https://twitter.com/w__h_/status/1429646521293697028");

})

setInterval(function(){
    $(".buttonicon").stop(true,true).animate({width: "11%"}, 1000,
          function(){ $(this).stop(true,true).animate({width: "10%"}, 1000);
    });
}, 2000)

setInterval(function(){
    $("#fastforward").stop(true,true).animate({width: "6.5%"}, 1000,
          function(){ $(this).stop(true,true).animate({width: "6%"}, 1000);
    });
}, 2000)

$(".buttonicon").click(function() {
 $(".line").addClass("lineactive");
 $(".letter").addClass("active");
  $(".letter").addClass("switch");
  $(".letter").addClass("pooped");

 $(".letter").removeClass("inactive");
 // setInterval(function(){
 //     $(".background1").stop(true,true).animate({opacity: .5}, 2000,
 //           function(){ $(this).stop(true,true).animate({opacity: 1}, 2000);
 //     });}, 4000);
 $(".buttonicon").hide();
 $(".progress").animate({width:"75%"}, 6000,
       function(){});
 $("#restart").show();


});

$(document).on("mouseover", ".pooped", function() {
var toptrans= Math.floor((Math.random() * 800) - 800);
var lefttrans= Math.floor((Math.random() * 400) - 500);
var heighttrans= Math.floor((Math.random() * 200) + 10);
var widthtrans= Math.floor((Math.random() * 30) + 1);

if(end==false){
$("#fastforward").show();}

$(".progress").animate({width:"100%"}, 6000,
      function(){});

 $(this).removeClass("active");
 $(this).animate({top: toptrans, left: lefttrans}, 2000,
       function(){});
       $(this).animate({width: widthtrans+"%", height: heighttrans+"%"}, 2000,
             function(){});
});

setInterval(function(){
    $(".active.odd").stop(true,true).animate({top: 5}, 500,
          function(){ $(this).stop(true,true).animate({top: 0}, 500);
    });
}, 1000)

setInterval(function(){
    $(".active.even").stop(true,true).animate({top: 0}, 500,
          function(){ $(this).stop(true,true).animate({top: 5}, 500);
    });
}, 1000)

// setInterval(function(){
//     $(".lineactive").stop(true,true).animate({height: "60%"}, 1000,
//           function(){ $(this).stop(true,true).animate({height: "50%"}, 1000);
//     });
// }, 2000)


$(document).on("mouseover", ".inactive", function() {
  $(this).animate({top: -50}, 500,
        function(){});
  $(this).animate({top: 0}, 400,
        function(){});
  });

  $("#restart").click(function() {
    $(".progress").stop(true);

    $(".progress").animate({width:"25%"}, 3000,
          function(){});
    $(".letter").stop(true);
    $(".letter").removeClass("pooped");
    $(".letter").removeClass("switch");
   $(".letter").removeClass("active");
    $(".letter").addClass("inactive");
    $(".letter").removeAttr("style");
   $(".buttonicon").show();

         $("#restart").hide();
         $("#fastforward").hide();



  });

$("#fastforward").delay(2000).click(function() {
  setTimeout(function(){
   $(".progress").delay(2000).stop(true);
    $(".letter").delay(2000).stop(true);
    $(".letter").delay(2000).removeClass("pooped");
    $(".letter").delay(2000).removeClass("switch");
   $(".letter").delay(2000).removeClass("active");
    $(".letter").delay(2000).addClass("inactive");
    $(".letter").delay(2000).removeAttr("style");
         $("#restart").delay(2000).hide();
         $(".buttonicon").show();
end=true;
         $("#restart2").delay(2000).show();
         $(".progress").animate({width:"25%"}, 3000,
               function(){});
         $(".letter").stop(true);
         $("#fastforward").delay(2000).hide();}, 1000);

 // $(".scene1").toggleClass("sceneactive scenepassive")
     $(".background1").stop(true);
     $(".background1").removeAttr("style");

 $('.scene2').css("transform","translate(0,0)");
  // $(".progress").hide();

})

$("#restart2").click(function() {
  $(".progress").stop(true);
   $(".letter").stop(true);
   $(".letter").removeClass("pooped");
   $(".letter").removeClass("switch");
  $(".letter").removeClass("active");
   $(".letter").addClass("inactive");
   $(".letter").removeAttr("style");
        $("#restart").hide();
        $("#fastforward").hide();
        $('.scene2').css("transform","translate(100%,0)");
 $(".buttonicon").show();
 $(".progress").removeAttr("style");
 $(".progress").show();
end=false;
})
});
