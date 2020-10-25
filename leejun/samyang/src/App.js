import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Home, Order, Promotion, Store } from './routers';
import { Header } from './components';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/store" component={Store} />
				<Route path="/promotion" component={Promotion} />
				<Route path="/order" component={Order} />
				<Redirect to="/home" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
