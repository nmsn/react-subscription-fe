import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

interface Item {
  title: number,
}

const Index: React.FC<Item> = ({ title }: Item) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React { title }
        </a>
      </header>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/1">
          <Index title={1} />
        </Route>
        <Route path="/2">
          <Index title={2} />
        </Route>
        <Route path="/3">
          <Index title={3}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
