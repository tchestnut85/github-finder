import './App.css';

import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import About from './pages/About';
import Alert from './components/Layout/Alert';
import Navbar from './components/Layout/Navbar';
import Search from './components/Users/Search';
import User from './components/Users/User';
import Users from './components/Users/Users';
import axios from 'axios';

class App extends Component {
	state = {
		users: [],
		user: {},
		loading: false,
		alert: null,
	};

	// Search GitHub API for a user
	searchUsers = async text => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		this.setState({ users: res.data.items, loading: false });
	};

	// Get a signle GitHub user
	getUser = async username => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		this.setState({ loading: false, user: res.data });
	};

	// Clear users from state
	clearUsers = () => this.setState({ users: [], loading: false });

	// Show an alert message
	setAlert = (message, type) => {
		this.setState({ alert: { message, type } });
		setTimeout(() => this.setState({ alert: null }), 3000);
	};

	render() {
		const { users, user, loading } = this.state;

		return (
			<Router>
				<div className='App'>
					<Navbar />
					<div className='container'>
						<Alert alert={this.state.alert} />
						<Switch>
							<Route
								exact
								path='/'
								render={props => (
									<>
										<Search
											searchUsers={this.searchUsers}
											clearUsers={this.clearUsers}
											showClear={users.length > 0 ? true : false}
											setAlert={this.setAlert}
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
										getUser={this.getUser}
										user={user}
										loading={loading}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
