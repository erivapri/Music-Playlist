import { Card, CardContent, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

return (
    <div>
        <Typography variant="h4" gutterBottom>Playlists</Typography>
        {playlists.map(playlist => (
            <Card key={playlist.id} variant="outlined" sx={{ marginBottom: 2 }}>
                <CardContent>
                    <Typography variant="h6">{playlist.name}</Typography>
                    <List>
                        {playlist.songs.map(song => (
                            <ListItem
                                key={song.id}
                                secondaryAction={
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => deleteSong(playlist.id, song.id)}
                                    >
                                        Remove
                                    </Button>
                                }
                            >
                                <ListItemText primary={`${song.title} by ${song.artist}`} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        ))}
    </div>
);
