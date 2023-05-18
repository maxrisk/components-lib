const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports =  {
  mode: "production",
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}