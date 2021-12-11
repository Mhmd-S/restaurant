const path = require('path');

module.exports = {
    entry: {index :'./src/index.js',
            tab1 :'./src/tab1.js',
            tab2 :'./src/tab2.js',
            tab3 :'./src/tab3.js'},
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module:{
        rules: [
            {
                test:/\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            { 
                test:/\.(png|svg|jpeg|jpg|gif)$/i,
                type: "asset/resource"
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource"
            }
        ]
    }
}