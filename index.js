import express from "express";
import cors from "cors";
import env from "dotenv";
import mongoose from "mongoose";
import { authMiddleware } from "./middleware/authmiddleware.js";
import { logger } from "./config/Winston.js";
import routerMovie from "./router/routerMovie.js";
import routerRating from "./router/routerRating.js";
import routerUser from "./router/routerUser.js";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert { type: "json" };


env.config();
const PORT = process.env.BACKEND_PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors({
  origin: "*",
  allowedHeaders: ["Content-Type", "Authorization", "x-refresh-token"],
}));

app.use("/movies", routerMovie);
app.use("/rating", routerRating);
app.use("/auth", routerUser);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.get("/protected",authMiddleware, (req, res) => {
  res.json({ message: "Acceso permitido", user: req.user });
});

app.use((req, res) => {
  res.status(404).send("<h1>404<h1>");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    logger.info("Connected to MongoDB")
  })
  .catch((error) => {
    logger.info("Error connecting to MongoDB:", error)
  });

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
});
