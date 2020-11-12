import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { OrderItem } from '../components';

const nf = new Intl.NumberFormat();

const DATA = [
	{ id: 1, name: '삼양라면1', price: 1850 },
	{ id: 2, name: '삼양라면2', price: 2850 },
	{ id: 3, name: '삼양라면3', price: 3850 },
	{ id: 4, name: '삼양라면4', price: 4850 },
	{ id: 5, name: '삼양라면5', price: 5850 },
];

const Order = () => {
	const [list, setList] = useState(DATA);
	const [total, setTotal] = useState(0);
	const [result, setResult] = useState([]);

	const changeCount = (id, count) => {
		const newList = list.map(item => item.id === id ? ({ ...item, count }) : item);
		setList(newList);
	};

	const confirm = (ev) => {
		ev.preventDefault();
		const formData = list.filter(item => item.count > 0);
		setResult(formData);
	};

	const order = (ev) => {
		ev.preventDefault();
	};

	useEffect(() => {
		const _total = list.reduce((acc, cur) => {
			if (cur.count > 0) {
				return acc + cur.price * cur.count;
			} else {
				return acc;
			}
		}, 0);
		setTotal(_total);
	}, [list]);

	return (
		<Container>
			{result.length > 0 ? (
				<form onSubmit={order}>
					<h1>아래 내용으로 주문하시겠습니까?</h1>
					<article>
						<span>No</span>
						<span>제품명</span>
						<span>단가</span>
						<span>수량</span>
						<span>금액</span>
					</article>
					<ul>
						{result.map((item, index) => (
							<li>
								<span>{index + 1}</span>
								<span>{item.name}</span>
								<span>{item.price}</span>
								<span>{item.count}</span>
								<span>{item.price * item.count}</span>
							</li>
						))}
					</ul>
					<button>최종주문</button>
				</form>
			) : (
				<form onSubmit={confirm}>
					<article>
						<span>No</span>
						<span>제품명</span>
						<span>단가</span>
						<span>수량</span>
						<span>금액</span>
					</article>
					<ul>
						{list.map((item, index) => (
							<OrderItem key={`ITEM${item.id}`} item={item} index={index} changeCount={changeCount}/>
						))}
					</ul>
					<h1>Total: {nf.format(total)}원</h1>
					<button>주문하기</button>
				</form>
			)}
		</Container>
	);
};

export default Order;


const Container = styled.div`
	form {
		max-width: 800px;
		margin: 50px auto;

		article {
			display: flex;
			border-bottom: 2px solid #bbb;
			padding: 10px 0;

			span {
				text-align: center;
				&:nth-child(1){
					width: 50px;
					flex-shrink: 0;
				}
				&:nth-child(2){
					flex-grow: 1;
				}
				&:nth-child(3){
					width: 120px;
					flex-shrink: 0;
				}
				&:nth-child(4){
					width: 70px;
					flex-shrink: 0;
				}
				&:nth-child(5){
					width: 150px;
					flex-shrink: 0;
				}
			}

		}
		ul {
			li {
				display: flex;
				border-bottom: 1px solid #ddd;
				padding: 10px 0;

				span {
					&:nth-child(1){
						width: 50px;
						flex-shrink: 0;
						text-align: center;
					}
					&:nth-child(2){
						flex-grow: 1;
						padding: 0 10px;
					}
					&:nth-child(3){
						width: 120px;
						flex-shrink: 0;
						text-align: center;
					}
					&:nth-child(4){
						width: 70px;
						input {
							width: 100%;
						}
						flex-shrink: 0;
					}
					&:nth-child(5){
						width: 150px;
						flex-shrink: 0;
						text-align: center;
					}
				}
			}
		}
	}
`;