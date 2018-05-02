var mongoose = require('mongoose');

// use built-in promise library instead of callbacks.
// so we tell mongoose which promise library to use (built-in one)
mongoose.Promise = global.Promise;
// connect to local database
mongoose.connect('mongodb://localhost:27017/TodoApp');

// mongoose waits for connection before saving. no need for callback like with MongoClient in playground connect file
// no need to micromanage the order of things
module.exports = {mongoose};
