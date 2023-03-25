const express = require("express");

const createUser = (req, res = express.response) => {
  res.json({
    ok: true,
    msg: "register",
  });
};

module.exports = {
  createUser,
};
