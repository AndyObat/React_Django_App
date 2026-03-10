const path = require("path");

module.exports = {
    mode: "development",

    entry: "./leadmanager/frontend/src/index.js",

    output: {
        path: path.resolve(__dirname, "leadmanager/frontend/static/frontend"),
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                type: "javascript/auto",
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            ["@babel/preset-react", { runtime: "automatic" }]
                        ],
                    },
                },
            },
            // Add a rule for CSS files
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
    }
};