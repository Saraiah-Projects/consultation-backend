const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON requests

// Simple route for testing
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Define your API routes here
// e.g., app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);
