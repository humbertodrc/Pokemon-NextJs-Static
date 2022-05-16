import {Container, Image, Text} from "@nextui-org/react";


export const NoFavorites = () => {

	return (
		<Container
			css={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				alignSelf: "center",
				height: "calc(100vh - 10px)",
			}}
		>
			<Text h1>No hay favoritos</Text>
			<Image
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
				alt="ditto"
				width={250}
				height={250}
				css={{
					opacity: 0.2,
				}}
			/>
		</Container>
	);
};
