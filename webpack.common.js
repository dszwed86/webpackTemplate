const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/js/main.js',
        // secondary: './src/js/secondary.js', // dodatkowe opcjonalne skrypty
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./src/index.html'),
            filename: 'index.html',
            chunks: ['main']
        }),
        // new HtmlWebpackPlugin({
        //     template: path.resolve('./src/optional.html'),  // dodatkowe strony html
        //     filename: 'optional.html',
        //     chunks: ['second']
        // }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg)$/,
                use:{
                    loader: 'file-loader',
                    options: {
                        outputPath: './img',
                        name: '[name].[ext]',
                        esModule: false,
                    },
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                }
            },
        ],
    },
};