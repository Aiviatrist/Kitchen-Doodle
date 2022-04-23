function setup(){
    canvas= createCanvas(280,280);
    canvas.center();
    background('white');
    synth=window.speechSynthesis;
}
function preload(){
    classifier=ml5.imageClassifier("DoodleNet");
}
function menace(){
    background('white');
    synth.cancel();
    document.getElementById("lol").innerHTML="Label: ";
}
function draw(){
strokeWeight(13);
stroke(0);
if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
}
}
function kance(){
    classifier.classify(canvas,gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("lol").innerHTML="Label: "+results[0].label;
        utterthis= new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterthis);
    }
}
