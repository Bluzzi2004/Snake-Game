import "./App.css";
import { useEffect } from "react";
import Display from "./ConsoleDisplay";
import display from "./display";
import Snake from "./Snake";

export default function App() {
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("Where will the snakes go?");
    const redSnake = new Snake();
    const blueSnake = new Snake();
    redSnake.move(5);
    blueSnake.turn();
    blueSnake.move(2);
    redSnake.turn();
    redSnake.move(2);
    blueSnake.turn();
    display("The Red Snake's current position is square", redSnake.position);
    display("The Blue Snake's current position is square", blueSnake.position);
  }, []);
  return (
    <div className="App">
      <h1>Snake Game!</h1>
      <h2>My project for CIS-2350-01!</h2>
      <Display />
    </div>
  );
}
