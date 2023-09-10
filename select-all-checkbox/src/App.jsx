import { useState } from "react";
import "./App.css";
import Checkbox from "./Checkbox";
import { data } from "./list";

function App() {
  const [list, setList] = useState(data);
  const handleCheckbox = (event) => {
    const { name, checked } = event.target;
    if (name === "all-select") {
      const updatedList = list.map((item) => {
        return { ...item, isChecked: checked };
      });
      setList(updatedList);
    } else {
      const updatedList = list.map((item) =>
        item.name === name ? { ...item, isChecked: !checked } : item
      );
      setList(updatedList);
    }
  };
  return (
    <div className="App">
      <div className="all-select">
        <input
          type="checkbox"
          id="checkbox"
          name="all-select"
          onChange={handleCheckbox}
          checked={list.filter((item) => item.isChecked !== true) < 1}
        />
        <label htmlFor="checkbox">All select</label>
      </div>
      <div className="item-list">
        {list.map((item) => (
          <Checkbox item={item} key={item.id} handleCheckbox={handleCheckbox} />
        ))}
      </div>
    </div>
  );
}

export default App;
