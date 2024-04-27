# 📅 Backend Calendar

Este es una aplicación de backend para un calendario que proporciona APIs RESTful. La aplicación está construida con Node.js y Express, y usa MongoDB como su base de datos. La aplicación proporciona autenticación usando JSON Web Tokens (JWT) y hashing de contraseñas usando bcrypt.

## Requisitos

- Node.js
- MongoDB

## Instalación

1.  Clona el repositorio

    `git clone https://github.com/UlisesOrnelasR/backend-calendar.git`

2.  Instala las dependencias

        `cd backend-calendar npm install`

3.  Crea un archivo `.env` y proporciona las variables de entorno necesarias. Puedes usar el archivo `.env.example` como plantilla.

        `touch .env cp .env.example .env`

## Uso

1.  Ejecuta el servidor de desarrollo

    `npm run dev`

2.  Realiza solicitudes a `http://localhost:4001/api/` usando tu cliente API preferido.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`

Ejecuta la aplicación en modo de desarrollo usando nodemon.  
El servidor se recargará automáticamente si haces cambios.

### `npm start`

Ejecuta la aplicación en modo de producción.  
El servidor no se recargará automáticamente si haces cambios.

### `npm test`

Ejecuta el corredor de pruebas en el modo interactivo de observación.  
En este momento, no hay pruebas disponibles.

## Dependencias

- bcryptjs
- cors
- dotenv
- express
- express-validator
- jsonwebtoken
- moment
- mongoose
- nodemon

## Licencia

Este proyecto está licenciado bajo la Licencia ISC. Consulta el archivo `LICENSE` para obtener más detalles.

![login](https://github.com/UlisesOrnelasR/backend-calendar/assets/99143567/fe8c9dde-e277-4352-92c9-d5cc45ca6ec2)

![new-event](https://github.com/UlisesOrnelasR/backend-calendar/assets/99143567/d95833bb-5d05-41d7-ab38-c5ea8c327298)


