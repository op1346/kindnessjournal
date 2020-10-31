const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema({
  entry: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;