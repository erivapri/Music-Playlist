import React, { useState } from 'react';
import axios from 'axios';

const PlayListCreator = () => {
    const [playlistName, setPlaylistName] = useState("");

    const createPlaylist = () => {
        if (playlistName) {
            axios.post('http://localhost:5000/api/playlists', { name: playlistName, songs: [] })
                .then(response => {
                    console.log("Playlist created:", response.data);
                    setPlaylistName("");
                })
                .catch(error => console.error(error));
        }
    };

    return (
        <div>
            <h2>Create a Playlist</h2>
            <input
                type="text"
                placeholder="Playlist name"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
            />
            <button onClick={createPlaylist}>Create</button>
        </div>
    );
};

export default PlayListCreator;
