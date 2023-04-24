import launches from "../../models/launches.model";

export function getAllLaunches(req, res) {
  return res.status(200).json(Array.from(launches.values()));
}