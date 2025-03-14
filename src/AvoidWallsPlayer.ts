import Player from "./Player";
import SnakeController from "./SnakeController";

class AvoidWallsPlayer extends Player {
    constructor (sc: SnakeController) {
        super(sc);
    }
    public makeTurn() {
        const snakePosition_ = this.sc.snakePosition;
        const snakeDirection_ = this.sc.snakeDirection;
        const worldWidth_ = this.sc.worldWidth;
        const worldHeight_ = this.sc.worldHeight;
        if (snakeDirection_ === 'left' && snakePosition_.x === 0 && snakePosition_.y >= worldHeight_ / 2) {
            this.sc.turnSnakeRight();
        } else if (snakeDirection_ === 'left' && snakePosition_.x === 0) {
            this.sc.turnSnakeLeft();
        }
        if (snakeDirection_ === 'right' && snakePosition_.x === worldWidth_ - 1 && snakePosition_.y >= worldHeight_ / 2) {
            this.sc.turnSnakeLeft();
        } else if (snakeDirection_ === 'right' && snakePosition_.x === worldWidth_ - 1) {
            this.sc.turnSnakeRight();
        }
        if (snakeDirection_ === 'up' && snakePosition_.x >= worldWidth_ / 2 && snakePosition_.y === 0) {
            this.sc.turnSnakeLeft();
        } else if (snakeDirection_ === 'up' && snakePosition_.y === 0) {
            this.sc.turnSnakeRight();
        }
        if (snakeDirection_ === 'down' && snakePosition_.x >= worldWidth_ / 2 && snakePosition_.y === worldHeight_ - 1) {
            this.sc.turnSnakeRight();
        } else if (snakeDirection_ === 'down' && snakePosition_.y === worldHeight_ - 1) {
            this.sc.turnSnakeLeft();
        }
    }
}

export default AvoidWallsPlayer;