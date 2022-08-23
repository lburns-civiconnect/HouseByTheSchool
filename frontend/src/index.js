import React from "react";
import ReactDOM from "react-dom/client";
import "./css/App.css";
import App from "./App";
import { Provider } from "react-redux";
import cmsReducer from "./store/reducers/cms";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// Redux Store Setup
const rootReducer = combineReducers({
  cms: cmsReducer,
});
const store = configureStore({ reducer: rootReducer });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
