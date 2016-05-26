module.exports = {
  entry: './src/entry.tsx',
  output: {
    filename: './built/bundle.js'
  },
  devtool: '#inline-source-map',
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx', '.webpack.js', '.web.js']
  }
};
