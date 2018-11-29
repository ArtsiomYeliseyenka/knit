import { BaseLayout } from 'components/layouts';
import { About, Contacts, Home, Shop } from 'pages';
import { StatelessComponent } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

const HomeRedirect: StatelessComponent = () => <Redirect to={'/home'} />;

export const App: StatelessComponent = () => (
  <Router>
    <BaseLayout>
      <Route path="/" exact component={HomeRedirect} />
      <Route path="/home" exact component={Home} />
      <Route path="/shop" exact component={Shop} />
      <Route path="/about" exact component={About} />
      <Route path="/contacts" exact component={Contacts} />
    </BaseLayout>
  </Router>
);
