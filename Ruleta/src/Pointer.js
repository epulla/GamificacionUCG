class Pointer{
    constructor(posX, posY){
        this.posX = posX;
        this.posY = posY + (height*0.45);
    }

    show(){
        fill(255);
        stroke(0);
        //this.vibrate();
        triangle(this._posX(-10), this._posY(0), this._posX(10), this._posY(0), this._posX(0), this._posY(-40));
    }

    vibrate(){
        this.posX += Math.random();
    }

    _posX(value){
        return this.posX + value;
    }

    _posY(value){
        return this.posY + value;
    }
}