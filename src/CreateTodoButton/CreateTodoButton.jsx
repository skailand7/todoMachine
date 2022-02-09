import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";

const CreateTodoButton = () => {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  const toggleForm = () => {
    setOpenModal(!openModal);
  };
  return (
    <button className="btnAddTodo" onClick={toggleForm}>
      +
    </button>
  );
};

export { CreateTodoButton };
