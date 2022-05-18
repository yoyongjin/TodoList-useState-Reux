import styled from "styled-components";
// import DeleteTodoButton from "./components/UI/DeleteTodoButton";
import AddTodo from "./components/Todos/AddTodo";
import TodoList from "./components/Todos/TodoList";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addListHandler = (todo) => {
    setTodoList((prevTodoList) => [...prevTodoList, todo]);
  };

  return (
    <Container>
      <AddTodo onAddList={addListHandler} />

      <TodoList todos={todoList} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  width: 60vw;
  justify-content: space-between;
  align-items: space-between;
  background-color: papayawhip;
  margin: auto;
`;

export default App;
