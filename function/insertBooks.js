const {BookModel} = require("../model");

module.exports = async function insertBooks() {
    const books = await BookModel.find({});
    if (books.length === 0) {
        console.log("Inserting Books...");
        await BookModel.insertMany([
            {
                name: "Kejadian",
                shortName: "Kej",
                numberOfChapters: 50,
            },
            {
                name: "Keluaran",
                shortName: "Kel",
                numberOfChapters: 40,
            },
            {
                name: "Imamat",
                shortName: "Im",
                numberOfChapters: 27,
            },
            {
                name: "Bilangan",
                shortName: "Bil",
                numberOfChapters: 36,
            },
            {
                name: "Ulangan",
                shortName: "Ul",
                numberOfChapters: 34,
            },
            {
                name: "Yosua",
                shortName: "Yos",
                numberOfChapters: 24,
            },
            {
                name: "Hakim-hakim",
                shortName: "Hak",
                numberOfChapters: 21,
            },
            {
                name: "Rut",
                shortName: "Rut",
                numberOfChapters: 4,
            },
            {
                name: "1 Samuel",
                shortName: "1Sam",
                numberOfChapters: 31,
            },
            {
                name: "2 Samuel",
                shortName: "2Sam",
                numberOfChapters: 24,
            },
            {
                name: "1 Raja-raja",
                shortName: "1Raj",
                numberOfChapters: 22,
            },
            {
                name: "2 Raja-raja",
                shortName: "2Raj",
                numberOfChapters: 25,
            },
            {
                name: "1 Tawarikh",
                shortName: "1Taw",
                numberOfChapters: 29,
            },
            {
                name: "2 Tawarikh",
                shortName: "2Taw",
                numberOfChapters: 36,
            },
            {
                name: "Ezra",
                shortName: "Ezr",
                numberOfChapters: 10,
            },
            {
                name: "Nehemia",
                shortName: "Neh",
                numberOfChapters: 13,
            },
            {
                name: "Ester",
                shortName: "Est",
                numberOfChapters: 10,
            },
            {
                name: "Ayub",
                shortName: "Ayb",
                numberOfChapters: 42,
            },
            {
                name: "Mazmur",
                shortName: "Mzm",
                numberOfChapters: 150,
            },
            {
                name: "Amsal",
                shortName: "Ams",
                numberOfChapters: 31,
            },
            {
                name: "Pengkhotbah",
                shortName: "Pkh",
                numberOfChapters: 12,
            },
            {
                name: "Kidung Agung",
                shortName: "Kid",
                numberOfChapters: 8,
            },
            {
                name: "Yesaya",
                shortName: "Yes",
                numberOfChapters: 66,
            },
            {
                name: "Yeremia",
                shortName: "Yer",
                numberOfChapters: 52,
            },
            {
                name: "Ratapan",
                shortName: "Rat",
                numberOfChapters: 5,
            },
            {
                name: "Yehezkiel",
                shortName: "Yeh",
                numberOfChapters: 48,
            },
            {
                name: "Daniel",
                shortName: "Dan",
                numberOfChapters: 12,
            },
            {
                name: "Hosea",
                shortName: "Hos",
                numberOfChapters: 14,
            },
            {
                name: "Yoel",
                shortName: "Yl",
                numberOfChapters: 3,
            },
            {
                name: "Amos",
                shortName: "Am",
                numberOfChapters: 9,
            },
            {
                name: "Obaja",
                shortName: "Ob",
                numberOfChapters: 1,
            },
            {
                name: "Yunus",
                shortName: "Yun",
                numberOfChapters: 4,
            },
            {
                name: "Mikha",
                shortName: "Mi",
                numberOfChapters: 7,
            },
            {
                name: "Nahum",
                shortName: "Nah",
                numberOfChapters: 3,
            },
            {
                name: "Habakuk",
                shortName: "Hab",
                numberOfChapters: 3,
            },
            {
                name: "Zefanya",
                shortName: "Zef",
                numberOfChapters: 3,
            },
            {
                name: "Hagai",
                shortName: "Hag",
                numberOfChapters: 2,
            },
            {
                name: "Zakharia",
                shortName: "Za",
                numberOfChapters: 14,
            },
            {
                name: "Maleakhi",
                shortName: "Mal",
                numberOfChapters: 4,
            },
            {
                name: "Matius",
                shortName: "Mat",
                numberOfChapters: 28,
            },
            {
                name: "Markus",
                shortName: "Mrk",
                numberOfChapters: 16,
            },
            {
                name: "Lukas",
                shortName: "Luk",
                numberOfChapters: 24,
            },
            {
                name: "Yohanes",
                shortName: "Yoh",
                numberOfChapters: 21,
            },
            {
                name: "Kisah Para Rasul",
                shortName: "Kis",
                numberOfChapters: 28,
            },
            {
                name: "Roma",
                shortName: "Rm",
                numberOfChapters: 16,
            },
            {
                name: "1 Korintus",
                shortName: "1Kor",
                numberOfChapters: 16,
            },
            {
                name: "2 Korintus",
                shortName: "2Kor",
                numberOfChapters: 13,
            },
            {
                name: "Galatia",
                shortName: "Gal",
                numberOfChapters: 6,
            },
            {
                name: "Efesus",
                shortName: "Ef",
                numberOfChapters: 6,
            },
            {
                name: "Filipi",
                shortName: "Flp",
                numberOfChapters: 4,
            },
            {
                name: "Kolose",
                shortName: "Kol",
                numberOfChapters: 4,
            },
            {
                name: "1 Tesalonika",
                shortName: "1Tes",
                numberOfChapters: 5,
            },
            {
                name: "2 Tesalonika",
                shortName: "2Tes",
                numberOfChapters: 3,
            },
            {
                name: "1 Timotius",
                shortName: "1Tim",
                numberOfChapters: 6,
            },
            {
                name: "2 Timotius",
                shortName: "2Tim",
                numberOfChapters: 4,
            },
            {
                name: "Titus",
                shortName: "Tit",
                numberOfChapters: 3,
            },
            {
                name: "Filemon",
                shortName: "Flm",
                numberOfChapters: 1,
            },
            {
                name: "Ibrani",
                shortName: "Ibr",
                numberOfChapters: 13,
            },
            {
                name: "Yakobus",
                shortName: "Yak",
                numberOfChapters: 5,
            },
            {
                name: "1 Petrus",
                shortName: "1Ptr",
                numberOfChapters: 5,
            },
            {
                name: "2 Petrus",
                shortName: "2Ptr",
                numberOfChapters: 3,
            },
            {
                name: "1 Yohanes",
                shortName: "1Yoh",
                numberOfChapters: 5,
            },
            {
                name: "2 Yohanes",
                shortName: "2Yoh",
                numberOfChapters: 1,
            },
            {
                name: "3 Yohanes",
                shortName: "3Yoh",
                numberOfChapters: 1,
            },
            {
                name: "Yudas",
                shortName: "Yud",
                numberOfChapters: 1,
            },
            {
                name: "Wahyu",
                shortName: "Why",
                numberOfChapters: 22,
            },
        ], null);
        console.log("Done inserting Books.");
    }
}