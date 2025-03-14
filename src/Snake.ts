import Point from "./Point";

// place your code on line 5 above the export statement below

//Class representing the snake
class Snake {
  private currentPosition: Point;
  private currentDirection: 'up'|'down'|'left'|'right';
  constructor() {
    this.currentPosition = new Point(0, 0);
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
    if (this.currentDirection === 'right') {
      this.currentPosition = new Point(this.currentPosition.x + steps, this.currentPosition.y);
    }
    else if (this.currentDirection === 'left') {
      this.currentPosition = new Point(this.currentPosition.x - steps, this.currentPosition.y);
    }
    else if (this.currentDirection === 'up') {
      this.currentPosition = new Point(this.currentPosition.x, this.currentPosition.y - steps);
    }
    else if (this.currentDirection === 'down') {
      this.currentPosition = new Point(this.currentPosition.x, this.currentPosition.y + steps);
    }
  }
  //Retrives the x and y position
  public get position() {
    return this.currentPosition;
  }
  //Retrives the direction that is being faced
  public get direction() {
    return this.currentDirection;
  }
  //Retrives the position on the x axis
  public get xcoord() {
    return this.currentPosition.x;
  }
  //Retrives the position on the y axis
  public get ycoord() {
    return this.currentPosition.y;
  }
  /**
   * @deprecated
   */
  /**public turn()*/ 
    // Deprecated method
} 

export default Snake;