import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <input />
      <button
        onClick={() => {
          console.log("lalala");
        }}
      >
        Add
      </button>
    </Fragment>
  );
};

export default App;
