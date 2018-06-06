require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const universitiesRoutes = require('./routes/universities');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (request, response) =>{
  response.send('university-crud: This thing is running!')
});

app.use('/universities', universitiesRoutes);

app.listen( process.env.PORT, () => {
  console.log(`university-crud: Application is listening on port no. ${process.env.PORT}...`)
});
