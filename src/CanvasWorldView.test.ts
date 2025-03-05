import CanvasWorldView from './CanvasWorldView';
import WorldModel from './WorldModel';
import Snake from './Snake';

describe("CanvasWorldView", () => {
    let canvasWorldView: CanvasWorldView;
    let worldModel: WorldModel;
    const subSnake = new Snake();

    beforeEach(() => {
        const canvasMock = document.createElement("canvas");
        const contextMock: Partial<CanvasRenderingContext2D> = {
            fillStyle: "",
            fillRect: jest.fn(),
        };
        canvasMock.getContext = jest.fn().mockReturnValue(contextMock);
        canvasWorldView = new CanvasWorldView(2);
        canvasWorldView['worldCanvas'] = canvasMock;
        canvasWorldView['context'] = contextMock as CanvasRenderingContext2D;
        worldModel = new WorldModel(subSnake, 100, 100);
    });

    test("should create a canvas element", () => {
        expect(canvasWorldView.getCanvas()).toBeInstanceOf(HTMLCanvasElement);
    });

    test("should set canvas dimensions based on world model", () => {
        canvasWorldView.display(worldModel);
        expect(canvasWorldView.getCanvas().width).toBe(200);
        expect(canvasWorldView.getCanvas().height).toBe(200);
    });

    test("should fill the canvas with cyan color", () => {
        const spy = jest.spyOn(canvasWorldView.getContext(), 'fillRect');
        canvasWorldView.display(worldModel);
        expect(spy).toHaveBeenCalledWith(0, 0, 200, 200);
        expect(canvasWorldView.getContext().fillStyle).toBe('cyan');
    });
});
