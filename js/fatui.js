var play = $("#play1"),
  pause = $("#pause1"),
  stop = $("#stop1"),
  mute = $("#mute1"),
  muted = $("#muted1"),
  song = new Audio("./resoures/music/fatui.mp3"),
  duration = song.duration;

song.type = "audio/mpeg";
song.src = "./resoures/music/fatui.mp3";

stop.on("click", function (e) {
  e.preventDefault();
  $(this).addClass("hide");
  $("#play1").removeClass("hide").trigger("click");
});

play.on("click", function (e) {
  e.preventDefault();
  if (!$(this).hasClass("active")) {
    song.play();
    $(".active").removeClass("active");
    $(this).addClass("active");
  } else {
    song.pause();
    $(".active").removeClass("active");
    var curtime = (song.currentTime / song.duration) * 100;
    $(".progress-radial").removeClass("progress-" + parseInt(curtime));
    song.currentTime = 0;
    $(this).addClass("hide");
    stop.removeClass("hide").addClass("active");
  }
});

pause.on("click", function (e) {
  e.preventDefault();
  song.pause();
  $(".active").removeClass("active");
  $(this).addClass("active");
});

mute.on("click", function (e) {
  e.preventDefault();
  song.volume = 0;
  $(this).addClass("hide");
  $("#muted1").removeClass("hide");
});

muted.on("click", function (e) {
  e.preventDefault();
  song.volume = 1;
  $(this).addClass("hide");
  $("#mute1").removeClass("hide");
});

song.addEventListener("timeupdate", function () {
  var curtime = (song.currentTime / song.duration) * 100;
  $(".progress-radial").addClass("progress-" + parseInt(curtime));
  $(".progress-radial").removeClass("progress-" + parseInt(curtime - 1));
});
