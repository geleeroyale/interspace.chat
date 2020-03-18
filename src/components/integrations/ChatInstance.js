import React from 'react';

function ChatInstance({ width, height, backgroundColor }) {
	return (
		<iframe
			id='ytplayer'
			type='text/html'
			width='800'
			height='800'
			src='https://chat.geleeroyale.work/channel/general?layout=embedded'
			frameborder='0'></iframe>
	);
}

export default ChatInstance;
