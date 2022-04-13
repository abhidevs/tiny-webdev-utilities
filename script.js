const images = document.getElementById("images");

const allImgs = images.querySelectorAll("img");
let idx = 0;

function slideshow() {
  idx++;
  if (idx > allImgs.length - 1) idx = 0;
  images.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(slideshow, 2000);
