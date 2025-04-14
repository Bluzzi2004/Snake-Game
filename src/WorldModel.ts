import Snake from "./Snake";
import IWorldView from "./IWorldView";

class WorldModel {
    private allSnakes_: Snake[] = [];
    private width_: number;
    private height_: number;
    private allViews_: IWorldView[] = [];
    constructor() {
        this.width_ = 50;
        this.height_ = 50;
    }
    public addSnake(s: Snake) {
        this.allSnakes_.push(s);
    }
    public addView(v: IWorldView) {
        this.allViews_.push(v);
    }
    public get allSnakes(): Snake[] {
        return this.allSnakes_;
    }
    //Updates the snake's position
    update(steps: number) {
        this.allSnakes_.forEach(snake => snake.move(steps));
        const collidedSnakes: Snake[] = [];
        for (let i = 0; i < this.allSnakes_.length; i++) {
            for (let j = i + 1; j < this.allSnakes.length; j++) {
                if (!collidedSnakes.includes(this.allSnakes_[i])) {
                    collidedSnakes.push(this.allSnakes_[i]);
                }
                else if (!collidedSnakes.includes(this.allSnakes_[j])) {
                    collidedSnakes.push(this.allSnakes_[j]);
                }
            }
        }
        collidedSnakes.forEach(snake => {
            const index = this.allSnakes_.indexOf(snake);
            if (index > -1) {
                this.allSnakes_.splice(index, 1);
            }
        })
        this.allViews_.forEach(view => {
            if (view !== null) {
                view.display(this);
            }
        })
    }
    //Retrieve the snake
    public get width(): number {
        return this.width_;
    }
    public get height(): number {
        return this.height_;
    }
}

export default WorldModel;