//taken from one ofthe two page sites my group did

let docs;
let myInput;
let showText;

function preload() {
a = createA('/libraries/ALIEN ZINE.pdf', 'DOCUMENT 1 TRANSLATED','_blank');
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
if(showText);
    text("text", 100,300);
    a.style('color','#00DD1C');
    a.position(110,450);
}

function checkText() {
  if (myInput.value() === "TRUTH") {
    showText = true;
  } else {
    showText = false;
  }
}