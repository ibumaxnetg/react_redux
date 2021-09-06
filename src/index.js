import React from "react";
import { render } from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import Count from "./containers/Count";
import rootReducer from "./reducer";

const store = createStore(rootReducer);

// console.log(store);

store.subscribe(() => {
  console.log(store.getState());
});

render(
  <Provider store={store}>
    <Count />
  </Provider>,
  document.getElementById("root")
);
