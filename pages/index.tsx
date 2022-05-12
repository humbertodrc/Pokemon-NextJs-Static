import {NextPage, GetStaticProps} from "next";
import {Layout} from "../components/layouts";

const HomePage: NextPage = (props) => {
	console.log("props", props);

	return (
		<Layout title="Listado de Pokemons">
			<ul>
				<li>Pokémom</li>
				<li>Pokémom</li>
				<li>Pokémom</li>
				<li>Pokémom</li>
				<li>Pokémom</li>
				<li>Pokémom</li>
				<li>Pokémom</li>
			</ul>
		</Layout>
	);
};

// SSG: Server Side Generated
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
// Esta funcion se ejecuta solo del lado del servidor y en Build time solo se puede usar en PAGES.
export const getStaticProps: GetStaticProps = async (ctx) => {
	console.log("Hola Mundo");

	return {
		props: {
			name: "Humberto",
		},
	};
};

export default HomePage;
