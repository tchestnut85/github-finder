import PropTypes from 'prop-types';
import React from 'react';

const RepoItem = ({ repo }) => {
	return (
		<div className='card'>
			<h3 className='card'>
				<a href={repo.html_url}>{repo.name}</a>
			</h3>
		</div>
	);
};

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired,
};

export default RepoItem;
