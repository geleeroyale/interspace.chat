import React from 'react';
import styled from 'styled-components';
import ShareButton from './ShareButton';

const FooterContainer = styled.div`
	background-color: #fde221;
	min-height: 5vh;
	padding: 1rem;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<a href='mailto:info@aufabier.at'>info@aufabier.at</a>
			<ShareButton />
		</FooterContainer>
	);
};

export default Footer;
