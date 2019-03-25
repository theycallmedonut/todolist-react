const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        libraryTarget: "umd",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [

            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            {
                test: /\.css$/,
                // include: join(__dirname, 'src'),
                // use: ExtractTextPlugin.extract({ use: 'css-loader' })
                use: [
                    { loader: "css-loader" },
                ]
            },
            // {
            //     test: /\.scss$/,
            //     include: join(__dirname, 'src'),
            //     exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/, /\.(less|config|variables|overrides)$/],
            //     use: ExtractTextPlugin.extract({
            //         use: [
            //             { loader: "css-loader" },
            //             { loader: "scss-loader" }
            //         ],
            //         fallback: "style-loader"
            //     })
            // },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)(\?\S*)?$/,
                use: [
                    'file-loader', 'url-loader?limit=25000'
                ]
            },
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['dist'] }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            // filename: './index.html',
            inject: 'body',
            favicon: './public/favicon.ico',
        }),
    ]
};