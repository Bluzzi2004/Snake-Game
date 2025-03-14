import WorldModel from "./WorldModel"
import Player from "./Player"

class GameController {
    private world_: WorldModel;
    private player1_: Player | null = null;
    private player2_: Player | null = null;
    constructor(world: WorldModel) {
        this.world_ = world;
    }
    setPlayer1(player: Player): void {
        this.player1_ = player;
    }
    setPlayer2(player: Player): void {
        this.player2_ = player;
    }
    run(): void {
        let lastTime = 0
        const updateFrame = () => {
            if (this.player1_) this.player1_.makeTurn();
            if (this.player2_) this.player2_.makeTurn();
            const currentTime = performance.now();
            const elapsedTime = currentTime -lastTime;
            if (elapsedTime > 250) {
                this.world_.update(1);
                lastTime = lastTime + 250;
            }
            requestAnimationFrame(updateFrame);
        }
        requestAnimationFrame(updateFrame);
    }
}

export default GameController