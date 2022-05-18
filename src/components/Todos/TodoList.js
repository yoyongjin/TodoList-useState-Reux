import React from "react";
import Card from "../UI/Card";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <Card>
          <li key={"todo.specialKey?"}>{todo}</li>
        </Card>
      ))}
    </ul>
  );
};

export default TodoList;
