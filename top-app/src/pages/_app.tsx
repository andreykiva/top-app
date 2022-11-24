import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/global.css';
import React from 'react';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Head>
				<title>OwlTop - наш лучший топ</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
