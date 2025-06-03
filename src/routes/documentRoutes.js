const express = require('express');
const multer = require('multer');

const { handleDocumentUpload } = require("../controllers/documentController");
const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Save temp file
router.post('/upload-document', upload.single('file'), handleDocumentUpload);

module.exports = router;