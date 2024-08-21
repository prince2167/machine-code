import "./App.css";
import { useTheme } from "./context/theme-provider";

function App() {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`App ${theme === "dark" ? "light-mode" : "dark-mode"}`}>
      <h1>theme context</h1>
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>dark</button>
      ) : (
        <button onClick={() => setTheme("light")}>light</button>
      )}
    </div>
  );
}

export default App;
