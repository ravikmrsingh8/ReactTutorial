
const path = require('path');

const OUTPUT_PATH =  path.join(__dirname , 'public');
module.exports = {
    mode: 'development',
    entry: './src/IndecisionAppV4/app.js',
    output: {
        path: OUTPUT_PATH,
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};