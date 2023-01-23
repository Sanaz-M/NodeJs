import planets from '../../models/planets.model';

export function getAllPlanets (req, res) {
  return res.json(planets);
};