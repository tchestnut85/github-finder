import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../../Layout/Spinner';

export class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
	}

	static propTypes = {
		loading: PropTypes.bool,
		user: PropTypes.object.isRequired,
		getUser: PropTypes.func.isRequired,
	};

	render() {
		const {
			name,
			avatar_url,
			location,
			bio,
			blog,
			login,
			html_url,
			website,
			company,
			followers,
			following,
			public_repos,
			public_gists,
			hireable,
		} = this.props.user;

		const { loading } = this.props;

		if (loading) return <Spinner />;

		return (
			<>
				<Link to='/' className='btn btn-light'>
					Back to Search
				</Link>

				<div className='card grid-2'>
					<div className='all-center'>
						<img
							src={avatar_url}
							className='round-img'
							style={{ width: '150px' }}
							alt={name}
						/>
						<h1>{name}</h1>
						<p>
							Hireable:{' '}
							{hireable ? (
								<i className='fas fa-check text-success' />
							) : (
								<i className='fas fa-times-circle text-danger' />
							)}
						</p>
						<p>Location: {location}</p>
					</div>
					<div>
						{bio && (
							<>
								<h3>Bio:</h3> <p>{bio}</p>
							</>
						)}
						<a
							href={html_url}
							className='btn btn-dark my-1'
							target='_blank'
							rel='noreferrer'
						>
							GitHub Profile
						</a>
						<ul>
							<li>
								{login && (
									<>
										<strong>Username: </strong> {login}
									</>
								)}
							</li>
							<li>
								{company && (
									<>
										<strong>Company: </strong> {company}
									</>
								)}
							</li>
							<li>
								{blog && (
									<>
										<strong>Website: </strong> {blog}
									</>
								)}
							</li>
						</ul>
					</div>
					<div className='card text-center'>
						<div className='badge badge-primary'>Followers: {followers}</div>
						<div className='badge badge-success'>Following: {following}</div>
						<div className='badge badge-danger'>Public Repos: {public_repos}</div>
						<div className='badge badge-dark'>Public Gists: {public_gists}</div>
					</div>
				</div>
			</>
		);
	}
}

export default User;
