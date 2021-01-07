class Dustbin {
    constructor(x, y, width, height) {

      var options = {
        isStatic: true
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      this.bin = loadImage("dustbin.png");
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
      
      imageMode(CENTER);
      image(this.bin,900,565,200,200)

    }
  };


