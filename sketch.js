function setup() {
  createCanvas(windowWidth, windowHeight);
  a = createA('https://cdn.jsdelivr.net/npm/p5@2.2.1/lib/p5.min.js', 'ENTER');
}

function draw() {
  background(0);
  
  textAlign(CENTER)
  textStyle(BOLDITALIC)
  textFont('Times New Roman')
  fill('#00DD1C')
  textSize(45)
  text("Welcome to my home page",windowWidth/2,350)
  
  a.style('color','#00DD1C');
  a.attribute('align', 'center');
  a.style('font-size', '30px');
  a.style('font-weight','bold');
  a.position(windowWidth/2-40, 500)
}