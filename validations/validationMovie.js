import { body, query, param } from "express-validator";

export const validationPostMovie = [
    body("description").isString().withMessage("La descripcion debe ser un texto").isLength({ min: 80, max: 500 }).withMessage("La descripcion debe tener entre 80 y 500 caracteres"),
    body("gender").isString().withMessage("El genero debe ser un texto"),
];
export const validationGetMovies = [
    query("page").isNumeric().withMessage("La pagina debe ser un número"),
    query("limit").isNumeric().withMessage("El limite debe ser un número"),
];
export const validationGetMovieByID = [
    param("id").isUUID().withMessage("El id debe ser un UUID"),
]