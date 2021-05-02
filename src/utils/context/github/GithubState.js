import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from '../actions';
import React, { useReducer } from 'react';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import axios from 'axios';

const GithubState = props => {
	const initialState = {
		users: [],
		singleUser: {},
		repos: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	// Search GitHub API for a user
	const searchUsers = async text => {
		setLoading();

		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		dispatch({
			type: SEARCH_USERS,
			payload: res.data.items,
		});
	};

	// Get user

	// Get repos

	// Clear users from state
	const clearUsers = () => dispatch({ type: CLEAR_USERS });

	// Set loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				searchUsers,
				clearUsers,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
