import React, { useEffect, useContext } from 'react';
import { SpaceContext } from '../../contexts/SpaceContext';
// import { UserContext } from "../contexts/UserContext";
import styled from 'styled-components';
// import * as JitsiMeetExternalAPI from "../dist/jitsi";
import '../../App.css';

const JitsiMeetExternalAPI = window.JitsiMeetExternalAPI;

const JitsiContainer = styled.div`
	width: 94vw;
	height: auto;
	display: grid;
	justify-self: center;
	margin: 0 auto;
	padding: 0.5rem 0;
`;

const JitsiInstanceMobile = () => {
	const { currentSpace } = useContext(SpaceContext);
	// const { user } = useContext(UserContext);

	//  const width = 1024;
	const height = 400;

	useEffect(() => {
		const domain = 'interspace.geleeroyale.work';
		const options = {
			roomName: currentSpace,
			//     width: width,
			height: height,
			interfaceConfigOverwrite: { defaultLanguage: `de` },
			parentNode: document.querySelector('#meet')
		};
		const api = new JitsiMeetExternalAPI(domain, options);

		//    api.executeCommand("displayName", user);

		return function cleanup() {
			api.dispose();
		};
	});

	return <JitsiContainer id='meet'></JitsiContainer>;
};

export default JitsiInstanceMobile;
