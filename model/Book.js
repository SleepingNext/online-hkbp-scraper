const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
    {
        name: String,
        shortName: String,
        numberOfChapters: Number,
    },
);

BookSchema.index({
    name: 1, shortName: 1,
}, {
    unique: true,
});

module.exports = mongoose.model("BookModel", BookSchema, "Book");