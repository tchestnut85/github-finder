import React, { Component } from 'react';

import PropTypes from 'prop-types';

export class Navbar extends Component {
	static defaultProps = {
		title: 'GitHub Finder',
		icon: 'fab fa-github',
	};

	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
	};

	render() {
		return (
			<div className='navbar bg-primary'>
				<h1>
					<i className={this.props.icon} />
					{this.props.title}
				</h1>
			</div>
		);
	}
}

export default Navbar;
