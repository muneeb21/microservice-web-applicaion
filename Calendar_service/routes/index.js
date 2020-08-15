const express = require("express");
const router = express.Router();

const Controller=require("../controllers/controller.js")


router.get('/newbooking',Controller.newBooking);

module.exports = router;