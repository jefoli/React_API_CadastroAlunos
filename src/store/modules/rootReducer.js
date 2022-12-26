// NÃO E POSSIVEL USAR DOIS REDUCERS EM UM SO LOCAL, DESSE MODO

// O ROOT SERVE PARA COMBINAR VARIOS REDUCER -> TODOS SERÃO IMPORTADOS AQUI

import { combineReducers } from "redux";

import exampleReducer from './example/reducer';

export default combineReducers({

  //podemos alterar o nome, só colocar:
  example: exampleReducer,
  //para usar daí é só colocar o example
});


