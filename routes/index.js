const express = require("express");

const userRoutes = require('./user.js');
const accountRoutes = require('./account.js');

const router = express.Router();

router.get("/api", userRoutes)
router.get("/api", userRoutes)

module.exports = router;