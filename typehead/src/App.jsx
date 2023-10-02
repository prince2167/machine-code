import "./App.css";
import Listbox from "./components/Listbox";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="App">
      <Searchbar
        listBox={(items, isLoading, error, activeIndex) => (
          <Listbox
            items={items}
            isLoading={isLoading}
            error={error}
            activeIndex={activeIndex}
          />
        )}
      />
    </div>
  );
}

export default App;
