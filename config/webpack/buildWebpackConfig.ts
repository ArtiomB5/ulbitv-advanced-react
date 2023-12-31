import type webpack from 'webpack'
import { type IBuildOptions } from './types/config'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildPlugins } from './buildPlugins'
import { buildDevServer } from './buildDevServer'

export const buildWebpackConfig = (options: IBuildOptions): webpack.Configuration => {
  const { mode, paths, isDev } = options
  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: buildPlugins(paths, isDev),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
