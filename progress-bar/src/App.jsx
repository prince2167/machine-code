import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setValue((value) => value + 1);
    }, 100);
  }, [value]);
  return (
    <div className="App">
      <h1>Progress bar</h1>
      <ProgressBar value={value} />
    </div>
  );
}

export default App;
