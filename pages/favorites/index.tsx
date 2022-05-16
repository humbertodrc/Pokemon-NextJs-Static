import {useEffect, useState} from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from '../../components/ui';
import {localStorageFavorites} from "../../utils";
import { FavoritesPokemons } from '../../components/pokemon';

const FavoritesPage = () => {

	const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

	useEffect(() => {
		setFavoritesPokemons(localStorageFavorites.pokemons());
	}, []);

	return (
		<Layout title="Pokémons - Favoritos">
		
			{favoritesPokemons.length === 0
				? (	<NoFavorites />)
				: (<FavoritesPokemons favoritesPokemons={favoritesPokemons } /> )}
		</Layout>
	);
};

export default FavoritesPage;
