const express = require("express");
const router = express.Router();

const Controller=require("../controllers/user_controller.js")

router.get("/register", Controller.register);
router.get("/listing",Controller.listing);

module.exports = router;