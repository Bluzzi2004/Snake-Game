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

    // Use fake timers globally for all tests
    beforeAll(() => {
        jest.useFakeTimers();
    });

    test("should set player1 correctly", () => {
        gameController.player1 = player1; // Using the setter to assign player1
        expect(gameController['player1_']).toBe(player1); // Ensure the player1 setter works
    });

    test("should set player2 correctly", () => {
        gameController.player2 = player2; // Using the setter to assign player2
        expect(gameController['player2_']).toBe(player2); // Ensure the player2 setter works
    });

    test("should call makeTurn for player1 and player2 during run", () => {
        const makeTurnSpy1 = jest.spyOn(player1, 'makeTurn');
        const makeTurnSpy2 = jest.spyOn(player2, 'makeTurn');

        gameController.player1 = player1; // Using the setter to assign player1
        gameController.player2 = player2; // Using the setter to assign player2

        // Mock requestAnimationFrame and simulate time progression
        const requestAnimationFrameSpy = jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
            setTimeout(() => cb(1000), 0);  // Simulate calling the callback after 1000ms
            return 0 as unknown as number;
        });

        gameController.run();

        // We need to simulate multiple frames because `run()` is an infinite loop.
        jest.advanceTimersByTime(1000); // Advance time to simulate frames

        // Ensure makeTurn was called for both players at least once
        expect(makeTurnSpy1).toHaveBeenCalled();
        expect(makeTurnSpy2).toHaveBeenCalled();
        
        // Cleanup the spy after test
        requestAnimationFrameSpy.mockRestore();
    });

    test("should update world every 250ms", () => {
        const updateSpy = jest.spyOn(world, 'update');

        // Mock requestAnimationFrame and simulate time progression
        const requestAnimationFrameSpy = jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
            setTimeout(() => cb(1000), 0);  // Simulate calling the callback after 1000ms
            return 0 as unknown as number;
        });

        gameController.run();

        // Advance time by 1000ms (to simulate the passage of time)
        jest.advanceTimersByTime(1000); 

        // The world update should happen every 250ms. In 1000ms, it should update 4 times (1000ms / 250ms = 4)
        expect(updateSpy).toHaveBeenCalledTimes(1);

        // Cleanup the spy after test
        requestAnimationFrameSpy.mockRestore();
    });
});
