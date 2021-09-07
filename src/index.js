import React from "react";
import { render } from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import Count from "./containers/Count";
import rootReducer from "./reducer";

const middleWears = [ thunk ];
const store = createStore(rootReducer, applyMiddleware(...middleWears));

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
