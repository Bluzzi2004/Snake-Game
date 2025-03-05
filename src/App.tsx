import "./App.css";
import { useEffect } from "react";
import Display from "./ConsoleDisplay";
import display from "./display";
import Snake from "./Snake";
import WorldModel from "./WorldModel";
import canvasWorldView from "./CanvasWorldView";

export default function App() {
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("Where will the snakes go?");
    const redSnake = new Snake();
    const blueSnake = new Snake();
    const yellowSnake = new Snake();
    const purpleSnake = new Snake();
    const worldSnake = new Snake();
    const worldModel = new WorldModel(worldSnake, 10, 10);
    const CanvasWorldView = new canvasWorldView(50)
    worldModel.view = CanvasWorldView;
    worldModel.update(0);
    display("The Red Snake's current position is",redSnake.position);
    display("The Blue Snake's current position is",blueSnake.position);
    display("The Yellow Snake's current position is",yellowSnake.position);
    display("The Purple Snake's current position is",purpleSnake.position);
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
