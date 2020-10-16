import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Home, Data, State, Input, Date, PhoneBook } from "./routers";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/data/:name" component={Data} />
        <Route path="/state" component={State} />
        <Route path="/input" component={Input} />
        <Route path="/date" component={Date} />
        <Route path="/phonebook" component={PhoneBook} />
        <Redirect to="/state" />
      </Switch>
    </Router>
  );
};

export default App;
