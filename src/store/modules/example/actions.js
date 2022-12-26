//esse arquivo será responsável por disparar as ações

//criamos um arquivo actions.js em modules para não exportar o dispacth de forma literal como está abaixo

//para isso, podemos escrever funções que são actions


import * as types from '../types'

//alteramos por conta do saga
//export function clicaBotao(){
export function clicaBotaoRequest(){
  return {

    //como criamos um arquivo de types e importamos ele aqui, não precisamos mais mandar o type como hardcode
    //type: 'BOTAO_CLICADO', //essa é a ação que quermeos disparar

    //importamos
    //alteramos, por conta do saga
    //type: types.BOTAO_CLICADO,

    type: types.BOTAO_CLICADO_REQUEST,

    //separamos os arquivos, pois podemos saber todas ações que esse type esta fazendo/ que já estão configuradas na aplicação
    //por padrão, o type pega TODAS ações do aplicativo
  };
}

//APÓS CRIADA É SÓ IMPORTAR ONDE DESEJAMOS UTILIZA-LA


//criamos por conta do redux saga:
export function clicaBotaoSuccess(){
  return{
  type: types.BOTAO_CLICADO_SUCCESS,
  };
}

export function clicaBotaoFailure(){
  return{
  type: types.BOTAO_CLICADO_FAILURE,
  };
}
