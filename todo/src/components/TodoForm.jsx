import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoForm = ({ todos, setTodo, editTodo, setEditTodo }) => {
  console.log(editTodo, "edit");
  const [todoInput, setTodoInput] = useState("");
  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Math.random() * 100,
      todo: todoInput,
    };
    setTodo([...todos, newTodo]);
    setTodoInput("");
  };
  const saveTodo = (id) => {
    const updateTodo = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            todo: editTodo.todo,
          }
        : todo
    );
    setTodo(updateTodo);
    setEditTodo(null);
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          value={editTodo ? editTodo.todo : todoInput}
          onChange={(event) =>
            editTodo
              ? setEditTodo({ ...editTodo, todo: event.target.value })
              : setTodoInput(event.target.value)
          }
        />
        {editTodo ? (
          <button onClick={() => saveTodo(editTodo.id)}>Save</button>
        ) : (
          <button type="submit">Add</button>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
