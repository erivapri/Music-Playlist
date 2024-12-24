import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlaylistViewer = () => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        // Obtén las playlists desde el backend
        axios.get('http://localhost:5000/api/playlists')
            .then(response => setPlaylists(response.data))
            .catch(error => console.error(error));
    }, []);

    const deleteSong = (playlistId, songId) => {
        axios.delete(`http://localhost:5000/api/playlists/${playlistId}/songs/${songId}`)
            .then(response => {
                // Actualiza las playlists después de eliminar la canción
                setPlaylists(playlists.map(p =>
                    p.id === playlistId ? response.data : p
                ));
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Playlists</h2>
            {playlists.map(playlist => (
                <div key={playlist.id} style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
                    <h3>{playlist.name}</h3>
                    <ul>
                        {playlist.songs.map(song => (
                            <li key={song.id}>
                                {song.title} by {song.artist}
                                <button onClick={() => deleteSong(playlist.id, song.id)}>
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PlaylistViewer;
