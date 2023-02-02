import * as http from 'http';
import app from './app.js';
import { planetsData } from '../models/planets.model.js';

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

async function startServer() {
  await planetsData();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
};

startServer();
