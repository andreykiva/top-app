module.exports = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						prettier: false,
						svgo: true,
						titleProp: true,
						svgoConfig: { plugins: [{ removeViewBox: false }] },
					},
				},
			],
		});

		return config;
	},
};
