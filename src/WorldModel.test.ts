import WorldModel from "./WorldModel";
import Snake from "./Snake";
import Point from "./Point";

describe('WorldModel', () => {
  let snake: Snake;
  let worldModel: WorldModel;

  beforeEach(() => {
    // Initialize the snake with a starting point and size of 3
    snake = new Snake(new Point(0, 0), 3);
    worldModel = new WorldModel();
    worldModel.addSnake(snake); // Add the snake to the world model
  });

  test('should move the snake correctly', () => {
    // Move the snake 5 steps in its current direction (initially 'right')
    worldModel.update(5);
    expect(snake.xcoord).toBe(5); // Snake should have moved 5 units along the x-axis
    expect(snake.ycoord).toBe(0); // Y-coordinate should remain 0
  });

  test('should turn the snake left and move', () => {
    // Turn the snake left (initially moving 'right', it will turn 'up')
    snake.turnLeft();
    // Move the snake 3 steps in the 'up' direction
    worldModel.update(3);
    expect(snake.xcoord).toBe(0); // X-coordinate should remain 0
    expect(snake.ycoord).toBe(-3); // Snake should move up 3 units
  });

  test('should turn the snake right and move', () => {
    // Turn the snake right (initially moving 'right', it will turn 'down')
    snake.turnRight();
    // Move the snake 2 steps in the 'down' direction
    worldModel.update(2);
    expect(snake.xcoord).toBe(0); // X-coordinate should remain 0
    expect(snake.ycoord).toBe(2); // Snake should move down 2 units
  });
});
