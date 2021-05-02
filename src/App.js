import './App.css';

import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import About from './pages/About';
import Alert from './components/Layout/Alert';
import GithubState from './utils/context/github/GithubState';
import Navbar from './components/Layout/Navbar';
import Search from './components/Users/Search';
import User from './components/Users/User';
import Users from './components/Users/Users';

const App = () => {
	const [alert, setAlert] = useState(null);

	// Show an alert message
	const showAlert = (message, type) => {
		setAlert({ message, type });
		setTimeout(() => setAlert(null), 3000);
	};

	return (
		<GithubState>
			<Router>
				<div className='App'>
					<Navbar />
					<div className='container'>
						<Alert alert={alert} />
						<Switch>
							<Route
								exact
								path='/'
								render={props => (
									<>
										<Search setAlert={showAlert} />
										<Users />
									</>
								)}
							/>
							<Route exact path='/about' component={About} />
							<Route exact path='/user/:login' component={User} />
						</Switch>
					</div>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;
