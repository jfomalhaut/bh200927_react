import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<ul>
			<li>
				<Link to="/home">Home</Link>
			</li>
			<li>
				<Link to="/list">List</Link>
			</li>
			<li>
				<Link to="/data">Data</Link>
			</li>
			<li>
				<Link to="/state">State</Link>
			</li>
			<li>
				<Link to="/input">Input</Link>
			</li>
			<li>
				<Link to="/date">Date</Link>
			</li>
		</ul>
	);
};

export default Navigation;
