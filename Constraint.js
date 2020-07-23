class Rope {
    constructor (body1,body2){

        var options = {
            bodyA: body1,
            bodyB: body2,
            restitution: 0.5,
            stiffness: 0.03,
            lenght: 200
        }

        this.body = Constraint.create(options);
        World.add(world ,this.body);
        }

    fly (){
      this.body.bodyA = null;
    }

    display(){
        var pointA = this.body.bodyA.position;
        var pointB = this.body.bodyB.position;

        push();
        strokeWeight(4);
        stroke(255);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}