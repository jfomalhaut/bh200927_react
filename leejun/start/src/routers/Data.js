import React, { useEffect } from 'react';

const Data = ({ match: { params: { name } } }) => {

	useEffect(() => {
		// 서버에서 데이터를 받는다.
	}, [name]);

	return (
		<div>
			<h1>Data Component, name: {name}</h1>
		</div>
	);
};

export default Data;
