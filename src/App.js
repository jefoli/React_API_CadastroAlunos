//AQUIVO QUE RENDERIZA TUDO


import React from "react";

import GlobalStyle from './styles/GlobalStyles';

import Header from "./components/Header";

import Routes from "./routes";

import { Router } from "react-router-dom";

import history from "./services/history";

import { ToastContainer } from 'react-toastify';

//temos que falar no App.js qual será o estado global da aplicação ->(no caso é o store) -> para falarmos a todos componentes que ele é um store, temos que importa-lo
import { Provider } from "react-redux";
import store, { persistor } from "./store"; // além de store , importamos o persistor entre chaves para configurar o persistgate

import { PersistGate } from 'redux-persist/integration/react'; // esse persist, recebe o persistor + inserimos ele no app


/* trocamos browserRouter por Router para usarmos o History


import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>

  );
}
*/

function App() {
  return (
    <Provider store={store}> {/* aqui inseriu o redux */}
      <PersistGate persistor={persistor}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} className="toast-container"/>
        {/* após importar, temos que colocar autoClose={} e informar o tempo que queremos que ele feche. Tem que ser em milisegundos */}
      </Router>
      </PersistGate>
    </Provider>


  );
}

export default App;
