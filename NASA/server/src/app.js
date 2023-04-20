import express from "express";
import { planetsRouter } from '../routes/planets/planets.router.js';
import cors from "cors";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import morgan from "morgan";


const app = express();

app.use(cors({
  origin: "http://localhost:3000/"
}));

app.use(morgan('combined'));

app.use(express.json());
app.use(planetsRouter);
app.use(express.static(join(dirname(fileURLToPath(import.meta.url)), "../public")))

app.get('/', (req, res) => {
  res.sendFile(join(dirname(fileURLToPath(import.meta.url)), "../public/index.html"))
})

export default app;

