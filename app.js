const express = require('express');
const { MongoClient } = require('mongodb');

require('dotenv').config();
// Connection URL
const url = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;

// Database Name
const dbName = 'recipeManager';

// Create a new Express application
const app = express();

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// connect to the MongoDb server
client.connect((err) => {
    if (err) {
    console.error('Failed to connect to MongoDB:', err);
    return;
    }
    console.log('Connected to MongoDB.');

    // Start app logic here
});

// Set up routes and listen for incoming requests
app.listenerCount(3000, () => {
    console.log('Server started on port 3000');
});