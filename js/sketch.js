function setup() {
  createCanvas(windowWidth, windowHeight);
  initCaptureDevice(); // and access to the camera
  /*
    In this particular case the gfx helper should have dimensions the same as
    the target graphic.
  */
  gfx = createGraphics(asciiart_width, asciiart_height);
  gfx.pixelDensity(1);
  /*
    Here we create an object derived from the AsciiArt pseudo-class from the
    p5.asciiart library:
      new AsciiArt(_sketch);
      new AsciiArt(_sketch, _fontName);
      new AsciiArt(_sketch, _fontName, _fontSize);
      new AsciiArt(_sketch, _fontName, _fontSize, _textStyle);
  */
  myAsciiArt = new AsciiArt(this);
  /*
    After initializing the object, look at (in the console) the listing of the
    array containing the glyphs sorted according to the amount of space
    occupied. This table is the basis for the procedure that converts
    individual image pixels into glyphs.
  */
  myAsciiArt.printWeightTable();
  /*
    Here we set the font family, size and style. By default ASCII Art library
    is using 'monospace' font, so we want to apply the same setting to our
    sketch.
  */
  textAlign(CENTER, CENTER);
  textFont('monospace', 8);
  textStyle(NORMAL);
  noStroke();
  fill(255);
  /*
    Finally we set the framerate.
  */
  frameRate(30);
}

function draw() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//Here we are trying to get access to the camera.

function initCaptureDevice() {
  try {
    myCapture = createCapture(VIDEO);
    myCapture.size(320, 240);
    myCapture.elt.setAttribute('playsinline', '');
    myCapture.hide();
    console.log(
      '[initCaptureDevice] capture ready. Resolution: ' +
      myCapture.width + ' ' + myCapture.height
    );
  } catch (_err) {
    console.log('[initCaptureDevice] capture error: ' + _err);
  }
}