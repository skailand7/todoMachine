import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

// const defaulTodos = [
//   {
//     text: "Practicar React",
//     completed: true,
//   },
//   {
//     text: "Dormir",
//     completed: true,
//   },
//   {
//     text: "Comer",
//     completed: false,
//   },
//   {
//     text: "Recrear",
//     completed: false,
//   },
// ];

function App() {
  return (
    <>
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    </>
  );
}

export default App;
