//let img;
let v = 0;
let video;
let detections;
let objectDetector;
function preload() {
  objectDetector = ml5.objectDetector("cocossd", lol);
}
function lol() {
  console.log("loaded");
}
function setup() {
  background(0);
  video = createCapture(VIDEO, videoLoaded);
  video.hide();
}
function videoLoaded() {
  console.log("video loaded");
  const canvas = createCanvas(video.width, video.height);
  canvas.parent("canvas-container");
  objectDetector.detect(video, detected);
}
function draw() {
    clear();
  if (detections) {
    for (let index = 0; index < detections.length; index++) {
      const element = detections[index];
      stroke(0, 255, 0);
      strokeWeight(2);
      noFill();
      rect(element.x, element.y, element.width, element.height);
      noStroke();
      fill(0, 255, 0);
      textSize(24);
      text(element.label, element.x + 10, element.y + 24);
    }
    objectDetector.detect(video, detected);
  }
}

// When the model is loaded
function detected(error, results) {
  detections = results;
  //objectDetector.detect(video, detected);
}
// Detect objects in the video element
