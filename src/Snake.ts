import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: number;
  private currentDirection: number;
  constructor() {
    this.currentPosition = 0;
    this.currentDirection = 1; //The snake is initially facing forward
  }
  public move(squares: number) {
    if (this.currentDirection == 1) {
      this.currentPosition = this.currentPosition + squares;
  }
    else {
      this.currentPosition = this.currentPosition - squares;
  }
    display("The snake has moved to square: " + this.currentPosition);
  }
  public turn() {
    if (this.currentDirection == 1) {
      this.currentDirection = -1; //Turn backwards
  }
    else {
      this.currentDirection = 1; //Turn forward
  }
    display("The snake has turned. Current direction: " + this.currentDirection);
  }
  public get position() {
    return this.currentPosition;
  }
}

export default Snake;
