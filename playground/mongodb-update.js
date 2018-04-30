// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// this is object destructuring. you set a variable to an object property

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if (err){
    return console.log('Unable to connect to mongodb server');
  }

  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // FIND ONE AND UPDATE
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5ae0f3f81c4af80b8d2c59b1")
  }, {
    $set: {
      name: 'Laurent'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });

  // client.close();
});
