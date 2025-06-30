// Import required modules
const express = require('express')         // Express framework for building web server
const mysql = require('mysql')             // MySQL module to connect and query MySQL databases
const cors = require('cors')               // Middleware to enable Cross-Origin Resource Sharing
const path = require('path')               // Node.js utility to handle file and directory paths

// Initialize the Express app
const app = express()

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")))

// Enable CORS to allow requests from different origins
app.use(cors())

// Parse incoming JSON requests
app.use(express.json())

// Define the port number the server will listen on
const port = 5000

// Set up MySQL database connection
const db = mysql.createConnection({
    host: "localhost",         // MySQL host (usually localhost for development)
    user: "root",              // MySQL username
    password: "",              // MySQL password (empty by default on XAMPP/LAMP)
    database: "taskyte"        // Name of the database to connect to
})

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log("listening")   // Log a message to confirm server is running
})
