// Global variables
let ruleta;
let size = 1000;
let velocity = 0.025;
let friction = 0;
let elems = ["Elem 1", "Elem 2", "Elem 3","Elem 4","Elem 5", "Elem 6"];
let maxVelocity = 0.4
// Main functions of p5
/// Main function for setting up the canvas (no loop)
function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    background(255);
    ruleta = new SpinWheel(width/2, height/2, size, elems);
}

/// Main function for looping forever the canvas (loop)
function draw(){
    ruleta.show();
    ruleta.spin(velocity);
    
    let finalVelocity = Math.pow(Math.pow(velocity,2) - (2*friction*velocity),0.5);
    velocity = finalVelocity > 0 ? finalVelocity : 0;
}

// Auxiliary functions
function spinTheWheel(){
    if(velocity < maxVelocity)
        velocity += 0.05;
    friction = 0.00025;
    
}