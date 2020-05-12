const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let data = ["detail","home","result"];

let generateHtmlPlugin = function() {
    let tmp = []
    data.forEach(item => {
        
        if(item == "home") {
            tmp.push(
                new HtmlWebpackPlugin({
                    filename: `index.html`,
                    template: `./src/template/${item}/index.html`,
                    chunks: [`${item}`]
                })
            )
        } else {
            tmp.push(
                new HtmlWebpackPlugin({
                    filename: `${item}/${item}.html`,
                    template: `./src/template/${item}/${item}.html`,
                    chunks: [`${item}`]
                })
            )
        }

    });
    return tmp;
}


module.exports = {
    entry: {
        home: "./src/script/view/home/app.js",
        detail:"./src/script/view/detail/app.js",
        result:"./src/script/view/result/app.js"
    },
    output: {
        filename: "[name]/[name]_bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    {
                        loader: `style-loader`
                    },
                    {
                        loader: `css-loader`
                    },
                    {
                        loader: `postcss-loader`,
                        options: {
                            plugins: function() {
                                return [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader: `sass-loader`
                    }
                ]
            },
            {
                test:/\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'image/[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        
    ].concat(generateHtmlPlugin())
};