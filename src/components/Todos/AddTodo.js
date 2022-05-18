import React from "react";
import styled from "styled-components";
import AddTodoButton from "../UI/AddTodoButton";
import { useState } from "react";

const AddTodo = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const whenSubmit = (e) => {
    e.preventDefault();
    props.onAddList(enteredTodo);

    setEnteredTodo("");
  };

  const todoInputChange = (e) => {
    setEnteredTodo(e.target.value);
  };

  return (
    <InnerContainer>
      <form onSubmit={whenSubmit}>
        <label htmlFor="todoInput">Todo-List</label>
        <InnerContainer>
          <input
            id="todoInput"
            // specialKey={Math.random().toString}
            type="text"
            value={enteredTodo}
            onChange={todoInputChange}
          />
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
