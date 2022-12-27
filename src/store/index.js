import { persistStore } from 'redux-persist';

import persistedReducers from './modules/reduxPersist';

import { applyMiddleware,legacy_createStore as createStore } from "redux";

import createSagaMiddleware from 'redux-saga';

import rootSaga from './modules/rootSaga';

import rootReducer from "./modules/rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(

  persistedReducers(rootReducer),

  applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
