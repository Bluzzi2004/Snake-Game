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
}

export default Point;