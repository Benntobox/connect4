const path = require('path')

module.exports = {
  entry: './client/src/index.jsx',
  output: { 
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
            loader: "file-loader",
            options: {
              name: '[name].[ext]'
            }
        }]
      }
    ]
  }
}