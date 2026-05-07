import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { todoSlice } from "./todoSlice";
import App from "./App.jsx";
import "./index.css";

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
