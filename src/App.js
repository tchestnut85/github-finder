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
import axios from 'axios';

const App = () => {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);

	// Get a signle GitHub user
	const getUser = async username => {
		setLoading(true);
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		setUser(res.data);
		setLoading(false);
	};

	// Get user repos
	const getUserRepos = async username => {
		setLoading(true);
		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		setRepos(res.data);
		setLoading(false);
	};

	// Clear users from state
	const clearUsers = () => {
		setUsers([]);
		setLoading(false);
	};

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
										<Search
											clearUsers={clearUsers}
											showClear={users.length > 0 ? true : false}
											setAlert={showAlert}
										/>
										<Users loading={loading} users={users} />
									</>
								)}
							/>
							<Route exact path='/about' component={About} />
							<Route
								exact
								path='/user/:login'
								render={props => (
									<User
										{...props}
										getUser={getUser}
										getUserRepos={getUserRepos}
										user={user}
										repos={repos}
										loading={loading}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;
