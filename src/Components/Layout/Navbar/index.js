import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Navbar = ({ icon, title }) => {
	return (
		<nav className='navbar bg-primary'>
			<h1>
				<i className={icon} />
				{title}
			</h1>
			<ul>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
			</ul>
		</nav>
	);
};

// Set default props in case no props are pased to the Navbar
Navbar.defaultProps = {
	title: 'GitHub Finder',
	icon: 'fab fa-github',
};

// Define and require the data type that the props should be
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;
