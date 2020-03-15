import React from 'react';
import './App.css';
import Space from './components/Space';
import FloatingRoomWindow from './components/FloatingRoomWindow';
import RootContextProvider from './contexts/RootContext';
import SpaceContext from './contexts/SpaceContext';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<RootContextProvider>
				<SpaceContext>
					<Space />
					<Footer />
				</SpaceContext>
				<FloatingRoomWindow />
			</RootContextProvider>
		</div>
	);
}

export default App;
