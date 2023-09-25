const express = require("express");
const productRoutes = require("./routes/productRoute");
const errorMiddleware = require("./middleware/error");
const app = express();

app.use(express.json());

// Routes
app.use("/api", productRoutes);

// Error Middleware
app.use(errorMiddleware);

module.exports = app;
