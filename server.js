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

// This is our base URL. This will allow us to use this proxy API for multiple different baskets, therefore, we make it generic to make it reusable
const PANTRY_API_BASE_URL = `https://getpantry.cloud/apiv1/pantry/${PANTRY_ID}/basket`;

app.use(cors());
app.use(express.json()); // This will handle our JSON calls

// We serve the HTML page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// We also serve the icon file
app.get("/favicon.ico", (req, res) => {
    res.sendFile(path.join(__dirname, "favicon.ico"));
});

// Generic handler for GET request to fect data from specific basket
app.get("/:basketName", async(req, res) => {
    const {basketName} = req.params;
    try {
        const response = await axios.get(`${PANTRY_API_BASE_URL}/${basketName}`);
        res.json(response.data); // We return the JSON of our response data
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Generic handler for POST request to add new data from specific basket
app.post("/:basketName", async(req, res) => {
    const {basketName} = req.params;
    const newData = req.body;  // We add the newData for the new data
    try {
        const response = await axios.post(`${PANTRY_API_BASE_URL}/${basketName}`, newData); // Add new data
        res.json(response.data); // We return the JSON of our response data
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Generic handler for PUT request to update data in a specific basket
app.put("/:basketName", async(req, res) => {
    const {basketName} = req.params;
    const newData = req.body;  // We add the newData for the new data
    try {
        const response = await axios.put(`${PANTRY_API_BASE_URL}/${basketName}`, newData); // Update data
        res.json(response.data); // We return the JSON of our response data
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Generic handler for DELETE request to delete a specific basket
app.delete("/:basketName", async(req, res) => {
    const {basketName} = req.params;
    try {
        const response = await axios.delete(`${PANTRY_API_BASE_URL}/${basketName}`);
        res.json({ message: `Basket ${basketName} cleared successfully.` }); // We return the JSON of our response data
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Create a basic EXPRESS app
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});