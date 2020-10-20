const express = require('express');        // import express
const db = require('./db/database');       // import database functions

const PORT = process.env.PORT || 3001;     // add PORT designation
const app = express();                     // add app expression

const apiRoutes = require('./routes/apiRoutes');  // import apiRoutes

const inputCheck = require('./utils/inputCheck'); // import input check module

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use API routes
app.use('/api', apiRoutes);

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.on('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});