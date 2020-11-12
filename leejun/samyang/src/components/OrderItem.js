import React, { useEffect, useState } from 'react';
import { useNumberInput } from '../customs/useNumberInput';

const nf = new Intl.NumberFormat();

const OrderItem = ({ changeCount, index, item: { id, name, price} }) => {
	const [count, onChangeCount, setCount] = useNumberInput("");

	useEffect(() => {
		changeCount(id, count * 1);
	}, [count]);

	return (
		<li key={`ITEM${id}`}>
			<span>{index + 1}</span>
			<span>{name}</span>
			<span>{nf.format(price)}원</span>
			<span>
				<input 
					value={count} 
					onChange={onChangeCount} 
					maxLength={3}
				/>
			</span>
			<span>{nf.format(price * (count * 1))}원</span>
		</li>
	);
};

export default OrderItem;