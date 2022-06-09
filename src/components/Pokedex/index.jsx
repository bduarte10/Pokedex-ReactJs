import React from 'react';
import Pagination from '../Pagination';
import Pokemon from '../Pokemon';
import './styles.scss';

const Pokedex = (props) => {
	const { pokemons, page, setPage, total } = props;

	const lastPage = () => {
		const nextPage = Math.max(page - 1, 0);
		setPage(nextPage);
	};

	const nextPage = () => {
		const nextPage = Math.min(page + 1, total - 1);
		setPage(nextPage);
	};
	return (
		<div>
			<div className="pokedex__container">
				<h1>Pokédex</h1>
				<Pagination
					page={page + 1}
					totalPages={total}
					onLeftClick={lastPage}
					onRightClick={nextPage}
				/>
			</div>
			<div className="pokedex__grid">
				{pokemons.map((pokemon, i) => {
					return <Pokemon pokemon={pokemon} key={pokemon.name} />;
				})}
			</div>
		</div>
	);
};

export default Pokedex;
