var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var modalFile = document.getElementById("modalFile");

function openModal(file) {
  modalFile.src = file;
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
