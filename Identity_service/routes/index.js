const express = require("express");
const router = express.Router();

const Controller=require("../controllers/user_controllers.js")

router.get("/register", Controller.register);
router.get("/listing",Controller.listing);
router.get('/check',Controller.checkUsers);

module.exports = router;