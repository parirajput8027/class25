class Bird extends BaseClass {
    constructor(x, y) {
      
      super(x,y,50,50)
      //overriding the image property
      this.image = loadImage("sprites/bird.png")
     
      
    };
    display(){
      
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
     super.display()
     
    };
  };
  