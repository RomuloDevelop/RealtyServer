const express = require('express');
const morgan = require('morgan');
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const propertyRoute = require('./routes/property.routes');
const server = express();



server.use(morgan('dev'));
server.use(express.urlencoded({extended:true}));
server.use('/api/properties',propertyRoute);

server.get('*', (req, res) => {
  res.send('Hellow server');
});

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on port ${port}`);
});