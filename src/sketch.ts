import p5 from 'p5';
import Walker from './Walker';

let walker: Walker;

export const sketch = (p: p5) => {
    p.setup = () => {
        p.createCanvas(400, 400, 'p2d');
        p.background(10);
        walker = new Walker(p, p.width / 2, p.height / 2);
    };

    p.draw = () => {
        walker.show();
        walker.update();
    };
};
