import "./App.css";
import { useEffect } from "react";
import Display from "./ConsoleDisplay";
import display from "./display";
import Snake from "./Snake";
import WorldModel from "./WorldModel";
import canvasWorldView from "./CanvasWorldView";
import SnakeController from "./SnakeController";
import AvoidWallsPlayer from "./AvoidWallsPlayer";
import LRKeyInputHandler from "./LRKeyInputHandler";
import HumanPlayer from "./HumanPlayer";
import GameController from "./GameController";

export default function App() {
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("Where will the snakes go?");
    const worldSnake = new Snake();
    const worldModel = new WorldModel(worldSnake, 50, 50);
    const CanvasWorldView = new canvasWorldView(10)
    worldModel.view = CanvasWorldView;
    worldModel.update(0);
    const snakeController = new SnakeController(worldModel, worldSnake);
    const inputHandler = new LRKeyInputHandler();
    const humanPlayer = new HumanPlayer(snakeController, inputHandler);
    const avoidWallsPlayer = new AvoidWallsPlayer(snakeController);
    const gameController = new GameController(worldModel);
    gameController.setPlayer1(humanPlayer);
    gameController.setPlayer2(avoidWallsPlayer);
    gameController.run();
    display("The World Snake's current position is",worldSnake.position);
  }, []);
  return (
    <div className="App">
      <h1>Snake Game!</h1>
      <h2>My project for CIS-2350-01!</h2>
      <Display />
    </div>
  );
}