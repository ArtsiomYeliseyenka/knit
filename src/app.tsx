import { BaseLayout } from 'components/layouts';
import { Landing } from 'pages';
import { StatelessComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const App: StatelessComponent = () => (
  <BaseLayout>
    <Router>
      <Route path="/" exact component={Landing} />
    </Router>
  </BaseLayout>
);
