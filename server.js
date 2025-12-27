// Import all the packages in server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// Will let us pass env variables from .env file
dotenv.config();

// Create our express application
const app = express();

// We did not add a port in .env file, but when we deploy our app to a service like Vercel or Render, they may assign a port, but if not then we will have port 3000 
const PORT = process.env.PORT || 3000;

// Assign our PANTRY_ID from .env
const PANTRY_ID = process.env.PANTRY_ID;

// We serve the HTML page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// We also serve the icon file
app.get("/favicon.ico", (req, res) => {
    res.sendFile(path.join(__dirname, "favicon.ico"));
});

// Create a basic EXPRESS app
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});