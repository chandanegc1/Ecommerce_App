import React from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create a root and render the application
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer position="top-center" />
    </Provider>
  </StrictMode> 
);
