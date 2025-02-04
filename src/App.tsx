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
    const yellowSnake = new Snake();
    const purpleSnake = new Snake();
    redSnake.move(1);
    blueSnake.turnLeft();
    blueSnake.move(1);
    yellowSnake.turnRight();
    yellowSnake.turnRight();
    yellowSnake.move(1);
    purpleSnake.turnRight();
    purpleSnake.move(1);
    display("The Red Snake's current position is (",redSnake.xcoord,",", redSnake.ycoord,")");
    display("The Blue Snake's current position is (",blueSnake.xcoord,",",blueSnake.ycoord,")");
    display("The Yellow Snake's current position is (",yellowSnake.xcoord,",",yellowSnake.ycoord,")");
    display("The Purple Snake's current position is (",purpleSnake.xcoord,",",purpleSnake.ycoord,")");
  }, []);
  return (
    <div className="App">
      <h1>Snake Game!</h1>
      <h2>My project for CIS-2350-01!</h2>
      <Display />
    </div>
  );
}
