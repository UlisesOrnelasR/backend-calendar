const createUser = (req, res) => {
  res.json({
    ok: true,
    msg: "register",
  });
};

module.exports = {
  createUser,
};
