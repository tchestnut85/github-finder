import React, { Component } from 'react';

import UserItem from '../UserItem';

export class Users extends Component {
	state = {
		users: [
			{
				id: '67440557',
				login: 'tchestnut85',
				avatar_url: 'https://avatars.githubusercontent.com/u/67440557?v=4',
				html_url: 'https://github.com/tchestnut85',
			},
			{
				id: '1',
				login: 'mojombo',
				avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
				html_url: 'https://github.com/mojombo',
			},
			{
				id: '2',
				login: 'defunkt',
				avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
				html_url: 'https://github.com/defunkt',
			},
		],
	};
	render() {
		return (
			<div style={userStyle}>
				{this.state.users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
}

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem',
};

export default Users;
