const launches = new Map();

const latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  destination: 'kepler-442 b',
  customer: ['DOBBY', 'NASA'],
  upcoming: true,
  success: true
};

launches.set(launch.flightNumber, launch)

export function allLaunches() {
  return Array.from(launches.values());
};

export function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(launch.flightNumber, Object.assign(launch, {
    success: true,
    upcoming: true,
    customer: ['DOBBY', 'NASA'],
    flightNumber: latestFlightNumber,
  }))
}