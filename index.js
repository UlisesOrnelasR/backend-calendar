const express = require("express");
require("dotenv").config();

// console.log(process.env); // Imprime las variables de entorno

// Crear el servidor de express
const app = express();

// Directorio public
app.use(express.static("public"));

//Rutas
// app.get("/", (req, res) => {
//   res.json({
//     ok: true,
//   });
// });

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo ${process.env.PORT} `);
});
