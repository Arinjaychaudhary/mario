noseX=0;
noseY=0;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump = loadSound("jump.wav");
	mario_die= loadSound("mariodie.wav");
	coin_get = loadSound("coin.wav");
	mario_over= loadSound("gameover.wav");
	mario_kill= loadSound("kick.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);

	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}

function draw() {
	game()
	
}

function modelLoaded(){
	console.log("Model Loaded Successfully");

}


function gotPoses(results){
if(results.length > 0)
{
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log(results);
}
}



