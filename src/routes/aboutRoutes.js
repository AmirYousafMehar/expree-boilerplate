const express = require('express');

const { createAbout } = require("../controllers/aboutController");
const router = express.Router();

router.post('/create', createAbout);

module.exports = router;