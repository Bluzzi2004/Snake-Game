import CanvasWorldView from './CanvasWorldView';
import WorldModel from './WorldModel';

describe("CanvasWorldView", () => {
    let canvasWorldView: CanvasWorldView;
    let worldModel: WorldModel;

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
        worldModel = new WorldModel();
    });

    test("should create a canvas element", () => {
        expect(canvasWorldView.getCanvas()).toBeInstanceOf(HTMLCanvasElement);
    });

    test("should set canvas dimensions based on world model", () => {
        canvasWorldView.display(worldModel);
        expect(canvasWorldView.getCanvas().width).toBe(100);
        expect(canvasWorldView.getCanvas().height).toBe(100);
    });
});