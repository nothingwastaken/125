m1 = "";
m2 = "";
LWx = 0;
LWy = 0;
RWx = 0;
RWy = 0;
LWs = 0;
sos = "";

function preload(){
    m1 = loadSound("週末京都現実逃避.mp3");
    m2 = loadSound("Kwazii Sonatina.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();    

    video = createCapture(VIDEO);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log(ready);
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#000000");

    sos = m1.isPlaying();
    if (LWs > 0.02){
        circle(LWx,LWy, 20);
        m2.stop();
        if (sos = "false"){
            m1.play()
            document.getElementById("song").innerHTML = "週末京都現実逃避";
        }
    }
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        LWs = results[0].pose.keypoints[9].score;

        LWx = results[0].pose.leftWrist.x;
        LWy = results[0].pose.leftWrist.y;
        console.log("Left wrist x = " + LWx + " Left wrist y = " + LWy);
        RWx = results[0].pose.rightWrist.x;
        RWy = results[0].pose.rightWrist.y;
        console.log("Right wrist x = " + RWx + " Right wrist y = " + RWy);
    }
}
