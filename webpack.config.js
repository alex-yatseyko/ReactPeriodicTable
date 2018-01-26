//const webpack = require('webpack');
import Webpack from 'webpack';

module.exports = {
    entry: "./src/index.js",
    outpu: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"    }
}