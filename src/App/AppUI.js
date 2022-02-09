import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { Modal } from "../Modal";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoForm } from "../TodoForm";

const AppUI = () => {
  const {
    loading,
    error,
    openModal,
    setOpenModal,
    searchedTodos,
    completeTodos,
    deleteTodos,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <p>Cargando...</p>}
        {error && <p>Hubo un error :/</p>}
        {!loading && !searchedTodos.length && <p>Crea un TODO</p>}

        {searchedTodos.map((item) => (
          <TodoItem
            key={item.text}
            text={item.text}
            completed={item.completed}
            onComplete={() => completeTodos(item.text)}
            onDelete={() => deleteTodos(item.text)}
          />
        ))}
        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
        <CreateTodoButton />
      </TodoList>
    </>
  );
};

export { AppUI };
