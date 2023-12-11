import React from "react";

const TodoList = ({ todos, setTodo, setEditTodo }) => {
 
  const deleteHandler = (id) => {
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    setTodo(updatedTodo);
  };
  const editTodo = (id) => {
    const singleTodo = todos.find((todo) => todo.id === id);
    setEditTodo(singleTodo);
  };
  return (
    <div>
      <h2>Todos</h2>
      {todos &&
        todos.map((todo) => (
          <ul className="todo" key={todo.id}>
            <li className="todo-li">
              {todo.todo}
              <button onClick={() => editTodo(todo.id)}>Edit</button>
              <button onClick={() => deleteHandler(todo.id)}>Delete</button>
            </li>
          </ul>
        ))}
    </div>
  );
};

export default TodoList;
