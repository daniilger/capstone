


$(document).ready(function() {

$("#restart").hide();
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

setInterval(function(){
    $("#playbutton").stop(true,true).animate({width: "11%"}, 1000,
          function(){ $(this).stop(true,true).animate({width: "10%"}, 1000);
    });
}, 2000)

$("#playbutton").click(function() {
 $(".letter").addClass("active");
  $(".letter").addClass("switch");
  $(".letter").addClass("pooped");

 $(".letter").removeClass("inactive");

 $("#playbutton").hide();
 $(".progress").animate({width:"75%"}, 6000,
       function(){});
       $("#restart").show();



});

$(document).on("mouseover", ".pooped", function() {
var toptrans= Math.floor((Math.random() * 800) - 800);
var lefttrans= Math.floor((Math.random() * 400) - 500);
var heighttrans= Math.floor((Math.random() * 200) + 10);
var widthtrans= Math.floor((Math.random() * 30) + 1);
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
   $("#playbutton").show();

         $("#restart").hide();



  });

});
