import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SongList = () => {
    const [songs, setSongs] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get('http://localhost:5000/api/songs')
            .then(response => setSongs(response.data))
            .catch(error => console.error(error));
    }, []);

    const filteredSongs = songs.filter(song =>
        song.title.toLowerCase().includes(search.toLowerCase())
    );

    const addToPlaylist = (song) => {
        const playlistId = prompt("Enter the playlist ID:");
        if (!playlistId) return; // Si el usuario cancela, no hacemos nada

        axios.put(`http://localhost:5000/api/playlists/${playlistId}`, { song })
            .then(response => {
                console.log("Song added to playlist:", response.data);
                alert(`"${song.title}" added to Playlist ID: ${playlistId}`);
            })
            .catch(error => {
                console.error(error);
                alert("Failed to add the song. Please check the playlist ID.");
            });
    };

    return (
        <div>
            <h2>Available Songs</h2>
            <input
                type="text"
                placeholder="Search songs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredSongs.map(song => (
                    <li key={song.id}>
                        {song.title} by {song.artist}
                        <button onClick={() => addToPlaylist(song)}>Add to Playlist</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongList;
