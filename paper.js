class Paper {
    constructor(x, y, r) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1
        }

        this.x=x;
        this.y=y;
        this.r=r

        this.body = Bodies.circle( this.x, this.y, this.r, options);
        World.add(world,this.body);
        this.paper = loadImage("paper.png");

      }
      display(){
        var pos =this.body.position;
        
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER)
        fill(225,225,225)
        ellipse( 0,0,this.r);
        pop();
        imageMode(CENTER)
        image(this.paper,pos.x,pos.y,80,80)
      }
      
    };
