module.exports = {
  entry: './e2e-test/index.js',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: require.resolve('../index.js'),
          options: {
            cacheDirectory: './e2e-test/.cash-lode',
          },
        },
      },
    ],
  },

  output: {
    filename: 'e2e-test/bundle.js',
  },
};
