class Link {
    constructor(node1, node2) {
        if (new .target === Link) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }

        this.firstNode = node1;
        this.secondNode = node2;
    }

    draw() {
        this.firstNode.draw();
        this.secondNode.draw();
        
        stroke(255);
        line(this.firstNode.position.x, this.firstNode.position.y, this.secondNode.position.x, this.secondNode.position.y);
    }
}