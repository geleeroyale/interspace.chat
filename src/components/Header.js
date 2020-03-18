import React from 'react';
import styled from 'styled-components';
import ShareButton from './ShareButton';

import About from './About';

const HeaderContainer = styled.div`
	position: fixed;
	top: 50px;
	left: 80px;
	display: grid;
	grid-gap: 1rem;
	grid-template-rows: auto auto;
	padding: 1rem;
	justify-content: start;
	z-index: 1;
	opacity: 0.3;
	:hover {
		opacity: 1;
	}
`;

const Logo = styled.img`
	width: 25px;
`;

const Logotext = styled.span``;

const Logolink = styled.a`
	display: block;
	width: 100px;
	text-decoration-line: none;
`;

const Header = () => {
	return (
		<HeaderContainer>
			<Logolink href='/'>
				<Logo src='favicon.ico' alt='Logo' /> <Logotext>aufaBier.at</Logotext>
			</Logolink>
			<About />
		</HeaderContainer>
	);
};

export default Header;
