const express = require("express");

const scrableController= require("../controllers/scrable");

const router = express.Router();

router.post('/check-word',scrableController.checkWord);

router.get('/get-word',scrableController.createWord);



module.exports = router;