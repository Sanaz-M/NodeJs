import { habitablePlanets } from '../../models/planets.model.js';


export function getAllPlanets(req, res) {
  return res.json(habitablePlanets);
};