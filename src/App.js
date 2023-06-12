import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AppRoutes from "./components/AppRoutes";

import store from "./store";

function App() {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </>
  );
}

export default App;
