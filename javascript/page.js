/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
console.log('is this damn thing working?')
function myFunction() {
  var x = document.getElementById("myLinks");
  console.log(x);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("space");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function(){
  modal.style.display = "block";
  modal.style.visibility = "visible";
  modalImg.src = './images/2001.jpg';
  console.log(modalImg.src);
  captionText.style.display = "block";
}
var img2 = document.getElementById("bird");
img2.onclick = function(){
  modal.style.display = "block";
  modal.style.visibility = "visible";
  modalImg.src = './images/birdman.still135_0.jpg';
  console.log(modalImg.src);
  captionText.style.display = "block";
}
var img3 = document.getElementById("fight");
img3.onclick = function(){
  modal.style.display = "block";
  modal.style.visibility = "visible";
  modalImg.src = './images/fight-club-final-shot.jpg';
  console.log(modalImg.src);
  captionText.style.display = "block";
}
var img4 = document.getElementById("ghost");
img4.onclick = function(){
  modal.style.display = "block";
  modal.style.visibility = "visible";
  modalImg.src = './images/Ghost_Shell_1995.jpg';
  console.log(modalImg.src);
  captionText.style.display = "block";
}
var img5 = document.getElementById("incept");
img5.onclick = function(){
  modal.style.display = "block";
  modal.style.visibility = "visible";
  modalImg.src = './images/inception.jpg';
  console.log(modalImg.src);
  captionText.style.display = "block";
}
var img6 = document.getElementById("inter");
img6.onclick = function(){
  modal.style.display = "block";
  modal.style.visibility = "visible";
  modalImg.src = './images/interstellar.jpg';
  console.log(modalImg.src);
  captionText.style.display = "block";
}
var img7 = document.getElementById("moon");
img7.onclick = function(){
  modal.style.display = "block";
  modal.style.visibility = "visible";
  modalImg.src = './images/moonlight.jpg';
  console.log(modalImg.src);
  captionText.style.display = "block";
}
var img8 = document.getElementById("totoro");
img8.onclick = function(){
  modal.style.display = "block";
  modal.style.visibility = "visible";
  modalImg.src = './images/my-neighbor-totoro-hayao-miyazaki.jpg';
  console.log(modalImg.src);
  captionText.style.display = "block";
}
var img9 = document.getElementById("up");
img9.onclick = function(){
  modal.style.display = "block";
  modal.style.visibility = "visible";
  modalImg.src = './images/pixar-up-final-shot.jpg';
  console.log(modalImg.src);
  captionText.style.display = "block";
}
var img10 = document.getElementById("roma");
img10.onclick = function(){
  modal.style.display = "block";
  modal.style.visibility = "visible";
  modalImg.src = './images/roma-beach.jpg';
  console.log(modalImg.src);
  captionText.style.display = "block";
}
var img11 = document.getElementById("breakfast");
img11.onclick = function(){
  modal.style.display = "block";
  modal.style.visibility = "visible";
  modalImg.src = './images/the-breakfast-club-final-shot.jpg';
  console.log(modalImg.src);
  captionText.style.display = "block";
}
var img12 = document.getElementById("thelma");
img12.onclick = function(){
  modal.style.display = "block";
  modal.style.visibility = "visible";
  modalImg.src = './images/thelma-and-louise-ending.jpg';
  console.log(modalImg.src);
  captionText.style.display = "block";
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
