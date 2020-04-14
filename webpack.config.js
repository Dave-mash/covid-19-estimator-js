const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV || 'development';

module.exports = {
    mode,
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'bundle.js',
        publicPath: '/covid-19-estimator-js/dist/'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.html$/,
            use: [{
                loader: "html-loader"
            }]
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            favicon: 'public/virus.png',
            filename: 'index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/dist/',
        compress: true,
        port: 9000
    },
    devtool: (mode === 'development') ? 'inline-source-map' : false
};