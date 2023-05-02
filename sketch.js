let osc, playing, freq, amp;

//i took the osc, freq and amp analysis code from the p5.Oscillator reference page

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');
  textAlign(CENTER);
  textSize(16);
  textStyle(BOLD);
}

function draw() {

  background(255)
  freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);


  text('tap to play', windowWidth/2, windowHeight/2.25);
  
  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
    background(mouseX/4,mouseY/2,240)
  

 text('tap to play', windowWidth/2, windowHeight/2.25);
  text('freq: ' + freq, windowWidth/2, windowHeight/2);
  text('amp: ' + amp, windowWidth/2, windowHeight/1.80);
  }  
}


function playOscillator() {
  osc.start();
  playing = true;
}


function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.5);
  playing = false;
}
