import {FC} from "react";
import Head from "next/head";
import {Navbar} from "../ui";

interface LayoutProps {
	children: React.ReactNode;
	title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, title }) => {

	return (
		<>
			<Head>
				<title>{title || "Pokemon App"}</title>
				<meta name="author" content="Humberto Rivero" />
				<meta
					name="description"
					content={`Informacion sobre el pokemon: ${title || "Pokemon App"}`}
				/>
				<meta name="keywords" content={`${title}, pokemon, pokedex`} />
				<meta
					property="og:title"
					content={`informacion sobre el pokemon: ${title || "Pokemon App"}`}
				/>
				<meta
					property="og:description"
					content={`Informacion sobre el pokemon: ${title}`}	
				/>
				<meta
					property="og:image"
					content={`${origin}/img/banner.png`}
				/>
			</Head>

			<Navbar />

			<main
				style={{
					padding: "0px 20px",
				}}
			>
				{children}
			</main>
		</>
	);
};
