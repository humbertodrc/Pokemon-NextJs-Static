import {Children} from "react";
import {CssBaseline} from "@nextui-org/react";
import Document, {Html, Main, Head, NextScript} from "next/document";

const MyDocument = () => {
	return (
		<Html lang="es">
			<Head>{CssBaseline.flush()}</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

MyDocument.getInitialProps = async (context: any) => {
	const initialProps = await Document.getInitialProps(context);

	return {
		...initialProps,
		styles: [...Children.toArray(initialProps.styles)],
	};
};

export default MyDocument;
