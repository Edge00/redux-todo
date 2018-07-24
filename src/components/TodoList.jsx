import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, onTodoClick}) => {
  return todos.map((todo, index) => <Todo {...todo} id={index} key={index} onClick={onTodoClick} />);
};

export default TodoList
