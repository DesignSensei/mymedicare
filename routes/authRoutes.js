// routes/authRoutes.js

const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

/* ---------- Public pages (GET) ---------- */
router.get("/login", authController.getLogin);
router.get("/signup", authController.getSignup);
router.get("/reset-password", authController.getResetPassword);
router.get("/new-password", authController.getNewPassword);
router.get("/two-factor", authController.getTwoFactor);

/* ---------- Auth actions (POST) ---------- */

module.exports = router;
