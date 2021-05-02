import { REMOVE_ALERT, SET_ALERT } from '../actions';
import React, { useReducer } from 'react';

import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

const AlertState = props => {
	const initialState = null;

	const [state, dispatch] = useReducer(AlertReducer, initialState);

	// Show an alert message
	const setAlert = (message, type) => {
		dispatch({
			type: SET_ALERT,
			payload: { message, type },
		});

		setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
	};

	return (
		<AlertContext.Provider
			value={{
				alert: state,
				setAlert,
			}}
		>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;
