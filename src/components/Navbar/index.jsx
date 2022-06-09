import React from 'react';
import FavoriteContext from '../../contexts/favoritesContext';
import '../Navbar/styles.scss';

const { useContext } = React;
export const Navbar = () => {
	const { favoritePokemons } = useContext(FavoriteContext);

	const logoImg =
		'https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg';
	return (
		<nav className="center">
			<div className="navbar__container center">
				<img src={logoImg} alt="Pokedex logo" className="navbar__img " />
			</div>
			<div className="navbar__heart">
				&#10084;&#65039; {favoritePokemons.length}
			</div>
		</nav>
	);
};
