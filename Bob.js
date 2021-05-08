class Bob{
    constructor(x,y,radius){
        var options={
            density : 0.5,
            frictionAir : 0.005
        }

        this.body = Bodies.circle(x,y,radius/2,options)
        this.radius = radius;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        ellipseMode(CENTER)
        fill("grey")
        ellipse(pos.x,pos.y,this.radius)
    }
}