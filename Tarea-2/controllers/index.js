const path = require('path');

const showCV = (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
};

module.exports = {showCV};