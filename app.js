// app.js

const path = require("path");
require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const logger = require("./utils/logger");

/* ------------ Routes ------------- */
const pageRoutes = require("./routes/pageRoutes");
const authRoutes = require("./routes/authRoutes");

/* ---------- Initialize App ---------- */
const app = express();
const PORT = process.env.PORT || 3000;

/* ---------- App Level Middleware ---------- */
/* ---------- Parsers & static ---------- */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

/* ---------- View engine ---------- */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* ---------- Use layout ---------- */
app.use(expressLayouts);

/* ---------- Request logging ---------- */
app.use((req, res, next) => {
  res.on("finish", () => {
    const message = `${req.method} ${req.originalUrl} ${res.statusCode}`;
    const meta = {
      user: req.user ? req.user.email : "Guest",
      timestamp: new Date().toISOString(),
    };
    logger.info(message, meta);
  });
  next();
});

/* ---------- Mount Routes ---------- */
app.use("/", pageRoutes);
app.use("/", authRoutes);

/* ---------- Start Server ---------- */
app.listen(PORT, () =>
  logger.info(`MyMedicare UI running on https://localhost:${PORT}`)
);
