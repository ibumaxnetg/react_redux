import React from "react";

const AppPreview = ({
  number,
  title,
  days,
  plus,
  minus,
  asyncMinus,
  getJson
}) => {
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
      <button
        onClick={() => {
          asyncMinus(10);
        }}
      >
        async -10
      </button>
      <button
        onClick={() => {
          getJson();
        }}
      >
        getJson
      </button>
    </div>
  );
};

export default AppPreview;
