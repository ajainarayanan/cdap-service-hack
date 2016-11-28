var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var plugins = [
  new webpack.optimize.CommonsChunkPlugin("common", "common.js", Infinity),
  new LiveReloadPlugin(),
  new webpack.optimize.DedupePlugin(),
  new CopyWebpackPlugin([
    {
      from: './app.html',
      to: './app.html'
    },
    {
      from: './styles/fonts',
      to: './fonts/'
    },
    {
      from: path.resolve(__dirname, 'node_modules', 'font-awesome', 'fonts'),
      to: './fonts/'
    },
    {
      from: './styles/img',
      to: './img/'
    }
  ])
];
var mode = process.env.NODE_ENV;
if (mode === 'production' || mode === 'build') {
  plugins.push(
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify("production"),
        '__DEVTOOLS__': false
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
    })
  );
}
var loaders = [
  {
    test: /\.scss$/,
    loader: 'style-loader!css-loader!postcss-loader!sass-loader'
  },
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader!sass-loader'
  },
  {
    test: /\.(ttf|eot|svg|woff|woff(2))(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "file-loader"
  },
  {
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: {
      presets: ['react', 'es2015']
    }
  }
];

module.exports = {
  context: __dirname + '/src',
  entry: {
    'app': './app.js',
    'common': [
      'react',
      'react-dom',
      'classnames',
      'node-uuid',
      'rx',
      'reactstrap',
      'react-addons-css-transition-group',
      'd3'
    ]
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: [
          /styles/,
          /node_modules/,
          /bower_components/,
          /dist/
        ]
      }
    ],
    loaders
  },
  output: {
    filename: './[name].js',
    path: __dirname + '/dist/assets'
  },
  plugins: plugins
};
