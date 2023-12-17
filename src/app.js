const express = require("express");
const app = express();
app.use(express.json());

const userRoutes = require("../routes/userRoutes");
const userProfileRoutes = require("../routes/userProfileRoutes");
app.get("/api/v1/low-inventory", (req, res) => {
  const p = process.env.DATABASE_URL;
  res.json({ message: "Get low inventory products", type: p });
});
app.use("/api/v1", userRoutes);
app.use("/api/v1", userProfileRoutes);
module.exports = app;
