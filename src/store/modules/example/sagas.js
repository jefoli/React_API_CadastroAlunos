//criamos para configurar o sagas:

import { call, put, all, takeLatest } from 'redux-saga/effects'; //o call vai chamar uma função que quisermos, geralmente asincrona

import { toast } from 'react-toastify';



//criamos uma promisse para simular, pois normalmente é direcionado a API:

import * as actions from './actions'; //importamos as actions!
//PARA DISPARAR UMA ACTION precisamod de PUT(do redux-saga) -: temos que importar ele


import * as types from '../types';


const requisicao = () =>
  new Promise((resolve, reject) => {
  //colocamos o settimeout para simular a requisição do servidor
  setTimeout(() => {

    //se colocar o reject aqui, vai emitir um pop-up na tela:
    //resolve();
    reject();
  }, 2000);
});

//OBS: O SAGA UTILIZA FUNÇÕES GERADORAS (são aquelas) que tem asterisco na frente * (funções geradoras utilizam yield)

//aqui dentro() <- poderiamos receber o payload da action, porém não estamos requisitando nada ao back-end até o momento
function* exampleRequest() {
  try{
    //se passar por aqui, vai disparar uma action se não for rejeitada:

    yield call(requisicao); //chamamos a requisição aqui dentro (só passamos a referencia, por isso não colocamos parenteses) -> se tivessemos parametros lá em cima, poderiamos colocar uma virgula do lado e continuar -> exp:
    //call(requisicao(), a,b,c, nome,sobrenome)

    //isso daqui simula (mais ou menos) o await

    //aqui o saga vai disparar se foi sucesso a requisição:
    yield put(actions.clicaBotaoSuccess());
  }catch{

    toast.error('Error');

    //se der erro vai disparar:
    yield put(actions.clicaBotaoFailure());
  }
//saga feito!
//agora temos que exportar alguma coisa daqui de dentro

//DICA -> não ficar preocupado com a configuração, pois não precisamos criar ela sempre já que podemos copiar

}

//agora temos que exportar alguma coisa daqui de dentro
//para isso importamo s o All e takeLatest do redux-saga-Effect

//takeLatest -> vai pegar só último clique no botão
// all -> permite colocarmos mais de uma ação para escutar na saída:

//precisamos importar os types tbm:

export default all([
  takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)
  //se tivessemos mais de uma,poderiamos ir colocando abaixo, pois isso daaqui é um array - exp:
  //takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest),
  //takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest),
  //takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest),

]); //aqui no saga vamos escutar o request -> e a requeste vai executar a função exampleRequest
