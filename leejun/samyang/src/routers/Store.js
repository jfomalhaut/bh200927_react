import React, { useState } from 'react';
import styled from 'styled-components';
import { useInput } from '../customs/useInput';
import { useNumberInput } from '../customs/useNumberInput';

const Store = () => {
	const [list, setList] = useState([]);
	const [name, onChangeName, setName] = useInput("");
	const [tel, onChangeTel, setTel] = useNumberInput("");
	const [address, onChangeAddr, setAddr] = useInput("");
	const [pos, onChangePos, setPos] = useNumberInput("");

	const onSubmit = (ev) => {
		ev.preventDefault();
		const payload = {
			name,
			tel,
			address,
			pos
		};

		console.log(payload);
	};

	return (
		<StoreContainer>
			<h1>매장 등록하기</h1>
			<form onSubmit={onSubmit}>
				<div>
					<input value={name} onChange={onChangeName} placeholder="매장이름" />
				</div>
				<div>
					<input value={tel} onChange={onChangeTel} placeholder="전화번호" maxLength={12} />
				</div>
				<div>
					<input value={address} onChange={onChangeAddr} placeholder="주소" />
				</div>
				<div>
					<input value={pos} onChange={onChangePos} placeholder="POS 갯수" maxLength={2} />
				</div>
				<button>등록하기</button>
			</form>
			
		</StoreContainer>
	);
};

export default Store;

// section, main, h1~5, ul, li, ol, figure, form, article, span, b, strong, legend, field + 선택자, div 

const StoreContainer = styled.main`

`;