import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodo] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
 
  return (
    <div className="App">
      <h1>Welcome to Todo App</h1>
      <TodoForm todos={todos} setTodo={setTodo} editTodo={editTodo} setEditTodo={setEditTodo}/>
      <TodoList todos={todos} setTodo={setTodo} setEditTodo={setEditTodo} />
    </div>
  );
}

export default App;
