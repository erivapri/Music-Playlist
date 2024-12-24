const express = require('express');
const router = express.Router();

let playlists = []; // Structure to store playlists

// Route to get all playlists
router.get('/', (req, res) => {
    res.json(playlists);
});

// Route to create a new playlist
router.post('/', (req, res) => {
    const { name, songs } = req.body;
    const newPlaylist = { id: playlists.length + 1, name, songs: songs || [] };
    playlists.push(newPlaylist);
    res.json(newPlaylist);
});

// Export the router
module.exports = router;
