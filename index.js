const express = require("express");
require("dotenv").config(); // Carga las variables de entorno del archivo .env y unicamente es requerido llamarse una vez en el proyecto (index.js) para que esten disponibles en toda la aplicacion
const { dbConnection } = require("./database/config");

// console.log(process.env); // Imprime las variables de entorno

// Crear el servidor de express
const app = express();

// Database
dbConnection();

// Directorio public
app.use(express.static("public"));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));
// TODO: CRUD: Eventos

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo ${process.env.PORT} `);
});
