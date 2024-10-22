import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/ReactToastify.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { AppProvider } from "./Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
      <ToastContainer position="top-center" />
    </AppProvider>
  </React.StrictMode>
);
