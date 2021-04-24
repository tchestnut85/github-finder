import React, { Component } from 'react';

export class UserItem extends Component {
	state = {
		id: 'id',
		login: 'tchestnut85',
		avatar_url: 'https://avatars.githubusercontent.com/u/67440557?v=4',
		html_url: 'https://github.com/tchestnut85',
	};

	render() {
		const { login, avatar_url, html_url } = this.state;

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
	}
}

export default UserItem;
