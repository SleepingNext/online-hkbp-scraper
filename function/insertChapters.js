const {ChapterModel} = require("../model");

module.exports = async function insertChapters() {
    const chapters = await ChapterModel.find({});
    if (chapters.length === 0) {
        console.log("Inserting Chapters...");
        await ChapterModel.insertMany([], null);
        console.log("Done inserting Chapters.");
    }
}