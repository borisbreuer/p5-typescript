import p5 from 'p5';

export default class Walker {
    p: p5;
    pos: p5.Vector;

    constructor(p: p5, x: number, y: number) {
        this.p = p;
        this.pos = p.createVector(x, y);
    }

    update() {
        this.pos.x += this.p.random(-1, 1);
        this.pos.y += this.p.random(-1, 1);
    }

    show() {
        this.p.stroke(200);
        this.p.strokeWeight(2);
        this.p.point(this.pos.x, this.pos.y);
    }
}
