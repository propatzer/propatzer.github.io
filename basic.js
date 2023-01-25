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

//create slideshow



// Path: index.html
