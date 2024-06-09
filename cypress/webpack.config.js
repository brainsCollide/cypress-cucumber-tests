const { resolve } = require('path');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.feature$/,
        use: [
          {
            loader: 'cypress-cucumber-preprocessor/loader',
          },
        ],
      },
    ],
  },
};
