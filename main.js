song1="";
song2="";
leftWristX=0;
RightWristY=0;
leftWristY=0;
RightWristX=0;
ScoreLeftWrist=0;
ScoreRightWrist=0;

function preload(){
song1=loadSound("song1.mp3");
song2=loadSound("song2.mp3");
}

function setup(){
canvas=createCanvas(500,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,ModelLoaded);
poseNet.on("pose",gotResults);
}

function draw(){
image(video,0,0,500,400);
}

function ModelLoaded(){
    console.log("Model Is Loaded");
}

function gotResults(results){
if(results.length>0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
RightWristX=results[0].pose.rightWrist.x;
RightWristY=results[0].pose.rightWrist.y;
ScoreLeftWrist=results[0].pose.keypoints[9].score;
ScoreRightWrist=results[0].pose.keypoints[10].score;
}


}

function play(){
    song2.play();
    song2.setVolume(1);
    song2.rate(1);
}

