import {useEffect} from "react";
import {GetStaticProps, NextPage, GetStaticPaths} from "next";
import {Button, Card, Container, Grid, Image, Text} from "@nextui-org/react";
import {pokeApi} from "../../api";
import {Layout} from "../../components/layouts";
import {Pokemon} from "../../interfaces";

interface Props {
	pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {
	// console.log("pokemon", pokemon);

	const onToggleFavorite = () => {
		console.log("ID: " + pokemon.id);
		localStorage.setItem("favorite", `${pokemon.id}`);
	};

	// Para saber que esta del lado del servidor o del cliente
	// console.log({existe: typeof window})

	useEffect(() => {
		console.log("useEffect", localStorage.getItem("favorite"));
	}, []);

	return (
		<Layout title={pokemon.name}>
			<Grid.Container css={{marginTop: "5px"}} gap={2}>
				<Grid xs={12} sm={4}>
					<Card hoverable css={{padding: "30px"}}>
						<Card.Body>
							<Card.Image
								src={
									pokemon.sprites.other?.dream_world.front_default ||
									"/no-image.png"
								}
								alt={pokemon.name}
								width="100%"
								height={200}
							/>
						</Card.Body>
					</Card>
				</Grid>
				<Grid xs={12} sm={8}>
					<Card>
						<Card.Header
							css={{display: "flex", justifyContent: "space-between"}}
						>
							<Text h1 transform="capitalize">
								{pokemon.name}
							</Text>
							<Button onClick={onToggleFavorite} color={"gradient"} ghost>
								Guardar en favoritos
							</Button>
						</Card.Header>
						<Card.Body>
							<Text size={30}>Sprites:</Text>
							<Container display="flex" direction="row" gap={0}>
								<Image
									src={pokemon.sprites.front_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.front_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	);
};

// Static Path se ejecuta solo del lado del servidor en Build time:
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
	// Generar un array que va a contener los params que se van a "ID"
	const pokemonsPatths151 = [...Array(151)].map(
		(value, index) => `${index + 1}`
	);

	// console.log("pokemonsPatths151", pokemonsPatths151);

	// Los params tienes que coincidir con el id [id].tsx
	return {
		paths: pokemonsPatths151.map((id) => ({
			params: {id},
		})),
		// fallback: false me permite que se muestre el 404 si no encuentra la pagina por ID
		fallback: false,
	};
};

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
