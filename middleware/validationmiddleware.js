import { validationResult } from "express-validator";

export const validationMiddleware = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({status: "error", menssage: "Faltan datos", data:{}, errors: error.array()});
    }
    next();
}