const sqlite3 = require('sqlite3').verbose();     // connect sqlite3

// Connect to database
const db = new sqlite3.Database('./db/election.db', err => {
  if (err) {
    return console.error(err.message);
  }

  console.log('Connected to the election database.');
});

module.exports = db;  // this goes AFTER what's being exported