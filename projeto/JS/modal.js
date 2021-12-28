// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modal_btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/***************** lightbox modal *****************/

var modalVideo = document.getElementById("lightbox");

var play = document.getElementsByClassName("play-video");

var closeVideo = document.getElementsByClassName("close-lightbox")[0];

play.onclick = function() {
  modalVideo.style.display = "block";
}

closeVideo.onclick = function() {
  modalVideo.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalVideo) {
    modalVideo.style.display = "none";
  }
}

/************* modal do video *****************/

var modalVideo = document.getElementById("modalVideo");

var play = document.getElementsByClassName("play-video");

var closeVideo = document.getElementsByClassName("closeVideo")[0];

play.onclick = function() {
  modalVideo.style.display = "block";
}

closeVideo.onclick = function() {
  modalVideo.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalVideo) {
    modalVideo.style.display = "none";
  }
}
