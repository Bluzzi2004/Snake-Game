import WorldModel from "./WorldModel";
import Snake from "./Snake";

class SnakeController {
    private snakeWorld_: WorldModel;
    private slitherer_: Snake;
    constructor(snakeWorld: WorldModel, slitherer: Snake) {
        this.snakeWorld_ = snakeWorld;
        this.slitherer_ = slitherer;
    }
    public turnSnakeLeft() {
        this.slitherer_.turnLeft();
    }
    public turnSnakeRight() {
        this.slitherer_.turnRight();
    }
    public get snakePosition() {
        return this.slitherer_.position;
    }
    public get snakeDirection() {
        return this.slitherer_.direction;
    }
    public get worldWidth() {
        return this.snakeWorld_.width;
    }
    public get worldHeight() {
        return this.snakeWorld_.height;
    }
}

export default SnakeController;