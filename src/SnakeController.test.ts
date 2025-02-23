import SnakeController from "./SnakeController";
import Snake from "./Snake";
import WorldModel from "./WorldModel";

describe("SnakeController", () => {
    let snakeWorld: WorldModel;
    let snake: Snake;
    let snakeController: SnakeController;

    beforeEach(() => {
        snakeWorld = new WorldModel(snake, 10, 10);
        snake = new Snake();
        snakeController = new SnakeController(snakeWorld, snake);
    });

    test("should turn snake left", () => {
        const initialDirection = snakeController.snakeDirection;
        snakeController.turnSnakeLeft();
        expect(snakeController.snakeDirection).not.toBe(initialDirection);
    });

    test("should turn snake right", () => {
        const initialDirection = snakeController.snakeDirection;
        snakeController.turnSnakeRight();
        expect(snakeController.snakeDirection).not.toBe(initialDirection);
    });

    test("should return snake position", () => {
        expect(snakeController.snakePosition).toEqual(snake.position);
    });

    test("should return world width", () => {
        expect(snakeController.worldWidth).toBe(snakeWorld.width);
    });

    test("should return world height", () => {
        expect(snakeController.worldHeight).toBe(snakeWorld.height);
    });
});

export {};