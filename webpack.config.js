const path = require('path');
const webpack = require('webpack');


module.exports = {
 
  entry: './scripts/todo-app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};