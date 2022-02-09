import React from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <li className="todoItem">
      <span onClick={props.onComplete}>{props.completed ? "💚" : "🖤"}</span>
      <p className={props.completed ? "completed" : ""}>{props.text}</p>
      <span onClick={props.onDelete}>❌</span>
    </li>
  );
};

export { TodoItem };
