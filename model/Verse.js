const mongoose = require("mongoose");

const VerseSchema = new mongoose.Schema(
    {
        verse: Number,
        content: String,
        type: String,
        order: Number,
        chapter: {type: mongoose.Schema.Types.ObjectId, ref: 'Chapter'},
    },
);

VerseSchema.index({
        verse: 1, content: 1, type: 1, chapter: 1,
}, {
        unique: true,
});

module.exports = mongoose.model("Verse", VerseSchema, "Verse");