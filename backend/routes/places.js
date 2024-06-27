import express from 'express';

import {
  getPlaces,
  getUserPlaces,
  putPlaces,
} from '../controller/places-controller.js';

const router = express.Router();

router.get('/places', getPlaces);

router.get('/user-places', getUserPlaces);

router.put('/user-places', putPlaces);

export {router};
