import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Home, Order, Promotion, Store } from "./routers";
import Header from "./components/layout/Header";

import "../dist/materialize.min.css";
import M from "../dist/materialize.min";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/store" component={Store} />
          <Route path="/promotion" component={Promotion} />
          <Route path="/order" component={Order} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
