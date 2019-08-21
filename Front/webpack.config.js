module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|css)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'style-loader', 'css-loader']
      }
    ]
  }
};