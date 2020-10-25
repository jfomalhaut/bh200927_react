import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
	return (
		<HeaderContainer>
			<ul>
				<li>
					<Link to="/home">홈</Link>
				</li>
				<li>
					<Link to="/store">점포등록</Link>
				</li>
				<li>
					<Link to="/promotion">행사등록</Link>
				</li>
				<li>
					<Link to="/order">주문하기</Link>
				</li>
			</ul>
		</HeaderContainer>
	);
};

export default Header;

const HeaderContainer = styled.header`

`;