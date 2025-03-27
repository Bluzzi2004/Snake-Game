import WorldModel from "./WorldModel"
import Player from "./Player"

class GameController {
    private world_: WorldModel;
    private player1_: Player | null = null;
    private player2_: Player | null = null;
    constructor(world: WorldModel) {
        this.world_ = world;
    }
    set player1(player: Player) {
        this.player1_ = player;
    }
    set player2(player: Player) {
        this.player2_ = player;
    }
    //Update this to not use performance.now, so it takes an input
    run(): void {
        let lastTime = 0
        const updateFrame = (currentTime: number): void => {
            const elapsedTime = currentTime - lastTime
            if (this.player1_) this.player1_.makeTurn();
            if (this.player2_) this.player2_.makeTurn();
            if (elapsedTime >= 250) {
                this.world_.update(1);
                lastTime = currentTime;
            }
            requestAnimationFrame(updateFrame);
        }
        requestAnimationFrame(updateFrame);
    }
}

export default GameController