import React from "react";

const AppPreview = ({ number, title, days, plus, minus }) => {
  return (
    <div>
      <h2>
        {title} {number} {days}
      </h2>
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

export default AppPreview;
