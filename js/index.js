"use strict";

// .............................. open Nav...............
$("#main span").click(function () {
  if ($("#main").css("margin-left") == "250px") {
    $("#main #nav").animate({ width: 0 }, 500, function () {
      $("#main #nav").css({ left: "-250px" });
    });
    $("#main").animate({ marginLeft: 0 }, 500);
  } else {
    $("#main #nav").animate({ width: 250 }, 500).css({ left: 0 });
    $("#main").animate({ marginLeft: 250 }, 500);
  }
});
// ...................... Nav Links............................
$("#main #nav #closeNav").click(function () {
  $("#main #nav").animate({ width: 0 }, 500, function () {
    $("#main #nav").css({ left: "-250px" });
  });
  $("#main").animate({ marginLeft: 0 }, 500);
});
// .................Singers Data Show...................
$("#singers h3").click(function () {
  if ($(this).next().css("display") == "none") {
    $("#singers div").slideUp(500);
    $(this).next().slideDown(500);
  } else {
    $(this).next().slideUp(500);
  }
});
// .................................... Count Down Time ............................
function getTime() {
  let countDownTime = new Date("2023/04/25").getTime();
  let now = new Date().getTime();
  let dist = countDownTime - now;
  let day = Math.floor(dist / 1000 / 60 / 60 / 24);
  let hour = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((dist % (1000 * 60)) / 1000);
  $("#dayLeft").html(function () {
    if (day < 10) {
      return "0" + day;
    } else {
      return day;
    }
  });
  $("#hourLeft").html(function () {
    if (hour < 10) {
      return "0" + hour;
    } else {
      return hour;
    }
  });
  $("#minLeft").html(function () {
    if (min < 10) {
      return "0" + min;
    } else {
      return min;
    }
  });
  $("#secLeft").html(function () {
    if (sec < 10) {
      return "0" + sec;
    } else {
      return sec;
    }
  });
  setTimeout(getTime, 1000);
}
getTime();
// ...................................form edit........................
$("textarea").on("input", function () {
  let limitChar = $("textarea").val();
  $("#limChar").html(function () {
    if (limitChar.length <= 100) {
      return 100 - limitChar.length;
    } else {
      return "your available character finished";
    }
  });
});
