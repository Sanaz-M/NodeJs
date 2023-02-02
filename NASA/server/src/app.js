import express from "express";
import { planetsRouter } from '../routes/planets/planets.router.js';
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(planetsRouter);

export default app;

