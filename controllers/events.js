const { response } = require("express");
const Event = require("../models/Event");

const getEvents = (req, res = response) => {
  res.json({
    ok: true,
    msg: "get Events",
  });
};

const createEvent = async (req, res = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;
    const eventSaved = await event.save();
    res.json({
      ok: true,
      event: eventSaved,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Talk with administrator...",
    });
  }
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
