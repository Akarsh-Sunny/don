class bird {
    constructor(x, y, width, height) {
      var options = {
        'restitution':0.8,
          'friction':1.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      pos.x=world.mouseX;
      pos.y=world.mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
  
  
      rectMode(CENTER);
      
      strokeWeight(2);
      stroke("grey");
      fill("red");
      rect(0, 0 ,this.width, this.height);
      pop();
    }
  };