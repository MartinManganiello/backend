import express from "express";
import { loginUserController, registerUserController, refreshTokenController } from "../controller/controllerUser.js";

const routerUser = express.Router();

routerUser.post("/login", loginUserController);
routerUser.post("/register", registerUserController);
routerUser.post("/token", refreshTokenController);

export default routerUser;