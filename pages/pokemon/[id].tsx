import {GetStaticProps, NextPage,  GetStaticPaths} from "next";
import React from "react";
import { pokeApi } from '../../api';
import {Layout} from "../../components/layouts";
import { Pokemon} from '../../interfaces';

interface Props {
	pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  
  // console.log("pokemon", pokemon);

	return (
		<Layout title="Algun Pokemon">
			<h2>
				{pokemon.name}
			</h2>
		</Layout>
	);
};

// Static Path se ejecuta solo del lado del servidor en Build time:
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {

  // Generar un array que va a contener los params que se van a "ID" 
  const pokemonsPatths151 = [...Array(151)].map((value, index) => `${index + 1}`);

  // console.log("pokemonsPatths151", pokemonsPatths151);

  // Los params tienes que coincidir con el id [id].tsx
  return {
    paths: pokemonsPatths151.map(id => ({
      params: {id}
    })),
    // fallback: false me permite que se muestre el 404 si no encuentra la pagina por ID
    fallback: false,
  }
}


// SSG: Server Side Generated
export const getStaticProps: GetStaticProps = async ({params}) => {

  // console.log("params", params);
  const {id} = params as {id: string};

	const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

	return {
		props: {
      pokemon: data,
		},
	};
};

export default PokemonPage;
