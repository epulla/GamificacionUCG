class SpinWheel{
    constructor(posX, posY, diameter, elems){
        this.posX = posX;
        this.posY = posY;
        this.diameter = diameter;
        this.pointer = new Pointer(posX,posY);
        this.arcs = []
        this.angleAcum = TWO_PI / elems.length;
        this._initializeElems(elems);
    }

    show(){
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

    _initializeElems(elemsContent){
        let previousAngle = 0;
        for(let content of elemsContent){
            this.arcs.push(new Arc(this.posX, this.posY, this.diameter, content, previousAngle, previousAngle + this.angleAcum));
            previousAngle += this.angleAcum;
        }
    }
}