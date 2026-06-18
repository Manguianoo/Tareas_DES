const express = require("express")
const router = express.Router()
const controller = require("../controllers/contacto")

router.get("/contacto", controller.showContact)
//router.post("/contacto", controller.receiveContact) con el WebForms no lo necesitamos
router.get("/confirmacion", controller.receiveContact)

module.exports = router