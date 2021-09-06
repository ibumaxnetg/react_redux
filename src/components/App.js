import React from "react";
import connect from "../containers/count";

const App = ({ number, plus, minus }) => {
  return (
    <div>
      <h2>App {number}</h2>
      <button
        onClick={() => {
          plus(10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          minus(10);
        }}
      >
        -10
      </button>
    </div>
  );
};

export default App;