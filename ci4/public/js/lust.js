let videoList = document.querySelectorAll(".limage_cont video");
let video;
let slideIndex = 1;
let hoyoIndex = 1;
showSlides(slideIndex);
showCont(hoyoIndex);

function video_play() {
	video.load();
	video.play();
	video.style.opacity = 1;
}

function video_pause() {
	video.pause();
	video.style.opacity = 0;
}

function video_end() {
	video.style.opacity = 0;
}

function videoVerify() {
	switch(slideIndex) {
		case 1:
			video = videoList[0];
			break;
		case 2:
			video = videoList[1];
			break;
		case 3:
			switch(hoyoIndex) {
				case 1:
					video = videoList[2];
					break;
				case 2:
					video = videoList[3];
					break;
				case 3:
					video = videoList[4];
					break;
			};
			break;
		case 4:
			video = videoList[5];
			break;
		case 5:
			video = videoList[6];
			break;
	};
}

// Next/previous controls
function plusSlides(n) {
	video.removeEventListener("mouseenter", video_play);
	video.removeEventListener("mouseleave", video_pause);
	video.removeEventListener("ended", video_end);
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
  videoVerify();
  video.addEventListener("mouseenter", video_play);
  video.addEventListener("mouseleave", video_pause);
  video.addEventListener("ended", video_end);
}

// HOYO TIME

// Next/previous controls
function plusConts(n) {
	video.removeEventListener("mouseenter", video_play);
	video.removeEventListener("mouseleave", video_pause);
	video.removeEventListener("ended", video_end);
	showCont(hoyoIndex += n);
}

function showCont(n) {
  let i;
  let hoyoconts = document.getElementsByClassName("lust_hoyodiv");
  if (n > hoyoconts.length) {hoyoIndex = 1}
  if (n < 1) {hoyoIndex = hoyoconts.length}
  for (i = 0; i < hoyoconts.length; i++) {
    hoyoconts[i].style.display = "none";
  }
  hoyoconts[hoyoIndex-1].style.display = "block";
  videoVerify();
  video.addEventListener("mouseenter", video_play);
  video.addEventListener("mouseleave", video_pause);
  video.addEventListener("ended", video_end);
}