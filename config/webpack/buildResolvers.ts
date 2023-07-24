import type webpack from 'webpack'
import { type IBuildOptions } from './types/config'

export const buildResolvers = (options: IBuildOptions): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}