const express = require("express");
const router = express.Router();

const Controller=require("../controllers/controller.js");

router.post("/register",Controller.register );
router.post("/newbooking",Controller.newbooking);

module.exports = router;