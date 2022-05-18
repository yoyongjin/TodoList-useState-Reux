import React from "react";
import styled from "styled-components";
import AddTodoButton from "../UI/AddTodoButton";
import { useState } from "react";

const AddTodo = () => {
  const [enteredTodo, setEnteredTodo] = useState("enter Todo");

  const addTodoHandler = (e) => {
    e.preventDefault();
  };

  return (
    <InnerContainer>
      <form onSubmit={addTodoHandler}>
        <label htmlFor="todo">Todo-List</label>
        <InnerContainer>
          <input id="todo" type="text" />
          <AddTodoButton type="submit">Add</AddTodoButton>
        </InnerContainer>
      </form>
    </InnerContainer>
  );
};

const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: auto;
  /* padding: 1rem 1.25rem; */
  margin-bottom: 2rem;

  /* border: 1px solid black; */
`;

export default AddTodo;
