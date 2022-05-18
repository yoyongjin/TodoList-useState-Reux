import Card from "./components/UI/Card";
import styled from "styled-components";
import DeleteTodoButton from "./components/UI/DeleteTodoButton";
import AddTodo from "./components/Todos/AddTodo";

const App = () => {
  return (
    <Container>
      <AddTodo />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  width: 60%;
  justify-content: space-between;
  align-items: space-between;
  background-color: papayawhip;
  margin: auto;
`;

export default App;
