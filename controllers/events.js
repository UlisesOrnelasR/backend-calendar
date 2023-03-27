const { response } = require("express");
const Event = require("../models/Event");

const getEvents = (req, res = response) => {
  res.json({
    ok: true,
    msg: "get Events",
  });
};

const createEvent = (req, res = response) => {
  // verificamos que tenga el evnto
  console.log(req.body);
  res.json({
    ok: true,
    msg: "create Events",
  });
};

const updateEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: "update Event",
  });
};

const deleteEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: "delete Event",
  });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
