class Ground1{
constructor(){
    var options={
        isStatic:true
    }
    this.body = Bodies.rectangle(200,390,400,20,options)
    this.width = 400;
    this.height = 20;
    World.add(myworld, this.body);
}

display(){
        
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height)

}
}

