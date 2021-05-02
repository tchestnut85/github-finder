import React, { useContext, useState } from 'react';

import AlertContext from '../../../utils/context/alert/alertContext';
import GithubContext from '../../../utils/context/github/githubContext';

const Search = () => {
	const githubContext = useContext(GithubContext);
	const { users, clearUsers } = githubContext;

	const alertContext = useContext(AlertContext);

	const [text, setText] = useState('');

	const onSubmit = e => {
		e.preventDefault();

		if (text === '') {
			alertContext.setAlert('You need to enter a search value.', 'light');
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
			{users.length > 0 && (
				<button className='btn btn-block btn-light' onClick={clearUsers}>
					Clear Users
				</button>
			)}
		</div>
	);
};

export default Search;
