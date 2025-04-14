/**Class representing a point*/
class Point {
    private xcoord: number;
    private ycoord: number;
    /**Creates x and y  coordinates*/
    constructor(x: number, y: number) {
        this.xcoord = x;
        this.ycoord = y;
    }
    /**X coordinate*/
    get x(): number {
        return this.xcoord;
    }
    /**Y coordinate*/
    get y(): number {
        return this.ycoord;
    }
    toString() {
        return '('+this.x+','+this.y+')';
    }
    /**Checks if the two points are equal*/
    equals(p: Point): boolean {
        return this.x === p.x && this.y === p.y
    }
}

export default Point;