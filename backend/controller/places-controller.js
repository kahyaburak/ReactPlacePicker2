import Place from '../model/Place.js';

async function getPlaces(req, res) {
  try {
    const placesData = await Place.getPlaces();
    res.status(200).json({places: placesData});
  } catch (error) {
    res.status(500).json({error: 'Failed to get places'});
  }
}

async function getUserPlaces(req, res) {
  try {
    const places = await Place.getUserPlaces();
    res.status(200).json({places});
  } catch (error) {
    res.status(500).json({error: 'Failed to get user places'});
  }
}

async function putPlaces(req, res) {
  try {
    const places = req.body.places;
    await Place.updateUserPlaces(places);
    res.status(200).json({message: 'User places updated!'});
  } catch (error) {
    res.status(500).json({error: 'Failed to update user places'});
  }
}

export {getPlaces, getUserPlaces, putPlaces};
