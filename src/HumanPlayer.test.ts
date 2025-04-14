import HumanPlayer from "./HumanPlayer";
import SnakeController from "./SnakeController";
import IInputHandler from "./IInputHandler";
import WorldModel from "./WorldModel";
import Snake from "./Snake";
import Point from "./Point";

describe("HumanPlayer", () => {
    let snakeController: SnakeController;
    let inputHandler: IInputHandler;
    let player: HumanPlayer;
    let testModel: WorldModel;
    let testSnake: Snake;

    beforeEach(() => {
        testModel = new WorldModel(); // Instantiate WorldModel
        testSnake = new Snake(new Point(1, 1), 3); // Instantiate Snake
        snakeController = new SnakeController(testModel, testSnake);
        
        // Mocking the turnSnakeLeft and turnSnakeRight methods
        snakeController.turnSnakeLeft = jest.fn();
        snakeController.turnSnakeRight = jest.fn();

        inputHandler = {
            madeLeftMove: jest.fn(),
            madeRightMove: jest.fn(),
            resetLeftMove: jest.fn(),
            resetRightMove: jest.fn(),
        } as unknown as IInputHandler;

        player = new HumanPlayer(snakeController, inputHandler);
    });

    test("should turn snake left when left move is made", () => {
        // Arrange: Mock madeLeftMove to return true
        (inputHandler.madeLeftMove as jest.Mock).mockReturnValue(true);
        
        // Act: Call makeTurn
        player.makeTurn();

        // Assert: turnSnakeLeft should be called on snakeController
        expect(snakeController.turnSnakeLeft).toHaveBeenCalled();
        expect(inputHandler.resetLeftMove).toHaveBeenCalled();
    });

    test("should turn snake right when right move is made", () => {
        // Arrange: Mock madeRightMove to return true
        (inputHandler.madeRightMove as jest.Mock).mockReturnValue(true);
        
        // Act: Call makeTurn
        player.makeTurn();

        // Assert: turnSnakeRight should be called on snakeController
        expect(snakeController.turnSnakeRight).toHaveBeenCalled();
        expect(inputHandler.resetRightMove).toHaveBeenCalled();
    });

    test("should not turn snake if no moves are made", () => {
        // Arrange: Mock neither madeLeftMove nor madeRightMove to return true
        (inputHandler.madeLeftMove as jest.Mock).mockReturnValue(false);
        (inputHandler.madeRightMove as jest.Mock).mockReturnValue(false);
        
        // Act: Call makeTurn
        player.makeTurn();

        // Assert: Neither turnSnakeLeft nor turnSnakeRight should be called
        expect(snakeController.turnSnakeLeft).not.toHaveBeenCalled();
        expect(snakeController.turnSnakeRight).not.toHaveBeenCalled();
        expect(inputHandler.resetLeftMove).not.toHaveBeenCalled();
        expect(inputHandler.resetRightMove).not.toHaveBeenCalled();
    });
});