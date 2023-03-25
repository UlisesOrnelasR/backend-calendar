/* 
    Rutas de Usuarios 
    host + /api/auth
*/

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
  createUser,
  userLogin,
  revalidateToken,
} = require("../controllers/auth");

router.post(
  "/register",
  [
    // middlewares
    check("name", "Name is required").not().isEmpty(),
  ],
  createUser
);

router.post("/", userLogin);

router.get("/renew", revalidateToken);

module.exports = router;
