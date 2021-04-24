import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';

class App extends Component {
	render() {
		return (
			<div className='navbar bg-primary'>
				<Navbar />
			</div>
		);
	}
}

export default App;
