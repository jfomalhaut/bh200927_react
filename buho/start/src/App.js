import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Home, List, Data, Items1, Items2, Items3 } from './routers';
import Navigation from './components/Navigation';
import Item from './routers/Items/Item';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/data/:name" component={Data} />
        <Route path="/item" component={Item} />
        <Route path="/items1" component={Items1} />
        <Route path="/items2" component={Items2} />
        <Route path="/items3" component={Items3} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
};

export default App;
