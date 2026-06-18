const path = require("path");

const showContact = (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'contacto.html'));
};

const receiveContact = (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'confirmacion.html'));
}
module.exports = { showContact, receiveContact };
