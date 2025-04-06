// backend/db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.resolve(__dirname, 'campusconnect.db'), (err) => {
  if (err) console.error('Failed to connect to database:', err.message);
  else console.log('Connected to SQLite database');
});

module.exports = db;
