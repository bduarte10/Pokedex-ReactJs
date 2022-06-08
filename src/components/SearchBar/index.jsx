import React, { useState } from 'react';
import '../SearchBar/styles.scss';
import { searchPokemon } from '../../api';

export const SearchBar = () => {
	const [pokemon, setPokemon] = useState();
	const [search, setSearch] = useState('dito');
	const onChangeHandler = (e) => {
		setSearch(e.target.value);
	};
	const onButtonClickHandler = () => {
		onSearchHandler(search);
	};
	const onSearchHandler = async (pokemon) => {
		const result = await searchPokemon(pokemon);
		setPokemon(result);
	};
	return (
		<div className="searchbar__container">
			<div className="searchbar">
				<input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
				<button onClick={onButtonClickHandler}>Buscar</button>
			</div>
			{pokemon ? (
				<div>
					<div>Nome: {pokemon.name}</div>
					<div>Peso: {pokemon.weight}</div>
					<img src={pokemon.sprites.front_default} alt="imagem do pokemon" />
				</div>
			) : null}
		</div>
	);
};
