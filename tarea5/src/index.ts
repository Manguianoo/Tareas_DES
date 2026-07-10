import { config } from "dotenv";
config(); 

import { createApp } from "./app";
import { connectDB } from "./config/database.config";

const port = process.env.PORT || 3000;
const app = createApp();

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
}).catch(() => {
    console.log('No se pudo conectar a MongoDB Local');
});