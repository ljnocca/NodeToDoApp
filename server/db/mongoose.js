var mongoose = require('mongoose');

// use built-in promise library
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// mongoose waits for connection before saving

module.exports = {mongoose};
