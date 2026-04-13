//taken from one ofthe two page sites my group did

let docs;
let myInput;
let showText = false;

function preload() {
  lady = loadImage("lady.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  myInput = createInput('passkey');
  myInput.position(110, 425);
  myInput.changed(checkText);
}

function draw() {
fill("#00DD1C")
textFont("Times New Roman");
  image(lady, windowWidth / 2, windowHeight/2, 1000, 750);
}

function checkText() {
  if (myInput.value() === "TRUTH") {
    showText = true;
  } else {
    showText = false;
  }
}