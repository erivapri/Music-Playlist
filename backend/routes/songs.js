const express = require('express');
const router = express.Router();
const songs = require('../data/songs.json'); // Import songs from the JSON file

// Route to get all songs
router.get('/', (req, res) => {
    res.json(songs);
});

module.exports = router;
