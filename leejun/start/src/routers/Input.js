import React, { useState } from 'react';

const TEMP = [
	{name: '홍길동'},
	{name: '김철수'},
	{name: '김민수'},
	{name: '최영호'},
];

const useInput = (initialValue) => {
	const [val, setVal] = useState(initialValue);
	const onChange = (ev) => {
		const { target: { value } } = ev;
		setVal(value);
	};

	return [val, onChange, setVal];
};

//////////////////////////////////////////////////////////////

const Input = () => {
	// const [data, onChangeData] = useInput('');
	const [name, onChangeName, setName] = useInput('');
	const [list, setList] = useState([]);

	const onInsert = () => {
		const obj = { name: name, age: 24 };
		const newArr = list.concat(obj);
		setList(newArr);
		setName('');
		// console.log(newArr);
	};

	return (
		<div>
			{/* <input value={data} onChange={onChangeData} /> */}
			<input value={name} onChange={onChangeName} />
			{/* <h1>{data}</h1>
			<h1>{name}</h1> */}
			<button onClick={onInsert}>입력</button>
			<ul>
				{list.map(item => (
					<li>{item.name}({item.age}세)</li>
				))}
			</ul>
		</div>
	);
};

export default Input;
