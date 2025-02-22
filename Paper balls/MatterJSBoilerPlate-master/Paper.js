class Paper{
    constructor(x,y,r){
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        this.image = loadImage("images/paperr.png");
        World.add(world, this.body);
    }
        display(){
            var ppos = this.body.position;
            push();
            translate(ppos.x, ppos.y);
            rectMode(CENTER);
            ellipse(0, 0, this.r, this.r);
            imageMode(CENTER);
            image(this.image, 0, 0, 30, 30);
            pop();
      }
  }