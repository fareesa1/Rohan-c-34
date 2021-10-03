class Box {
    constructor(x,y){
        var op ={
            resititution:1.0,
            friction:1.0,
            density:1.0
        }

        this.body = Bodies.rectangle(x,y,50,50);

        World.add(world, this.body)
    }

    display(){
        rect(this.body.position.x,this.body.position.y, 50,50 )
    }
}