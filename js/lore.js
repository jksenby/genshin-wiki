function openModal() {
  $("#staticBackdrop").modal("show");
}

function closeModal() {
  $("#staticBackdrop").modal("hide");
}

$("#openModal").on("click", openModal);
$("#closeModal1, #closeModal2").on("click", closeModal);
