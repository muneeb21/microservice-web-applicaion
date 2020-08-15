const express = require("express");
const router = express.Router();

const Controller=require("../controllers/controller.js");

router.post("/register",Controller.register );
router.post("/newbooking",Controller.newbooking);
router.get("/listing",Controller.listing);
module.exports = router;