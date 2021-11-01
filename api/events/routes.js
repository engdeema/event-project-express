const express = require("express");
const router = express.Router();

const {
  eventCreate,
  listFetch,
  updateEvent,
  detailEvent,
  deleteEvent,
  fullyBookedEvent,
  searchEvent,
} = require("./controllers");

router.post("/", eventCreate);
router.get("/", listFetch);
router.put("/:eventId", updateEvent);
router.delete("/:eventId", deleteEvent);
router.get("/fullybooked", fullyBookedEvent);
router.get("/:search", searchEvent);
router.get("/:eventId", detailEvent);

module.exports = router;
