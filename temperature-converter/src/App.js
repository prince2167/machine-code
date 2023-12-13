import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [celcius, setCelcius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const convert = (value, setDestination, calculateValue) => {
    const numericValue = Number(value);
    const isValid = !Number.isNaN(numericValue) && Boolean(value);
    setDestination(isValid ? calculateValue(numericValue) : "");
  };

  useEffect(() => {
    const tempF = (celcius * 9) / 5 + 32;
    setFahrenheit(tempF);
  }, [celcius, fahrenheit]);
  return (
    <div className="App">
      <div className="container">
        <div className="input">
          <input
            type="number"
            value={celcius}
            onChange={(event) => {
              const newValue = event.target.value;
              setCelcius(newValue);
              convert(newValue, setFahrenheit, (value) => (value * 9) / 5 + 32);
            }}
          />
          <span>Celcius</span>
        </div>
        <span>=</span>
        <div className="input">
          <input
            type="number"
            value={fahrenheit}
            onChange={(event) => {
              const newValue = event.target.value;
              setFahrenheit(newValue);
              convert(newValue, setCelcius, (value) => ((value - 32) * 5) / 9);
            }}
          />

          <span>Fahrenheit</span>
        </div>
      </div>
    </div>
  );
}

export default App;
