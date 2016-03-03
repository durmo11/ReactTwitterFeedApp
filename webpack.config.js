var webpack = require('webpack');
module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/src/index.jsx'
  ],
  module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: [
    'babel?cacheDirectory,presets[]=react,presets[]=es2015,presets[]=survivejs-kanban'
    ]
    },
    {
        test: /\.json$/,
        loader: 'json-loader'
    }
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: './app/dist'
  },

  plugins: [
   new webpack.HotModuleReplacementPlugin()
  ]
};
