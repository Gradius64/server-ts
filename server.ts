


// Import the routes




// TODO: Serve static files of entire client dist folder






// Define the path to the client dist folder
const distPath = path.join(__dirname, 'dist');

// Serve static files from the dist folder


// Serve the index.html file for any other routes (optional)

  


// Start the server



// Serve static files from the 'dist' directory


// Handle all other requests by sending the index.html file


// TODO: Implement middleware for parsing JSON and urlencoded form data
const express = require('express');
const app = express();


// Middleware for parsing JSON
app.use(express.json());

// Middleware for parsing urlencoded form data
app.use(express.urlencoded({ extended: true }));

// Example route


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.use(({ extended: true }))
// TODO: Implement middleware to connect the routes
const routes = 0;

app.use(routes); // Prefix all routes with /api


// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
