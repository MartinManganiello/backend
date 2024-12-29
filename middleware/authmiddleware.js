import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers["authorization"];
        if (!token) {
            return res.status(401).json({ status: "error", message: "No autorizado", data: {} });
        }
        const tokenData = jwt.verify(token, process.env.JWT_SECRET || "unaclavesecreta");
        if (!tokenData) {
            return res.status(401).json({ status: "error", message: "No autorizado", data: {} });
        }
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ status: "error", message: "El token ha expirado", data: {} });
        } else if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ status: "error", message: "Token inválido", data: {} });
        }

        // Error genérico
        return res.status(500).json({ status: "error", message: "Error interno del servidor", data: {} });
    }
}