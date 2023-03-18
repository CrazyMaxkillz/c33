class Candy {
  constructor(x, y, w, h, img) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.image = img;

    this.body = Bodies.rectangle(x, y, w, h);
    World.add(world, this.body);
  }

  overlap(x2, y2, w2, h2) {
    var x1 = this.body.position.x;
    var y1 = this.body.position.y;
    var w1 = this.w;
    var h1 = this.h;

    if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2) {
      return false;
    }
    return true;
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.w / 2, this.h);
    pop();
  }
}
