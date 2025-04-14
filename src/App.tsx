import "./App.css";
import { useEffect } from "react";
import Display from "./ConsoleDisplay";
import display from "./display";
import Point from "./Point";
import Snake from "./Snake";
import WorldModel from "./WorldModel";
import CanvasWorldView from "./CanvasWorldView";
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
    const world = new WorldModel();
    const startingPoint = new Point(0, 0);
    const snake = new Snake(startingPoint, 5);
    world.addSnake(snake);
    const canvasView = new CanvasWorldView(10);
    world.addView(canvasView);
    const snakeController = new SnakeController(world, snake);
    const Player = new AvoidWallsPlayer(snakeController);
    const gameController = new GameController(world);
    gameController.player1 = Player;
    gameController.run();
  }, []);
  return (
    <div className="App">
      <h1>Snake Game!</h1>
      <h2>My project for CIS-2350-01!</h2>
      <Display />
    </div>
  );
}