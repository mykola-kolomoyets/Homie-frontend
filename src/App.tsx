import React from 'react';

import { HashRouter } from 'react-router-dom';

import './App.scss';

function App() {
	return (
		<main className="App" id="app">
			<h1>Homie</h1>
		</main>
	);
}

const WrappedApp = () => (
	<HashRouter>
		<App />
	</HashRouter>
);

export default WrappedApp;
