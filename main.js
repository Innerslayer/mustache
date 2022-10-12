function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes)
}

function modelloaded() {
    console.log("poseNet is Initialized");
}

function preload() {

}

function draw() {
    image(video,0,0,300,300);
}

function takeaphoto() {
    save('myfilter.png');
}

function gotposes(results) {
    if(results.length > 0){
        console.log(results);
        console.log("noseX= "+ results[0].pose.nose.x);
        console.log("noseY= "+ results[0].pose.nose.y);
    }
    

}