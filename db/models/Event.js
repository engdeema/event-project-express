const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  organizer: {
    type: String,
    // required: true,
    maxLength: 20,
    // validate: [exceedsChar, "should't exceeds 20 charachter!"],
  },

  name: {
    type: String,
    required: true,
    validate: [exclude, "should't return the word : event"],
  },

  email: {
    type: String,
    // required: true,
    lowercase: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  image: {
    type: String,
    // required: true
  },

  numOfSeats: {
    type: Number,
    required: true,
    min: 5,
  },
  //function max seats
  bookedSeats: {
    type: Number,
    required: true,
    default: 0,
    validate: [
      bookedSeatsValidator,
      "bookedSeats must be less than numberOfSeats",
    ],
  },

  startDate: {
    type: Date,
    default: Date.now,
    // required: true
  },

  endDate: {
    type: Date,
    //  required: true
  },

  // timestamp: true,
});
// function that validate the startDate and endDate
function bookedSeatsValidator() {
  // `this` is the mongoose document
  return this.bookedSeats <= this.numOfSeats;
}

function exclude() {
  return !this.name.includes("event");
}
// function exceedsChar() {
//   return !this.organizer.length > 20;
// }
module.exports = mongoose.model("Event", EventSchema);
