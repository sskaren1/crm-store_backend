// "Express" import
import express from 'express';
// Environment Variables import
import dotenv from "dotenv";
// CORS import
import cors from "cors";
// DB import
import connectDB from './config/db.js';
// routes import
import clientRouter from './routes/clientRouter.js';

// Crear el servidor
const app = express();
app.use(express.json()); // to be able to read the req.body

dotenv.config();

// Connect to DB
connectDB();

// Configurar CORS
// const whitelist = [process.env.FRONTEND_URL];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin) { //seguir usando POSTMAN
//       //Postman request have not origin
//       return callback(null, true);
//     } else if (whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Cors Error"));
//     }
//   },
// };
// app.use(cors(corsOptions));

// Routes
app.use("/api/clients", clientRouter);

// Port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
