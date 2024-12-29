import express from "express";
import { deleteRatingController, getRatingsController, createOrUpdateRatingController } from "../controller/controllerRating.js";
import { authMiddleware } from "../middleware/authmiddleware.js";
import { validationMiddleware } from "../middleware/validationmiddleware.js";
import { validationGetMovieByID } from "../validations/validationMovie.js";

const routerRating = express.Router();

routerRating.get("/:id", getRatingsController)
routerRating.post("/", authMiddleware,createOrUpdateRatingController) // Actualizar o crear
routerRating.delete("/:id",authMiddleware,validationGetMovieByID,validationMiddleware,deleteRatingController) // Eliminar

export default routerRating;