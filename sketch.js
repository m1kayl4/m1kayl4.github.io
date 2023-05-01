let osc, playing, freq, amp;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');
}

function draw() {

  background(255)
  freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  textAlign(CENTER);
  textSize(16);
  textStyle(BOLD);
  text('tap to play', width/2, height/2.25);
  
  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
    background(mouseX/4,mouseY/2,240)
  
  textAlign(CENTER);
  textSize(16);
  textStyle(BOLD);
  
  //i took this text from the p5.Oscillator reference page but I changed its placement within the canvas/canvas size
 text('tap to play', width/2, height/2.25);
  text('freq: ' + freq, width/2, height/2);
  text('amp: ' + amp, width/2, height/1.80);
  }  
}

//i took this from the p5.Oscillator reference page
function playOscillator() {
  osc.start();
  playing = true;
}

if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
    background(mouseX/4,mouseY/2,240)
  }

function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.5);
  playing = false;
}
