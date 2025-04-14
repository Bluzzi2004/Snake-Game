import IWorldView from "./IWorldView"
import WorldModel from "./WorldModel"

class CanvasWorldView implements IWorldView {
    private scalingFactor_: number;
    private worldCanvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    constructor(scalingFactor: number) {
        this.scalingFactor_ = scalingFactor;
        this.worldCanvas = document.createElement("canvas");
        this.context = this.worldCanvas.getContext("2d")!;
        document.body.appendChild(this.worldCanvas);
    }
    display(worldModel: WorldModel): void {
        this.worldCanvas.width = worldModel.width * this.scalingFactor_;
        this.worldCanvas.height = worldModel.height * this.scalingFactor_;
        worldModel.allSnakes.forEach(snake => {
          snake.allParts.forEach(part => {
            this.context.fillRect(part.x * this.scalingFactor_, part.y * this.scalingFactor_, this.scalingFactor_, this.scalingFactor_);
          })
        })
    }
    getCanvas(): HTMLCanvasElement {
    return this.worldCanvas;
  }

    getContext(): CanvasRenderingContext2D {
    return this.context;
  }
}
export default CanvasWorldView