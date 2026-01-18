import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import path from 'path'
import merge from 'webpack-merge'
import sharedConfig, { Configuration } from './webpack.shared.config'

const devConfig: Configuration = merge(sharedConfig, {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      // Override ts-loader with babel-loader for TypeScript files in development
      // This is necessary for React Fast Refresh to work
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: true, // Run type checking asynchronously to not block HMR
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'build'),
    historyApiFallback: true,
    hot: true,
    port: 4000,
  },
})

export default devConfig
