import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalID;
    if (isRunning) {
      intervalID = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10);
    }

    return () => clearInterval(intervalID);
  }, [isRunning, time]);

  const resetHandler = () => {
    setIsRunning(false);
    setTime(0);
  };
  const hours = Math.floor(time / 360000);
  const min = Math.floor((time % 360000) / 6000);
  const sec = Math.floor((time % 360000) / 100);
  const ms = Math.floor(time % 100);
  return (
    <div className="App">
      <div className="container">
        <p>
          {hours.toString().padStart(2, "0")}hr :{" "}
          {min.toString().padStart(2, "0")}min :{" "}
          {sec.toString().padStart(2, "0")}s : {ms.toString().padStart(2, "0")}
          ms
        </p>
        <div className="buttons">
          <button onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? "Stop" : "Start"}
          </button>

          <button onClick={resetHandler}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
