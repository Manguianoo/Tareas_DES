import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import {HTTPStatus} from "../config/components";

//Esta parte es de Claude
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                role: string;
            }
        }
    }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(HTTPStatus.UNAUTHORIZED).send("Token requerido");
        return;
    }

    if (!authHeader.startsWith("Bearer ")) {
        res.status(HTTPStatus.UNAUTHORIZED).send("Formato inválido, usa Bearer token");
        return;
    }

    //Claude: Extraemos el token del encabezado de autorización
    const token = authHeader.split(" ")[1];

    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch {
        res.status(HTTPStatus.UNAUTHORIZED).send("Token inválido o expirado");
    }
}