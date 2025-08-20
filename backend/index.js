require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const warningRoutes = require("./routes/warningRoutes");
const terminationRoutes = require("./routes/terminationRoutes");
const ratingRoutes = require("./routes/ratingRoutes");
const badgeRoutes = require("./routes/badgeRoutes");
const counterRoutes = require("./routes/counterRoutes");
const accessRoutes = require("./routes/accessRoutes");   // ✅ fixed name

const app = express();

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("🔥 SlayerSoft Backend is running...");
});

// Routes
app.use("/users", userRoutes);
app.use("/warnings", warningRoutes);
app.use("/termination", terminationRoutes);
app.use("/ratings", ratingRoutes);
app.use("/badges", badgeRoutes);
app.use("/counters", counterRoutes);
app.use("/slayer-access", accessRoutes);   // ✅ fixed name

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

module.exports = app;
