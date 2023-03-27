/* 
    Rutas de los eventos 
    host + /api/events
*/
const express = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validateFields");
const { validateJWT } = require("../middlewares/validateJWT");

const router = express.Router();

const { isDate } = require("../helpers/isDate");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");

// Todas tienen que pasar por la validacion del token
router.use(validateJWT);

// Obtener eventos
router.get("/", getEvents);

// Crear evento
router.post(
  "/",
  [
    // middlewares
    check("title", "Title is required").not().isEmpty(),
    check("start", "Start date is required").custom(isDate),
    check("end", "End date is required").custom(isDate),
    validateFields,
  ],
  createEvent
);

// Actualizar evento
router.put("/:id", updateEvent);

// Borra event o
router.delete("/:id", deleteEvent);

module.exports = router;
