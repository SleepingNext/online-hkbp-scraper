const axios = require("axios");
const {BookModel, ChapterModel, VerseModel} = require("../model");
const {ObjectID} = require("bson");
const {SOURCE_URL} = require("../config");

module.exports = async function scrapChaptersAndVerses() {
    const books = await BookModel.find({});
    const chapters = await ChapterModel.find({});
    const verses = await VerseModel.find({});

    if (books.length !== 0 && chapters.length === 0 && verses.length === 0) {
        console.log("Scraping Chapters and Verses...");

        for (const book of books) {
            for (let i = 1; i <= book.numberOfChapters; i++) {
                console.log(`${book.name} Pasal ${i}.`);

                const response = await axios.post(SOURCE_URL, {
                    "operationName": null,
                    "variables": {},
                    "query": `{
                        passages(book: "${book.name}", version: tb, chapter: ${i}) {
                            verses {
                                content
                                type
                            }
                        }
                    }`
                });

                const verses = response.data.data.passages.verses, versesToBeInserted = [];
                let versesCounter = 1;
                for (let j = 0; j < verses.length; j++) {
                    versesToBeInserted.push({
                        verse: (verses[j].type === "content") ? versesCounter : null, content: verses[j].content,
                        type: verses[j].type, order: j,
                    });

                    if (verses[j].type === "content") versesCounter++;
                }

                const chapter = await ChapterModel.create({
                    _id: new ObjectID(), chapter: i, numberOfVerses: versesCounter, book: book._id,
                });

                versesToBeInserted.forEach(function (verseToBeInserted) {
                    verseToBeInserted.chapter = chapter._id;
                });

                await VerseModel.insertMany(versesToBeInserted);
            }
        }

        console.log("Done scraping Chapters and Verses.");
    }
}