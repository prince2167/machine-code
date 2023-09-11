import "./App.css";
import Folder from "./components/Folder";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      <Folder item={data} />
    </div>
  );
}

export default App;
