class Pointer{
    constructor(posX, posY){
        this.posX = posX;
        this.posY = posY + (height*0.45);
    }

    show(){
        fill("#FCFF00");
        stroke("#676767");
        strokeWeight(3);
        //this.vibrate();
        triangle(this._posX(-10), this._posY(20), this._posX(10), this._posY(20), this._posX(0), this._posY(-30));
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