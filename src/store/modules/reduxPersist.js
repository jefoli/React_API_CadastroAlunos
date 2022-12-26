//ele irá persistir os dados

// Temos que importar o redux

import storage from 'redux-persist/lib/storage'; // aqui ele decide onde quer salvar -não precisamos nos preocupar com isso
//ele salva no localstorage do navegador, mas podemos altearar (ver documentação)


import { persistReducer } from 'redux-persist';

// eslint-disable-next-line import/no-anonymous-default-export
export default reducers => {
  const persistReducers = persistReducer(
    //isso é uma função que receberá parametros
    //1 parametro -> um objeto
    {
      //dentro do objeto iremos receber uma key
      key:'REACT-BASE', //geralmente é o nome da aplicação
      storage,
      //o whitelist vai receber quem que queremos salvar (podemos salvar os módulos -> para saber, ver no rootReducer e ver o nome que demos para chave no export defaulte)
      whitelist: ['example'], //queremos que salve esse módulo

    },
    // 2 parametro -> vamos receber os reducers
    reducers,
  );

  return persistReducers;
}

//precisamos ir no storage que configuramos no index.js (dde modules) e falar que vamos utilizar esse redux persist -> para isso temos que importar import { persistStore } from 'redux-persist'

////importamos o rootpersist para salvar no storage, para isso precisamos envolver o rootReducer com a função que importamos ()

//após configurar e exportar o export const persistor = persistStore(store);

//ir no App.js e importar um

//import { PersistGate} from 'redux-persist/integration/react'//
