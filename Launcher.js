class Launcher{
    constructor(x,y,width,height) {
        var options = {
            isStatic:true,
              'restitution':0.8,
              'friction':0.3,
              'density':1.0
      
    }
    this.body =Bodies.launcher(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }

    }

