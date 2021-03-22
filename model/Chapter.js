const mongoose = require("mongoose");

const ChapterSchema = new mongoose.Schema(
    {
        chapter: Number,
        book: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'},
        numberOfVerses: Number,
    },
);

module.exports = mongoose.model("ChapterModel", ChapterSchema, "Chapter");