function openModal() {
  $("#staticBackdrop").modal("show");
}

function closeModal() {
  $("#staticBackdrop").modal("hide");
}

$("#openModal").on("click", openModal);
$("#closeModal1, #closeModal2").on("click", closeModal);

$("#context").on("click", function (e) {
  e.preventDefault();
  const opacity = $("#list").css("opacity");
  $("#list").animate(
    {
      opacity: opacity === 1 ? 0.25 : 1,
      left: "+=50",
      height: "toggle",
    },
    1000,
    function () {}
  );
});
$("#thefirst").on("click", function (e) {
  $("html, body").scrollTop($("#loreThrone").offset().top);
});
$("#selestia").on("click", function (e) {
  $("html, body").scrollTop($("#loreSelestia").offset().top);
});
$("#assembly").on("click", function (e) {
  $("html, body").scrollTop($("#loreAssembly").offset().top);
});
$("#war").on("click", function (e) {
  $("html, body").scrollTop($("#loreWar").offset().top);
});
$("#journey").on("click", function (e) {
  $("html, body").scrollTop($("#loreJourney").offset().top);
});
$("#cataclysm").on("click", function (e) {
  $("html, body").scrollTop($("#loreCataclysm").offset().top);
});
$("#nowadays").on("click", function (e) {
  $("html, body").scrollTop($("#loreNowadays").offset().top);
});
