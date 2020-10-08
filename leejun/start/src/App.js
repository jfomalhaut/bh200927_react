import React from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import { Data, Home, List } from './routers';
import { Navigation } from './components';

const App = () => {
	return (
		<Router>
			<Navigation />
			<Switch>
				{/* <Route path="/home" component={Home} /> */}
				<Route path="/home" render={(props) => (
					<Home {...props} />
				)} />
				<Route path="/list" render={({ history, match, location }) => (
					<List history={history} match={match} location={location} />
				)} />
				<Route path="/data/:name" component={Data} />
				<Redirect to="/home" />
			</Switch>
		</Router>
	);
};

export default App;
