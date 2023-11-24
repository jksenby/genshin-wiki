$(function () {
  var play = $("#play"),
    pause = $("#pause"),
    stop = $("#stop"),
    mute = $("#mute"),
    muted = $("#muted"),
    song = new Audio(
      "https://bootstraptema.ru/snippets/audio/2016/circle-player/robbenson.mp3"
    ),
    duration = song.duration;

  song.type = "audio/mpeg";
  song.src =
    "./resoures/music/dav_la_vaguette_furina_story_quest_song_french_lyrics_genshin_im.m4a";

  stop.on("click", function (e) {
    e.preventDefault();
    $(this).addClass("hide");
    $("#play").removeClass("hide").trigger("click");
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
    $("#muted").removeClass("hide");
  });

  muted.on("click", function (e) {
    e.preventDefault();
    song.volume = 1;
    $(this).addClass("hide");
    $("#mute").removeClass("hide");
  });

  song.addEventListener("timeupdate", function () {
    var curtime = (song.currentTime / song.duration) * 100;
    $(".progress-radial").addClass("progress-" + parseInt(curtime));
    $(".progress-radial").removeClass("progress-" + parseInt(curtime - 1));
  });
});
