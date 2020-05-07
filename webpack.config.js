const path =  require('path');
const extract = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    devtool: 'eval-cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, 

            {
                test: /\.(png|svg|jpg)$/,
                use: [
                    'file-loader'
                ]
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: extract.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new extract({
            filename: 'bundle.css'
        })
    ],
    resolve: {
        alias: {
            css: path.resolve(__dirname, 'src/css'),
            js: path.resolve(__dirname, 'src/js'),
            image: path.resolve(__dirname, 'src/images'),
        },
    },
    mode: 'development'
}