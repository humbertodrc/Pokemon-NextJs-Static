import React, {FC} from "react";
import {Grid} from "@nextui-org/react";
import {FavoritesCardPokemon} from "./";

interface Props {
	favoritesPokemons: number[];
}

export const FavoritesPokemons: FC<Props> = ({favoritesPokemons}) => {
	return (
		<Grid.Container gap={2} direction="row" justify="flex-start">
			{favoritesPokemons.map((id) => (
				<FavoritesCardPokemon pokemonId={id} key={id} />
			))}
		</Grid.Container>
	);
};
