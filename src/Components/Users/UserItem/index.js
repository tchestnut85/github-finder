import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	return (
		<div className='card text-center'>
			<img src={avatar_url} alt={login} className='round-img' style={{ width: '60px' }} />
			<h3>{login}</h3>
			<div>
				<Link
					to={`/user/${login}`}
					className='btn btn-dark btn-sm my-1'
					style={{ borderRadius: 3 }}
				>
					Details
				</Link>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
