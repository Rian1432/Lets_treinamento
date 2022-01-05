// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modal-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var body = document.querySelector("body");

// clinar no botão para abrir o modal
btn.onclick = function() {
  modal.style.display = "block";
  body.style.overflow = "hidden";
  document.getElementById('name').focus();
}

// clicar no (X) para fechar
span.onclick = function() {
  modal.style.display = "none";
  body.style.overflow = "auto";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/***************** lightbox modal *****************/

var modalLightbox = document.getElementById("lightbox");

var openLightbox = document.getElementById("lightbox-btn");

var closeLightbox = document.getElementsByClassName("close-lightbox")[0];

openLightbox.onclick = function() {
  modalLightbox.style.display = "block";
  body.style.overflow = "hidden";
}

closeLightbox.onclick = function() {
  modalLightbox.style.display = "none";
  body.style.overflow = "auto";
}

window.onclick = function(event) {
  if (event.target == modalLightbox) {
    modalLightbox.style.display = "none";
  }
}

/************* modal do video *****************/

var modalVideo = document.getElementById("modalVideo");

var openVideo = document.getElementById("play-video");

var closeVideo = document.getElementsByClassName("closeVideo")[0];

openVideo.onclick = function() {
  modalVideo.style.display = "block";
  body.style.overflow = "hidden";
}

closeVideo.onclick = function() {
  modalVideo.style.display = "none";
  body.style.overflow = "auto";
}

window.onclick = function(event) {
  if (event.target == modalVideo) {
    modalVideo.style.display = "none";
    body.style.overflow = "auto";
  }
}
