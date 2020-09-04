class Bob {
    constructor(x, y, radius) {
        var ball_options ={
            isStatic:false,
            restitution:1,
            friction:0.1,
            density:0.5,
         }
      
      this.ball = Bodies.circle(x, y, radius, ball_options);
      this.radius=radius;
      World.add(world, this.ball);
      
    }
    display(){
     fill("turquoise")
      ellipseMode(RADIUS);
      
      ellipse(this.ball.position.x,this.ball.position.y,this.radius,this.radius);
      
    }
    
}
