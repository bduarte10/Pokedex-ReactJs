import React, { useState } from 'react';
import '../SearchBar/styles.scss';
import { MagnifyingGlass } from 'phosphor-react';

const SearchBar = (props) => {
	const { onSearch } = props;
	const [search, setSearch] = useState('');

	const onChangeHandler = (e) => {
		setSearch(e.target.value);
		if (e.target.value.length === 0) {
			onSearch(null);
		}
	};
	const onButtonClickHandler = async () => {
		onSearch(search);
	};

	return (
		<div className="searchbar__container">
			<div className="searchbar">
				<input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
				<button onClick={onButtonClickHandler}>
					<MagnifyingGlass size={20} />
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
