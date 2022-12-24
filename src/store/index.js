//AQUI IRÁ OS REDUX

//colocamos o legacy_creactStore, pois estava obsoleto o creactStore
import { legacy_createStore as createStore } from "redux";


//o createStore recebe um cara chamado -> createReducer(ele vai escutar as ações que estão sendo disparadas e executada algumas funções)
//-> ação disparada -> reducer ->NewState(novo estado) = state(estado atual) -> NewState

  //initialState -> criamos para saber se o botão já foi clicado(seu estado atual) e colocamos no state
  const initialState = {
    botaoClicado: false
  }


const reducer = (state = initialState, action) => {
  //dentro de reducer SEMPRE tem que retornar o estado ATUAL ou um NOVO ESTADO
  //console.log(action) -> usado para ver se está disparando uma action
  //return state;

  //como fazer para receber uma ação?


  //Todo reducer será identico a isso:


  switch(action.type) {
    case 'BOTAO_CLICADO': {
      //console.log('estou ouvindo BOTAO_CLICADO')

      //vamos manipular o novo estado (nunca podemos fazer direto, precisamos criar um novo estado + jogar o estado atual + manipular o novo estado)
      const newState = {...state};

      //primeira forma de trocar o estado:

      //newState.botaoClicado = newState.botaoClicado ? false : true; -> se o click for verdadeiro, o botaoClicado vira false, se não foi clicado vira veraddeiro

      //segunda forma:
      newState.botaoClicado = !newState.botaoClicado;

      return newState; //sempre devemos retornar um estado
    }
      default: {
        return state;
      }
  }

};

const store = createStore(reducer);

export default store;

//temos que falar no App.js qual será o estado global da aplicação ->(no caso é o store) -> para falarmos a todos componentes que ele é um store, temos que importa-lo ->
