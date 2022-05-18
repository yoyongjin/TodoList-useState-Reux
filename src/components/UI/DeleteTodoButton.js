import React from "react";
import styled from "styled-components";

const DeleteTodoButton = () => {
  return <DeleteBtn>Delete</DeleteBtn>;
};

const DeleteBtn = styled.button`
  width: 4.5rem;
  height: 2rem;
  background-color: red;
  color: white;
`;

export default DeleteTodoButton;
