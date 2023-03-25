const express = require("express");

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
app.listen(4000, () => {
  console.log(`Servidor corriendo ${4000} `);
});
