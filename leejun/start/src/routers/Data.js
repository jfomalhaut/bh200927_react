import React from 'react';

const Data = ({ match: { params: { name } } }) => {
	return (
		<div>
			<h1>Data Component, name: {name}</h1>
		</div>
	);
};

export default Data;
