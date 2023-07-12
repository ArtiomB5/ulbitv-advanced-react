import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from './types/config';

export const buildLoaders = (options: IBuildOptions): webpack.RuleSetRule[] => {
    const { isDev } = options;

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev 
                        ? '[path][name]__[local]--[hash:base64:5]' 
                        : '[hash:base64:8]'
                    },
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    return [
        tsLoader,
        cssLoader
    ]
}