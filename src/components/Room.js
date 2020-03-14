import React, { useContext } from 'react';

import { FloatingSpaceContext } from '../contexts/FloatingSpaceContext';

const Room = ({ roomName, active }) => {
	const { currentSpace, setSpace } = useContext(SpaceContext);

	return (
		<div className='click-zone' onClick={() => setSpace(roomName)}>
			<span className={`roomFont ${currentSpace === roomName ? 'active' : ''}`}>
				{roomName}
			</span>
		</div>
	);
};

export default Room;
