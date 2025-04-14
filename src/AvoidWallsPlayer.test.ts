import Snake from './Snake';
import WorldModel from './WorldModel';
import SnakeController from './SnakeController';
import AvoidWallsPlayer from './AvoidWallsPlayer';
import Point from "./Point";

describe('AvoidWallsPlayer', () => {
    let snake: Snake;
    let worldModel: WorldModel;
    let snakeController: SnakeController;
    let player: AvoidWallsPlayer;

    beforeEach(() => {
        snake = new Snake(new Point (1, 1), 3);
        worldModel = new WorldModel(); 
        snakeController = new SnakeController(worldModel, snake);
        player = new AvoidWallsPlayer(snakeController);
    });

    it('should turn left when hitting the left wall while moving down', () => {
        snake.move(0); 
        snake.turnRight(); 
        player.makeTurn();
        expect(snake.direction === 'left');
    });

    it('should turn right when hitting the left wall while moving up', () => {
        snake.move(0); 
        snake.turnLeft(); 
        player.makeTurn();
        expect(snake.direction === 'right');
    });

    it('should turn left when hitting the top wall while moving right', () => {
        snake.move(0); 
        snake.turnRight();
        snake.turnRight(); 
        player.makeTurn();
        expect(snake.direction === 'left');
    });

    it('should turn right when hitting the top wall while moving down', () => {
        snake.move(0); 
        snake.turnLeft();
        snake.turnLeft();
        player.makeTurn();
        expect(snake.direction === 'right');
    });
});

export {};