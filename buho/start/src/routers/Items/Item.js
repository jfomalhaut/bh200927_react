import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Item1 from './Item1';
import Item2 from './Item2';
import Item3 from './Item3';

const Item = () => {
	return (
		<div style={{ display: 'flex' }}>
			<h1 style={{ width: '200px;', height: '100vh', borderRight: '1px solid #000', flexShrink: '0' }}>Item Component</h1>
			<Switch>
				<Route path="/item/item1" component={Item1} />
				<Route path="/item/item2" component={Item2} />
				<Route path="/item/item3" component={Item3} />
			</Switch>
		</div>
	);
};

export default Item;
