const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors"); // Import the cors package

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize the app
const app = express();

// Middleware for JSON parsing
app.use(express.json());
// Enable CORS with default options
app.use(
  cors({
    origin: "*", // Replace with your frontend's URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: false, // Allow credentials if needed
  })
);

// Routes
app.use("/api", require("./routes/recipeRoutes"));
app.use("/api", require("./routes/menuRoutes"));
app.use("/api", require("./routes/shoppingListRoutes"));

// Listen to server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
