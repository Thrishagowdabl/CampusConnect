const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  postedBy: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Discussion', discussionSchema);
