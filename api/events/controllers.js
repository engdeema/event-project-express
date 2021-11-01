const Event = require("../../db/models/Event");

exports.eventCreate = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    return res.status(201).json(newEvent);
  } catch (error) {
    res.json({ message: error.message });
  }
};

exports.listFetch = async (req, res) => {
  try {
    const events = await Event.find();
    return res.json(events);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    if (req.body) {
      const deleteMany = await Event.deleteMany({ _id: eventId }, req.body);
    } else {
      await event.remove();
      return res.status(204).end();
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await Event.findById(req.params.eventId);

    if (event) {
      const updateEvent = await Event.findByIdAndUpdate(
        { _id: eventId },
        req.body,
        { new: true }
      );

      return res.json(updateEvent);
    } else {
      return res.status(404).json({ message: "event not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.detailEvent = async (req, res) => {
  const { eventId } = req.params;
  try {
    const event = await Event.findOne({ _id: eventId });
    return res.json(event);
  } catch (error) {
    console.log(error);
  }
};

exports.fullyBookedEvent = async (req, res) => {
  try {
    const events = await Event.find({
      $expr: { $eq: ["$numOfSeats", "$bookedSeats"] },
    });
    return res.json(events);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.searchEvent = async (req, res) => {
  try {
    // const search = await Event.find({req.query})

    return res.json(search);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
