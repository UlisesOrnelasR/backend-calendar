/* 
    Rutas de Usuarios 
    host + /api/auth
*/

const express = require("express");
const router = express.Router();

const {
  createUser,
  userLogin,
  revalidateToken,
} = require("../controllers/auth");

router.post("/register", createUser);

router.post("/", userLogin);

router.get("/renew", revalidateToken);

module.exports = router;
