const express = require('express'); // Importing the express module
const routerApi = require('./routes');
const cors = require('cors');
const { errorHandler, logErrors, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const app = express(); //creating a new express app
const port = process.env.PORT || 3000;

app.use(express.json()); //middleware for post requests

// CORS >>>>>
const white_list = ["http://localhost:8080", "https://myapp.com"];
const options = {
  origin: (origin, cb)=>{
    if(white_list.includes(origin) || !origin ){
      cb(null,true);
    }else{
      cb(new Error("no permitido"),)
    }
  }
}
app.use(cors(options));
//CORS >>>>>

app.get('/', (req, res) => {
  res.send('SERVER HOME');
});

routerApi(app);

//Middlewares
app.use(logErrors);
app.use(ormErrorHandler)
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {  // Setting the port we're gonna use.
  console.table({ PORT: 'Running in http://localhost:' + port + '/' });
});
