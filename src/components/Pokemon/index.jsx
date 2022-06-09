import { useContext } from 'react';
import FavoriteContext from '../../contexts/favoritesContext';
import './styles.scss';
const Pokemon = (props) => {
	const { pokemon } = props;

	const { favoritePokemons, updateFavoritePokemons } =
		useContext(FavoriteContext);
	const redHeart = '❤️';
	const blackHeart = '🖤';
	const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

	const clickHeart = (e) => {
		e.preventDefault();
		updateFavoritePokemons(pokemon.name);
	};
	return (
		<div className="pokemon__card">
			<div className="pokemon__img--container">
				<img
					className="pokemon__img"
					src={pokemon.sprites.front_default}
					alt={pokemon.name}
				/>
			</div>
			<div className="card__body">
				<div className="card__top">
					<h3>{pokemon.name}</h3>
					<div>#{pokemon.id}</div>
				</div>
				<div className="card__bottom">
					<div className="pokemon__type">
						{pokemon.types.map((type, i) => {
							return (
								<div className="pokemon__type--text" key={i}>
									{type.type.name}
								</div>
							);
						})}
					</div>
					<button onClick={clickHeart} className="pokemon__favorite">
						<div>{heart}</div>
					</button>
				</div>
			</div>
		</div>
	);
};
export default Pokemon;
