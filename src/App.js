import React from 'react';
import './App.css';
import Space from './components/Space';
import FloatingRoomWindow from './components/FloatingRoomWindow';
import RootContextProvider from './contexts/RootContext';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<RootContextProvider>
				<Space />
				<FloatingRoomWindow />
			</RootContextProvider>
			<Footer />
		</div>
	);
}

export default App;
