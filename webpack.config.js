const path = require('path');


module.exports = {


 
  entry: ["./scripts/todo-functions.js",'./scripts/todo-app.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};