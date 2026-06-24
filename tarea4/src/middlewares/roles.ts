import { Request, Response, NextFunction } from "express";

function allowRoles(roles: string[]) {
    return function(req: Request, res: Response, next: NextFunction) {
        const role = req.query.role as string; //validar que si sea string
        if (roles.includes(role)) {
            next();
        } else {
            res.status(403).send({
                message: "Access denied"
            });
        }
    }
}

export default allowRoles;