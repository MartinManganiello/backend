import express from "express";
import { getMoviesController,getMoviesFilterController,getMovieController,createMovieController,updateMovieController,deleteMovieController,getMoviePopuladoController } from "../controller/controllerMovie.js";
import { authMiddleware } from "../middleware/authmiddleware.js";
import { validationGetMovies,validationGetMovieByID,validationPostMovie } from "../validations/validationMovie.js";
import { validationMiddleware } from "../middleware/validationmiddleware.js";

const routerMovie = express.Router();

routerMovie.get("/",getMoviesController)
routerMovie.get("/filter",validationGetMovies,validationMiddleware,getMoviesFilterController) // Listar todos con paginación o Listar uno con paginación
routerMovie.get("/:id",validationGetMovieByID,validationMiddleware,getMovieController) // Listar un registro por ID
routerMovie.get("/populado/:id",validationGetMovieByID,validationMiddleware,getMoviePopuladoController) // Lista una movie con sus Ratings asociados paginado
routerMovie.post("/",authMiddleware,validationPostMovie,validationMiddleware,createMovieController) // Crea una movie
routerMovie.put("/:id",authMiddleware,validationGetMovieByID,validationMiddleware,updateMovieController) // Actualiza una movie
routerMovie.delete("/:id",authMiddleware,validationGetMovieByID,validationMiddleware,deleteMovieController) // Eliminar una movie

export default routerMovie;