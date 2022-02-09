import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

const TodoCounter = () => {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <div className="todoCounter">
      <h2>
        You have completed {completedTodos}/{totalTodos} TODOs YEI! 🥳🙃
      </h2>
    </div>
  );
};

export { TodoCounter };
