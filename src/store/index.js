//AQUI IRÁ OS REDUX


//estamos importando para salvar o storage:
import { persistStore } from 'redux-persist';

//temos que importar o redux-persist tbm:
import persistedReducers from './modules/reduxPersist';


//colocamos o legacy_creactStore, pois estava obsoleto o creactStore
import { applyMiddleware,legacy_createStore as createStore } from "redux";

import createSagaMiddleware from 'redux-saga';

import rootSaga from './modules/rootSaga';

//o createStore recebe um cara chamado -> createReducer(ele vai escutar as ações que estão sendo disparadas e executada algumas funções)
//-> ação disparada -> reducer ->NewState(novo estado) = state(estado atual) -> NewState


//import reducer from "./modules/example/reducer"; -> não precisamos mais dele, pois criamos um combineReducer (que irá mesclar todos os reducers)




//importamos da root para usar(quanto reducer quisermos)
import rootReducer from "./modules/rootReducer";

//TIRAOS O REDUCER DAQUI E JOGAMOS NO ARQUIVO REDUCER.JS e importamos aqui


  //initialState -> criamos para saber se o botão já foi clicado(seu estado atual) e colocamos no state
//   const initialState = {
//     botaoClicado: false
//   }


// const reducer = (state = initialState, action) => {
//   //dentro de reducer SEMPRE tem que retornar o estado ATUAL ou um NOVO ESTADO
//   //console.log(action) -> usado para ver se está disparando uma action
//   //return state;

//   //como fazer para receber uma ação?


//   //Todo reducer será identico a isso:


//   switch(action.type) {
//     case 'BOTAO_CLICADO': {
//       //console.log('estou ouvindo BOTAO_CLICADO')

//       //vamos manipular o novo estado (nunca podemos fazer direto, precisamos criar um novo estado + jogar o estado atual + manipular o novo estado)
//       const newState = {...state};

//       //primeira forma de trocar o estado:

//       //newState.botaoClicado = newState.botaoClicado ? false : true; -> se o click for verdadeiro, o botaoClicado vira false, se não foi clicado vira veraddeiro

//       //segunda forma:
//       newState.botaoClicado = !newState.botaoClicado;

//       return newState; //sempre devemos retornar um estado
//     }
//       default: {
//         return state;
//       }
//   }

// };

//alteramos pelo debaixo, pois criamos um root para os reducers
//const store = createStore(reducer);


//precisamos aplicar o middlwareaqui ->
//para isso precisamos importar duas funções:

//função do redux -> apllyMiddleware;
//função do redux-saga -> createSagaMiddleware
//depois disso precisamos joga-las dentro de uma variavel abaixo do import:
//(além disso, precisamos importar o rootSaga)

//const sagaMiddleware = createSagaMiddleware();

//além disso, precisamos aplicar o middleware:
const sagaMiddleware = createSagaMiddleware();


//importamos o rootpersist para salvar no storage, para isso precisamos envolver o rootReducer



const store = createStore(
  //envolvemos rootReducer para salvar o storage
  persistedReducers(rootReducer),
  applyMiddleware(sagaMiddleware)); //aply é a função que capacita aplicar o middleware;

sagaMiddleware.run(rootSaga);


//precisamos exportar o persistStore -> fazer a função funcionar
export const persistor = persistStore(store);


export default store;

//temos que falar no App.js qual será o estado global da aplicação ->(no caso é o store) -> para falarmos a todos componentes que ele é um store, temos que importa-lo ->
