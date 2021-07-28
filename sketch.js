function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(collide(fruit,bunny,80)==true)
  {
    remove_rope();
    bubble.visible = false;
      World.remove(engine.world,fruit);
      fruit = null;
      bunny.changeAnimation('eating');
  }
}