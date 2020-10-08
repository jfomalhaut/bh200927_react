import React, { useEffect, useState } from 'react';

const State = () => {
	const [count, setCount] = useState(0);

	const increase = ({ value = 1 }) => {
		setCount(count + value);
	};

	const decrease = () => {
		setCount(count - 1);
	};

	// 배열에 어떤 값을 넣게 되면 componentDitUpdate와 동일한 기능을 한다.
	useEffect(() => {
		console.log('rendering count: ' + count);
	}, [count]);

	// 배열을 비워놓는 경우는 componentDidMount 와 동일한 효과.
	useEffect(() => {
		console.log('rendering');
		// 서버에서 데이터 받을 때
		// addEventListener
		// 
	}, []);

	return (
		<div>
			<h1>State Component</h1>
			<h1>count: {count}</h1>
			<button onClick={increase}>
				<h1>increase</h1>
			</button>
			<button onClick={decrease}>
				<h1>decrease</h1>
			</button>
			<button onClick={() => increase({ value: 2})}>
				<h1>increase2</h1>
			</button>
		</div>
	);
};

export default State;
