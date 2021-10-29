const express = require("express");
const router = express.Router();

const {
  eventCreate,
  listFetch,
  updateEvent,
  detailEvent,
  deleteEvent,
  fullyBookedEvent,
} = require("./controllers");

router.post("/", eventCreate);
router.get("/", listFetch);
router.put("/:eventId", updateEvent);
router.delete("/:eventId", deleteEvent);
router.get("/fullybooked", fullyBookedEvent);
router.get("/:eventId", detailEvent);

module.exports = router;
