import Point from "./Point";

// place your code on line 5 above the export statement below

//Class representing the snake
class Snake {
  private currentParts: Point[];
  private currentDirection: 'up'|'down'|'left'|'right';
  constructor(startPosition: Point, size: number) {
    this.currentParts = [startPosition];
    for (let i = 1; i < size; i++) {
      this.currentParts.push(new Point(startPosition.x - i, startPosition.y))
    }
    this.currentDirection = 'right'; //The snake is initially facing right
  }
  //Method for turning left
  public turnLeft() {
    if (this.currentDirection === 'right') {
      this.currentDirection = 'up';
    }
    else if (this.currentDirection === 'up') {
      this.currentDirection = 'left';
    }
    else if (this.currentDirection === 'left') {
      this.currentDirection = 'down';
    }
    else if (this.currentDirection === 'down') {
      this.currentDirection = 'right';
    }
  }
  //Method for turning right
  public turnRight() {
    if (this.currentDirection === 'right') {
      this.currentDirection = 'down';
    }
    else if (this.currentDirection === 'down') {
      this.currentDirection = 'left';
    }
    else if (this.currentDirection === 'left') {
      this.currentDirection = 'up';
    }
    else if (this.currentDirection === 'up') {
      this.currentDirection = 'right';
    }
  }
  //Method for moving
  public move(steps: number) {
    for (let i = this.currentParts.length - 1; i > 0; i--) {
      this.currentParts[i] = this.currentParts[i - 1]
    }
    if (this.currentDirection === 'right') {
      this.currentParts[0] = new Point(this.currentParts[0].x + steps, this.currentParts[0].y);
    }
    else if (this.currentDirection === 'left') {
      this.currentParts[0] = new Point(this.currentParts[0].x - steps, this.currentParts[0].y);
    }
    else if (this.currentDirection === 'up') {
      this.currentParts[0] = new Point(this.currentParts[0].x, this.currentParts[0].y - steps);
    }
    else if (this.currentDirection === 'down') {
      this.currentParts[0] = new Point(this.currentParts[0].x, this.currentParts[0].y + steps);
    }
  }
  //Retrives the x and y position
  public get position() {
    return this.currentParts[0];
  }
  //Retrives the direction that is being faced
  public get direction() {
    return this.currentDirection;
  }
  //Retrives the position on the x axis
  public get xcoord() {
    return this.currentParts[0].x;
  }
  //Retrives the position on the y axis
  public get ycoord() {
    return this.currentParts[0].y;
  }
  //Retrieve all parts of the snake
  public get allParts() {
    return this.currentParts;
  }
  public didCollide(s: Snake): boolean {
    const head = this.currentParts[0];
    return s.allParts.slice(1).some(part => part.equals(head)) || this.allParts.slice(1).some(part => part.equals(head));
  }
  /**
   * @deprecated
   */
  /**public turn()*/ 
    // Deprecated method
} 

export default Snake;