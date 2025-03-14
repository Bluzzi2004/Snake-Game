import GameController from "./GameController";
import Snake from "./Snake";
import SnakeController from "./SnakeController";
import WorldModel from "./WorldModel";
import Player from "./Player";

// Concrete subclass of Player for testing
class TestPlayer extends Player {
    constructor(controller: SnakeController) {
        super(controller);
    }

    // Implement the abstract method makeTurn
    makeTurn(): void {
        // Simple implementation for testing (you can replace this with any mock behavior)
    }
}

describe("GameController", () => {
    let world: WorldModel;
    let player1: TestPlayer;
    let player2: TestPlayer;
    let gameController: GameController;
    let testSnake: Snake;
    let testController: SnakeController;

    beforeEach(() => {
        world = new WorldModel(new Snake(), 10, 10); // Initialize world with a new Snake
        testSnake = new Snake(); // Initialize testSnake
        testController = new SnakeController(world, testSnake); // Initialize testController
        player1 = new TestPlayer(testController);  // Instantiate the concrete TestPlayer class
        player2 = new TestPlayer(testController);  // Instantiate the concrete TestPlayer class
        gameController = new GameController(world);
    });

    test("should set player1 correctly", () => {
        gameController.setPlayer1(player1);
        expect(gameController['player1_']).toBe(player1);
    });

    test("should set player2 correctly", () => {
        gameController.setPlayer2(player2);
        expect(gameController['player2_']).toBe(player2);
    });

    test("should call makeTurn for player1 and player2 during run", () => {
        const makeTurnSpy1 = jest.spyOn(player1, 'makeTurn');
        const makeTurnSpy2 = jest.spyOn(player2, 'makeTurn');

        gameController.setPlayer1(player1);
        gameController.setPlayer2(player2);
        jest.useFakeTimers();
        gameController.run();

        jest.advanceTimersByTime(1000); // Advance time to simulate frames
        expect(makeTurnSpy1).toHaveBeenCalled();
        expect(makeTurnSpy2).toHaveBeenCalled();
    });

    test("should update world every 250ms", () => {
        const updateSpy = jest.spyOn(world, 'update');

        jest.useFakeTimers();
        gameController.run();

        jest.advanceTimersByTime(1000); // Advance time to simulate frames
        expect(updateSpy).toHaveBeenCalledTimes(7); // 1000ms / 250ms = 7 updates
    });
});
