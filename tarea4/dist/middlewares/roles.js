"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function allowRoles(roles) {
    return function (req, res, next) {
        const role = req.query.role; //validar que si sea string
        if (roles.includes(role)) {
            next();
        }
        else {
            res.status(403).send({
                message: "Access denied"
            });
        }
    };
}
exports.default = allowRoles;
