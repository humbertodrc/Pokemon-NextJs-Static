import {FC} from "react";
import Head from "next/head";
import { Navbar } from '../ui';

interface LayoutProps {
	children: React.ReactNode;
	title?: string;
}

export const Layout: FC<LayoutProps> = ({children, title}) => {
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
			</Head>

			<Navbar />

			<main style={{
				padding:'0px 20px',
			}}>{children}</main>
		</>
	);
};
