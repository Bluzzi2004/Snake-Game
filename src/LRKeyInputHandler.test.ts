import LRKeyInputHandler from './LRKeyInputHandler';

describe('LRKeyInputHandler', () => {
    let inputHandler: LRKeyInputHandler;

    beforeEach(() => {
        inputHandler = new LRKeyInputHandler();
        jest.clearAllMocks();
    });

    test('should register left arrow key press', () => {
        const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
        window.dispatchEvent(event);
        expect(inputHandler.madeLeftMove()).toBe(true);
    });

    test('should register right arrow key press', () => {
        const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
        window.dispatchEvent(event);
        expect(inputHandler.madeRightMove()).toBe(true);
    });

    test('should reset left move', () => {
        const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
        window.dispatchEvent(event);
        inputHandler.resetLeftMove();
        expect(inputHandler.madeLeftMove()).toBe(false);
    });

    test('should reset right move', () => {
        const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
        window.dispatchEvent(event);
        inputHandler.resetRightMove();
        expect(inputHandler.madeRightMove()).toBe(false);
    });
});
