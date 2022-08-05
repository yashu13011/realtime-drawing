noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0; 

function setup(){
    canvas = createCanvas(550,500);
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Model is Loaded!");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("the nose x is: "+noseX + "the nose y is: "+noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("the x of left wrist is: " + leftwristX + "the x of rightwrist is: "+rightwristX);
    }
}
function draw(){
    background('white');
    fill('#c203fc');
    stroke('#fc03db');
    square(noseX , noseY , difference);
    document.getElementById("square_side").innerHTML = "width and height of the square is "+difference;
}