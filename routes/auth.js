/* 
    Rutas de Usuarios 
    host + /api/auth
*/

const express = require("express");
const router = express.Router();

const { createUser } = require("../controllers/auth");

router.post("/register", createUser);

router.post("/", (req, res) => {
  res.json({
    ok: true,
    msg: "login",
  });
});

router.get("/renew", (req, res) => {
  res.json({
    ok: true,
    msg: "renew",
  });
});

module.exports = router;
