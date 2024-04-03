import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = ({ children }) => {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={5000} />
      {children}
    </div>
  );
};

export default ToastProvider;
