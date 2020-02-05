import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css';

import Login from './views/Login';
import Layout from './layout/Layout';

import SubscribeForm from './views/SubscribeForm';

import Exception403 from './views/Exception/403';
import Exception404 from './views/Exception/404';
import Exception500 from './views/Exception/500';

type RouteItem = {
  path: string,
  component: any,
}

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Layout>
          <Switch>
            <Route path="/sub" component={SubscribeForm} />
            <Route
              exact
              path="/exception/403"
              component={Exception403}
            />
            <Route
              exact
              path="/exception/404"
              component={Exception404}
            />
            <Route
              exact
              path="/exception/500"
              component={Exception500}
            />
          </Switch>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
