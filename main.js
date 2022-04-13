function setup() {
    canvas = createCanvas(340, 340);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(340, 340);
}

status = "";
inputvalue = "";

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
    inputvalue = document.getElementById("objectinput").value;
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}

function draw() {
   image(video, 0, 0, 340, 340); 
}