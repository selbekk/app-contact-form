var path = require('path');

var paths = {
    assets: 'src/main/resources/assets/'
};

module.exports = {
    resolve: {
        root: [
            path.resolve('./src/main/resources')
        ]
    },
    entry: path.join(__dirname, paths.assets, 'js', 'main.js'),
    output: {
        path: path.join(__dirname, paths.assets),
        filename: 'contact-form.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loaders: ['style-loader', 'css-loader' ] },
            { test: /\.js?$/, exclude: /(node_modules)/, loader: 'babel' }
        ]
    }
};
