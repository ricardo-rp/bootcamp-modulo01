const express = require('express');

const server = express();

// Query params -> ?id=1 -> req.query.id
// Route params -> /users/:id -> req.params.id
// Request body -> { "name": "Ricardo", "email": ricardoromero4444@gmail.com }
// req.body

server.get('/test', (req, res) => {
  return res.json({ message: 'Hello world' });
});

server.listen(3000);
