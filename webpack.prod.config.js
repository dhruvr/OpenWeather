var webpack = require('webpack');
var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    comments: false
});

var definePlugin = new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
});

var commonChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    chunks: ['vendor', 'source'],
    filename: 'vendor.bundle.js'
});

module.exports = {
    context: __dirname + '/client/js',
    entry: {
        source: ['./init.jsx'],
        vendor: [
            'react',
            'react-dom',
            'redux',
            'axios',
            'react-redux',
            'moment'
        ]
    },

    output: {
        filename: "[name].bundle.js"
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        loaders: [
            { test: /\.json$/, loader: 'json-loader' },
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            { test: /\.css$/, loader: "css-loader" },
        ]
    },

    plugins: [commonChunkPlugin, definePlugin, uglifyPlugin],

    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },

    target: 'web'
};