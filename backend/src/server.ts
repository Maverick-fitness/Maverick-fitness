import express from "express";
import cors from "cors";
import helmet from "helmet";
import { env } from "./config/env.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Gym Management API is running",
  });
});

app.listen(env.PORT, () => {
  console.log(`Server running at http://localhost:${env.PORT}`);
});