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
    check("email", "Email is required").isEmail(),
    check("password", "Password must be at leats be 6 characters").isLength({
      min: 6,
    }),
  ],
  createUser
);

router.post(
  "/",
  [
    // middlewares
    check("email", "Email is required").isEmail(),
    check("password", "Password must be at leats be 6 characters").isLength({
      min: 6,
    }),
  ],
  userLogin
);

router.get("/renew", revalidateToken);

module.exports = router;
