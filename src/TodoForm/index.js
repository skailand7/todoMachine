import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodos, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodos(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder="Type a TODO" onChange={onChange} />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Add
        </button>
      </div>
    </form>
  );
};
export { TodoForm };
