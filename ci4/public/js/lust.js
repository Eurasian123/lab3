let slideIndex = 1;
let hoyoIndex = 1;
showSlides(slideIndex);
showCont(hoyoIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("lust_item");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// HOYO TIME

// Next/previous controls
function plusConts() {
  showCont(hoyoIndex + 1);
}

function showCont(n) {
  let i;
  let hoyoconts = document.getElementsByClassName("lust_hoyodiv");
  if (n > hoyoconts.length) {hoyoIndex = 1}
  if (n < 1) {hoyoIndex = hoyoconts.length}
  for (i = 0; i < hoyoconts.length; i++) {
    hoyoconts[i].style.display = "none";
  }
  hoyoconts[slideIndex-1].style.display = "block";
}