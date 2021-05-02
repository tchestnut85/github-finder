import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from '../actions';

const reducer = (state, action) => {
	switch (action.type) {
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};

export default reducer;
