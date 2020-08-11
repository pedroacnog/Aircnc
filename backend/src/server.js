const express  = require('express');

const app = express();

app.post('/users', (request, response) => {
  return response.json({message: "Hello wolrd"})
});

app.listen(3333);