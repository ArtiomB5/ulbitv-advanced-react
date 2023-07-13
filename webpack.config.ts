import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { IBuildEnv, IBuildOptions, IBuildPaths } from './config/build/types/config';

export default (env: IBuildEnv) => {
    const { mode } = env;
    const isDev = mode === 'development';
    const PORT = 3000;

    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, './src', 'index.tsx'),
        output: path.resolve(__dirname, './build'),
        html: path.resolve(__dirname, './public', 'index.html'),
        src: path.resolve(__dirname, './src'),
    }

    const webpackOptions: IBuildOptions = {
        mode,
        paths,
        isDev,
        port: PORT
    }

    const config: webpack.Configuration = buildWebpackConfig(webpackOptions)

    return config
};