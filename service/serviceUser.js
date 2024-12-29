import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../model/modelUser.js"
import { generateRefreshToken, generateAccessToken } from "../utils/generateTokens.js";


export const registerUser = async (username, password, email, birthDate) => {
    const usuario = await User.findOne({ username });
    console.log(usuario)
    if (usuario) {
        return -1
    }
    const passhash = await bcrypt.hash(password, 10);
    const newUsuario = await User.create({ username, password: passhash, email, birthDate });
    return newUsuario
}

export const loginUser = async (username, password) => {
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return -1
        }
        const passmatch = await bcrypt.compare(password, user.password);
        if (!passmatch) {
            return -1
        }
        const accesstoken = generateAccessToken({ username, password: user.password, id: user._id });
        const refreshtoken = generateRefreshToken({ username, password: user.password, id: user._id });
        return { accesstoken, refreshtoken }
    } catch (error) {
        console.log(error)
    }

}

export const refreshToken = async (refreshToken) => {
    const user = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET || "unaclavesecreta");

    const userDB = await User.findOne({ username: user.username });

    if (!userDB) {
        return -1
    }
    const accesstoken = generateAccessToken({ username: user.username, password: user.password, id: user._id });
    return accesstoken
}