import 'common/css/fonts/fonts.scss';
import * as ReactObj from 'react';
import * as ReactDomObj from 'react-dom';

declare global {
  const React: typeof ReactObj;
  const ReactDOM: typeof ReactDomObj;
}
import { Hello } from './components/hello';

ReactDOM.render(<Hello compiler="TypeScript" framework="React"                   />, document.getElementById('app'));
