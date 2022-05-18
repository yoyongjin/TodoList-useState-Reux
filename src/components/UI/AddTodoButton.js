import React from "react";
import styled from "styled-components";

const AddTodoButton = (props) => {
  //   event.preventDefault();
  return <AddBtn type={props.type}>Add</AddBtn>;
};

const AddBtn = styled.button`
  width: 4.5rem;
  height: 2rem;
`;

export default AddTodoButton;
