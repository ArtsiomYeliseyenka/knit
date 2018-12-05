import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import { reducers } from './reducers';

export const configureStore = () => {
  const rootReducer = combineReducers({ ...reducers });
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
};
