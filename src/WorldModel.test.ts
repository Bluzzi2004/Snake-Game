import WorldModel from "./WorldModel";
import Snake from "./Snake";

describe('WorldModel', () => {
  let snake: Snake;
  let worldModel: WorldModel;

  beforeEach(() => {
    snake = new Snake();
    worldModel = new WorldModel(snake, 100, 100);
  });

  test('should move the snake correctly', () => {
    worldModel.update(5);
    expect(snake.xcoord).toBe(5);
    expect(snake.ycoord).toBe(0);
  });

  test('should turn the snake left and move', () => {
    snake.turnLeft();
    worldModel.update(3);
    expect(snake.xcoord).toBe(0);
    expect(snake.ycoord).toBe(-3);
  });

  test('should turn the snake right and move', () => {
    snake.turnRight();
    worldModel.update(2);
    expect(snake.xcoord).toBe(0);
    expect(snake.ycoord).toBe(2);
  });
});

export {};