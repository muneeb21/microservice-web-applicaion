const express = require("express");
const router = express.Router();

const Controller=require("../controllers/controller.js")

router.get("/register", Controller.register);


module.exports = router;