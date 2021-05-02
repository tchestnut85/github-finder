import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import About from './pages/About';
import Alert from './components/Layout/Alert';
import AlertState from './utils/context/alert/AlertState';
import GithubState from './utils/context/github/GithubState';
import Navbar from './components/Layout/Navbar';
import React from 'react';
import Search from './components/Users/Search';
import User from './components/Users/User';
import Users from './components/Users/Users';

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className='App'>
						<Navbar />
						<div className='container'>
							<Alert />
							<Switch>
								<Route
									exact
									path='/'
									render={() => (
										<>
											<Search />
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
			</AlertState>
		</GithubState>
	);
};

export default App;
