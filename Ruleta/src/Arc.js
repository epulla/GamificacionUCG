class Arc{
    constructor(posX, posY, diameter, content, color,initialAngle, finalAngle){
        this.posX = posX;
        this.posY = posY;
        this.diameter = diameter;
        this.content = content;
        this.initialAngle = initialAngle;
        this.finalAngle = finalAngle;
        //this.color = this._getRandomColor();
        this.color = color != "#000000" ? this._getRandomColor() : "#000000"; 
    }

    show(){
        fill(this.color);
        arc(this.posX, this.posY, this.diameter/2, this.diameter/2, this.initialAngle, this.finalAngle);
    }

    _getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    getContent(){
        return this.content;
    }

    spin(velocity){
        //this.initialAngle = this.initialAngle + velocity < TWO_PI ? this.initialAngle + velocity : (this.initialAngle - TWO_PI);
        //this.finalAngle = this.finalAngle + velocity < TWO_PI ? this.finalAngle + velocity : (this.finalAngle - TWO_PI);
        
        // Codigo de arriba hace lo mismo que lo comentado, pero limpiando la variable
        this.initialAngle += velocity;
        this.finalAngle += velocity;
    }

}