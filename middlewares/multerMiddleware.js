const multer = require("multer");
const DataParser = require("datauri/parser");
const path = require("path");
const storage = multer.memoryStorage();

const upload = multer({ storage });
const parser = new DataParser();
const formatImage = (file) => {
  const fileExtenstion = path.extname(file.originalname).toString();
  return parser.format(fileExtenstion, file.buffer).content;
};
module.exports = { formatImage, upload };
