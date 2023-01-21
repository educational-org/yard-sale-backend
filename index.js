const express = require('express'); // Importing the express module
const routerApi = require('./routes');

const app = express(); //creating a new express app
const port = 6969;

app.use(express.json()) //middleware for post requests

app.get('/', (req, res) => {
  //setting an address where to launch and we send a message.
  res.send('Hello this is my first server');
});

routerApi(app);

app.listen(port || 3000, () => {
  // Setting the port we're gonna use.
  console.table({ PORT: 'Running in http://localhost:' + port + '/' });
});
