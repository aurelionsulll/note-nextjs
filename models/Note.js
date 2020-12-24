const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true,'Error title type'],
        unique: true,
        trim: true,
        maxlength: [40,'Error title length']
    },
    description: {
        type: String,
        require: [true,'Error title type'],
        maxlength: [200,'Error title length']
    }
})

module.exports = mongoose.models.Note || mongoose.model('Note',NoteSchema);