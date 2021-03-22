const mongoose = require("mongoose");

const VerseSchema = new mongoose.Schema(
    {
        verse: Number,
        content: String,
        type: String,
        chapter: {type: mongoose.Schema.Types.ObjectId, ref: 'Chapter'},
    },
);

module.exports = mongoose.model("Verse", VerseSchema, "Verse");