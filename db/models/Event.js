const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  organizer: {
    type: String,
    required: true,
    maxLength: 20,
  },

  name: { type: String, required: true },

  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  image: { type: String, required: true },

  numOfSeats: {
    type: Number,
    required: true,
    min: 5,
  },
  //function max seats
  bookedSeats: { type: Number, required: true, default: 0 },

  startDate: { type: Date, default: Date.now, required: true },

  endDate: { type: Date, required: true },

  timestamp: true,
});

module.exports = mongoose.model("Event", EventSchema);
