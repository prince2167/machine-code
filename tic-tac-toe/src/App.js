import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState(Array.from({ length: 9 }).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  console.log(state);

  const checkWinner = (state) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
        return true;
    }
    return false;
  };

  const handleBlockClick = (i) => {
    const copyState = Array.from(state);
    if (copyState[i] !== null) return;
    copyState[i] = currentTurn;
    setState(copyState);
    const win = checkWinner(copyState);
    if (win) alert(`winner: ${currentTurn}`);
    setCurrentTurn(currentTurn === "X" ? "O" : "X");
  };

  return (
    <div className="board">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="block"
          onClick={() => handleBlockClick(index)}
        >
          {state[index]}
        </div>
      ))}
    </div>
  );
}

export default App;
