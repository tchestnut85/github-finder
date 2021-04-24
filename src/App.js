import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import UserItem from './components/Users/UserItem';

class App extends Component {
	render() {
		return (
			<>
				<div className='navbar bg-primary'>
					<Navbar />
				</div>
				<UserItem />
			</>
		);
	}
}

export default App;
