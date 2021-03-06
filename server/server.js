var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

// return value of bodyParser.json is the midleware we need to give to epxress
app.use(bodyParser.json());

// SAVE
app.post('/todos', (req, res)=> {
  var todo = new Todo({
    text: req.body.text
  })

  todo.save().then((doc)=>{
    res.send(doc);
  }, (e)=>{
    res.status(400).send(e);
  });
});

// GET
app.get('/todos', (req, res)=>{
  Todo.find().then((todos)=>{
    res.send({todos})
  }, (e)=>{
    res.status(400).send(e);
  });
});

app.listen(3000, ()=>{
  console.log('Started on port 3000');
});

module.exports = {app};
