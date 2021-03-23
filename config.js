const dotenv = require("dotenv");

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const SOURCE_URL = process.env.SOURCE_URL;

module.exports = {MONGODB_URI, SOURCE_URL};