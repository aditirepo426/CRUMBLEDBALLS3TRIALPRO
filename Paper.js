class Paper {
    constructor(x,y,radius){
    var options = {
        isStatic: false,
        restitution: 0.3,
        friction: 1,
        density: 1.2
    }
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.body = Bodies.circle(this.x,this.y,this.radius/2,options);
    this.image = loadImage("paperwh.jpg");
    World.add(world,this.body);
    
} 
display(){
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image,0,0,100,100);
    pop();

}
};


