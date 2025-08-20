// backend/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const warningRoutes = require("./routes/warningRoutes");
const terminationRoutes = require("./routes/terminationRoutes");
const ratingRoutes = require("./routes/ratingRoutes");
const badgeRoutes = require("./routes/badgeRoutes");

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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});


// Export the app for testing purposes
module.exports = app;     
// This code sets up an Express server with various routes for handling user-related operations, warnings, terminations, ratings, and badges in a hypothetical HR management system. It uses environment variables for configuration and includes CORS support for cross-origin requests. The server listens on a specified port and responds to a root route with a confirmation message.