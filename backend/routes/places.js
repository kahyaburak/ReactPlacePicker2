const express = require('express');

const placeController = require('../controller/places-controller');

const router = express.Router();

router.get('/places', placeController.getPlaces);

router.get('/user-places', placeController.getUserPlaces);

router.put('/user-places', placeController.putPlaces);

module.exports = router;
