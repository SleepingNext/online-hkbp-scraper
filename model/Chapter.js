const mongoose = require("mongoose");

const ChapterSchema = new mongoose.Schema(
    {
        chapter: Number,
        numberOfVerses: Number,
        book: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'},
    },
);

ChapterSchema.index({
    chapter: 1, book: 1,
}, {
    unique: true,
});


module.exports = mongoose.model("ChapterModel", ChapterSchema, "Chapter");