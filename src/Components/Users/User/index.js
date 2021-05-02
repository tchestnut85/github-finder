import React, { useContext, useEffect } from 'react';

import GithubContext from '../../../utils/context/github/githubContext';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Repos from '../Repos';
import Spinner from '../../Layout/Spinner';

const User = ({ getUserRepos, repos, match }) => {
	const githubContext = useContext(GithubContext);
	const { getUser, user, loading } = githubContext;

	useEffect(() => {
		getUser(match.params.login);
		getUserRepos(match.params.login);

		// eslint-disable-next-line
	}, []);

	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		company,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user;

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
			<Repos repos={repos} />
		</>
	);
};

User.propTypes = {
	repos: PropTypes.array.isRequired,
	getUserRepos: PropTypes.func.isRequired,
};

export default User;
