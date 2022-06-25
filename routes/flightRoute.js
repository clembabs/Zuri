const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');




router.get("/", controller.getFlights);
router.post("/flight/add", controller.createFlight);
router.put("/flight/:id", controller.updateFlight);
router.delete("/flight/delete/:id", controller.deleteFlight);

module.exports = router;

