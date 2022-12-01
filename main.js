m1 = "";
m2 = "";

function preload(){
    m1 = loadSound("週末京都現実逃避.mp3");
    m2 = loadSound("Kwazii Sonatina.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();    

    video = createCapture(VIDEO);
    video.hide()
}

function draw(){
    image(video, 0, 0, 600, 500);
}