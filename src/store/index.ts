import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";

let store: any = null;
export function configureStore(preloadedState: any) {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  store = createStore(
    reducers({}),
    preloadedState,
    compose(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(sagas);
  return store;
}

export function getStore() {
  return store;
}

export default store;