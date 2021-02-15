class Ball extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
  display(){
      ellipse(0,0,this.width,this.height)
  }
  };