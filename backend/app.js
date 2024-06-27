import bodyParser from 'body-parser';
import express from 'express';

import {router as placeRoutes} from './routes/places.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('images'));
app.use(bodyParser.json());

// CORS

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

// ROUTES

app.use(placeRoutes);

// 404
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  res.status(404).json({message: '404 - Not Found'});
});

app.listen(PORT);
