import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="App">
        <h2>Modal</h2>
        <button className="show-btn" onClick={() => setShowModal(true)}>
          Show Modal
        </button>
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal}>
        <Title setShowModal={setShowModal} />
      </Modal>
    </>
  );
}

export default App;
