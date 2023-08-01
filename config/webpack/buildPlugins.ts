import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { type IBuildPaths } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export const buildPlugins = (paths: IBuildPaths, isDev: boolean): webpack.WebpackPluginInstance[] => {
  return [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      _IS_DEV_: JSON.stringify(isDev)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ]
}
