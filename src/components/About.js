import React from 'react';
import styled from 'styled-components';
import Collapsible from 'react-collapsible';

const AboutStyled = styled.nav`
	text-align: left;
	.Collapsible__trigger {
		color: black;
		background-color: #fde221;
		cursor: pointer;
		padding: 0.2rem;
	}
	.Collapsible__contentOuter {
		max-width: 300px;

		:hover {
			.Collapsible__contentInner {
				background-color: #fde221;
				padding: 0.5rem;
			}
		}
	}
	.Collapsible__contentInner {
		padding: 0.5rem;
	}
`;

const StyledListItem = styled.li`
	list-style-type: none;
	color: #000000;
	padding: 1rem;
`;

const About = () => {
	return (
		<AboutStyled>
			<Collapsible trigger='Über/About'>
				<p>Art used:</p>
				<ul>
					<StyledListItem>
						"Beer Icon" made by{' '}
						<a href='https://www.flaticon.com/free-icon/beer_410993?term=beer&page=1&position=47'>
							Freepik -
						</a>{' '}
						file from <a href='https://www.flaticon.com'>www.flaticon.com</a>"
					</StyledListItem>
					<StyledListItem>
						"Painting" made by Jan Steen - Title: "Revelry at an Inn" - file
						from{' '}
						<a href='https://commons.wikimedia.org/wiki/File:Jan_Steen_-_Revelry_at_an_Inn_-_WGA21761.jpg'>
							Wiki Commons
						</a>
					</StyledListItem>
				</ul>
				<p>Tech used:</p>
				<ul>
					<StyledListItem>
						Powered by{' '}
						<a href='https://meet.jit.si'>
							JitSi Open Source Video Conferencing
						</a>
					</StyledListItem>
					<StyledListItem>
						Made with 💝 by{' '}
						<a href='https://github.com/geleeroyale'>geleeroyale</a>
					</StyledListItem>
				</ul>
				<p>Privacy:</p>
				<ul>
					<StyledListItem>Private Server</StyledListItem>
					<StyledListItem>Fully end to end encrypted</StyledListItem>
					<StyledListItem>
						Please don't write sensitive data into the chat.
					</StyledListItem>
					<StyledListItem>
						Please adhere to a general code of conduct or risk banning.
					</StyledListItem>
				</ul>
			</Collapsible>
		</AboutStyled>
	);
};

export default About;
