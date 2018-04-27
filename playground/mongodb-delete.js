// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// this is object destructuring. you set a variable to an object property

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if (err){
    return console.log('Unable to connect to mongodb server');
  }

  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // DELETE MANY
  // db.collection('Users').deleteMany({name:'Laurent'}).then((result)=>{
  //   console.log(result);
  // });

  // DELTE ONE
  // db.collection('Todos').deleteOne({_id:'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // })

  // FIND ONE AND DELETE
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5ae2012fec5db01090a1c283")}).then((result)=>{
    console.log(result);
  })

  // client.close();
});
