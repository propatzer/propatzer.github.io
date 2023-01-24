const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const NUM_LINES = 250;
const svg = document.querySelector("#svg");

const doArt = () => {
  console.log("doArt called");
  // Clear old
  let oldLines = svg.querySelectorAll("line");
  if (oldLines) oldLines.forEach((line) => line.remove());

  // Draw new
  let newLines = '';
  for (let i = 0; i < NUM_LINES; i++) {
    newLines += `
    <line 
      x1="50"
      y1="50" 
      x2="${getRandomInt(10, 100)}"
      y2="${getRandomInt(10, 100)}"
      stroke="rgba(${getRandomInt(200, 250)}, 30, 2, ${getRandomInt(1, 30)}.${getRandomInt(0, 25)})"
      stroke-width="${getRandomInt(1, 3)}"
      stroke-length="${getRandomInt(4, 10)}"
      shape-rendering="circle"
    />`;
  }

  svg.insertAdjacentHTML("afterbegin", newLines);

  window.addEventListener("click", doArt);
};

doArt();

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 

// Path: index.html
