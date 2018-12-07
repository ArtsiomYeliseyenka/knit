import { BaseLayout } from 'components/layouts';
import { ModalContainer } from 'components/modal';
import { About, Contacts, Home, Shop } from 'pages';
import { Fragment, SFC } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

const HomeRedirect: SFC = () => <Redirect to={'/home'} />;

export const App: SFC = () => (
  <Router>
    <Fragment>
      <BaseLayout>
        <Route path="/" exact component={HomeRedirect} />
        <Route path="/home" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/about" exact component={About} />
        <Route path="/contacts" exact component={Contacts} />
      </BaseLayout>
      <ModalContainer />
    </Fragment>
  </Router>
);
