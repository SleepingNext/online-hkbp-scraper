const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
    {
        name: String,
        shortName: String,
        numberOfChapters: Number,
    },
);

module.exports = mongoose.model("BookModel", BookSchema, "Book")