import { parse } from 'csv-parse';
import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const habitablePlanets = [];

// setting conditions to find the habbitable planets
function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

export function planetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(join(dirname(fileURLToPath(import.meta.url)), "../data/kepler_data.csv"))
      .pipe(parse({
        comment: '#',
        columns: true
      }))
      .on('data', (data) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on('error', (err) => {
        console.log(err);
      })
      .on('end', () => {
        console.log(habitablePlanets.map(planet => planet.kepler_name));
        console.log(`${habitablePlanets.length} habitable planets found!`);
        resolve();
      });
  })
}