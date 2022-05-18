import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return <TodoCard>{props.children}</TodoCard>;
};

const TodoCard = styled.div`
  display: block;
  width: 60%;
  height: 2rem;
  background-color: #ccc;
  border: 1px solid black;
  border-radius: 1.5rem;
`;

export default Card;
