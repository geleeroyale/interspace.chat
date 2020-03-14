import React, { Fragment, useContext, useState } from 'react';
import styled from 'styled-components';

import { FloatingSpaceContext } from '../contexts/FloatingSpaceContext';
import { RoomNames } from '../utils/constants';
import Biere from '../img/biere.png';

const portalStyle = {
	marginTop: '10px'
};

const Headline = styled.h6`
	color: black;
	font-weight: 600;
	font-size: 1.3rem;
	padding: 1rem;
	background: white;

	a {
		font-weight: 100;
		color: red;
		text-decoration: underline;
	}
`;

const SpaceSelector = styled.nav`
	padding-bottom: 1rem;
`;

const SpaceInfo = styled.div`
	font-size: 2rem;
	color: black;
`;

const CurrentSpace = styled.span`
	color: pink;
`;

const Disclaimer = styled.div`
	position: relative;
	top: 800px;
	background: unset;
`;

const Watermark = styled.div`
	position: relative;
	top: 770px;
	background: unset;
	width: 260px;
	display: flex;
	flex-direction: column;
	margin: auto;
`;

const SpaceWindowInfo = styled.p`
	position: relative;
	top: 790px;
	font-size: 2rem;
`;

const Space = () => {
	const { currentFloatingSpaces, setFloatingSpaces } = useContext(
		FloatingSpaceContext
	);
	const [modalOpen, setModalOpen] = useState(true);
	const launchFloatingSpace = floatingSpace => {
		let resultantSpaces = null;
		if (currentFloatingSpaces && currentFloatingSpaces.length > 0) {
			if (currentFloatingSpaces.indexOf(floatingSpace) > -1) {
				resultantSpaces = currentFloatingSpaces;
			} else if (RoomNames.indexOf(floatingSpace) > -1) {
				let replaceIndex;
				for (let instance of RoomNames) {
					if (currentFloatingSpaces.indexOf(instance) > -1) {
						replaceIndex = currentFloatingSpaces.indexOf(instance);
					}
				}
				if (replaceIndex > -1) {
					let spliceJitsiDuplicates = [...currentFloatingSpaces]; // Prepare for splice
					spliceJitsiDuplicates.splice(replaceIndex, 1, floatingSpace);
					resultantSpaces = [...spliceJitsiDuplicates];
				} else {
					resultantSpaces = [...currentFloatingSpaces, floatingSpace];
				}
			} else {
				resultantSpaces = [...currentFloatingSpaces, floatingSpace];
			}
		} else {
			resultantSpaces = [floatingSpace];
		}
		setFloatingSpaces(resultantSpaces);
	};

	const displayJoinedSpaces = floatingSpaceWindows => {
		let windowsWithoutPlaceholders = floatingSpaceWindows.filter(item => item);
		if (windowsWithoutPlaceholders.length > 0) {
			if (windowsWithoutPlaceholders.length > 2) {
				let nameCount = windowsWithoutPlaceholders.length;
				return (
					windowsWithoutPlaceholders.slice(0, nameCount - 2).join(', ') +
					', ' +
					windowsWithoutPlaceholders.slice(nameCount - 2, nameCount).join(' & ')
				);
			} else {
				return windowsWithoutPlaceholders.join(' & ');
			}
		} else {
			return null;
		}
	};

	return (
		<SpaceSelector>
			{modalOpen && (
				<div id='myModal' class='modal'>
					<div class='modal-content'>
						<img src={Biere} alt='logo' className='modal_logo'></img>
						<p className='modal_text'>
							Genieße die lauschige Atmosphäre in unserer Taverne.
						</p>
						<p className='modal_text'>
							Setz dich an einen Tisch der Dir zusagt.
						</p>
						<p className='modal_text'>
							Benötigt Chrome, screen sharing benötigt die Jitsi Chrome
							Extension.
						</p>
						<button onClick={() => setModalOpen(false)} className='modal-close'>
							Ich verstehe
						</button>
					</div>
				</div>
			)}
			<span>
				<Headline>
					Servas, du bist eingeladen{' '}
					<a
						href='https://aufabier.at'
						target='_blank'
						rel='noopener noreferrer'
						style={{ textDecoration: 'none' }}>
						auf a Bier.at
					</a>
				</Headline>
				{/*
        <span>
          Come to the chat on{" "}
          <a href="https://t.me/intercon13" target="_blank">
            Telegram
          </a>
        </span>
        */}
				<SpaceInfo>
					{displayJoinedSpaces(currentFloatingSpaces) ? (
						<Fragment>
							Du bist beim{' '}
							<CurrentSpace>
								{displayJoinedSpaces(currentFloatingSpaces)}
							</CurrentSpace>
							!
						</Fragment>
					) : (
						<Fragment>
							<div> Klicke auf einen Tisch um beizutreten</div>
							<div>
								<a href='https://gehma.aufabier.at'>
									oder eröffne einen Neuen Raum
								</a>
							</div>
						</Fragment>
					)}
				</SpaceInfo>
			</span>

			<div className='map-container'>
				{/*
        <span className="mapInstructions">
          Click a location to join a conversation.
        </span>
        */}
				<img src='gelage-jan-steen.jpeg' className='image-map' alt='map' />
				<div
					className='click-zone a'
					onClick={() => launchFloatingSpace('Tisch1')}>
					<span className='roomName'>Tisch1</span>
					<div className='click-zone-highlight a'></div>
				</div>
				<div
					className='click-zone b'
					onClick={() => launchFloatingSpace('Tisch2')}>
					<span className='roomName'>Tisch2</span>
					<div className='click-zone-highlight b'></div>
				</div>
				<div
					className='click-zone c'
					onClick={() => launchFloatingSpace('Tisch3')}>
					<span className='roomName'>Tisch3</span>
					<div className='click-zone-highlight c'></div>
				</div>
				<div
					className='click-zone d'
					data-zone='stress-test-arena'
					onClick={() => launchFloatingSpace('Tisch4')}>
					<span className='roomName' style={portalStyle}>
						Tisch4
					</span>
					<div className='click-zone-highlight d'></div>
				</div>
				<div
					className='click-zone e'
					onClick={() => launchFloatingSpace('Tisch5')}>
					<span className='roomName'>Tisch5</span>
					<div className='click-zone-highlight e'></div>
				</div>
				<div
					className='click-zone f'
					onClick={() => launchFloatingSpace('loft.radio')}>
					<span className='roomName'>loft.radio</span>
					<div className='click-zone-highlight f'></div>
				</div>
				{/*
				<div
					className='click-zone g'
					onClick={() => launchFloatingSpace('rTrees')}>
					<span className='roomName'>rTrees</span>
					<div className='click-zone-highlight g'></div>
        </div>
        */}
			</div>
			{/*
      <Disclaimer>
        Feel free to make improvements to the map, download the .psd file{" "}
        <a href="https://www.dropbox.com/s/cocwaannzy8lqty/Interspace%20v0.2.psd?dl=0">
          here
        </a>{" "}
        and share with us <a href="https://discord.gg/cZjqQmE">there</a>
      </Disclaimer>
      <SpaceWindowInfo>
        {displayJoinedSpaces(currentFloatingSpaces)
          ? "Position your window(s) down below"
          : null}
      </SpaceWindowInfo>
        */}
		</SpaceSelector>
	);
};

export default Space;
