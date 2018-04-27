// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// this is object destructuring. you set a variable to an object property

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if (err){
    return console.log('Unable to connect to mongodb server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
// // insertone lets you insert doc into collect. takes in object of key/val pairs
// // callback function
//   db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed: false
//   }, (err, result)=>{
//     if(err){
//       return console.log('Unable to insert todo', err);
//     }
//
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   })
    // db.collection('Users').insertOne({
    //   name: 'Laurent',
    //   age: 31,
    //   location: 'Houston'
    // }, (err, result)=> {
    //   if (err){
    //     return console.log('Unable to insert user', err);
    //   }
    //
    //   console.log(result.ops[0]._id.getTimestamp());
    // })

  client.close();
});
