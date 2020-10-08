import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Data, Home, List, State, Input, Date } from './routers';
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
				<Route path="/state" component={State} />
				<Route path="/input" component={Input} />
				<Route path="/date" component={Date} />
				<Redirect to="/date" />
			</Switch>
		</Router>
	);
};

export default App;
