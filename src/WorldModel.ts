import Snake from "./Snake";

class WorldModel {
    private snake_: Snake;
    private width_: number;
    private height_: number;
    //Takes snake as parameter
    constructor(snake: Snake, width: number, height: number) {
        this.snake_ = snake;
        this.width_ = width;
        this.height_ = height;
    }
    //Updates the snake's position
    update(steps: number) {
        this.snake_.move(steps);
    }
    //Retrieve the snake
    public get snake(): Snake {
        return this.snake_;
    }
    public get width(): number {
        return this.width_;
    }
    public get height(): number {
        return this.height_;
    }
}

export default WorldModel;