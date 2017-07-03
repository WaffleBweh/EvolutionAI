function setup() {
    createCanvas(800, 600);
    ellipseMode(RADIUS);
}

function draw() {
    background(50, 50, 50);
    noStroke();

    var node1 = new Node(width / 2, height / 2);
    var node2 = new Node(200, height / 2);
    var bone = new Bone(node1, node2);
    bone.draw();
}