const path = require('path');

// module.exports = {
// 	entry: './src/index.js',
// 	output: {
// 		path: path.resolve(__dirname, 'dist'),
// 		filename: 'main.js',
// 		library: 'createElement',
// 	},
// };

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library : {
      name : 'aa',
      type : 'umd'
    },
  },

};
