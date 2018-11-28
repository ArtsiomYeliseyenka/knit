import 'common/css/common.scss';
import 'common/css/fonts/fonts.scss';
import * as ReactObj from 'react';
import * as ReactDomObj from 'react-dom';

declare global {
  const React: typeof ReactObj;
  const ReactDOM: typeof ReactDomObj;
}
import { App } from './app';

ReactDOM.render(<App />, document.getElementById('app'));
