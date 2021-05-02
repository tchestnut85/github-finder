import React, { useContext } from 'react';

import GithubContext from '../../../utils/context/github/githubContext';
import PropTypes from 'prop-types';
import Spinner from '../../Layout/Spinner';
import UserItem from '../UserItem';

const Users = () => {
	const githubContext = useContext(GithubContext);
	const { users, loading } = githubContext;

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div style={userStyle}>
				{users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
};

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem',
};

export default Users;
