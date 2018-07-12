
const path = require('path');

const CURRENT_DIR =  __dirname ;
console.log(path.join(CURRENT_DIR, 'node_modules'));


module.exports = {
    mode: 'development',
    entry: './src/app/store/ExpenseStore.js',
    output: {
        path: path.join(CURRENT_DIR, 'public'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
            exclude: /node_modules/
        }]
    },

    //source map
    devtool: 'cheap-module-eval-source-map',
    
    devServer: {
        contentBase : path.join(__dirname , 'public'),
        historyApiFallback: true
    } 
};