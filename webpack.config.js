const path = require('path');

module.exports = {
    entry: {
        typing: './public/assets/js/typing.js',
        contact: "./public/assets/js/contact.js",
        header: "./public/assets/js/header.js",
        bgAnimation: './public/assets/js/bgAnimation.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "public", 'dist'),
    },
    watch: true,
    mode: "production",
}