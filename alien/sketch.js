function setup() {
  createCanvas(windowWidth, windowHeight);
  a = createA('placeholderlink.com', 'ENTER');
}

function draw() {
  background(0);
  
  textAlign(CENTER)
  textStyle(BOLDITALIC)
  textFont('Times New Roman')
  fill('#00DD1C')
  textSize(60)
  text("Welcome to my home page",windowWidth/2,300)
  
  a.style('color','#00DD1C')
  a.attribute('align', 'center')
  a.style('font-size', '40px')
  a.style('font-weight','bold')
  a.position(windowWidth/2-40, 450)
}