import fs from 'node:fs/promises';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
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

export default Place;
