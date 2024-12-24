const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const songsRoutes = require('./routes/songs'); // Song routes
const playlistsRoutes = require('./routes/playlists'); // Playlist routes

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory list for playlists
let playlists = [];

// Initial test
app.get('/', (req, res) => {
    res.send('Backend is working!');
});

// Use the song routes
app.use('/api/songs', songsRoutes);

// Use the playlist routes
app.use('/api/playlists', playlistsRoutes);

// Route to add a song to a playlist
app.put('/api/playlists/:id', (req, res) => {
    const { id } = req.params; // Playlist ID
    const { song } = req.body; // Song sent in the request body

    // Find the playlist by ID
    const playlist = playlists.find(p => p.id === parseInt(id));
    if (playlist) {
        playlist.songs.push(song); // Add the song to the playlist
        res.json(playlist); // Return the updated playlist
    } else {
        res.status(404).send('Playlist not found'); // Error if the playlist does not exist
    }
});

const PORT = 5002; // Server port
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

app.delete('/api/playlists/:id/songs/:songId', (req, res) => {
    const { id, songId } = req.params; // Get the playlist ID and the song ID

    // Find the playlist with the given ID
    const playlist = playlists.find(p => p.id === parseInt(id));
    if (playlist) {
        // Filter songs to remove the one matching the songId
        playlist.songs = playlist.songs.filter(song => song.id !== parseInt(songId));
        res.json(playlist); // Return the updated playlist
    } else {
        res.status(404).send('Playlist not found'); // Error if the playlist is not found
    }
});
