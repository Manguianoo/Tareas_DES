const express = require("express");
const path    = require("path");

const indexRoutes = require("./routes/index");
const contactoRoutes = require("./routes/contacto");

const app  = express(); 
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(indexRoutes);
app.use(contactoRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
