const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = (baseConfig,{
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        inline: true,
        port: 9000
    }
})