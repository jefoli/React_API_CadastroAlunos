//teremos esse arquivo como exemplo para qunado quisermos criar um módulo com redux

import * as types from '../types'
const initialState = {
  botaoClicado: false
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
//dentro de reducer SEMPRE tem que retornar o estado ATUAL ou um NOVO ESTADO
//console.log(action) -> usado para ver se está disparando uma action
//return state;

//como fazer para receber uma ação?


//Todo reducer será identico a isso:

/*
switch(action.type) {
  case 'BOTAO_CLICADO': {
    //console.log('estou ouvindo BOTAO_CLICADO')


  //alteramos o case acima pelo debaixo, pois vamos começar a escutar coisas aqui:

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

*/

//alteramos o case acima pelo debaixo, pois vamos começar a escutar coisas aqui:

switch(action.type) {
  case types.BOTAO_CLICADO_SUCCESS: {
    //console.log('estou ouvindo BOTAO_CLICADO')

    console.log('Sucesso');
  //alteramos o case acima pelo debaixo, pois vamos começar a escutar coisas aqui:

    //vamos manipular o novo estado (nunca podemos fazer direto, precisamos criar um novo estado + jogar o estado atual + manipular o novo estado)
    const newState = {...state};

    //primeira forma de trocar o estado:

    //newState.botaoClicado = newState.botaoClicado ? false : true; -> se o click for verdadeiro, o botaoClicado vira false, se não foi clicado vira veraddeiro

    //segunda forma:
    newState.botaoClicado = !newState.botaoClicado;

    return newState; //sempre devemos retornar um estado
  }
  //   default: {
  //     return state;
  // }


  //ESSA SEMPRE REQUEST SERA A AÇÃO QUE O SAGA VAI ESCUTAR
  case types.BOTAO_CLICADO_REQUEST: {
    console.log('Estou fazendo a requisição');
    return state; //retornamos o estado atual
  }

  case types.BOTAO_CLICADO_FAILURE: {
    console.log('DEU ERRO');
    return state; //retornamos o estado atual
  }

  default:{
    return state;
  }

}

};


