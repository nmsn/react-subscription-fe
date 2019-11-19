import React from 'react';
import styles from './index.module.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { router } from 'router';

type RouteItem = {
  path: string,
  component: any,
}

export default () => {
  const routerArr: RouteItem[] = Object.entries(router).map(([key, item]) => ({ path: key, component: item.component }));

  return (
    <div className={styles.content}>
      <Router>
        <Switch>
          {routerArr.map(item => (
            <Route path={item.path} key={item.path} component={item.component}></Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

