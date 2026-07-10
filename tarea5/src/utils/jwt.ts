import jwt, { SignOptions } from "jsonwebtoken";

//Esto lo saque de Claude
interface JwtPayload {
    id: string;
    email: string;
    role: string;
}

// Generar token
export function generateToken(payload: JwtPayload): string {
    const options: SignOptions = {
        expiresIn: (process.env.JWT_EXPIRES_IN || '1h') as SignOptions['expiresIn']
    };
    return jwt.sign(payload, process.env.JWT_SECRET!, options);
}

// Verificar token
export function verifyToken(token: string): JwtPayload {
    return jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
}