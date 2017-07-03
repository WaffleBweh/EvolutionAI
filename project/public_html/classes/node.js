class Node {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.radius = 30;
    }

    draw() {
        noFill();
        stroke(255, 255, 255);
        ellipse(this.position.x, this.position.y, this.radius, this.radius);
    }
}