import React from 'react'
import { useNumberInput } from '../../customs/userNumberInput'

const Product = ({ item }) => {
	const [count, onChangeCount, setCount] = useNumberInput('');
	return (
		<div>
			<span>{item.name}</span>
			<input value={count} onChange={onChangeCount}/>
			<span>{item.price}원</span>
			<span>{item.price * count}원</span>
		</div>
	);
};

export default Product
