//teremos esse arquivo como exemplo para qunado quisermos criar um módulo com redux


const initialState = {
  botaoClicado: false
}


export default function (state = initialState, action) {
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
