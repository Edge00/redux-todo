import React from "react";

const Todo = ({ onClick, completed, text, id }) => (
  <li
    onClick={() => onClick(id)}
    style={{ textDecoration: completed ? "line-through" : "none" }}
  >
    {text}
  </li>
);

export default Todo;
