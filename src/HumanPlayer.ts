import Player from "./Player"
import SnakeController from "./SnakeController"
import IInputHandler from "./IInputHandler"

class HumanPlayer extends Player {
    private snakeController_: SnakeController;
    private inputHandler_: IInputHandler;
    constructor(snakeController: SnakeController, inputHandler: IInputHandler) {
        super(snakeController);
        this.snakeController_ = snakeController;
        this.inputHandler_ = inputHandler;
    }
    makeTurn(): void {
        if (this.inputHandler_.madeLeftMove()) {
            this.snakeController_.turnSnakeLeft();
            this.inputHandler_.resetLeftMove();
        }
        else if (this.inputHandler_.madeRightMove()) {
            this.snakeController_.turnSnakeRight();
            this.inputHandler_.resetRightMove();
        }
    }
}

export default HumanPlayer