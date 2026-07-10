import mongoose from "mongoose";

export function connectDB() {
  return mongoose
    .connect(process.env.MONGO_URI!)
    .then(() => {
      console.log("Conectado a MongoDB Local");
    })
    .catch((error) => {
      console.log("Error al conectar a MongoDB Local", error);
      throw error;
    });
}
