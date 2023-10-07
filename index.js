let angle;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('container'); // Set the canvas to be a child of the 'container' div
    angle = PI / 4;
}

function draw() {
    background(0);
    stroke(128, 0, 255);
    translate(width / 2, height);
    angle = map(cos(frameCount * 0.01), -1, 1, PI / 2, PI / 16);
    branch(200, color(128, 0, 255));
}

function branch(len, branchColor) {
    stroke(branchColor);
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 5) {
        push();
        rotate(-angle);
        branch(len * 0.7, lerpColor(branchColor, color(255), 0.1));
        pop();
        push();
        rotate(angle);
        branch(len * 0.7, lerpColor(branchColor, color(255), 0.1));
        pop();
    }
}
