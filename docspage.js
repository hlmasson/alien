//taken from one ofthe two page sites my group did

let docs;
let myInput;
let showText;

function preload() {
 a = createA('https://geocities.restorativland.org/', 'DOCUMENT 1 TRANSLATED','_blank');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background('#ffffff');
  myInput = createInput('passkey');
  myInput.position(110, 425);
  myInput.changed(checkText);
   a.style('color','#00DD1C');
   a.style('background-color','white' ); 
    a.attribute('align', 'left');
    a.style('font-size', '18px');
    a.position(110, 450);
    
}

function draw() {
fill("#00DD1C")
textFont("Times New Roman");
textSize(20);
if (showText) {
    text("text", 110,50);
   
}
}

function checkText() {
  if (myInput.value() === "TRUTH") {
    showText = true;
  } else {
    showText = false;
  }
}