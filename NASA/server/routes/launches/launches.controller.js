import { allLaunches, addNewLaunch } from "../../models/launches.model.js";

export function httpGetAllLaunches(req, res) {
  return res.status(200).json(Array.from(allLaunches()));
}

export function httpAddNewLaunch(req, res) {
  const launch = req.body;

  if (!launch.mission || !launch.rocket || !launch.launchDate) {
    return res.status(400).json({
      error: "Missing required launch property "
    })
  };

  launch.launchDate = new Date(launch.launchDate);

  if (launch.launchDate.toString() === "Invalid Date") {
    return res.status(400).json({
      error: "Invalid launch date"
    })
  };

  addNewLaunch(launch);

  return res.status(201).json(launch);
}