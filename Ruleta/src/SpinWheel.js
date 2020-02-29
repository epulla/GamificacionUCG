class SpinWheel{
    constructor(posX, posY, diameter, elems, colors){
        this.posX = posX;
        this.posY = posY;
        this.diameter = diameter;
        this.pointer = new Pointer(posX,posY);
        this.arcs = []
        this.angleAcum = TWO_PI / elems.length;
        this._initializeElems(elems, colors);
    }

    show(){
        strokeWeight(5);
        stroke("#FF0040");
        this.arcs.forEach(function(value){
            value.show();
        });
        this.pointer.show();
    }

    spin(velocity){
        this.arcs.forEach(function(value){
            value.spin(velocity);
        });
        //this.pointer.vibrate();
    }

    _initializeElems(elemsContent, colors){
        let previousAngle = 0;
        for(let i = 0; i < colors.length; i++){
            this.arcs.push(new Arc(this.posX, this.posY, this.diameter, elemsContent[i], colors[i],previousAngle, previousAngle + this.angleAcum));
            previousAngle += this.angleAcum;
        }
    }
}