"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roles_1 = __importDefault(require("../middlewares/roles"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send({
        message: "Public route"
    });
});
router.get('/admin', (0, roles_1.default)(['admin']), (req, res) => {
    res.send({
        message: "Welcome admin"
    });
});
router.get('/reports', (0, roles_1.default)(['admin', 'manager']), (req, res) => {
    res.send({
        message: "Reports area"
    });
});
router.get('/inventory', (0, roles_1.default)(['employee', 'manager']), (req, res) => {
    res.send({
        message: "Inventory area"
    });
});
exports.default = router;
