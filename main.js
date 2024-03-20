song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

scoreRightWrist=0;

scoreLeftWrist=0;

function preload()
{
    song=loadSound("Real.mp3");
}

function setup()
{
    canvas=createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() 
  {
    console.log('poseNet inicializado!');
  }

function draw() {
    image(video, 0, 0, 600, 500);
fill("red");
stroke("red");
circle(leftWristX,leftWristY,20)
circle(rightWristX,rightWristY,20)
  }


function play()
{
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}

function stop()
{
    song.stop();
}

function gotPoses(results)
  {
    console.log(results);
    if (results.length>0) 
  {
    console.log(results);

    scoreLeftWrist=results[0].pose.keypoints[10].score;
    console.log("scorel = "+scoreLeftWrist);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;

      console.log("MuñecaIsqX="+leftWristX);
      console.log("MuñecaIsqY="+leftWristY);

      rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;

      console.log("MuñecaIsqX="+rightWristX);
      console.log("MuñecaIsqY="+rightWristY);
  }
  
   if(scoreLeftWrist>0.2)
   {
    InNunmberleftWristY=Number(leftWristY);
    remove_decimals=floor(InNunmberleftWristY);
    volume=remove_decimals/500;
    document.getElementById("volume").innerHTML="Volumen = "+volume;
    song.setVolume(volume);
   }

  if(scoreRightWrist>0.2)
   {
    InNunmberrihtWristY=Number(RightWristY);
    remove_decimals=floor(InNunmberightWristY);
    speed=remove_decimals/500;
    document.getElementById("speed").innerHTML="Velocidad = "+speed;
    song.setVolume(speed);
   }
  }