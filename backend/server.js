const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const User = require("./models/User");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const { sequelize, connectDB } = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Backend API is running...");
});

connectDB();

sequelize.sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.log("Sync error:", err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});