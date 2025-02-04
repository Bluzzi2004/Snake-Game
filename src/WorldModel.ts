import Snake from "./Snake";

class WorldModel {
    private snake: Snake;
    //Takes snake as parameter
    constructor(snake: Snake) {
        this.snake = snake;
    }
    //Updates the snake's position
    update(steps: number) {
        this.snake.move(steps);
    }
    //Retrieve the snake
    public getSnake(): Snake {
        return this.snake;
    }
}

export default WorldModel;