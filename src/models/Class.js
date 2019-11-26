const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
    instructor: String,
    vehicle: String,
    type: String,
    date: Date,
    done: Boolean,
});

module.exports = mongoose.model('Class', ClassSchema);