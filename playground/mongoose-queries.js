const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5aea009324d2fb3a079d95cf';
//
// if(!ObjectId.isValid(id){
//   console.log('ID not valid');
// });

// mongoose will conver to object id for us

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo', todo);
// });

Todo.findById(id).then((todo)=>{
  if(!todo){
    return console.log('Id not found');
  }
  console.log('Todo by id', todo);
}).catch((e)=> console.log(e))

var userId = '5ae777047117a6bb3c412541';

User.findById(userId).then((user)=>{
  if(!user){
    return console.log('User not found');
  };
  console.log('User by id:', user);
}).catch((e)=> console.log(e));
