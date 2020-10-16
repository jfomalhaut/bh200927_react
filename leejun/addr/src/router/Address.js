import React, { useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

const CONFIRM_KEY = process.env.CONFIRM_KEY;
const REQUEST_URL = process.env.REQUEST_URL;
const VIEW = 10;

const Address = () => {
	const [list, setList] = useState([]);
	const [keyword, setKeyword] = useState('');
	const [currentPage, setCurrentPage] = useState(1);

	const onChangeKeyword = (ev) => {
		const { target: { value } } = ev;
		setKeyword(value);
	};

	const search = () => {
		const payload = {
			confmKey: CONFIRM_KEY,
			currentPage, 
			countPerPage: VIEW ,
			keyword,
			resultType: 'json'
		};

		Axios.get(`${REQUEST_URL}?confmKey=${CONFIRM_KEY}&currentPage=${currentPage}&countPerPage=${VIEW}&resultType=json&keyword=${keyword}`).then(res => {
			const { data: { results: { juso, common } } } = res;
			console.log(res);
			setList(juso);
		}).catch(error => {
			console.log(error);
		}).finally(() => {
			console.log('done');
		});
	}

	const onSubmit = (ev) => {
		ev.preventDefault();
		search();
	};

	return (
		<Form onSubmit={onSubmit}>
			<div>
				<input value={keyword} onChange={onChangeKeyword} placeholder="주소를 입력하세요" />
				<button>검색</button>
			</div>
			<ul>
				{list.map(item => (
					<li>
						<div>{item.zipNo}</div>
						<div>{item.roadAddrPart1}</div>
					</li>
				))}
			</ul>
		</Form>
	);
};

export default Address;

const Form = styled.form`
	width: 600px;
	margin: 100px auto;
	& > div {
		display: flex;
		button {
			width: 100px;
			flex-shrink: 0;
			font-size: 20px;
			outline: none;
		}
		input {
			outline: none;
			font-size: 20px;
			flex-grow: 1;
			padding: 10px;
		}
	}
	ul {
		list-style: none;
		padding: 0;
		li {
			display: flex;
			list-style: none;
			padding: 15px 10px;
			border-bottom: 1px solid #ddd;

			div {
				font-size: 20px;
				&:first-child {
					width: 100px;
					flex-shrink: 0;
				}
				&:last-child {
					flex-grow: 1;
				}
			}
		}
	}
`;