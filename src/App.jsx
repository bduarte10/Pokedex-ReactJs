import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import Pokedex from './components/Pokedex';
import SearchBar from './components/SearchBar';
import { getPokemons, getPokemonData, searchPokemon } from './api';
import { FavoriteProvider } from './contexts/favoritesContext';

const localStorageKey = 'favorite_pokemon';

function App() {
	const [pokemons, setPokemons] = useState([]);
	const [page, setPage] = useState(0);
	const [total, setTotal] = useState(0);
	const [favorites, setFavorites] = useState([]);
	const [notFound, setNotFound] = useState(false);
	const [searching, setSearching] = useState(false);
	const fetchPokemons = async () => {
		try {
			const data = await getPokemons(25, 25 * page);
			const promises = data.results.map(async (pokemon) => {
				return await getPokemonData(pokemon.url);
			});
			const results = await Promise.all(promises);
			setPokemons(results);
			setTotal(Math.ceil(data.count / 25));
			setNotFound(false);
		} catch (err) {}
	};

	const loadFavoritePokemons = () => {
		const pokemons =
			JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
		setFavorites(pokemons);
	};
	useEffect(() => {
		loadFavoritePokemons();
	}, []);

	useEffect(() => {
		if (!searching) fetchPokemons();
	}, [page]);

	const updateFavoritePokemons = (name) => {
		const updated = [...favorites];
		const isFavorite = updated.indexOf(name);
		if (isFavorite >= 0) {
			updated.splice(isFavorite, 1);
		} else {
			updated.push(name);
		}
		setFavorites(updated);
		window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
	};

	const onSearchHandler = async (pokemon) => {
		if (!pokemon) {
			return fetchPokemons();
		}
		setNotFound(false);
		setSearching(true);

		const result = await searchPokemon(pokemon);
		if (!result) {
			setNotFound(true);
			return;
		} else {
			setPokemons([result]);
			setPage(0);
			setTotal(1);
		}
		setSearching(false);
	};

	return (
		<FavoriteProvider
			value={{
				favoritePokemons: favorites,
				updateFavoritePokemons: updateFavoritePokemons,
			}}
		>
			<div>
				<Navbar />
				<div>
					<SearchBar onSearch={onSearchHandler} />
					{notFound ? (
						<div className="not-found-text">Não encontramos seu Pokemon 😭</div>
					) : (
						<Pokedex
							pokemons={pokemons}
							page={page}
							setPage={setPage}
							total={total}
						/>
					)}
				</div>
			</div>
		</FavoriteProvider>
	);
}

export default App;
