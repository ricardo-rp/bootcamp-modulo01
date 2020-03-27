const express = require('express');

const server = express();

// express.use() adds a middleware to the express middleware stack 
server.use(express.json()); // Adds a body parser that parses JSON to all routes

const port = 3000;

// Query params -> ?id=1 -> req.query.id
// Route params -> /users/:id -> req.params.id
// Request body -> { "name": "Ricardo", "email": ricardoromero4444@gmail.com } -> req.body

// App state:
const users = ['Ricardo', 'Gabriela', 'Gustavo']
// CRUD -> Create Read Update Delete

// CREATE
server.post('/users', (req,res) => {
  const { user } = req.body;

  users.push(user);

  return res.json(users);
});


// READ
server.get('/users', (req, res) => {
  return res.json(users);
});

server.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});


// UPDATE
server.put('/users/:index', (req, res) => {
  const { index } = req.params;
  const { user } = req.body;

  users[index] = user;

  return res.json(users);
});

// DELETE
server.delete('/users/:index', (res, req) => {
  const { index } = req.params;
  
  users.splice(index, 1); // Remove 1 element at index `index`

  return res.send(); // Will send empty HTTP response with status code 200 
});

console.log('Listening on localhost:' + port)
server.listen(port);
