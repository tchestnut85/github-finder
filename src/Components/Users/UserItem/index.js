import PropTypes from 'prop-types';
import React from 'react';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	return (
		<div className='card text-center'>
			<img src={avatar_url} alt={login} className='round-img' style={{ width: '60px' }} />
			<h3>{login}</h3>
			<div>
				<a
					target='_blank'
					rel='noreferrer'
					href={html_url}
					className='btn btn-dark btn-sm my-1'
					style={{ borderRadius: 3 }}
				>
					GitHub Profile
				</a>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
