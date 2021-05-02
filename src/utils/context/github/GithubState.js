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

	// Search users

	// Get user

	// Get repos

	// Clear users

	// Set loading

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
