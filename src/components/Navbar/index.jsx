import React from 'react';
import '../Navbar/styles.scss';
import { SearchBar } from '../SearchBar';

export const Navbar = () => {
	const logoImg =
		'https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg';
	return (
		<nav className="center">
			<div className="navbar__container">
				<img src={logoImg} alt="Pokedex logo" className="navbar__img " />
				<SearchBar />
			</div>
		</nav>
	);
};
