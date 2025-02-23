import SnakeController from "./SnakeController";

abstract class Player {
    public sc: SnakeController;
    constructor(controller: SnakeController) {
        this.sc = controller;
    }
    public abstract makeTurn(): void;
}

export default Player;