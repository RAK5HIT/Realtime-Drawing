rightWristX= 0;
leftWristX= 0;
difference= 0;

function setup(){
video = createCapture(VIDEO);
video.size(510 , 400);
video.position(100,200)
canvas = createCanvas(880, 600);
canvas.position(820,130);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Loaded Successfully!" );
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw(){
    background("azure")
    fill("navy");
    textSize(difference);
    text('YOUR NAME',100,100 );
}
