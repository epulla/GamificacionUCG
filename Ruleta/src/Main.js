// Global variables
const RED = "#FF0040";
const BLACK = "#000000";
let ruleta;
let size = 1000;
let velocity = 0.025;
let friction = 0;
let elems = ["Elem 1", "Elem 2", "Elem 3","Elem 4","Elem 5", "Elem 6", "Elem 7", "Elem 8", "Elem 9"];
let colors = [RED, BLACK, RED, RED, BLACK, RED, RED, BLACK, RED];
let maxVelocity = 0.3;
// Main functions of p5
/// Main function for setting up the canvas (no loop)
function setup(){
    createCanvas(window.innerWidth,window.innerHeight*0.75);
    ruleta = new SpinWheel(width/2, height/2, size, elems, colors);
}

/// Main function for looping forever the canvas (loop)
function draw(){
    background(255);
    ruleta.show();
    ruleta.spin(velocity);
    calcVelocityRate();
    let finalVelocity = Math.pow(Math.pow(velocity,2) - (2*friction*velocity),0.5);
    velocity = finalVelocity > 0 ? finalVelocity : 0;
}

// Auxiliary functions
function spinTheWheel(){
    if(velocity < maxVelocity)
        velocity += 0.05;
    friction = 0.00055;    
}

function calcVelocityRate(){
    let velocityRate = Math.round((velocity/maxVelocity) * 100);
    document.getElementById("velocity").innerHTML = velocityRate > 100 ? 100 : velocityRate;
}