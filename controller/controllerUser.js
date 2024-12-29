import { registerUser, loginUser, refreshToken } from "../service/serviceUser.js"

export const registerUserController = async (req, res) => {
    try {
        const { username, password,email,birthDate } = req.body;
        const user = await registerUser(username, password,email,birthDate);
        if (user===-1) {
            return res.status(400).json({status: "error", message: "Error en el servidor", data:{}});
        }else{
            return res.status(201).json({status: "success", message: "Usuario creado", data:user});
        }
    } catch (error) {
        return res.status(500).json({status: "error", message: "Error en el servidor", data:{}});
    }
}

export const loginUserController = async (req, res) => {
    try {
        const { username, password } = req.body;
        const {accesstoken, refreshtoken} = await loginUser(username, password);
        if (!accesstoken || !refreshtoken) {
            return res.status(400).json({status: "error", message: "Error en el servidor", data:{}});
        }else{
            return res.status(200).json({status: "success", message: "Usuario logueado", data:{accesstoken, refreshtoken}});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({status: "error", message: "Error en el servidor", data:{}});
    }
}

export const refreshTokenController = async (req, res) => {
    try {
        const refreshtoken = req.headers["x-refresh-token"]
        if (!refreshtoken) {
            return res.status(400).json({status: "error", message: "Error en el servidor", data:{}});
        }
        const accesstoken = await refreshToken(refreshtoken);
        return res.status(200).json({status: "success", message: "Token actualizado", data:{accesstoken}});
    } catch (error) {
        console.log(error)
        return res.status(500).json({status: "error", message: "Error en el servidor", data:{}});
    }
}