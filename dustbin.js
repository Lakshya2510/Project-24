class Dustbin {
    constructor(x, y, width, height) {

      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      strokeWeight (4);
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
