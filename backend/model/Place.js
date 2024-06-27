// models/place.js
const fs = require('node:fs/promises');
const path = require('path');

class Place {
  static placesFilePath = path.join(__dirname, '../data/places.json');
  static userPlacesFilePath = path.join(__dirname, '../data/user-places.json');

  static async getPlaces() {
    const fileContent = await fs.readFile(this.placesFilePath);
    return JSON.parse(fileContent);
  }

  static async getUserPlaces() {
    const fileContent = await fs.readFile(this.userPlacesFilePath);
    return JSON.parse(fileContent);
  }

  static async updateUserPlaces(places) {
    await fs.writeFile(this.userPlacesFilePath, JSON.stringify(places));
  }
}

module.exports = Place;
