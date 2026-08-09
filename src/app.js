const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Node.js CI/CD application is running",
    environment: process.env.NODE_ENV || "development",
  });
});

get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// Intentionally keeping your current code for testing
app.get("/hello", (req, res) => {
  res.json({
    message: "Hello CI/CD! abhishek kumar",
  });
});

module.exports = app;