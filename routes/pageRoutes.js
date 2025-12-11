// routes/pageRoutes.js

const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

/* ---------- Public pages (GET) ---------- */
router.get("/", pageController.getLandingPage);
router.get("/home", pageController.getLandingPage);

module.exports = router;
