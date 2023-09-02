const path = require("path");

// module.exports = {
// 	entry: './src/index.js',
// 	output: {
// 		path: path.resolve(__dirname, 'dist'),
// 		filename: 'main.js',
// 		library: 'createElement',
// 	},
// };

module.exports = {
	mode: "production",
	entry: path.resolve(__dirname, "src", "index.ts"),
	module: {
		rules: [
			// ...other rules
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "dist"),
		library: {
			name: "aa",
			type: "umd",
		},
	},
};
