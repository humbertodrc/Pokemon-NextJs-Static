import {pokeApi} from "../api";
import {Pokemon} from "../interfaces";

export const getPokemonInfo = async (nameOrID: string) => {

	try {
		const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrID}`);
		return {
			id: data.id,
			name: data.name,
			sprites: data.sprites,
		};
	} catch (error) {
		return null; // si no existe el ID retorna null
	}

	
};
