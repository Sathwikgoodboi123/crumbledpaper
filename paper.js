class paper {
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'friction':0,
            'isStatic':false,
            'density':1.0
        }
        this.r = r;
        this.image = loadImage("paper.png"); 
        this.body = Bodies.circle(x, y,(this.r-20)/2, options);
        World.add(world, this.body);
      }
      display(){
        push();
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }    
}