import Snake from "./Snake";
import IWorldView from "./IWorldView";

class WorldModel {
    private snake_: Snake;
    private width_: number;
    private height_: number;
    private worldView_: IWorldView | null = null;
    //Takes snake as parameter
    constructor(snake: Snake, width: number, height: number) {
        this.snake_ = snake;
        this.width_ = width;
        this.height_ = height;
    }
    public set view(worldView: IWorldView) {
        this.worldView_ = worldView;
    }
    //Updates the snake's position
    update(steps: number) {
        this.snake_.move(steps);
        if (this.worldView_ !== null) {
            this.worldView_.display(this);
        }
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