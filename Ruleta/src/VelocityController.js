// No utilizada, refactorizar y mejorar el diseño
class VelocityController{
    constructor(velocity, friction){
        this.velocity = velocity;
        this.friction = friction;
    }

    getVelocity(){
        return this.velocity;
    }

    _calculate(){
        velocity = Math.pow(Math.pow(velocity,2) - (2*friction*velocity),0.5);
    }

    calculateUserSpin(){
        if(velocity < 0.4)
            velocity += 0.05;
        friction = 0.00025;
    }
}