const {ChapterModel, VerseModel} = require("../model");

module.exports = async function scrapChaptersAndVerses() {
    const chapters = await ChapterModel.find({});
    const verses = await VerseModel.find({});
    if (chapters.length === 0 && verses.length === 0) {
        console.log("Scraping Chapters and Verses...");

        
        await ChapterModel.insertMany([], null);
        console.log("Done scraping Chapters and Verses.");
    }
}