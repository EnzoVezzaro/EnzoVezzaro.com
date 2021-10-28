module.exports = {
    module: {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
            name: '[name][hash].[ext]',
            outputPath: 'images',
            esModule: false,
        },
    }
};