import Player from "./Player"
import SnakeController from "./SnakeController"
import IInputHandler from "./IInputHandler"

class HumanPlayer extends Player {
    private inputHandler_: IInputHandler;
    constructor(sc: SnakeController, inputHandler: IInputHandler) {
        super(sc);
        this.inputHandler_ = inputHandler;
    }
    makeTurn(): void {
        if (this.inputHandler_.madeLeftMove()) {
            this.sc.turnSnakeLeft();
            this.inputHandler_.resetLeftMove();
        }
        else if (this.inputHandler_.madeRightMove()) {
            this.sc.turnSnakeRight();
            this.inputHandler_.resetRightMove();
        }
    }
}

export default HumanPlayer