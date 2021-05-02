import React, { useContext, useState } from 'react';

import GithubContext from '../../../utils/context/github/githubContext';
import PropTypes from 'prop-types';

const Search = ({ showClear, clearUsers, setAlert }) => {
	const githubContext = useContext(GithubContext);

	const [text, setText] = useState('');

	const onSubmit = e => {
		e.preventDefault();

		if (text === '') {
			setAlert('You need to enter a search value.', 'light');
		} else {
			githubContext.searchUsers(text);
			setText('');
		}
	};

	const onChange = e => setText(e.target.value);

	return (
		<div>
			<form className='form' onSubmit={onSubmit}>
				<input
					type='text'
					name='text'
					palceholder='Search for a User.'
					value={text}
					onChange={onChange}
				/>
				<input type='submit' value='Search' className='btn btn-dark btn-block' />
			</form>
			{showClear && (
				<button className='btn btn-block btn-light' onClick={clearUsers}>
					Clear Users
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired,
};

export default Search;
