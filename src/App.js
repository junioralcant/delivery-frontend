import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/index";
import Routes from "./routes";
import "./styles/global.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
