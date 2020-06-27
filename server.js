const express = require('express');
const morgan = require('morgan');


//Route files
const estudiantes = require('./routes/estudiantes');

const app = express();


// Dev login middleware
app.use(morgan('dev'));



// for parsing multipart/form-data

//Mount routers
app.use('/desarrollo', estudiantes);



const PORT =  5000;

app.listen(
  PORT,
  console.log(`Server runing  on port ${PORT}`)
);
