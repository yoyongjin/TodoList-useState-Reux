import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return <TodoCard>{props.children}</TodoCard>;
};

const TodoCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
  height: 2rem;
  margin: 0.35rem 0;

  line-height: 2rem;
  padding-left: 0.5rem;
  background-color: #eee;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

export default Card;
