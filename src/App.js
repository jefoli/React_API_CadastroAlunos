import React from "react";

import GlobalStyle from './styles/GlobalStyles';

import Header from "./components/Header";

import Routes from "./routes";

import { Router } from "react-router-dom";

import history from "./services/history";

import { ToastContainer } from 'react-toastify';

import { Provider } from "react-redux";

import store, { persistor } from "./store";

import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} className="toast-container"/>
      </Router>
      </PersistGate>
    </Provider>


  );
}

export default App;
