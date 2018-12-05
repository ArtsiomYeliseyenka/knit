import 'common/css/common.scss';
import 'common/css/fonts/fonts.scss';
import * as ReactObj from 'react';
import * as ReactDomObj from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './app';
import { configureStore } from './store';

declare global {
  const React: typeof ReactObj;
  const ReactDOM: typeof ReactDomObj;
}

const store = configureStore();
const renderApp = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app'),
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./app', renderApp);
}

renderApp();
