//todos saga passará por aqui


import { all } from "redux-saga/effects"; //importamos o saga aqui

import example from './example/sagas';


//função geradora:
export default function* rootSaga(){

  return yield all([example]); //aqui dentro ele vai receber todos sagas que estamos utilizando, se tivessemos mais, poderiamos colocar saparado por virgula:
  //return yield all([example, ]);
}

//agora precisamos aplicar esse middleware em index.js (da pasta modules)
